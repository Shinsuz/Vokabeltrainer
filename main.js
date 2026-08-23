/* Satzanalyse — Grammatikregeln nach dem Madina-Buch-Schlüssel (Teil 1)
   Lektionen wie in Shins eigener Übersicht nummeriert.
   Jede Lektion hat:
     - concepts: [{ term, explanation }]   -> Karteikarten-Modus
     - questions: [
         { type:"mc", question, choices:[...], correct, explanation },
         { type:"tf", statement, correct: true|false, explanation }
       ]
   Arabischer Text in question/statement/choices sollte in <span class="ar">...</span>
   stehen, damit die arabische Schrift korrekt formatiert wird.
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
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"وَلَدٌ", role:"Khabar"}], translation: "Dies ist ein Junge." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"بَيْتٌ", role:"Khabar"}], translation: "Dies ist ein Haus." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"طَالِبٌ", role:"Khabar"}], translation: "Dies ist ein Student." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"مَسْجِدٌ", role:"Khabar"}], translation: "Dies ist eine Moschee." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"كِتَابٌ", role:"Khabar"}], translation: "Dies ist ein Buch." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"قَلَمٌ", role:"Khabar"}], translation: "Dies ist ein Stift." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"كَلْبٌ", role:"Khabar"}], translation: "Dies ist ein Hund." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"حِصَانٌ", role:"Khabar"}], translation: "Dies ist ein Pferd." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"رَجُلٌ", role:"Khabar"}], translation: "Dies ist ein Mann." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"بَابٌ", role:"Khabar"}], translation: "Dies ist eine Tür." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"مِفْتَاحٌ", role:"Khabar"}], translation: "Dies ist ein Schlüssel." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"جَمَلٌ", role:"Khabar"}], translation: "Dies ist ein Kamel." }
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
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"بَيْتٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"مَسْجِدٌ", role:"Khabar"}], translation: "Dies ist ein Haus, und das ist eine Moschee." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"إِمَامٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"طَالِبٌ", role:"Khabar"}], translation: "Dies ist ein Imam, und das ist ein Student." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"سُكَّرٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"لَبَنٌ", role:"Khabar"}], translation: "Dies ist Zucker, und das ist Milch." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"حَجَرٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"قَلَمٌ", role:"Khabar"}], translation: "Dies ist ein Stein, und das ist ein Stift." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"كِتَابٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"مِفْتَاحٌ", role:"Khabar"}], translation: "Dies ist ein Buch, und das ist ein Schlüssel." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"وَلَدٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"رَجُلٌ", role:"Khabar"}], translation: "Dies ist ein Junge, und das ist ein Mann." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"مَسْجِدٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"بَيْتٌ", role:"Khabar"}], translation: "Dies ist eine Moschee, und das ist ein Haus." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"طَبِيبٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"تَاجِرٌ", role:"Khabar"}], translation: "Dies ist ein Arzt, und das ist ein Händler." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"كَلْبٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"حِمَارٌ", role:"Khabar"}], translation: "Dies ist ein Hund, und das ist ein Esel." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"حَجَرٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"سُكَّرٌ", role:"Khabar"}], translation: "Dies ist ein Stein, und das ist Zucker." }
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
      { words: [{text:"الْبَابُ", role:"Mubtada"}, {text:"مَفْتُوحٌ", role:"Khabar"}], translation: "Die Tür ist offen." },
      { words: [{text:"الْقَلَمُ", role:"Mubtada"}, {text:"مَكْسُورٌ", role:"Khabar"}], translation: "Der Stift ist kaputt." },
      { words: [{text:"الرَّجُلُ", role:"Mubtada"}, {text:"غَنِيٌّ", role:"Khabar"}], translation: "Der Mann ist reich." },
      { words: [{text:"الْوَلَدُ", role:"Mubtada"}, {text:"فَقِيرٌ", role:"Khabar"}], translation: "Der Junge ist arm." },
      { words: [{text:"الطَّالِبُ", role:"Mubtada"}, {text:"طَوِيلٌ", role:"Khabar"}], translation: "Der Student ist groß." },
      { words: [{text:"الْبَيْتُ", role:"Mubtada"}, {text:"قَدِيمٌ", role:"Khabar"}], translation: "Das Haus ist alt." },
      { words: [{text:"الشَّمْسُ", role:"Mubtada"}, {text:"حَارَّةٌ", role:"Khabar"}], translation: "Die Sonne ist heiß." },
      { words: [{text:"الْقَمَرُ", role:"Mubtada"}, {text:"بَعِيدٌ", role:"Khabar"}], translation: "Der Mond ist fern." },
      { words: [{text:"النَّجْمُ", role:"Mubtada"}, {text:"صَغِيرٌ", role:"Khabar"}], translation: "Der Stern ist klein." },
      { words: [{text:"الدِّيكُ", role:"Mubtada"}, {text:"جَالِسٌ", role:"Khabar"}], translation: "Der Hahn sitzt." },
      { words: [{text:"الطَّالِبُ", role:"Mubtada"}, {text:"وَاقِفٌ", role:"Khabar"}], translation: "Der Student steht." },
      { words: [{text:"الْقَلَمُ", role:"Mubtada"}, {text:"جَدِيدٌ", role:"Khabar"}], translation: "Der Stift ist neu." }
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
      { words: [{text:"بِلَالٌ", role:"Mubtada"}, {text:"فِي", role:"Präposition"}, {text:"الْمَسْجِدِ", role:"Genitivobjekt"}], translation: "Bilâl ist in der Moschee." },
      { words: [{text:"هُوَ", role:"Mubtada"}, {text:"عَلَى", role:"Präposition"}, {text:"الْمَكْتَبِ", role:"Genitivobjekt"}], translation: "Es ist auf dem Schreibtisch." },
      { words: [{text:"هِيَ", role:"Mubtada"}, {text:"فِي", role:"Präposition"}, {text:"الْبَيْتِ", role:"Genitivobjekt"}], translation: "Sie ist im Haus." },
      { words: [{text:"الْقَلَمُ", role:"Mubtada"}, {text:"عَلَى", role:"Präposition"}, {text:"الْمَكْتَبِ", role:"Genitivobjekt"}], translation: "Der Stift ist auf dem Schreibtisch." },
      { words: [{text:"الطَّالِبُ", role:"Mubtada"}, {text:"فِي", role:"Präposition"}, {text:"الْفَصْلِ", role:"Genitivobjekt"}], translation: "Der Student ist im Klassenzimmer." },
      { words: [{text:"الْحَمَّامُ", role:"Mubtada"}, {text:"فِي", role:"Präposition"}, {text:"الْبَيْتِ", role:"Genitivobjekt"}], translation: "Das Badezimmer ist im Haus." },
      { words: [{text:"هُوَ", role:"Mubtada"}, {text:"فِي", role:"Präposition"}, {text:"الْمَطْبَخِ", role:"Genitivobjekt"}], translation: "Er ist in der Küche." },
      { words: [{text:"هِيَ", role:"Mubtada"}, {text:"عَلَى", role:"Präposition"}, {text:"السَّرِيرِ", role:"Genitivobjekt"}], translation: "Sie (es) ist auf dem Bett." },
      { words: [{text:"الْمِفْتَاحُ", role:"Mubtada"}, {text:"عَلَى", role:"Präposition"}, {text:"الْكُرْسِيِّ", role:"Genitivobjekt"}], translation: "Der Schlüssel ist auf dem Stuhl." },
      { words: [{text:"الْقِطَّةُ", role:"Mubtada"}, {text:"فِي", role:"Präposition"}, {text:"الْغُرْفَةِ", role:"Genitivobjekt"}], translation: "Die Katze ist im Zimmer." }
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
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"كِتَابُ", role:"Mudaf"}, {text:"بِلَالٍ", role:"Mudaf ilaihi"}], translation: "Dies ist Bilâls Buch." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"بَيْتُ", role:"Mudaf"}, {text:"الْإِمَامِ", role:"Mudaf ilaihi"}], translation: "Dies ist das Haus des Imâms." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"مِفْتَاحُ", role:"Mudaf"}, {text:"الْبَيْتِ", role:"Mudaf ilaihi"}], translation: "Dies ist der Schlüssel des Hauses." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"ابْنُ", role:"Mudaf"}, {text:"الطَّبِيبِ", role:"Mudaf ilaihi"}], translation: "Dies ist der Sohn des Arztes." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"سَيَّارَةُ", role:"Mudaf"}, {text:"الْعَمِّ", role:"Mudaf ilaihi"}], translation: "Dies ist das Auto des Onkels." },
      { words: [{text:"اسْمُ", role:"Mudaf"}, {text:"الْبِنْتِ", role:"Mudaf ilaihi"}, {text:"آمِنَةُ", role:"Khabar"}], translation: "Der Name des Mädchens ist Amina." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"قَلَمُ", role:"Mudaf"}, {text:"حَامِدٍ", role:"Mudaf ilaihi"}], translation: "Dies ist Hâmids Stift." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"حَقِيبَةُ", role:"Mudaf"}, {text:"الطَّالِبِ", role:"Mudaf ilaihi"}], translation: "Dies ist die Tasche des Studenten." },
      { words: [{text:"مَكْتَبُ", role:"Mudaf"}, {text:"الْمُدَرِّسِ", role:"Mudaf ilaihi"}, {text:"جَدِيدٌ", role:"Khabar"}], translation: "Der Schreibtisch des Lehrers ist neu." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"بَابُ", role:"Mudaf"}, {text:"الْمَسْجِدِ", role:"Mudaf ilaihi"}], translation: "Dies ist die Tür der Moschee." }
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
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"وَلَدٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذِهِ", role:"Mubtada"}, {text:"بِنْتٌ", role:"Khabar"}], translation: "Dies ist ein Junge, und dies ist ein Mädchen." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"يَدٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذَا", role:"Mubtada"}, {text:"رَأْسٌ", role:"Khabar"}], translation: "Dies ist eine Hand, und dies ist ein Kopf." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"عَيْنٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذَا", role:"Mubtada"}, {text:"أَنْفٌ", role:"Khabar"}], translation: "Dies ist ein Auge, und dies ist eine Nase." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"مُدَرِّسَةٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذَا", role:"Mubtada"}, {text:"مُدَرِّسٌ", role:"Khabar"}], translation: "Dies ist eine Lehrerin, und dies ist ein Lehrer." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"بِنْتٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذَا", role:"Mubtada"}, {text:"وَلَدٌ", role:"Khabar"}], translation: "Dies ist ein Mädchen, und dies ist ein Junge." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"قِطَّةٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذَا", role:"Mubtada"}, {text:"كَلْبٌ", role:"Khabar"}], translation: "Dies ist eine Katze, und dies ist ein Hund." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"رِجْلٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذَا", role:"Mubtada"}, {text:"فَمٌ", role:"Khabar"}], translation: "Dies ist ein Bein, und dies ist ein Mund." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"أُخْتٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذَا", role:"Mubtada"}, {text:"أَخٌ", role:"Khabar"}], translation: "Dies ist eine Schwester, und dies ist ein Bruder." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"ثَلَّاجَةٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذِهِ", role:"Mubtada"}, {text:"مِكْوَاةٌ", role:"Khabar"}], translation: "Dies ist ein Kühlschrank, und dies ist ein Bügeleisen." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"فَمٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"هَذِهِ", role:"Mubtada"}, {text:"عَيْنٌ", role:"Khabar"}], translation: "Dies ist ein Mund, und dies ist ein Auge." }
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
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"آمِنَةُ", role:"Khabar"}, {text:"وَ", role:null}, {text:"تِلْكَ", role:"Mubtada"}, {text:"مَرْيَمُ", role:"Khabar"}], translation: "Dies ist Amina, und das ist Maryam." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"بِلَالٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"حَامِدٌ", role:"Khabar"}], translation: "Dies ist Bilâl, und das ist Hâmid." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"دَجَاجَةٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"تِلْكَ", role:"Mubtada"}, {text:"بَطَّةٌ", role:"Khabar"}], translation: "Dies ist eine Henne, und das ist eine Ente." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"نَاقَةٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"تِلْكَ", role:"Mubtada"}, {text:"بَطَّةٌ", role:"Khabar"}], translation: "Dies ist eine Kamelstute, und das ist eine Ente." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"مُؤَذِّنٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"طَبِيبٌ", role:"Khabar"}], translation: "Dies ist ein Muezzin, und das ist ein Arzt." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"مُمَرِّضَةٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"تِلْكَ", role:"Mubtada"}, {text:"مُدَرِّسَةٌ", role:"Khabar"}], translation: "Dies ist eine Krankenschwester, und das ist eine Lehrerin." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"قَلَمٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"كِتَابٌ", role:"Khabar"}], translation: "Dies ist ein Stift, und das ist ein Buch." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"بَيْضَةٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"تِلْكَ", role:"Mubtada"}, {text:"دَجَاجَةٌ", role:"Khabar"}], translation: "Dies ist ein Ei, und das ist eine Henne." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"طَالِبٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"ذَلِكَ", role:"Mubtada"}, {text:"مُدَرِّسٌ", role:"Khabar"}], translation: "Dies ist ein Student, und das ist ein Lehrer." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"مِرْوَحَةٌ", role:"Khabar"}, {text:"وَ", role:null}, {text:"تِلْكَ", role:"Mubtada"}, {text:"سَاعَةٌ", role:"Khabar"}], translation: "Dies ist ein Ventilator, und das ist eine Uhr." }
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
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"الْكِتَابُ", role:"Mubtada"}, {text:"جَدِيدٌ", role:"Khabar"}], translation: "Dies Buch ist neu." },
      { words: [{text:"ذَلِكَ", role:"Mubtada"}, {text:"الرَّجُلُ", role:"Mubtada"}, {text:"مُهَنْدِسٌ", role:"Khabar"}], translation: "Jener Mann ist ein Ingenieur." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"السَّاعَةُ", role:"Mubtada"}, {text:"جَمِيلَةٌ", role:"Khabar"}], translation: "Diese Uhr ist schön." },
      { words: [{text:"تِلْكَ", role:"Mubtada"}, {text:"الْمُمَرِّضَةُ", role:"Mubtada"}, {text:"مِنَ", role:"Präposition"}, {text:"الْيَابَانِ", role:"Genitivobjekt"}], translation: "Jene Krankenschwester ist aus Japan." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"الْبَيْتُ", role:"Mubtada"}, {text:"خَلْفَ", role:"Präposition"}, {text:"الْمَسْجِدِ", role:"Genitivobjekt"}], translation: "Dies Haus ist hinter der Moschee." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"أَمْرِيكَا", role:"Khabar"}], translation: "Dies ist Amerika." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"الْوَلَدُ", role:"Mubtada"}, {text:"مُجْتَهِدٌ", role:"Khabar"}], translation: "Dieser Junge ist fleißig." },
      { words: [{text:"ذَلِكَ", role:"Mubtada"}, {text:"الطَّالِبُ", role:"Mubtada"}, {text:"فِي", role:"Präposition"}, {text:"الْفَصْلِ", role:"Genitivobjekt"}], translation: "Jener Student ist im Klassenzimmer." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"الْمَدْرَسَةُ", role:"Mubtada"}, {text:"كَبِيرَةٌ", role:"Khabar"}], translation: "Diese Schule ist groß." },
      { words: [{text:"ذَلِكَ", role:"Mubtada"}, {text:"الْبَيْتُ", role:"Mubtada"}, {text:"أَمَامَ", role:"Präposition"}, {text:"السُّوقِ", role:"Genitivobjekt"}], translation: "Jenes Haus ist vor dem Markt." }
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
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"بَيْتٌ", role:"Man'ut"}, {text:"جَدِيدٌ", role:"Na't"}], translation: "Dies ist ein neues Haus." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"بِنْتٌ", role:"Man'ut"}, {text:"صَغِيرَةٌ", role:"Na't"}], translation: "Dies ist ein kleines Mädchen." },
      { words: [{text:"بِلَالٌ", role:"Mubtada"}, {text:"مُدَرِّسٌ", role:"Man'ut"}, {text:"جَدِيدٌ", role:"Na't"}], translation: "Bilâl ist ein neuer Lehrer." },
      { words: [{text:"الْمُدَرِّسُ", role:"Man'ut"}, {text:"الْجَدِيدُ", role:"Na't"}, {text:"فِي", role:"Präposition"}, {text:"الْفَصْلِ", role:"Genitivobjekt"}], translation: "Der neue Lehrer ist im Klassenzimmer." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"وَلَدٌ", role:"Man'ut"}, {text:"صَغِيرٌ", role:"Na't"}], translation: "Dies ist ein kleiner Junge." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"سَيَّارَةٌ", role:"Man'ut"}, {text:"جَدِيدَةٌ", role:"Na't"}], translation: "Dies ist ein neues Auto." },
      { words: [{text:"ذَلِكَ", role:"Mubtada"}, {text:"رَجُلٌ", role:"Man'ut"}, {text:"طَوِيلٌ", role:"Na't"}], translation: "Jener ist ein großer Mann." },
      { words: [{text:"هَذَا", role:"Mubtada"}, {text:"طَالِبٌ", role:"Man'ut"}, {text:"مُجْتَهِدٌ", role:"Na't"}], translation: "Dies ist ein fleißiger Student." },
      { words: [{text:"هَذِهِ", role:"Mubtada"}, {text:"مَدِينَةٌ", role:"Man'ut"}, {text:"جَمِيلَةٌ", role:"Na't"}], translation: "Dies ist eine schöne Stadt." },
      { words: [{text:"الْبِنْتُ", role:"Man'ut"}, {text:"الصَّغِيرَةُ", role:"Na't"}, {text:"فِي", role:"Präposition"}, {text:"الْبَيْتِ", role:"Genitivobjekt"}], translation: "Das kleine Mädchen ist im Haus." }
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
  "9a": "Lektion 9A"
};