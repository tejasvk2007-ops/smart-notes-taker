# Smart Note Taker – Assumption Log

**Idea source:** Product Hunt (inspired by AI-powered note-taking tools)

## What product are you planning to build?

Smart Note Taker — a web app for college students that converts lectures into short, organised notes. A student uploads or records a lecture (in this MVP the upload is simulated with a pasted transcript / file name), and the app returns a short summary, highlighted key points, and the important points for revision — instead of another lengthy document to read.

## What problem does it solve?

Taking notes during lectures can be difficult for many students. Sometimes, while writing down what the teacher explains, we miss the next point. Later, we have to spend extra time completing our notes or preparing them before exams.

A tool that converts lectures into short, organised notes could make studying easier. Students would prefer notes that highlight important points instead of giving them another lengthy document to read. The notes need to be accurate and easy to understand for students to find them useful.

## Who are the target users?

The main users would be college students, especially those who attend several lectures a day and have difficulty keeping their notes organised.

Engineering students could be one of the first groups to try it because some subjects involve lengthy explanations and technical concepts. Students preparing for exams and people who learn through recorded lectures could also benefit from it.

## What is the main use case?

A student comes back from a lecture (or finishes watching a recorded lecture), uploads the lecture recording / transcript to Smart Note Taker, and gets back a short summary and key points for that lecture. Later, before an exam, they open the note, revise the key points, and search their notes by subject or topic.

## What are the core features?

- Upload / record a lecture (simulated in the MVP — see "What will NOT be included")
- Short, organised summary for each lecture
- Key points highlighted for revision
- Dashboard with all notes, organised by subject
- Search and filter notes by subject / keyword
- Note detail page with summary, key points, and transcript excerpt
- Favourites, to mark important notes for exam revision

## What assumptions are you making about the users?

- Students struggle to keep up with lectures while writing notes at the same time.
- Students spend extra time rewriting or completing their notes after lectures.
- Students would use a tool that prepares notes automatically, if it saves time.
- Students prefer short notes that highlight important points over lengthy documents.
- Notes must be accurate and easy to understand, or students will not trust them for exam preparation.
- Engineering students, who deal with lengthy explanations and technical concepts, are a good first group to try the product.

## Problem validation

The first thing I would do is talk to a few college students and understand how they currently take notes. I would ask whether they struggle to keep up with lectures, how much time they spend rewriting notes, and whether they would use a tool that prepares notes automatically.

After that, I would create a basic version that converts a short lecture recording into notes. I would ask students to compare the generated notes with their usual notes and share what they liked or disliked.

This would help me understand whether the problem is common and whether my idea actually saves time. I would also need to check if the generated notes are accurate enough for exam preparation.

## What will be included in your MVP?

- Landing page explaining the problem and the product
- Login and Register (dummy authentication — any email / password works in the MVP)
- Dashboard with note statistics, search, and subject filter
- Upload page — add a lecture by title, subject, lecturer, duration, and transcript text; the app simulates processing and generates a summary and key points
- Note detail page — summary, key points, transcript excerpt, tags, favourite and delete
- Profile page
- Reusable components (Navbar, Sidebar, Button, Card, Input, Modal, Badge, Table, EmptyState)
- React Context for notes and authentication, with realistic dummy data (no backend)

## What will NOT be included in the MVP?

- Real AI transcription or real audio processing — the MVP simulates this with a pasted transcript and generated summary/key points
- Real backend, database, or user accounts stored on a server
- Payments
- Mobile app
- Collaboration / sharing notes with classmates
- Real-time recording

## Next steps

My first step would be to collect feedback from students instead of assuming everyone needs the same solution. Based on their responses, I would build a simple prototype and test it with a small group.

The main things I would check are whether it saves time, whether the notes are accurate, and whether students would actually use it regularly. Based on the feedback, I would decide which features to improve first.
