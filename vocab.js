const LESSONS = {

  1: [
    { arabic: "بَيْتٌ", german: "ein Haus", alt: { arabic: "الْبَيْتُ", german: "das Haus" }, categories: ["ism"] },
    { arabic: "مَسْجِدٌ", german: "eine Moschee", alt: { arabic: "الْمَسْجِدُ", german: "die Moschee" }, categories: ["ism"] },
    { arabic: "بَابٌ", german: "eine Tür", alt: { arabic: "الْبَابُ", german: "die Tür" }, categories: ["ism"] },
    { arabic: "كِتَابٌ", german: "ein Buch", plural: "كُتُبٌ", pluralBook: true, alt: { arabic: "الْكِتَابُ", german: "das Buch" }, categories: ["ism"] },
    { arabic: "قَلَمٌ", german: "ein Stift", plural: "أَقْلَامٌ", pluralBook: true, alt: { arabic: "الْقَلَمُ", german: "der Stift" }, categories: ["ism"] },
    { arabic: "مِفْتَاحٌ", german: "ein Schlüssel", alt: { arabic: "الْمِفْتَاحُ", german: "der Schlüssel" }, categories: ["ism"] },
    { arabic: "مَكْتَبٌ", german: "ein Schreibtisch, ein Burö (nach Lektion 7)", alt: { arabic: "الْمَكْتَبُ", german: "der Schreibtisch, das Büro" }, categories: ["ism"] },
    { arabic: "سَرِيرٌ", german: "ein Bett", alt: { arabic: "السَّرِيرُ", german: "das Bett" }, categories: ["ism"] },
    { arabic: "كُرْسِيٌّ", german: "ein Stuhl", alt: { arabic: "الْكُرْسِيُّ", german: "der Stuhl" }, categories: ["ism"] },
    { arabic: "نَجْمٌ", german: "ein Stern", plural: "نُجُومٌ", pluralBook: true, alt: { arabic: "النَّجْمُ", german: "der Stern" }, categories: ["ism"] },
    { arabic: "قَمِيصٌ", german: "ein Hemd", alt: { arabic: "الْقَمِيصُ", german: "das Hemd" }, categories: ["ism"] },
    { arabic: "طَبِيبٌ", german: "ein Arzt", plural: "أَطِبَّاءُ", pluralBook: true, categories: ["ism"] },
    { arabic: "نَعَمْ", german: "ja", categories: ["harf", "mabni"] },
    { arabic: "أَ", german: "Fragepartikel (vor Entscheidungsfragen, direkt vor dem Folgewort)", categories: ["harf", "mabni"] },
    { arabic: "وَ", german: "und (direkt vor dem Folgewort)", categories: ["harf", "mabni"] },
    { arabic: "وَلَدٌ", german: "ein Junge", plural: "أَوْلَادٌ", pluralBook: true, alt: { arabic: "الْوَلَدُ", german: "der Junge" }, categories: ["ism"] },
    { arabic: "طَالِبٌ", german: "ein Student", plural: "طُلَّابٌ", pluralBook: true, alt: { arabic: "الطَّالِبُ", german: "der Student" }, categories: ["ism"] },
    { arabic: "رَجُلٌ", german: "ein Mann", plural: "رِجَالٌ", pluralBook: true, alt: { arabic: "الرَّجُلُ", german: "der Mann" }, categories: ["ism"] },
    { arabic: "تَاجِرٌ", german: "ein Händler", plural: "تُجَّارٌ", pluralBook: true, alt: { arabic: "التَّاجِرُ", german: "der Händler" }, categories: ["ism"] },
    { arabic: "كَلْبٌ", german: "ein Hund", alt: { arabic: "الْكَلْبُ", german: "der Hund" }, categories: ["ism"] },
    { arabic: "قِطٌّ", german: "ein Kater", alt: { arabic: "الْقِطُّ", german: "der Kater" }, categories: ["ism"] },
    { arabic: "حِمَارٌ", german: "ein Esel", alt: { arabic: "الْحِمَارُ", german: "der Esel" }, categories: ["ism"] },
    { arabic: "حِصَانٌ", german: "ein Pferd", alt: { arabic: "الْحِصَانُ", german: "das Pferd" }, categories: ["ism"] },
    { arabic: "جَمَلٌ", german: "ein Kamel", alt: { arabic: "الْجَمَلُ", german: "das Kamel" }, categories: ["ism"] },
    { arabic: "دِيكٌ", german: "ein Hahn", alt: { arabic: "الدِّيكُ", german: "der Hahn" }, categories: ["ism"] },
    { arabic: "مُدَرِّسٌ", german: "ein Lehrer", plural: "مُدَرِّسُونَ", pluralBook: true, alt: { arabic: "الْمُدَرِّسُ", german: "der Lehrer" }, categories: ["ism"] },
    { arabic: "مِنْدِيلٌ", german: "ein Tuch (auch: Papiertaschentuch oder Serviette)", alt: { arabic: "الْمِنْدِيلُ", german: "das Tuch (auch: Papiertaschentuch oder Serviette)" }, categories: ["ism"] },
    { arabic: "لَا", german: "nein", categories: ["harf", "mabni"] },
    { arabic: "مَا", german: "was", categories: ["ismistifham", "mabni"] },
  ],

  2: [
    { arabic: "إِمَامٌ", german: "ein Imam", alt: { arabic: "الْإِمَامُ", german: "der Imam" }, categories: ["ism"] },
    { arabic: "سُكَّرٌ", german: "Zucker", alt: { arabic: "السُّكَّرُ", german: "der Zucker" }, categories: ["ism"] },
    { arabic: "حَجَرٌ", german: "ein Stein", alt: { arabic: "الْحَجَرُ", german: "der Stein" }, categories: ["ism"] },
    { arabic: "لَبَنٌ", german: "eine Milch", alt: { arabic: "اللَّبَنُ", german: "die Milch" }, categories: ["ism"] },
  ],

  3: [
    { arabic: "غَنِيٌّ", german: "reich", plural: "أَغْنِيَاءُ", pluralBook: true, categories: ["ism"] },
    { arabic: "فَقِيرٌ", german: "arm", plural: "فُقَرَاءُ", pluralBook: true, categories: ["ism"] },
    { arabic: "طَوِيلٌ", german: "groß (lang)", plural: "طِوَالٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "قَصِيرٌ", german: "kurz", plural: "قِصَارٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "بَارِدٌ", german: "kalt", categories: ["ism"] },
    { arabic: "حَارٌّ", german: "heiß", categories: ["ism"] },
    { arabic: "جَالِسٌ", german: "sitzend", categories: ["ism"] },
    { arabic: "وَاقِفٌ", german: "stehend", categories: ["ism"] },
    { arabic: "جَدِيدٌ", german: "neu", plural: "جُدُدٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "قَدِيمٌ", german: "alt", categories: ["ism"] },
    { arabic: "قَرِيبٌ", german: "nah", categories: ["ism"] },
    { arabic: "بَعِيدٌ", german: "fern", categories: ["ism"] },
    { arabic: "نَظِيفٌ", german: "sauber", categories: ["ism"] },
    { arabic: "وَسِخٌ", german: "schmutzig", categories: ["ism"] },
    { arabic: "صَغِيرٌ", german: "klein", plural: "صِغَارٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "كَبِيرٌ", german: "groß", plural: "كِبَارٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "خَفِيفٌ", german: "leicht (im Sinne des Gewichtes)", categories: ["ism"] },
    { arabic: "ثَقِيلٌ", german: "schwer", categories: ["ism"] },
    { arabic: "الْوَرَقُ", german: "das Papier", categories: ["ism"] },
    { arabic: "الْمَاءُ", german: "das Wasser", categories: ["ism"] },
    { arabic: "التُّفَاحُ", german: "die Äpfel", categories: ["ism"] },
    { arabic: "جَمِيلٌ", german: "schön", categories: ["ism"] },
    { arabic: "الدُّكَّانُ", german: "das Geschäft", alt: { arabic: "دُكَّانٌ", german: "ein Geschäft" }, categories: ["ism"] },
    { arabic: "حُلْوٌ", german: "süß", categories: ["ism"] },
    { arabic: "مَرِيضٌ", german: "krank", categories: ["ism"] },
    { arabic: "مكْسُوْرٌ", german: "kaputt, gebrochen", categories: ["ism"] },
    { arabic: "المهندس", german: "der Ingenieur", categories: ["ism"] },
    { arabic: "مُفْتاحٌ", german: "offen", categories: ["ism"] },
    { arabic: "لذيذٌ", german: "lecker", categories: ["ism"] },
    { arabic: "سَاعَةٌ ", german: "eine Uhr", alt: { arabic: "السَّاعَةُ", german: "die Uhr" }, categories: ["ism"] },
    { arabic: "تُفَّاحَةٌ ", german: "ein Apfel", categories: ["ism"] },
    { arabic: "التُّفَّاحَةُ ", german: "der Apfel", categories: ["ism"] },

  ],

  4: [
    { arabic: "أَيْنَ", german: "wo", categories: ["ismistifham", "mabni"] },
    { arabic: "عَلَى", german: "auf", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "غُرْفَةٌ", german: "ein Zimmer", alt: { arabic: "الْغُرْفَةُ", german: "das Zimmer" }, categories: ["ism"] },
    { arabic: "السَّمَاءُ", german: "der Himmel", alt: { arabic: "سَمَاءٌ", german: "ein Himmel" }, categories: ["ism"] },
    { arabic: "الْحَمَّامُ", german: "das Badezimmer", alt: { arabic: "حَمَّامٌ", german: "ein Badezimmer" }, categories: ["ism"] },
    { arabic: "الْفَصْلُ", german: "das Klassenzimmer", alt: { arabic: "فَصْلٌ", german: "ein Klassenzimmer" }, categories: ["ism"] },
    { arabic: "الْمَطْبَخُ", german: "die Küche", alt: { arabic: "مَطْبَخٌ", german: "eine Küche" }, categories: ["ism"] },
    { arabic: "الْمِرْحَاضُ", german: "die Toilette", alt: { arabic: "مِرْحَاضٌ", german: "eine Toilette" }, categories: ["ism"] },
    { arabic: "فِي", german: "in", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "مِنْ", german: "von (wenn الـ nachfolgt, wird es zu مِنَ)", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "إِلَى", german: "nach", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "الْفِلِبِّينُ", german: "Philippinen", categories: ["ism"] },
    { arabic: "الْيَابَانُ", german: "Japan", categories: ["ism"] },
    { arabic: "الْمَدْرَسَةُ", german: "die Schule", alt: { arabic: "مَدْرَسَةٌ", german: "eine Schule" }, categories: ["ism"] },
    { arabic: "الصِّينُ", german: "China", categories: ["ism"] },
    { arabic: "السُّوقُ", german: "der Markt", alt: { arabic: "سُوقٌ", german: "ein Markt" }, categories: ["ism"] },
    { arabic: "الْهِنْدُ", german: "Indien", categories: ["ism"] },
    { arabic: "الْجَامِعَةُ", german: "die Universität", alt: { arabic: "جَامِعَةٌ", german: "eine Universität" }, categories: ["ism"] },
    { arabic: "الْمُدِيرُ", german: "der Direktor", alt: { arabic: "مُدِيرٌ", german: "ein Direktor" }, categories: ["ism"] },
    { arabic: "ذَهَبَ", german: "Er ist gegangen", plural: "ذَهَبُوا", pluralBook: true, pluralType: "pronomen", categories: ["fiil", "mabni"] },
    { arabic: "خَرَجَ", german: "Er ist hinaus gegangen", categories: ["fiil", "mabni"] }
  ],

  5: [
    { arabic: "الرَّسُولُ", german: "der Gesandte", alt: { arabic: "رَسُولٌ", german: "ein Gesandter" }, categories: ["ism"] },
    { arabic: "تَحْتَ", german: "unter", categories: ["ism", "mudaf"] },
    { arabic: "الْعَمُّ", german: "der Onkel (Bruder des Vaters)", plural: "الْأَعْمَامُ", categories: ["ism"] },
    { arabic: "الِابْنُ", german: "der Sohn", categories: ["ism"] },
    { arabic: "الشَّارِعُ", german: "die Straße", alt: { arabic: "شَارِعٌ", german: "eine Straße" }, categories: ["ism"] },
    { arabic: "السَّيَّارَةُ", german: "das Auto", alt: { arabic: "سَيَّارَةٌ", german: "ein Auto" }, categories: ["ism"] },
    { arabic: "الْكَعْبَةُ", german: "die Kaaba", categories: ["ism"] },
    { arabic: "هُنَا", german: "hier", categories: ["ismishara", "mabni"] },
    { arabic: "الْخَالُ", german: "der Onkel (Bruder der Mutter)", plural: "الْأَخْوَالُ", alt: { arabic: "خَالٌ", german: "ein Onkel (Bruder der Mutter)" }, categories: ["ism"] },
    { arabic: "هُنَاكَ", german: "dort", categories: ["ismishara", "mabni"] },
    { arabic: "مُغْلَق", german: "verschlossen, geschlossen", categories: ["ism"] },
    { arabic: "الْبِنْتُ", german: "die Tochter, das Mädchen", categories: ["ism"] },
    { arabic: "الِاسْمُ", german: "der Name", categories: ["ism"] },
    { arabic: "الطَّبِيبُ", german: "der Arzt", categories: ["ism"] },
    { arabic: "الْحَقِيبَةُ", german: "die Tasche, der Rucksack", alt: { arabic: "حَقِيبَةٌ", german: "eine Tasche, ein Rucksack" }, categories: ["ism"] },
  ],

  6: [
    { arabic: "يَدٌ", german: "eine Hand", categories: ["ism"] },
    { arabic: "رِجْلٌ", german: "ein Bein", categories: ["ism"] },
    { arabic: "عَيْنٌ", german: "ein Auge", categories: ["ism"] },
    { arabic: "أُذُنٌ", german: "ein Ohr", categories: ["ism"] },
    { arabic: "رَأْسٌ", german: "ein Kopf", alt: { arabic: "الرَّأْسُ", german: "der Kopf" }, categories: ["ism"] },
    { arabic: "أَنْفٌ", german: "eine Nase", categories: ["ism"] },
    { arabic: "فَمٌ", german: "ein Mund", categories: ["ism"] },
    { arabic: "وَجْهٌ", german: "ein Gesicht", alt: { arabic: "الْوَجْهُ", german: "das Gesicht" }, categories: ["ism"] },
    { arabic: "الْمِكْوَاةُ", german: "das Bügeleisen", alt: { arabic: "مِكْوَاةٌ", german: "ein Bügeleisen" }, categories: ["ism"] },
    { arabic: "الْأَنْفُ", german: "die Nase", categories: ["ism"] },
    { arabic: "الْبَقَرَةُ", german: "die Kuh", alt: { arabic: "بَقَرَةٌ", german: "eine Kuh" }, categories: ["ism"] },
    { arabic: "الْفَمُ", german: "der Mund", categories: ["ism"] },
    { arabic: "الدَّرَّاجَةُ", german: "das Fahrrad", alt: { arabic: "دَرَّاجَةٌ", german: "ein Fahrrad" }, categories: ["ism"] },
    { arabic: "الْقِدْرُ", german: "der Kochtopf", alt: { arabic: "قِدْرٌ", german: "ein Kochtopf" }, categories: ["ism"] },
    { arabic: "الْمِلْعَقَةُ", german: "der Löffel", alt: { arabic: "مِلْعَقَةٌ", german: "ein Löffel" }, categories: ["ism"] },
    { arabic: "الْأُذُنُ", german: "das Ohr", categories: ["ism"] },
    { arabic: "الْفَلَّاحُ", german: "der Bauer", categories: ["ism"] },
    { arabic: "الْعَيْنُ", german: "das Auge", categories: ["ism"] },
    { arabic: "الْأُمُّ", german: "die Mutter", categories: ["ism"] },
    { arabic: "الْيَدُ", german: "die Hand", categories: ["ism"] },
    { arabic: "الْأَبُ", german: "der Vater", categories: ["ism"] },
    { arabic: "الرِّجْلُ", german: "das Bein", categories: ["ism"] },
    { arabic: "الثَّلَّاجَةُ", german: "der Kühlschrank", alt: { arabic: "ثَلَّاجَةٌ", german: "ein Kühlschrank" }, categories: ["ism"] },
    { arabic: "سَرِيعٌ", german: "schnell", categories: ["ism"] },
    { arabic: "الشَّايُ", german: "der Tee", categories: ["ism"] },
    { arabic: "النَّافِذَةُ", german: "das Fenster", alt: { arabic: "نَافِذَةٌ", german: "ein Fenster" }, categories: ["ism"] },
    { arabic: "الْمَغْرِبُ", german: "der Westen", categories: ["ism"] },
    { arabic: "الشَّرْقُ", german: "der Osten", categories: ["ism"] },
    { arabic: "الْقَهْوَةُ", german: "der Kaffee", categories: ["ism"] },
    { arabic: "أَيْضاً", german: "auch", categories: ["ism"] },
    { arabic: "جِدّاً", german: "sehr", categories: ["ism"] },
    { arabic: "لِمَنْ", german: "wessen oder wem gehört", categories: ["ismistifham", "mabni"] },
    { arabic: "لِـ", german: "gehören, besitzen, für", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "شَمْسٌ ", german: "eine Sonne", alt: { arabic: "الشَّمْسُ", german: "die Sonne" }, categories: ["ism"] },
    { arabic: "مُسْلِمٌ ", german: "ein Muslim", plural: "مُسْلِمُونَ", pluralBook: true, alt: { arabic: "الْمُسْلِمُ", german: "der Muslim" }, categories: ["ism"] }
    ],

  7:[
    { arabic: "تِلْكَ", german: "das, jenes (weibliche Form von ذَلِكَ)", plural: "أُولَئِكَ", pluralBook: true, pluralType: "pronomen", categories: ["ismishara", "mabni"] },
    { arabic: "النَّاقَةُ", german: "die Kamelstute", alt: { arabic: "نَاقَةٌ", german: "eine Kamelstute" }, categories: ["ism"] },
    { arabic: "الْبَيْضَةُ", german: "das Ei", alt: { arabic: "بَيْضَةٌ", german: "ein Ei" }, categories: ["ism"] },
    { arabic: "الْبَطَّةُ", german: "die Ente", alt: { arabic: "بَطَّةٌ", german: "eine Ente" }, categories: ["ism"] },
    { arabic: "الْمُؤَذِّنُ", german: "der Muezzin", alt: { arabic: "مُؤَذِّنٌ", german: "ein Muezzin" }, categories: ["ism"] },
    { arabic: "الْمُمَرِّضَةُ", german: "die Krankenschwester", alt: { arabic: "مُمَرِّضَةٌ", german: "eine Krankenschwester" }, categories: ["ism"] },
    { arabic: "الدَّجَاجَةُ", german: "die Henne", alt: { arabic: "دَجَاجَةٌ", german: "eine Henne" }, categories: ["ism"] }
    ],

  8: [
    { arabic: "أَمْرِيكَا", german: "Amerika", categories: ["ism"] },
    { arabic: "السِّكِّينُ", german: "das Messer", alt: { arabic: "سِكِّينٌ", german: "ein Messer" }, categories: ["ism"] },
    { arabic: "مُغْلَقٌ", german: "geschlossen, verschlossen", categories: ["ism"] },
    { arabic: "أَلْمَانِيَا", german: "Deutschland", categories: ["ism"] },
    { arabic: "العِرَاقُ", german: "der Irak", categories: ["ism"] },
    { arabic: "إِنْكِلْتِرَا", german: "England", categories: ["ism"] },
    { arabic: "سُوِيسرَا", german: "Schweiz", categories: ["ism"] },
    { arabic: "المُسْتَشْفَى", german: "das Krankenhaus", alt: { arabic: "مُسْتَشْفًى", german: "ein Krankenhaus" }, categories: ["ism"] },
    { arabic: "خَلْفَ", german: "hinter", categories: ["ism", "mudaf"] },
    { arabic: "أَمَامَ", german: "vor", categories: ["ism", "mudaf"] },
    { arabic: "جَلَسَ", german: "er saß", categories: ["fiil", "mabni"] }
    ],

  9: [
    { arabic: "الفَاكِهَةُ", german: "das Obst", categories: ["ism"] },
    { arabic: "الإِنْكِلِيزِيَّةُ", german: "Englisch", categories: ["ism"] },
    { arabic: "العُصْفُورُ", german: "der Spatz (kleiner Vogel)", alt: { arabic: "عُصْفُورٌ", german: "ein Spatz (kleiner Vogel)" }, categories: ["ism"] },
    { arabic: "صَعْبٌ", german: "schwierig", categories: ["ism"] },
    { arabic: "الطَّائِرُ", german: "der Vogel (allgemein)", alt: { arabic: "طَائِرٌ", german: "ein Vogel (allgemein)" }, categories: ["ism"] },
    { arabic: "المَدِينَةُ", german: "die Stadt", alt: { arabic: "مَدِينَةٌ", german: "eine Stadt" }, categories: ["ism"] },
    { arabic: "العَرَبِيَّةُ", german: "Arabisch", categories: ["ism"] },
    { arabic: "القَاهِرَةُ", german: "Kairo", categories: ["ism"] },
    { arabic: "اللُّغَةُ", german: "die Sprache", alt: { arabic: "لُغَةٌ", german: "eine Sprache" }, categories: ["ism"] },
    { arabic: "اليَوْمَ", german: "heute", categories: ["ism"] },
    { arabic: "سَهْلٌ", german: "leicht (im Sinne der Komplextität)", categories: ["ism"] },
    { arabic: "لِمَاذَا", german: "warum", categories: ["ismistifham", "mabni"] },
    { arabic: "مُجْتَهِدٌ", german: "fleißig", plural: "مُجْتَهِدُونَ", categories: ["ism"] },
    { arabic: "الكُوبُ", german: "die Tasse, der Becher", alt: { arabic: "كُوبٌ", german: "eine Tasse, ein Becher" }, categories: ["ism"] },
    { arabic: "شَهِيرٌ", german: "berühmt", categories: ["ism"] },
    { arabic: "الْمَكْتَبَةُ", german: "die Bücherei, der Buchladen", alt: { arabic: "مَكْتَبَةٌ", german: "eine Bücherei, ein Buchladen" }, categories: ["ism"] },
    { arabic: "الثَّانَوِيَّةُ", german: "die Oberstufe, Oberschule", alt: { arabic: "ثَانَوِيَّةٌ", german: "eine Oberstufe, Oberschule" }, categories: ["ism"] },
    { arabic: "الآنَ", german: "jetzt", categories: ["ism", "mabni"] },
    { arabic: "الْوَزِيرُ", german: "der Minister", categories: ["ism"] },
    { arabic: "هُنَاكَ", german: "dort (hinten)", categories: ["ismishara", "mabni"] },
    { arabic: "حَادٌّ", german: "scharf (bei Klingen u. ä.)", categories: ["ism"] },
    { arabic: "الْمُسْتَوْصَفُ", german: "die Klinik, das kleine Krankenhaus", alt: { arabic: "مُسْتَوْصَفٌ", german: "eine Klinik, ein kleines Krankenhaus" }, categories: ["ism"] },
    { arabic: "السُّوقُ", german: "der Markt", categories: ["ism"] },
    { arabic: "الْمِرْوَحَةُ", german: "der Ventilator", alt: { arabic: "مِرْوَحَةٌ", german: "ein Ventilator" }, categories: ["ism"] },
    { arabic: "إِنْدُونِيسِيَا", german: "Indonesien", categories: ["ism"] },
    { arabic: "الْكُوَيْتُ", german: "Kuwait", categories: ["ism"] },
    { arabic: "الشَّارِعُ", german: "die Straße", categories: ["ism"] },
    { arabic: "عِنْدَ", german: "mit, bei", categories: ["ism", "mudaf"] },
    { arabic: "الَّذِي", german: "der, welcher", categories: ["ismmawsul", "mabni"] },
    { arabic: "فَرَنْسَا", german: "Frankreich", categories: ["ism"] },
    { arabic: "السَّبُّورَةُ", german: "die Tafel", alt: { arabic: "سَبُّورَةٌ", german: "eine Tafel" }, categories: ["ism"] },
    { arabic: "الْمِحْرَابُ", german: "die Mihrab (Gebetsnische)", alt: { arabic: "مِحْرَابٌ", german: "eine Mihrab (Gebetsnische)" }, categories: ["ism"] },
    { arabic: "الْيَوْمُ", german: "der Tag", alt: { arabic: "يَوْمٌ", german: "ein Tag" }, categories: ["ism"] },
    { arabic: "كَسْلَانُ", german: "faul", categories: ["ism"] },
    { arabic: "جَوْعَانُ", german: "hungrig", categories: ["ism"] },
    { arabic: "عَطْشَانُ", german: "durstig", categories: ["ism"] },
    { arabic: "غَضْبَانُ", german: "ärgerlich", categories: ["ism"] },
    { arabic: "مَلآنُ", german: "voll", categories: ["ism"] }
    ],

    10: [
      { arabic: "أَخُوكَ", german: "dein Bruder", categories: ["ism", "pronomen"] },
      { arabic: "كِتَابُكَ", german: "dein Buch", categories: ["ism", "pronomen"] },
      { arabic: "كِتَابُهُ", german: "sein Buch", categories: ["ism", "pronomen"] },
      { arabic: "كِتَابُهَا", german: "ihr Buch", categories: ["ism", "pronomen"] },
      { arabic: "كِتَابِي", german: "mein Buch", categories: ["ism", "pronomen"] },
      { arabic: "أَبُوهُ", german: "sein Vater", categories: ["ism", "pronomen"] },
      { arabic: "أَخِي", german: "mein Bruder", categories: ["ism", "pronomen"] },
      { arabic: "أَبِي", german: "mein Vater", categories: ["ism", "pronomen"] },
      { arabic: "لَكَ", german: "gehört dir", categories: ["praeposition", "pronomen", "mabni"] },
      { arabic: "لَهُ", german: "gehört ihm", categories: ["praeposition", "pronomen", "mabni"] },
      { arabic: "لَهَا", german: "gehört ihr", categories: ["praeposition", "pronomen", "mabni"] },
      { arabic: "لِي", german: "gehört mir", categories: ["praeposition", "pronomen", "mabni"] },
      { arabic: "ذَهَبْتُ", german: "ich ging", plural: "ذَهَبْنَا", pluralType: "pronomen", pluralBook: true, categories: ["fiil", "mabni"] },
      { arabic: "ذَهَبْتَ", german: "du gingst (m.)", plural: "ذَهَبْتُمْ", pluralType: "pronomen", pluralBook: true, categories: ["fiil", "mabni"] },
      { arabic: "مَعَ", german: "mit", categories: ["ism", "mudaf"] },
      { arabic: "بِ", german: "an, in", categories: ["praeposition", "harf", "mabni"] },
      { arabic: "بِالْجَامِعَةِ", german: "an der Universität", categories: ["praeposition", "ism"] },
      { arabic: "الزَّمِيلُ", german: "der Kollege, der Mitschüler", categories: ["ism"] },
      { arabic: "الفَتَى", german: "der junge Mann", categories: ["ism"] },
      { arabic: "الزَّوْجُ", german: "der Ehegatte", categories: ["ism"] },
      { arabic: "وَاحِدٌ", german: "eins", categories: ["ism"] },
      { arabic: "الطِفْلُ", german: "das Kind", alt: { arabic: "طِفْلٌ", german: "ein Kind" }, categories: ["ism"] },
      { arabic: "مَا", german: "was, keine/nicht (als Verneinung)", categories: ["harf", "ismistifham", "mabni"] },
    ],

    11: [
      { arabic: "فِيهِ", german: "darin", categories: ["praeposition", "pronomen", "mabni"] },
      { arabic: "أُحِبُّ", german: "ich mag, ich liebe", categories: ["fiil"] },
      { arabic: "مَاذَا", german: "was (eindeutiges Fragewort, im Gegensatz zu مَا, das auch 'nicht' bedeuten kann)", categories: ["ismistifham", "mabni"] },
    ],

    12: [
      { arabic: "أَنْتِ", german: "du (weiblich)", categories: ["pronomen", "mabni"] },
      { arabic: "كِ", german: "besitzanzeigende Endung 'dein' bei weiblich Angesprochenen (Kasra, z. B. بَيْتُكِ)", categories: ["pronomen", "mabni"] },
      { arabic: "ذَهَبَتْ", german: "sie ging", categories: ["fiil", "mabni"] },
      { arabic: "الَّتِي", german: "die, welche (Relativpronomen, feminin Singular)", categories: ["ismmawsul", "mabni"] },
      { arabic: "الْعَمُّ", german: "der Onkel (väterlicherseits)", plural: "الْأَعْمَامُ", categories: ["ism"] },
      { arabic: "الشَّجَرَةُ", german: "der Baum", plural: "الْأَشْجَارُ", alt: { arabic: "شَجَرَةٌ", german: "ein Baum" }, categories: ["ism"] },
      { arabic: "الْعَمَّةُ", german: "die Tante (väterlicherseits)", plural: "الْعَمَّاتُ", categories: ["ism"] },
      { arabic: "سُورِيَا", german: "Syrien", categories: ["ism"] },
      { arabic: "الْخَالُ", german: "der Onkel (mütterlicherseits)", plural: "الْأَخْوَالُ", categories: ["ism"] },
      { arabic: "الْمَدْرَسَةُ الِابْتِدَائِيَّةُ", german: "die Grundschule, die Unterstufe", categories: ["ism"] },
      { arabic: "الْمَدْرَسَةُ الْمُتَوَسِّطَةُ", german: "die Mittelschule, die Mittelstufe", categories: ["ism"] },
      { arabic: "الْمَلْعَبُ", german: "der Spielplatz", alt: { arabic: "مَلْعَبٌ", german: "ein Spielplatz" }, categories: ["ism"] },
      { arabic: "الْخَالَةُ", german: "die Tante (mütterlicherseits)", plural: "الْخَالَاتُ", alt: { arabic: "خَالَةٌ", german: "eine Tante (mütterlicherseits)" }, categories: ["ism"] },
      { arabic: "الْمُفَتِّشُ", german: "der Inspektor", plural: "الْمُفَتِّشُونَ", alt: { arabic: "مُفَتِّشٌ", german: "ein Inspektor" }, categories: ["ism"] },
      { arabic: "مُسْتَشْفَى الْوِلَادَةِ", german: "das Entbindungsheim", categories: ["ism"] },
      { arabic: "الْفَتَاةُ", german: "die junge Frau", plural: "الْفَتَيَاتُ", categories: ["ism"] },
      { arabic: "يَا سَيِّدِي", german: "mein Herr!"},
      { arabic: "الدَّفْتَرُ", german: "das Heft", plural: "الدَّفَاتِرُ", alt: { arabic: "دَفْتَرٌ", german: "ein Heft" }, categories: ["ism"] },
      { arabic: "يَا سَيِّدَتِي", german: "meine Dame!"},
      { arabic: "مَالِيزِيَا", german: "Malaysia", categories: ["ism"] },
      { arabic: "كَيْفَ حَالُكَ؟", german: "Wie geht es dir? / Wie geht es Ihnen?"},
      { arabic: "أَنَا بِخَيْرٍ", german: "Mir geht es gut."},
      /* Singularformen zu den Pluralen aus dem Buch (Lektion 12) — für den Plural-Trainer */
      { arabic: "أُمٌّ", german: "eine Mutter", plural: "أُمَّهَاتٌ", categories: ["ism"] },
      { arabic: "أَبٌ", german: "ein Vater", plural: "آبَاءٌ", categories: ["ism"] },
      { arabic: "وَزِيرٌ", german: "ein Minister", plural: "وُزَرَاءُ", categories: ["ism"] },
      { arabic: "عَالِمٌ", german: "ein Gelehrter", plural: "عُلَمَاءُ", alt: { arabic: "الْعَالِمُ", german: "der Gelehrte" }, categories: ["ism"] },
      { arabic: "قَوِيٌّ", german: "stark", plural: "أَقْوِيَاءُ", categories: ["ism"] },
      { arabic: "ضَعِيفٌ", german: "schwach", plural: "ضِعَافٌ", categories: ["ism"] },
      { arabic: "أُمَّهَاتٌ", german: "Mütter (Plural von أُمٌّ)", categories: ["ism"] },
      { arabic: "آبَاءٌ", german: "Väter (Plural von أَبٌ)", categories: ["ism"] },
      { arabic: "وُزَرَاءُ", german: "Minister (Plural von وَزِيرٌ)", categories: ["ism"] },
      { arabic: "عُلَمَاءُ", german: "Gelehrte (Plural von عَالِمٌ)", categories: ["ism"] },
      { arabic: "أَقْوِيَاءُ", german: "Starke (Plural von قَوِيٌّ)", categories: ["ism"] },
      { arabic: "ضِعَافٌ", german: "Schwache (Plural von ضَعِيفٌ)", categories: ["ism"] },
      { arabic: "بَعْدَ", german: "nach (das folgende Substantiv steht im Genitiv)", categories: ["ism", "mudaf"] },
      { arabic: "الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ", german: "das Königreich Saudi-Arabien", categories: ["ism"] },
    ],
    /* Lektion 13 = Teil A + Teil B + Teil C */
    "13": [
      /* ---- Teil A ---- */
      { arabic: "هُمْ", german: "sie (m. Pl.; Plural von هُوَ „er“; nur Menschen) — gleiche Form wie das besitzanzeigende ـهُمْ „ihr“", categories: ["pronomen", "mabni"] },
      { arabic: "ـهُ", german: "besitzanzeigende Endung 'sein' (m. s. besitz., z. B. بَيْتُهُ)", plural: "ـهُمْ", pluralType: "pronomen", categories: ["pronomen", "mabni"] },
      { arabic: "ـهُمْ", german: "besitzanzeigende Endung 'ihr' (m. Pl. besitz., Plural von ـهُ, z. B. بَيْتُهُمْ); hat die gleiche Form wie 'sie' (m. Pl.)", categories: ["pronomen", "mabni"] },
      { arabic: "هَؤُلَاءِ", german: "diese (Plural von هَذَا und هَذِهِ; hâ'ulâ'i) — wird meistens im Zusammenhang mit Personen verwendet, selten auch für nicht menschliche Lebewesen (siehe Lektion 16)", categories: ["ismishara", "mabni"] },
      { arabic: "هَذَا", german: "dies, das (maskulin)", plural: "هَؤُلَاءِ", pluralType: "pronomen", categories: ["ismishara", "mabni"] },
      { arabic: "هَذِهِ", german: "dies, das (feminin)", plural: "هَؤُلَاءِ", pluralType: "pronomen", categories: ["ismishara", "mabni"] },
      { arabic: "هُوَ", german: "er", plural: "هُمْ", pluralType: "pronomen", categories: ["pronomen", "mabni"] },
      { arabic: "ذَهَبُوا", german: "sie gingen (Plural von ذَهَبَ „er ging“; dhahabû — das Alif am Ende wird nicht ausgesprochen)", categories: ["fiil", "mabni"] },
      { arabic: "بَعْضٌ", german: "einige (z. B. بَعْضُهُمْ مُدَرِّسُونَ وَبَعْضُهُمْ مُهَنْدِسُونَ — Einige von ihnen sind Lehrer und einige von ihnen sind Ingenieure)", categories: ["ism"] },
      { arabic: "مُسْلِمُونَ", german: "Muslime (gesunder Plural von مُسْلِمٌ)", categories: ["ism"] },
      { arabic: "مُسْلِمَاتٌ", german: "Musliminnen (gesunder Plural von مُسْلِمَةٌ)", categories: ["ism"] },
      { arabic: "مُدَرِّسُونَ", german: "Lehrer (gesunder Plural von مُدَرِّسٌ)", categories: ["ism"] },
      { arabic: "مُدَرِّسَاتٌ", german: "Lehrerinnen (gesunder Plural von مُدَرِّسَةٌ)", categories: ["ism"] },
      { arabic: "مُهَنْدِسُونَ", german: "Ingenieure (gesunder Plural von مُهَنْدِسٌ)", categories: ["ism"] },
      { arabic: "مُهَنْدِسَاتٌ", german: "Ingenieurinnen (gesunder Plural von مُهَنْدِسَةٌ)", categories: ["ism"] },
      { arabic: "نُجُومٌ", german: "Sterne (Plural von نَجْمٌ)", categories: ["ism"] },
      { arabic: "كُتُبٌ", german: "Bücher (Plural von كِتَابٌ)", categories: ["ism"] },
      { arabic: "جِبَالٌ", german: "Berge (Plural von جَبَلٌ)", categories: ["ism"] },
      { arabic: "تُجَّارٌ", german: "Händler (Plural von تَاجِرٌ)", categories: ["ism"] },
      { arabic: "أَقْلَامٌ", german: "Stifte (Plural von قَلَمٌ)", categories: ["ism"] },
      { arabic: "إِخْوَةٌ", german: "Brüder (Plural von أَخٌ)", categories: ["ism"] },
      { arabic: "فِتْيَةٌ", german: "Jungen, junge Männer (Plural von فَتًى)", categories: ["ism"] },
      { arabic: "أَسْمَاءُ", german: "Namen (Plural von اسْمٌ)", categories: ["ism"] },
      { arabic: "طِوَالٌ", german: "groß, lang (Plural von طَوِيلٌ)", categories: ["ism"] },
      { arabic: "رِجَالٌ", german: "Männer (Plural von رَجُلٌ)", categories: ["ism"] },
      { arabic: "طُلَّابٌ", german: "Studenten (Plural von طَالِبٌ)", categories: ["ism"] },
      { arabic: "النَّاسُ", german: "die Leute, die Menschen", categories: ["ism"] },
      { arabic: "جُدُدٌ", german: "neu (Plural von جَدِيدٌ)", categories: ["ism"] },
      { arabic: "قِصَارٌ", german: "kurz, klein (Plural von قَصِيرٌ)", categories: ["ism"] },
      { arabic: "ضَيْفٌ", german: "Gast", plural: "ضُيُوفٌ", alt: { arabic: "الضَّيْفُ", german: "der Gast" }, categories: ["ism"] },
      { arabic: "ضُيُوفٌ", german: "Gäste (Plural von ضَيْفٌ)", categories: ["ism"] },
      { arabic: "حَاجٌّ", german: "Pilger", plural: "حُجَّاجٌ", alt: { arabic: "الْحَاجُّ", german: "der Pilger" }, categories: ["ism"] },
      { arabic: "حُجَّاجٌ", german: "Pilger (Plural von حَاجٌّ)", categories: ["ism"] },
      { arabic: "قَرْيَةٌ", german: "Dorf", plural: "قُرًى", alt: { arabic: "الْقَرْيَةُ", german: "das Dorf" }, categories: ["ism"] },
      { arabic: "صَدِيقٌ", german: "Freund", plural: "أَصْدِقَاءُ", alt: { arabic: "الصَّدِيقُ", german: "der Freund" }, categories: ["ism"] },
      { arabic: "أَصْدِقَاءُ", german: "Freunde (Plural von صَدِيقٌ)", categories: ["ism"] },
      { arabic: "حَقْلٌ", german: "Feld", plural: "حُقُولٌ", alt: { arabic: "الْحَقْلُ", german: "das Feld" }, categories: ["ism"] },
      { arabic: "حُقُولٌ", german: "Felder (Plural von حَقْلٌ)", categories: ["ism"] },
      { arabic: "الْمَطْعَمُ", german: "das Restaurant", plural: "الْمَطَاعِمُ", alt: { arabic: "مَطْعَمٌ", german: "ein Restaurant" }, categories: ["ism"] },
      { arabic: "زَمِيلٌ", german: "Kollege", plural: "زُمَلَاءُ", categories: ["ism"] },
      { arabic: "زُمَلَاءُ", german: "Kollegen (Plural von زَمِيلٌ)", categories: ["ism"] },
      { arabic: "ابْنٌ", german: "Sohn", plural: "أَبْنَاءٌ", categories: ["ism"] },
      { arabic: "أَبْنَاءٌ", german: "Söhne (Plural von ابْنٌ)", categories: ["ism"] },
      { arabic: "مُجْتَهِدٌ", german: "fleißig", plural: "مُجْتَهِدُونَ", categories: ["ism"] },
      { arabic: "مُجْتَهِدُونَ", german: "fleißig (gesunder Plural von مُجْتَهِدٌ)", categories: ["ism"] },
      { arabic: "شَيْخٌ", german: "alter Mann, Gelehrter", plural: "شُيُوخٌ", alt: { arabic: "الشَّيْخُ", german: "der alte Mann, der Gelehrte" }, categories: ["ism"] },
      { arabic: "شُيُوخٌ", german: "alte Männer, Gelehrte (Plural von شَيْخٌ)", categories: ["ism"] },

      /* ---- Teil A: Singularformen zu den oben genannten Pluralen ----
         (für den Plural-Trainer — die "(Plural von ...)"-Einträge oben
         zeigen nur die Pluralform, hier steht die fehlende Grundform mit
         "plural"-Feld, damit sie im Plural-Trainer abgefragt wird) */
      { arabic: "مُسْلِمَةٌ", german: "eine Muslimin", plural: "مُسْلِمَاتٌ", alt: { arabic: "الْمُسْلِمَةُ", german: "die Muslimin" }, categories: ["ism"] },
      { arabic: "مُدَرِّسَةٌ", german: "eine Lehrerin", plural: "مُدَرِّسَاتٌ", alt: { arabic: "الْمُدَرِّسَةُ", german: "die Lehrerin" }, categories: ["ism"] },
      { arabic: "مُهَنْدِسٌ", german: "ein Ingenieur", plural: "مُهَنْدِسُونَ", categories: ["ism"] },
      { arabic: "مُهَنْدِسَةٌ", german: "eine Ingenieurin", plural: "مُهَنْدِسَاتٌ", alt: { arabic: "الْمُهَنْدِسَةُ", german: "die Ingenieurin" }, categories: ["ism"] },
      { arabic: "جَبَلٌ", german: "ein Berg", plural: "جِبَالٌ", alt: { arabic: "الْجَبَلُ", german: "der Berg" }, categories: ["ism"] },
      { arabic: "أَخٌ", german: "ein Bruder", plural: "إِخْوَةٌ", alt: { arabic: "الْأَخُ", german: "der Bruder" }, categories: ["ism"] },
      { arabic: "فَتًى", german: "ein junger Mann", plural: "فِتْيَةٌ", categories: ["ism"] },
      { arabic: "اسْمٌ", german: "ein Name", plural: "أَسْمَاءُ", categories: ["ism"] },
      { arabic: "عَمٌّ", german: "ein Onkel (väterlicherseits)", plural: "أَعْمَامٌ", categories: ["ism"] },
      { arabic: "فَلَّاحٌ", german: "ein Bauer", plural: "فَلَّاحُونَ", categories: ["ism"] },


      /* ---- Teil B ---- */
      { arabic: "هِيَ", german: "sie (fem. Singular)", plural: "هُنَّ", pluralType: "pronomen", categories: ["pronomen", "mabni"] },
      { arabic: "هُنَّ", german: "sie (f. Pl.; Plural von هِيَ „sie“, fem. Singular) — gleiche Form wie das besitzanzeigende ـهُنَّ „ihr“", categories: ["pronomen", "mabni"] },
      { arabic: "ـهَا", german: "besitzanzeigende Endung 'ihr' (fem. Sing. besitz., z. B. بَيْتُهَا)", plural: "ـهُنَّ", pluralType: "pronomen", categories: ["pronomen", "mabni"] },
      { arabic: "ـهُنَّ", german: "besitzanzeigende Endung 'ihr' (f. Pl. besitz., Plural von ـهَا, z. B. بَيْتُهُنَّ); hat die gleiche Form wie 'sie' (f. Pl.)", categories: ["pronomen", "mabni"] },
      { arabic: "ذَهَبَتْ", german: "sie ging (fem. Singular)", plural: "ذَهَبْنَ", pluralType: "pronomen", categories: ["fiil", "mabni"] },
      { arabic: "ذَهَبْنَ", german: "sie gingen (fem.; gesunder Plural von ذَهَبَتْ „sie ging“)", categories: ["fiil", "mabni"] },
      { arabic: "بِنْتٌ", german: "ein Mädchen, eine Tochter (unregelmäßiger/gesunder Plural)", plural: "بَنَاتٌ", categories: ["ism"] },
      { arabic: "أُخْتٌ", german: "eine Schwester (unregelmäßiger/gesunder Plural)", plural: "أَخَوَاتٌ", alt: { arabic: "الْأُخْتُ", german: "die Schwester" }, categories: ["ism"] },
      { arabic: "فَتَاةٌ", german: "eine junge Frau (unregelmäßiger/gesunder Plural)", plural: "فَتَيَاتٌ", categories: ["ism"] },
      { arabic: "أُسْتَاذَةٌ", german: "eine Professorin", plural: "أُسْتَاذَاتٌ", alt: { arabic: "الْأُسْتَاذَةُ", german: "die Professorin" }, categories: ["ism"] },
      { arabic: "النِّسَاءُ", german: "die Frauen (Plural von اِمْرَأَةٌ/الْمَرْأَةُ „Frau“ — von anderer Wurzel, gebrochener Plural)", pluralType: "gebrochen", categories: ["ism"] },
      { arabic: "زَوْجَةٌ", german: "eine Ehefrau", plural: "زَوْجَاتٌ", alt: { arabic: "الزَّوْجَةُ", german: "die Ehefrau" }, categories: ["ism"] },
      { arabic: "عَمَّةٌ", german: "eine Tante (väterlicherseits)", plural: "عَمَّاتٌ", categories: ["ism"] },
      { arabic: "زَوْجٌ", german: "ein Ehepartner (Ehemann / Ehefrau)", plural: "أَزْوَاجٌ", categories: ["ism"] },
      { arabic: "الْمَرْأَةُ", german: "die Frau", plural: "النِّسَاءُ", pluralType: "gebrochen", alt: { arabic: "امْرَأَةٌ", german: "eine Frau" }, categories: ["ism"] },

      /* ---- Teil C ---- */
      { arabic: "ذَلِكَ", german: "das, jenes (maskulin)", plural: "أُولَئِكَ", pluralBook: true, pluralType: "pronomen", categories: ["ismishara", "mabni"] },
      { arabic: "أُولَئِكَ", german: "jene (Plural von ذَلِكَ und تِلْكَ; ulâ'ika) — das و wird nicht ausgesprochen", categories: ["ismishara", "mabni"] },
    ],

    /* Lektion 14 */
    "14": [
      /* ---- Pronomen & Endungen ---- */
      { arabic: "أَنْتَ", german: "du (maskulin)", plural: "أَنْتُمْ", pluralType: "pronomen", pluralBook: true, categories: ["pronomen", "mabni"] },
      { arabic: "أَنْتُمْ", german: "ihr (m. Pl.; Plural von أَنْتَ „du“, maskulin)", categories: ["pronomen", "mabni"] },
      { arabic: "ـكَ", german: "besitzanzeigende Endung 'dein' (m. s. besitz., z. B. بَيْتُكَ)", plural: "ـكُمْ", pluralType: "pronomen", pluralBook: true, categories: ["pronomen", "mabni"] },
      { arabic: "ـكُمْ", german: "besitzanzeigende Endung 'euer/eure' (Plural von ـكَ, z. B. بَيْتُكُمْ)", categories: ["pronomen", "mabni"] },
      { arabic: "أَنَا", german: "ich", plural: "نَحْنُ", pluralType: "pronomen", pluralBook: true, categories: ["pronomen", "mabni"] },
      { arabic: "نَحْنُ", german: "wir (Plural von أَنَا „ich“; für maskulin und feminin)", categories: ["pronomen", "mabni"] },
      { arabic: "ـي", german: "besitzanzeigende Endung 'mein' (z. B. بَيْتِي)", plural: "ـنَا", pluralType: "pronomen", pluralBook: true, categories: ["pronomen", "mabni"] },
      { arabic: "ـنَا", german: "besitzanzeigende Endung 'unser/unsere' (z. B. بَيْتُنَا — bait-u-nâ „unser Haus“)", categories: ["pronomen", "mabni"] },
      { arabic: "ذَهَبْتُمْ", german: "ihr gingt (m. Pl.; Plural von ذَهَبْتَ „du gingst“, m. s.)", categories: ["fiil", "mabni"] },
      { arabic: "ذَهَبْنَا", german: "wir gingen (dhahabnâ — das „a“ am Ende ist lang; bei ذَهَبْنَ „sie gingen“, f. Pl., ist es kurz)", categories: ["fiil", "mabni"] },
      { arabic: "أَيُّ", german: "welcher, welche, welches (wird als Mudâf verwendet; nach einer Präposition im Genitiv: مِنْ أَيِّ بَلَدٍ؟)", categories: ["ismistifham", "mudaf"] },
      { arabic: "أَهْلًا وَسَهْلًا وَمَرْحَبًا", german: "Herzlich willkommen!", categories: ["ism"] },
      { arabic: "شَفَاهُ اللَّهُ", german: "Möge Allah ihm Gesundheit geben!", categories: ["fiil"] },

      /* ---- Wörter ---- */
      { arabic: "الدُّسْتُورُ", german: "die Verfassung", alt: { arabic: "دُسْتُورٌ", german: "eine Verfassung" }, categories: ["ism"] },
      { arabic: "طِفْلَةٌ", german: "ein (weibliches) Kind", alt: { arabic: "الطِّفْلَةُ", german: "das (weibliche) Kind" }, categories: ["ism"] },
      { arabic: "الْقِبْلَةُ", german: "die Gebetsrichtung", categories: ["ism"] },
      { arabic: "الْمَطَارُ", german: "der Flughafen", alt: { arabic: "مَطَارٌ", german: "ein Flughafen" }, categories: ["ism"] },
      { arabic: "الْمَحْكَمَةُ", german: "das (Straf-)Gericht", alt: { arabic: "مَحْكَمَةٌ", german: "ein (Straf-)Gericht" }, categories: ["ism"] },
      { arabic: "الْكُلِّيَّةُ", german: "die Fakultät, das Kolleg", alt: { arabic: "كُلِّيَّةٌ", german: "eine Fakultät, ein Kolleg" }, categories: ["ism"] },
      { arabic: "حَفِيدٌ", german: "ein Enkel", plural: "حَفَدَةٌ", pluralType: "gebrochen", alt: { arabic: "الْحَفِيدُ", german: "der Enkel" }, categories: ["ism"] },
      { arabic: "كُلِّيَّةُ الطِّبِّ", german: "die medizinische Fakultät", categories: ["ism", "mudaf"] },
      { arabic: "الْحَدِيقَةُ", german: "der Garten", alt: { arabic: "حَدِيقَةٌ", german: "ein Garten" }, categories: ["ism"] },
      { arabic: "كُلِّيَّةُ الْهَنْدَسَةِ", german: "die Fakultät für Ingenieurwesen", categories: ["ism", "mudaf"] },
      { arabic: "الرَّبُّ", german: "der Herr", alt: { arabic: "رَبٌّ", german: "ein Herr" }, categories: ["ism"] },
      { arabic: "كُلِّيَّةُ التِّجَارَةِ", german: "die Wirtschaftsfakultät", categories: ["ism", "mudaf"] },
      { arabic: "يَوْمُ السَّبْتِ", german: "der Samstag", categories: ["ism", "mudaf"] },
      { arabic: "كُلِّيَّةُ الشَّرِيعَةِ", german: "die Fakultät für islamisches Recht", categories: ["ism", "mudaf"] },
      { arabic: "الشَّهْرُ", german: "der Monat", alt: { arabic: "شَهْرٌ", german: "ein Monat" }, categories: ["ism"] },
      { arabic: "نَصْرَانِيٌّ", german: "christlich (ein Christ)", plural: "نَصَارَى", pluralType: "gebrochen", pluralBook: true, categories: ["ism"] },
      { arabic: "رَجَبٌ", german: "Rajab (islamischer Monat)", categories: ["ism"] },
      { arabic: "النَّبِيُّ", german: "der Prophet", alt: { arabic: "نَبِيٌّ", german: "ein Prophet" }, categories: ["ism"] },
      { arabic: "الْيُونَانُ", german: "Griechenland", categories: ["ism"] },
      { arabic: "الدِّينُ", german: "die Religion", alt: { arabic: "دِينٌ", german: "eine Religion" }, categories: ["ism"] },
      { arabic: "إِخْوَةٌ", german: "Brüder (Plural von أَخٌ)", categories: ["ism"] },
    ],

  Grammatik: [
    { arabic: "تَنْوِين", german: "die Unbestimmtheit (hinsichtlich der Wortform)"},
    { arabic: "نَكِرَة", german: "unbestimmt (hinsichtlich der Grammatik)"},
    { arabic: "مَعْرِفَة", german: "bestimmt"},
    { arabic: "اسْمُ إِشَارَة", german: "Demonstrativpronomen"},
    { arabic: "مَعْرِفَة", german: "bestimmt"},
    { arabic: "لَامُ التَّعْرِيف", german: "die bestimmten Artikel"},
    { arabic: "جُمْلَة اسْمِيَّة" , german: "Nominalsatz"},
    { arabic: "حُرُوفُ الْجَر", german: "Präpositionen"},
    { arabic: "مَرْفُوع", german: "Nominativ"},
    { arabic: "مَجْرُور", german: "Genetiv"},
    { arabic: "اسْم", german: "Nomen"},
    { arabic: "فِعْل", german: "Verben"},
    { arabic: "حَرْف", german: "Partikel"},
    { arabic: "الْخَبَر", german: "Satzaussage"},
    { arabic: "الْمُبْتَدَأ", german: "Satzgegenstand"},
    { arabic: "تَـاُء مَرْبُـوطَـةٌ", german: "ة-Endung für Weibliche Substantive und Adjektive"},
    { arabic: "(أَلِف مَقْصُورَة (ى ", german: "Alif maqsūra"},
    { arabic: "نَعْتٌ", german: "Adjektiv"},
    { arabic: "مَنْعُوتٌ", german: "Substantiv"},
    { arabic: "اِسْمٌ مَوْصُولٌ", german: "Relativpronomen"},
    { arabic: "جُمْلَةُ صِلَةٍ", german: "Relativsatz" },
    { arabic: "مَنْصُوبٌ", german: "Akkusativ" },
  ]

};

/* ==========================================================================
   GLOSSAR-KATEGORIEN
   ==========================================================================
   Jedes Vokabelwort (in LESSONS, außer im Sonderblock "Grammatik") hat ein
   Feld "categories" — ein Array von Schlüsseln aus der Liste unten. Ein Wort
   kann in MEHREREN Kategorien gleichzeitig stehen, z. B. ein Relativpronomen,
   das zugleich مبني (mabnī, indeklinabel) ist:

     { arabic: "الَّذِي", german: "der, welcher", categories: ["ismmawsul", "mabni"] }

   Die Einteilung für Lektion 1–13 ist anhand des Madina-Buch-Schlüssels
   vorgenommen worden und kann jederzeit von Hand angepasst werden.

   Bewusst NICHT als Kategorien enthalten sind Begriffe, die keine Eigenschaft
   des Wortes selbst sind, sondern von seiner Stellung im Satz abhängen:
   Mubtada, Khabar, Na't, Man'ût, Mudâf ilaihi sowie Marfû'/Majrûr/Mansûb.
   (Nakira/Ma'rifa ergeben sich aus Tanwîn bzw. ال und stehen schon im Wort.)

   "mudaf" markiert nur Wörter, die IMMER als Mudâf stehen (Ẓuruf wie خَلْفَ,
   أَمَامَ, تَحْتَ, عِنْدَ, مَعَ, بَعْدَ — das Folgewort ist ihr Mudâf ilaihi).

   Feste Wendungen und ganze Sätze (z. B. يَا سَيِّدِي, كَيْفَ حَالُكَ؟) haben
   keine Kategorie und erscheinen im Glossar unter "Nicht zugeordnet".

   Neue Kategorien kannst du unten einfach ergänzen (Schlüssel frei wählbar,
   ar = arabischer Fachbegriff, de = deutsche Bezeichnung fürs Glossar).
   Die Reihenfolge hier bestimmt die Reihenfolge im Glossar.
*/
const CATEGORIES = {
  fiil:           { ar: "فِعْل",            de: "Verb" },
  praeposition:   { ar: "حَرْفُ جَرّ",       de: "Präposition" },
  harf:           { ar: "حَرْف",            de: "Partikel" },
  pronomen:       { ar: "ضَمِير",           de: "Pronomen" },
  ismishara:      { ar: "اسْمُ إِشَارَة",      de: "Demonstrativpronomen" },
  ismmawsul:      { ar: "اِسْمٌ مَوْصُولٌ",     de: "Relativpronomen" },
  ismistifham:    { ar: "اِسْمُ اسْتِفْهَام",   de: "Fragewort" },
  mudaf:          { ar: "مُضَاف",           de: "Mudâf (steht immer als Mudâf)" },
  mabni:          { ar: "مَبْنِي",           de: "Mabnī (indeklinabel)" },
  ism:            { ar: "اسْم",            de: "Nomen (inkl. Adjektive und Namen)" },
};

const LESSON_LABELS = {
  1: "Lektion 1",
  2: "Lektion 2",
  3: "Lektion 3",
  4: "Lektion 4",
  5: "Lektion 5",
  6: "Lektion 6",
  7: "Lektion 7",
  8: "Lektion 8",
  9: "Lektion 9",
  10: "Lektion 10",
  11: "Lektion 11",
  12: "Lektion 12",
  13: "Lektion 13",
  14: "Lektion 14"
};

/* ==========================================================================
   PLURAL-TRAINER — Gesunder vs. gebrochener Plural
   ==========================================================================
   Im Plural-Trainer werden standardmäßig die Plurale aus Lektion 12–13 sowie alle
   Wörter mit "pluralBook: true" abgefragt (= Übung 1 aus Lektion 13).
   Jedes Wort mit einem Feld "plural" kann im neuen Plural-Trainer abgefragt
   werden (Karteikarte: Singular -> richtige Pluralform unter Distraktoren
   erkennen). Zusätzlich wird automatisch erkannt, ob es sich um einen
   gesunden Plural (جمع سالم — endet auf ـونَ/ـينَ für Maskulina oder auf ـاتٌ
   für Feminina) oder einen gebrochenen Plural (جمع تكسير — alles andere,
   innerer Vokalwechsel) handelt.

   Will man die automatische Erkennung überschreiben (z. B. bei einem
   Sonderfall), kann man direkt am Wort ein Feld "pluralType" mit dem Wert
   "gesund" oder "gebrochen" ergänzen — das hat dann immer Vorrang:

     { arabic: "...", german: "...", plural: "...", pluralType: "gebrochen", categories: [...] }
*/
function stripArabicDiacritics(text){
  return (text || "").replace(/[ً-ْٖ-ٰٟۖ-ۭـ]/g, "");
}

function getPluralType(word){
  if(!word || !word.plural) return null;
  if(word.pluralType === "gesund" || word.pluralType === "gebrochen" || word.pluralType === "pronomen") return word.pluralType;
  const firstForm = word.plural.split("/")[0].trim();
  const bare = stripArabicDiacritics(firstForm);
  if(/(ون|ين)$/.test(bare)) return "gesund";   // جمع مذكر سالم
  if(/ات$/.test(bare)) return "gesund";        // جمع مؤنث سالم
  return "gebrochen";                          // جمع تكسير
}

/* ---------- Plurale aus dem Buch vs. Ergänzungen ----------
   Als "aus dem Buch" gelten alle Plurale der Lektionen 12–14 (dort wird der Plural
   im Buch behandelt) sowie Einträge mit pluralBook: true.
   Selbst ergänzte Plurale (nicht aus dem Buch) wurden am 15.11.2026 entfernt.
   Neue Plurale zu Lektion 1–11 daher nur mit pluralBook: true eintragen, wenn sie
   im Buch/vom Lehrer kommen — sonst werden sie als "nicht aus dem Buch" markiert. */
const BOOK_PLURAL_LESSONS = ["12", "13", "14"];
const BOOK_PLURAL_WORDS = new Set(
  Object.entries(LESSONS).flatMap(([key, words]) =>
    words.filter(w => w.plural && (w.pluralBook || BOOK_PLURAL_LESSONS.includes(String(key))))
         .map(w => w.arabic.trim()))
);
function isBookPlural(w){ return !!(w && w.plural && BOOK_PLURAL_WORDS.has(w.arabic.trim())); }
