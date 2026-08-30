/* Satzanalyse — Grammatikregeln nach dem Madina-Buch-Schlüssel (Teil 1)
   Lektionen wie in Shins eigener Übersicht nummeriert.

   Jede Lektion hat:
     - concepts: [{ term, explanation }]   -> Karteikarten-Modus (aktuell ungenutzt,
       da satzanalyse.html nur noch den Satzbau-Modus zeigt; Inhalt bleibt als
       Referenz/Backup erhalten)
     - questions: [...]                    -> ungenutzt, siehe oben
     - sentences: [...]                    -> Satzbau-Modus (einzig aktiver Modus)

   SATZBAU-DATENFORMAT (mehrstufig):
   Jedes Wort trägt statt einer einzelnen "role" ein "tags"-Objekt:
     { text: "هَذَا", tags: { 1: "Mubtada" } }
   Der Schlüssel ist die Analyse-EBENE (1, 2, 3, ...). Ein Wort kann auf
   mehreren Ebenen unterschiedliche Rollen haben, z. B. ein Mudaf-Wort:
     { text: "كِتَابُ", tags: { 1: "Khabar", 2: "Mudaf", 3: "Marfu" } }
   Ebene 1 ist bei JEDEM Satz Mubtada/Khabar (die beiden gehören immer
   zusammen — nie das eine ohne das andere abfragen). Höhere Ebenen
   verfeinern das: Mudaf/Mudaf ilaihi, Harful-Jarr/Majrur, Na't/Man'ut,
   Fall (Marfû'/Majrur), Geschlecht (Mudhakkar/Mu'annath) — abhängig davon,
   was in der jeweiligen Lektion bereits gelehrt wurde. Wörter ohne Eintrag
   auf der aktuellen Ebene sind in dieser Runde nicht anklickbar (Füllwort
   wie وَ, oder auf dieser Ebene bereits durch eine frühere Ebene geklärt).

   WICHTIG (grammatikalisch korrekt gehalten):
   - خَلْفَ / أَمَامَ (und ähnliche Ẓuruf wie تَحْتَ) sind KEINE echten
     Präpositionen (حرف جر), sondern fungieren selbst als Mudaf – das
     folgende Wort ist ihr Mudaf ilaihi. Nur echte Partikel wie فِي، عَلَى،
     مِنْ، إِلَى werden als Harful-Jarr (حرف جر) + Majrur (مجرور) markiert.
*/

