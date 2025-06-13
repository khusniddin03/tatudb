const data = [
  {
    question:
      "Shaxsiy moliya nuqtai-nazaridan aktivlarni, shartli ravishda, nechta kategoriya (toifa)ga bo‘lish\r\nmumkin?",
    noAnswer1: "3",
    noAnswer2: "4",
    answer: "2",
    noAnswer3: "5",
  },
  {
    question:
      "Shaxsiy moliya nuqtai-nazaridan aktivlarni qaysi kategoriyalarini bilasiz?",
    answer: "iste’moliy va investitsion",
    noAnswer1: "moliyaviy va iqtisodiy",
    noAnswer2: "iqtisodiy va ijtimoiy",
    noAnswer3: "iste’moliy va moliyaviy",
  },
  {
    question:
      "Shaxsiy moliyada biz bajarishimiz lozim bo‘lgan\r\nmoddiy majburiyatlar nima deyiladi?",
    noAnswer1: "aktivlar",
    noAnswer2: "Balans",
    answer: "passivlar",
    noAnswer3: "daromad",
  },
  {
    question:
      "Bu sizning shaxsiy xazinangiz (ixtiyoringiz)ga kelib tushadigan pullar.",
    noAnswer1: "xarajatlar",
    noAnswer2: "Byudjet",
    answer: "daromadlar",
    noAnswer3: "foyda",
  },
  {
    question:
      "Bu o‘z ehtiyojlaringizni qondirish uchun sarflayotgan pullaringiz.",
    answer: "xarajatlar",
    noAnswer1: "daromadlar",
    noAnswer2: "byudjet",
    noAnswer3: "zarar",
  },
  {
    question:
      "Bu ma’lum mo‘ljallangan vaqt davomida (masalan, oy, chorak, yarim yil yoki yil) rejalashtirilgan\r\ndaromadlaringiz va xarajatlaringiz ro‘yxati.",
    noAnswer1: "daromadlar",
    noAnswer2: "Xarajatlar",
    answer: "byudjet",
    noAnswer3: "mablag‘",
  },
  {
    question:
      "Shaxsiy moliyaviy rejani ishlab chiqish nechta bosqichni o‘z ichiga oladi?",
    noAnswer1: "2",
    noAnswer2: "4",
    noAnswer3: "5",
    answer: "3",
  },
  {
    question:
      "Daromad va iste’mol, ya’ni xarajatlarining bir-biriga muvofiq kelishiga qarab inson hayotini\r\nshartli ravishda nechta davrga bo‘lish mumkin?",
    noAnswer1: "2",
    noAnswer2: "3",
    answer: "4",
    noAnswer3: "5",
  },
  {
    question:
      "Bu – distansion (masofaviy) bank xizmatlarini ko‘rsatishning zamonaviy takomillashgan\r\nshakllaridan biridir.",
    noAnswer1: "banking",
    answer: "onlayn-banking",
    noAnswer2: "free-banking",
    noAnswer3: "uzcard",
  },
  {
    question: "Hozir dunyoda qancha miqdorda bankomatlar mavjud?",
    noAnswer1: "2,0 mln.dan kam",
    noAnswer2: "2,0 mln.",
    answer: "2,0 mln.dan ortiq",
    noAnswer3: "1,0 mln.",
  },
  {
    question:
      "Saqlash yoki foiz (daromad) olish uchun bank hisob- varag‘iga o‘tkazilgan pul mablag‘lari ...........\r\ndeb ataladi.",
    noAnswer1: "kredit",
    noAnswer2: "sug'urta",
    answer: "omonat",
    noAnswer3: "investitsiya",
  },
  {
    question: "Pul muomalasi – bu",
    noAnswer1:
      "mamlakatda pul muomilasini tashkil qilishga xizmat qiluvchi naqd va kredit pullar",
    answer: "pulning o’z vazifasini bajarish jarayonidagi to’xtovsiz harakati.",
    noAnswer2:
      "pul mablag’larini ssuda fondi shaklida to’lash va ularni takror ishlab chiqarish ehtiyojlari uchun\r\nqarzga berish",
    noAnswer3:
      "daromadning qarzga berilgan pul summasiga nisbatining foizda ifodalanishi",
  },
  {
    question: "Pulning qaysi vazifasi boylik to’plash bilan bog’liq?",
    answer: "jamg’arma vositasi",
    noAnswer1: "muomala vositasi",
    noAnswer2: "to’lov vositasi",
    noAnswer3: "qiymat o’lchovi",
  },
  {
    question: "Pulning vazifasi nimadan iborat?",
    noAnswer1:
      "pul iste’moli bilan ijtimoiy talabga bo’lgan investitsiya omili",
    noAnswer2:
      "ijtimoiy taklif va almashuv uchun zarur bo’lgan miqdorni belgilaydigan kapital qiymatlar omili",
    noAnswer3: "daromadlar va xarajatlarni hisobga olish tizimi",
    answer:
      "yagona hisob – kitob yurgizish, almashuv, jamg’arma, muomila, to’lov vositasi vazifasini\r\nbajaradi",
  },
  {
    question: "Pulning qaysi vazifasi narxning shakllanishi bilan bog’liq?",
    noAnswer1: "muomala vositasi",
    noAnswer2: "jamg’arma vositasi",
    answer: "qiymat o’lchovi",
    noAnswer3: "jahon puli",
  },
  {
    question: "Ehtiyoj - bu........",
    answer: "hayotiy vositalarga bo’lgan zaruriyat",
    noAnswer1: "ishlab chiqarish jarayoni",
    noAnswer2: "iste’mol jarayonida qo’llanilishi mumkin bo’lgan vosita",
    noAnswer3: "resurs",
  },
  {
    question: "Kapital - bu …",
    noAnswer1: "ishlab chiqarish jarayoni",
    noAnswer2: "iste’mol jarayonida qo’llanilishi mumkin bo’lgan vosita",
    answer:
      "investitsiyalashtirish yo‘li bilan daromad olish uchun foydalaniladigan mol-mulk, boylik yoki\r\nmablag‘",
    noAnswer3: "resurs",
  },
  {
    question: "Insoniy kapital - bu …",
    answer:
      "Har bir shaxs va mamlakat barcha aholisining intellekti, salomatligi, tabiiy iste’dodi va qo‘lga\r\nkiritgan qobiliyatlarining majmui",
    noAnswer1:
      "mamlakatda pul muomilasini tashkil qilishga xizmat qiluvchi naqd va kredit pullar",
    noAnswer2:
      "pul mablag’larini ssuda fondi shaklida to’lash va ularni takror ishlab chiqarish ehtiyojlari uchun\r\nqarzga berish",
    noAnswer3:
      "daromadning qarzga berilgan pul summasiga nisbatining foizda ifodalanishi",
  },
  {
    question:
      "“Insoniy kapital” (human capital) tushunchasi qachon paydo bo‘lgan?",
    noAnswer1: "XIX asrning birinchi yarmida",
    noAnswer2: "XX asrning ikkinchi yarmida",
    answer: "XIX asrning ikkinchi yarmida",
    noAnswer3: "XX asrning birinchi yarmida",
  },
  {
    question: "“Insoniy kapital” nazaryasi tarafdorlari kimlar?",
    noAnswer1: "Teodor Shuls, Gari Bekker",
    noAnswer2: "Gari Bekker va Saymon Kuzneslar",
    answer: "Teodor Shuls, Gari Bekker va Saymon Kuzneslar",
    noAnswer3: "Teodor Shuls",
  },
  {
    question: "Insoniy naturaning har qanday xarakterli belgisi ….",
    answer: "iqtisodiy (jumladan, moliyaviy) mazmun (qiymat)ga egadir",
    noAnswer1: "jismoniy mazmunga egadir",
    noAnswer2: "ma'naviy mazmunga egadir",
    noAnswer3: "ijtimoiy mazmunga egadir",
  },
  {
    question:
      "Biz qabul qiladigan barcha qarorlarni nechta guruhga bo‘lish mumkin?",
    noAnswer1: "2",
    noAnswer2: "4",
    noAnswer3: "5",
    answer: "3",
  },
  {
    question:
      "Strategik menejment maktabi asoschilaridan biri bo‘lgan professor Genri Minsberg qarorlarni\r\nqanday atagan edi:",
    answer: "“oldin bajaraman”; “oldin ko‘raman”; “oldin o‘ylayman”.",
    noAnswer1: "“oldin o‘ylayman”; “oldin ko‘raman”; “oldin bajaraman”.",
    noAnswer2: "“oldin ko‘raman”; “oldin o‘ylayman”; “oldin bajaraman”.",
    noAnswer3: "“oldin ko‘raman”; “oldin bajaraman”; “oldin o‘ylayman”.",
  },
  {
    question: "Qaror qabul qilishning nechta asosiy bosqichlari bor?",
    noAnswer1: "2",
    noAnswer2: "4",
    answer: "3",
    noAnswer3: "5",
  },
  {
    question:
      "Maqsadga erishish muddatini shartli ravishda bo‘lsa ham, nechta guruhga bo‘lish mumkin?",
    noAnswer1: "2",
    answer: "3",
    noAnswer2: "4",
    noAnswer3: "5",
  },
  {
    question: "Qisqa muddatli maqsadlar muddati qancha?",
    answer: "1 yilgacha",
    noAnswer1: "2 yilgacha",
    noAnswer2: "3 yilgacha",
    noAnswer3: "4 yilgacha",
  },
  {
    question:
      "Bizning qaramog‘i (mulki)mizda va o‘zining pulli qiymatiga ega bo‘lgan barcha narsalar nima\r\ndeyiladi?",
    noAnswer1: "passivlar",
    noAnswer2: "balans",
    noAnswer3: "Daromad",
    answer: "aktivlar",
  },
  {
    question:
      "Daromad va iste’mol, ya’ni xarajatlarining bir-biriga muvofiq kelishiga qarab inson hayotini\r\nshartli ravishda qanday davrlarga bo‘lish mumkin?",
    noAnswer1: "o‘smirlik, yetuklik, keksalik",
    noAnswer2: "yetuklik, keksalik",
    answer: "bolalik va yoshlik, o‘smirlik, yetuklik, keksalik",
    noAnswer3: "bolalik va yoshlik, o‘smirlik, yetuklik",
  },
  {
    question:
      "Insonning hayotiy siklidan kelib chiqib, shaxsiy moliyaviy maqsadlarning nechta asosiy guruhga\r\najratish mumkin?",
    noAnswer1: "2",
    noAnswer2: "4",
    answer: "3",
    noAnswer3: "5",
  },
  {
    question:
      "O‘z daromadlarimizni kapitalning qaysi turlarini shakllantirishga yo‘naltirishimiz kerak?",
    noAnswer1: "joriy; zahira; moliyaviy",
    noAnswer2: "bazaviy; zahira; investitsion",
    noAnswer3: "joriy; investitsion",
    answer: "joriy; zahira; investitsion",
  },
  {
    question:
      "Tovarlar va xizmatlar bahosi umumiy darajasining oshish (o‘sish) jarayoni nima deyiladi.",
    noAnswer1: "bankrot",
    noAnswer2: "krizis",
    noAnswer3: "Defitsit",
    answer: "inflyatsiya",
  },
  {
    question:
      "O‘zbekiston Respublikasi qonunchiligiga ko‘ra necha yoshga to‘lgan har bir fuqaro depozit\r\n(omonat) shartnomasini tuzishi (imzolashi) mumkin?",
    noAnswer1: "15",
    noAnswer2: "16",
    answer: "14",
    noAnswer3: "18",
  },
  {
    question: "Pulni qanday shaklda to‘plash (yig‘ish, jamg‘arish) mumkin?",
    noAnswer1: "naqdina (naqd pulli)",
    noAnswer2: "Naqdsiz",
    answer: "naqdina (naqd pulli) va naqdsiz",
    noAnswer3: "plastik kartada",
  },
  {
    question: "Pulni to‘plash (yig‘ish, jamg‘arish)ning eng oddiy usuli –?",
    answer: "uyda naqdina (naqd pul)",
    noAnswer1: "bankda naqdina (naqd pul)",
    noAnswer2: "plastik kartada",
    noAnswer3: "naqdsiz",
  },
  {
    question:
      "Shaxsiy moliyada inflyatsiya, odatda, qanday o‘lchanadi (ifodalanadi)?",
    noAnswer1: "dollar kursiga qarab",
    noAnswer2: "narxlar oshishi orqali",
    noAnswer3: "pul banknotalar ko'payshi orqali",
    answer: "iste’mol baholari indeksi (IBI) orqali",
  },
  {
    question: "Bank qaysi funksiyalarni bajaradi?",
    noAnswer1: "1) pullarni qabul qiladi (oladi); 2) pullarni beradi.",
    answer:
      "1) pullarni qabul qiladi (oladi); 2) pullarni beradi; 3) hisob-kitob-kassa operatsiyalarini amalga\r\noshiradi.",
    noAnswer2:
      "1) pullarni qabul qiladi (oladi); 2) hisob-kitob-kassa operatsiyalarini amalga oshiradi.",
    noAnswer3:
      "1) pullarni beradi; 2) hisob-kitob-kassa operatsiyalarini amalga oshiradi.",
  },
  {
    question:
      "Omonat (depozit)lar orqali fuqarolarning bo‘sh pul mablag‘larini to‘plovchi, ularni kreditlar\r\nberish yoki turli moliyaviy instrumentlarga (aksiya, obligatsiya va h.k.lar) investitsiyalab,\r\njoylashtiruvchi moliyaviy vositachi .......... deyiladi.",
    answer: "bank",
    noAnswer1: "xalq banki",
    noAnswer2: "diler",
    noAnswer3: "agent",
  },
  {
    question:
      "Foizi bilan qaytarish sharti asosida ma’lum bir muddatga taqdim etilgan (berilgan) pul\r\nmablag‘lari ........... deyiladi.",
    noAnswer1: "omonat",
    noAnswer2: "sug'urta",
    answer: "kredit",
    noAnswer3: "investitsiya",
  },
  {
    question: "- bu mijozlarning banklardagi pul mablag‘laridir",
    noAnswer1: "kredit",
    noAnswer2: "sug'urta",
    noAnswer3: "Investitsiya",
    answer: "depozit(omonat)",
  },
  {
    question:
      "– bu bank tomonidan qarz oluvchiga ma’lum muddat va ma’lum shartlarda pulni qarzga berish\r\nuchun ko‘rsatiladigan xizmatdir.",
    noAnswer1: "omonat",
    noAnswer2: "sug'urta",
    noAnswer3: "Investitsiya",
    answer: "bank krediti",
  },
  {
    question:
      "Kreditga tegishli bo‘lishi mumkin bo‘lgan asosiy tavsif (belgi)larni ko‘rsating.",
    noAnswer1: "Haqlilik, to‘lovlilik. Muddatlilik.",
    noAnswer2: "Muddatlilik. Kreditning qaytariluvchanligi.",
    noAnswer3: "Kreditning qaytariluvchanligi.",
    answer:
      "Haqlilik, to‘lovlilik. Muddatlilik. Kreditning qaytariluvchanligi.",
  },
  {
    question:
      "– bu shunday prinsipdirki, unga ko‘ra pulning bir xildagi summasi turli davrning turli qismlarida\r\nturli qiymat (baho)ga ega bo‘ladi (xususan, inflyatsiya va turli risklar tufayli).",
    noAnswer1: "kreditning to‘liq qiymati",
    noAnswer2: "kredit summasi",
    answer: "pulning davriy qiymati",
    noAnswer3: "kredit muddati",
  },
  {
    question: "Kredit mablag‘lari qaytarilishini qanday usullari bor?",
    answer: "annuitet va differensiatsiyalangan",
    noAnswer1: "annuitet",
    noAnswer2: "differensiatsiyalangan",
    noAnswer3: "tezkor",
  },
  {
    question:
      "– bu qarz oluvchi egalik qilayotgan yoki qarziy mablag‘lar hisobiga sotib olayotgan (masalan,\r\navtomobil yoki ko‘chmas mulk) mol-mulk bo‘lib, u kredit qaytarilmaganda sotilishi mumkin.",
    noAnswer1: "kafolat",
    noAnswer2: "ta'minot",
    noAnswer3: "sug'urta",
    answer: "garov",
  },
  {
    question:
      "– uni shu yerning o‘zidayoq, “kassa oldidan ketmasdan” bir necha minut davomida\r\nrasmiylashtirib, summani olib, xaridni amalga oshirish mumkin.",
    answer: "mikroqarz",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
  },
  {
    question:
      "– xaridni ortga surish, iste’mol krediti uchun bankka murojaat qilish va faqat bir necha kun\r\no‘tgandan so‘ng xaridni amalga oshirish maqsadida do‘konga borsa bo‘ladi",
    noAnswer1: "mikroqarz",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
    answer: "iste’mol krediti",
  },
  {
    question:
      "– qarz oluvchiga tadbirkorlik faoliyatini amalga oshirish uchun bazaviy hisoblash miqdorining\r\n1000 baravaridan oshmaydigan summada to‘lovlilik, muddatlilik va qaytarish shartlari asosida\r\nberiladigan pul mablag‘laridir.",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
    answer: "mikrokredit",
  },
  {
    question:
      "– mikromoliyaviy xizmatlar ko‘rsatuvchi tashkilot tomonidan lizing oluvchining topshirig‘iga\r\nbinoan uchinchi tarafdan mol-mulk olish hamda unga(dan) egalik qilish va foydalanish uchun\r\nlizing oluvchiga shartnomada belgilangan shartlar asosida haq evaziga berish nazarda\r\ntutiladigan xizmatdir.",
    answer: "mikrolizing",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
  },
  {
    question:
      "Nechinchi yildan boshlab tijorat banklari ham aholiga mikroqarzlar berishga haqlidir?",
    noAnswer1: "2017",
    noAnswer2: "2019",
    answer: "2018",
    noAnswer3: "2020",
  },
  {
    question:
      "Kredit byurosi tomonidan kredit axboroti sub’ektiga nisbatan shakllantirilgan kredit axboroti\r\nmajmui …... deyiladi.",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "Kredit",
    answer: "kredit tarixi",
    noAnswer3: "sug'urta",
  },
  {
    question:
      "bu – salohiyatli qarz oluvchini balli baholashning avtomatlashtirilgan tizimidir.",
    answer: "skoring",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
  },
  {
    question:
      "Ekspress-kredit bizning bank amaliyotimizda qanday nom bilan mavjudligini e’tirof etish\r\nmumkin?",
    noAnswer1: "shoshilinch kredit",
    noAnswer2: "darkor kredit",
    answer: "tezkor kredit",
    noAnswer3: "vaqtli kredit",
  },
  {
    question:
      "... ya’ni oldingi (eski) kreditni qaytarish (uzish) uchun nisbatan yaxshiroq yoki qulayroq\r\nshartlarda yangi kredit olish.",
    noAnswer1: "qayta moliyalashtirish",
    noAnswer2: "kreditni moliyalashtirish",
    noAnswer3: "moliyalashtirish",
    answer: "kreditni qayta moliyalashtirish",
  },
  {
    question:
      "Hayot tajribasining ko‘rsatishicha, shaxsiy byudjetni shunday hisob- kitob qilish kerakki, unga\r\nko‘ra kredit bo‘yicha to‘lanmalarni amalga oshirishda har oylik daromadlarning necha foizdan\r\nko‘prog‘i sarf qilinmasligi lozim?",
    answer: "40,0%",
    noAnswer1: "30,0%",
    noAnswer2: "50,0%",
    noAnswer3: "60,0%",
  },
  {
    question: "Sotish kursi va sotib olish kursi o‘rtasidagi farq?",
    noAnswer1: "valyuta",
    noAnswer2: "depozit",
    noAnswer3: "Skoring",
    answer: "spred",
  },
  {
    question: "Bank yacheykalari …............ deb ham ataladi.",
    noAnswer1: "“omonat yacheyka”",
    noAnswer2: "“kredit yacheyka”",
    answer: "“depozitar yacheyka”",
    noAnswer3: "“valyuta yacheyka”",
  },
  {
    question:
      "Ularda pullar, qimmatli qog‘ozlar va yacheykani ijaraga olgan odam uchun qimmatbaho\r\n(qimmatli) hisoblangan har qanday boshqa predmetlar saqlanishi mumkin.",
    answer: "“bank yacheyka”",
    noAnswer1: "“omonat yacheyka”",
    noAnswer2: "“kredit yacheyka”",
    noAnswer3: "“valyuta yacheyka”",
  },
  {
    question:
      "Bank yacheykaga kirishning maksimal darajadagi xavfsizligini ta’minlash uchun ko‘p hollarda\r\nqaysi prinsipdan foydalaniladi?",
    noAnswer1: "“uch qulf”",
    noAnswer2: "“to'rt qulf”",
    noAnswer3: "“besh qulf”",
    answer: "“ikki qulf”",
  },
  {
    question: "Naqd pullar – ?",
    noAnswer1: "valyutalar",
    noAnswer2: "banknotalar",
    answer: "banknotalar va ma’lum bir nominalli tangalardir",
    noAnswer3: "ma’lum bir nominalli tangalar",
  },
  {
    question: "Naqd pullar almashtirib bo‘lmaydigan qanday afzalliklarga ega?",
    noAnswer1:
      "ularni hamma joyda qabul qilishadi; amalda ularni kuzatib turishning iloji yo‘q",
    noAnswer2: "ular ishonchli; ularni hamma joyda qabul qilishadi;",
    answer:
      "ular ishonchli; ularni hamma joyda qabul qilishadi; amalda ularni kuzatib turishning iloji yo‘q",
    noAnswer3: "ular ishonchli; amalda ularni kuzatib turishning iloji yo‘q",
  },
  {
    question: "“Banknota” so‘zining ma’nosi?",
    noAnswer1: "fransuzcha “bank” va “note” so‘zlaridan olingan",
    noAnswer2: "“bank puli” ma’nosini anglatadi",
    noAnswer3: "“bank valyutasi” ma’nosini anglatadi",
    answer:
      "inglizcha “bank” va “note” so‘zlaridan olingan bo‘lib, “bank yozuvi” ma’nosini anglatadi",
  },
  {
    question:
      "Bu tovarlar va xizmatlarni naqd pulsiz shaklda to‘lash, pullarni saqlash va tashish, kerak bo‘lgan\r\nhollarda esa, naqd pullarni olish (naqdlashtirish) uchun zarur hisoblangan zamonaviy qulay\r\ninstrumentdir",
    answer: "Bank to‘lov (plastik) kartalar",
    noAnswer1: "ID kartalar",
    noAnswer2: "bankomat",
    noAnswer3: "click xizmati",
  },
  {
    question: "PIN-kod – ?",
    noAnswer1: "bu karta egasi to‘g‘risidagi ma’lumot",
    noAnswer2: "bu karta to‘g‘risidagi konfidensial ma’lumot",
    noAnswer3: "bu konfidensial ma’lumot",
    answer: "bu karta egasi to‘g‘risidagi konfidensial ma’lumot",
  },
  {
    question:
      "“Bankomat” so‘zi qaysi so‘zlarning qisqartirilishidan kelib chiqqan?",
    answer: "“bank avtomati”",
    noAnswer1: "“bank ma'lumoti”",
    noAnswer2: "“bank pulyumoti”",
    noAnswer3: "“bank promoti”",
  },
  {
    question: "Birinchi bankomatlar qachon va qayerda paydo bo‘lgan?",
    noAnswer1: "o‘tgan asrning 60-yillarida Yevropada",
    noAnswer2: "o‘tgan asrning 60-yillarida AQShda",
    noAnswer3: "o‘tgan asrning 50-yillarida AQSh va Yevropada",
    answer: "o‘tgan asrning 60-yillarida AQSh va Yevropada",
  },
  {
    question: "Firibgarlikning usullaridan biri?",
    answer: "skimming",
    noAnswer1: "PIN",
    noAnswer2: "VISA",
    noAnswer3: "swimming",
  },
  {
    question:
      "O‘zbekiston Respublikasi o‘z milliy valyutasini ishlab chiqarish uchun Markaziy bank huzurida\r\nqaysi korxona tashkil etgan?",
    noAnswer1: "“Davlat ramzi” Davlat ishlab chiqarish birlashmasini",
    noAnswer2: "“Davlat valyutasi” Davlat ishlab chiqarish birlashmasini",
    answer: "“Davlat belgisi” Davlat ishlab chiqarish birlashmasini",
    noAnswer3: "“Davlat puli” Davlat ishlab chiqarish birlashmasini",
  },
  {
    question:
      "Banknot, pasport blanklari, turli qimmatli qog‘ozlar va boshqa qimmatliklarni xalqaro talablarga\r\njavob beradigan, yuqori darajada himoyalangan mahsulotlar ishlab chiqarish imkoniyatlari\r\nyaratilgan.",
    answer: "Bosma fabrikasida",
    noAnswer1: "Qog‘oz fabrikasida",
    noAnswer2: "Zarbxonada",
    noAnswer3: "Markaziy bankda",
  },
  {
    question:
      "Sifatli va himoya belgilariga ega bo‘lgan qog‘oz mahsuloti ishlab chiqarish hamda Toshkent\r\nBosma fabrikasi qog‘oz xom-ashyosiga bo‘lgan talabini to‘liq ta’minlash yo‘lga qo‘yilgan.",
    noAnswer1: "Bosma fabrikasida",
    noAnswer2: "Zarbxonada",
    answer: "Qog‘oz fabrikasida",
    noAnswer3: "Markaziy bankda",
  },
  {
    question:
      "Tanga, medal va orden, yo‘lovchi tashish transporti uchun jetonlar va boshqa zaruriy\r\nmahsulotlarni ishlab chiqarish orqali respublikamizni ushbu mahsulotlarga bo‘lgan talabini\r\nqondirish imkoniyati yaratilgan.",
    noAnswer1: "Bosma fabrikasida",
    noAnswer2: "Qog‘oz fabrikasida",
    noAnswer3: "Markaziy bankda",
    answer: "Zarbxonada",
  },
  {
    question: "Kreditlarga xos bo‘lgan qanday firibgarliklar uchraydi?",
    noAnswer1:
      "Kredit bo‘yicha yolg‘onchasiga qo‘shib to‘lash. Siz olmagan kredit. “Do‘stlik” bo‘yicha\r\nmajburiyatlar. Bir necha minutda kredit. Kredit “qora” brokeri.",
    noAnswer2:
      "Siz olmagan kredit. “Do‘stlik” bo‘yicha majburiyatlar. Bir necha minutda kredit. Kredit “qora”\r\nbrokeri. Bank oldidagi qarzdorlikni “hamkorlikda moliyalashtirish”",
    noAnswer3:
      "Kredit bo‘yicha yolg‘onchasiga qo‘shib to‘lash. Siz olmagan kredit. “Do‘stlik” bo‘yicha\r\nmajburiyatlar. Bir necha minutda kredit. Bank oldidagi qarzdorlikni “hamkorlikda\r\nmoliyalashtirish”.",
    answer:
      "Kredit bo‘yicha yolg‘onchasiga qo‘shib to‘lash. Siz olmagan kredit. “Do‘stlik” bo‘yicha\r\nmajburiyatlar. Bir necha minutda kredit. Kredit “qora” brokeri. Bank oldidagi qarzdorlikni\r\n“hamkorlikda moliyalashtirish”.",
  },
  {
    question:
      "Unda oldin kelgan investorlarga to‘lanmalar keyin (yangi) kelgan investorlarning pul tushilmalari\r\nhisobidan amalga oshiriladi.",
    answer: "moliyaviy piramida",
    noAnswer1: "piramida",
    noAnswer2: "pulli piramida",
    noAnswer3: "iqtisodiy piramida",
  },
  {
    question:
      "Ko‘plab moliyaviy piramidalarning eng asosiy va o‘zgarmaydigan belgisi.",
    noAnswer1: "yuqori xarajat va’da qilish",
    noAnswer2: "valyuta va’da qilish",
    answer: "yuqori daromad va’da qilish",
    noAnswer3: "oltin va’da qilish",
  },
  {
    question:
      "Valyuta kurslarining tebranish (o‘zgarish) sabablari to‘g‘risidagi odamlarning bu tarzdagi\r\n“ogohligi”dan valyuta bozoridagi savdo.",
    noAnswer1: "Exchange",
    noAnswer2: "Uzex",
    noAnswer3: "Firefox",
    answer: "Forex",
  },
  {
    question: "Forexda faqat …........ yutuqli holda bo‘ladi.",
    noAnswer1: "diler",
    noAnswer2: "treyder",
    noAnswer3: "haridor",
    answer: "broker",
  },
  {
    question: "Forex bozorida ishlab topish – ?",
    noAnswer1: "juda oson",
    noAnswer2: "Murakkab",
    answer: "o‘ta murakkab",
    noAnswer3: "oson",
  },
  {
    question: "Korxona faoliyatini rejalashtirish qanday ahamiyatga ega?",
    answer:
      "Rejalashtirish - korxona samarali faoliyatinining omillarini tanlash va o‘zaro bog‘lash shaklidir",
    noAnswer1: "Rejalashtirish - korxona samarali faoliyatining omilidir",
    noAnswer2:
      "Rejalashtirish - korxona faoliyatini tashkil etuvchi omillar yig‘ish jarayonidir",
    noAnswer3:
      "Rejalashtirish- korxona faoliyatini tashkil etish va tugatish omilidir",
  },
  {
    question: "Korxona rejasi bu…. (to‘g‘ri javobni bering)",
    noAnswer1:
      "Ko‘zda tutilgan iqtisodiy samaradorlikni ilmiy va amaliy jihatdan asoslash",
    noAnswer2:
      "Tadbirkorlik faoliyati bilan bog‘liq bo‘lgan aniq hisoblar tizimi",
    noAnswer3:
      "Maqsadni belgilash, yo‘nalishlarini va vazifalarini aniqlash hamda nazorat qilishda muvofiqlikni\r\nta’minlashdir",
    answer:
      "Maqsadlarga erishish chora-tadbirlarini oldindan ishlab chiqish hamda resurslar orasida\r\nmuvofiqlikni ta’minlash",
  },
  {
    question: "Maqsad- bu …….",
    noAnswer1: "Foydani maksimallashtirish",
    noAnswer2: "Obyekt faoliyati haqidagi tushuncha",
    answer: "Obyektning kelgusidagi istalgan holati",
    noAnswer3: "Korxona imidji va tovar markasi",
  },
  {
    question:
      "Zarur hisob kitoblar hamda dalillar asosida korxona faoliyatining qisqa va uzoq muddatli\r\nstrategiyasini aniqlash – bu",
    noAnswer1: "Rejalashtirish maqsadi",
    noAnswer2: "Rejalashtirish mohiyati",
    answer: "Rejalashtirish vazifasi",
    noAnswer3: "Rejalashtirish mexanizmi",
  },
  {
    question:
      "Korxonada rejalashtirilayotgan reja ko‘rsatkichlarini asoslash yo‘llari, uslublarining tarkibi\r\nshuningdek ichki reja mazmuni, shakli, strukturasi va tuzish tartibini nima belgilaydi?",
    noAnswer1: "Rejalashtirish texnologiyasi",
    noAnswer2: "Rejalashtirish predmeti",
    noAnswer3: "Rejalashtirish uslubiyati",
    answer: "Rejalashtirish usuli",
  },
  {
    question: "Ko‘rsatkichlar orasida muvofiqlikni va bog‘liqlikni ta’minlaydi",
    answer: "Balans uslub",
    noAnswer1: "Ekstropolyatsiya uslub",
    noAnswer2: "Normativ uslub",
    noAnswer3: "Iqtisodiy matematik uslub",
  },
  {
    question: "Ko‘rsatkich - ....",
    noAnswer1: "Jarayonning faqat miqdoriy hajmini ifodalaydi",
    noAnswer2:
      "Jarayon yoki hodisaning moddiy buyumlashgan holatini hamda mazmunini tavsiflaydi",
    answer:
      "Jarayonning yoki hodisaning ijtimoiy iqtisodiy holatini, mohiyatini hamda mazmunini\r\ntavsiflaydi",
    noAnswer3:
      "Jarayon yoki hodisaning ham miqdor va sifat tomonlarini tavsiflaydi",
  },
  {
    question: "Ishlab chiqarish faoliyatini ifodalaydi ...",
    answer: "Umumiy ko‘rsatkich",
    noAnswer1: "Xususiy ko‘rsatkich",
    noAnswer2: "Miqdor ko‘rsatkich",
    noAnswer3: "Natural ko‘rsatkich",
  },
  {
    question:
      "Ijtimoiy-mehnatni rejalashtirish obyekti bo‘lib nima xizmat qiladi?",
    noAnswer1: "Texnologik jihozlar",
    answer: "Mehnat resurslari",
    noAnswer2: "Ish haqi fondi",
    noAnswer3: "Iqtisodiy resurslar",
  },
  {
    question:
      "Quyidagi klassifikatsion belgilardan qaysi biri reja turlariga tegishli emas?",
    noAnswer1: "Asoslash usuliga ko‘ra",
    noAnswer2: "Maqsad turiga ko‘ra",
    answer: "Resurslar turi bo‘yicha",
    noAnswer3: "Mazmuniga ko‘ra",
  },
  {
    question: "Rejalashtirishning qanday umumiy klassik printsiplari mavjud?",
    noAnswer1: "Sistemalik, birlik, uzluksizlik, o‘zgaruvchanlik, aniqlilik",
    noAnswer2: "Zaruriylik, optimallik, birlik, uzluksizlik, o‘zgaruvchanlik",
    answer: "Zaruriylik, yagonalik, uzluksizlik, o‘zgaruvchanlik, aniqlik",
    noAnswer3:
      "Zaruriylik, komplekslilik, uzluksizlik, o‘zgaruvchanlik, aniqlilik",
  },
  {
    question: "Koordinatsiyalash – bu",
    noAnswer1: "Yaqin darajadagi obyektlar o‘rtasidagi aloqani belgilaydi",
    noAnswer2: "Turli darajadagi obyektlar o‘tasidagi aloqani belgilaydi",
    answer: "Bir xil darajadagi obyektlar o‘rtasidagi aloqani belgilaydi",
    noAnswer3: "Tuzilgan rejaning maqsadga erishish usulini belgilaydi",
  },
  {
    question: "Iqtisodiy rivojlanishning qanday turlari mavjud?",
    answer: "Ideal, real, radikal",
    noAnswer1: "Induktiv va deduktiv",
    noAnswer2: "Ideal va radikal",
    noAnswer3: "Analitik va statistik",
  },
  {
    question: "Korxona potensiali deganda nimani tushunasiz?",
    noAnswer1: "Insonlarning iqtisodiy faoliyatga bo‘lgan qobiliyati majmuidir",
    noAnswer2:
      "Korxona potentsiali mehnat, iqtisodiy tashkiliy, ilmiy texnik texnik potentsiallar majmuidir.",
    answer:
      "Korxona potensiali uning qudrati, manbai, imkoniyatini harakterlaydigan ko‘rsatkichlar yoki\r\nomillar yig‘indisi, iqtisodiy faoliyatda foydalanadigan vositalar, zahiralar, qobiliyatlar,\r\nresurslardir",
    noAnswer3:
      "Korxona potentsiali tashkilotining rejalashtirilgan va xizmatlarni bajarish uchun zarur bo‘lgan\r\nmehnat, material, moliyaviy va boshqa resurslar majmuidir",
  },
  {
    question:
      "Mehnatga haq to‘lashni tashkil etishda qaysi me’yoriy hujjatga asoslanadi?",
    answer:
      "Mehnatga haq to‘lashni yagona tarif stavkasiga, 2009 yil 21-iyul 206-son",
    noAnswer1: "Mehnat kodeksining 153, 154, 156-moddalariga",
    noAnswer2:
      "Vazirlar mahkamasining 2015 yil 13-iyundagi 164-sonli qarori bilan tasdiqlangan klassifikatorga",
    noAnswer3:
      "Mehnatga haq to‘lashni yagona tarif stavkasiga, 1999 yil 21-iyul 206-son",
  },
  {
    question: "Rivojlanish yo‘nalishlarini sifatda va sonda tasvirlash bu...",
    noAnswer1: "Reja vazifasi",
    noAnswer2: "Reja mohiyati",
    answer: "Reja maqsadi",
    noAnswer3: "Reja mexanizmi",
  },
  {
    question:
      "Material resurlardan foydalanish koeffitsienti qanday aniqlanadi?",
    answer:
      "Haqiqiy material resurslari sarfini material sarfi normasiga nisbati orqali",
    noAnswer1: "Detal og‘irligini yarim tayyor mahsulot og‘irligiga nisbati",
    noAnswer2:
      "Sotilayotgan chiqindilarning og‘irligini sotilayotgan chiqindilar bahosiga nisbati",
    noAnswer3: "Yillik ishlab chiqarish ‘ajmini o‘rtacha quvvatga nisbati",
  },
  {
    question: "Korxona xodimlari deganda kimlarni tushunasiz?",
    noAnswer1: "Asosiy va yordamchi xodimlar birlashuvi",
    noAnswer2:
      "Injener – texnik xodimlar, xizmatchilar, shogirdlarning maqsadga muvofiq birlashuvi",
    noAnswer3:
      "Adminsrativ boshqaruv xodimlari, injener texnik xodimlar va xizmatchilar yig‘indisi",
    answer:
      "Foyda yoki daromad olish holda o‘z moddiy ehtiyojlarini qondirishga qaratilgan yagona ish\r\nfaoliyati bilan band bo‘lgan turli malaka va toifadagi xodimlar yig‘indisi",
  },
  {
    question: "Zaruriy ishchilar sonini aniqlash uslubiga quyidagilar kirmaydi",
    noAnswer1:
      "Vaqtbirligi davomida ishlab chiqarilgan mahsulot miqdori bo‘yicha",
    noAnswer2: "Xizmatko‘rsatish me’yori bo‘yicha",
    noAnswer3: "Mahsulotbirligiga sarflangan vaqt sig‘imi bo‘yicha",
    answer: "Foyda me’yori bo‘yicha",
  },
  {
    question: "Real ish haqini nominal ish haqidan farqi nimada?",
    noAnswer1:
      "Real ish haqi – haqiqiy ishlangan vaqt uchun to‘lovlar, nominal ish haqi - kunlik yo‘qotishlar\r\nuchun to‘lovlardir",
    noAnswer2:
      "Real ish haqi –amaldagi ish haqi stavkasi yoki ishchi oy vaqti birligidagi qiymati, nominal ish haqi\r\nesa ortiqcha soatlar uchun to‘lanadi.",
    answer:
      "Real ish haqi – nominal ish haqiga sotib olish mumkin bo‘lgan tovar, nominal ish haqi esa\r\nsarflangan mehnat uchun oladigan pul mablag‘lari summasidir.",
    noAnswer3:
      "Real ish haqi – ishlangan vaqt uchun to‘lanadi, nominal ish haqi esa ortiqcha soatlar uchun\r\nto‘lanadi.",
  },
  {
    question: "Ish haqi fondidan qaysi biri asosiy ish haqi hisoblanadi?",
    noAnswer1: "Kunlik ish haqi fondi.",
    noAnswer2: "Ta’rif ish haqi fondi.",
    answer: "Soatli ish haqi fondi.",
    noAnswer3: "Oylik ish haqi fondi.",
  },
  {
    question:
      "Ishbay ish haqi shaklida mehnatga haq to‘lashga quyidagilar xosdir?",
    noAnswer1: "Lavozim okladlari va oylik maoshlar",
    noAnswer2: "Ishlangan ish soatlari",
    answer: "Tayyorlangan mahsulot hajmi va ko‘rsatilgan xizmatlar soni",
    noAnswer3: "Ko‘rsatilgan xizmatlar soni",
  },
  {
    question: "Korxonaning ish haqi fondi quyidagilardan iborat bo‘ladi:",
    noAnswer1: "Asosiy ish haqi va mukofotlardan",
    noAnswer2: "Faqat asosiy ish haqidan",
    noAnswer3: "Mukofotlardan",
    answer: "Asosiy va qo‘shimcha ish haqidan",
  },
  {
    question:
      "Qaysi ish haqi fondi kunlik ruxsat etilgan imtiyozli uzilishlar uchun qo‘shimcha to‘lovlarni\r\ne’tiborga oladi?",
    noAnswer1: "Oylik",
    answer: "Kunlik",
    noAnswer2: "Soatlik",
    noAnswer3: "Yillik",
  },
  {
    question: "Soatlik ish haqi tarkibiga quyidagilar kiradi:",
    answer:
      "Ishbayish haqi fondi, vaqtbay ish haqi fondi, mukofot, tungi soatda ishlanganlik uchun\r\nto‘lovlar, brigadirlik uchun to‘lov, shogird tayyorlaganlik uchun to‘lov, bayram kunlari ishlaganlik\r\nuchun to‘lov",
    noAnswer1:
      "Mehnat ta’tili uchun to‘lov,to‘g‘ri ish haqi fondi, o‘smirlarga qisqartirilgan soatlar uchun to‘lov,\r\nmukofotlar, brigadirlik uchun to‘lov, shogird tayyorlaganlik uchun to‘lov",
    noAnswer2:
      "Xizmat safari uchun to‘lov, ishbay ish haqi fondi, vaqtbay ish haqi fondi, mukofot, tungi soatda\r\nishlanganlik uchun to‘lovlar, brigadirlik uchun to‘lov, shogird tayyorlaganlik uchun to‘lov",
    noAnswer3:
      "To‘g‘ri ish haqi fondi, o‘smirlarga qisqartirilgan soatlar uchun to‘lov, mukofotlar, brigadirlik\r\nuchun to‘lov, shogird tayyorlaganlik uchun to‘lov, bayram kunlari ishlaganlik uchun to‘lov",
  },
  {
    question:
      "Ishlab chiqarish uchastkasida 5 ta o‘smir ishlaydi, ularning o‘rtacha tarif stavkasi 620 so‘mga\r\nteng. Yildagi ish kunlari soni 240 kun. O‘smirlar uchun qo‘shimcha to‘lov summasini aniqlang.",
    noAnswer1: "550 000 so‘m",
    noAnswer2: "645000 so‘m",
    answer: "744000 so‘m",
    noAnswer3: "600 000 so‘m",
  },
  {
    question: "O‘rtacha kunlik ish haqi quyidagicha aniqlanadi",
    noAnswer1:
      "Ish haqining kunlik fondi jami ishlangan ish soatlariga bo‘linadi",
    noAnswer2:
      "Ishhaqining soatlik fondi jami ishlangan ish soatlariga bo‘linadi",
    noAnswer3: "Ishhaqining oylik fondi ishlangan kishi soatlariga bo‘linadi",
    answer: "Ish haqining kunlik fondi jami ishlangan kishi kunlarga bo‘linadi",
  },
  {
    question:
      "Korxonaning ish haqi fondini rejalashtirish quyidagi tartibda amalga oshiriladi. To‘g‘ri tartibni\r\nbelgilang.",
    answer:
      "Soatlik ish haqi fondi, kunlik ish haqi fondi, oylik yoki yillik ish haqi fondi",
    noAnswer1: "Oylik, kunlik, soatlik ish haqi fondi",
    noAnswer2:
      "Kunlik ish haqi fondi, oylik ish haqi fondi va yillik ish haqi fondi",
    noAnswer3:
      "To‘g‘ri ish haqi fondi, ishbay ish haqi fondi, vaqtbay ish haqi fondi va qo‘shimcha to‘lovlar fondi",
  },
  {
    question: "Qo‘shimcha to‘lovlar quyidagilarni ko‘zda tutadi.",
    noAnswer1: "Qo‘shimcha ishlaganligi uchun to‘lovlarni",
    noAnswer2:
      "Korxona rahbariyati tomonidan ruxsat etilgan uzilishlar uchun to‘lovlarni",
    answer:
      "Mehnatqonunchiligida ko‘zda tutilgan imtiyozli uzulishlar uchun to‘lovlarni",
    noAnswer3: "Moddiy yordam uchun berilgan to‘lovlarni",
  },
  {
    question: "Ishbay ish haqi quyidagicha aniqlanadi:",
    noAnswer1: "Baho ko‘paytiriladi daromadga",
    noAnswer2: "Baho ko‘paytiriladi ishlab chiqarilgan mahsulot qiymatiga",
    noAnswer3: "Ishlanganish soatlari ko‘paytiriladi o‘rtacha tarif stavkasiga",
    answer: "Baho ko‘paytiriladi mahsulot hajmining naturadagi ifodasiga",
  },
  {
    question:
      "O‘smirlarning asosiy ish haqi, ya’ni ishlab chiqarilgan mahsuloti yoki ishlagan ish soati uchun\r\nto‘lanadigan asosiy ish haqi qaysi fond tarkibiga kiritiladi.",
    answer: "To‘g‘ri ish haqi fondi",
    noAnswer1: "Kunlikish haqi fondi",
    noAnswer2: "Oylik ish haqi fondi",
    noAnswer3: "Yillik ish haqi fondi",
  },
  {
    question: "O‘rtacha xarajatlar...",
    answer:
      "Birlik mahsulotga Ishlab chiqarish xarajatlari miqdorini belgilovchi xarajatlardir.",
    noAnswer1:
      "Ishlabchikarilganmahsulothajmigabog‘liqxoldao‘zgaradiganxarajatlardir.",
    noAnswer2:
      "Har bir mahsulot xajimidagi doimiy va o‘zgaruvchan xarajatlar summasidir.",
    noAnswer3:
      "Ishlab chiqarish hajmiga bog‘liq xolda o‘zgarmaydigan xarajatlardir.",
  },
  {
    question: "Sof diskont daromadga to‘g‘ri ta’rifni bering",
    noAnswer1:
      "Investitsiya loyihasini ekspluatatsiya davridagi pul oqimlarining kelajakdagi qiymati bilan uni\r\namalga oshirishga investitsiya qilinuvchi mablag‘ o‘rtasidagi farq;",
    noAnswer2:
      "Investitsiya loyihasini ekspluatatsiya davrida investitsiya mablag‘lari bilan erishiladigan\r\ndaromadlar orasidagi farq;",
    answer:
      "Investitsiya loyihasini ekspluatatsiya davrida hozirgi qiymatga keltirilgan pul oqimlari summasi\r\nbilan uni amalga oshirishga investitsiya qiluvchi mablag‘lar o‘rtasidagi farq;",
    noAnswer3:
      "Investitsiya loyihasini ekspluatatsiya davrida pul oqimlarining erishiladigan daromadlar\r\norasidagi farq;",
  },
  {
    question: "Ish haqi fondini yiriklashtirilgan usulda rejalashtirish bu - …",
    noAnswer1:
      "Ish haqi fondini turli tadbirlar natijasida erishilgan ish haqi iqtisodi asosida aniqlash",
    noAnswer2:
      "Ish haqi fondini minimal ish haqi miqdorini oshishi asosida aniqlash",
    answer:
      "Ish haqi uchun mablag‘larni ish haqi fondi indeksi yordamida aniqlash",
    noAnswer3:
      "Ish haqi fondini minimal ish haqi miqdorini kamayish asosida aniqlash",
  },
  {
    question:
      "Rejalashtirishda foydaning qanday ko‘rsatkichlaridan foydalaniladi?",
    noAnswer1: "Balans foyda, normativ foyda",
    noAnswer2: "Sof foyda, normativ foyda",
    answer: "Balans foyda, asosiy faoliyat foydasi, sof foyda,",
    noAnswer3: "Balans foyda",
  },
  {
    question: "Umumiy kal`kulyatsiya bu ...",
    noAnswer1:
      "Bu har bir mahsulot turini ishlab chiqarish uchun sarflanadigan xarajatlar",
    noAnswer2: "Bu ishlab chiqarishga sarflangan umumiy xarajatlar",
    noAnswer3: "Jami xarajatlarni hisoblash usuli",
    answer:
      "Bu mahsulot birligini ishlab chiqarishga sarflanayotgan o‘rtacha xarajatlar",
  },
  {
    question: "Tur kal`kulyatsiyasi bu ...",
    noAnswer1:
      "Bu mahsulot birligini ishlab chiqarishga sarflanayotgan o‘rtacha xarajatlar",
    noAnswer2: "Bu ishlab chiqarishga sarflangan umumiy xarajatlar",
    answer:
      "Bu har bir mahsulot turini ishlab chiqarish uchun sarflanadigan xarajatlar",
    noAnswer3:
      "Bu mahsulot birligini ishlab chiqarishga sarflanayotgan umumiy xarajatlar",
  },
  {
    question:
      "Ishlab chiqarish hajmiga bog‘liqlik darajasiga ko‘ra qanday xarajatlar ajratiladi?",
    noAnswer1: "Asosiy, ustama",
    noAnswer2: "O‘zgaruvchan, ustama.",
    noAnswer3: "O‘zgaruvchan, bilvosita",
    answer: "O‘zgaruvchan, shartli doimiy.",
  },
  {
    question: "2024-yil nomini ko‘rsating",
    noAnswer1: "=\r\nYoshlar va biznes yili",
    noAnswer2: "Biznes va yoshlarni qo‘llab-quvvatlash yili",
    answer: "Yoshlar va biznesni qo‘llab-quvvatlash yili",
    noAnswer3: "Biznes va yoshlar yili",
  },
  {
    question:
      "“Mahsulot (ish, xizmat) lar tannarxiga kiritiladigan mahsulotlarni ishlab chiqarish va sotish\r\nbo‘yicha xarajatlar tarkibi hamda moliyaviy natijalarni shakllantirish haqida” gi Nizomda\r\nxarajatlar qaysi iqtisodiy belgilar bo‘yicha guruhlangan?",
    answer: "Iqtisodiy mazmun va mohiyatiga ko‘ra",
    noAnswer1:
      "Shakllanayotgan joyiga va qaysi maqsadda ishlatilayotganiga asosan",
    noAnswer2: "Ishlab chiqarish jarayonida qatnashuviga asosan",
    noAnswer3:
      "Ishlab chiqarish jarayonida qatnashuviga asosan va Iqtisodiy mazmun va mohiyatiga ko‘ra",
  },
  {
    question:
      "Qaysi belgilar asosida xarajatlar bir guruhga birlashtirilganda guruh modda deb ataladi.",
    noAnswer1: "Iqtisodiy mohiyati va mazmuniga asosan",
    noAnswer2: "Ishlab chiqarish jarayonida qatnashuviga asosan",
    answer:
      "Xarajatlarni qayerda shakllanishi va qanday maqsadlarda foydalanayotganiga asosan",
    noAnswer3: "Ishlab chiqarish jarayonida qatnashmasligiga asosan",
  },
  {
    question:
      "Qaysi belgilar asosida xarajatlar bir guruhga birlashtirilganda guruh element deb yuritiladi.",
    noAnswer1:
      "Xarajatlarni qayerda shakllanishi va qanday maqsadlarda foydalanayotgani",
    noAnswer2: "Ishlab chiqarish jarayonida qatnashuviga asosan",
    answer: "Iqtisodiy mohiyati va mazmuniga asosan",
    noAnswer3: "Ishlab chiqarish jarayonida qatnashmasligiga asosan",
  },
  {
    question: "Ishlab chiqarishga xarajatlar smetasi nima?",
    answer:
      "Ishlab chiqarish faoliyatining kelgusi davri uchun barcha sarflar yig‘ma rejasi",
    noAnswer1:
      "Ishlab chiqarish moliyaviy faoliyatning talab etilgan davr uchun barcha daromadlarining\r\njamlama rejasi",
    noAnswer2:
      "Ishlab chiqarish moliyaviy faoliyatining alohida davri uchun korxonaning barcha daromad va\r\nxarajatlarning jamlama rejasi",
    noAnswer3:
      "Ishlab chiqarish moliyaviy faoliyatining alohida davri uchun korxonaning barcha daromad va\r\nxarajatlarning jamlama rejasi va ishlab chiqarish moliyaviy faoliyatining kelgusi davri uchun\r\nbarcha sarflar yig‘ma rejasi",
  },
  {
    question: "Moliyaviy reja qanday asosiy bo‘limlardan tashkil topadi?",
    noAnswer1:
      "Foyda va zararlar to‘g‘risida prognoz reja, pul oqimlari rejasi, aktiv va passivlar prognoz balansi",
    noAnswer2:
      "Ishlab chiqarishni tayyorlash xarajatlari, foyda va zararlar, joriy xarajatlar",
    answer:
      "Foyda va zararlar, aktiv va passivlar prognoz balansi, pul oqimlari rejasi, asosiy kapital tarkibi,\r\nqarzlar bo‘yicha hisobot",
    noAnswer3:
      "Asosiy kapital tarkibi, amortizatsiya normasi, qarzlar bo‘yicha hisobot",
  },
  {
    question: "Qaysi ish haqi qo‘shimcha ish haqi hisoblanadi?",
    noAnswer1:
      "Tungi smenada ishlagani uchun to‘lov hamda brigadirlik uchun to‘lov",
    noAnswer2: "Shogird tayyorlagani uchun hamda mehnat ta'tili uchun to‘lov",
    answer:
      "Ruxsat etilgan imtiyozli vaqt uchun hamda mehnat ta'tillari uchun to‘lanadigan to‘lovlar",
    noAnswer3: "Brigadirlik uchun to‘lov",
  },
  {
    question: "Asosiy faoliyatdan ko‘rilgan foyda bu .......",
    noAnswer1:
      "Yalpi foyda minus davr xarajatlari plyus moliyaviy faoliyatdan ko‘rilgan daromadlar va minus\r\nzararlardir",
    noAnswer2:
      "Bu sotishdan olingan sof tushum bilan sotilgan mahsulotning ishlab chiqarish tannarxi orasidagi\r\nfarq",
    answer:
      "Yalpi foyda bilan davr xarajatlari orasidagi farq hamda plyus asosiy faoliyatdan ko‘rilgan\r\nboshqa daromadlar yoki minus boshqa zararlardir",
    noAnswer3: "Yalpi foyda minus moliyaviy faoliyat bilan bog‘liq xarajatlar",
  },
  {
    question: "Rentabellik ko‘rsatkichi nima?",
    noAnswer1:
      "Rentabellik absolyut kattalik bo‘lib, korxona samaradorligini ifodalaydigan ko‘rsatkichdir.",
    noAnswer2:
      "Mahsulot ishlab chikarishga sarflangan xarajatlarni ifodalaydi.",
    noAnswer3:
      "Korxona faoliyatini natijasini ifodalaydigan miqdor ko‘rsatkichi hisoblanadi.",
    answer:
      "Rentabellik korxona faoliyatining foydalilik darajasini ifodalaydigan nisbiy ko‘rsatkichdir.",
  },
  {
    question:
      "Firmaning rejalashtirilgan ishlab chiqarish dasturini bajarish uchun zarur bo‘lgan material\r\nresurslarga bo‘lgan ehtiyoji aks ettirilgan byudjet bu-",
    noAnswer1: "Sotib olish byuljeti",
    noAnswer2: "Mehnat byudjeti",
    answer: "Moddiy byudjet",
    noAnswer3: "Naqd pul byudjeti",
  },
  {
    question: "Daromadlilik indeksi nimani ko‘rsatadi?",
    noAnswer1: "Daromadlik normasi yeki loyixaning foydaliligi.",
    noAnswer2: "Diskont normasi.",
    noAnswer3:
      "Kapital qo‘yilmalar va olingan umumiy samara o‘rtasidagi nisbati kattaligidir.",
    answer:
      "Keltirilgan samara summasini kapital qo‘yilmalar umumiy kattaligiga nisbati.",
  },
  {
    question: "«Biznes- reja» nima?",
    answer:
      "Tadbirkorlik faoliyatining barcha asosiy tomonlari ifodalanadigan hujjat.",
    noAnswer1: "Raqobatchilar moliyaviy xolatini ifodalaydigan xujjat.",
    noAnswer2: "Tovarlarni tarkatish taktikasini ifodalaydigan xujjat.",
    noAnswer3: "Narxlar soxasidagi strategiyani belgilaydigan xujjat.",
  },
  {
    question: "Biznes-rejaning bosh ichki maqsadi nima?",
    noAnswer1: "Tadbirkorlik faoliyatini boshkarish uchun asos bo‘lishi.",
    noAnswer2: "Moliyalashtirish strategiyasini aniqlash.",
    answer: "Faoliyatning muvaffaqqiyatiga ishontirish.",
    noAnswer3: "Sotish bozorini Baholash",
  },
  {
    question:
      "Iqtisodiy samaradorlikni ifodalovchi ko‘rsatkichlar quyidagilardan iborat:",
    noAnswer1: "Mahsulotni sotish hajmi va foyda miqdori;",
    noAnswer2: "Korxona aktivlari va passivlari;",
    noAnswer3: "Korxona fond qaytimi va fond sig‘imi;",
    answer: "Foyda miqdori va daromadliligi;",
  },
  {
    question: "Bahodan chegirishdan ko‘zda tutilgan maqsad nima?",
    noAnswer1: "Raqobatni yumshatish",
    noAnswer2: "Baholarni korrektirovka qilish",
    answer: "Istemolchi (haridor) larni jalb qilish",
    noAnswer3: "Tavakkalchilikni kamaytirish",
  },
  {
    question:
      "Mehnatga haq to‘lash xarajatlari biznes rejaning qaysi bo‘limida amalga oshiriladi?",
    noAnswer1: "Moliyaviy rejada",
    noAnswer2: "Xarajatlar rejasida",
    noAnswer3: "Marketing rejasida",
    answer: "Tashkiliy rejada",
  },
  {
    question: "Tovar deb, nimaga aytiladi?",
    noAnswer1: "yaratilgan mahsulotga",
    noAnswer2: "iste’molga tushgan barcha moddiy ne’mat va xizmatlarga",
    answer:
      "kishilar ehtiyojini qondiradigan va bozor uchun ishlab chiqarilgan mahsulotga.",
    noAnswer3: "o‘zgalar ehtiyojini qondiruvchi vositalarga",
  },
  {
    question: "Kritik nuqta bu-",
    noAnswer1:
      "Ishlab chiqarish hajmiga bog‘liq xolda o‘zgarmaydigan xarajatlar.",
    noAnswer2:
      "Umumiy kattaligi ishlab chiqarish hajmiga bog‘liq bo‘lgan xarajatlar darajasi.",
    answer: "Barcha umumiy xarajatlarni to‘liq qoplaydigan tushum darajasi.",
    noAnswer3:
      "Savdo foydasi va umumiy ishlab chiqarish xarajatlari orasidagi farq",
  },
  {
    question: "Rejalashtirish usuli...",
    answer:
      "Korxonalarda reja ko‘rsatkichlarini asoslash yo‘llari va qoidalari, shuningdek firma ichki\r\nrejalarining mazmuni, shakli, tuzilmasi va tartibini ifodalaydi",
    noAnswer1:
      "Korxonalarda rejalashtirish borasida qonuniyatlar, ilmiy tamoillar, zamonaviy talablar, iqtisodiy\r\nko‘rsatmalar majmuasi",
    noAnswer2:
      "Rejalashtirish- korxona faoliyatini tashkil etish bosqichlari,rejalarning shakli, tuzilmasi, tartibi",
    noAnswer3: "Rejalashtirish texnologiyasidir",
  },
  {
    question:
      "Maqsad turiga ko‘ra rejalashtirishning qanday turlari qo‘llaniladi?",
    noAnswer1: "Operativ, normativ, taktik, joriy",
    answer: "Operativ , taktik, strategik, normativ",
    noAnswer2: "Taktik, strategik, reaktiv, dastlabki, ta’minot-sotuv",
    noAnswer3: "Strategikva normativ",
  },
  {
    question:
      "Quyidagi tartib rejalarni tuzish ishlarini tashkil qilishning qaysi ko‘rinishiga tegishli?\r\nBosh maqsadlar bo‘yicha dastlabki rejalar tuziladi va quyi bo‘g‘inlarda ular aniqlashtiriladi.\r\nSo‘ngra quyidan yuqoriga harakat amalga oshiriladi. Bunda xususiy rejalar orasidagi farqlar\r\nbartaraf etiladi va yanada samarali yechimlar qo‘shiladi.",
    noAnswer1: "Pastdan yuqoriga",
    noAnswer2: "Yuqoridan pastga",
    answer: "Aralash",
    noAnswer3: "Gorizontal",
  },
  {
    question: "Analitik - hisoblash uslubi mohiyati – ?",
    noAnswer1: "Vazifalarni tarkibiy qismga va operatsiyalarga taqsimlash",
    noAnswer2: "Normativlarni ishlab chiqish",
    answer: "Normativlar asosida normani belgilash",
    noAnswer3: "Norma va normativlarni kuzatish asosida belgilash",
  },
  {
    question: "Reja tuzish tartibi necha xil ko‘rinishda amalga oshiriladi?",
    noAnswer1: "Gorizontal, vertikal aralash",
    answer: "Yuqoridan pastga, patdan yuqoriga va aralash",
    noAnswer2:
      "Birinchi ko‘rinishda barcha bo‘limlar bo‘yicha rejalar bir xil vaqtda ishlab chiqilib, so‘ngra\r\nmuvofiqlashtiriladi, ikkinchi ko‘rinishda esa bo‘limlar bo‘yicha rejalar mantiqiy ketma-ketlikda\r\nishlab chiqilib, so‘ngra muvofiqlashtiriladi",
    noAnswer3:
      "Talab aniqlanadi va ishlab chiqarish hajmi hamda belgilanadi, so‘ngra ushbu ko‘rsatkich asosida\r\nboshqa bo‘limlar o‘z rejalarini tuzadilar, ishlab chiqadi yoki avvalo korxonaning kelgusidagi\r\nmaqsadlari borasida qaror qabul qilinadi va shu asosida reja ko‘rsatkichlari ishlab chiqiladi",
  },
  {
    question: "Rejalashtirish jarayoni quyidagi bosqichlardan iborat:",
    noAnswer1:
      "Vazifani aniqlash, vositalarni tanlash, maqsadni belgilash va nazorat",
    noAnswer2:
      "Vositalarni tanlash, nazorat, vazifani aniqlash va maqsadni belgilash",
    noAnswer3:
      "Maqsadni belgilash, vositalarni tanlash, nazorat va vazifani aniqlash",
    answer:
      "Maqsadni belgilash, vazifani aniqlash, vositalarni tanlash va nazorat",
  },
  {
    question: "Kalendar rejalashtirish bu–…",
    answer:
      "Korxonaning yillik rejasini o‘n kunlik, hafta, kun va smena bo‘yicha aniqlashtirish",
    noAnswer1:
      "Korxonaning yilik rejasini bo‘linmalar va bajaruvchilar bo‘yicha aniqlashtirish",
    noAnswer2:
      "Korxonaning yillik rejasini faqat ish kunlari bo‘yicha aniqlashtirish",
    noAnswer3:
      "Korxonaning yillik rejasini kalendar’ kunlar bo‘yicha aniqlashtirish",
  },
  {
    question: "Ishlab chiqarishning asosiy maqsadi –",
    noAnswer1: "davlat iqtisodiyotini rivojlantirish",
    answer: "oshib boruvchi ehtiyojlarni qondirish.",
    noAnswer2: "davlatning ishlab chiqarish potentsialini oshirish",
    noAnswer3: "ilmiy – texnika taraqqiyotini ta’minlash",
  },
  {
    question:
      "Yangi mahsulotni prognozlashtirish jarayonida qanday usul foydalaniladi?",
    noAnswer1: "Ekspert baholar, statistik baholar, modellashtirish",
    noAnswer2: "Ekspert baholar, analitik, iqtisodiy matematik usul",
    answer:
      "Ekspert baholar, ekstrapolyatsiya (statistik baholar), solishtirish",
    noAnswer3: "Ekstrapolyatsiya (statistik baholar), solishtirish, analitik",
  },
  {
    question:
      "Korxonani boshqarishda boshqarilishning qaysi strukturalaridan foydalaniladi?",
    answer:
      "Chiziqli, funktsional, chiziqli – funktsional, funksional – shtabli",
    noAnswer1: "Chiziqli va funktsional",
    noAnswer2: "Funktsional, chiziqli, chiziqsiz",
    noAnswer3: "Funktsional, chiziqli, texnik – funktsional",
  },
  {
    question: "Zararsizlik nuqtasi – bu...",
    noAnswer1: "Tushum va xarajatlar orasidagi farq",
    answer: "Barcha xarajatlar to‘liq qoplanadigan tushum",
    noAnswer2: "Tushumga bog‘liq holda o‘zgaradigan xarajatlar",
    noAnswer3: "Tushumga bog‘liq holda o‘zgarmas xarajatlar",
  },
  {
    question: "Tarif koeffitsienti – bu...",
    answer: "Razryadlar orasidagi farqlarni ifodalaydi",
    noAnswer1: "Ish haqi orasidagi farqni ifodalaydi",
    noAnswer2: "Tarif stavkalar orasidagi farqlarni ifodalaydi",
    noAnswer3: "Ishbay ish haqi orasidagi farqlarni ifodalaydi",
  },
  {
    question: "Korxonani ishlab chiqarish dasturining mohiyati nimada?",
    noAnswer1:
      "Yillik ishlab ishlab chiqarish ‘ajmi, nomenklutarsi, sifati va muddatini ifodalaydigan kompleks\r\nishlab chiqarish rejasidir",
    noAnswer2: "Sotish ‘ajmini ishlab chiqarish kompleks rejasi",
    noAnswer3:
      "Talabga mos ravishda yillik ishlab chiqarish ‘ajmi, nomenklaturasi va muddatini ifodalaydigan\r\nmahsulot ishlab chiqarish kompleks rejasidir",
    answer:
      "Bozor talab etgan tovar va xizmatlarni ishlab chiqarish yillik hajmi, nomenklaturasi, sifati va\r\nmuddatini ifodalaydigan kompleks ishlab chiqarish rejasi",
  },
  {
    question: "Ishlab chiqarish rejasi mazmunini quyidagilar tashkil etadi:",
    noAnswer1: "Ishlab chiqarish quvvatlarini hisoblash",
    noAnswer2: "Resurslarbo‘yicha sarflarni aniqlash",
    answer:
      "Korxonanimahsulot ishlab chiqarish bo‘yicha real imkoniyatlarini aniqlash",
    noAnswer3:
      "Ishlab chiqarish quvvatlarini hisoblash, korxonani mahsulot ishlab chiqarish bo‘yicha real\r\nimkoniyatlarini aniqlash, resurslar bo‘yicha sarflarni aniqlash",
  },
  {
    question: "Ishlab chiqarish dasturi bu",
    noAnswer1:
      "Turli ehtiyojlarni qondirishga yo‘naltirilgan mahsulotlar nomenklaturasi, assortimenti, sifati va\r\nmiqdorini ifodalovchi reja ko‘rsatkichlari tizimidir",
    noAnswer2:
      "Mahsulot ishlab chiqarish bo‘yicha material resurslar sarfini, mahsulotlar assortimentini,\r\njihozlar sonini ifodalovchi tizim",
    answer:
      "Mahsulotishlab chiqarish bo‘yicha Texnologik jarayon sxemasi, mahsulot turlari miqdori va\r\nsifatini belgilovchi tizim",
    noAnswer3:
      "Mahsulot ishlab chiqarish hajmini kvartallar, oylar va dekadalarda ifodalovchi tizim",
  },
  {
    question:
      "Material resurslarga bo‘lgan talab biznes rejaning qaysi bo‘limida aks ettiriladi?",
    noAnswer1: "Xarajatlar rejasi",
    noAnswer2: "Marketing rejasi",
    answer: "Ishlab chiqarish rejasi",
    noAnswer3: "Moliyaviy reja",
  },
  {
    question: "Ishlab chiqarish faoliyatini rejalashtirish - …….",
    noAnswer1:
      "Korxona va firmalarning rivojlanishini, xo‘jalik faoliyati shakllarini va iqtisodiy maqsadlarni\r\nasoslashni o‘rganadi",
    answer:
      "Iqtisodiy resurslarni tanlash va ulardan foydalanish qonunlari. tamoyillari, qoidalari va\r\nusullarini o‘rganadi",
    noAnswer2: "Iqtisodiy resurslarni boshqarish muammolarini o‘rganadi",
    noAnswer3:
      "Korxonaninghaqiqiy holatini tadqiq qilishni va uning kelgusidagi rivojlanish darajasini o‘rganadi",
  },
  {
    question:
      "Mehnat sarfi ifodasidagi mahsulot hajmi quyidagi ko‘rsatkichlar aniqlashga asos bo‘ladi",
    noAnswer1:
      "Material resurslarga talab hajmini, ish haqi fondi va ishchilar sonini aniqlash uchun",
    noAnswer2:
      "Jihozlar soni, ishchilar soni va moliyaviy natijalarni shakillantirish uchun",
    answer: "Ishchilar soni va ish haqi fondini aniqlash uchun",
    noAnswer3: "Baho, ishchilar soni va ish haqi fondini aniqlash",
  },
  {
    question: "“Biznes reja” quyidagi talablarga javob berishi lozim",
    noAnswer1: "Biznes strategiyasini amalga oshirish quroli bo‘lishi lozim",
    noAnswer2: "Mablag‘larni yo‘naltirishi lozim",
    answer: "Har bir ko‘rsatkich asoslasnishi shart",
    noAnswer3:
      "Rivojlanish yo‘nalishlarini son va sifat ko‘rsatkichlari tizimi sifatida ifodalashi lozim",
  },
  {
    question: "Qo‘shimcha to‘lov va kompensatsiyalar nima uchun xizmat qiladi",
    noAnswer1:
      "Qo‘shimcha to‘lov va kompensatsiyalar xodimlarning yuqori aktivligini rag‘batlantirishga\r\nyo‘nalitirilgan.",
    noAnswer2: "Ishlab chiqarish samaradorligini oshirishga xizmat qiladi.",
    answer:
      "Mehnat sharoitidagi chetlanishlarda ishchi kuchini qo‘shimcha xarajatlarini qoplash uchun\r\nbelgilanadi.",
    noAnswer3:
      "Qo‘shimcha to‘lov va kompensatsiyalar xodimlarning bajargan ishlariga to‘lovlarni ifodalaydi.",
  },
  {
    question: "Ishchilarning asosiy va qo‘shimcha ish haqi tushunchasi.",
    noAnswer1:
      "Asosiy ish haqi ishlagan vaqt uchun, qo‘shimcha ish haqi ishdan tashqari soatlar uchun\r\nto‘lanadi.",
    noAnswer2:
      "Asosiy ish haqi haqiqiy bajarilgan ish uchun, qo‘shimcha ish haqi esa qo‘shimcha soat\r\nuchunto‘lanadi.",
    noAnswer3:
      "Asosiy ish haqi ishlangan vaqt (bajarilgan ish, ishlab chiqarilgan mahsulot) uchun, qo‘shimcha\r\nish haqi esa ishlanmagan vaqt uchun to‘lanadi.",
    answer:
      "Asosiy ish haqi ishlangan vaqt uchun (xizmatlar, mahsulotlar hajmini bajarganligi uchun)\r\nto‘lanadi, qo‘shimcha ish haqi esa mehnat qonunlariga belgilangan ishlanmagan vaqt uchun\r\nqo‘shimcha to‘lovlardir.",
  },
  {
    question: "Ishlab chiqarish – bu",
    noAnswer1: "iqtisodiyotni moliyalashtiruvchi yagona manbaa",
    noAnswer2: "jamiyat hayoti uchun 2 – darajali rol o‘ynaydi",
    noAnswer3: "mehnat vositalarini mehnat predmeti va mehnatdan ajralishidir",
    answer: "ko‘payib boruvchi ehtiyojlarni qondiruvchi yagona manbaa.",
  },
  {
    question:
      "«Kalkulyatsiya obyekti» va «Kalkulyatsiya birligi» tushunchasi nimani ifodalaydi.",
    noAnswer1:
      "Kalkulyatsiya obyekti tannarx o‘lchov birligi kalkulyatsiya, birligi-mahsulot turi.",
    answer:
      "Kalkulyatsiya obyekti- mahsulot turi, kalkulyatsiya birligi – mahsulot birligi uchun xarajatlar",
    noAnswer2:
      "Kalkulyatsiya obyekti-birlik xizmat turi, kalkulyatsiya birligi - birlik mahsulot uchun material\r\nxarajatlari",
    noAnswer3:
      "Kalkulyatsiya obyekti mahsulot turi, birligi – tannarx xarajatlari o‘lchov birligi.",
  },
  {
    question: "Mahsulot tannarxi kalkulyatsiyasi nima?",
    answer:
      "Xarajatlarning kelib chiqish o‘rniga ko‘ra aloxida moddalarga taksimlanishi.",
    noAnswer1: "Mahsulot tannarxining xarajat elementlari buyicha joylanishi.",
    noAnswer2:
      "Korxonada ishlab chikarilayotgan mahsulot birligining tannarxi.",
    noAnswer3: "Moddiy va mehnat xarajatlarini guruxlanishi.",
  },
  {
    question:
      "Texnik iqtisodiy loyihada faoliyatning qaysi jihatlariga urg‘u beriladi?",
    noAnswer1: "Faoliyatning moliyaviy jihatlariga",
    noAnswer2: "Faoliyatning tijorat jihatlariga",
    answer: "Faoliyatning texnik va texnologik jihatlariga",
    noAnswer3: "Faoliyatning barcha jihatlariga",
  },
  {
    question: "Mahsulot rentabelligi qanday aniqlanadi?",
    answer: "Foydani uni olishga sarflangan xarajatlarga nisbatan orqali.",
    noAnswer1: "Mahsulotning bozor bahosini to‘la tannarxga nisbati orqali.",
    noAnswer2:
      "Balans foydani yillik umumiy soliq ajiratmalariga nisbati orqali.",
    noAnswer3: "Tannarx miqdorini foyda miqdoriga nisbati orqali.",
  },
  {
    question: "Biznes reja quyidagi asosiya vazifani bajaradi",
    noAnswer1: "Maqsadni amalga oshirish vositalari majmuasi",
    noAnswer2: "Havf-xatarni kamaytirish",
    answer: "Biznesni amalga oshirish konsepsiyasi",
    noAnswer3: "Korxona faoliyatini davom ettirish",
  },
  {
    question: "Ko‘rsatkichlar quyidagi talablarga javob berishi lozim",
    noAnswer1: "Faqat miqdoriy tavsifga ega bo‘lishi",
    answer: "Ishonchlilik va o‘lchov hususiyatiga ega bo‘lishi",
    noAnswer2: "Faqat sifat tasnifga ega bo‘lishi",
    noAnswer3: "Jarayonning ijtimoiy va iqtisodiy jihatlarini tafsiflashi",
  },
  {
    question:
      "Material resurslardan foydalanish koeffitsienti qanday aniqlanadi?",
    noAnswer1:
      "Detal og‘irligini yarim tayyor mahsulot og‘irligiga nisbati orqali",
    noAnswer2:
      "Sotilayotgan chiqindilarning miqdorini sotilayotgan chiqindilar qiymati nisbati orqali",
    answer:
      "Haqiqiy material resurslari sarfini material sarfi normasiga nisbati orqali",
    noAnswer3:
      "Yillik ishlab chiqarish hajmini o‘rtacha quvvatga nisbati orqali",
  },
  {
    question: "Jihozlardan intensiv foydalanish koeffitsienti mohiyatini …",
    noAnswer1:
      "Jihozning ish vaqtidan foydalanish darajasini ifodalash tashkil etadi",
    noAnswer2:
      "Jihoz samaradorligidan foydalanish darajasini ifodalash tashkil etadi",
    noAnswer3: "Jihoz sonidan foydalanish darajasini ifodalash tashkil etadi",
    answer:
      "Jihozning soatlik unimdorligidan foydalanish darajasini ifodalash tashkil etadi",
  },
  {
    question:
      "Ro‘yxatdagi ishchilar soni bilan haqiqiy ishchilar soni orasidagi farq.............",
    noAnswer1:
      "Ishkuni davomida yuz beradigan tashkiliy-texnik tanaffuslar hisobiga yuzaga keladi",
    noAnswer2:
      "Ishchilarning ishga sababsiz kelmagan kunlari hisobiga yuzaga keladi",
    noAnswer3:
      "Doimiy va mavsumiy ishlarga jalb qilingan ishchilar soni orasidagi farqdir",
    answer:
      "Imtiyozli ruxsat etilgan ishga chiqmaslik kunlari hisobiga yuzaga keladi",
  },
  {
    question: "Ishlab chiqarishning asosiy omillari:",
    answer: "ishchi kuchi, kapital, yer va tadbirkorlik qobiliyati.",
    noAnswer1: "xom-ashyo va ishlab chiqarish texnologiyasi",
    noAnswer2: "ishlab chiqarish resurslari",
    noAnswer3: "Kapital",
  },
  {
    question: "Ehtiyoj - bu........",
    noAnswer1: "ishlab chiqarish jarayoni",
    answer: "hayotiy vositalarga bo‘lgan zaruriyat.",
    noAnswer2: "iste’mol jarayonida qo‘llanilishi mumkin bo‘lgan vosita",
    noAnswer3: "resurs",
  },
  {
    question: "Iqtisodiyotning bosh masalasi va doimiy muammosi:",
    noAnswer1:
      "ishlab chiqarish hajmini oshirish uchun qancha ishchi kuchi sarflash kerak",
    answer: "nima, qanday, qancha va kim uchun ishlab chiqarish.",
    noAnswer2: "davlatning milliy daromadini qanday oshirish mumkin",
    noAnswer3: "aholi bandligini oshirish",
  },
  {
    question: "Kreditlar – bu",
    answer:
      "pul vositalarini tovar va xizmatlarga to‘lov, qaytarib berish sharti bilan noma’lum muddatga\r\nqarz berish.",
    noAnswer1:
      "ssuda fondini shakllantirish va undan foydalanish munosabatlari",
    noAnswer2:
      "qarz berish jarayonlarida qarz beruvchi va qarzdor o‘rtasidagi amalga oshiriladigan harakat",
    noAnswer3:
      "tovar va xizmatlarga naqd pulsiz shaklda hisob – kitob qilish uchun bank tomonidan beriladigan\r\nmoliyaviy xujjat",
  },
  {
    question:
      "Korxonaning ishlab chiqarish hajmi 7000 dona mahsulotni tashkil qiladi. Ishchilarning o‘rtacha\r\nro‘yxatdagi soni 200 kishi bo‘lib, ishlab chiqarish hajmini 15% ga oshirish ko‘zda tutiladi. Reja yili\r\nuchun ishchilar soni quyidagiga teng bo‘ladi:",
    noAnswer1: "240 kishi",
    noAnswer2: "250 kishi",
    answer: "230 kishi",
    noAnswer3: "210 kishi",
  },
  {
    question: "Iste’molchilik krediti – bu",
    noAnswer1: "kreditning asosiy va yetakchi shakli",
    noAnswer2:
      "korxonalar va birlashmalar hamda boshqa xo‘jalik yurutuvchi sub’ektlarning bir – biriga\r\nberadigan krediti",
    answer:
      "xususiy shaxslarga iste’mol tovarlari sotib olish uchun ma’lum muddatga beriladigan kredit.",
    noAnswer3:
      "ko‘chmas mulklar hisobiga uzoq muddatli ssudalar shaklida beriladigan kredit",
  },
  {
    question:
      "Pul mablag‘larini to‘plash, joylashtirish va ularning harakatini tartibga solish bilan\r\nshug‘ullanuvchi iqtisodiy muassasa .....",
    noAnswer1: "tovarlar birjasi",
    noAnswer2: "mehnat birjasi",
    noAnswer3: "chakana savdo tashkiloti",
    answer: "bank.",
  },
  {
    question:
      "Korxonaning ro‘yxatdagi ishlovchilar soni quyidagilardan tarkib topadi:",
    noAnswer1:
      "1 kun muddat bilan doimiy va vaqtinchalik ishlarga qabul qilingan xodimlar",
    noAnswer2:
      "Qabul qilingan xodimlar doimiy va mavsumiy ishlarga qabul qilingan xodimlar",
    answer: "1 kun va undan ko‘proq muddatga doimiy va vaqtinchalik ishlarga",
    noAnswer3:
      "Qabul qilingan xodimlar doimiy va mavsumiy ishlarga qabul qilingan xodimlar va 1 kun muddat\r\nbilan doimiy va vaqtinchalik ishlarga qabul qilingan xodimlar",
  },
  {
    question:
      "Texnologik jihatdan o‘xshash ishlab chiqarishning birlashuvi – bu",
    noAnswer1: "Iqtisodiy rivojlanish",
    answer: "Iqtisodiy o‘sish",
    noAnswer2: "Ishlab chiqarish strategiyasi",
    noAnswer3: "Ishlab chiqarish taktikasi",
  },
  {
    question: "Giperinflyatsiya – bu",
    answer:
      "narxning shiddat bilan o‘sishi, pul qadrining juda tezlik bilan pasayishi.",
    noAnswer1: "qtisodiy tanglik va ishsizlikning birgalikda yuz berishi",
    noAnswer2:
      "eski pulning qadri yuqori qilib belgilangan, ammo nomi eskicha qolgan yangi pulga ma’lum\r\nnisbatda almashtirib va nisbatga qarab narxlarni ham o‘zgartirish tushuniladi",
    noAnswer3:
      "pulning yuridik kuchini bekor qilish va yangi pul chiqarish tushuniladi",
  },
  {
    question: "Samaradorlik mezoni qanday ko‘rsatkichlar bilan ifodalanadi?",
    noAnswer1:
      "Sof diskontlangan daromad (SDD) yalpi milliy daromad (YaMD) Yalpi ichki mahsulot (YaIM)\r\ndaromadlik indeksi (DI)",
    noAnswer2:
      "Sof milliy mahsulot (SMM) yalpi milliy mahsulot (YaMM) milliy daromad (ME)",
    answer:
      "Sof diskontlangan daromad (SDD) daromadlilik indeksi (DI), qoplash muddati",
    noAnswer3:
      "Baho indeksi (BI), daromadlilik indeksi (DI) koplash muddatining, ichki daromadlilik normasi\r\n(IDN)",
  },
  {
    question:
      "Bozor sharoitida qanday ko‘rsatkich umum qabul qilingan samaradorlik mezoni bo‘lib\r\nhisoblanadi?",
    noAnswer1: "Dividend",
    noAnswer2: "Baho",
    noAnswer3: "Zarar",
    answer: "Maksimal foyda",
  },
  {
    question: "Inflyatsiya – bu",
    answer:
      "muomaladagi pul massasining tovarlar massasidan ustunligi natijasida tovarlar bilan\r\nta’minlangan pullarni ko‘payib ketishi.",
    noAnswer1: "milliy pul birligi qiymatining rasmiy tartibda pasaytirilishi",
    noAnswer2: "milliy pul birligi qiymatining rasmiy tartibda ko‘tarilishi",
    noAnswer3: "eksportni importga nisbatan nihoyatda ortib ketishi",
  },
  {
    question: "Jihozlardan ekstensiv foydalanish koeffitsienti mohiyatini…",
    noAnswer1:
      "jihozning soatlik unimdorligidan foydalanish darajasini ifodalash tashkil etadi",
    noAnswer2:
      "jihoz samaradorligidan foydalanish darajasini ifodalash tashkil etadi",
    answer:
      "jihozning ish vaqtidan foydalasnish darajasini ifodalash tashkil etadi",
    noAnswer3: "jihoz sonidan foydalanish darajasini ifodalash tashkil etadi",
  },
  {
    question: "Pul muomalasi – bu",
    noAnswer1:
      "mamlakatda pul muomilasini tashkil qilishga xizmat qiluvchi naqd va kredit pullar",
    answer: "pulning o‘z vazifasini bajarish jarayonidagi to‘xtovsiz harakati.",
    noAnswer2:
      "pul mablag‘larini ssuda fondi shaklida to‘lash va ularni takror ishlab chiqarish ehtiyojlari uchun\r\nqarzga berish",
    noAnswer3:
      "daromadning qarzga berilgan pul summasiga nisbatining foizda ifodalanishi",
  },
  {
    question:
      "Biznes rejaning qaysi bo‘limi boshqa bo‘limlarni shakllantirish uchun asos bo‘lib xizmat qiladi –",
    noAnswer1: "Biznesni ifodalash",
    noAnswer2: "Ishlab chiqarish rejasi",
    answer: "Marketing rejasi",
    noAnswer3: "Moliyaviy reja",
  },
  {
    question: "Mahsulot tavsifida asosiy e’tibor quyidagiga qaratiladi",
    noAnswer1: "Mahsulotning boshqa mahsulotdan farq qiluvchi jihatlariga",
    noAnswer2: "Mahsulot sifati jihatidan farq qiluvchi jihatlariga)",
    noAnswer3: "Mahsulot narxi jihatidan farq qiluvchi jihatlariga",
    answer: "Mahsulotning raqobatchi mahsulotdan farq qiluvchi jihatlariga",
  },
  {
    question: "Nazariy quvvat –bu ?",
    answer: "Korxona jihozlari pasportidagi ishlab chiqarish imkoniyati",
    noAnswer1:
      "Korxonaning ish sharoitini e’tiborga olgan xoldagi mahsulot ishlab chiqarish imkoniyati",
    noAnswer2: "Normal ish sharoitidagi mahsulot ishlab chiqarish imkoniyati",
    noAnswer3:
      "Mavjud shart-sharoitlardagi mahsulot ishlab chiqarish imkoniyati",
  },
  {
    question: "Amaliy quvvat –bu?",
    noAnswer1:
      "Mavjud shart-sharoitlardagi mahsulot ishlab chiqarish imkoniyati",
    noAnswer2: "Korxona jihozlari pasportidagi ishlab chiqarish imkoniyati",
    answer:
      "Korxonaning ish sharoitini e’tiborga olgan xoldagi mahsulot ishlab chiqarish imkoniyati",
    noAnswer3: "Ideal ish sharoitidagi mahsulot ishlab chiqarish imkoniyati",
  },
  {
    question: "Rejalashatirish jarayoni-bu …",
    noAnswer1: "Korxona faoliyatini belgilash jarayoni",
    answer: "Rejani ishlab chiqish jarayoni",
    noAnswer2: "Korxona maqsadini amalga oshirish jarayoni",
    noAnswer3: "Korxona resurslaridan foydalanishni belgilash jarayoni",
  },
  {
    question: "Rejalashtirish jarayoni obyekti – bu…",
    noAnswer1: "Korxonaning mehnat va moddiy resurslari",
    noAnswer2: "Korxonaning iqtisodiy salohiyati",
    noAnswer3: "Korxonaning ishlab chiqarish bo‘limlari",
    answer: "Korxona va uning ishlab chiqarish jarayoni",
  },
  {
    question: "«Rezyume» bo‘limining asosiy maqsadi nimada?",
    answer: "Ish taklifining qisqa mazmunini berilishi",
    noAnswer1: "Mahsulot va xizmat turini aniqlash",
    noAnswer2: "Ishlab chiqarilayotgan mahsulot iste’molchilarini aniqlash",
    noAnswer3: "Korxona joylashgan o‘rnini belgilash",
  },
  {
    question:
      "Yirik korxonalar uchun biznes reja necha bo‘limdan iborat bo‘ladi – …",
    noAnswer1: "8",
    answer: "10",
    noAnswer2: "3",
    noAnswer3: "5",
  },
  {
    question:
      "Kichik korxonalar uchun tuzilgan biznes reja necha bo‘limdan iborat bo‘ladi – …",
    noAnswer1: "8",
    noAnswer2: "3",
    answer: "5",
    noAnswer3: "10",
  },
  {
    question: "Biznes reja qaysi funksiyalarni bajaradi?",
    answer: "Korxona strategiyasini amalga oshirish, mablag‘larni jalb qilish",
    noAnswer1: "Korxona taktikasini amalga oshirish, pul oqimlarini boshqarish",
    noAnswer2: "Rivojlanish yo‘nalishlarini son va sifatda tasvirlash",
    noAnswer3: "Harakatlar dasturini shakllantirish va yo‘naltirish",
  },
  {
    question: "Tovarni tarqatishni taktikasini nimadan boshlash zarur?",
    noAnswer1: "Mijozlarga axborot berishdan",
    noAnswer2: "Mijozlarni tahlil qilishdan",
    noAnswer3: "Maqsadli bozorni aniqlashdan",
    answer: "Sotish usullarini tasvirlashdan",
  },
  {
    question: "Davlat byudjeti nima?",
    noAnswer1: "pul mablag‘larini jamg‘aruvchi fond",
    noAnswer2: "pul mablag‘larining ma’lum yo‘nalishlar bo‘yicha taqsimlanishi",
    noAnswer3:
      "umumjamiyat miqyosida markazlashgan holda pul mablag‘larining sarflanishi",
    answer:
      "umumjamiyat miqyosida markazlashgan holda davlat ishtirokida to‘planadigan va\r\nsarflanadigan moliyaviy resurslar.",
  },
  {
    question:
      "Tadbirkorlik obyektiga yoki xo‘jalik obyektiga ilmiy texnika taraqqiyoti yutuqlari doirasida\r\nzaruriy innovatsiyalarni, o‘zgarishlarni kiritish – bu",
    answer: "Iqtisodiy rivojlanish",
    noAnswer1: "Ishlab chiqarish strategiyasi",
    noAnswer2: "Iqtisodiy o‘sish",
    noAnswer3: "Ishlab chiqarish taktikasi",
  },
  {
    question: "Yalpi foyda salmog‘i qanday aniqlanadi?",
    noAnswer1: "umumiy sotuv hajmi/umumiy yalpi foyda",
    noAnswer2: "umumiy yalpi foyda * umumiy sotuv hajmi",
    answer: "umumiy yalpi foyda/umumiy sotuv hajmi",
    noAnswer3: "umumiy yalpi foyda - umumiy sotuv hajmi",
  },
  {
    question: "Texnik- iqtisodiy rejalashtirish -",
    answer:
      "Korxonaning barcha iqtisodiy va moliyaviy ko‘rsatkichlarini aniqlash, iqtisodiy resurslarni\r\ntanlash va ular bo‘yicha normalarni belgilashni ko‘zda tutadi",
    noAnswer1:
      "Korxona bozorga qanday moslashishini va unga qanday ta’sir etishni ko‘zda tutadi",
    noAnswer2:
      "Mahsulotlarni ishlab chiqarish uchun qanday texnologiya qo‘llanilishi kerakligini ko‘zda tutadi",
    noAnswer3:
      "Korxonada qanday mahsulot ishlab chiqarish kerakligini ko‘zda tutadi",
  },
  {
    question: "Korxonada ichki rejalashtirishning qanday turlari qo‘llaniladi?",
    noAnswer1: "Strategik va normative",
    answer: "Operativ, taktik, strategik, normativ",
    noAnswer2: "Operativ, normativ, taktik, joriy",
    noAnswer3: "Operativ va taktik",
  },
  {
    question:
      "Yangi va eski bozorlarda tovarlarni sotish hajmini ko‘paytirish bu-",
    noAnswer1: "Iqtisodiy rivojlanish",
    noAnswer2: "Ishlab chiqarish strategiyasi",
    answer: "Iqtisodiy o‘sish",
    noAnswer3: "Ishlab chiqarish taktikasi",
  },
  {
    question: "Maqsadga erishish vositalarini belgilash bu",
    noAnswer1: "Strategiya",
    noAnswer2: "Oddiy harakat",
    noAnswer3: "Foyda olish",
    answer: "Taktika",
  },
  {
    question:
      "Tanlangan maqsad va qo‘llaniladigan usullariga ko‘ra rejalashtirish quyidagilarga bo‘linadi:",
    noAnswer1: "Texnik iqtisodiy va tashkiliy texnik",
    answer: "Texnik iqtisodiy va operativ ishlab chiqarish",
    noAnswer2: "Operativ ishlab chiqarish va umumlashtirilgan",
    noAnswer3: "Tashkiliy texnik va taktik",
  },
  {
    question: "Korxona faoliyatini boshqarish uslublarini tanlash bu...",
    noAnswer1: "Taktika",
    noAnswer2: "Oddiy harakat",
    answer: "Strategiya",
    noAnswer3: "Foyda olish",
  },
  {
    question: "Strategik rejalashtirish –",
    noAnswer1:
      "Maqsad va vazifalarni, vositalarni ochiq va asoslangan tarzda belgilash ko‘zda tutadi",
    noAnswer2: "Korxonaning umumiy maqsadiga erishish usullarini tanlashdir",
    noAnswer3:
      "Avval belgilab qo‘yilgan maqsad va vazifalarni erishish yo‘llarini tanlashdan iboratdir",
    answer:
      "Korxonaning umumiy maqsadlarini belgilash va unga erishish usullarini tanlashdir.",
  },
  {
    question: "Pul muomalasi – bu",
    noAnswer1:
      "mamlakatda pul muomilasini tashkil qilishga xizmat qiluvchi naqd va kredit pullar",
    answer: "pulning o’z vazifasini bajarish jarayonidagi to’xtovsiz harakati.",
    noAnswer2:
      "pul mablag’larini ssuda fondi shaklida to’lash va ularni takror ishlab chiqarish ehtiyojlari uchun\r\nqarzga berish",
    noAnswer3:
      "daromadning qarzga berilgan pul summasiga nisbatining foizda ifodalanishi",
  },
  {
    question: "Pulning qaysi vazifasi boylik to’plash bilan bog’liq?",
    answer: "jamg’arma vositasi",
    noAnswer1: "muomala vositasi",
    noAnswer2: "to’lov vositasi",
    noAnswer3: "qiymat o’lchovi",
  },
  {
    question: "Pulning vazifasi nimadan iborat?",
    noAnswer1:
      "pul iste’moli bilan ijtimoiy talabga bo’lgan investitsiya omili",
    noAnswer2:
      "ijtimoiy taklif va almashuv uchun zarur bo’lgan miqdorni belgilaydigan kapital qiymatlar omili",
    noAnswer3: "daromadlar va xarajatlarni hisobga olish tizimi",
    answer:
      "yagona hisob – kitob yurgizish, almashuv, jamg’arma, muomila, to’lov vositasi vazifasini\r\nbajaradi",
  },
  {
    question: "Pulning qaysi vazifasi narxning shakllanishi bilan bog’liq?",
    noAnswer1: "muomala vositasi",
    noAnswer2: "jamg’arma vositasi",
    answer: "qiymat o’lchovi",
    noAnswer3: "jahon puli",
  },
  {
    question: "Ehtiyoj - bu........",
    answer: "hayotiy vositalarga bo’lgan zaruriyat",
    noAnswer1: "ishlab chiqarish jarayoni",
    noAnswer2: "iste’mol jarayonida qo’llanilishi mumkin bo’lgan vosita",
    noAnswer3: "resurs",
  },
  {
    question: "Kapital - bu …",
    noAnswer1: "ishlab chiqarish jarayoni",
    noAnswer2: "iste’mol jarayonida qo’llanilishi mumkin bo’lgan vosita",
    answer:
      "investitsiyalashtirish yo‘li bilan daromad olish uchun foydalaniladigan mol-mulk, boylik yoki\r\nmablag‘",
    noAnswer3: "resurs",
  },
  {
    question: "Insoniy kapital - bu …",
    answer:
      "Har bir shaxs va mamlakat barcha aholisining intellekti, salomatligi, tabiiy iste’dodi va qo‘lga\r\nkiritgan qobiliyatlarining majmui",
    noAnswer1:
      "mamlakatda pul muomilasini tashkil qilishga xizmat qiluvchi naqd va kredit pullar",
    noAnswer2:
      "pul mablag’larini ssuda fondi shaklida to’lash va ularni takror ishlab chiqarish ehtiyojlari uchun\r\nqarzga berish",
    noAnswer3:
      "daromadning qarzga berilgan pul summasiga nisbatining foizda ifodalanishi",
  },
  {
    question:
      "“Insoniy kapital” (human capital) tushunchasi qachon paydo bo‘lgan?",
    noAnswer1: "XIX asrning birinchi yarmida",
    noAnswer2: "XX asrning ikkinchi yarmida",
    answer: "XIX asrning ikkinchi yarmida",
    noAnswer3: "XX asrning birinchi yarmida",
  },
  {
    question: "“Insoniy kapital” nazaryasi tarafdorlari kimlar?",
    noAnswer1: "Teodor Shuls, Gari Bekker",
    noAnswer2: "Gari Bekker va Saymon Kuzneslar",
    answer: "Teodor Shuls, Gari Bekker va Saymon Kuzneslar",
    noAnswer3: "Teodor Shuls",
  },
  {
    question: "Insoniy naturaning har qanday xarakterli belgisi ….",
    answer: "iqtisodiy (jumladan, moliyaviy) mazmun (qiymat)ga egadir",
    noAnswer1: "jismoniy mazmunga egadir",
    noAnswer2: "ma'naviy mazmunga egadir",
    noAnswer3: "ijtimoiy mazmunga egadir",
  },
  {
    question:
      "Biz qabul qiladigan barcha qarorlarni nechta guruhga bo‘lish mumkin?",
    noAnswer1: "2",
    noAnswer2: "4",
    noAnswer3: "5",
    answer: "3",
  },
  {
    question:
      "Strategik menejment maktabi asoschilaridan biri bo‘lgan professor Genri Minsberg qarorlarni\r\nqanday atagan edi:",
    answer: "“oldin bajaraman”; “oldin ko‘raman”; “oldin o‘ylayman”.",
    noAnswer1: "“oldin o‘ylayman”; “oldin ko‘raman”; “oldin bajaraman”.",
    noAnswer2: "“oldin ko‘raman”; “oldin o‘ylayman”; “oldin bajaraman”.",
    noAnswer3: "“oldin ko‘raman”; “oldin bajaraman”; “oldin o‘ylayman”.",
  },
  {
    question: "Qaror qabul qilishning nechta asosiy bosqichlari bor?",
    noAnswer1: "2",
    noAnswer2: "4",
    answer: "3",
    noAnswer3: "5",
  },
  {
    question:
      "Maqsadga erishish muddatini shartli ravishda bo‘lsa ham, nechta guruhga bo‘lish mumkin?",
    noAnswer1: "2",
    answer: "3",
    noAnswer2: "4",
    noAnswer3: "5",
  },
  {
    question: "Qisqa muddatli maqsadlar muddati qancha?",
    answer: "1 yilgacha",
    noAnswer1: "2 yilgacha",
    noAnswer2: "3 yilgacha",
    noAnswer3: "4 yilgacha",
  },
  {
    question:
      "Bizning qaramog‘i (mulki)mizda va o‘zining pulli qiymatiga ega bo‘lgan barcha narsalar nima\r\ndeyiladi?",
    noAnswer1: "passivlar",
    noAnswer2: "balans",
    noAnswer3: "Daromad",
    answer: "aktivlar",
  },
  {
    question:
      "Shaxsiy moliya nuqtai-nazaridan aktivlarni, shartli ravishda, nechta kategoriya (toifa)ga bo‘lish\r\nmumkin?",
    noAnswer1: "3",
    noAnswer2: "4",
    answer: "2",
    noAnswer3: "5",
  },
  {
    question:
      "Shaxsiy moliya nuqtai-nazaridan aktivlarni qaysi kategoriyalarini bilasiz?",
    answer: "iste’moliy va investitsion",
    noAnswer1: "moliyaviy va iqtisodiy",
    noAnswer2: "iqtisodiy va ijtimoiy",
    noAnswer3: "iste’moliy va moliyaviy",
  },
  {
    question:
      "Shaxsiy moliyada biz bajarishimiz lozim bo‘lgan\r\nmoddiy majburiyatlar nima deyiladi?",
    noAnswer1: "aktivlar",
    noAnswer2: "Balans",
    answer: "passivlar",
    noAnswer3: "daromad",
  },
  {
    question:
      "Bu sizning shaxsiy xazinangiz (ixtiyoringiz)ga kelib tushadigan pullar.",
    noAnswer1: "xarajatlar",
    noAnswer2: "Byudjet",
    answer: "daromadlar",
    noAnswer3: "foyda",
  },
  {
    question:
      "Bu o‘z ehtiyojlaringizni qondirish uchun sarflayotgan pullaringiz.",
    answer: "xarajatlar",
    noAnswer1: "daromadlar",
    noAnswer2: "byudjet",
    noAnswer3: "zarar",
  },
  {
    question:
      "Bu ma’lum mo‘ljallangan vaqt davomida (masalan, oy, chorak, yarim yil yoki yil) rejalashtirilgan\r\ndaromadlaringiz va xarajatlaringiz ro‘yxati.",
    noAnswer1: "daromadlar",
    noAnswer2: "Xarajatlar",
    answer: "byudjet",
    noAnswer3: "mablag‘",
  },
  {
    question:
      "Shaxsiy moliyaviy rejani ishlab chiqish nechta bosqichni o‘z ichiga oladi?",
    noAnswer1: "2",
    noAnswer2: "4",
    noAnswer3: "5",
    answer: "3",
  },
  {
    question:
      "Daromad va iste’mol, ya’ni xarajatlarining bir-biriga muvofiq kelishiga qarab inson hayotini\r\nshartli ravishda nechta davrga bo‘lish mumkin?",
    noAnswer1: "2",
    noAnswer2: "3",
    answer: "4",
    noAnswer3: "5",
  },
  {
    question:
      "Daromad va iste’mol, ya’ni xarajatlarining bir-biriga muvofiq kelishiga qarab inson hayotini\r\nshartli ravishda qanday davrlarga bo‘lish mumkin?",
    noAnswer1: "o‘smirlik, yetuklik, keksalik",
    noAnswer2: "yetuklik, keksalik",
    answer: "bolalik va yoshlik, o‘smirlik, yetuklik, keksalik",
    noAnswer3: "bolalik va yoshlik, o‘smirlik, yetuklik",
  },
  {
    question:
      "Insonning hayotiy siklidan kelib chiqib, shaxsiy moliyaviy maqsadlarning nechta asosiy guruhga\r\najratish mumkin?",
    noAnswer1: "2",
    noAnswer2: "4",
    answer: "3",
    noAnswer3: "5",
  },
  {
    question:
      "O‘z daromadlarimizni kapitalning qaysi turlarini shakllantirishga yo‘naltirishimiz kerak?",
    noAnswer1: "joriy; zahira; moliyaviy",
    noAnswer2: "bazaviy; zahira; investitsion",
    noAnswer3: "joriy; investitsion",
    answer: "joriy; zahira; investitsion",
  },
  {
    question:
      "Tovarlar va xizmatlar bahosi umumiy darajasining oshish (o‘sish) jarayoni nima deyiladi.",
    noAnswer1: "bankrot",
    noAnswer2: "krizis",
    noAnswer3: "Defitsit",
    answer: "inflyatsiya",
  },
  {
    question:
      "O‘zbekiston Respublikasi qonunchiligiga ko‘ra necha yoshga to‘lgan har bir fuqaro depozit\r\n(omonat) shartnomasini tuzishi (imzolashi) mumkin?",
    noAnswer1: "15",
    noAnswer2: "16",
    answer: "14",
    noAnswer3: "18",
  },
  {
    question: "Pulni qanday shaklda to‘plash (yig‘ish, jamg‘arish) mumkin?",
    noAnswer1: "naqdina (naqd pulli)",
    noAnswer2: "Naqdsiz",
    answer: "naqdina (naqd pulli) va naqdsiz",
    noAnswer3: "plastik kartada",
  },
  {
    question: "Pulni to‘plash (yig‘ish, jamg‘arish)ning eng oddiy usuli –?",
    answer: "uyda naqdina (naqd pul)",
    noAnswer1: "bankda naqdina (naqd pul)",
    noAnswer2: "plastik kartada",
    noAnswer3: "naqdsiz",
  },
  {
    question:
      "Shaxsiy moliyada inflyatsiya, odatda, qanday o‘lchanadi (ifodalanadi)?",
    noAnswer1: "dollar kursiga qarab",
    noAnswer2: "narxlar oshishi orqali",
    noAnswer3: "pul banknotalar ko'payshi orqali",
    answer: "iste’mol baholari indeksi (IBI) orqali",
  },
  {
    question: "Bank qaysi funksiyalarni bajaradi?",
    noAnswer1: "1) pullarni qabul qiladi (oladi); 2) pullarni beradi.",
    answer:
      "1) pullarni qabul qiladi (oladi); 2) pullarni beradi; 3) hisob-kitob-kassa operatsiyalarini amalga\r\noshiradi.",
    noAnswer2:
      "1) pullarni qabul qiladi (oladi); 2) hisob-kitob-kassa operatsiyalarini amalga oshiradi.",
    noAnswer3:
      "1) pullarni beradi; 2) hisob-kitob-kassa operatsiyalarini amalga oshiradi.",
  },
  {
    question:
      "Omonat (depozit)lar orqali fuqarolarning bo‘sh pul mablag‘larini to‘plovchi, ularni kreditlar\r\nberish yoki turli moliyaviy instrumentlarga (aksiya, obligatsiya va h.k.lar) investitsiyalab,\r\njoylashtiruvchi moliyaviy vositachi .......... deyiladi.",
    answer: "bank",
    noAnswer1: "xalq banki",
    noAnswer2: "diler",
    noAnswer3: "agent",
  },
  {
    question:
      "Saqlash yoki foiz (daromad) olish uchun bank hisob- varag‘iga o‘tkazilgan pul mablag‘lari ...........\r\ndeb ataladi.",
    noAnswer1: "kredit",
    noAnswer2: "sug'urta",
    answer: "omonat",
    noAnswer3: "investitsiya",
  },
  {
    question:
      "Foizi bilan qaytarish sharti asosida ma’lum bir muddatga taqdim etilgan (berilgan) pul\r\nmablag‘lari ........... deyiladi.",
    noAnswer1: "omonat",
    noAnswer2: "sug'urta",
    answer: "kredit",
    noAnswer3: "investitsiya",
  },
  {
    question: "- bu mijozlarning banklardagi pul mablag‘laridir",
    noAnswer1: "kredit",
    noAnswer2: "sug'urta",
    noAnswer3: "Investitsiya",
    answer: "depozit(omonat)",
  },
  {
    question:
      "– bu bank tomonidan qarz oluvchiga ma’lum muddat va ma’lum shartlarda pulni qarzga berish\r\nuchun ko‘rsatiladigan xizmatdir.",
    noAnswer1: "omonat",
    noAnswer2: "sug'urta",
    noAnswer3: "Investitsiya",
    answer: "bank krediti",
  },
  {
    question:
      "Kreditga tegishli bo‘lishi mumkin bo‘lgan asosiy tavsif (belgi)larni ko‘rsating.",
    noAnswer1: "Haqlilik, to‘lovlilik. Muddatlilik.",
    noAnswer2: "Muddatlilik. Kreditning qaytariluvchanligi.",
    noAnswer3: "Kreditning qaytariluvchanligi.",
    answer:
      "Haqlilik, to‘lovlilik. Muddatlilik. Kreditning qaytariluvchanligi.",
  },
  {
    question:
      "– bu shunday prinsipdirki, unga ko‘ra pulning bir xildagi summasi turli davrning turli qismlarida\r\nturli qiymat (baho)ga ega bo‘ladi (xususan, inflyatsiya va turli risklar tufayli).",
    noAnswer1: "kreditning to‘liq qiymati",
    noAnswer2: "kredit summasi",
    answer: "pulning davriy qiymati",
    noAnswer3: "kredit muddati",
  },
  {
    question: "Kredit mablag‘lari qaytarilishini qanday usullari bor?",
    answer: "annuitet va differensiatsiyalangan",
    noAnswer1: "annuitet",
    noAnswer2: "differensiatsiyalangan",
    noAnswer3: "tezkor",
  },
  {
    question:
      "– bu qarz oluvchi egalik qilayotgan yoki qarziy mablag‘lar hisobiga sotib olayotgan (masalan,\r\navtomobil yoki ko‘chmas mulk) mol-mulk bo‘lib, u kredit qaytarilmaganda sotilishi mumkin.",
    noAnswer1: "kafolat",
    noAnswer2: "ta'minot",
    noAnswer3: "sug'urta",
    answer: "garov",
  },
  {
    question:
      "– uni shu yerning o‘zidayoq, “kassa oldidan ketmasdan” bir necha minut davomida\r\nrasmiylashtirib, summani olib, xaridni amalga oshirish mumkin.",
    answer: "mikroqarz",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
  },
  {
    question:
      "– xaridni ortga surish, iste’mol krediti uchun bankka murojaat qilish va faqat bir necha kun\r\no‘tgandan so‘ng xaridni amalga oshirish maqsadida do‘konga borsa bo‘ladi",
    noAnswer1: "mikroqarz",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
    answer: "iste’mol krediti",
  },
  {
    question:
      "– qarz oluvchiga tadbirkorlik faoliyatini amalga oshirish uchun bazaviy hisoblash miqdorining\r\n1000 baravaridan oshmaydigan summada to‘lovlilik, muddatlilik va qaytarish shartlari asosida\r\nberiladigan pul mablag‘laridir.",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
    answer: "mikrokredit",
  },
  {
    question:
      "– mikromoliyaviy xizmatlar ko‘rsatuvchi tashkilot tomonidan lizing oluvchining topshirig‘iga\r\nbinoan uchinchi tarafdan mol-mulk olish hamda unga(dan) egalik qilish va foydalanish uchun\r\nlizing oluvchiga shartnomada belgilangan shartlar asosida haq evaziga berish nazarda\r\ntutiladigan xizmatdir.",
    answer: "mikrolizing",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
  },
  {
    question:
      "Nechinchi yildan boshlab tijorat banklari ham aholiga mikroqarzlar berishga haqlidir?",
    noAnswer1: "2017",
    noAnswer2: "2019",
    answer: "2018",
    noAnswer3: "2020",
  },
  {
    question:
      "Kredit byurosi tomonidan kredit axboroti sub’ektiga nisbatan shakllantirilgan kredit axboroti\r\nmajmui …... deyiladi.",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "Kredit",
    answer: "kredit tarixi",
    noAnswer3: "sug'urta",
  },
  {
    question:
      "bu – salohiyatli qarz oluvchini balli baholashning avtomatlashtirilgan tizimidir.",
    answer: "skoring",
    noAnswer1: "iste’mol krediti",
    noAnswer2: "kredit",
    noAnswer3: "sug'urta",
  },
  {
    question:
      "Ekspress-kredit bizning bank amaliyotimizda qanday nom bilan mavjudligini e’tirof etish\r\nmumkin?",
    noAnswer1: "shoshilinch kredit",
    noAnswer2: "darkor kredit",
    answer: "tezkor kredit",
    noAnswer3: "vaqtli kredit",
  },
  {
    question:
      "... ya’ni oldingi (eski) kreditni qaytarish (uzish) uchun nisbatan yaxshiroq yoki qulayroq\r\nshartlarda yangi kredit olish.",
    noAnswer1: "qayta moliyalashtirish",
    noAnswer2: "kreditni moliyalashtirish",
    noAnswer3: "moliyalashtirish",
    answer: "kreditni qayta moliyalashtirish",
  },
  {
    question:
      "Hayot tajribasining ko‘rsatishicha, shaxsiy byudjetni shunday hisob- kitob qilish kerakki, unga\r\nko‘ra kredit bo‘yicha to‘lanmalarni amalga oshirishda har oylik daromadlarning necha foizdan\r\nko‘prog‘i sarf qilinmasligi lozim?",
    answer: "40,0%",
    noAnswer1: "30,0%",
    noAnswer2: "50,0%",
    noAnswer3: "60,0%",
  },
  {
    question: "Sotish kursi va sotib olish kursi o‘rtasidagi farq?",
    noAnswer1: "valyuta",
    noAnswer2: "depozit",
    noAnswer3: "Skoring",
    answer: "spred",
  },
  {
    question: "Bank yacheykalari …............ deb ham ataladi.",
    noAnswer1: "“omonat yacheyka”",
    noAnswer2: "“kredit yacheyka”",
    answer: "“depozitar yacheyka”",
    noAnswer3: "“valyuta yacheyka”",
  },
  {
    question:
      "Ularda pullar, qimmatli qog‘ozlar va yacheykani ijaraga olgan odam uchun qimmatbaho\r\n(qimmatli) hisoblangan har qanday boshqa predmetlar saqlanishi mumkin.",
    answer: "“bank yacheyka”",
    noAnswer1: "“omonat yacheyka”",
    noAnswer2: "“kredit yacheyka”",
    noAnswer3: "“valyuta yacheyka”",
  },
  {
    question:
      "Bank yacheykaga kirishning maksimal darajadagi xavfsizligini ta’minlash uchun ko‘p hollarda\r\nqaysi prinsipdan foydalaniladi?",
    noAnswer1: "“uch qulf”",
    noAnswer2: "“to'rt qulf”",
    noAnswer3: "“besh qulf”",
    answer: "“ikki qulf”",
  },
  {
    question: "Valyuta kursi qanday aniqlanadi?",
    noAnswer1: "Qora bozorda aniqlanadi",
    noAnswer2: "Markaziy bankda aniqlanadi",
    noAnswer3: "AQSH dollariga qarab aniqlanadi",
    answer:
      "Xorijiy valyutalarning so‘mga nisbatan kursi talab va taklifning o‘zaro munosabati asosida\r\nvalyuta bozorida aniqlanadi.",
  },
  {
    question: "Naqd pullar – ?",
    noAnswer1: "valyutalar",
    noAnswer2: "banknotalar",
    answer: "banknotalar va ma’lum bir nominalli tangalardir",
    noAnswer3: "ma’lum bir nominalli tangalar",
  },
  {
    question: "Naqd pullar almashtirib bo‘lmaydigan qanday afzalliklarga ega?",
    noAnswer1:
      "ularni hamma joyda qabul qilishadi; amalda ularni kuzatib turishning iloji yo‘q",
    noAnswer2: "ular ishonchli; ularni hamma joyda qabul qilishadi;",
    answer:
      "ular ishonchli; ularni hamma joyda qabul qilishadi; amalda ularni kuzatib turishning iloji yo‘q",
    noAnswer3: "ular ishonchli; amalda ularni kuzatib turishning iloji yo‘q",
  },
  {
    question: "“Banknota” so‘zining ma’nosi?",
    noAnswer1: "fransuzcha “bank” va “note” so‘zlaridan olingan",
    noAnswer2: "“bank puli” ma’nosini anglatadi",
    noAnswer3: "“bank valyutasi” ma’nosini anglatadi",
    answer:
      "inglizcha “bank” va “note” so‘zlaridan olingan bo‘lib, “bank yozuvi” ma’nosini anglatadi",
  },
  {
    question:
      "Bu tovarlar va xizmatlarni naqd pulsiz shaklda to‘lash, pullarni saqlash va tashish, kerak bo‘lgan\r\nhollarda esa, naqd pullarni olish (naqdlashtirish) uchun zarur hisoblangan zamonaviy qulay\r\ninstrumentdir",
    answer: "Bank to‘lov (plastik) kartalar",
    noAnswer1: "ID kartalar",
    noAnswer2: "bankomat",
    noAnswer3: "click xizmati",
  },
  {
    question: "PIN-kod – ?",
    noAnswer1: "bu karta egasi to‘g‘risidagi ma’lumot",
    noAnswer2: "bu karta to‘g‘risidagi konfidensial ma’lumot",
    noAnswer3: "bu konfidensial ma’lumot",
    answer: "bu karta egasi to‘g‘risidagi konfidensial ma’lumot",
  },
  {
    question:
      "“Bankomat” so‘zi qaysi so‘zlarning qisqartirilishidan kelib chiqqan?",
    answer: "“bank avtomati”",
    noAnswer1: "“bank ma'lumoti”",
    noAnswer2: "“bank pulyumoti”",
    noAnswer3: "“bank promoti”",
  },
  {
    question: "Birinchi bankomatlar qachon va qayerda paydo bo‘lgan?",
    noAnswer1: "o‘tgan asrning 60-yillarida Yevropada",
    noAnswer2: "o‘tgan asrning 60-yillarida AQShda",
    noAnswer3: "o‘tgan asrning 50-yillarida AQSh va Yevropada",
    answer: "o‘tgan asrning 60-yillarida AQSh va Yevropada",
  },
  {
    question: "Firibgarlikning usullaridan biri?",
    answer: "skimming",
    noAnswer1: "PIN",
    noAnswer2: "VISA",
    noAnswer3: "swimming",
  },
  {
    question:
      "Bu – distansion (masofaviy) bank xizmatlarini ko‘rsatishning zamonaviy takomillashgan\r\nshakllaridan biridir.",
    noAnswer1: "banking",
    answer: "onlayn-banking",
    noAnswer2: "free-banking",
    noAnswer3: "uzcard",
  },
  {
    question: "Hozir dunyoda qancha miqdorda bankomatlar mavjud?",
    noAnswer1: "2,0 mln.dan kam",
    noAnswer2: "2,0 mln.",
    answer: "2,0 mln.dan ortiq",
    noAnswer3: "1,0 mln.",
  },
  {
    question:
      "O‘zbekiston Respublikasi o‘z milliy valyutasini ishlab chiqarish uchun Markaziy bank huzurida\r\nqaysi korxona tashkil etgan?",
    noAnswer1: "“Davlat ramzi” Davlat ishlab chiqarish birlashmasini",
    noAnswer2: "“Davlat valyutasi” Davlat ishlab chiqarish birlashmasini",
    answer: "“Davlat belgisi” Davlat ishlab chiqarish birlashmasini",
    noAnswer3: "“Davlat puli” Davlat ishlab chiqarish birlashmasini",
  },
  {
    question:
      "Banknot, pasport blanklari, turli qimmatli qog‘ozlar va boshqa qimmatliklarni xalqaro talablarga\r\njavob beradigan, yuqori darajada himoyalangan mahsulotlar ishlab chiqarish imkoniyatlari\r\nyaratilgan.",
    answer: "Bosma fabrikasida",
    noAnswer1: "Qog‘oz fabrikasida",
    noAnswer2: "Zarbxonada",
    noAnswer3: "Markaziy bankda",
  },
  {
    question:
      "Sifatli va himoya belgilariga ega bo‘lgan qog‘oz mahsuloti ishlab chiqarish hamda Toshkent\r\nBosma fabrikasi qog‘oz xom-ashyosiga bo‘lgan talabini to‘liq ta’minlash yo‘lga qo‘yilgan.",
    noAnswer1: "Bosma fabrikasida",
    noAnswer2: "Zarbxonada",
    answer: "Qog‘oz fabrikasida",
    noAnswer3: "Markaziy bankda",
  },
  {
    question:
      "Tanga, medal va orden, yo‘lovchi tashish transporti uchun jetonlar va boshqa zaruriy\r\nmahsulotlarni ishlab chiqarish orqali respublikamizni ushbu mahsulotlarga bo‘lgan talabini\r\nqondirish imkoniyati yaratilgan.",
    noAnswer1: "Bosma fabrikasida",
    noAnswer2: "Qog‘oz fabrikasida",
    noAnswer3: "Markaziy bankda",
    answer: "Zarbxonada",
  },
  {
    question: "Kreditlarga xos bo‘lgan qanday firibgarliklar uchraydi?",
    noAnswer1:
      "Kredit bo‘yicha yolg‘onchasiga qo‘shib to‘lash. Siz olmagan kredit. “Do‘stlik” bo‘yicha\r\nmajburiyatlar. Bir necha minutda kredit. Kredit “qora” brokeri.",
    noAnswer2:
      "Siz olmagan kredit. “Do‘stlik” bo‘yicha majburiyatlar. Bir necha minutda kredit. Kredit “qora”\r\nbrokeri. Bank oldidagi qarzdorlikni “hamkorlikda moliyalashtirish”",
    noAnswer3:
      "Kredit bo‘yicha yolg‘onchasiga qo‘shib to‘lash. Siz olmagan kredit. “Do‘stlik” bo‘yicha\r\nmajburiyatlar. Bir necha minutda kredit. Bank oldidagi qarzdorlikni “hamkorlikda\r\nmoliyalashtirish”.",
    answer:
      "Kredit bo‘yicha yolg‘onchasiga qo‘shib to‘lash. Siz olmagan kredit. “Do‘stlik” bo‘yicha\r\nmajburiyatlar. Bir necha minutda kredit. Kredit “qora” brokeri. Bank oldidagi qarzdorlikni\r\n“hamkorlikda moliyalashtirish”.",
  },
  {
    question:
      "Unda oldin kelgan investorlarga to‘lanmalar keyin (yangi) kelgan investorlarning pul tushilmalari\r\nhisobidan amalga oshiriladi.",
    answer: "moliyaviy piramida",
    noAnswer1: "piramida",
    noAnswer2: "pulli piramida",
    noAnswer3: "iqtisodiy piramida",
  },
  {
    question:
      "Ko‘plab moliyaviy piramidalarning eng asosiy va o‘zgarmaydigan belgisi.",
    noAnswer1: "yuqori xarajat va’da qilish",
    noAnswer2: "valyuta va’da qilish",
    answer: "yuqori daromad va’da qilish",
    noAnswer3: "oltin va’da qilish",
  },
  {
    question:
      "Valyuta kurslarining tebranish (o‘zgarish) sabablari to‘g‘risidagi odamlarning bu tarzdagi\r\n“ogohligi”dan valyuta bozoridagi savdo.",
    noAnswer1: "Exchange",
    noAnswer2: "Uzex",
    noAnswer3: "Firefox",
    answer: "Forex",
  },
  {
    question: "Forexda faqat …........ yutuqli holda bo‘ladi.",
    noAnswer1: "diler",
    noAnswer2: "treyder",
    noAnswer3: "haridor",
    answer: "broker",
  },
  {
    question: "Forex bozorida ishlab topish – ?",
    noAnswer1: "juda oson",
    noAnswer2: "Murakkab",
    answer: "o‘ta murakkab",
    noAnswer3: "oson",
  },
  {
    question: "Korxona faoliyatini rejalashtirish qanday ahamiyatga ega?",
    answer:
      "Rejalashtirish - korxona samarali faoliyatinining omillarini tanlash va o‘zaro bog‘lash shaklidir",
    noAnswer1: "Rejalashtirish - korxona samarali faoliyatining omilidir",
    noAnswer2:
      "Rejalashtirish - korxona faoliyatini tashkil etuvchi omillar yig‘ish jarayonidir",
    noAnswer3:
      "Rejalashtirish- korxona faoliyatini tashkil etish va tugatish omilidir",
  },
  {
    question: "Korxona rejasi bu…. (to‘g‘ri javobni bering)",
    noAnswer1:
      "Ko‘zda tutilgan iqtisodiy samaradorlikni ilmiy va amaliy jihatdan asoslash",
    noAnswer2:
      "Tadbirkorlik faoliyati bilan bog‘liq bo‘lgan aniq hisoblar tizimi",
    noAnswer3:
      "Maqsadni belgilash, yo‘nalishlarini va vazifalarini aniqlash hamda nazorat qilishda muvofiqlikni\r\nta’minlashdir",
    answer:
      "Maqsadlarga erishish chora-tadbirlarini oldindan ishlab chiqish hamda resurslar orasida\r\nmuvofiqlikni ta’minlash",
  },
  {
    question: "Maqsad- bu …….",
    noAnswer1: "Foydani maksimallashtirish",
    noAnswer2: "Obyekt faoliyati haqidagi tushuncha",
    answer: "Obyektning kelgusidagi istalgan holati",
    noAnswer3: "Korxona imidji va tovar markasi",
  },
  {
    question:
      "Zarur hisob kitoblar hamda dalillar asosida korxona faoliyatining qisqa va uzoq muddatli\r\nstrategiyasini aniqlash – bu",
    noAnswer1: "Rejalashtirish maqsadi",
    noAnswer2: "Rejalashtirish mohiyati",
    answer: "Rejalashtirish vazifasi",
    noAnswer3: "Rejalashtirish mexanizmi",
  },
  {
    question:
      "Korxonada rejalashtirilayotgan reja ko‘rsatkichlarini asoslash yo‘llari, uslublarining tarkibi\r\nshuningdek ichki reja mazmuni, shakli, strukturasi va tuzish tartibini nima belgilaydi?",
    noAnswer1: "Rejalashtirish texnologiyasi",
    noAnswer2: "Rejalashtirish predmeti",
    noAnswer3: "Rejalashtirish uslubiyati",
    answer: "Rejalashtirish usuli",
  },
  {
    question: "Ko‘rsatkichlar orasida muvofiqlikni va bog‘liqlikni ta’minlaydi",
    answer: "Balans uslub",
    noAnswer1: "Ekstropolyatsiya uslub",
    noAnswer2: "Normativ uslub",
    noAnswer3: "Iqtisodiy matematik uslub",
  },
  {
    question: "Ko‘rsatkich - ....",
    noAnswer1: "Jarayonning faqat miqdoriy hajmini ifodalaydi",
    noAnswer2:
      "Jarayon yoki hodisaning moddiy buyumlashgan holatini hamda mazmunini tavsiflaydi",
    answer:
      "Jarayonning yoki hodisaning ijtimoiy iqtisodiy holatini, mohiyatini hamda mazmunini\r\ntavsiflaydi",
    noAnswer3:
      "Jarayon yoki hodisaning ham miqdor va sifat tomonlarini tavsiflaydi",
  },
  {
    question: "Ishlab chiqarish faoliyatini ifodalaydi ...",
    answer: "Umumiy ko‘rsatkich",
    noAnswer1: "Xususiy ko‘rsatkich",
    noAnswer2: "Miqdor ko‘rsatkich",
    noAnswer3: "Natural ko‘rsatkich",
  },
  {
    question:
      "Ijtimoiy-mehnatni rejalashtirish obyekti bo‘lib nima xizmat qiladi?",
    noAnswer1: "Texnologik jihozlar",
    answer: "Mehnat resurslari",
    noAnswer2: "Ish haqi fondi",
    noAnswer3: "Iqtisodiy resurslar",
  },
  {
    question:
      "Quyidagi klassifikatsion belgilardan qaysi biri reja turlariga tegishli emas?",
    noAnswer1: "Asoslash usuliga ko‘ra",
    noAnswer2: "Maqsad turiga ko‘ra",
    answer: "Resurslar turi bo‘yicha",
    noAnswer3: "Mazmuniga ko‘ra",
  },
  {
    question: "Rejalashtirishning qanday umumiy klassik printsiplari mavjud?",
    noAnswer1: "Sistemalik, birlik, uzluksizlik, o‘zgaruvchanlik, aniqlilik",
    noAnswer2: "Zaruriylik, optimallik, birlik, uzluksizlik, o‘zgaruvchanlik",
    answer: "Zaruriylik, yagonalik, uzluksizlik, o‘zgaruvchanlik, aniqlik",
    noAnswer3:
      "Zaruriylik, komplekslilik, uzluksizlik, o‘zgaruvchanlik, aniqlilik",
  },
  {
    question: "Koordinatsiyalash – bu",
    noAnswer1: "Yaqin darajadagi obyektlar o‘rtasidagi aloqani belgilaydi",
    noAnswer2: "Turli darajadagi obyektlar o‘tasidagi aloqani belgilaydi",
    answer: "Bir xil darajadagi obyektlar o‘rtasidagi aloqani belgilaydi",
    noAnswer3: "Tuzilgan rejaning maqsadga erishish usulini belgilaydi",
  },
  {
    question: "Iqtisodiy rivojlanishning qanday turlari mavjud?",
    answer: "Ideal, real, radikal",
    noAnswer1: "Induktiv va deduktiv",
    noAnswer2: "Ideal va radikal",
    noAnswer3: "Analitik va statistik",
  },
  {
    question: "Korxona potensiali deganda nimani tushunasiz?",
    noAnswer1: "Insonlarning iqtisodiy faoliyatga bo‘lgan qobiliyati majmuidir",
    noAnswer2:
      "Korxona potentsiali mehnat, iqtisodiy tashkiliy, ilmiy texnik texnik potentsiallar majmuidir.",
    answer:
      "Korxona potensiali uning qudrati, manbai, imkoniyatini harakterlaydigan ko‘rsatkichlar yoki\r\nomillar yig‘indisi, iqtisodiy faoliyatda foydalanadigan vositalar, zahiralar, qobiliyatlar,\r\nresurslardir",
    noAnswer3:
      "Korxona potentsiali tashkilotining rejalashtirilgan va xizmatlarni bajarish uchun zarur bo‘lgan\r\nmehnat, material, moliyaviy va boshqa resurslar majmuidir",
  },
  {
    question:
      "Mehnatga haq to‘lashni tashkil etishda qaysi me’yoriy hujjatga asoslanadi?",
    answer:
      "Mehnatga haq to‘lashni yagona tarif stavkasiga, 2009 yil 21-iyul 206-son",
    noAnswer1: "Mehnat kodeksining 153, 154, 156-moddalariga",
    noAnswer2:
      "Vazirlar mahkamasining 2015 yil 13-iyundagi 164-sonli qarori bilan tasdiqlangan klassifikatorga",
    noAnswer3:
      "Mehnatga haq to‘lashni yagona tarif stavkasiga, 1999 yil 21-iyul 206-son",
  },
  {
    question: "Rivojlanish yo‘nalishlarini sifatda va sonda tasvirlash bu...",
    noAnswer1: "Reja vazifasi",
    noAnswer2: "Reja mohiyati",
    answer: "Reja maqsadi",
    noAnswer3: "Reja mexanizmi",
  },
  {
    question:
      "Material resurlardan foydalanish koeffitsienti qanday aniqlanadi?",
    answer:
      "Haqiqiy material resurslari sarfini material sarfi normasiga nisbati orqali",
    noAnswer1: "Detal og‘irligini yarim tayyor mahsulot og‘irligiga nisbati",
    noAnswer2:
      "Sotilayotgan chiqindilarning og‘irligini sotilayotgan chiqindilar bahosiga nisbati",
    noAnswer3: "Yillik ishlab chiqarish ‘ajmini o‘rtacha quvvatga nisbati",
  },
  {
    question: "Korxona xodimlari deganda kimlarni tushunasiz?",
    noAnswer1: "Asosiy va yordamchi xodimlar birlashuvi",
    noAnswer2:
      "Injener – texnik xodimlar, xizmatchilar, shogirdlarning maqsadga muvofiq birlashuvi",
    noAnswer3:
      "Adminsrativ boshqaruv xodimlari, injener texnik xodimlar va xizmatchilar yig‘indisi",
    answer:
      "Foyda yoki daromad olish holda o‘z moddiy ehtiyojlarini qondirishga qaratilgan yagona ish\r\nfaoliyati bilan band bo‘lgan turli malaka va toifadagi xodimlar yig‘indisi",
  },
  {
    question: "Zaruriy ishchilar sonini aniqlash uslubiga quyidagilar kirmaydi",
    noAnswer1:
      "Vaqtbirligi davomida ishlab chiqarilgan mahsulot miqdori bo‘yicha",
    noAnswer2: "Xizmatko‘rsatish me’yori bo‘yicha",
    noAnswer3: "Mahsulotbirligiga sarflangan vaqt sig‘imi bo‘yicha",
    answer: "Foyda me’yori bo‘yicha",
  },
  {
    question: "Real ish haqini nominal ish haqidan farqi nimada?",
    noAnswer1:
      "Real ish haqi – haqiqiy ishlangan vaqt uchun to‘lovlar, nominal ish haqi - kunlik yo‘qotishlar\r\nuchun to‘lovlardir",
    noAnswer2:
      "Real ish haqi –amaldagi ish haqi stavkasi yoki ishchi oy vaqti birligidagi qiymati, nominal ish haqi\r\nesa ortiqcha soatlar uchun to‘lanadi.",
    answer:
      "Real ish haqi – nominal ish haqiga sotib olish mumkin bo‘lgan tovar, nominal ish haqi esa\r\nsarflangan mehnat uchun oladigan pul mablag‘lari summasidir.",
    noAnswer3:
      "Real ish haqi – ishlangan vaqt uchun to‘lanadi, nominal ish haqi esa ortiqcha soatlar uchun\r\nto‘lanadi.",
  },
  {
    question: "Ish haqi fondidan qaysi biri asosiy ish haqi hisoblanadi?",
    noAnswer1: "Kunlik ish haqi fondi.",
    noAnswer2: "Ta’rif ish haqi fondi.",
    answer: "Soatli ish haqi fondi.",
    noAnswer3: "Oylik ish haqi fondi.",
  },
  {
    question:
      "Ishbay ish haqi shaklida mehnatga haq to‘lashga quyidagilar xosdir?",
    noAnswer1: "Lavozim okladlari va oylik maoshlar",
    noAnswer2: "Ishlangan ish soatlari",
    answer: "Tayyorlangan mahsulot hajmi va ko‘rsatilgan xizmatlar soni",
    noAnswer3: "Ko‘rsatilgan xizmatlar soni",
  },
  {
    question: "Korxonaning ish haqi fondi quyidagilardan iborat bo‘ladi:",
    noAnswer1: "Asosiy ish haqi va mukofotlardan",
    noAnswer2: "Faqat asosiy ish haqidan",
    noAnswer3: "Mukofotlardan",
    answer: "Asosiy va qo‘shimcha ish haqidan",
  },
  {
    question:
      "Qaysi ish haqi fondi kunlik ruxsat etilgan imtiyozli uzilishlar uchun qo‘shimcha to‘lovlarni\r\ne’tiborga oladi?",
    noAnswer1: "Oylik",
    answer: "Kunlik",
    noAnswer2: "Soatlik",
    noAnswer3: "Yillik",
  },
  {
    question: "Soatlik ish haqi tarkibiga quyidagilar kiradi:",
    answer:
      "Ishbayish haqi fondi, vaqtbay ish haqi fondi, mukofot, tungi soatda ishlanganlik uchun\r\nto‘lovlar, brigadirlik uchun to‘lov, shogird tayyorlaganlik uchun to‘lov, bayram kunlari ishlaganlik\r\nuchun to‘lov",
    noAnswer1:
      "Mehnat ta’tili uchun to‘lov,to‘g‘ri ish haqi fondi, o‘smirlarga qisqartirilgan soatlar uchun to‘lov,\r\nmukofotlar, brigadirlik uchun to‘lov, shogird tayyorlaganlik uchun to‘lov",
    noAnswer2:
      "Xizmat safari uchun to‘lov, ishbay ish haqi fondi, vaqtbay ish haqi fondi, mukofot, tungi soatda\r\nishlanganlik uchun to‘lovlar, brigadirlik uchun to‘lov, shogird tayyorlaganlik uchun to‘lov",
    noAnswer3:
      "To‘g‘ri ish haqi fondi, o‘smirlarga qisqartirilgan soatlar uchun to‘lov, mukofotlar, brigadirlik\r\nuchun to‘lov, shogird tayyorlaganlik uchun to‘lov, bayram kunlari ishlaganlik uchun to‘lov",
  },
  {
    question:
      "Ishlab chiqarish uchastkasida 5 ta o‘smir ishlaydi, ularning o‘rtacha tarif stavkasi 620 so‘mga\r\nteng. Yildagi ish kunlari soni 240 kun. O‘smirlar uchun qo‘shimcha to‘lov summasini aniqlang.",
    noAnswer1: "550 000 so‘m",
    noAnswer2: "645000 so‘m",
    answer: "744000 so‘m",
    noAnswer3: "600 000 so‘m",
  },
  {
    question: "O‘rtacha kunlik ish haqi quyidagicha aniqlanadi",
    noAnswer1:
      "Ish haqining kunlik fondi jami ishlangan ish soatlariga bo‘linadi",
    noAnswer2:
      "Ishhaqining soatlik fondi jami ishlangan ish soatlariga bo‘linadi",
    noAnswer3: "Ishhaqining oylik fondi ishlangan kishi soatlariga bo‘linadi",
    answer: "Ish haqining kunlik fondi jami ishlangan kishi kunlarga bo‘linadi",
  },
  {
    question:
      "Korxonaning ish haqi fondini rejalashtirish quyidagi tartibda amalga oshiriladi. To‘g‘ri tartibni\r\nbelgilang.",
    answer:
      "Soatlik ish haqi fondi, kunlik ish haqi fondi, oylik yoki yillik ish haqi fondi",
    noAnswer1: "Oylik, kunlik, soatlik ish haqi fondi",
    noAnswer2:
      "Kunlik ish haqi fondi, oylik ish haqi fondi va yillik ish haqi fondi",
    noAnswer3:
      "To‘g‘ri ish haqi fondi, ishbay ish haqi fondi, vaqtbay ish haqi fondi va qo‘shimcha to‘lovlar fondi",
  },
  {
    question: "Qo‘shimcha to‘lovlar quyidagilarni ko‘zda tutadi.",
    noAnswer1: "Qo‘shimcha ishlaganligi uchun to‘lovlarni",
    noAnswer2:
      "Korxona rahbariyati tomonidan ruxsat etilgan uzilishlar uchun to‘lovlarni",
    answer:
      "Mehnatqonunchiligida ko‘zda tutilgan imtiyozli uzulishlar uchun to‘lovlarni",
    noAnswer3: "Moddiy yordam uchun berilgan to‘lovlarni",
  },
  {
    question: "Ishbay ish haqi quyidagicha aniqlanadi:",
    noAnswer1: "Baho ko‘paytiriladi daromadga",
    noAnswer2: "Baho ko‘paytiriladi ishlab chiqarilgan mahsulot qiymatiga",
    noAnswer3: "Ishlanganish soatlari ko‘paytiriladi o‘rtacha tarif stavkasiga",
    answer: "Baho ko‘paytiriladi mahsulot hajmining naturadagi ifodasiga",
  },
  {
    question:
      "O‘smirlarning asosiy ish haqi, ya’ni ishlab chiqarilgan mahsuloti yoki ishlagan ish soati uchun\r\nto‘lanadigan asosiy ish haqi qaysi fond tarkibiga kiritiladi.",
    answer: "To‘g‘ri ish haqi fondi",
    noAnswer1: "Kunlikish haqi fondi",
    noAnswer2: "Oylik ish haqi fondi",
    noAnswer3: "Yillik ish haqi fondi",
  },
  {
    question: "O‘rtacha xarajatlar...",
    answer:
      "Birlik mahsulotga Ishlab chiqarish xarajatlari miqdorini belgilovchi xarajatlardir.",
    noAnswer1:
      "Ishlabchikarilganmahsulothajmigabog‘liqxoldao‘zgaradiganxarajatlardir.",
    noAnswer2:
      "Har bir mahsulot xajimidagi doimiy va o‘zgaruvchan xarajatlar summasidir.",
    noAnswer3:
      "Ishlab chiqarish hajmiga bog‘liq xolda o‘zgarmaydigan xarajatlardir.",
  },
  {
    question: "Sof diskont daromadga to‘g‘ri ta’rifni bering",
    noAnswer1:
      "Investitsiya loyihasini ekspluatatsiya davridagi pul oqimlarining kelajakdagi qiymati bilan uni\r\namalga oshirishga investitsiya qilinuvchi mablag‘ o‘rtasidagi farq;",
    noAnswer2:
      "Investitsiya loyihasini ekspluatatsiya davrida investitsiya mablag‘lari bilan erishiladigan\r\ndaromadlar orasidagi farq;",
    answer:
      "Investitsiya loyihasini ekspluatatsiya davrida hozirgi qiymatga keltirilgan pul oqimlari summasi\r\nbilan uni amalga oshirishga investitsiya qiluvchi mablag‘lar o‘rtasidagi farq;",
    noAnswer3:
      "Investitsiya loyihasini ekspluatatsiya davrida pul oqimlarining erishiladigan daromadlar\r\norasidagi farq;",
  },
  {
    question: "Ish haqi fondini yiriklashtirilgan usulda rejalashtirish bu - …",
    noAnswer1:
      "Ish haqi fondini turli tadbirlar natijasida erishilgan ish haqi iqtisodi asosida aniqlash",
    noAnswer2:
      "Ish haqi fondini minimal ish haqi miqdorini oshishi asosida aniqlash",
    answer:
      "Ish haqi uchun mablag‘larni ish haqi fondi indeksi yordamida aniqlash",
    noAnswer3:
      "Ish haqi fondini minimal ish haqi miqdorini kamayish asosida aniqlash",
  },
  {
    question: "Umumiy kal`kulyatsiya bu ...",
    noAnswer1:
      "Bu har bir mahsulot turini ishlab chiqarish uchun sarflanadigan xarajatlar",
    noAnswer2: "Bu ishlab chiqarishga sarflangan umumiy xarajatlar",
    noAnswer3: "Jami xarajatlarni hisoblash usuli",
    answer:
      "Bu mahsulot birligini ishlab chiqarishga sarflanayotgan o‘rtacha xarajatlar",
  },
  {
    question: "Tur kal`kulyatsiyasi bu ...",
    noAnswer1:
      "Bu mahsulot birligini ishlab chiqarishga sarflanayotgan o‘rtacha xarajatlar",
    noAnswer2: "Bu ishlab chiqarishga sarflangan umumiy xarajatlar",
    answer:
      "Bu har bir mahsulot turini ishlab chiqarish uchun sarflanadigan xarajatlar",
    noAnswer3:
      "Bu mahsulot birligini ishlab chiqarishga sarflanayotgan umumiy xarajatlar",
  },
  {
    question:
      "Ishlab chiqarish hajmiga bog‘liqlik darajasiga ko‘ra qanday xarajatlar ajratiladi?",
    noAnswer1: "Asosiy, ustama",
    noAnswer2: "O‘zgaruvchan, ustama.",
    noAnswer3: "O‘zgaruvchan, bilvosita",
    answer: "O‘zgaruvchan, shartli doimiy.",
  },
  {
    question: "2024-yil nomini ko‘rsating",
    noAnswer1: "=\r\nYoshlar va biznes yili",
    noAnswer2: "Biznes va yoshlarni qo‘llab-quvvatlash yili",
    answer: "Yoshlar va biznesni qo‘llab-quvvatlash yili",
    noAnswer3: "Biznes va yoshlar yili",
  },
  {
    question:
      "“Mahsulot (ish, xizmat) lar tannarxiga kiritiladigan mahsulotlarni ishlab chiqarish va sotish\r\nbo‘yicha xarajatlar tarkibi hamda moliyaviy natijalarni shakllantirish haqida” gi Nizomda\r\nxarajatlar qaysi iqtisodiy belgilar bo‘yicha guruhlangan?",
    answer: "Iqtisodiy mazmun va mohiyatiga ko‘ra",
    noAnswer1:
      "Shakllanayotgan joyiga va qaysi maqsadda ishlatilayotganiga asosan",
    noAnswer2: "Ishlab chiqarish jarayonida qatnashuviga asosan",
    noAnswer3:
      "Ishlab chiqarish jarayonida qatnashuviga asosan va Iqtisodiy mazmun va mohiyatiga ko‘ra",
  },
  {
    question:
      "Qaysi belgilar asosida xarajatlar bir guruhga birlashtirilganda guruh modda deb ataladi.",
    noAnswer1: "Iqtisodiy mohiyati va mazmuniga asosan",
    noAnswer2: "Ishlab chiqarish jarayonida qatnashuviga asosan",
    answer:
      "Xarajatlarni qayerda shakllanishi va qanday maqsadlarda foydalanayotganiga asosan",
    noAnswer3: "Ishlab chiqarish jarayonida qatnashmasligiga asosan",
  },
  {
    question:
      "Qaysi belgilar asosida xarajatlar bir guruhga birlashtirilganda guruh element deb yuritiladi.",
    noAnswer1:
      "Xarajatlarni qayerda shakllanishi va qanday maqsadlarda foydalanayotgani",
    noAnswer2: "Ishlab chiqarish jarayonida qatnashuviga asosan",
    answer: "Iqtisodiy mohiyati va mazmuniga asosan",
    noAnswer3: "Ishlab chiqarish jarayonida qatnashmasligiga asosan",
  },
  {
    question: "Ishlab chiqarishga xarajatlar smetasi nima?",
    answer:
      "Ishlab chiqarish faoliyatining kelgusi davri uchun barcha sarflar yig‘ma rejasi",
    noAnswer1:
      "Ishlab chiqarish moliyaviy faoliyatning talab etilgan davr uchun barcha daromadlarining\r\njamlama rejasi",
    noAnswer2:
      "Ishlab chiqarish moliyaviy faoliyatining alohida davri uchun korxonaning barcha daromad va\r\nxarajatlarning jamlama rejasi",
    noAnswer3:
      "Ishlab chiqarish moliyaviy faoliyatining alohida davri uchun korxonaning barcha daromad va\r\nxarajatlarning jamlama rejasi va ishlab chiqarish moliyaviy faoliyatining kelgusi davri uchun\r\nbarcha sarflar yig‘ma rejasi",
  },
  {
    question: "Moliyaviy reja qanday asosiy bo‘limlardan tashkil topadi?",
    noAnswer1:
      "Foyda va zararlar to‘g‘risida prognoz reja, pul oqimlari rejasi, aktiv va passivlar prognoz balansi",
    noAnswer2:
      "Ishlab chiqarishni tayyorlash xarajatlari, foyda va zararlar, joriy xarajatlar",
    answer:
      "Foyda va zararlar, aktiv va passivlar prognoz balansi, pul oqimlari rejasi, asosiy kapital tarkibi,\r\nqarzlar bo‘yicha hisobot",
    noAnswer3:
      "Asosiy kapital tarkibi, amortizatsiya normasi, qarzlar bo‘yicha hisobot",
  },
  {
    question: "Qaysi ish haqi qo‘shimcha ish haqi hisoblanadi?",
    noAnswer1:
      "Tungi smenada ishlagani uchun to‘lov hamda brigadirlik uchun to‘lov",
    noAnswer2: "Shogird tayyorlagani uchun hamda mehnat ta'tili uchun to‘lov",
    answer:
      "Ruxsat etilgan imtiyozli vaqt uchun hamda mehnat ta'tillari uchun to‘lanadigan to‘lovlar",
    noAnswer3: "Brigadirlik uchun to‘lov",
  },
  {
    question: "Asosiy faoliyatdan ko‘rilgan foyda bu .......",
    noAnswer1:
      "Yalpi foyda minus davr xarajatlari plyus moliyaviy faoliyatdan ko‘rilgan daromadlar va minus\r\nzararlardir",
    noAnswer2:
      "Bu sotishdan olingan sof tushum bilan sotilgan mahsulotning ishlab chiqarish tannarxi orasidagi\r\nfarq",
    answer:
      "Yalpi foyda bilan davr xarajatlari orasidagi farq hamda plyus asosiy faoliyatdan ko‘rilgan\r\nboshqa daromadlar yoki minus boshqa zararlardir",
    noAnswer3: "Yalpi foyda minus moliyaviy faoliyat bilan bog‘liq xarajatlar",
  },
  {
    question: "Rentabellik ko‘rsatkichi nima?",
    noAnswer1:
      "Rentabellik absolyut kattalik bo‘lib, korxona samaradorligini ifodalaydigan ko‘rsatkichdir.",
    noAnswer2:
      "Mahsulot ishlab chikarishga sarflangan xarajatlarni ifodalaydi.",
    noAnswer3:
      "Korxona faoliyatini natijasini ifodalaydigan miqdor ko‘rsatkichi hisoblanadi.",
    answer:
      "Rentabellik korxona faoliyatining foydalilik darajasini ifodalaydigan nisbiy ko‘rsatkichdir.",
  },
  {
    question:
      "Firmaning rejalashtirilgan ishlab chiqarish dasturini bajarish uchun zarur bo‘lgan material\r\nresurslarga bo‘lgan ehtiyoji aks ettirilgan byudjet bu-",
    noAnswer1: "Sotib olish byuljeti",
    noAnswer2: "Mehnat byudjeti",
    answer: "Moddiy byudjet",
    noAnswer3: "Naqd pul byudjeti",
  },
  {
    question: "Daromadlilik indeksi nimani ko‘rsatadi?",
    noAnswer1: "Daromadlik normasi yeki loyixaning foydaliligi.",
    noAnswer2: "Diskont normasi.",
    noAnswer3:
      "Kapital qo‘yilmalar va olingan umumiy samara o‘rtasidagi nisbati kattaligidir.",
    answer:
      "Keltirilgan samara summasini kapital qo‘yilmalar umumiy kattaligiga nisbati.",
  },
  {
    question: "«Biznes- reja» nima?",
    answer:
      "Tadbirkorlik faoliyatining barcha asosiy tomonlari ifodalanadigan hujjat.",
    noAnswer1: "Raqobatchilar moliyaviy xolatini ifodalaydigan xujjat.",
    noAnswer2: "Tovarlarni tarkatish taktikasini ifodalaydigan xujjat.",
    noAnswer3: "Narxlar soxasidagi strategiyani belgilaydigan xujjat.",
  },
  {
    question: "Biznes-rejaning bosh ichki maqsadi nima?",
    noAnswer1: "Tadbirkorlik faoliyatini boshkarish uchun asos bo‘lishi.",
    noAnswer2: "Moliyalashtirish strategiyasini aniqlash.",
    answer: "Faoliyatning muvaffaqqiyatiga ishontirish.",
    noAnswer3: "Sotish bozorini Baholash",
  },
  {
    question:
      "Iqtisodiy samaradorlikni ifodalovchi ko‘rsatkichlar quyidagilardan iborat:",
    noAnswer1: "Mahsulotni sotish hajmi va foyda miqdori;",
    noAnswer2: "Korxona aktivlari va passivlari;",
    noAnswer3: "Korxona fond qaytimi va fond sig‘imi;",
    answer: "Foyda miqdori va daromadliligi;",
  },
  {
    question: "Bahodan chegirishdan ko‘zda tutilgan maqsad nima?",
    noAnswer1: "Raqobatni yumshatish",
    noAnswer2: "Baholarni korrektirovka qilish",
    answer: "Istemolchi (haridor) larni jalb qilish",
    noAnswer3: "Tavakkalchilikni kamaytirish",
  },
  {
    question:
      "Mehnatga haq to‘lash xarajatlari biznes rejaning qaysi bo‘limida amalga oshiriladi?",
    noAnswer1: "Moliyaviy rejada",
    noAnswer2: "Xarajatlar rejasida",
    noAnswer3: "Marketing rejasida",
    answer: "Tashkiliy rejada",
  },
  {
    question: "Tovar deb, nimaga aytiladi?",
    noAnswer1: "yaratilgan mahsulotga",
    noAnswer2: "iste’molga tushgan barcha moddiy ne’mat va xizmatlarga",
    answer:
      "kishilar ehtiyojini qondiradigan va bozor uchun ishlab chiqarilgan mahsulotga.",
    noAnswer3: "o‘zgalar ehtiyojini qondiruvchi vositalarga",
  },
  {
    question: "+++\r\nKritik nuqta bu-",
    noAnswer1:
      "Ishlab chiqarish hajmiga bog‘liq xolda o‘zgarmaydigan xarajatlar.",
    noAnswer2:
      "Umumiy kattaligi ishlab chiqarish hajmiga bog‘liq bo‘lgan xarajatlar darajasi.",
    answer: "Barcha umumiy xarajatlarni to‘liq qoplaydigan tushum darajasi.",
    noAnswer3:
      "Savdo foydasi va umumiy ishlab chiqarish xarajatlari orasidagi farq",
  },
  {
    question: "Rejalashtirish usuli...",
    answer:
      "Korxonalarda reja ko‘rsatkichlarini asoslash yo‘llari va qoidalari, shuningdek firma ichki\r\nrejalarining mazmuni, shakli, tuzilmasi va tartibini ifodalaydi",
    noAnswer1:
      "Korxonalarda rejalashtirish borasida qonuniyatlar, ilmiy tamoillar, zamonaviy talablar, iqtisodiy\r\nko‘rsatmalar majmuasi",
    noAnswer2:
      "Rejalashtirish- korxona faoliyatini tashkil etish bosqichlari,rejalarning shakli, tuzilmasi, tartibi",
    noAnswer3: "Rejalashtirish texnologiyasidir",
  },
  {
    question:
      "Maqsad turiga ko‘ra rejalashtirishning qanday turlari qo‘llaniladi?",
    noAnswer1: "Operativ, normativ, taktik, joriy",
    answer: "Operativ , taktik, strategik, normativ",
    noAnswer2: "Taktik, strategik, reaktiv, dastlabki, ta’minot-sotuv",
    noAnswer3: "Strategikva normativ",
  },
  {
    question:
      "Quyidagi tartib rejalarni tuzish ishlarini tashkil qilishning qaysi ko‘rinishiga tegishli?\r\nBosh maqsadlar bo‘yicha dastlabki rejalar tuziladi va quyi bo‘g‘inlarda ular aniqlashtiriladi.\r\nSo‘ngra quyidan yuqoriga harakat amalga oshiriladi. Bunda xususiy rejalar orasidagi farqlar\r\nbartaraf etiladi va yanada samarali yechimlar qo‘shiladi.",
    noAnswer1: "Pastdan yuqoriga",
    noAnswer2: "Yuqoridan pastga",
    answer: "Aralash",
    noAnswer3: "Gorizontal",
  },
  {
    question: "Analitik - hisoblash uslubi mohiyati – ?",
    noAnswer1: "Vazifalarni tarkibiy qismga va operatsiyalarga taqsimlash",
    noAnswer2: "Normativlarni ishlab chiqish",
    answer: "Normativlar asosida normani belgilash",
    noAnswer3: "Norma va normativlarni kuzatish asosida belgilash",
  },
  {
    question: "Reja tuzish tartibi necha xil ko‘rinishda amalga oshiriladi?",
    noAnswer1: "Gorizontal, vertikal aralash",
    answer: "Yuqoridan pastga, patdan yuqoriga va aralash",
    noAnswer2:
      "Birinchi ko‘rinishda barcha bo‘limlar bo‘yicha rejalar bir xil vaqtda ishlab chiqilib, so‘ngra\r\nmuvofiqlashtiriladi, ikkinchi ko‘rinishda esa bo‘limlar bo‘yicha rejalar mantiqiy ketma-ketlikda\r\nishlab chiqilib, so‘ngra muvofiqlashtiriladi",
    noAnswer3:
      "Talab aniqlanadi va ishlab chiqarish hajmi hamda belgilanadi, so‘ngra ushbu ko‘rsatkich asosida\r\nboshqa bo‘limlar o‘z rejalarini tuzadilar, ishlab chiqadi yoki avvalo korxonaning kelgusidagi\r\nmaqsadlari borasida qaror qabul qilinadi va shu asosida reja ko‘rsatkichlari ishlab chiqiladi",
  },
  {
    question: "Rejalashtirish jarayoni quyidagi bosqichlardan iborat:",
    noAnswer1:
      "Vazifani aniqlash, vositalarni tanlash, maqsadni belgilash va nazorat",
    noAnswer2:
      "Vositalarni tanlash, nazorat, vazifani aniqlash va maqsadni belgilash",
    noAnswer3:
      "Maqsadni belgilash, vositalarni tanlash, nazorat va vazifani aniqlash",
    answer:
      "Maqsadni belgilash, vazifani aniqlash, vositalarni tanlash va nazorat",
  },
  {
    question: "Kalendar rejalashtirish bu–…",
    answer:
      "Korxonaning yillik rejasini o‘n kunlik, hafta, kun va smena bo‘yicha aniqlashtirish",
    noAnswer1:
      "Korxonaning yilik rejasini bo‘linmalar va bajaruvchilar bo‘yicha aniqlashtirish",
    noAnswer2:
      "Korxonaning yillik rejasini faqat ish kunlari bo‘yicha aniqlashtirish",
    noAnswer3:
      "Korxonaning yillik rejasini kalendar’ kunlar bo‘yicha aniqlashtirish",
  },
  {
    question: "Ishlab chiqarishning asosiy maqsadi –",
    noAnswer1: "davlat iqtisodiyotini rivojlantirish",
    answer: "oshib boruvchi ehtiyojlarni qondirish.",
    noAnswer2: "davlatning ishlab chiqarish potentsialini oshirish",
    noAnswer3: "ilmiy – texnika taraqqiyotini ta’minlash",
  },
  {
    question:
      "Yangi mahsulotni prognozlashtirish jarayonida qanday usul foydalaniladi?",
    noAnswer1: "Ekspert baholar, statistik baholar, modellashtirish",
    noAnswer2: "Ekspert baholar, analitik, iqtisodiy matematik usul",
    answer:
      "Ekspert baholar, ekstrapolyatsiya (statistik baholar), solishtirish",
    noAnswer3: "Ekstrapolyatsiya (statistik baholar), solishtirish, analitik",
  },
  {
    question:
      "Korxonani boshqarishda boshqarilishning qaysi strukturalaridan foydalaniladi?",
    answer:
      "Chiziqli, funktsional, chiziqli – funktsional, funksional – shtabli",
    noAnswer1: "Chiziqli va funktsional",
    noAnswer2: "Funktsional, chiziqli, chiziqsiz",
    noAnswer3: "Funktsional, chiziqli, texnik – funktsional",
  },
  {
    question: "Zararsizlik nuqtasi – bu...",
    noAnswer1: "Tushum va xarajatlar orasidagi farq",
    answer: "Barcha xarajatlar to‘liq qoplanadigan tushum",
    noAnswer2: "Tushumga bog‘liq holda o‘zgaradigan xarajatlar",
    noAnswer3: "Tushumga bog‘liq holda o‘zgarmas xarajatlar",
  },
  {
    question: "Tarif koeffitsienti – bu...",
    answer: "Razryadlar orasidagi farqlarni ifodalaydi",
    noAnswer1: "Ish haqi orasidagi farqni ifodalaydi",
    noAnswer2: "Tarif stavkalar orasidagi farqlarni ifodalaydi",
    noAnswer3: "Ishbay ish haqi orasidagi farqlarni ifodalaydi",
  },
  {
    question: "Korxonani ishlab chiqarish dasturining mohiyati nimada?",
    noAnswer1:
      "Yillik ishlab ishlab chiqarish ‘ajmi, nomenklutarsi, sifati va muddatini ifodalaydigan kompleks\r\nishlab chiqarish rejasidir",
    noAnswer2: "Sotish ‘ajmini ishlab chiqarish kompleks rejasi",
    noAnswer3:
      "Talabga mos ravishda yillik ishlab chiqarish ‘ajmi, nomenklaturasi va muddatini ifodalaydigan\r\nmahsulot ishlab chiqarish kompleks rejasidir",
    answer:
      "Bozor talab etgan tovar va xizmatlarni ishlab chiqarish yillik hajmi, nomenklaturasi, sifati va\r\nmuddatini ifodalaydigan kompleks ishlab chiqarish rejasi",
  },
  {
    question: "Ishlab chiqarish rejasi mazmunini quyidagilar tashkil etadi:",
    noAnswer1: "Ishlab chiqarish quvvatlarini hisoblash",
    noAnswer2: "Resurslarbo‘yicha sarflarni aniqlash",
    answer:
      "Korxonanimahsulot ishlab chiqarish bo‘yicha real imkoniyatlarini aniqlash",
    noAnswer3:
      "Ishlab chiqarish quvvatlarini hisoblash, korxonani mahsulot ishlab chiqarish bo‘yicha real\r\nimkoniyatlarini aniqlash, resurslar bo‘yicha sarflarni aniqlash",
  },
  {
    question: "Ishlab chiqarish dasturi bu",
    noAnswer1:
      "Turli ehtiyojlarni qondirishga yo‘naltirilgan mahsulotlar nomenklaturasi, assortimenti, sifati va\r\nmiqdorini ifodalovchi reja ko‘rsatkichlari tizimidir",
    noAnswer2:
      "Mahsulot ishlab chiqarish bo‘yicha material resurslar sarfini, mahsulotlar assortimentini,\r\njihozlar sonini ifodalovchi tizim",
    answer:
      "Mahsulotishlab chiqarish bo‘yicha Texnologik jarayon sxemasi, mahsulot turlari miqdori va\r\nsifatini belgilovchi tizim",
    noAnswer3:
      "Mahsulot ishlab chiqarish hajmini kvartallar, oylar va dekadalarda ifodalovchi tizim",
  },
  {
    question:
      "Material resurslarga bo‘lgan talab biznes rejaning qaysi bo‘limida aks ettiriladi?",
    noAnswer1: "Xarajatlar rejasi",
    noAnswer2: "Marketing rejasi",
    answer: "Ishlab chiqarish rejasi",
    noAnswer3: "Moliyaviy reja",
  },
  {
    question: "Ishlab chiqarish faoliyatini rejalashtirish - …….",
    noAnswer1:
      "Korxona va firmalarning rivojlanishini, xo‘jalik faoliyati shakllarini va iqtisodiy maqsadlarni\r\nasoslashni o‘rganadi",
    answer:
      "Iqtisodiy resurslarni tanlash va ulardan foydalanish qonunlari. tamoyillari, qoidalari va\r\nusullarini o‘rganadi",
    noAnswer2: "Iqtisodiy resurslarni boshqarish muammolarini o‘rganadi",
    noAnswer3:
      "Korxonaninghaqiqiy holatini tadqiq qilishni va uning kelgusidagi rivojlanish darajasini o‘rganadi",
  },
  {
    question:
      "Mehnat sarfi ifodasidagi mahsulot hajmi quyidagi ko‘rsatkichlar aniqlashga asos bo‘ladi",
    noAnswer1:
      "Material resurslarga talab hajmini, ish haqi fondi va ishchilar sonini aniqlash uchun",
    noAnswer2:
      "Jihozlar soni, ishchilar soni va moliyaviy natijalarni shakillantirish uchun",
    answer: "Ishchilar soni va ish haqi fondini aniqlash uchun",
    noAnswer3: "Baho, ishchilar soni va ish haqi fondini aniqlash",
  },
  {
    question: "“Biznes reja” quyidagi talablarga javob berishi lozim",
    noAnswer1: "Biznes strategiyasini amalga oshirish quroli bo‘lishi lozim",
    noAnswer2: "Mablag‘larni yo‘naltirishi lozim",
    answer: "Har bir ko‘rsatkich asoslasnishi shart",
    noAnswer3:
      "Rivojlanish yo‘nalishlarini son va sifat ko‘rsatkichlari tizimi sifatida ifodalashi lozim",
  },
  {
    question: "Qo‘shimcha to‘lov va kompensatsiyalar nima uchun xizmat qiladi",
    noAnswer1:
      "Qo‘shimcha to‘lov va kompensatsiyalar xodimlarning yuqori aktivligini rag‘batlantirishga\r\nyo‘nalitirilgan.",
    noAnswer2: "Ishlab chiqarish samaradorligini oshirishga xizmat qiladi.",
    answer:
      "Mehnat sharoitidagi chetlanishlarda ishchi kuchini qo‘shimcha xarajatlarini qoplash uchun\r\nbelgilanadi.",
    noAnswer3:
      "Qo‘shimcha to‘lov va kompensatsiyalar xodimlarning bajargan ishlariga to‘lovlarni ifodalaydi.",
  },
  {
    question: "Ishchilarning asosiy va qo‘shimcha ish haqi tushunchasi.",
    noAnswer1:
      "Asosiy ish haqi ishlagan vaqt uchun, qo‘shimcha ish haqi ishdan tashqari soatlar uchun\r\nto‘lanadi.",
    noAnswer2:
      "Asosiy ish haqi haqiqiy bajarilgan ish uchun, qo‘shimcha ish haqi esa qo‘shimcha soat\r\nuchunto‘lanadi.",
    noAnswer3:
      "Asosiy ish haqi ishlangan vaqt (bajarilgan ish, ishlab chiqarilgan mahsulot) uchun, qo‘shimcha\r\nish haqi esa ishlanmagan vaqt uchun to‘lanadi.",
    answer:
      "Asosiy ish haqi ishlangan vaqt uchun (xizmatlar, mahsulotlar hajmini bajarganligi uchun)\r\nto‘lanadi, qo‘shimcha ish haqi esa mehnat qonunlariga belgilangan ishlanmagan vaqt uchun\r\nqo‘shimcha to‘lovlardir.",
  },
  {
    question: "Ishlab chiqarish – bu",
    noAnswer1: "iqtisodiyotni moliyalashtiruvchi yagona manbaa",
    noAnswer2: "jamiyat hayoti uchun 2 – darajali rol o‘ynaydi",
    noAnswer3: "mehnat vositalarini mehnat predmeti va mehnatdan ajralishidir",
    answer: "ko‘payib boruvchi ehtiyojlarni qondiruvchi yagona manbaa.",
  },
  {
    question:
      "«Kalkulyatsiya obyekti» va «Kalkulyatsiya birligi» tushunchasi nimani ifodalaydi.",
    noAnswer1:
      "Kalkulyatsiya obyekti tannarx o‘lchov birligi kalkulyatsiya, birligi-mahsulot turi.",
    answer:
      "Kalkulyatsiya obyekti- mahsulot turi, kalkulyatsiya birligi – mahsulot birligi uchun xarajatlar",
    noAnswer2:
      "Kalkulyatsiya obyekti-birlik xizmat turi, kalkulyatsiya birligi - birlik mahsulot uchun material\r\nxarajatlari",
    noAnswer3:
      "Kalkulyatsiya obyekti mahsulot turi, birligi – tannarx xarajatlari o‘lchov birligi.",
  },
  {
    question: "Mahsulot tannarxi kalkulyatsiyasi nima?",
    answer:
      "Xarajatlarning kelib chiqish o‘rniga ko‘ra aloxida moddalarga taksimlanishi.",
    noAnswer1: "Mahsulot tannarxining xarajat elementlari buyicha joylanishi.",
    noAnswer2:
      "Korxonada ishlab chikarilayotgan mahsulot birligining tannarxi.",
    noAnswer3: "Moddiy va mehnat xarajatlarini guruxlanishi.",
  },
  {
    question:
      "Texnik iqtisodiy loyihada faoliyatning qaysi jihatlariga urg‘u beriladi?",
    noAnswer1: "Faoliyatning moliyaviy jihatlariga",
    noAnswer2: "Faoliyatning tijorat jihatlariga",
    answer: "Faoliyatning texnik va texnologik jihatlariga",
    noAnswer3: "Faoliyatning barcha jihatlariga",
  },
  {
    question:
      "Rejalashtirishda foydaning qanday ko‘rsatkichlaridan foydalaniladi?",
    noAnswer1: "Balans foyda, normativ foyda",
    noAnswer2: "Sof foyda, normativ foyda",
    answer: "Balans foyda, asosiy faoliyat foydasi, sof foyda,",
    noAnswer3: "Balans foyda",
  },
  {
    question: "Mahsulot rentabelligi qanday aniqlanadi?",
    answer: "Foydani uni olishga sarflangan xarajatlarga nisbatan orqali.",
    noAnswer1: "Mahsulotning bozor bahosini to‘la tannarxga nisbati orqali.",
    noAnswer2:
      "Balans foydani yillik umumiy soliq ajiratmalariga nisbati orqali.",
    noAnswer3: "Tannarx miqdorini foyda miqdoriga nisbati orqali.",
  },
  {
    question: "Biznes reja quyidagi asosiya vazifani bajaradi",
    noAnswer1: "Maqsadni amalga oshirish vositalari majmuasi",
    noAnswer2: "Havf-xatarni kamaytirish",
    answer: "Biznesni amalga oshirish konsepsiyasi",
    noAnswer3: "Korxona faoliyatini davom ettirish",
  },
  {
    question: "Ko‘rsatkichlar quyidagi talablarga javob berishi lozim",
    noAnswer1: "Faqat miqdoriy tavsifga ega bo‘lishi",
    answer: "Ishonchlilik va o‘lchov hususiyatiga ega bo‘lishi",
    noAnswer2: "Faqat sifat tasnifga ega bo‘lishi",
    noAnswer3: "Jarayonning ijtimoiy va iqtisodiy jihatlarini tafsiflashi",
  },
  {
    question:
      "Material resurslardan foydalanish koeffitsienti qanday aniqlanadi?",
    noAnswer1:
      "Detal og‘irligini yarim tayyor mahsulot og‘irligiga nisbati orqali",
    noAnswer2:
      "Sotilayotgan chiqindilarning miqdorini sotilayotgan chiqindilar qiymati nisbati orqali",
    answer:
      "Haqiqiy material resurslari sarfini material sarfi normasiga nisbati orqali",
    noAnswer3:
      "Yillik ishlab chiqarish hajmini o‘rtacha quvvatga nisbati orqali",
  },
  {
    question: "Jihozlardan intensiv foydalanish koeffitsienti mohiyatini …",
    noAnswer1:
      "Jihozning ish vaqtidan foydalanish darajasini ifodalash tashkil etadi",
    noAnswer2:
      "Jihoz samaradorligidan foydalanish darajasini ifodalash tashkil etadi",
    noAnswer3: "Jihoz sonidan foydalanish darajasini ifodalash tashkil etadi",
    answer:
      "Jihozning soatlik unimdorligidan foydalanish darajasini ifodalash tashkil etadi",
  },
  {
    question:
      "Ro‘yxatdagi ishchilar soni bilan haqiqiy ishchilar soni orasidagi farq.............",
    noAnswer1:
      "Ishkuni davomida yuz beradigan tashkiliy-texnik tanaffuslar hisobiga yuzaga keladi",
    noAnswer2:
      "Ishchilarning ishga sababsiz kelmagan kunlari hisobiga yuzaga keladi",
    noAnswer3:
      "Doimiy va mavsumiy ishlarga jalb qilingan ishchilar soni orasidagi farqdir",
    answer:
      "Imtiyozli ruxsat etilgan ishga chiqmaslik kunlari hisobiga yuzaga keladi",
  },
  {
    question: "Ishlab chiqarishning asosiy omillari:",
    answer: "ishchi kuchi, kapital, yer va tadbirkorlik qobiliyati.",
    noAnswer1: "xom-ashyo va ishlab chiqarish texnologiyasi",
    noAnswer2: "ishlab chiqarish resurslari",
    noAnswer3: "Kapital",
  },
  {
    question: "Ehtiyoj - bu........",
    noAnswer1: "ishlab chiqarish jarayoni",
    answer: "hayotiy vositalarga bo‘lgan zaruriyat.",
    noAnswer2: "iste’mol jarayonida qo‘llanilishi mumkin bo‘lgan vosita",
    noAnswer3: "resurs",
  },
  {
    question: "Iqtisodiyotning bosh masalasi va doimiy muammosi:",
    noAnswer1:
      "ishlab chiqarish hajmini oshirish uchun qancha ishchi kuchi sarflash kerak",
    answer: "nima, qanday, qancha va kim uchun ishlab chiqarish.",
    noAnswer2: "davlatning milliy daromadini qanday oshirish mumkin",
    noAnswer3: "aholi bandligini oshirish",
  },
  {
    question: "Kreditlar – bu",
    answer:
      "pul vositalarini tovar va xizmatlarga to‘lov, qaytarib berish sharti bilan noma’lum muddatga\r\nqarz berish.",
    noAnswer1:
      "ssuda fondini shakllantirish va undan foydalanish munosabatlari",
    noAnswer2:
      "qarz berish jarayonlarida qarz beruvchi va qarzdor o‘rtasidagi amalga oshiriladigan harakat",
    noAnswer3:
      "tovar va xizmatlarga naqd pulsiz shaklda hisob – kitob qilish uchun bank tomonidan beriladigan\r\nmoliyaviy xujjat",
  },
  {
    question:
      "Korxonaning ishlab chiqarish hajmi 7000 dona mahsulotni tashkil qiladi. Ishchilarning o‘rtacha\r\nro‘yxatdagi soni 200 kishi bo‘lib, ishlab chiqarish hajmini 15% ga oshirish ko‘zda tutiladi. Reja yili\r\nuchun ishchilar soni quyidagiga teng bo‘ladi:",
    noAnswer1: "240 kishi",
    noAnswer2: "250 kishi",
    answer: "230 kishi",
    noAnswer3: "210 kishi",
  },
  {
    question: "Iste’molchilik krediti – bu",
    noAnswer1: "kreditning asosiy va yetakchi shakli",
    noAnswer2:
      "korxonalar va birlashmalar hamda boshqa xo‘jalik yurutuvchi sub’ektlarning bir – biriga\r\nberadigan krediti",
    answer:
      "xususiy shaxslarga iste’mol tovarlari sotib olish uchun ma’lum muddatga beriladigan kredit.",
    noAnswer3:
      "ko‘chmas mulklar hisobiga uzoq muddatli ssudalar shaklida beriladigan kredit",
  },
  {
    question:
      "Pul mablag‘larini to‘plash, joylashtirish va ularning harakatini tartibga solish bilan\r\nshug‘ullanuvchi iqtisodiy muassasa .....",
    noAnswer1: "tovarlar birjasi",
    noAnswer2: "mehnat birjasi",
    noAnswer3: "chakana savdo tashkiloti",
    answer: "bank.",
  },
  {
    question:
      "Korxonaning ro‘yxatdagi ishlovchilar soni quyidagilardan tarkib topadi:",
    noAnswer1:
      "1 kun muddat bilan doimiy va vaqtinchalik ishlarga qabul qilingan xodimlar",
    noAnswer2:
      "Qabul qilingan xodimlar doimiy va mavsumiy ishlarga qabul qilingan xodimlar",
    answer: "1 kun va undan ko‘proq muddatga doimiy va vaqtinchalik ishlarga",
    noAnswer3:
      "Qabul qilingan xodimlar doimiy va mavsumiy ishlarga qabul qilingan xodimlar va 1 kun muddat\r\nbilan doimiy va vaqtinchalik ishlarga qabul qilingan xodimlar",
  },
  {
    question: "Giperinflyatsiya – bu",
    answer:
      "narxning shiddat bilan o‘sishi, pul qadrining juda tezlik bilan pasayishi.",
    noAnswer1: "qtisodiy tanglik va ishsizlikning birgalikda yuz berishi",
    noAnswer2:
      "eski pulning qadri yuqori qilib belgilangan, ammo nomi eskicha qolgan yangi pulga ma’lum\r\nnisbatda almashtirib va nisbatga qarab narxlarni ham o‘zgartirish tushuniladi",
    noAnswer3:
      "pulning yuridik kuchini bekor qilish va yangi pul chiqarish tushuniladi",
  },
  {
    question: "Samaradorlik mezoni qanday ko‘rsatkichlar bilan ifodalanadi?",
    noAnswer1:
      "Sof diskontlangan daromad (SDD) yalpi milliy daromad (YaMD) Yalpi ichki mahsulot (YaIM)\r\ndaromadlik indeksi (DI)",
    noAnswer2:
      "Sof milliy mahsulot (SMM) yalpi milliy mahsulot (YaMM) milliy daromad (ME)",
    answer:
      "Sof diskontlangan daromad (SDD) daromadlilik indeksi (DI), qoplash muddati",
    noAnswer3:
      "Baho indeksi (BI), daromadlilik indeksi (DI) koplash muddatining, ichki daromadlilik normasi\r\n(IDN)",
  },
  {
    question:
      "Bozor sharoitida qanday ko‘rsatkich umum qabul qilingan samaradorlik mezoni bo‘lib\r\nhisoblanadi?",
    noAnswer1: "Dividend",
    noAnswer2: "Baho",
    noAnswer3: "Zarar",
    answer: "Maksimal foyda",
  },
  {
    question: "Inflyatsiya – bu",
    answer:
      "muomaladagi pul massasining tovarlar massasidan ustunligi natijasida tovarlar bilan\r\nta’minlangan pullarni ko‘payib ketishi.",
    noAnswer1: "milliy pul birligi qiymatining rasmiy tartibda pasaytirilishi",
    noAnswer2: "milliy pul birligi qiymatining rasmiy tartibda ko‘tarilishi",
    noAnswer3: "eksportni importga nisbatan nihoyatda ortib ketishi",
  },
  {
    question: "Jihozlardan ekstensiv foydalanish koeffitsienti mohiyatini…",
    noAnswer1:
      "jihozning soatlik unimdorligidan foydalanish darajasini ifodalash tashkil etadi",
    noAnswer2:
      "jihoz samaradorligidan foydalanish darajasini ifodalash tashkil etadi",
    answer:
      "jihozning ish vaqtidan foydalasnish darajasini ifodalash tashkil etadi",
    noAnswer3: "jihoz sonidan foydalanish darajasini ifodalash tashkil etadi",
  },
  {
    question: "Pul muomalasi – bu",
    noAnswer1:
      "mamlakatda pul muomilasini tashkil qilishga xizmat qiluvchi naqd va kredit pullar",
    answer: "pulning o‘z vazifasini bajarish jarayonidagi to‘xtovsiz harakati.",
    noAnswer2:
      "pul mablag‘larini ssuda fondi shaklida to‘lash va ularni takror ishlab chiqarish ehtiyojlari uchun\r\nqarzga berish",
    noAnswer3:
      "daromadning qarzga berilgan pul summasiga nisbatining foizda ifodalanishi",
  },
  {
    question: "Mahsulot tavsifida asosiy e’tibor quyidagiga qaratiladi",
    noAnswer1: "Mahsulotning boshqa mahsulotdan farq qiluvchi jihatlariga",
    noAnswer2: "Mahsulot sifati jihatidan farq qiluvchi jihatlariga)",
    noAnswer3: "Mahsulot narxi jihatidan farq qiluvchi jihatlariga",
    answer: "Mahsulotning raqobatchi mahsulotdan farq qiluvchi jihatlariga",
  },
  {
    question: "Nazariy quvvat –bu ?",
    answer: "Korxona jihozlari pasportidagi ishlab chiqarish imkoniyati",
    noAnswer1:
      "Korxonaning ish sharoitini e’tiborga olgan xoldagi mahsulot ishlab chiqarish imkoniyati",
    noAnswer2: "Normal ish sharoitidagi mahsulot ishlab chiqarish imkoniyati",
    noAnswer3:
      "Mavjud shart-sharoitlardagi mahsulot ishlab chiqarish imkoniyati",
  },
  {
    question: "Amaliy quvvat –bu?",
    noAnswer1:
      "Mavjud shart-sharoitlardagi mahsulot ishlab chiqarish imkoniyati",
    noAnswer2: "Korxona jihozlari pasportidagi ishlab chiqarish imkoniyati",
    answer:
      "Korxonaning ish sharoitini e’tiborga olgan xoldagi mahsulot ishlab chiqarish imkoniyati",
    noAnswer3: "Ideal ish sharoitidagi mahsulot ishlab chiqarish imkoniyati",
  },
  {
    question: "Rejalashatirish jarayoni-bu …",
    noAnswer1: "Korxona faoliyatini belgilash jarayoni",
    answer: "Rejani ishlab chiqish jarayoni",
    noAnswer2: "Korxona maqsadini amalga oshirish jarayoni",
    noAnswer3: "Korxona resurslaridan foydalanishni belgilash jarayoni",
  },
  {
    question: "Rejalashtirish jarayoni obyekti – bu…",
    noAnswer1: "Korxonaning mehnat va moddiy resurslari",
    noAnswer2: "Korxonaning iqtisodiy salohiyati",
    noAnswer3: "Korxonaning ishlab chiqarish bo‘limlari",
    answer: "Korxona va uning ishlab chiqarish jarayoni",
  },
  {
    question: "«Rezyume» bo‘limining asosiy maqsadi nimada?",
    answer: "Ish taklifining qisqa mazmunini berilishi",
    noAnswer1: "Mahsulot va xizmat turini aniqlash",
    noAnswer2: "Ishlab chiqarilayotgan mahsulot iste’molchilarini aniqlash",
    noAnswer3: "Korxona joylashgan o‘rnini belgilash",
  },
  {
    question:
      "Yirik korxonalar uchun biznes reja necha bo‘limdan iborat bo‘ladi – …",
    noAnswer1: "8",
    answer: "10",
    noAnswer2: "3",
    noAnswer3: "5",
  },
  {
    question:
      "Kichik korxonalar uchun tuzilgan biznes reja necha bo‘limdan iborat bo‘ladi – …",
    noAnswer1: "8",
    noAnswer2: "3",
    answer: "5",
    noAnswer3: "10",
  },
  {
    question: "Biznes reja qaysi funksiyalarni bajaradi?",
    answer: "Korxona strategiyasini amalga oshirish, mablag‘larni jalb qilish",
    noAnswer1: "Korxona taktikasini amalga oshirish, pul oqimlarini boshqarish",
    noAnswer2: "Rivojlanish yo‘nalishlarini son va sifatda tasvirlash",
    noAnswer3: "Harakatlar dasturini shakllantirish va yo‘naltirish",
  },
  {
    question:
      "Texnologik jihatdan o‘xshash ishlab chiqarishning birlashuvi – bu",
    noAnswer1: "Iqtisodiy rivojlanish",
    answer: "Iqtisodiy o‘sish",
    noAnswer2: "Ishlab chiqarish strategiyasi",
    noAnswer3: "Ishlab chiqarish taktikasi",
  },
  {
    question:
      "Biznes rejaning qaysi bo‘limi boshqa bo‘limlarni shakllantirish uchun asos bo‘lib xizmat qiladi –",
    noAnswer1: "Biznesni ifodalash",
    noAnswer2: "Ishlab chiqarish rejasi",
    answer: "Marketing rejasi",
    noAnswer3: "Moliyaviy reja",
  },
  {
    question: "Tovarni tarqatishni taktikasini nimadan boshlash zarur?",
    noAnswer1: "Mijozlarga axborot berishdan",
    noAnswer2: "Mijozlarni tahlil qilishdan",
    noAnswer3: "Maqsadli bozorni aniqlashdan",
    answer: "Sotish usullarini tasvirlashdan",
  },
  {
    question: "Davlat byudjeti nima?",
    noAnswer1: "pul mablag‘larini jamg‘aruvchi fond",
    noAnswer2: "pul mablag‘larining ma’lum yo‘nalishlar bo‘yicha taqsimlanishi",
    noAnswer3:
      "umumjamiyat miqyosida markazlashgan holda pul mablag‘larining sarflanishi",
    answer:
      "umumjamiyat miqyosida markazlashgan holda davlat ishtirokida to‘planadigan va\r\nsarflanadigan moliyaviy resurslar.",
  },
  {
    question:
      "Tadbirkorlik obyektiga yoki xo‘jalik obyektiga ilmiy texnika taraqqiyoti yutuqlari doirasida\r\nzaruriy innovatsiyalarni, o‘zgarishlarni kiritish – bu",
    answer: "Iqtisodiy rivojlanish",
    noAnswer1: "Ishlab chiqarish strategiyasi",
    noAnswer2: "Iqtisodiy o‘sish",
    noAnswer3: "Ishlab chiqarish taktikasi",
  },
  {
    question: "Yalpi foyda salmog‘i qanday aniqlanadi?",
    noAnswer1: "umumiy sotuv hajmi/umumiy yalpi foyda",
    noAnswer2: "umumiy yalpi foyda * umumiy sotuv hajmi",
    answer: "umumiy yalpi foyda/umumiy sotuv hajmi",
    noAnswer3: "umumiy yalpi foyda - umumiy sotuv hajmi",
  },
  {
    question: "Texnik- iqtisodiy rejalashtirish -",
    answer:
      "Korxonaning barcha iqtisodiy va moliyaviy ko‘rsatkichlarini aniqlash, iqtisodiy resurslarni\r\ntanlash va ular bo‘yicha normalarni belgilashni ko‘zda tutadi",
    noAnswer1:
      "Korxona bozorga qanday moslashishini va unga qanday ta’sir etishni ko‘zda tutadi",
    noAnswer2:
      "Mahsulotlarni ishlab chiqarish uchun qanday texnologiya qo‘llanilishi kerakligini ko‘zda tutadi",
    noAnswer3:
      "Korxonada qanday mahsulot ishlab chiqarish kerakligini ko‘zda tutadi",
  },
  {
    question: "Korxonada ichki rejalashtirishning qanday turlari qo‘llaniladi?",
    noAnswer1: "Strategik va normative",
    answer: "Operativ, taktik, strategik, normativ",
    noAnswer2: "Operativ, normativ, taktik, joriy",
    noAnswer3: "Operativ va taktik",
  },
  {
    question:
      "Yangi va eski bozorlarda tovarlarni sotish hajmini ko‘paytirish bu-",
    noAnswer1: "Iqtisodiy rivojlanish",
    noAnswer2: "Ishlab chiqarish strategiyasi",
    answer: "Iqtisodiy o‘sish",
    noAnswer3: "Ishlab chiqarish taktikasi",
  },
  {
    question: "Maqsadga erishish vositalarini belgilash bu",
    noAnswer1: "Strategiya",
    noAnswer2: "Oddiy harakat",
    noAnswer3: "Foyda olish",
    answer: "Taktika",
  },
  {
    question:
      "Tanlangan maqsad va qo‘llaniladigan usullariga ko‘ra rejalashtirish quyidagilarga bo‘linadi:",
    noAnswer1: "Texnik iqtisodiy va tashkiliy texnik",
    answer: "Texnik iqtisodiy va operativ ishlab chiqarish",
    noAnswer2: "Operativ ishlab chiqarish va umumlashtirilgan",
    noAnswer3: "Tashkiliy texnik va taktik",
  },
  {
    question: "Korxona faoliyatini boshqarish uslublarini tanlash bu...",
    noAnswer1: "Taktika",
    noAnswer2: "Oddiy harakat",
    answer: "Strategiya",
    noAnswer3: "Foyda olish",
  },
  {
    question: "Strategik rejalashtirish –",
    noAnswer1:
      "Maqsad va vazifalarni, vositalarni ochiq va asoslangan tarzda belgilash ko‘zda tutadi",
    noAnswer2: "Korxonaning umumiy maqsadiga erishish usullarini tanlashdir",
    noAnswer3:
      "Avval belgilab qo‘yilgan maqsad va vazifalarni erishish yo‘llarini tanlashdan iboratdir",
    answer:
      "Korxonaning umumiy maqsadlarini belgilash va unga erishish usullarini tanlashdir.",
  },
];
const clean = (text) =>
  String(text)
    ?.replace(/[^a-zA-Z0-9А-яЁё+\-*/]/g, "")
    .replaceAll(" ", "")
    .toLowerCase();

