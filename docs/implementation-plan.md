# Implementation plan — Saptak Das portfolio

Derived from `saptak_das_portfolio_plan.md`. That document is the spec; this one records
the decisions it left open and the build order.

## Decisions taken

| Question | Decision | Why |
|---|---|---|
| Page structure | Single `index.html`, six anchored sections | Matches §5 of the spec. Nav and footer exist once. |
| Content | Labelled placeholders throughout | Spec's accuracy rules — nothing invented. |
| Editing model | Plain HTML with `<!-- EDIT -->` markers | Content works without JS, good for search engines, no render layer. |
| Hero motif | Static inline SVG (grid + constellation + one equation) | Zero runtime cost, nothing to disable for reduced motion. |
| Scaffolding | Hand-written `package.json` + `npm i -D vite` | `npm create vite` ships a counter demo that would be deleted immediately. |
| Dependencies | `vite` only | Spec: avoid unnecessary dependencies. |
| Hosting | Public repo `SaptakDas08/SaptakDas08.github.io`, GitHub Pages via Actions | Free, no third-party account. Pages refuses private repos on the free plan, and the published site is public either way. |
| Site URL | `https://saptakdas08.github.io` | A user-site repo deploys at the domain root, so Vite needs no `base` setting and no config file at all. |
| Contact | Placeholder email plus social links | Chosen over a form: GitHub Pages is static, so any form needs a third party that would read every message. |
| Share card | Open Graph tags plus a rendered 1200×630 PNG | Shared links currently show a bare URL. Rendered in headless Chrome from an HTML source kept in the repo. |
| Image prep | `scripts/optimize-images.sh`, run via `npm run images` | ImageMagick 6.9.12 with libwebp 1.3.2 is already installed, so automation costs zero new dependencies. |
| Artwork entry | Title, medium tag, description, descriptive alt text | Alt text that describes the drawing serves screen readers and image search; a repeated title serves neither. |
| Gaming | Cards with an image slot for Saptak's own screenshots | Own captures are fine to publish; publisher key art is not. |

## File structure

```text
saptak-portfolio/
├── index.html                      # all six sections, semantic, EDIT-marked
├── package.json                    # one devDependency: vite
├── .gitignore
├── README.md                       # edit text, add artwork, change links, deploy
├── .github/workflows/deploy.yml    # build + publish to GitHub Pages on push
├── scripts/optimize-images.sh      # raw photos → 1600px WebP + 600px thumbnail
├── tools/og-card.html              # source for the share image, re-renderable
├── public/
│   ├── favicon.svg
│   ├── og.png                      # 1200×630 share card
│   └── images/
│       ├── artworks/
│       │   └── raw/README.md       # photography guide, at the drop point
│       └── games/
├── src/
│   ├── style.css                   # tokens, layout, components
│   └── main.js                     # nav toggle, lightbox, scroll reveal
└── docs/
    ├── saptak_das_portfolio_plan.md
    └── implementation-plan.md
```

No `vite.config.js`. Vite's defaults already match this layout, and a user-site repo
publishes at the domain root, so there is no `base` path to configure.

## Design system

Defined once as CSS custom properties in `:root`.

**Colour** — deep navy-black base, electric blue accent, violet used sparingly for
secondary emphasis only.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#070A12` | page background |
| `--surface` | `#0E1422` | cards |
| `--border` | `rgba(255,255,255,.08)` | hairlines |
| `--text` | `#E8ECF5` | body text (~15:1 on `--bg`) |
| `--text-dim` | `#9AA7BF` | secondary text (~8:1) |
| `--accent` | `#4D9FFF` | links, primary buttons, focus ring |
| `--accent-2` | `#A78BFA` | occasional second accent, never body text |

All text pairs meet WCAG AA; large display text meets AAA.

**Type** — Fraunces (variable serif) for headings, Inter for body, both from Google Fonts
with `preconnect` and `font-display: swap`. Section eyebrows and equations use the system
monospace stack — no third font to download. Swapping either family is a one-line change.

**Spacing** — a 4px-based scale, `--wrap: 1120px` content width, `--measure: 68ch` for prose.
Sections use `padding-block: clamp(4rem, 10vw, 8rem)`.

