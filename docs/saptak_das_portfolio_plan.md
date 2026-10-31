# Saptak Das — Personal Portfolio Website Plan

> **Tagline:** Exploring the universe through science, mathematics, art, and imagination.

## 1. Project vision

Build a personal portfolio website for **Saptak Das** that feels like a mix of a personal identity site, a science notebook, and an art gallery. It should communicate curiosity, creativity, and an interest in exploring ideas—not look like a generic résumé template.

The site should introduce Saptak and showcase four main interests:

- Physics
- Mathematics
- Portrait drawing and painting
- Video games

The first version should be simple, polished, fast, responsive, and easy for Saptak to update later.

## 2. Recommended design direction

### Visual identity

- **Overall style:** Minimal, dark, editorial, and science-inspired.
- **Background:** Deep black or navy.
- **Accent colours:** Electric blue with restrained violet accents.
- **Typography:** Elegant display font for headings and a clean, readable font for body text.
- **Layout:** Spacious sections, strong typography, restrained cards, and clear navigation.
- **Motion:** Subtle transitions, gentle hover states, and limited scroll animations. Avoid effects that make the site slow or distracting.

### Visual ideas

- A subtle mathematical or physics-inspired graphic in the homepage hero.
- Small equation or constellation-like details used as decoration, not as clutter.
- A clean, image-focused portrait artwork gallery.
- Interest cards linking to the relevant sections.
- A consistent design system for colours, spacing, typography, buttons, and cards.

### Design priorities

1. The website must look good on both desktop and mobile.
2. Text and artwork must remain readable and accessible.
3. Animations should respect reduced-motion preferences.
4. Avoid excessive gradients, glowing effects, and unnecessary visual clutter.
5. Use Saptak's real work and real interests; do not invent credentials or accomplishments.

## 3. Site map and section requirements

### 3.1 Home

Purpose: Introduce Saptak immediately and give visitors a clear path through the site.

Include:
- Name: **Saptak Das**
- A short tagline, such as: **“Curious mind. Creative perspective.”**
- A concise introductory paragraph.
- Primary links or buttons such as **Explore my interests** and **View my art**.
- Four visual interest cards: Physics, Mathematics, Portrait Art, and Gaming.
- A tasteful visual motif inspired by science, geometry, or art.

Do not invent a profile photograph. Use a clearly labelled placeholder until Saptak supplies one, or design the hero so it works without a portrait.

### 3.2 About Me

Purpose: Explain who Saptak is and what motivates his interests.

Include placeholders for:
- A short biography (approximately 80–120 words).
- What he enjoys learning.
- What inspires his creative work.
- What he is currently exploring or practising.

Do not invent age, school, qualifications, awards, work experience, location, or personal history. Leave unknown details as editable placeholders.

### 3.3 Physics & Mathematics

Purpose: Present Saptak's curiosity about scientific and mathematical ideas.

Possible content:
- Favourite physics concepts.
- Mathematics topics he enjoys.
- Short notes or explanations written in his own words.
- Interesting questions he is exploring.
- Small diagrams, equations, or visual demonstrations where useful.

Start with placeholder cards for three physics topics and three mathematics topics. Make it easy to add, edit, or remove topics later. Clearly distinguish personal notes from established scientific facts, and verify factual explanations before publishing them.

### 3.4 Portrait Art Gallery

Purpose: Showcase Saptak's own portrait drawings and paintings.

Include:
- A responsive image gallery.
- Image titles and optional descriptions.
- Optional categories such as pencil, pen, digital, or painting—only where applicable.
- A larger image view or lightbox when an artwork is selected, with keyboard-accessible controls.
- Helpful empty-state text until real artwork is added.

Use clearly labelled sample placeholders only. Do not present generated or stock images as Saptak's artwork. Optimise image sizes and provide descriptive alt text for uploaded artwork.

### 3.5 Gaming

Purpose: Share Saptak's interest in games and game experiences.

Include:
- Favourite games.
- What he likes about them (for example, exploration, atmosphere, storytelling, gameplay, or design).
- Optional short reviews or personal reflections.
- Optional screenshots only when Saptak has the right to use them.

