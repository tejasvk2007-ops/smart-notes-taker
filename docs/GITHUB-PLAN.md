# GitHub Plan — Smart Note Taker

## Repository structure

```
smart-note-taker/
├── app/
├── components/
├── context/
├── data/
├── public/
├── docs/
├── wireframe/
├── README.md
├── PRODUCT-ASSUMPTIONS.md
├── DESIGN-SYSTEM.md
├── WIREFRAME.md
└── package.json
```

## GitHub Issues

### #1 Project setup
- **Description:** Initialise Next.js (App Router, JavaScript), create folder structure `app/`, `components/`, `context/`, `data/`, add `package.json`, `.gitignore`, and push the first commit.
- **Expected outcome:** `npm run dev` starts the app at http://localhost:3000.
- **Assignee:** Student 1 — **Priority:** High

### #2 Create Navbar
- **Description:** Reusable Navbar with logo, Home / Dashboard / Upload / Login links, and Logout when logged in.
- **Expected outcome:** Navbar appears on every page and links work.
- **Assignee:** Student 1 — **Priority:** High

### #3 Create Landing Page
- **Description:** Hero, problem section, 4 feature cards, How it works, CTA. Uses the design system colours and Inter font.
- **Expected outcome:** Landing page explains the problem and product in under 30 seconds of reading.
- **Assignee:** Student 2 — **Priority:** High

### #4 Create Dashboard
- **Description:** Sidebar layout, stats (total notes, ready, favourites, hours saved), search + subject filter, grid of NoteCards, EmptyState when no match.
- **Expected outcome:** Dashboard lists all 6 dummy notes and filters them correctly.
- **Assignee:** Student 1 — **Priority:** High

### #5 Create Login Page
- **Description:** Login form (email + password) using AuthContext; on success redirect to Dashboard.
- **Expected outcome:** Any email/password logs in (dummy auth) and redirects.
- **Assignee:** Student 1 — **Priority:** Medium

### #6 Create reusable Button component
- **Description:** Button with primary / secondary / danger / ghost variants, used across all pages instead of raw `<button>` elements.
- **Expected outcome:** One Button component reused on Landing, Login, Register, Upload, and Note Detail.
- **Assignee:** Student 2 — **Priority:** Medium

### #7 Create Card component
- **Description:** Reusable Card container used for NoteCards, stat cards, feature cards, and form cards.
- **Expected outcome:** Consistent card styling (white, 12px radius, border) everywhere.
- **Assignee:** Student 2 — **Priority:** Medium

### #8 Setup React Context
- **Description:** NotesContext (notes, search/filter state, addNote, deleteNote, toggleFavourite) and AuthContext (login/register/logout, localStorage). Providers in `app/layout.jsx`.
- **Expected outcome:** Notes and login state are shared between pages without prop-drilling.
- **Assignee:** Student 1 — **Priority:** High

### #9 Add dummy product data
- **Description:** `data/notes.js` with 6 realistic lecture notes (Linked Lists, Process Scheduling, Normalization, Linear Algebra, OSI Model, Thermodynamics), each with summary, key points, transcript excerpt, and tags.
- **Expected outcome:** App behaves like a real product using this data.
- **Assignee:** Student 2 — **Priority:** High

### #10 Implement responsive design
- **Description:** Sidebar stacks on mobile, hero and grids collapse to one column, text sizes adjust (see `app/globals.css` media query at 768px).
- **Expected outcome:** App is usable on a phone-width screen with no horizontal scrolling.
- **Assignee:** Student 2 — **Priority:** Medium

## Work division

| Student | Work |
|---|---|
| Student 1 | Next.js setup, Authentication UI, Navbar, Dashboard, React Context |
| Student 2 | Landing page, Reusable components, Forms, Cards, Responsive UI, Dummy data |

## Git workflow

- Meaningful commits: `feat: add dashboard layout`, `feat: create reusable card component`, `fix: resolve mobile navbar issue`, `docs: add product assumptions`
- Avoid: `update`, `final`, `final2`, `changes`, `abc`, `test`
- Branches where appropriate, Pull Requests, regular pushes, both members contributing.
