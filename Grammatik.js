/* ============================================================
   DEINE GRAMMATIK
   ------------------------------------------------------------
   Genau wie bei den Vokabeln: Lektionen zum Selbst-Eintragen.
   Jede Lektion hat zwei Teile:

     concepts:   Begriffe/Regeln zum Durchlesen & Merken
                 (laufen als Karteikarten) — Format:
                 { term: "...", explanation: "..." }

     questions:  Übungsaufgaben. Zwei Typen möglich:

       Multiple Choice:
         { type: "mc", question: "...", choices: ["...", "..."],
           correct: "...", explanation: "..." }
         "correct" muss GENAU einem Eintrag aus "choices"
         entsprechen (character-genau, inkl. Diakritika).

       Richtig / Falsch:
         { type: "truefalse", statement: "...", correct: true,
           explanation: "..." }

   "explanation" ist bei beiden optional, wird aber nach der
   Antwort eingeblendet — kurz die Regel dahinter nennen reicht.

   Neue Lektion hinzufügen: einfach GRAMMAR_LESSONS[6] = { ... }
   ergänzen, optional in GRAMMAR_LABELS einen Namen vergeben.
   Der Button dafür erscheint automatisch oben im Trainer.
   ============================================================ */

const GRAMMAR_LESSONS = {

  1: {
    concepts: [
      {
        term: "Idafa (Genitivverbindung)",
        explanation: "Zwei Substantive direkt hintereinander, die zusammen \"das X des Y\" bedeuten, z. B. كِتَابُ الطَّالِبِ — \"das Buch des Studenten\"."
      },
      {
        term: "Mudaf",
        explanation: "Das ERSTE Wort der Idafa. Trägt NIE الـ (Artikel) und NIE Tanwin. Steht im Kasus, den der Satz verlangt (hier: Nominativ, Damma)."
      },
      {
        term: "Mudaf ilaihi",
        explanation: "Das ZWEITE Wort der Idafa. Steht IMMER im Genitiv (Kasra) — egal welchen Kasus der Mudaf hat. Kann bestimmt (mit الـ) oder ein Eigenname sein."
      },
      {
        term: "Doppelte Kesra bei Eigennamen als Mudaf ilaihi",
        explanation: "Ist der Mudaf ilaihi ein unbestimmter Eigenname (kein الـ), bekommt er zusätzlich Tanwin Kasra (ٍ statt bloßer Kasra), z. B. بَابُ بَيْتٍ."
      },
    ],
    questions: [
      {
        type: "mc",
        question: "كِتَابُ الطَّالِبِ — welches Wort ist der Mudaf ilaihi?",
        choices: ["كِتَابُ", "الطَّالِبِ"],
        correct: "الطَّالِبِ",
        explanation: "الطَّالِبِ steht im Genitiv (Kasra) — das zweite Wort der Idafa ist immer der Mudaf ilaihi."
      },
      {
        type: "truefalse",
        statement: "Der Mudaf kann den bestimmten Artikel الـ tragen.",
        correct: false,
        explanation: "Nur der Mudaf ilaihi kann bestimmt sein — der Mudaf selbst verliert Artikel UND Tanwin."
      },
      {
        type: "truefalse",
        statement: "Der Mudaf ilaihi steht immer im Genitiv (Kasra).",
        correct: true,
        explanation: "Feste Regel der Idafa — unabhängig davon, welchen Kasus der Mudaf gerade hat."
      },
      {
        type: "mc",
        question: "Welche Endung bekommt ein unbestimmter Eigenname als Mudaf ilaihi zusätzlich?",
        choices: ["Tanwin Damma (ٌ)", "Tanwin Kasra (ٍ)", "Tanwin Fath (ً)", "gar keine"],
        correct: "Tanwin Kasra (ٍ)",
        explanation: "Die \"doppelte Kesra\" — Kasra als Genitiv-Kasus PLUS Tanwin, weil der Name unbestimmt bleibt."
      },
    ]
  },

  2: {
    concepts: [
      {
        term: "Satzgegenstand (Subjekt / المُبْتَدَأ)",
        explanation: "Das Wort, über das im Satz etwas ausgesagt wird. Steht im Nominativ (Damma), meist am Satzanfang, meist bestimmt."
      },
      {
        term: "Satzaussage (Prädikat / الخَبَر)",
        explanation: "Das, was über den Satzgegenstand ausgesagt wird. Steht ebenfalls im Nominativ (Damma), ist oft unbestimmt."
      },
      {
        term: "Bestimmt (definit)",
        explanation: "Ein Wort ist bestimmt, wenn es الـ trägt, ein Eigenname ist, oder Mudaf ilaihi von etwas Bestimmtem ist."
      },
      {
        term: "Unbestimmt (indefinit)",
        explanation: "Ein Wort ohne الـ und ohne Eigenname-Status — erkennbar am Tanwin (ٌ ً ٍ)."
      },
    ],
    questions: [
      {
        type: "mc",
        question: "الْبَيْتُ كَبِيرٌ — was ist hier der Satzgegenstand (المُبْتَدَأ)?",
        choices: ["الْبَيْتُ", "كَبِيرٌ"],
        correct: "الْبَيْتُ",
        explanation: "الْبَيْتُ ist bestimmt (mit الـ) und steht am Satzanfang — klassischer Satzgegenstand."
      },
      {
        type: "truefalse",
        statement: "Der Satzgegenstand (المُبْتَدَأ) ist in der Regel unbestimmt.",
        correct: false,
        explanation: "Umgekehrt: der Satzgegenstand ist in der Regel BESTIMMT, die Satzaussage oft unbestimmt."
      },
    ]
  },

  3: { concepts: [], questions: [] },
  4: { concepts: [], questions: [] },
  5: { concepts: [], questions: [] },

};

// optionale Namen für die Lektions-Buttons — ohne Eintrag heißt der Button "Lektion N"
const GRAMMAR_LABELS = {
  1: "Lektion 1",
  2: "Lektion 2",
  3: "Lektion 3",
  4: "Lektion 4",
  5: "Lektion 5",
};