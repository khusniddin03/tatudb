const data = [
  {
    "question": "Arduino NANOda nechta raqamli port mavjud",
    "answer": "14",
    "noAnswer1": "12",
    "noAnswer2": "13",
    "noAnswer3": "18"
  },
  {
    "question": "RGB diodida nechta GND port mavjud",
    "answer": "1",
    "noAnswer1": "3",
    "noAnswer2": "2",
    "noAnswer3": "4"
  },
  {
    "question": "Arduino mega 2560 platformasida nechta analog port mavjud",
    "answer": "16",
    "noAnswer1": "18",
    "noAnswer2": "22",
    "noAnswer3": "20"
  },
  {
    "question": "Arduino mega 2560 platformasida nechta raqamli port mavjud",
    "answer": "54",
    "noAnswer1": "60",
    "noAnswer2": "108",
    "noAnswer3": "48"
  },
  {
    "question": "RGB dioddan foydalanib sariq rang ekranga chiqarish uchun qaysi ranglarga buyruq berishimiz kerak",
    "answer": "qizil va yashil",
    "noAnswer1": "ko'k va qizil",
    "noAnswer2": "yashil va yashil",
    "noAnswer3": "qizil va oq"
  },
  {
    "question": "potensiometrning nechta porti mavjud",
    "answer": "3ta",
    "noAnswer1": "4ta",
    "noAnswer2": "2ta",
    "noAnswer3": "1ta"
  },
  {
    "question": "potensiometr raqamli port bilan ishlaydimi",
    "answer": "raqamlida ham analogdaham ishlaydi",
    "noAnswer1": "ishlamaydi",
    "noAnswer2": "ishlaydi",
    "noAnswer3": "ulab bo'lmaydi"
  },
  {
    "question": "RGB diodda qizil va ko'k ranglarni birlashtrib buyruq berganda qaysi rang yonadi",
    "answer": "qora",
    "noAnswer1": "qizil",
    "noAnswer2": "yashil",
    "noAnswer3": "oq"
  },
  {
    "question": "Masofa modulda nechta asosiy portlar mavjud",
    "answer": "4ta",
    "noAnswer1": "2ta",
    "noAnswer2": "8ta",
    "noAnswer3": "16ta"
  },
  {
    "question": "Buzzer musiqa notasining portlar soni",
    "answer": "2-3tagacha",
    "noAnswer1": "1-4tagacha",
    "noAnswer2": "1-6tagacha",
    "noAnswer3": "2-4tagacha"
  },
  {
    "question": "SABRE real vaqt tizimlari nechanchi yilda American Airlines tomonidan ishlab chiqarilgan?",
    "answer": "1959",
    "noAnswer1": "1956",
    "noAnswer2": "1954",
    "noAnswer3": "1961"
  },
  {
    "question": "Real vaqt tizimlari nechta guruhlarga bo'linadi?",
    "answer": "2",
    "noAnswer1": "5",
    "noAnswer2": "3",
    "noAnswer3": "4"
  },
  {
    "question": "Real vaqt o'rnatilgan tizimi ....",
    "answer": "hodisalarga reaktsiyasi vaqt bilan kafolatlangan hisoblash tizimi",
    "noAnswer1": "o'rnatilgan tizimlar ichidagi hisoblash tizimi",
    "noAnswer2": "bu o'rnatilgan operatsion tizim",
    "noAnswer3": "bu tizimli dasturiy ta'minot"
  },
  {
    "question": "O'rnatilgan tizim va real vaqt tizimi sinonim bo'lishi mumkinmi?",
    "answer": "yo'q",
    "noAnswer1": "ha",
    "noAnswer2": "bazan",
    "noAnswer3": "qisman"
  },
  {
    "question": "Datchiklardan informatsiya olish nechchi turli boladi",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "1"
  },
  {
    "question": "Nima real vaqt tizimlari uchun talab qilinmaydi?",
    "answer": "boshqaruvchi tashkil qiluvchilar",
    "noAnswer1": "protsessor",
    "noAnswer2": "operativ xotira",
    "noAnswer3": "protsessor va operativ xotira"
  },
  {
    "question": "Qaysi biri analog pnevmo signal?",
    "answer": "0.2kgs/sm2-1kgs/sm2",
    "noAnswer1": "0.3kgs/sm2-1kgs/sm2",
    "noAnswer2": "0.2kgs/sm2-3kgs/sm2",
    "noAnswer3": "0.6kgs/sm2-1kgs/sm2"
  },
  {
    "question": "Real vaqt operatsion tizimini tanlash mezonlari nechta?",
    "answer": "7",
    "noAnswer1": "8",
    "noAnswer2": "6",
    "noAnswer3": "4"
  },
  {
    "question": "E-154 qurilmasining maksimal chastotasini qancha",
    "answer": "120 K Hz",
    "noAnswer1": "110 K Hz",
    "noAnswer2": "125 M Hz",
    "noAnswer3": "120 M Hz"
  },
  {
    "question": "E-14-440 qurilmasining maksimal chastotasini qancha",
    "answer": "400 K Hz",
    "noAnswer1": "400 M Hz",
    "noAnswer2": "350 K Hz",
    "noAnswer3": "350 M Hz"
  },
  {
    "question": "Arduino UNO qaysi kontroller yordamida yaratilgan",
    "answer": "Atmega 328",
    "noAnswer1": "Atmega 628",
    "noAnswer2": "Atmega 968",
    "noAnswer3": "Atmega 324"
  },
  {
    "question": "Bluetooth qaysi standartda ishlaydi",
    "answer": "IEEE 802.15.1",
    "noAnswer1": "IEEE 802.13x",
    "noAnswer2": "IEEE 802.15x",
    "noAnswer3": "IEEE 802.11x"
  },
  {
    "question": "Birinchi tijorat avtamatlashtirilgan uyali tarmog'I qayerda joriy etilgan",
    "answer": "Tokiyo metropalitinida",
    "noAnswer1": "koreya  metropalitinida",
    "noAnswer2": "Uzbekistonda",
    "noAnswer3": "AQSH da"
  },
  {
    "question": "Arduino UNO MK orali USB orqali necha voltgacha kuchlanish berish mumkun",
    "answer": "5",
    "noAnswer1": "8",
    "noAnswer2": "7",
    "noAnswer3": "12"
  },
  {
    "question": "..professional boʻlmagan robototexnika ishqibozlari (foydalanuvchilar) uchun dasturiy va texnik taminotlar yigʻindisi.",
    "answer": "Arduino",
    "noAnswer1": "Plata",
    "noAnswer2": "Dastur",
    "noAnswer3": "Kitob"
  },
  {
    "question": "Ana'viy ravishda mikrokontrollarni necha guruhga bo'lish mumkin.",
    "answer": "3",
    "noAnswer1": "8",
    "noAnswer2": "5",
    "noAnswer3": "4"
  },
  {
    "question": "Arduino ning Uno elektr qabul qilshi ko'rsatkichlari",
    "answer": "7-12;6-20",
    "noAnswer1": "5-4;12-24",
    "noAnswer2": "5-8;25-50",
    "noAnswer3": "2-4;3-6"
  },
  {
    "question": "Adruino RGB led nechta led kristallardan iborat",
    "answer": "3",
    "noAnswer1": "2",
    "noAnswer2": "1",
    "noAnswer3": "6"
  },
  {
    "question": "\"Tizim\" tushunchasi nechanchi asrda kashf etildi.",
    "answer": "XIX – asrda",
    "noAnswer1": "XX – asrda",
    "noAnswer2": "IX – asrda",
    "noAnswer3": "XI – asrda"
  },
  {
    "question": "RGB led tasmasi nechta chiqishdan iborat",
    "answer": "4",
    "noAnswer1": "2",
    "noAnswer2": "3",
    "noAnswer3": "6"
  },
  {
    "question": "Birinchi arduino nechanchi yil ishlab chqarilgan",
    "answer": "2005",
    "noAnswer1": "2004",
    "noAnswer2": "2006",
    "noAnswer3": "1996"
  },
  {
    "question": "Arduino NANO ning Ishlash chastatasi",
    "answer": "16 Mg",
    "noAnswer1": "10 Mg",
    "noAnswer2": "164 Mg",
    "noAnswer3": "66 Mg"
  },
  {
    "question": "Ardunio UNUning ishlash kuchlanishi qanchaga teng?",
    "answer": "5 v",
    "noAnswer1": "4 v",
    "noAnswer2": "2 v",
    "noAnswer3": "7 v"
  },
  {
    "question": "RVOT bu o'zi nima?",
    "answer": "Real vaqtdagi  operatsion tizim",
    "noAnswer1": "Real vositali operatsion tizim",
    "noAnswer2": "Rejali vaqtdagi  operatsion tizim",
    "noAnswer3": "Rejalashtirilmagan vaqtdagi  operatsion tizim"
  },
  {
    "question": "Fotoresistor nima?",
    "answer": "Yorugʻlik sezuvchi qarshilik",
    "noAnswer1": "Oddiy qarshilik",
    "noAnswer2": "Termo qarshilik",
    "noAnswer3": "Gaz sezuvchi modul"
  },
  {
    "question": "Birlamchi Xotirani rivojlanishiga alohida  hissa qo'shgan IBM kompaniyasi hodimi kim",
    "answer": "Robert Dennard",
    "noAnswer1": "Stiw Jops",
    "noAnswer2": "Ilon Mask",
    "noAnswer3": "Bill Geyst"
  },
  {
    "question": "2G - Ikkinch avlod texnologiyasi nechinchi yildan Radiolinjaga tomonidan Finlyandiyada GSM standarti boʻlib ishga tushdi.",
    "answer": "1991-yildan",
    "noAnswer1": "1999-yildan",
    "noAnswer2": "1981-yildan",
    "noAnswer3": "1971-yildan"
  },
  {
    "question": "Parallel tizimlarni sinflar soni",
    "answer": "5",
    "noAnswer1": "2",
    "noAnswer2": "4",
    "noAnswer3": "6"
  },
  {
    "question": "SMP - bu …....",
    "answer": "nosimmetrik ko’p protsessorli arxitektura.",
    "noAnswer1": "nosimmetrik kam protsessorli arxitektura.",
    "noAnswer2": "nosimmetrik ko’p modelli arxitektura.",
    "noAnswer3": "simmetrik ko’p protsessorli arxitektura."
  },
  {
    "question": "Intel protsessorlari (IBM, HP, Compaq, Dell, ALR, Unisys, DG, Fujitsu va boshqalar) bu tizmlar qanday tizim",
    "answer": "SMP",
    "noAnswer1": "DMP",
    "noAnswer2": "AVM",
    "noAnswer3": "THT"
  },
  {
    "question": "...... bu (Parallel vektor jarayoni) vektor jarayonlari bilan parallel arxitektura hisoblanadi.",
    "answer": "PVP",
    "noAnswer1": "SMP",
    "noAnswer2": "AVP",
    "noAnswer3": "THT"
  },
  {
    "question": "Ommaviy parallellik tizimlari bu …....",
    "answer": "MPP",
    "noAnswer1": "PPM",
    "noAnswer2": "YHY",
    "noAnswer3": "SSP"
  },
  {
    "question": "SSD yoyilmasini toping?",
    "answer": "Solid state driver",
    "noAnswer1": "Solid gtate driver",
    "noAnswer2": "Solid state priver",
    "noAnswer3": "Holid state driver"
  },
  {
    "question": "Vazifasi quvvatni uzish yoki ulashdan iborat bo'lgan qurilma nima",
    "answer": "BUTTON",
    "noAnswer1": "BATTEN",
    "noAnswer2": "BETTIN",
    "noAnswer3": "SWICH"
  },
  {
    "question": "O'rnatilgan tizimlarni loyihalash modellari qaysi?",
    "answer": "Sharsharali,\r\nspirall",
    "noAnswer1": "Sharsharali,",
    "noAnswer2": "spiral",
    "noAnswer3": "Sharsharali,\r\nspiralel"
  },
  {
    "question": "Arduino IDE muhitida asosan qaysi dasturlash tilida dastur yoziladi",
    "answer": "C++",
    "noAnswer1": "C#",
    "noAnswer2": "python",
    "noAnswer3": "Java"
  },
  {
    "question": "Arduino nima?",
    "answer": "Ochiq kodli elektron platforma",
    "noAnswer1": "Matn muharriri",
    "noAnswer2": "Dasturlash tili",
    "noAnswer3": "Rasmni tahrirlash dasturi"
  },
  {
    "question": "Arduino IDE qaysi tilda qurilgan?",
    "answer": "Java",
    "noAnswer1": "HTML",
    "noAnswer2": "C/C++",
    "noAnswer3": "Python"
  },
  {
    "question": "Arduino Mega platasida nechta analog pin ishlatiladi?",
    "answer": "16",
    "noAnswer1": "12",
    "noAnswer2": "14",
    "noAnswer3": "18"
  },
  {
    "question": "Arduino IDE 2 ta funksiyadan iborat. Ular nima?",
    "answer": "Setup() va loop()",
    "noAnswer1": "Loop() va build() va setup()",
    "noAnswer2": "Build() va loop()",
    "noAnswer3": "Setup() va build()"
  },
  {
    "question": "Arduino kodlari Arduino IDE da ________ deb ataladi.",
    "answer": "eskizlar",
    "noAnswer1": "chizmalar",
    "noAnswer2": "havolalar",
    "noAnswer3": "eslatmalar"
  },
  {
    "question": "Arduino UNO ning standart yuklovchisi nima?",
    "answer": "Optiboot bootloader",
    "noAnswer1": "GAG",
    "noAnswer2": "AIR-boot",
    "noAnswer3": "Yalang'och quti"
  },
  {
    "question": "Arduino kodini to'g'ri bajarish jarayoni qanday?",
    "answer": "Editor->Preprocessor->Compiler",
    "noAnswer1": "Preprocessor->Redaktor->Compiler",
    "noAnswer2": "Compiler->Preprocessor->Redaktor",
    "noAnswer3": "Muharrir->Kompilyator->Preprocesso"
  },
  {
    "question": "Arduino UNO da ishlatiladigan mikrokontroller nima?",
    "answer": "ATmega328p",
    "noAnswer1": "ATmega325p",
    "noAnswer2": "ATmega228p",
    "noAnswer3": "ATmega928p"
  },
  {
    "question": "ESP8266 WiFi moduli nima uchun ishlatiladi?",
    "answer": "Tarmoq provayderi",
    "noAnswer1": "Sxemalarni almashtiradi",
    "noAnswer2": "Havo bosimini baholaydi",
    "noAnswer3": "Harakatni kuzatadi"
  },
  {
    "question": "O'rnatilgan tizimlarda uzilish nima deb ataladi",
    "answer": "Uzilish bu protsessorga hodisani sodir bo'lishi to'g'risidagi habar beruvchi signallardir",
    "noAnswer1": "Uzilish bu plataga hodisani sodir bo'lishi to'g'risidagi habar beruvchi signallardir",
    "noAnswer2": "Uzilish bu dasturga hodisani sodir bo'lishi to'g'risidagi habar beruvchi signallardir",
    "noAnswer3": "Uzilish bu klassga hodisani sodir bo'lishi to'g'risidagi habar beruvchi signallardir"
  },
  {
    "question": "Rele nima?",
    "answer": "Elektr zanjirlarni bir biriga ulash imkonini beruvchi shlyuz",
    "noAnswer1": "Elektr dasturlarni bir biriga ulash imkonini beruvchi shlyuz",
    "noAnswer2": "Elektr zanjirlarni bir biriga ulash imkonini bermaydigan shlyuz",
    "noAnswer3": "Elektr zanjirlarni bir biriga ulash imkonini beruvchi odam"
  },
  {
    "question": "Buzzer prinspi nechanchi asr oxirida aka-uka Kyuriy tomonidan o'ylab topilgan",
    "answer": "19 asr oxiri",
    "noAnswer1": "22 asr oxiri",
    "noAnswer2": "15 asr oxiri",
    "noAnswer3": "20 asr oxiri"
  },
  {
    "question": "SMP nima?",
    "answer": "bu no simmetrik ko'p protsessorli arxitktura",
    "noAnswer1": "bu no simmetrik oz protsessorli arxitktura",
    "noAnswer2": "bu no simmetrik katta protsessorli arxitktura",
    "noAnswer3": "bu aniq simmetrik ko'p protsessorli uyg'un"
  },
  {
    "question": "WIFI modulini toping?",
    "answer": "ESP32",
    "noAnswer1": "ASP89",
    "noAnswer2": "DSA96",
    "noAnswer3": "ESP8866"
  },
  {
    "question": "Mikrokonrollerni dasturlash odatda qaysi tilda amalga oshiriladi",
    "answer": "Assimblerr/C",
    "noAnswer1": "Assimblerr/\r\npyton",
    "noAnswer2": "Assimblerr/\r\nJava",
    "noAnswer3": "Assics /C"
  },
  {
    "question": "68HC12 va HCS12 bu -",
    "answer": "Mikrokontrollerlar",
    "noAnswer1": "Modullar",
    "noAnswer2": "Platformalar",
    "noAnswer3": "Tizimlar"
  },
  {
    "question": "mikrokontroller ichida joylashgan Registr qanday vazifani bajaradi",
    "answer": "ma'lumot saqlaydi",
    "noAnswer1": "ma'lumot o'chiradi",
    "noAnswer2": "ma'lumotlarni qo'shadi",
    "noAnswer3": "ma'lumotlarni tashiydi"
  },
  {
    "question": "Elektromagnit kalitlarni kim o'ylab topgan",
    "answer": "Jozes Gemrix",
    "noAnswer1": "All Sodiq",
    "noAnswer2": "Jorj pastin",
    "noAnswer3": "Kelli Makalistr"
  },
  {
    "question": "Potensiometr nechta pinga ega",
    "answer": "03.апр",
    "noAnswer1": "04.фев",
    "noAnswer2": "05.апр",
    "noAnswer3": "окт.25"
  },
  {
    "question": "Arduino UNO ning Anaog kirish portlari nechta",
    "answer": "6",
    "noAnswer1": "4",
    "noAnswer2": "8",
    "noAnswer3": "5"
  },
  {
    "question": "Arduino turlari nechta",
    "answer": "70 dan ortiq",
    "noAnswer1": "50 dan ortiq",
    "noAnswer2": "60 dan ortiq",
    "noAnswer3": "72 dan ortiq"
  },
  {
    "question": "Arduino meganing nechta raqamli pini mavjud",
    "answer": "54",
    "noAnswer1": "52",
    "noAnswer2": "51",
    "noAnswer3": "56"
  },
  {
    "question": "Arduino nima?",
    "answer": "Qurilma",
    "noAnswer1": "Dastur",
    "noAnswer2": "Asbob",
    "noAnswer3": "O'lchov vositasi"
  },
  {
    "question": "Ultrasonik sensorlar nima maqsadda   foydalaniladi.",
    "answer": "oddiy masofa olchash",
    "noAnswer1": "joylashuvni aniqlash",
    "noAnswer2": "malumotlarini Arduinoga otkazish",
    "noAnswer3": "Chuqurlikni aniqlash"
  },
  {
    "question": "Arduino bu ……… (tarif) .",
    "answer": "har kimga turli xil elektromexanik qurilmalarni yaratishga imkon beradigan elektron qurilma.",
    "noAnswer1": "Electron asbob",
    "noAnswer2": "Elektromexanik diod",
    "noAnswer3": "turli xil mexanik"
  },
  {
    "question": "Arduino nimalardan iborat",
    "answer": "dasturiy va texnik vositalardan",
    "noAnswer1": "Qurilmalardan",
    "noAnswer2": "Registorlardan",
    "noAnswer3": "tranzistorlardan"
  },
  {
    "question": "Arduino turlari to’g’ri keltirilgan qatorni aniqlang",
    "answer": "Arduino mega Arduino unoб Arduino nano",
    "noAnswer1": "Arduino mega Arduino uno",
    "noAnswer2": "Arduino uno, Arduino nano",
    "noAnswer3": "Arduino mega,Arduino uno,Arduino nanoArduino sega"
  },
  {
    "question": "Arduino yordamida qanday ko’nikmalarga ega bo’lamiz.",
    "answer": "`Dasturlash, elektrotexnika va mexanika",
    "noAnswer1": "Dasturlash, elektrotexnika",
    "noAnswer2": "Elektrotexnika va mexanika",
    "noAnswer3": "Dasturlash va fizik qurilmalar."
  },
  {
    "question": "Arduino uno ning nechta raqamli porti mavjud",
    "answer": "13",
    "noAnswer1": "12",
    "noAnswer2": "15",
    "noAnswer3": "7"
  },
  {
    "question": "Arduino mega ning nechta raqamli porti mavjud",
    "answer": "50",
    "noAnswer1": "24",
    "noAnswer2": "12",
    "noAnswer3": "28"
  },
  {
    "question": "Arduino uno ning nechta analog porti mavjud",
    "answer": "6",
    "noAnswer1": "5",
    "noAnswer2": "4",
    "noAnswer3": "2"
  },
  {
    "question": "Arduino NANO nechta analog port mavjud",
    "answer": "8",
    "noAnswer1": "6",
    "noAnswer2": "12",
    "noAnswer3": "14"
  },
  {
    "question": "Fotorezistor bu …..(tarif)",
    "answer": "Yoruqlikni darajasini o’lchaydi.",
    "noAnswer1": "Issiqlik darajasini o’lchaydi",
    "noAnswer2": "Namlikni darajasini o’lchaydi",
    "noAnswer3": "Tovushni o’lchaydi"
  },
  {
    "question": "Arduino mikrokontrollerlari qanday qiymatdagi tok kuchi bilan ishlay oladi",
    "answer": "38353",
    "noAnswer1": "44682",
    "noAnswer2": "44900",
    "noAnswer3": "45444"
  },
  {
    "question": "Arduino mikrokontrollerlari qanday qiymatdagi tok kuchlanishi bilan ishlay oladi `",
    "answer": "44900",
    "noAnswer1": "41821",
    "noAnswer2": "16-32",
    "noAnswer3": "44593"
  },
  {
    "question": "Arduinodan qanday qiymatdagi tok kuchlanishiga ega tokni olishimiz mumkun",
    "answer": "38414",
    "noAnswer1": "44684",
    "noAnswer2": "44840",
    "noAnswer3": "38385"
  },
  {
    "question": "Arduino IDE bu……..(tarif)",
    "answer": "Dasturlash muhiti",
    "noAnswer1": "Maydon",
    "noAnswer2": "Qurilmalar jamlamasi",
    "noAnswer3": "Diodlar yig’indisi"
  },
  {
    "question": "Arduino IDE dasturlash muhitida Arduino bilan kompyuterni bog’langan ekanligini teksgirish uchun  ketmaketlik",
    "answer": "Menyular satri Instrumenti menyusi Port",
    "noAnswer1": "Cketch menyusi Port",
    "noAnswer2": "Menyular satri Port",
    "noAnswer3": "Fayl menyusi Port"
  },
  {
    "question": "Elektr loyihalarida ishlatiladigan eng keng tarqalgan elektron komponentlardan biri bu ?",
    "answer": "LED",
    "noAnswer1": "ARDUINO",
    "noAnswer2": "HP 1001",
    "noAnswer3": "DH-11"
  },
  {
    "question": "GND qanday port",
    "answer": "Manfiy",
    "noAnswer1": "Musbat",
    "noAnswer2": "Analog",
    "noAnswer3": "Raqamli"
  },
  {
    "question": "VSS qanday port",
    "answer": "Musbat",
    "noAnswer1": "Manfiy",
    "noAnswer2": "Raqamli",
    "noAnswer3": "Analog"
  },
  {
    "question": "Rezistor bu ……..(tarif)",
    "answer": "Qarshilik",
    "noAnswer1": "Diod",
    "noAnswer2": "Xotira qurilmasi",
    "noAnswer3": "Qurilma"
  },
  {
    "question": "…………- bu butunlay boshqa parametrlarga ega bo‘lgan elektr zanjirlarini bir -biriga ulash imkonini beruvchi shlyuz",
    "answer": "Rele",
    "noAnswer1": "Registr",
    "noAnswer2": "Releport",
    "noAnswer3": "Ralifet"
  },
  {
    "question": "HC-SR04 Masofa modul necha metrgacha masofani aniqlay oladi",
    "answer": "3",
    "noAnswer1": "5",
    "noAnswer2": "8",
    "noAnswer3": "10"
  },
  {
    "question": "Fotorezistor yorug’lik moduli o’lchov birligi",
    "answer": "Luks",
    "noAnswer1": "Metr",
    "noAnswer2": "Kg",
    "noAnswer3": "bayt"
  },
  {
    "question": "Tarmoqli aloqa protokollari nima bilan ifodalanadi?",
    "answer": "IP",
    "noAnswer1": "MC",
    "noAnswer2": "MCU",
    "noAnswer3": "ILS"
  },
  {
    "question": "Tarmoqdagi qurilmalarning manzillarini kuzatib boorish qaysi protocol bajaradi",
    "answer": "IP",
    "noAnswer1": "MS IP",
    "noAnswer2": "MP IP",
    "noAnswer3": "ILST"
  },
  {
    "question": "WiFi qaysi standartda ishlaydi",
    "answer": "IEEE 802.11x",
    "noAnswer1": "IEEE 802.13x",
    "noAnswer2": "IEEE 802.15x",
    "noAnswer3": "IEEE 802.16x"
  },
  {
    "question": "REV qanday buyruq",
    "answer": "loyqa o‘zgaruvchan ishlov berish buyrug'i",
    "noAnswer1": "loyqa o‘zgarmas ishlov berish buyrug'i",
    "noAnswer2": "loyqa og’ir ishlov berish buyrug'i",
    "noAnswer3": "yengil ishlov berish buyrug'i"
  },
  {
    "question": "Real qurilmada, manzillar shinasining nechta satrdan ko‘prog'i dekodlanishi kerak.",
    "answer": "4 ta",
    "noAnswer1": "65356 ta",
    "noAnswer2": "25 ta",
    "noAnswer3": "10 ta"
  },
  {
    "question": "real vaqt o'rnatilgan tizimi -bu …",
    "answer": "hodisalarga reaktsiyasi vaqt bilan kafolatlangan hisoblash tizimi.",
    "noAnswer1": "o'rnatilgan tizimlar ichidagi hisoblash tizimi",
    "noAnswer2": "bu o'rnatilgan operatsion tizim",
    "noAnswer3": "bu tizimli dasturiy ta'minot"
  },
  {
    "question": "real vaqt tizimlari necha guruhi mavjud?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "to'g'ri ko'rsatilgan real vaqt tizimlarini toping.",
    "answer": "yumshoq(qat'iy bo'lmagan) real vaqt tizimlari, qattiq(qat'iy) real vaqt tizimlari",
    "noAnswer1": "qattiq real vaqt tizimlari, qat'iy real vaqt tizimlari",
    "noAnswer2": "yumshoq real vaqt tizimlari, mustaqil real vaqt tizimlari",
    "noAnswer3": "mustaqil real vaqt tizimlari, mustaqil bo'lmagan real vaqt tizimlar"
  },
  {
    "question": "\"real vaqt tizimi ishi maqsadi munosabatiga ko'ra real vaqt talablariga rioya etish katastrofik xisoblanmaydi\" izoh qaysi real vaqt tizimlari haqida borayapti?",
    "answer": "yumshoq(qat'iy bo'lmagan) real vaqt tizimlari",
    "noAnswer1": "qattiq real vaqt tizimlari",
    "noAnswer2": "mustahkam real vaqt tizimlari",
    "noAnswer3": "mustaqil real vaqt tizimlari"
  },
  {
    "question": "\"real vaqt talablariga rioya etmaslik tizim maqsadli funktsiyasini bajarilmasligiga olib keladi\" quyidagi izoh qaysi real vaqt tizimlari haqida borayapti?",
    "answer": "qattiq(qat'iy) real vaqt tizimlari",
    "noAnswer1": "yumshoq real vaqt tizimlari",
    "noAnswer2": "mustaqil real vaqt tizimlari",
    "noAnswer3": "mustahkam real vaqt tizimlari"
  },
  {
    "question": "RVOT bu o'zi nima?",
    "answer": "Real vaqtdagi  operatsion tizim",
    "noAnswer1": "Real vositali operatsion tizim",
    "noAnswer2": "Rejali vaqtdagi  operatsion tizim",
    "noAnswer3": "Rejalashtirilmagan vaqtdagi  operatsion tizim"
  },
  {
    "question": "Fotoqarshilik(fotorezistor)ni 3 kontaktligini arduinoning analog portga ulasa bo'ladimi.",
    "answer": "Ulasa bo'lmaydi",
    "noAnswer1": "ulasa bo'ladi",
    "noAnswer2": "ulasa bo'ladi ammo kuyadi",
    "noAnswer3": "qiymat ko'rsatmaydi"
  },
  {
    "question": "Arduino UNOda nechta raqamli port mavjud",
    "answer": "14",
    "noAnswer1": "15",
    "noAnswer2": "13",
    "noAnswer3": "28"
  },
  {
    "question": "Arduino UNOda nechta analog port mavjud",
    "answer": "6",
    "noAnswer1": "4",
    "noAnswer2": "8",
    "noAnswer3": "4"
  },
  {
    "question": "Axborot-boshqaruv tizimiga kiruvchi axborot nima orqali yetkaziladi?",
    "answer": "datchik",
    "noAnswer1": "protsessor",
    "noAnswer2": "xotira",
    "noAnswer3": "operativ xotira"
  },
  {
    "question": "Quyidagilardan qaysi biri real vaqt tizimida ishlaydi?",
    "answer": "Aviabiletlarni rezerv qilish tizimlari",
    "noAnswer1": "Smartfonlar",
    "noAnswer2": "Mobil xisoblash tizimlari",
    "noAnswer3": "Barcha xisoblash tizimlari"
  },
  {
    "question": "\"Real vaqt tizimi ishi maqsadi munosabatiga ko’ra real vaqt talablariga rioya etish katastrofik xisoblanmaydi\" so’z qaysi real vaqt tizimlari haqida borayapti?",
    "answer": "yumshoq(qat’iy bo’lmagan) real vaqt tizimlari",
    "noAnswer1": "qattiq real vaqt tizimlari",
    "noAnswer2": "mustahkam real vaqt tizimlari",
    "noAnswer3": "mustaqil real vaqt tizimlari"
  },
  {
    "question": "Real vaqt talablariga rioya etmaslik tizim maqsadli funktsiyasini bajarilmasligiga olib keladi so’z qaysi real vaqt tizimlari haqida borayapti?",
    "answer": "qattiq(qat’iy) real vaqt tizimlari",
    "noAnswer1": "yumshoq real vaqt tizimlari",
    "noAnswer2": "mustaqil real vaqt tizimlari",
    "noAnswer3": "mustahkam real vaqt tizimlari"
  },
  {
    "question": "To’g’ri ko’rsatilgan real vaqt tizimlarini ko’rsating.",
    "answer": "yumshoq(qat’iy bo’lmagan) real vaqt tizimlari, qattiq(qat’iy) real vaqt tizimlari",
    "noAnswer1": "qattiq real vaqt tizimlari, qat’iy real vaqt tizimlari",
    "noAnswer2": "yumshoq real vaqt tizimlari, mustaqil real vaqt tizimlari",
    "noAnswer3": "mustaqil real vaqt tizimlari, mustaqil bo’lmagan real vaqt tizimlar"
  },
  {
    "question": "Operatsion tizim bu-",
    "answer": "programmalar toplami",
    "noAnswer1": "operativ dastur",
    "noAnswer2": "operatsion tizim",
    "noAnswer3": "programma qismi"
  },
  {
    "question": "Operatsion tizimning asosini nima tashkil etadi?",
    "answer": "yadrosi",
    "noAnswer1": "programmasi",
    "noAnswer2": "dastur",
    "noAnswer3": "dasturlar jamlanmasi"
  },
  {
    "question": "Jaraѐnlarni boshqarish tizimlarida asosan …….. operatsion tizimlar qo‘llanilishiga xarakat qilinadi.",
    "answer": "real vaqt tizimlari",
    "noAnswer1": "jarayonlar",
    "noAnswer2": "qurilmalar",
    "noAnswer3": "dasturlar toplami"
  },
  {
    "question": "Bir vaqtda bajariluvchi jarayonlar necha turga bolinadi?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "5",
    "noAnswer3": "4"
  },
  {
    "question": "VxWorks,  pSOS,   OS9/OS9000,  LinxOS,   QNX,   VRTX,   RMX,   pDOS,\r\n\r\nVMEexec operatsion tizimlari ………… operatsion tizimi xisoblanadi.",
    "answer": "real vaqt tizimlari",
    "noAnswer1": "aniq tizimli",
    "noAnswer2": "jarayonli",
    "noAnswer3": "TJY"
  },
  {
    "question": "Tarmoq eresurslaridan foydalanish qanday amalga oshiriladi?",
    "answer": "Lokal va tarmoqli",
    "noAnswer1": "global",
    "noAnswer2": "lokal",
    "noAnswer3": "tarmoqli"
  },
  {
    "question": "Operatsion tizimlari asosiy funksiyalari berilgan to'g'ri javobni toping.",
    "answer": "Programmalarni operativ xotiraga yuklash va bajarishga berish",
    "noAnswer1": "Instrumental paktlar",
    "noAnswer2": "Bajaruvchi programma taʼminoti",
    "noAnswer3": "TJY"
  },
  {
    "question": "Kena tarqalgan komyuter tarmoqlari ifodalangan togri javobni toping ?",
    "answer": "server, local set, klient",
    "noAnswer1": "server, klient",
    "noAnswer2": "klient, local set",
    "noAnswer3": "server, klient, local set, boshqaruvchi"
  },
  {
    "question": "Axborot-boshqaruv tizimi nima?",
    "answer": "odatda boshqaruv ob’ekti deb nomlanuvchi ba’zi bir real ob’ektlarni boshqaruv yoki nazorat raqamli tizimidir",
    "noAnswer1": "tizimga ruxsatni boshqaruvchi raqamli tizimdir",
    "noAnswer2": "ba’zi bir real ob’ektlar holatini boshqarish va nazorat qilish jarayon",
    "noAnswer3": "ba’zi bir real ob’ektlarni xotira holatini boshqaruv va nazorat raqamli tizimidir"
  },
  {
    "question": "Tizimiy shina nechchi turga bolinadi?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "8"
  },
  {
    "question": "Axborot-boshqaruv tizmlarini qurishning nechta varianti bor?",
    "answer": "2",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "6"
  },
  {
    "question": "Dekard koordinatalari sistemasidap  xarakatlanuvchi robotlar quyida keltirilgan kategoriyalarni qaysi biriga kiradi?",
    "answer": "ular 3 ta yoʻnalishda ilgarlanma xarakatlanadi",
    "noAnswer1": "bitta aylanma yoʻnalishda xarakatlanadi",
    "noAnswer2": "ular bitta ilgarlanma va ikkita aylanma yoʻnalishda xarakatlanadi",
    "noAnswer3": "улар учта айланма йўналишда харакатланади"
  },
  {
    "question": "Ishlab chiqarishni texnologik  tizimlarida keng qoʻllanuvchi, sodda, qaytariluvchi operatsiyalarni bajarishga moʻljallangan robotlar?",
    "answer": "Programmalanuvchi robotlar",
    "noAnswer1": "unaqa robot yo'q",
    "noAnswer2": "Adabtiv robotlar",
    "noAnswer3": "oddiy robotlar"
  },
  {
    "question": "Inson masofadan robotga komanda berib turadidogan robotlar",
    "answer": "Komandali robotlar",
    "noAnswer1": "yarim avtomatik robotlar",
    "noAnswer2": "obraz olovchi robotlar",
    "noAnswer3": "oddiy robotlar"
  },
  {
    "question": "xarakat ketma kettligi davomida inson bilan tekstli ѐki boshqa koʻrinishda muloqatga kiradigan robotlar",
    "answer": "Dialogli robotlar",
    "noAnswer1": "komandali",
    "noAnswer2": "yarom avtomatik",
    "noAnswer3": "oddiy robotlar"
  },
  {
    "question": "..........  - loyixani ishchi stansiyasi monitori ekranida grafika koʻrinishida ifodalash uchun xizmat qiladi",
    "answer": "Maʼlumotlarni ifodalash redaktori",
    "noAnswer1": "texnalogik jarayonlar",
    "noAnswer2": "shablonlar direktori",
    "noAnswer3": "bajaruvchi direktori"
  },
  {
    "question": ".........-  loyihada xisobot formalarini tashkil etish uchun xizmat kiladi",
    "answer": "Shablonlar redaktori",
    "noAnswer1": "Malumotlarni ifodalash",
    "noAnswer2": "Yozuvchi redaktori",
    "noAnswer3": "bajaruvchi"
  },
  {
    "question": "...... - bu programma MRV ga koʻshimcha ravishda avtomatlashtirilgan sistema loyixasida TREYS MOUD orkali programmalanuvchi kontrollerlar ishtrok etganda qoʻllaniladi",
    "answer": "NetLink MPB",
    "noAnswer1": "Adaptive Kontrol MPB",
    "noAnswer2": "MRV Modem+",
    "noAnswer3": "Double Force MPB"
  },
  {
    "question": "..... - qoʻshimcha ravishda kommutatsiyalangan tarmoqlar orkali maʼlumot almashuvini taminlaydi.",
    "answer": "МРВ Модем+",
    "noAnswer1": "Double Force MPB",
    "noAnswer2": "Double Force NetLink MPB",
    "noAnswer3": "NetLink Light"
  },
  {
    "question": "... - programma bitta MRV programmasi oʻrnatilgan ishchi stansiyaga texnologik jaraѐnning borishini kuzatishni bir nechta qoʻshimcha ishchi stansiyalar ѐrdamida kuzatish imkonini beradi",
    "answer": "NetLink Light",
    "noAnswer1": "Double Force NetLink MPB",
    "noAnswer2": "МРВ Модем+",
    "noAnswer3": "Double Force MPB"
  },
  {
    "question": ".. - programma MRV ga qoʻshimcha ravishda adaptatsiyalangan boshqaruvchi biblioteka programmalarini oʻz ichiga oladi",
    "answer": "Адаптиве Контрол MPB",
    "noAnswer1": "NetLink MPB",
    "noAnswer2": "Реал вақт монитори (МРВ)",
    "noAnswer3": "Hammasi javob to'g'ri"
  },
  {
    "question": "Ballistik raketalar qanday real-vaqt tizimiga misol bo'ladi",
    "answer": "qattiq(qat’iy) real vaqt tizimlari",
    "noAnswer1": "yumshoq real vaqt tizimlari",
    "noAnswer2": "murakkab real-vaqt tizimi",
    "noAnswer3": "sodda real-vaqt tizimi"
  },
  {
    "question": "MS-DOS  ning birinchi rusumi NECHANCHI YILDA CHIQGAN?",
    "answer": "1981",
    "noAnswer1": "1980",
    "noAnswer2": "1990",
    "noAnswer3": "1986"
  },
  {
    "question": "Linux ilk bor 1991yili kim tomonidan chiqarilgan?",
    "answer": "LiniusTorvalds",
    "noAnswer1": "LiniusAdvard",
    "noAnswer2": "Linus",
    "noAnswer3": "LinuXrey"
  },
  {
    "question": "Windows XP operatsion (amaliy) tizimi Microsoft korporatsiyasi tomonidan  nechanchi  yilda  taqdim  qilingan?",
    "answer": "2001",
    "noAnswer1": "2000",
    "noAnswer2": "1990",
    "noAnswer3": "2002"
  },
  {
    "question": "Domen kontrollerlari nma?",
    "answer": "kompyuter tarmoqlarini domenlarini nazorat qilish qurilmasi",
    "noAnswer1": "serverlarni boshqarish nazorati",
    "noAnswer2": "server foydalanuvchilarini domenlarini nazorat qiladi",
    "noAnswer3": "togri javob yoq"
  },
  {
    "question": "Ishlab chiqarish kontrollerlari vazifasi",
    "answer": "boshqarish qurilmasi",
    "noAnswer1": "ishlab chiqish",
    "noAnswer2": "nazorat qilish",
    "noAnswer3": "malumotlarni tozalash"
  },
  {
    "question": "Qaysi real vaqt ilovalari sanoat ilovalariga tegishli:",
    "answer": "kimyoviy zavodlarni boshqarish tizimlari",
    "noAnswer1": "kompyuterli tomografiya",
    "noAnswer2": "lazerli printerlar",
    "noAnswer3": "havo harakatini boshqarish tizimlari"
  },
  {
    "question": "Real vaqtda vazifalar uchun odatiy vaqt oralig`i qanday?",
    "answer": "bir necha daqiqadan bir necha soat yoki kungacha",
    "noAnswer1": "bir soniyadan bir necha soniyagacha",
    "noAnswer2": "bir necha millisekunddan bir necha yuz millisekundgacha",
    "noAnswer3": "bir necha mikrosekunddan bir necha millisekundgacha"
  },
  {
    "question": "Real vaqt tizimi bu–",
    "answer": "xodisaga garantiyalangan ta’sirlanish vaqtli xisoblash tizimi.",
    "noAnswer1": "garantiyalangan ta’sirlanish vaqtli xisoblash tizimi.",
    "noAnswer2": "xodisaga garantiyalangan ta’sirlanish vaqtli xisoblash",
    "noAnswer3": "xodisaga ta’sirlanish vaqtli xisoblash tizimi."
  },
  {
    "question": "Qaysi real vaqt ilovalari telekommunikatsiya ilovalariga tegishli:",
    "answer": "video konferentsiya",
    "noAnswer1": "kompyuterli tomografiya",
    "noAnswer2": "lazerli printerlar",
    "noAnswer3": "havo harakatini boshqarish"
  },
  {
    "question": "Qaysi real vaqt ilovalari aerokosmik ilovalarga tegishli:",
    "answer": "samalyot bortidagi kompyuter",
    "noAnswer1": "havo harakatini boshqarish",
    "noAnswer2": "Belgilangan muddatdan oldin olingan mantiqiy noto'g'ri natija to'g'ri deb hisoblanganda",
    "noAnswer3": "kompyuterli tomografiya"
  },
  {
    "question": "Qanday tizim real vaqt tizimi deb ataladi?",
    "answer": "tizimning xatti-harakatlarini tavsiflash uchun vaqtning miqdoriy ifodasi kerak bo'lganda",
    "noAnswer1": "tizimning harakatini tasvirlash uchun vaqtni aniq ifodalash kerak bo'lganda",
    "noAnswer2": "tizimning xatti-harakatini tasvirlash uchun vaqtning sifat ifodasi kerak bo'lganda",
    "noAnswer3": "tizimning harakatini tasvirlash uchun vaqtni taxminiy ifodalash kerak bo'lganda"
  },
  {
    "question": "Real vaqt bu-?",
    "answer": "vaqtning miqdoriy tushunchasi. Fizik (haqiqiy soat) o`lcham bilan o'lchanadi",
    "noAnswer1": "vaqtning sifat tushunchasi va hodisalarni tartibga solish munosabatlari yordamida ifodalanadi",
    "noAnswer2": "A hodisasi B hodisasidan keyin sodir bo'lganligini aniq aytishimiz mumkin",
    "noAnswer3": "Biz taxminan A hodisasi B hodisasidan keyin sodir bo'lgan deb aytishimiz mumkin"
  },
  {
    "question": "..terminologiyasi asosida bir butun qurilmalar, programma dasturlarini ma’lum konuniyat asosida birikib turishi asosida tashkil etiladi. Nuqtalar o'rnini to'ldiring",
    "answer": "Tizim",
    "noAnswer1": "Jarayon",
    "noAnswer2": "Sikl",
    "noAnswer3": "Vaqt"
  },
  {
    "question": "L-502 qurilmasining maksimal chastotasini qancha",
    "answer": "2 MHz",
    "noAnswer1": "2 GHz",
    "noAnswer2": "4 MHz",
    "noAnswer3": "4 GHz"
  },
  {
    "question": "Real vaqt deyilganda nima tushuniladi?",
    "answer": "jarayonni borishini oniy vaqti, ya’niy xar bir borayotgan qadam ketma ketligidagi vaqt tushiniladi.",
    "noAnswer1": "jarayonni borishini istalgan vaqti, ya’niy xar bir borayotgan qadam ketma ketligidagi vaqt tushiniladi.",
    "noAnswer2": "jarayonni borishini noma'lum vaqti tushiniladi.",
    "noAnswer3": "jarayonni borishini noma'lum vaqti tushiniladi."
  },
  {
    "question": "Boshqarish tizimlarini tashkil etishda birlamchi datchiklardan jarayon to‘g‘risida informatsiya yigilib qaysi komleksda qayta ishlanadi?",
    "answer": "xisoblash kompleksida",
    "noAnswer1": "modellash kompleksida",
    "noAnswer2": "mexanizm kompleksida",
    "noAnswer3": "Jarayon kompleksida"
  },
  {
    "question": "Boshqarish tizimlarini tashkil etishda birlamchi datchiklardan jaraѐn to‘g‘risida informatsiya yigilib xisoblash kompleksida qayta ishlanib qaysi jarayonga uzatiladi",
    "answer": "bajarish mexanizimiga",
    "noAnswer1": "xisoblash kompleksida",
    "noAnswer2": "qayta ishlash jarayoniga",
    "noAnswer3": "boshqarish tizimiga"
  },
  {
    "question": "Qayta aloqa jarayoni ketmaketligini ko'rsating",
    "answer": "Datchik,Interfeys, Mikro EXM,Interfeys, Bajarish mexanizmi",
    "noAnswer1": "Bajarish mexanizmi, Datchik,Interfeys, Mikro EXM,Interfeys,",
    "noAnswer2": "Datchik, Mikro EXM, Bajarish mexanizmi, Interfeys, Interfeys",
    "noAnswer3": "Datchik, Mikro EXM, Interfeys, Interfeys"
  },
  {
    "question": "Boshqarish tizimlari necha turga bo'linadi",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "5",
    "noAnswer3": "4"
  },
  {
    "question": "Boshqarish tizimlari qanday turlarga bo'linadi",
    "answer": "«qattiq bog‘lanishli» va «qattiq bo‘lmagan(yumshoq)»",
    "noAnswer1": "«issiq bog‘lanishli» va«issiq bo‘lmagan(sovuq)»",
    "noAnswer2": "«qaytadigan bog‘lanishli»  va «qaytib bo‘lmagan(qaytmas)»",
    "noAnswer3": "«analog bog‘lanishli» va «analog bo'lmagan(Raqamli)»"
  },
  {
    "question": "Real vaqt tizimlar nimalar ustida ish olib boradi.",
    "answer": "ob’ektlar",
    "noAnswer1": "subyektlar",
    "noAnswer2": "jarayonlar",
    "noAnswer3": "vaqtlar"
  },
  {
    "question": "Real vaqt tizimlarida texnologik jarayon …... sifatida ishtirok etadi. Nuqtalar o'rnini to'ldiring",
    "answer": "obyekt",
    "noAnswer1": "subyekt",
    "noAnswer2": "mexanizm",
    "noAnswer3": "tizim"
  },
  {
    "question": "Zamonaviy real vaqt tizimlari tarkibiy qiymatlaridan biri qanday  ta’minoti xisoblanadi.",
    "answer": "programma",
    "noAnswer1": "xissoblash",
    "noAnswer2": "aloqa",
    "noAnswer3": "xizmat"
  },
  {
    "question": "Real vaqt rejimida o'rnatilgan ilovalar uchun butun dunyo bo'ylab protsessorlarning necha foizi ishlatiladi?",
    "answer": "70.0",
    "noAnswer1": "80.0",
    "noAnswer2": "60.0",
    "noAnswer3": "50.0"
  },
  {
    "question": "Real vaqtda tsiklni rejalashtiruvchilar haqidagi to'g'ri mulohazani aniqlang",
    "answer": "Tsiklni rejalashtiruvchilar juda mashhur va sanoatda keng qo'llaniladi.",
    "noAnswer1": "Hozirda ishlab chiqarilayotgan barcha yirik o'rnatilgan ilovalarning aksariyati aylanma robin rejalashtiruvchilarga asoslangan.",
    "noAnswer2": "Tsiklik rejalashtiruvchilar har safar unga kirishda yangi jadval yaratadi.",
    "noAnswer3": "Sanoatda tsiklni rejalashtiruvchilar ishlatilmaydi."
  },
  {
    "question": "Raqamli infarmatsiyalar asosini nechilik sanoq sistema tashkil qiladi",
    "answer": "2-lik",
    "noAnswer1": "4-lik",
    "noAnswer2": "8-lik",
    "noAnswer3": "10-lik"
  },
  {
    "question": "RАOʼQ texnik xarakteristikalari korsating",
    "answer": "Hamma javob tog'ri",
    "noAnswer1": "RАOʼQ razryadi, raqamli signaldagi birtlar soni",
    "noAnswer2": "Imkoniyati(razreshenie), raqamli signaldagi eng kichik razryadni seza olishi",
    "noAnswer3": "Toʼla shkalasi, chiqish signalini oʼzgarish diapazoni"
  },
  {
    "question": "Analog signal deb nimaga aytladi",
    "answer": "Analog signalamplitudasining minimal va maksimal oralig’ida cheksiz qiymatlarsonini qabul qilishiga aytiladi",
    "noAnswer1": "Analig signal ampilutudasining minimal oralig'dagi cheksiz qiymat",
    "noAnswer2": "Analig signal ampilitudasining maksimal oraligidagi cheksiz qiymat",
    "noAnswer3": "Togri javob yoq"
  },
  {
    "question": "Intel kompaniyasi qanday pratsesirlar ishlab chiqaradi",
    "answer": "Hamma javob tog'ri",
    "noAnswer1": "Pentium, Celeron",
    "noAnswer2": "Quad, Xeon, Itanium",
    "noAnswer3": "Atom Sempron, X2"
  },
  {
    "question": "Operativ xotilash qurilmasini koʼp xollarda nima deb ataladi",
    "answer": "RAM",
    "noAnswer1": "DIMM",
    "noAnswer2": "BIOS",
    "noAnswer3": "SDRAM"
  },
  {
    "question": "DIMM manosi",
    "answer": "Dual-In-line Memory Module",
    "noAnswer1": "Dual-In-line Memory Model",
    "noAnswer2": "Dual- Memory Module",
    "noAnswer3": "Daul-In-line Mavory Module"
  },
  {
    "question": "Xotirlash modullar hajmi",
    "answer": "Hamma javob tog'ri",
    "noAnswer1": "16",
    "noAnswer2": "32",
    "noAnswer3": "512"
  },
  {
    "question": "Xotrlash modullari chastotasi",
    "answer": "100 ili 133 MG",
    "noAnswer1": "200 ili 233 MG",
    "noAnswer2": "300 ili 333 MG",
    "noAnswer3": "400 ili 433 MG"
  },
  {
    "question": "Xotrlash modullar kantaktlar soni",
    "answer": "72,168 ili 184",
    "noAnswer1": "80,170,ili 200",
    "noAnswer2": "100,2",
    "noAnswer3": "154,169"
  },
  {
    "question": "1G baytlik modullar hozirgi payitda necha G bolib chiqmoqda",
    "answer": "4G",
    "noAnswer1": "3G",
    "noAnswer2": "2G",
    "noAnswer3": "5G"
  },
  {
    "question": "Raqamli signal deganda nimani tushunasiz ?",
    "answer": "paketli signalar",
    "noAnswer1": "murakkab",
    "noAnswer2": "a va b javoblar",
    "noAnswer3": "togri javob yoq"
  },
  {
    "question": "O'yin kontrollerlari bu -",
    "answer": "avtomat va kompyuter oyinlarini tashkil etish va boshqarish qurilmasi",
    "noAnswer1": "bu server kompyuter tarmoqlarini nazorat qilish",
    "noAnswer2": "togri javob berilmagan",
    "noAnswer3": "kompyuter oyinlarini tashkil etish va boshqarish qurilmasi"
  },
  {
    "question": "domen kontrollerlari bu -",
    "answer": "bu server, kompyuter tarmoqlar domenlarini nazorat qilish qurilmasi",
    "noAnswer1": "togri javob berilmagan",
    "noAnswer2": "bu server yordamchisi, kompyuter tarmoqlar domenlarini nazorat qilish qurilmasi",
    "noAnswer3": "bu server kompyuter tarmoqlarini nazorat qilish"
  },
  {
    "question": "mikrokontroller bu -",
    "answer": "mikrosxema, mantiqiy operatsiyalarni bajarishga mo'ljallangan elektron qurilma",
    "noAnswer1": "avtomat va kompyuter oyinlarini tashkil etish va boshqarish qurilmasi",
    "noAnswer2": "kompyuter oyinlarini tashkil etish va boshqarish qurilmasi",
    "noAnswer3": "togri javob berilmagan"
  },
  {
    "question": "Ishlab chiqarish kontrolleri bu-",
    "answer": "Boshqarish qurilmasi,texnologik yoki boshqa jarayonlarni avtomatik  avtomatik boshqaruvchi qurilma",
    "noAnswer1": "Boshqarish yordamchi qurilmasi,texnologik yoki boshqa jarayonlarni avtomatik  avtomatik boshqaruvchi qurilma",
    "noAnswer2": "togri javob berilmagan",
    "noAnswer3": "Boshqarish qurilmasi,elektronik yoki boshqa jarayonlarni avtomatik  avtomatik boshqaruvchi qurilma"
  },
  {
    "question": "Programmalanuvchi logik kontrolleri bu -",
    "answer": "funksiyasi programma yordamida belgilanuvchi ishlab chiqarishni boshqarish kontrolleri",
    "noAnswer1": "togri javob berilmagan",
    "noAnswer2": "Infomatsiyani qayta tartiblash va programma bilan ishlovchi boshqarish kontrolleri",
    "noAnswer3": "Informatsiyani qayta tartiblash bilan ishlovchi boshqarish kontrolleri"
  },
  {
    "question": "PLK -73 kontrolleri programma belgilarini saqlash xotirasi necha kb ?",
    "answer": "10",
    "noAnswer1": "100",
    "noAnswer2": "110",
    "noAnswer3": "15"
  },
  {
    "question": "PLK -73 kontrolleri saqlash xotirasi hajmi qancha?",
    "answer": "280",
    "noAnswer1": "600",
    "noAnswer2": "256",
    "noAnswer3": "180"
  },
  {
    "question": "PLK -73 kontrollerining   Retain-xotira necha bayt?",
    "answer": "448",
    "noAnswer1": "150",
    "noAnswer2": "600",
    "noAnswer3": "256"
  },
  {
    "question": "PLK -73 kontrollerining kirish chiqish hajmi qancha PLK73-M  uchun?",
    "answer": "600",
    "noAnswer1": "550",
    "noAnswer2": "140",
    "noAnswer3": "148"
  },
  {
    "question": "PLK -73 kontrollerining kirish chiqish hajmi qancha PLK73-L  uchun?",
    "answer": "360",
    "noAnswer1": "150",
    "noAnswer2": "178",
    "noAnswer3": "155"
  },
  {
    "question": "Real vaqt tizimlarida vazifalarni rejalashtirishning nechta asosiy turi mavjud?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "2",
    "noAnswer3": "6"
  },
  {
    "question": "Quyida real vaqt rejimidagi vazifalarni rejalashtirishning qaysi tushunchaning tavsifi berilgan? \"Davriy vazifaning qat'iy davriy xatti-harakatlaridan chetga chiqishi\"",
    "answer": "Jitter (Jitter)",
    "noAnswer1": "Rejalashtirish nuqtalari (Scheduling Points)",
    "noAnswer2": "Foydalanish (Utilization)",
    "noAnswer3": "Oldindan rejalashtiruvchi (Preemptive Scheduler)"
  },
  {
    "question": "Quyida real vaqt rejimidagi vazifalarni rejalashtirishning qaysi tushunchaning tavsifi berilgan? \"vaqt birligi uchun vazifa bajariladigan o'rtacha vaqt\"",
    "answer": "Foydalanish (Utilization)",
    "noAnswer1": "Jitter (Jitter)",
    "noAnswer2": "Rejalashtirish nuqtalari (Scheduling Points)",
    "noAnswer3": "Oldindan rejalashtiruvchi (Preemptive Scheduler)"
  },
  {
    "question": "Quyida real vaqt rejimidagi vazifalarni rejalashtirishning qaysi tushunchaning tavsifi berilgan? \"Bu yuqoriroq ustuvor vazifa kelganda, bajarilayotgan har qanday pastroq ustuvor vazifani to'xtatib turadigan va yuqoriroq vazifani bajarish uchun qabul qiladigan vazifadir.\"",
    "answer": "Oldindan rejalashtiruvchi (Preemptive Scheduler)",
    "noAnswer1": "Rejalashtirish nuqtalari (Scheduling Points)",
    "noAnswer2": "Foydalanish (Utilization)",
    "noAnswer3": "Jitter (Jitter)"
  },
  {
    "question": "Quyida real vaqt rejimidagi vazifalarni rejalashtirishning qaysi tushunchaning tavsifi berilgan? \"Rejalashtiruvchi keyingi vazifani bajarish to'g'risida qaror qabul qiladigan vaqt shkalasidagi momentlarda \"",
    "answer": "Mumkin bo'lgan jadval (Feasible Schedule)",
    "noAnswer1": "Oldindan rejalashtiruvchi (Preemptive Scheduler)",
    "noAnswer2": "Foydalanish (Utilization)",
    "noAnswer3": "Jitter (Jitter)"
  },
  {
    "question": "Quyida real vaqt rejimidagi vazifalarni rejalashtirishning qaysi tushunchaning tavsifi berilgan? \"Barcha vazifalar vaqt cheklovlariga javob beradigan jadval\"",
    "answer": "Mumkin bo'lgan jadval (Feasible Schedule)",
    "noAnswer1": "Optimal rejalashtiruvchi (Optimal Scheduler)",
    "noAnswer2": "Ruxsat etilgan jadval (Valid Schedule)",
    "noAnswer3": "Tajribali rejalashtiruvchi (Proficient Scheduler)"
  },
  {
    "question": "Keltirilgan signal nima?",
    "answer": "fizik parametrni qiymatlari malum tip signalda masshtablangani",
    "noAnswer1": "fizik parametrni qiymatlari nomalum tip signalda masshtablangani",
    "noAnswer2": "murakkab signal",
    "noAnswer3": "sodda signal"
  },
  {
    "question": "necha xil signallar ?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "1"
  },
  {
    "question": "Analog signal va raqamli signalni farqi nima?",
    "answer": "analog doimiy elektr signalidir, raqamli esa uzluksiz elektr signalidir",
    "noAnswer1": "analog uzlukli",
    "noAnswer2": "raqamli doimiy",
    "noAnswer3": "togri javob yoq"
  },
  {
    "question": "Svetofor qanday real vaqt tizimiga misol bo`ladi ?",
    "answer": "yumshoq",
    "noAnswer1": "qattiq",
    "noAnswer2": "murakkab",
    "noAnswer3": "sodda"
  },
  {
    "question": "Signalni raqamli ko’rinishdan analog ko’rinishga o’tkazuvchi qurilma bu nima",
    "answer": "MODULYATOR",
    "noAnswer1": "demoldulyator",
    "noAnswer2": "otkazuvchi qurilma",
    "noAnswer3": "kompelyator"
  },
  {
    "question": "L-783M qurilmasining maksimal chastotasini qancha",
    "answer": "3 MHz",
    "noAnswer1": "3 GHz",
    "noAnswer2": "4 MHz",
    "noAnswer3": "4 GHz"
  },
  {
    "question": "Quyida qanday turdagi real vaqt vazifalari keltirilgan? “tasodifiy vaqt momentida takrorlanuvchi vazifa”",
    "answer": "vaqti-vaqti bilan",
    "noAnswer1": "oraliq",
    "noAnswer2": "toxastik",
    "noAnswer3": "davriy"
  },
  {
    "question": "Quyida qanday turdagi real vaqt vazifalari keltirilgan? \"muayyan belgilangan vaqt oralig'ida takrorlangan vazifa\"",
    "answer": "davriy",
    "noAnswer1": "oraliq",
    "noAnswer2": "toxastik",
    "noAnswer3": "vaqti-vaqti bilan"
  },
  {
    "question": "Quyida keltirilgan tushunchalardan qaysi biri real vaqt rejimidagi ilovalarning tavsifi hisoblanadi? \"Vazifaning natijalarini berish uchun zarur bo'lgan vaqt (vazifa kelgan vaqt bilan o'lchanadi)\"",
    "answer": "Javob berish vaqti (Response Time)",
    "noAnswer1": "Absolyut muddat (Absolute deadline)",
    "noAnswer2": "Nisbiy muddat (Relative deadline)",
    "noAnswer3": "Vazifa namunasi (Task Instance)"
  },
  {
    "question": "Quyida keltirilgan tushunchalardan qaysi biri real vaqt rejimidagi ilovalarning tavsifi hisoblanadi? \"Vazifaning boshlanishi va oxirgi muddat o'rtasidagi vaqt oralig'i\"",
    "answer": "Nisbiy muddat (Relative deadline)",
    "noAnswer1": "Vazifa namunasi (Task Instance)",
    "noAnswer2": "Absolyut muddat (Absolute deadline)",
    "noAnswer3": "Javob berish vaqti (Response Time)"
  },
  {
    "question": "Real vaqt rejimida ishlaydigan dasturchi Unix dan real vaqt rejimida foydalanilganda qanday muammoga duch keladi?",
    "answer": "o'zgarmas yadro",
    "noAnswer1": "soatlar va taymerlarni qo'llab-quvvatlash",
    "noAnswer2": "statik vazifa ustuvorliklari",
    "noAnswer3": "xotira himoyasi"
  },
  {
    "question": "Quyida real vaqt tizimining qaysi funksiyalarining tavsifi keltirilgan? \"An'anaviy operatsion tizimlar odatda yuqori aniqlikdagi vaqt xizmatlarini taqdim etmaydi.\"",
    "answer": "Soat va taymerlarni qo'llab-quvvatlash",
    "noAnswer1": "Vazifalar o'rtasida real vaqt rejimida resurslar almashinuvini qo'llab-quvvatlaydi",
    "noAnswer2": "Xotirani himoya qilish",
    "noAnswer3": "Xotirani boshqarishga qo'yiladigan talablar"
  },
  {
    "question": "1971 yildа Texаs Instruments dа qanday qurilma ishlаb chiqildi?",
    "answer": "Microkontroller",
    "noAnswer1": "Microchip",
    "noAnswer2": "Microprotsessor",
    "noAnswer3": "Kompyuter"
  },
  {
    "question": "Quyida real vaqt tizimining qaysi funksiyalarining tavsifi keltirilgan? \"Real vaqtda operatsion tizim statik ustuvorlik darajasini saqlab turishi kerak.\"",
    "answer": "Real vaqtda ustuvor darajalar",
    "noAnswer1": "Soat va taymerlarni qo'llab-quvvatlash",
    "noAnswer2": "Tezkor vazifani oldindan hal qilish",
    "noAnswer3": "Bashorat qilinadigan va tez uzilishning kechikishi"
  },
  {
    "question": "POSIX 1003.Id standarti - …",
    "answer": "“real vaqt” qo`shimcha kengaytmalari uchun standartlarni belgilaydi",
    "noAnswer1": "real vaqt” asosida to`liq standartlarni belgilaydi",
    "noAnswer2": "vazifalarga qarab standartlarni belgilaydi",
    "noAnswer3": "utilitlar asosida standartlarni belgilaydi"
  },
  {
    "question": "POSIX 1003.1c standarti - …",
    "answer": "vazifalarga qarab standartlarni belgilaydi",
    "noAnswer1": "“real vaqt” qo`shimcha kengaytmalari uchun standartlarni belgilaydi",
    "noAnswer2": "utilitlar asosida standartlarni belgilaydi",
    "noAnswer3": "real vaqt” asosida to`liq standartlarni belgilaydi"
  },
  {
    "question": "POSIX 1003.2 standarti - …",
    "answer": "utilitlar asosida standartlarni belgilaydi",
    "noAnswer1": "“real vaqt” qo`shimcha kengaytmalari uchun standartlarni belgilaydi",
    "noAnswer2": "vazifalarga qarab standartlarni belgilayd",
    "noAnswer3": "“real vaqt” asosida to`liq standartlarni belgilaydi"
  },
  {
    "question": "Mikroprotsessorli tizimlar necha qismdan iborat?",
    "answer": "2",
    "noAnswer1": "7",
    "noAnswer2": "3",
    "noAnswer3": "5"
  },
  {
    "question": "Dasturiy ta'minot quyidagilardan iborat:",
    "answer": "tizimli dasturlar, amaliy dastur, instrumental paket",
    "noAnswer1": "amaliy dastur, grafikli dastur, chiziqli dastur",
    "noAnswer2": "jadval dastur, instrumental paket,grafikli dastur",
    "noAnswer3": "amaliy dastur, jadval dastur, tizimli dastur"
  },
  {
    "question": "Aniq bir masalalarni yechishga mo'ljallangan dasturlar qanday dasturlar?",
    "answer": "Amaliy dasturlar",
    "noAnswer1": "Chiziqli dasturlar",
    "noAnswer2": "Grafikli dasturlar",
    "noAnswer3": "Jadval dasturlar"
  },
  {
    "question": "Amaliy dasturlar to'g'ri ko'rsatilgan javobni toping.",
    "answer": "autocad,photoshop,fain reader",
    "noAnswer1": "photoshop,C#,basic",
    "noAnswer2": "3D max, word, power point",
    "noAnswer3": "hamma javoblar to'g'ri"
  },
  {
    "question": "Аmaliy real vaqt tizimlari dasturlari umumiy tarzda necha qismga bo'linadi?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "5",
    "noAnswer3": "7"
  },
  {
    "question": "Xalqaro adabiyotlarda real vaqt tizimlarida ishlaydigan amaliy boshqaruvchi programmalar nima deb ataladi?",
    "answer": "SCADA",
    "noAnswer1": "SATAC",
    "noAnswer2": "OPC",
    "noAnswer3": "RTU"
  },
  {
    "question": "SCADA tizimlar asosida real vaqt tizimlarida jaraѐnlarni boshqarish  tizimlarida quydagi qurilmalar qatnashadi:",
    "answer": "boshqarish qurilmasi, boshqarish mexanizmi, boshqarish ob'ekti, datchik",
    "noAnswer1": "adminlar boshqaruvi,boshqaruv maydoni, boshqarish stansiyasi",
    "noAnswer2": "boshqarish qurilmasi, boshqarish stansiyasi, admin boshqaruv",
    "noAnswer3": "hamma javoblar to'g'ri"
  },
  {
    "question": "Hozirda kunda dunyoda avtomatlashtirilgan tizimlar ishlab chiqish bo‘yicha faoliyat ko‘rsatayotgan firmalar qaysilar?",
    "answer": "Fastwel, Honywel, Advantesh, Siemens",
    "noAnswer1": "Genius, WinCC, Experion PRS",
    "noAnswer2": "AdAstral,Genius,Adventesh",
    "noAnswer3": "to'g'ri javob yo'q"
  },
  {
    "question": "Asosan qaysi kompaniyalar universal ochiq SCADA tizimlar asosida ishlaydi?",
    "answer": "Genius, WinCC, Experion PRS, Trace Mode va Maykrosoft",
    "noAnswer1": "Genius, WinCC, Experion PRS",
    "noAnswer2": "Fastwel, Honywel, Advantesh, Siemens",
    "noAnswer3": "AdAstral,Genius,Adventesh"
  },
  {
    "question": "TRACE MODEL dasturiy taʼminotini 4.10 ga bo‘lgan versiyasi qaysi muxitda ishlashga mo'ljallangan?",
    "answer": "DOC",
    "noAnswer1": "EXCEL",
    "noAnswer2": "Windows",
    "noAnswer3": "Paint"
  },
  {
    "question": "Tizimning sаmаrаdorligi nimаni аnglаtаdi",
    "answer": "Mаqsаddаn qoniqish dаrаjаsi",
    "noAnswer1": "Tizimning yoki jаrаyonning hаr qаndаy xususiyаtining miqdoriy xаrаkteristikаsi",
    "noAnswer2": "Ob'ekt uchun dаstlаbki tаlаblаrgа muvofiqligi",
    "noAnswer3": "Murаkkаb tizimlаrning funksionаlligini tа'minlаsh"
  },
  {
    "question": "1942 yildа Germаniyаdа o`rnаtilgаn tizim sohаsida qanday o’zgarish bo’ldi?",
    "answer": "«Siemens» firmаsi tomonidаn yаrаtilgаn kаmerаlаr «Fаu-2» hаrbiy rаketаlаrini kuzаtish mаqsаddа qo`llаnildi",
    "noAnswer1": "«Siemens» firmаsi tomonidаn yаrаtilgаn telefonlаr «Fаu-2» hаrbiy rаketаlаri orаsidа o`zаro аloqа qilish mаqsаddа qo`llаnildi",
    "noAnswer2": "BOSCH firmаsi tomonidаn yаrаtilgаn kаmerаlаr «Fаu-2» hаrbiy rаketаlаrini kuzаtish&nbsp; mаqsаddа qo`llаnildi",
    "noAnswer3": "«BOSCH» firmаsi tomonidаn yаrаtilgаn telefonlаr «Fаu-2» hаrbiy rаketаlаri orаsidа o`zаro аloqа qilish mаqsаddа qo`llаnildi"
  },
  {
    "question": "1958 yildаn buyon qаndаy texnologiyа rivojlаnishi Jon Kilbining hаrаkаtlаri nаtijаsidа kаshf etilgаn?",
    "answer": "Yаrimo`tkаzgichlаr texnologiyаsi",
    "noAnswer1": "Mikroprotsessorlаr texnologiyаsi",
    "noAnswer2": "Mikrochiplаr texnologiyаsi",
    "noAnswer3": "O`tkаzgichlаr texnologiyаsi"
  },
  {
    "question": "1968 yildа qаysi sohаdа birinchi o`rnаtilgаn tizim nechаnchi yili ishlаb chiqаrildi",
    "answer": "Аvtomobillаrdа",
    "noAnswer1": "Politsiyа xismаtidа",
    "noAnswer2": "Xаrbiy xizmаtdа",
    "noAnswer3": "Sаmаlyotlаrdа"
  },
  {
    "question": "20 аsr boshidа qanday ixtiro qilish zаmonаviy elektronikаning jаdаl rivojlаnishini boshlаng`ich nuqtаsi sifаtidа ko’rildi",
    "answer": "Vаkuum nаychаlаrini",
    "noAnswer1": "Trаnzistor",
    "noAnswer2": "Qаrshilik",
    "noAnswer3": "Mikrokontroller"
  },
  {
    "question": "Energiya sarfini cheklash uchun ishlab chiquvchilar turli echimlardan foydalanadilar. Ulardan biri MC soat chastotasini",
    "answer": "kamaytiradi",
    "noAnswer1": "ko’paytradi",
    "noAnswer2": "O’rnatadi",
    "noAnswer3": "O’chiradi"
  },
  {
    "question": "Tarmoqli aloqa protokollari nima bilan ifodalanadi?",
    "answer": "IP",
    "noAnswer1": "MC",
    "noAnswer2": "MCU",
    "noAnswer3": "ILS"
  },
  {
    "question": "Tarmoqdagi qurilmalarning manzillarini kuzatib boorish qaysi protocol bajaradi",
    "answer": "IP",
    "noAnswer1": "MS IP",
    "noAnswer2": "MP IP",
    "noAnswer3": "ILST"
  },
  {
    "question": "WiFi qaysi standartda ishlaydi",
    "answer": "IEEE 802.11x",
    "noAnswer1": "IEEE 802.13x",
    "noAnswer2": "IEEE 802.15x",
    "noAnswer3": "IEEE 802.16x"
  },
  {
    "question": "qaysi standartda ishlaydi qaysi standartda ishlaydi",
    "answer": "IEEE 802.15.1",
    "noAnswer1": "IEEE 802.13x",
    "noAnswer2": "IEEE 802.15x",
    "noAnswer3": "IEEE 802.11x"
  },
  {
    "question": "68HC12 va HCS12 bu -",
    "answer": "Mikrokontrollerlar",
    "noAnswer1": "Modullar",
    "noAnswer2": "Platformalar",
    "noAnswer3": "Tizimlar"
  },
  {
    "question": "68HC12 / HCS12 mikrokontrollerlar oilasi Necha bitli MCUlar guruhiga kiradi",
    "answer": "16-bitli",
    "noAnswer1": "24-bitli",
    "noAnswer2": "8-bitli",
    "noAnswer3": "32-bitli"
  },
  {
    "question": "Qaysi mikrokotroller oilasi 1996 yilda ikkita asosiy modelning chiqarilishi bilan boshlangan:",
    "answer": "68HC12",
    "noAnswer1": "68Hl4",
    "noAnswer2": "68HC13",
    "noAnswer3": "68HC24"
  },
  {
    "question": "68HC12 buyruqlar to‘plami  qanday buyruqlar to‘plamiga asoslangan",
    "answer": "HC11",
    "noAnswer1": "HC40",
    "noAnswer2": "HC15",
    "noAnswer3": "HC10"
  },
  {
    "question": "68HC12, shuningdek,qancha  xotira joylariga murojaat qilish imkonini beradigan 16-bitli manzil shinasiga ega.",
    "answer": "65536",
    "noAnswer1": "65136",
    "noAnswer2": "65221",
    "noAnswer3": "95536"
  },
  {
    "question": "Ikki baytli sonlarni qo‘shish yoki olib tashlash operatsiyalari MC tizim shinasining necha tsiklida bajariladi.",
    "answer": "2 yoki 3",
    "noAnswer1": "2 yoki 5",
    "noAnswer2": "3 yoki 5",
    "noAnswer3": "2 yoki 10"
  },
  {
    "question": "68HC12 markaziy protsessor birligi nechta adreslash usulini qo‘llab -quvvatlaydi",
    "answer": "16 ta",
    "noAnswer1": "2 ta",
    "noAnswer2": "25 ta",
    "noAnswer3": "36 ta"
  },
  {
    "question": "WAW qanday byuyruq",
    "answer": "defuzzification buyrug'i.",
    "noAnswer1": "garzification buyrug'i.",
    "noAnswer2": "libzzification buyrug'i.",
    "noAnswer3": "dudelzification buyrug'i."
  },
  {
    "question": "REV qanday buyruq",
    "answer": "loyqa o‘zgaruvchan ishlov berish buyrug'i",
    "noAnswer1": "loyqa o‘zgarmas ishlov berish buyrug'i",
    "noAnswer2": "loyqa og’ir ishlov berish buyrug'i",
    "noAnswer3": "yengil ishlov berish buyrug'i"
  },
  {
    "question": "HCS12 oilasi nechadan ortiq MK modellarini birlashtiradi",
    "answer": "30 dan",
    "noAnswer1": "33 dan",
    "noAnswer2": "35 dan",
    "noAnswer3": "34 dan"
  },
  {
    "question": "ugungi kunda HCS12 oilasida nechta seriya mavjud.",
    "answer": "6 ta",
    "noAnswer1": "47 ta",
    "noAnswer2": "55 ta",
    "noAnswer3": "4 ta"
  },
  {
    "question": "Mikroprotsessorning biron bir qurilmadan (klaviatura, tizim soati, klaviatura, qattiq disk va boshqalar) jismoniy signalga reaktsiyasi sifatida paydo bo‘ladi, bu uzilishlar sodir bo‘lgan vaqtda asinxron bo‘ladi, ya'ni. tasodifiy vaqtda sodir bo‘ladi bu ….",
    "answer": "apparat",
    "noAnswer1": "bashorat",
    "noAnswer2": "Mikrokontroller",
    "noAnswer3": "Tizim indexi"
  },
  {
    "question": "To‘xtatish tizimi bu -…..",
    "answer": "uzilish mexanizmini amalga oshiruvchi dasturiy va texnik vositalar to‘plami.",
    "noAnswer1": "Ulanish mexanizmini amalga oshiruvchi dasturiy va texnik vositalar to‘plami.",
    "noAnswer2": "Tortish mexanizmini amalga oshiruvchi dasturiy va texnik vositalar to‘plami.",
    "noAnswer3": "Ketish  mexanizmini amalga oshiruvchi dasturiy va texnik vositalar to‘plami."
  },
  {
    "question": "IR0 - IR7 bu nima ?",
    "answer": "periferik qurilmalar",
    "noAnswer1": "antikerik qurilmalar",
    "noAnswer2": "perifok qurilmalar",
    "noAnswer3": "perifik qurilmalar"
  },
  {
    "question": "CAS0 - CAS2 nima uchun mo’ljallangan",
    "answer": "ma'lum bir qo’l boshqaruvchisini aniqlash uchun mo‘ljallangan.",
    "noAnswer1": "ma'lum bir qulf ochish uchun mo‘ljallangan.",
    "noAnswer2": "jipslash uchun mo‘ljallangan.",
    "noAnswer3": "ma'lum bir qo’l boshqaruvi"
  },
  {
    "question": "Arduino IDE dasturlash muhitida Arduino bilan kompyuterni bog’langan ekanligini teksgirish uchun  ketmaketlik",
    "answer": "Menyular satri Instrumenti menyusi Port",
    "noAnswer1": "Cketch menyusi Port",
    "noAnswer2": "Menyular satri Port",
    "noAnswer3": "Fayl menyusi Port"
  },
  {
    "question": "Elektr loyihalarida ishlatiladigan eng keng tarqalgan elektron komponentlardan biri bu ?",
    "answer": "LED",
    "noAnswer1": "ARDUINO",
    "noAnswer2": "HP 1001",
    "noAnswer3": "DH-11"
  },
  {
    "question": "GND qanday port",
    "answer": "Manfiy",
    "noAnswer1": "Musbat",
    "noAnswer2": "Analog",
    "noAnswer3": "Raqamli"
  },
  {
    "question": "VSS qanday port",
    "answer": "Musbat",
    "noAnswer1": "Manfiy",
    "noAnswer2": "Raqamli",
    "noAnswer3": "Analog"
  },
  {
    "question": "Rezistor bu ……..(tarif)",
    "answer": "Qarshilik",
    "noAnswer1": "Diod",
    "noAnswer2": "Xotira qurilmasi",
    "noAnswer3": "Qurilma"
  },
  {
    "question": "…………- bu butunlay boshqa parametrlarga ega bo‘lgan elektr zanjirlarini bir -biriga ulash imkonini beruvchi shlyuz",
    "answer": "Rele",
    "noAnswer1": "Registr",
    "noAnswer2": "Releport",
    "noAnswer3": "Ralifet"
  },
  {
    "question": "HC-SR04 Masofa modul necha metrgacha masofani aniqlay oladi",
    "answer": "3",
    "noAnswer1": "5",
    "noAnswer2": "8",
    "noAnswer3": "10"
  },
  {
    "question": "Fotorezistor yorug’lik moduli o’lchov birligi",
    "answer": "Luks",
    "noAnswer1": "Metr",
    "noAnswer2": "Kg",
    "noAnswer3": "bayt"
  },
  {
    "question": "O‘rnatilgan  tizimlar to’ri ko’rsatilgan qatorni toping",
    "answer": "Uyali telefonlar,",
    "noAnswer1": "Uyali aloqa operatorlari, tranziztor va organayzerlar",
    "noAnswer2": "Elektr toki, pilot va multimediya pleyerlar",
    "noAnswer3": "Akumlyator va elekron asboblar"
  },
  {
    "question": "Quyidagilardan qay biri O‘rnatilgan  tizimlarga misol bo’la oladi",
    "answer": "Barchasi",
    "noAnswer1": "Biotibbiy tizimlar  Kompyuter uchun kirish -chiqish (kirish / chiqish) qurilmalari",
    "noAnswer2": "Avtomobillar Elektron asboblar",
    "noAnswer3": "Aviatsiya va harbiy tizimlar"
  },
  {
    "question": "Klaviaturalar, sichqonlar, printerlar, skanerlar, displeylar, modemlar, qattiq disk qurilmalari, DVD qurilmalari, grafik kartalar, USB qurilmalar bular qanday qurilmalar.",
    "answer": "Kompyuter uchun kirish -chiqish (kirish / chiqish) qurilmalari",
    "noAnswer1": "Sanoat uskunalari",
    "noAnswer2": "Kompyuter uchun Modullar",
    "noAnswer3": "Elektronikada kirish -chiqish (kirish / chiqish) qurilmalari"
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