# Presentation Outline — Smart Note Taker (10 slides)

Record a video presenting the product. Cover each slide below, then do the live demo.

## Slide 1 — Problem
**Speaker notes:** "Taking notes during lectures is difficult. While writing down what the teacher explains, students miss the next point — then spend extra time completing their notes before exams. That is the problem we set out to solve."

## Slide 2 — Product
**Speaker notes:** "Smart Note Taker turns a lecture into short, organised notes. Upload a lecture, get a short summary and the key points highlighted — so you revise instead of rewrite. Show the landing page."

## Slide 3 — Inspiration
**Speaker notes:** "The idea was inspired by AI note-taking tools on Product Hunt. We used them as inspiration and reference only — we designed and built our own implementation for college students."

## Slide 4 — Target Users
**Speaker notes:** "College students, especially engineering students who attend several lectures a day and deal with lengthy technical explanations. Also students preparing for exams and people who learn through recorded lectures."

## Slide 5 — Assumptions
**Speaker notes:** "We assumed students struggle to keep up while writing, spend extra time rewriting notes, and would use auto-notes if they save time and are accurate. We also assumed they prefer short notes with highlighted points over lengthy documents. Our validation plan: talk to students first, then test a basic version with a small group and compare the generated notes with their usual notes."

## Slide 6 — Wireframe
**Speaker notes:** "Before coding we wireframed the landing page, dashboard, and note detail page — structure, navigation, cards, forms, and user flow. Show `WIREFRAME.md` and the three wireframe images in `wireframe/`. The point was to think the product through before building it."

## Slide 7 — Design System
**Speaker notes:** "Primary #2563EB, Secondary #7C3AED, Background #F8FAFC, Text #111827, Accent #F59E0B, Success #16A34A, Error #DC2626. Font Inter — H1 32px Bold, H2 24px Semi Bold, Body 16px Regular. Components: Button, Navbar, Sidebar, Card, Modal, Input, Dropdown, Table, Badge, Loading and Empty states. Full details in `DESIGN-SYSTEM.md`."

## Slide 8 — Architecture
**Speaker notes:** "Next.js App Router → Pages → Components → React Context → Dummy Data. No backend in Milestone 1. NotesContext holds notes, search and filter; AuthContext holds the dummy login. Explain createContext, Provider, and useContext in one sentence each."

## Slide 9 — GitHub
**Speaker notes:** "Show the repository, the 10 issues in `docs/GITHUB-PLAN.md`, the project/task plan and work division, and the commit history — meaningful commits from both team members, branches and PRs where used."

## Slide 10 — Live Demo
**Speaker notes / demo script:**
1. Open the landing page at http://localhost:3000.
2. Register / login (any email and password works).
3. Dashboard: show the 6 dummy notes, search for 'linked list', filter by subject.
4. Open a note: show summary, key points, transcript.
5. Upload: add a lecture with a pasted transcript, wait 1.5s for simulated processing, see it appear on the dashboard.
6. Favourite a note, delete one (show the confirm modal), open Profile.
7. Close: "That is the full journey — idea, assumptions, wireframe, design, GitHub, Next.js, components, Context, dummy data, working MVP."
