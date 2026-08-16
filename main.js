/* ==========================================================================
   SATZANALYSE — Datenbank (Wort-zu-Rolle-Zuordnung)

   Eigene Lektionsstufung (unabhängig von den Buch-Lektionen), kumulativ:
     Lektion 1: Tanwin & Fragepartikel, Demonstrativpronomen
     Lektion 2: + bestimmt & unbestimmt
     Lektion 3: + هُوَ / هَذَا als Mubtada (Pronomen)
     Lektion 4: + Genetiv, Nominativ, Präpositionen
     Lektion 5: + alles kombiniert: Mudaf, Mudaf ilaihi
     Lektion 6: + weibliche Wortformen mit ة
     Lektion 7: + weibliche Version von "jenes" (تِلْكَ)

   Jede Lektion hat:
     - sentences: Liste von Sätzen, jeder Satz ist eine Liste von Wörtern
       mit { ar: "...", role: "tag-id" }
   TAGS_PER_LESSON legt fest, welche Rollen-Chips in einer Lektion
   angezeigt werden (id + Anzeigename), kumulativ aufgebaut.
   ========================================================================== */

const SATZANALYSE_LABELS = {
  1: "Lektion 1",
  2: "Lektion 2",
  3: "Lektion 3",
  4: "Lektion 4",
  5: "Lektion 5",
  6: "Lektion 6",
  7: "Lektion 7"
};

const TAGS_PER_LESSON = {
  1: [
    { id: "mubtada", label: "Mubtada (Satzgegenstand)" },
    { id: "khabar",  label: "Khabar (Satzaussage)" }
  ],
  2: [
    { id: "mubtada", label: "Mubtada (Satzgegenstand)" },
    { id: "khabar",  label: "Khabar (Satzaussage)" }
  ],
  3: [
    { id: "mubtada", label: "Mubtada (Satzgegenstand)" },
    { id: "khabar",  label: "Khabar (Satzaussage)" }
  ],
  4: [
    { id: "mubtada",              label: "Mubtada (Satzgegenstand)" },
    { id: "khabar",               label: "Khabar (Satzaussage)" },
    { id: "praeposition",         label: "Präposition" },
    { id: "praepositionalobjekt", label: "Präpositionalobjekt (Genetiv)" }
  ],
  5: [
    { id: "mubtada",              label: "Mubtada (Satzgegenstand)" },
    { id: "khabar",               label: "Khabar (Satzaussage)" },
    { id: "praeposition",         label: "Präposition" },
    { id: "praepositionalobjekt", label: "Präpositionalobjekt (Genetiv)" },
    { id: "mudaf",                label: "Mudaf" },
    { id: "mudaf-ilaihi",         label: "Mudaf ilaihi" }
  ],
  6: [
    { id: "mubtada",              label: "Mubtada (Satzgegenstand)" },
    { id: "khabar",               label: "Khabar (Satzaussage)" },
    { id: "praeposition",         label: "Präposition" },
    { id: "praepositionalobjekt", label: "Präpositionalobjekt (Genetiv)" },
    { id: "mudaf",                label: "Mudaf" },
    { id: "mudaf-ilaihi",         label: "Mudaf ilaihi" }
  ],
  7: [
    { id: "mubtada",              label: "Mubtada (Satzgegenstand)" },
    { id: "khabar",               label: "Khabar (Satzaussage)" },
    { id: "praeposition",         label: "Präposition" },
    { id: "praepositionalobjekt", label: "Präpositionalobjekt (Genetiv)" },
    { id: "mudaf",                label: "Mudaf" },
    { id: "mudaf-ilaihi",         label: "Mudaf ilaihi" }
  ]
};

