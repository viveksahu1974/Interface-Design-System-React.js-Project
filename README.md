# Design and Development of a Responsive Interface Design System Using React.js

A complete, interactive **summer internship demonstration project** built using **React.js, JavaScript, HTML5, and CSS3**. It demonstrates the web-development and UI/UX responsibilities described in a Web Development Intern offer letter.


## GitHub Repository and Live Demo

- **Source:** https://github.com/viveksahu1974/Interface-Design-System-React.js-Project
- **Live Demo (after deployment):** https://viveksahu1974.github.io/Interface-Design-System-React.js-Project/

The repo includes `.github/workflows/deploy-pages.yml`, which builds the Vite/React site and deploys the `dist/` folder through GitHub Actions whenever `main` is updated.

**First-time setup** (repository owner): GitHub repository → **Settings → Pages → Build and deployment → Source: GitHub Actions**. After that, open **Actions**, inspect the latest Pages workflow for a green check, then open the live URL above. The link is expected only once the Pages workflow succeeds; it is not evidence the site is already deployed.

### Upload from Windows / VS Code

1. Install Git for Windows and open this folder in VS Code.
2. Run `PUSH_TO_GITHUB_WINDOWS.bat` in Windows File Explorer, or use the terminal:

```powershell
git init
git branch -M main
git remote add origin https://github.com/viveksahu1974/Interface-Design-System-React.js-Project.git
git add .
git commit -m "Add React interface design system"
git push -u origin main
```

Authenticate in the GitHub browser prompt when required. Never put a GitHub token inside project files. If the remote already contains commits, clone it and copy these files in before pushing, rather than force-pushing.

## Optional Archify AI Architecture Diagrams

Archify is a *separate third-party agent skill* for architecture visualizations. It is **not required to run this React app**, and installing it does not automatically add new app components.

Supported assistants include **Cursor, Claude Code, Codex CLI, and OpenCode**. If you want it and trust the third-party source, inspect https://github.com/tt-a1i/archify first, then run:

```powershell
npx skills add tt-a1i/archify -g
```

> Note: the GitHub owner is `tt-a1i` (**digit 1**, lowercase i), not `tt-ali`.

Example prompt to your connected coding agent: *"Use Archify to create an architecture diagram for this React Interface Design System: Browser → Vite React app → App.jsx → component library, design tokens and sample templates → localStorage. Distinguish demo data from real backend services."*

**Project:** Interface Design System  
**Student:** Vivek Sahu  
**Institution:** Maharaja Surajmal Institute of Technology, New Delhi  
**Internship organization:** UIBOX Studio, Sector 63, Noida  
**Internship period:** 22 June 2026 – 03 August 2026 (6 weeks)  
**Internship role:** Web Development Intern (Onsite)

> **Important:** This codebase is an educational portfolio/project submission, not a claim that UIBOX Studio authored, approved, or deployed it. The report includes an example six-week *development roadmap*, not a fabricated record of work done during the actual internship. Edit the report to match your real contributions and obtain supervisor verification if required.

## Main Features

| Area | Functional features |
|---|---|
| Dashboard overview | Interactive component samples, stats, workspace settings |
| Component library | 16 UI components in 8 categories, search and category filters |
| Component playground | Choose Button/Input/Badge/Card/Alert, edit labels and button style, responsive preview, copy generated JSX |
| Design tokens | Five primary color palettes, corners, density, CSS variable preview, export JSON |
| Business template | Responsive creative-studio site, mobile navigation, form validation (local demonstration) |
| Dashboard template | Projects overview, activity bars, selectable time ranges, feedback interactions |
| Login template | Email/password input validation, password visibility toggle (no real authentication) |
| Accessibility | Semantic HTML, visible keyboard focus, Escape-to-close modal, keyboard search, reduced-motion CSS |
| Customization | Light/dark appearance; theme, color, radius and density saved in browser localStorage |
| Documentation | In-app guide, development roadmap, report draft, live demo and viva guide |

## Technology Stack

- React 18 (functional components + Hooks)
- Vite 5 (development server + production build)
- JavaScript ES6+
- HTML5 & modern CSS3 (Flexbox, Grid, Media Queries, CSS variables)
- Lucide React (icons)
- Browser localStorage, Blob downloads, Clipboard API

