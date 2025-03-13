const data = [
  {
    "question": "Inson ichki mexanizmlarini nima o’rganadi?",
    "answer": "Tarbiya",
    "noAnswer1": "Ta’lim",
    "noAnswer2": "Bilim",
    "noAnswer3": "Sharoit"
  },
  {
    "question": "Ta'lim mazmuni ta'rifini belgilang",
    "answer": "o‘quvchilarga beriladigan bilim, ko’nikma va malakalarning belgilangan doirasi",
    "noAnswer1": "o‘quvchilarga beriladigan nazariy bilim va amaliy tajribalar majmuyi",
    "noAnswer2": "o‘quvchilarga beriladigan bilim, ko’nikma, malakalar xajmi",
    "noAnswer3": "o‘quv rejasi, dasturi va darsliklar yig‘indisi majmui"
  },
  {
    "question": "Qaysi fan pedagogika fani uchun metodologik asos bo’lib xizmat qiladi?",
    "answer": "O‘quvchilarga beriladigan bilim, ko’nikma va malakalarning oldindan belgilangan doirasi",
    "noAnswer1": "O‘quvchilarga beriladigan nazariy bilim va amaliy tajribalar majmuyi",
    "noAnswer2": "O‘quvchilarga beriladigan bilim, ko’nikma, malakalar hajmi",
    "noAnswer3": "O‘quv rejasi, dasturi va darsliklar yig‘indisi"
  },
  {
    "question": "Psixologiya fani….",
    "answer": "ruhiy hodisalar va ruhiy holatlarni o‘rganadi",
    "noAnswer1": "bizning sezgilarimiz, fikrlarimiz, his-tuygularimizni o‘rganadi",
    "noAnswer2": "ruhiy hodisalarni, ularning fakt va mexanizmlarini o‘rganadi",
    "noAnswer3": "miya jarayonlari va uning qonuniyatlarini o‘rganadi"
  },
  {
    "question": "O‘zbekiston Respublikasi “Ta'lim to‘g‘risida”gi Qonunining maqsadi?",
    "answer": "Fuqarolarga ta'lim, tarbiya berish, kasb-hunar o‘rgatishning huquqiy asoslarini belgilashdan iborat konstitutsiyaviy huquqini ta'minlash",
    "noAnswer1": "O‘zbekiston Respublikasida ta'lim sohasidagi munosabatlarni huquqiy tartibga solish",
    "noAnswer2": "O‘zbekiston Respublikasi va Qoraqolpag‘iston Respublikasida ta'lim \r\nsohasidagi munosabatlarni huquqiy tartibga solish",
    "noAnswer3": "Ta'lim sohasidagi davlat siyosatining asosiy printsiplaridan iborat xuquqlarini belgilash."
  },
  {
    "question": "Psixika-bu ….",
    "answer": "tashqi olamni, ongli tarzda aks ettirishimizni ta'minlaydi",
    "noAnswer1": "miya mahsuli nerv sistemasining funktsiyasidir",
    "noAnswer2": "odamning ruhi, uning ruhiy xolatlaridir",
    "noAnswer3": "bizning sezgilarimiz, fikrlarimiz, his-tuygularimiz va kechinmalarimizdir"
  },
  {
    "question": "Test - so‘rov…",
    "answer": "Oldindan qat'iy tarzda qabul qilingan savollarga beriladigan javoblarni taqazo etadi",
    "noAnswer1": "odam psixikasining masala yechish, vazifalarni bajarish jarayonida kuzatishdir",
    "noAnswer2": "psixik hodisalarni tushuntirib beruvchi usullar majmuidir.",
    "noAnswer3": "odam psixikasini o‘rganishdagi vazifalar to‘plamidir"
  },
  {
    "question": "\"Vatanga sodiq, tarbiyali inson” sifatlarini to’liq belgilang",
    "answer": "o’zligini anglash, o’zini ozod, erkin, nodir, ulug, siymoligini anglash",
    "noAnswer1": "o’ziga xos milliy insoniy sifatlarini ochib beruvchi ma'naviy-insoniy asoslarini anglash",
    "noAnswer2": "ezgu niyat, fikr, ezgu suz, xushmuomila, ezgu ish, ezgu faoliyat",
    "noAnswer3": "aqlan yetuk, jimonan soglom, ma'naviy pok tuygularni anglash"
  },
  {
    "question": "Qaysi buyuk rus pedagogi o’zining asarida mashgulotlar orasida tanaffuslar berilishini,\r\n guruhlardagi bolalar yoshi va sonini bir xil bo’lishiga e'tibor berilishini aytgan",
    "answer": "Ya.A. Komenskiy",
    "noAnswer1": "A.M. Makarenko",
    "noAnswer2": "V.A. Suxomlinskiy",
    "noAnswer3": "D.K. Ushinskiy"
  },
  {
    "question": "Pedagog butun ta'lim jarayonida  nimani namoyish etib borishi zarur.",
    "answer": "bolalarga bo‘lgan ishonchini",
    "noAnswer1": "darsga bo‘lgan munosabatini",
    "noAnswer2": "o‘ziga bo‘lgan ishonchini",
    "noAnswer3": "kasbiga bo‘lgan qiziqishi"
  },
  {
    "question": "\"Innovatsion pedagogik texnologiyalar” – bu?",
    "answer": "noan'anaviy pedagogik texnologiyalar bo‘lib, yangi axborot texnologiyalarining paydo bo‘lishi, talabalarning shaxsini  eng yaxshi xususiyatlarini olib chiqish.",
    "noAnswer1": "Bu ishning natijasi sifatida o‘quvchilar yozilgan so‘zlar orasidan kitoblarda uchragan so‘zlarga aytiladi",
    "noAnswer2": "Modulli ta'limning mohiyati shundaki, talaba modul bilan ishlashda mutlaqo mustaqil ravishda (yoki muayyan kam yordam bilan) o‘quv jarayonining aniq maqsadlariga erishish",
    "noAnswer3": "o‘rganilayotgan bo‘lim bo‘yicha bir nechta kitoblar beriladi va ularning mazmuni va mavzusi ko‘rsatkichlarni diqqat bilan o‘rganishni taklif qiladi"
  },
  {
    "question": "\"Klaster\" -  texnologiyasi qaysi davlatda yaratilgan ?",
    "answer": "AQShda",
    "noAnswer1": "Germaniyada",
    "noAnswer2": "Frantsiyada",
    "noAnswer3": "Rossiyada"
  },
  {
    "question": "Muammoli o‘qitish bu ….",
    "answer": "takomillashgan o‘qitish",
    "noAnswer1": "innovatsion ta'lim",
    "noAnswer2": "mustaqil ta'lim",
    "noAnswer3": "zamonaviy ta'lim tehnologiyalari"
  },
  {
    "question": "\"Ijodiy metod” deb nimaga aytiladi.",
    "answer": "ta'lim oluvchining ijodiy mustaqilligini to‘la amalga oshiradi",
    "noAnswer1": "ta'lim oluvchining darsdaligini amalga oshiradi",
    "noAnswer2": "ta'lim oluvchilarning samaradorligini oshirish",
    "noAnswer3": "Ta'lim oluvchining  darsda qatnashishi"
  },
  {
    "question": "\"Pedagogika” –",
    "answer": "bu shaxsni maqsadini shakllantirish xaqidagi fan",
    "noAnswer1": "bu insonni ichki olami va o‘zini tutishi normalarini o‘rganuvchi fan",
    "noAnswer2": "bakalavr va magistirlarni tayyorlashda asosiy rol o‘ynovchi fan",
    "noAnswer3": "bu insonning psixologiyasini  o‘rganuvchi fan"
  },
  {
    "question": "\"Shaxs dinamikasi” deganda nimani tushuniladi?",
    "answer": "kishining ontogenetik rivojlanishini o‘z ichiga olgan holda sub'ektning xususiyatlari va sifatining vaqtga nisbatan o‘zgarish jarayoni",
    "noAnswer1": "shaxs tomonidan o‘zining axloqiy, ruhiy va ishchanlik qobiliyatining ijtimoiy ahamiyatini, jamiyatdagi o‘rnini anglay olish xususiyati",
    "noAnswer2": "shaxs amal qiladigan bilim, tamoyil va idealarning haqqoniyligiga qalban va asosli ishonch bilan bog‘langan, uning atrof-muhitga bo‘lgan sub'ektiv munosabati",
    "noAnswer3": "Shaxs haqida ma'lumot; malaka oshirganlik to‘g‘risidagi ma'lumot; ta'limiy yoki pedagogik kontseptsiya; yutuqlar"
  },
  {
    "question": "Pedagogning kishilar bilan qisqa muddatda muloqot o‘rnata olishi, \r\nular bilan muloqot o‘rnatishga bo‘lgan doimiy intilishi - ?",
    "answer": "Pedagogning kommunikativ madaniyati",
    "noAnswer1": "Pedagog nuqtai nazari (pozitsiya)",
    "noAnswer2": "Pedagogik faoliyat",
    "noAnswer3": "Pedagogik texnologiyalar tizim darajalari"
  },
  {
    "question": "Maxsus pedagogik tarmoqlarni ko’rsatib bering?",
    "answer": "defektologiya",
    "noAnswer1": "oila pedagogikasi",
    "noAnswer2": "kichik maktab yoshidagi o‘quvchilar pedagogikasi",
    "noAnswer3": "o‘smirlar pedagogikasi"
  },
  {
    "question": "«Ma'naviyat» so’zining ma'nosini belgilang?",
    "answer": "«ma'naviy goya» so’zlaridan olingan bo’lib, \"ruhiy holat\"  degan ma'noni anglatadi",
    "noAnswer1": "odob-axloq tushunchasini anglatadi",
    "noAnswer2": "madaniyatli, odobli, axloqli ma'nosini anglatadi",
    "noAnswer3": "bilimli, odobli, madaniyatli ma'nosini anglatadi"
  },
  {
    "question": "Pedagogika taraqqiyotida goyaviy-ilmiy muammolarning o’rni",
    "answer": "Pedagogikaning fan sifatida taraqqiyoti uchun asos",
    "noAnswer1": "Pedagogik jarayonni to’gri tashkil etish uchun asos",
    "noAnswer2": "O’qituvchilar, tarbiyachilar, ustozlar uchun qo’llanma",
    "noAnswer3": "Pedagogika mutaxassisliklari uchun qo’llanma"
  },
  {
    "question": "Pedagogikaning ilmiy tadqiqot usullari",
    "answer": "Maktab xujjatlarini o’rganish, taqdirlash, jazolash",
    "noAnswer1": "Ishontirish, o’rgatish va mashq qildirish",
    "noAnswer2": "Pedagogik kuzatish, suxbat, pedagogik tajriba",
    "noAnswer3": "Ma'ruza, himoya, tushuntirish, muammoli ta'lim"
  },
  {
    "question": "“Yetuk shaxs” bo‘lgandagi sifatlarni aniqlang",
    "answer": "Aqliy, jismoniy yetukligi",
    "noAnswer1": "Zexn o’tkirligi",
    "noAnswer2": "Ma'naviy pokligi",
    "noAnswer3": "Iqtidorliligi va madaniyatliligi"
  },
  {
    "question": "Ta'lim maqsadini belgilash omillari",
    "answer": "Jamiyatning ijtimoiy mafkuraviy, ma'naviy shart-sharoitlari",
    "noAnswer1": "Pedagog, ota-ona, o’qituvchilarning xohish istaklari",
    "noAnswer2": "Jamiyat taraqqiyotining istiqboli",
    "noAnswer3": "Jamiyat taraqqiyotining ijtimoiy ehtiyojlari"
  },
  {
    "question": "\"O‘z-o‘zini baholash” deganda nima tushuniladi ?",
    "answer": "shaxsning o‘z psixologik sifatlari, xulqi, yutuqlari va muvaffaqiyatsizliklari, qadr-qimmati, kamchiliklarini baholash",
    "noAnswer1": "shaxsga xos bo‘lgan madaniyatning shakllanishi va rivojlanishiga qaratilgan izchil va ongli faoliyati",
    "noAnswer2": "shaxsning o‘z jismoniy, ruhiy va axloqiy sifatlarini tinmay amalga oshirish",
    "noAnswer3": "faoliyatining bir turi bo‘lib, ijtimoiy tajribalarni o‘zlashtirish va bunyod etishga qaratilgan bo‘ladi"
  },
  {
    "question": "Shaxs taraqqiyotida pedagogik omillarni o’rni",
    "answer": "Bilim, ko’nikma berish orqali dunyoqarashni shakllantirish",
    "noAnswer1": "Xulq, madaniyat odatini shakllantirish",
    "noAnswer2": "Talant iste'dodlarini o‘stirish",
    "noAnswer3": "Biologik, ijtimoiy omillarni boshqarish"
  },
  {
    "question": "Motivatsiya nima?",
    "answer": "Inson xulq-atvori, uning bog’lanishi, yo’nalishi va faolligiga undovchi kuch.",
    "noAnswer1": "Uning jarayonida bilimlar, malaka va turli ko’nikmalar o’zlashtiriladi",
    "noAnswer2": "Shaxs individual rivojlanishi jarayonida namoyon bo’ladigan birlamchi faoliyat turlaridan biri.",
    "noAnswer3": "Ongrivojlanishiningbosqichlari."
  },
  {
    "question": "Konkret odamni boshqa bir konkret odamdan farqlovchi barcha  o’ziga xos\r\n xususiyatlar majmui nima deb ataladi?",
    "answer": "individuallik",
    "noAnswer1": "qobiliyat",
    "noAnswer2": "iqtidor",
    "noAnswer3": "iste'dod"
  },
  {
    "question": "Qaysi qatorda psixik jarayonlar kiritilganligini aniqlang",
    "answer": "sezgi, idrok, xotira, tafakkur, nutq, hayol",
    "noAnswer1": "diqqat ,alanga, katak, miya, xavo, tuygu",
    "noAnswer2": "qiziqish, fikr, diqqatlilik, odat",
    "noAnswer3": "ovoz, qobiliyat, tovush, hayol, muhabbat"
  },
  {
    "question": "Psixologiyaning taraqqiyot bosqichlari bo’yicha tarmoqlari qaysi qatorda ko’rsatilgan?",
    "answer": "yosh davrlari psixologiyasi: bolalar, o’smirlar, o’spirinlar",
    "noAnswer1": "diqqatlilik,tafakkur munosabat, mehnat",
    "noAnswer2": "tibbiyot, o’smirlar, sport, xarbiy psixologiya",
    "noAnswer3": "ijtimoiy psixologiya, xarbiy va savdo psixologiyasi"
  },
  {
    "question": "Sezgi bu….",
    "answer": "oddiy bilishdan  iborat psixik jarayon bo’lib,  \r\nmoddiy borliqdagi narsa va hodisalarni aks ettirishdan iborat",
    "noAnswer1": "moddiy borliqdagi narsa va hodisalarni ayrim xususiyatlarini  \r\naks ettirishdan iborat bosh miya po’sti rektsiyasidir",
    "noAnswer2": "moddiy borliqdagi narsa va hodisalarni  bosh miya po’stida \r\naks ettirish jarayonidir",
    "noAnswer3": "sezgilar tirik organizmning tashki dunyoga moslashish xususiyatini ichiga olgandir"
  },
  {
    "question": "Xotira bu …",
    "answer": "tajribamizga aloqador xar qanday ma'lumotni  eslab qolish, \r\nesda saqlash bilan bog‘liq murakkab jarayondir",
    "noAnswer1": "oldin qabul qilingan taassurotlarni  esda saqlash bilan bog’lik jarayondir",
    "noAnswer2": "pegallagan tajribalarni  amaliy faoliyatda qo’llashdan iborat psixik jarayondir",
    "noAnswer3": "kishining sezgi va idroklari asosida  o’z tajribasini boyitish  qobiliyati"
  },
  {
    "question": "Pedagogikada \"shaxs\" ta'rifi",
    "answer": "Shaxs ta'lim-tarbiya va vaziyatlar mahsuli",
    "noAnswer1": "Shaxs-ijtimoiy munosabatlar mahsuli",
    "noAnswer2": "Shaxs axborotlarni\r\nqabul qiluvchi",
    "noAnswer3": "Shaxs-o’qituvchi, o‘quvchi, ota-ona"
  },
  {
    "question": "Ta'lim jarayoni ta'sirida shaxsning aqliy kamolotini bilish qobiliyati, o‘qishga, \r\nmehnatga bo‘lgan munosabatini rivojlantirish ta'limning qaysi \r\nmaqsadlari orqali amalga oshiriladi?",
    "answer": "Ta'limiy",
    "noAnswer1": "Rivojlantiruvchi",
    "noAnswer2": "Tarbiyaviy",
    "noAnswer3": "iMa'naviy"
  },
  {
    "question": "Materialni nisbatan dadil va to‘la tushunilishi va material bilan bog‘liq tushunchalarni \r\najratilishi xarakterlanishi qaysi olimning nazariyalarida berilgan?",
    "answer": "P.Ya.Galperin",
    "noAnswer1": "D.B.Elkonin",
    "noAnswer2": "S.L.Rubinshteyn",
    "noAnswer3": "Yan.Amos Komenskiy"
  },
  {
    "question": "“Didaktikaning otasi, asoschisi” nomini olgan olim kim?",
    "answer": "Yan Amos Komenskiy",
    "noAnswer1": "P.Ya.Galperin",
    "noAnswer2": "S.L.Rubinshteyn",
    "noAnswer3": "D.B.Elkonin"
  },
  {
    "question": "Ma’lum bir maqsadga yo’naltirilgan tizimli bilim va ko’nikmalar bilan qurollangan jarayon bu....",
    "answer": "Ta’lim;",
    "noAnswer1": "O’qitish;",
    "noAnswer2": "Masofaviy o’qitish;",
    "noAnswer3": "Internatsionallilik."
  },
  {
    "question": "\"Keys stadi” metodi  ma ‘nosi qanday?",
    "answer": "Aniq vaziyatlarni o‘rganish",
    "noAnswer1": "Natijalarni belgilash",
    "noAnswer2": "Boshqa vaziyatni baholash",
    "noAnswer3": "Vaziyatdan chetlashish"
  },
  {
    "question": "\"Pedagogik mahorat\" nima  ?",
    "answer": "pedagogik jarayonni tashkil etish  harakatni ko‘rsata olish",
    "noAnswer1": "zamonaviy texnikalar asosida dars o‘tish",
    "noAnswer2": "ko‘proq yangi  usullar bilan tanishtirib dars o‘tish",
    "noAnswer3": "hamma usullar  bilan darsni to‘liq yoritib berish"
  },
  {
    "question": "Pedagogning kommunikativ madaniyati?",
    "answer": "pedagogning   kishilar bilan qisqa muddat ichida muloqatga kirishi",
    "noAnswer1": "pedagog kishilar  bialn to‘liq muloqotga ega emasligi",
    "noAnswer2": "pedagog doim  uzviy va doimiy harakatda bo‘lishi",
    "noAnswer3": "pedagog  mahoratga ega bo‘lishi"
  },
  {
    "question": "Pedagog nuqtai nazari….",
    "answer": "Pedagogning dunyoga,pedagogik voqelikka intellektual va hissiy munosabati",
    "noAnswer1": "pedagogning shaxsiy fikrlashini xisobga olgan xolda ish olib borish",
    "noAnswer2": "Pedagogning aqliy faoliyatini rivojlantirib reja tuzish ishlash",
    "noAnswer3": "Pedagogning dunyoqarashi fikrlash doirasi e’tiborga olib munosabatlarini rivojlantirish"
  },
  {
    "question": "Pedagogika faninning «Didaktika» ta’lim nazariyasi qismi qaysi \r\nqadimiy lotincha so‘z nomi bilan aytiladi?",
    "answer": "O‘qituvchi",
    "noAnswer1": "Tarbiyachi",
    "noAnswer2": "Yetaklovchi",
    "noAnswer3": "Murabbiy"
  },
  {
    "question": "Kreativlik – bu",
    "answer": "shaxsning ijodga nisbatan umumiy qobiliyati",
    "noAnswer1": "pedagogik jarayonni qurish",
    "noAnswer2": "talabalarga nisbatan sabr-toqatli bo‘lish",
    "noAnswer3": "zarur axborotlarni tahlil qilish qobiliyati"
  },
  {
    "question": "Pedagog ixtiyorida bo‘lgan eng kuchli vosita nima?",
    "answer": "Shaxsiy namuna",
    "noAnswer1": "Pedagogik maxorat",
    "noAnswer2": "Pedagogik texnologiya",
    "noAnswer3": "Nutq"
  },
  {
    "question": "...  - faoliyat jarayonida paydo bo‘ladi va rivojlanadi. ... malaka va uddaburonlikdan farq qiladi",
    "answer": "qobiliyat",
    "noAnswer1": "bilim",
    "noAnswer2": "ko‘nikma",
    "noAnswer3": "faoliyat"
  },
  {
    "question": "Pedagogik psixologiya nimani o‘rganadi?",
    "answer": "kishiga  ta’lim -tarbiya berishning psixologik qonuniyatlarini o‘rganadi",
    "noAnswer1": "tafakkurning shakllanishini o‘rganadi",
    "noAnswer2": "pedagog bilan ukuvchilar urtasidagi munosabatni o‘rganadi",
    "noAnswer3": "psixik rivojlanishdan orkada kolish sabablarini o‘rgandi"
  },
  {
    "question": "Metod, ya’ni usul axborotni uzatish va qabul qilish xarakteriga qarab qanday usullarga bo’linadi?",
    "noAnswer1": "Ijtimoiy ehtiyojlar",
    "answer": "So’z orqali ifodalash usuli, ko’rgazmalilik usuli, amaliy, namuna usuli, rag’batlantirish, jazo.",
    "noAnswer2": "Faoliyat turi bilan shug’ullanishiga majbur qilgan psixologik omillar",
    "noAnswer3": "Narsa va xodisalarning mohiyati"
  },
  {
    "question": "Tarbiyalanganlik –deganda nimani tushunasiz?",
    "answer": "Milliy urf-odatimiz mezoniga kirmagan, o’zgalarning nafratini qo’zg’atadigan \r\nxatti-harakatlardan o’zini tiyabilish",
    "noAnswer1": "O’ziga baho berish",
    "noAnswer2": "O’zgalarning fikrini amalda qo’llash",
    "noAnswer3": "Noto’g’ri qilgan ishiga o’zini iqror qildirish"
  },
  {
    "question": "Pedagogikaning asosiy tushunchalari",
    "noAnswer1": "pedagogik muloqot, ma’naviyat",
    "answer": "ta’lim, tarbiya, ma’lumot,",
    "noAnswer2": "ta’lim, ilm, malaka, ko‘nikma",
    "noAnswer3": "ilm, ma’rifat, madaniyat"
  },
  {
    "question": "................ - ma\t’tkaziladigan, o’quvchilarni bilim, \r\nko’nikma va malakalar bilan qurollantiradigan, bilim, qobiliyatlarini o’stiradigan, \r\nularning dunyoqarashini tarkib toptiradigan jarayondir",
    "answer": "ta’lim",
    "noAnswer1": "ko’nikma",
    "noAnswer2": "bilim",
    "noAnswer3": "qobiliyat"
  },
  {
    "question": "Pedagogning kishilar bilan qisqa muddatda muloqot o‘rnata olishi, ular bilan muloqot o‘rnatishga bo‘lgan doimiy intilishi?",
    "answer": "Pedagogning kommunikativ madaniyati",
    "noAnswer1": "Pedagog nuqtai nazari (pozitsiya)",
    "noAnswer2": "Pedagogik faoliyat",
    "noAnswer3": "Pedagogik texnologiyalar tizim darajalari"
  },
  {
    "question": "Ko‘zi ojiz tarbiyalanuvchilar ta'lim-tarbiyasi  bilan shug‘ullanuvchi fan qaysi?",
    "answer": "Tiflopedagogika",
    "noAnswer1": "Surdopedagogika",
    "noAnswer2": "Oligofrenopedagogika",
    "noAnswer3": "Ordopedagogika"
  },
  {
    "question": "Ta'lim usullarini tanlash bilan bir qatorda o‘qituvchi darsdagi talabalarni yosh\r\n va individual xarakter xususiyatlarini o‘rganishi hamda tahlil qilishi shart.\r\n Qaysi usul asosan ta'lim-tarbiya jarayoniga aloqador ilmiy faraz yoki amaliy\r\n ishlarning tatbiqi jarayonlarini tekshirish, aniqlash maqsadida o‘tkaziladi?",
    "answer": "Eksperiment-tajriba-sinov usuli",
    "noAnswer1": "Test sinovlar usuli",
    "noAnswer2": "Matematika va kibernetika usullari",
    "noAnswer3": "Test - surov metodi"
  },
  {
    "question": "52 .............– bu yosh avlodni hayotga, mehnatga tayyorlash uchun xalq oldida, \r\ndavlat oldida javob beradigan, yosh avlodga ta'lim-tarbiya berish uchun maxsus \r\ntayyorlangan mutaxassislarning mehnat faoliyati",
    "answer": "Pedagogik faoliyat",
    "noAnswer1": "Pedagogik qobiliyat",
    "noAnswer2": "Pedagogik mahorat",
    "noAnswer3": "Pedagogik jarayon"
  },
  {
    "question": "Shaxsning faolliyatini yo‘naltirib turadigan va mavjud vaziyatlarga nisbatan bog‘liq\r\n bo‘lmagan barqaror motivlar majmuyi ................ deb ataladi?",
    "answer": "kishi shaxsining yo‘naltirilganligi",
    "noAnswer1": "kishining motivatsiya xolati",
    "noAnswer2": "kishining qiziqish yo‘nalishi",
    "noAnswer3": "kishining faoliyat yo‘nalishi"
  },
  {
    "question": "“Milliy mafkura - bu xalqning, millatning o‘tda yonmaydigan, suvda cho‘kmaydigan o‘lmas  ......”",
    "answer": "e'tiqodidir",
    "noAnswer1": "iymonidir",
    "noAnswer2": "ma'naviyatidir",
    "noAnswer3": "madaniyatidir"
  },
  {
    "question": ".... -  tadqiqotchining boshqa kishilardan pedagogik tajribaning biror\r\n tomoni yoki hodisalari haqida axborot olish jarayoni bu metodning asosini tashkil qiladi.",
    "answer": "Pedagogik so‘rash metodi",
    "noAnswer1": "Test sinovlar metodi",
    "noAnswer2": "Eksperiment-tajriba-sinov usuli",
    "noAnswer3": "Kuzatish metodi"
  },
  {
    "question": ".............– ma'naviy manbalar va xozirgi zamon talablari va extiyojlarini \r\nnazarda tutgan xolda, o‘qituvchining o‘quvchi bilan aniq bir maqsadga qaratilgan\r\n o‘zaro amaliy va nazariy muloqotidir",
    "answer": "Tarbiya",
    "noAnswer1": "Ko‘nikma",
    "noAnswer2": "Bilim",
    "noAnswer3": "Ta'lim"
  },
  {
    "question": "Lug‘aviy jihatdan “interfaol” tushunchasi qanday ma'noni anglatadi?",
    "answer": "o‘zaro harakat qilmoq",
    "noAnswer1": "o‘zaro fikr almashmoq",
    "noAnswer2": "o‘zaro yordam bermoq",
    "noAnswer3": "o‘zaro kelishib olmoq"
  },
  {
    "question": "Talabalarning bilim, ko‘nikma, malaka va muayyan axloqiy sifatlarni o‘zlashtirish \r\nyo‘lidagi o‘zaro harakatlarini tashkil etishga asoslanuvchi ta'lim qanday nomlanadi?",
    "answer": "muammoli ta'lim;",
    "noAnswer1": "rivojlantiruvchi ta'lim",
    "noAnswer2": "dasturiy ta'lim",
    "noAnswer3": "interfaol ta'lim"
  },
  {
    "question": "..... - deganda biz shaxsning ham jismoniy, ham aqliy va ma'naviy kamol topish jarayonini tushunamiz",
    "answer": "rivojlanish",
    "noAnswer1": "tarbiya",
    "noAnswer2": "bilim",
    "noAnswer3": "ma'naviyat"
  },
  {
    "question": ".........– hulqning asosiy anglanilgan motivi. U butun shaxs faoliyatiga alohida mazmun va \r\naniq yo‘nalish bahsh etadi",
    "answer": "e'tiqod",
    "noAnswer1": "motivatsiya",
    "noAnswer2": "extiyoj",
    "noAnswer3": "madaniyat"
  },
  {
    "question": "\"Shaxsiy fazilat nima?",
    "answer": "Shaxs tomonidan o‘zining ahloqiy ruhiy va ishchanlik qobiliyatining anglay olish hususiyati",
    "noAnswer1": "Shaxs amal qiladigan bilim tamoyil va ideallarning haqqoniyligiga qalban subьektiv munosabati",
    "noAnswer2": "Insonning xayotiy tajribaga asoslangan munosabat turlarini xisobga olishishmiz mumkin",
    "noAnswer3": "Individning biror narsa hodisaga muhtojligini ko’rishimiz mumkin bo‘ladi"
  },
  {
    "question": "\"Estetik tarbiya” nima?",
    "answer": "Go‘zallikini his qilish, go‘zallikni payqay olish qobiliyatini tarbiyalash",
    "noAnswer1": "Individning biror narsaga muhtojligi, go‘zalligini misol qilib olamiz",
    "noAnswer2": "Tasodifiylik xaqidagi tasavvurni go’zallika, mantiqqa bog‘lash",
    "noAnswer3": "Tadqiqot ob’ekti to‘grisida har tomonlama tasavvur hosil qilish"
  },
  {
    "question": "\"Faoliyat” nima?",
    "answer": "Ongli maqsad bilan boshqariladigan ichki va tashqi faolligi",
    "noAnswer1": "Insonning atrof-muhitga bo‘lgan ta'siri",
    "noAnswer2": "Bilim, ko‘nikma va tajribadan kelib chiqib ishlash",
    "noAnswer3": "Shaxs psihikasi motivlarining shakllanishi"
  },
  {
    "question": "Tushuncha nima?",
    "answer": "buyum va xodisalar xususiyatlarining umumiy va muhim belgilarini yaxlit holda ifodalash",
    "noAnswer1": "Shaxs hayotining muayyan davrdagi psihik rivojlanishini nazarda tutadi",
    "noAnswer2": "Insonnig atrof muhitga munosabatini o‘rganish orqali munosabatlarni o‘rganish",
    "noAnswer3": "Insonning anglay bilish qobiliyati shakllantirish orqali ish uslubini olib borish"
  },
  {
    "question": "Tushuncha nima?",
    "answer": "buyum va xodisalar xususiyatlarining umumiy va muhim belgilarini yaxlit holda ifodalash",
    "noAnswer1": "Shaxs hayotining muayyan davrdagi psihik rivojlanishini nazarda tutadi",
    "noAnswer2": "Insonnig atrof muhitga munosabatini o‘rganish orqali munosabatlarni o‘rganish",
    "noAnswer3": "Insonning anglay bilish qobiliyati shakllantirish orqali ish uslubini olib borish"
  },
  {
    "question": "\"Tarbiya” nima?",
    "answer": "Shaxsning ma'naviy va jismoniy holatga muntazam maqsadga muvofiq ta'sir etish",
    "noAnswer1": "biror harakat fikrni takrorlash orqali ta'lim tarbiya masalasini rivojlantirish",
    "noAnswer2": "ta'lim maqsadlarini amalga oshirishga qaratilgan fikrlar",
    "noAnswer3": "ta'limning yo‘nalishlaridan birini tanlab faoliyat olib borishdir"
  },
  {
    "question": "Ilmiy tushuncha sifatida “........” so‘zi keng ma'noda muayyan maqsadga erishish yo‘lini, \r\ntor ma'noda - tabiat va ijtimoiy xayot xodisalari va qonuniyatlarini bilish maqsadida\r\n qandaydir vazifani xal etish usulini bildiradi",
    "answer": "metod",
    "noAnswer1": "ma'naviyat",
    "noAnswer2": "texnologiya",
    "noAnswer3": "qobiliyat"
  },
  {
    "question": "Hissiyot - bu ….",
    "answer": "kishining tevarak atrofdagi  narsa va hodisalarga  bulgan munosabatlarini \r\n kechinishi",
    "noAnswer1": "kishining emotsiyasini boshqara olishni rivojlantirish",
    "noAnswer2": "ichki a'zolardagi  aniq xarakat va o’zgarishlarni  anglash",
    "noAnswer3": "kishining extiyojlarga bo’lgan o’z munosabatlarini farqlay olishi"
  },
  {
    "question": "Iroda – bu ….",
    "answer": "shaxsning maqsadga erishish yo’lidagi jismoniy va ruhiy qiyinchiliklarini yengishi",
    "noAnswer1": "kishilarning ixtiyoriy xarakatlari yig‘indisini olishimiz mumkin",
    "noAnswer2": "shaxsning yashash tartibi va sharoitlari bilan belgilanadigan aktivligi",
    "noAnswer3": "kishining ixtiyorsiz xarakatlari yig‘indisini rivojlantirish"
  },
  {
    "question": "Temperament – bu …",
    "answer": "kishining nerv sistemasi xolati bo’lib, odamlarga va xayot sharoitiga bo’lgan\r\n munosabatlarining yakka xususiyatlari",
    "noAnswer1": "Kishining o’zini tuta olmasligi xaqidagi xarakterlarni o‘rganadi",
    "noAnswer2": "Shaxs faoliyati va xulqining dinamik o‘zgaruvchan va emotsional-hissiy tomonlarini \r\nxarakterlovchi individual xususiyatlar",
    "noAnswer3": "shaxs faoliyati va xulqining dinamik xususiyatlari yig‘indisini olishimiz mumkin"
  },
  {
    "question": "Xarakter – bu …",
    "answer": "Shaxsdagi shunday psixologik, sub'ektiv munosabatlar majmuiki, ular uning borliqqa, odamlarga\r\n munosabatini ifodalaydi",
    "noAnswer1": "Kishining xulq -atvorida namoyon bo’ladigan tug’ma xususiyatlari",
    "noAnswer2": "Kishining oliy nerv sistemasi bilan bog’lanmagan holda shakllanadigan psixik xususiyatlari",
    "noAnswer3": "Kishining fe'l-atvoridan kelib chiqqan xolda o‘z-o‘ziga munosabatini ifodalaydi"
  },
  {
    "question": ".......– o'quvchining ichki dunyosiga kira olish qobiliyati, o'quvchi shaxsini va uning ruhiy holatlarini juda yaxshi tushuna bilish bilan bog'liq bo'lgan psixologik kuzatuvchanlikdir",
    "answer": "Kuzatuvchanlik qobiliyati",
    "noAnswer1": "Tushuntira olish qobiliyati",
    "noAnswer2": "Bilish qobiliyati",
    "noAnswer3": "Pedagogik maxorat"
  },
  {
    "question": "Kaysi fan pedagogika fani uchun metodologik asos bulib xizmat kiladi?\n",
    "answer": "Ukuvchilarga beriladigan bilim, kunikma va malakalarning oldindan belgilangan doirasi ",
    "noAnswer1": "Ukuvchilarga beriladigan nazariy \nbilim va amaliy tajribalar majmuyi",
    "noAnswer2": "Ukuvchilarga beriladigan bilim, kunikma, malakalar xajmi",
    "noAnswer3": "Ukuv rejasi, dasturi va darsliklar yigindisi"
  },
  {
    "question": " Psixologiya fani....",
    "answer": "ruhiy hodisalar va ruhiy xolatlarni o'rganadi",
    "noAnswer1": "bizning sezgilarimiz, fikrlarimiz, his-tuygularimizni o'rganadi .",
    "noAnswer2": "ruhiy hodisalarni, ularning fakt va mexanizmlarini o'rganadi",
    "noAnswer3": "miya jarayonlari va uning qonuniyatlarini o'rganadi"
  },
  {
    "question": "O'zbekiston Respublikasi \"ta'lim to'g'risida\"gi Qonunining maqsadi?",
    "answer": "Fuqarolarga ta'lim, tarbiya berish, kasb-hunar o'rgatishning huquqiy asoslarini belgilashdan iborat konstitusiyaviy huquqini ta'minlash",
    "noAnswer1": "O'zbekiston Respublikasidata'lim sohasidagi munosabatlarni huquqiy tartibga solish",
    "noAnswer2": "O'zbekiston Respublikasi va Qoraqolpag'iston Respublikasidata'lim sohasidagi munosabatlarni huquqiy tartibga solish",
    "noAnswer3": "Ta'lim sohasidagi davlat siyosatining asosiy printsiplaridan iborat xukuklarini belgilash."
  },
  {
    "question": "Psixika-bu ....",
    "answer": "u tashqi olamni, ongli tarzda aks ettirishimizni ta'minlaydi",
    "noAnswer1": "miya maxsuli nerv sistemasining funktsiyasidir",
    "noAnswer2": "odamning ruxi, uning ruhiy xolatlaridir",
    "noAnswer3": "bizning sezgilarimiz, fikrlarimiz, his-tuygularimiz va kechinmalarimizdir"
  },
  {
    "question": "Test - so'rov…\n\n",
    "answer": "Oldindan qat'iy tarzda qabul qilingan savollarga beriladigan javoblarni taqazo etadi",
    "noAnswer1": "odam psixikasining masala echish, vazifalarni bajarish jarayonida kuzatishdir",
    "noAnswer2": "psixik hodisalarni tushuntirib beruvchi usullar majmuidir.    ",
    "noAnswer3": "odam psixikasini o'rganishdagi vazifalar to'plamidir"
  },
  {
    "question": "Vatanga sodiq, tarbiyali inson sifatlarini tulik belgilang\n",
    "answer": "uzligini anglash, uzini ozod, erkin, Nodir, ulug, siymoligini anglash",
    "noAnswer1": "uziga xos milliy insoniy sifatlarini ochib beruvchi ma'naviy-insoniy asoslarini anglash ",
    "noAnswer2": "ezgu niyat, fikr, ezgu suz, xushmuomila, ezgu ish, ezgu faoliyat",
    "noAnswer3": "aklan etuk, jimonan soglom, ma'naviy pok tuygularni anglash",
    "Column7": " "
  },
  {
    "question": "Kaysi buyuk rus pedagogi uzining asarida mashgulotlar orasida tanafuslar berilishini, guruxlardagi bolalar yoshi va sonini bir xil bulishiga e'tibor berilishini aytgan",
    "answer": "Ya.A. Komenskiy ",
    "noAnswer1": "A.M. Makarenko",
    "noAnswer2": "V.A. Suxomlinskiy ",
    "noAnswer3": "D.K. Ushinskiy"
  },
  {
    "question": "O'zbekiston Respublikasi \"ta'lim tugrisida konun\" amaldagisi kachon kabul kilingan",
    "answer": "1997 yil 29 avgust",
    "noAnswer1": "1995 yil 10 mart",
    "noAnswer2": "1992 yil 20 oktyabr",
    "noAnswer3": "1999 yil 16 avgust"
  },
  {
    "question": "O'zbekiston Respublikasi \"Kadrlar tayyorlash milliy dasturi\" kachon kabul kilingan",
    "answer": "1997 yil 29 avgust",
    "noAnswer1": "1992 yil 20 oktyabr",
    "noAnswer2": "1999 yil 16 avgust",
    "noAnswer3": "1993 yil 15 noyabr"
  },
  {
    "question": "Pedagog butun ta'lim jarayonida nimani namoyish etib borishi zarur.",
    "answer": "bolalarga bo'lgan ishonchini",
    "noAnswer1": "darsga bo'lgan munosabatini",
    "noAnswer2": "o'ziga bo'lgan ishonchini",
    "noAnswer3": "kasbiga bo'lgan kizikishi"
  },
  {
    "question": "Innovasion pedagogik texnologiyalar – bu?\n",
    "answer": "noan'anaviy pedagogik texnologiyalar bo'lib, yangi axborot texnologiyalarining paydo bo'lishi, talabalarning shaxsini eng yaxshi xususiyatlarini olib chiqish.",
    "noAnswer1": "Bu ishning natijasi sifatida o'quvchilar yozilgan so'zlar orasidan kitoblarda uchragan so'zlarga aytiladi",
    "noAnswer2": "Modulli ta'limning mohiyati shundaki, talaba modul bilan ishlashda mutlaqo mustaqil ravishda (yoki muayyan kam yordam bilan) o'quv jarayonining aniq maqsadlariga erishish",
    "noAnswer3": "o'rganilayotgan bo'lim bo'yicha bir nechta kitoblar beriladi va ularning mazmuni va mavzusi ko'rsatkichlarni diqqat bilan o'rganishni taklif qiladi"
  },
  {
    "question": "\"Klaster\" - texnologiyasi qaysi davlatda yaratilgan ?\n\n",
    "answer": " AQShda",
    "noAnswer1": "Germaniyada",
    "noAnswer2": "Frantsiyada",
    "noAnswer3": "Rossiyada"
  },
  {
    "question": "Muammoli o'qitish bu .... ",
    "answer": "takomillashgan o'qitish",
    "noAnswer1": "innovasion ta'lim ",
    "noAnswer2": "mustaqil ta'lim",
    "noAnswer3": "zamonaviy ta'lim tehnologiyalari"
  },
  {
    "question": "  Ijodiy metod deb nimaga aytiladi.\n",
    "answer": "ta'lim oluvchining ijodiy mustaqilligini to'la amalga oshiradi",
    "noAnswer1": "ta'lim oluvchining darsdaligini amalga oshiradi",
    "noAnswer2": "ta'lim oluvchilarning samaradorligini oshirish",
    "noAnswer3": "Ta'lim oluvchining darsda qatnashishi"
  },
  {
    "question": "Pedagogika – \n\n",
    "answer": "bu shaxsni maqsadini shakllantirish xaqidagi fan",
    "noAnswer1": "bu insonni ichki olami va o'zini tutishi narmallarini o'rganuvchi fan ",
    "noAnswer2": "bakalavr va magistirlarni tayyorlashda asosiy rol o'ynovchi fan",
    "noAnswer3": "bu insonning psixologiyasini o'rganuvchi fan"
  },
  {
    "question": "Shaxs dinamikasi deganda nimani tushuniladi?\n\n",
    "answer": "kishining ontogenetik rivojlanishini o'z ichiga olgan holda sub'ektning xususiyatlari va sifatining vaqtga nisbatan o'zgarish jarayoni",
    "noAnswer1": "shaxs tomonidan o'zining axloqiy, ruhiy va ishchanlik qobiliyatining ijtimoiy ahamiyatini, jamiyatdagi o'rnini anglay olish xususiyati",
    "noAnswer2": "shaxs amal qiladigan bilim, tamoyil va idealarning haqoniyligiga qalban va asosli ishonch bilan bog'langan, uning atrof-muhitga bo'lgan sub'ektiv munosabati",
    "noAnswer3": "Shaxs haqida ma'lumot; malaka oshirganlik to'g'risidagi ma'lumot; ta'limiy yoki pedagogik kontsepsiya; yutuqlar"
  },
  {
    "question": "Pedagogning kishilar bilan qiska muddatda muloqot o'rnata olishi, ular bilan muloqot o'rnatishga bo'lgan doimiy intilishi nimaga boglik?\n\n",
    "answer": "Pedagogning kommunikativ madaniyati",
    "noAnswer1": "Pedagog nuqtai nazari (pozisiya)",
    "noAnswer2": "Pedagogik faoliyat",
    "noAnswer3": "Pedagogik texnologiyalar tizim darajalari"
  },
  {
    "question": "Maxsus pedagogik tarmoklarini kursatib bering? ",
    "answer": "Defektologiya ",
    "noAnswer1": "oila pedagogikasi",
    "noAnswer2": "kichik maktab yoshidagi ukuvchilar pedagogikasi ",
    "noAnswer3": "o'smirlar pedagogikasi"
  },
  {
    "question": "\"Ma'naviyat\" suzining ma'nosini belgilang?",
    "answer": "\"ma'naviy goya\" suzlaridan olingan bulib ruxiy xolat degan ma'noni anglatadi",
    "noAnswer1": "odob-axlok tushunchasini anglatadi",
    "noAnswer2": "madaniyatli, odobli, axlokli ma'nosini anglatadi",
    "noAnswer3": "bilimli, odobli, madaniyatli ma'nosini anglatadi"
  },
  {
    "question": "Pedagogika taraqqiyotida goyaviy-ilmiy muammolarning urni",
    "answer": "Pedagogikaning fan sifatida tarakkiyoti uchun asos",
    "noAnswer1": "Pedagogik jarayonni tugri tashkil etish uchun asos",
    "noAnswer2": "Ukituvchilar, tarbiyachilar, ustozlar uchun kullanma",
    "noAnswer3": "Pedagogika mutaxassisliklari uchun kullanma"
  },
  {
    "question": "Pedagogikaning ilmiy tadkikod usullari",
    "answer": "Maktab xujjatlarini urganish takdirlash, jazolash",
    "noAnswer1": "Ishontirish, urgatish va mashk kildirish",
    "noAnswer2": "Pedagogik kuzatish, suxbat, pedagogik tajriba",
    "noAnswer3": "Ma'ruza ximoya, tushuntirish, muammoli ta'lim"
  },
  {
    "question": "Yetuk shaxs bo'lgandagi sifatlarni aniqlang",
    "answer": "Aqliy, jismoniy yetukligi",
    "noAnswer1": "Zexn utkirligi",
    "noAnswer2": "Ma'naviy pokligi",
    "noAnswer3": "Iktidorliligi va madaniyatliligi"
  },
  {
    "question": "Ta'lim maksadini belgilash omillari",
    "answer": "Jamiyatning ijtimoiy mafkuraviy, ma'naviy shart-sharoitlari",
    "noAnswer1": "Pedagog, ota-ona, ukituvchilarning xoxish istaklari",
    "noAnswer2": "Jamiyat tarakkiyotining istikboli",
    "noAnswer3": "Jamiyat tarakkiyotining ijtimoiy extiyojlari"
  },
  {
    "question": "O'z-o'zini baholash deganda nima tushuniladi ?\n",
    "answer": "shaxsning o'z psixologik sifatlari, xulqi, yutuqlari va muvaffaqiyatsizliklari, qadr-qimmati, kamchiliklarini baholash",
    "noAnswer1": "shaxsga xos bo'lgan madaniyatning shakllanishi va rivojlanishiga qaratilgan izchil va ongli faoliyati",
    "noAnswer2": "shaxsning o'z jismoniy, ruhiy va axloqiy sifatlarini tinmay amalga oshirish",
    "noAnswer3": " faoliyatining bir turi bo'lib, ijtimoiy tajribalarni o'zlashtirish va bunyod etishga qaratilgan bo'ladi"
  },
  {
    "question": "Shaxs tarakkiyotida pedagogik omillarni urni",
    "answer": "Bilim kunikma berish orkali dunyokarashni shakllantirish",
    "noAnswer1": "Xulk madaniyat odatini shakllantirish",
    "noAnswer2": "Talant iste'dodlarini o'stirish",
    "noAnswer3": "Biologik, ijtimoiy omillarni boshkarish"
  },
  {
    "question": "Qaysi katorda psixik jarayonlar kiritilganligini aniqlang",
    "answer": "sezgi, idrok, xotira, tafakkur, nutk, hayol",
    "noAnswer1": " diqqat, alanga, katak, miya, xavo, tuygu",
    "noAnswer2": "qiziqish, fikr, diqqatlilik, odat",
    "noAnswer3": "ovoz, qobiliyat, tovush, hayol, muhabbat"
  },
  {
    "question": "Psixologiyaning tarakkiyot boskichlari buyicha tarmoklari kaysi katorda kursatilgan?",
    "answer": "yosh davrlari psixologiyasi: bolalar, usmirlar, uspirinlar",
    "noAnswer1": "diqqatlilik,tafakkur munosabat, mehnat",
    "noAnswer2": "tibbiyot, usmirlar, sport, xarbiy psixologiya",
    "noAnswer3": "ijtimoiy psixologiya, xarbiy va savdo psixologiyasi"
  },
  {
    "question": "Sezgi bu....",
    "answer": "oddiy bilishdan iborat psixik jarayon bulib, moddiy borlikdagi narsa va hodisalarning aks ettirishdan iborat",
    "noAnswer1": "moddiy borlikdagi narsa va hodisalarni ayrim xususiyatlarini aks ettirishdan iborat bosh miya pusti rektsiyasidir",
    "noAnswer2": "moddiy borlikdagi narsa va hodisalarni bosh miya pustida aks ettirish jarayonidir",
    "noAnswer3": "sezgilar tirik organizmning tashki dunyoga moslashish xususiyatini ichiga olgandir"
  },
  {
    "question": "Xotira bu …",
    "answer": "tajribamizga aloqador xar qanday ma'lumotni eslab qolish, esda saklashga bog'liq murakkab jarayondir",
    "noAnswer1": "oldin kabul kilingan taassurotlarni esda saklash bilan boglik jarayondir",
    "noAnswer2": "egallagan tajribalarni amaliy faoliyatda kullashdan iborat psixik jarayondir",
    "noAnswer3": "kishining sezgi va idroklari asosida uz tajribasini boyitish qobiliyati"
  },
  {
    "question": "Pedagogikada shaxs ta'rifi",
    "answer": "Shaxs ta'lim-tarbiya va vaziyatlar maxsuli",
    "noAnswer1": "Shaxs-ijtimoiy munosabatlar maxsuli",
    "noAnswer2": "Shaxs axborotlarni\nkabul kiluvchi ",
    "noAnswer3": "Shaxs-ukituvchi, ukuvchi, ota-ona"
  },
  {
    "question": "Ta'lim jarayoni ta'sirida shaxsning aqliy kamolotini \nbilish qobiliyati, o'qishga, mexnatga bo'lgan munosabatini rivojlantirish ta'limning qaysi maqsadlari orqali amalga oshiriladi?",
    "answer": "Ta'limiy",
    "noAnswer1": "Rivojlantiruvchi",
    "noAnswer2": "Tarbiyaviy",
    "noAnswer3": "Ma'naviy "
  },
  {
    "question": "Materialni nisbatan dadil va to'la tushunilishi va material bilan bog'liq tushunchalarni ajratilishi xarakterlanishi qaysi olimning nazariyalarida berilgan?",
    "answer": "P.Ya.Galperin",
    "noAnswer1": "D.B.Elkonin",
    "noAnswer2": "S.L.Rubinshteyn",
    "noAnswer3": "Yan.Amos Komenskiy"
  },
  {
    "question": "\"Didaktikaning otasi, asoschisi\" nomini olgan olim kim?",
    "answer": "Yan Amos Komenskiy",
    "noAnswer1": "P.Ya.Galperin",
    "noAnswer2": "S.L.Rubinshteyn",
    "noAnswer3": "D.B.Elkonin"
  },
  {
    "question": "Ma'lum bir maqsadga yo'naltirilgan tizimli bilim va ko'nikmalar bilan qurollangan jarayon bu....",
    "answer": "Ta'lim;",
    "noAnswer1": "O'qitish;",
    "noAnswer2": "Masofaviy o'qitish; ",
    "noAnswer3": "Internatsionallilik."
  },
  {
    "question": "Keys stadi metodi manosi kanday\n",
    "answer": " Aniq vaziyatlarni o'rganish",
    "noAnswer1": "Natijalarni nbelgilash",
    "noAnswer2": "Boshqa vaziyatni baholash",
    "noAnswer3": " Vaziyatdan chetlashish"
  },
  {
    "question": "Pedagogik mahorat nima?\n",
    "answer": "pedagogik jarayoni tashkil etish, harakatni ko‘rsata olish",
    "noAnswer1": "zamonaviy texnikalar asosida dars o'tish",
    "noAnswer2": "ko'proq yangi usullar bilan tanishtirib dars o'tish",
    "noAnswer3": "hamma usullar bilan darsni to'liq yoritib berish"
  },
  {
    "question": "Pedagogning kommunikativ madaniyati?\n",
    "answer": "pedagog kishilar bilan qisqa muddat ichida muloqatga kirishi ",
    "noAnswer1": "pedagog kishilar bilan to'liq muloqotga ega emasligi ",
    "noAnswer2": "pedagog doim uzviy va doimiy harakatda bo'lishi",
    "noAnswer3": "pedagog mahoratga ega bo'lishi"
  },
  {
    "question": "Metodning maqsadi:........\n\n",
    "answer": "mavjud nazariy bilimlar va amaliy tajribalarni tahlil qilish",
    "noAnswer1": "muammoni hal etish yo'llarni topishga",
    "noAnswer2": "bilimlarni mustahkamlash",
    "noAnswer3": "takrorlash"
  },
  {
    "question": "Biror-bir masala yoki savolning muhokamasiga bag'ishlangan qisqa press-konferentsiya bu.....\n",
    "answer": "\"Brifing\" metodi",
    "noAnswer1": "Venn diagrammasi metodi",
    "noAnswer2": "\"Insert\" metodi",
    "noAnswer3": "Aqliy xujum"
  },
  {
    "question": "O'qitishni individuallashtirish texnologiyasi .....\n",
    "answer": "tadkikotlarida individual o'kitish o'kuv jarayonini tashkil etish shakli",
    "noAnswer1": "pedagog fakat birgina talaba bilan o'zaro munosabatda bo'ladi",
    "noAnswer2": "bir talaba faqat o'kitish vositalari",
    "noAnswer3": "Individual o'kitishda faoliyatning mazmuni"
  },
  {
    "question": "\"O'z mustaqil fikriga ega bo'lgan, o'z kuchiga, o'zi tanlagan yo'lning to'g'riligiga ishongan inson doimo kelajakka ishonch bilan qaraydi\"kimning so'zlari",
    "answer": "I.Karimov",
    "noAnswer1": "Abu Ali Ibn Sino",
    "noAnswer2": "Sh.Mirzieyov",
    "noAnswer3": "P.Ya.Galperin"
  },
  {
    "question": "Shaxsning rivojlanishi jarayoni bir qancha omillar ta'sirida sodir bo'ladi. Bular ",
    "answer": "irsiyat, muhit, ta'lim va tarbiya, shaxs faolligi",
    "noAnswer1": "ichki omillar, shaxs faolligi, irsiyat, muhit",
    "noAnswer2": "shaxs faolligi, tashqi omillar, irsiyat, muhit",
    "noAnswer3": "ichki omillar, shaxs faolligi, faoliyat shartlari va boshkalar "
  },
  {
    "question": "Aqliy rivojlanishdan orqada qolgan bolalarni tarbiyalash va o'qitish masalalari defektalogiya bo'limining qaysi tarmog'iga kiradi",
    "answer": "Oligofrenopedagogika",
    "noAnswer1": "Surdopedagogika",
    "noAnswer2": "Tiflopedagogika",
    "noAnswer3": "Logopediya"
  },
  {
    "question": "Metod, ya'ni usul axborotni uzatish va qabul qilish xarakteriga qarab qanday usullarga bo'linadi?",
    "answer": "so‘z orqali ifodalash usuli, ko‘rgazmalilik usuli, amaliy, namuna usuli, rag‘batlantirish va jazo usuli",
    "noAnswer1": "maslaxat berish, ko'rgazmalilik usuli, amaliy, namuna usuli, rag'batlantirish va jazo usuli",
    "noAnswer2": "o'rnak ko'rsatish, ko'rish orqali tarbiyalash, xikoya, ma'ruza, rag'batlantirish va jazo usuli",
    "noAnswer3": "xikoya, ma'ruza, rag'batlantirish, namuna ko'rsatish, rag'batlantirish usullari"
  },
  {
    "question": "Pedagogika inson dunyoqarashining shakllanishi, jamiyat va shaxsning o'zaro munosabati hamda bilish faoliyati muammolarini o'rganuvchi....... fani bilan hamkorlik qiladi?",
    "answer": "Falsafa",
    "noAnswer1": "Sosiologiya",
    "noAnswer2": "Psixologiya",
    "noAnswer3": "Mantiq "
  },
  {
    "question": "Insonning jamiyatdagi o'rni, ijtimoiy muhitning shaxs rivojlanishi va tarbiyasiga ta'sirini o'rgatishda pedagogika qaysi bilan hamkorlik qilmoqda?",
    "answer": "sosiologiya, siyosatshunoslik",
    "noAnswer1": "falsafa, mantiq",
    "noAnswer2": "psixologiya, fiziologiya",
    "noAnswer3": "pedagogika, fiziologiya"
  },
  {
    "question": "Pedagogikaning bosh masalasi tarbiyadir. Tarbiyadagi keng ma'no ................. bilan bog'langan holda barkamol insonni voyaga etkazishdir.",
    "answer": "bola etaklovchi",
    "noAnswer1": "nazariy va amaliy materiallar",
    "noAnswer2": "ta'lim, rivojlanish",
    "noAnswer3": "ma'lumot, tarbiya"
  },
  {
    "question": "Ko'zi ojiz tarbiyalanuvchilar ta'lim-tarbiyasi bilan shug'ullanuvchi fan qaysi?",
    "answer": "Tiflopedagogika",
    "noAnswer1": "Surdopedagogika",
    "noAnswer2": "Oligofrenopedagogika",
    "noAnswer3": "Ordopedagogika"
  },
  {
    "question": "Ta'lim usullarini tanlash bilan bir katorda o'qituvchi darsdagi talabalarni yosh va individual xarakter xususiyatlarini o'rganishi hamda tahlil qilishi shart. Qaysi usul asosan ta'lim-tarbiya jarayoniga aloqador ilmiy faraz yoki amaliy ishlarning tatbiqi jarayonlarini tekshirish, aniqlash maqsadida o'tkaziladi",
    "answer": "Eksperiment-tajriba-sinov usuli",
    "noAnswer1": "Test sinovlar usuli",
    "noAnswer2": "Matematika va kibernetika usullari",
    "noAnswer3": "Test - surov metodi"
  },
  {
    "question": ".............– bu yosh avlodni hayotga, mehnatga tayyorlash uchun xalq oldida, davlat oldida javob beradigan, yosh avlodga ta'lim-tarbiya berish uchun maxsus tayyorlangan mutaxassislarning mehnat faoliyati",
    "answer": "Pedagogik faoliyat",
    "noAnswer1": "Pedagogik qobiliyat",
    "noAnswer2": "Pedagogik mahorat",
    "noAnswer3": "Pedagogik jarayon"
  },
  {
    "question": "Shaxsning faolliyatini yo'naltirib turadigan va mavjud vaziyatlarga nisbatan bog'liq bo'lmagan barqaror motivlar majmuyi ................ deb ataladi",
    "answer": "kishi shaxsining yo'naltirilganligi",
    "noAnswer1": "kishining motivasiya xolati",
    "noAnswer2": "kishining qiziqish yo'nalishi",
    "noAnswer3": "kishining faoliyat yo'nalishi"
  },
  {
    "question": "\"Milliy mafkura - bu xalqning, millatning o'tda yonmaydigan, suvda cho'kmaydigan o'lmas ......”",
    "answer": "e'tiqodidir",
    "noAnswer1": "iymonidir",
    "noAnswer2": "ma'naviyatidir",
    "noAnswer3": "madaniyatidir"
  },
  {
    "question": "......................    - tadqiqotchining boshqa kishilardan pedagogik tajribaning biror tomoni yoki hodisalari haqida axborot olish jarayoni bu metodning asosini tashkil qiladi.",
    "answer": "Pedagogik so'rash metodi",
    "noAnswer1": "Test sinovlar metodi",
    "noAnswer2": "Eksperiment-tajriba-sinov usuli",
    "noAnswer3": "Kuzatish metodi"
  },
  {
    "question": "................ - maxsus tayyorlangan kishilar rahbarligida o'tkaziladigan, o'quvchilarni bilim, ko'nikma va malakalar bilan qurollantiradigan, bilim, qobiliyatlarini o'stiradigan, ularning dunyoqarashini tarkib toptiradigan jarayondir",
    "answer": "Ta'lim",
    "noAnswer1": "Tarbiya",
    "noAnswer2": "Ko'nikma",
    "noAnswer3": "Bilim "
  },
  {
    "question": ".............– ma'naviy manbalar va xozirgi zamon talablari va extiyojlarini nazarda tutgan xolda, o'qituvchining o'quvchi bilan aniq bir maqsadga qaratilgan o'zaro amaliy va nazariy muloqotidir",
    "answer": "Tarbiya ",
    "noAnswer1": "Ko'nikma",
    "noAnswer2": "Bilim ",
    "noAnswer3": "Ta'lim"
  },
  {
    "question": "Ong va faoliyat birligi printsipi dastavval ....... tomonidan isbotlab berilgan. Muallif tashqi sabablar, omillar ichki shart sharoitlarining bevosita ta'siri orqali xarakat qiladi - deb tushuntiradi.",
    "answer": "S.L.Rubinshteyn",
    "noAnswer1": "P.Ya.Galperin",
    "noAnswer2": "Yan Amos Komenskiy",
    "noAnswer3": "D.B.Elkonin"
  },
  {
    "question": "Pedagogning kishilar bilan qiska muddatda muloqot o'rnata olishi, ular bilan muloqot o'rnatishga bo'lgan doimiy intilishi.?\n",
    "answer": "Pedagogning kommunikativ madaniyati",
    "noAnswer1": "Pedagog nuqtai nazari (pozisiya)",
    "noAnswer2": "Pedagogik faoliyat",
    "noAnswer3": "Pedagog va talaba"
  },
  {
    "question": "Pedagogning kommunikativ madaniyati bu?\n\n",
    "answer": "pedagogning kishilar bilan qisqa muddatda muloqot o'rnata olishi, ular bilan muloqot o'rnatishga bo'lgan doimiy intilishi",
    "noAnswer1": "pedagogning dunyoga, pedagogik voqelikka va pedagogik jarayonga bo'lgan intellektual va xissiy munosabati",
    "noAnswer2": "o'qituvchining ob'ektivlik mezoni, uning ma'naviy tayyorgarlik darajasi",
    "noAnswer3": "Pedagogik jarayonda ta'lim maqsadlarini amalga oshirish "
  },
  {
    "question": "Lug'aviy jihatdan \"interfaol\" tushunchasi qanday ma'nosini anglatadi?",
    "answer": "\"o'zaro harakat qilmoq\";",
    "noAnswer1": "\"o'zaro fikr almashmoq",
    "noAnswer2": "\"o'zaro yordam bermoq\";",
    "noAnswer3": "\"o'zaro kelishib olmoq\"."
  },
  {
    "question": "Talabalarning bilim, ko'nikma, malaka va muayyan axloqiy sifatlarni o'zlashtirish yo'lidagi o'zaro harakatlarini tashkil etishga asoslanuvchi ta'lim qanday nomlanadi?",
    "answer": "muammoli ta'lim;",
    "noAnswer1": "rivojlantiruvchi ta'lim;",
    "noAnswer2": "dasturiy ta'lim;",
    "noAnswer3": "interfaol ta'lim."
  },
  {
    "question": "Pedagog so'zining ma'nosi qanday?",
    "answer": "Bola etaklovchi   ",
    "noAnswer1": "Ta'lim beruvchi",
    "noAnswer2": "Bolani tarbiyalovchi   ",
    "noAnswer3": "O'qituvchi"
  },
  {
    "question": "Talabalar bilan tarbiyaviy ishda foydalaniladigan vositalarni toping",
    "answer": "Televidenie, radio, shaxslar jalb qilinadigan faoliyat turlari",
    "noAnswer1": "O'quv muassasalari, Internet, tadbirlar o'tkaziladigan klublar",
    "noAnswer2": "Televidenie, kitoblar, darsdan tashqari shaxsiy ishlar",
    "noAnswer3": "Videokurslar, tadbirlar, o'quv kurslari, tashqi ta'sirlar"
  },
  {
    "question": "Yoshlar ongini shakllantirish usullariga qaysilar kiradi?",
    "answer": "tushuntirish, suhbat va o'rnak ko'rsatish",
    "noAnswer1": "darsdan tashqari suxbatlar olib borish ishlari",
    "noAnswer2": "atrofdagi voqealar, hulq atvor",
    "noAnswer3": "hulq atvor, davlatning ichki va tashqi siyosati"
  },
  {
    "question": "..... - deganda biz shaxsning ham jismoniy, ham aqliy va ma'naviy kamol topish jarayonini tushunamiz",
    "answer": "rivojlanish",
    "noAnswer1": " tarbiya",
    "noAnswer2": "bilim",
    "noAnswer3": "ma'naviyat"
  },
  {
    "question": "Shaxs shakllanishining psixologik mexanizmlari ..........  fikricha, shaxsning shakllantirish asosiy mexanizmlariga motivni maqsadga qarab ko'chirish, ijtimoiy rollarni qiyoslab o'xshatish (identifikasiya qilishi) ular tartibsiz mexanizmlar bo'lib xisoblanadi",
    "answer": "Yu.B. Gippenreyter",
    "noAnswer1": "Yan Amos Komenskiy",
    "noAnswer2": "P.Ya.Galperin",
    "noAnswer3": "S.Ushinskiy"
  },
  {
    "question": ".........– hulqning asosiy anglanilgan motivi. U butun shaxs faoliyatiga alohida mazmun va aniq yo'nalish baxsh etadi",
    "answer": "e'tiqod",
    "noAnswer1": "motivasiya",
    "noAnswer2": "extiyoj",
    "noAnswer3": "madaniyat"
  },
  {
    "question": "Pedagogikaning aniq masalalarini ishlab chiqishda qaysi fanlarga suyanadi?",
    "answer": "falsafa, sotsiologiya, etika, estetika",
    "noAnswer1": "yoshlar pedagogikasi, oila pedagogikasi",
    "noAnswer2": "falsafa, mantiq, tarix",
    "noAnswer3": "psixologiya, fiziologiya,mantiq"
  },
  {
    "question": "Shaxsning rivojlanishi jarayoni bir qancha omillar ta'sirida sodir bo'ladi. Bular:",
    "answer": "irsiyat, muhit, ta'lim va tarbiya, shaxs faolligi",
    "noAnswer1": "tashqi muhit, oila, Internet, klublar",
    "noAnswer2": "ta'lim va tarbiya, irsiyat, tadbirlar",
    "noAnswer3": "Televidenie,darsdan tashqari shaxsiy ishlar"
  },
  {
    "question": "Shaxsiy fazilat nima?\n",
    "answer": "Shaxs tomonidan o'zining ahloqiy ruhiy va ishchanlik qobiliyatining anglay olish hususiyati",
    "noAnswer1": "Shaxs amal qiladigan bilim tamoyil va ideallarning haqqoniyligiga qalban subektiv munosabati",
    "noAnswer2": "Insonning xayot tajribaga asoslangan munosabat turlarini xisobga olishishmiz mumkin",
    "noAnswer3": "Individning biror narsa hodisaga muhtojligi kurishimiz mumkin bo'ladi"
  },
  {
    "question": "Estetik tarbiya nima?\n",
    "answer": "Go'zallikini his qilish go'zallikni payqay olish qobiliyatini tarbiyalash",
    "noAnswer1": "Individning biror narsaga muhtojligi go'zalligini misol qilish olamiz ",
    "noAnswer2": "Tasodifiylik xaqidagi tasavvurni guzallikaa, mantiqqa bog'lash",
    "noAnswer3": " Tadqiqot obektiv to'grisida har tomonlama tasavvur hosil qilish"
  },
  {
    "question": "O'qituvchining inovasion faoliyati nima?\n",
    "answer": "Ijodiy imkoniyatni aks ettirish kundalik faoliyatdan chetga chiqish",
    "noAnswer1": "Yangi innovasion tehnologiyalar bilan iishlash",
    "noAnswer2": "Individual o'qitish qobiliyati rivojlantirish usullari",
    "noAnswer3": " Masofaviy ta'lim texnologiyalaridan kelib chiqqib dars olib borish"
  },
  {
    "question": "Faoliyat nima?\n",
    "answer": "Ongli maqsad bilan boshqariladigan ichki va tashqi faolligi",
    "noAnswer1": "Insonning atrof-muhitga bo'lgan ta'siri ",
    "noAnswer2": "Bilim ko'nikma va tajriba kelib chiqib ishlash",
    "noAnswer3": "Shaxs psihikasi motivlarining shakllanishi"
  },
  {
    "question": "Individual o'qitish usulini, ya'ni ma'ruza tinglashni, kitob o'qishni va yozma vazifalarni bajarishni yoqtiridigan o'quvchi .",
    "answer": " introvert-o'quvchi",
    "noAnswer1": "ekstravert-o'quvchi",
    "noAnswer2": " ekstremal – o'quvchi",
    "noAnswer3": "o'qituvchi-o'quvchi"
  },
  {
    "question": "Tushuncha nima?\n\n",
    "answer": "Atrof - muhitda hodisa predmetlarining muhim hususiyatlari ular orasidagi munosabatlarini bilish",
    "noAnswer1": "Shaxs hayotining muayyan davrdagi psihik rivojlanishini nazarda tutadi",
    "noAnswer2": "Insonnig atrof muhitga munosabatini o'rganish orqali munosabatlarni o'rganish ",
    "noAnswer3": "Insonning anglay bilish qobiliyati shakllantirish orqali ish uslubini olib borish"
  },
  {
    "question": "Pedagog nuqtai nazari....\n",
    "answer": " Pedagogning dunyoga,pedagogik voqelikka intellektual va hissiy munosabati",
    "noAnswer1": "pedagogning shaxsiy fikrlashini xisobga olgan xolda ish olib borish",
    "noAnswer2": "Pedagogning aqliy faoliyatini rivojlantirib reja tuzish ishlash",
    "noAnswer3": "Pedagogning dunyoqarashi fikrlash doirasi e'tiborga olib munosabatlarini rivojlantirish"
  },
  {
    "question": "Tarbiya nima?\n\n",
    "answer": "Shaxsning ma'naviy va jismoniy holatga muntazam maqsadga muvofiq ta'sir etish",
    "noAnswer1": "biror harakat fikrni takrorlash orkali ta'lim tarbiya masalasini rivojlantirish ",
    "noAnswer2": "Ta'lim maqsadlarini amalga oshirishga qaratilgan fikrlar",
    "noAnswer3": " ta'limning yo'nalishlaridan birini tanlab faoliyat olib borishdir"
  },
  {
    "question": "Iborani to'ldiring ... \"Yomon o'qituvchi bilimlarni aytib beradi, yaxshi o'qituvchi esa ...”",
    "answer": "uni topishga ko'maklashadi",
    "noAnswer1": " tushuntirib beradi ",
    "noAnswer2": "vazifa qilib beradi",
    "noAnswer3": "kamsitadi"
  },
  {
    "question": "Bir-biri bilan aloqador bo'lgan elementlar to'plami nima deyiladi?",
    "answer": "tizim",
    "noAnswer1": "tizimli yondashuv",
    "noAnswer2": "faoliyat",
    "noAnswer3": " to'plam"
  },
  {
    "question": "Pedagogik tizim markazida kim turadi?",
    "answer": " o'qituvchi va o'quvchi",
    "noAnswer1": "rahbar va pedagog",
    "noAnswer2": "rahbar",
    "noAnswer3": "xodimlar"
  },
  {
    "question": "Pedagogik sharoitlar qaysilar?",
    "answer": "ta'limiy, tarbiyaviy, tashkiliy",
    "noAnswer1": "iqtisodiy, ijtimoiy, siyosiy",
    "noAnswer2": "moddiy, tashkiliy, psixologik",
    "noAnswer3": " moddiy, ma'rifiy, psixologik"
  },
  {
    "question": "O'z faoliyatiga tuzatish kiritish qaysi pedagogik faoliyatga kiradi?",
    "answer": "refleksiv",
    "noAnswer1": " kommunikativlik",
    "noAnswer2": "tashkilotchilik",
    "noAnswer3": "bashorat qila olish"
  },
  {
    "question": "Insonning kasbiy faoliyatdagi etukligini aniqlovchi sifatlar?",
    "answer": "maxsus, ijtimoiy, shaxsiy, individual ",
    "noAnswer1": "kasbiy, ijtimoiy, individual",
    "noAnswer2": " maxsus, shaxsiy, kasbiy, amaliy",
    "noAnswer3": "moddiy, ijtimoiy, iqtisodiy"
  },
  {
    "question": "Kasbiy professionalizmning eng yuqori cho'qqisi –",
    "answer": "pedagogik mahorat",
    "noAnswer1": " pedagogik faoliyat",
    "noAnswer2": " kasbiy taraqqiyotini loyihalay olish",
    "noAnswer3": " kasbiy muloqot uslublarini bilish"
  },
  {
    "question": "Pedagogika faninning «Didaktika» ta’lim nazariyasi qismi qaysi kadimiy lotincha so‘z nomi bilan aytiladi",
    "answer": "O'qituvchi",
    "noAnswer1": "Tarbiyachi",
    "noAnswer2": "Etaklovchi",
    "noAnswer3": "Murabbiy"
  },
  {
    "question": "Tolerantlik – bu ...",
    "answer": "diniy bag'rikenglik",
    "noAnswer1": "bo'ysunuvchanlik",
    "noAnswer2": " bardoshli bo'lish",
    "noAnswer3": "sabr-toqatli bo'lish"
  },
  {
    "question": "Kreativlik – bu",
    "answer": "shaxsning ijodga nisbatan umumiy qobiliyati",
    "noAnswer1": " pedagogik jarayonni qurish",
    "noAnswer2": "talabalarga nisbatan sabr-toqatli bo'lish ",
    "noAnswer3": "zarur axborotlarni tahlil qilish qobiliyati"
  },
  {
    "question": " Pedagog ixtiyorida bo'lgan eng kuchli vosita nima?",
    "answer": " Shaxsiy namuna",
    "noAnswer1": " Pedagogik maxorat ",
    "noAnswer2": "Pedagogik texnologiya",
    "noAnswer3": "Nutk"
  },
  {
    "question": "...  - faoliyat jarayonida paydo bo'ladi va rivojlanadi. ... malaka va uddaburonlikdan farq qiladi",
    "answer": "qobiliyat",
    "noAnswer1": "bilim",
    "noAnswer2": "ko'nikma",
    "noAnswer3": "faoliyat"
  },
  {
    "question": "Tabiiyki, milliy tafakkur rivojining tamal toshi ona tilidir. Ona tiliga muxabbat, ona tilida sobitlik milliy tafakkur parvozini muntazam ta'min etadigan ...........",
    "answer": "muqaddas tuyg'ulardir",
    "noAnswer1": "beqiyos tuyg'udir",
    "noAnswer2": "onalik tuyg'usidir",
    "noAnswer3": "Vatan tuyg'usidir"
  },
  {
    "question": "Ilmiy tushuncha sifatida \"........\"so'zi keng ma'noda muayyan maqsadga erishish yo'lini, tor ma'noda - tabiat va ijtimoiy xayot xodisalari va qonuniyatlarini bilish maqsadida qandaydir vazifani xal etish usulini bildiradi",
    "answer": "metod",
    "noAnswer1": "ma'naviyat",
    "noAnswer2": "texnologiya",
    "noAnswer3": "qobiiliyat"
  },
  {
    "question": ".......– o'quvchining ichki dunyosiga kira olish qobiliyati, o'quvchi shaxsini va uning ruhiy holatlarini juda yaxshi tushuna bilish bilan bog'liq bo'lgan psixologik kuzatuvchanlikdir.",
    "answer": "Kuzatuvchanlik qobiliyati",
    "noAnswer1": "Tushuntira olish qobiliyati",
    "noAnswer2": "Bilish qobiliyati",
    "noAnswer3": "Tinglay olish qobiliyati"
  },
  {
    "question": "Hissiyot - bu ....",
    "answer": "kishining tevarak atrofdagi narsa va hodisalarga bulgan munosabatlarini kechinishi",
    "noAnswer1": "kishining emosiyasi boshqara olishni rivojlantirish",
    "noAnswer2": "ichki a'zolardagi anik xarakat va uzgarishlarni anglash",
    "noAnswer3": "kishining extiyojlarga bulgan uz munosabatlari farqlay olish  "
  },
  {
    "question": " Iroda – bu ....",
    "answer": "shaxsning maksadga erishish yulidagi jismoniy va ruhiy kiyinchiliklarini engishi",
    "noAnswer1": "kishilarning ixtiyoriy xarakatlari yigindisini olishimiz mumkin",
    "noAnswer2": "shaxsning yashash tartibi va sharoitlari bilan belgilanadigan aktivligi",
    "noAnswer3": "kishining ixtiyorsiz xarakatlari yigindisini rivojlantirish"
  },
  {
    "question": "Temperament – bu …",
    "answer": " kishining nerv sistemasi xolati bulib, odamlarga va xayot sharoitiga bulgan munosabatlarining yakka xususiyatlari",
    "noAnswer1": "Kishining uzini tuta olmasligi xaqidagi xarakterlarni o'rganadi",
    "noAnswer2": "Shaxs faoliyati va ulqining dinamik o'zgaruvchan) va emosional-hissiy tomonlarini xarakterlovchi individual xususiyatlar ",
    "noAnswer3": "shaxs faoliyati va xulkining dinamik xususiyatlari yigindisini \nolishimiz mumkin"
  },
  {
    "question": "Xarakter – bu …",
    "answer": "Shaxsdagi shunday psixologik, sub'ektiv munosabatlar majmuiki, ular uning borliqqa, odamlarga munosabatini ifodalaydi",
    "noAnswer1": "Kishining xulk atvorida namoyon buladigan tugma xususiyatlari",
    "noAnswer2": "Kishining oliy nerv sistemasi bilan boglanmagan xolda shakllanadigan psixik xususiyatlari",
    "noAnswer3": "Kishining fe'l-atvoridan kelib chiqqan xolda o'z-o'ziga munosabatini ifodalaydi"
  },
  {
    "question": "Pedagogik psixologiya nimani o'rganadi?",
    "answer": "kishiga ta'lim -tarbiya berishning psixologik qonuniyatlarini o'rganadi",
    "noAnswer1": "tafakkurning shakllanishini o'rganadi",
    "noAnswer2": "pedagog bilan ukuvchilar urtasidagi munosabatni o'rganadi",
    "noAnswer3": "psixik rivojlanishdan orkada kolish sabablarini o'rgandi"
  },
  {
    "question": "Psixologiya fanining asosiy vazifalari.",
    "answer": "psixik hodisalar moxiyati va qonuniyatini o'rganish",
    "noAnswer1": "psixik kasalliklarning sababini o'rganish",
    "noAnswer2": "oliy nerv faoliyatini o'rganish",
    "noAnswer3": "psixika tabiatini o'rganish"
  },
  {
    "question": "Psixologiya kaysi fanlar bilan kuprok alokador.",
    "answer": "jamiyatshunoslik, tabiiy fanlar, pedagogika, falsafa",
    "noAnswer1": "fizika, kimyo, matematika, mantiq",
    "noAnswer2": "tilshunoslik, xukukshunoslik, iktisodiyot",
    "noAnswer3": "zoologiya, kosmonavtika, xorijiy tillar"
  },
  {
    "question": "Extiyoj – bu …",
    "answer": "odamning xayot va tarakkiyoti uchun zarur extiyojlarni his etish xolati ",
    "noAnswer1": "ma'lum xatti xarakatlarning zarurligini anglash",
    "noAnswer2": "odamning biologik extiyojlarini anglashi",
    "noAnswer3": "kishining moddiy boyliklarga extiyojini anglashi"
  },
  {
    "question": "Motiv – bu …",
    "answer": "anglangan,anglanmagan xarakat bulib,extiyojning sub'ektiv ifodasi",
    "noAnswer1": "extiyojni kondirishga moyillikning ifodasi xisoblanadi",
    "noAnswer2": "anglanilmagan xatti-xarakatlar istagini olishimiz mumkin",
    "noAnswer3": "uzok maksadlar bilan boglik bulmagan niyatlarni rivojlantirish"
  },
  {
    "question": "Malaka – bu …",
    "answer": "takrorlash natijasida paydo buladigan ish xarakatlarini avtomatlashgan usullaridir",
    "noAnswer1": "u yoki bu xildagi faoliyatga kiruvchi anglanmagan ish xarakatdir faoliyatlaridir ",
    "noAnswer2": "murakkab faoliyatni bajarishga tayyorgarlik natijasidagi usullardir",
    "noAnswer3": " takrorlanadigan ish xarakatlarni rivojlantirish usullaridir"
  },
  {
    "question": "Shaxs xulq-atvorini ichkaridan, ichki psixologik sabablar tufayli boshqarish odatda nima deyiladi?",
    "answer": "Shaxsiy ichki boshqaruv",
    "noAnswer1": "Ijtimoiy ehtiyojlar",
    "noAnswer2": "Mexnat qilish",
    "noAnswer3": "Jismoniy boshqarish"
  },
  {
    "question": " Tarbiya nima?",
    "answer": "Ma'naviy manbalar va hozirgi zamon talablari va ehtiyojlarini nazarda tutgan holda, o'qituvchining o'quvchi bilan aniq bir maqsadga qaratilgan o'zaro amaliy va nazariy muloqotidir",
    "noAnswer1": "Bu - mehnatqilish, bilish, estetik va ahloqiy-ma'naviy ehtiyojlar, qayd qilish mumkin bo'lgan harakatlarimiz,maqsadga qaratilgan o'zaro amaliy va nazariy muloqotidir",
    "noAnswer2": "Bu faoliyat turi bilan shug'ullanishiga majbur qilgan psixologik omillar, o'z ichki istak-xoxishlarimiz ta'sirida bevosita ko'rish orqali namoyon bo'ladigan faollik.",
    "noAnswer3": "Bu tashqaridan va o'z ichki istak-xoxishlarimiz ta'sirida bevosita ko'rish, qayd qilish mumkin bo'lgan harakatlarimiz, mushaklarimizning harakatlari orqali namoyon bo'ladigan faollik."
  },
  {
    "question": "Aniq maqsadga qaratilgan tarbiya jarayoni necha tamoyilga asoslanadi?",
    "answer": "Ta'limiy, Tarbiyaviy, Rivojlantiruvchi",
    "noAnswer1": "Ta'limiy, Yo'naltiruvchi, Yetaklovchi",
    "noAnswer2": "Yo'naltiruvchi, Yetaklovchi, Bog'lovchi, ",
    "noAnswer3": "Etaklovchi, Bog'lovchi, Rivojlantiruvchi"
  },
  {
    "question": "Muloqot nima?",
    "answer": "Shaxs individual rivojlanishi jarayonida namoyon bo'ladigan birlamchi faoliyat turlaridan biri",
    "noAnswer1": "Shunday faoliyat turiki, u bevosita biror moddiy yoki ma'naviy mehnatlar yaratishni nazarda tutadi",
    "noAnswer2": "Narsa va xodisalarning mohiyati va mazmuniga aloqador materialning eslab qolinishi, esga tushirilishi hamda esda saqlab qolish",
    "noAnswer3": "O'zaro suhbat jarayonidagi holat"
  },
  {
    "question": "Metod, ya'ni usul axborotni uzatish va qabul qilish xarakteriga qarab qanday usullarga bo'linadi?",
    "answer": "So'z orqali ifodalash usuli, ko'rgazmalilik usuli, amaliy, namuna usuli, rag'batlantirish, jazo.",
    "noAnswer1": "Faoliyat turi bilan shug'ullanishiga majbur qilgan psixologik omillar",
    "noAnswer2": "Narsa va xodisalarning mohiyati",
    "noAnswer3": "Ijtimoiy ehtiyojlar"
  },
  {
    "question": "Tarbiyachining rag'batlantirish usuli nechaga bo'linadi:",
    "answer": "Ikkiga",
    "noAnswer1": "To'rtga",
    "noAnswer2": "Oltiga",
    "noAnswer3": "Uchga"
  },
  {
    "question": "Jazo – bu....",
    "answer": "Noto'g'ri bajarilgan ishga beriladigan aks javob",
    "noAnswer1": "Noto'g'ri qilgan ishiga o'zini iqror qildirish",
    "noAnswer2": "Aybini tan olmaslik",
    "noAnswer3": "Qilgan ishiga yarasha javob berishi"
  },
  {
    "question": "Tarbiyalanganlik –deganda nimani tushunasiz?",
    "answer": "Milliy urf-odatimiz mezoniga kirmagan, o'zgalarning nafratini qo'zg'atadigan xatti-harakatlardan o'zini tiyabilish",
    "noAnswer1": "O'ziga baho berish",
    "noAnswer2": "O'zgalarning fikrini amalda qo'llash",
    "noAnswer3": "Noto'g'ri qilgan ishiga o'zini iqror qildirish"
  },
  {
    "question": "Ta'lim xakidagi konun nechta bob va nechta moddadan iborat",
    "answer": "5 - bob va 34 modda",
    "noAnswer1": "3 - bob va 37 modda ",
    "noAnswer2": "7 - bob va 30 modda",
    "noAnswer3": "4 - bob va 20 modda"
  },
  {
    "question": "Komillik bosqichlarini ko'rsating.",
    "answer": "Jismoniy salomatlik, axloqiy poklik, aqliy etuklik",
    "noAnswer1": "Axloqiy qilingan ishlar",
    "noAnswer2": "O'ziga baho berish",
    "noAnswer3": "Ongrivojlanishi"
  },
  {
    "question": "His-tuyg'ular nimalarda aks etmaydi?",
    "answer": "Ichki a'zolarni faoliyatida     ",
    "noAnswer1": "Pantomimikada",
    "noAnswer2": "Mimikada     ",
    "noAnswer3": "San'at, musiqada"
  },
  {
    "question": "Jazolash ... .",
    "answer": " ma'lum xulq-atvor shakllariga to'sqinlik qiladi.",
    "noAnswer1": "tashabbuskorlik harakat shakllarini keltirib chiqaradi;",
    "noAnswer2": "xulq-atvorni shakllantiradi, o'zgartiradi;",
    "noAnswer3": "salbiy xulk-atvor shaklini mustaxkamlash;"
  },
  {
    "question": "Pedagogikaning asosiy tushunchalari",
    "answer": "ta'lim, tarbiya, ma'lumot,  ",
    "noAnswer1": "pedagogik mulokot, ma'naviyat ",
    "noAnswer2": "ta'lim, ilm, malaka, ko'nikma ",
    "noAnswer3": "ilm, ma'rifat, madaniyat "
  },
  {
    "question": "Inson ichki mexanizmlarini nima o'rganadi?",
    "answer": " Tarbiya",
    "noAnswer1": "Bilim",
    "noAnswer2": "Ta'lim",
    "noAnswer3": "Sharoit"
  },
  {
    "question": "Inson psixik taraqqiyotiga ta'sir etuvchi kuchlar nimalardan iborat?",
    "answer": " inson nerv sistemasining xususiyatlari, qobiliyat kurtaklari",
    "noAnswer1": "insondagi tug'ma mayllarning rivojlanishi",
    "noAnswer2": "miya biologik, organik yetilishi",
    "noAnswer3": "Ijtimoiy muhit sabablari"
  },
  {
    "question": "Intelekt o'lchamini aniqlang",
    "answer": " Verbal, miqdoriy, fazoviy",
    "noAnswer1": "Verbal, noverbal, lingvistik",
    "noAnswer2": "Mantiq, xotira, xayol",
    "noAnswer3": "Fazoviy, davriy, kretiv "
  },
  {
    "question": "Ma'lum bir davrlarda jismoniy qiyofasi va psixikasida keskin o'zgarishlar sodir bo'ladi. Bu qaysi davrga to'g'ri keladi? ",
    "answer": " o'smirlik",
    "noAnswer1": "ilk bolalik",
    "noAnswer2": "ilk o'spirinlik",
    "noAnswer3": "chaqaloqlik"
  },
  {
    "question": "Necha yoshdan bolalar o'zini kattalar bilan taqqoslaydi. ",
    "answer": " 4 yoshdan",
    "noAnswer1": "3 yoshdan",
    "noAnswer2": "5 yoshdan",
    "noAnswer3": "2 yoshdan"
  },
  {
    "question": "Pedagogik psixologiyada qo'llaniladigan metodlar:",
    "answer": " kuzatish va o'qitish birligi;",
    "noAnswer1": "ong va faoliyat birligi;",
    "noAnswer2": "o'qitish qonuniyatlari;",
    "noAnswer3": "o'qishning asosiy qonuniyatlari;"
  },
  {
    "question": "Psixikaning rivojlanish manbalari nimalar?",
    "answer": " ijtimoiy muhit, irsiyat, ta'lim – tarbiya",
    "noAnswer1": "oila, maktab, jamiyat",
    "noAnswer2": "yashash joyi, atrofdagi do'stlar davrasi",
    "noAnswer3": "o'qish va mehnat jarayoni"
  },
  {
    "question": "Talabalarda aqliy zo'riqishning negizi deb nimalarni hisoblaysiz?",
    "answer": "yaqin dugonalari yoki befarq bo'lmagan odamining hiyonati ",
    "noAnswer1": "aqliy mehnatda kuch va imkoniyatlarni bir tekis taqsimlay olmaslik",
    "noAnswer2": "o'quv faoliyatining to'g'ri usullarini bilmasligi, ",
    "noAnswer3": "aqliy bilimlarning yetishmasligi, dars mazmun – mohiyatini tushunmaslik"
  },
  {
    "question": "Tarbiya psixologiyasining predmeti nima?",
    "answer": "shaxsning odob-axloq, dunyoqarash va e'tiqodini shakllantirishda bolalar faoliyatini maqsadli yo'naltirish",
    "noAnswer1": "Sistemali o'qitish sharoitida bilim faoliyatini rivojlantirishning usullaridan foydalanish",
    "noAnswer2": "prfessional pedagogik faoliyatining shakllantirishning psixologik aspektlarini o'rganish",
    "noAnswer3": "ta'lim-tarbiya insonnning shaxs sifatida rivojlanishining psixologik qonuniyatlarini o'rganish"
  },
  {
    "question": "Tarbiya turlarining eng ko'p tarqalgan klassifikatsiyasi qaysi?",
    "answer": "Aqliy, mehnat, jismoniy ",
    "noAnswer1": "Ahloqiy, siyosiy, jismoniy ",
    "noAnswer2": "Avtoritar, erkin, demokratik",
    "noAnswer3": "Fuqorolik, jamoviy, kommunikativ"
  },
  {
    "question": "O'z-o'zini tarbiyalash zerikarli bo'lib qolmasligi uchun A.S.Makarenko qanday maslaxat bergan?",
    "answer": " Istiqbolli rejani tushuntirishni",
    "noAnswer1": "Individual yondashishni",
    "noAnswer2": "Ayrim xususiyatlar tark etishni",
    "noAnswer3": "Ta'sir usullaridan foydalanishni"
  },
  {
    "question": "Komil inson sifatlari",
    "answer": "Akliy, jismoniy, ma'naviy etukligi",
    "noAnswer1": "Zexn utkirligi, etukligi",
    "noAnswer2": "Iktidorliligi va madaniyatliligi",
    "noAnswer3": "ukish zexnining tezligi"
  },
  {
    "question": "Shaxsni o'z-o'zini tarbiyalash jarayoni qanday kechadi?",
    "answer": " Muhit bilan faol munosabatda",
    "noAnswer1": "Individual holda",
    "noAnswer2": "Muhitdan ajralgan holda",
    "noAnswer3": "Biologik omillar asosida"
  },
  {
    "question": "Shaxsning o'z xatti-harakatlari, bilimlari, imkoniyatlari, malakalariga nisbatan sub'ektiv munosabati...",
    "answer": " Iqtidor ",
    "noAnswer1": "Iste'dod ",
    "noAnswer2": "Layoqat ",
    "noAnswer3": "daholik"
  },
  {
    "question": "Inson faolligi qanday tushunchalar bilan chambarchas bog'liq?",
    "answer": "Xarakat, faol, xulq",
    "noAnswer1": "O'qish bilish, ko'rish",
    "noAnswer2": "Ong, tafakkur, bilim",
    "noAnswer3": "Tashabbuskorlik, sport"
  },
  {
    "question": "Chaqaloqning inson zotiga mansubligini tasdiqlaydigan fakt qanday tushuncha bilan nomlanadi?",
    "answer": "individ",
    "noAnswer1": "individuallik",
    "noAnswer2": "shaxs",
    "noAnswer3": "yo'nalganlik"
  },
  {
    "question": "O‘qituvchi pedagogik texnikasining muhim malakalaridan biri uning …….. texnikasidir",
    "answer": "Nutqi, tempi, diksiyasi, ovoz butunligi",
    "noAnswer1": "kasbkorlik malakalari, talablar qo'ya olishi",
    "noAnswer2": "kiyinish madaniyati, ijodiy ishlari",
    "noAnswer3": "muomala madaniyati, kiyinish madaniyati"
  },
  {
    "question": "Motivatsiya nima?",
    "answer": "Inson xulq-atvori, uning bog'lanishi, yo'nalishi va faolligiga undovchi kuch.",
    "noAnswer1": "Uning jarayonida bilimlar, malaka va turli ko'nikmalar o'zlashtiriladi",
    "noAnswer2": "Shaxs individual rivojlanishi jarayonida namoyon bo'ladigan birlamchi faoliyat turlaridan biri.",
    "noAnswer3": "Ongrivojlanishiningbosqichlari."
  },
  {
    "question": "Konkret odamni boshqa bir konkret odamdan farqlovchi barcha o'ziga xos\n xususiyatlar majmui nima deb ataladi?",
    "answer": "individuallik",
    "noAnswer1": "qobiliyat",
    "noAnswer2": "iqtidor",
    "noAnswer3": "iste'dod"
  },
  {
    "question": "Ko'zi ojiz tarbiyalanuvchilar ta'lim-tarbiyasi bilan shug'ullanuvchi fan qaysi?",
    "answer": "Tiflopedagogika",
    "noAnswer1": "Surdopsixologiya",
    "noAnswer2": "Oligofrenopedagogika",
    "noAnswer3": "Surdopedagogika"
  },
  {
    "question": ".............– bu yosh avlodni hayotga, mehnatga tayyorlash uchun xalq oldida, davlat oldida javob beradigan, yosh avlodga ta'lim-tarbiya berish uchun maxsus tayyorlangan mutaxassislarning mehnat faoliyati",
    "answer": "Pedagogik faoliyat",
    "noAnswer1": "Pedagogik mahorat",
    "noAnswer2": "Pedagogik qobiliyat",
    "noAnswer3": "Pedagogik so'zlashuv"
  },
  {
    "question": "Shaxsning faolliyatini yo'naltirib turadigan va mavjud vaziyatlarga nisbatan bog'liq bo'lmagan barqaror motivlar majmuyi ................ deb ataladi",
    "answer": "kishi shaxsining yo'naltirilganligi",
    "noAnswer1": "motivatsiya",
    "noAnswer2": "qiziqish",
    "noAnswer3": "ehtiyoj"
  },
  {
    "question": "\"Milliy mafkura - bu xalqning, millatning o'tda yonmaydigan, suvda cho'kmaydigan o'lmas ......”",
    "answer": "e'tiqodidir",
    "noAnswer1": "ma'naviyatidir",
    "noAnswer2": "iymonidir",
    "noAnswer3": "ehtiyojidir"
  },
  {
    "question": "......................    - tadqiqotchining boshqa kishilardan pedagogik tajribaning biror tomoni yoki hodisalari haqida axborot olish jarayoni bu metodning asosini tashkil qiladi",
    "answer": "Pedagogik so'rash metodi",
    "noAnswer1": "Eksperiment-tajriba-sinov usuli",
    "noAnswer2": "Test sinovlar metodi",
    "noAnswer3": "Modellashtirish metodi"
  },
  {
    "question": "................ - maxsus tayyorlangan kishilar rahbarligida o'tkaziladigan, o'quvchilarni bilim, ko'nikma va malakalar bilan qurollantiradigan, bilim, qobiliyatlarini o'stiradigan, ularning dunyoqarashini tarkib toptiradigan jarayondir",
    "answer": "ta'lim",
    "noAnswer1": "ko'nikma",
    "noAnswer2": "bilim",
    "noAnswer3": "qobiliyat"
  },
  {
    "question": "Yoshlar ongini shakllantirish usullariga qaysilar kiradi?",
    "answer": "tushuntirish, suhbat va o'rnak ko'rsatish",
    "noAnswer1": "darsdan tashqari suxbatlar olib borish ishlari",
    "noAnswer2": "atrofdagi voqealar, hulq atvor, davlatning ichki va tashqi siyosati",
    "noAnswer3": "uzluksiz ta'lim tizimini yanada rivojlashtirish muammolarini xal qilish"
  },
  {
    "question": "..... - deganda biz shaxsning ham jismoniy, ham aqliy va ma'naviy kamol topish jarayonini tushunamiz",
    "answer": "rivojlanish",
    "noAnswer1": "tarbiya",
    "noAnswer2": "ma'naviyat",
    "noAnswer3": "ko'nikma"
  },
  {
    "question": ".................-inson ongining bilish ob'ektlari hisoblanmish narsa va hodisalar o'rtasida murakkab, har tomonlama aloqalarning bo'lishini ta'minlovchi umumlashgan va mavxumlashgan aks ettirish shaklidir.",
    "answer": "tafakkur",
    "noAnswer1": "xodisa",
    "noAnswer2": "idrok",
    "noAnswer3": "sezgi "
  },
  {
    "question": ".........– hulqning asosiy anglanilgan motivi. U butun shaxs faoliyatiga alohida mazmun va aniq yo'nalish baxsh etadi",
    "answer": "E'tiqod",
    "noAnswer1": "Extiyoj",
    "noAnswer2": "Motivatsiya",
    "noAnswer3": "Rivojlanish"
  },
  {
    "question": "Har qanday sharoitda ham barcha harakatlar ham ichki-psixologik, ham tashqi-muvofiqlik nuqtai nazaridan ...... tomonidan boshqarilib boradi",
    "answer": "ong ",
    "noAnswer1": "malaka",
    "noAnswer2": "miya",
    "noAnswer3": "sezgi"
  },
  {
    "question": "Shaxsning rivojlanish jarayoni bir qancha omillar ta’sirida sodir bo‘ladi. Bular",
    "answer": "irsiyat, muhit, ta'lim va tarbiya, shaxs faolligi",
    "noAnswer1": "tashqi muhit, oila, internet, klublar",
    "noAnswer2": "ta'lim va tarbiya, irsiyat, tadbirlar, turli uchrashuvlar",
    "noAnswer3": "maslaxat berish, ko'rgazmalilik usuli, amaliy, namuna usul"
  },
  {
    "question": "..................-birinchi navbatda aqliy faoliyat bo'lib, u sof psixologik jarayonlarning kechishidan kelib chiqadi.",
    "answer": "ichki faoliyat ",
    "noAnswer1": "umumiy faoliyat",
    "noAnswer2": "tashqi faoliyat",
    "noAnswer3": "umumiy faoliyat"
  },
  {
    "question": "………....- kishini o'zini tuta olmaydigan qilib qo'yadigan taassurotlar bilan bog'liq psixik jarayonlar, xarakatlar va xolatlar yig'indisidir.",
    "answer": " Ongsizlik",
    "noAnswer1": "Organizm",
    "noAnswer2": "Tafakkur",
    "noAnswer3": "fikr"
  },
  {
    "question": "Jamiyat bilan doimiy munosabatni ushlab turuvchi, o'z - o'zini anglab, har bir harakatini muvofiqlashtiruvchi shaxsga xos bo'lgan eng muhim va umumiy xususiyat-bu ................",
    "answer": "faollik",
    "noAnswer1": "malaka",
    "noAnswer2": "tafakkur",
    "noAnswer3": "fikr"
  },
  {
    "question": "Tabiiyki, milliy tafakkur rivojining tamal toshi ona tilidir. Ona tiliga muxabbat, ona tilida sobitlik milliy tafakkur parvozini muntazam ta'min etadigan ...........   ",
    "answer": "muqaddas tuyg'ulardir",
    "noAnswer1": "beqiyos tuyg'udir",
    "noAnswer2": "onalik tuyg'usidir",
    "noAnswer3": "vatan tuyg'usidir"
  },
  {
    "question": "Ilmiy tushuncha sifatida \"........\"so'zi keng ma'noda muayyan maqsadga erishish yo'lini, tor ma'noda - tabiat va ijtimoiy xayot xodisalari va qonuniyatlarini bilish maqsadida qandaydir vazifani xal etish usulini bildiradi",
    "answer": "metod",
    "noAnswer1": "texnologiya",
    "noAnswer2": "ma'naviyat",
    "noAnswer3": "tarbiyaviy-tashkiliy"
  },
  {
    "question": ".......– o'quvchining ichki dunyosiga kira olish qobiliyati, o'quvchi shaxsini va uning ruhiy holatlarini juda yaxshi tushuna bilish bilan bog'liq bo'lgan psixologik kuzatuvchanlikdir",
    "answer": "Kuzatuvchanlik qobiliyati",
    "noAnswer1": "Tushuntira olish qobiliyati",
    "noAnswer2": "Bilish qobiliyati",
    "noAnswer3": "Aqliy qobiliyati"
  },
  {
    "question": "\"Aktual taraqqiyot zonasi\" mohiyati nimadan iborat?",
    "answer": "bolaning mustaqil faoliyati kattalar bilan xamkorlikda amalga oshiriladi",
    "noAnswer1": "kichik maktab yoshi davrida xatti – xarakatidan",
    "noAnswer2": "bola taraqqiyotini maktab ta'limidan ajratib bo'lmaydi",
    "noAnswer3": "rivojlanishning mohiyati qarama-qarshiliklar kurashidan iborat"
  },
  {
    "question": "\"Bolalarning aqliy taraqqiyotigina emas, balki axloqiy rivojlanish ham nasliy tamondan belgilangan\". Ushbu fikrlar muallifi kim? ",
    "answer": " E. Torndayk",
    "noAnswer1": "Z.Zazzo",
    "noAnswer2": "F.Myuller",
    "noAnswer3": "K. Byuller"
  },
  {
    "question": "\"Bu shunday qobiliyatki bunda o'quvchilarga bevosita emotsional irodaviy ta'sir etib ularda obro' orttira bilishdan iborat qobiliyatdir\" qaysi qobiliyat turiga ta'rif berilgan? ",
    "answer": " Avtoritar qobiliyati",
    "noAnswer1": "Kommunikativ qobiliyati",
    "noAnswer2": "Nutq qobiliyati",
    "noAnswer3": "Pedagogik qobiliyati"
  },
  {
    "question": "Bilim olishga maqsadga yo'naltirilgan anglash qobiliyati bolada qachon paydo bo'ladi?",
    "answer": " 4-5 yoshda",
    "noAnswer1": "2-3 yoshda",
    "noAnswer2": "6-7 yoshda",
    "noAnswer3": "8 yoshdan so'ng"
  },
  {
    "question": "Bolalarda xayol necha yoshdan boshlab paydo bo'la boshlaydi? ",
    "answer": "2 yoshga to'lib, 3 yoshga qadam qo'yganda",
    "noAnswer1": "1-2 yoshiga qadam qo'yganda",
    "noAnswer2": "4 yoshiga qadam qo'yganda",
    "noAnswer3": "3 yoshiga to'lganida"
  },
  {
    "question": "Buyuk psixolog V.Shtern g'oyasi?",
    "answer": "Ta'lim psixik rivojlanishning orqasidan boradi",
    "noAnswer1": "Ta'lim-tarbiya birligi rivojlanishidir",
    "noAnswer2": "Tarbiya, taraqqiyot vositasi",
    "noAnswer3": "Ta'lim psixik rivojlanishni ergashtirib boradi"
  },
  {
    "question": "Diniy aqloqiy tarzdagi dastlabki pedagogik va psixologik asarlar qachon yozilgan? ",
    "answer": "XVIIIasrda ",
    "noAnswer1": "XX-asrda",
    "noAnswer2": "XIX-asrda",
    "noAnswer3": "XI - asrda"
  },
  {
    "question": "Yetuklik davri o'z ichiga necha yoshni oladi?",
    "answer": " 30 – 35 yosh",
    "noAnswer1": "25 – 30 yosh",
    "noAnswer2": "55 – 70 yosh",
    "noAnswer3": "36 – 60 yosh"
  },
  {
    "question": "Yoshlik davrida yigit – qizlar kamolotiga qanday psixologik mexanizmlar ta'sir ko'rsatadi?  ",
    "answer": " mehnat jamoasi, oila muhiti va norasmiy ulfatlar",
    "noAnswer1": "ota – onalar, turmush o'rtog'i",
    "noAnswer2": "yaqin kishilari, kasb faoliyati",
    "noAnswer3": "ijtimoiy ong, sevib – sevilish"
  },
  {
    "question": "Yoshlik davrida sezgirlikning ortishi necha yoshgacha davom etadi?",
    "answer": " 25 yoshgacha",
    "noAnswer1": "30 yoshgacha",
    "noAnswer2": "35 yoshgacha",
    "noAnswer3": "28 yoshgacha"
  },
  {
    "question": "....  -insonning yakka holdagi bir yoki bir necha turdagi faoliyatida namoyon bo'ladi. U insonga tayyor holda berilmaydi. U o'qitish va tarbiya jarayonida rivojlanish natijasi hisoblanadi.  Nuqtalar o'rniga kerakli so'zni qo'ying.",
    "answer": "qobiliyat",
    "noAnswer1": "iste'dod",
    "noAnswer2": "aql",
    "noAnswer3": "bilim"
  },
  {
    "question": "\"Muallim, ustozlar nima so'rasalar kulib turib, odob bilan, chiroyli so'zlarni saralab, javob ber \"ushbu so'zlar kimning qalamiga mansub?",
    "answer": "Mustafo Homiy",
    "noAnswer1": "Y.A. Komenskiy",
    "noAnswer2": "A. Navoiy",
    "noAnswer3": "Al Farg'oniy"
  },
  {
    "question": "\"Diplomga ega bo'lish bu hali tom ma'nodagi ziyoli emas, ziyoli odam o'z tafakkur saviyasi, pok yuragi, ichki madaniyati bilan mutlaqo boshqacha bo'ladi\" , ushbu so'zlar kimga tegishli?",
    "answer": "I. A. Karimov",
    "noAnswer1": "A. Avloniy",
    "noAnswer2": "Komenskiy",
    "noAnswer3": "A. Qodiriy"
  },
  {
    "question": "Kadrlar tayyorlash tayyorlash Milliy modulining asosiy tarkibiy qismlari bular...?",
    "answer": "Uzluksiz ta'lim, shaxs, fan, davlat va jamiyat",
    "noAnswer1": "Davlat va xokimiyat",
    "noAnswer2": "Qonunchilik palatasi",
    "noAnswer3": "Qonun va ijro"
  },
  {
    "question": "  Uzluksiz ta'lim o'z ichiga necha ta'lim turini oladi?",
    "answer": "Yettita",
    "noAnswer1": "O'n ikkita",
    "noAnswer2": "Oltita",
    "noAnswer3": "O'nta"
  },
  {
    "question": "Kasb-hunar kollejlarini bitirgandan so'ng qanday ma'lumotli mutaxassislik beradi?",
    "answer": "O'rta maxsus",
    "noAnswer1": "Oliy",
    "noAnswer2": "Tugallanmagan oliy",
    "noAnswer3": "O'rta"
  },
  {
    "question": "Insonning qo'rqish va dovdirab qolish tuyg'usini yengish qobiliyati qaysi irodaviy sifatiga kiradi?",
    "answer": "Qat'iylik",
    "noAnswer1": "Sabr-matonat",
    "noAnswer2": "Mustaqillik",
    "noAnswer3": "Dadillik"
  },
  {
    "question": "Guruh deganda nimani tushunasiz?",
    "answer": "Muayyan belgi, maqsad, tashkil topish xususiyatiga qarab birlashgan insoniy umumiylik",
    "noAnswer1": "Talabalar guruhi, ishchilar guruhi, oila",
    "noAnswer2": "Norasmiy, rasmiy, real, shartli guruhlar bo'ladi",
    "noAnswer3": "Guruh jamoadir"
  },
  {
    "question": "Majburiy ta'lim necha yil?",
    "answer": "O'n ikki yil",
    "noAnswer1": "To'qqiz yil",
    "noAnswer2": "O'n olti yil",
    "noAnswer3": "O'n bir yil"
  },
  {
    "question": " \"Innovatsiya\" tushunchasi birinchi marta nechanchi asrda paydo bo'lgan?",
    "answer": "XIX asrda",
    "noAnswer1": "XX asrda",
    "noAnswer2": "XVIII asrda",
    "noAnswer3": "XVII asrda"
  },
  {
    "question": "Qaysi metod o'quvchi-talabani savol berish, eshita olish, to'g'ri javob bera olish, savolni to'g'ri tuzishni o'rgatishga qaratilgan? ",
    "answer": "Interv'yu metodi",
    "noAnswer1": "Blits o'yin metodi",
    "noAnswer2": "3x4 metodi",
    "noAnswer3": "aqliy hujum"
  },
  {
    "question": "Qaysi metod o'quvchi-talabalarni erkin fikrlashi, keng doirada turli g'oyalarni bera olishi, ta'lim jarayonida yakka, kichik guruh holda tahlil etib, xulosa chiqara olish, ta'rif bera olishiga qaratilgan?",
    "answer": "3x4 metodi",
    "noAnswer1": "Blits o'yin metodi",
    "noAnswer2": "Intervyu metodi",
    "noAnswer3": "aqliy hujum"
  },
  {
    "question": "Qaysi metod harakatlar ketma-ketligini to'g'ri tashkil etishga, mantiqiy fikrlashga, o'rganayotgan fani asosida ko'p, xilma-xil fikrlardan, ma'lumotlardan keraklisini tanlab olishni o'rgatishga qaratilgan",
    "answer": "Blitso'yin metodi",
    "noAnswer1": "Intervyu metodi",
    "noAnswer2": "3x4 metodi",
    "noAnswer3": "aqliy hujum"
  },
  {
    "question": "Qaysi tushuncha inglizchada yangilik, yangilik kiritish, yangilikni o'rganish kabi ma'nolarni aks ettiradi?",
    "answer": "Innovatsiya",
    "noAnswer1": "Informatika",
    "noAnswer2": "Innovatika",
    "noAnswer3": "Ipoteka"
  },
  {
    "question": "Qaysi metod o'qituvchi topshiriqlar tizimi bilan o'quvchilar bilish faoliyatini tashkil etadi?",
    "answer": "Tadqiqot metodi",
    "noAnswer1": "Eslash metodi",
    "noAnswer2": "Tushuntirish metodi",
    "noAnswer3": "bilim almashtirish"
  },
  {
    "question": "Axloq nima ?",
    "answer": "Jamiyatda qabul qilingan, jamoatchilik fikri bilan ma'qullangan xulq-odob normalari majmui",
    "noAnswer1": "Jamiyatning va unda yashovchi fuqarolarning faoliyati jarayonida to'plangan barcha ijobiy yutuqlar majmuasi",
    "noAnswer2": "Inson ongidagi mavjud ilmiy va hayotiy bilimlar majmuidan keragini saralab olish va amaliyotga qo'llash",
    "noAnswer3": "Mutaxassisliklar yo'nalishlari bo'yicha fundamental va amaliy bilim berish"
  },
  {
    "question": "Ma'naviyat nima? ",
    "answer": "Inson ongini aks ettiruvchi barcha ijobiy, ruhiy, intellektual fazilatlar majmuasidir",
    "noAnswer1": "Insonning yakka holdagi bir yoki bir necha turdagi faoliyatida namoyon bo'lishi tushuniladi",
    "noAnswer2": "Jamiyatda qabul qilingan, jamoatchilik fikri bilan ma'qullangan xulq-odob normalari majmui",
    "noAnswer3": "Jamiyatning va unda yashovchi fuqarolarning faoliyati jarayonida to'plangan barcha ijobiy yutuqlar majmuasi."
  },
  {
    "question": "Muloqot deganda nimani tushunasiz?",
    "answer": "Kishilar faoliyatida nutqli va nutqsiz munosabatga kirishishishi muloqotdir",
    "noAnswer1": "Kishilarni har xil imo ishoralaridan iborat bo'lgan munosabati – muloqotdir",
    "noAnswer2": "Nutq orqali munosabatga kirishish muloqot deyiladi",
    "noAnswer3": "Kishilarni o'zaro fikr almashishlari muloqotdeyiladi"
  },
  {
    "question": "Nutqsiz kommunikatsiya bu…",
    "answer": "So'zlarni sistematik ravishda ifoda etishdir",
    "noAnswer1": "So'zlarni to'ldiruvchi va kuchaytiruvchi belgilar sistemasi",
    "noAnswer2": "Til yordamida munosabat qilish jarayoni",
    "noAnswer3": "Monolog yordamida munosabat qilish jarayoni"
  },
  {
    "question": "Bir vaqtning o'zida o'qituvchini tinglab, yozib, hamda o'rtog'ining iltimosini bajargan talaba diqqatining xarakterli xususiyatlari qaysi?",
    "answer": "Diqqatning taqsimlanishi",
    "noAnswer1": "Diqqatning barqarorligi",
    "noAnswer2": "Diqqatningko'chishi",
    "noAnswer3": "Diqqatning parishonligi"
  },
  {
    "question": "Shaxsning tarkib topishida va rivojlanishidagi asosiy faoliyat urlari qaysilar?",
    "answer": "O'yin, o'qish, mehnat",
    "noAnswer1": "O'yin, o'qish, o'zligini anglash",
    "noAnswer2": "O'qish, mehnat",
    "noAnswer3": "Mehnat, o'z-o'zini tarbiyalash"
  },
  {
    "question": "Kishining dunyoqarashi qanday shakllanadi?",
    "answer": "Atrof muhitni yaxlit idrok qilish, farqlash, taqqoslash va izohlay olish",
    "noAnswer1": "Ota-onalarimiz turmush tarzini o'rganish va ularga rioya etish orqali",
    "noAnswer2": "O'quv fanlarini yaxshi o'rganish orqali",
    "noAnswer3": "Ijtimoiy hayotni o'rganish orqali"
  },
  {
    "question": "O'qituvchining akademik qobiliyati nima?",
    "answer": "Barcha fanlar yuzasidan muayyan bilimga ega bo'lishlik qobiliyati",
    "noAnswer1": "Talabalarni o'z fanidan to'liq o'zlashtirishni ta'minlash qobiliyati",
    "noAnswer2": "Muayyan akademik soatga mo'ljallangan darsni ushbu vaqtda to'liq va aniq o'ta olish qobiliyati",
    "noAnswer3": "\"Akademik\" unvonga ega bo'lishlik qobiliyati"
  },
  {
    "question": "O'qituvchi va talaba shaxsini kompleks o'rganishiga qaratilgan usul nima deyiladi?",
    "answer": "Psixodiognostika",
    "noAnswer1": "Psixogenetika",
    "noAnswer2": "Psixoanaliz",
    "noAnswer3": "Psixologik ta'sir"
  },
  {
    "question": "Faoliyatda motiv qanday vazifani bajaradi?",
    "answer": "  Undovchilik",
    "noAnswer1": "Signallik aks ettirish",
    "noAnswer2": "Ekssperiv (ifodalash) va signallik",
    "noAnswer3": "Maqsadga yunaltirish vaaks ettirish"
  },
  {
    "question": "Faoliyatning asosiy turlariga qaysilar kiradi?",
    "answer": " O'yin, o'qish, mehnat",
    "noAnswer1": "Tashqi, ichki nutq",
    "noAnswer2": "Malaka, ko'nikma",
    "noAnswer3": "Mehnat, muloqot"
  },
  {
    "question": "Kommunikativ qobiliyat deganda nimani tushunasiz?",
    "answer": "O'quv materiallarini tushunarli bayon etish",
    "noAnswer1": "Bolalarga aralashish qobiliyati",
    "noAnswer2": "O'quvchilar jamoasini uyushtirish",
    "noAnswer3": "Bolalarga emotsional ta'sir ko'rsatish"
  },
  {
    "question": "  Ta'lim va tarbiyaning uzviy bog'liqligi, bu jarayonning xar tomonlama kamol topgan insonni shaklantirishga yo'naltirilganligi ta'rifi qaysi soxaga tegishli?",
    "answer": "Uzluksiz ta'limning faoliyat kursatish printsipiga",
    "noAnswer1": "Ta'lim soxasidagi davlat siyosatining asosiy printsipiga",
    "noAnswer2": "Uzluksiz ta'limning islox kilish yunalishlariga",
    "noAnswer3": "Ta'lim printsipining qanday qo'llanilishiga bog'liq"
  },
  {
    "question": "Shaxsda \"Men\" timsoli qachon paydo bo'lgan?",
    "answer": "Ilk bolalik davrida ",
    "noAnswer1": "O'smirlik davrida",
    "noAnswer2": "Kichik maktab yoshi davrida",
    "noAnswer3": "O'spirinlik davrida"
  },
  {
    "question": "Tyutor so'zini ma'nosi nima?",
    "answer": "o'qituvchi konsultant",
    "noAnswer1": "o'qituvchi taqrizchi",
    "noAnswer2": "o'qituvchi maqolachi",
    "noAnswer3": "o'qituvchi rahbar"
  },
  {
    "question": "Kardrlar tayyorlash tizimining asosi?",
    "answer": "uzluksiz ta'lim     ",
    "noAnswer1": "boshqarish",
    "noAnswer2": "g'oya",
    "noAnswer3": "maqsadli yo'nalish"
  },
  {
    "question": "To'liq shakllanmagan shaxs psixologiyada\n qanday nom bilan yuritiladi?",
    "answer": "Individ",
    "noAnswer1": "Ideal",
    "noAnswer2": "Reyal",
    "noAnswer3": "To'liqsiz"
  },
  {
    "question": "Atrofdagi predmetlar va hodisalar\nto'g'risidagi yaxlit obraz qanday nomlanadi?",
    "answer": "Pertseptiv",
    "noAnswer1": "Mnemik faolyat",
    "noAnswer2": " Fikrlash faolyati",
    "noAnswer3": " Imajitiv"
  },
  {
    "question": " \"Image\"- so'zining ma'nosi nima?",
    "answer": " \"image\"-o'braz\n\n",
    "noAnswer1": "\"image\"-rasm",
    "noAnswer2": "\"image\"- qo'shiq",
    "noAnswer3": "\"image\"-video"
  },
  {
    "question": "Ijodiy jaryonlarda hayol va fantaziya vositasida\n hozir bevosita ongda berilmagan narsalarning\n xususiyatlarini anglash va xayolda tiklashni taqozo\n etishi nima deyiladi?",
    "answer": " Imajitiv\n",
    "noAnswer1": "Pertseptiv",
    "noAnswer2": "Mnemik faolyat",
    "noAnswer3": "Fikrlash faolyati"
  }
];
const clean = text => String(text)?.replace(/[^a-zA-Z0-9А-яЁё+\-*/]/g, "").replaceAll(" ", "").toLowerCase();