const SATZANALYSE = {

  /* ===== Lektion 1: Demonstrativpronomen + einfacher Nominalsatz ===== */
  1: {
    sentences: [
      { text: "هَذَا بَيْتٌ", words: [
        { ar: "هَذَا",  role: "mubtada" },
        { ar: "بَيْتٌ", role: "khabar" }
      ]},
      { text: "هَذَا كِتَابٌ", words: [
        { ar: "هَذَا",   role: "mubtada" },
        { ar: "كِتَابٌ", role: "khabar" }
      ]},
      { text: "هَذَا مَسْجِدٌ", words: [
        { ar: "هَذَا",    role: "mubtada" },
        { ar: "مَسْجِدٌ", role: "khabar" }
      ]},
      { text: "هَذَا قَلَمٌ", words: [
        { ar: "هَذَا",   role: "mubtada" },
        { ar: "قَلَمٌ", role: "khabar" }
      ]},
      { text: "هَذَا وَلَدٌ", words: [
        { ar: "هَذَا",   role: "mubtada" },
        { ar: "وَلَدٌ", role: "khabar" }
      ]}
    ]
  },

  /* ===== Lektion 2: + bestimmt/unbestimmt, ذَلِكَ und وَ ===== */
  2: {
    sentences: [
      { text: "هَذَا بَيْتٌ وَذَلِكَ مَسْجِدٌ", words: [
        { ar: "هَذَا",     role: "mubtada" },
        { ar: "بَيْتٌ",    role: "khabar" },
        { ar: "وَذَلِكَ",  role: "mubtada" },
        { ar: "مَسْجِدٌ",  role: "khabar" }
      ]},
      { text: "الْبَيْتُ جَدِيدٌ", words: [
        { ar: "الْبَيْتُ", role: "mubtada" },
        { ar: "جَدِيدٌ",   role: "khabar" }
      ]},
      { text: "هَذَا كِتَابٌ وَذَلِكَ بَيْتٌ", words: [
        { ar: "هَذَا",    role: "mubtada" },
        { ar: "كِتَابٌ",  role: "khabar" },
        { ar: "وَذَلِكَ", role: "mubtada" },
        { ar: "بَيْتٌ",   role: "khabar" }
      ]},
      { text: "الْمَسْجِدُ جَمِيلٌ", words: [
        { ar: "الْمَسْجِدُ", role: "mubtada" },
        { ar: "جَمِيلٌ",     role: "khabar" }
      ]}
    ]
  },

  /* ===== Lektion 3: + هُوَ / هِيَ als Mubtada ===== */
  3: {
    sentences: [
      { text: "هُوَ مُدَرِّسٌ", words: [
        { ar: "هُوَ",      role: "mubtada" },
        { ar: "مُدَرِّسٌ", role: "khabar" }
      ]},
      { text: "هِيَ مُدَرِّسَةٌ", words: [
        { ar: "هِيَ",       role: "mubtada" },
        { ar: "مُدَرِّسَةٌ", role: "khabar" }
      ]},
      { text: "هُوَ طَبِيبٌ", words: [
        { ar: "هُوَ",    role: "mubtada" },
        { ar: "طَبِيبٌ", role: "khabar" }
      ]},
      { text: "هَذَا مُدَرِّسٌ", words: [
        { ar: "هَذَا",     role: "mubtada" },
        { ar: "مُدَرِّسٌ", role: "khabar" }
      ]}
    ]
  },

  /* ===== Lektion 4: + Präposition + Präpositionalobjekt (Genetiv) ===== */
  4: {
    sentences: [
      { text: "هُوَ فِي الْمَسْجِدِ", words: [
        { ar: "هُوَ",         role: "mubtada" },
        { ar: "فِي",          role: "praeposition" },
        { ar: "الْمَسْجِدِ",  role: "praepositionalobjekt" }
      ]},
      { text: "هِيَ فِي الْبَيْتِ", words: [
        { ar: "هِيَ",       role: "mubtada" },
        { ar: "فِي",        role: "praeposition" },
        { ar: "الْبَيْتِ",  role: "praepositionalobjekt" }
      ]},
      { text: "الْكِتَابُ عَلَى الْمَكْتَبِ", words: [
        { ar: "الْكِتَابُ",  role: "mubtada" },
        { ar: "عَلَى",       role: "praeposition" },
        { ar: "الْمَكْتَبِ", role: "praepositionalobjekt" }
      ]},
      { text: "أَنَا فِي الْفَصْلِ", words: [
        { ar: "أَنَا",     role: "mubtada" },
        { ar: "فِي",       role: "praeposition" },
        { ar: "الْفَصْلِ", role: "praepositionalobjekt" }
      ]}
    ]
  },

  /* ===== Lektion 5: + Mudaf / Mudaf ilaihi, alles kombiniert ===== */
  5: {
    sentences: [
      { text: "كِتَابُ بِلَالٍ جَدِيدٌ", words: [
        { ar: "كِتَابُ",  role: "mudaf" },
        { ar: "بِلَالٍ",  role: "mudaf-ilaihi" },
        { ar: "جَدِيدٌ",  role: "khabar" }
      ]},
      { text: "بَيْتُ الإِمَامِ جَمِيلٌ", words: [
        { ar: "بَيْتُ",    role: "mudaf" },
        { ar: "الإِمَامِ", role: "mudaf-ilaihi" },
        { ar: "جَمِيلٌ",   role: "khabar" }
      ]},
      { text: "هُوَ فِي بَيْتِ الْمُدَرِّسِ", words: [
        { ar: "هُوَ",         role: "mubtada" },
        { ar: "فِي",          role: "praeposition" },
        { ar: "بَيْتِ",       role: "mudaf" },
        { ar: "الْمُدَرِّسِ", role: "mudaf-ilaihi" }
      ]},
      { text: "مَكْتَبُ الْمُدَرِّسِ جَدِيدٌ", words: [
        { ar: "مَكْتَبُ",     role: "mudaf" },
        { ar: "الْمُدَرِّسِ", role: "mudaf-ilaihi" },
        { ar: "جَدِيدٌ",      role: "khabar" }
      ]}
    ]
  },

  /* ===== Lektion 6: + weibliche Wortformen mit ة ===== */
  6: {
    sentences: [
      { text: "هَذِهِ مُدَرِّسَةٌ", words: [
        { ar: "هَذِهِ",      role: "mubtada" },
        { ar: "مُدَرِّسَةٌ", role: "khabar" }
      ]},
      { text: "بِنْتُ الْمُدَرِّسِ صَغِيرَةٌ", words: [
        { ar: "بِنْتُ",       role: "mudaf" },
        { ar: "الْمُدَرِّسِ", role: "mudaf-ilaihi" },
        { ar: "صَغِيرَةٌ",    role: "khabar" }
      ]},
      { text: "هِيَ فِي غُرْفَةٍ", words: [
        { ar: "هِيَ",      role: "mubtada" },
        { ar: "فِي",       role: "praeposition" },
        { ar: "غُرْفَةٍ",  role: "praepositionalobjekt" }
      ]},
      { text: "سَاعَةُ آمِنَةَ جَمِيلَةٌ", words: [
        { ar: "سَاعَةُ",   role: "mudaf" },
        { ar: "آمِنَةَ",   role: "mudaf-ilaihi" },
        { ar: "جَمِيلَةٌ", role: "khabar" }
      ]}
    ]
  },

  /* ===== Lektion 7: + تِلْكَ (feminine Form von ذَلِكَ) ===== */
  7: {
    sentences: [
      { text: "هَذِهِ بِنْتٌ وَتِلْكَ مُدَرِّسَةٌ", words: [
        { ar: "هَذِهِ",      role: "mubtada" },
        { ar: "بِنْتٌ",      role: "khabar" },
        { ar: "وَتِلْكَ",    role: "mubtada" },
        { ar: "مُدَرِّسَةٌ", role: "khabar" }
      ]},
      { text: "تِلْكَ سَاعَةُ آمِنَةَ", words: [
        { ar: "تِلْكَ",   role: "mubtada" },
        { ar: "سَاعَةُ",  role: "mudaf" },
        { ar: "آمِنَةَ",  role: "mudaf-ilaihi" }
      ]},
      { text: "هَذِهِ سَيَّارَةُ الْمُدَرِّسَةِ", words: [
        { ar: "هَذِهِ",          role: "mubtada" },
        { ar: "سَيَّارَةُ",      role: "mudaf" },
        { ar: "الْمُدَرِّسَةِ",  role: "mudaf-ilaihi" }
      ]},
      { text: "هِيَ فِي غُرْفَةِ الْبِنْتِ", words: [
        { ar: "هِيَ",       role: "mubtada" },
        { ar: "فِي",        role: "praeposition" },
        { ar: "غُرْفَةِ",   role: "mudaf" },
        { ar: "الْبِنْتِ",  role: "mudaf-ilaihi" }
      ]}
    ]
  }

};