# Deploying the Interface Design System on GitHub Pages

**Repo:** https://github.com/viveksahu1974/Interface-Design-System-React.js-Project

**Expected live URL after a successful Pages deployment:** https://viveksahu1974.github.io/Interface-Design-System-React.js-Project/

## Upload the project

Download the GitHub-ready ZIP, unzip, open its folder in VS Code, and double-click `PUSH_TO_GITHUB_WINDOWS.bat` using File Explorer. Sign into GitHub when prompted. For command-line alternatives see the README.

IMPORTANT: Do not upload `node_modules/`, `.env` files or the raw unclean 18MB ZIP. This package already excludes dependencies. Do not use `git push --force`.

## Enable GitHub Pages

1. Open the repo in GitHub and navigate to **Settings → Pages**.
2. In **Build and deployment**, choose **GitHub Actions** as the Source.
3. Open **Actions** and find **Deploy React Interface Design System to GitHub Pages**.
4. Wait for the workflow to finish and verify the green success mark. If needed, press Run workflow to start it manually.
5. Open https://viveksahu1974.github.io/Interface-Design-System-React.js-Project/ and check all menus.

## Check after deployment

- Overview loads and no white/blank screen appears.
- Theme toggles and component playground work.
- Business website, Analytics Dashboard and Login demo render.
- Page refresh works; favicon appears.
- On phone/tablet, check responsive layout.

## Troubleshooting

- **No workflow:** Ensure `.github/workflows/deploy-pages.yml` is in `main` and GitHub Actions are enabled.
- **Missing permission:** Repository administrator may need to enable Actions and Pages.
- **404:** Confirm deployment succeeded and repository settings Source is GitHub Actions.
- **Blank page:** Use `base: './'` in `vite.config.js` and `./favicon.svg` in `index.html`. Verify browser developer console.
- **npm error:** Use Node.js 22 and `npm ci`. See Actions logs for the exact failure.

## Local checks

```powershell
npm.cmd install
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

Your `npx skills add tt-a1i/archify -g` Archify installation is **optional** and unrelated to GitHub Pages deployment.
