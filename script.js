const data = [
  {
    "question": "Ma’lumotlar bazasiga ta’rif bering",
    "answer": "Ma’lum bir sxema asosida saqlanuvchi ma’lumotlarning strukturalashgan majmuasi",
    "noAnswer1": "Uzatish va qayta ishlash uchun yaroqli shakllantirilgan faktlar va fikrlarning taqdim etilishi",
    "noAnswer2": "Qiymatlar majmuasi, operatsiyalar to‘plami bo‘lib, xuddi shunday qiymatlarga qo‘llash mumkin bo‘lgan, shuningdek qiymatlarni saqlashni amalga oshirish va operatsiyalarni bajarish usuli",
    "noAnswer3": "ma’lumot strukturasini yaratish vositalari majmuasi"
  },
  {
    "question": "Ma’lumotlar bazasi tizimi nimalarni o‘z ichiga oladi?",
    "answer": " Ma’lumotlar, qurilma ta’minoti, dasturiy ta’minot foydalanuvchilari",
    "noAnswer1": "Ma’lumotlar va foydalanuvchilar",
    "noAnswer2": "Qurilma ta’minoti va foydalanuvchilar",
    "noAnswer3": "Dasturiy ta’minot va foydalanuvchilar"
  },
  {
    "question": "Ko‘pchilik foydalanuvchilar tomonidan MBni yaratish, to‘ldirish va birgalikda foydalanish uchun mo‘ljallangan dasturiy vositalar majmuasi nima deyiladi?",
    "answer": " MBBT",
    "noAnswer1": "Ma’lumotlar bazasi",
    "noAnswer2": "Ma’lumotlar lug‘ati",
    "noAnswer3": "Hisoblash tizimi"
  },
  {
    "question": "MBBTning vazifasiga nimalar kirmaydi?",
    "answer": " Ma’lumotlar ortiqcha xajmini qisqartirish",
    "noAnswer1": "Ma’lumotlarni taxrirlash",
    "noAnswer2": "Ma’lumotlarning xavfsizligi va butunligi",
    "noAnswer3": "Ma’lumotlarning qayta tiklanishi va nusxa olinishi"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning tarmoq modelida ma’lumotlar nima orqali taqdim etilgan?",
    "answer": " Ixtiyoriy graf",
    "noAnswer1": "Ro‘yxatlar",
    "noAnswer2": "Daraxt turidagi graf",
    "noAnswer3": "Jadvallar"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modellari bo‘yicha klassifikatsiya qaysi variantda tasvirlangan:",
    "answer": " Ierarxik, tarmoqli, relyatsion, ob’ektga yo‘naltirilgan",
    "noAnswer1": "Lokal, tarmoq, bo‘lingan",
    "noAnswer2": "Hujjatli, faktografik, leksikografik",
    "noAnswer3": "Faylli va katalogli"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modelining qaysi biri eng keng tarqalgan xisoblanadi?",
    "answer": " Relyatsion",
    "noAnswer1": "Tarmoqli",
    "noAnswer2": "Ob’ektga yo‘naltirilgan",
    "noAnswer3": "Ierarxik"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning relyatsion modelida foydalanuvchiga ma’lumotlar qaysi ko‘rinishda uzatiladi?",
    "answer": " Jadvallar",
    "noAnswer1": "Ro‘yxatlar",
    "noAnswer2": "Daraxt turidagi graf",
    "noAnswer3": "Ixtiyoriy graf"
  },
  {
    "question": "Ma’lumotlar bazasining klassifikatsiyasiga tegishli bo‘lmagan javobni ko‘rsating:",
    "answer": " Axborotni qayta ishlash tezligi bo‘yicha",
    "noAnswer1": "Ma’lumotlarni taqdim etish usullari bo‘yicha",
    "noAnswer2": "Ma’lumotlarni saqlash va ularga murojaat qilishni tashkil qilish bo‘yicha",
    "noAnswer3": "Saqlanuvchi axborot turi bo‘yicha"
  },
  {
    "question": "Daraxt ko‘rinishida qaysi ma’lumotlar bazasi tasvirlanadi?",
    "answer": " Ierarxik",
    "noAnswer1": "Tarmoqli",
    "noAnswer2": "Realasion",
    "noAnswer3": "Inververtlangan ro‘yxat asosiga"
  },
  {
    "question": "Ma’lumotlar bazasini boshqarishda avval ma’lumotlar bilan ishlashning qanday prinsiplari mavjud bo‘lgan?",
    "answer": " Pastki darajada tashqi xotira ma’lumotlarini boshqarish",
    "noAnswer1": "Ma’lumotlarni komandalar bilan boshqarish",
    "noAnswer2": "Ma’lumotlarni protseduralar bilan boshqarish",
    "noAnswer3": "Turli xil yo‘llar bilan"
  },
  {
    "question": "Ma’lumotlar bazasiga tegishli bo’lmagan tushunchani aniqlang?",
    "answer": " Mavjudlik",
    "noAnswer1": "Domen",
    "noAnswer2": "Kortej",
    "noAnswer3": "Munosabat"
  },
  {
    "question": "Moxiyat-aloqa modelini kim taklif qilgan?",
    "answer": " Piter Chen",
    "noAnswer1": "Tyuring",
    "noAnswer2": "Edgar Kodd",
    "noAnswer3": "Eyler"
  },
  {
    "question": "Ob’ektlar orasidagi munosabat turini aniqlang: talaba va reyting daftarchasi",
    "answer": " 1:1",
    "noAnswer1": "m:1",
    "noAnswer2": "n:m",
    "noAnswer3": "Aloqa yo‘q"
  },
  {
    "question": "Talaba va guruh ob’ektlari orasidagi aloqa modelini aniqlang",
    "answer": " n:1",
    "noAnswer1": "1:1",
    "noAnswer2": "n:m",
    "noAnswer3": "Bog‘lanmagan"
  },
  {
    "question": "Moxiyat-aloqa modelining asosiy tushunchalari",
    "answer": " Moxiyat, atribut, aloqa",
    "noAnswer1": "Atribut, jadval, aloqa",
    "noAnswer2": "Ob’ekt, xususiyat, munosabat",
    "noAnswer3": "Kalit, qiymat, assotsiatsiya"
  },
  {
    "question": "Talaba va auditoriya ob’ektlari orasidagi munosabat turini aniqlang",
    "answer": " n:m",
    "noAnswer1": "n:1",
    "noAnswer2": "1:1",
    "noAnswer3": "Bog‘lanmagan"
  },
  {
    "question": "Shahar va viloyat ob’ektlari orasidagi aloqa modelini aniqlang",
    "answer": " 1: m",
    "noAnswer1": "1:1",
    "noAnswer2": "m:n",
    "noAnswer3": "m:1"
  },
  {
    "question": "Nuqtalar o‘rniga to‘g‘ri keladigan so‘zni ko‘rsating ……….ustunlar to‘plami berilgan qatorlar guruhini ko‘rsating:",
    "answer": " Jadval",
    "noAnswer1": "Ma’lumot turlari",
    "noAnswer2": "Cheklanish",
    "noAnswer3": "Ma’lumotlar ombori"
  },
  {
    "question": "Katakcha massiv shaklidagi qiymatni qabul qiladimi?",
    "answer": " Yo‘q",
    "noAnswer1": "Ha",
    "noAnswer2": "Aniq domeni mavjud bo‘lsa",
    "noAnswer3": "Kortej aniq bo‘lsa"
  },
  {
    "question": "Jadval ma’lumot kaliti bu ....",
    "answer": " Jadval ma’lumotlar yig‘indisi bo‘lib, uning har bir qatorini aniqlaydi",
    "noAnswer1": "Jadval qatori bo‘lib, o‘zida unikal ma’lumot saqlamaydi",
    "noAnswer2": "Ona jadval kaliti",
    "noAnswer3": "Jadval ma’lumotlar modeli bo’lib, uning har bir ustunini belgilaydi"
  },
  {
    "question": "Realyatsion ma’lumotlar bazasida ma’lumotlarni saqlashning asosiy formasi",
    "answer": " Jadval",
    "noAnswer1": "Yozuv",
    "noAnswer2": "Domen",
    "noAnswer3": "Atribut"
  },
  {
    "question": "Realyatsion maydonda mohiyat aloqa diagrammasini o‘zgartirganda atribut nimaga o‘zgaradi?",
    "answer": " Atributga",
    "noAnswer1": "Jadvalga",
    "noAnswer2": "Indeksga",
    "noAnswer3": "Ikkilamchi kalitga"
  },
  {
    "question": "Unikal identifikator nima?",
    "answer": " Bir qatorni boshqa qatordan ajratib turadigan qiymatga ega ustun",
    "noAnswer1": "Jadval nomi",
    "noAnswer2": "Ustun nomi",
    "noAnswer3": "Qator va ustunlarning mosligi"
  },
  {
    "question": "Jadvalning har xil qatorlari bir xil qiymatdagi kalitga ega bo‘ladimi?",
    "answer": " Yo‘q",
    "noAnswer1": "Ha",
    "noAnswer2": "Agar jadval ikkilamchi kalitga ega bo‘lsa",
    "noAnswer3": "Agar jadval birlamchi kalitga ega bo’lsa"
  },
  {
    "question": "Qator bu?",
    "answer": " Yozuv, kortej",
    "noAnswer1": "Atribut, maydon",
    "noAnswer2": "Fayl",
    "noAnswer3": "Annorgamma"
  },
  {
    "question": "Unikal maydon deb qanday qatorga aytiladi?",
    "answer": " Qiymati qaytarilmaydigan maydon",
    "noAnswer1": "O’zaro bog’langan maydon",
    "noAnswer2": "Qiymati oshish xususiyatiga ega maydon",
    "noAnswer3": "Qiymati boshqasi bilan bog‘lanmagan maydon"
  },
  {
    "question": "Ustun bu?",
    "answer": " Maydon, atribut",
    "noAnswer1": "Domen, kortej",
    "noAnswer2": "Kortej",
    "noAnswer3": "Jadval, domen"
  },
  {
    "question": "Qaysi peredikat Guruhlash uchun ishlatiladi?",
    "answer": " GROUP BY",
    "noAnswer1": "WHERE",
    "noAnswer2": "HAVING",
    "noAnswer3": "ORDER BY"
  },
  {
    "question": "Qaysi turdagi MBBT da ustun va maydonning kema-ketligi ahamiyatsiz?",
    "answer": " Realyatsionda",
    "noAnswer1": "Tarmoqda",
    "noAnswer2": "Ierarxiyada",
    "noAnswer3": "Barcha MBBT da ustun va maydonning kema-ketligi aniq ko’rsatilgan bo’lishi shart"
  },
  {
    "question": "Jadval ma’lumotlar strukturasi qanday aniqlanadi?",
    "answer": " Jadval l ustunlari nomlanishi bilan",
    "noAnswer1": "Jadval kengligi bilan",
    "noAnswer2": "Jadval ustunlari nomlanishi bilan va ustun tartiblanishi bilan",
    "noAnswer3": "Jadval ustun qatori bilan"
  },
  {
    "question": "Realyatsion  ma’lumotlar bazasida qaysi so‘rov tillari qo‘llaniladi?",
    "answer": " SQL",
    "noAnswer1": "Objective C",
    "noAnswer2": "Haskell",
    "noAnswer3": "Basic"
  },
  {
    "question": "Ma’lumotlar bazasi jadvalar nima uchun kerak?",
    "answer": " Ma’lumotlarni saqlashga",
    "noAnswer1": "Ma’lumotlarni qayta ishlashga",
    "noAnswer2": "Ma’lumotlar bazasini kiritish va ularni ko‘zdan kechirish",
    "noAnswer3": "Qiyin dasturlar yaratishga"
  },
  {
    "question": "Normallashtirish nimaga kerak?",
    "answer": " Anomaliyadan holi bo‘lish uchun",
    "noAnswer1": "Jadval sonini kamaytirish uchun",
    "noAnswer2": "Jadval sonini ko‘paytirish uchun",
    "noAnswer3": "Foydali ma’lumotlarni ko‘paytirish uchun"
  },
  {
    "question": "Ikkinchi normal formada quyidagicha talab qo‘yiladi:",
    "answer": " Jadvalning hamma maydonlari birinchi kalitga bog‘liq",
    "noAnswer1": "Hamma maydonlar mustaqil",
    "noAnswer2": "Hamma maydonlar  kalitsiz maydonlarga bog‘liq",
    "noAnswer3": "Hamma maydonlar ikkilamchi kalitga bog’liq"
  },
  {
    "question": "Nechta normal forma mavjud?",
    "answer": " 6",
    "noAnswer1": "5",
    "noAnswer2": "4",
    "noAnswer3": "3"
  },
  {
    "question": "Uchinchi  normal formada quyidagicha talab qo‘yiladi:",
    "answer": " Kalit maydon bilan jadval o‘rtasida bog‘liqlik bo‘lmasligi",
    "noAnswer1": "Jadvaldagi ixtiyoriy maydon qiymati birlamchi kalit bo‘lmasligi",
    "noAnswer2": "Barcha maydon qiymatlari kalit maydon bo‘lmasligi",
    "noAnswer3": "Kalit maydon bilan jadval o‘rtasida bog‘liqlik bo‘lishligi"
  },
  {
    "question": "SQL kengaytmasi nimani anglatadi?",
    "answer": " Tizimlashtirilgan so‘rov tili",
    "noAnswer1": "Ketma-ket so‘rov tili",
    "noAnswer2": "Tezkor so‘rov tili",
    "noAnswer3": "Ma’lumotlar so‘rov tili"
  },
  {
    "question": "Qaysi SQL operatorlari jadvallar sxemasini boshqarishi mumkin?",
    "answer": " CRATE, ALTER, DROP",
    "noAnswer1": "GRANT, REVOKE",
    "noAnswer2": "SELECT, UPDATE, INSERT, DELETE",
    "noAnswer3": "MODIFY, TRUNCATE"
  },
  {
    "question": "Qaysi SQL operatorlari ma’lumotlar ustidan murakkab amallarni bajaradi?",
    "answer": " SELECT, UPDATE, INSERT, DELETE",
    "noAnswer1": "MODIFY, TRUNCATE",
    "noAnswer2": "GRANT, REVOKE",
    "noAnswer3": "CRATE, ALTER, DROP"
  },
  {
    "question": "Sana vaqt toifasini toping",
    "answer": " DATE",
    "noAnswer1": "NUMERIC",
    "noAnswer2": "BOOLEAN",
    "noAnswer3": "INTEGER"
  },
  {
    "question": "+, -, * , / operatorlari qanday nomlanadi?",
    "answer": " Arifmetik amallar",
    "noAnswer1": "Mantiqiy amallar",
    "noAnswer2": "Solishtirish amallari",
    "noAnswer3": "O‘zlashtirish amallari"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarining bo‘sh bo‘lmasligini ko‘rsatadi?",
    "answer": " NOT NULL",
    "noAnswer1": "FORGN KEY",
    "noAnswer2": "UNIQUE",
    "noAnswer3": "ChECK"
  },
  {
    "question": "VARChAR  ga qanday qiymatlar kiritish mumki?",
    "answer": " O‘zgaruvchan toifadagi satr tipi",
    "noAnswer1": "O‘zgarmas toifadagi satr tipi",
    "noAnswer2": "Sana va vaqt",
    "noAnswer3": "Moddiy son"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarini ma’lum bir shart bo‘yicha tekshiradi?",
    "answer": " CHECK",
    "noAnswer1": "FORGN KEY",
    "noAnswer2": "NOT NULL",
    "noAnswer3": "UNIQUE"
  },
  {
    "question": "Qaysi bir MBBT klient-server turiga kirmaydi?",
    "answer": " MS ACCESS",
    "noAnswer1": "MySQL",
    "noAnswer2": "SQL Server",
    "noAnswer3": "ORACLE"
  },
  {
    "question": "TRUE va FALSE  Qiymatini qabul qiluvchi toifalar qanday nomlanadi?",
    "answer": " Bul tipli",
    "noAnswer1": "Butun tipli",
    "noAnswer2": "Sana va vaqt tipli",
    "noAnswer3": "Qator"
  },
  {
    "question": "Ma’lumotlar bazasidagi butun son toifasini qaysi biri berishi mumkin?",
    "noAnswer1": "String",
    "answer": "INTEGER",
    "noAnswer2": "TIMESTAMP",
    "noAnswer3": "VARChAR"
  },
  {
    "question": "NOT, AND, OR operatorlari vazifasi nimadan iborat?",
    "answer": " Mantiqiy amallar",
    "noAnswer1": "Solishtirish ammallar",
    "noAnswer2": "O‘zlashtirish amallar",
    "noAnswer3": "Arfmetik amallar va operatorlar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarining yagonaligini ta’minlaydi",
    "answer": " UNIQUE",
    "noAnswer1": "FORGN KEY",
    "noAnswer2": "NOT NULL",
    "noAnswer3": "ChECK"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarini bog‘langan jadvaldagi birlamchi kalit qiymatlaridan oladi",
    "answer": " FOREIGN KEY",
    "noAnswer1": "NOT NULL",
    "noAnswer2": "ChECK",
    "noAnswer3": "PRIMARY KEY"
  },
  {
    "question": "CREATE operatori vazifasi?",
    "answer": " Ma’lumotlar bazasidan obekt yaratish",
    "noAnswer1": "Ma’lumotlar bazasidan obektni o‘chirish",
    "noAnswer2": "Ma’lumotlar bazasidan obektni o‘zgartirish",
    "noAnswer3": "Jadvalga qator qo‘shish"
  },
  {
    "question": "ALTER operatori vazifasi?",
    "answer": " Ma’lumotlar bazasidan obektni o‘zgartirish",
    "noAnswer1": "Ma’lumotlar bazasidan obektni o‘chirish",
    "noAnswer2": "Ma’lumotlar bazasidan obektni o‘zgartirish",
    "noAnswer3": "Jadvalga qator qo‘shish"
  },
  {
    "question": "DROP operatori vazifasi?",
    "answer": " Ma’lumotlar bazasidan obektni o‘chirish",
    "noAnswer1": "Ma’lumotlar bazasidan obektni o‘zgartirish",
    "noAnswer2": "Jadvalga qator qo‘shish",
    "noAnswer3": "Jadvalga ob’ektni o‘chirish"
  },
  {
    "question": "Agar siz ustun natija qaytaruvchi jadvalga kirishni xohlasanagiz qanday kalit so‘zdan so‘ng SQL so‘rovi ko‘rsatilishi kerak?",
    "answer": " SELECT",
    "noAnswer1": "WHERE",
    "noAnswer2": "GROUP BY",
    "noAnswer3": "FROM"
  },
  {
    "question": "Quyidagi so‘rovda s belgisi nimani anglatadi: SELECT   FROM STUDENT s;",
    "answer": " Psevdonim",
    "noAnswer1": "Indeks",
    "noAnswer2": "Jadval",
    "noAnswer3": "Tegishlilikni"
  },
  {
    "question": "Qidiruv so‘rovlarini tezlashtirish uchun qaysi MBBT mexanizmi ishlatiladi",
    "answer": " Indekslar",
    "noAnswer1": "Viewlar",
    "noAnswer2": "Protseduralar",
    "noAnswer3": "So‘rovlarni bajarilishini tezlashtirish mumkin emas"
  },
  {
    "question": "Keltirilgan qaysi MBBT tekin GNU lisenziyasi bilan tarqatiladi",
    "answer": " MySQL",
    "noAnswer1": "MICROSOFT SQL Server",
    "noAnswer2": "IBM DB2",
    "noAnswer3": "ORACLE"
  },
  {
    "question": "SELECT *FROM STUDENT WHERE SURNAME=‘P’;",
    "answer": " P harfiga teng bo‘lgan familyalar chiqadi.",
    "noAnswer1": "P bilan boshlanuvchi familyalar chiqadi.",
    "noAnswer2": "Hech nima chiqmaydi",
    "noAnswer3": "P harfiga teng bo‘lmagan familyalar chiqadi"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NULL nimani anglatadi?",
    "answer": " Ustinda qiymat bermaslikka ruxsat berishni",
    "noAnswer1": "Ustunga tegishli bo‘lgan satr qiymatlari bo‘sh bo‘lmasligini",
    "noAnswer2": "Jadval bo‘m bo‘shligini",
    "noAnswer3": "Jadval satrilarida bo‘sh probellar bo‘lmasligini"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NOT NULL cheklagichi nimani anglatadi?",
    "answer": " Ustunga tegishli bo‘lgan satr qiymatlari bo‘sh bo‘lmasligini",
    "noAnswer1": "Ustunga tegishli bo‘lgan satr qiymatlari bo‘sh bo‘lishligini",
    "noAnswer2": "Jadval bo‘m bo‘shligini",
    "noAnswer3": "Jadval satrilarida bo‘sh probellar bo‘lmasligini"
  },
  {
    "question": "So‘rovlarda qanday elementlarga psevdonim belgilash mumkin",
    "answer": " Jadval va qatorlarga",
    "noAnswer1": "Faqat qatorlarga",
    "noAnswer2": "Faqat jadvallarga",
    "noAnswer3": "Shartlarga"
  },
  {
    "question": "Qaysi korxona relyatsion MBBT yaratish bilan shug‘ullanmaydi",
    "answer": " GOOGLE",
    "noAnswer1": "MICROSOFT",
    "noAnswer2": "IBM",
    "noAnswer3": "ORACLE"
  },
  {
    "question": "SELECT operatorini vazifasi?",
    "answer": " Jadvaldan ma’lumotlarni tanlash",
    "noAnswer1": "Jadvalga satr qo‘shish",
    "noAnswer2": "Jadvalni o‘zgartirish",
    "noAnswer3": "Jadvaldan tanlash"
  },
  {
    "question": "UPDATE operatorini vazifasi?",
    "answer": " Jadvalda qatorni o‘zgartirish",
    "noAnswer1": "Jadvalga satr qo‘shish",
    "noAnswer2": "Jadvalni o‘zgartirish",
    "noAnswer3": "Jadvaldan tanlash"
  },
  {
    "question": "DELETE operatorini vazifasi?",
    "answer": " Qatorni o‘chirish",
    "noAnswer1": "Jadvalga satr qo‘shish",
    "noAnswer2": "Jadvalni o‘zgartirish",
    "noAnswer3": "Jadvaldan tanlash"
  },
  {
    "question": "INSERT operatorini vazifasi?",
    "answer": " Jadvalga satr qo‘shish",
    "noAnswer1": "Jadvalni o‘zgartirish",
    "noAnswer2": "Jadvaldan tanlash",
    "noAnswer3": "Qatorni o‘chirish"
  },
  {
    "question": "Bitta so’rovning ichida joylashgan ikkinchi so‘rov qanday nomlanadi, misol: SELECT *  FROM STUDENT WHERE group_id IN (SELECT id FROM group WHERE number=‘223-10’)",
    "answer": "Qism  so‘rov",
    "noAnswer1": "Bog‘lanish",
    "noAnswer2": "Birlashuv",
    "noAnswer3": "Farq"
  },
  {
    "question": "Qaysi korxona relyatsion MBBT yaratish bozorida yetakchi xisoblanadi?",
    "answer": " ORACLE",
    "noAnswer1": "GOOGLE",
    "noAnswer2": "MICROSOFT",
    "noAnswer3": "IBM"
  },
  {
    "question": "Bir nechta shartlardan foydalanishda WHERE operatorida shartlar orasi qanday ajratiladi?",
    "answer": " Kalit so‘zlar, AND yoki OR operatorlari",
    "noAnswer1": "Nuqtali vergul",
    "noAnswer2": "FROM kalit so‘zi",
    "noAnswer3": "Vergul"
  },
  {
    "question": "SELECT operatoridan FROM so‘zidan keying yozuv nimani bildiradi?",
    "answer": " jadvalning nomini",
    "noAnswer1": "ustunning nomini",
    "noAnswer2": "shart",
    "noAnswer3": "1 kalit"
  },
  {
    "question": "Qaysi peredikat berilgan shartni qanoatlantiruvchi qidiruvni amalga oshiradi?",
    "answer": " WHERE",
    "noAnswer1": "GROUP BY",
    "noAnswer2": "HAVING",
    "noAnswer3": "ORDER BY"
  },
  {
    "question": "Qays peredikat Saralash uchun ishlatiladi?",
    "answer": " ORDER BY",
    "noAnswer1": "WHERE",
    "noAnswer2": "HAVING",
    "noAnswer3": "GROUP BY"
  },
  {
    "question": "To‘gri yozilgan SELECT operatorini ko‘rsating.",
    "answer": " SELECT  * FROM",
    "noAnswer1": "SELECT  *",
    "noAnswer2": "SELECT  * FROM  Table",
    "noAnswer3": "FROM"
  },
  {
    "question": "INSERT, UPDATE, DELETE quyidagilarning biriga ishlamaydi?",
    "noAnswer1": "DML",
    "answer": " DDL",
    "noAnswer2": "DQL",
    "noAnswer3": "DSL"
  },
  {
    "question": "Qaysi operatorda WHERE ishlatib bo‘lmaydi?",
    "answer": " INSERT",
    "noAnswer1": "UPDATE",
    "noAnswer2": "SELECT",
    "noAnswer3": "DELETE"
  },
  {
    "question": "CREATE TABLE, ALTER TABLE, DROP TABLE  Komandalarini qaysilarda ishlatib bo‘lmaydi",
    "answer": " DDL",
    "noAnswer1": "DML",
    "noAnswer2": "DQL",
    "noAnswer3": "DCL"
  },
  {
    "question": "SELECT operatoridan keying * nimani bildiradi?",
    "answer": " hamma ustunlarni belgilashni",
    "noAnswer1": "hamma satrlarni belgilash",
    "noAnswer2": "satr qatorlari yulduzcha bilan shifrlanganini",
    "noAnswer3": "bu belgidan foydalanib bo‘lmaydi"
  },
  {
    "question": "INTERSECT operatori nimaga mo‘ljallangan",
    "answer": " Ikkala tanlovda mavjud umumiy natijalarni chiqarish uchun",
    "noAnswer1": "Birinchi tanlovda mavjud, lekin ikkinchisida yo‘q bo‘lgan natijalarni chiqarish uchun",
    "noAnswer2": "Ikki so‘rov tanlovining natijalarini birlashtirish uchun",
    "noAnswer3": "Ikki jadvaldan olingan natijalarni birlashtirish uchun"
  },
  {
    "question": "SELECT MAX(ID) FROM STUDENT so‘rovini nima qaytaradi?",
    "answer": " STUDENTning maksimal indentifikatori",
    "noAnswer1": "oxirgi identifikatori",
    "noAnswer2": "STUDENTning  birinchi identifikatori",
    "noAnswer3": "STUDENTlarning miqdori"
  },
  {
    "question": "SELECT AVG(age) FROM STUDENT so‘rovi nimani qaytaradi",
    "answer": " STUDENTlarning o‘rtacha yoshini",
    "noAnswer1": "Maksimal STUDENT",
    "noAnswer2": "Minimal STUDENT",
    "noAnswer3": "STUDENTlar yoshining yig‘indisini"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT *  FROM students , Groups",
    "answer": "groups va students jadvalidagi dekart ko‘paytmani chiqaradi",
    "noAnswer1": "groups va students jadvalidagi barcha qatorlarni chiqaradi",
    "noAnswer2": "groups va students jadvalidagi s.group_id = g.id tengligi orqali bog‘lanadigan barcha qatorlarni chiqaradi",
    "noAnswer3": "groups va students jadvalidagi s.group_id = g.id tengligini qanoatlantiruvchi qatorlardan tashqari barcha qatorlarni chiqarib beradi"
  },
  {
    "question": "Jadvaldagi qatorlar miqdori qanday hisoblanadi",
    "answer": " COUNT funksiyasi yordamida",
    "noAnswer1": "AVG funksiyasi yordamida",
    "noAnswer2": "MIN funksiyasi yordamida",
    "noAnswer3": "MAX funksiyasi yordamida"
  },
  {
    "question": "Qaysi operatorlar bilan MIN, MAX, AVG, SUM agregat funksiyalar bajarilishi mumkin",
    "answer": " faqatgina SELECT bilan",
    "noAnswer1": "SELECT va DELETE",
    "noAnswer2": "UPDATE",
    "noAnswer3": "INSERT va UPDATE"
  },
  {
    "question": "MINUS operatori nimaga mo‘ljallangan",
    "answer": " Birinchi tanlovda mavjud, lekin ikkinchisida yo‘q bo‘lgan natijalarni chiqarish uchun",
    "noAnswer1": "Ikki so‘rov tanlovining natijalarini birlashtirish uchun",
    "noAnswer2": "Ikki jadvaldan olingan natijalarni birlashtirish uchun",
    "noAnswer3": "Ikkala tanlovda mavjud umumiy natijalarni chiqarish uchun"
  },
  {
    "question": "SELECT MIN(ID) FROM STUDENT so‘rovi nimani qaytaradi",
    "answer": " STUDENTning minimal indentifikatori",
    "noAnswer1": "STUDENTning  oxirgi identifikatori",
    "noAnswer2": "STUDENTning  birinchi identifikatori",
    "noAnswer3": "STUDENTlarning miqdori"
  },
  {
    "question": "Qaysi operatorlardan biri faqatgina bitta qator ustida operatsiya bajarishi mumkin",
    "answer": " INSERT",
    "noAnswer1": "UPDATE",
    "noAnswer2": "DELETE",
    "noAnswer3": "SELECT"
  },
  {
    "question": "Ma’lumotlarni qaysi tipiga MIN, MAX, AVG, SUM agregat funksiyalarni qo‘llash mumkin emas",
    "answer": " Qatorlar",
    "noAnswer1": "Sonlar",
    "noAnswer2": "Sanalar",
    "noAnswer3": "Barcha ma’lumotlarga qo‘llash mumkin"
  },
  {
    "question": "Ko‘p foydalanuvchili MBBTda ishlashning murakkabligi nimada",
    "answer": " Loyihalashning, ekspluatasiyaning murakkabligi",
    "noAnswer1": "Loyihalashning murakkabligi",
    "noAnswer2": "Ekspluatatsiyaning murakkabligi",
    "noAnswer3": "MB ga bo‘lgan talablar o‘zgaradi"
  },
  {
    "question": "Lokal MB da ko‘pfoydalanuvchili ruxsat mavjudmi",
    "answer": " Yo‘q",
    "noAnswer1": "Ha",
    "noAnswer2": "Ha, MySQL va ORACLE mahsulotlarida",
    "noAnswer3": "MySQL dan tashqari har qanday MB da"
  },
  {
    "question": "Qaysi operatorda WHERE ishlatib bo‘lmaydi?",
    "answer": " INSERT",
    "noAnswer1": "UPDATE",
    "noAnswer2": "SELECT",
    "noAnswer3": "DELETE"
  },
  {
    "question": "Ko‘pchilik foydalanuvchilar tomonidan MBni yaratish, to‘ldirish va birgalikda foydalanish uchun mo‘ljallangan dasturiy vositalar majmuasi nima deyiladi?",
    "answer": " MBBT",
    "noAnswer1": "Ma’lumotlar bazasi",
    "noAnswer2": "Ma’lumotlar lug‘ati",
    "noAnswer3": "Hisoblash tizimi"
  },
  {
    "question": "VARChAR",
    "answer": " O‘zgaruvchan toifadagi satr tipi",
    "noAnswer1": "Butun tip",
    "noAnswer2": "Sana va vaqt",
    "noAnswer3": "Moddiy son"
  },
  {
    "question": "Daraxt ko‘rinishida qaysi ma’lumotlar bazasi tasvirlanadi?",
    "answer": " Ierarxik",
    "noAnswer1": "Tarmoqli",
    "noAnswer2": "Realasion",
    "noAnswer3": "Inververtlangan ro‘yxat asosiga"
  },
  {
    "question": "Realyatsion maydonda mohiyat aloqa diagrammasini o‘zgartirganda atribut nimaga o‘zgaradi?",
    "answer": " Atributga",
    "noAnswer1": "Jadvalga",
    "noAnswer2": "Indeksga",
    "noAnswer3": "Ikkilamchi kalitga"
  },
  {
    "question": "Ma’lumotlar bazasi adminstratori",
    "answer": " Bitta yoki bir nechta ma’lumotlar bazasi xaqida to‘liq tasavvurga ega mutaxassis bo‘lib, ushbu ma’lumotlar bazasini loyihalash va qo’llanilishini nazorat qilish bilan shug‘ullanadi",
    "noAnswer1": "Bitta yoki bir nechta ma’lumotlar bazasi xaqida to‘liq tasavvurga ega mutaxassis bo‘lib, ushbu ma’lumotlar bazasiga xizmat ko‘rsatish bilan shug‘ullanadi",
    "noAnswer2": "Bitta yoki bir nechta ma’lumotlar bazasi xaqida to‘liq tasavvurga ega mutaxassis bo‘lib, ushbu ma’lumotlar bazasiga texnik xizmat ko‘rsatish bilan shug‘ullanadi",
    "noAnswer3": "Bitta yoki bir nechta ma’lumotlar bazasi xaqida to‘liq tasavvurga ega mutaxassis bo‘lib, ushbu ma’lumotlar bazasiga tarmoqda xizmat ko‘rsatish bilan shug‘ullanadi"
  },
  {
    "question": "MBBTning vazifasiga nimalar kirmaydi?",
    "answer": " Ma’lumotlar ortiqcha xajmini qisqartirish",
    "noAnswer1": "Ma’lumotlarni taxrirlash",
    "noAnswer2": "Ma’lumotlarning xavfsizligi va butunligi",
    "noAnswer3": "Ma’lumotlarning qayta tiklanishi va nusxa olinishi"
  },
  {
    "question": "Ma’lumotlar bazasi tizimi nimalarni o‘z ichiga oladi?",
    "answer": " Ma’lumotlar, qurilma ta’minoti, dasturiy ta’minot foydalanuvchilari",
    "noAnswer1": "Ma’lumotlar va foydalanuvchilar",
    "noAnswer2": "Qurilma ta’minoti va foydalanuvchilar",
    "noAnswer3": "Dasturiy ta’minot va foydalanuvchilar"
  },
  {
    "question": "MBBT dagi axborotni jismonan saqlashga yaqin abstraksiya bosqichini ko‘rsating:",
    "answer": " Ichki",
    "noAnswer1": "Konseptual",
    "noAnswer2": "Tashqi",
    "noAnswer3": "Jismoniy"
  },
  {
    "question": "Ma’lumotlar bazasining klassifikatsiyasiga tegishli bo‘lmagan javobni ko‘rsating:",
    "answer": " Axborotni qayta ishlash tezligi bo‘yicha",
    "noAnswer1": "Ma’lumotlarni taqdim etish usullari bo‘yicha",
    "noAnswer2": "Ma’lumotlarni saqlash va ularga murojaat qilishni tashkil qilish bo‘yicha",
    "noAnswer3": "Saqlanuvchi axborot turi bo‘yicha"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modellari bo‘yicha klassifikatsiya qaysi variantda tasvirlangan:",
    "answer": " Ierarxik, tarmoqli, relyatsion, ob’ektga yo‘naltirilgan",
    "noAnswer1": "Lokal, tarmoq, bo‘lingan",
    "noAnswer2": "Hujjatli, faktografik, leksikografik",
    "noAnswer3": "Faylli va katalogli"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning relyatsion modelida foydalanuvchiga ma’lumotlar qaysi ko‘rinishda uzatiladi?",
    "answer": " Jadvallar",
    "noAnswer1": "Ro‘yxatlar",
    "noAnswer2": "Daraxt turidagi graf",
    "noAnswer3": "Ixtiyoriy graf"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modeli nima?",
    "answer": " Malumotlar bazasida saqlanuvchi ma’lumotlar mantiqiy strukturasi",
    "noAnswer1": "Ma’lumotlar bazasida saqlanuvchi ma’lumotlarning jismoniy strukturasi",
    "noAnswer2": "Ma’lumotlarning ierarxik strukturasi",
    "noAnswer3": "Ma’lumotlarning tarmoq strukturasi"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning tarmoq modelida ma’lumotlar nima orqali taqdim etilgan?",
    "answer": " Ixtiyoriy graf",
    "noAnswer1": "Ro‘yxatlar",
    "noAnswer2": "Daraxt turidagi graf",
    "noAnswer3": "Jadvallar"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modelining qaysi biri eng keng tarqalgan xisoblanadi?",
    "answer": " Relyatsion",
    "noAnswer1": "Tarmoqli",
    "noAnswer2": "Ob’ektga yo‘naltirilgan",
    "noAnswer3": "Ierarxik"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning ierarxik modelida ma’lumotlar nima orqali taqdim etilgan?",
    "answer": " Daraxt turidagi graf",
    "noAnswer1": "Ixtiyoriy graf",
    "noAnswer2": "Ro‘yxatlar",
    "noAnswer3": "Jadvallar"
  },
  {
    "question": "Moxiyat-aloqa modelining asosiy tushunchalari",
    "answer": " Moxiyat, atribut, aloqa",
    "noAnswer1": "Atribut, jadval, aloqa",
    "noAnswer2": "Ob’ekt, xususiyat, munosabat",
    "noAnswer3": "Kalit, qiymat, assotsiatsiya"
  },
  {
    "question": "Shahar va viloyat ob’ektlari orasidagi aloqa modelini aniqlang",
    "answer": " 1: m",
    "noAnswer1": "1:1",
    "noAnswer2": "m:n",
    "noAnswer3": "m:1"
  },
  {
    "question": "Ma’lumotlar bazasiga tegishli bo’lmagan tushunchani aniqlang?",
    "answer": " Mavjudlik",
    "noAnswer1": "Domen",
    "noAnswer2": "Kortej",
    "noAnswer3": "Munosabat"
  },
  {
    "question": "Kortrej bu ....?",
    "answer": " Qator",
    "noAnswer1": "Ustun",
    "noAnswer2": "Jadval",
    "noAnswer3": "Katakcha"
  },
  {
    "question": "Edgar Kod kim bo‘lgan?",
    "answer": " Matematik",
    "noAnswer1": "Fizik",
    "noAnswer2": "Ekonomist",
    "noAnswer3": "Tarixchi"
  },
  {
    "question": "Munosobat nima?",
    "answer": " Jadval",
    "noAnswer1": "Ustun",
    "noAnswer2": "Qator",
    "noAnswer3": "Katakcha"
  },
  {
    "question": "Mohiyat qanday ma’lumotlar modeliga tegishli?",
    "answer": " Relyatsion",
    "noAnswer1": "Tarmoqli",
    "noAnswer2": "Ob’ektga yo‘naltirilgan",
    "noAnswer3": "Ierarxik"
  },
  {
    "question": "Domen bu ....?",
    "answer": " Ustun",
    "noAnswer1": "Jadval",
    "noAnswer2": "Qator",
    "noAnswer3": "Katakcha"
  },
  {
    "question": "Nuqtalar o‘rniga to‘g‘ri keladigan so‘zni ko‘rsating ……….ustunlar to‘plami berilgan qatorlar guruhini ko‘rsating:",
    "answer": " Jadval",
    "noAnswer1": "Ma’lumot turlari",
    "noAnswer2": "Cheklanish",
    "noAnswer3": "Ma’lumotlar ombori"
  },
  {
    "question": "Katakcha massiv shaklidagi qiymatni qabul qiladimi?",
    "answer": " Yo‘q",
    "noAnswer1": "Ha",
    "noAnswer2": "Aniq domeni mavjud bo‘lsa",
    "noAnswer3": "Kortej aniq bo‘lsa"
  },
  {
    "question": "Jadval ma’lumot kaliti bu ....",
    "answer": " Jadval ma’lumotlar yig‘indisi bo‘lib, uning har bir qatorini aniqlaydi",
    "noAnswer1": "Jadval qatori bo‘lib, o‘zida unikal ma’lumot saqlamaydi",
    "noAnswer2": "Ona jadval kaliti",
    "noAnswer3": "Jadval ma’lumotlar modeli bo’lib, uning har bir ustunini belgilaydi"
  },
  {
    "question": "Realyatsion ma’lumotlar bazasida ma’lumotlarni saqlashning asosiy formasi",
    "answer": " Jadval",
    "noAnswer1": "Yozuv",
    "noAnswer2": "Domen",
    "noAnswer3": "Atribut"
  },
  {
    "question": "Unikal identifikator nima?",
    "answer": " Bir qatorni boshqa qatordan ajratib turadigan qiymatga ega ustun",
    "noAnswer1": "Jadval nomi",
    "noAnswer2": "Ustun nomi",
    "noAnswer3": "Qator va ustunlarning mosligi"
  },
  {
    "question": "Jadvalning har xil qatorlari bir xil qiymatdagi kalitga ega bo‘ladimi?",
    "answer": " Yo‘q",
    "noAnswer1": "Ha",
    "noAnswer2": "Agar jadval ikkilamchi kalitga ega bo‘lsa",
    "noAnswer3": "Agar jadval birlamchi kalitga ega bo’lsa"
  },
  {
    "question": "Qator bu?",
    "answer": " Yozuv, kortej",
    "noAnswer1": "Atribut, maydon",
    "noAnswer2": "Fayl",
    "noAnswer3": "Annorgamma"
  },
  {
    "question": "Unikal maydon deb qanday qatorga aytiladi?",
    "answer": " Qiymati qaytarilmaydigan maydon",
    "noAnswer1": "O’zaro bog’langan maydon",
    "noAnswer2": "Qiymati oshish xususiyatiga ega maydon",
    "noAnswer3": "Qiymati boshqasi bilan bog‘lanmagan maydon"
  },
  {
    "question": "Ustun bu?",
    "answer": " Maydon, atribut",
    "noAnswer1": "Domen, kortej",
    "noAnswer2": "Kortej",
    "noAnswer3": "Jadval, domen"
  },
  {
    "question": "Qaysi turdagi MBBT da ustun va maydonning kema-ketligi ahamiyatsiz?",
    "answer": " Realyatsionda",
    "noAnswer1": "Tarmoqda",
    "noAnswer2": "Ierarxiyada",
    "noAnswer3": "Barcha MBBT da ustun va maydonning kema-ketligi aniq ko’rsatilgan bo’lishi shart"
  },
  {
    "question": "Jadval ma’lumotlar strukturasi qanday aniqlanadi?",
    "answer": " Jadval l ustunlari nomlanishi bilan",
    "noAnswer1": "Jadval kengligi bilan",
    "noAnswer2": "Jadval ustunlari nomlanishi bilan va ustun tartiblanishi bilan",
    "noAnswer3": "Jadval ustun qatori bilan"
  },
  {
    "question": "Realyatsion  ma’lumotlar bazasida qaysi so‘rov tillari qo‘llaniladi?",
    "answer": " SQL",
    "noAnswer1": "Objective C",
    "noAnswer2": "Haskell",
    "noAnswer3": "Basic"
  },
  {
    "question": "Ma’lumotlar bazasi jadvalar nima uchun kerak?",
    "answer": " Ma’lumotlarni saqlashga",
    "noAnswer1": "Ma’lumotlarni qayta ishlashga",
    "noAnswer2": "Ma’lumotlar bazasini kiritish va ularni ko‘zdan kechirish",
    "noAnswer3": "Qiyin dasturlar yaratishga"
  },
  {
    "question": "Normallashtirish nimaga kerak?",
    "answer": " Anomaliyadan holi bo‘lish uchun",
    "noAnswer1": "Jadval sonini kamaytirish uchun",
    "noAnswer2": "Jadval sonini ko‘paytirish uchun",
    "noAnswer3": "Foydali ma’lumotlarni ko‘paytirish uchun"
  },
  {
    "question": "Ikkinchi normal formada quyidagicha talab qo‘yiladi:",
    "answer": " Jadvalning hamma maydonlari birinchi kalitga bog‘liq",
    "noAnswer1": "Hamma maydonlar mustaqil",
    "noAnswer2": "Hamma maydonlar  kalitsiz maydonlarga bog‘liq",
    "noAnswer3": "Hamma maydonlar ikkilamchi kalitga bog’liq"
  },
  {
    "question": "Qaysi SQL operatorlari ma’lumotlar ustidan murakkab amallarni bajaradi?",
    "answer": " SELECT, UPDATE, INSERT, DELETE",
    "noAnswer1": "MODIFY, TRUNCATE",
    "noAnswer2": "GRANT, REVOKE",
    "noAnswer3": "CRATE, ALTER, DROP"
  },
  {
    "question": "Ko‘pchilik foydalanuvchilar tomonidan ma'lumotlar bazasini yaratish, to‘ldirish va birgalikda \r\nfoydalanish uchun mo‘ljallangan dasturiy vositalar majmuasi nima deyiladi?",
    "answer": " Ma'lumotlar bazasini boshqarish tizimi"
  },
  {
    "question": "Fayllarni boshqarish qanday amalga oshiriladi",
    "answer": " Fayl tizimi orqali"
  },
  {
    "question": "O‘zaro bog‘langan ma’lumotlar nima deb ataladi",
    "answer": " ma’lumotlar tizimi"
  },
  {
    "question": "Mohiyat-aloqa modelining asosiy tushunchalari",
    "answer": " mohiyat, atribut, aloqa"
  },
  {
    "question": "Ma’lumotlar bazasi adminstratori bu-",
    "answer": " bitta yoki bir nechta ma’lumotlar bazasi haqida to‘liq tasavvurga ega mutaxassis bo‘lib, ushbu \r\nma’lumotlar bazasini loyihalash va qo’llanilishini nazorat qilish bilan shug‘ullanadi"
  },
  {
    "question": "Atributlarda saqlanadigan ma'lumotlar bu-",
    "answer": " atribut qiymatlari"
  },
  {
    "question": "Zamonaviy ma'lumotlar bazasini boshqarish tizimlari fayl tizimining qaysi muammosiga yechim bo'la \r\noladi",
    "answer": " ko‘p foydalanuvchilar bilan ishlashga"
  },
  {
    "question": "Ma`lumotlar bazasidagi axborotlar qanday boʻlishi kerak",
    "answer": " qarama – qarshi bo`lmasligi; xatosiz bo`lishi; yaxlit bo`lishi kerak"
  },
  {
    "question": "Ma'lumotlar bazasini boshqarish tizimidagi foydalanuvchilar uchun mos abstraksiya bosqichini \r\nko‘rsating",
    "answer": " Tashqi"
  },
  {
    "question": "Ma'lumotlar bazasi asosiy modellari nechta?",
    "answer": " 3 ta (Tarmoqli, Relyatsion, va Ierarxik)"
  },
  {
    "question": "Ma’lumotlarni tavsiflanishiga ko'ra nechtaga ajratish mumkin",
    "answer": " Ikki (Logik va fizik)"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modellari bo‘yicha klassifikatsiya qaysi variantda tasvirlangan",
    "answer": " ierarxik, tarmoqli, relyatsion, obyektga yo‘naltirilgan"
  },
  {
    "question": "Obyektlar orasidagi munosabat turini aniqlang: talaba va reyting daftarchasi",
    "answer": " 1:1"
  },
  {
    "question": "Ma’lumotlar bazasini boshqarish tizimi deganda nimani tushunasiz?",
    "answer": " ma'lumotlar bazalarini yaratish va foydalanish uchun boshqarishni ta'minlovchi, maxsus lingvistik \r\nvositalar majmuiga ega bo`lgan dasturiy ta`minot"
  },
  {
    "question": "Ma'lumotlar bazasidagi ma'lumotlarni xotiraga saqlanishi qaysi tavsiflashga tegishli",
    "answer": " Fizik tavsiflash"
  },
  {
    "question": "Ma`lumotlar bazasidagi ma`lumotlarni foydalanuvchilarga interfeys orqali ko`rinishi qaysi \r\ntavsiflashga tegishli",
    "answer": " logik"
  },
  {
    "question": "Bitta MBBTda nechtagacha ma'lumotlar bazasi bo`lishi mumkin",
    "answer": " bir nechta"
  },
  {
    "question": "MBBT arxitekturasining bosqichi hisoblanmaydigan javob variantini ko‘rsating",
    "answer": " Datalogik"
  },
  {
    "question": "MBBT arxitekturasining nechta bosqichi mavjud",
    "answer": " 3 ta (Tashqi, Konseptual va Fizik)"
  },
  {
    "question": "Ob’еkt atributi deganda nima tushuniladi?",
    "answer": " jadval ustuni"
  },
  {
    "question": "Mohiyat aloqa diagrammasida uchraydigan shaklni toping",
    "answer": " Ellips"
  },
  {
    "question": "Mohiyat aloqa diagrammasida qanday shakl qo`llanilmaydi",
    "answer": " Parallelogram"
  },
  {
    "question": "Relyatsion algebra amallarini ko`rsating",
    "answer": " Kesishuv, birlashtirish, ayirish, dekard ko`paytma"
  },
  {
    "question": "Relyatsion ma’lumotlar bazasidagi asosiy tushunchalarni aniqlang?",
    "answer": " Jadval, maydon, yozuv"
  },
  {
    "question": "Relyatsion ma’lumotlar bazasining asosiy tushunchalarini aniqlang?",
    "answer": " munosabatlarning majmuasi yoki ikkilik jadvallari"
  },
  {
    "question": "Markazlashtirilgan to`plam va ma’lumotlardan jamoaviy foydalanish zarur bo`lgan dasturiy, til, \r\ntashkiliy va texnik vositalar tizimi ........deb ataladi.",
    "answer": " ma’lumotlar banki"
  },
  {
    "question": "Amaliy masalalar uchun avtomatlashtirilgan ishlov berishni ta’minlovchi dastur yoki dasturlar \r\nkompleksiga .............deyiladi.",
    "answer": " ma’lumotlar bazasini boshqarish tizimi"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning relyatsion modelida foydalanuvchiga ma’lumotlar qaysi ko‘rinishda \r\nuzatiladi",
    "answer": " jadvallar"
  },
  {
    "question": "Tezkorlik va xotira sarfi ko`rsatkichlari bo`yicha samarali ish olib borish imkoniyati qaysi ma'lumot \r\nmodellarida mavjud",
    "answer": " Tarmoq modellari"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modeli bu-",
    "answer": "Malumotlar bazasida saqlanuvchi ma’lumotlarning mantiqiy strukturasi"
  },
  {
    "question": "Qo`llanilish tavsifiga ko`ra MBBTlar qanday turlarga bo`linadi?",
    "answer": " bir va ko`p foydalanuvchilar"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning tarmoq modelida ma’lumotlar bog'lanishi qanday tasvirlanadi",
    "answer": " ixtiyoriy graf"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modelining qaysi biri eng keng tarqalgan hisoblanadi",
    "answer": " relyatsion"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning ierarxik modelida ma’lumotlar bog'lanishi qanday tasvirlanadi",
    "answer": " daraxt turidagi graf"
  },
  {
    "question": "Jadvallar o'rtasidagi aloqalarning uch turi to‘g‘ri berilgan javobni ko‘rsating",
    "answer": " Birga-ko‘p, birga-bir, ko‘pga-ko‘p"
  },
  {
    "question": "Talabalar va guruh obyektlari orasidagi aloqa modelini aniqlang",
    "answer": " n:1"
  },
  {
    "question": "Viloyat va tumanlar obyektlari orasidagi aloqa modelini aniqlang",
    "answer": " 1: m"
  },
  {
    "question": "Mohiyat-aloqa modelini birinchi bo'lib kim taklif qilgan",
    "answer": " Piter Chen"
  },
  {
    "question": "Talabalar va auditoriyalar obyektlari orasidagi munosabat turini aniqlang",
    "answer": " m:n"
  },
  {
    "question": "O'qituvchilar va talabalar jadvallari orasida munosobat turini aniqlang",
    "answer": " n:m"
  },
  {
    "question": "Daraxt ko‘rinishida qaysi ma’lumotlar bazasi tasvirlanadi?",
    "answer": " ierarxik"
  },
  {
    "question": "Kortej bu ....?",
    "answer": " qator"
  },
  {
    "question": "Munosobat nima?",
    "answer": " jadval"
  },
  {
    "question": "Domen bu ....?",
    "answer": " ustun"
  },
  {
    "question": "Relyatsion ma’lumotlar bazasida ma’lumotlarni saqlashning asosiy formasi",
    "answer": " Jadval"
  },
  {
    "question": "Unikal identifikator nima",
    "answer": " Bir qatorni boshqa qatordan ajratib turadigan qiymatga ega ustun"
  },
  {
    "question": "Jadvalning har xil qatorlari bir xil qiymatdagi kalitga ega bo‘ladimi?",
    "answer": " Yo‘q, bir xil qiymatga ega bo'lmaydi"
  },
  {
    "question": "Qator bu?",
    "answer": " yozuv, kortej, ekzemplyar"
  },
  {
    "question": "Qaysi bir MBBT klient-server turiga kirmaydi",
    "answer": " ACCESS"
  },
  {
    "question": "Unikal maydon deb qanday qatorga aytiladi",
    "answer": " qiymati qaytarilmaydigan maydon"
  },
  {
    "question": "Relyatsion ma’lumotlar bazasida qaysi so‘rov tillari qo‘llaniladi",
    "answer": " SQL"
  },
  {
    "question": "Ma’lumotlar bazasi jadvali nima uchun kerak?",
    "answer": " ma’lumotlarni saqlashga"
  },
  {
    "question": "Ikkinchi normal formada quyidagicha talab qo‘yiladi:",
    "answer": " Jadvalning hamma maydonlari birinchi kalitga bog‘liq"
  },
  {
    "question": "SQL kengaytmasi nimani anglatadi?",
    "answer": " Strukturalashgan so‘rov tili"
  },
  {
    "question": "Qaysi SQL operatorlari ma'lumotlar bazasida ma'lumotlarni tavsiflashda ishlatiladi?",
    "answer": " CRATE, ALTER, DROP"
  },
  {
    "question": "Qaysi SQL operatorlari ma'lumotlar bazasida ma'lumotlarni manipulyatsiyalashda ishlatiladi?",
    "answer": " SELECT, UPDATE, INSERT, DELETE"
  },
  {
    "question": "Sana vaqt toifasi qaysi javobda to'g'ri ko'rsatilgan",
    "answer": " TIMESTAMP"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarining bo‘sh bo‘lmasligini \r\nko‘rsatadi",
    "answer": " NOT NULL"
  },
  {
    "question": "VARCHAR toifasi bu -",
    "answer": " o‘zgaruvchan toifadagi satr tipi"
  },
  {
    "question": "3 NFga o`tishdan oldin jadval qaysi normal formada bo`lishi shart",
    "answer": "2 NF"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarini ma’lum bir shart bo‘yicha \r\ntekshiradi",
    "answer": "CHECK"
  },
  {
    "question": "TRUE va FALSE qiymatini qabul qiluvchi toifalar qanday nomlanadi?",
    "answer": " Bul toifali"
  },
  {
    "question": "Butun toifa keltirilgan javobni ko`rsating",
    "answer": " NUMERIC"
  },
  {
    "question": "NOT, AND, OR operatorlari vazifasi nimadan iborat?",
    "answer": " Mantiqiy amallarni bajarish"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarining takrorlanmasligini ta’minlaydi",
    "answer": " UNIQUE"
  },
  {
    "question": "MAX() agregat funksiyasining vazifasini ayting",
    "answer": " Belgilangan ustunning eng katta qiymatini topish"
  },
  {
    "question": "MIN() agregat funksiyasining vazifasini ayting",
    "answer": " Belgilangan ustunning eng kichik qiymatini topish"
  },
  {
    "question": "AVG() agregat funksiyasining vazifasini ayting",
    "answer": " Belgilangan ustunning o`rta arifmetigini topish"
  },
  {
    "question": "COUNT() agregat funksiyasining vazifasini ayting",
    "answer": " Belgilangan obyektning qatorlar sonini topish"
  },
  {
    "question": "CREATE operatorining vazifasi?",
    "answer": " Ma’lumotlar bazasida obyekt yaratish"
  },
  {
    "question": "ALTER operatorining vazifasi?",
    "answer": " Ma’lumotlar bazasida obyektni o‘zgartirish"
  },
  {
    "question": "DROP operatorining vazifasi?",
    "answer": " Ma’lumotlar bazasidan obyektni o‘chirish"
  },
  {
    "question": "Quyidagi so‘rov nimani anglatadi: SELECT * FROM STUDENT;",
    "answer": " STUDENT jadvalini tanlash"
  },
  {
    "question": "Quyidagi so‘rovda STUDENT nimani anglatadi: SELECT * FROM STUDENT;",
    "answer": " jadval nomi"
  },
  {
    "question": "Qidiruv so‘rovlarini tezlashtirish uchun qaysi MBBT mexanizmi ishlatiladi",
    "answer": " indekslar"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NULL nimani anglatadi?",
    "answer": " Ustunda qiymat bermaslik imkoniyatini"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NOT NULL nimani anglatadi?",
    "answer": " Ustunga tegishli bo‘lgan satr qiymatlari bo‘sh bo‘lmasligini"
  },
  {
    "question": "SELECT operatorini vazifasi?",
    "answer": " Jadvaldan ma’lumotlarni tanlash"
  },
  {
    "question": "UPDATE operatorini vazifasi?",
    "answer": " Jadvalda qatorni o‘zgartirish"
  },
  {
    "question": "DELETE operatorining vazifasi?",
    "answer": " Qatorni o‘chirish"
  },
  {
    "question": "INSERT operatorini vazifasi?",
    "answer": " Jadvalga satr qo‘shish"
  },
  {
    "question": "Bitta so`rovning ichida joylashgan ikkinchi so‘rov qanday nomlanadi, misol: SELECT * FROM STUDENT \r\nWHERE group_id IN (SELECT id FROM group WHERE number=‘217-18’)",
    "answer": " quyi so‘rov"
  },
  {
    "question": "SUM() agregat funksiyasining vazifasini ayting",
    "answer": " Belgilangan ustunning yig’indisini topish"
  },
  {
    "question": "Qaysi predikat saralash uchun ishlatiladi?",
    "answer": " ORDER BY"
  },
  {
    "question": "Qaysi predikat guruhlash uchun ishlatiladi?",
    "answer": " GROUP BY"
  },
  {
    "question": "SELECT * FROM STUDENT WHERE SURNAME LIKE 'P%';",
    "answer": " P harfi bilan boshlanadigan familiyalar chiqadi."
  },
  {
    "question": "SELECT operatorida FROM so‘zidan keyingi yozuv nimani bildiradi?",
    "answer": " jadvalning nomini"
  },
  {
    "question": "Qaysi predikat berilgan shartni qanoatlantiruvchi qidiruvni amalga oshiradi?",
    "answer": " WHERE"
  },
  {
    "question": "To‘gri yozilgan SELECT operatorini ko‘rsating.",
    "answer": " SELECT * FROM"
  },
  {
    "question": "INSERT, UPDATE, DELETE quyidagi SQL tillarining qaysi biriga tegishli?",
    "answer": " DML"
  },
  {
    "question": "Qaysi operatorda WHERE ishlatib bo‘lmaydi?",
    "answer": " INSERT"
  },
  {
    "question": "DROP va DELETE operatorlarining farqi nimada",
    "answer": " DROP obyektni, DELETE qatorni o`chiradi"
  },
  {
    "question": "SELECT operatoridan keyin '*' belgisi nimani bildiradi?",
    "answer": " hamma ustunlarni belgilashni"
  },
  {
    "question": "Qaysi operator yordamida jadvallarni «qo`shish» amali bajariladi",
    "answer": " SELECT + JOIN"
  },
  {
    "question": "Qaysi operator yordamida «kesishuv» amali bajariladi",
    "answer": "INNER JOIN"
  },
  {
    "question": "Qaysi operator yordamida «tanlash» amali bajariladi",
    "answer": " SELECT + WHERE"
  },
  {
    "question": "Qaysi operator yordamida «birlashtirish» amali bajariladi",
    "answer": " UNION"
  },
  {
    "question": "Ichki bog‘lanish operatori – bu",
    "answer": " INNER JOIN"
  },
  {
    "question": "Chap tashqi bog‘lanish operatori – bu",
    "answer": " LEFT OUTER JOIN"
  },
  {
    "question": "SELECT COUNT(id) FROM STUDENT so‘rovi qanday natija qaytaradi",
    "answer": " STUDENTlarning sonini"
  },
  {
    "question": "Qaysi operator yordamida «ayiruv» amali bajariladi",
    "answer": " MINUS"
  },
  {
    "question": "To‘liq tashqi bog‘lanish operatori – bu",
    "answer": " FULL OUTER JOIN"
  },
  {
    "question": "Relyatsion turdagi ma'lumotlar bazasi obyektlari necha o’lchovli jadvalni tashkil etadi?",
    "answer": " ikki"
  },
  {
    "question": "SQL tilini tarkibiy qismlariga kiradi: 1) ma’lumotlarni aniqlash tili; 2) ma’lumotlarni \r\nmanipulyatsiyalash tillari; 3) ma’lumotlarni boshqarish tili; 4) dasturlash tillari",
    "answer": " 1, 2, 3"
  },
  {
    "question": "DML komandalarini ko`rsating",
    "answer": " INSERT, DELETE, UPDATE, SELECT"
  },
  {
    "question": "DDL komandalarini ko`rsating",
    "answer": " CREATE, ALTER, DROP"
  },
  {
    "question": "UPDATE operatorini qaysi kalit so’zi jadvalni aniq ustunlarini tanlab olish va o’zgartirish imkonini \r\nberadi?",
    "answer": " SET"
  },
  {
    "question": "Amaliyotda eng ko’p tarqalgan ma’lumotlar bazalari bu-",
    "answer": " Relyatsion ma’lumotlar bazalari"
  },
  {
    "question": "SELECT operatoridan FROM so‘zidan keyingi yozuv nimani bildiradi?",
    "answer": " jadvalning nomini"
  },
  {
    "question": "Select lpad(o'yinchi, 10, '*') from fun. So`rov natijasini tanlang",
    "answer": "****Suarez"
  },
  {
    "question": "Select rpad(uyinchi, 10, '*') from func; So`rov natijasini tanlang",
    "answer": "Suarez****"
  },
  {
    "question": "SELECT Name, Surname FROM talaba; So’rovida Name, Surname nimani anglatadi",
    "answer": "Ustunlar"
  },
  {
    "question": "SELECT LEFT(`ism`, 5) FROM `xodimlar`; so`rov natijasini toping",
    "answer": " Xodimlar ismining birinchi 5 ta harflarini chiqaradi"
  },
  {
    "question": "select year from test where name='Jonny'); So`rovdagi year va name nimani anglatadi?",
    "answer": "Ustunlarni"
  },
  {
    "question": "Select * from table1 INNER JOIN table2 ON table1.name=table2.name; So`rovdagi \"table2\" nima?",
    "answer": " Jadval nomi"
  },
  {
    "question": "UNION operatori vazifasi",
    "answer": "Jadvallarni birlashtiradi"
  },
  {
    "question": "Select name, surname from test1 UNION ALL select name, surname from test2; So`rovdagi \r\n\"ALL\" qanday vazifa bajaradi?",
    "answer": " Jadvallar birlashtiriladi"
  },
  {
    "question": "SELECT MIN(yosh), ism, familiya FROM test GROUP By ism, familiya; So`rovidagi MIN(yosh) funksiyasi \r\nnatijasi?",
    "answer": "Yosh ustuni minimal qiymatini xisoblash"
  },
  {
    "question": "SELECT * FROM test ORDER BY yosh DESC; So`rovdagi \"DESC\" nima vazifa bajaradi?",
    "answer": " yosh ustunini teskarisiga saralaydi"
  },
  {
    "question": "DISTINCT operatorining vazifasi nima?",
    "answer": " ma'lumotlar orasida bir xil ma'lumot bo'lsa, bu ma'lumotni bitta qilib chiqaradi"
  },
  {
    "question": "Select ism, yosh, familiya from test where ism like 'S%'; So`rovdagi \"%\" nima uchun ishlatiladi",
    "answer": " \"S\"dan keyin simvollar bo`lishi mumkin"
  },
  {
    "question": "Jadval ustunidagi yig‘indi qiymati qanday hisoblanadi",
    "answer": " SUM funksiyasi yordamida"
  },
  {
    "question": "O‘ng tashqi bog‘lanish operatori – bu",
    "answer": " RIGHT OUTER JOIN"
  },
  {
    "question": "JOIN operatori nimaga mo‘ljallangan",
    "answer": " Ikki jadvaldan olingan natijalarni bitta jadvalda birlashtirish uchun"
  },
  {
    "question": "MySQL so’rovlarida ko’pincha FROM so’zidan keyin …….. nomi yoziladi.",
    "answer": "Jadval"
  },
  {
    "question": "DELETE * FROM Mahsulotlar WHERE ID=2; so`rovni natijasini aniqlang",
    "answer": " Mahsulotlar jadvalidan id 2 ga teng bo`lgan qatorni barcha ma`lumotlarini o`chiradi"
  },
  {
    "question": "So`rov orqali mahsulot ob`yektidan nonni narxi o`zgartirilsin",
    "answer": " UPDATE mahsulot SET narxi= `1050` WHERE Mahsulot nomi=`non`"
  },
  {
    "question": "Tranzaksiyalarning asosiy xususiyatlari",
    "answer": " ACID"
  },
  {
    "question": "MySQL da CREATE VIEW operatori ishlatilsa",
    "answer": " 2 ta jadvaldan kerakli ustunlar tanlanadi va virtual usulda ko’rsatiladi"
  },
  {
    "question": "DELETE * FROM Yetkazib_beruvchilar WHERE Yetkazib_beruvchilar=\"Sarbon MChJ\" So`rovidagi * \r\nFROM nima uchun ishlatiladi?",
    "answer": " Berilgan jadvaldagi hamma ma’lumotlarni ko’rib chiqish"
  },
  {
    "question": "SELECT MAX(id) FROM STUDENT so‘rovini nima qaytaradi",
    "answer": " STUDENTning maksimal indentifikatori"
  },
  {
    "question": "SELECT AVG(age) FROM STUDENT so‘rovi nimani qaytaradi",
    "answer": " STUDENTlarning o‘rtacha yoshini"
  },
  {
    "question": "Jadvaldagi qatorlar soni qanday hisoblanadi",
    "answer": " COUNT funksiyasi yordamida"
  },
  {
    "question": "Agregat funksiyalarni ko`rsating",
    "answer": " MIN, MAX,Count, AVG"
  },
  {
    "question": "Qaysi operatorlar bilan MIN, MAX, AVG, SUM agregat funksiyalar bajarilishi mumkin",
    "answer": " faqatgina SELECT bilan"
  },
  {
    "question": "SELECT MAX(`max_narxi(so`m)`) AS `eng qimmat mahsulot` FROM `mahsulotlar`; so`rov natijasini \r\ntoping",
    "answer": " Eng qimmat narxga ega bo`lgan maxsulot narxi"
  },
  {
    "question": "SELECT AVG(`max_narxi(so`m)`) FROM `mahsulotlar`; so`rov natijasini toping",
    "answer": " Mahsulotlar jadvalidagi `max_narxi` ustunining o`rta arifmetigi"
  },
  {
    "question": "SELECT AVG(oylik) FROM Xodimlar; so‘rovi nimani qaytaradi",
    "answer": "Xodimlarning o’rtacha oyligi"
  },
  {
    "question": "SELECT MIN(ID) FROM STUDENT so‘rovi nimani qaytaradi",
    "answer": " STUDENTning minimal indentifikatori"
  },
  {
    "question": "SELECT MAX(ID) FROM STUDENT so‘rovi nimani qaytaradi",
    "answer": " STUDENTning maksimal identifikatori"
  },
  {
    "question": "SELECT SUBSTR(`familiya`,1,1) FROM `xodimlar`; so`rov natijasini toping",
    "answer": " Xodimlar familyalarining bosh harflarini chiqaradi"
  },
  {
    "question": "Ma’lumotlarni qaysi toifasiga MIN, MAX, AVG, SUM agregat funksiyalarni qo‘llash mumkin emas",
    "answer": " Qatorlar"
  },
  {
    "question": "LIKE to`g`ri qollanilgan so`rovni ko`rsating",
    "answer": " SELECT * FROM Products WHERE PName LIKE ‘%gizmo%’"
  },
  {
    "question": "Select * from exam Where mark in (4,5); so`rov natijasini toping",
    "answer": " Imtixondan 4 yoki 5 olganlar hadiqa ma`lumot"
  },
  {
    "question": "Lower operatorining vazifasi nima?",
    "answer": " berilgan ustunni kichik harflarga almashtirib beradi"
  },
  {
    "question": "Upper operatorining vazifasi nima?",
    "answer": " berilgan ustunni katta harflarga almashtirib beradi"
  },
  {
    "question": "SELECT TIMESTAMPDIFF(SECOND, '2015-04-29 22:14:55', '2015-04-29 22:24:18'); So`rov natijasini \r\naniqlang",
    "answer": " soniyalar orasidagi farq"
  },
  {
    "question": "MBBTda DDL tilini vazifasi nima?",
    "answer": " Ma`lumotlarni tasvirlash tili"
  },
  {
    "question": "SQLda satrni uzunligini aniqlab beradigan operatorni toping",
    "answer": " Length"
  },
  {
    "question": "MBBTda DML tilini vazifasi nima?",
    "answer": " Ma`lumotlarni manipulyatsiya qilish tili"
  },
  {
    "question": "MBBTda DCL tilini vazifasi nima?",
    "answer": " Ma`lumotlarni nazorat qilish tili"
  },
  {
    "question": "LONG toifasi xotiradan qancha joy egallaydi",
    "answer": " Bitta jadval uchun Maksimal darajasi 4G"
  },
  {
    "question": "Ko‘p foydalanuvchili MBBTda ishlashning murakkabligi nimada",
    "answer": " Loyihalash, foydalanishda hamda boshqarishda murakkabligi"
  },
  {
    "question": "Mahalliy (Lokal) MB da ko‘p foydalanuvchi ishlashiga ruxsat mavjudmi",
    "answer": " Yo‘q"
  },
  {
    "question": "Zahira o‘rnini bosuvchi MBBT serveri nima deb ataladi",
    "answer": " Mirroring",
    "noAnswer1": ""
  },
  {
    "question": "Bitta tranzaksiya nechta operatsiyadan iborat bo‘lishi mumkin",
    "answer": " bir nechta"
  },
  {
    "question": "Tranzaksiya nechta xususiyatga ega",
    "answer": " 4 (ACID)"
  },
  {
    "question": "MB dagi ma’lumotlarni tranzaktsiya mantiqiy birligi nima deb ataladi",
    "answer": " Tranzaksiya"
  },
  {
    "question": "Tizimdagi ma’lumotlarni qayta tiklash uchun MB qanday imkoniyatidan foydalanish zarur",
    "answer": " Backup"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiyadagi o‘zgarishlarni saqlash uchun xizmat qiladi",
    "answer": " COMMIT"
  },
  {
    "question": "Ma'lumotlar bazasini boshqarish jarayonida bitta rolda nechta foydalanuvchi bo‘lishi mumkin",
    "answer": " Bir nechta"
  },
  {
    "question": "SELECT * FROM test ORDER BY ism ASC; So`rovdagi \"ASC\" nima vazifa bajaradi?",
    "answer": " Ism ustunini oshib borish tartibda saralaydi"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiyani boshlanishini e’lon qilish uchun xizmat qiladi",
    "answer": " BEGIN TRANSACTION"
  },
  {
    "question": "Ma’lumotlarga ruxsat etish xavfsizligi qanday mexanizm bilan ta’minlanadi",
    "answer": " Foydalanuvchilar va rollar"
  },
  {
    "question": "Tranzaksiya bu......?",
    "answer": " Ma’lumotlar bilan ishlashda o‘zining mantiqiy birligiga ega bo‘lgan ma’lumotlar bazasi \r\njarayonlarining ketma-ket bajarilish guruxi"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiyani boshlang'ich holatga qaytarish uchun xizmat qiladi",
    "answer": " ROLLBACK+"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiya muvafaqiyatli bajarilganligini anglatadi",
    "answer": "COMMIT"
  },
  {
    "question": "Xodim jadvalida `id`=5 bo‘lgan xodimning Familiyasini o‘zgartirish amali qaysi javobda to‘g‘ri \r\nko‘rsatilgan",
    "answer": " UPDATE `Xodim` SET `Familiyasi`=`Anvarov` where `id`=5"
  },
  {
    "question": "Ma’lumotlar bazasi xavfsizligini ta’minlash nimalardan iborat bo'ladi",
    "answer": " Jadvallar ustida ayrim amallarni bajarish huquqi faqatgina aniq foydalanuvchiga va aniq vaqt \r\ndavomida beriladi"
  },
  {
    "question": "Bitta foydalanuvchida nechtagacha rollar bo‘lishi mumkin",
    "answer": " Bir nechta"
  },
  {
    "question": "Quyidagi So’rov berilgan. SELECT Familiya, CONCAT(shahar, \" \", tuman, \" \", manzil) AS manzil FROM \r\ntalaba; AS yordamchi so’z vazifasi?",
    "answer": "Manzil nomli yangi ustunda so’rov natijalarini chiqarishga"
  },
  {
    "question": "DELETE FROM Mijozlar WHERE MijozName=‘Alimov Bekzod’;",
    "answer": "Mijozlar jadvalidagi MijozName ‘Alimov Bekzod’ bo’lgan yozuv o’chiriladi"
  },
  {
    "question": "Bir nechta amallar birligining bajarilishining nomlanishi nima deyiladi",
    "answer": " Tranzaksiya"
  },
  {
    "question": "GRANT SELECT, INSERT ON Talaba TO 'Alimov_Doniyor'; so’rovi natijasi",
    "answer": "Talaba jadvalga, 'Alimov_Doniyor' foydalanuvchiga SELECT, INSERT operatorlarini ishlatishga \r\nruxsat berish"
  },
  {
    "question": "LIKE to`g`ri qo'llanilgan so`rovni ko`rsating",
    "answer": " SELECT * FROM Products WHERE Name LIKE ‘%ford%’"
  },
  {
    "question": "MySQL so’rov bajarilsa natijasi qanday bo’ladi? SELECT MAX(Baho) AS Katta_ball FROM \r\nYakuniy_Nazorat;",
    "answer": "Yakuniy_Nazorat jadvalining Baho ustunidagi ma’lumotlarni eng kattasini Katta_ball deb nomlab \r\nko’rsatish"
  },
  {
    "question": "INSERT INTO operatori vazifasi?",
    "answer": "Ma’lumotlarni jadvalga kiritish va satr qo’shish uchun",
    "noAnswer1": ""
  },
  {
    "question": "Xodim jadvaliga yangi atribut qo‘shish amali qaysi javobda to‘g‘ri ko‘rsatilgan",
    "answer": " ALTER TABLE `Xodim` ADD COLUMN `Tel_raqam` text(15) null"
  },
  {
    "question": "“Xodim jadvalidan yoshi 37 dan yuqori va familiyasi A harfi bilan boshlanuvchilarning oylik maoshi \r\no‘rta arifmetigi topilsin”. Yuqoridagi shartni qaysi javobdagi so‘rov qanoatlantiradi",
    "answer": " SELECT AVG(`maosh`) as `Natija` from `Xodim` WHERE `yoshi`>37 AND `Familiyasi` LIKE`A%`"
  },
  {
    "question": "Talaba jadvalidan familiyasi B harfi bilan boshlanib, V harfi bilan tugovchilarini sonini sanash so‘rovi \r\nqaysi javobda to‘g‘ri ko‘rsatilgan",
    "answer": " SELECT COUNT(*) as `Natija` from `Talaba` WHERE `Familiyasi` LIKE `B%V`"
  },
  {
    "question": "Select LPAD(oyinchi, 11, '*') from fun. So`rov natijasini tanlang",
    "answer": " ****Ahmedov"
  },
  {
    "question": "ALTER TABLE `Xodim` MODIFY `Jinsi` varchar(5); Sorovi natijasi",
    "answer": "Jadvaldagi ‘Jinsi’ nomli ustun ma’lumot tipini varchar(5) ga o’zgartiradi"
  },
  {
    "question": "Mahsulot jadvalidan narxi 4000 so'm va undan yuqori bo‘lganlarini nomi bo‘yicha guruhlab chiqarish \r\nso‘rovi qaysi javobda to‘g‘ri ko‘rsatilgan",
    "answer": " SELECT `Nomi`, MAX(`narx`) as `Natija` from `Mahsulot` GROUP BY `Nomi` HAVING \r\nMAX(`narx`)>=4000"
  },
  {
    "question": "Fanlar jadvalidan `fan_soati` 80 dan yuqori bo‘lganlarini nomi bo‘yicha guruhlab chiqarish so‘rovi \r\nqaysi javobda to‘g‘ri ko‘rsatilgan",
    "answer": " SELECT `Fan_nomi`, MAX(`fan_soati`) as `Natija` from `Fanlar` GROUP BY `Fan_nomi` HAVING \r\nMAX(`fan_soati`)>80"
  },
  {
    "question": "Xodim jadvalidan ixtiyoriy atributni o'chirish amali qaysi javobda to‘g‘ri ko‘rsatilgan",
    "answer": " ALTER TABLE `Xodim` DROP COLUMN `Tel_raqam` text(15)"
  },
  {
    "question": "Xodim jadvalidan ixtiyoriy atributning ma'lumot tipini o'zgartirish amali qaysi javobda to‘g‘ri \r\nko‘rsatilgan",
    "answer": " ALTER TABLE `Xodim` MODIFY `Jinsi` varchar(5)"
  },
  {
    "question": "Select RPAD(oyinchi, 11, '*') from func; So`rov natijasini tanlang",
    "answer": " Ahmedov****"
  },
  {
    "question": "Mahsulot jadvalidan ixtiyoriy atributning ma'lumot tipini o'zgartirish amali qaysi javobda to‘g‘ri \r\nko‘rsatilgan",
    "answer": " ALTER TABLE `Mahsulot` MODIFY `narxi` varchar(15) null"
  },
  {
    "question": "SELECT TIMESTAMPDIFF(YEAR, '2015-04-29 22:14:55', '2018-04-29 22:24:18'); So`rov natijasini \r\naniqlang",
    "answer": "Yillar orasidagi farq"
  },
  {
    "question": "SELECT * FROM talaba ORDER BY baho DESC; So`rovdagi \"desc\" nima vazifa bajaradi?",
    "answer": " Baho ustunini teskarisiga saralaydi"
  },
  {
    "question": "Berilgan misoldagi ‘number’ so’zi ?: SELECT * FROM STUDENT WHERE group_id IN (SELECT id FROM \r\ngroup WHERE number=‘217-18’)",
    "answer": "ustun"
  },
  {
    "question": "Quyidagi berilgan MySQL so’rovini ishga tushirsa sintaksis xato bor deb, bajarilmaydigan so’rovni \r\ntoping.",
    "answer": "INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) VALUES (1, 'Rustam', 32, 'Andijon', \r\nDone );"
  },
  {
    "question": "SELECT * FROM STUDENT WHERE SURNAME LIKE 'P%';",
    "answer": " P harfi bilan boshlanadigan familyalar chiqadi."
  },
  {
    "question": "Qaysi javobda LIKE operatoridan to'g'ri foydalanilgan",
    "answer": " SELECT * from Talaba WHERE `Familiyasi` LIKE '%ev'"
  },
  {
    "question": "Talaba jadvalidan bahosi 4 dan yuqori bo‘lganlarini familiyasi bo‘yicha guruhlab chiqarish so‘rovi \r\nqaysi javobda to‘g‘ri ko‘rsatilgan",
    "answer": " \"SELECT `Familiyasi`, MAX(`baho`) as `Natija` from `Talaba` GROUP BY `Familiyasi` HAVING \r\nMAX(`baho`)>4\""
  },
  {
    "question": "Maxsulotlar nomli jadval berilgan. Quyidagi MySQL so’rov bajarilsa natijasi qanday bo’ladi? SELECT * \r\nFROM Maxsulotlar WHERE Narx BETWEEN 101 AND 205 AND CategoryID IN (1,2,3,8,12);",
    "answer": "Maxsulotlar jadvalining Narx nomli ustundagi ma’lumotlar ichidan 101 va 205 lar oralig’idagi yozuvi \r\nbor qatorlarni ko’rsatish hamda faqat CategoryID = 1,2,3,8,12 ga teng bo’lganlarini ko’rsatish"
  },
  {
    "question": "Qaysi javobda INSERT INTO SELECT amali bajarilish tartibi to’g’ri keltirilgan?",
    "answer": "Birinchi jadvaldan ikkinchi jadvalga shartlarda berilgan ma’lumotlarni ko’chirish",
    "noAnswer1": ""
  },
  {
    "question": "O'quvchilar jadvalidan 10 yoshlilarini sonini chiqaruvchi so'rov qaysi javobda to'g'ri ko'rsatilgan",
    "answer": " SELECT Count(ID) as `Natija` from `O'quvchilar` WHERE `Yoshi`='10'"
  },
  {
    "question": "Qaysi javobda LIKE operatoridan to'g'ri foydalanilgan",
    "answer": " SELECT * from Xodim WHERE Ism LIKE '%or%'"
  },
  {
    "question": "Ma’lumotlar bazasiga ta’rifbering",
    "answer": "ma’lum bir sxema asosida saqlanuvchi ma’lumotlarning strukturalashgan majmuasi"
  },
  {
    "question": "Ko‘pchilik foydalanuvchilar tomonidan MBni yaratish, to‘ldirish va birgalikda foydalanish uchunmo‘ljallangan dasturiy vositalarmajmuasi nima deyiladi?",
    "answer": "MBBT"
  },
  {
    "question": "Fayllarni boshqarishda nima yordam beradi",
    "answer": "Fayl tizimi"
  },
  {
    "question": "Ma’lumotlar bazasiadminstratori",
    "answer": "bitta yoki bir nechta ma’lumotlar bazasi xaqida to‘liq tasavvurga ega mutaxassis bo‘lib, ushbu ma’lumotlar bazasini loyihalash va qullanilishini nazorat qilishbilan shug‘ullanadi"
  },
  {
    "question": "Zamonaviy MBBTlar fayl tizimining qaysi muammosini hal qiladi",
    "answer": "ko‘p foydalanuvchilar bilanishlash"
  },
  {
    "question": "MBBT dagi foydalanuvchilarga yaqin abstraksiya bosqichiniko‘rsating",
    "answer": "tashqi"
  },
  {
    "question": "MBBT arxitekturasining bosqichi bo‘lmagan javob variantini ko‘rsating",
    "answer": "jismoniy"
  },
  {
    "question": "MBBT dagi MBning barcha mantiqiy strukturasiniko‘rsatuvchi abstraksiya bosqichini ko‘rsating",
    "answer": "konseptual"
  },
  {
    "question": "MBBTning vazifasiga nimalar kirmaydi",
    "answer": "Ma’lumotlar ortiqcha xajminiqisqartirish"
  },
  {
    "question": "Ma’lumotlar bazasi tizimi nimalarni o‘z ichiga oladi",
    "answer": "Ma’lumotlar, qurilma ta’minoti, dasturiy ta’minot foydalanuvchilari"
  },
  {
    "question": "MBBT dagi axborotni jismonan saqlashga yaqin abstraksiya bosqichini ko‘rsating",
    "answer": "ichki"
  },
  {
    "question": "Ma’lum bir sust strukturaga ega va qiyin shakllanuvchi fan sohasining sun’iy intellekt tizimi nima deb ataladi",
    "answer": "Ekspert tizimi"
  },
  {
    "question": "Ma’lumotlar bazasining klassifikatsiyasiga tegishli bo‘lmagan javobni ko‘rsating",
    "answer": "Axborotni qayta ishlash tezligibo‘yicha"
  },
  {
    "question": "Saqlanayotgan axborot turi bo‘yicha klassifikatsiya qaysi variantda tasvirlangan",
    "answer": "hujjatli, faktografik, leksikografik"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modellari bo‘yicha klassifikatsiya qaysi variantda tasvirlangan",
    "answer": "ierarxik, tarmoqli, relyatsion,ob’ektga yo‘naltirilgan"
  },
  {
    "question": "Ma’lumotlar saqlashni va ularga murojaat qilishni tashkillishtirish bo‘yichaklassifikatsiya qaysi variantda tasvirlangan",
    "answer": "lokal, tarmoqli, taqsimlangan"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning relyatsion modeli: foydalanuvchiga ma’lumotlar qaysi ko‘rinishda uzatiladi",
    "answer": "jadvallar"
  },
  {
    "question": "Ma’lumotlarni taqdim etishmodeli nima",
    "answer": "Malumotlar bazasida saqlanuvchi ma’lumotlar mantiqiy strukturasi"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning tarmoq modeli: ma’lumotlar nima orqali taqdim etilgan",
    "answer": "ixtiyoriy graf"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modelining qaysi biri eng keng tarqalgan xisoblanadi",
    "answer": "relyatsion"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning ierarxik modeli: ma’lumotlar nima orqali taqdim etilgan",
    "answer": "daraxt turidagi graf"
  },
  {
    "question": "Moxiyat-aloqa modelining asosiy tushunchalari",
    "answer": "moxiyat, atribut, aloqa"
  },
  {
    "question": "Ob’ektlar orasidagi munosabat turini aniqlang: talaba va reyting daftarchasi",
    "answer": "01:01"
  },
  {
    "question": "Talaba va reyting daftari orasidagialoqa modelini aniqlang",
    "answer": "01:01"
  },
  {
    "question": "Binar aloqaning uch turi to‘g‘ri berilgan javobni ko‘rsating",
    "answer": "Birga-ko‘p, birga-bir, ko‘pga- ko‘p."
  },
  {
    "question": "Talaba va guruh ob’ektlari orasidagi aloqa modelini aniqlang",
    "answer": "n:1"
  },
  {
    "question": "Shahar va viloyat ob’ektlari orasidagialoqa modelini aniqlang",
    "answer": "1: m"
  },
  {
    "question": "Moxiyat-aloqa modelini kim taklif qilgan",
    "answer": "Piter Chen"
  },
  {
    "question": "Talaba va auditoriya ob’ektlari orasidagi munosabat turini aniqlang",
    "answer": "n:m"
  },
  {
    "question": "FIO (o‘qituvchi, kafedra) Guruh (Guruh,fan,FISh) va o‘qituvchi (NO_o‘qituvchi,FIO_o‘qituvchi kafedra) jadvallar orasida munosobatlar qanday",
    "answer": "m : n"
  },
  {
    "question": "Relyatsion modeldan keyin qanday ma’lumotlar bazasi vujudga keladi",
    "answer": "assotsiativ"
  },
  {
    "question": "Daraxt ko‘rinishida qaysi ma’lumotlar bazasi tasvirlanadi?",
    "answer": "ierarxik"
  },
  {
    "question": "Ma’lumotlar bazasini boshqarishda avval ma’lumotlar bilan ishlashning qanday prinsiplari mavjud bo‘lgan?",
    "answer": "Pastki darajada tashqi xotirama’lumotlarini boshqarish"
  },
  {
    "question": "Relyatsion nazariyada quyidagilardan qaysi biri ta’luqli emas?",
    "answer": "Piter Chen"
  },
  {
    "question": "Ma’lumotlar bazasiga tegishlitushunchani aniqlang?",
    "answer": "mavjudlik"
  },
  {
    "question": "Kortrej bu ?",
    "answer": "qator"
  },
  {
    "question": "Edigan Kod kim bo‘lgan?",
    "answer": "matematik"
  },
  {
    "question": "Munosobat nima?",
    "answer": "jadval"
  },
  {
    "question": "Relyatsion bazaga o‘xshash juda bo‘lgan analoginiko‘rsating?",
    "answer": "ikki o‘lchamli jadval"
  },
  {
    "question": "Tushuncha qanday ma’lumotlarmodeliga tegishli?",
    "answer": "relyatsion"
  },
  {
    "question": "Domen bu ?",
    "answer": "ustun"
  },
  {
    "question": "Nuqtalar o‘rniga to‘g‘rikeladigan so‘zni ko‘rsating……….ustunlar to‘plami berilganqatorlar guruhini ko‘rsating",
    "answer": "Jadval"
  },
  {
    "question": "Katakcha massiv shaklidagi qiymatni qabul qiladimi",
    "answer": "yo‘q"
  },
  {
    "question": "Jadval ma’lumot kaliti bu ....",
    "answer": "Jadval ma’lumotlar yig‘indisi bo‘lib, uning har bir qatorini aniqlaydi"
  },
  {
    "question": "Realyatsion ma’lumotlar bazasida ma’lumotlarni saqlashning asosiy formasi",
    "answer": "Jadval"
  },
  {
    "question": "Realyatsion maydonda mohiyat aloqa diagrammasini o‘zgartirganda atribut nimaga o‘zgaradi?",
    "answer": "atributga"
  },
  {
    "question": "Unikal identifikator nima",
    "answer": "Bir qatorni boshqa qatordan ajratib turadigan qiymatga ega ustun"
  },
  {
    "question": "Jadvalning har xil qatorlari bir xil qiymatdagi kalitga ega bo‘ladimi?",
    "answer": "Yo‘q"
  },
  {
    "question": "Qator bu?",
    "answer": "yozuv, atribut, ekzempleyar,borliq"
  },
  {
    "question": "Realyatsion maydonda mohiyat aloqa diagrammasini o‘zgartirganda mohiyat nimaga o‘zgaradi?",
    "answer": "jadvalga"
  },
  {
    "question": "Unikal maydon deb qanday qatorga aytiladi",
    "answer": "qiymati qaytarilmaydigan maydon"
  },
  {
    "question": "Ustun bu?",
    "answer": "maydon, atribut"
  },
  {
    "question": "Qaysi MBBT da ustun va maydonning kema-ketligi ahamiyatsiz?",
    "answer": "realyatsionda"
  },
  {
    "question": "Realyatsion algebrada qanday operatsiya turlari mavjud",
    "answer": "An’anaviy va noan’anaviy"
  },
  {
    "question": "(A UNION V) UNION S ≡ AUNION (V UNION S)",
    "answer": "Assoativ xususiyati"
  },
  {
    "question": "A UNION B ≡ V UNION A",
    "answer": "Kommunikativ xususiyat"
  },
  {
    "question": "Jadval ma’lumotlar strukturasiqanday aniqlanadi?",
    "answer": "jadval ustunlari nomlanishi bilan"
  },
  {
    "question": "Noan’anaviy realyatsionoperatsiyalar",
    "answer": "Bog‘lanish, tanlash, proeksiya, bo‘lish"
  },
  {
    "question": "Realyatsion ma’lumotlar bazasida qaysi so‘rovtillari qo‘llaniladi",
    "answer": "SQL"
  },
  {
    "question": "Ma’lumotlar bazasi jadvalinima uchun kerak:",
    "answer": "ma’lumotlarni saqlashga;"
  },
  {
    "question": "An’anaviy realyatsionoperatsiyalarga nimalar kiradi",
    "answer": "kesib olish, umumlashtirish,farqlanish,dekart ko‘paytma"
  },
  {
    "question": "Birinchi normal formadaquyidagicha talab qo‘yiladi",
    "answer": "Jadvalning hamma maydonlari mayda maydonchalarga bo‘linishi kerak emas"
  },
  {
    "question": "Normallashtirish nimaga kerak",
    "answer": "Anomaliyadan holi bo‘lish uchun"
  },
  {
    "question": "Ikkinchi normal formadaquyidagicha talab qo‘yiladi:",
    "answer": "Jadvalning hamma maydonlaribirinchi kalitga bog‘liq"
  },
  {
    "question": "Nechta normal forma mavjud?",
    "answer": 6
  },
  {
    "question": "Uchinchi normal formadaquyidagicha talab qo‘yiladi:",
    "answer": "Kalit maydon bilan jadvalo‘rtasida bog‘liqlik bo‘lmasligi"
  },
  {
    "question": "SQL kengaytmasi nimani anglatadi?",
    "answer": "Sutrukturalashgan so‘rov tili"
  },
  {
    "question": "Qaysi SQL operatorlari jadvallar sxemasini boshqarishi mumkin?",
    "answer": "CRATE, ALTER, DROP"
  },
  {
    "question": "Qaysi SQL operatorlari ma’lumotlar ustidan murakkab amallarni bajaradi?",
    "answer": "SELECT, UPDATE, INSERT, DELETE"
  },
  {
    "question": "Obektning nomi ma’lumotlarjadvalida qanday nomlanadi?",
    "answer": "identifikatorlar"
  },
  {
    "question": "Sana vaqt toifasi",
    "answer": "TIMESTAMP"
  },
  {
    "question": "+, -, *, /' operatorlari qanday nomlanadi.",
    "answer": "Arifmetik amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilganqanday cheklanish ustun qiymatlarining bo‘sh bo‘lmasligini ko‘rsatadi",
    "answer": "NOT NULL"
  },
  {
    "question": "‘Paris’ – bu",
    "answer": "Satrli konstanta"
  },
  {
    "question": "VARChAR",
    "answer": "O‘zgaruvchan toifadagi satr tipi"
  },
  {
    "question": ">, <, >=, <=, <>, == operatorlari........deyiladi",
    "answer": "Olishtirish amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilganqanday cheklanish ustunqiymatlarini ma’lum bir shart bo‘yicha tekshiradi",
    "answer": "CHECK"
  },
  {
    "question": "Qaysi bir MBBT klient-server turiga kirmaydi",
    "answer": "ACCESS"
  },
  {
    "question": "TRUE va FALSE Qiymatini qabul qiluvchi toifalar qanday nomlanadi?",
    "answer": "Bul tipli"
  },
  {
    "question": "Butun toifa",
    "answer": "NUMERIC"
  },
  {
    "question": "NOT, AND, OR operatorlari vazifasi nimadan iborat?",
    "answer": "Mantiqiy amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarining yagonaliginita’minlaydi",
    "answer": "UNIQUE"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarini bog‘langan jadvaldagi birlamchi kalitqiymatlaridan oladi",
    "answer": "FORGN KEY"
  },
  {
    "question": "CREATE operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektyaratish"
  },
  {
    "question": "ALTER operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektni o‘zgartirish"
  },
  {
    "question": "DROP operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektni o‘chirish"
  },
  {
    "question": "Agar siz ustun rezultat qaytaruvchi jadvalga kirishni xohlasnagiz qanaqa kalitso‘zdan so‘ng SQL so‘rovi ko‘rsatilishi kerak?",
    "answer": "SELECT"
  },
  {
    "question": "Quyidagi so‘rovda s belgisi nimani anglatadi: SELECT * FROM STUDENT s;",
    "answer": "psevdonim"
  },
  {
    "question": "Qidiruv so‘rovlarini tezlashtirish uchun qaysi MBBT mexanizmi ishlatiladi",
    "answer": "indekslar"
  },
  {
    "question": "Keltirilgan qaysi MBBT tekin GNU lisenziyasibilan tarqatiladi",
    "answer": "MySQL"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NULL nimani anglatadi?",
    "answer": "Ustinda qiymat bermaslikka ruxsat berishni"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NOT NULL cheklagichi nimani anglatadi?",
    "answer": "Ustunga tegishli bo‘lgan satr qiymatlari bo‘sh bo‘lmasligini"
  },
  {
    "question": "So‘rovlarda qanday elementlarga psevdonim belgilash mumkin",
    "answer": "Jadval va qatorlarga"
  },
  {
    "question": "Qaysi korxona relyatsion MBBTyaratish bilan shug‘ullanmaydi",
    "answer": "GOOGLE"
  },
  {
    "question": "SELECT operatorini vazifasi?",
    "answer": "Jadvaldan ma’lumotlarni tanlash"
  },
  {
    "question": "UPDATE operatorini vazifasi?",
    "answer": "Jadvalda qatorni o‘zgartirish"
  },
  {
    "question": "DELETE operatorini vazifasi?",
    "answer": "Qatorni o‘chirish"
  },
  {
    "question": "INSERT operatorini vazifasi?",
    "answer": "Jadvalga satr qo‘shish"
  },
  {
    "question": "Bitta zarosning ichida joylashgan ikkinchi so‘rov qanday nomlanadi, misol: SELECT * FROM STUDENTWHERE group_id IN (SELECT id FROM group WHERE number=‘223-10’)",
    "answer": "quyi so‘rov"
  },
  {
    "question": "Qaysi korxona relyatsion MBBT yaratish bozorida yetakchi xisoblanadi",
    "answer": "ORACLE"
  },
  {
    "question": "Qaysi peredikat Guruhlash uchun ishlatiladi?",
    "answer": "GROUP BY"
  },
  {
    "question": "SELECT * FROM STUDENTWHERE SURNAME=‘P’;",
    "answer": "P harfiga teng bo‘lgan familyalarchiqadi."
  },
  {
    "question": "Bir nechta shartlardan foydalanishda WHERE operatorida shartlar orasi qanday ajratiladi?",
    "answer": "Kalit so‘zlar, AND yoki ORoperatorlari"
  },
  {
    "question": "SELECT operatoridan FROM so‘zidan keying yozuv nimani bildiradi?",
    "answer": "jadvalning nomini"
  },
  {
    "question": "Qaysi peredikat berilgan sharni qanoatlantiruvchi qidruvni amalga oshiradi?",
    "answer": "WHERE"
  },
  {
    "question": "Qays peredikat Saralash uchun ishlatiladi?",
    "answer": "ORDER BY"
  },
  {
    "question": "To‘gri yozilgan SELECToperatorini ko‘rsating.",
    "answer": "SELECT * FROM <jadval nomi>"
  },
  {
    "question": "INSERT, UPDATE, DELETEquyidagilarning biriga ishlamaydi?",
    "answer": "DML"
  },
  {
    "question": "Qaesi operatorda WHEREishlatib bo‘lmaydi?",
    "answer": "INSERT"
  },
  {
    "question": "Ikkilamchi kalit nimaniko‘rsatadi",
    "answer": "birlamchi kalitni"
  },
  {
    "question": "SELECT * FROM STUDENTWHERE SURNAME=‘P%’;",
    "answer": "P bilan boshlanuvchi familyalar chiqadi"
  },
  {
    "question": "CREATE TABLE, ALTER TABLE,DROP TABLE Komandalariniqaysilarda ishlatib bo‘lmaydi",
    "answer": "DDL"
  },
  {
    "question": "SELECT operatoridan keying * nimani bildiradi?",
    "answer": "hamma ustunlarni belgilashni"
  },
  {
    "question": "Qaysi operator yordamida«Соединение » amalibajariladi",
    "answer": "SELECT + JOIN"
  },
  {
    "question": "Qaysi operator yordamida«Пересечение» amalibajariladi",
    "answer": "INTERSECT"
  },
  {
    "question": "Qaysi operator yordamida«Проекция» amali bajariladi",
    "answer": "SELECT"
  },
  {
    "question": "Qaysi operator yordamida«Выборка» amali bajariladi",
    "answer": "SELECT + WHERE"
  },
  {
    "question": "Qaysi operator yordamida«Объеденение» amalibajariladi",
    "answer": "UNION"
  },
  {
    "question": "Operatorlarning qaysi biri natijaviy tanlovda eng ko‘p qatorlar sonini chiqaradi",
    "answer": "dekart ko‘paytmasi"
  },
  {
    "question": "Ichki bog‘lanish peratori – bu",
    "answer": "INNER JOIN"
  },
  {
    "question": "Chap tashqi bog‘lanishoperatori – bu",
    "answer": "LEFT OUTER JOIN"
  },
  {
    "question": "INTERSECT operatori nimagamo‘ljallangan",
    "answer": "Ikkala tanlovda mavjud umumiy natijalarni chiqarish uchun"
  },
  {
    "question": "SELECT COUNT(id) FROMSTUDENT so‘rovini nimaqaytaradi",
    "answer": "STUDENTlarning miqdori"
  },
  {
    "question": "Qaysi operator yordamida«Разность» amali bajariladi",
    "answer": "MINUS"
  },
  {
    "question": "Tashqi bog‘lanishning qaysiturlarini bilasiz",
    "answer": "Chap, o‘ng, to‘liq"
  },
  {
    "question": "To‘liq tashqi bog‘lanishoperatori – bu",
    "answer": "FULL OUTER JOIN"
  },
  {
    "question": "UNION operatori nimagamo‘ljallangan",
    "answer": "Ikki so‘rov tanlovining natijalarinibirlashtirish uchun"
  },
  {
    "question": "Jadval ustunidagi yig‘indiqiymati qanday hisoblanadi",
    "answer": "SUM funksiyasi yordamida"
  },
  {
    "question": "Bog‘lanishning qaysi turlarinibilasiz",
    "answer": "Ichki va tashqi"
  },
  {
    "question": "Ichki bog‘lanish qaysi turgakiradi",
    "answer": "ekvivalent"
  },
  {
    "question": "O‘ng tashqi bog‘lanishoperatori – bu",
    "answer": "RIGHT OUTER JOIN"
  },
  {
    "question": "JOIN operatori nimagamo‘ljallangan",
    "answer": "Ikki jadvaldan olingan natijalarni bitta jadvalda birlashtirish uchun"
  },
  {
    "question": "SELECT MAX(id) FROMSTUDENT so‘rovini nimaqaytaradi",
    "answer": "STUDENTning maksimal indentifikatori"
  },
  {
    "question": "SELECT AVG(age) FROMSTUDENT so‘rovi nimaniqaytaradi",
    "answer": "STUDENTlarning o‘rtacha yoshini"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s, Groups g",
    "answer": "groups va students jadvalidagidekart ko‘paytmani chiqaradi"
  },
  {
    "question": "Jadvaldagi qaydlar miqdori qanday hisoblanadi",
    "answer": "COUNT funksiyasi yordamida"
  },
  {
    "question": "Qaysi operatorlar bilan MIN, MAX, AVG, SUM agregatnix funksiyalar bajarilishi mumkin",
    "answer": "faqatgina SELECT bilan"
  },
  {
    "question": "MINUS operatori nimagamo‘ljallangan",
    "answer": "Birinchi tanlovda mavjud, lekin ikkinchisida yo‘q bo‘lgan natijalarni chiqarish uchun"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s INNER JOIN Groups g ON s.group_id <> g.id",
    "answer": "groups va students jadvalidagi s.group_id = g.id tengligini qanoatlantiruvchi qatorlardan tashqari barcha qatorlarni chiqarib beradi"
  },
  {
    "question": "SELECT MIN(id) FROMSTUDENT so‘rovi nimaniqaytaradi",
    "answer": "STUDENTning minimal indentifikatori"
  },
  {
    "question": "Qaysi operatorlardan biri faqatgina bitta qator ustida operatsiya bajarishi mumkin",
    "answer": "INSERT"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s INNER JOIN Groups g ON s.group_id = g.id",
    "answer": "groups va students jadvalidagi s.group_id = g.id tengligi orqali bog‘lanadigan barcha qatorlarni chiqaradi"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s FULL JOIN Groups g ON s.group_id = g.id",
    "answer": "NULL qiymatiga ega bo‘lmagan s.group_id = g.id tengligi orqali bog‘lanadigan groups va students jadvalidagi barcha qatorlarni chiqaradi"
  },
  {
    "question": "Ma’lumotlarni qaysi tipiga MIN,MAX, AVG, SUM agregatfunksiyalarni qo‘llash mumkinemas",
    "answer": "Qatorlar"
  },
  {
    "question": "Ko‘p foydalanuvchili MBBTda ishlashning murakkabligi nimada",
    "answer": "Loyihalashning, ekspluatasiyaning murakkabligi"
  },
  {
    "question": "Lokal MB dako‘pfoydalanuvchili ruxsatmavjudmi",
    "answer": "Yo‘q"
  },
  {
    "question": "Zahira o‘rnini bosuvchi MBBTserveri nima deb ataladi",
    "answer": "oyna"
  },
  {
    "question": "MBBT administratorining asosiy vazifalariga nimalar kiradi",
    "answer": "Huquq va majburiyatlarni taqsimlash"
  },
  {
    "question": "Bitta tranzaksiya nechtaoperatsiyadan iborat bo‘lishimumkin",
    "answer": "bir nechta"
  },
  {
    "question": "Tranzaksiya nechta xususiyatga ega",
    "answer": 4
  },
  {
    "question": "Ma’lumotlarga parallel ruxsat berish imkoniyatini ta’minlab beruvchi asosiy mexanizm nima hisoblanadi",
    "answer": "Blokka tushirish"
  },
  {
    "question": "Blokka tushirishning qanaqa turlari bor",
    "answer": "Yozuv va o‘qishga"
  },
  {
    "question": "MB ishining mantiqiy birligi nima deb ataladi",
    "answer": "Trenzaksiya"
  },
  {
    "question": "Tranzaksiyalarning asosiy xususiyatlari",
    "answer": "ASID"
  },
  {
    "question": "Tizimdagi har qandayto‘xtalishlarida MBBT oldindan ko‘rib o‘tilgan ma’lumotlar",
    "answer": "Qayta tiklash"
  },
  {
    "question": "omborini qayta tiklash qobilyati nima deb ataladi"
  },
  {
    "question": "MB ni konfiguratsiyalash va hujjatlashtirish quyidagilardan qaysi biriga tegishli",
    "answer": "MB strukturasini boshqarish"
  },
  {
    "question": "Tizimdagi to‘xtalishlarda ma’lumotlarni qayta tiklash uchun nima zarur bo‘ladi",
    "answer": "Backup"
  },
  {
    "question": "Qaysi buyruqlardan biritranzaksiyadagi o‘zgarishlarnisaqlash uchun xizmat qiladi",
    "answer": "COMMIT"
  },
  {
    "question": "Ma’lumotlar bazasidagi nosozliklar sababi nimada bo‘lishi mumkin emas",
    "answer": "Lisenziyalash muammolari"
  },
  {
    "question": "Bitta rolda nechtafoydalanuvchi bo‘lishi mumkin",
    "answer": "Bir nechta"
  },
  {
    "question": "Tranzaksiya dispecheriga ta’rifbering",
    "answer": "Tranzaksiyalarning atomarliginita’minlovchi tizimli komponenta"
  },
  {
    "question": "Yoxud barcha, yoxud hech narsa bajarilmaydigan tranzaksiya xususiyati nima deb nomlanadi",
    "answer": "Atomarlik"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiyani boshlanishinie’lon qilish uchun xizmat qiladi",
    "answer": "BEGIN TRANSACTION"
  },
  {
    "question": "Ma’lumotlarga ruxsat etish xavfsizligi qanday mexanizm bilan ta’minlanadi",
    "answer": "Foydalanuvchilar va ahamiyati"
  },
  {
    "question": "Qaysi operatsiyalarda MB ga ruxsat sozlanadi",
    "answer": "O‘qish va o‘zgarishlarda"
  },
  {
    "question": "Tranzaksiya bu ?",
    "answer": "Ma’lumotlar bilan ishlashdao‘zining mantiqiy birligiga ega bo‘lgan ma’lumotlar bazasi"
  },
  {
    "answer": "jarayonlarining ketma-ket bajarilish guruxi"
  },
  {
    "question": "Qayta tiklash jarayoni jurnalida barcha tranzaksiyalarni bajarilish jarayoni nima deb ataladi",
    "answer": "Nakat"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiya otkati uchun xizmat qiladi",
    "answer": "ROLLBACK"
  },
  {
    "question": "MBBTda bir vaqtning o‘zida ko‘pchilik tranzaksiyalarmurojatini qayta ishlash bitta ma’lumotga bir necha marta amalga oshirish imkoniyatini quyidagi terminlardan qaysi birida to‘g‘ri ko‘rsatilgan",
    "answer": "Parallellik"
  },
  {
    "question": "Ma’lumotlar bazasi xavfsizligini ta’minlash nimalardan iborat",
    "answer": "Ayrim harakatlarni bajarish huquqi faqatgina aniq foydalanuvchiga va aniq vaqt davomida beriladi"
  },
  {
    "question": "Bitta foydalanuvchiganechtagacha rollar bo‘lishimumkin",
    "answer": "Bir nechta"
  },
  {
    "question": "Ayrim kompyuter tarmoqlarida fizik taqsimlangan ma’lumotlar majmuining o‘zaro bog‘langan mantiqiy to‘plpmi (va ularning tavsifi) nima deb ataladi",
    "answer": "Taqsimlangan MB"
  },
  {
    "question": "Taqsimlangan MB dan foydalanayotgan vaqtda foydalanuvchi uni qanday ko‘ra oladi",
    "answer": "Yagona MB sifatida ko‘radi"
  },
  {
    "question": "Har bir tugun o‘zinig xususiy ma’lumotlar bazasi tizimiga egabo‘lib va bu tugunlar o‘zaro",
    "answer": "Taqsimlangan"
  },
  {
    "question": "kelishilgan holda ishlaydigan tizim nima deb ataladi"
  },
  {
    "question": "Taqsimlangan MBBT ni xususiyatlarini ajratib ko‘rsating",
    "answer": "Har bir tugunda MBBT lokal ilovalarning avtonom ishlash, ma’lumotlarga bo‘lgan ruxsat MBBT boshqaruvi ostida amalga oshirilishi"
  },
  {
    "question": "Birturdagi taqsimlangan MB foydalaniladi .....",
    "answer": "Turli xil tugunlarda bir xil MBBT"
  },
  {
    "question": "Foydalanuvchiga ko‘p tugunlar bo‘yicha taqsimlangan ma’lumotlar xususiyatlarining ko‘rinmasligi nima deb ataladi",
    "answer": "Tiniqlilik"
  },
  {
    "question": "ANSI-SPARK arxitekturasi nechta darajaga ega",
    "answer": 3
  },
  {
    "question": "Taqsimlangan/parallelma’lumotlar bazasi - bu",
    "answer": "Tarmoqlarda taqsimlangan MB"
  },
  {
    "question": "Taqsimlangan MBBT vazifasiga nima kirmaydi",
    "answer": "Operativ xotirani boshqarish"
  },
  {
    "question": "Parallel MBBT arxitekturasining asosiy tipi(turi)ga kirmaydigan javobni ko‘rsating",
    "answer": "Taqsimlangan foydalanuvchilar tizimi"
  },
  {
    "question": "Taqsimlangan MBBT ningasosiy turlarini ko‘rsating",
    "answer": "Bir turdagi va ko‘p turdagi"
  },
  {
    "question": "Parallel MBBT nima?",
    "answer": "Qattiq disklar va bir nechta protsessorlardan foydalangan holda funksiyalashgan MBBT"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MB daqanaqa tillar mavjud",
    "answer": "Permanentl va dasturlash tili"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MBBT da ma’lumotlarga ruxsat olish uchun nimadan foydalaniladi",
    "answer": "Ko‘rsatgichlar"
  },
  {
    "question": "Keltirilganlardan qaysi o‘zigaxos xususiyat faqatginaOb’ektga yo‘naltirilgan MBBTga xos",
    "answer": "Ma’lumotlarning uzluksizligi"
  },
  {
    "question": "Qaysi MBBT lar dasturbo‘lishini talab qiladi",
    "answer": "Ob’ektga yo‘naltirilgan"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MB ...saqlaydi",
    "answer": "ob’ektlarning semantikasinini"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MB ningnechta saqlash darajasi mavjud",
    "answer": 1
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MBBTning relyatsion MBBT dan asosiy farqlari",
    "answer": "Ob’ekt ma’lumotlarni to‘g‘ri boshqarilishi haqidagi ma’lumotni saqlaydi"
  },
  {
    "question": "Qaysi MBBTlarda konstruktorlar va destruktorlardan foydalaniladi",
    "answer": "Ob’ektga yo‘naltirilgan"
  },
  {
    "question": "Qaysi tashkilotlar XML (Extensible Markup Language standartlarini ishlab chiqadi",
    "answer": "W3C"
  },
  {
    "question": "Aniq tuzilishga ega bo‘lgan lekin bu tuzilish muqarrar bo‘lmagan, yetarlicha o‘rganilmagan yoki to‘liq bo‘lmagan ma’lumotlar nima deb ataladi",
    "answer": "Deyarli strukturalashmagan"
  },
  {
    "question": "XML ma’lumotlar validatsiyasiuchun nimalar talab qilinadi",
    "answer": "DTD"
  },
  {
    "question": "Extensible Markup Language ning to‘g‘ri abbreviaturasini ko‘rsating",
    "answer": "XML"
  },
  {
    "question": "Qaysi variantlardan biri XML ga tegishli emas",
    "answer": "SQL"
  },
  {
    "question": "XML uchun daraxt ko‘rinishiga asoslangan API -interfeys nima deb nomalanadi",
    "answer": "DOM"
  },
  {
    "question": "Qaysi so‘rovlar tilini XML ga qo‘llash mumkin emas",
    "answer": "QBE"
  },
  {
    "question": "Deklarativ so‘rov tillari XMLuchun nima deb yuritiladi",
    "answer": "XPath"
  },
  {
    "question": "XML ning aniq konkrettuzilishini o‘zida aks ettiruvchituzilma nima deb yuritiladi",
    "answer": "XML SHEMA"
  },
  {
    "question": "Ma’lumotlar bazasiga ta’rifbering",
    "answer": "ma’lum bir sxema asosida saqlanuvchi ma’lumotlarning strukturalashgan majmuasi"
  },
  {
    "question": "Ko‘pchilik foydalanuvchilar tomonidan MBni yaratish, to‘ldirish va birgalikda foydalanish uchunmo‘ljallangan dasturiy vositalarmajmuasi nima deyiladi?",
    "answer": "MBBT"
  },
  {
    "question": "Fayllarni boshqarishda nima yordam beradi",
    "answer": "Fayl tizimi"
  },
  {
    "question": "Ma’lumotlar bazasiadminstratori",
    "answer": "bitta yoki bir nechta ma’lumotlar bazasi xaqida to‘liq tasavvurga ega mutaxassis bo‘lib, ushbu ma’lumotlar bazasini loyihalash va qullanilishini nazorat qilishbilan shug‘ullanadi"
  },
  {
    "question": "Zamonaviy MBBTlar fayl tizimining qaysi muammosini hal qiladi",
    "answer": "Ko‘p foydalanuvchilar bilanishlash"
  },
  {
    "question": "MBBT dagi foydalanuvchilarga yaqin abstraksiya bosqichiniko‘rsating",
    "answer": "tashqi"
  },
  {
    "question": "MBBT arxitekturasining bosqichi bo‘lmagan javob variantini ko‘rsating",
    "answer": "jismoniy"
  },
  {
    "question": "MBBT dagi MBning barcha mantiqiy strukturasiniko‘rsatuvchi abstraksiya bosqichini ko‘rsating",
    "answer": "konseptual"
  },
  {
    "question": "MBBTning vazifasiga nimalar kirmaydi",
    "answer": "Ma’lumotlar ortiqcha xajminiqisqartirish"
  },
  {
    "question": "Ma’lumotlar bazasi tizimi nimalarni o‘z ichiga oladi",
    "answer": "Ma’lumotlar, qurilma ta’minoti, dasturiy ta’minot foydalanuvchilari"
  },
  {
    "question": "MBBT dagi axborotni jismonan saqlashga yaqin abstraksiya bosqichini ko‘rsating",
    "answer": "ichki"
  },
  {
    "question": "Ma’lum bir sust strukturaga ega va qiyin shakllanuvchi fan sohasining sun’iy intellekt tizimi nima deb ataladi",
    "answer": "Ekspert tizimi"
  },
  {
    "question": "Ma’lumotlar bazasining klassifikatsiyasiga tegishli bo‘lmagan javobni ko‘rsating",
    "answer": "Axborotni qayta ishlash tezligibo‘yicha"
  },
  {
    "question": "Saqlanayotgan axborot turi bo‘yicha klassifikatsiya qaysi variantda tasvirlangan",
    "answer": "hujjatli, faktografik, leksikografik"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modellari bo‘yicha",
    "answer": "ierarxik, tarmoqli, relyatsion,ob’ektga yo‘naltirilgan"
  },
  {
    "question": "klassifikatsiya qaysi variantda tasvirlangan"
  },
  {
    "question": "Ma’lumotlar saqlashni vaularga murojaat qilishnitashkillishtirish bo‘yicha klassifikatsiya qaysi variantda tasvirlangan",
    "answer": "lokal, tarmoqli, taqsimlangan"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning relyatsion modeli: foydalanuvchiga ma’lumotlar qaysi ko‘rinishda uzatiladi",
    "answer": "jadvallar"
  },
  {
    "question": "Ma’lumotlarni taqdim etishmodeli nima",
    "answer": "Malumotlar bazasida saqlanuvchi ma’lumotlar mantiqiy strukturasi"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning tarmoq modeli: ma’lumotlar nima orqali taqdim etilgan",
    "answer": "ixtiyoriy graf"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modelining qaysi biri eng keng tarqalgan xisoblanadi",
    "answer": "relyatsion"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning ierarxik modeli: ma’lumotlar nima orqali taqdim etilgan",
    "answer": "daraxt turidagi graf"
  },
  {
    "question": "Moxiyat-aloqa modelining asosiy tushunchalari",
    "answer": "moxiyat, atribut, aloqa"
  },
  {
    "question": "Ob’ektlar orasidagi munosabat turini aniqlang: talaba va reyting daftarchasi",
    "answer": "01:01"
  },
  {
    "question": "Talaba va reyting daftari orasidagialoqa modelini aniqlang",
    "answer": "01:01"
  },
  {
    "question": "Binar aloqaning uch turi to‘g‘ri berilgan javobni ko‘rsating",
    "answer": "Birga-ko‘p, birga-bir, ko‘pga- ko‘p."
  },
  {
    "question": "Talaba va guruh ob’ektlari orasidagi aloqa modelini aniqlang",
    "answer": "n:1"
  },
  {
    "question": "Shahar va viloyat ob’ektlari orasidagialoqa modelini aniqlang",
    "answer": "1: m"
  },
  {
    "question": "Talaba va auditoriya ob’ektlari orasidagi munosabat turini aniqlang",
    "answer": "n:m"
  },
  {
    "question": "FIO (o‘qituvchi, kafedra) Guruh (Guruh,fan,FISh) va o‘qituvchi (NO_o‘qituvchi,FIO_o‘qituvchi kafedra) jadvallar orasida munosobatlar qanday",
    "answer": "m : n"
  },
  {
    "question": "Daraxt ko‘rinishida qaysi ma’lumotlar bazasi tasvirlanadi?",
    "answer": "ierarxik"
  },
  {
    "question": "Ma’lumotlar bazasiga tegishlitushunchani aniqlang?",
    "answer": "mavjudlik"
  },
  {
    "question": "Kortrej bu ?",
    "answer": "qator"
  },
  {
    "question": "Munosobat nima?",
    "answer": "jadval"
  },
  {
    "question": "Relyatsion bazaga o‘xshash juda bo‘lgan analoginiko‘rsating?",
    "answer": "ikki o‘lchamli jadval"
  },
  {
    "question": "Tushuncha qanday ma’lumotlarmodeliga tegishli?",
    "answer": "relyatsion"
  },
  {
    "question": "Domen bu ?",
    "answer": "ustun"
  },
  {
    "question": "Nuqtalar o‘rniga to‘g‘rikeladigan so‘zni ko‘rsating……….ustunlar to‘plami berilgan qatorlar guruhini ko‘rsating",
    "answer": "Jadval"
  },
  {
    "question": "Katakcha massiv shaklidagi qiymatni qabul qiladimi",
    "answer": "yo‘q"
  },
  {
    "question": "Jadval ma’lumot kaliti bu ....",
    "answer": "Jadval ma’lumotlar yig‘indisi bo‘lib, uning har bir qatorini aniqlaydi"
  },
  {
    "question": "Realyatsion ma’lumotlar bazasida ma’lumotlarni saqlashning asosiy formasi",
    "answer": "Jadval"
  },
  {
    "question": "Realyatsion maydonda mohiyat aloqa diagrammasini o‘zgartirganda atribut nimaga o‘zgaradi?",
    "answer": "atributga"
  },
  {
    "question": "Unikal identifikator nima",
    "answer": "Bir qatorni boshqa qatordan ajratib turadigan qiymatga ega ustun"
  },
  {
    "question": "Jadvalning har xil qatorlari bir xil qiymatdagi kalitga ega bo‘ladimi?",
    "answer": "Yo‘q"
  },
  {
    "question": "Qator bu?",
    "answer": "yozuv, atribut, ekzempleyar,borliq"
  },
  {
    "question": "Realyatsion maydonda mohiyat aloqa diagrammasini o‘zgartirganda mohiyat nimaga o‘zgaradi?",
    "answer": "jadvalga"
  },
  {
    "question": "Unikal maydon deb qanday qatorga aytiladi",
    "answer": "qiymati qaytarilmaydigan maydon"
  },
  {
    "question": "Ustun bu?",
    "answer": "maydon, atribut"
  },
  {
    "question": "Qaysi MBBT da ustun va maydonning kema-ketligi ahamiyatsiz?",
    "answer": "realyatsionda"
  },
  {
    "question": "Realyatsion algebrada qanday operatsiya turlari mavjud",
    "answer": "An’anaviy va noan’anaviy"
  },
  {
    "question": "Jadval ma’lumotlar strukturasiqanday aniqlanadi?",
    "answer": "jadval ustunlari nomlanishi bilan"
  },
  {
    "question": "Noan’anaviy realyatsionoperatsiyalar",
    "answer": "Bog‘lanish, tanlash, proeksiya, bo‘lish"
  },
  {
    "question": "Realyatsion ma’lumotlar bazasida qaysi so‘rovtillari qo‘llaniladi",
    "answer": "SQL"
  },
  {
    "question": "Ma’lumotlar bazasi jadvalinima uchun kerak:",
    "answer": "ma’lumotlarni saqlashga"
  },
  {
    "question": "An’anaviy realyatsionoperatsiyalarga nimalar kiradi",
    "answer": "kesib olish, umumlashtirish,farqlanish,dekart ko‘paytma"
  },
  {
    "question": "Birinchi normal formadaquyidagicha talab qo‘yiladi",
    "answer": "Jadvalning hamma maydonlari mayda maydonchalarga bo‘linishi kerak emas"
  },
  {
    "question": "Normallashtirish nimaga kerak",
    "answer": "Anomaliyadan holi bo‘lish uchun"
  },
  {
    "question": "Ikkinchi normal formadaquyidagicha talab qo‘yiladi:",
    "answer": "Jadvalning hamma maydonlari birinchi kalitga bog‘liq"
  },
  {
    "question": "Nechta normal forma mavjud?",
    "answer": 6
  },
  {
    "question": "Uchinchi normal formadaquyidagicha talab qo‘yiladi:",
    "answer": "Kalit maydon bilan jadvalo‘rtasida bog‘liqlik bo‘lmasligi"
  },
  {
    "question": "SQL kengaytmasi nimani anglatadi?",
    "answer": "Sutrukturalashgan so‘rov tili"
  },
  {
    "question": "Qaysi SQL operatorlari jadvallar sxemasini boshqarishi mumkin?",
    "answer": "CRATE, ALTER, DROP"
  },
  {
    "question": "Qaysi SQL operatorlari ma’lumotlar ustidan murakkab amallarni bajaradi?",
    "answer": "SELECT, UPDATE, INSERT, DELETE"
  },
  {
    "question": "Sana vaqt toifasi",
    "answer": "TIMESTAMP"
  },
  {
    "question": "+, -, *, /' operatorlari qanday nomlanadi.",
    "answer": "Arifmetik amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilganqanday cheklanish ustun qiymatlarining bo‘sh bo‘lmasligini ko‘rsatadi",
    "answer": "NOT NULL"
  },
  {
    "question": "VARChAR",
    "answer": "O‘zgaruvchan toifadagi satr tipi"
  },
  {
    "question": ">, <, >=, <=, <>, == operatorlari........deyiladi",
    "answer": "Solishtirish amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilganqanday cheklanish ustunqiymatlarini ma’lum bir shart bo‘yicha tekshiradi",
    "answer": "CHECK"
  },
  {
    "question": "Qaysi bir MBBT klient-server turiga kirmaydi",
    "answer": "ACCESS"
  },
  {
    "question": "TRUE va FALSE Qiymatini qabul qiluvchi toifalar qanday nomlanadi?",
    "answer": "Bul tipli"
  },
  {
    "question": "NOT, AND, OR operatorlari vazifasi nimadan iborat?",
    "answer": "Mantiqiy amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarining yagonaliginita’minlaydi",
    "answer": "UNIQUE"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarini bog‘langan jadvaldagi birlamchi kalit qiymatlaridan oladi",
    "answer": "FORGN KEY"
  },
  {
    "question": "CREATE operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektyaratish"
  },
  {
    "question": "ALTER operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektni o‘zgartirish"
  },
  {
    "question": "DROP operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektni o‘chirish"
  },
  {
    "question": "Agar siz ustun rezultat qaytaruvchi jadvalga kirishni xohlasnagiz qanaqa kalitso‘zdan so‘ng SQL so‘rovi ko‘rsatilishi kerak?",
    "answer": "SELECT"
  },
  {
    "question": "Qidiruv so‘rovlarini tezlashtirish uchun qaysi MBBT mexanizmi ishlatiladi",
    "answer": "indekslar"
  },
  {
    "question": "Keltirilgan qaysi MBBT tekin GNU lisenziyasibilan tarqatiladi",
    "answer": "MySQL"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NULL nimani anglatadi?",
    "answer": "Ustinda qiymat bermaslikka ruxsat berishni"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NOT NULL cheklagichi nimani anglatadi?",
    "answer": "Ustunga tegishli bo‘lgan satr qiymatlari bo‘sh bo‘lmasligini"
  },
  {
    "question": "So‘rovlarda qanday elementlarga psevdonim belgilash mumkin",
    "answer": "Jadval va qatorlarga"
  },
  {
    "question": "SELECT operatorini vazifasi?",
    "answer": "Jadvaldan ma’lumotlarni tanlash"
  },
  {
    "question": "UPDATE operatorini vazifasi?",
    "answer": "Jadvalda qatorni o‘zgartirish"
  },
  {
    "question": "DELETE operatorini vazifasi?",
    "answer": "Qatorni o‘chirish"
  },
  {
    "question": "INSERT operatorini vazifasi?",
    "answer": "Jadvalga satr qo‘shish"
  },
  {
    "question": "Bitta zarosning ichidajoylashgan ikkinchi so‘rov qanday nomlanadi, misol: SELECT * FROM STUDENTWHERE group_id IN (SELECT id FROM group WHEREnumber=‘223-10’)",
    "answer": "quyi so‘rov"
  },
  {
    "question": "Qaysi korxona relyatsion MBBT yaratish bozorida yetakchi xisoblanadi",
    "answer": "ORACLE"
  },
  {
    "question": "Qaysi peredikat Guruhlash uchun ishlatiladi?",
    "answer": "GROUP BY"
  },
  {
    "question": "SELECT * FROM STUDENTWHERE SURNAME=‘P’;",
    "answer": "P harfiga teng bo‘lgan familyalarchiqadi."
  },
  {
    "question": "Bir nechta shartlardan foydalanishda WHERE operatorida shartlar orasi qanday ajratiladi?",
    "answer": "Kalit so‘zlar, AND yoki ORoperatorlari"
  },
  {
    "question": "SELECT operatoridan FROM so‘zidan keying yozuv nimani bildiradi?",
    "answer": "jadvalning nomini"
  },
  {
    "question": "Qaysi peredikat berilgan sharni qanoatlantiruvchi qidruvni amalga oshiradi?",
    "answer": "WHERE"
  },
  {
    "question": "Qays peredikat Saralash uchun ishlatiladi?",
    "answer": "ORDER BY"
  },
  {
    "question": "To‘gri yozilgan SELECT operatorini ko‘rsating.",
    "answer": "SELECT * FROM <jadval nomi>"
  },
  {
    "question": "INSERT, UPDATE, DELETEquyidagilarning biriga ishlamaydi?",
    "answer": "DML"
  },
  {
    "question": "Qaesi operatorda WHEREishlatib bo‘lmaydi?",
    "answer": "INSERT"
  },
  {
    "question": "Ikkilamchi kalit nimaniko‘rsatadi",
    "answer": "birlamchi kalitni"
  },
  {
    "question": "SELECT * FROM STUDENTWHERE SURNAME=‘P%’;",
    "answer": "P bilan boshlanuvchi familyalar chiqadi"
  },
  {
    "question": "CREATE TABLE, ALTER TABLE,DROP TABLE Komandalariniqaysilarda ishlatib bo‘lmaydi",
    "answer": "DDL"
  },
  {
    "question": "SELECT operatoridan keying * nimani bildiradi?",
    "answer": "hamma ustunlarni belgilashni"
  },
  {
    "question": "Qaysi operator yordamida«Соединение » amali bajariladi",
    "answer": "SELECT + JOIN"
  },
  {
    "question": "Qaysi operator yordamida«Пересечение» amalibajariladi",
    "answer": "INTERSECT"
  },
  {
    "question": "Qaysi operator yordamida«Проекция» amali bajariladi",
    "answer": "SELECT"
  },
  {
    "question": "Qaysi operator yordamida«Выборка» amali bajariladi",
    "answer": "SELECT + WHERE"
  },
  {
    "question": "Qaysi operator yordamida«Объеденение» amalibajariladi",
    "answer": "UNION"
  },
  {
    "question": "Operatorlarning qaysi biri natijaviy tanlovda eng ko‘p qatorlar sonini chiqaradi",
    "answer": "dekart ko‘paytmasi"
  },
  {
    "question": "Ichki bog‘lanish peratori – bu",
    "answer": "INNER JOIN"
  },
  {
    "question": "Chap tashqi bog‘lanishoperatori – bu",
    "answer": "LEFT OUTER JOIN"
  },
  {
    "question": "INTERSECT operatori nimagamo‘ljallangan",
    "answer": "Ikkala tanlovda mavjud umumiy natijalarni chiqarish uchun"
  },
  {
    "question": "SELECT COUNT(id) FROMSTUDENT so‘rovini nimaqaytaradi",
    "answer": "STUDENTlarning miqdori"
  },
  {
    "question": "Qaysi operator yordamida«Разность» amali bajariladi",
    "answer": "MINUS"
  },
  {
    "question": "Tashqi bog‘lanishning qaysiturlarini bilasiz",
    "answer": "Chap, o‘ng, to‘liq"
  },
  {
    "question": "To‘liq tashqi bog‘lanishoperatori – bu",
    "answer": "FULL OUTER JOIN"
  },
  {
    "question": "UNION operatori nimagamo‘ljallangan",
    "answer": "Ikki so‘rov tanlovining natijalarinibirlashtirish uchun"
  },
  {
    "question": "Jadval ustunidagi yig‘indiqiymati qanday hisoblanadi",
    "answer": "SUM funksiyasi yordamida"
  },
  {
    "question": "Bog‘lanishning qaysi turlarinibilasiz",
    "answer": "Ichki va tashqi"
  },
  {
    "question": "Ichki bog‘lanish qaysi turgakiradi",
    "answer": "ekvivalent"
  },
  {
    "question": "O‘ng tashqi bog‘lanishoperatori – bu",
    "answer": "RIGHT OUTER JOIN"
  },
  {
    "question": "JOIN operatori nimagamo‘ljallangan",
    "answer": "Ikki jadvaldan olingan natijalarni bitta jadvalda birlashtirish uchun"
  },
  {
    "question": "SELECT MAX(id) FROMSTUDENT so‘rovini nimaqaytaradi",
    "answer": "STUDENTning maksimal indentifikatori"
  },
  {
    "question": "SELECT AVG(age) FROMSTUDENT so‘rovi nimaniqaytaradi",
    "answer": "STUDENTlarning o‘rtacha yoshini"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s, Groups g",
    "answer": "groups va students jadvalidagidekart ko‘paytmani chiqaradi"
  },
  {
    "question": "Jadvaldagi qaydlar miqdori qanday hisoblanadi",
    "answer": "COUNT funksiyasi yordamida"
  },
  {
    "question": "Qaysi operatorlar bilan MIN, MAX, AVG, SUM agregatnix funksiyalar bajarilishi mumkin",
    "answer": "faqatgina SELECT bilan"
  },
  {
    "question": "MINUS operatori nimagamo‘ljallangan",
    "answer": "Birinchi tanlovda mavjud, lekin ikkinchisida yo‘q bo‘lgan natijalarni chiqarish uchun"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s INNER JOIN Groups g ON s.group_id <> g.id",
    "answer": "groups va students jadvalidagi s.group_id = g.id tengligini qanoatlantiruvchi qatorlardan tashqari barcha qatorlarni chiqarib beradi"
  },
  {
    "question": "SELECT MIN(id) FROMSTUDENT so‘rovi nimaniqaytaradi",
    "answer": "STUDENTning minimal indentifikatori"
  },
  {
    "question": "Qaysi operatorlardan biri faqatgina bitta qator ustida operatsiya bajarishi mumkin",
    "answer": "INSERT"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s INNER JOIN Groups g ON s.group_id = g.id",
    "answer": "groups va students jadvalidagi s.group_id = g.id tengligi orqali bog‘lanadigan barcha qatorlarni chiqaradi"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s FULL JOIN Groups g ON s.group_id = g.id",
    "answer": "NULL qiymatiga ega bo‘lmagan s.group_id = g.id tengligi orqali bog‘lanadigan groups va students jadvalidagi barcha qatorlarni chiqaradi"
  },
  {
    "question": "Ma’lumotlarni qaysi tipiga MIN,MAX, AVG, SUM agregatfunksiyalarni qo‘llash mumkinemas",
    "answer": "Qatorlar"
  },
  {
    "question": "Ko‘p foydalanuvchili MBBTda ishlashning murakkabligi nimada",
    "answer": "Loyihalashning, ekspluatasiyaning murakkabligi"
  },
  {
    "question": "Lokal MB da ko‘pfoydalanuvchili ruxsat mavjudmi",
    "answer": "Yo‘q"
  },
  {
    "question": "Zahira o‘rnini bosuvchi MBBTserveri nima deb ataladi",
    "answer": "oyna"
  },
  {
    "question": "MBBT administratorining asosiy vazifalariga nimalar kiradi",
    "answer": "Huquq va majburiyatlarni taqsimlash"
  },
  {
    "question": "Bitta tranzaksiya nechtaoperatsiyadan iborat bo‘lishimumkin",
    "answer": "bir nechta"
  },
  {
    "question": "Tranzaksiya nechta xususiyatga ega",
    "answer": 4
  },
  {
    "question": "Ma’lumotlarga parallel ruxsat berish imkoniyatini ta’minlab beruvchi asosiy mexanizm nima hisoblanadi",
    "answer": "Blokka tushirish"
  },
  {
    "question": "Blokka tushirishning qanaqa turlari bor",
    "answer": "Yozuv va o‘qishga"
  },
  {
    "question": "MB ishining mantiqiy birligi nima deb ataladi",
    "answer": "Tranzaksiya"
  },
  {
    "question": "Tranzaksiyalarning asosiy xususiyatlari",
    "answer": "ASID"
  },
  {
    "question": "Tizimdagi har qanday to‘xtalishlarida MBBT oldindan ko‘rib o‘tilgan ma’lumotlar omborini qayta tiklash qobilyati nima deb ataladi",
    "answer": "Qayta tiklash"
  },
  {
    "question": "MB ni konfiguratsiyalash va hujjatlashtirish quyidagilardan qaysi biriga tegishli",
    "answer": "MB strukturasini boshqarish"
  },
  {
    "question": "Tizimdagi to‘xtalishlarda ma’lumotlarni qayta tiklash uchun nima zarur bo‘ladi",
    "answer": "Backup"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiyadagi o‘zgarishlarni saqlash uchun xizmat qiladi",
    "answer": "COMMIT"
  },
  {
    "question": "Bitta rolda nechtafoydalanuvchi bo‘lishi mumkin",
    "answer": "Bir nechta"
  },
  {
    "question": "Tranzaksiya dispecheriga ta’rifbering",
    "answer": "Tranzaksiyalarning atomarliginita’minlovchi tizimli komponenta"
  },
  {
    "question": "Yoxud barcha, yoxud hech narsa bajarilmaydigan tranzaksiya xususiyati nima deb nomlanadi",
    "answer": "Atomarlik"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiyani boshlanishini e’lon qilish uchun xizmat qiladi",
    "answer": "BEGIN TRANSACTION"
  },
  {
    "question": "Ma’lumotlarga ruxsat etish xavfsizligi qanday mexanizm bilan ta’minlanadi",
    "answer": "Foydalanuvchilar va ahamiyati"
  },
  {
    "question": "Qaysi operatsiyalarda MB ga ruxsat sozlanadi",
    "answer": "O‘qish va o‘zgarishlarda"
  },
  {
    "question": "Tranzaksiya bu ?",
    "answer": "Ma’lumotlar bilan ishlashda o‘zining mantiqiy birligiga ega bo‘lgan ma’lumotlar bazasi jarayonlarining ketma-ket bajarilish guruxi"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiya otkati uchun xizmat qiladi",
    "answer": "ROLLBACK"
  },
  {
    "question": "MBBTda bir vaqtning o‘zida ko‘pchilik tranzaksiyalar murojatini qayta ishlash bitta ma’lumotga bir necha marta amalga oshirish imkoniyatini quyidagi terminlardan qaysi birida to‘g‘ri ko‘rsatilgan",
    "answer": "Parallellik"
  },
  {
    "question": "Ma’lumotlar bazasi xavfsizligini ta’minlash nimalardan iborat",
    "answer": "Ayrim harakatlarni bajarish huquqi faqatgina aniq foydalanuvchiga va aniq vaqt davomida beriladi"
  },
  {
    "question": "Bitta foydalanuvchiganechtagacha rollar bo‘lishimumkin",
    "answer": "Bir nechta"
  },
  {
    "question": "Ayrim kompyuter tarmoqlarida fizik taqsimlangan ma’lumotlar majmuining o‘zaro bog‘langan mantiqiy to‘plpmi (va ularning tavsifi) nima deb ataladi",
    "answer": "Taqsimlangan MB"
  },
  {
    "question": "Taqsimlangan MB dan foydalanayotgan vaqtda foydalanuvchi uni qanday ko‘ra oladi",
    "answer": "Yagona MB sifatida ko‘radi"
  },
  {
    "question": "Har bir tugun o‘zinig xususiy ma’lumotlar bazasi tizimiga ega bo‘lib va bu tugunlar o‘zaro kelishilgan holda ishlaydigan tizim nima deb ataladi",
    "answer": "Taqsimlangan"
  },
  {
    "question": "Taqsimlangan MBBT ni xususiyatlarini ajratib ko‘rsating",
    "answer": "Har bir tugunda MBBT lokal ilovalarning avtonom ishlash, ma’lumotlarga bo‘lgan ruxsat"
  },
  {
    "answer": "MBBT boshqaruvi ostida amalga oshirilishi"
  },
  {
    "question": "Birturdagi taqsimlangan MB foydalaniladi .....",
    "answer": "Turli xil tugunlarda bir xil MBBT"
  },
  {
    "question": "ANSI-SPARK arxitekturasi nechta darajaga ega",
    "answer": 3
  },
  {
    "question": "Taqsimlangan/parallelma’lumotlar bazasi - bu",
    "answer": "Tarmoqlarda taqsimlangan MB"
  },
  {
    "question": "Taqsimlangan MBBT vazifasiga nima kirmaydi",
    "answer": "Operativ xotirani boshqarish"
  },
  {
    "question": "Parallel MBBT arxitekturasining asosiy tipi(turi)ga kirmaydigan javobni ko‘rsating",
    "answer": "Taqsimlangan foydalanuvchilar tizimi"
  },
  {
    "question": "Taqsimlangan MBBT ningasosiy turlarini ko‘rsating",
    "answer": "Bir turdagi va ko‘p turdagi"
  },
  {
    "question": "Parallel MBBT nima?",
    "answer": "Qattiq disklar va bir nechta protsessorlardan foydalangan holda funksiyalashgan MBBT"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MBBT da ma’lumotlarga ruxsat olish uchun nimadan foydalaniladi",
    "answer": "Ko‘rsatgichlar"
  },
  {
    "question": "Keltirilganlardan qaysi o‘ziga xos xususiyat faqatgina Ob’ektga yo‘naltirilgan MBBT ga xos",
    "answer": "Ma’lumotlarning uzluksizligi"
  },
  {
    "question": "Qaysi MBBT lar dasturbo‘lishini talab qiladi",
    "answer": "Ob’ektga yo‘naltirilgan"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MB ...saqlaydi",
    "answer": "ob’ektlarning semantikasinini"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MB ningnechta saqlash darajasi mavjud",
    "answer": 1
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MBBTning relyatsion MBBT dan asosiy farqlari",
    "answer": "Ob’ekt ma’lumotlarni to‘g‘ri boshqarilishi haqidagi ma’lumotni saqlaydi"
  },
  {
    "question": "Qaysi MBBTlarda konstruktorlar va destruktorlardan foydalaniladi",
    "answer": "Ob’ektga yo‘naltirilgan"
  },
  {
    "question": "Extensible Markup Language ning to‘g‘ri abbreviaturasini ko‘rsating",
    "answer": "XML"
  },
  {
    "question": "Qaysi variantlardan biri XML ga tegishli emas",
    "answer": "SQL"
  },
  {
    "question": "Qaysi so‘rovlar tilini XML ga qo‘llash mumkin emas",
    "answer": "QBE"
  },
  {
    "question": "XML ning aniq tuzilishini o‘zida aks ettiruvchi tuzilma nima deb yuritiladi",
    "answer": "XML SHEMA"
  },
  {
    "question": "Савол",
    "answer": "Тўғри жавоб"
  },
  {
    "question": "Ma’lumotlar bazasiga ta’rifbering",
    "answer": "ma’lum bir sxema asosida saqlanuvchi ma’lumotlarning strukturalashgan majmuasi"
  },
  {
    "question": "Ko‘pchilik foydalanuvchilar tomonidan MBni yaratish, to‘ldirish va birgalikda foydalanish uchunmo‘ljallangan dasturiy",
    "answer": "MBBT"
  },
  {
    "question": "vositalar majmuasi nima deyiladi?"
  },
  {
    "question": "Fayllarni boshqarishda nima yordam beradi",
    "answer": "Fayl tizimi"
  },
  {
    "question": "Ma’lumotlar bazasiadminstratori",
    "answer": "bitta yoki bir nechta ma’lumotlar bazasi xaqida to‘liq tasavvurga ega mutaxassis bo‘lib, ushbu ma’lumotlar bazasini loyihalash va qullanilishini nazorat qilishbilan shug‘ullanadi"
  },
  {
    "question": "Zamonaviy MBBTlar fayl tizimining qaysi muammosini hal qiladi",
    "answer": "ko‘p foydalanuvchilar bilanishlash"
  },
  {
    "question": "MBBT dagi foydalanuvchilarga yaqin abstraksiya bosqichiniko‘rsating",
    "answer": "tashqi"
  },
  {
    "question": "MBBT arxitekturasining bosqichi bo‘lmagan javob variantini ko‘rsating",
    "answer": "jismoniy"
  },
  {
    "question": "MBBT dagi MBning barcha mantiqiy strukturasiniko‘rsatuvchi abstraksiya bosqichini ko‘rsating",
    "answer": "konseptual"
  },
  {
    "question": "MBBTning vazifasiga nimalar kirmaydi",
    "answer": "Ma’lumotlar ortiqcha xajminiqisqartirish"
  },
  {
    "question": "Ma’lumotlar bazasi tizimi nimalarni o‘z ichiga oladi",
    "answer": "Ma’lumotlar, qurilma ta’minoti, dasturiy ta’minot foydalanuvchilari"
  },
  {
    "question": "MBBT dagi axborotni jismonan saqlashga yaqin abstraksiya bosqichiniko‘rsating",
    "answer": "ichki"
  },
  {
    "question": "Ma’lum bir sust strukturagaega va qiyin shakllanuvchi fan",
    "answer": "Ekspert tizimi"
  },
  {
    "question": "sohasining sun’iy intellekttizimi nima deb ataladi"
  },
  {
    "question": "Ma’lumotlar bazasining klassifikatsiyasiga tegishli bo‘lmagan javobni ko‘rsating",
    "answer": "Axborotni qayta ishlash tezligibo‘yicha"
  },
  {
    "question": "Saqlanayotgan axborot turi bo‘yicha klassifikatsiya qaysi variantda tasvirlangan",
    "answer": "hujjatli, faktografik, leksikografik"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modellari bo‘yicha klassifikatsiya qaysi variantda tasvirlangan",
    "answer": "ierarxik, tarmoqli, relyatsion,ob’ektga yo‘naltirilgan"
  },
  {
    "question": "Ma’lumotlar saqlashni va ularga murojaat qilishni tashkillishtirish bo‘yicha klassifikatsiya qaysi variantda tasvirlangan",
    "answer": "lokal, tarmoqli, taqsimlangan"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning relyatsion modeli: foydalanuvchiga ma’lumotlar qaysi ko‘rinishda uzatiladi",
    "answer": "jadvallar"
  },
  {
    "question": "Ma’lumotlarni taqdim etishmodeli nima",
    "answer": "Malumotlar bazasida saqlanuvchima’lumotlar mantiqiy strukturasi"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning tarmoq modeli: ma’lumotlar nima orqali taqdim etilgan",
    "answer": "ixtiyoriy graf"
  },
  {
    "question": "Ma’lumotlarni taqdim etish modelining qaysi biri eng keng tarqalgan xisoblanadi",
    "answer": "relyatsion"
  },
  {
    "question": "Ma’lumotlarni taqdim etishning ierarxik modeli: ma’lumotlar nima orqali taqdim etilgan",
    "answer": "daraxt turidagi graf"
  },
  {
    "question": "Moxiyat-aloqa modelining asosiy tushunchalari",
    "answer": "moxiyat, atribut, aloqa"
  },
  {
    "question": "Ob’ektlar orasidagi munosabat turini aniqlang: talaba va reyting daftarchasi",
    "answer": "01:01"
  },
  {
    "question": "Talaba va reyting daftari orasidagialoqa modelini aniqlang",
    "answer": "01:01"
  },
  {
    "question": "Binar aloqaning uch turi to‘g‘ri berilgan javobni ko‘rsating",
    "answer": "Birga-ko‘p, birga-bir, ko‘pga-ko‘p."
  },
  {
    "question": "Talaba va guruh ob’ektlari orasidagi aloqa modelini aniqlang",
    "answer": "n:1"
  },
  {
    "question": "Shahar va viloyat ob’ektlari orasidagialoqa modelini aniqlang",
    "answer": "1: m"
  },
  {
    "question": "Moxiyat-aloqa modelini kim taklif qilgan",
    "answer": "Piter Chen"
  },
  {
    "question": "Talaba va auditoriyaob’ektlari orasidagimunosabat turini aniqlang",
    "answer": "n:m"
  },
  {
    "question": "FIO (o‘qituvchi, kafedra) Guruh (Guruh,fan,FISh) va o‘qituvchi(NO_o‘qituvchi,FIO_o‘qituvchi kafedra) jadvallar orasida munosobatlar qanday",
    "answer": "m : n"
  },
  {
    "question": "Relyatsion modeldan keyin qanday ma’lumotlar bazasi vujudga keladi",
    "answer": "assotsiativ"
  },
  {
    "question": "Daraxt ko‘rinishida qaysi ma’lumotlar bazasi tasvirlanadi?",
    "answer": "ierarxik"
  },
  {
    "question": "Ma’lumotlar bazasini boshqarishda avval ma’lumotlar bilan ishlashning qanday prinsiplari mavjud bo‘lgan?",
    "answer": "Pastki darajada tashqi xotirama’lumotlarini boshqarish"
  },
  {
    "question": "Relyatsion nazariyada quyidagilardan qaysi biri ta’luqli emas?",
    "answer": "Piter Chen"
  },
  {
    "question": "Ma’lumotlar bazasiga tegishlitushunchani aniqlang?",
    "answer": "mavjudlik"
  },
  {
    "question": "Kortrej bu ?",
    "answer": "qator"
  },
  {
    "question": "Edigan Kod kim bo‘lgan?",
    "answer": "matematik"
  },
  {
    "question": "Munosobat nima?",
    "answer": "jadval"
  },
  {
    "question": "Relyatsion bazaga o‘xshash juda bo‘lgan analoginiko‘rsating?",
    "answer": "ikki o‘lchamli jadval"
  },
  {
    "question": "Tushuncha qanday ma’lumotlar modeliga tegishli?",
    "answer": "relyatsion"
  },
  {
    "question": "Domen bu ?",
    "answer": "ustun"
  },
  {
    "question": "Nuqtalar o‘rniga to‘g‘rikeladigan so‘zni ko‘rsating……….ustunlar to‘plami berilgan qatorlar guruhini ko‘rsating",
    "answer": "Jadval"
  },
  {
    "question": "Katakcha massiv shaklidagi qiymatni qabul qiladimi",
    "answer": "yo‘q"
  },
  {
    "question": "Jadval ma’lumot kaliti bu ....",
    "answer": "Jadval ma’lumotlar yig‘indisi bo‘lib, uning har bir qatorini aniqlaydi"
  },
  {
    "question": "Realyatsion ma’lumotlar bazasida ma’lumotlarni saqlashning asosiy formasi",
    "answer": "Jadval"
  },
  {
    "question": "Realyatsion maydonda mohiyat aloqa diagrammasini o‘zgartirganda atribut nimaga o‘zgaradi?",
    "answer": "atributga"
  },
  {
    "question": "Unikal identifikator nima",
    "answer": "Bir qatorni boshqa qatordan ajratib turadigan qiymatga ega ustun"
  },
  {
    "question": "Jadvalning har xil qatorlari bir xil qiymatdagi kalitga ega bo‘ladimi?",
    "answer": "Yo‘q"
  },
  {
    "question": "Qator bu?",
    "answer": "yozuv, atribut, ekzempleyar,borliq"
  },
  {
    "question": "Realyatsion maydonda mohiyat aloqa diagrammasini o‘zgartirganda mohiyat nimaga o‘zgaradi?",
    "answer": "jadvalga"
  },
  {
    "question": "Unikal maydon deb qanday qatorga aytiladi",
    "answer": "qiymati qaytarilmaydigan maydon"
  },
  {
    "question": "Ustun bu?",
    "answer": "maydon, atribut"
  },
  {
    "question": "Qaysi MBBT da ustun va maydonning kema-ketligi ahamiyatsiz?",
    "answer": "realyatsionda"
  },
  {
    "question": "Realyatsion algebrada qanday operatsiya turlari mavjud",
    "answer": "An’anaviy va noan’anaviy"
  },
  {
    "question": "(A UNION V) UNION S ≡ AUNION (V UNION S)",
    "answer": "Assoativ xususiyati"
  },
  {
    "question": "A UNION B ≡ V UNION A",
    "answer": "Kommunikativ xususiyat"
  },
  {
    "question": "Jadval ma’lumotlar strukturasi qanday aniqlanadi?",
    "answer": "jadval ustunlari nomlanishi bilan"
  },
  {
    "question": "Noan’anaviy realyatsionoperatsiyalar",
    "answer": "Bog‘lanish, tanlash, proeksiya, bo‘lish"
  },
  {
    "question": "Realyatsion ma’lumotlar bazasida qaysi so‘rovtillari qo‘llaniladi",
    "answer": "SQL"
  },
  {
    "question": "Ma’lumotlar bazasi jadvali nima uchun kerak:",
    "answer": "ma’lumotlarni saqlashga;"
  },
  {
    "question": "An’anaviy realyatsionoperatsiyalarga nimalar kiradi",
    "answer": "kesib olish, umumlashtirish,farqlanish,dekart ko‘paytma"
  },
  {
    "question": "Birinchi normal formadaquyidagicha talab qo‘yiladi",
    "answer": "Jadvalning hamma maydonlari mayda maydonchalarga bo‘linishi kerak emas"
  },
  {
    "question": "Normallashtirish nimaga kerak",
    "answer": "Anomaliyadan holi bo‘lish uchun"
  },
  {
    "question": "Ikkinchi normal formadaquyidagicha talab qo‘yiladi:",
    "answer": "Jadvalning hamma maydonlaribirinchi kalitga bog‘liq"
  },
  {
    "question": "Nechta normal forma mavjud?",
    "answer": 6
  },
  {
    "question": "Uchinchi normal formadaquyidagicha talab qo‘yiladi:",
    "answer": "Kalit maydon bilan jadvalo‘rtasida bog‘liqlik bo‘lmasligi"
  },
  {
    "question": "SQL kengaytmasi nimani anglatadi?",
    "answer": "Sutrukturalashgan so‘rov tili"
  },
  {
    "question": "Qaysi SQL operatorlari jadvallar sxemasini boshqarishi mumkin?",
    "answer": "CRATE, ALTER, DROP"
  },
  {
    "question": "Qaysi SQL operatorlari ma’lumotlar ustidan murakkab amallarni bajaradi?",
    "answer": "SELECT, UPDATE, INSERT, DELETE"
  },
  {
    "question": "Obektning nomi ma’lumotlarjadvalida qanday nomlanadi?",
    "answer": "identifikatorlar"
  },
  {
    "question": "Sana vaqt toifasi",
    "answer": "TIMESTAMP"
  },
  {
    "question": "+, -, *, /' operatorlari qanday nomlanadi.",
    "answer": "Arifmetik amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilganqanday cheklanish ustun qiymatlarining bo‘sh bo‘lmasligini ko‘rsatadi",
    "answer": "NOT NULL"
  },
  {
    "question": "‘Paris’ – bu",
    "answer": "Satrli konstanta"
  },
  {
    "question": "VARChAR",
    "answer": "O‘zgaruvchan toifadagi satr tipi"
  },
  {
    "question": ">, <, >=, <=, <>, ==operatorlari deyiladi",
    "answer": "Olishtirish amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilganqanday cheklanish ustunqiymatlarini ma’lum bir shart bo‘yicha tekshiradi",
    "answer": "CHECK"
  },
  {
    "question": "Qaysi bir MBBT klient-server turiga kirmaydi",
    "answer": "ACCESS"
  },
  {
    "question": "TRUE va FALSE Qiymatini qabul qiluvchi toifalar qanday nomlanadi?",
    "answer": "Bul tipli"
  },
  {
    "question": "Butun toifa",
    "answer": "NUMERIC"
  },
  {
    "question": "NOT, AND, OR operatorlari vazifasi nimadan iborat?",
    "answer": "Mantiqiy amallar"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarining yagonaliginita’minlaydi",
    "answer": "UNIQUE"
  },
  {
    "question": "Jadvaldagi ustunga qo‘yilgan qanday cheklanish ustun qiymatlarini bog‘langan jadvaldagi birlamchi kalitqiymatlaridan oladi",
    "answer": "FORGN KEY"
  },
  {
    "question": "CREATE operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektyaratish"
  },
  {
    "question": "ALTER operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektni o‘zgartirish"
  },
  {
    "question": "DROP operatori vazifasi?",
    "answer": "Ma’lumotlar bazasidan obektni o‘chirish"
  },
  {
    "question": "Agar siz ustun rezultat qaytaruvchi jadvalga kirishni xohlasnagiz qanaqa kalitso‘zdan so‘ng SQL so‘rovi ko‘rsatilishi kerak?",
    "answer": "SELECT"
  },
  {
    "question": "Quyidagi so‘rovda s belgisi nimani anglatadi: SELECT * FROM STUDENT s;",
    "answer": "psevdonim"
  },
  {
    "question": "Qidiruv so‘rovlarini tezlashtirish uchun qaysi MBBT mexanizmi ishlatiladi",
    "answer": "indekslar"
  },
  {
    "question": "Keltirilgan qaysi MBBT tekin GNU lisenziyasibilan tarqatiladi",
    "answer": "MySQL"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NULL nimani anglatadi?",
    "answer": "Ustinda qiymat bermaslikka ruxsat berishni"
  },
  {
    "question": "CREATE TABLE jadval yaratish operatorida NOT NULL cheklagichi nimani anglatadi?",
    "answer": "Ustunga tegishli bo‘lgan satr qiymatlari bo‘sh bo‘lmasligini"
  },
  {
    "question": "So‘rovlarda qanday elementlarga psevdonim belgilash mumkin",
    "answer": "Jadval va qatorlarga"
  },
  {
    "question": "Qaysi korxona relyatsion MBBT yaratish bilan shug‘ullanmaydi",
    "answer": "GOOGLE"
  },
  {
    "question": "SELECT operatorini vazifasi?",
    "answer": "Jadvaldan ma’lumotlarni tanlash"
  },
  {
    "question": "UPDATE operatorini vazifasi?",
    "answer": "Jadvalda qatorni o‘zgartirish"
  },
  {
    "question": "DELETE operatorini vazifasi?",
    "answer": "Qatorni o‘chirish"
  },
  {
    "question": "INSERT operatorini vazifasi?",
    "answer": "Jadvalga satr qo‘shish"
  },
  {
    "question": "Bitta zarosning ichida joylashgan ikkinchi so‘rov qanday nomlanadi, misol: SELECT * FROM STUDENTWHERE group_id IN (SELECT id FROM group WHERE number=‘223-10’)",
    "answer": "quyi so‘rov"
  },
  {
    "question": "Qaysi korxona relyatsion MBBT yaratish bozorida yetakchi xisoblanadi",
    "answer": "ORACLE"
  },
  {
    "question": "Qaysi peredikat Guruhlash uchun ishlatiladi?",
    "answer": "GROUP BY"
  },
  {
    "question": "SELECT * FROM STUDENTWHERE SURNAME=‘P’;",
    "answer": "P harfiga teng bo‘lgan familyalarchiqadi."
  },
  {
    "question": "Bir nechta shartlardan foydalanishda WHERE operatorida shartlar orasi qanday ajratiladi?",
    "answer": "Kalit so‘zlar, AND yoki ORoperatorlari"
  },
  {
    "question": "SELECT operatoridan FROM so‘zidan keying yozuv nimani bildiradi?",
    "answer": "jadvalning nomini"
  },
  {
    "question": "Qaysi peredikat berilgan sharni qanoatlantiruvchi qidruvni amalga oshiradi?",
    "answer": "WHERE"
  },
  {
    "question": "Qays peredikat Saralash uchun ishlatiladi?",
    "answer": "ORDER BY"
  },
  {
    "question": "To‘gri yozilgan SELECT operatorini ko‘rsating.",
    "answer": "SELECT * FROM <jadval nomi>"
  },
  {
    "question": "INSERT, UPDATE, DELETEquyidagilarning biriga ishlamaydi?",
    "answer": "DML"
  },
  {
    "question": "Qaesi operatorda WHEREishlatib bo‘lmaydi?",
    "answer": "INSERT"
  },
  {
    "question": "Ikkilamchi kalit nimaniko‘rsatadi",
    "answer": "birlamchi kalitni"
  },
  {
    "question": "SELECT * FROM STUDENTWHERE SURNAME=‘P%’;",
    "answer": "P bilan boshlanuvchi familyalar chiqadi"
  },
  {
    "question": "CREATE TABLE, ALTER TABLE,DROP TABLE Komandalariniqaysilarda ishlatib bo‘lmaydi",
    "answer": "DDL"
  },
  {
    "question": "SELECT operatoridan keying * nimani bildiradi?",
    "answer": "hamma ustunlarni belgilashni"
  },
  {
    "question": "Qaysi operator yordamida«Соединение » amalibajariladi",
    "answer": "SELECT + JOIN"
  },
  {
    "question": "Qaysi operator yordamida«Пересечение» amalibajariladi",
    "answer": "INTERSECT"
  },
  {
    "question": "Qaysi operator yordamida«Проекция» amali bajariladi",
    "answer": "SELECT"
  },
  {
    "question": "Qaysi operator yordamida«Выборка» amali bajariladi",
    "answer": "SELECT + WHERE"
  },
  {
    "question": "Qaysi operator yordamida«Объеденение» amalibajariladi",
    "answer": "UNION"
  },
  {
    "question": "Operatorlarning qaysi biri natijaviy tanlovda eng ko‘p qatorlar sonini chiqaradi",
    "answer": "dekart ko‘paytmasi"
  },
  {
    "question": "Ichki bog‘lanish peratori – bu",
    "answer": "INNER JOIN"
  },
  {
    "question": "Chap tashqi bog‘lanishoperatori – bu",
    "answer": "LEFT OUTER JOIN"
  },
  {
    "question": "INTERSECT operatori nimagamo‘ljallangan",
    "answer": "Ikkala tanlovda mavjud umumiy natijalarni chiqarish uchun"
  },
  {
    "question": "SELECT COUNT(id) FROMSTUDENT so‘rovini nimaqaytaradi",
    "answer": "STUDENTlarning miqdori"
  },
  {
    "question": "Qaysi operator yordamida«Разность» amali bajariladi",
    "answer": "MINUS"
  },
  {
    "question": "Tashqi bog‘lanishning qaysiturlarini bilasiz",
    "answer": "Chap, o‘ng, to‘liq"
  },
  {
    "question": "To‘liq tashqi bog‘lanishoperatori – bu",
    "answer": "FULL OUTER JOIN"
  },
  {
    "question": "UNION operatori nimagamo‘ljallangan",
    "answer": "Ikki so‘rov tanlovining natijalarinibirlashtirish uchun"
  },
  {
    "question": "Jadval ustunidagi yig‘indiqiymati qanday hisoblanadi",
    "answer": "SUM funksiyasi yordamida"
  },
  {
    "question": "Bog‘lanishning qaysi turlarinibilasiz",
    "answer": "Ichki va tashqi"
  },
  {
    "question": "Ichki bog‘lanish qaysi turgakiradi",
    "answer": "ekvivalent"
  },
  {
    "question": "O‘ng tashqi bog‘lanishoperatori – bu",
    "answer": "RIGHT OUTER JOIN"
  },
  {
    "question": "JOIN operatori nimagamo‘ljallangan",
    "answer": "Ikki jadvaldan olingan natijalarni bitta jadvalda birlashtirish uchun"
  },
  {
    "question": "SELECT MAX(id) FROMSTUDENT so‘rovini nimaqaytaradi",
    "answer": "STUDENTning maksimal indentifikatori"
  },
  {
    "question": "SELECT AVG(age) FROMSTUDENT so‘rovi nimaniqaytaradi",
    "answer": "STUDENTlarning o‘rtacha yoshini"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s, Groups g",
    "answer": "groups va students jadvalidagidekart ko‘paytmani chiqaradi"
  },
  {
    "question": "Jadvaldagi qaydlar miqdori qanday hisoblanadi",
    "answer": "COUNT funksiyasi yordamida"
  },
  {
    "question": "Qaysi operatorlar bilan MIN, MAX, AVG, SUM agregatnix funksiyalar bajarilishi mumkin",
    "answer": "faqatgina SELECT bilan"
  },
  {
    "question": "MINUS operatori nimagamo‘ljallangan",
    "answer": "Birinchi tanlovda mavjud, lekin ikkinchisida yo‘q bo‘lgan natijalarni chiqarish uchun"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s INNER JOIN Groups g ON s.group_id <> g.id",
    "answer": "groups va students jadvalidagi s.group_id = g.id tengligini qanoatlantiruvchi qatorlardan tashqari barcha qatorlarni chiqarib beradi"
  },
  {
    "question": "SELECT MIN(id) FROMSTUDENT so‘rovi nimaniqaytaradi",
    "answer": "STUDENTning minimal indentifikatori"
  },
  {
    "question": "Qaysi operatorlardan biri faqatgina bitta qator ustida operatsiya bajarishi mumkin",
    "answer": "INSERT"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s INNER JOIN Groups g ON s.group_id = g.id",
    "answer": "groups va students jadvalidagi s.group_id = g.id tengligi orqali bog‘lanadigan barcha qatorlarni chiqaradi"
  },
  {
    "question": "Quyidagi savol qanday javob qaytaradi SELECT * FROM students s FULL JOIN Groups g ON s.group_id = g.id",
    "answer": "NULL qiymatiga ega bo‘lmagan s.group_id = g.id tengligi orqali bog‘lanadigan groups va students jadvalidagi barcha qatorlarni chiqaradi"
  },
  {
    "question": "Ma’lumotlarni qaysi tipiga MIN, MAX, AVG, SUM agregat funksiyalarni qo‘llash mumkin emas",
    "answer": "Qatorlar"
  },
  {
    "question": "Ko‘p foydalanuvchili MBBTda ishlashning murakkabligi nimada",
    "answer": "Loyihalashning, ekspluatasiyaning murakkabligi"
  },
  {
    "question": "Lokal MB dako‘pfoydalanuvchili ruxsatmavjudmi",
    "answer": "Yo‘q"
  },
  {
    "question": "Zahira o‘rnini bosuvchi MBBTserveri nima deb ataladi",
    "answer": "oyna"
  },
  {
    "question": "MBBT administratorining asosiy vazifalariga nimalar kiradi",
    "answer": "Huquq va majburiyatlarni taqsimlash"
  },
  {
    "question": "Bitta tranzaksiya nechtaoperatsiyadan iborat bo‘lishimumkin",
    "answer": "bir nechta"
  },
  {
    "question": "Tranzaksiya nechta xususiyatga ega",
    "answer": 4
  },
  {
    "question": "Ma’lumotlarga parallel ruxsat berish imkoniyatini ta’minlab beruvchi asosiy mexanizm nima hisoblanadi",
    "answer": "Blokka tushirish"
  },
  {
    "question": "Blokka tushirishning qanaqa turlari bor",
    "answer": "Yozuv va o‘qishga"
  },
  {
    "question": "MB ishining mantiqiy birligi nima deb ataladi",
    "answer": "Trenzaksiya"
  },
  {
    "question": "Tranzaksiyalarning asosiy xususiyatlari",
    "answer": "ASID"
  },
  {
    "question": "Tizimdagi har qanday to‘xtalishlarida MBBT oldindan ko‘rib o‘tilganma’lumotlar omborini qayta tiklash qobilyati nima deb ataladi",
    "answer": "Qayta tiklash"
  },
  {
    "question": "MB ni konfiguratsiyalash va hujjatlashtirish quyidagilardan qaysi biriga tegishli",
    "answer": "MB strukturasini boshqarish"
  },
  {
    "question": "Tizimdagi to‘xtalishlarda ma’lumotlarni qayta tiklash uchun nima zarur bo‘ladi",
    "answer": "Backup"
  },
  {
    "question": "Qaysi buyruqlardan biritranzaksiyadagi o‘zgarishlarnisaqlash uchun xizmat qiladi",
    "answer": "COMMIT"
  },
  {
    "question": "Ma’lumotlar bazasidagi nosozliklar sababi nimada bo‘lishi mumkin emas",
    "answer": "Lisenziyalash muammolari"
  },
  {
    "question": "Bitta rolda nechta foydalanuvchi bo‘lishi mumkin",
    "answer": "Bir nechta"
  },
  {
    "question": "Tranzaksiya dispecheriga ta’rifbering",
    "answer": "Tranzaksiyalarning atomarliginita’minlovchi tizimli komponenta"
  },
  {
    "question": "Yoxud barcha, yoxud hech narsa bajarilmaydigan tranzaksiya xususiyati nima deb nomlanadi",
    "answer": "Atomarlik"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiyani boshlanishini e’lon qilish uchun xizmat qiladi",
    "answer": "BEGIN TRANSACTION"
  },
  {
    "question": "Ma’lumotlarga ruxsat etish xavfsizligi qanday mexanizm bilan ta’minlanadi",
    "answer": "Foydalanuvchilar va ahamiyati"
  },
  {
    "question": "Qaysi operatsiyalarda MB ga ruxsat sozlanadi",
    "answer": "O‘qish va o‘zgarishlarda"
  },
  {
    "question": "Tranzaksiya bu ?",
    "answer": "Ma’lumotlar bilan ishlashda o‘zining mantiqiy birligiga ega bo‘lgan ma’lumotlar bazasi jarayonlarining ketma-ket bajarilish guruxi"
  },
  {
    "question": "Qayta tiklash jarayoni jurnalida barcha tranzaksiyalarni bajarilish jarayoni nima deb ataladi",
    "answer": "Nakat"
  },
  {
    "question": "Qaysi buyruqlardan biri tranzaksiya otkati uchun xizmat qiladi",
    "answer": "ROLLBACK"
  },
  {
    "question": "MBBTda bir vaqtning o‘zida ko‘pchilik tranzaksiyalarmurojatini qayta ishlash bitta ma’lumotga bir necha marta amalga oshirish imkoniyatini quyidagi terminlardan qaysi birida to‘g‘ri ko‘rsatilgan",
    "answer": "Parallellik"
  },
  {
    "question": "Ma’lumotlar bazasi xavfsizligini ta’minlash nimalardan iborat",
    "answer": "Ayrim harakatlarni bajarish huquqi faqatgina aniq foydalanuvchiga va aniq vaqt davomida beriladi"
  },
  {
    "question": "Bitta foydalanuvchiganechtagacha rollar bo‘lishimumkin",
    "answer": "Bir nechta"
  },
  {
    "question": "Ayrim kompyuter tarmoqlarida fiziktaqsimlangan ma’lumotlar majmuining o‘zarobog‘langan mantiqiy to‘plpmi (va ularning tavsifi) nima deb ataladi",
    "answer": "Taqsimlangan MB"
  },
  {
    "question": "Taqsimlangan MB dan foydalanayotgan vaqtda foydalanuvchi uni qanday ko‘ra oladi",
    "answer": "Yagona MB sifatida ko‘radi"
  },
  {
    "question": "Har bir tugun o‘zinig xususiy ma’lumotlar bazasi tizimiga ega bo‘lib va bu tugunlar o‘zaro kelishilgan holda ishlaydigan tizim nima deb ataladi",
    "answer": "Taqsimlangan"
  },
  {
    "question": "Taqsimlangan MBBT ni xususiyatlarini ajratib ko‘rsating",
    "answer": "Har bir tugunda MBBT lokal ilovalarning avtonom ishlash, ma’lumotlarga bo‘lgan ruxsat MBBT boshqaruvi ostida amalga oshirilishi"
  },
  {
    "question": "Birturdagi taqsimlangan MB foydalaniladi .....",
    "answer": "Turli xil tugunlarda bir xil MBBT"
  },
  {
    "question": "Foydalanuvchiga ko‘p tugunlar bo‘yicha taqsimlangan ma’lumotlar xususiyatlarining ko‘rinmasligi nima deb ataladi",
    "answer": "Tiniqlilik"
  },
  {
    "question": "ANSI-SPARK arxitekturasi nechta darajaga ega",
    "answer": 3
  },
  {
    "question": "Taqsimlangan/parallelma’lumotlar bazasi - bu",
    "answer": "Tarmoqlarda taqsimlangan MB"
  },
  {
    "question": "Taqsimlangan MBBT vazifasiga nima kirmaydi",
    "answer": "Operativ xotirani boshqarish"
  },
  {
    "question": "Parallel MBBT arxitekturasining asosiy tipi(turi)ga kirmaydigan javobni ko‘rsating",
    "answer": "Taqsimlangan foydalanuvchilar tizimi"
  },
  {
    "question": "Taqsimlangan MBBT ningasosiy turlarini ko‘rsating",
    "answer": "Bir turdagi va ko‘p turdagi"
  },
  {
    "question": "Parallel MBBT nima?",
    "answer": "Qattiq disklar va bir nechta protsessorlardan foydalangan holda funksiyalashgan MBBT"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MB daqanaqa tillar mavjud",
    "answer": "Permanentl va dasturlash tili"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MBBT da ma’lumotlarga ruxsat olish uchun nimadan foydalaniladi",
    "answer": "Ko‘rsatgichlar"
  },
  {
    "question": "Keltirilganlardan qaysi o‘zigaxos xususiyat faqatgina",
    "answer": "Ma’lumotlarning uzluksizligi"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MBBTga xos"
  },
  {
    "question": "Qaysi MBBT lar dasturbo‘lishini talab qiladi",
    "answer": "Ob’ektga yo‘naltirilgan"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MB ...saqlaydi",
    "answer": "ob’ektlarning semantikasinini"
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MB ning nechta saqlash darajasi mavjud",
    "answer": 1
  },
  {
    "question": "Ob’ektga yo‘naltirilgan MBBTning relyatsion MBBT dan asosiy farqlari",
    "answer": "Ob’ekt ma’lumotlarni to‘g‘ri boshqarilishi haqidagi ma’lumotni saqlaydi"
  },
  {
    "question": "Qaysi MBBTlarda konstruktorlar va destruktorlardan foydalaniladi",
    "answer": "Ob’ektga yo‘naltirilgan"
  },
  {
    "question": "Qaysi tashkilotlar XML (Extensible Markup Language standartlarini ishlab chiqadi",
    "answer": "W3C"
  },
  {
    "question": "Aniq tuzilishga ega bo‘lgan lekin bu tuzilish muqarrar bo‘lmagan, yetarlicha o‘rganilmagan yoki to‘liq bo‘lmagan ma’lumotlar nima deb ataladi",
    "answer": "Deyarli strukturalashmagan"
  },
  {
    "question": "XML ma’lumotlar validatsiyasiuchun nimalar talab qilinadi",
    "answer": "DTD"
  },
  {
    "question": "Extensible Markup Language ning to‘g‘ri abbreviaturasini ko‘rsating",
    "answer": "XML"
  },
  {
    "question": "Qaysi variantlardan biri XML ga tegishli emas",
    "answer": "SQL"
  },
  {
    "question": "XML uchun daraxt ko‘rinishiga asoslangan API -interfeys nima deb nomalanadi",
    "answer": "DOM"
  },
  {
    "question": "Qaysi so‘rovlar tilini XML ga qo‘llash mumkin emas",
    "answer": "QBE"
  },
  {
    "question": "Deklarativ so‘rov tillari XMLuchun nima deb yuritiladi",
    "answer": "XPath"
  },
  {
    "question": "XML ning aniq konkrettuzilishini o‘zida aks ettiruvchituzilma nima deb yuritiladi",
    "answer": "XML SHEMA"
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