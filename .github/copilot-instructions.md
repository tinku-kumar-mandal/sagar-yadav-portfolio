This repository is a small React + Vite portfolio app. The goal of these instructions is to help AI coding agents be productive immediately by describing the project's architecture, conventions, developer workflows, and important integration points.

- Project entry points
  - `index.html` loads `src/main.jsx` which mounts the `App` component into the page element with id `root`.
  - `src/App.jsx` composes the site: `Navbar`, `Homepage`, `About`, `Projects`, `Contact`, `Footer`.

- Big-picture architecture
  - Single-page React app built with Vite for fast HMR and bundling.
  - Visual sections are simple components under `src/components/*` grouped by feature (homepage, about, projects, contact, footer, navbar).
  - Styling uses Tailwind (see `tailwind.config.js`) plus component-level CSS files (e.g., `src/components/projects/projects.css`).
  - AOS (scroll animations) is used optionally; the app conditionally imports it to speed cold start in "fast" dev mode.

- Key developer workflows (how to run / build / lint)
  - Install: `npm install`
  - Normal dev: `npm run dev` (uses Vite default mode)
  - Fast dev (short startup): `npm run dev:fast`
    - Creates Vite mode `fast` and reads `.env.fast` (contains `VITE_FAST=true`); `src/App.jsx` uses this to skip AOS initialization and lazy-load heavier sections.
  - Build for production: `npm run build`
  - Preview production build: `npm run preview`
  - Lint: `npm run lint` (ESLint configured for .js/.jsx)

- Project-specific conventions and patterns
  - Components are colocated under `src/components/<feature>/` with a CSS file alongside the JSX (e.g. `projects/Projects.jsx` + `projects.css`).
  - Images and static assets live in `public/` and `public/pIcons/`; some images are imported with absolute paths (e.g. `import Github from "/pIcons/icons8-github-30.png"`).
  - Environment flags:
    - `import.meta.env.MODE === 'fast'` or `VITE_FAST=true` (via `.env.fast`) toggles fast mode behavior.
    - Use `import.meta.env.VITE_*` for any new env variables.
  - Lazy-loading: non-critical UI pieces are lazy-loaded with `React.lazy` and wrapped with `Suspense` in `src/App.jsx` to reduce initial bundle size.

- Integration points & external deps to note
  - AOS (animation on scroll) — conditional import in `src/App.jsx` so it can be omitted in fast mode.
  - `react-router-dom` is in dependencies but not currently used — keep an eye if routing is added.
  - `@emailjs/browser` is used for contact form (check `src/components/contact/Contact.jsx`).
  - `use-local-storage` is used for theme persistence in `src/App.jsx`.

- Practical examples (copyable guidance for edits)
  - To add a new section that should be skipped in fast mode, create the component under `src/components/<name>/` and import it lazily:
    - const NewSection = React.lazy(() => import('./components/newsection/NewSection'))
    - Wrap with `<Suspense fallback={null}><NewSection/></Suspense>` in `App.jsx`.
  - To read a fast-mode flag in code:
    - const isFast = import.meta.env.VITE_FAST === 'true' || import.meta.env.MODE === 'fast'
  - To add a fast-only environment variable, add it to `.env.fast` with the `VITE_` prefix.

- Debugging and common pitfalls
  - Missing assets: the project uses absolute paths like `/pIcons/...` which resolve from `public/` in Vite — ensure files exist under `public/`.
  - Conditional/await import in `App.jsx`: keep imports asynchronous and guard AOS usage behind the `isFast` check to avoid runtime errors during fast-mode startup.
  - ESLint: `npm run lint` enforces zero max warnings (`--max-warnings 0`), adjust rules or fix reported issues before committing.

- What not to change without testing
  - `index.html` font and external stylesheet links — removing them will change visuals globally.
  - Tailwind config and PostCSS setup — changes can affect many components.

If any of these details are incomplete or you want the instructions to focus on other areas (tests, CI, or full production optimizations), tell me which areas to expand and I'll iterate.
