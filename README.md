# Smart Note Taker 

Lectures into short, organised notes — for college students who miss the next point while writing the last one.

**Inspiration:** AI-powered note-taking tools on **Product Hunt**. We built our own implementation for students — we did not copy an existing product.

## The problem

Taking notes during lectures is difficult. While writing down what the teacher explains, students miss the next point, then spend extra time completing their notes before exams. Smart Note Taker converts a lecture into a short summary with the key points highlighted, so students revise instead of rewrite.

## What it does (MVP)

- Landing page explaining the problem and product
- Login / Register (dummy auth — any email/password works, no backend)
- Dashboard: stats, search, subject filter, grid of notes
- Upload a lecture (simulated processing, 1.5s) → summary + key points generated
- Note detail: summary, highlighted key points, transcript excerpt, favourite, delete (with confirm modal)
- Profile: user info + table of all notes

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## Architecture

```
Next.js (App Router)
   ↓
Pages (app/)
   ↓
Components (components/)
   ↓
React Context (context/NotesContext, AuthContext)
   ↓
Dummy Data (data/notes.js)
```

No backend is used in Milestone 1. All notes are realistic dummy data held in React Context.

## Pages

| Route | Page |
|---|---|
| `/` | Landing Page |
| `/login` | Login |
| `/register` | Register |
| `/dashboard` | Dashboard |
| `/notes/[id]` | Note Detail |
| `/upload` | Upload Lecture |
| `/profile` | Profile |

## Components

Navbar, Sidebar, Button, Card, Input, Modal, Badge, Table, EmptyState, NoteCard, SearchBar. See `DESIGN-SYSTEM.md`.

## Team plan

| Student | Work |
|---|---|
Tejas V K: Next.js setup, Auth UI, Navbar, React Context
Suvin krishnan nair: Landing page, Dashboard, Note Detail, Search / Filter
Ahaan rai: Upload, Profile, Reusable components, Cards, Responsive UI, Dummy data

Full issue plan: see `docs/GITHUB-PLAN.md`. Presentation outline: see `docs/PRESENTATION.md`.

## GitHub workflow

- Meaningful commits, e.g. `feat: add dashboard layout`, `feat: create reusable card component`, `fix: resolve mobile navbar issue`, `docs: add product assumptions`
- Avoid: `update`, `final`, `final2`, `changes`, `abc`, `test`
- Branches where appropriate, Pull Requests, Issue tracking, regular pushes, clear README

## Deliverables (Milestone 1)

- [x] Product idea selected (Product Hunt)
- [x] `PRODUCT-ASSUMPTIONS.md`
- [x] Wireframe (`WIREFRAME.md` + `wireframe/*.png`)
- [x] `DESIGN-SYSTEM.md`
- [x] GitHub repository (create on github.com and push this folder)
- [x] GitHub Issues — see `docs/GITHUB-PLAN.md`
- [x] Next.js application, required pages, reusable components, React Context, dummy data
- [ ] Final presentation video — record after running the demo (see `docs/PRESENTATION.md`)
