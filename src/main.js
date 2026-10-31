import './style.css'

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

/* Mobile navigation -------------------------------------------------------- */

const toggle = document.querySelector('.nav__toggle')
const navList = document.querySelector('.nav__list')

const setNav = (open) => {
  toggle.setAttribute('aria-expanded', String(open))
  navList.dataset.open = String(open)
}

toggle.addEventListener('click', () => {
  setNav(toggle.getAttribute('aria-expanded') !== 'true')
})

navList.addEventListener('click', (e) => {
  if (e.target.closest('a')) setNav(false)
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setNav(false)
    toggle.focus()
  }
})

// Leaving mobile width with the drawer open would otherwise strand data-open="true".
matchMedia('(min-width: 861px)').addEventListener('change', (e) => {
  if (e.matches) setNav(false)
})

/* Active nav link ---------------------------------------------------------- */

// The band is the middle 5% of the viewport: whichever section crosses it is "current".
const spy = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const link = document.querySelector(`.nav__link[href="#${entry.target.id}"]`)
    // Sections with no nav link (e.g. #interests) leave the current highlight alone.
    if (!entry.isIntersecting || !link) continue
    document
      .querySelectorAll('.nav__link[aria-current]')
      .forEach((l) => l.removeAttribute('aria-current'))
    link.setAttribute('aria-current', 'true')
  }
}, { rootMargin: '-45% 0px -50% 0px' })

document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s))

/* Scroll reveal ------------------------------------------------------------ */

if (reduceMotion) {
  // .reveal has no transition under reduced motion, so just mark everything done.
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
} else {
  const reveal = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  }, { rootMargin: '0px 0px -10% 0px' })

  document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))
}

/* Lightbox — native <dialog>, so focus trapping and focus restore are free. */

const items = [...document.querySelectorAll('.gallery__item')]
const box = document.querySelector('.lightbox')

if (items.length && box) {
  const full = box.querySelector('img')
  const title = box.querySelector('.lightbox__text strong')
  const meta = box.querySelector('.lightbox__text span')
  let index = 0

  const show = (i) => {
    index = (i + items.length) % items.length
    const item = items[index]
    full.src = item.dataset.full
    full.alt = item.querySelector('img').alt
    title.textContent = item.querySelector('.gallery__caption strong').textContent
    meta.textContent = item.querySelector('.gallery__caption span').textContent
  }

  items.forEach((item, i) => item.addEventListener('click', () => { show(i); box.showModal() }))

  box.addEventListener('click', (e) => {
    const step = e.target.closest('[data-step]')
    if (step) return show(index + Number(step.dataset.step))
    // Anything outside the dialog's own box is the backdrop.
    if (e.target.closest('[data-close]') || e.target === box) box.close()
  })

  box.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1)
    if (e.key === 'ArrowRight') show(index + 1)
  })

  // Single-item galleries have nothing to page between.
  if (items.length < 2) box.querySelectorAll('[data-step]').forEach((b) => b.remove())
}

/* Footer year -------------------------------------------------------------- */

document.getElementById('year').textContent = String(new Date().getFullYear())
