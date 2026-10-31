# Mobile redesign and cooking-number opening — 2026-11-01

- Compact fixed 60px header, small EduCraft Creators brand, per-app name on app pages, and an overflow menu.
- Native disclosure navigation; language choices are nested under the current language. Same-page locale links and Google Play hl parameters are preserved.
- A fixed download dock contains both games on home pages and one game on app pages. Privacy pages keep their reading space without a download dock. Safe-area and body padding reserve the dock's space.
- The existing cook mascot was used as a reference with the built-in image generation tool. Six generated cooking frames show 2 and 3 becoming 5. They were assembled into a 512×512, 2.2-second looping GIF (255,400 bytes). A static final frame is used when motion is paused or reduced.
- Menu Escape/focus return, outside-click closing, native links, translated animation controls, and reduced-motion preference handling are covered by runtime tests.
- Character accents on app pages animate once, rather than running indefinitely without a control.
- All 20 existing localized URLs and their static SEO metadata remain in place; application features, prices and release states are unchanged.

## Validation

- Node build succeeds; 24 language, link, metadata and UI tests pass.
- Browser verified 320px width in all five languages: no horizontal overflow; header60px; download docks77px; body bottom padding92px. Indonesian Fight detail: title fits; one dock75px, padding92px.
- Browser verified 390×844 and1280×800 layouts, nested language navigation, English app navigation, per-language Play URL, pause/replay, and Escape focus return.
- Browser loading of GIF and static poster confirmed. Local preview server now serves image/gif correctly.
- Original privacy-policy data remains unchanged. Source files for the separate DB product are excluded from this change.

## Image source

Selected public assets: assets/cook-numbers.gif and assets/cook-numbers-poster.png.
Generation mode: built-in image_gen tool (not CLI). Exact initial/refinement prompts: docs/cook-animation-prompt.txt.
The generated sprite sheet and alternative format are retained in the task's local staging; they are not needed by the public site.

## Publication

Production URL: https://educraft-creators-site.pages.dev/ . Final commit and public HTTP confirmation are recorded in the Android workspace release log.