**No backend/database/API key is required.** Demo forms intentionally validate *only in the browser*. The project is independent of real UIBOX client data.

## Run in VS Code on Windows

1. Install **Node.js LTS** from https://nodejs.org (Node.js 18+).
2. Extract the ZIP anywhere, for example `C:\Users\YourName\Desktop\Interface-Design-System`.
3. In VS Code: **File → Open Folder → Interface-Design-System**.
4. **Fastest Windows option:** double-click `RUN_PROJECT_WINDOWS.bat`. Or open **Terminal → New Terminal** and run the commands below.
5. In Terminal, enter:

   ```powershell
   npm.cmd install
   npm.cmd run dev
   ```

6. Ctrl+Click the local URL shown in Terminal; it will usually be **http://localhost:5173**.
7. Use `Ctrl+C` in Terminal to stop the server.

If Windows blocks `npm.ps1`, use **Command Prompt** in VS Code Terminal instead of PowerShell, or run `npm.cmd install` and `npm.cmd run dev`.

### Build for submission or deployment

```powershell
npm run check
npm run build
npm run preview
```

The production website is saved in `dist/`. Upload `dist/` to a static web host (e.g., GitHub Pages or Netlify) if you want a public live URL. Do not open `src/App.jsx` directly in a browser; always use Vite.

## Teacher Demonstration (5–7 minutes)

1. **Overview (45 sec):** State the problem: maintaining consistent interfaces across many pages. Point out component and template counts.
2. **Component Library (60 sec):** Filter to Forms. Type an invalid email. Show toast, tabs, modal and progress interactions.
3. **Playground (90 sec):** Change a button from Filled to Outlined, edit its label, switch palette and phone preview; copy JSX.
4. **Design Tokens (60 sec):** Change primary color, corner radius and density, download JSON.
5. **Templates (90 sec):** Show business website, responsive dashboard and login form. Enter invalid then valid values, explain that forms are local demos.
6. **Code and quality (60 sec):** Open `src/App.jsx`, `src/components/Previews.jsx`, `src/data/catalog.js`, and `src/styles.css`. Mention testing, accessibility and what was learned.

More material: `docs/DEMO_AND_VIVA.md`.

## Folder Structure

```text
Interface-Design-System/
├── docs/
│   ├── PROJECT_REPORT.md
│   ├── DEMO_AND_VIVA.md
│   ├── TEST_PLAN.md
│   └── PROJECT_OVERVIEW.md
├── public/
│   └── favicon.svg
├── scripts/
│   └── check-project.mjs
├── src/
│   ├── components/
│   │   ├── Previews.jsx
│   │   └── Templates.jsx
│   ├── data/
│   │   └── catalog.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Project Concepts to Explain During Viva

- React component: reusable piece of UI defined by JavaScript functions returning JSX.
- Props: values passed to a component to control its presentation or behavior.
- State (`useState`): data that changes based on interactions and triggers re-rendering.
- Effect (`useEffect`): synchronization such as persisting theme preferences to localStorage.
- Responsive design: CSS Grid/Flexbox and media queries that adapt layouts to different screens.
- Design tokens: standardized colors, spacing and shape variables.
- Accessibility: semantic elements, labels, focus styles and keyboard navigation.
- Testing: confirm each form, button, filter, dialog, theme and screen size behaves as intended.

## Limitations and Future Scope

- This is a frontend demonstration, **not** a production authentication, email, CMS, e-commerce or analytics service.
- Auth and newsletter forms **do not** submit to a remote server; replace them with a verified backend to enable real submissions.
- The template dashboard uses **illustrative sample data**, not real organizational KPIs.
- For production use, add automated tests, a full accessibility audit, CI/CD, API integration and robust form handling.

## Academic Integrity

Keep your actual internship activities, dates, observations, original designs, implementation changes and testing evidence accurate. Do not present template/sample data as UIBOX's real business data or say a supervisor approved the project without confirmation. See `docs/PROJECT_REPORT.md` for honest wording and areas requiring customization.

## License

Educational demonstration code. You may adapt your submission, but credit third-party packages according to their licenses.