Begin with three editable placeholder game entries. Do not claim that Saptak developed, reviewed professionally, or competed in a game unless he supplies that information.

### 3.6 Contact

Purpose: Give visitors a simple way to reach Saptak.

Include:
- A public contact email placeholder.
- Optional social or creative-profile links supplied by Saptak.
- A simple, accessible contact link.

Do not invent email addresses or social account URLs. Do not publish private contact details without Saptak's explicit decision.

## 4. Recommended technology

Use a simple frontend stack for version one:

| Technology | Purpose |
|---|---|
| HTML | Page structure and semantic content |
| CSS | Layout, typography, colours, responsiveness, and animation |
| Vanilla JavaScript | Navigation, gallery interactions, and small interactive features |
| Vite | Local development server and production build |
| Git and GitHub | Version control and project hosting |
| Netlify | Website deployment |

Do not add a database, backend, login system, or complex framework unless a real requirement appears later. Avoid unnecessary dependencies.

## 5. Suggested project structure

Keep the project organised and easy to maintain. A starting structure could be:

```text
saptak-portfolio/
├── index.html
├── package.json
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── artworks/
│       └── projects/
├── src/
│   ├── main.js
│   ├── style.css
│   └── assets/
└── README.md
```

The coding agent may adjust this structure if it has a clear reason, but it should avoid unnecessary complexity.

## 6. Build workflow

Work in small stages. After each stage, run the site and check that it still works before moving on.

### Stage 1 — Inspect and initialise

- Inspect the existing folder before changing files.
- Check whether it is already a Vite project.
- Set up the vanilla Vite project if needed.
- Start the development server and confirm the starter page loads.
- Explain the project structure.

### Stage 2 — Build the foundation

- Create the global design system: colours, fonts, spacing, buttons, and cards.
- Build responsive navigation.
- Create the homepage hero.
- Add the About section.
- Make sure the layout works at common mobile and desktop widths.

### Stage 3 — Add the interest sections

- Build Physics & Mathematics cards.
- Build the portrait art gallery with placeholders and accessible interactions.
- Build the Gaming section with editable entries.
- Build the Contact section with placeholders.

### Stage 4 — Visual polish

- Add subtle animations and hover states.
- Add a restrained science-inspired visual effect if it does not hurt performance.
- Add smooth scrolling only where it improves usability.
- Check contrast, focus indicators, keyboard navigation, and reduced-motion behaviour.

### Stage 5 — Content and quality checks

- Replace placeholders only with information and images Saptak supplies.
- Check all internal navigation and external links.
- Check that images have useful alt text and load efficiently.
- Test the site on desktop and mobile sizes.
- Check browser console output and fix errors.
- Run the production build and fix any build problems.

### Stage 6 — Publish

- Initialise Git if the project is not already under version control.
- Review files before pushing; do not commit secrets or private information.
- Create a GitHub repository and push the project.
- Connect the repository to Netlify and deploy.
- Check the published site on desktop and mobile.

## 7. Ubuntu setup commands

Saptak has previously used Node.js on Ubuntu. Check the installed versions first:

```bash
node --version
npm --version
```

If Node.js and npm are available, create the project:

```bash
mkdir -p ~/Projects/saptak-portfolio
cd ~/Projects/saptak-portfolio
npm create vite@latest . -- --template vanilla
npm install
npm run dev
```

Open the local address printed by Vite in the browser. Open the project folder in the coding agent and give it the master prompt below.

If the folder already contains files, inspect them before running the setup command. Do not overwrite existing work without checking it.

## 8. Master prompt for the coding agent

Copy the prompt below into the coding agent after opening the project folder.

