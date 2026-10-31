# Saptak Das — personal website

Live at **https://saptakdas08.github.io**

Plain HTML, CSS and JavaScript. [Vite](https://vite.dev) is the only dependency, and it
is only used to run the dev server and build the final files. There is no framework and
no backend, so nothing can break while you are not looking.

## Running it on your computer

```bash
npm install     # once
npm run dev     # then open the address it prints, usually http://localhost:5173
```

Leave `npm run dev` running while you edit. The page updates as you save.

Press `Ctrl+C` in that terminal to stop it.

## Changing the text

All the text lives in **`index.html`**. Open it in any editor and look for the comments
that start with `EDIT` — each one tells you what the lines underneath are for.

```html
<!-- EDIT: your tagline. -->
<p class="hero__tagline">Curious mind. Creative perspective.</p>
```

Everything that is still waiting for your words is marked two ways: a dashed violet
border and a small **PLACEHOLDER** badge. When you replace one with real content:

1. Delete the `<span class="placeholder__badge">Placeholder</span>` line.
2. Remove the word `placeholder` from the element's `class="..."`.

The badge and the dashed border then disappear. Nothing on the published site should
still say PLACEHOLDER.

## Adding your artwork

1. Photograph the drawing — `public/images/artworks/raw/README.md` has a short guide
   for getting a clean photo with a phone.
2. Put the photo in `public/images/artworks/raw/`.
3. Run:

   ```bash
   npm run images
   ```

   This makes two web-sized copies of each photo and removes the EXIF data, which on a
   phone photo normally includes the GPS location where it was taken.

4. Open `index.html`, find the gallery `EDIT` comment, and copy one `<li>` block per
   artwork. Set the title, the medium, and — importantly — the `alt` text, which
   describes the drawing for anyone who cannot see it.
5. Delete the three placeholder tiles and the grey empty-state box underneath them.

Your original photos stay on your computer. They are not uploaded and not committed.

## Changing the links

In the **Contact** section of `index.html`, an unset link is a `<span>`, not an `<a>` —
so the page never contains a link that goes nowhere. To make one real, change the
`<span>` to an `<a>` and give it an address:

```html
<!-- before -->
<span class="contact__link contact__link--empty">Email — not set yet</span>

<!-- after -->
<a class="contact__link" href="mailto:you@example.com">you@example.com</a>
```

Delete any `<li>` you do not want. **This page is public** — only put an email address
here that you are happy for anyone on the internet to see.

## Publishing your changes

The site redeploys itself. Commit and push to `main`, and GitHub Actions rebuilds and
publishes within a minute or two:

```bash
git add -A
git commit -m "Add three new portraits"
git push
```

Progress is visible under the repository's **Actions** tab.

## The share image

`public/og.png` is the preview card shown when someone pastes a link to the site into
a chat app. It is rendered from `tools/og-card.html`. To change it, edit that file,
run `npm run dev`, open `http://localhost:5173/tools/og-card.html`, and screenshot it
at exactly 1200×630 into `public/og.png`.

## Where things are

```text
index.html                     all the text and structure
src/style.css                  colours, fonts, spacing, every component
src/main.js                    menu, scroll highlight, gallery lightbox
public/images/artworks/        web-sized artwork (generated)
public/images/artworks/raw/    your original photos (stays on your computer)
public/images/games/           your own game screenshots
scripts/optimize-images.sh     what `npm run images` runs
tools/og-card.html             source for the share image
docs/                          the original plan and the build plan
```

### Design system

Colours, fonts and spacing are defined once, at the top of `src/style.css`, as custom
properties. Changing `--accent` there changes the accent colour everywhere on the site.

### Accessibility

The site is keyboard navigable, meets WCAG AA contrast, and turns off its animations
for anyone whose system is set to reduce motion. If you change the colours, check the
new pair still has enough contrast before publishing.