const generate = (data = []) => {
  const questionMtContent = document.querySelector('.content-wrapper .col-md-8.mt30');
  const questionsList = questionMtContent?.children;

  const noAnswers = [];
  if (questionsList) {
    Array.from(questionsList)
      .slice(1, questionsList.length)
      .forEach((element, index) => {
        const questionElement = element?.querySelector('.box-title');
        const questionElementText = questionElement?.innerText;
        const questionElementTextLen = clean(questionElementText).length - 2;
        const questionStr = clean(questionElementText).slice(2, questionElementTextLen);
        let status1 = false;

        const jsonData = data.filter(({ question: itemQuestion = '' }) => {
          const questionReplace = clean(itemQuestion);

          if (questionStr === "") return item;

          return questionReplace?.includes(questionStr);
        });

        const [jsonDataFirstElement] = jsonData;

        if (jsonDataFirstElement) {
          const anwerText = jsonDataFirstElement?.answer;
          questionElement.setAttribute('title', anwerText);
          const anwersList = element?.querySelector('.box-body.checkbo.checkbo-ready')?.children;

          Array.from(anwersList).forEach((item) => {
            const labelChecked = item.querySelector("label.cb-radio");
            const answerText = clean(item.querySelector("span.qv")?.innerText);
            if (answerText === clean(anwerText)) {
              if (labelChecked) {
                labelChecked?.classList?.add("checked");
                labelChecked?.click();
                status1 = true;
              }
            }
          });
        } else {
          questionElement.setAttribute('title', '-----');
        }

        if (!status1 && questionsList?.length >= index) {
          noAnswers.push(index + 1);
        }
      });
  }
  const statusText = noAnswers.length + ' ta ' + JSON.stringify(noAnswers);
  document.querySelector('.box.box-default [data-target="#myModal"]').setAttribute('title', statusText);
};

window.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === ';') {
    generate(data);
  }
});