const generate = (data = []) => {
  const questionMtContent = document.querySelector(
    ".content-wrapper .col-md-8.mt30"
  );
  const questionsList = questionMtContent?.children;

  const noAnswers = [];
  if (questionsList) {
    Array.from(questionsList)
      .slice(1, questionsList.length)
      .forEach((element, index) => {
        const questionElement = element?.querySelector(".box-title");
        const questionElementText = questionElement?.innerText;
        const questionElementTextLen = clean(questionElementText).length - 2;
        const questionStr = clean(questionElementText).slice(
          2,
          questionElementTextLen
        );
        let status1 = false;

        const jsonData = data.filter(({ question: itemQuestion = "" }) => {
          const questionReplace = clean(itemQuestion);

          if (questionStr === "") return item;

          return questionReplace?.includes(questionStr);
        });

        const [jsonDataFirstElement] = jsonData;

        if (jsonDataFirstElement) {
          const anwerText = jsonDataFirstElement?.answer;
          questionElement.setAttribute("title", anwerText);
          const anwersList = element?.querySelector(
            ".box-body.checkbo.checkbo-ready"
          )?.children;

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
          questionElement.setAttribute("title", "-----");
        }

        if (!status1 && questionsList?.length >= index) {
          noAnswers.push(index + 1);
        }
      });
  }
  const statusText = noAnswers.length + " ta " + JSON.stringify(noAnswers);
  document
    .querySelector('.box.box-default [data-target="#myModal"]')
    .setAttribute("title", statusText);
};

window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === ";") {
    generate(data);
  }
});

try {
  const boxTitle = document.querySelector(
    ".box.box-default .box-header h3.box-title"
  );
  boxTitle.style.cursor = "pointer";
  boxTitle.addEventListener("click", (e) => {
    e.stopPropagation();
    generate(data);
  });
} catch (error) {}
