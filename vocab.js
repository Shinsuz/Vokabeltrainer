/* ============================================================
   DEINE VOKABELN
   ------------------------------------------------------------
   Vokabeln sind in Lektionen aufgeteilt. Jede Lektion ist ein
   eigenes Array, ein Eintrag pro Vokabel, nach diesem Muster:

     { arabic: "كِتَابٌ", german: "ein Buch" },

   Diakritika (Fatha/Kasra/etc.) sind optional beim Eintragen,
   machen die Karten aber leichter lesbar — im Trainer kannst du
   sie per Schalter sowieso ein-/ausblenden.

   Neue Lektion hinzufügen: einfach LESSONS[6] = [ ... ] ergänzen
   und optional in LESSON_LABELS einen Namen vergeben. Der Button
   dafür erscheint dann automatisch oben im Trainer.

   PNG-Workflow: schick mir ein Foto/Screenshot einer Vokabel-
   liste, ich lese die Wörter aus und liefere dir den fertigen
   Array-Block zum Reinkopieren — du musst nichts abtippen.
   ============================================================ */

const LESSONS = {

  1: [
    { arabic: "بَيْتٌ", german: "ein Haus" },
    { arabic: "مَسْجِدٌ", german: "eine Moschee" },
    { arabic: "بَابٌ", german: "eine Tür" },
    { arabic: "كِتَابٌ", german: "ein Buch" },
    { arabic: "قَلَمٌ", german: "ein Stift" },
    { arabic: "مِفْتَاحٌ", german: "ein Schlüssel" },
    { arabic: "مَكْتَبٌ", german: "ein Schreibtisch" },
    { arabic: "سَرِيرٌ", german: "ein Bett" },
    { arabic: "كُرْسِيٌّ", german: "ein Stuhl" },
    { arabic: "نَجْمٌ", german: "ein Stern" },
    { arabic: "قَمِيصٌ", german: "ein Hemd" },
    { arabic: "طَبِيبٌ", german: "ein Arzt" },
    { arabic: "نَعَمْ", german: "ja" },
    { arabic: "أَ", german: "Fragepartikel (vor Entscheidungsfragen, direkt vor dem Folgewort)" },
    { arabic: "وَ", german: "und (direkt vor dem Folgewort)" },
    { arabic: "وَلَدٌ", german: "ein Junge" },
    { arabic: "طَالِبٌ", german: "ein Student" },
    { arabic: "رَجُلٌ", german: "ein Mann" },
    { arabic: "تَاجِرٌ", german: "ein Händler" },
    { arabic: "كَلْبٌ", german: "ein Hund" },
    { arabic: "قِطٌّ", german: "ein Kater" },
    { arabic: "حِمَارٌ", german: "ein Esel" },
    { arabic: "حِصَانٌ", german: "ein Pferd" },
    { arabic: "جَمَلٌ", german: "ein Kamel" },
    { arabic: "دِيكٌ", german: "ein Hahn" },
    { arabic: "مُدَرِّسٌ", german: "ein Lehrer" },
    { arabic: "مِنْدِيلٌ", german: "ein Tuch (auch: Papiertaschentuch oder Serviette)" },
    { arabic: "لَا", german: "nein" },
    { arabic: "مَا", german: "was" },
  ],

  2: [
    { arabic: "إِمَامٌ", german: "ein Imam" },
    { arabic: "سُكَّرٌ", german: "Zucker" },
    { arabic: "حَجَرٌ", german: "ein Stein" },
    { arabic: "لَبَنٌ", german: "Milch" },
  ],

  3: [
    { arabic: "غَنِيٌّ", german: "reich" },
    { arabic: "فَقِيرٌ", german: "arm" },
    { arabic: "طَوِيلٌ", german: "groß (lang)" },
    { arabic: "قَصِيرٌ", german: "kurz" },
    { arabic: "بَارِدٌ", german: "kalt" },
    { arabic: "حَارٌّ", german: "heiß" },
    { arabic: "جَالِسٌ", german: "sitzend" },
    { arabic: "وَاقِفٌ", german: "stehend" },
    { arabic: "جَدِيدٌ", german: "neu" },
    { arabic: "قَدِيمٌ", german: "alt" },
    { arabic: "قَرِيبٌ", german: "nah" },
    { arabic: "بَعِيدٌ", german: "fern" },
    { arabic: "نَظِيفٌ", german: "sauber" },
    { arabic: "وَسِخٌ", german: "schmutzig" },
    { arabic: "صَغِيرٌ", german: "klein" },
    { arabic: "كَبِيرٌ", german: "groß" },
    { arabic: "خَفِيفٌ", german: "leicht" },
    { arabic: "ثَقِيلٌ", german: "schwer" },
    { arabic: "الْوَرَقُ", german: "das Papier" },
    { arabic: "الْمَاءُ", german: "das Wasser" },
    { arabic: "التُّفَاحُ", german: "die Äpfel" },
    { arabic: "جَمِيلٌ", german: "schön" },
    { arabic: "الدُّكَّانُ", german: "das Geschäft" },
    { arabic: "حُلْوٌ", german: "süß" },
    { arabic: "مَرِيضٌ", german: "krank" },
  ],

  4: [
    { arabic: "أَيْنَ", german: "wo" },
    { arabic: "عَلَى", german: "auf" },
    { arabic: "غُرْفَةٌ", german: "ein Zimmer" },
    { arabic: "السَّمَاءُ", german: "der Himmel" },
    { arabic: "الْحَمَّامُ", german: "das Badezimmer" },
    { arabic: "الْفَصْلُ", german: "das Klassenzimmer" },
    { arabic: "الْمَطْبَخُ", german: "die Küche" },
    { arabic: "الْمِرْحَاضُ", german: "die Toilette" },
    { arabic: "فِي", german: "in" },
    { arabic: "مِنْ", german: "von (wenn الـ nachfolgt, wird es zu مِنَ)" },
    { arabic: "إِلَى", german: "nach" },
    { arabic: "الْفِلِبِّينُ", german: "Philippinen" },
    { arabic: "الْيَابَانُ", german: "Japan" },
    { arabic: "الْمَدْرَسَةُ", german: "die Schule" },
    { arabic: "الصِّينُ", german: "China" },
    { arabic: "السُّوقُ", german: "der Markt" },
    { arabic: "الْهِنْدُ", german: "Indien" },
    { arabic: "الْجَامِعَةُ", german: "die Universität" },
    { arabic: "الْمُدِيرُ", german: "der Direktor" },
  ],

  5: [
    { arabic: "الرَّسُولُ", german: "der Gesandte" },
    { arabic: "تَحْتَ", german: "unter" },
    { arabic: "الْعَمُّ", german: "der Onkel (Bruder des Vaters)" },
    { arabic: "الِابْنُ", german: "der Sohn" },
    { arabic: "الشَّارِعُ", german: "die Straße" },
    { arabic: "السَّيَّارَةُ", german: "das Auto" },
    { arabic: "الْكَعْبَةُ", german: "die Kaaba" },
    { arabic: "هُنَا", german: "hier" },
    { arabic: "الْخَالُ", german: "der Onkel (Bruder der Mutter)" },
    { arabic: "هُنَاكَ", german: "dort" },
    { arabic: "مُغْلَق", german: "verschlossen, geschlossen" },
    { arabic: "الْبِنْتُ", german: "die Tochter, das Mädchen" },
    { arabic: "الِاسْمُ", german: "der Name" },
    { arabic: "الطَّبِيبُ", german: "der Arzt" },
    { arabic: "الْحَقِيبَةُ", german: "die Tasche, der Rucksack" },
  ],

};

// optionale Namen für die Lektions-Buttons — ohne Eintrag heißt der Button "Lektion N"
const LESSON_LABELS = {
  1: "Lektion 1",
  2: "Lektion 2",
  3: "Lektion 3",
  4: "Lektion 4",
  5: "Lektion 5",
};