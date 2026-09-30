# plan.md: ElectroCocha

Prototype website + video + report | Agile (Scrum, solo version)

> **For the AI agent:** this file is the only source of truth. Build only what is written here. If something is missing or marked **OPEN**, ask the human before building it. Do not add pages, features, content or rules that are not in this file.

---

## 0. Agent rules

1. Use only **HTML, CSS and JavaScript**. No server-side code, no backend, no database.
2. **Comments in every HTML, CSS and JS file** explaining the code.
3. One shared theme from a single `style.css`.
4. Same navigation menu on every page, with a link to Home.
5. Follow the accessibility requirements in section 3.
6. Work one sprint at a time (section 5). Finish a sprint's deliverable before starting the next.
7. Anything not specified here is **OPEN**: ask, do not guess.

---

## 1. The big picture

| Question | Answer |
|---|---|
| What is the problem? | Bolivia has fuel shortages and diesel prices rose over 160%. Transport workers in Cochabamba are struggling. |
| What is the idea? | **ElectroCocha**: a website that helps people in Cochabamba understand and switch to electric vehicles (costs, financing, incentives). |
| Who is it for? | Bus and taxi operators, private drivers, commuters, local government. |
| What do I hand in? | 1) Website (3-5 pages) 2) Video (max 5 min) 3) Report (max 1,200 words) |

---

## 2. User stories

Format: "As a [who], I want [what], so that [why]."

| # | Story | Priority |
|---|---|---|
| User1 | As a visitor, I want to quickly understand the problem and the EV solution, so I know if it is relevant to me. | Must |
| User2 | As a user, I want to get back to the home page from any page, so I never get lost. | Must |
| User3 | As an operator, I want to send an enquiry with my details and query type, so someone can contact me. | Must |
| User4 | As an operator, I want clear error messages on the form, so I can fix my mistakes. | Must |
| User5 | As a user with a disability or slow internet, I want an accessible, light site. | Must |
| User6 | As an operator, I want to compare diesel and electric running costs, so I can decide. | Should |
| User7 | As a driver, I want to see charging station locations, so I know where I can charge. | Should |
| User8 | As a visitor, I want video, audio and an infographic, so the information is easy to take in. | Should |
| User9 | As a visitor, I want to know who is behind ElectroCocha, so I can trust it. | Could |

Must = needed to pass the brief. Should = important. Could = nice to have.

---

## 3. Requirements

### Pages (5)

| Page | Purpose |
|---|---|
| `index.html` | Home: problem, solution, call to action |
| `solutions.html` | EV options, cost calculator, benefits |
| `about.html` | Mission, partners, disclaimer |
| `contact.html` | Contact form with JavaScript validation |
| fifth page | **OPEN**: "coming on", not described yet. Do not build until the human describes it. |

### Contact form rules (JavaScript only, no server code)

| Field | Rule |
|---|---|
| Name | Letters and spaces only. No numbers or symbols. |
| Phone | Numbers only, exactly 9 or 10 digits |
| Email | Basic format check (has `@` and a domain) |
| Query type | Dropdown, must pick one |
| Message | Not empty |
| All fields | No empty boxes |

### Other requirements

- Same navigation menu on every page, with a link to Home
- One shared theme (colours, fonts) from a single `style.css`
- Variety of media: images, video, audio, infographic
- Accessible: alt text, labels on form fields, good colour contrast, keyboard friendly, video captions or transcript
- Comments in every HTML, CSS and JS file

### Out of scope (not doing)

Backend, database, real payments, real station data.

---

## 4. Why Scrum (Agile)

| How it fits here | Scrum | Kanban |
|---|---|---|
| Work is done in | Fixed short sprints | A continuous flow |
| Deadline fit | Great for a fixed deadline | Weaker, no time-boxes |
| Easy to explain in report/Q&A | Yes (planning, review, retrospective) | Less to say |

**Decision: Scrum.** Solo version: I am the Product Owner, Scrum Master and Developer. My "friend" (the client) gives feedback at each sprint review.

---

## 5. Step-by-step plan

```
Sprint 0 → Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4
 Setup     Foundation  Contact    Content    Polish + video + report
                       form
```

### Sprint 0: Setup

- [ ] Create Git repository and folder structure
- [ ] Set up the board (Trello) and add all user stories
- [ ] Choose colours, fonts, logo idea
- [ ] Sketch simple wireframes of the 5 pages

### Sprint 1: Foundation

- [ ] Shared navigation and footer
- [ ] `style.css` (theme, responsive layout)
- [ ] `index.html` with problem, solution, call to action
- [ ] Accessibility basics (semantic tags, alt text, contrast)
- **Deliverable:** working home page with navigation

### Sprint 2: Contact form

- [ ] `contact.html` with all fields
- [ ] `validation.js` with one function per rule (name, phone, email, empty)
- [ ] Clear error messages next to each field
- [ ] Test with good and bad input
- **Deliverable:** fully working, tested form

### Sprint 3: Content pages

- [ ] `solutions.html` with cost calculator (`calculator.js`)
- [ ] Fifth page: **OPEN** (description coming)
- [ ] Add video, audio clip
- **Deliverable:** all main content in place

### Sprint 4: Polish and hand-in

- [ ] `about.html`
- [ ] Check every link works
- [ ] Test accessibility
- [ ] Test on Chrome
- [ ] Review comments in all files
- [ ] Write video script, record video (under 5 min)
- [ ] Write the report (under 1,200 words)
- **Deliverables:** zipped site, video, report

### End of every sprint

- **Review:** does the work meet the user stories?
- **Retrospective:** what went well, what to change?

---

## 6. Environment and tools

| Need | Tool |
|---|---|
| Code editor | VS Code |
| Version control | Git (one commit per finished task) |
| Task board | Trello |
| Testing | Browser DevTools, W3C validator |
| Images | Own photos and free ones |
| Audio | Audacity or a text-to-speech clip |
| Video recording | OBS Studio |
| Agents | **OPEN**: not specified yet |

---

## 7. Report reminder (Agile)

Why Agile fits ElectroCocha: fuel policy, EV incentives and charging plans in Bolivia change quickly, so requirements will change. Short sprints and regular feedback let the project adapt.

---

## 8. OPEN items (ask the human before building)

1. **Fifth page:** what is it and what goes on it?
2. **Cost calculator:** which inputs and values should it use? (The file only says "compare diesel and electric running costs".)
3. **Query type dropdown:** which options should it list?
4. **Infographic:** it is in the requirements and user story 8, but no sprint task mentions it. Include it or not?
5. **Charging station locations (User7):** no page in the plan covers it. Which page, if any, should show it?
6. **Agents:** which agents or skills should be used, and for what?
7. **Folder and file names** other than `style.css`, `validation.js`, `calculator.js` and the four named pages.

---

## 9. Prompt to start each sprint

```
Read plan.md. We are working on SPRINT <N>.
Do only the tasks listed for this sprint, following section 0.
Use only HTML, CSS and JavaScript, with comments in every file.
If anything is missing or marked OPEN, ask me first.
When finished, list the files changed and check the sprint's deliverable.
```