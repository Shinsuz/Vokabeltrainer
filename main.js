/* ==========================================================================
   GRAMMATIK — Datenbank
   Aus den Lehrbuchseiten Lektion 1–9 (Teil A) übertragen.
   Lektion 4 und 4A wurden zusammengelegt (gehören inhaltlich zusammen).

   Format je Lektion:
     concepts:  [{ term, explanation }]  — die Regel als Karteikarte
     questions: [{ type: "mc", question, choices, correct, explanation }]
                [{ type: "truefalse", statement, correct, explanation }]
   ========================================================================== */

const SATZANALYSE_LABELS= {
  1: "Lektion 1",
  2: "Lektion 2",
  3: "Lektion 3",
  4: "Lektion 4",
  5: "Lektion 5",
  6: "Lektion 6",
  7: "Lektion 7",
  8: "Lektion 8",
  9: "Lektion 9"
};

const SATZANALYSE= {

  /* ===================== LEKTION 1 ===================== */
  1: {
    concepts: [
      { term: "هَذَا", explanation: "Demonstrativpronomen für 'dies' (männlich/neutral). Wird هَاذَا ausgesprochen, aber ohne das erste Alif geschrieben." },
      { term: "Keine Kopula", explanation: "Das Arabische hat kein Wort, das dem deutschen 'ist' entspricht. هَذَا كِتَابٌ heißt wörtlich 'dies Buch', bedeutet aber 'Dies ist ein Buch'." },
      { term: "تَنْوِين (Tanwin)", explanation: "Es gibt kein eigenes Wort für 'ein, eine'. Der n-Laut am Ende des Substantivs (kitābu-n, baitu-n, masjidu-n) entspricht dem unbestimmten Artikel und heißt Tanwin." },
      { term: "Fragepartikel أَ", explanation: "Wird vor einen Aussagesatz gesetzt und verwandelt ihn in eine Ja/Nein-Frage: هَذَا بَيْتٌ (Dies ist ein Haus) → أَهَذَا بَيْتٌ؟ (Ist dies ein Haus?)" }
    ],
    questions: [
      { type: "mc", question: "Wie wird هَذَا richtig ausgesprochen?", choices: ["هَاذَا", "هَذَا", "هَاذِه", "هَذِه"], correct: "هَاذَا", explanation: "Das erste Alif wird gesprochen, aber nicht geschrieben." },
      { type: "truefalse", statement: "Das Arabische besitzt ein eigenes Wort für 'ist' (eine Kopula).", correct: false, explanation: "Es gibt keine Kopula — 'ist' wird im Nominalsatz nicht ausgedrückt." },
      { type: "mc", question: "Was drückt der n-Laut am Ende von كِتَابٌ aus?", choices: ["den unbestimmten Artikel 'ein'", "den bestimmten Artikel 'das'", "den Plural", "die weibliche Form"], correct: "den unbestimmten Artikel 'ein'", explanation: "Dieser n-Laut heißt Tanwin." },
      { type: "mc", question: "Wie macht man aus هَذَا بَيْتٌ eine Frage?", choices: ["أَهَذَا بَيْتٌ؟", "هَذَا بَيْتٌ؟؟", "مَا هَذَا بَيْتٌ", "هَلْ هَذَا بَيْتٌ هُوَ"], correct: "أَهَذَا بَيْتٌ؟", explanation: "Die Fragepartikel أَ kommt an den Satzanfang." },
      { type: "mc", question: "لَا، هَذَا مَسْجِدٌ — was wird hier verneint bestätigt?", choices: ["Es ist keine Moschee, sondern etwas anderes", "Es ist eine Moschee (Antwort auf eine falsche Vermutung)", "Es ist ein Buch"], correct: "Es ist eine Moschee (Antwort auf eine falsche Vermutung)", explanation: "لَا verneint die vorherige Vermutung (z. B. 'ist dies ein Haus?'), die Aussage selbst bestätigt dann die richtige Sache." }
    ]
  },

  /* ===================== LEKTION 2 ===================== */
  2: {
    concepts: [
      { term: "ذَلِكَ", explanation: "Bedeutet 'das, jenes'. Wird ذَالِكَ ausgesprochen, aber ohne Alif geschrieben — genau wie bei هَذَا." },
      { term: "وَ", explanation: "Bedeutet 'und'. Wird immer direkt mit dem folgenden Wort zusammengeschrieben, nie als eigenes Wort mit Leerzeichen davor." }
    ],
    questions: [
      { type: "truefalse", statement: "ذَلِكَ wird mit Alif geschrieben, so wie es ausgesprochen wird.", correct: false, explanation: "Es wird ذَالِكَ gesprochen, aber ohne Alif geschrieben." },
      { type: "mc", question: "Wie wird وَ (und) geschrieben?", choices: ["als eigenständiges Wort mit Leerzeichen danach", "zusammen mit dem folgenden Wort", "zusammen mit dem vorherigen Wort"], correct: "zusammen mit dem folgenden Wort", explanation: "وَ wird direkt an das nächste Wort angehängt." },
      { type: "mc", question: "هَذَا بَيْتٌ وَذَلِكَ ___ — 'und jenes ist eine Moschee'", choices: ["مَسْجِدٌ", "بَيْتٌ", "كِتَابٌ"], correct: "مَسْجِدٌ", explanation: "هَذَا بَيْتٌ وَذَلِكَ مَسْجِدٌ." }
    ]
  },

  /* ===================== LEKTION 3 ===================== */
  3: {
    concepts: [
      { term: "Sonnenbuchstaben", explanation: "14 der 28 arabischen Buchstaben sind Sonnenbuchstaben. Beginnt das Wort nach ال mit einem davon, wird das 'l' nicht ausgesprochen, sondern an den folgenden Buchstaben assimiliert (Shadda), z. B. al-shamsu wird ash-shamsu ausgesprochen." },
      { term: "Mondbuchstaben", explanation: "Bei den restlichen 14 Buchstaben (Mondbuchstaben) findet keine Assimilation statt — das 'l' wird ganz normal ausgesprochen, z. B. al-qamaru." },
      { term: "Hamzat al-wasl", explanation: "Der Anfangsvokal von ال wird in der Aussprache weggelassen, wenn ein Wort davorsteht (z. B. wa l-baitu statt wa al-baitu). Im Schriftbild bleibt das a jedoch stehen, außer wenn ein besonderes Zeichen (ٱ) darübersteht." },
      { term: "Tanwin bei Adjektiven", explanation: "Tanwin ist zwar der unbestimmte Artikel bei Substantiven, entspricht bei Adjektiven aber nicht dem deutschen 'ein, eine' — z. B. مَفْتُوحٌ heißt einfach 'offen', nicht 'ein Offenes'." }
    ],
    questions: [
      { type: "mc", question: "Wie wird اَلشَّمْسُ (die Sonne) korrekt ausgesprochen?", choices: ["ash-shamsu", "al-shamsu"], correct: "ash-shamsu", explanation: "ش ist ein Sonnenbuchstabe, das 'l' wird assimiliert." },
      { type: "truefalse", statement: "Bei Mondbuchstaben wird das 'l' von ال an den folgenden Buchstaben assimiliert.", correct: false, explanation: "Assimilation passiert nur bei Sonnenbuchstaben — bei Mondbuchstaben bleibt das 'l' erhalten." },
      { type: "mc", question: "Welches Wort enthält einen Sonnenbuchstaben?", choices: ["الشَّمْسُ", "الْقَمَرُ"], correct: "الشَّمْسُ", explanation: "ش ist Sonnenbuchstabe, ق ist Mondbuchstabe." },
      { type: "mc", question: "الْبَابُ ___ — 'Die Tür ist offen'", choices: ["مَفْتُوحٌ", "مَكْسُورٌ"], correct: "مَفْتُوحٌ", explanation: "مَكْسُورٌ heißt 'kaputt', مَفْتُوحٌ heißt 'offen'." },
      { type: "truefalse", statement: "Tanwin bedeutet bei Adjektiven wie مَفْتُوحٌ dasselbe wie 'ein/eine' bei Substantiven.", correct: false, explanation: "Bei Adjektiven trägt Tanwin keine 'ein/eine'-Bedeutung, sondern zeigt nur Unbestimmtheit an." }
    ]
  },

  /* ===================== LEKTION 4 (inkl. 4A) ===================== */
  4: {
    concepts: [
      { term: "مَرْفُوع (Nominativ)", explanation: "Die normale, unmarkierte Endung eines Substantivs ist 'u'. Das nennt man Nominativ (مرفوع), z. B. الْبَيْتُ جَدِيدٌ (Das Haus ist neu)." },
      { term: "مَجْرُور (Genetiv nach Präposition)", explanation: "Nach einer Präposition ändert sich die Endung des Substantivs zu 'i' — das ist der Genetiv (مجرور), z. B. فِي الْبَيْتِ (in dem Haus)." },
      { term: "في vor ال", explanation: "فِي hat eigentlich ein langes 'i'. Folgt darauf 'al', wird es zu 'fil' verkürzt, weil im Arabischen auf lange Vokale keine vokallosen Konsonanten folgen." },
      { term: "هُوَ / هِيَ", explanation: "هُوَ ('er, es') bezeichnet ein männliches Substantiv (Mensch, Tier oder Sache). هِيَ ('sie, es') bezeichnet ein weibliches Substantiv." },
      { term: "Tanwin bei Eigennamen", explanation: "Eigennamen tragen kein Tanwin — weder männliche wie حَامِدٌ (richtig: حَامِدُ) noch weibliche wie فَاطِمَةُ، زَيْنَبُ، آمِنَةُ." },
      { term: "مِنْ / إِلَى", explanation: "مِنْ bedeutet 'von', إِلَى bedeutet 'nach, zu'. Beide sind Präpositionen und ziehen den Genetiv nach sich." },
      { term: "أَنَا / أَنْتَ", explanation: "أَنَا ('ich') wird für Männer und Frauen gleichermaßen benutzt. أَنْتَ ('du') gilt hier nur für die 2. Person Singular maskulin." },
      { term: "Subjekt-Auslassung beim Verb", explanation: "ذَهَبَ bedeutet für sich genommen 'er ging'. Folgt jedoch ein Substantiv als Subjekt (z. B. ein Name), wird das 'er' nicht mehr extra ausgedrückt: ذَهَبَ بِلَالٌ إِلَى الْمَسْجِدِ (Bilal ist zur Moschee gegangen)." }
    ],
    questions: [
      { type: "mc", question: "Welchen Kasus hat ein Substantiv nach einer Präposition wie فِي?", choices: ["مَرْفُوع (Nominativ)", "مَجْرُور (Genetiv)"], correct: "مَجْرُور (Genetiv)", explanation: "Präpositionen ziehen den Genetiv nach sich." },
      { type: "truefalse", statement: "Die normale, unmarkierte Endung eines Substantivs ist der Nominativ (مرفوع).", correct: true, explanation: "Ohne besonderen Grund (z. B. Präposition) steht ein Substantiv im Nominativ." },
      { type: "mc", question: "أَيْنَ الْكِتَابُ؟ ___ عَلَى الْمَكْتَبِ — 'Es ist auf dem Schreibtisch'", choices: ["هُوَ", "هِيَ"], correct: "هُوَ", explanation: "الْكِتَابُ ist maskulin, also هُوَ." },
      { type: "mc", question: "أَيْنَ آمِنَةُ؟ ___ فِي الْبَيْتِ", choices: ["هُوَ", "هِيَ"], correct: "هِيَ", explanation: "آمِنَةُ ist ein weiblicher Name, also هِيَ." },
      { type: "truefalse", statement: "Eigennamen wie حَامِدٌ tragen Tanwin, genau wie normale unbestimmte Substantive.", correct: false, explanation: "Eigennamen tragen kein Tanwin." },
      { type: "mc", question: "Welche Präposition bedeutet 'nach, zu'?", choices: ["مِنْ", "إِلَى"], correct: "إِلَى", explanation: "مِنْ bedeutet 'von'." },
      { type: "truefalse", statement: "أَنْتَ kann sowohl für männliche als auch für weibliche Angesprochene benutzt werden.", correct: false, explanation: "In dieser Lektion gilt أَنْتَ nur für maskulin Singular — die weibliche Form kommt später." },
      { type: "mc", question: "ذَهَبَ بِلَالٌ إِلَى الْمَسْجِدِ — was bedeutet der Satz?", choices: ["Bilal ist zur Moschee gegangen", "Er ist zur Moschee gegangen", "Bilal geht zur Moschee"], correct: "Bilal ist zur Moschee gegangen", explanation: "Da بِلَالٌ als Subjekt genannt wird, entfällt das eigenständige 'er'." }
    ]
  },

  /* ===================== LEKTION 5 ===================== */
  5: {
    concepts: [
      { term: "Mudaf / Mudaf ilaihi", explanation: "In einer Idafa-Konstruktion (Besitzverhältnis, z. B. كِتَابُ بِلَالٍ 'Bilals Buch') ist das erste Wort der Mudaf, das zweite der Mudaf ilaihi." },
      { term: "Mudaf ohne Artikel/Tanwin", explanation: "Der Mudaf trägt weder den bestimmten Artikel noch Tanwin — unabhängig davon, ob die ganze Konstruktion bestimmt oder unbestimmt ist." },
      { term: "Bestimmtheit der Idafa", explanation: "Die ganze Idafa-Konstruktion ist bestimmt, sobald der Mudaf ilaihi bestimmt ist (z. B. ein Eigenname wie بِلَال oder ein Wort mit Artikel wie الإِمَام)." },
      { term: "Mudaf ilaihi im Genetiv", explanation: "Der Mudaf ilaihi steht immer im Genetiv (مجرور), z. B. بَيْتُ الإِمَامِ (das Haus des Imams)." },
      { term: "مَنْ als Besitzfrage", explanation: "مَنْ كِتَابُ بِلَالٍ؟ fragt nach dem Besitzer: 'Wessen Buch ist das?'" },
      { term: "Vokativpartikel يَا", explanation: "يَا wird vor einen direkt angesprochenen Namen gesetzt, z. B. يَا بِلَالُ ('Oh Bilal')." },
      { term: "اِسْمُ / اِبْنُ mit Hamzat al-wasl", explanation: "Bei اِسْمُ ('Name') und اِبْنُ ('Sohn von') wird das Anfangs-'i' in der Aussprache weggelassen, wenn ein Wort davorsteht, z. B. اِسْمُ الْوَلَدِ بِلَالٌ (Der Name des Jungen ist Bilal)." }
    ],
    questions: [
      { type: "mc", question: "Welche Endung trägt der Mudaf in كِتَابُ بِلَالٍ?", choices: ["keinen Artikel, kein Tanwin", "den bestimmten Artikel", "Tanwin"], correct: "keinen Artikel, kein Tanwin", explanation: "Der Mudaf steht immer ohne Artikel und ohne Tanwin." },
      { type: "truefalse", statement: "Der Mudaf ilaihi steht im Genetiv (مجرور).", correct: true, explanation: "Das ist die feste Regel der Idafa-Konstruktion." },
      { type: "mc", question: "بَيْتُ الإِمَامِ — welches Wort ist hier der Mudaf ilaihi?", choices: ["بَيْتُ", "الإِمَامِ"], correct: "الإِمَامِ", explanation: "Das zweite Wort der Idafa ist der Mudaf ilaihi." },
      { type: "truefalse", statement: "كِتَابُ بِلَالٍ ist unbestimmt, weil بِلَال keinen Artikel trägt.", correct: false, explanation: "Eigennamen sind automatisch bestimmt, daher ist die ganze Idafa bestimmt." },
      { type: "mc", question: "اِسْمُ الْوَلَدِ بِلَالٌ — was bedeutet dieser Satz?", choices: ["Der Name des Jungen ist Bilal", "Der Junge ist Bilal", "Das ist der Junge Bilal"], correct: "Der Name des Jungen ist Bilal", explanation: "اِسْمُ ist hier der Mudaf, الْوَلَدِ der Mudaf ilaihi." },
      { type: "mc", question: "Wie spricht man Bilal direkt an?", choices: ["يَا بِلَالُ", "بِلَالُ يَا", "أَ بِلَالُ"], correct: "يَا بِلَالُ", explanation: "Die Vokativpartikel يَا steht vor dem Namen." }
    ]
  },

  /* ===================== LEKTION 6 ===================== */
  6: {
    concepts: [
      { term: "هَذِهِ", explanation: "Feminine Form von هَذَا. Wird هَاذِه ausgesprochen, aber das Alif wird in der Schrift weggelassen." },
      { term: "Feminin mit ة", explanation: "Substantive werden feminin gemacht, indem am Ende ein ة angehängt wird. Der letzte Buchstabe davor bekommt ein Fatha, z. B. مُدَرِّسٌ (ein Lehrer) → مُدَرِّسَةٌ (eine Lehrerin)." },
      { term: "Unregelmäßige feminine Formen", explanation: "Manche Substantive haben eine eigene weibliche Form statt der ة-Endung, z. B. اِبْنٌ (Sohn) → بِنْتٌ (Tochter), أَخٌ (Bruder) → أُخْتٌ (Schwester)." },
      { term: "لِ (Besitz-Präposition)", explanation: "لِ bedeutet 'gehören, besitzen, für'. لِلَّهِ ('für Allah') wird geschrieben, indem nur das Alif von اللَّه weggelassen wird." },
      { term: "لِمَنْ", explanation: "لِمَنْ fragt nach dem Besitzer: 'wessen, wem gehört'. Vor ال wird daraus لِمَنِ." }
    ],
    questions: [
      { type: "mc", question: "Wie wird مُدَرِّسٌ (ein Lehrer) feminin?", choices: ["مُدَرِّسَةٌ", "مُدَرِّسٌ ة", "مُدَرِّسِينٌ"], correct: "مُدَرِّسَةٌ", explanation: "ة wird angehängt, der Buchstabe davor bekommt Fatha." },
      { type: "truefalse", statement: "بِنْتٌ ist die reguläre ة-Form von اِبْنٌ.", correct: false, explanation: "بِنْتٌ ist eine eigene, unregelmäßige weibliche Form — nicht mit ة gebildet." },
      { type: "mc", question: "لِمَنْ الْكِتَابُ؟ — was wird hier gefragt?", choices: ["Wessen Buch ist das?", "Wo ist das Buch?", "Was ist das Buch?"], correct: "Wessen Buch ist das?", explanation: "لِمَنْ fragt nach dem Besitzer." },
      { type: "mc", question: "هَذَا لِبِلَالٍ — was bedeutet das?", choices: ["Dies gehört Bilal", "Dies ist Bilal", "Dies ist bei Bilal"], correct: "Dies gehört Bilal", explanation: "لِ drückt hier Besitz aus." },
      { type: "truefalse", statement: "هَذِهِ wird mit demselben Alif geschrieben, das man hört.", correct: false, explanation: "Wie bei هَذَا wird das Alif in der Aussprache gehört, aber nicht geschrieben." }
    ]
  },

  /* ===================== LEKTION 7 ===================== */
  7: {
    concepts: [
      { term: "تِلْكَ", explanation: "Feminine Form von ذَلِكَ ('das, jenes')." }
    ],
    questions: [
      { type: "mc", question: "Welches Wort ist die feminine Form von ذَلِكَ?", choices: ["تِلْكَ", "هَذِهِ"], correct: "تِلْكَ", explanation: "تِلْكَ verhält sich zu ذَلِكَ wie هَذِهِ zu هَذَا." },
      { type: "mc", question: "هَذِهِ آمِنَةُ وَ___ مَرْيَمُ — 'und das ist Maryam'", choices: ["تِلْكَ", "ذَلِكَ"], correct: "تِلْكَ", explanation: "مَرْيَمُ ist weiblich, daher die feminine Form تِلْكَ." },
      { type: "truefalse", statement: "تِلْكَ wird sowohl für männliche als auch weibliche Bezugswörter benutzt.", correct: false, explanation: "تِلْكَ ist die rein feminine Form — für maskulin bleibt es ذَلِكَ." }
    ]
  },

  /* ===================== LEKTION 8 ===================== */
  8: {
    concepts: [
      { term: "Aussage vs. Bezeichnung mit هَذَا", explanation: "هَذَا كِتَابٌ bedeutet 'Dies ist ein Buch' (vollständige Aussage). هَذَا الْكِتَابُ bedeutet dagegen 'dieses Buch' (nur eine Bezeichnung) — der Unterschied liegt am bestimmten Artikel beim Substantiv." },
      { term: "Kasus nach Präposition/Mudaf", explanation: "Ein Substantiv steht im Nominativ ('-u'), außer nach einer Präposition oder als Mudaf ilaihi — dann steht es im Genetiv ('-i')." },
      { term: "Substantive mit langem 'a'", explanation: "Substantive, die auf ein langes 'a' enden (z. B. أَمْرِيكَا), ändern ihre Endung in keinem Kasus." },
      { term: "خَلْفَ / أَمَامَ", explanation: "خَلْفَ ('hinter') und أَمَامَ ('vor') verhalten sich wie Präpositionen — das folgende Substantiv steht im Genetiv." },
      { term: "جَلَسَ", explanation: "Bedeutet 'er saß'." }
    ],
    questions: [
      { type: "mc", question: "Was bedeutet هَذَا الْكِتَابُ im Gegensatz zu هَذَا كِتَابٌ?", choices: ["dieses Buch (Bezeichnung)", "Dies ist ein Buch (Aussage)"], correct: "dieses Buch (Bezeichnung)", explanation: "Der bestimmte Artikel macht daraus eine bloße Bezeichnung, keinen vollständigen Satz." },
      { type: "truefalse", statement: "أَمْرِيكَا ändert seine Endung je nach Kasus.", correct: false, explanation: "Wörter, die auf ein langes 'a' enden, bleiben in jedem Kasus unverändert." },
      { type: "mc", question: "حَامِدٌ ___ الْمُدَرِّسِ — 'Hamid steht vor dem Lehrer'", choices: ["أَمَامَ", "خَلْفَ"], correct: "أَمَامَ", explanation: "خَلْفَ würde 'hinter' bedeuten." },
      { type: "mc", question: "Was bedeutet جَلَسَ?", choices: ["er saß", "er ging", "er stand"], correct: "er saß", explanation: "جَلَسَ heißt 'sitzen/saß'." },
      { type: "mc", question: "هُوَ جَلَسَ ___ الْمُدَرِّسِ — 'Er saß vor dem Lehrer'", choices: ["أَمَامَ", "خَلْفَ"], correct: "أَمَامَ", explanation: "أَمَامَ bedeutet 'vor'." }
    ]
  },

  /* ===================== LEKTION 9 (Teil A) ===================== */
  9: {
    concepts: [
      { term: "نَعْت / مَنْعُوت", explanation: "Das Adjektiv (نعت) folgt im Arabischen immer dem Substantiv (منعوت), das es näher bestimmt — nicht davor wie im Deutschen, z. B. بَيْتٌ جَدِيدٌ (ein neues Haus)." },
      { term: "Kongruenz: Geschlecht", explanation: "Das Adjektiv stimmt im Geschlecht mit dem Substantiv überein: maskulin mit maskulin, feminin mit feminin (meist durch ة markiert), z. B. وَلَدٌ صَغِيرٌ / بِنْتٌ صَغِيرَةٌ." },
      { term: "Kongruenz: Bestimmtheit", explanation: "Ist das Substantiv bestimmt (Artikel), muss auch das Adjektiv den Artikel tragen; ist das Substantiv unbestimmt (Tanwin), ist auch das Adjektiv unbestimmt." },
      { term: "Kongruenz: Kasus", explanation: "Das Adjektiv steht immer im gleichen Kasus wie das Substantiv, das es bestimmt, z. B. أَنَا فِي بَيْتٍ جَدِيدٍ (Genetiv bei beiden)." },
      { term: "Adjektive auf ـَانْ", explanation: "Adjektive, die auf ـَانْ enden (z. B. كَسْلَانُ 'faul', جَوْعَانُ 'hungrig', عَطْشَانُ 'durstig', غَضْبَانُ 'ärgerlich', مَلآنُ 'voll'), tragen kein Tanwin." }
    ],
    questions: [
      { type: "mc", question: "بِنْتٌ ___ — 'eine kleine Tochter'", choices: ["صَغِيرَةٌ", "صَغِيرٌ"], correct: "صَغِيرَةٌ", explanation: "بِنْتٌ ist feminin, das Adjektiv braucht die ة-Form." },
      { type: "truefalse", statement: "Im Arabischen steht das Adjektiv vor dem Substantiv, wie im Deutschen.", correct: false, explanation: "Das Adjektiv (نعت) folgt immer dem Substantiv (منعوت)." },
      { type: "mc", question: "الْمُدَرِّسُ الْجَدِيدُ فِي الْفَصْلِ — warum trägt الْجَدِيدُ hier den Artikel?", choices: ["weil das Substantiv bestimmt ist und das Adjektiv folgen muss", "weil es ein Eigenname ist", "weil es im Genetiv steht"], correct: "weil das Substantiv bestimmt ist und das Adjektiv folgen muss", explanation: "Bestimmtheit von Substantiv und Adjektiv müssen übereinstimmen." },
      { type: "mc", question: "أَنَا فِي بَيْتٍ ___ — 'Ich bin in einem neuen Haus'", choices: ["جَدِيدٍ", "جَدِيدٌ", "جَدِيدَ"], correct: "جَدِيدٍ", explanation: "Nach فِي steht Genetiv — das Adjektiv folgt im gleichen Kasus." },
      { type: "truefalse", statement: "Adjektive auf ـَانْ wie جَوْعَانُ tragen Tanwin wie normale unbestimmte Adjektive.", correct: false, explanation: "Diese Adjektivform trägt kein Tanwin." },
      { type: "mc", question: "سَيَّارَةٌ ___ — 'ein neues Auto'", choices: ["جَدِيدَةٌ", "جَدِيدٌ"], correct: "جَدِيدَةٌ", explanation: "سَيَّارَةٌ ist feminin, daher die ة-Form des Adjektivs." }
    ]
  }

};  