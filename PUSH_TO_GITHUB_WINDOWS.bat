@echo off
setlocal
cd /d "%~dp0"
title Upload Interface Design System to GitHub
where git >nul 2>&1
if errorlevel 1 (
  echo ERROR: Git is not installed. Install Git for Windows from https://git-scm.com/
  pause
  exit /b 1
)
echo.
echo Target repository:
echo https://github.com/viveksahu1974/Interface-Design-System-React.js-Project
echo.
echo This uploads the current project folder (excluding node_modules and dist).
choice /C YN /M "Continue"
if errorlevel 2 exit /b 0
if not exist .git\nul git init

git branch -M main
(git remote get-url origin) >nul 2>&1
if errorlevel 1 (
  git remote add origin https://github.com/viveksahu1974/Interface-Design-System-React.js-Project.git
) else (
  echo Existing origin remote:
  git remote get-url origin
  echo Check that it matches your repository before proceeding.
  choice /C YN /M "Is this your intended repository"
  if errorlevel 2 exit /b 1
)
git add .
git commit -m "Add React interface design system and GitHub Pages deployment"
if errorlevel 1 echo Nothing new to commit or Git identity is not configured.
echo.
echo Pushing to GitHub. Sign in through your browser if requested.
git push -u origin main
if errorlevel 1 (
  echo.
  echo Push failed. Check authentication or pre-existing remote commits.
  echo Never use git push --force for this project.
  pause
  exit /b 1
)
echo.
echo SUCCESS: Source pushed to GitHub.
echo NEXT: GitHub Settings - Pages - Build and deployment - GitHub Actions.
pause
