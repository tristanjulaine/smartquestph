# SmartQuest PH

A mobile-first, KooBits-style learning prototype made as an original app concept.

## Included features

- Grade 4-friendly learning app UI
- Science, Math, and English subjects
- 50 Philippine Grade 4 Science reviewer questions
- Quiz battle / fight mode
- Practice mode
- Wrong-answer animated flashcard explanation
- Hints and 50/50 lifeline
- XP, coins, badges, streaks
- Parent-style progress report
- Local leaderboard
- Saves progress in the browser using localStorage
- Installable PWA with manifest and service worker
- Works offline after first load

## How to run

Open `index.html` in a browser.

For best testing, run a simple local server:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## How to turn it into an APK

Option 1: Use Android Studio WebView wrapper.

Option 2: Use Capacitor:

```bash
npm create vite@latest smartquest-ph -- --template vanilla
cd smartquest-ph
# copy index.html, styles.css, app.js, manifest.json, sw.js, icon.svg into the project public/root as needed
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init SmartQuestPH com.gandilan.smartquest
npx cap add android
npx cap sync android
npx cap open android
```

Build the APK inside Android Studio.

## Notes

This app does not copy KooBits assets, branding, layout, or proprietary content. It is an original gamified reviewer prototype inspired by the general idea of daily learning apps.