```text
You are helping me build a personal portfolio website for Saptak Das.

PROJECT GOAL
Create a polished, modern, responsive personal website that represents my curiosity, creativity, and interests. It should feel like a combination of a personal identity website, a science notebook, and an art gallery—not a generic résumé template.

ABOUT ME
My interests are:
- Physics
- Mathematics
- Portrait drawing and painting
- Video games

My name is Saptak Das.
Suggested tagline: “Exploring the universe through science, mathematics, art, and imagination.”

TECH STACK
- HTML
- CSS
- Vanilla JavaScript
- Vite
Use the existing project setup if it is already configured. Do not introduce a framework or extra dependencies without a clear reason.

DESIGN DIRECTION
- Minimal, dark, editorial, science-inspired design.
- Deep black or navy background.
- Electric blue accents and restrained violet details.
- Elegant headings and highly readable body text.
- Spacious layouts and consistent spacing.
- Subtle transitions and hover effects.
- Responsive design for desktop, tablet, and mobile.
- Fast loading and accessible interactions.
- Respect prefers-reduced-motion.

SITE SECTIONS
1. Home: name, tagline, concise introduction, calls to action, and four interest cards.
2. About Me: biography, motivations, and current interests.
3. Physics & Mathematics: editable cards for favourite topics, notes, and questions.
4. Portrait Art Gallery: responsive gallery, image titles, optional descriptions, and an accessible larger-image view.
5. Gaming: favourite games and personal reflections.
6. Contact: public email and social links, using placeholders until I provide real details.

VISUAL DETAILS
- Use subtle mathematics, geometry, or physics-inspired decorative details.
- Keep the hero visually interesting without making it crowded.
- Make the art gallery image-focused.
- Keep animations restrained and performance-friendly.
- Make every section feel part of one coherent design system.

CONTENT AND ACCURACY RULES
- Do not invent my qualifications, achievements, awards, education, employment, biography, game-development experience, or artwork.
- Do not invent contact details or social-media URLs.
- Use clearly labelled editable placeholders wherever information or images are missing.
- Never label stock or generated images as my own artwork.
- Do not publish private personal information.
- Keep text easy for me to edit later.

WORKING METHOD
1. Inspect the existing project and report what is already present.
2. Give me a short implementation plan and proposed file structure.
3. Build the website in stages rather than generating everything carelessly at once.
4. After each stage, run or inspect the project and fix problems before continuing.
5. Keep the code readable, organised, and maintainable.
6. Avoid unnecessary packages and complicated architecture.
7. Test responsive layouts, navigation, keyboard access, image handling, and reduced-motion behaviour.
8. Run the production build and fix all errors.
9. Give me clear instructions for adding my own artwork, changing text, and updating links.

FIRST TASK
Start by inspecting the current project. Then explain the implementation plan and project structure. Do not make large code changes until you have reported what is already in the folder and what you intend to build.
```

## 9. Content checklist for Saptak

Prepare these details when convenient. The website can be built with placeholders first.

- [ ] A short personal introduction (around 80–120 words).
- [ ] Five to ten portrait artworks, if available.
- [ ] Three physics topics that interest me.
- [ ] Three mathematics topics that I enjoy.
- [ ] Three favourite games and a sentence about why I like each.
- [ ] A public email address, only if I want one displayed.
- [ ] Any social or art-profile links I actually want to share.
- [ ] Optional profile photo, if I want one on the homepage.

## 10. Suggested five-session schedule

| Session | Goal |
|---|---|
| 1 | Project setup, homepage, and navigation |
| 2 | About Me, Physics, and Mathematics |
| 3 | Portrait Art Gallery and Gaming |
| 4 | Responsive design, animations, and accessibility polish |
| 5 | Testing, GitHub, and Netlify deployment |

This is a suggested sequence, not a deadline. Spend more time on any stage that needs improvement.

## 11. Definition of done for version one

The first version is ready to publish when:

- The site clearly introduces Saptak Das.
- All six sections are present and easy to navigate.
- Missing personal details are clearly marked as placeholders.
- The portrait gallery works with real images when added.
- The site is usable on mobile and desktop.
- Text is readable and controls are keyboard accessible.
- Animations are subtle and do not interfere with use.
- Links work and there are no obvious console or production-build errors.
- No private information, credentials, or invented achievements are included.
- Saptak knows how to edit his text, images, and links.

---

**Guiding principle:** Make the website feel like a digital representation of a curious and creative person—someone who enjoys understanding the universe, creating art, and exploring games. Start with a beautiful, clear homepage, then build the rest of the experience around it.
