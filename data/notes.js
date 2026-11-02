export const dummyNotes = [
  {
    id: "1",
    title: "Data Structures — Linked Lists",
    subject: "Data Structures",
    lecturer: "Prof. A. Sharma",
    date: "2026-10-28",
    duration: "52 min",
    status: "Ready",
    favourite: true,
    tags: ["linked list", "pointers", "exam"],
    summary:
      "A linked list stores data in nodes, where each node holds a value and a pointer to the next node. Unlike arrays, linked lists do not need a fixed size in advance, so inserting or deleting at the start is fast. The trade-off is that finding an element takes longer, because you must walk through the list from the head. Singly linked lists point forward only; doubly linked lists also point back, which makes deletion easier but uses more memory.",
    keyPoints: [
      "A node = data + pointer to the next node.",
      "Insertion / deletion at the head is O(1).",
      "Searching is O(n) — you walk from the head.",
      "Singly linked: forward only. Doubly linked: forward and back.",
      "Use a linked list when size changes often; use an array when you need fast random access.",
    ],
    transcript:
      "Today we will look at linked lists. Remember, an array stores elements next to each other in memory, so you can jump straight to index five. A linked list is different — each node only knows where the next node is…",
  },
  {
    id: "2",
    title: "Operating Systems — Process Scheduling",
    subject: "Operating Systems",
    lecturer: "Dr. R. Iyer",
    date: "2026-10-27",
    duration: "48 min",
    status: "Ready",
    favourite: false,
    tags: ["scheduling", "CPU", "FCFS"],
    summary:
      "Process scheduling decides which ready process gets the CPU next. First-Come-First-Served is simple and fair, but a long process can block everyone behind it. Shortest-Job-First reduces average waiting time but needs to know how long each job will run. Round Robin gives every process a short time slice, which keeps the system responsive for interactive users.",
    keyPoints: [
      "Scheduler picks the next process from the ready queue.",
      "FCFS: simple, but suffers from the convoy effect.",
      "SJF: lowest average waiting time, but needs burst-time estimates.",
      "Round Robin: fair for interactive systems; time slice matters.",
      "Turnaround time = waiting time + burst time.",
    ],
    transcript:
      "The short-term scheduler runs very often — every time the CPU becomes free. Its job is to pick one process from the ready queue. Let us compare FCFS, SJF and Round Robin with the same three processes…",
  },
  {
    id: "3",
    title: "DBMS — Normalization",
    subject: "DBMS",
    lecturer: "Prof. S. Nair",
    date: "2026-10-26",
    duration: "55 min",
    status: "Ready",
    favourite: true,
    tags: ["normalization", "1NF", "2NF", "3NF"],
    summary:
      "Normalization organises tables so the same fact is not stored in several places. First Normal Form requires atomic values — no lists inside a cell. Second Normal Form removes partial dependencies on part of a composite key. Third Normal Form removes transitive dependencies, where a non-key column depends on another non-key column. The goal is to reduce redundancy and avoid update, insert, and delete anomalies.",
    keyPoints: [
      "1NF: every value is atomic.",
      "2NF: no partial dependency on part of a composite key.",
      "3NF: no transitive dependency between non-key columns.",
      "Normalizing too far can make queries slower — joins cost time.",
      "Common exam question: identify the normal form of a given table.",
    ],
    transcript:
      "Why do we normalise? Imagine a student table that also stores the course name and the course fee in every row. If the fee changes, you must update hundreds of rows — and if you miss one, the data is wrong…",
  },
  {
    id: "4",
    title: "Engineering Maths — Linear Algebra",
    subject: "Engineering Maths",
    lecturer: "Dr. K. Rao",
    date: "2026-10-25",
    duration: "60 min",
    status: "Ready",
    favourite: false,
    tags: ["matrices", "eigenvalues"],
    summary:
      "A matrix is a rectangular arrangement of numbers that represents a linear transformation. Multiplying matrices composes transformations. Eigenvalues and eigenvectors describe the directions a transformation stretches, without rotating them. They are used in engineering for vibration analysis, principal component analysis, and solving systems of differential equations.",
    keyPoints: [
      "Matrix multiplication is not commutative: AB is usually not BA.",
      "An eigenvector keeps its direction under a transformation; the eigenvalue is the stretch factor.",
      "Determinant = 0 means the matrix is singular (no inverse).",
      "Eigenvalues are found by solving det(A − λI) = 0.",
      "Applications: vibrations, PCA, Google PageRank.",
    ],
    transcript:
      "Think of a matrix as a machine that takes a vector in and gives a vector out. Most vectors come out pointing in a new direction. But some special vectors — eigenvectors — only get stretched…",
  },
  {
    id: "5",
    title: "Computer Networks — OSI Model",
    subject: "Computer Networks",
    lecturer: "Prof. M. Das",
    date: "2026-10-24",
    duration: "45 min",
    status: "Processing",
    favourite: false,
    tags: ["OSI", "layers", "TCP/IP"],
    summary:
      "The OSI model divides networking into seven layers, from the physical cable up to the application the user sees. Each layer only talks to the layer above and below it. The model is a teaching and design tool — the real internet uses TCP/IP, which groups the OSI layers into four. For exams, be able to name all seven layers and give one protocol or device at each layer.",
    keyPoints: [
      "Seven layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
      "Mnemonic: 'Please Do Not Throw Sausage Pizza Away'.",
      "Router works at the Network layer; switch at the Data Link layer.",
      "TCP is at the Transport layer; HTTP is at the Application layer.",
      "TCP/IP has four layers, not seven.",
    ],
    transcript:
      "The OSI model is not a protocol you install — it is a way to think. When something goes wrong on a network, you can ask: which layer is failing? …",
  },
  {
    id: "6",
    title: "Physics — Thermodynamics",
    subject: "Physics",
    lecturer: "Dr. L. Menon",
    date: "2026-10-23",
    duration: "50 min",
    status: "Ready",
    favourite: false,
    tags: ["thermodynamics", "entropy", "laws"],
    summary:
      "Thermodynamics studies heat, work, and energy. The first law says energy is conserved — it can change form but cannot be created or destroyed. The second law says entropy (disorder) in an isolated system never decreases, which is why heat flows from hot to cold and never the other way on its own. The third law says absolute zero cannot be reached in a finite number of steps.",
    keyPoints: [
      "First law: ΔU = Q − W (energy is conserved).",
      "Second law: entropy of an isolated system never decreases.",
      "Heat flows spontaneously from hot to cold only.",
      "Carnot efficiency depends only on the hot and cold temperatures.",
      "Third law: absolute zero (0 K) is unreachable.",
    ],
    transcript:
      "You cannot win, you cannot break even, and you cannot get out of the game — that is a rough summary of the three laws. Let us see what each one actually means for an engine…",
  },
];

export const subjects = [...new Set(dummyNotes.map((n) => n.subject))];
