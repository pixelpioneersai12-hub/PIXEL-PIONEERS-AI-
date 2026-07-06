# PIXEL PIONEERS AI

**Imagine. Explore. Build Your Future.**

A fully static, multi-page student career guidance website built with only HTML, CSS, and JavaScript.

## Run it

1. Extract the ZIP.
2. Open `index.html` in a modern browser for the full UI.
3. For PWA installation and offline caching, serve the folder locally (for example with VS Code Live Server, `python -m http.server`, or Netlify/GitHub Pages). Service workers do not run from a `file://` URL in most browsers.

## Included

- First-time multi-step onboarding
- AI-style career assessment with saved progress/results
- Career search, filtering, saved careers, and comparison
- Goal roadmaps and progress tracking
- Course explorer
- Profession-specific skills gap quiz
- Profession-specific mock interviews with lightweight scoring
- Seven-step resume builder and print-to-PDF
- Scholarships, jobs, colleges, resources, community, news, dashboard, and settings
- LocalStorage-based persistence
- Lite Mode for low-memory / slow-network conditions
- PWA manifest and offline service worker

No paid APIs, external frameworks, backend, or build process are required.


## v12 Upgrade
- Global branch/course directory with searchable selection and custom branch support.
- Expanded skill library, medium-level typed starter challenge, direct application-platform links, revised feedback email, returning-profile choice, and animated startup title.


## Profile memory and PIXEL AI
Profiles are stored locally in the same browser/device and are linked to the email entered during onboarding. On a future visit, the student can continue the saved profile or start a new one. PIXEL AI is a browser-only assistant that uses the saved profile and website content; it does not use a paid API or send profile data to a server.

## v14 improvements
- The opening animation now lasts four seconds and has falling neon sprinkles.
- Browsers block unrequested audio on many phones. Tap **Tap for sound** on the opening animation to play its short built-in synthesised launch sound.
- PIXEL AI now has expanded local career/course guidance and can request a general reference summary when online. It is not a hosted large-language model; fully unrestricted ChatGPT-level answers require a separate AI service and secure server-side API setup.
- Career streaks now use saved activity dates only. They begin at 0 until a real activity is completed or saved.


## PIXEL AI: full-answer mode
PIXEL AI includes reliable offline guidance for the app. A browser-only website cannot safely store an AI-provider key or run a full model. To enable a ChatGPT-style assistant, deploy a secure server endpoint that accepts `POST` JSON `{ message, context }` and returns JSON `{ answer }`, then set its HTTPS URL through **PIXEL AI → Connect a full AI server**. Keep the provider key only on that server.

## Scholarship links
The Scholarships page uses official government destinations: National Scholarship Portal, INSPIRE, UGC Student Corner and myScheme. Dates and eligibility change, so students must check the official site before applying.


## Version 16 fixes
- Opening animation runs only once at the start of a browsing session (not on every page).
- The PIXEL AI button offers **Open ChatGPT** (new tab) or **Continue with PIXEL AI** (inside the site).
- Added a searchable Global Scholarship Finder with official programme and government portals.