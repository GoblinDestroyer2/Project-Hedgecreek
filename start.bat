@echo off
title Hedgecreek Dashboard
echo ==========================================
echo   Hedgecreek Dashboard Opstarter
echo ==========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Eerste keer starten gedetecteerd.
    echo [INFO] Installeren van benodigdheden... (dit kan even duren)
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Er is iets misgegaan bij het installeren.
        pause
        exit /b %errorlevel%
    )
    echo [OK] Installatie voltooid.
    echo.
)

echo [INFO] Applicatie wordt gestart...
echo [INFO] Ga naar http://localhost:3000 in je browser als deze niet automatisch opent.
echo.

call npm run dev
