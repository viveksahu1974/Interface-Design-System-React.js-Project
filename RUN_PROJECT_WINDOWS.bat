@echo off
setlocal
cd /d "%~dp0"
title Interface Design System - React Project

echo ======================================================
echo   INTERFACE DESIGN SYSTEM - WEB DEVELOPMENT PROJECT
echo ======================================================
echo.
where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js is not installed or is not in PATH.
  echo Download and install Node.js LTS from https://nodejs.org/
  pause
  exit /b 1
)
where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo ERROR: npm was not found. Reinstall Node.js LTS.
  pause
  exit /b 1
)
if not exist "node_modules\react" (
  echo First run: installing packages. Internet is required for npm install.
  call npm.cmd install --no-audit --no-fund
  if errorlevel 1 (
    echo ERROR: Package installation failed. Check internet connection.
    pause
    exit /b 1
  )
)
echo.
echo Starting the React development server...
echo Open the Local address shown below, normally http://localhost:5173
call npm.cmd run dev
pause
