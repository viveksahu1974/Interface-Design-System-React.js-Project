@echo off
setlocal
cd /d "%~dp0"
if not exist "node_modules\react" (
  echo Please run RUN_PROJECT_WINDOWS.bat first.
  pause
  exit /b 1
)
call npm.cmd run check
if errorlevel 1 (pause & exit /b 1)
call npm.cmd run build
if errorlevel 1 (pause & exit /b 1)
echo.
echo SUCCESS: Static production files are in the dist folder.
pause