**Components** — `.btn` (primary / ghost), `.card`, `.eyebrow` (mono caps with an index
number, e.g. `02 — About`), `.tag`, `.placeholder` (dashed border plus a visible badge so
unfinished content is never mistaken for real content).

## JavaScript

One file, roughly 90 lines, no dependencies.

1. **Nav toggle** — mobile menu button with `aria-expanded`; closes on link click, Escape, and resize past the breakpoint.
2. **Active section highlight** — IntersectionObserver marks the current nav link with `aria-current`.
3. **Scroll reveal** — the same observer adds `.is-visible`. Skipped entirely when `prefers-reduced-motion: reduce` matches, so no animation is ever queued.
4. **Lightbox** — native `<dialog>`. `showModal()` provides focus trapping, Escape to close, backdrop, and focus restore with no library. Arrow keys move between artworks.

Smooth scrolling is `scroll-behavior: smooth` in CSS, inside a reduced-motion guard. No JS.

## Image pipeline

`public/images/artworks/raw/` holds untouched phone photos and is git-ignored. Running
`npm run images` writes `<name>.webp` at 1600px and `<name>-thumb.webp` at 600px into
`public/images/artworks/`, printing before and after sizes so the saving is visible. The
gallery grid loads thumbnails; the lightbox loads the full image only when opened.

The raw folder's README carries the photography guide: indirect daylight, no flash, phone
square-on to the paper, crop to the paper edge, tap the drawing to set focus and white
balance. It sits there because that is the folder Saptak opens when adding new work.

## Build stages

Each stage ends with the dev server running and the page checked before the next starts.

**Stage 1 — Initialise.** `package.json`, `npm i -D vite`, `.gitignore`, minimal `index.html`.
Confirm `npm run dev` serves the page.

**Stage 2 — Foundation.** `style.css` design system. Responsive header and nav. Hero with
the SVG motif, name, tagline, two calls to action. Four interest cards. About section.
Verify at 360px, 768px and 1280px.

**Stage 3 — Sections.** Physics & Mathematics (three plus three placeholder cards, with
personal notes visually distinguished from established facts). Gallery with placeholder
tiles, empty-state text and the `<dialog>` lightbox. Gaming (three entries with screenshot
slots). Contact with placeholder email and social links.

**Stage 4 — Polish.** Hover and focus states, reveal transitions, `:focus-visible` ring,
skip link. Keyboard-only pass over nav, cards, gallery and lightbox. Verify the
reduced-motion path. Write and test `optimize-images.sh` against a sample image.

**Stage 5 — Quality.** Meta and Open Graph tags; render `og.png`. Real browser check:
console clean, tab order correct, lightbox keyboard controls, mobile and desktop widths,
Lighthouse run. `npm run build` plus `npm run preview` must both be clean.

**Stage 6 — Publish.** `git init`, first commit, `.github/workflows/deploy.yml`. Then stop:
creating the public repo and pushing are outward-facing and need explicit confirmation
first. After approval — create `SaptakDas08/SaptakDas08.github.io`, push, set the Pages
source to GitHub Actions, and verify the live site on desktop and mobile widths.

## Verification

Correctness here is layout, keyboard access and motion behaviour — none of which a unit
test observes. Verification is therefore a driven browser session in Stage 5 (tab through
every control, open and page the lightbox, toggle reduced motion, check the console) plus a
Lighthouse audit, not a test suite. `optimize-images.sh` is the one piece of real logic and
gets checked against a generated sample image in Stage 4. The only non-DOM JavaScript logic
is a one-line wrap-around index.

## Out of scope for v1

No framework, backend, database, CMS, analytics, light theme, service worker, blog, or
sitemap. Each is addable later if a real need appears.

## Known risks

- The share image depends on headless Chrome being available. If it is not, the fallback is Open Graph tags without an image, which degrades to a plain text preview rather than breaking.
- `npm i -D vite` needs registry access, and the fonts need Google Fonts to be reachable. Both are confirmed in Stage 1; a fallback to a system font stack costs one line.
- GitHub Pages serves the site publicly. Nothing private should enter the repo — checked before the Stage 6 commit.
