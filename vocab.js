const LESSONS = {

  1: [
    { arabic: "بَيْتٌ", german: "ein Haus", plural: "بُيُوتٌ", categories: ["ism"] },
    { arabic: "مَسْجِدٌ", german: "eine Moschee", plural: "مَسَاجِدُ", categories: ["ism"] },
    { arabic: "بَابٌ", german: "eine Tür", plural: "أَبْوَابٌ", categories: ["ism"] },
    { arabic: "كِتَابٌ", german: "ein Buch", plural: "كُتُبٌ", categories: ["ism"] },
    { arabic: "قَلَمٌ", german: "ein Stift", plural: "أَقْلَامٌ", categories: ["ism"] },
    { arabic: "مِفْتَاحٌ", german: "ein Schlüssel", plural: "مَفَاتِيحُ", categories: ["ism"] },
    { arabic: "مَكْتَبٌ", german: "ein Schreibtisch, ein Burö (nach Lektion 7)", plural: "مَكَاتِبُ", categories: ["ism"] },
    { arabic: "سَرِيرٌ", german: "ein Bett", plural: "أَسِرَّةٌ", categories: ["ism"] },
    { arabic: "كُرْسِيٌّ", german: "ein Stuhl", plural: "كَرَاسِيُّ", categories: ["ism"] },
    { arabic: "نَجْمٌ", german: "ein Stern", plural: "نُجُومٌ", categories: ["ism"] },
    { arabic: "قَمِيصٌ", german: "ein Hemd", plural: "قُمْصَانٌ", categories: ["ism"] },
    { arabic: "طَبِيبٌ", german: "ein Arzt", plural: "أَطِبَّاءُ", pluralBook: true, categories: ["ism"] },
    { arabic: "نَعَمْ", german: "ja", categories: ["harf", "mabni"] },
    { arabic: "أَ", german: "Fragepartikel (vor Entscheidungsfragen, direkt vor dem Folgewort)", categories: ["harf", "mabni"] },
    { arabic: "وَ", german: "und (direkt vor dem Folgewort)", categories: ["harf", "mabni"] },
    { arabic: "وَلَدٌ", german: "ein Junge", plural: "أَوْلَادٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "طَالِبٌ", german: "ein Student", plural: "طُلَّابٌ", categories: ["ism"] },
    { arabic: "رَجُلٌ", german: "ein Mann", plural: "رِجَالٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "تَاجِرٌ", german: "ein Händler", plural: "تُجَّارٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "كَلْبٌ", german: "ein Hund", plural: "كِلَابٌ", categories: ["ism"] },
    { arabic: "قِطٌّ", german: "ein Kater", plural: "قِطَطٌ", categories: ["ism"] },
    { arabic: "حِمَارٌ", german: "ein Esel", plural: "حَمِيرٌ", categories: ["ism"] },
    { arabic: "حِصَانٌ", german: "ein Pferd", plural: "أَحْصِنَةٌ", categories: ["ism"] },
    { arabic: "جَمَلٌ", german: "ein Kamel", plural: "جِمَالٌ", categories: ["ism"] },
    { arabic: "دِيكٌ", german: "ein Hahn", plural: "دُيُوكٌ", categories: ["ism"] },
    { arabic: "مُدَرِّسٌ", german: "ein Lehrer", plural: "مُدَرِّسُونَ", pluralBook: true, categories: ["ism"] },
    { arabic: "مِنْدِيلٌ", german: "ein Tuch (auch: Papiertaschentuch oder Serviette)", plural: "مَنَادِيلُ", categories: ["ism"] },
    { arabic: "لَا", german: "nein", categories: ["harf", "mabni"] },
    { arabic: "مَا", german: "was", categories: ["ismistifham", "mabni"] },
  ],

  2: [
    { arabic: "إِمَامٌ", german: "ein Imam", plural: "أَئِمَّةٌ", categories: ["ism"] },
    { arabic: "سُكَّرٌ", german: "Zucker", categories: ["ism"] },
    { arabic: "حَجَرٌ", german: "ein Stein", plural: "أَحْجَارٌ", categories: ["ism"] },
    { arabic: "لَبَنٌ", german: "eine Milch", categories: ["ism"] },
  ],

  3: [
    { arabic: "غَنِيٌّ", german: "reich", plural: "أَغْنِيَاءُ", pluralBook: true, categories: ["ism"] },
    { arabic: "فَقِيرٌ", german: "arm", plural: "فُقَرَاءُ", pluralBook: true, categories: ["ism"] },
    { arabic: "طَوِيلٌ", german: "groß (lang)", plural: "طِوَالٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "قَصِيرٌ", german: "kurz", plural: "قِصَارٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "بَارِدٌ", german: "kalt", categories: ["ism"] },
    { arabic: "حَارٌّ", german: "heiß", categories: ["ism"] },
    { arabic: "جَالِسٌ", german: "sitzend", plural: "جَالِسُونَ", categories: ["ism"] },
    { arabic: "وَاقِفٌ", german: "stehend", plural: "وَاقِفُونَ", categories: ["ism"] },
    { arabic: "جَدِيدٌ", german: "neu", plural: "جُدُدٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "قَدِيمٌ", german: "alt", plural: "قُدَمَاءُ", categories: ["ism"] },
    { arabic: "قَرِيبٌ", german: "nah", categories: ["ism"] },
    { arabic: "بَعِيدٌ", german: "fern", categories: ["ism"] },
    { arabic: "نَظِيفٌ", german: "sauber", categories: ["ism"] },
    { arabic: "وَسِخٌ", german: "schmutzig", categories: ["ism"] },
    { arabic: "صَغِيرٌ", german: "klein", plural: "صِغَارٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "كَبِيرٌ", german: "groß", plural: "كِبَارٌ", pluralBook: true, categories: ["ism"] },
    { arabic: "خَفِيفٌ", german: "leicht (im Sinne des Gewichtes)", plural: "خِفَافٌ", categories: ["ism"] },
    { arabic: "ثَقِيلٌ", german: "schwer", plural: "ثِقَالٌ", categories: ["ism"] },
    { arabic: "الْوَرَقُ", german: "das Papier", plural: "الْأَوْرَاقُ", categories: ["ism"] },
    { arabic: "الْمَاءُ", german: "das Wasser", plural: "الْمِيَاهُ", categories: ["ism"] },
    { arabic: "التُّفَاحُ", german: "die Äpfel", categories: ["ism"] },
    { arabic: "جَمِيلٌ", german: "schön", categories: ["ism"] },
    { arabic: "الدُّكَّانُ", german: "das Geschäft", plural: "الدَّكَاكِينُ", categories: ["ism"] },
    { arabic: "حُلْوٌ", german: "süß", categories: ["ism"] },
    { arabic: "مَرِيضٌ", german: "krank", plural: "مَرْضَى", categories: ["ism"] },
    { arabic: "مكْسُوْرٌ", german: "kaputt, gebrochen", categories: ["ism"] },
    { arabic: "المهندس", german: "der Ingenieur", plural: "المُهَنْدِسُونَ", categories: ["ism"] },
    { arabic: "مُفْتاحٌ", german: "offen", categories: ["ism"] },
    { arabic: "لذيذٌ", german: "lecker", categories: ["ism"] },
    { arabic: "سَاعَةٌ ", german: "eine Uhr", plural: "سَاعَاتٌ", categories: ["ism"] },
    { arabic: "تُفَّاحَةٌ ", german: "ein Apfel", plural: "تُفَّاحَاتٌ", categories: ["ism"] },
    { arabic: "التُّفَّاحَةُ ", german: "der Apfel", plural: "التُّفَّاحَاتُ", categories: ["ism"] },

  ],

  4: [
    { arabic: "أَيْنَ", german: "wo", categories: ["ismistifham", "mabni"] },
    { arabic: "عَلَى", german: "auf", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "غُرْفَةٌ", german: "ein Zimmer", plural: "غُرَفٌ", categories: ["ism"] },
    { arabic: "السَّمَاءُ", german: "der Himmel", plural: "السَّمَاوَاتُ", categories: ["ism"] },
    { arabic: "الْحَمَّامُ", german: "das Badezimmer", plural: "الْحَمَّامَاتُ", categories: ["ism"] },
    { arabic: "الْفَصْلُ", german: "das Klassenzimmer", plural: "الْفُصُولُ", categories: ["ism"] },
    { arabic: "الْمَطْبَخُ", german: "die Küche", plural: "الْمَطَابِخُ", categories: ["ism"] },
    { arabic: "الْمِرْحَاضُ", german: "die Toilette", plural: "الْمَرَاحِيضُ", categories: ["ism"] },
    { arabic: "فِي", german: "in", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "مِنْ", german: "von (wenn الـ nachfolgt, wird es zu مِنَ)", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "إِلَى", german: "nach", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "الْفِلِبِّينُ", german: "Philippinen", categories: ["ism"] },
    { arabic: "الْيَابَانُ", german: "Japan", categories: ["ism"] },
    { arabic: "الْمَدْرَسَةُ", german: "die Schule", plural: "الْمَدَارِسُ", categories: ["ism"] },
    { arabic: "الصِّينُ", german: "China", categories: ["ism"] },
    { arabic: "السُّوقُ", german: "der Markt", plural: "الْأَسْوَاقُ", categories: ["ism"] },
    { arabic: "الْهِنْدُ", german: "Indien", categories: ["ism"] },
    { arabic: "الْجَامِعَةُ", german: "die Universität", plural: "الْجَامِعَاتُ", categories: ["ism"] },
    { arabic: "الْمُدِيرُ", german: "der Direktor", plural: "الْمُدِيرُونَ", categories: ["ism"] },
    { arabic: "ذَهَبَ", german: "Er ist gegangen", plural: "ذَهَبُوا", categories: ["fiil", "mabni"] },
    { arabic: "خَرَجَ", german: "Er ist hinaus gegangen", categories: ["fiil", "mabni"] }
  ],

  5: [
    { arabic: "الرَّسُولُ", german: "der Gesandte", plural: "الرُّسُلُ", categories: ["ism"] },
    { arabic: "تَحْتَ", german: "unter", categories: ["ism", "mudaf"] },
    { arabic: "الْعَمُّ", german: "der Onkel (Bruder des Vaters)", plural: "الْأَعْمَامُ", categories: ["ism"] },
    { arabic: "الِابْنُ", german: "der Sohn", plural: "الْأَبْنَاءُ", categories: ["ism"] },
    { arabic: "الشَّارِعُ", german: "die Straße", plural: "الشَّوَارِعُ", categories: ["ism"] },
    { arabic: "السَّيَّارَةُ", german: "das Auto", plural: "السَّيَّارَاتُ", categories: ["ism"] },
    { arabic: "الْكَعْبَةُ", german: "die Kaaba", categories: ["ism"] },
    { arabic: "هُنَا", german: "hier", categories: ["ismishara", "mabni"] },
    { arabic: "الْخَالُ", german: "der Onkel (Bruder der Mutter)", plural: "الْأَخْوَالُ", categories: ["ism"] },
    { arabic: "هُنَاكَ", german: "dort", categories: ["ismishara", "mabni"] },
    { arabic: "مُغْلَق", german: "verschlossen, geschlossen", categories: ["ism"] },
    { arabic: "الْبِنْتُ", german: "die Tochter, das Mädchen", plural: "الْبَنَاتُ", categories: ["ism"] },
    { arabic: "الِاسْمُ", german: "der Name", plural: "الْأَسْمَاءُ", categories: ["ism"] },
    { arabic: "الطَّبِيبُ", german: "der Arzt", plural: "الْأَطِبَّاءُ", categories: ["ism"] },
    { arabic: "الْحَقِيبَةُ", german: "die Tasche, der Rucksack", plural: "الْحَقَائِبُ", categories: ["ism"] },
  ],

  6: [
    { arabic: "يَدٌ", german: "eine Hand", plural: "أَيْدٍ", categories: ["ism"] },
    { arabic: "رِجْلٌ", german: "ein Bein", plural: "أَرْجُلٌ", categories: ["ism"] },
    { arabic: "عَيْنٌ", german: "ein Auge", plural: "أَعْيُنٌ / عُيُونٌ", categories: ["ism"] },
    { arabic: "أُذُنٌ", german: "ein Ohr", plural: "آذَانٌ", categories: ["ism"] },
    { arabic: "رَأْسٌ", german: "ein Kopf", plural: "رُؤُوسٌ", categories: ["ism"] },
    { arabic: "أَنْفٌ", german: "eine Nase", plural: "أُنُوفٌ", categories: ["ism"] },
    { arabic: "فَمٌ", german: "ein Mund", plural: "أَفْوَاهٌ", categories: ["ism"] },
    { arabic: "وَجْهٌ", german: "ein Gesicht", plural: "وُجُوهٌ", categories: ["ism"] },
    { arabic: "الْمِكْوَاةُ", german: "das Bügeleisen", plural: "الْمَكَاوِي", categories: ["ism"] },
    { arabic: "الْأَنْفُ", german: "die Nase", plural: "الْأُنُوفُ", categories: ["ism"] },
    { arabic: "الْبَقَرَةُ", german: "die Kuh", plural: "الْبَقَرَاتُ", categories: ["ism"] },
    { arabic: "الْفَمُ", german: "der Mund", plural: "الْأَفْوَاهُ", categories: ["ism"] },
    { arabic: "الدَّرَّاجَةُ", german: "das Fahrrad", plural: "الدَّرَّاجَاتُ", categories: ["ism"] },
    { arabic: "الْقِدْرُ", german: "der Kochtopf", plural: "الْقُدُورُ", categories: ["ism"] },
    { arabic: "الْمِلْعَقَةُ", german: "der Löffel", plural: "الْمَلَاعِقُ", categories: ["ism"] },
    { arabic: "الْأُذُنُ", german: "das Ohr", plural: "الْآذَانُ", categories: ["ism"] },
    { arabic: "الْفَلَّاحُ", german: "der Bauer", plural: "الْفَلَّاحُونَ", categories: ["ism"] },
    { arabic: "الْعَيْنُ", german: "das Auge", plural: "الْأَعْيُنُ / الْعُيُونُ", categories: ["ism"] },
    { arabic: "الْأُمُّ", german: "die Mutter", plural: "الْأُمَّهَاتُ", categories: ["ism"] },
    { arabic: "الْيَدُ", german: "die Hand", plural: "الْأَيْدِي", categories: ["ism"] },
    { arabic: "الْأَبُ", german: "der Vater", plural: "الْآبَاءُ", categories: ["ism"] },
    { arabic: "الرِّجْلُ", german: "das Bein", plural: "الْأَرْجُلُ", categories: ["ism"] },
    { arabic: "الثَّلَّاجَةُ", german: "der Kühlschrank", plural: "الثَّلَّاجَاتُ", categories: ["ism"] },
    { arabic: "سَرِيعٌ", german: "schnell", plural: "سِرَاعٌ", categories: ["ism"] },
    { arabic: "الشَّايُ", german: "der Tee", categories: ["ism"] },
    { arabic: "النَّافِذَةُ", german: "das Fenster", plural: "النَّوَافِذُ", categories: ["ism"] },
    { arabic: "الْمَغْرِبُ", german: "der Westen", categories: ["ism"] },
    { arabic: "الشَّرْقُ", german: "der Osten", categories: ["ism"] },
    { arabic: "الْقَهْوَةُ", german: "der Kaffee", categories: ["ism"] },
    { arabic: "أَيْضاً", german: "auch", categories: ["ism"] },
    { arabic: "جِدّاً", german: "sehr", categories: ["ism"] },
    { arabic: "لِمَنْ", german: "wessen oder wem gehört", categories: ["ismistifham", "mabni"] },
    { arabic: "لِـ", german: "gehören, besitzen, für", categories: ["praeposition", "harf", "mabni"] },
    { arabic: "شَمْسٌ ", german: "eine Sonne", plural: "شُمُوسٌ", categories: ["ism"] },
    { arabic: "مُسْلِمٌ ", german: "ein Muslim", plural: "مُسْلِمُونَ", pluralBook: true, categories: ["ism"] }
    ],

  7:[
    { arabic: "تِلْكَ", german: "das, jenes (weibliche Form von ذَلِكَ)", plural: "أُولَئِكَ", pluralBook: true, categories: ["ismishara", "mabni"] },
    { arabic: "النَّاقَةُ", german: "die Kamelstute", plural: "النُّوقُ", categories: ["ism"] },
    { arabic: "الْبَيْضَةُ", german: "das Ei", plural: "الْبَيْضَاتُ", categories: ["ism"] },
    { arabic: "الْبَطَّةُ", german: "die Ente", plural: "الْبَطَّاتُ", categories: ["ism"] },
    { arabic: "الْمُؤَذِّنُ", german: "der Muezzin", plural: "الْمُؤَذِّنُونَ", categories: ["ism"] },
    { arabic: "الْمُمَرِّضَةُ", german: "die Krankenschwester", plural: "الْمُمَرِّضَاتُ", categories: ["ism"] },
    { arabic: "الدَّجَاجَةُ", german: "die Henne", plural: "الدَّجَاجَاتُ", categories: ["ism"] }
    ],

  8: [
    { arabic: "أَمْرِيكَا", german: "Amerika", categories: ["ism"] },
    { arabic: "السِّكِّينُ", german: "das Messer", plural: "السَّكَاكِينُ", categories: ["ism"] },
    { arabic: "مُغْلَقٌ", german: "geschlossen, verschlossen", categories: ["ism"] },
    { arabic: "أَلْمَانِيَا", german: "Deutschland", categories: ["ism"] },
    { arabic: "العِرَاقُ", german: "der Irak", categories: ["ism"] },
    { arabic: "إِنْكِلْتِرَا", german: "England", categories: ["ism"] },
    { arabic: "سُوِيسرَا", german: "Schweiz", categories: ["ism"] },
    { arabic: "المُسْتَشْفَى", german: "das Krankenhaus", plural: "المُسْتَشْفَيَاتُ", categories: ["ism"] },
    { arabic: "خَلْفَ", german: "hinter", categories: ["ism", "mudaf"] },
    { arabic: "أَمَامَ", german: "vor", categories: ["ism", "mudaf"] },
    { arabic: "جَلَسَ", german: "er saß", categories: ["fiil", "mabni"] }
    ],

  9: [
    { arabic: "الفَاكِهَةُ", german: "das Obst", plural: "الفَوَاكِهُ", categories: ["ism"] },
    { arabic: "الإِنْكِلِيزِيَّةُ", german: "Englisch", categories: ["ism"] },
    { arabic: "العُصْفُورُ", german: "der Spatz (kleiner Vogel)", plural: "العَصَافِيرُ", categories: ["ism"] },
    { arabic: "صَعْبٌ", german: "schwierig", categories: ["ism"] },
    { arabic: "الطَّائِرُ", german: "der Vogel (allgemein)", plural: "الطُّيُورُ", categories: ["ism"] },
    { arabic: "المَدِينَةُ", german: "die Stadt", plural: "المُدُنُ", categories: ["ism"] },
    { arabic: "العَرَبِيَّةُ", german: "Arabisch", categories: ["ism"] },
    { arabic: "القَاهِرَةُ", german: "Kairo", categories: ["ism"] },
    { arabic: "اللُّغَةُ", german: "die Sprache", plural: "اللُّغَاتُ", categories: ["ism"] },
    { arabic: "اليَوْمَ", german: "heute", categories: ["ism"] },
    { arabic: "سَهْلٌ", german: "leicht (im Sinne der Komplextität)", categories: ["ism"] },
    { arabic: "لِمَاذَا", german: "warum", categories: ["ismistifham", "mabni"] },
    { arabic: "مُجْتَهِدٌ", german: "fleißig", plural: "مُجْتَهِدُونَ", categories: ["ism"] },
    { arabic: "الكُوبُ", german: "die Tasse, der Becher", plural: "الأَكْوَابُ", categories: ["ism"] },
    { arabic: "شَهِيرٌ", german: "berühmt", plural: "مَشَاهِيرُ", categories: ["ism"] },
    { arabic: "الْمَكْتَبَةُ", german: "die Bücherei, der Buchladen", plural: "الْمَكْتَبَاتُ", categories: ["ism"] },
    { arabic: "الثَّانَوِيَّةُ", german: "die Oberstufe, Oberschule", categories: ["ism"] },
    { arabic: "الآنَ", german: "jetzt", categories: ["ism", "mabni"] },
    { arabic: "الْوَزِيرُ", german: "der Minister", plural: "الْوُزَرَاءُ", categories: ["ism"] },
    { arabic: "هُنَاكَ", german: "dort (hinten)", categories: ["ismishara", "mabni"] },
    { arabic: "حَادٌّ", german: "scharf (bei Klingen u. ä.)", categories: ["ism"] },
    { arabic: "الْمُسْتَوْصَفُ", german: "die Klinik, das kleine Krankenhaus", plural: "الْمُسْتَوْصَفَاتُ", categories: ["ism"] },
    { arabic: "السُّوقُ", german: "der Markt", plural: "الْأَسْوَاقُ", categories: ["ism"] },
    { arabic: "الْمِرْوَحَةُ", german: "der Ventilator", plural: "الْمَرَاوِحُ", categories: ["ism"] },
    { arabic: "إِنْدُونِيسِيَا", german: "Indonesien", categories: ["ism"] },
    { arabic: "الْكُوَيْتُ", german: "Kuwait", categories: ["ism"] },
    { arabic: "الشَّارِعُ", german: "die Straße", plural: "الشَّوَارِعُ", categories: ["ism"] },
    { arabic: "عِنْدَ", german: "mit, bei", categories: ["ism", "mudaf"] },
    { arabic: "الَّذِي", german: "der, welcher", categories: ["ismmawsul", "mabni"] },
    { arabic: "فَرَنْسَا", german: "Frankreich", categories: ["ism"] },
    { arabic: "السَّبُّورَةُ", german: "die Tafel", plural: "السَّبُّورَاتُ", categories: ["ism"] },
    { arabic: "الْمِحْرَابُ", german: "die Mihrab (Gebetsnische)", plural: "الْمَحَارِيبُ", categories: ["ism"] },
    { arabic: "الْيَوْمُ", german: "der Tag", plural: "الْأَيَّامُ", categories: ["ism"] },
    { arabic: "كَسْلَانُ", german: "faul", plural: "كَسَالَى", categories: ["ism"] },
    { arabic: "جَوْعَانُ", german: "hungrig", plural: "جِيَاعٌ", categories: ["ism"] },
    { arabic: "عَطْشَانُ", german: "durstig", plural: "عِطَاشٌ", categories: ["ism"] },
    { arabic: "غَضْبَانُ", german: "ärgerlich", plural: "غِضَابٌ", categories: ["ism"] },
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
      { arabic: "ذَهَبْتُ", german: "ich ging", categories: ["fiil", "mabni"] },
      { arabic: "ذَهَبْتَ", german: "du gingst", categories: ["fiil", "mabni"] },
      { arabic: "مَعَ", german: "mit", categories: ["ism", "mudaf"] },
      { arabic: "بِ", german: "an, in", categories: ["praeposition", "harf", "mabni"] },
      { arabic: "بِالْجَامِعَةِ", german: "an der Universität", categories: ["praeposition", "ism"] },
      { arabic: "الزَّمِيلُ", german: "der Kollege, der Mitschüler", plural: "الزُّمَلَاءُ", categories: ["ism"] },
      { arabic: "الفَتَى", german: "der junge Mann", plural: "الفِتْيَةُ", categories: ["ism"] },
      { arabic: "الزَّوْجُ", german: "der Ehegatte", plural: "الْأَزْوَاجُ", categories: ["ism"] },
      { arabic: "وَاحِدٌ", german: "eins", categories: ["ism"] },
      { arabic: "الطِفْلُ", german: "das Kind", plural: "الْأَطْفَالُ", categories: ["ism"] },
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
      { arabic: "الشَّجَرَةُ", german: "der Baum", plural: "الْأَشْجَارُ", categories: ["ism"] },
      { arabic: "الْعَمَّةُ", german: "die Tante (väterlicherseits)", plural: "الْعَمَّاتُ", categories: ["ism"] },
      { arabic: "سُورِيَا", german: "Syrien", categories: ["ism"] },
      { arabic: "الْخَالُ", german: "der Onkel (mütterlicherseits)", plural: "الْأَخْوَالُ", categories: ["ism"] },
      { arabic: "الْمَدْرَسَةُ الْمُتَوَسِّطَةُ", german: "die Mittelschule", categories: ["ism"] },
      { arabic: "الْخَالَةُ", german: "die Tante (mütterlicherseits)", plural: "الْخَالَاتُ", categories: ["ism"] },
      { arabic: "الْمُفَتِّشُ", german: "der Inspektor", plural: "الْمُفَتِّشُونَ", categories: ["ism"] },
      { arabic: "مُسْتَشْفَى الْوِلَادَةِ", german: "das Entbindungsheim", categories: ["ism"] },
      { arabic: "الْفَتَاةُ", german: "die junge Frau", plural: "الْفَتَيَاتُ", categories: ["ism"] },
      { arabic: "يَا سَيِّدِي", german: "mein Herr!"},
      { arabic: "الدَّفْتَرُ", german: "das Heft", plural: "الدَّفَاتِرُ", categories: ["ism"] },
      { arabic: "يَا سَيِّدَتِي", german: "meine Dame!"},
      { arabic: "مَالِيزِيَا", german: "Malaysia", categories: ["ism"] },
      { arabic: "كَيْفَ حَالُكَ؟", german: "Wie geht es dir? / Wie geht es Ihnen?"},
      { arabic: "أَنَا بِخَيْرٍ", german: "Mir geht es gut."},
      /* Singularformen zu den Pluralen aus dem Buch (Lektion 12) — für den Plural-Trainer */
      { arabic: "أُمٌّ", german: "eine Mutter", plural: "أُمَّهَاتٌ", categories: ["ism"] },
      { arabic: "أَبٌ", german: "ein Vater", plural: "آبَاءٌ", categories: ["ism"] },
      { arabic: "وَزِيرٌ", german: "ein Minister", plural: "وُزَرَاءُ", categories: ["ism"] },
      { arabic: "عَالِمٌ", german: "ein Gelehrter", plural: "عُلَمَاءُ", categories: ["ism"] },
      { arabic: "قَوِيٌّ", german: "stark", plural: "أَقْوِيَاءُ", categories: ["ism"] },
      { arabic: "ضَعِيفٌ", german: "schwach", plural: "ضُعَفَاءُ", categories: ["ism"] },
      { arabic: "أُمَّهَاتٌ", german: "Mütter (Plural von أُمٌّ)", categories: ["ism"] },
      { arabic: "آبَاءٌ", german: "Väter (Plural von أَبٌ)", categories: ["ism"] },
      { arabic: "وُزَرَاءُ", german: "Minister (Plural von وَزِيرٌ)", categories: ["ism"] },
      { arabic: "عُلَمَاءُ", german: "Gelehrte (Plural von عَالِمٌ)", categories: ["ism"] },
      { arabic: "أَقْوِيَاءُ", german: "Starke (Plural von قَوِيٌّ)", categories: ["ism"] },
      { arabic: "ضُعَفَاءُ", german: "Schwache (Plural von ضَعِيفٌ)", categories: ["ism"] },
      { arabic: "بَعْدَ", german: "nach (das folgende Substantiv steht im Genitiv)", categories: ["ism", "mudaf"] },
      { arabic: "الْمَمْلَكَةُ الْعَرَبِيَّةُ السُّعُودِيَّةُ", german: "das Königreich Saudi-Arabien", categories: ["ism"] },
    ],
    /* Lektion 13 = Teil A + Teil B + Teil C */
    "13": [
      /* ---- Teil A ---- */
      { arabic: "هُمْ", german: "sie (m. Pl.; Plural von هُوَ „er“; nur Menschen) — gleiche Form wie das besitzanzeigende ـهُمْ „ihr“", categories: ["pronomen", "mabni"] },
      { arabic: "ـهُ", german: "besitzanzeigende Endung 'sein' (m. s. besitz., z. B. بَيْتُهُ)", plural: "ـهُمْ", categories: ["pronomen", "mabni"] },
      { arabic: "ـهُمْ", german: "besitzanzeigende Endung 'ihr' (m. Pl. besitz., Plural von ـهُ, z. B. بَيْتُهُمْ); hat die gleiche Form wie 'sie' (m. Pl.)", categories: ["pronomen", "mabni"] },
      { arabic: "هَؤُلَاءِ", german: "diese (Plural von هَذَا und هَذِهِ; hâ'ulâ'i) — wird meistens im Zusammenhang mit Personen verwendet, selten auch für nicht menschliche Lebewesen (siehe Lektion 16)", categories: ["ismishara", "mabni"] },
      { arabic: "هَذَا", german: "dies, das (maskulin)", plural: "هَؤُلَاءِ", categories: ["ismishara", "mabni"] },
      { arabic: "هَذِهِ", german: "dies, das (feminin)", plural: "هَؤُلَاءِ", categories: ["ismishara", "mabni"] },
      { arabic: "هُوَ", german: "er", plural: "هُمْ", categories: ["pronomen", "mabni"] },
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
      { arabic: "ضَيْفٌ", german: "Gast", plural: "ضُيُوفٌ", categories: ["ism"] },
      { arabic: "ضُيُوفٌ", german: "Gäste (Plural von ضَيْفٌ)", categories: ["ism"] },
      { arabic: "حَاجٌّ", german: "Pilger", plural: "حُجَّاجٌ", categories: ["ism"] },
      { arabic: "حُجَّاجٌ", german: "Pilger (Plural von حَاجٌّ)", categories: ["ism"] },
      { arabic: "قَرْيَةٌ", german: "Dorf", plural: "قُرًى", categories: ["ism"] },
      { arabic: "صَدِيقٌ", german: "Freund", plural: "أَصْدِقَاءُ", categories: ["ism"] },
      { arabic: "أَصْدِقَاءُ", german: "Freunde (Plural von صَدِيقٌ)", categories: ["ism"] },
      { arabic: "حَقْلٌ", german: "Feld", plural: "حُقُولٌ", categories: ["ism"] },
      { arabic: "حُقُولٌ", german: "Felder (Plural von حَقْلٌ)", categories: ["ism"] },
      { arabic: "الْمَطْعَمُ", german: "das Restaurant", plural: "الْمَطَاعِمُ", categories: ["ism"] },
      { arabic: "زَمِيلٌ", german: "Kollege", plural: "زُمَلَاءُ", categories: ["ism"] },
      { arabic: "زُمَلَاءُ", german: "Kollegen (Plural von زَمِيلٌ)", categories: ["ism"] },
      { arabic: "ابْنٌ", german: "Sohn", plural: "أَبْنَاءُ", categories: ["ism"] },
      { arabic: "أَبْنَاءُ", german: "Söhne (Plural von ابْنٌ)", categories: ["ism"] },
      { arabic: "مُجْتَهِدٌ", german: "fleißig", plural: "مُجْتَهِدُونَ", categories: ["ism"] },
      { arabic: "مُجْتَهِدُونَ", german: "fleißig (gesunder Plural von مُجْتَهِدٌ)", categories: ["ism"] },
      { arabic: "شَيْخٌ", german: "alter Mann, Gelehrter", plural: "شُيُوخٌ", categories: ["ism"] },
      { arabic: "شُيُوخٌ", german: "alte Männer, Gelehrte (Plural von شَيْخٌ)", categories: ["ism"] },

      /* ---- Teil A: Singularformen zu den oben genannten Pluralen ----
         (für den Plural-Trainer — die "(Plural von ...)"-Einträge oben
         zeigen nur die Pluralform, hier steht die fehlende Grundform mit
         "plural"-Feld, damit sie im Plural-Trainer abgefragt wird) */
      { arabic: "مُسْلِمَةٌ", german: "eine Muslimin", plural: "مُسْلِمَاتٌ", categories: ["ism"] },
      { arabic: "مُدَرِّسَةٌ", german: "eine Lehrerin", plural: "مُدَرِّسَاتٌ", categories: ["ism"] },
      { arabic: "مُهَنْدِسٌ", german: "ein Ingenieur", plural: "مُهَنْدِسُونَ", categories: ["ism"] },
      { arabic: "مُهَنْدِسَةٌ", german: "eine Ingenieurin", plural: "مُهَنْدِسَاتٌ", categories: ["ism"] },
      { arabic: "جَبَلٌ", german: "ein Berg", plural: "جِبَالٌ", categories: ["ism"] },
      { arabic: "أَخٌ", german: "ein Bruder", plural: "إِخْوَةٌ", categories: ["ism"] },
      { arabic: "فَتًى", german: "ein junger Mann", plural: "فِتْيَةٌ", categories: ["ism"] },
      { arabic: "اسْمٌ", german: "ein Name", plural: "أَسْمَاءُ", categories: ["ism"] },
      { arabic: "عَمٌّ", german: "ein Onkel (väterlicherseits)", plural: "أَعْمَامٌ", categories: ["ism"] },
      { arabic: "فَلَّاحٌ", german: "ein Bauer", plural: "فَلَّاحُونَ", categories: ["ism"] },


      /* ---- Teil B ---- */
      { arabic: "هِيَ", german: "sie (fem. Singular)", plural: "هُنَّ", categories: ["pronomen", "mabni"] },
      { arabic: "هُنَّ", german: "sie (f. Pl.; Plural von هِيَ „sie“, fem. Singular) — gleiche Form wie das besitzanzeigende ـهُنَّ „ihr“", categories: ["pronomen", "mabni"] },
      { arabic: "ـهَا", german: "besitzanzeigende Endung 'ihr' (fem. Sing. besitz., z. B. بَيْتُهَا)", plural: "ـهُنَّ", categories: ["pronomen", "mabni"] },
      { arabic: "ـهُنَّ", german: "besitzanzeigende Endung 'ihr' (f. Pl. besitz., Plural von ـهَا, z. B. بَيْتُهُنَّ); hat die gleiche Form wie 'sie' (f. Pl.)", categories: ["pronomen", "mabni"] },
      { arabic: "ذَهَبَتْ", german: "sie ging (fem. Singular)", plural: "ذَهَبْنَ", categories: ["fiil", "mabni"] },
      { arabic: "ذَهَبْنَ", german: "sie gingen (fem.; gesunder Plural von ذَهَبَتْ „sie ging“)", categories: ["fiil", "mabni"] },
      { arabic: "بِنْتٌ", german: "ein Mädchen, eine Tochter (unregelmäßiger/gesunder Plural)", plural: "بَنَاتٌ", categories: ["ism"] },
      { arabic: "أُخْتٌ", german: "eine Schwester (unregelmäßiger/gesunder Plural)", plural: "أَخَوَاتٌ", categories: ["ism"] },
      { arabic: "فَتَاةٌ", german: "eine junge Frau (unregelmäßiger/gesunder Plural)", plural: "فَتَيَاتٌ", categories: ["ism"] },
      { arabic: "أُسْتَاذَةٌ", german: "eine Professorin", plural: "أُسْتَاذَاتٌ", categories: ["ism"] },
      { arabic: "النِّسَاءُ", german: "die Frauen (Plural von اِمْرَأَةٌ/الْمَرْأَةُ „Frau“ — von anderer Wurzel, gebrochener Plural)", pluralType: "gebrochen", categories: ["ism"] },
      { arabic: "زَوْجَةٌ", german: "eine Ehefrau", plural: "زَوْجَاتٌ", categories: ["ism"] },
      { arabic: "عَمَّةٌ", german: "eine Tante (väterlicherseits)", plural: "عَمَّاتٌ", categories: ["ism"] },
      { arabic: "زَوْجٌ", german: "ein Ehemann", plural: "أَزْوَاجٌ", categories: ["ism"] },
      { arabic: "الْمَرْأَةُ", german: "die Frau", plural: "النِّسَاءُ", pluralType: "gebrochen", categories: ["ism"] },

      /* ---- Teil C ---- */
      { arabic: "ذَلِكَ", german: "das, jenes (maskulin)", plural: "أُولَئِكَ", pluralBook: true, categories: ["ismishara", "mabni"] },
      { arabic: "أُولَئِكَ", german: "jene (Plural von ذَلِكَ und تِلْكَ; ulâ'ika) — das و wird nicht ausgesprochen", categories: ["ismishara", "mabni"] },
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
  13: "Lektion 13"
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
  if(word.pluralType === "gesund" || word.pluralType === "gebrochen") return word.pluralType;
  const firstForm = word.plural.split("/")[0].trim();
  const bare = stripArabicDiacritics(firstForm);
  if(/(ون|ين)$/.test(bare)) return "gesund";   // جمع مذكر سالم
  if(/ات$/.test(bare)) return "gesund";        // جمع مؤنث سالم
  return "gebrochen";                          // جمع تكسير
}