# Smart Note Taker – Design System

## 1. Colours

| Token | Value | Use |
|---|---|---|
| Primary | `#2563EB` | Main buttons, links, active navigation |
| Secondary | `#7C3AED` | Accents, subject badges, highlights |
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, modals, inputs |
| Text | `#111827` | Headings and body text |
| Muted text | `#6B7280` | Secondary / small text |
| Accent | `#F59E0B` | Favourites, warnings, highlights |
| Success | `#16A34A` | "Ready" status, success messages |
| Error | `#DC2626` | Errors, delete actions |
| Border | `#E5E7EB` | Card and input borders |

## 2. Typography

- **Font family:** Inter, system-ui, -apple-system, "Segoe UI", sans-serif
- **H1:** 32px / Bold
- **H2:** 24px / Semi Bold
- **H3:** 20px / Semi Bold
- **Body:** 16px / Regular
- **Small:** 14px / Regular
- **Caption / muted:** 13px / Regular, colour `#6B7280`

## 3. UI Components

Reusable components in `components/`:

| Component | Purpose |
|---|---|
| Button | Primary, secondary, and danger actions |
| Navbar | Top navigation on the landing page and app |
| Sidebar | Dashboard navigation (Dashboard, Upload, Profile) |
| Card | Note cards, stat cards, and content containers |
| Modal | Confirm delete and other confirmations |
| Input | Text, email, password, and textarea fields |
| Dropdown | Subject filter (implemented as a styled `<select>`) |
| Table | Notes table view on the dashboard (used in the Profile / notes list) |
| Badge | Status (Ready / Processing) and subject tags |
| Loading State | Spinner / "Processing your lecture…" state on Upload |
| Empty State | Shown when search or filter returns no notes |
| NoteCard | A note preview card (title, subject, summary, key points count) |
| SearchBar | Search input used on the Dashboard |

## 4. Layout

- Max content width: 1100px, centred
- Card radius: 12px; button radius: 8px
- Spacing scale: 8px / 12px / 16px / 24px / 32px
- Dashboard: sidebar (220px) + main content area

## 5. Decisions

- Calm blue primary so the app feels trustworthy for study; purple secondary for subjects; amber accent only for favourites/highlights so key points stand out.
- Plain CSS (no Tailwind) in `app/globals.css` so the design tokens are in one place and the build stays simple.
- Cards and generous white space — notes must be easy to scan quickly before an exam.
