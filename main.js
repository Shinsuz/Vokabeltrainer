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

   Lektion 11 (I'rab): Ebene 1 = "Mabni"/"Mu'rab"; Ebene 2 = Fall bzw. bei
   mabnī-Wörtern der Mahall ("Mahallan Marfu/Majrur/Mansub"). Angehängte
   Pronomen (هُ، هَا، كَ، تُ) stehen dort als EIGENES Wort, weil man sie für
   die Analyse abtrennt. Partikel und Vergangenheitsverben haben auf Ebene 2
   keinen Eintrag (kein Mahall) und sind dort nicht anklickbar.

   Ab Lektion 12 kommen zusätzlich verbale Sätze vor (جملة فعلية); dafür
   gibt es die Rollen "Fi'l" (Verb) und "Fa'il" (Subjekt/Täter). Das
   betonende Pronomen nach einem Possessivsuffix (z. B. هَذَا كِتَابُكَ
   أَنْتَ) wird NICHT als eigene Rolle abgefragt, sondern bleibt wie
   وَ ein nicht anklickbares Füllwort — es steht dafür kein eigener
   Fachbegriff aus dem Lehrbuch zur Verfügung.

   SUFFIX-LÜCKEN (seit Lektion 10):
   Ein Wort kann zusätzlich ein "blank"-Feld bekommen:
     { text: "كِتَابُكَ", tags: {1:"Khabar"}, blank: { options: ["كِتَابُكَ","كِتَابُهُ","كِتَابُهَا","كِتَابِي"] } }
   Bevor die Mubtada/Khabar-Zuordnung beginnt, muss dann erst aus den
   "options" die richtige (= mit word.text identische) Form gewählt werden.

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
  },

  "10": {
    concepts: [
      {
        term: "Possessivsuffixe",
        explanation: "Die besitzanzeigenden Fürwörter كَ (dein, mask.), هُ (sein), هَا (ihr) und ي (mein) sind keine eigenständigen Wörter, sondern werden als Suffix an das Substantiv angehängt: كِتَابُكَ (dein Buch), كِتَابُهُ (sein Buch), كِتَابُهَا (ihr Buch), كِتَابِي (mein Buch, aus kitābu-i entstanden)."
      },
      {
        term: "Eingeschobenes و bei أَب und أَخ",
        explanation: "Werden أَبٌ (Vater) oder أَخٌ (Bruder) zum Mudâf (z. B. mit einem Possessivsuffix oder einem folgenden Substantiv), wird ein zusätzliches و eingeschoben: أَخُوكَ (dein Bruder, nicht أَخْكَ), أَبُوهُ (sein Vater, nicht أَبْهُ), أَبُو مُحَمَّدٍ (Muhammads Vater). Bei 'mein' (ي) entfällt dieses و: أَخِي, أَبِي."
      },
      {
        term: "عِنْدَ für Besitz",
        explanation: "عِنْدَ bedeutet wörtlich 'bei', wird aber auch benutzt, um Besitz auszudrücken, vor allem bei Dingen, die trennbar sind: عِنْدِي قَلَمٌ (Ich habe einen Stift, wörtlich: Bei mir ist ein Stift)."
      },
      {
        term: "لِ + Pronomen — Fatha außer bei 'mir'",
        explanation: "Die Präposition لِ ('gehören') bekommt vor einem Pronomen ein Fatha: لَكَ (gehört dir), لَهُ (gehört ihm), لَهَا (gehört ihr). Ausnahme: لِي (gehört mir) bekommt ein Kasra. لِ wird für Dinge benutzt, die untrennbar sind — Verwandtschaftsverhältnisse und Körperteile: لِي أَخٌ (ich habe einen Bruder), لِي فَمٌ (ich habe einen Mund). عِنْدِي أَخٌ wäre hier falsch."
      },
      {
        term: "عِنْدَ vs. مَعَ",
        explanation: "الْمُدَرِّسُ عِنْدَ الْمُدِيرِ bedeutet, dass der Lehrer zum Büro des Direktors gegangen ist und dort mit ihm zusammen ist — ein fester Ort. الْمُدَرِّسُ مَعَ الْمُدِيرِ legt den Ort nicht fest, die beiden können irgendwo zusammengekommen sein. Das Substantiv nach مَعَ steht wie nach عِنْدَ im Kasra."
      },
      {
        term: "بِ — zusammengeschriebene Präposition",
        explanation: "Die Präposition بِ bedeutet 'an/in' und wird mit dem folgenden Wort zusammengeschrieben, z. B. بِالْجَامِعَةِ (an der Universität)."
      },
      {
        term: "مَا als Verneinungspartikel",
        explanation: "مَا bedeutet normalerweise 'was', wird aber auch als Verneinungspartikel gebraucht: مَا عِنْدِي سَيَّارَةٌ (Ich habe kein Auto)."
      },
      {
        term: "Eigennamen ohne Tanwîn",
        explanation: "Weibliche Eigennamen (مَرْيَمُ، آمِنَةُ) sowie männliche Eigennamen mit ة-Endung (حَمْزَةُ، أُسَامَةُ، مُعَاوِيَةُ) haben kein Tanwîn."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Wie sagt man 'sein Buch' auf Arabisch?",
        choices: ["<span class='ar'>كِتَابُكَ</span>", "<span class='ar'>كِتَابُهُ</span>", "<span class='ar'>كِتَابُهَا</span>", "<span class='ar'>كِتَابِي</span>"],
        correct: "<span class='ar'>كِتَابُهُ</span>"
      },
      {
        type: "tf",
        statement: "<span class='ar'>أَخْكَ</span> ist die korrekte Form für 'dein Bruder'.",
        correct: false,
        explanation: "Richtig ist <span class='ar'>أَخُوكَ</span> — zwischen Mudâf und Mudâf ilaihi wird bei أَخ und أَب ein و eingeschoben."
      },
      {
        type: "mc",
        question: "Bei welchem Possessivsuffix wird bei أَخ/أَب KEIN zusätzliches و eingeschoben?",
        choices: ["كَ (dein)", "هُ (sein)", "هَا (ihr)", "ي (mein)"],
        correct: "ي (mein)"
      },
      {
        type: "tf",
        statement: "<span class='ar'>لِي</span> ('gehört mir') bekommt ausnahmsweise ein Kasra statt eines Fatha.",
        correct: true
      }
    ],
    sentences: [
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"كِتَابُكَ", tags:{1:"Khabar"}, blank:{options:["كِتَابُكَ","كِتَابُهُ","كِتَابُهَا","كِتَابِي"]}}], translation: "Dies ist dein Buch." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بَيْتُهُ", tags:{1:"Khabar"}, blank:{options:["بَيْتُكَ","بَيْتُهُ","بَيْتُهَا","بَيْتِي"]}}], translation: "Dies ist sein Haus." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"سَيَّارَتُهَا", tags:{1:"Khabar"}, blank:{options:["سَيَّارَتُكَ","سَيَّارَتُهُ","سَيَّارَتُهَا","سَيَّارَتِي"]}}], translation: "Dies ist ihr Auto." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"قَلَمِي", tags:{1:"Khabar"}, blank:{options:["قَلَمُكَ","قَلَمُهُ","قَلَمُهَا","قَلَمِي"]}}], translation: "Dies ist mein Stift." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"أَبُوهُ", tags:{1:"Khabar"}, blank:{options:["أَبُوكَ","أَبُوهُ","أَبُوهَا","أَبِي"]}}], translation: "Dies ist sein Vater." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"أَخُوكَ", tags:{1:"Khabar"}, blank:{options:["أَخُوكَ","أَخُوهُ","أَخُوهَا","أَخِي"]}}], translation: "Dies ist dein Bruder." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"أَبِي", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"هَذَا", tags:{1:"Mubtada"}}, {text:"أَخِي", tags:{1:"Khabar"}}], translation: "Dies ist mein Vater, und dies ist mein Bruder." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"أَبُو", tags:{1:"Khabar",2:"Mudaf"}}, {text:"مُحَمَّدٍ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist Muhammads Vater." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"أَخُو", tags:{1:"Khabar",2:"Mudaf"}}, {text:"مُحَمَّدٍ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Dies ist Muhammads Bruder." },
      { words: [{text:"عِنْدِي", tags:{1:"Khabar"}, blank:{options:["عِنْدَكَ","عِنْدَهُ","عِنْدَهَا","عِنْدِي"]}}, {text:"قَلَمٌ", tags:{1:"Mubtada"}}], translation: "Ich habe einen Stift." },
      { words: [{text:"لِي", tags:{1:"Khabar"}, blank:{options:["لَكَ","لَهُ","لَهَا","لِي"]}}, {text:"أَخٌ", tags:{1:"Mubtada"}}], translation: "Ich habe einen Bruder." },
      { words: [{text:"لَهُ", tags:{1:"Khabar"}, blank:{options:["لَكَ","لَهُ","لَهَا","لِي"]}}, {text:"أَخٌ", tags:{1:"Mubtada"}}], translation: "Er hat einen Bruder." },
      { words: [{text:"لَكَ", tags:{1:"Khabar"}, blank:{options:["لَكَ","لَهُ","لَهَا","لِي"]}}, {text:"أُخْتٌ", tags:{1:"Mubtada"}}], translation: "Du hast eine Schwester." },
      { words: [{text:"لَهَا", tags:{1:"Khabar"}, blank:{options:["لَكَ","لَهُ","لَهَا","لِي"]}}, {text:"أَخٌ", tags:{1:"Mubtada"}}], translation: "Sie hat einen Bruder." },
      { words: [{text:"مَا", tags:{}}, {text:"عِنْدِي", tags:{1:"Khabar"}, blank:{options:["عِنْدَكَ","عِنْدَهُ","عِنْدَهَا","عِنْدِي"]}}, {text:"سَيَّارَةٌ", tags:{1:"Mubtada"}}], translation: "Ich habe kein Auto." },
      { words: [{text:"الْمُدَرِّسُ", tags:{1:"Mubtada"}}, {text:"عِنْدَ", tags:{1:"Khabar",2:"Mudaf"}}, {text:"الْمُدِيرِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Der Lehrer ist beim Direktor." },
      { words: [{text:"الْمُدَرِّسُ", tags:{1:"Mubtada"}}, {text:"مَعَ", tags:{1:"Khabar",2:"Mudaf"}}, {text:"الْمُدِيرِ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Der Lehrer ist mit dem Direktor." },
      { words: [{text:"هُوَ", tags:{1:"Mubtada"}}, {text:"بِالْجَامِعَةِ", tags:{1:"Khabar"}}], translation: "Er ist an der Universität." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"حَمْزَةُ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"أُسَامَةُ", tags:{1:"Khabar"}}], translation: "Dies ist Hamza, und das ist Usama." }
    ]
  },

  "11": {
    concepts: [
      {
        term: "Mu'rab (معرب) — veränderliche Endung",
        explanation: "Ein Wort ist mu'rab, wenn sich seine Endung je nach Funktion im Satz ändert: الْوَلَدُ (marfû', Endung -u), الْوَلَدَ (mansûb, Endung -a), الْوَلَدِ (majrûr, Endung -i). Die meisten Substantive sind mu'rab."
      },
      {
        term: "Mabnī (مبني) — unveränderliche Endung",
        explanation: "Ein Wort ist mabnī, wenn seine Endung sich nie ändert, egal welche Funktion es im Satz hat. Dazu gehören: Personalpronomen (هُوَ، هِيَ، أَنَا، أَنْتَ), Demonstrativpronomen (هَذَا، هَذِهِ، ذَلِكَ، تِلْكَ), Relativpronomen (الَّذِي، الَّتِي), Fragewörter (أَيْنَ، مَاذَا), Präpositionen und andere Partikel (فِي، عَلَى، مِنْ، إِلَى) sowie Verben in der Vergangenheit (ذَهَبَ)."
      },
      {
        term: "Mahall (محل) — der Platz eines mabnī-Wortes",
        explanation: "Ein mabnī-Wort ändert seine Endung nicht, hat im Satz aber trotzdem eine Funktion. Man sagt, es steht 'fī maḥalli raf'' (في محل رفع), 'jarr' (جر) oder 'naṣb' (نصب) — kurz: mahallan marfû', mahallan majrûr oder mahallan mansûb. Beispiel: هَذَا كِتَابٌ — هَذَا ist mabnī, steht aber an der Stelle des Mubtada (mahallan marfû'). كِتَابٌ ist mu'rab und wirklich marfû'."
      },
      {
        term: "Angehängte Pronomen: mabnī mit Mahall",
        explanation: "Die Suffixe كَ، هُ، هَا، ي sind mabnī. Für die Analyse trennt man sie vom Wort ab. Ihr Mahall hängt von der Stelle ab: nach einem Nomen (Mudaf ilaihi) oder nach einer Präposition mahallan majrûr — كِتَابُهُ، لَهُ، فِيهَا; als Objekt eines Verbs mahallan mansûb — أُحِبُّهُ; als Endung am Verb (Subjekt) mahallan marfû' — ذَهَبْتُ (ذَهَبْ + تُ)."
      },
      {
        term: "Partikel haben keinen Mahall",
        explanation: "Präpositionen wie فِي، عَلَى، مِنْ، إِلَى sind mabnī, haben aber keinen Platz im Satz (لَا مَحَلَّ لَهَا مِنَ الإِعْرَابِ) — sie stehen nur zwischen den Wörtern. Ebenso hat ein Verb in der Vergangenheit hier keinen eigenen Mahall. Deshalb werden sie auf Ebene 2 nicht abgefragt."
      },
      {
        term: "Das Objekt eines Verbs ist mansûb",
        explanation: "Das Objekt eines Verbs (Satzaussage nach einem Vollverb) steht im Akkusativ und bekommt eine a-Endung (Fatha): أُحِبُّ الْمُدَرِّسَ (Ich mag den Lehrer). Ist das Objekt ein mabnī-Pronomen, ändert sich nichts am Wort — es steht dann mahallan mansûb: أُحِبُّهُ (Ich mag ihn)."
      },
      {
        term: "So gehst du vor",
        explanation: "Ebene 1: Ändert sich die Endung des Wortes je nach Funktion (mu'rab) oder nie (mabnī)? Ebene 2: Welche Funktion hat das Wort — bei mu'rab-Wörtern marfû', majrûr oder mansûb, bei mabnī-Wörtern mahallan marfû', majrûr oder mansûb (Partikel und Vergangenheitsverben haben keinen Mahall)."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Was bedeutet es, dass ein Wort mabnī (مبني) ist?",
        choices: ["Seine Endung ändert sich nie", "Seine Endung ändert sich je nach Funktion", "Es steht immer im Genitiv", "Es ist immer ein Verb"],
        correct: "Seine Endung ändert sich nie"
      },
      {
        type: "mc",
        question: "Welches dieser Wörter ist mu'rab?",
        choices: ["<span class='ar'>هَذَا</span>", "<span class='ar'>الْكِتَابُ</span>", "<span class='ar'>فِي</span>", "<span class='ar'>هُوَ</span>"],
        correct: "<span class='ar'>الْكِتَابُ</span>"
      },
      {
        type: "tf",
        statement: "Ein mabnī-Wort hat nie eine Funktion im Satz.",
        correct: false,
        explanation: "Es hat einen Platz (Mahall), z. B. هَذَا كِتَابٌ: هَذَا steht mahallan marfû' (an der Stelle des Mubtada)."
      },
      {
        type: "mc",
        question: "In <span class='ar'>أُحِبُّهُ</span> (Ich mag ihn): Welchen Mahall hat <span class='ar'>هُ</span>?",
        choices: ["mahallan marfû'", "mahallan majrûr", "mahallan mansûb", "mu'rab marfû'"],
        correct: "mahallan mansûb"
      },
      {
        type: "mc",
        question: "In <span class='ar'>كِتَابُهُ</span> (sein Buch): Welchen Mahall hat <span class='ar'>هُ</span>?",
        choices: ["mahallan marfû'", "mahallan majrûr", "mahallan mansûb", "mu'rab majrûr"],
        correct: "mahallan majrûr"
      },
      {
        type: "tf",
        statement: "Präpositionen wie <span class='ar'>فِي</span> sind mabnī.",
        correct: true
      }
    ],
    sentences: [
      { words: [{text:"تِلْكَ", tags:{1:"Mabni",2:"Mahallan Marfu"}}, {text:"الْمُمَرِّضَةُ", tags:{1:"Mu'rab",2:"Marfu"}}, {text:"جَمِيلَةٌ", tags:{1:"Mu'rab",2:"Marfu"}}], translation: "Jene Krankenschwester ist schön." },
      { words: [{text:"هُوَ", tags:{1:"Mabni",2:"Mahallan Marfu"}}, {text:"فِي", tags:{1:"Mabni"}}, {text:"الْبَيْتِ", tags:{1:"Mu'rab",2:"Majrur"}}], translation: "Er ist im Haus." },
      { words: [{text:"هِيَ", tags:{1:"Mabni",2:"Mahallan Marfu"}}, {text:"عَلَى", tags:{1:"Mabni"}}, {text:"الْمَكْتَبِ", tags:{1:"Mu'rab",2:"Majrur"}}], translation: "Sie ist auf dem Schreibtisch." },
      { words: [{text:"الْقَلَمُ", tags:{1:"Mu'rab",2:"Marfu"}}, {text:"فِي", tags:{1:"Mabni"}}, {text:"هَا", tags:{1:"Mabni",2:"Mahallan Majrur"}}], translation: "Der Stift ist darin (in ihr)." },
      { words: [{text:"مَاذَا", tags:{1:"Mabni",2:"Mahallan Marfu"}}, {text:"فِي", tags:{1:"Mabni"}}, {text:"الْغُرْفَةِ", tags:{1:"Mu'rab",2:"Majrur"}}], translation: "Was ist im Zimmer?" },
      { words: [{text:"كِتَابُ", tags:{2:"Marfu"}}, {text:"الْمُدَرِّسِ", tags:{2:"Majrur"}}, {text:"جَدِيدٌ", tags:{2:"Marfu"}}], translation: "Das Buch des Lehrers ist neu." },
      { words: [{text:"كِتَابُ", tags:{1:"Mu'rab",2:"Marfu"}}, {text:"هُ", tags:{1:"Mabni",2:"Mahallan Majrur"}}, {text:"جَدِيدٌ", tags:{1:"Mu'rab",2:"Marfu"}}], translation: "Sein Buch ist neu." },
      { words: [{text:"بَيْتُ", tags:{1:"Mu'rab",2:"Marfu"}}, {text:"كَ", tags:{1:"Mabni",2:"Mahallan Majrur"}}, {text:"جَمِيلٌ", tags:{1:"Mu'rab",2:"Marfu"}}], translation: "Dein Haus ist schön." },
      { words: [{text:"سَيَّارَةُ", tags:{1:"Mu'rab",2:"Marfu"}}, {text:"هَا", tags:{1:"Mabni",2:"Mahallan Majrur"}}, {text:"جَدِيدَةٌ", tags:{1:"Mu'rab",2:"Marfu"}}], translation: "Ihr Auto ist neu." },
      { words: [{text:"أُحِبُّ", tags:{}}, {text:"الْمُدَرِّسَ", tags:{1:"Mu'rab",2:"Mansub"}}, {text:"فِي", tags:{1:"Mabni"}}, {text:"الْمَدْرَسَةِ", tags:{1:"Mu'rab",2:"Majrur"}}], translation: "Ich mag den Lehrer in der Schule." },
      { words: [{text:"أُحِبُّ", tags:{}}, {text:"كِتَابَ", tags:{1:"Mu'rab",2:"Mansub"}}, {text:"هُ", tags:{1:"Mabni",2:"Mahallan Majrur"}}], translation: "Ich mag sein Buch." },
      { words: [{text:"أُحِبُّ", tags:{}}, {text:"هُ", tags:{1:"Mabni",2:"Mahallan Mansub"}}, {text:"فِي", tags:{1:"Mabni"}}, {text:"الْمَدْرَسَةِ", tags:{1:"Mu'rab",2:"Majrur"}}], translation: "Ich mag ihn in der Schule." },
      { words: [{text:"ذَهَبَ", tags:{1:"Mabni"}}, {text:"الْوَلَدُ", tags:{1:"Mu'rab",2:"Marfu"}}, {text:"إِلَى", tags:{1:"Mabni"}}, {text:"الْمَدْرَسَةِ", tags:{1:"Mu'rab",2:"Majrur"}}], translation: "Der Junge ging zur Schule." },
      { words: [{text:"ذَهَبْ", tags:{1:"Mabni"}}, {text:"تُ", tags:{1:"Mabni",2:"Mahallan Marfu"}}, {text:"إِلَى", tags:{1:"Mabni"}}, {text:"الْمَدْرَسَةِ", tags:{1:"Mu'rab",2:"Majrur"}}], translation: "Ich ging zur Schule." },
      { words: [{text:"الْبِنْتُ", tags:{1:"Mu'rab",2:"Marfu"}}, {text:"الَّتِي", tags:{1:"Mabni",2:"Mahallan Marfu"}}, {text:"فِي", tags:{1:"Mabni"}}, {text:"الْغُرْفَةِ", tags:{1:"Mu'rab",2:"Majrur"}}, {text:"طَالِبَةٌ", tags:{1:"Mu'rab",2:"Marfu"}}], translation: "Das Mädchen, das im Zimmer ist, ist eine Studentin." },
      { words: [{text:"لَ", tags:{1:"Mabni"}}, {text:"هُ", tags:{1:"Mabni",2:"Mahallan Majrur"}}, {text:"أَخٌ", tags:{1:"Mu'rab",2:"Marfu"}}], translation: "Er hat einen Bruder." }
    ]
  },

  "12": {
    concepts: [
      {
        term: "أَنْتِ — du (feminin)",
        explanation: "أَنْتَ ist 'du' für die zweite Person Singular maskulin (bereits bekannt). أَنْتِ ist 'du' für die zweite Person Singular feminin, z. B. مِنْ أَيْنَ أَنْتِ يَا آمِنَةُ؟ (Woher kommst du, Aminah?)."
      },
      {
        term: "Possessivsuffix ك: männlich vs. feminin",
        explanation: "Die besitzanzeigende Endung 'dein' wird bei männlich Angesprochenen mit Fatha geschrieben (كَ, z. B. بَيْتُكَ), bei weiblich Angesprochenen mit Kasra (كِ, z. B. بَيْتُكِ). Ohne Vokalzeichen sehen beide Formen im Schriftbild gleich aus (ك) — nur die Aussprache unterscheidet sie."
      },
      {
        term: "ذَهَبَتْ — sie ging",
        explanation: "Neben ذَهَبَ (er ging), ذَهَبْتُ (ich ging) und ذَهَبْتَ (du gingst) lernen wir jetzt ذَهَبَتْ — die dritte Person Singular feminin der Vergangenheit."
      },
      {
        term: "Sukûn wird zu Kasra vor ال",
        explanation: "Der letzte Buchstabe von ذَهَبَتْ (das ت) trägt normalerweise ein Sukûn. Folgt darauf ein Wort mit bestimmtem Artikel ال, wird das Sukûn zu einem Kasra: ذَهَبَتِ الْبِنْتُ (Das Mädchen ging)."
      },
      {
        term: "Wegfall des Pronomens bei genanntem Subjekt",
        explanation: "Wird das Subjekt eines Verbs ausdrücklich genannt (z. B. ein Name), entfällt das eigenständige Pronomen davor: ذَهَبَتْ مَرْيَمُ إِلَى الْمَدْرَسَةِ (Maryam ging zur Schule) — nicht 'هي ذهبت مريم'."
      },
      {
        term: "الَّتِي — Relativpronomen feminin",
        explanation: "Analog zu الَّذِي (maskulin, bereits bekannt) gibt es الَّتِي für feminin Singular, z. B. الطَّالِبَةُ الَّتِي جَلَسَتْ أَمَامَ الْمُدَرِّسَةِ (Die Studentin, die vor der Lehrerin saß)."
      },
      {
        term: "Betonendes Pronomen nach Possessivsuffix",
        explanation: "Um ein Possessivsuffix besonders zu betonen (z. B. bei Zweifel oder Uneinigkeit), kann das passende eigenständige Pronomen dahintergestellt werden: هَذَا كِتَابُكَ أَنْتَ (Dies ist DEIN Buch), هَذَا بَيْتُهُ هُوَ, ذَلِكَ قَلَمِي أَنَا, ذَلِكَ كِتَابُهَا هِيَ."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Welches Wort bedeutet 'du', wenn eine weibliche Person angesprochen wird?",
        choices: ["<span class='ar'>أَنْتَ</span>", "<span class='ar'>أَنْتِ</span>", "<span class='ar'>هِيَ</span>", "<span class='ar'>أَنَا</span>"],
        correct: "<span class='ar'>أَنْتِ</span>"
      },
      {
        type: "tf",
        statement: "Die besitzanzeigende Endung ك wird bei männlich und weiblich Angesprochenen genau gleich ausgesprochen.",
        correct: false,
        explanation: "Bei männlich hat sie ein Fatha (كَ), bei weiblich ein Kasra (كِ)."
      },
      {
        type: "mc",
        question: "Wie heißt 'sie ging' auf Arabisch?",
        choices: ["<span class='ar'>ذَهَبَ</span>", "<span class='ar'>ذَهَبْتُ</span>", "<span class='ar'>ذَهَبْتَ</span>", "<span class='ar'>ذَهَبَتْ</span>"],
        correct: "<span class='ar'>ذَهَبَتْ</span>"
      },
      {
        type: "tf",
        statement: "<span class='ar'>الَّتِي</span> ist die feminine Form von <span class='ar'>الَّذِي</span>.",
        correct: true
      }
    ],
    sentences: [
      { words: [{text:"أَنْتِ", tags:{1:"Mubtada"}, blank:{options:["أَنْتَ","أَنْتِ","هُوَ","هِيَ"]}}, {text:"طَالِبَةٌ", tags:{1:"Khabar"}}], translation: "Du (weibl.) bist eine Studentin." },
      { words: [{text:"أَنْتِ", tags:{1:"Mubtada"}, blank:{options:["أَنْتَ","أَنْتِ","هُوَ","هِيَ"]}}, {text:"مِنْ", tags:{1:"Khabar",2:"Harful Jarr"}}, {text:"أَلْمَانِيَا", tags:{1:"Khabar",2:"Majrur"}}], translation: "Du (weibl.) bist aus Deutschland." },
      { words: [{text:"بَيْتُكِ", tags:{1:"Mubtada"}, blank:{options:["بَيْتُكَ","بَيْتُكِ","بَيْتُهُ","بَيْتِي"]}}, {text:"جَمِيلٌ", tags:{1:"Khabar"}}], translation: "Dein (weibl.) Haus ist schön." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بَيْتُكَ", tags:{1:"Khabar"}, blank:{options:["بَيْتُكَ","بَيْتُكِ","بَيْتُهُ","بَيْتِي"]}}], translation: "Dies ist dein (männl.) Haus." },
      { words: [{text:"كِتَابُكِ", tags:{1:"Mubtada"}, blank:{options:["كِتَابُكَ","كِتَابُكِ","كِتَابُهُ","كِتَابِي"]}}, {text:"جَدِيدٌ", tags:{1:"Khabar"}}], translation: "Dein (weibl.) Buch ist neu." },
      { words: [{text:"ذَهَبَتْ", tags:{1:"Fi'l"}}, {text:"مَرْيَمُ", tags:{1:"Fa'il"}}, {text:"إِلَى", tags:{1:"Harful Jarr"}}, {text:"الْمَدْرَسَةِ", tags:{1:"Majrur"}}], translation: "Maryam ging zur Schule." },
      { words: [{text:"ذَهَبَتْ", tags:{1:"Fi'l"}}, {text:"إِلَى", tags:{1:"Harful Jarr"}}, {text:"الْجَامِعَةِ", tags:{1:"Majrur"}}], translation: "Sie ging zur Universität." },
      { words: [{text:"ذَهَبَتِ", tags:{1:"Fi'l"}}, {text:"الْبِنْتُ", tags:{1:"Fa'il"}}], translation: "Das Mädchen ging." },
      { words: [{text:"الطَّالِبَةُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّتِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"جَلَسَتْ", tags:{1:"Mubtada",2:"Na't",3:"Fi'l"}}, {text:"أَمَامَ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf"}}, {text:"الْمُدَرِّسَةِ", tags:{1:"Mubtada",2:"Na't",3:"Mudaf ilaihi"}}, {text:"مِنْ", tags:{1:"Khabar",3:"Harful Jarr"}}, {text:"أَلْمَانِيَا", tags:{1:"Khabar",3:"Majrur"}}], translation: "Die Studentin, die vor der Lehrerin saß, ist aus Deutschland." },
      { words: [{text:"السَّاعَةُ", tags:{1:"Mubtada",2:"Man'ut"}}, {text:"الَّتِي", tags:{1:"Mubtada",2:"Na't",3:"Relativpronomen"}}, {text:"عَلَى", tags:{1:"Mubtada",2:"Na't",3:"Harful Jarr"}}, {text:"الْمَكْتَبِ", tags:{1:"Mubtada",2:"Na't",3:"Majrur"}}, {text:"لِلْمُدَرِّسِ", tags:{1:"Khabar"}}], translation: "Die Uhr, die auf dem Tisch liegt, gehört dem Lehrer." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"كِتَابُكَ", tags:{1:"Khabar"}}, {text:"أَنْتَ", tags:{}}], translation: "Dies ist DEIN Buch." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"بَيْتُهُ", tags:{1:"Khabar"}}, {text:"هُوَ", tags:{}}], translation: "Dies ist SEIN Haus." },
      { words: [{text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"قَلَمِي", tags:{1:"Khabar"}}, {text:"أَنَا", tags:{}}], translation: "Das ist MEIN Stift." },
      { words: [{text:"ذَلِكَ", tags:{1:"Mubtada"}}, {text:"كِتَابُهَا", tags:{1:"Khabar"}}, {text:"هِيَ", tags:{}}], translation: "Das ist IHR Buch." }
    ]
  }  ,
  "13a": {
    concepts: [
      {
        term: "Plural von Nomen und Adjektiven",
        explanation: "Im Arabischen gibt es zwei Arten, den Plural zu bilden: den gesunden Plural (Endung wird angehängt) und den gebrochenen Plural (das Wortgerüst ändert sich). Man lernt den Plural am besten mit jedem neuen Wort mit."
      },
      {
        term: "Gesunder Plural — maskulin: ـُونَ",
        explanation: "Beim gesunden Plural der Männlichen wird ـُونَ angehängt (Nominativ): مُسْلِمٌ ← مُسْلِمُونَ, مُدَرِّسٌ ← مُدَرِّسُونَ, مُهَنْدِسٌ ← مُهَنْدِسُونَ. Das Tanwîn fällt weg."
      },
      {
        term: "Gesunder Plural — feminin: ـَاتٌ",
        explanation: "Beim gesunden Plural der Weiblichen wird die Ta marbûta ة zu einem offenen ت, und das kurze 'a' davor wird zum langen 'â': مُسْلِمَةٌ ← مُسْلِمَاتٌ, مُدَرِّسَةٌ ← مُدَرِّسَاتٌ, مُهَنْدِسَةٌ ← مُهَنْدِسَاتٌ."
      },
      {
        term: "Gebrochener Plural — häufige Muster",
        explanation: "Beim gebrochenen Plural ändert sich das Wortgerüst (ف = 1., ع = 2., ل = 3. Radikal). Muster: فُعُول (نَجْمٌ ← نُجُومٌ), فُعُل (كِتَابٌ ← كُتُبٌ), فِعَال (جَبَلٌ ← جِبَالٌ), فُعَّال (تَاجِرٌ ← تُجَّارٌ), أَفْعَال (قَلَمٌ ← أَقْلَامٌ), فُعَلَاءُ (زَمِيلٌ ← زُمَلَاءُ), أَفْعِلَاءُ (صَدِيقٌ ← أَصْدِقَاءُ), فِعْلَةٌ (أَخٌ ← إِخْوَةٌ)."
      },
      {
        term: "فُعَلَاءُ und أَفْعِلَاءُ — ohne Tanwîn",
        explanation: "Die Pluralformen auf ـَاءُ wie زُمَلَاءُ und أَصْدِقَاءُ haben im Nominativ kein Tanwîn, sondern nur ein einfaches Dammah."
      },
      {
        term: "هَؤُلَاءِ — Plural von هَذَا / هَذِهِ",
        explanation: "هَؤُلَاءِ ('diese') ist der Plural von هَذَا und هَذِهِ und wird meist für Personen verwendet: هَؤُلَاءِ تُجَّارٌ (Das sind Händler), هَؤُلَاءِ مُدَرِّسَاتٌ (Das sind Lehrerinnen)."
      },
      {
        term: "هُمْ — sie (Plural, nur Menschen)",
        explanation: "هُمْ ist der Plural von هُوَ und wird nur für Menschen verwendet: هُمْ مُدَرِّسُونَ (Sie sind Lehrer). In Teil A sind alle Pronomen männlich."
      },
      {
        term: "Besitzendung ـهُمْ — ihr / deren",
        explanation: "Der Plural der Besitzendung ـهُ ist ـهُمْ: أَيْنَ بَيْتُهُمْ؟ (Wo ist ihr Haus?), أَبُوهُمْ تَاجِرٌ شَهِيرٌ (Ihr Vater ist ein berühmter Händler). Dieselbe Form bedeutet im Deutschen 'sie' bzw. 'ihr'."
      },
      {
        term: "ذَهَبُوا — sie gingen",
        explanation: "Die Verbform für 'sie (Plural) gingen' ist ذَهَبُوا. Das Alif am Ende wird nicht gesprochen (stummes Alif)."
      },
      {
        term: "بَعْضٌ — einige",
        explanation: "بَعْضٌ bedeutet 'einige': بَعْضُهُمْ مُدَرِّسُونَ وَبَعْضُهُمْ مُهَنْدِسُونَ (Einige von ihnen sind Lehrer und einige sind Ingenieure)."
      }
    ],
    questions: [
      {
        type: "mc",
        question: "Wie lautet der gesunde Plural (maskulin) von <span class='ar'>مُدَرِّسٌ</span>?",
        choices: ["<span class='ar'>مُدَرِّسَاتٌ</span>", "<span class='ar'>مُدَرِّسُونَ</span>", "<span class='ar'>مُدَرِّسِينَةٌ</span>", "<span class='ar'>مَدَارِسُ</span>"],
        correct: "<span class='ar'>مُدَرِّسُونَ</span>"
      },
      {
        type: "mc",
        question: "Wie lautet der gesunde Plural (feminin) von <span class='ar'>مُهَنْدِسَةٌ</span>?",
        choices: ["<span class='ar'>مُهَنْدِسُونَ</span>", "<span class='ar'>مُهَنْدِسَةُونَ</span>", "<span class='ar'>مُهَنْدِسَاتٌ</span>", "<span class='ar'>مُهَنْدِسٌ</span>"],
        correct: "<span class='ar'>مُهَنْدِسَاتٌ</span>"
      },
      {
        type: "tf",
        statement: "Beim gesunden Plural feminin wird die Ta marbûta ة zu einem offenen ت.",
        correct: true,
        explanation: "Z. B. مُسْلِمَةٌ ← مُسْلِمَاتٌ (zusätzlich wird das kurze 'a' zu 'â')."
      },
      {
        type: "mc",
        question: "Was ist der Plural von <span class='ar'>كِتَابٌ</span> (Muster فُعُل)?",
        choices: ["<span class='ar'>كُتُبٌ</span>", "<span class='ar'>كُتُوبٌ</span>", "<span class='ar'>أَكْتَابٌ</span>", "<span class='ar'>كِتَابَاتٌ</span>"],
        correct: "<span class='ar'>كُتُبٌ</span>"
      },
      {
        type: "mc",
        question: "Welches Muster hat der Plural <span class='ar'>أَقْلَامٌ</span> (von <span class='ar'>قَلَمٌ</span>)?",
        choices: ["<span class='ar'>فُعُول</span>", "<span class='ar'>فِعَال</span>", "<span class='ar'>أَفْعَال</span>", "<span class='ar'>فُعَلَاءُ</span>"],
        correct: "<span class='ar'>أَفْعَال</span>"
      },
      {
        type: "mc",
        question: "Was ist der Plural von <span class='ar'>صَدِيقٌ</span> (Freund)?",
        choices: ["<span class='ar'>صَدِيقُونَ</span>", "<span class='ar'>أَصْدِقَاءُ</span>", "<span class='ar'>صُدُقٌ</span>", "<span class='ar'>صِدَاقٌ</span>"],
        correct: "<span class='ar'>أَصْدِقَاءُ</span>"
      },
      {
        type: "tf",
        statement: "<span class='ar'>زُمَلَاءُ</span> hat im Nominativ ein Tanwîn.",
        correct: false,
        explanation: "Pluralformen auf ـَاءُ (زُمَلَاءُ، أَصْدِقَاءُ) haben kein Tanwîn."
      },
      {
        type: "mc",
        question: "Welches Wort ist der Plural von <span class='ar'>هَذَا</span> / <span class='ar'>هَذِهِ</span>?",
        choices: ["<span class='ar'>هُمْ</span>", "<span class='ar'>هَؤُلَاءِ</span>", "<span class='ar'>أُولَئِكَ</span>", "<span class='ar'>ذَلِكَ</span>"],
        correct: "<span class='ar'>هَؤُلَاءِ</span>"
      },
      {
        type: "tf",
        statement: "<span class='ar'>هُمْ</span> wird nur für Menschen verwendet.",
        correct: true
      },
      {
        type: "mc",
        question: "Wie heißt 'ihr Haus' (Plural 'sie') auf Arabisch?",
        choices: ["<span class='ar'>بَيْتُهُ</span>", "<span class='ar'>بَيْتُهَا</span>", "<span class='ar'>بَيْتُهُمْ</span>", "<span class='ar'>بَيْتُكَ</span>"],
        correct: "<span class='ar'>بَيْتُهُمْ</span>"
      },
      {
        type: "tf",
        statement: "Das Alif am Ende von <span class='ar'>ذَهَبُوا</span> wird nicht gesprochen.",
        correct: true
      },
      {
        type: "mc",
        question: "Was bedeutet <span class='ar'>بَعْضُهُمْ</span>?",
        choices: ["alle von ihnen", "einige von ihnen", "keiner von ihnen", "ihr Vater"],
        correct: "einige von ihnen"
      }
    ],
    sentences: [
      { words: [{text:"هُمْ", tags:{1:"Mubtada"}}, {text:"مُدَرِّسُونَ", tags:{1:"Khabar"}, blank:{options:["مُدَرِّسُونَ","مُدَرِّسَاتٌ","مُدَرِّسٌ","مُدَرِّسَةٌ"]}}], translation: "Sie sind Lehrer." },
      { words: [{text:"هُمْ", tags:{1:"Mubtada"}}, {text:"مُهَنْدِسُونَ", tags:{1:"Khabar"}}], translation: "Sie sind Ingenieure." },
      { words: [{text:"هَؤُلَاءِ", tags:{1:"Mubtada"}, blank:{options:["هَذَا","هَذِهِ","هَؤُلَاءِ","ذَلِكَ"]}}, {text:"مُدَرِّسَاتٌ", tags:{1:"Khabar"}}], translation: "Das sind Lehrerinnen." },
      { words: [{text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"تُجَّارٌ", tags:{1:"Khabar"}}], translation: "Das sind Händler." },
      { words: [{text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"حُجَّاجٌ", tags:{1:"Khabar"}}], translation: "Das sind Pilger." },
      { words: [{text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"ضُيُوفٌ", tags:{1:"Khabar"}}], translation: "Das sind Gäste." },
      { words: [{text:"الرِّجَالُ", tags:{1:"Mubtada"}}, {text:"طِوَالٌ", tags:{1:"Khabar"}}], translation: "Die Männer sind groß." },
      { words: [{text:"هُمْ", tags:{1:"Mubtada"}}, {text:"قِصَارٌ", tags:{1:"Khabar"}}], translation: "Sie sind klein." },
      { words: [{text:"أَيْنَ", tags:{1:"Khabar"}}, {text:"بَيْتُهُمْ", tags:{1:"Mubtada"}, blank:{options:["بَيْتُهُ","بَيْتُهَا","بَيْتُهُمْ","بَيْتُكَ"]}}], translation: "Wo ist ihr Haus?" },
      { words: [{text:"أَبُوهُمْ", tags:{1:"Mubtada"}, blank:{options:["أَبُوهُ","أَبُوهَا","أَبُوهُمْ","أَبُوكَ"]}}, {text:"تَاجِرٌ", tags:{1:"Khabar",2:"Man'ut"}}, {text:"شَهِيرٌ", tags:{1:"Khabar",2:"Na't"}}], translation: "Ihr Vater ist ein berühmter Händler." },
      { words: [{text:"بَعْضُهُمْ", tags:{1:"Mubtada"}}, {text:"مُدَرِّسُونَ", tags:{1:"Khabar"}}, {text:"وَ", tags:{}}, {text:"بَعْضُهُمْ", tags:{1:"Mubtada"}}, {text:"مُهَنْدِسُونَ", tags:{1:"Khabar"}}], translation: "Einige von ihnen sind Lehrer und einige sind Ingenieure." },
      { words: [{text:"ذَهَبُوا", tags:{1:"Fi'l"}}, {text:"إِلَى", tags:{1:"Harful Jarr"}}, {text:"الْمَطْعَمِ", tags:{1:"Majrur"}}], translation: "Sie gingen zum Restaurant." },
      { words: [{text:"ذَهَبُوا", tags:{1:"Fi'l"}}, {text:"إِلَى", tags:{1:"Harful Jarr"}}, {text:"الْقَرْيَةِ", tags:{1:"Majrur"}}], translation: "Sie gingen ins Dorf." },
      { words: [{text:"الشُّيُوخُ", tags:{1:"Mubtada"}}, {text:"فِي", tags:{1:"Khabar",2:"Harful Jarr"}}, {text:"الْقَرْيَةِ", tags:{1:"Khabar",2:"Majrur"}}], translation: "Die alten Männer sind im Dorf." },
      { words: [{text:"الطُّلَّابُ", tags:{1:"Mubtada"}}, {text:"فِي", tags:{1:"Khabar",2:"Harful Jarr"}}, {text:"الْمَطْعَمِ", tags:{1:"Khabar",2:"Majrur"}}], translation: "Die Studenten sind im Restaurant." },
      { words: [{text:"هُمْ", tags:{1:"Mubtada"}}, {text:"أَصْدِقَاءُ", tags:{1:"Khabar",2:"Mudaf",3:"Marfu"}}, {text:"مُحَمَّدٍ", tags:{1:"Khabar",2:"Mudaf ilaihi",3:"Majrur"}}], translation: "Sie sind Muhammads Freunde." },
      { words: [{text:"أَبْنَاءُ", tags:{1:"Mubtada",2:"Mudaf",3:"Marfu"}}, {text:"مُحَمَّدٍ", tags:{1:"Mubtada",2:"Mudaf ilaihi",3:"Majrur"}}, {text:"مُجْتَهِدُونَ", tags:{1:"Khabar"}}], translation: "Muhammads Söhne sind fleißig." },
      { words: [{text:"أَبْنَاؤُهُ", tags:{1:"Mubtada",2:"Gebrochener Plural"}, blank:{options:["أَبْنَاؤُهُ","أَبْنَاؤُهُمْ","أَبْنَاؤُكَ","أَبْنَائِي"]}}, {text:"مُجْتَهِدُونَ", tags:{1:"Khabar",2:"Gesunder Plural"}}], translation: "Seine Söhne sind fleißig." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"تَاجِرٌ", tags:{1:"Khabar",2:"Singular"}}, {text:"وَ", tags:{}}, {text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"تُجَّارٌ", tags:{1:"Khabar",2:"Gebrochener Plural"}}], translation: "Dies ist ein Händler und das sind Händler." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"مُسْلِمٌ", tags:{1:"Khabar",2:"Singular"}}, {text:"وَ", tags:{}}, {text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"مُسْلِمُونَ", tags:{1:"Khabar",2:"Gesunder Plural"}}], translation: "Dies ist ein Muslim und das sind Muslime." },
      { words: [{text:"هَذِهِ", tags:{1:"Mubtada"}}, {text:"مُهَنْدِسَةٌ", tags:{1:"Khabar",2:"Singular"}}, {text:"وَ", tags:{}}, {text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"مُهَنْدِسَاتٌ", tags:{1:"Khabar",2:"Gesunder Plural"}}], translation: "Dies ist eine Ingenieurin und das sind Ingenieurinnen." },
      { words: [{text:"هَذَا", tags:{1:"Mubtada"}}, {text:"صَدِيقٌ", tags:{1:"Khabar",2:"Singular"}}, {text:"وَ", tags:{}}, {text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"أَصْدِقَاءُ", tags:{1:"Khabar",2:"Gebrochener Plural"}}], translation: "Dies ist ein Freund und das sind Freunde." },
      { words: [{text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"مُدَرِّسُونَ", tags:{1:"Khabar",2:"Gesunder Plural"}}, {text:"وَ", tags:{}}, {text:"هَؤُلَاءِ", tags:{1:"Mubtada"}}, {text:"طُلَّابٌ", tags:{1:"Khabar",2:"Gebrochener Plural"}}], translation: "Das sind Lehrer und das sind Studenten." }
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
  "9b": "Lektion 9b",
  "10": "Lektion 10",
  "11": "Lektion 11",
  "12": "Lektion 12",
  "13a": "Lektion 13a"
};