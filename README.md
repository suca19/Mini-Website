# ElectroCocha

Prototype website that helps transport workers and drivers in Cochabamba, Bolivia,
understand the switch to electric vehicles: running costs, financing, incentives and charging.

Built with HTML, CSS and JavaScript only (no server). The plan is in [Docs/plan.md](Docs/plan.md).

## How to view it

Open `index.html` in a browser (Chrome recommended). No install or build step is needed.
The map and the video load from OpenStreetMap and YouTube, so they need an internet connection.

## Pages

| Page | What it has |
| --- | --- |
| `index.html` | Problem, solution, infographic, audio summary, who it is for |
| `pages/solutions.html` | EV options, cost calculator, benefits, financing and incentives, charging map, video |
| `pages/about.html` | Mission, who is behind it, partners, disclaimer |
| `pages/contact.html` | Contact form with JavaScript validation |
| `pages/account.html` | Sign-in and sign-up forms (prototype, nothing is sent) |

## Files

- `style/main.css`: the one shared stylesheet
- `src/main.js`: phone menu (all pages)
- `src/validation.js`: contact form rules
- `src/calculator.js`: diesel vs electric cost calculator
- `src/account.js`: sign-in / sign-up forms
- `images/`, `audio/`: media