const SATZANALYSE = {

  "1": {
    concepts: [
      {
        term: "Tanwîn",
        explanation: "Der n-Laut am Ende eines Substantivs (Tanwîn, z. B. بَيْتٌ) entspricht dem deutschen unbestimmten Artikel 'ein/eine'. Ein eigenes Wort dafür gibt es im Arabischen nicht."
      },
      {
        term: "Fragepartikel أَ",
        explanation: "Wird أَ vor einen Aussagesatz gesetzt, wird daraus eine Ja/Nein-Frage: هَذَا بَيْتٌ. (Dies ist ein Haus.) → أَهَذَا بَيْتٌ؟ (Ist dies ein Haus?)"
      },
      {
        term: "Keine Kopula",
        explanation: "Das Arabische hat kein Wort, das dem deutschen 'ist' entspricht. هَذَا كِتَابٌ heißt wörtlich 'Dies Buch' und bedeutet 'Dies ist ein Buch'."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Was drückt das Tanwîn (der n-Laut) am Ende eines arabischen Substantivs aus?",
        choices: ["den bestimmten Artikel 'der/die/das'", "den unbestimmten Artikel 'ein/eine'", "die Mehrzahl", "die Verneinung"],
        correct: "den unbestimmten Artikel 'ein/eine'"
      },
      {
        type: "tf",
        statement: "<span class='ar'>أَهَذَا بَيْتٌ؟</span> bedeutet 'Ist dies ein Haus?'",
        correct: true
      },
      {
        type: "tf",
        statement: "Das Arabische hat ein eigenes Wort für 'ist' (eine Kopula).",
        correct: false,
        explanation: "Das Arabische hat keine Kopula – 'ist' wird nicht ausgesprochen."
      }
    ],
    sentences: [
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"وَلَدٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Junge." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بَيْتٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Haus." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"طَالِبٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Student." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"مَسْجِدٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Moschee." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"كِتَابٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Buch." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"قَلَمٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Stift." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"كَلْبٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Hund." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"حِصَانٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Pferd." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"رَجُلٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Mann." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بَابٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Tür." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"مِفْتَاحٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Schlüssel." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"جَمَلٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Kamel." }
    ]
  },

  "2": {
    concepts: [
      {
        term: "Bestimmter Artikel ال",
        explanation: "Wird 'al' vor ein Substantiv gestellt, entspricht es dem deutschen 'der/die/das'. Das Tanwîn (unbestimmter Artikel) entfällt dann: بَيْتٌ (ein Haus) → الْبَيْتُ (das Haus)."
      },
      {
        term: "Hamzatu l-wasl",
        explanation: "Das 'a' von 'al' wird nur ausgesprochen, wenn kein Wort davorsteht. Nach وَ ('und') entfällt es: وَالْبَيْتُ wird 'wa l-baitu' ausgesprochen, nicht 'wa al-baitu'."
      },
      {
        term: "Adjektive ohne Tanwîn-Regel",
        explanation: "Adjektive wie مَفْتُوحٌ ('offen') oder مَكْسُورٌ ('kaputt') folgen der Tanwîn-Regel nicht wie normale Substantive – sie behalten ihr eigenes Muster unabhängig vom Artikel des Substantivs, das sie beschreiben."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Wie verändert sich <span class='ar'>بَيْتٌ</span> (ein Haus), wenn man den bestimmten Artikel davorsetzt?",
        choices: ["<span class='ar'>بَيْتٌ</span> bleibt gleich", "<span class='ar'>الْبَيْتُ</span> – Tanwîn entfällt", "<span class='ar'>بَيْتٌال</span>", "<span class='ar'>الْبَيْتٌ</span> – Tanwîn bleibt"],
        correct: "<span class='ar'>الْبَيْتُ</span> – Tanwîn entfällt"
      },
      {
        type: "tf",
        statement: "Das 'a' von 'al' wird immer ausgesprochen, egal was davorsteht.",
        correct: false,
        explanation: "Steht ein Wort davor (z. B. وَ), entfällt das 'a' in der Aussprache – das nennt man Hamzatu l-wasl."
      }
    ],
    sentences: [
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"بَيْتٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"مَسْجِدٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist ein Haus, und das ist eine Moschee." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"إِمَامٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"طَالِبٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist ein Imam, und das ist ein Student." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"سُكَّرٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"لَبَنٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist Zucker, und das ist Milch." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"حَجَرٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"قَلَمٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist ein Stein, und das ist ein Stift." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"كِتَابٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"مِفْتَاحٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist ein Buch, und das ist ein Schlüssel." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"وَلَدٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"رَجُلٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist ein Junge, und das ist ein Mann." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"مَسْجِدٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"بَيْتٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist eine Moschee, und das ist ein Haus." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"طَبِيبٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"تَاجِرٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist ein Arzt, und das ist ein Händler." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"كَلْبٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"حِمَارٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist ein Hund, und das ist ein Esel." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"حَجَرٌ", tags:{1:"Khabar",2:"Unbestimmt"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"سُكَّرٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies ist ein Stein, und das ist Zucker." }
    ]
  },

  "3": {
    concepts: [
      {
        term: "Sonnenbuchstaben",
        explanation: "Vor den 14 Sonnenbuchstaben (z. B. ت ن ر س) wird das 'l' von 'al' an den folgenden Buchstaben assimiliert. Geschrieben bleibt 'al' stehen, aber ausgesprochen wird nur der doppelte Buchstabe: الشَّمْسُ = ash-shamsu."
      },
      {
        term: "Mondbuchstaben",
        explanation: "Vor den 14 Mondbuchstaben (z. B. ب و م ك) findet keine Assimilation statt. الْقَمَرُ wird ganz normal al-qamaru ausgesprochen."
      },
      {
        term: "Erkennungszeichen Shadda",
        explanation: "Bei Sonnenbuchstaben zeigt ein Shadda auf dem ersten Buchstaben des Wortes die Assimilation an, auch wenn 'al' im Schriftbild unverändert bleibt."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Wie wird <span class='ar'>الشَّمْسُ</span> (die Sonne) ausgesprochen?",
        choices: ["al-shamsu", "ash-shamsu", "al-samsu", "asch-al-shamsu"],
        correct: "ash-shamsu",
        explanation: "ش ist ein Sonnenbuchstabe, das 'l' von 'al' wird an ihn assimiliert."
      },
      {
        type: "tf",
        statement: "<span class='ar'>الْقَمَرُ</span> (der Mond) wird 'al-qamaru' ausgesprochen, weil ق ein Mondbuchstabe ist.",
        correct: true
      }
    ],
    sentences: [
      { words: [{text:"الْبَابُ", tags:{1:"Mubtada"}}, {text:"مَفْتُوحٌ", tags:{1:"Khabar"}}], translation: "Die Tür ist offen." },
      { words: [{text:"الْقَلَمُ", tags:{1:"Mubtada"}}, {text:"مَكْسُورٌ", tags:{1:"Khabar"}}], translation: "Der Stift ist kaputt." },
      { words: [{text:"الرَّجُلُ", tags:{1:"Mubtada"}}, {text:"غَنِيٌّ", tags:{1:"Khabar"}}], translation: "Der Mann ist reich." },
      { words: [{text:"الْوَلَدُ", tags:{1:"Mubtada"}}, {text:"فَقِيرٌ", tags:{1:"Khabar"}}], translation: "Der Junge ist arm." },
      { words: [{text:"الطَّالِبُ", tags:{1:"Mubtada"}}, {text:"طَوِيلٌ", tags:{1:"Khabar"}}], translation: "Der Student ist groß." },
      { words: [{text:"الْبَيْتُ", tags:{1:"Mubtada"}}, {text:"قَدِيمٌ", tags:{1:"Khabar"}}], translation: "Das Haus ist alt." },
      { words: [{text:"الشَّمْسُ", tags:{1:"Mubtada"}}, {text:"حَارَّةٌ", tags:{1:"Khabar"}}], translation: "Die Sonne ist heiß." },
      { words: [{text:"الْقَمَرُ", tags:{1:"Mubtada"}}, {text:"بَعِيدٌ", tags:{1:"Khabar"}}], translation: "Der Mond ist fern." },
      { words: [{text:"النَّجْمُ", tags:{1:"Mubtada"}}, {text:"صَغِيرٌ", tags:{1:"Khabar"}}], translation: "Der Stern ist klein." },
      { words: [{text:"الدِّيكُ", tags:{1:"Mubtada"}}, {text:"جَالِسٌ", tags:{1:"Khabar"}}], translation: "Der Hahn sitzt." },
      { words: [{text:"الطَّالِبُ", tags:{1:"Mubtada"}}, {text:"وَاقِفٌ", tags:{1:"Khabar"}}], translation: "Der Student steht." },
      { words: [{text:"الْقَلَمُ", tags:{1:"Mubtada"}}, {text:"جَدِيدٌ", tags:{1:"Khabar"}}], translation: "Der Stift ist neu." }
    ]
  },

  "4": {
    concepts: [
      {
        term: "Nominativ (marfû')",
        explanation: "Die normale Endung eines Substantivs ist '-u' (Damma). Das ist der Nominativ, z. B. الْبَيْتُ جَدِيدٌ (Das Haus ist neu)."
      },
      {
        term: "Genitiv nach Präposition (majrûr)",
        explanation: "Nach einer Präposition ändert sich die Endung zu '-i' (Kasra), z. B. فِي الْبَيْتِ (in dem Haus), عَلَى الْمَكْتَبِ (auf dem Schreibtisch)."
      },
      {
        term: "هُوَ / هِيَ",
        explanation: "هُوَ ('er/es') steht für männliche, هِيَ ('sie/es') für weibliche Substantive – egal ob Mensch, Tier oder Sache."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Welche Endung bekommt ein Substantiv nach einer Präposition wie <span class='ar'>فِي</span> oder <span class='ar'>عَلَى</span>?",
        choices: ["-u (Damma)", "-i (Kasra)", "-a (Fatha)", "keine Endung"],
        correct: "-i (Kasra)"
      },
      {
        type: "tf",
        statement: "<span class='ar'>هُوَ</span> wird für weibliche Substantive verwendet.",
        correct: false,
        explanation: "هُوَ steht für männliche, هِيَ für weibliche Substantive."
      }
    ],
    sentences: [
      { words: [{text:"بِلَالٌ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"فِي", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْمَسْجِدِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Bilâl ist in der Moschee." },
      { words: [{text:"هُوَ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"عَلَى", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْمَكْتَبِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Es ist auf dem Schreibtisch." },
      { words: [{text:"هِيَ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"فِي", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْبَيْتِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Sie ist im Haus." },
      { words: [{text:"الْقَلَمُ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"عَلَى", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْمَكْتَبِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Der Stift ist auf dem Schreibtisch." },
      { words: [{text:"الطَّالِبُ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"فِي", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْفَصْلِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Der Student ist im Klassenzimmer." },
      { words: [{text:"الْحَمَّامُ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"فِي", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْبَيْتِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Das Badezimmer ist im Haus." },
      { words: [{text:"هُوَ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"فِي", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْمَطْبَخِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Er ist in der Küche." },
      { words: [{text:"هِيَ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"عَلَى", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"السَّرِيرِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Sie (es) ist auf dem Bett." },
      { words: [{text:"الْمِفْتَاحُ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"عَلَى", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْكُرْسِيِّ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Der Schlüssel ist auf dem Stuhl." },
      { words: [{text:"الْقِطَّةُ", tags:{1:"Mubtada",2:"Marfu"}}, {text:"فِي", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"الْغُرْفَةِ", tags:{1:"Khabar",2:"Majrur",3:"Majrur"}}], translation: "Die Katze ist im Zimmer." }
    ]
  },

  "5": {
    concepts: [
      {
        term: "Mudâf",
        explanation: "Das erste Wort einer Idafa-Konstruktion (das Besitztum) steht ohne jeden Artikel – weder bestimmt noch unbestimmt, z. B. كِتَابُ بِلَالٍ (Bilâls Buch)."
      },
      {
        term: "Mudâf ilaihi",
        explanation: "Das zweite Wort (der Besitzer) steht im Genitiv – entweder mit Tanwîn oder mit bestimmtem Artikel, z. B. بَيْتُ الْإِمَامِ (das Haus des Imâms)."
      },
      {
        term: "لِمَنْ – wessen",
        explanation: "لِمَنْ ('wessen') hat keine Genitivendung, da es undeklinierbar ist – es verändert sich nie."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Welche Regel gilt für den Mudâf (erstes Wort in einer Idafa-Konstruktion)?",
        choices: ["Er bekommt immer den bestimmten Artikel", "Er bekommt nie einen Artikel (weder bestimmt noch unbestimmt)", "Er bekommt immer Tanwîn", "Er steht immer im Akkusativ"],
        correct: "Er bekommt nie einen Artikel (weder bestimmt noch unbestimmt)"
      },
      {
        type: "tf",
        statement: "Der Mudâf ilaihi (Besitzer) steht immer im Genitiv.",
        correct: true
      }
    ],
    sentences: [
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"كِتَابُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"بِلَالٍ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist Bilâls Buch." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بَيْتُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"الْإِمَامِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist das Haus des Imâms." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"مِفْتَاحُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"الْبَيْتِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist der Schlüssel des Hauses." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"ابْنُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"الطَّبِيبِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist der Sohn des Arztes." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"سَيَّارَةُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"الْعَمِّ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist das Auto des Onkels." },
      { words: [{text:"اسْمُ", tags:{1:"Mubtada",2:"Mudaf",3:"Marfu"}}, {text:"الْبِنْتِ", tags:{1:"Mubtada",2:"Mudaf ilaihi",3:"Majrur"}}, {text:"آمِنَةُ", tags:{1:"Khabar"}}], translation: "Der Name des Mädchens ist Amina." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"قَلَمُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"حَامِدٍ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist Hâmids Stift." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"حَقِيبَةُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"الطَّالِبِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist die Tasche des Studenten." },
      { words: [{text:"مَكْتَبُ", tags:{1:"Mubtada",2:"Mudaf",3:"Marfu"}}, {text:"الْمُدَرِّسِ", tags:{1:"Mubtada",2:"Mudaf ilaihi",3:"Majrur"}}, {text:"جَدِيدٌ", tags:{1:"Khabar"}}], translation: "Der Schreibtisch des Lehrers ist neu." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بَابُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"الْمَسْجِدِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist die Tür der Moschee." }
    ]
  },

  "6": {
    concepts: [
      {
        term: "Feminine Endung ة",
        explanation: "Substantive werden feminin gemacht, indem am Ende ein ة angehängt wird. Der letzte Buchstabe davor bekommt ein Fatha: مُدَرِّسٌ → مُدَرِّسَةٌ."
      },
      {
        term: "Eigene weibliche Formen",
        explanation: "Manche Wörter haben eine eigene, unabhängige weibliche Form statt der ة-Endung, z. B. أَخٌ (Bruder) / أُخْتٌ (Schwester), ابْنٌ (Sohn) / بِنْتٌ (Tochter)."
      },
      {
        term: "هَذِهِ",
        explanation: "هَذِهِ ist die weibliche Form von هَذَا. Ausgesprochen 'hâdhihi', wobei das Alif in der Schrift entfällt."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Wie bildet man aus <span class='ar'>مُدَرِّسٌ</span> (ein Lehrer) die weibliche Form?",
        choices: ["<span class='ar'>مُدَرِّسٌة</span>", "<span class='ar'>مُدَرِّسَةٌ</span>", "<span class='ar'>مُدَرِّسِينٌ</span>", "<span class='ar'>الْمُدَرِّسٌ</span>"],
        correct: "<span class='ar'>مُدَرِّسَةٌ</span>"
      },
      {
        type: "tf",
        statement: "Jedes weibliche Substantiv im Arabischen endet auf ة.",
        correct: false,
        explanation: "Manche weiblichen Wörter (z. B. أُخْتٌ – Schwester) haben eine eigene Form ohne ة-Endung."
      }
    ],
    sentences: [
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"وَلَدٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"بِنْتٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Junge, und dies ist ein Mädchen." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"يَدٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذَا", tags:{1:"Mubtada"}}, {text:"رَأْسٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Hand, und dies ist ein Kopf." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"عَيْنٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذَا", tags:{1:"Mubtada"}}, {text:"أَنْفٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Auge, und dies ist eine Nase." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"مُدَرِّسَةٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذَا", tags:{1:"Mubtada"}}, {text:"مُدَرِّسٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Lehrerin, und dies ist ein Lehrer." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"بِنْتٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذَا", tags:{1:"Mubtada"}}, {text:"وَلَدٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Mädchen, und dies ist ein Junge." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"قِطَّةٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذَا", tags:{1:"Mubtada"}}, {text:"كَلْبٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Katze, und dies ist ein Hund." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"رِجْلٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذَا", tags:{1:"Mubtada"}}, {text:"فَمٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Bein, und dies ist ein Mund." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"أُخْتٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذَا", tags:{1:"Mubtada"}}, {text:"أَخٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Schwester, und dies ist ein Bruder." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"ثَلَّاجَةٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"مِكْوَاةٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Kühlschrank, und dies ist ein Bügeleisen." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"فَمٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"عَيْنٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Mund, und dies ist ein Auge." }
    ]
  },

  "7": {
    concepts: [
      {
        term: "تِلْكَ",
        explanation: "تِلْكَ ('jene/das dort') ist die weibliche Form von ذَلِكَ ('jener/das dort', maskulin)."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Welches Wort ist die weibliche Form von <span class='ar'>ذَلِكَ</span>?",
        choices: ["<span class='ar'>هَذِهِ</span>", "<span class='ar'>تِلْكَ</span>", "<span class='ar'>هَؤُلَاءِ</span>", "<span class='ar'>أُولَئِكَ</span>"],
        correct: "<span class='ar'>تِلْكَ</span>"
      },
      {
        type: "tf",
        statement: "<span class='ar'>هَذِهِ آمِنَةُ، وَتِلْكَ مَرْيَمُ.</span> bedeutet 'Dies ist Amina, und das ist Maryam.'",
        correct: true
      }
    ],
    sentences: [
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"آمِنَةُ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"تِلْكَ", tags:{1:"Mubtada"}}, {text:"مَرْيَمُ", tags:{1:"Khabar"}}], translation: "Dies ist Amina, und das ist Maryam." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بِلَالٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"حَامِدٌ", tags:{1:"Khabar"}}], translation: "Dies ist Bilâl, und das ist Hâmid." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"دَجَاجَةٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"تِلْكَ", tags:{1:"Mubtada"}}, {text:"بَطَّةٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Henne, und das ist eine Ente." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"نَاقَةٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"تِلْكَ", tags:{1:"Mubtada"}}, {text:"بَطَّةٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Kamelstute, und das ist eine Ente." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"مُؤَذِّنٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"طَبِيبٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Muezzin, und das ist ein Arzt." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"مُمَرِّضَةٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"تِلْكَ", tags:{1:"Mubtada"}}, {text:"مُدَرِّسَةٌ", tags:{1:"Khabar"}}], translation: "Dies ist eine Krankenschwester, und das ist eine Lehrerin." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"قَلَمٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"كِتَابٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Stift, und das ist ein Buch." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"بَيْضَةٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"تِلْكَ", tags:{1:"Mubtada"}}, {text:"دَجَاجَةٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Ei, und das ist eine Henne." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"طَالِبٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"مُدَرِّسٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Student, und das ist ein Lehrer." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"مِرْوَحَةٌ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"تِلْكَ", tags:{1:"Mubtada"}}, {text:"سَاعَةٌ", tags:{1:"Khabar"}}], translation: "Dies ist ein Ventilator, und das ist eine Uhr." }
    ]
  },

  "8": {
    concepts: [
      {
        term: "Demonstrativ + bestimmtes Substantiv",
        explanation: "هَذَا الْكِتَابُ bedeutet nur 'dies Buch' – noch kein vollständiger Satz. Erst mit einem Prädikat wird daraus ein Satz: هَذَا الْكِتَابُ جَدِيدٌ (Dies Buch ist neu)."
      },
      {
        term: "Langes Alif ohne Endung",
        explanation: "An Substantive, die auf ein langes 'â' enden (z. B. أَمْرِيكَا), wird keine Fallendung angehängt – sie bleiben in jedem Fall unverändert."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Was bedeutet <span class='ar'>هَذَا الْكِتَابُ جَدِيدٌ</span>?",
        choices: ["Dies ist ein Buch.", "Dies Buch ist neu.", "Das ist neu.", "Ist dies ein Buch?"],
        correct: "Dies Buch ist neu."
      },
      {
        type: "tf",
        statement: "<span class='ar'>هَذَا الْكِتَابُ</span> allein ist bereits ein vollständiger Satz.",
        correct: false,
        explanation: "Es fehlt ein Prädikat (eine Satzaussage), um daraus einen vollständigen Satz zu machen."
      }
    ],
    sentences: [
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"الْكِتَابُ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"جَدِيدٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dies Buch ist neu." },
      { words: [{text:"ذَلِكَ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"الرَّجُلُ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"مُهَنْدِسٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Jener Mann ist ein Ingenieur." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"السَّاعَةُ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"جَمِيلَةٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Diese Uhr ist schön." },
      { words: [{text:"تِلْكَ", tags:{1:"Mubtada"}}, {text:"الْمُمَرِّضَةُ", tags:{1:"Mubtada"}}, {text:"مِنَ", tags:{1:"Khabar",2:"Harful Jarr"}}, {text:"الْيَابَانِ", tags:{1:"Khabar",2:"Majrur"}}], translation: "Jene Krankenschwester ist aus Japan." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"الْبَيْتُ", tags:{1:"Mubtada"}}, {text:"خَلْفَ", tags:{1:"Khabar",2:"Mudaf"}}, {text:"الْمَسْجِدِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies Haus ist hinter der Moschee." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"أَمْرِيكَا", tags:{1:"Khabar"}}], translation: "Dies ist Amerika." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"الْوَلَدُ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"مُجْتَهِدٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Dieser Junge ist fleißig." },
      { words: [{text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"الطَّالِبُ", tags:{1:"Mubtada"}}, {text:"فِي", tags:{1:"Khabar",2:"Harful Jarr"}}, {text:"الْفَصْلِ", tags:{1:"Khabar",2:"Majrur"}}], translation: "Jener Student ist im Klassenzimmer." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"الْمَدْرَسَةُ", tags:{1:"Mubtada",2:"Bestimmt"}}, {text:"كَبِيرَةٌ", tags:{1:"Khabar",2:"Unbestimmt"}}], translation: "Diese Schule ist groß." },
      { words: [{text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"الْبَيْتُ", tags:{1:"Mubtada"}}, {text:"أَمَامَ", tags:{1:"Khabar",2:"Mudaf"}}, {text:"السُّوقِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Jenes Haus ist vor dem Markt." }
    ]
  },

  "9a": {
    concepts: [
      {
        term: "Adjektiv nach dem Substantiv",
        explanation: "Im Arabischen steht das Adjektiv (نعت) NACH dem Substantiv (منعوت), das es näher bestimmt – anders als im Deutschen: بَيْتٌ جَدِيدٌ (ein neues Haus)."
      },
      {
        term: "Übereinstimmung im Geschlecht",
        explanation: "Das Adjektiv stimmt im Geschlecht mit dem Substantiv überein: وَلَدٌ صَغِيرٌ (ein kleiner Junge) / بِنْتٌ صَغِيرَةٌ (ein kleines Mädchen)."
      },
      {
        term: "Übereinstimmung in Bestimmtheit",
        explanation: "Ist das Substantiv bestimmt (mit ال), muss auch das Adjektiv bestimmt sein: الْمُدَرِّسُ الْجَدِيدُ (der neue Lehrer)."
      },
      {
        term: "Übereinstimmung im Fall",
        explanation: "Das Adjektiv steht immer im gleichen grammatikalischen Fall (Nominativ/Genitiv/Akkusativ) wie das Substantiv, das es beschreibt."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Wo steht das Adjektiv im arabischen Satz im Vergleich zum Substantiv?",
        choices: ["Davor, wie im Deutschen", "Danach", "Es gibt keine feste Regel", "Am Satzende, unabhängig vom Substantiv"],
        correct: "Danach"
      },
      {
        type: "mc",
        question: "Welche Form ist korrekt für 'der neue Lehrer' (bestimmt)?",
        choices: ["<span class='ar'>مُدَرِّسٌ جَدِيدٌ</span>", "<span class='ar'>الْمُدَرِّسُ جَدِيدٌ</span>", "<span class='ar'>الْمُدَرِّسُ الْجَدِيدُ</span>", "<span class='ar'>مُدَرِّسٌ الْجَدِيدُ</span>"],
        correct: "<span class='ar'>الْمُدَرِّسُ الْجَدِيدُ</span>",
        explanation: "Ist das Substantiv bestimmt, muss auch das Adjektiv den bestimmten Artikel bekommen."
      },
      {
        type: "tf",
        statement: "Das Adjektiv muss immer im gleichen grammatikalischen Fall stehen wie das Substantiv, das es beschreibt.",
        correct: true
      }
    ],
    sentences: [
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بَيْتٌ", tags:{1:"Khabar",2:"Man'ut",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}, {text:"جَدِيدٌ", tags:{1:"Khabar",2:"Na't",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}], translation: "Dies ist ein neues Haus." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"بِنْتٌ", tags:{1:"Khabar",2:"Man'ut",3:"Muannath",4:"Unbestimmt",5:"Marfu"}}, {text:"صَغِيرَةٌ", tags:{1:"Khabar",2:"Na't",3:"Muannath",4:"Unbestimmt",5:"Marfu"}}], translation: "Dies ist ein kleines Mädchen." },
      { words: [{text:"بِلَالٌ", tags:{1:"Mubtada"}}, {text:"مُدَرِّسٌ", tags:{1:"Khabar",2:"Man'ut",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}, {text:"جَدِيدٌ", tags:{1:"Khabar",2:"Na't",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}], translation: "Bilâl ist ein neuer Lehrer." },
      { words: [{text:"الْمُدَرِّسُ", tags:{1:"Mubtada",2:"Man'ut",3:"Mudhakkar",4:"Bestimmt",5:"Marfu"}}, {text:"الْجَدِيدُ", tags:{1:"Mubtada",2:"Na't",3:"Mudhakkar",4:"Bestimmt",5:"Marfu"}}, {text:"فِي", tags:{1:"Khabar",2:"Harful Jarr"}}, {text:"الْفَصْلِ", tags:{1:"Khabar",2:"Majrur",5:"Majrur"}}], translation: "Der neue Lehrer ist im Klassenzimmer." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"وَلَدٌ", tags:{1:"Khabar",2:"Man'ut",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}, {text:"صَغِيرٌ", tags:{1:"Khabar",2:"Na't",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}], translation: "Dies ist ein kleiner Junge." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"سَيَّارَةٌ", tags:{1:"Khabar",2:"Man'ut",3:"Muannath",4:"Unbestimmt",5:"Marfu"}}, {text:"جَدِيدَةٌ", tags:{1:"Khabar",2:"Na't",3:"Muannath",4:"Unbestimmt",5:"Marfu"}}], translation: "Dies ist ein neues Auto." },
      { words: [{text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"رَجُلٌ", tags:{1:"Khabar",2:"Man'ut",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}, {text:"طَوِيلٌ", tags:{1:"Khabar",2:"Na't",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}], translation: "Jener ist ein großer Mann." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"طَالِبٌ", tags:{1:"Khabar",2:"Man'ut",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}, {text:"مُجْتَهِدٌ", tags:{1:"Khabar",2:"Na't",3:"Mudhakkar",4:"Unbestimmt",5:"Marfu"}}], translation: "Dies ist ein fleißiger Student." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"مَدِينَةٌ", tags:{1:"Khabar",2:"Man'ut",3:"Muannath",4:"Unbestimmt",5:"Marfu"}}, {text:"جَمِيلَةٌ", tags:{1:"Khabar",2:"Na't",3:"Muannath",4:"Unbestimmt",5:"Marfu"}}], translation: "Dies ist eine schöne Stadt." },
      { words: [{text:"الْبِنْتُ", tags:{1:"Mubtada",2:"Man'ut",3:"Muannath",4:"Bestimmt",5:"Marfu"}}, {text:"الصَّغِيرَةُ", tags:{1:"Mubtada",2:"Na't",3:"Muannath",4:"Bestimmt",5:"Marfu"}}, {text:"فِي", tags:{1:"Khabar",2:"Harful Jarr"}}, {text:"الْبَيْتِ", tags:{1:"Khabar",2:"Majrur",5:"Majrur"}}], translation: "Das kleine Mädchen ist im Haus." }
    ]
  },

  "9b": {
    concepts: [
      {
        term: "الَّذِي / الَّتِي — Relativpronomen",
        explanation: "الَّذِي ('der, welcher') wird für ein einzelnes männliches Substantiv verwendet, الَّتِي ('die, welche') für ein einzelnes weibliches. Das Bezugswort davor muss bestimmt sein (mit ال)."
      },
      {
        term: "Relativsatz als erweiterte Beschreibung",
        explanation: "Ein Relativsatz mit الَّذِي/الَّتِي funktioniert wie ein ausführliches Adjektiv: Bezugswort + Relativpronomen + Beschreibung bilden zusammen den Mubtada (oder Teil des Khabar), z. B. الْبَيْتُ الَّذِي أَمَامَ الْمَسْجِدِ (das Haus, das vor der Moschee ist)."
      },
      {
        term: "Relativsatz = Na't, Bezugswort = Man'ut",
        explanation: "Grammatikalisch fungiert der gesamte Relativsatz (الَّذِي + Beschreibung) wie ein Na't (Adjektiv) zum Bezugswort davor, das dann Man'ut ist – genau wie bei einem einfachen Adjektiv, nur ausführlicher. Das Relativpronomen selbst ist der Kopf dieses Na't-Satzes."
      },
      {
        term: "لـ + ال",
        explanation: "Wird die Präposition لـ ('gehören zu') mit einem Wort verbunden, das den Artikel ال trägt, entfällt das Alif von ال in der Schrift: لِلْإِمَامِ statt لِالْإِمَامِ."
      },
      {
        term: "عِنْدَ — 'bei, mit'",
        explanation: "عِنْدَ bedeutet 'bei' oder 'mit'. Das folgende Substantiv steht im Genitiv (Kasra): الْمُدَرِّسُ عِنْدَ الْمُدِيرِ (Der Lehrer ist beim Direktor)."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Welches Relativpronomen passt zu einem weiblichen Substantiv wie <span class='ar'>السَّاعَةُ</span>?",
        choices: ["<span class='ar'>الَّذِي</span>", "<span class='ar'>الَّتِي</span>", "<span class='ar'>هَذِهِ</span>", "<span class='ar'>تِلْكَ</span>"],
        correct: "<span class='ar'>الَّتِي</span>"
      },
      {
        type: "tf",
        statement: "<span class='ar'>الَّذِي</span> wird für weibliche Substantive verwendet.",
        correct: false,
        explanation: "الَّذِي ist die männliche Form, الَّتِي die weibliche."
      },
      {
        type: "tf",
        statement: "Das Bezugswort vor einem Relativpronomen muss bestimmt sein (mit ال).",
        correct: true
      }
    ],
    sentences: [
      { words: [{text:"الرَّجُلُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّذِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"فِي", tags:{1:"Mubtada",2:"Na't",3:"Harful Jarr"}}, {text:"الْمَسْجِدِ", tags:{1:"Mubtada",2:"Na't",3:"Majrur"}}, {text:"إِمَامٌ", tags:{1:"Khabar"}}], translation: "Der Mann, der in der Moschee ist, ist ein Imam." },
      { words: [{text:"الْبَيْتُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّذِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"أَمَامَ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf"}}, {text:"الْمَسْجِدِ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf ilaihi"}}, {text:"جَمِيلٌ", tags:{1:"Khabar"}}], translation: "Das Haus, das vor der Moschee ist, ist schön." },
      { words: [{text:"السَّاعَةُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّتِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"عَلَى", tags:{1:"Mubtada",2:"Na't",3:"Harful Jarr"}}, {text:"الْمَكْتَبِ", tags:{1:"Mubtada",2:"Na't",3:"Majrur"}}, {text:"جَدِيدَةٌ", tags:{1:"Khabar"}}], translation: "Die Uhr, die auf dem Schreibtisch ist, ist neu." },
      { words: [{text:"الطَّالِبُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّذِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"فِي", tags:{1:"Mubtada",2:"Na't",3:"Harful Jarr"}}, {text:"الْفَصْلِ", tags:{1:"Mubtada",2:"Na't",3:"Majrur"}}, {text:"مُجْتَهِدٌ", tags:{1:"Khabar"}}], translation: "Der Student, der im Klassenzimmer ist, ist fleißig." },
      { words: [{text:"السَّيَّارَةُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّتِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"أَمَامَ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf"}}, {text:"الْبَيْتِ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf ilaihi"}}, {text:"جَدِيدَةٌ", tags:{1:"Khabar"}}], translation: "Das Auto, das vor dem Haus ist, ist neu." },
      { words: [{text:"الْكِتَابُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّذِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"عَلَى", tags:{1:"Mubtada",2:"Na't",3:"Harful Jarr"}}, {text:"الْمَكْتَبِ", tags:{1:"Mubtada",2:"Na't",3:"Majrur"}}, {text:"قَدِيمٌ", tags:{1:"Khabar"}}], translation: "Das Buch, das auf dem Schreibtisch ist, ist alt." },
      { words: [{text:"الْقَلَمُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّذِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"فِي", tags:{1:"Mubtada",2:"Na't",3:"Harful Jarr"}}, {text:"الْحَقِيبَةِ", tags:{1:"Mubtada",2:"Na't",3:"Majrur"}}, {text:"جَدِيدٌ", tags:{1:"Khabar"}}], translation: "Der Stift, der in der Tasche ist, ist neu." },
      { words: [{text:"الْبِنْتُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّتِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"فِي", tags:{1:"Mubtada",2:"Na't",3:"Harful Jarr"}}, {text:"الْفَصْلِ", tags:{1:"Mubtada",2:"Na't",3:"Majrur"}}, {text:"صَغِيرَةٌ", tags:{1:"Khabar"}}], translation: "Das Mädchen, das im Klassenzimmer ist, ist klein." },
      { words: [{text:"الْوَلَدُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّذِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"خَلْفَ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf"}}, {text:"الْبَيْتِ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf ilaihi"}}, {text:"مُجْتَهِدٌ", tags:{1:"Khabar"}}], translation: "Der Junge, der hinter dem Haus ist, ist fleißig." },
      { words: [{text:"الْمَسْجِدُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّذِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"أَمَامَ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf"}}, {text:"السُّوقِ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf ilaihi"}}, {text:"كَبِيرٌ", tags:{1:"Khabar"}}], translation: "Die Moschee, die vor dem Markt ist, ist groß." }
    ]
  }

};

const SATZANALYSE_LABELS = {
  "1": "Lektion 1",
  "2": "Lektion 2",
  "3": "Lektion 3",
  "4": "Lektion 4",
  "5": "Lektion 5",
  "6": "Lektion 6",
  "7": "Lektion 7",
  "8": "Lektion 8",
  "9a": "Lektion 9a",
  "9b": "Lektion 9b"
};