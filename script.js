const data = [
  {
    "question": "Vijdon erkinligi nima?",
    "noAnswer1": "kishilarning o‘z milliy diniga etiqod qilish huquqi;",
    "noAnswer2": "fuqarolarning albatta biron bir jaxon diniga e’tiqod qilish zarurligi;",
    "answer": "fuqarolarning dinga e’tiqod qilish yoki e’tiqod qilmaslikni o‘zlari mustaqil hal qilish huquqi;",
    "noAnswer3": "fuqarolarning dinga ishonmasligi va unga qarshi tashviqot olib borish huquqi."
  },
  {
    "question": "Dinning qanday ildizlari bor?",
    "noAnswer1": "genetik, tarixiy, psixologik;",
    "answer": "gnoseologik, sotsial, psixologik;",
    "noAnswer2": "sotsial, biologik, iloxiy;",
    "noAnswer3": "afsonaviy, falsafiy, psixologik."
  },
  {
    "question": "Dinning unsurlarini sanab bering.",
    "noAnswer1": "tasavvur, diniy psixologiya, diniy tashkilotlar;",
    "noAnswer2": "diniy tasavvur, diniy axloq, diniy mafkura;",
    "answer": "diniy ong, diniy xis-tuyg‘u (psixologiya), diniy ibodat, diniy tashkilotlar;",
    "noAnswer3": "xudoga, payg‘ambarlarga, farishta va jin-ajinalarga ishonish."
  },
  {
    "question": "Dinning funksiyalari.",
    "noAnswer1": "axloqiy, tarbiyaviy, mavkuraviy;",
    "answer": "to‘ldiruvchilik, birlashtiruvchilik, o‘zaro aloqadorlik, tartibga soluvchilik;",
    "noAnswer2": "tinchlik, do‘stlik, tenglik, tabiatni muxofaza qilish;",
    "noAnswer3": "gnoseologik, antronologik, teologik, psixologik."
  },
  {
    "question": "Din - bu:",
    "noAnswer1": "xalq uchun afyun;",
    "noAnswer2": "insonning xudo bilan o‘zaro munosabat usuli;",
    "answer": "tashqi olam kuchlarining kishi ongida g‘ayritabiiy ifodalanishi:",
    "noAnswer3": "gnoseologik, antronologik, teologik, psixologik."
  },
  {
    "question": "Qaysi bir din eng qadimgi?",
    "noAnswer1": "pravoslaviya;",
    "noAnswer2": "proteotantizm;",
    "noAnswer3": "islom;",
    "answer": "yaxudiylik"
  },
  {
    "question": "Musulmonlar hijriy yil hisobi qachondan boshlanadi?",
    "noAnswer1": "Muhammad payg‘ambarning tug‘ilishidan;",
    "noAnswer2": "Muhammad payg‘ambarning payg‘ambarlik faoliyati boshlani-shidan;",
    "noAnswer3": "Qur’onning paydo bo‘lishidan;",
    "answer": "dastlabki musulmonlarning Yasrib (Madina) ga ko‘chib borishidan."
  },
  {
    "question": "Jahon dinlari qaysi dinlar?",
    "answer": "buddizm, xristianlik, islom;",
    "noAnswer1": "buddizm, iudaizm, sintoizm;",
    "noAnswer2": "xristianlik, islom, protestansizm;",
    "noAnswer3": "provoslaviya, katolitsizm, braxmanizm."
  },
  {
    "question": "Yaponiyaning milliy dini qaysi din?",
    "answer": "sintoizm;",
    "noAnswer1": "buddizm;",
    "noAnswer2": "konfutsiychilik;",
    "noAnswer3": "krishnaizm."
  },
  {
    "question": "Fetishizm nimani ilohiylashtiradi?",
    "noAnswer1": "hayvonlarni",
    "noAnswer2": "Odamlarni",
    "noAnswer3": "ruhni",
    "answer": "moddiy narsalarni;"
  },
  {
    "question": "“Yahudiy” so‘zining kelib chiqishi borasida Abu Rayhon Beruniy o‘z asarida qanday izoh keltirib o‘tadi?",
    "answer": "“tavba qilmoq, tavba qilganlar”",
    "noAnswer1": "“Adashganlar, adashuvchi”",
    "noAnswer2": "“G‘ayri dinlar, boshqa dinga ergashuvchilar”",
    "noAnswer3": "“Isroilliklar”"
  },
  {
    "question": "Xristianlikning asosiy oqimlari qaysi oqimlar?",
    "answer": "katolik, pravoslav, protestantizm;",
    "noAnswer1": "baptizm, pravoslav, fetishizm;",
    "noAnswer2": "lyuteranlik, pravoslav, katolitsizm;",
    "noAnswer3": "iudaizm, sintoizm, shamanizm."
  },
  {
    "question": "Islom dinining asosiy yo‘nalishlari qaysilar?",
    "noAnswer1": "vahhobiylar va sunniylar;",
    "noAnswer2": "fundamentalizm va sunnizm;",
    "answer": "sunniylar va shialar;",
    "noAnswer3": "so‘fiylik, shialar, ismoiliylar."
  },
  {
    "question": "Yahudiy xalqiga nisbatan qo‘llaniladigan “Banu isroil” so‘zining ma’nosi nima?",
    "answer": "“Isroil avlodlari”",
    "noAnswer1": "“Isroil ajdodlari”",
    "noAnswer2": "“Isroil bog‘lari”",
    "noAnswer3": "“Isroil xudolari”"
  },
  {
    "question": "Yahudiylik ta’limoti to‘rt asosga tayanadi bular qaysi javobda keltirilgan?",
    "answer": "1. Olamlarni yaratuvchi yagona xudo Yahvega imon keltirish 2. Yahudiylar yer yuzidagi xalqlarning “eng mumtozi” va u dunyoda berilajak in’omlarning eng haqlisi ekanligi 3. Messiya haloskorning kelishi haqida 4. Oxirat kuniga ishonish",
    "noAnswer1": "1. Olamlarni yaratuvchi yagona xudo Yahvega imon keltirish 2. Yahudiylar yer yuzidagi xalqlarning “eng mumtozi” va u dunyoda berilajak in’omlarning eng haqlisi ekanligi 3. Messiya haloskorning kelishi haqida 4. Namoz o‘qish",
    "noAnswer2": "1. Olamlarni yaratuvchi yagona xudo Yahvega imon keltirish 2. Yahudiylar yer yuzidagi xalqlarning “eng mumtozi” va u dunyoda berilajak in’omlarning eng haqlisi ekanligi 3. Isroil davlatining yahudiylarga in’om etilganligi haqida 4. Oxirat kuniga ishonish",
    "noAnswer3": "1. Xudo uchun qurbonliklar keltirish 2. Yahudiylar yer yuzidagi xalqlarning “eng mumtozi” va u dunyoda berilajak in’omlarning eng haqlisi ekanligi 3. Messiya haloskorning kelishi haqida 4. Oxirat kuniga ishonish"
  },
  {
    "question": "Yahudiylarning muqaddas diniy manbalaridan hisoblangan Talmuda yahudiylik marosimlari tizimi ishlab chiqilgan. Unda yahudiylar amal qilishi va bajarishi lozim bo‘lgan qancha buyruq va qancha ta’qiq mavjud?",
    "answer": "248 ta buyruq 365 ta ta’qiq",
    "noAnswer1": "280 ta buyruq 450 ta ta’qiq",
    "noAnswer2": "200 ta buyruq 300 ta ta’qiq",
    "noAnswer3": "308 ta buyruq 505 ta ta’qiq"
  },
  {
    "question": "Shariat nima?",
    "noAnswer1": "islom dini qoidalarini o‘rgatuvchi ta’limot;",
    "answer": "barcha musulmonlar uchun bajarilishi majbur bo‘lgan qonunlar, huquqiy-ahloqiy ko‘rsatmalar tizimi;",
    "noAnswer2": "xadislar asosida tuzilgan to‘plam;",
    "noAnswer3": "oilaviy munosabatlarni tartibga soluvchi qonun."
  },
  {
    "question": "Hozirgi islomda qanday sektalar mavjud?",
    "noAnswer1": "xorijiylar, imomiylar, ismoiliylar, aliiloxiylar, bobiylar, vaxxobiylar;",
    "noAnswer2": "sunniylar, shialar, ismoiliylar, xanifiylar;",
    "noAnswer3": "shialar, xanifiylar, zardushtiylar;",
    "answer": "Sektalar mavjud emas."
  },
  {
    "question": "Islom sobiq SSRning qaysi mintaqalarida keng tarqalgan?",
    "noAnswer1": "Ozarbayjon, Janubiy Osetiya, Dog‘iston, Oltoy o‘lkasi va O‘rta Osiyoda",
    "answer": "O‘rta Osiyo, Qozog‘iston, Tatariston, Bashqirdiston, Shimoliy Kavkaz, Dog‘iston va ayrim Kavkaz orti respublikalarida;",
    "noAnswer2": "Ukraina, Tojikiston, Estoniya, Qirg‘iziston va Shimoliy Osetiyada.",
    "noAnswer3": "Rossiya, Tatariston , Belorusiya,  Osetiyada."
  },
  {
    "question": "Qadimgi yahuiylarning ibroniy tilida yuborilgan muqaddas kitobi “Tora” hisoblanadi. “Tora” so‘zining ma’nosi qaysi variantda to‘g‘ri ko‘rsatilgan?",
    "answer": "“qonun, shariat”",
    "noAnswer1": "“Kitob”",
    "noAnswer2": "“Muqaddas”",
    "noAnswer3": "“Eng oliy”"
  },
  {
    "question": "Diniy tashkilotlarning qonunchilikka rioya qilishni kim nazorat qiladi?",
    "noAnswer1": "O‘zbekiston Xalq-demokratik partiyasi;",
    "noAnswer2": "O‘zbekiston Prezidenti;",
    "noAnswer3": "mahalliy Sovetlar va hokimliklar;",
    "answer": "O‘zbekiston Vazirlar Mahkamasi."
  },
  {
    "question": "Yapon xalqining milliy e’tiqodi hisoblangan Shinto dini nechanchi asrlarda to‘liq shakllangan?",
    "answer": "VII-VIII asrlarda",
    "noAnswer1": "VIII-IX asrlarda",
    "noAnswer2": "V-VI asrlarda",
    "noAnswer3": "III-IV asrlarda"
  },
  {
    "question": "Yapon xalqi an’analarining eng qadimgi yozma manbasi qaysi?",
    "answer": "“Kodziki”",
    "noAnswer1": "“Shinto”",
    "noAnswer2": "“Kami”",
    "noAnswer3": "“Samuray”"
  },
  {
    "question": "Hadislar nima?",
    "noAnswer1": "jahon musulmon ulomalari uyushmasi chiqargan qonun-qoidalar;",
    "noAnswer2": "Qur’oni karimga yozilgan sharhlar;",
    "answer": "Muhammad payg‘ambarning hayoti, faoliyati, diniy va ahloqiy ko‘rsatmalarini mujassamlashtirgan ta’limot;",
    "noAnswer3": "shariat qonunlari va oliy ulomalar fatvolari jamlangan diniy kitob."
  },
  {
    "question": "Turkistonlik buyuk muhaddislar kimlar?",
    "noAnswer1": "Ismoil al-Buxoriy, Alisher Navoi, Al-Farobiy;",
    "answer": "Imom at-Termiziy, Ismoil al-Buxoriy, Abu Iso as-Samarqandiy, imom Muslim;",
    "noAnswer2": "Abu Ali Ibn Sino, Imom at-Termiziy, Beruniy;",
    "noAnswer3": "Shayx Sa’diy, Rudakiy, Axmad Yassaviy, Jomiy."
  },
  {
    "question": "Inson kamolati nimalarga bog‘liq?",
    "noAnswer1": "faqat Ollohga;",
    "noAnswer2": "Qur’on, hadislarni yaxshi bilib, musulmonchilik qoidalarini bajarishga;",
    "noAnswer3": "kechayu kunduz tinmay ishlashga;",
    "answer": "umuminsoniy qadriyatlarga rioya qilib, ilm olish, halol, oqilona mehnat qilishga."
  },
  {
    "question": "Islomdagi asosiy amaliy va marosimiy talablar qaysilar?",
    "noAnswer1": "sunnat, bibiseshanba, irim-sirimlar;",
    "answer": "ro‘za tutish, namoz o‘qish, zakot berish, iloji bo‘lsa hajga borish;",
    "noAnswer2": "janoza, xudoyi, ashur oshi, navro‘z, nikox.",
    "noAnswer3": "xudoyi, ashur oshi. Sunnat"
  },
  {
    "question": "Iso Masih qaysi dinning payg‘ambari?",
    "noAnswer1": "buddizm",
    "noAnswer2": "sintoizm",
    "noAnswer3": "Islom",
    "answer": "Xristianlik"
  },
  {
    "question": "Avesto qaysi dinning muqaddas kitobi?",
    "noAnswer1": "musulmonlarning;",
    "noAnswer2": "xristianlarning;",
    "answer": "zardushtiylikning;",
    "noAnswer3": "buddizm va yaxudiylarning"
  },
  {
    "question": "Sintoiylik panteonining eng oliy kamisi Quyosh (Buyuk samo chirog‘i)ning nomi qaysi javobda ko‘rsatilgan?",
    "answer": "“ Amaterasu”",
    "noAnswer1": "“Susanoo”",
    "noAnswer2": "“Ame-no Minakanusi-no”",
    "noAnswer3": "“Naruto Uzumaki”"
  },
  {
    "question": "Totemizm nima?",
    "noAnswer1": "tarixiy din shakllaridan biri;",
    "answer": "ibtidoiy jamoada turli hayvonlarni urug‘ga asos solgan deb hisoblab, ilohiylashtirish va sig‘inish;",
    "noAnswer2": "tush ko‘rish va boshqa irim-sirimlarga ishonish;",
    "noAnswer3": "jonsiz narsalarni ilohiylashtirish va sig‘inish."
  },
  {
    "question": "O‘zbekiston xalqaro Islom akademiyasi  qaysi oliy ta’lim muassasalari negizida tashkil etildi?",
    "answer": "O‘zbekiston Islom akademiyasi va Toshkent Islom universiteti negizida",
    "noAnswer1": "Qoraqalpog‘iston Respublikasi, Samarqand davlat universitetlari negizida",
    "noAnswer2": "Namangan va Surxondaryo viloyatlaridagi Akademiyalar negizida",
    "noAnswer3": "O‘zbekiston milliy universitet negizida"
  },
  {
    "question": "O‘zbekiston musulmonlari idorasi huzurida “Vaqf” xayriya jamoat fondining asosiy maqsadi nimalardan iborat?",
    "noAnswer1": "Ajdodlarimizning diniy-ilmiy merosini keng targ‘ib qilish, dinning haqiqiy insonparvarlik maqsadini hamda diniy-maʼrifiy hayotda sodir bo‘layotgan yangiliklardan keng jamoatchilikni xabardor qilib borishdan iborat.",
    "answer": "Masjidlar, ziyoratgohlar, muqaddas qadamjolar va shu kabi boshqa obyektlarning rekonstruksiyasini moliyalashtirish, ularni moddiy-texnik bazasini yaxshilash hamda ushbu soha xodimlarini moddiy qo‘llab-quvvatlashdan iborat",
    "noAnswer2": "Respublika kengashi bilan jamiyatda vijdon erkinligi va diniy-maʼrifiy muhit barqarorligi kafolatlarini taʼminlashdan iborat",
    "noAnswer3": "O‘zbekistonda ekstremizmga qarshi kurashish chora-tadbirlarini amalga oshirishdagi yondashuvlar konseptual jihatdan qayta ko‘rib chiqishdan iborat."
  },
  {
    "question": "Islom dinining nazariy va g‘oyaviy manbalari nima?",
    "noAnswer1": "shariat qonun-qoidalari;",
    "noAnswer2": "muxaddislar yozgan xadisi shariflar;",
    "answer": "Qur’oni karim, hadisi sharif va fatvolar;",
    "noAnswer3": "Ollo-taolo kalomi bo‘lgan Qur’on."
  },
  {
    "question": "Qur’oni karim sura va oyatlariga o‘zgartirish kiritish mumkinmi?",
    "noAnswer1": "mumkin, agar ulamolar qaror qilsa;",
    "noAnswer2": "agar jamiyat hayotiga zid kelib qolsa;",
    "answer": "yo‘q, chunki Qur’on - ilohiy hisoblanadi va uni o‘zgartirish man etiladi;",
    "noAnswer3": "Movarounnaxr Diniy boshqarmasi o‘zgartishi mumkin."
  },
  {
    "question": "Dinlarning bir-biridan farqi nimada?",
    "noAnswer1": "turli tillarda ibodat qilishida;",
    "noAnswer2": "mintaqalarida turli aholining joylanishida;",
    "answer": "diniy urf-odat va marosimlar amalga oshirilishida;",
    "noAnswer3": "jahonda tinchlik uchun kurashishda."
  },
  {
    "question": "Qur’onda hammasi bo‘lib nechta sura bor?",
    "noAnswer1": "100;",
    "answer": "114;",
    "noAnswer2": "124;",
    "noAnswer3": "130."
  },
  {
    "question": "Xristianlikning qaysi oqimi Yevropa va Lotin Amerikasida eng ko‘p tarqalgan?",
    "noAnswer1": "pravoslaviya;",
    "noAnswer2": "baptizm;",
    "answer": "katolitsizm;",
    "noAnswer3": "protestansizm."
  },
  {
    "question": "Musulmonlarning tushunchasi bo‘yicha Muhammad ibn Abdulloh kim?",
    "noAnswer1": "u oddiy inson va diniy shaxs;",
    "noAnswer2": "xudoning suyukli bandasi;",
    "answer": "xudo tomonidan yuborilgan elchi, vakil, eng oxirgi payg‘ambar;",
    "noAnswer3": "Barcha javoblar to‘g‘ri."
  },
  {
    "question": "Islom dini O‘rta Osiyoga qachon tarqala boshlagan?",
    "answer": "VII asr oxiri - VIII asr boshlarida;",
    "noAnswer1": "V asrda;",
    "noAnswer2": "VIII asrda;",
    "noAnswer3": "VI asr oxiri va VII asr boshida."
  },
  {
    "question": "Musulmon diniy boshqarmalari rahbarlari qanday nom bilan ataladi?",
    "answer": "muftiy;",
    "noAnswer1": "so‘fi;",
    "noAnswer2": "muxtasib;",
    "noAnswer3": "imom."
  },
  {
    "question": "Musulmonlarning kundalik nomoz o‘qish tartibi qanday?",
    "noAnswer1": "har juma kuni;",
    "answer": "kuniga 5 mahal;",
    "noAnswer2": "kuniga 3 mahal;",
    "noAnswer3": "kuniga 4 mahal."
  },
  {
    "question": "Nechanchi yildan boshlab O‘zbekiston fuqarolari uchun “Umra” ziyoratlari kvotasi bekor qilindi?",
    "answer": "2019-yildan boshlab",
    "noAnswer1": "2020-yildan boshlab",
    "noAnswer2": "2021-yildan boshlab",
    "noAnswer3": "2022-yildan boshlab"
  },
  {
    "question": "Fatvo nima?",
    "noAnswer1": "Qur’onga berilgan sharxlar;",
    "noAnswer2": "masjidlarda hayit namozida aytiladigan muhim axborotlar;",
    "answer": "oliy darajadagi ulamolar yig‘ini qabul qilgan Qur’on, hadis va shariatga oid qonun-qoidalar;",
    "noAnswer3": "har bir imom-xatibning turli masalalar yuzasidan bergan tavsiyalari."
  },
  {
    "question": "Islom va xristianlik nuqtai nazarida har bir inson taqdirini (hayot yo‘lini) kim belgilaydi?",
    "noAnswer1": "insonning o‘zi, uning irodasi;",
    "noAnswer2": "tabiat va koinot;",
    "noAnswer3": "hukmdor shaxslar, davlat, ota-bobolar;",
    "answer": "faqat yakka xudo."
  },
  {
    "question": "Politeizm nima ma’noni anglatadi.",
    "answer": "ko‘pxudolik;",
    "noAnswer1": "yakkaxudolik;",
    "noAnswer2": "vedachilik;",
    "noAnswer3": "dinning ibtidoiy formalari."
  },
  {
    "question": "Katolik oqimining bosh ruhoniysi?",
    "noAnswer1": "monax;",
    "noAnswer2": "pop;",
    "noAnswer3": "kardinal;",
    "answer": "papa;"
  },
  {
    "question": "Islomga qadar Markaziy Osiyoda hukm surgan din?",
    "answer": "zardushtiylik;",
    "noAnswer1": "buddaviylik;",
    "noAnswer2": "konfutsiyachilik;",
    "noAnswer3": "braxmanchilik."
  },
  {
    "question": "Xristian cherkovlarida oliy ierarx qanday ataladi?",
    "answer": "yepiskop;",
    "noAnswer1": "kardinal;",
    "noAnswer2": "senator;",
    "noAnswer3": "oligarx."
  },
  {
    "question": "Cherkov, ikonalarga qarshi chiqqan oqim nomi?",
    "noAnswer1": "pravoslav;",
    "noAnswer2": "katolik;",
    "answer": "protestant;",
    "noAnswer3": "shiyalik"
  },
  {
    "question": "Yaxudiylikda hukmronlik o‘rnatish maqsadida vujudga kelgan diniy siyosiy oqim?",
    "noAnswer1": "ekstremizm;",
    "noAnswer2": "vahobizm;",
    "answer": "massonizm;",
    "noAnswer3": "modernizm."
  },
  {
    "question": "Fiqh qanday fan?",
    "answer": "shariat qonun-qoidalarini o‘rganuvchi fan;",
    "noAnswer1": "shariatda hadislarni tashkil qiluvchi fan;",
    "noAnswer2": "rivoyatlarni o‘rganuvchi fan;",
    "noAnswer3": "marosimlar va urf-odatlarni o‘rganuvchi fan"
  },
  {
    "question": "Fath nima?",
    "answer": "biror shahar yoki mamlakatga islomni olib kirish;",
    "noAnswer1": "islom hadislarini yoyish;",
    "noAnswer2": "buddaviylik oqimi;",
    "noAnswer3": "yahudiylik ta’limoti."
  },
  {
    "question": "Din fenomenologiyasi deganda nimani tushunasiz?",
    "answer": "Dinning ko‘zga ko‘rinuvchi, tashqarida aks etuvchi jihatlarini o‘rganuvchi ilm sohasi.",
    "noAnswer1": "Barcha dinlar qadriyatlariga hurmat bilan qarash, ularni qadrlash madaniyati.",
    "noAnswer2": "Dinshunoslikning tarix, falsafa, psixologiya, sotsiologiya, arxeologiya va boshqa ijtimoiy fanlar bilan mustahkam bog‘liqligi uning nazariyasi.",
    "noAnswer3": "Dinshunoslikning qator fanlar bilan o‘zaro munosabati."
  },
  {
    "question": "Din sotsiologiyasi nimalarni o‘rgatadi?",
    "answer": "Tarix bo‘yicha xususiy va mushohadaga suyanuvchi din va jamiyat tadqiqotlarini; dinning ijtimoiy hayotdagi ko‘rinishlarini o‘rganadi.",
    "noAnswer1": "Diniy tuyg‘u va bu tuyg‘uning ko‘rinishlarini o‘rganadi.",
    "noAnswer2": "Dinga nisbatan munosabatni o‘rganadi.",
    "noAnswer3": "Dinning mohiyati va uning kishilik jamiyati taraqqiyotidagi turli tarixiy bosqichlarda tutgan mavqeini o‘rganadi."
  },
  {
    "question": "Din psixologiyasining asosiy mavzusi nimadan iborat?",
    "noAnswer1": "|Barcha dinlar qadriyatlariga hurmat",
    "noAnswer2": "Ibtidoiy diniy tasavvurlar, milliy va jahon dinlari ta’limotlari",
    "noAnswer3": "Xalqlarning o‘z dini, urf-odatlari va an’analari",
    "answer": "Kishining diniy his, tushuncha va yashash tarzi"
  },
  {
    "question": "Din falsafasining vazifasi nimalardan iborat?",
    "noAnswer1": "Barcha dinlar va diniy tasavvurlarda birinchi odamning paydo bo‘lishi, Xudo yoki xudolar tomonidan yaratilish g‘oyasini o‘rganishdan iborat.",
    "noAnswer2": "Fanlar bilan o‘zaro munosabatga kirishishi natijasida uning turli sohalari yuzaga kelishini o‘rganishdan iborat.",
    "answer": "Yaratuvchi kuch e’tiqodiga falsafiy bir asos topish, diniy hukmlarning mantig‘i va mohiyatini ochib berish, dinning mohiyati, insonning diniy haqiqatlar bilan bo‘lgan bog‘liqligini o‘rganishdan iborat.",
    "noAnswer3": "Barcha dinlar qadriyatlariga hurmat bilan qarash, ularni qadrlash madaniyatini o‘rganishdan iborat."
  },
  {
    "question": "Din so‘zining ma’nosi-",
    "noAnswer1": "(«dâna»)  fe’lidan yasalgan bo‘lib, «kimgadir haqorat qilmoq, itoatsiz, kimdandir gap eshitmoq» kabi ma’nolarni bildiradi.",
    "noAnswer2": "(«dâna»)  fe’lidan yasalgan bo‘lib, «kimnidir yoqtirmoq, rahm  etmoq» kabi ma’nolarni bildiradi.",
    "noAnswer3": "(«dâna»)  fe’lidan yasalgan bo‘lib, «kimgadir gapirmoq, tasdiqlamoq, tuzatmoq» kabi ma’nolarni bildiradi.",
    "answer": "(«dâna»)  fe’lidan yasalgan bo‘lib, «kimgadir bo‘ysunmoq, bo‘yin egmoq, itoat etmoq, kimdandir qarzdor bo‘lmoq, e’tiqod qilmoq, qilgan ishiga yarasha mukofotlamoq» kabi ma’nolarni bildiradi."
  },
  {
    "question": "Dinning “kompensatorlik funksiyasi” qanday vazifani bajaradi?",
    "noAnswer1": "tartibga soluvchilik vazifasini.",
    "noAnswer2": "birlashtiruvchilik vazifasini.",
    "answer": "tasalli beruvchilik vazifasini.",
    "noAnswer3": "aloqa bog’lashlik vazifasini."
  },
  {
    "question": "Jоn, ruhlarning bоrligiga, ularning abadiyligiga ishоnish nima dеb ataladi?",
    "noAnswer1": "Sеhrgarlik.",
    "noAnswer2": "Tоtеmizm.",
    "noAnswer3": "Fеtishizm.",
    "answer": "Animizm."
  },
  {
    "question": "Ibtidоiy din shakllaridan qaysi birida оdamlar оdamga sig’inganlar?",
    "noAnswer1": "Animizmda.",
    "answer": "Shоmanizmda",
    "noAnswer2": "Magiya",
    "noAnswer3": "Tоtеmizmda."
  },
  {
    "question": "Tоtеmizm nima?",
    "noAnswer1": "tush ko’rish va bоshqa irim-sirimlarga ishоnish.",
    "noAnswer2": "jоnsiz narsalarni ilоhiylashtirish va ularga sig’inish.",
    "answer": "ibtidоiy jamоada turli hayvоnlarni urug’ga asоs sоlgan dеb hisоblab, ilоhiylashtirish va sig’inish.",
    "noAnswer3": "tariхiy din shakillaridan biri."
  },
  {
    "question": "Хinduiylik va kоnfutsiychilik ta’limоtiga ko’ra qaysi din shakliga to‘g‘ri keladi?",
    "noAnswer1": "Urug’-qabilachilik",
    "noAnswer2": "Mоnоtеistik.",
    "answer": "Pоlitеistik.",
    "noAnswer3": "Animistik."
  },
  {
    "question": "Buddaviylik dini qachоn paydо bo’ldi?",
    "noAnswer1": "Eramizning V-VI asrida.",
    "answer": "Azоb-Uqubat.",
    "noAnswer2": "Eramizning I-II asrida.",
    "noAnswer3": "Eramizdan oldingi XIII asrda."
  },
  {
    "question": "Mil. av. I asr va milodning IV asrlari oralig‘ida Kushon imperiyasida Buddaviylikning qaysi yo‘nalishi davlat dini deb e’lon qilindi.",
    "noAnswer1": "Purvana",
    "answer": "Maxayana",
    "noAnswer2": "Nirvana",
    "noAnswer3": "Xinayana"
  },
  {
    "question": "Buddaviylikning asоsiy yo‘nalishlari qaysilar?",
    "noAnswer1": "Sunnalik, shialik, хorijiylik.",
    "noAnswer2": "Хinayana, shivaizm, jaynizm.",
    "noAnswer3": "Pravоslaviya, katоlisizm, lamaizm.",
    "answer": "Хinayana, maхayana, lamaizm."
  },
  {
    "question": "Buddaviylik ta’limoti necha  qismdan iborat?",
    "noAnswer1": "2  qismdan iborat.",
    "answer": "3  qismdan iborat.",
    "noAnswer2": "4  qismdan iborat.",
    "noAnswer3": "5  qismdan iborat."
  },
  {
    "question": "Kibermakon deganda nimani tushunasiz?",
    "answer": "dunyo kompyuter tarmoqlarining «virtual» umumiy majmui.",
    "noAnswer1": "dunyo kompyuter tarmoqlari",
    "noAnswer2": "dunyo kompyuter tarmoqlari jamoasi",
    "noAnswer3": "Kompyuter savodxonligi tizimi"
  },
  {
    "question": "Kibermakon atamasi 1984 yilda kim tomonidan qo‘llanilgan?",
    "noAnswer1": "Jan Jak Russo",
    "answer": "Uilyam Gibson",
    "noAnswer2": "Teodor Smit",
    "noAnswer3": "Dyuperron"
  },
  {
    "question": "Qanday vositalar kibermakondan erkin foydalanish imkonini yaratish bilan bir vaqtda, mazkur makondagi xavf-xatarlarning ko‘z ilg‘amas darajada yuqoriligini anglatadi?",
    "noAnswer1": "video qurilmalar; telefon yozishmalari",
    "answer": "internetga chiqish imkoniyati mavjud mobil telefonlar; onlayn pulli o‘yinlar;  tarmoqdan tashqarida foydalanish imkonini beruvchi dasturiy ta’minotlar.",
    "noAnswer2": "Seminarlar, amaliy mashg ‘ulotlar",
    "noAnswer3": "videodarslar, ijtimoiy diniy tarmoqlar"
  },
  {
    "question": "O‘zbekistonda eng ko‘p yuklab olinayotgan dastur ichida qaysilari yetakchi o‘rinni egallaydi?",
    "noAnswer1": "«Instagram», «odnoklasniki» tarmoqlari",
    "noAnswer2": "«Facebook», «Intogram» tarmoqlari",
    "noAnswer3": "«Whats you», «Face app» tarmoqlari",
    "answer": "«WhatsApp», «Telegram» tarmoqlari"
  },
  {
    "question": "Yoshlarning barchasi internet tarmog‘idan faqat ilm yo‘lida foydalanmoqdami?",
    "noAnswer1": "O ‘zbekiston yoshlariga internet tarmog‘idan barcha ma ‘lumotlar olish uchun qulay sharoit yaratilgan.",
    "answer": "Afsuski, internetdan noto‘g‘ri, buzg‘unchilik va behayolikka doir ma’lumotlarni olishda ham foydalanmoqda.",
    "noAnswer2": "O ‘zbekiston yoshlari internet tarmog‘idan faqat ilm yo‘lida foydalanadi.",
    "noAnswer3": "Barcha javoblar to ‘g ‘ri"
  },
  {
    "question": "Missionerlik so‘zi qanday ma’noni anglatadi?",
    "noAnswer1": "Ingliz tilidagi «missio» so‘zidan olingan bo‘lib, «Inson huquqlarini himoya qilish», «Vijdon erkinligini ta’minlash» ma’nolarini bildiradi.",
    "answer": "lotin tilidagi «missio» fe’lidan olingan bo‘lib, belgilangan vazifalarni hal qilishga qaratilgan nazariy va amaliy faoliyat majmui ma’nolarini bildiradi.",
    "noAnswer2": "fransuz tilidagi «missio» so‘zidan olingan bo‘lib, ma’naviy-mafkuraviy tahdid vositasi ma’nolarini bildiradi.",
    "noAnswer3": "nemis tilidan olingan bo‘lib davlatning ichki hayoti ma’nolarini bildiradi."
  },
  {
    "question": "“Prozelitizm” tushunchasi deganda nimani tushunasiz?",
    "answer": "Yangi mazhabni qabul qilgan kishi, ya’ni boshqa mazhabdagilarni, avvalo, musulmonlarni xristianlikka kiritish degan ma’noni bildiradi.",
    "noAnswer1": "Mafkuraviy immunitetni shakllantirish degan ma’noni bildiradi.",
    "noAnswer2": "Milliy istiqlol mafkurasining asosiy g‘oyalari degan ma’noni bildiradi.",
    "noAnswer3": "Xalqning milliy ma’naviyati degan ma’noni bildiradi."
  },
  {
    "question": "“Kiberxavfsizlik toʻgʻrisida”gi Qonun qachon qabul qilingan?",
    "noAnswer1": "2023-yil 15 mart.",
    "noAnswer2": "2022-yil 1 aprel.",
    "answer": "2022-yil 15 aprel.",
    "noAnswer3": "2023-yil 15 may."
  },
  {
    "question": "Missionerlik va prozelitizm g‘oyasi qanday g‘oya?",
    "noAnswer1": "ma’naviy g‘oya",
    "answer": "buzg‘unchi  g‘oya",
    "noAnswer2": "madaniy g‘oya",
    "noAnswer3": "milliy g‘oya"
  },
  {
    "question": "Hozirgi kunda missionerlik harakati asosan qanday  niqob ostida faoliyat yuritmoqda",
    "noAnswer1": "Moliyaviy tashkilotlar niqobi ostida",
    "answer": "nashriyotlar, xayriya, tibbiy yordam ko‘rsatish niqobi ostida",
    "noAnswer2": "Davlat tashkilotlari niqobi ostida",
    "noAnswer3": "Yuridik shaxslar niqobi ostida"
  },
  {
    "question": "Diniy ekstremizm nima?",
    "answer": "Jamiyat uchun an’anaviy bo‘lgan diniy qadriyatlar va aqidalarni rad etish, ularga zid g‘oyalarni aldov va zo‘rlik bilan targ‘ib qilishga asoslangan nazariya va amaliyotni anglatadi.",
    "noAnswer1": "Mutaassib fikr va qarashlarning paydo bo‘lishidir",
    "noAnswer2": "«dindan qaytganlar» degan ma’noni bildiradi",
    "noAnswer3": "An’anaviy  diniy qadriyatlar va aqidalar to ‘plami"
  },
  {
    "question": "Diniy fundamentalizm  nima?",
    "answer": "«Ma’lum din vujudga kelgan ilk davriga qaytish va bu yo‘l bilan zamonaning barcha muammolarini hal qilish mumkin», degan fikrni ilgari surish ta’limotini anglatadi.",
    "noAnswer1": "Islom niqobidagi ekstremizmning g‘oyaviy ildizlari degan ma’noni bilditadi",
    "noAnswer2": "Mutaassib fikr va qarashlarning paydo bo‘lishidir degan tushunchalarni bilditadi",
    "noAnswer3": "Xayrixoh bo‘lmagan hukmdorlarga suiqasd uyushtirish degan tushunchalarni bilditadi"
  },
  {
    "question": "«Musulmon birodarlar» jamoasi qachon tashkil etilgan?",
    "answer": "1928 yil mart oyida",
    "noAnswer1": "1929 yil aprel oyida",
    "noAnswer2": "1930 yil may oyida",
    "noAnswer3": "1931 yil mart oyida"
  },
  {
    "question": "Hizbut-tahrir al-islomiy (Islom ozodlik partiyasi)ning asoschisi kim?",
    "noAnswer1": "Saudiya Arabistonida yashovchi  Yusuf Xamadoniy",
    "noAnswer2": "Akrom Yo‘ldashev",
    "answer": "Falastinlik Taqiyiddin Nabahoniy",
    "noAnswer3": "Juma Namangoniy"
  },
  {
    "question": "«Akromiylar» harakat siyosiy hokimiyatga erishishning nechta bosqichiga asoslanadi?",
    "noAnswer1": "2 ta",
    "noAnswer2": "3 ta",
    "noAnswer3": "4 ta",
    "answer": "5 ta"
  },
  {
    "question": "“Yahudiy va salbchilarga qarshi xalqaro islom fronti” uyushmasi  qachon tuzildi?",
    "noAnswer1": "1997 yilda",
    "noAnswer2": "1996yilda",
    "answer": "1998 yilga",
    "noAnswer3": "1991 yilda"
  },
  {
    "question": "“Yahudiy va salbchilarga qarshi xalqaro islom fronti” uyushmasiga kim boshchilik qilgan?",
    "answer": "Usoma bin Lodin",
    "noAnswer1": "Akron Yo‘ldashev",
    "noAnswer2": "Juma Namangoniy",
    "noAnswer3": "Muhammad Solih"
  },
  {
    "question": "2001 yilning 11 sentabrida Amerika Qo‘shma Shtatlarida qanday voqea yuz berdi?",
    "noAnswer1": "“Yahudiy va salbchilarga qarshi xalqaro islom fronti” uyushmasi tuzildi",
    "noAnswer2": "AQShning Tanzaniya va Keniyadagi elchixonalari oldida bomba ortilgan mashinalarni portlatilgan",
    "answer": "To‘rtta “Boing–757” samolyoti “al-Qoida” guruhi tomonidan egallab olinib, ularning ikkitasi Nyu-Yorkdagi xalqaro savdo Markazi joylashgan “egizak” binolarga, bittasi esa AQSh qurolli kuchlari shtabi – Pentagonga yo‘naltirildi.",
    "noAnswer3": "Somalidagi beqarorliklarning oldini olish uchun kiritilgan BMT tinchlikparvarlik kuchlari tarkibidagi AQSh maxsus qo‘shinlarining 18 harbiy xizmatchisini o‘ldirishgan"
  },
  {
    "question": "Diniy ekstremizm va terrorizmga qarshi kurash olib borishda qanday chora-tadbirlarni qo‘llash muhim ahamiyatga ega?",
    "answer": "kompleks va tizimli, shu jumladan, ijtimoiy-iqtisodiy va mafkuraviy chora-tadbirlar",
    "noAnswer1": "Shavqatsiz kurash chora-tadbirlari",
    "noAnswer2": "Reja asosida tashqi ishlar vazirligi bilan",
    "noAnswer3": "musulmon bo‘lmagan mamlakatlar aholisi o‘rtasida islomni yoyish chora-tadbirlari"
  },
  {
    "question": "Dunyo bo‘yicha qancha terrorchilik tashkilotlari faoliyat ko‘rsatmoqda?",
    "noAnswer1": "400 ga yaqin",
    "noAnswer2": "300 ga yaqin",
    "answer": "500 ga yaqin",
    "noAnswer3": "200 ga yaqin"
  },
  {
    "question": "Davlatimizning vijdon erkinligiga munosabati – O‘zbekiston Respublikasi Konstitutsiyasining nechanchi moddasida mustahkamlab qo‘yilgan?",
    "noAnswer1": "31-moddasida",
    "answer": "35-moddasida",
    "noAnswer2": "36- moddasida",
    "noAnswer3": "41 – moddasida"
  },
  {
    "question": "Hanafiya mazhabi sunniylik yo'nalishiga mansub bo'lgan musulmonlarning  necha foizini o'z ichiga oladi ?",
    "answer": "47%",
    "noAnswer1": "17%",
    "noAnswer2": "27%",
    "noAnswer3": "1,5%"
  },
  {
    "question": "O‘rta Osiyoda keng tarqalgan sunniylik oqimining mazhabi-",
    "noAnswer1": "Shofi’iya",
    "noAnswer2": "Imomiya",
    "answer": "Xanafiya",
    "noAnswer3": "Vahhobiylik"
  },
  {
    "question": "O‘zbekiston Respublikasi Konstitutsiyasida aniq belgilab qo‘yilgan davlat va jamiyat qurilishining  bosh maqsadlardan biri-",
    "answer": "Yuksak ma’naviyat va hurfikrlilikka asoslangan, vijdon erkinligi amalda barqaror bo‘lgan jamiyatni barpo etish",
    "noAnswer1": "islomiy qadriyatlar maktablarda axloqiy tarbiyada e’tiborga olinishi",
    "noAnswer2": "musulmon bo‘lmagan mamlakatlar aholisi o‘rtasida islomni yoyish chora-tadbirlari",
    "noAnswer3": "Mafkuraviy chora-tadbirlarni belgilanishi"
  },
  {
    "question": "Davlat bilan din (diniy tashkilotlar) o‘rtasidagi munosabatlar qanday usullarda tartibga solinadi?",
    "answer": "Identifikatsion, Separatsion, kooperetsion",
    "noAnswer1": "Kompensatorlik, regyulativlik",
    "noAnswer2": "Separatsion, Kompensatorlik",
    "noAnswer3": "Konservatorlik, koorparativ"
  },
  {
    "question": "Davlat-diniy tashkilot modeliga qaysi davlatni misol keltirishimiz mumkin?",
    "answer": "Daniya, Buyuk Britaniya, Gresiya, Shvesiya, Finlyandiya",
    "noAnswer1": "AQSh, Rossiya, Polsha, Germaniya",
    "noAnswer2": "Daniya, Ispaniya, Italiya, Misr",
    "noAnswer3": "Braziliya, Argentina, Sudan, Efiopiya"
  },
  {
    "question": "O‘zbekistonda tarkib topgan davlat va din o‘rtasidagi munosabat o‘z mohiyati, mazmuni va huquqiy asoslariga ko‘ra qanday modelga asoslanadi?",
    "answer": "Separatsion model",
    "noAnswer1": "Kooperatsion",
    "noAnswer2": "Identifikatsion",
    "noAnswer3": "Kompensator"
  },
  {
    "question": "Bugungi kunda O‘zbekistonda Adliya organlaridan rasman ro‘yxatdan o‘tgan nechta diniy konfessiya faoliyat olib bormoqda?",
    "noAnswer1": "10 ta",
    "noAnswer2": "11 ta",
    "noAnswer3": "15 ta",
    "answer": "16 ta"
  },
  {
    "question": "Qonunchilikda diniy tashkilotlarning qanday turlari e’tirof etiladi?",
    "answer": "diniy jamiyatlar, diniy o‘quv yurtlari, masjidlar, cherkovlar, sinagogalar, monastirlar va boshqa tashkilotlar.",
    "noAnswer1": "Diniy maktablar, madrasalar. cherkovlar",
    "noAnswer2": "Diniy firqalar, mazhablar, oqimlar",
    "noAnswer3": "Diniy qo‘mita tasarrufidagi barcha binolar"
  },
  {
    "question": "«Konfessiya» so‘zi qanday ma’noni anglatadi?",
    "answer": "o‘zbek tiliga aynan tarjima qilinganda «e’tiqod qilish», degan ma’noni anglatadi.",
    "noAnswer1": "«faoliyat olib bormoq», degan ma’noni anglatadi.",
    "noAnswer2": "«buysundirmoq» degan ma’noni anglatadi.",
    "noAnswer3": "o‘zbek tiliga aynan tarjima qilinganda «kurash», degan ma’noni anglatadi."
  },
  {
    "question": "Diniy konfessiya deganda  nimani tushunasiz?",
    "answer": "muayyan diniy ta’limot doirasida shakllangan va o‘ziga xos xususiyatlarga ega e’tiqod va ushbu e’tiqodga ergashuvchilar jamoasi tushuniladi.",
    "noAnswer1": "diniy ta’limotlar ichida rivojlangan e’tiqod turi tushuniladi.",
    "noAnswer2": "jamiyat hayotining tarkibiy qismi sifatida kishilarning ijtimoiylashuvi tushuniladi.",
    "noAnswer3": "e’tiqodga ergashuvchilar jamoasi tushuniladi."
  },
  {
    "question": "«Sekta»so‘zi qanday ma’noni anglatadi?",
    "answer": "Muayyan diniy, siyosiy yoki falsafiy qarashlarga ergashuvchilar guruhini anglatadi.",
    "noAnswer1": "Muayyan diniy boshqaruvchilarini anglatadi.",
    "noAnswer2": "Ma’lum bir dindagi rasmiy aqidalarga ishonuvchilar tushuniladi",
    "noAnswer3": "Ma’lum falsafiy qarashlarni o ‘rgatuvchilar guruhini anglatadi"
  },
  {
    "question": "Xristianlik dini qachоn paydо bo’ldi?",
    "noAnswer1": "Eramizdan oldingi I asrda.",
    "answer": "Eramizning I asrida.",
    "noAnswer2": "Eramizdan oldingi III asrda.",
    "noAnswer3": "Eramizning V asrida."
  },
  {
    "question": "Sharq dinlaridan qaysi biri xristianlik diniga eng ko’p ta’sir ko’rsatdi?",
    "noAnswer1": "Zardushtiylik.",
    "noAnswer2": "Buddaviylik.",
    "answer": "Yahudiylik.",
    "noAnswer3": "Islоm."
  },
  {
    "question": "Katoliklarning markazi Vatikan qachondan boshlab davlat maqomiga ega bo’ldi?",
    "noAnswer1": "1909 yildan.",
    "answer": "1929 yildan.",
    "noAnswer2": "1959 yildan.",
    "noAnswer3": "1989 yildan."
  },
  {
    "question": "Bibliya so‘zi qanday ma’nolarni  anglatadi?",
    "answer": "grek tilida biblia – “kitob”, “o‘ram”",
    "noAnswer1": "lotin tilida bibliya- “varoq”",
    "noAnswer2": "Fors tilida bible- “Bеsh kitоb”",
    "noAnswer3": "Ingliz tilida bible-“Eski ahd”"
  },
  {
    "question": "Martin Lyuter boshchiligidagi reformatsiyalar tufayli Xristianlik dinida qaysi yo’nalish vujudga keldi?",
    "answer": "Protestantizm.",
    "noAnswer1": "Provaslav.",
    "noAnswer2": "Katolik.",
    "noAnswer3": "Baptizm."
  },
  {
    "question": "Xristianlikning muqaddas kitobi qaysi?",
    "noAnswer1": "Veda.",
    "noAnswer2": "Tavrot.",
    "answer": "Bibliya.",
    "noAnswer3": "Zabur."
  },
  {
    "question": "Rim papasi xristianlikning qaysi oqimining boshlig‘i sanaladi?",
    "answer": "Katolik.",
    "noAnswer1": "Pravoslav.",
    "noAnswer2": "Protestant.",
    "noAnswer3": "Baptizm."
  },
  {
    "question": "Arabiston yarim orolining islom dinidan avvalgi davrini nima deb ataganlar?",
    "answer": "Johiliya",
    "noAnswer1": "Nodonlik",
    "noAnswer2": "Butparastlik",
    "noAnswer3": "Ma’rifatsizlik"
  },
  {
    "question": "Hadislar bilan shug‘ullanadigan olim kim?",
    "noAnswer1": "Mutakallim",
    "answer": "Muhaddis",
    "noAnswer2": "Mutasavvif",
    "noAnswer3": "Faqih"
  },
  {
    "question": "Qur’on suralarini tashkil etuvchi qism “jumlalar” qanday nomlanadi?",
    "noAnswer1": "Sura",
    "answer": "Oyat",
    "noAnswer2": "Juz",
    "noAnswer3": "Pora"
  },
  {
    "question": "VII-asrda paydo bulgan musulmon davlati nima deb ataladi?",
    "noAnswer1": "Musulmonlar davlati",
    "noAnswer2": "Islom imperiyasi",
    "noAnswer3": "Arab imperiyasi",
    "answer": "Arab xalifaligi"
  },
  {
    "question": "Talmud qaysi dinning muqaddas kitoblaridan biridir?",
    "noAnswer1": "Buddizm",
    "noAnswer2": "Nasroniylik",
    "answer": "Yahudiylik",
    "noAnswer3": "Islom"
  },
  {
    "question": "Tripitaka qaysi dinning muqaddas kitobi?",
    "answer": "Buddizm",
    "noAnswer1": "Nasroniylik",
    "noAnswer2": "Iuddaizm",
    "noAnswer3": "Islom"
  },
  {
    "question": "Buddaviylik dinining asoschisi kim?",
    "noAnswer1": "Iso Masix",
    "answer": "Siddxartha Gautama",
    "noAnswer2": "Krishna",
    "noAnswer3": "Deva"
  },
  {
    "question": "O‘zbekistonda qancha diniy tashkilotlar faoliyat yuritadi?",
    "noAnswer1": "3 mingdan ziyod",
    "answer": "2 mingdan ziyod",
    "noAnswer2": "1 mingdan ziyod",
    "noAnswer3": "4 mingdan ziyod"
  },
  {
    "question": "“Tili, dini, e’tiqоdidаn qаt’iy nаzаr insоnning erkin bo‘lib yashashigа qаrshi, uning ruhiy dunyosini izdаn chiqаrishgа qаrаtilgаn mаfkurаviy, g‘оyaviy, infоrmаtsiоn hurujlаr”ni qаndаy tа’riflаsh mumkin?",
    "answer": "Mа’nаviy tаjоvuzkоrlik.",
    "noAnswer1": "Mа’nаviy qаrаmlik.",
    "noAnswer2": "Mа’nаviy tаhdid.",
    "noAnswer3": "Mа’nаviy ehtiyoj."
  },
  {
    "question": "«Vijdon erkinligi va diniy tashkilotlar to‘g‘risida»gi Qonunning qaysi moddasi diniy materiallarni yozish, tarqatish masalalalariga bag‘ishlangan?",
    "noAnswer1": "36-modda",
    "answer": "10-modda",
    "noAnswer2": "20-modda",
    "noAnswer3": "15-modda"
  },
  {
    "question": "Fuqarolarning dinga e’tiqod qilish yoki e’tiqod qilmaslikni mustaqil hal qilishlari qanday ataladi?",
    "noAnswer1": "Burch erkinligi",
    "noAnswer2": "qadriyat erkinligi",
    "answer": "vijdon erkinligi",
    "noAnswer3": "fikr erkinligi"
  },
  {
    "question": "“Monoteizm” tushunchasining ma’nosi nima?",
    "answer": "Yakkaxudolik",
    "noAnswer1": "ko‘pxudolik",
    "noAnswer2": "diniy ta’limot",
    "noAnswer3": "diniy fikr"
  },
  {
    "question": "O‘rta Osiyodagi qaysi davlatda budda dini asosiy (hukmron) din edi?",
    "noAnswer1": "Xorazmshohlar",
    "noAnswer2": "Dovon",
    "answer": "Kushon",
    "noAnswer3": "Qang‘"
  },
  {
    "question": "Jahonda e’tiqod qiluvchilar soni jihatdan eng katta milliy din…",
    "noAnswer1": "Sintoizm",
    "noAnswer2": "Yahudiylik",
    "noAnswer3": "Konfutsiylik",
    "answer": "Hidduiylik"
  },
  {
    "question": "Tasaffuv ilmining yirik namoyondasi bo‘lgan Xo‘ja Ahmad Yassaviy yili deb qachon e’lon qilindi?",
    "noAnswer1": "1994 yil",
    "noAnswer2": "1995 yil",
    "answer": "1993 yil",
    "noAnswer3": "1996 yil"
  },
  {
    "question": "O’zbekiston Respublikasi birinchi Prezidenti farmoni bilan Toshkent islom universiteti qaysi yilda ochildi?",
    "answer": "1999 yil",
    "noAnswer1": "1998 yil",
    "noAnswer2": "1993 yil",
    "noAnswer3": "1996 yil"
  },
  {
    "question": "“Mehrjon” va “Navro‘z” bayramlari qaysi dinga tegishli?",
    "noAnswer1": "Islom",
    "noAnswer2": "Yahudiylik",
    "noAnswer3": "Konfutsiylik",
    "answer": "Zardushtiylik"
  },
  {
    "question": "Diniy tashkilotlar xayriya va mehr-muruvvat faoliyatini amalga oshirishga…",
    "noAnswer1": "Ba’zan mumkin",
    "answer": "Haqli",
    "noAnswer2": "Ayrim hollarda haqli",
    "noAnswer3": "Ruxsat berilmaydi"
  },
  {
    "question": "Diniy bag‘rikenglik bu…",
    "noAnswer1": "Diniy hamkorlik",
    "answer": "Barcha dinlarga hurmat bilan munosabatda bo‘lish",
    "noAnswer2": "Barcha dinlar bir xil",
    "noAnswer3": "Dunyoviy haqiqatlarga amal qilish"
  },
  {
    "question": "Fetishizm nimani ilohiylashtiradi?",
    "answer": "moddiy narsalarni",
    "noAnswer1": "hayvonlarni",
    "noAnswer2": "odamlarni",
    "noAnswer3": "duolarni"
  },
  {
    "question": "Shimoliy Amerika «Ojibva» qabilasi tilidan tarjima qilinganda «totem» bu -",
    "answer": "uning urug‘i",
    "noAnswer1": "qarindosh",
    "noAnswer2": "saqlaguvchi",
    "noAnswer3": "sening urug‘ing"
  },
  {
    "question": "Yapon tilida «Sinto» so‘zining ma’nosi nima?",
    "answer": "xudolar yo‘li",
    "noAnswer1": "payg‘ambarlar yo‘li",
    "noAnswer2": "to‘g‘ri yo‘l",
    "noAnswer3": "nurli yo‘l"
  },
  {
    "question": "Mа’nаviy qаdriyat bo’lmish diniy vа dunyoviy iymоn – e’tiqоdning bir  biridаn fаrqi?",
    "noAnswer1": "Diniy iymоn nаzаriy bilimlаrgа, dunyoviy esа аmаliyotgа аsоslаnаdi.",
    "answer": "Diniy iymоn isbоtsiz ishonchgа, dunyoviy iymоn dаlillаshgа, tаjribа vа isbоtgа аsоslаnаdi.",
    "noAnswer2": "Diniy iymоn tug’mа хususiyat, dunyoviy iymоn esа tа’lim-tаrbiya mахsuli.",
    "noAnswer3": "Diniy iymоn хis – tuyg’ulаrgа, dunyoviy iymоn esа аql – zаkоvаtgа аsоslаnаdi."
  },
  {
    "question": "«Avesto» so‘zining ma’nosi nima?",
    "noAnswer1": "muqaddaslashgan",
    "answer": "qat’iy qilingan",
    "noAnswer2": "xudolar kitobi",
    "noAnswer3": "nasklar yig‘indisi"
  },
  {
    "question": "«Avesto»ning vatanini ko‘rsating.",
    "answer": "Xorazm",
    "noAnswer1": "Bobil",
    "noAnswer2": "Eron",
    "noAnswer3": "Hindiston"
  },
  {
    "question": "Buddaviylikning «To‘rt haqiqati»ning birinchisini ko‘rsating.",
    "answer": "Hayot-azob-uqubatlardan iborat",
    "noAnswer1": "Azoblanish – mavjudlikdir",
    "noAnswer2": "Hayotga tashnalik",
    "noAnswer3": "Azoblarni yengish mumkin"
  },
  {
    "question": "Siddxarta Gautama (Budda) necha yil Gang bo‘yida yangi dinga da’vat etib yurdi?",
    "answer": "40",
    "noAnswer1": "20",
    "noAnswer2": "25",
    "noAnswer3": "30"
  },
  {
    "question": "«Budda» so‘zining ma’nosi nima?",
    "noAnswer1": "ulug‘langan",
    "noAnswer2": "xudo-yaratuvchi",
    "answer": "nurlangan",
    "noAnswer3": "xudo-saqlaguvchi"
  },
  {
    "question": "Iso Masih Xristianlar uchun kim?",
    "noAnswer1": "xudo-ota",
    "noAnswer2": "xudo-muqaddas ruh",
    "answer": "xudo-o‘g‘il",
    "noAnswer3": "payg‘ambar"
  },
  {
    "question": "«Qur’on» so‘zi arab tilidan qanjay tarjima qilinadi?",
    "answer": "o‘qimoq",
    "noAnswer1": "kitob",
    "noAnswer2": "qonunlar",
    "noAnswer3": "to‘g‘ri yo‘l"
  },
  {
    "question": "Quyidagi qaysi manbaning dastlabki yozma nusxasi 12 ming qora mol terisiga bitilgan edi?",
    "noAnswer1": "Tavrot",
    "answer": "Avesto.",
    "noAnswer2": "Olqish",
    "noAnswer3": "Zabur"
  },
  {
    "question": ". Qiyos so‘zining lug‘aviy ma’nosini toping",
    "noAnswer1": "diniy jamoaning yagona fikri",
    "noAnswer2": "harakat qiluvchi kishi",
    "answer": "taqqoslash.",
    "noAnswer3": "ko‘rsatma"
  },
  {
    "question": "Mujtahid so‘zining lug‘aviy ma’nosini toping.",
    "noAnswer1": "yo‘lboshchilar",
    "answer": "intiluvchi.",
    "noAnswer2": "Xabarchilar",
    "noAnswer3": "Isyonchilar"
  },
  {
    "question": "al-Jome’ as-sahih asarining muallifini toping.",
    "noAnswer1": "Abu Sufyon ibn Muoviya",
    "noAnswer2": "Umar ibn Abdulaziz",
    "answer": "Imom Buxoriy",
    "noAnswer3": "Muhammad ibn Shihob Zuhriy"
  },
  {
    "question": "Sura va oyatlar nozil bo‘lish vaqti va joyiga ko‘ra nechaga bo‘linadi?",
    "answer": "2 ga.",
    "noAnswer1": "4 ga",
    "noAnswer2": "3 ga",
    "noAnswer3": "5 ga"
  },
  {
    "question": "Qur’onni Madinada nozil bo‘lgan umumiy vaqtini toping",
    "answer": "10 yil",
    "noAnswer1": "12 yil",
    "noAnswer2": "11 yil",
    "noAnswer3": "13 yil"
  },
  {
    "question": "Qur’on Muhammad alayhissalomga ................... g‘orida nozil bo‘lgan.",
    "answer": "Xiro",
    "noAnswer1": "Ararat",
    "noAnswer2": "Tur",
    "noAnswer3": "Sinay"
  },
  {
    "question": "Qur’oni karim–Alloh tarafidan Muhammad payg‘ambarga (s.a.v.) .................................................... orqali ba’zan oyat-oyat, ba’zan esa  to‘liq sura tarzida nozil qilingan",
    "noAnswer1": "Mikoil farishta",
    "noAnswer2": "Malak ul-avt farishta",
    "noAnswer3": "Isrofil farishta",
    "answer": "Jabroil farishta"
  },
  {
    "question": "Qur’oni Karimda nechta payg‘ambarning nomi tilga olingan",
    "noAnswer1": "22",
    "noAnswer2": "24",
    "noAnswer3": "23",
    "answer": "25"
  },
  {
    "question": "Dinshunoslik qaysi fanlar bilan yaqinroq bog'liq?",
    "noAnswer1": "Matematika va fizika",
    "noAnswer2": "Biologiya va kimyo",
    "noAnswer3": "Ingliz tili va fransuz tili",
    "answer": "Tarix va jamiyatshunoslik"
  },
  {
    "question": "Dinning jamiyatda bajaradigan ijtimoiy, ma’naviy, ruhiy funksiyalari qaysi javobda to‘gri\r\nko‘rsatilgan?",
    "answer": "Regulyatorlik, kompensatorlik, integratorlik, kommunikativ",
    "noAnswer1": "Kompensatorlik, integratorlik, regulyatorlik, tarbiyaviy",
    "noAnswer2": "Kommutatorlik, kompensatorlik, regulyatorlik, tarbiyaviy",
    "noAnswer3": "Integratorlik, kompensatorlik, kommutatorlik, tarbiyaviy"
  },
  {
    "question": "Buddaviylik dinining muqaddas manbai “tripitaka” so‘zini ma’nosi nima?",
    "answer": "Uch savat donolik",
    "noAnswer1": "Uch daraxt mevasi",
    "noAnswer2": "Uch budda nasihati",
    "noAnswer3": "Uch dono nasihati"
  },
  {
    "question": "Xristianlik dini qachon katolik va provaslavlikka bo‘lindi?",
    "answer": "1054 yil",
    "noAnswer1": "518 yil",
    "noAnswer2": "1085 yil",
    "noAnswer3": "517 yil"
  },
  {
    "question": "Katolik cherkovi markazi qaerda joylashgan va din markazi qanday ataladi?",
    "answer": "Vatikanda ehrom",
    "noAnswer1": "Kastantinopolda cherkov",
    "noAnswer2": "Aleksadriyada ehrom",
    "noAnswer3": "Rimda cherkov"
  },
  {
    "question": "Kishilik jamiyati tarixida dinning ilk shakllariga qaysi dinlar kiradi?",
    "answer": "Totemizm, animizm, fetishizm, shomonizm",
    "noAnswer1": "Shomonizm, urug’ - qabila dinlari, hinduizm",
    "noAnswer2": "Iudaizm, shomonizm, animizm, totemizm",
    "noAnswer3": "Sintoizm, buddizm, totemizm, magiya"
  },
  {
    "question": "Zardushtiylikning muqaddas kitobi “Avesto” qaysi tilda yozilgan?",
    "answer": "Qadimiy eroniy-paxlaviy",
    "noAnswer1": "Qadimgi so’g’d",
    "noAnswer2": "Qadimgi xorazm",
    "noAnswer3": "Qadimgi fors"
  },
  {
    "question": "“Hidoya” asari musulmon mamlakatlarida qanday manba hisoblanadi?",
    "noAnswer1": "Diniy",
    "answer": "Huquqiy",
    "noAnswer2": "Ilmiy",
    "noAnswer3": "Ilohiy"
  },
  {
    "question": "Rim Papasi kim tomonidan va qancha ovoz olish yo‘li bilan saylanadi?",
    "noAnswer1": "Rim kuriyasi tomonidan 7 yil muddatga saylanadi",
    "noAnswer2": "Fuqarolar tomonidan umumiy ovozning 3/2 qismi plyus bir ovoz",
    "answer": "Kardinallar tomonidan umumiy ovozning 3/2 qismi plyus bir ovoz",
    "noAnswer3": "Ruhoniylar tomonidan 5 yil muddatga saylanadi"
  },
  {
    "question": "Konfutsiylik ta’limoti qaysi davlatga taalluqli?",
    "answer": "Xitoy",
    "noAnswer1": "Yaponiya",
    "noAnswer2": "Koreya",
    "noAnswer3": "Mug‘iliston"
  },
  {
    "question": "Qur’oni karim o‘zbek tiliga qachon va kim tomonidan tarjima qilingan?",
    "noAnswer1": "1994 yilda sharqshunoslik instituti olimlari tomonidan",
    "noAnswer2": "1989-1990 yillarda musulmonlar diniy idorasi tomonidan",
    "noAnswer3": "1991 yilda O‘zbekiston musulmonlar diniy idorasi tomonidan",
    "answer": "1991-1992- yillarda Alouddin Mansur tomonidan"
  },
  {
    "question": "«Hayot azob-uqubatdan iborat, qutulish yo`li mavjud» goyasi qaysi dinga tegishli?",
    "answer": "Buddizmga",
    "noAnswer1": "Xristianlik",
    "noAnswer2": "Xinduiylikka",
    "noAnswer3": "Islomga"
  },
  {
    "question": "«Terrorizm» suzining lugaviy ma’nosi nima?",
    "answer": "Qurqitish, dahshat",
    "noAnswer1": "Birlashtirish",
    "noAnswer2": "Ongini egallash",
    "noAnswer3": "Boshqarish"
  },
  {
    "question": "“Messiya” - so‘zining ma’nosi nima?",
    "answer": "Xaloskor",
    "noAnswer1": "Payg‘ambar",
    "noAnswer2": "Elchi",
    "noAnswer3": "Qo‘shiqchi"
  },
  {
    "question": "Hijrat qachon amalga oshgan?",
    "answer": "622-yili",
    "noAnswer1": "632- yilli",
    "noAnswer2": "609- yili",
    "noAnswer3": "605-yili"
  },
  {
    "question": "Diniy tashkilot ta’rifining aniqlang.",
    "answer": "ma’lum dinga ishonuvchilar va ularning jamoalarining  uyushmasidir.",
    "noAnswer1": "diniy aqidalarni va konsepsiyalarni fan-texnika va ijtimoiy hayotdagi o‘zgarishlarga qarab rad etuvchi tashkilot",
    "noAnswer2": "o‘z maqsad yo‘lida qar qanday keskin tadbir choralar ko‘ruvchi tashkilot",
    "noAnswer3": "o‘z fikrini boshqalarga zo‘ravonlik bilan o‘tkazuvchi tashkilot"
  },
  {
    "question": "Fuqarolarning dinga e’tiqod qilish yoki e’tiqod qilmaslikni mustaqil hal qilishlari qanday ataladi?",
    "answer": "vijdon erkinligi",
    "noAnswer1": "burch erkinligi",
    "noAnswer2": "qadriyat erkinligi",
    "noAnswer3": "fikr erkinligi"
  },
  {
    "question": "Dinlar tasnifiga ko‘ra quyidagilarga bo‘linadi?",
    "answer": "Urug‘ – qabila, millat va jahon dinlari",
    "noAnswer1": "Monoteistik va qabila dinlari",
    "noAnswer2": "Ibtidoiy dinlar va jahon dinlari",
    "noAnswer3": "Millat va jahon dinlari"
  },
  {
    "question": "Jahon dinlarining xronologik jihatdan paydo bo‘lishi quyidagi qaysi javobda to‘g‘ri ko‘rsatilgan?",
    "answer": "Buddaviylik, xristianlik, islom",
    "noAnswer1": "Xristianlik, buddaviylik, islom",
    "noAnswer2": "Islom, xristianlik, buddaviylik",
    "noAnswer3": "Buddaviylik, islom, xristianlik"
  },
  {
    "question": "Qaysi dinda taqvodorlikning belgisi sifatida “Chorvaga, oilaga ega bo‘lish va don ekishdir” deyilgan?",
    "answer": "Zardushtiylikda",
    "noAnswer1": "Nasroniylikda",
    "noAnswer2": "Islomda",
    "noAnswer3": "Buddaviylikda"
  },
  {
    "question": "Qaysi muqaddas kitobda tuproq, suv, havo, olov muqaddaslashtirilgan?",
    "answer": "Avesto",
    "noAnswer1": "Qur’oni Karim",
    "noAnswer2": "Injil",
    "noAnswer3": "Tavrot"
  },
  {
    "question": "Imom al-Buxoriy (810-870) to‘plagan sahiyh hadislarining soni nechta?",
    "answer": "7275 ta",
    "noAnswer1": "7200 ta",
    "noAnswer2": "7280 ta",
    "noAnswer3": "7285 ta"
  },
  {
    "question": "Diniy bag‘rikenglik bu…",
    "answer": "Barcha dinlarga sabr-toqat, hurmat bilan munosabatda bo‘lish",
    "noAnswer1": "Diniy hamkorlik barcha muammoni yechadi",
    "noAnswer2": "Hamma diniy qoidalar asosli degani",
    "noAnswer3": "Dunyoviy haqiqatlarga amal qilish"
  },
  {
    "question": "Konstitutsiyamizning nechanchi moddasida “…milliy va diniy belgilariga ko‘ra siyosiy partiyalarning, harbiylashtirilgan birlashmalarning tashkil etilishi va faoliyati taqiqlanadi” ?",
    "answer": "71- moddasida",
    "noAnswer1": "51 - moddasida",
    "noAnswer2": "50 - moddasida",
    "noAnswer3": "58 – moddasida"
  },
  {
    "question": "Diniy tashkilotlarning markaziy boshqaruv organlarini qaysi vazirlik tomonidan ro‘yxatga olinadi?",
    "answer": "O‘zbekiston Respublikasi Adliya Vazirligi",
    "noAnswer1": "O‘zbekiston Respublikasi Oliy va O‘rta ta’lim Vazirligi",
    "noAnswer2": "O‘zbekiston Respublikasi Vazirlar mahkamasi",
    "noAnswer3": "O‘zbekiston Respublikasi Bosh Prokuraturasi"
  },
  {
    "question": "Yаxudiylarning “poklanish kuni” bayramini aniqlang.",
    "answer": "yom kippur",
    "noAnswer1": "shabat",
    "noAnswer2": "rash-hashana",
    "noAnswer3": "purim"
  },
  {
    "question": "Hinduiylik ta’limotiga ko‘ra jamiyat nechta kastaga bo‘linadi?",
    "answer": "4 ta",
    "noAnswer1": "5 ta",
    "noAnswer2": "3 ta",
    "noAnswer3": "2 ta"
  },
  {
    "question": "Konfutsiychilikning bosh xudosi nima?",
    "answer": "Osmon xudosi",
    "noAnswer1": "Yer xudosi",
    "noAnswer2": "Momoqaldiroq xudosi",
    "noAnswer3": "Suv xudosi"
  },
  {
    "question": "Muso payg‘ambarga Yaxve tomonidan nechta lavha tushirilgan?",
    "answer": "10 ta",
    "noAnswer1": "5 ta",
    "noAnswer2": "11 ta",
    "noAnswer3": "15 ta"
  },
  {
    "question": "Musulmonlar e’tiqodicha, xudo tomonidan Dovud  payg‘ambarga yuborilgan muqaddas kitob?",
    "answer": "Zabur",
    "noAnswer1": "Tavrot",
    "noAnswer2": "Talmud",
    "noAnswer3": "Qur’oni Karim"
  },
  {
    "question": "Braxmanizm dinining vatani qaysi?",
    "answer": "Hindiston",
    "noAnswer1": "Xitoy",
    "noAnswer2": "Yaponiya",
    "noAnswer3": "Eron"
  },
  {
    "question": "Islоmgаchа milliy mа’nаvyatimizning tаriхiy vа g‘оyaviy nеgizini quyidаgilаr tаshkil etаdi:",
    "noAnswer1": "Аrхеоlоgik vа аntrоpоlоgik tоpilmаlаr.",
    "noAnswer2": "Tоsh bitiklаr, аrхеоlоgik tоpilmаlаr, diniy kitоblаr.",
    "noAnswer3": "Yozmа yodgоrliklаr, etnоgrаfik mа’lumоtlаr, аrхеоlоgik yodgоrliklаr.",
    "answer": "Хаlq оg’izаki ijоdi nаmunаlаri, Zаrdushtiylik dini vа “Аvеstо”, etnоgrаfik mа’lumоtlаr."
  },
  {
    "question": "Iso Masih qayerda yashab o‘tgan?",
    "answer": "Falastin",
    "noAnswer1": "Hindiston",
    "noAnswer2": "Xitoy",
    "noAnswer3": "Suriya"
  },
  {
    "question": "“Tavrot” nechta kitoblarga bo‘linadi?",
    "answer": "5 ta",
    "noAnswer1": "3 ta",
    "noAnswer2": "2 ta",
    "noAnswer3": "4 ta"
  },
  {
    "question": "Islom tarixidagi birinchi muqaddas jang...",
    "answer": "Badr g‘azoti",
    "noAnswer1": "Uhud g‘azoti",
    "noAnswer2": "Tobuk g‘azoti",
    "noAnswer3": "Xandaq jangi"
  },
  {
    "question": "Qur’oni Karimdagi eng katta suraning nomi...?",
    "answer": "Baqara",
    "noAnswer1": "A’rof",
    "noAnswer2": "Naxl",
    "noAnswer3": "Luqmon"
  },
  {
    "question": "Hadis ilmining sultoni – Imom al- Buxoriy tavalludining 1225 yilligi qachon mamlakatimizda keng nishonlandi?",
    "answer": "1998 yil",
    "noAnswer1": "1993 yil",
    "noAnswer2": "1996 yil",
    "noAnswer3": "1994 yil"
  },
  {
    "question": "Muhammad (s. a. v.)ga dastlabki vahiy kela boshlaganida ular necha yoshda edi?",
    "answer": "40 yosh",
    "noAnswer1": "35 yosh",
    "noAnswer2": "25 yosh",
    "noAnswer3": "63 yosh"
  },
  {
    "question": "Shariat – so‘zining lug‘aviy ma’nosi…?",
    "answer": "arabcha, to‘g‘ri yo‘l",
    "noAnswer1": "arabcha, guvoh",
    "noAnswer2": "arabcha, guruh, tarafdorlar",
    "noAnswer3": "arabcha, ajrash"
  },
  {
    "question": "“Hadis” so‘zining lug‘aviy ma’nosi nima?",
    "answer": "yangi, xabar, xikoya",
    "noAnswer1": "kitob, mutolaa",
    "noAnswer2": "eski, so‘z, xabar",
    "noAnswer3": "yangi, mutolaa, xabar"
  },
  {
    "question": "Mashhur “Al-Jome’ as-sahih” asarini muallifi kim?",
    "answer": "Imom al-Buxoriy",
    "noAnswer1": "Ahmad YAssaviy",
    "noAnswer2": "Najmiddin Kubro",
    "noAnswer3": "Imom at-Termiziy"
  },
  {
    "question": "XII asrda Xorazmda tasavvuf ilmining asoschisi kim?",
    "answer": "Najmiddin Kubro",
    "noAnswer1": "Ahmad Yassaviy",
    "noAnswer2": "Bahouddin Naqshband",
    "noAnswer3": "Muhammad Muso al -Xorazmiy"
  },
  {
    "question": "Mazhab so‘zining lug‘aviy ma’nosi...",
    "answer": "Oqim, yo‘l, ta’limot",
    "noAnswer1": "G‘ayrat, poklik, yo‘nalish",
    "noAnswer2": "Komillik, kamtarlik, baho",
    "noAnswer3": "Qism, bo‘lak, yo‘nalish"
  },
  {
    "question": "So’fizm ta`limoti qachon paydo bo’lgan?",
    "answer": "VIII- IX asrlarda",
    "noAnswer1": "VIII asr o’rtalarida",
    "noAnswer2": "II asr II yarmida",
    "noAnswer3": "X-XI asrlarda"
  },
  {
    "question": "Alloh tomonidan alohida kitob va shariat berilgan payg’ambarlar, rasullar darajasiga erishganlar bu…",
    "answer": "Ibrohim, Muso, Iso, Muhammad",
    "noAnswer1": "Iso, Muso, Ibrohim, Ya’qub",
    "noAnswer2": "Iso, Yakub, Muhammad",
    "noAnswer3": "Dovud, Ibrohim, Iso, Ismoil"
  },
  {
    "question": "“Avesto” – yozuvi va matnini o’qib, tahlil qilgan olimlar?",
    "answer": "Dyuperon va M. Boys",
    "noAnswer1": "Grotefond va Roulinson",
    "noAnswer2": "Bertels va V.Struve",
    "noAnswer3": "V. Livshis va A. Stoblin – kamenskiy"
  },
  {
    "question": "Hadis necha xil?",
    "answer": "Al-hadis Al-qudsiy, al-xadis an - Nabaviy",
    "noAnswer1": "Al-hadis as-Sahiy al-hadid an-Muhammadiy",
    "noAnswer2": "As-Sahih as-Sitta, Sahihiy Buhoriy",
    "noAnswer3": "sahihi Muslim, Al-Jomiy"
  },
  {
    "question": "«Hidoya» («To’gri yo’l») asari kimning qalamiga mansub?",
    "answer": "Bahouddin Marg’inoniy;",
    "noAnswer1": "Muso Xorazmiy;",
    "noAnswer2": "Usmon Nosir;",
    "noAnswer3": "Ishoqxon Ibrat."
  },
  {
    "question": "Zаrdo’shtiylik dinining fаlsаfiy – ахlоqiy nеgizini tаshkil etаdigаn, mа’nаviy qаdriyat bo’lmish аsоsiy g’оya qаysi?",
    "noAnswer1": "Хаlоl mеhnаt ezgulikning аsоsi.",
    "answer": "Ezgu fikr, ezgu kаlоm, ezgu аmаl birligi.",
    "noAnswer2": "Tаqvоdоrlik kоmillikning pоydеvоri.",
    "noAnswer3": "Hаmmаning dеhqоnchilik bilаn shug’ullаnshi shartligi."
  },
  {
    "question": "Milliy dinlarning asosiy xususiyatlari.",
    "noAnswer1": "milliy davlat diniga aylanishga intilishda",
    "answer": "bir millatga mansublikda",
    "noAnswer2": "o’ziga xos urf-odatlarida",
    "noAnswer3": "millatlarni birlashtirishda"
  },
  {
    "question": "Monotеistik dinlarning asosi-bu",
    "noAnswer1": "tabiat hodisalariga sig’inish.",
    "noAnswer2": "sanamlarga sig’inish.",
    "answer": "yakka xudoga sig’inish",
    "noAnswer3": "ajdodlar ruhiga sig’inish"
  },
  {
    "question": "Jaholatga qarshi kurashning quroli nima?",
    "noAnswer1": "Jaholat;",
    "answer": "Ma’rifat;",
    "noAnswer2": "Saxovat;",
    "noAnswer3": "Iqtisod."
  },
  {
    "question": "Animizm nima?",
    "noAnswer1": "sanamlarga sig‘inish",
    "noAnswer2": "tabiy voqealarga sig‘inish",
    "noAnswer3": "hayvonlarga sig‘inish",
    "answer": "jism ruhlariga sig‘inish"
  },
  {
    "question": "Xristian dinining asosiy yo‘nalishlarini ko‘rsating.\r\n1.Katolitsizm 2.Iudizm 3.Pravoslaviye\r\n4.Sintoizm 5.Protestaitizm",
    "noAnswer1": "1,2,4",
    "noAnswer2": "2,4",
    "noAnswer3": "1,2,3",
    "answer": "1,3,5"
  },
  {
    "question": "Hindiston milliy dini qaysi din?",
    "noAnswer1": "buddizm",
    "answer": "xinduizm",
    "noAnswer2": "sintoizm",
    "noAnswer3": "islom"
  },
  {
    "question": "Iudaizmnig o’ziga xosligi?",
    "noAnswer1": "Jahon dinligi",
    "answer": "milliy dinligi",
    "noAnswer2": "urug’- qabila dinligi",
    "noAnswer3": "Jahon dinlariga o’xshashligida"
  },
  {
    "question": "Xitoy milliy dinlari qaysilar?",
    "noAnswer1": "xristianlik",
    "answer": "daosizm, konfutsiychilik",
    "noAnswer2": "Hinduizm",
    "noAnswer3": "sintoizm"
  },
  {
    "question": "Qur'onni birinchi bo’lib mushaf shakliga kеltirgan shaxs",
    "noAnswer1": "Umar ibn Xattob",
    "answer": "Usmon ibn Affon",
    "noAnswer2": "Ali ibn Abu Tolib",
    "noAnswer3": "Zayd ibn Sobit"
  },
  {
    "question": "O’rta Osiyoda kеng tarqalgan suniylik oqimi…",
    "noAnswer1": "imomiya",
    "noAnswer2": "shofi'iya",
    "answer": "xanafiya",
    "noAnswer3": "alaviyiya"
  },
  {
    "question": "E'tiqod erkinligi nima bilan kafolatlangan?",
    "noAnswer1": "O’zbеkiston Rеspublikasi Vazirlar Maxkamasining qarori bilan",
    "answer": "O’zbеkiston Rеspublikasi Konstitutsiyasi bilan",
    "noAnswer2": "Movarounahr musulmonlari idorasi qaror qoidalari bilan",
    "noAnswer3": "Adliya vazirligi qarorlari bilan"
  },
  {
    "question": "Qur'ondagi eng kichik sura ?",
    "answer": "«Kavsar»",
    "noAnswer1": "«Ixlos»",
    "noAnswer2": "«Baqara»",
    "noAnswer3": "«Oli Imron»"
  },
  {
    "question": "Qur'ondagi birinchi sura?",
    "noAnswer1": "«Ixlos»",
    "noAnswer2": "«Baqara»",
    "answer": "«Fotixa»",
    "noAnswer3": "«Oli Imron»"
  },
  {
    "question": "Hazrati Muhammad (SAV) qachon tavallud topganlar?",
    "answer": "570/571",
    "noAnswer1": "592/593",
    "noAnswer2": "622/622",
    "noAnswer3": "575/576"
  },
  {
    "question": "Qaysi marosimni diniy marosim dеya olamiz?",
    "noAnswer1": "to’y",
    "noAnswer2": "oila shartnomasi",
    "answer": "nikoh",
    "noAnswer3": "beshik to’y"
  },
  {
    "question": "Islomdagi sunniylik oqimining asosiy mazxab-yo’nalishlari",
    "noAnswer1": "xanafiya, shofi'iylik, imomiya, moliykiylik",
    "noAnswer2": "Xanafiy, vaxxobiylik, shofi'iy, xorijiylik",
    "answer": "xanafiy, molikiya, shofi'iylik, xanbaliya",
    "noAnswer3": "shofi'iy, molikiya, imomiya, xanbaliya"
  },
  {
    "question": "Diniy xodim dеganda kimni tushuniladi?",
    "noAnswer1": "imom, monax, namozxon",
    "noAnswer2": "mutavalli, da'vatchi, pastor",
    "noAnswer3": "da'vatchi, namozxon, pastor",
    "answer": "imom, pastor, еpiskop"
  },
  {
    "question": "Umuminsоniy qаdriyatlаrdаn biri hisoblangan – dinlаrаrо bаg’rikеnglik (tоlеrаntlik) bu ...",
    "noAnswer1": "Bir dinning bоshqа dindаn ustunligini ko’rsаtish hаrаkаtlаri.",
    "answer": "Turli diniy e’tiqоdli kishilаrning mа’lum bir hududdа hаmkоr vа hаmjihаt bo’lib yashashi.",
    "noAnswer2": "Dinlаrаrо mutаnоsiblikni ilmiy yo’l bilаn qаrоr tоptirish.",
    "noAnswer3": "Kuch ishlаtish yo’li bilаn o’zgаlаr dinigа hurmаt uyg’оtish."
  },
  {
    "question": "Ma’lumki, Markaziy Osiyo va Hozirgi O‘zbekiston Hududida yashagan xalqlar sunniylikdagi Hanafiya Mazhabiga e’tiqod qilib, bu mazhabning asoschisi “Imomi A’zam” deb nomlangan “Imomi A’zam” so‘zi qanday ma’noni anglatadi?",
    "noAnswer1": "Ilmli kishi",
    "answer": "Ulug‘ imom",
    "noAnswer2": "E’tiqod tayanchi",
    "noAnswer3": "Imomlarning afzali"
  },
  {
    "question": "Ma’lumki, dunyoda islom aqidaparastligining qator diniy – siyosiy oqimlari mavjud bo‘lib, mustaqillikdan so‘ng O‘zbekistondagi tinchlik barqarorlikka ularning qaysilari tahdid solishga harakat qilishdi?",
    "noAnswer1": "Al – Qoida va Al – Jihad al - Islomiy",
    "noAnswer2": "at – Takfir val – Hijra va Abu sayyoor",
    "noAnswer3": "Xizbulloh va Lashkari jihod",
    "answer": "Vahhobiylik va Hizbut tahrir"
  },
  {
    "question": "“Musulmonlarning e’tiqodini tuzatuvchi” degan yuksak sharafga sazavor bo‘lgan alloma kim?",
    "answer": "Imom Moturidiy",
    "noAnswer1": "Imom Buxoriy",
    "noAnswer2": "Imom Termiziy",
    "noAnswer3": "Imom Nasafiy"
  },
  {
    "question": "Axmad Yassaviy uyat va or-nomusini yo‘qotgan odamni nimaga o‘xshatadi?",
    "noAnswer1": "Qushga",
    "answer": "Hayvonga",
    "noAnswer2": "Daraxtga",
    "noAnswer3": "Texnikaga"
  },
  {
    "question": "Dinning jamiatdagi “regulyatorlik» vazifasi nimadan iborat?",
    "answer": "Din o`z qavmlarini turmushini nazorat qilishi",
    "noAnswer1": "Dinni yoyish",
    "noAnswer2": "Dinga majburlash",
    "noAnswer3": "Tasalli berish"
  },
  {
    "question": "Dinshunoslik fanining predmeti?",
    "answer": "Dinni xolislik asosida o`rganish",
    "noAnswer1": "Dinni teologik jihatdan o`rganish",
    "noAnswer2": "Faqat islom dinini o`rganish",
    "noAnswer3": "Diniy ibodatlarni amalga oshirishni o`rganish"
  },
  {
    "question": "Tаsаvvuf tа’limоti - insоn uchun eng kаttа yov, dеb nimаni tushunаdi?",
    "noAnswer1": "Hur fikrlilikni.",
    "noAnswer2": "Fаqirоnа hаyot kеchirishni.",
    "noAnswer3": "Bоy – bаdаvlаt bo’lishni.",
    "answer": "Nаfs bаlоsini."
  },
  {
    "question": "Taylor nechanchi yil «animizm» konsepsiyasini ilgari surdi?",
    "answer": "1871-yilda",
    "noAnswer1": "1868-yilda",
    "noAnswer2": "1869-yilda",
    "noAnswer3": "1880-yilda"
  },
  {
    "question": "«Hujjatul islom” unvonini olgan olim?",
    "answer": "G‘azzoliy",
    "noAnswer1": "Farobiy",
    "noAnswer2": "Beruniy",
    "noAnswer3": "Ibn Sino"
  },
  {
    "question": "«Shomon» so‘zining ma’nosi nima?",
    "answer": "jazavali kishi",
    "noAnswer1": "ruhoniy",
    "noAnswer2": "Oqsoqol",
    "noAnswer3": "Bashoratchi"
  },
  {
    "question": "«Yahve» atamasi qaysi dinga oid?",
    "answer": "yahudiylik",
    "noAnswer1": "buddizm",
    "noAnswer2": "xristianlik",
    "noAnswer3": "Sintoizm"
  },
  {
    "question": "Qaysi dinlar milliy dinlardan hisoblanadi?",
    "answer": "Hinduizm, jaynizm, sikxizm, konfusiychilik",
    "noAnswer1": "Fetishizm, totemizm, anemizm",
    "noAnswer2": "Buddizm, islom, xristianlik",
    "noAnswer3": "Katolisizm, pravoslaviya, protestantlik, lyuteranlik"
  },
  {
    "question": "Mus’haf nima?",
    "answer": "Qur’on qadimiy qo‘lyozma nusxalarining umumiy nomi",
    "noAnswer1": "qo‘lyozma yodgorliklar",
    "noAnswer2": "Hadislarning qo‘lyozma nusxalari",
    "noAnswer3": "to‘g‘ri javob yo‘q"
  },
  {
    "question": "Fransuzchada «but», «sanam», «tumor» – ma’nosini beruvchi,  jonsiz buyumlarda e’tiqod qilish, bu...?",
    "answer": "fetishizm",
    "noAnswer1": "shomonizm",
    "noAnswer2": "totemizm",
    "noAnswer3": "animism"
  },
  {
    "question": "Zаrdushtiylik dini insоniyat tаriхidа diniy e’tiqоd qаdriyatlаrini yuqоri bоsqichgа оlib chiqdi, ya’ni quyidаgi jаrаyonni bоshlаb bеrdi:",
    "noAnswer1": "Pоlitеizmni.",
    "noAnswer2": "Duаlizmni.",
    "answer": "Mоnоtеizmni.",
    "noAnswer3": "Pаntеizmni."
  },
  {
    "question": "Islom dini ta’limotida «vahiy» tushunchasi qanday talqin qilinadi?",
    "answer": "Ilohiy ko‘rsatmalarni payg‘ambarga tushirish yo‘li",
    "noAnswer1": "din asoschisini diniy ko‘rsatmalarni insoniyatga yetkazishi",
    "noAnswer2": "dindor kishiga diniy ko‘rsatmalarni bajarishga bo‘lgan ilohiy ilhomi",
    "noAnswer3": "Qur’oni karimning muqobil ma’nosi"
  },
  {
    "question": "O‘rta Osiyo nima uchun o‘rta asrlarda sharqning ma’naviyat markazi deb atalgan?",
    "noAnswer1": "O’rta Osiyoda rivojlangan davlatlarning vujudga kelishi sababli.",
    "answer": "O’rta Osiyoda buyuk mutafakkirlarning etishib chiqqanligi, ilm markazlari va madrasalarning vujudga kelishi , jahon fani va islomshunosligiga qo’shgan hissasi tufayli.",
    "noAnswer2": "Qishloq xo’jaligi va hunarmandchilikning rivojlanganligi tufayli.",
    "noAnswer3": "A, B, C."
  },
  {
    "question": "Bag‘rikenglik manosini beruvchi so‘z?",
    "answer": "tolerantlik",
    "noAnswer1": "plyuralizm",
    "noAnswer2": "polemika",
    "noAnswer3": "fobiya"
  },
  {
    "question": "Zardushtiylik qachon vujudga kelgan?",
    "answer": "m.a. 1-mingyillikning birinchi choragi",
    "noAnswer1": "m.a. 2-mingyillikning ikkinchi choragi",
    "noAnswer2": "m.a. 1-mingyillikning o‘rtalari",
    "noAnswer3": "m.a. 2-mingyillikning to‘rtinchi choragi"
  },
  {
    "question": "Yahudiylikda diniy jamoat joylarini boshqaruvchi, yahudiylik ta’limoti va kultining bilimdoni qanday nomlanadi?",
    "answer": "ravvin",
    "noAnswer1": "yom kipur",
    "noAnswer2": "rosh ashana",
    "noAnswer3": "karaim"
  },
  {
    "question": "«Ahli sunna val-jamoa»da fiqhiy mazhablar qaysilar?",
    "answer": "Hanafiylik, Molikiylik, Shofiiylik, Xanbaliy",
    "noAnswer1": "Ash’ariylik, Molikiylik, Moturidiylik, Shialik",
    "noAnswer2": "Zoxiriylik, Ash’ariylik, Shofiiylik, Xanafiylik",
    "noAnswer3": "Xorijiya, Ash’ariylik, Mu’taziliya, Azraqiya"
  },
  {
    "question": "Sunniylik yo‘nalishining aqidaviy ta’limoti qaysi ta’limotlarga asoslanadi?",
    "noAnswer1": "Hanafiya, Shofi’iya",
    "noAnswer2": "Ash’ariya, Mo’taziliya",
    "answer": "Moturidiya, Ash’ariya",
    "noAnswer3": "Moturidiya, Tahoviya"
  },
  {
    "question": "“Johiliya”so‘zining lug‘aviy ma’nosi nima?",
    "noAnswer1": "Oqillik, donolik",
    "noAnswer2": "Mayxo‘rlik, aqidaparastlik",
    "answer": "Bilimsizlik, nodonlik",
    "noAnswer3": "Qasoskorlik, riyokorlik"
  },
  {
    "question": "Johiliya davridagi din va e’tiqodlar qaysilar?",
    "answer": "Xristianlik, yahudiylik, sobiylik, majusiylik",
    "noAnswer1": "Zardushtiylik, islom, xristianlik, butparastlik",
    "noAnswer2": "Totemizm, fetishizm, shamanizm, animizm",
    "noAnswer3": "Shamanlik, xristianlik, islom, buddizm"
  },
  {
    "question": "“Diniy tashkilotlar davlatdan ajratilgan hamda qonun oldida tengdirlar. Davlat diniy tashkilotlarning faoliyatiga aralashmaydi.” Ushbu so’zlar qaysi hujjatda joy olgan?",
    "noAnswer1": "“Inson huquqlari umumjahon deklaratsiyasi”",
    "noAnswer2": "“Vijdon erkinligi va diniy tashkilotlar to‘g‘risida”gi qonun",
    "answer": "O’zbekiston Respublikasi Konstitutsiyasi",
    "noAnswer3": "\"Bagʻrikenglik tamoyillari deklaratsiyasi\""
  },
  {
    "question": "Ma’lumotlarga ko‘ra, bugun dunyo bo‘yicha qanchaga yaqin terrorchilik tashkilotlari faoliyat ko‘rsatmoqda?",
    "answer": "500",
    "noAnswer1": "600",
    "noAnswer2": "400",
    "noAnswer3": "800"
  },
  {
    "question": "Diniy ekstremistik guruhlar tahdid solayotgan turli mamlakatlarni shartli tarzda bir necha guruhga bo‘lish mumkin. Shunday guruhlarning 3-o’chog’i hisoblangan Janubi-Sharqiy Osiyo mintaqasida joylashgan davlatlarni toping.",
    "noAnswer1": "Xitoy, Mongoliya, Vyetnam, Yaponiya",
    "noAnswer2": "Falastin, Iroq, Suriya, Saudiya Arabiston",
    "noAnswer3": "Misr, Jazoir, Tunis",
    "answer": "Pokiston, Indoneziya, Malayziya, Hindiston, Filippin"
  },
  {
    "question": "O‘tgan asrning 70-yillaridan boshlab diniy ekstremizm va fundamentalizmning eng yirik o‘chog‘iga aylahgan hudud qaysi?",
    "answer": "Afg‘oniston",
    "noAnswer1": "Eron",
    "noAnswer2": "Suriya",
    "noAnswer3": "Pokiston"
  },
  {
    "question": "Hasan al-Banno tomonidan 1928 yilda asos solingan tashkilot qaysi?",
    "answer": "“Jamoat al-ixvon al-muslimin”",
    "noAnswer1": "“Hizb at-tahrir al-islomiy”",
    "noAnswer2": "“Al-Qoida”",
    "noAnswer3": "“Tolibon”"
  },
  {
    "question": "“Islom nizomi”, “Islom davlati”, “Xalifalik”, “Islomiy olamga qaynoq nidolar”, “Demokratiya – kufr nizomi” va “Siyosiy ong” kabi asarlarni ta’limoti asosiga olgan diniy ekstremistik guruh qaysi?",
    "noAnswer1": "“Jamoat al-ixvon al-muslimin”",
    "answer": "“Hizb at-tahrir al-islomiy”",
    "noAnswer2": "“Al-Qoida”",
    "noAnswer3": "“Tolibon”"
  },
  {
    "question": "Usoma bin Lodin qaysi diniy ekstremistik tashkilotning rahbari bo’lgan?",
    "noAnswer1": "“Jamoat al-ixvon al-muslimin”",
    "noAnswer2": "“Hizb at-tahrir al-islomiy”",
    "answer": "“Al-Qoida”",
    "noAnswer3": "“Tolibon”"
  },
  {
    "question": "2001 yilning 11 sentabrida Amerika Qo‘shma Shtatlarida turli reyslar bilan Nyu-York, Boston va Vashington shaharlaridan uchgan to‘rtta “Boing–757” samolyoti qaysi guruhga mansub 18 nafar terrorchi tomonidan egallab olindi?",
    "noAnswer1": "“Jamoat al-ixvon al-muslimin”",
    "noAnswer2": "“Hizb at-tahrir al-islomiy”",
    "answer": "“Al-Qoida”",
    "noAnswer3": "“Tolibon”"
  },
  {
    "question": "Lotincha – «aql bovar qilmas darajada», «haddan oshish»,  jamiyatda qabul qilingan qonun-qoidalarga zid radikal qarashlar va harakatlarni anglatadigan so’z qaysi?",
    "answer": "Ekstremizm",
    "noAnswer1": "Terrorizm",
    "noAnswer2": "Fundamentalizm",
    "noAnswer3": "Mutaassiblik"
  },
  {
    "question": "Lotincha – «asos», muayyan ijtimoiy hodisaning dastlabki ko‘rinishini anglatadigan so’z qaysi?",
    "noAnswer1": "Ekstremizm",
    "noAnswer2": "Terrorizm",
    "answer": "Fundamentalizm",
    "noAnswer3": "Mutaassiblik"
  },
  {
    "question": "Arabcha – «g‘uluv ketish», «chuqur ketish», o‘z fikr-mulohaza va dunyoqarashi to‘g‘riligiga o‘ta qattiq ishonib, boshqa diniy e’tiqodlarga murosasiz munosabatda bo‘lishni anglatuvchi so’z qaysi?",
    "answer": "Mutaassiblik",
    "noAnswer1": "Aqidaparastlik",
    "noAnswer2": "Ekstremizm",
    "noAnswer3": "Terrorizm"
  },
  {
    "question": "Lotincha – «qo‘rqitish», «vahimaga solish» – aholining keng qatlamlarida vahima va qo‘rquv uyg‘otish, jamiyatda beqarorlik keltirib chiqarish orqali davlat hokimiyatini egallash maqsadiga qaratilgan jinoiy faoliyatdir.",
    "noAnswer1": "Ekstremizm",
    "answer": "Terrorizm",
    "noAnswer2": "Fundamentalizm",
    "noAnswer3": "Mutaassiblik"
  },
  {
    "question": "Ushbu so’z o‘zbek tiliga aynan tarjima qilinganda «e’tiqod qilish», degan ma’noni anglatadi. Umuman olganda, muayyan diniy ta’limot doirasida shakllangan va o‘ziga xos xususiyatlarga ega e’tiqod va ushbu e’tiqodga ergashuvchilar jamoasi tushuniladi.",
    "answer": "Konfessiya",
    "noAnswer1": "Sekulyarizatsiya",
    "noAnswer2": "Ekstremizm",
    "noAnswer3": "Sekta"
  },
  {
    "question": "Mutaxassislar hozirgi kunda dunyoda taxminan qancha diniy konfessiyalar mavjud, deb hisoblaydilar?",
    "answer": "1000dan ortiq",
    "noAnswer1": "500dan ortiq",
    "noAnswer2": "100dan ortiq",
    "noAnswer3": "3000dan ortiq"
  },
  {
    "question": "Sun Myung Men tomonidan tuzilgan xristian cherkovi qaysi?",
    "answer": "Birlashgan cherkov",
    "noAnswer1": "Mormonlar",
    "noAnswer2": "Serkov novogo zaveta",
    "noAnswer3": "Yahve shohidlari"
  },
  {
    "question": "«Aum sinrikyo» -  Aum (sanskritcha «olam») haqiqati ta’limoti; ingliz tilida  «Supreme truth»,  ya’ni «oliy haqiqat» deb tarjima qilingan diniy, sinkretik, terroristik, ekstremistik, totalitar, destruktiv sekta qayerda vujudga keldi?",
    "answer": "Yaponiya",
    "noAnswer1": "Xitoy",
    "noAnswer2": "Vyetnam",
    "noAnswer3": "Tailand"
  },
  {
    "question": "Yerning Quyosh atrofida aylanishi haqidagi qarashlarni yoqlagani uchun cherkov tribunali tomonidan tavba qildirilib, o‘z qarashlaridan voz kechishga majbur qilingan Galileo Galileyning haq bo‘lganini tan olib, barchadan uzr so‘ragan papaning ismi kim?",
    "answer": "Papa Ioann Pavel II",
    "noAnswer1": "Papa Lev II",
    "noAnswer2": "Papa Piy I",
    "noAnswer3": "Papa Sebastian"
  },
  {
    "question": "1873-yilda Charlz Teyz Rassel (1852-1916) tomonidan asos solingan xristianlikdagi yangi oqim qaysi?",
    "noAnswer1": "Birlashgan cherkov",
    "noAnswer2": "Mormonlar",
    "noAnswer3": "Serkov novogo zaveta",
    "answer": "Yahve shohidlari"
  },
  {
    "question": "1830 yili Nyu-York (AQSh) shahrida Jozef Smit (1805-1844) ismli shaxs tomonidan asos solingan yangi diniy oqim qaysi?",
    "noAnswer1": "Birlashgan cherkov",
    "answer": "Mormonlar",
    "noAnswer2": "Serkov novogo zaveta",
    "noAnswer3": "Yahve shohidlari"
  },
  {
    "question": "XIX asrda Eronda bobiylik yo‘nalishi zamirida vujudga kelgan diniy yo‘nalish qaysi?",
    "answer": "Bahoiylik",
    "noAnswer1": "Ahmadiylik (Qodiyoniylik)",
    "noAnswer2": "G’ulomiylik",
    "noAnswer3": "Ja’fariylik"
  },
  {
    "question": "«Kitobi Aqdas» («Eng muqaddas kitob») va «Kitobi Iqon» («Mustahkam ishonch kitobi») asarlari qaysi diniy ta’limotining asoslarini tashkil etadi?",
    "answer": "Bahoiylik",
    "noAnswer1": "Ahmadiylik (Qodiyoniylik)",
    "noAnswer2": "G’ulomiylik",
    "noAnswer3": "Ja’fariylik"
  },
  {
    "question": "G‘ayriislomiy mohiyat va diniy-siyosiy mazmunga ega bo‘lgan bu oqimi XIX asrning oxirlarida Mirzo G‘ulom Ahmad tomonidan tuzilgan. Dastlab u asoschisining nomi bilan – «Mirzoiylik» deb atalgan.",
    "noAnswer1": "Bahoiylik",
    "answer": "Ahmadiylik (Qodiyoniylik)",
    "noAnswer2": "G’ulomiylik",
    "noAnswer3": "Ja’fariylik"
  },
  {
    "question": "Ayrim mamlakatlarning konstitutsiyalarida diniy tashkilotning davlatdan ajratilganligi mustahkamlangan bo‘lib, bunda davlat dinni o‘z fuqarolarining shaxsiy ishi sifatida ko‘radi. Ushbu ta’rif qaysi model haqida?",
    "answer": "Separatsion model",
    "noAnswer1": "Identifikatsion model",
    "noAnswer2": "Kooperatsion model",
    "noAnswer3": "Diktatorlik modeli"
  },
  {
    "question": "Qaysi davlat konstitutsiyasida “12 ta imomlarning mavjudligini nazarda tutuvchi ja’fariya mazhabi rasmiy din sifatida e’tirof etiladi hamda bu qoida abadiy o‘zgarmas bo‘lib qoladi” degan modda joy olgan?",
    "answer": "Eron",
    "noAnswer1": "Iroq",
    "noAnswer2": "Suriya",
    "noAnswer3": "Saudiya Arabistoni"
  },
  {
    "question": "Quyidagi qaysi so’z «chuqur tushunish», «idrok etish», «bilish» ma’nolarini bildiradi. Istilohiy ma’noda esa – shariat hukmlarini o‘rganish, shariat qoidalarini barcha qismlari bilan anglash.",
    "answer": "Fiqh",
    "noAnswer1": "Mazhab",
    "noAnswer2": "Aqida",
    "noAnswer3": "Iymon"
  },
  {
    "question": "Quyidagi qaysi so’z  «yo‘nalish», «yo‘l», «diniy ta’limot» ma’nolarini bildiradi. Islom shariati va aqidasining muayyan bir tizimga solingan holatdagi ko‘rinishidir.",
    "noAnswer1": "Fiqh",
    "answer": "Mazhab",
    "noAnswer2": "Aqida",
    "noAnswer3": "Iymon"
  },
  {
    "question": "Hanafiylik mazhabining asoschisi kim?",
    "answer": "Imomi A’zam",
    "noAnswer1": "Ahmad ibn Hanbal",
    "noAnswer2": "Imom Shofeiy",
    "noAnswer3": "Imom Molik"
  },
  {
    "question": "Islom ta’limotini o‘rganishda eng ko‘p qo‘llangan ushbu atama, bu nom X asrda paydo bo‘lgan. Ushbu so‘z bir narsani ikkinchisiga «mahkam bog‘lash» ma’nosini beradi.",
    "noAnswer1": "Fiqh",
    "noAnswer2": "Mazhab",
    "answer": "Aqida",
    "noAnswer3": "Iymon"
  },
  {
    "question": "«Kitab at-Tavhid», «Kitab al-maqomat», «Kitab rad avoil al-adilla li-l-Ka’biy», «Kitab al-usul», «ar-Radd ala usul al-Qaromita», «Kitab ta’vilot ahli sunna» asarlarining muallifini toping.",
    "answer": "Abu Mansur Moturidiy",
    "noAnswer1": "Abu Hanifa",
    "noAnswer2": "Imom al-Buxoriy",
    "noAnswer3": "Muhammad al-Xorazmiy"
  },
  {
    "question": "«Imom al-huda» (hidoyat yo‘li imomi) va «Imom al-mutakallimin» (mutakallimlar imomi) kabi nomlar bilan dovruq qozongan alloma kimdir?",
    "answer": "Abu Mansur Moturidiy",
    "noAnswer1": "Abu Hanifa",
    "noAnswer2": "Imom al-Buxoriy",
    "noAnswer3": "Muhammad al-Xorazmiy"
  },
  {
    "question": "Qaysi so’z arabcha «qara’a» (o‘qimoq) fe’lidan olingan. Boshqa fikrga binoan, u suryoniy tilidagi «kerain» – «muqaddas yozuv» ma’nosini bildiruvchi so‘zdan olingan.",
    "answer": "Qur’on",
    "noAnswer1": "Aqida",
    "noAnswer2": "Mazhab",
    "noAnswer3": "Hadis"
  },
  {
    "question": "Halifa Abu Bakr nechanchi yillarda hukmronlik qilgan?",
    "answer": "632-634",
    "noAnswer1": "636-644",
    "noAnswer2": "656-661",
    "noAnswer3": "644-656"
  },
  {
    "question": "Halifa Usmon ibn Affon nechanchi yillarda hukmronlik qilgan?",
    "noAnswer1": "632-634",
    "noAnswer2": "634-644",
    "noAnswer3": "656-661",
    "answer": "644-656"
  },
  {
    "question": "Hadisni rivoyat qilgan roviylar zanjiri nima deb ataladi?",
    "noAnswer1": "Matn",
    "answer": "Isnod",
    "noAnswer2": "Hadis",
    "noAnswer3": "Mushaf"
  },
  {
    "question": "Qaysi hadis turida hadisda ma’no – Allohdan, lafz – Payg‘ambardan deb hisoblanadi?",
    "answer": "al-hadis al-qudsiy",
    "noAnswer1": "al-hadis an-nabaviy",
    "noAnswer2": "Sahih hadis",
    "noAnswer3": "Mutavotir hadis"
  },
  {
    "question": "Qaysi hadis turida ma’no ham, lafz ham Payg‘ambarniki deb hisoblanadi?",
    "noAnswer1": "al-hadis al-qudsiy",
    "answer": "al-hadis an-nabaviy",
    "noAnswer2": "Sahih hadis",
    "noAnswer3": "Mutavotir hadis"
  },
  {
    "question": "Makka fath etilgan 630-yili Ka’ba ichida qancha sanam bo‘lgan?",
    "noAnswer1": "500",
    "answer": "630",
    "noAnswer2": "450",
    "noAnswer3": "900"
  },
  {
    "question": "Ko’chmanchi arablar nima deb ataladi?",
    "noAnswer1": "Ansorlar",
    "noAnswer2": "Muxojirlar",
    "answer": "Badaviylar",
    "noAnswer3": "Mutaziliylar"
  },
  {
    "question": "Arabcha-elchi, islom an’anasida Alloh tomonidan tanlab olinib, vakil qilingan va targ‘ibot yuritish, da’vat qilish vazifasi topshirilgan, ilohiy kitob nozil qilingan payg‘ambar, ushbu ta’rifga mos so’zni toping.",
    "answer": "Rosul",
    "noAnswer1": "Nabiy",
    "noAnswer2": "Muhaddis",
    "noAnswer3": "Fiqhchi"
  },
  {
    "question": "Arabcha-ko‘ligi anbiyo, ilohiy xabar keltiruvchi payg‘ambar, Allohning farmoyishini insonlarga yetkazib beruvchi vositachi shaxs. O‘zlariga maxsus kitob va shariat  berilmagan ushbu ta’rif kimlarga berilgan?",
    "noAnswer1": "Rasul",
    "answer": "Nabiy",
    "noAnswer2": "Muhaddis",
    "noAnswer3": "Fiqhchi"
  },
  {
    "question": "Muhammad (S.A.V.)ning amakisiining ismi nima?",
    "answer": "Abu Tolib",
    "noAnswer1": "Abdul Mutallib",
    "noAnswer2": "Ali",
    "noAnswer3": "Umar bin Hattob"
  },
  {
    "question": "Muhammad (sav)ning Makkadan Quddusga qilgan tungi sayri nima deb ataladi?",
    "answer": "Isro",
    "noAnswer1": "Mer’oj",
    "noAnswer2": "Hijrat",
    "noAnswer3": "Fath"
  },
  {
    "question": "Muhammad (sav)ning Quddusdagi Aqso masjididan osmonga ko‘tarilishlari nima deb ataladi?",
    "noAnswer1": "Isro",
    "answer": "Mer’oj",
    "noAnswer2": "Hijrat",
    "noAnswer3": "Fath"
  },
  {
    "question": "Arabcha-uzoqdagi masjid-Quddus shahridagi yahudiylik an’anasida muqaddas hisoblangan Sulaymon ibodatxonasidir. Qur’on Karimda shu nom bilan tilga olingan masjid qaysi?",
    "answer": "Al-Masjid al-Aqso",
    "noAnswer1": "Al-Masjid an-Nabaviy",
    "noAnswer2": "Al-Masjid al-Harom",
    "noAnswer3": "Mo’yi muborak"
  },
  {
    "question": "Dastlab Muhammad Payg‘ambar musulmonlarni qaysi shaharga qarab namoz o‘qishga  buyurgan?",
    "noAnswer1": "Makka",
    "noAnswer2": "Madina",
    "answer": "Quddus",
    "noAnswer3": "Shom"
  },
  {
    "question": "Uhud tog‘i etagida bo‘lgan jang qachon sodir bo’lgan?",
    "answer": "625",
    "noAnswer1": "624",
    "noAnswer2": "623",
    "noAnswer3": "630"
  },
  {
    "question": "Qachon Makka shahri jangsiz musulmonlarga taslim bo’ldi?",
    "noAnswer1": "645",
    "answer": "630",
    "noAnswer2": "632",
    "noAnswer3": "610"
  },
  {
    "question": "Arabcha-Alloh uyi - Makka shahridagi Ka’ba binosining nomi nima?",
    "noAnswer1": "Al-Masjid al-Aqso",
    "noAnswer2": "Al-Masjid an-Nabaviy",
    "answer": "Baytulloh",
    "noAnswer3": "Qubbat as-Sahro"
  },
  {
    "question": "Qoya gumbazi-Quddusdagi al-harom ash-Sharif markazidagi, qadimdan e’zozlanib kelingan qoya ustidagi gumbazli masjid qaysi?",
    "noAnswer1": "Al-Masjid al-Aqso",
    "noAnswer2": "Al-Masjid an-Nabaviy",
    "noAnswer3": "Baytulloh",
    "answer": "Qubbat as-Sahro"
  },
  {
    "question": "Tafsir nima?",
    "noAnswer1": "Payg‘ambar hayotini tasvirlaydi",
    "noAnswer2": "hadis sirini ochadi",
    "answer": "Qur’on oyatlariga sharh beradi",
    "noAnswer3": "tarixni yoritadi"
  },
  {
    "question": "Islom so‘zining ma’nosi?",
    "noAnswer1": "Birlashmoq",
    "answer": "Allohga bo‘ysunmoq, itoat qilmoq",
    "noAnswer2": "Muhammad payg‘ambarga ergashmoq",
    "noAnswer3": "Xudoni tanimoq"
  },
  {
    "question": "O‘zbekistonda islom dini bayramlari qaysi?",
    "noAnswer1": "diniy bayramlar yo‘q",
    "noAnswer2": "Navro‘z",
    "noAnswer3": "Mustaqillik kuni",
    "answer": "Iyd-al Fitr, Iyd-al  Qurbon"
  },
  {
    "question": "Dinshunoslik fan sifatida qachon shakllandi?",
    "noAnswer1": "Eramizdan avvalgi 3 asrda",
    "noAnswer2": "10-11 asrlarda",
    "noAnswer3": "8 asr boshlarida",
    "answer": "19 asr oxiri 20 asr boshlarida"
  },
  {
    "question": "Diniy fundamentalizm va ekstremizm tarafdorlarining asosiy maqsadi nima?",
    "noAnswer1": "Jamiyatdagi amaldor shaxslarga qarshi kurashish;",
    "noAnswer2": "Xalqlar ko‘ngliga g‘ulg‘ula solish;",
    "noAnswer3": "O‘z manfaatlari yo‘lida foydalanish;",
    "answer": "Xalifalik davlatini o‘rnatish;"
  },
  {
    "question": "Islomiy madaniyatga xos xususiyatlari nimalardan iborat?",
    "noAnswer1": "tubanlik, hiyonat, vafo, pastkashlik",
    "noAnswer2": "iymonlilik, vijdonlilik, halollik, mazamat",
    "answer": "e’tiqodlilik, poklik, ezgulik, xalimlik",
    "noAnswer3": "go‘zallik, o‘ta bilimlilik, andishalilik, isyonkorlik"
  },
  {
    "question": "«Mushafi Usmon»ning asl nusxalaridan biri saqlanayotgan joy qayerda?",
    "answer": "Toshkent",
    "noAnswer1": "Samarqand",
    "noAnswer2": "Makka",
    "noAnswer3": "Turkiston"
  },
  {
    "question": "Kalom falsafasining shakllanish davri",
    "answer": "IX asr",
    "noAnswer1": "VII-IX asrlar",
    "noAnswer2": "XI asr",
    "noAnswer3": "X asr"
  },
  {
    "question": "“Bayt ul хikma” qaysi shaharda tashkil etildi?",
    "noAnswer1": "Хоrazm.",
    "noAnswer2": "Buхоrо.",
    "noAnswer3": "Samarqand.",
    "answer": "Bоg’dоd."
  },
  {
    "question": "Vijdоn erkinligining kafоlatlari nimalardan ibоrat?",
    "noAnswer1": "Dinlarning va diniy tashkilоtlarning davlatdan ajratilganligi.",
    "noAnswer2": "Barcha fuqarоlar uchun maоrif va madaniyat eshiklarining оchiqligi.",
    "noAnswer3": "maktabning dindan va diniy tashkilоtlardan ajratilganligi.",
    "answer": "Barchasi."
  },
  {
    "question": "Iymon deganda nimani tushunasiz?",
    "noAnswer1": "Poklik.",
    "noAnswer2": "Adolat.",
    "noAnswer3": "Diyonat.",
    "answer": "Ishonch."
  },
  {
    "question": "Insoniylikning muhim shartlari...?",
    "noAnswer1": "Saxiylik, xushmuomilalik, insoflilik, kamtarinlik.",
    "noAnswer2": "To‘g‘ri so‘zlik, sharm-hayolilik, or-nomus, andishalik.",
    "noAnswer3": "Diyonatlilik, mexr-shafqatlilik, poklik, halollik.",
    "answer": "Hammasi to‘g‘ri"
  },
  {
    "question": "Musulmоn huquqshunоsligidagi shariat manbalarini aniqlang.",
    "noAnswer1": "Sunnat.",
    "noAnswer2": "Ijmо’.",
    "noAnswer3": "Qur’оni Karim.",
    "answer": "Barcha javоblar to’g’ri."
  },
  {
    "question": "Buddaviylik ta’limoti, asosan, uch qismdan iborat bo‘lib uning muhim qismi axloq hisoblanadi. Axloq normalari – «Pancha shila» (Buddaning besh nasihati) deb atalib u qaysi nasihatlardan iborat? \r\n\r\n1) qotillikdan saqlanish;\r\n2) o‘g‘rilikdan saqlanish;\r\n3) gumrohlikdan saqlanish;\r\n4) yolg‘on, qalbaki narsalardan saqlanish;\r\n5) mast qiluvchi narsalardan saqlanish\r\n6) shirk keltirishdan saqlanish\r\n7) harom luqmadan saqlanish\r\n8) mol go‘shtidan saqlanish",
    "answer": "1,2,3,4,5",
    "noAnswer1": "1,2,4,5,6",
    "noAnswer2": "1,2,3,7,8",
    "noAnswer3": "1,2,3,6,7"
  },
  {
    "question": "Buddaviylik 2 asosiy oqimdan iborat bo‘lib ular qaysilar ?",
    "answer": "Hinayana va Mahayana",
    "noAnswer1": "Vajrayana va Tripitaka",
    "noAnswer2": "Hinayana va Vajrayana",
    "noAnswer3": "Vajrayana va Ramayana"
  },
  {
    "question": "Butun olam suv bosishi (to‘fon) haqidagi afsonaning vatani…",
    "answer": "Messopotamiya",
    "noAnswer1": "Eron",
    "noAnswer2": "Gretsiya",
    "noAnswer3": "Hindiston"
  },
  {
    "question": "\t\n«Avesto» kitobi qaysi dinga mansub?\n",
    "answer": "\t\n# Zardushtiylikka\n"
  },
  {
    "question": "\n\t\nIslom qaysi dinlar qatoriga kiradi?\n",
    "answer": "\n# yakka xudolik\n"
  },
  {
    "question": "\n\t\nXinduizm qachon paydo bo‘lgan?\n",
    "answer": "\n# to‘g‘ri javob yo‘q.\n\n"
  },
  {
    "question": "\nDin-bu.\n",
    "answer": "\t\n#ijtimoiy hodisa\n"
  },
  {
    "question": "\n\t\nDinning qanday tiplari bor?\n",
    "answer": "\t\n# xristianlik, islom, buddaviylik\n"
  },
  {
    "question": "\n\t\t\nDin jamiyatning ijtimoiy va madaniy hayotida qanday rol o‘ynaydi?\n",
    "answer": " \t\n# oddiy halqni itoatda saqlab turishda asosiy vosita\n\n"
  },
  {
    "question": "\n\t\n Qadimgi zamon dinlarida sig‘inish turlari qanday edi?\n",
    "answer": "\t\n# A,B,V javoblar to‘g‘ri\t\n \n"
  },
  {
    "question": "\n\t\nAnimizm nima?\n",
    "answer": "\t\n#jism ruhlariga sig‘inish\n"
  },
  {
    "question": "\n\t\n Politeistik dinlar.\n",
    "answer": "\t\n# buddizm va veda, mazdakizm\n"
  },
  {
    "question": "\n\t\n Davlat va din orasidagi munosabatlar qanday?\n",
    "answer": "\t\n# din davlatdan ajratilgan \n"
  },
  {
    "question": "\n\t\t\nDinning vazifalari nimada?\n",
    "answer": "\t\n# to‘ldiruvchilik, aloqadorlik, birlashtiruvchilik, tartibga solishlik\n"
  },
  {
    "question": "\n\t\t\nDiniy tashkilotlar qaysi idoralar tomonidan ro‘yhatga olinadi?\n",
    "answer": "\n# Adliya vazirligi\n"
  },
  {
    "question": "\n\nProzelit kim?\n",
    "answer": "\n# O‘z dinidan boshqa dinga o‘tgan kishi\n"
  },
  {
    "question": "\n\nXristianlikning vatani.\n",
    "answer": "\t\n# Falastin\n"
  },
  {
    "question": "\n\t\t\nPatriarxal davr dinlari\n",
    "answer": "\t\n# buddizm\n"
  },
  {
    "question": "\n\nMissionerlik nima?\n",
    "answer": " \n# boshqa dindagilarni o‘z diniga targ‘ib qilish faoliyati\n"
  },
  {
    "question": "\n\nMilliy dinlarning asosiy xususiyatlari.\n",
    "answer": "\n# bir millatga mansublikda\n"
  },
  {
    "question": "\n\nMonoteistik dinlarning asosi-bu\n",
    "answer": "\n# yakka xudoga sig‘inish.\n"
  },
  {
    "question": "\n\nBuddizm qachon paydo bO‘lgan?\n",
    "answer": "\n# eradan avvalgi VI asrda\n"
  },
  {
    "question": "\n\t\nBuddizmning asosiy kitoblari.\n",
    "answer": "\t\n#Tripitaka (3 kitoTantra)\t\n\n"
  },
  {
    "question": "\n\t\nXristianlik qachon paydo bo‘lgan?\n",
    "answer": "\t\n#Eramizning 1 asrida \t\n\n"
  },
  {
    "question": "\n\nQaysi din eng qadimgi?\n",
    "answer": "\n# buddizm\n"
  },
  {
    "question": "\n\nHindiston milliy dini qaysi din?\n",
    "answer": "\n# xinduizm \n"
  },
  {
    "question": "\n\nXristianlik qachon shakllangan?\n",
    "answer": "\n# 1 asrda\n"
  },
  {
    "question": "\n\nXristianlikning asosiy oqimlari?\n",
    "answer": "\n# katolisizm, pravoslaviye, protestantizm\n\n"
  },
  {
    "question": "\n\nXristianlikning muqaddas kitobi?\n",
    "answer": "\t\n# Injil \n"
  },
  {
    "question": "\n\t\nYahudiy dinning asosiy kitoblari?\n",
    "answer": "\t\n# tavrot, talmud \n"
  },
  {
    "question": "\n\nMarkaziy Osiyoda keng tarqalgan din? \n",
    "answer": "\n# islom \n"
  },
  {
    "question": "\n\t\nDinlarning o‘xshashligi nimada?\n",
    "answer": "\t\n# dinga e’tiqod qilishda\t\t\n\n"
  },
  {
    "question": "\n\t\nIudaizmnig o‘ziga xosligi?\n",
    "answer": "\t\n#milliy dinligi\t\n\n"
  },
  {
    "question": "\n\t\t\n Xitoy milliy dinlari qaysilar?\n",
    "answer": "\n# Daosizm, konfusiychilik\n"
  },
  {
    "question": "\n\nIslom dini qachon paydo bo‘lgan?\n",
    "answer": "\t\n# milodning VII asr boshlarida \n"
  },
  {
    "question": "\n\t\n Islom dinining muqaddas kitoblari\n",
    "answer": "\t\n# Qur’on, Hadislar\n"
  },
  {
    "question": "\n\t\nIslom dinining asosiy oqimlari\n",
    "answer": "\t\n#sunniylik, shialik, xorijiylik\t\n\n"
  },
  {
    "question": "\n\t\nBuddizmning asosiy oqimlari\n",
    "answer": "\t\n# maxayana, xinayana\n"
  },
  {
    "question": "\n\t\t\nIslom tarixidagi birinchi muqaddas jang\n",
    "answer": "\t\n# Badr g‘azoti\n"
  },
  {
    "question": "\n\t\t\n Qur’onni birinchi bo‘lib kitob shakliga keltirgan shaxs\n",
    "answer": "\n# Umar ibn Xattob\n"
  },
  {
    "question": "\n\nIslom tarixida birinchi ko‘chish «hijrat»\n",
    "answer": "\n# Makkadan Madinaga\n"
  },
  {
    "question": "\n\nTotemizm nima?\n",
    "answer": "\t\n#biron bir hayvonni o‘z ajdodi deb bilish\t\t\n\n"
  },
  {
    "question": "\n\t\nShomanizm nima?\n",
    "answer": "\t\n# tabiat jismlariga sig‘inish\n"
  },
  {
    "question": "\n\t\nZardushtiylikning manbasi\n",
    "answer": "\t\n# Avesto\n"
  },
  {
    "question": "\n\t\t\nO‘rta Osiyoda keng tarqalgan sunniylik oqimi\n",
    "answer": "\t\n# Xanafiya\n"
  },
  {
    "question": "\n\t\nUrug‘-qabila dinlarining o‘ziga xosligi\n",
    "answer": "\t\n#muayyan urug‘-qabilaga mos bo‘lishi va xizmat qilishida\n"
  },
  {
    "question": "\n\t\nRespublikamiz Konstitusiyasidagi vijdon erkinligi nima?\n",
    "answer": "\t\n# fuqarolarning biron bir dinga e’tiqod qilish yoki hech qanday dinga e’tiqod qilmaslikni o‘zlari mustaqil hal qilishlari huquqi\t\n"
  },
  {
    "question": "\n\t\nE’tiqod erkinligi nima bilan kafolatlangan?\n",
    "answer": "\t\n# O‘zbekiston Respublikasi Konstitusiyasi bilan \n"
  },
  {
    "question": "\n\t\nIslom so‘zining ma’nosi?\n",
    "answer": "\t\n# Allohga bo‘ysunmoq, itoat qilmoq\n"
  },
  {
    "question": "\n\t\nIslom qaysi asrda paydo bo‘lgan?\n",
    "answer": "\t\n# VII asrda\n"
  },
  {
    "question": "\n\t\nQur’ondagi birinchi sura?\n",
    "answer": "\t\n# «Alaq»\t\n\n"
  },
  {
    "question": "\n\t\nEng keng tarqalgan jahon dinlari qaysilar?\n",
    "answer": "\t\n#yahudiylik, xristianlik, islom\t\n\n"
  },
  {
    "question": "\n\t\t\nQaysi marosimni diniy marosim deya olamiz?\n",
    "answer": "\t\n# nikoh\n"
  },
  {
    "question": "\n\t\nSufizm ta’limoti asoschilari\n",
    "answer": "\t\n# Gʻazzoliy, Yassaviy, Naqshbandiy, Navoiy va boshqalar \n"
  },
  {
    "question": "\n\t\nIudaizmga kimlar e’tiqod qiladi?\n",
    "answer": "\t\n#Hindular\t\n\n"
  },
  {
    "question": "\n\t\nIslomdagi sunniylik oqimining asosiy mazxab-yo‘nalishlari\n",
    "answer": "\t\n# xanafiy, molikiya, shofi’iylik, xanbaliya\t\n\n"
  },
  {
    "question": "\n\t\nDiniy xodim deganda kimni tushuniladi?\n",
    "answer": "\t\n# imom, pastor, yepiskop \n"
  },
  {
    "question": "\n\t\n«Vijdon erkinligi va diniy tashkilotlar to‘g‘risida»gi qonun qachon qabul qilingan?\n",
    "answer": "\t\n# 1991 yilda\n"
  },
  {
    "question": "\n\t\nO‘zbekiston Respublikasi davlat va din orasidagi munosabatlar.\n",
    "answer": "\t\n# davlat din ishlariga aralashmaydi, ammo vijdon erkinligini himoya qiladi\t\n\n"
  },
  {
    "question": "\n\t\nMillat dinlari\n",
    "answer": "\t\n# yahudiylik, konfusiylik, sintoizm\n"
  },
  {
    "question": "\n\t\nIslom dinida «fiqh» nimani ifoda qiladi?\n",
    "answer": "\t\n# huquqshunoslikni \n"
  },
  {
    "question": "\n\t\nIslomiy madaniyatga xos xususiyatlar\n",
    "answer": "\t\n# e’tiqodlilik, poklik, ezgulik, xalimlik\n"
  },
  {
    "question": "\n\t\nMarkaziy Osiyolik mashhur islom allomalari\n",
    "answer": "\t\n# Buxoriy, Moturudiy, Marg‘inoniy, Termiziy\t\n\n"
  },
  {
    "question": "\n\t\nMarkaziy Osiyoda asosan amalda bo‘lgan islom mazxabi\n",
    "answer": "\t\n# Xanafiylik\n"
  },
  {
    "question": "\n\t\n«Mushafi Usmon»ning asl nusxalaridan biri saqlanayotgan joy qayerda?\n",
    "answer": "\t\n# Toshkent\n"
  },
  {
    "question": "\n\t\nDiniy idoraning Markaziy Osiyodagi bosh lavozimi\n",
    "answer": "\t\n# Muftiy\t\n\n"
  },
  {
    "question": "\n\t\nMuhammad Payg‘ambar necha yoshda vahiy qabul qildilar?\n",
    "answer": "\t\n# 40 yoshda\n\n"
  },
  {
    "question": "\n\t\nQur’onning eng katta surasi?\n",
    "answer": "\t\n#Baqara surasi\n"
  },
  {
    "question": "\n\t\nQur’on qayerda nozil bo‘lgan?\n",
    "answer": "\t\n# Misrda, Makkada\n"
  },
  {
    "question": "\n\t\nO‘zbekistonda islom dini bayramlari qaysi?\n",
    "answer": "\t\n#G. Iyd-al Fitr, Iyd-al Qurbon\t\t\n\n"
  },
  {
    "question": "\n\nTafsir\n",
    "answer": "\n# Qur’on oyatlariga sharx beradi\n"
  },
  {
    "question": "\n\nO‘zbekiston musulmonlari asosan qaysi mazhabda?\n",
    "answer": "\t\n#Abu Xanifa mazxabida\n"
  },
  {
    "question": "\n\t\nTeologiya nima?\n",
    "answer": "\t\n# ilohiyot, xudo to‘g‘risidagi ta’limot \n"
  },
  {
    "question": "\n\t\nDinshunoslik fan sifatida qachon shakllandi?\n",
    "answer": "\n# 19 asr oxiri 20 asr boshlarida\n\n"
  },
  {
    "question": "\n\nFundamentalizm nima?\n",
    "answer": "\n# diniy aqidalarni o‘zgarmas deb e’tiqod qilish\n\n"
  },
  {
    "question": "\n\nQuyidagilardan qaysi din monoteistik dinlar qatoriga kirmaydi?\n",
    "answer": "\n# Xinduizm \n"
  },
  {
    "question": "\n\nDiniy fundamentalizm va ekstremizm tarafdorlarining asosiy maqsadi nima?\n",
    "answer": "\n#Xalifalik davlatini o‘rnatish;\n\n"
  },
  {
    "question": "\n\t\nO‘zbekistonga mustaqillikdan keyin dastlab kirib kelgan qanday diniy harakatlarni bilasiz?\n",
    "answer": "\t\n# «Vahhobiylar» harakati;\n"
  },
  {
    "question": "\n\t\nVijdon erkinligi va diniy tashkilotlar to‘g‘risidagi qonunning yangi taxriri qachon qabul qilingan?\n",
    "answer": "\t\n#2021 yilda;\t\n\n"
  },
  {
    "question": "\n\t\nO‘zbekiston musulmonlari asosan qaysi mazhabda?\n",
    "answer": "\t\n#Abu Hanifa mazhabida;\n"
  },
  {
    "question": "\n\t\n«Xizbut-taxrir al-islomiy» harakati o‘z tarafdorlarini qanday usulda qitadi?\n",
    "answer": "\n# 5-6 kishidan iborat xalqa usulida\nYakka tartibda;\n\n"
  },
  {
    "question": "\n\t\nShialik yo‘nalishidagi mazxablar\n",
    "answer": "\t\n# Ismoiliy, rivofiziy, zaidiy, ja’fariy\n"
  },
  {
    "question": "\n\nO‘zbekistonda davlat va din O‘rtasidagi munosabatlar qanday?\n",
    "answer": "\n# davlat din ishlariga aralashmaydi, vijdon erkinligini himoya qiladi;\n\n"
  },
  {
    "question": "\n\nDiniy ekstremizm va fundamentalizm harakati rahbarlarining dasturlari asosan qaysi yoshdagi kishilarga mo‘ljallangan?\n",
    "answer": "\t\n# 16-30 yoshdagilarga;\n"
  },
  {
    "question": "\n\t\nDiniy ekstremizm nima?\n",
    "answer": "\n# Dinni niqob qilgan holda o‘z maqsadiga erishish uchun kuch ishlatish;\n"
  },
  {
    "question": "\n\nDiniy ekstremizm yo‘lida o‘zini qurbon qilishga olib keluvchi sabab nimada?\n",
    "answer": "\n# hamma javob to‘g‘ri.\n\n"
  },
  {
    "question": "\n\nBuddaviylik falsafasining yo‘nalishlari\n",
    "answer": "\n#mahayana, xinoyana\n"
  },
  {
    "question": "\n\n Hinduizm falsafasining asosini nima tashkil qiladi?\n",
    "answer": "\n# Braxman xudosi\n"
  },
  {
    "question": "\n\nHinduizmdagi ko‘p xudolarning ichida eng muximlari qaysilar?\n",
    "answer": "\n# Braxman\n"
  },
  {
    "question": "\n\nPravoslav falsafasining shakllanish davri\n",
    "answer": "\n# 18 asr\n"
  },
  {
    "question": "\n\t\nProtestant falsafasining asoschilari\n",
    "answer": "\t\n# M.Lyuter\n"
  },
  {
    "question": "\n\t\nKalom falsafasining shakllanish davri\n",
    "answer": "\t\n# 9 asr\n"
  },
  {
    "question": "\n\t\nSufiylik ta’limoti va falsafasining vujudga kelishi.\n",
    "answer": "\t\n# 7 asr\n"
  },
  {
    "question": "\n\t\nMavoraunnaxrda so‘fiylik ta’limotiga xissa qo‘shganlar.\n",
    "answer": "\t\n# Yusuf Xamadoniy, Abulxoliq Gʻijduvoniy, Ahmad \n"
  },
  {
    "question": "\n\t\n Sunniylik yo‘nalishi «Axli sunna va jamoa» ga qaysi mazxablar kiradi?\n",
    "answer": "\t\n# Hanbaliylik Molikiylik Shofiylik Xanafiylik\n"
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