const data = [
  {
    "question": "Meta-kompyuter nima?",
    "answer": "Klaster tizimlari asosida tashkil etilgan virtual hisoblash tizimi",
    "noAnswer1": "Faqat bir protsessorli tizim",
    "noAnswer2": "Katta hajmdagi ma'lumotlarni boshqarish tizimi",
    "noAnswer3": "Grafik protsessorlarni birlashtiruvchi tizim"
  },
  {
    "question": "Klasterli tizimlar qaysi sohada keng qo‘llaniladi?",
    "answer": "Web serverlar va yuqori yukli hisoblash tizimlari",
    "noAnswer1": "Faqat multimedia dasturlarida",
    "noAnswer2": "Oddiy ofis tizimlarida",
    "noAnswer3": "Tarqatilgan lokal tarmoqlarda"
  },
  {
    "question": "Klasterlarda tarmoq orqali bog‘lanishning eng ko‘p ishlatiladigan protokoli qaysi?",
    "answer": "MPI",
    "noAnswer1": "POP3",
    "noAnswer2": "HTTP",
    "noAnswer3": "FTP"
  },
  {
    "question": "Yopiq klaster tizimlarining asosiy xususiyati nima?",
    "answer": "Faqat bir tarmoq segmentida ishlaydi",
    "noAnswer1": "Ochiq tarmoq orqali ishlaydi",
    "noAnswer2": "Ma'lumotlarga global kirish imkonini beradi",
    "noAnswer3": "Tarqatilgan tizimlarda ishlatilmaydi"
  },
  {
    "question": "Klaster tizimlarida qanday turdagi tarmoqlar qo‘llaniladi?",
    "answer": "LAN va WAN",
    "noAnswer1": "Tarqatilgan lokal tarmoqlar",
    "noAnswer2": "Faqat Wi-Fi tarmoqlar",
    "noAnswer3": "Virtual xotira tarmoqlari"
  },
  {
    "question": "Virtual klaster tizimlarida asosiy jarayon qanday ishlaydi?",
    "answer": "Resurslar virtualizatsiya texnologiyalari yordamida boshqariladi",
    "noAnswer1": "Bir nechta fizik kompyuterlardan iborat bo‘ladi",
    "noAnswer2": "Har bir kompyuter alohida ishlaydi",
    "noAnswer3": "Faqat bitta protsessor ustida ishlaydi"
  },
  {
    "question": "Meta-kompyuterlarning asosiy afzalligi nima?",
    "answer": "Resurslardan maksimal foydalanish imkoniyati",
    "noAnswer1": "Faqat bitta xotira tizimidan foydalanish",
    "noAnswer2": "Faqat grafik interfeyslarni boshqarish imkoniyati",
    "noAnswer3": "Oddiy lokal tarmoq bilan ishlashi"
  },
  {
    "question": "Ochiq klaster tizimlarining kamchiligi nima?",
    "answer": "Tarmoqdagi xavfsizlik xavflariga moyilligi",
    "noAnswer1": "Resurslardan maksimal foydalanish imkoniyati",
    "noAnswer2": "Faqat lokal tizimlarda ishlashi",
    "noAnswer3": "Grafik hisoblashlarni qo‘llab-quvvatlamasligi"
  },
  {
    "question": "Klaster tizimlarida ishlatiladigan umumiy boshqaruv dasturlari qaysilar?",
    "answer": "MPI va OpenMP",
    "noAnswer1": "HTTP va FTP",
    "noAnswer2": "NUMA va UMA",
    "noAnswer3": "SMTP va POP3"
  },
  {
    "question": "Klaster tizimlarning asosiy kamchiligi nima?",
    "answer": "Xavfsizlikka yuqori talablar",
    "noAnswer1": "Parallel hisoblashlarni qo‘llab-quvvatlamasligi",
    "noAnswer2": "Kam resurslardan foydalanishi",
    "noAnswer3": "Tarmoq tezligining ahamiyatsizligi"
  },
  {
    "question": "Saqlash klasterlarida qaysi texnologiya keng qo‘llaniladi?",
    "answer": "RAID",
    "noAnswer1": "NUMA",
    "noAnswer2": "GPU",
    "noAnswer3": "HTTP"
  },
  {
    "question": "GPU klasterlarining asosiy qo'llanilishi qaysi soha uchun mos?",
    "answer": "Grafik hisoblash va sun'iy intellekt",
    "noAnswer1": "Matritsa hisoblash",
    "noAnswer2": "Tarmoq boshqaruvi",
    "noAnswer3": "Web-dastur ishlov berish"
  },
  {
    "question": "Klaster tizimlarining barqarorligini oshirish uchun qaysi usul ishlatiladi?",
    "answer": "Ma'lumotlarni zaxiralash va uzilishlar nazorati",
    "noAnswer1": "Xotira hajmini oshirish",
    "noAnswer2": "Har bir protsessorni alohida boshqarish",
    "noAnswer3": "Faqat grafik hisoblash imkoniyatlarini oshirish"
  },
  {
    "question": "Yopiq va ochiq klasterlar o'rtasidagi asosiy farq nimada?",
    "answer": "Ma'lumotlarga kirish chegaralari va xavfsizlik",
    "noAnswer1": "Tizimda ishlatiladigan protsessorlar turi",
    "noAnswer2": "Xotira arxitekturasining turlari",
    "noAnswer3": "Grafik hisoblash tezligi"
  },
  {
    "question": "Klaster tizimlarida hisoblash jarayonini optimallashtirish uchun qaysi algoritmlar ishlatiladi?",
    "answer": "Taqsimlangan hisoblash va yukni balanslash algoritmlari",
    "noAnswer1": "Faqat ma'lumotlarni saqlash algoritmlari",
    "noAnswer2": "Xotira almashish algoritmlari",
    "noAnswer3": "Graf jarayonlarni boshqarish algoritmlari"
  },
  {
    "question": "Kommunikatsiya nima?",
    "answer": "Axborotni bir joydan ikkinchisiga uzatish jarayoni",
    "noAnswer1": "Axborotning kodlash jarayoni",
    "noAnswer2": "Ma'lumotlarni tahlil qilish jarayoni",
    "noAnswer3": "Ma'lumotni tarmoqlarda saqlash texnologiyasi"
  },
  {
    "question": "Kommunikatsiya tarmoqlari nima?",
    "answer": "Axborotlarni bir joydan ikkinchisiga uzatadigan tizimlar",
    "noAnswer1": "Axborotlarni tahlil qilish usullari",
    "noAnswer2": "Faqat simsiz tarmoqlar uchun platforma",
    "noAnswer3": "Tarmoq protokollari va dasturlar majmuasi"
  },
  {
    "question": "Kommunikatsiya jarayonining asosiy elementi qaysi?",
    "answer": "Axborot uzatuvchi, qabul qiluvchi va kanal",
    "noAnswer1": "Protsessor",
    "noAnswer2": "Tarmoq adapterlari",
    "noAnswer3": "Faoliyat loglari"
  },
  {
    "question": "Kommunikatsiya tarmoqlarining turlari qanday?",
    "answer": "Lokal va global tarmoqlar",
    "noAnswer1": "Faol va passiv tarmoqlar",
    "noAnswer2": "An'anaviy va interaktiv tarmoqlar",
    "noAnswer3": "Kodlangan va ochiq tarmoqlar"
  },
  {
    "question": "Lokal tarmoq (LAN) nima?",
    "answer": "Mahalliy joyda bog'langan qurilmalar tarmog'i",
    "noAnswer1": "Global miqyosda ishlovchi tarmoq",
    "noAnswer2": "Faqat simsiz aloqa tizimi",
    "noAnswer3": "Maxsus apparat tarmog'i"
  },
  {
    "question": "Global tarmoq (WAN) qanday ishlaydi?",
    "answer": "Yirik geografik hududlarni qamrab oladi",
    "noAnswer1": "Faqat bir binoda ishlaydi",
    "noAnswer2": "Tarmoq texnologiyalarini ishlatmaydi",
    "noAnswer3": "Faqat markazlashgan serverlarda ishlaydi"
  },
  {
    "question": "Tarmoq orqali ma'lumot uzatishda qaysi protokol ko'proq qo'llaniladi?",
    "answer": "TCP/IP",
    "noAnswer1": "SMTP",
    "noAnswer2": "HTTP",
    "noAnswer3": "FTP"
  },
  {
    "question": "Kommunikatsiya tarmoqlarida qaysi texnologiya ma'lumotlarni shifrlash uchun ishlatiladi?",
    "answer": "SSL/TLS",
    "noAnswer1": "DHCP",
    "noAnswer2": "POP3",
    "noAnswer3": "RAID"
  },
  {
    "question": "Kommunikatsiya tarmoqlarida tarmoq topologiyasi nima?",
    "answer": "Tarmoq qurilmalarining bir-biriga bog'lanish shakli",
    "noAnswer1": "Ma'lumotlarni tahlil qilish algoritmi",
    "noAnswer2": "Tarmoq xavfsizligi darajasi",
    "noAnswer3": "Tarmoqdagi axborotning tahliliy usuli"
  },
  {
    "question": "Kompyuter tarmoqlari qaysi maqsadda qo'llaniladi?",
    "answer": "Ma'lumotlarni uzatish va ulashish uchun",
    "noAnswer1": "Grafik ishlov berish uchun",
    "noAnswer2": "Dasturiy ta'minotni rivojlantirish uchun",
    "noAnswer3": "Faqat xavfsizlikni ta'minlash uchun"
  },
  {
    "question": "Simli kommunikatsiya tarmoqlarining asosiy afzalligi nima?",
    "answer": "Yuqori tezlik va barqarorlik",
    "noAnswer1": "Har qanday joyda foydalanish imkoniyati",
    "noAnswer2": "Qulay va oson sozlanishi",
    "noAnswer3": "Elektr energiyasiga ehtiyoj yo'qligi"
  },
  {
    "question": "Simsiz kommunikatsiya tarmoqlari qanday ishlaydi?",
    "answer": "Radio to'lqinlar yoki infraqizil texnologiyalar orqali ma'lumot uzatadi",
    "noAnswer1": "Ma'lumotlarni kabel orqali uzatadi",
    "noAnswer2": "Faqat lokal joylarda ma'lumot uzatadi",
    "noAnswer3": "Tarmoq kartasidan foydalanmaydi"
  },
  {
    "question": "Optik tolali aloqa tizimining afzalliklaridan biri nima?",
    "answer": "Ma'lumotlarni yuqori tezlikda va uzoq masofalarga uzatish imkoniyati",
    "noAnswer1": "Elektr energiyasi kam sarflanadi",
    "noAnswer2": "Oddiy kabeldan foydalanish",
    "noAnswer3": "Faqat mahalliy tarmoqlar uchun mo'ljallangan"
  },
  {
    "question": "Kommunikatsiya tarmoqlarida tarmoq uzeli nima?",
    "answer": "Ma'lumotlarni qabul qilish yoki uzatishni amalga oshiruvchi har qanday qurilma",
    "noAnswer1": "Faqat kompyuter qurilmasi",
    "noAnswer2": "Tarmoq topologiyasining grafigi",
    "noAnswer3": "Faqat server qurilmasi"
  },
  {
    "question": "Kommunikatsiya tizimlarida ma'lumotlarni shifrlash nima uchun kerak?",
    "answer": "Ma'lumotlarning xavfsizligini ta'minlash uchun",
    "noAnswer1": "Ma'lumotlarni tezkor uzatish uchun",
    "noAnswer2": "Faqat xotira hajmini kamaytirish uchun",
    "noAnswer3": "Operatsion tizimni tezlashtirish uchun"
  },
  {
    "question": "Mobil kommunikatsiya qanday amalga oshiriladi?",
    "answer": "Simsiz texnologiyalar yordamida",
    "noAnswer1": "Faqat optik tolali kabellar orqali",
    "noAnswer2": "Tarmoq serverlari yordamida ma'lumotni joyida saqlash orqali",
    "noAnswer3": "Internetdan foydalanmasdan"
  },
  {
    "question": "Kommunikatsiya tarmoqlarida ma'lumot uzatishning asosiy birligi nima?",
    "answer": "Paket",
    "noAnswer1": "Protokol",
    "noAnswer2": "Segment",
    "noAnswer3": "Tarmoq adapteri"
  },
  {
    "question": "Qo'llaniladigan kommunikatsiya protokollaridan biri qaysi?",
    "answer": "SMTP",
    "noAnswer1": "HTML",
    "noAnswer2": "JSON",
    "noAnswer3": "CSS"
  },
  {
    "question": "Internet tarmog'i qanday turdagi kommunikatsiya tarmog'iga kiradi?",
    "answer": "Global tarmoq",
    "noAnswer1": "Lokal tarmoq",
    "noAnswer2": "Virtual tarmoq",
    "noAnswer3": "Shifrlangan tarmoq"
  },
  {
    "question": "Kommunikatsiya tarmoqlarida trafikni boshqarish uchun qaysi texnologiya ishlatiladi?",
    "answer": "QoS (Quality of Service)",
    "noAnswer1": "POP3",
    "noAnswer2": "RAID",
    "noAnswer3": "HTTP/2"
  },
  {
    "question": "Tarmoq topologiyasi nima?",
    "answer": "Tarmoq qurilmalarining bir-biriga ulanish tartibi",
    "noAnswer1": "Tarmoq qurilmalarining apparat texnologiyasi",
    "noAnswer2": "Tarmoq xavfsizligi algoritmi",
    "noAnswer3": "Tarmoq dasturlarining ishlash jarayoni"
  },
  {
    "question": "Quyidagi tarmoq topologiyalaridan qaysi biri mavjud?",
    "answer": "\"Yulduz\"",
    "noAnswer1": "\"Oyna\"",
    "noAnswer2": "\"Zanjir\"",
    "noAnswer3": "\"Piramida\""
  },
  {
    "question": "Halqa topologiyasining xususiyati nimada?",
    "answer": "Tarmoq qurilmalari yopiq halqa shaklida ulanadi",
    "noAnswer1": "Tarmoq qurilmalari zanjir shaklida ulanadi",
    "noAnswer2": "Har bir qurilma o'z uzatish kanaliga ega",
    "noAnswer3": "Server orqali ulanish amalga oshadi"
  },
  {
    "question": "Yulduz topologiyasida markaziy element sifatida nima ishlatiladi?",
    "answer": "Switch yoki hub",
    "noAnswer1": "Kompyuter",
    "noAnswer2": "Router",
    "noAnswer3": "Optik kabel"
  },
  {
    "question": "Magistral topologiyasining asosiy afzalligi nima?",
    "answer": "Kam xarajat",
    "noAnswer1": "Yuqori tezlikdagi ulanish",
    "noAnswer2": "Tarmoqning mustahkamligi",
    "noAnswer3": "Signalning qiyinchiliksiz tarqalishi"
  },
  {
    "question": "Yulduz topologiyasining kamchiligi nima?",
    "answer": "Markaziy tugun ishlamasa, butun tarmoq ishlamay qoladi",
    "noAnswer1": "Tarmoq qurilmalari sonining cheklanganligi",
    "noAnswer2": "Kabel sarfi ko'p bo'ladi",
    "noAnswer3": "Qurilmalar uzatish tezligini pasaytiradi"
  },
  {
    "question": "Halqa topologiyasida ma'lumot qanday uzatiladi?",
    "answer": "Belgilangan yo'nalishda bir tugundan boshqasiga ketma-ket",
    "noAnswer1": "Faqat markaziy uzel orqali",
    "noAnswer2": "Ixtiyoriy yo'nalishda",
    "noAnswer3": "Zanjir orqali ketma-ket"
  },
  {
    "question": "Tarmoqning gibrid topologiyasi nima?",
    "answer": "Turli xil topologiyalarning kombinatsiyasi",
    "noAnswer1": "Bir xil turdagi qurilmalarning ulanish shakli",
    "noAnswer2": "Simli va simsiz tarmoqlarning kombinatsiyasi",
    "noAnswer3": "Faqat simsiz ulanishlar"
  },
  {
    "question": "Magistral topologiyasida signal qanday tarqaladi?",
    "answer": "Umumiy kabel bo'ylab barcha qurilmalarga tarqaladi",
    "noAnswer1": "Faqat ixtiyoriy yo'nalishda uzatiladi",
    "noAnswer2": "Markaziy tugundan tarqaladi",
    "noAnswer3": "Har bir qurilmaga bevosita uzatiladi"
  },
  {
    "question": "Yulduz topologiyasining afzalligi nimada?",
    "answer": "Oson kengaytirish va boshqarish",
    "noAnswer1": "Har bir qurilmaning mustaqil ishlashi",
    "noAnswer2": "Minimal kabel ishlatilishi",
    "noAnswer3": "Tarmoqning avtomatik konfiguratsiyasi"
  },
  {
    "question": "Halqa topologiyasi qanday tarmoq uchun qulay?",
    "answer": "Kichik lokal tarmoqlar",
    "noAnswer1": "Katta korporativ tarmoqlar",
    "noAnswer2": "Wi-Fi tarmoqlari",
    "noAnswer3": "Gibrid tarmoqlar"
  },
  {
    "question": "Magistral topologiyaning asosiy kamchiligi nima?",
    "answer": "Bir kabelning ishlamay qolishi butun tarmoqni ishdan chiqaradi",
    "noAnswer1": "Yuqori xarajatlar talab qilinishi",
    "noAnswer2": "Signalning butun tarmoq bo'ylab tarqalishi",
    "noAnswer3": "Tarmoqning mustahkamligi"
  },
  {
    "question": "Yulduz topologiyasi qanday vaziyatda ishlatiladi?",
    "answer": "Oson boshqariladigan va kengaytiriladigan tarmoqlarda",
    "noAnswer1": "Markaziy server talab qilinmaydigan tarmoqlarda",
    "noAnswer2": "Signal tezligini oshirish maqsadida",
    "noAnswer3": "Faqat simsiz tarmoqlar uchun"
  },
  {
    "question": "Halqa topologiyasida ma'lumotlar uzatish jarayonida qaysi usul ishlatiladi?",
    "answer": "Token uzatish",
    "noAnswer1": "Paket yo'nalishlash",
    "noAnswer2": "Zanjirli uzatish",
    "noAnswer3": "Broadcast uzatish"
  },
  {
    "question": "Tarmoqning magistral topologiyasini kengaytirish uchun nima talab qilinadi?",
    "answer": "Magistral kabelga yangi qurilma ulash",
    "noAnswer1": "Qo'shimcha switch yoki hub",
    "noAnswer2": "Yangi markaziy tugun o'rnatish",
    "noAnswer3": "Tarmoq dasturini o'zgartirish"
  },
  {
    "question": "Gibrid topologiya qaysi tarmoqlar uchun mos keladi?",
    "answer": "Yirik korporativ va ma'lumot markazlari uchun",
    "noAnswer1": "Oddiy lokal tarmoqlar uchun",
    "noAnswer2": "Faqat mobil tarmoqlar uchun",
    "noAnswer3": "Magistral topologiyaga asoslangan tarmoqlar uchun"
  },
  {
    "question": "Tarmoqlarda \"Mesh\" topologiyasi qanday ishlaydi?",
    "answer": "Har bir qurilma boshqasiga to'g'ridan-to'g'ri ulanadi",
    "noAnswer1": "Faqat markaziy tugun orqali",
    "noAnswer2": "Yagona magistral orqali bog'lanadi",
    "noAnswer3": "Halqa shaklida ma'lumotlar tarqaladi"
  },
  {
    "question": "\"Mesh\" topologiyasining asosiy afzalligi nima?",
    "answer": "Bir tugun ishdan chiqsa ham tarmoq ishlashda davom etishi",
    "noAnswer1": "Kabel sarfining kamayishi",
    "noAnswer2": "Har bir qurilmaning mustaqil ulanishi",
    "noAnswer3": "Yuqori tezlikda signal uzatish"
  },
  {
    "question": "Magistral topologiyada signalning samaradorligini oshirish uchun nima talab qilinadi?",
    "answer": "Signalni kuchaytiruvchi qurilma (repeater) qo'shish",
    "noAnswer1": "Qo'shimcha router o'rnatish",
    "noAnswer2": "Kabel uzunligini qisqartirish",
    "noAnswer3": "Token uzatishni amalga oshirish"
  },
  {
    "question": "Tarmoq topologiyasi qanday tanlanadi?",
    "answer": "Qurilmalarning joylashuvi va ishlash talablariga qarab",
    "noAnswer1": "Faqat qurilmalar soniga asoslanib",
    "noAnswer2": "Markaziy tugun ishlashiga asoslanib",
    "noAnswer3": "Internet tezligiga qarab"
  },
  {
    "question": "Parallel dasturlashning asosiy qo'llanilish sohasi qaysi?",
    "answer": "Katta hajmdagi hisob-kitoblarni tezlashtirishda",
    "noAnswer1": "Veb-sayt dizayni yaratishda",
    "noAnswer2": "O'yin dasturlarida",
    "noAnswer3": "Matn muharrirlari yaratishda"
  },
  {
    "question": "Quyidagilardan qaysi biri parallel dasturlash uchun asosiy qo'llanilish maydonidir?",
    "answer": "Ilmiy va muhandislik hisob-kitoblari",
    "noAnswer1": "Matnli fayllarni tahrirlash",
    "noAnswer2": "Grafiklar va vizualizatsiya",
    "noAnswer3": "Ma'lumotlar bazasi boshqaruvi"
  },
  {
    "question": "Parallel dasturlash qaysi sohada ishlatilmaydi?",
    "answer": "Oddiy kalkulyator dasturlarida",
    "noAnswer1": "Genomika va bioinformatikada",
    "noAnswer2": "Ko'p foydalanuvchili onlayn o'yinlarda",
    "noAnswer3": "Vaqt bo'yicha katta ma'lumotlarni tahlil qilishda"
  },
  {
    "question": "Superkompyuterlar parallel dasturlash yordamida qanday sohalarda qo'llaniladi?",
    "answer": "Astronomik tahlillar va simulyatsiyalarda",
    "noAnswer1": "Matnli hujjatlarni tahrirlashda",
    "noAnswer2": "Ijtimoiy media platformalarini boshqarishda",
    "noAnswer3": "Matematikani o'qitishda"
  },
  {
    "question": "Sinxronlashtirish usullarining asosiy vazifasi nima?",
    "answer": "Parallel jarayonlar orasidagi muloqotni ta'minlash",
    "noAnswer1": "Tizimni sozlash",
    "noAnswer2": "Ma'lumotlarni zaxiralash",
    "noAnswer3": "Tarmoq ulanishlarini boshqarish"
  },
  {
    "question": "Mutex usuli nima uchun ishlatiladi?",
    "answer": "Parallel dasturlarda ma'lumotlarni xavfsiz saqlash uchun",
    "noAnswer1": "Tarmoqlarni ulash uchun",
    "noAnswer2": "Grafik interfeyslarni yaratish uchun",
    "noAnswer3": "Kodni kompyuterga yuklash uchun"
  },
  {
    "question": "Quyidagilardan qaysi biri sinxronlashtirish uchun ishlatiladi?",
    "answer": "Semaphore",
    "noAnswer1": "Loop unrolling",
    "noAnswer2": "Garbage collection",
    "noAnswer3": "Data binding"
  },
  {
    "question": "Semaphore nima?",
    "answer": "Parallel jarayonlar orasida muloqotni boshqaruvchi dasturiy element",
    "noAnswer1": "Ma'lumotlarni siqish usuli",
    "noAnswer2": "Kompilyator xatosini aniqlash usuli",
    "noAnswer3": "Ma'lumotlarni filtrlash texnikasi"
  },
  {
    "question": "Parallel dasturlashda \"Deadlock\" muammosi nimada?",
    "answer": "Bir nechta jarayonlar bir vaqtning o'zida bir xil resursni kutib qolishi",
    "noAnswer1": "Ma'lumotlar oqimi ortishi",
    "noAnswer2": "Resurslarni noto'g'ri bo'lish",
    "noAnswer3": "Tarmoq uzilishlari"
  },
  {
    "question": "Deadlockni oldini olish uchun qanday usul qo'llaniladi?",
    "answer": "Resurslarni band qilish tartibini belgilash",
    "noAnswer1": "Ma'lumotlar oqimini boshqarish",
    "noAnswer2": "Priority inversion",
    "noAnswer3": "Loop optimizatsiyasi"
  },
  {
    "question": "Parallel dasturlash qaysi texnologiyada keng qo'llaniladi?",
    "answer": "Grafik protsessorlar (GPU) dasturlashida",
    "noAnswer1": "Veb-brauzer yaratishda",
    "noAnswer2": "Elektron pochta tizimlarida",
    "noAnswer3": "Matn kiritish dasturlarida"
  },
  {
    "question": "Sinxronizatsiya usullaridan biri bo'lgan \"Condition Variables\" nimani boshqaradi?",
    "answer": "Jarayonlar o'rtasidagi signal va kutish holatini",
    "noAnswer1": "Tarmoqdagi ulanish tezligini",
    "noAnswer2": "Fayllarni siqish darajasini",
    "noAnswer3": "Dasturlarni kompilyatsiya qilish jarayonini"
  },
  {
    "question": "Parallel dasturlashda \"Race Condition\" deganda nima tushuniladi?",
    "answer": "Ikki yoki undan ko'p jarayonning bir vaqtning o'zida resursga kirishi natijasida noto'g'ri natija olinishi",
    "noAnswer1": "Protsessorlar sonining oshishi",
    "noAnswer2": "Jarayonlarning o'zaro mustaqil bajarilishi",
    "noAnswer3": "Ma'lumotlarni bir xil darajada joylashganligi"
  },
  {
    "question": "OpenMP texnologiyasi nima uchun ishlatiladi?",
    "answer": "Parallel hisoblashlarni osonlashtirish uchun",
    "noAnswer1": "Grafik interfeyslar yaratish uchun",
    "noAnswer2": "Web dasturlash uchun",
    "noAnswer3": "Xotira bo'shliqlarini boshqarish uchun"
  },
  {
    "question": "Parallel dasturlash qaysi sohalarda keng qo'llaniladi?",
    "answer": "Katta hajmdagi ma'lumotlar tahlilida",
    "noAnswer1": "Ijtimoiy tarmoq yaratishda",
    "noAnswer2": "Elektron tijorat platformalarida",
    "noAnswer3": "Faqat video ishlov berishda"
  },
  {
    "question": "Quyidagilardan qaysi biri sinxronlashtirish muammolarini hal qilish uchun ishlatiladi?",
    "answer": "Mutex va Semaphore",
    "noAnswer1": "Thread pool",
    "noAnswer2": "HTML kodlash",
    "noAnswer3": "Dasturiy interfeys"
  },
  {
    "question": "Parallel dasturlashdagi \"Load Balancing\" nima?",
    "answer": "Resurslarni bir xil taqsimlash orqali hisoblashni optimallashtirish",
    "noAnswer1": "Fayllarni tartiblashtirish texnikasi",
    "noAnswer2": "Xotira resurslarini taqsimlash jarayoni",
    "noAnswer3": "Kodni kompilyatsiya qilish jarayoni"
  },
  {
    "question": "Barrier sinxronlash vositasi qayerda qo'llaniladi?",
    "answer": "Parallel jarayonlarni muvofiqlashtirishda",
    "noAnswer1": "Tarmoq protokollarida",
    "noAnswer2": "Fayllarni siqishda",
    "noAnswer3": "GUI interfeys yaratishda"
  },
  {
    "question": "Parallel dasturlashda ishlatiladigan \"Thread-safe\" tushunchasi nimani anglatadi?",
    "answer": "Bir vaqtning o'zida bir nechta oqim ishlashi uchun xavfsizligini",
    "noAnswer1": "Ma'lumotlar to'liq himoyalanganligini",
    "noAnswer2": "Ma'lumotlarning maxfiyligini saqlanishini",
    "noAnswer3": "Tarmoqdan foydalanishni blokirovka qilish"
  },
  {
    "question": "\"Critical Section\" tushunchasi nimani anglatadi?",
    "answer": "Ma'lumotlarga bir vaqtning o'zida bir nechta jarayon kirishi mumkin bo'lmagan kod bo'lagi",
    "noAnswer1": "Parallel jarayonlarning bajarilmaydigan qismi",
    "noAnswer2": "Ma'lumotlarni saqlash uchun ishlatiladigan joy",
    "noAnswer3": "Tarmoqdan kelgan ma'lumotlarni filtrlash"
  },
  {
    "question": "OpenMP nima uchun ishlatiladi?",
    "answer": "Parallel dasturlashni soddalashtirish uchun",
    "noAnswer1": "Xotira siqishni amalga oshirish uchun",
    "noAnswer2": "Tarmoq konfiguratsiyasini boshqarish uchun",
    "noAnswer3": "Grafik interfeys yaratish uchun"
  },
  {
    "question": "OpenMP qanday dasturlash tillarini qo'llab-quvvatlaydi?",
    "answer": "C, C++, va Fortran",
    "noAnswer1": "Faqat Python va Java",
    "noAnswer2": "Faqat Ruby va PHP",
    "noAnswer3": "HTML va CSS"
  },
  {
    "question": "OpenMP dasturini ishlatish uchun qanday direktiva qo'llaniladi?",
    "answer": "pragma omp parallel",
    "noAnswer1": "include <omp.h>",
    "noAnswer2": "import openmp",
    "noAnswer3": "parallel include"
  },
  {
    "question": "OpenMP vositasi yordamida qaysi turdagi parallelizm amalga oshiriladi?",
    "answer": "Ma'lumotlar parallelizmi",
    "noAnswer1": "Tarmoqlar parallelizmi",
    "noAnswer2": "Vaqt parallelizmi",
    "noAnswer3": "Xotira parallelizmi"
  },
  {
    "question": "OpenMP yordamida \"for\" tsiklini parallel bajarish uchun qanday direktivadan foydalaniladi?",
    "answer": "pragma omp for",
    "noAnswer1": "parallel for loop",
    "noAnswer2": "for omp parallel",
    "noAnswer3": "include <omp_for>"
  },
  {
    "question": "OpenMP-da \"private\" kalit so'zi nimani anglatadi?",
    "answer": "Faqat bitta oqimga tegishli bo'lgan o'zgaruvchi",
    "noAnswer1": "Barcha oqimlar uchun umumiy bo'lgan ma'lumot",
    "noAnswer2": "Ma'lumotni tashqi resurslardan yashirish",
    "noAnswer3": "Tarmoq xavfsizligini ta'minlash"
  },
  {
    "question": "OpenMP-da \"reduction\" kalit so'zi qanday ishlaydi?",
    "answer": "Barcha oqimlarning natijalarini yig'adi",
    "noAnswer1": "Xotira hajmini kamaytiradi",
    "noAnswer2": "Oqimlarni ajratib qo'yadi",
    "noAnswer3": "Dastur kodini optimallashtiradi"
  },
  {
    "question": "OpenMP dasturlashda \"barrier\" nima uchun ishlatiladi?",
    "answer": "Barcha oqimlarni sinxronlashtirish uchun",
    "noAnswer1": "Ma'lumotlarni siqish uchun",
    "noAnswer2": "Resurslarni birlashtirish uchun",
    "noAnswer3": "Kodni kompilyatsiya qilish uchun"
  },
  {
    "question": "OpenMP qanday qurilmalar bilan ishlaydi?",
    "answer": "CPU va GPU bilan birgalikda",
    "noAnswer1": "Faqat ma'lumotlar bazasi serverlari bilan",
    "noAnswer2": "Faqat grafik protsessor (GPU) bilan",
    "noAnswer3": "Faqat markaziy protsessor (CPU) bilan"
  },
  {
    "question": "OpenMP dasturida oqimlarni hosil qilish uchun qaysi direktivadan foydalaniladi?",
    "answer": "pragma omp task",
    "noAnswer1": "pragma omp thread",
    "noAnswer2": "omp parallel threads",
    "noAnswer3": "create omp task"
  },
  {
    "question": "OpenMP-da \"schedule\" parametri nima uchun ishlatiladi?",
    "answer": "Tsikl iteratsiyalarini oqimlar orasida taqsimlash uchun",
    "noAnswer1": "Vazifalarni vaqt bo'yicha rejalashtirish uchun",
    "noAnswer2": "Kodni tuzish vaqtini boshqarish uchun",
    "noAnswer3": "Xotira tarmoqlarini yaratish uchun"
  },
  {
    "question": "OpenMP qaysi turdagi parallel dasturlar uchun eng mos keladi?",
    "answer": "Massiv va matritsalar bilan ishlovchi hisoblash dasturlari uchun",
    "noAnswer1": "Tarmoq protokollarini boshqarish uchun",
    "noAnswer2": "Grafik interfeyslar yaratish uchun",
    "noAnswer3": "Veb dasturlash uchun"
  },
  {
    "question": "OpenMP-ning asosiy afzalligi nima?",
    "answer": "Parallel dasturlarni soddalashtirilgan yozilish imkoniyati",
    "noAnswer1": "Kodni avtomatik kompilyatsiya qilish",
    "noAnswer2": "Xotira hajmini oshirish",
    "noAnswer3": "Tarmoq tezligini oshirish"
  },
  {
    "question": "OpenMP dasturida qanday qilib umumiy o'zgaruvchini e'lon qilish mumkin?",
    "answer": "pragma omp shared",
    "noAnswer1": "pragma omp private",
    "noAnswer2": "pragma omp parallel shared",
    "noAnswer3": "shared declare omp"
  },
  {
    "question": "OpenMP qanday platformalarda ishlaydi?",
    "answer": "Windows, Linux va MacOS",
    "noAnswer1": "Faqat iOS",
    "noAnswer2": "Faqat Linux",
    "noAnswer3": "Faqat Windows"
  },
  {
    "question": "OpenMP-ning \"atomic\" kalit so'zi nima uchun ishlatiladi?",
    "answer": "Sinxronizatsiyalangan o'zgarishlarni ta'minlash uchun",
    "noAnswer1": "Kodni avtomatik tuzish uchun",
    "noAnswer2": "Tsiklni tezlashtirish uchun",
    "noAnswer3": "Fayllarni shifrlash uchun"
  },
  {
    "question": "OpenMP-ning \"master\" direktivasi qaysi maqsadda ishlatiladi?",
    "answer": "Faqat master oqimda bajariladigan kodni belgilash uchun",
    "noAnswer1": "Oqimlarni hosil qilish uchun",
    "noAnswer2": "Xotira resurslarini boshqarish uchun",
    "noAnswer3": "Parallel bo'lmagan qismlarni aniqlash uchun"
  },
  {
    "question": "OpenMP yordamida qanday qilib barcha oqimlarni to'xtatish mumkin?",
    "answer": "pragma omp barrier",
    "noAnswer1": "pragma omp stop",
    "noAnswer2": "stop all threads",
    "noAnswer3": "thread exit omp"
  },
  {
    "question": "OpenMP-da \"nowait\" direktivasi nima qiladi?",
    "answer": "Oqimlarni kutmasdan keyingi kodni bajaradi",
    "noAnswer1": "Oqimlarni to'xtatadi",
    "noAnswer2": "Xotirani bo'shatadi",
    "noAnswer3": "Ma'lumotlarni shifrlaydi"
  },
  {
    "question": "OpenMP yordamida ma'lumotlarni parallel o'qish qachon samarali bo'ladi?",
    "answer": "Ma'lumotlar hajmi katta va resurslar ko'p bo'lganda",
    "noAnswer1": "Ma'lumotlar hajmi kichik bo'lganda",
    "noAnswer2": "Faqat bir protsessor bo'lganda",
    "noAnswer3": "Ma'lumotlar statik bo'lganda"
  },
  {
    "question": "MPI nima uchun ishlatiladi?",
    "answer": "Parallel dasturlashda xabar almashish uchun",
    "noAnswer1": "Ma'lumotlarni shifrlash uchun",
    "noAnswer2": "Tarmoqlarni boshqarish uchun",
    "noAnswer3": "Grafik interfeys yaratish uchun"
  },
  {
    "question": "MPI ning asosiy vazifasi nima?",
    "answer": "Oqimlarni sinxronlashtirish va xabar almashish",
    "noAnswer1": "Fayllarni uzatish",
    "noAnswer2": "Tarmoqni sozlash",
    "noAnswer3": "Veb-sahifalar yaratish"
  },
  {
    "question": "MPI qanday turdagi dasturlash modellari uchun ishlatiladi?",
    "answer": "Xabar asoslangan parallel dasturlash",
    "noAnswer1": "Funksional dasturlash",
    "noAnswer2": "Ma'lumotlar parallelizmi",
    "noAnswer3": "GPU dasturlash"
  },
  {
    "question": "MPI dasturlash tili qaysilardan foydalanadi?",
    "answer": "C, C++, va Fortran",
    "noAnswer1": "HTML va CSS",
    "noAnswer2": "Java va Python",
    "noAnswer3": "Faqat PHP"
  },
  {
    "question": "MPI dasturida \"rank\" nimani anglatadi?",
    "answer": "Har bir jarayonning noyob identifikatori",
    "noAnswer1": "Ma'lumotlar hajmi",
    "noAnswer2": "Protsessorlar soni",
    "noAnswer3": "Dastur xatosi kodi"
  },
  {
    "question": "MPI-da qanday funksiyadan barcha jarayonlarni boshlash uchun foydalaniladi?",
    "answer": "MPI_Init",
    "noAnswer1": "MPI_Start",
    "noAnswer2": "MPI_Run",
    "noAnswer3": "MPI_Begin"
  },
  {
    "question": "MPI dasturini to'xtatish uchun qaysi funksiyadan foydalaniladi?",
    "answer": "MPI_Finalize",
    "noAnswer1": "MPI_Exit",
    "noAnswer2": "MPI_Stop",
    "noAnswer3": "MPI_End"
  },
  {
    "question": "MPI da ma'lumotlarni uzatish uchun qaysi funksiyadan foydalaniladi?",
    "answer": "MPI_Send",
    "noAnswer1": "MPI_Transfer",
    "noAnswer2": "MPI_Transmit",
    "noAnswer3": "MPI_Share"
  },
  {
    "question": "MPI da qabul qilish operatsiyasi qaysi funksiyadan foydalanadi?",
    "answer": "MPI_Receive",
    "noAnswer1": "MPI_Accept",
    "noAnswer2": "MPI_Get",
    "noAnswer3": "MPI_Collect"
  },
  {
    "question": "MPI dasturida barcha jarayonlar uchun ma'lumotlarni tarqatish qaysi funksiyadan amalga oshiriladi?",
    "answer": "MPI_Broadcast",
    "noAnswer1": "MPI_Spread",
    "noAnswer2": "MPI_Distribute",
    "noAnswer3": "MPI_Scatter"
  },
  {
    "question": "MPI ning \"point-to-point\" xabar almashish modeli qanday ishlaydi?",
    "answer": "Bir jarayondan boshqa bir jarayonga xabar uzatiladi",
    "noAnswer1": "Xabar barcha jarayonlarga uzatiladi",
    "noAnswer2": "Jarayonlar xabar almashmaydi",
    "noAnswer3": "Ma'lumotlar fayl orqali uzatiladi"
  },
  {
    "question": "MPI ning \"collective communication\" funksiyalari nimaga xizmat qiladi?",
    "answer": "Barcha jarayonlar o'rtasida ma'lumot almashish uchun",
    "noAnswer1": "Faqat bitta jarayonga ma'lumot uzatish uchun",
    "noAnswer2": "Tarmoqni boshqarish uchun",
    "noAnswer3": "Fayllarni yaratish uchun"
  },
  {
    "question": "MPI da \"blocking communication\" qachon ishlatiladi?",
    "answer": "Xabar yuborish yoki olish tugaguniga qadar kutadi",
    "noAnswer1": "Xabar yuborilganidan so'ng darhol davom etadi",
    "noAnswer2": "Xabarni avtomatik ravishda qaytaradi",
    "noAnswer3": "Jarayonlarni o'chirish uchun"
  },
  {
    "question": "MPI ning \"non-blocking communication\" funksiyasi qanday afzallikka ega?",
    "answer": "Jarayonlar bir-birini kutmaydi",
    "noAnswer1": "Xotira hajmini kamaytiradi",
    "noAnswer2": "Kodni avtomatik ravishda optimallashtiradi",
    "noAnswer3": "Tarmoqni tezlashtiradi"
  },
  {
    "question": "MPI da qaysi funksiya yordamida bir nechta jarayon natijalari yig'iladi?",
    "answer": "MPI_Reduce",
    "noAnswer1": "MPI_Collect",
    "noAnswer2": "MPI_Gather",
    "noAnswer3": "MPI_Aggregate"
  },
  {
    "question": "MPI da \"Scatter\" funksiyasi qanday ishlaydi?",
    "answer": "Har bir jarayonga ma'lumotning bir qismini tarqatadi",
    "noAnswer1": "Barcha jarayonlarga to'liq ma'lumot uzatadi",
    "noAnswer2": "Ma'lumotni tarmoqdan o'chiradi",
    "noAnswer3": "Ma'lumotlarni birlashtiradi"
  },
  {
    "question": "MPI dasturida \"barrier\" funksiyasi nimaga xizmat qiladi?",
    "answer": "Barcha jarayonlarni sinxronlashtirish uchun",
    "noAnswer1": "Ma'lumotlarni shifrlash uchun",
    "noAnswer2": "Tarmoqni boshqarish uchun",
    "noAnswer3": "Fayllarni saqlash uchun"
  },
  {
    "question": "MPI da \"rank 0\" nima?",
    "answer": "Asosiy jarayon yoki master jarayon",
    "noAnswer1": "Xato yuzaga kelgan jarayon",
    "noAnswer2": "Hech qanday vazifasi bo'lmagan jarayon",
    "noAnswer3": "Tarmoqdagi oxirgi jarayon"
  },
  {
    "question": "MPI qanday tarmoq topologiyalarini qo'llab-quvvatlaydi?",
    "answer": "Halqa, to'r va daraxt topologiyalari",
    "noAnswer1": "Faqat \"yulduzcha\" topologiya",
    "noAnswer2": "Faqat \"to'g'ridan-to'g'ri\" topologiya",
    "noAnswer3": "Faqat \"klaster\" topologiya"
  },
  {
    "question": "MPI dasturlash qanday sohalarda keng qo'llaniladi?",
    "answer": "Parallel hisoblash, ilmiy va muhandislik simulyatsiyalari",
    "noAnswer1": "Ma'lumotlar bazasini boshqarish",
    "noAnswer2": "Grafik interfeys yaratish",
    "noAnswer3": "Veb dasturlash"
  },
  {
    "question": "Ko'pyadroli protsessor nima?",
    "answer": "Bir nechta protsessorlarning bitta chipda joylashgan versiyasi",
    "noAnswer1": "Faqat bitta protsessordan iborat",
    "noAnswer2": "Faqat bitta yadrosi bo'lgan protsessor",
    "noAnswer3": "Yalpi ko'paytirish arxitekturasi"
  },
  {
    "question": "Ko'pyadroli protsessorlarning asosiy afzalligi nima?",
    "answer": "Ular ko'p parallel vazifalarni bajarish imkonini beradi",
    "noAnswer1": "Ular ko'proq elektr quvvatini iste'mol qiladi",
    "noAnswer2": "Ular faqat bitta vazifani bajaradi",
    "noAnswer3": "Ular yuqori isitishni hosil qiladi"
  },
  {
    "question": "Ko'pyadroli protsessorlar qaysi texnologiyaga asoslanadi?",
    "answer": "Parallel hisoblash",
    "noAnswer1": "Ijtimoiy tarmoq texnologiyalari",
    "noAnswer2": "Hiperxotira",
    "noAnswer3": "Virtualizatsiya"
  },
  {
    "question": "Ko'pyadroli protsessorlar qaysi arxitektura modelida ishlaydi?",
    "answer": "MIMD (Multiple Instruction Multiple Data)",
    "noAnswer1": "SIMD (Single Instruction Multiple Data)",
    "noAnswer2": "SISD (Single Instruction Single Data)",
    "noAnswer3": "MISD (Multiple Instruction Single Data)"
  },
  {
    "question": "Ko'pyadroli protsessorlarda \"core\" nima?",
    "answer": "Protsessorning individual hisoblash birliklari",
    "noAnswer1": "Protsessorning doimiy xotira qismi",
    "noAnswer2": "Protsessorning alohida video kartasi",
    "noAnswer3": "Protsessorning tarmoq moduli"
  },
  {
    "question": "Ko'pyadroli protsessorlarning ishlashini samarali tarzda oshirish uchun nima kerak?",
    "answer": "Dastur kodlarini parallelizatsiya qilish",
    "noAnswer1": "Faqat bitta yadro ishlashi",
    "noAnswer2": "Har bir yadroga alohida batareyalarni qo'shish",
    "noAnswer3": "Yangi xotira turlarini ishlatish"
  },
  {
    "question": "Ko'pyadroli protsessorlarda \"simultaneous multithreading\" (SMT) texnologiyasi nima uchun ishlatiladi?",
    "answer": "Har bir yadroda bir nechta iplar yordamida parallel vazifalarni bajarish",
    "noAnswer1": "Faqat bitta ip orqali ishlash",
    "noAnswer2": "Xotira sig'imini oshirish",
    "noAnswer3": "Grafikalarni yaxshilash"
  },
  {
    "question": "Intel Hyper-Threading texnologiyasi qanday ishlaydi?",
    "answer": "Har bir yadroda ikkita ip ishlaydi",
    "noAnswer1": "Har bir yadro faqat bitta ip ishlaydi",
    "noAnswer2": "Har bir yadro alohida protsessorni ifodalaydi",
    "noAnswer3": "Yadro ishlamaydi"
  },
  {
    "question": "Ko'pyadroli protsessorlarda \"cache memory\"ning roli nima?",
    "answer": "Tez-tez ishlatiladigan ma'lumotlarni saqlash va tezkor o'qish",
    "noAnswer1": "Ijtimoiy tarmoqlarga ulanish",
    "noAnswer2": "Grafik ma'lumotlarni saqlash",
    "noAnswer3": "Xotiraga kirishni sekinlashtirish"
  },
  {
    "question": "Ko'pyadroli protsessorlarning \"on-chip\" arxitekturasi qanday afzalliklarga ega?",
    "answer": "Kesh va xotira o'rtasidagi aloqa tezlashadi",
    "noAnswer1": "Protsessor ishlamaydi",
    "noAnswer2": "Protsessorning energiya sarfi oshadi",
    "noAnswer3": "Xotira tezligi pasayadi"
  },
  {
    "question": "Ko'pyadroli protsessorlar uchun samarali dasturlashning eng muhim jihati nima?",
    "answer": "Dasturda ko'plab parallel vazifalarni bajarish",
    "noAnswer1": "Dastur faqat bitta yadroda ishlashi kerak",
    "noAnswer2": "Dasturda faqat bitta ip ishlashi kerak",
    "noAnswer3": "Dastur kodini faqat bir yadroga moslashtirish"
  },
  {
    "question": "Ko'pyadroli protsessorlarda \"inter-core communication\" qanday amalga oshiriladi?",
    "answer": "Kesh orqali ma'lumot almashish",
    "noAnswer1": "Xotira orqali",
    "noAnswer2": "Har bir yadro o'ziga mustaqil ishlaydi",
    "noAnswer3": "Tarmoqlar orqali"
  },
  {
    "question": "Ko'pyadroli protsessorlarning samarali ishlashini ta'minlash uchun qanday metodlar qo'llaniladi?",
    "answer": "Keshni optimallashtirish va sinxronlashtirish",
    "noAnswer1": "Xotira va CPU o'rtasida o'zaro aloqalarni kamaytirish",
    "noAnswer2": "Protsessorlarning haroratini oshirish",
    "noAnswer3": "Protsessorlarni tezda almashtirish"
  },
  {
    "question": "Ko'pyadroli protsessorlar uchun samarali parallel algoritmlar yaratish qanday afzalliklarni taqdim etadi?",
    "answer": "Vazifalarni bir nechta yadrolar orasida taqsimlash",
    "noAnswer1": "Ma'lumotlarni faqat bitta yadroga uzatish",
    "noAnswer2": "Protsessorlarning barcha yadrolari bo'sh qoladi",
    "noAnswer3": "Keshni to'ldirish va sekinlashtirish"
  },
  {
    "question": "Ko'pyadroli protsessorlar tarmoq serverlarida qanday foyda keltiradi?",
    "answer": "Tezroq ma'lumot uzatishni ta'minlaydi",
    "noAnswer1": "Xotira hajmini kamaytiradi",
    "noAnswer2": "Bitta protsessorni qo'llab-quvvatlash",
    "noAnswer3": "Faoliyatni faqat bitta yadroda amalga oshiradi"
  },
  {
    "question": "Ko'pyadroli protsessorlarda \"thermal throttling\" qanday ishlaydi?",
    "answer": "Protsessor haroratini o'lchab, ortiqcha issiqlikni kamaytirish",
    "noAnswer1": "Protsessorni yuqori haroratda ishlatish",
    "noAnswer2": "Protsessor haroratini oshirib, tezlikni oshirish",
    "noAnswer3": "Protsessorni avtomatik ravishda o'chirib qo'yish"
  },
  {
    "question": "AMD Ryzen protsessorlarida ko'pyadroli arxitekturaning afzalligi qanday?",
    "answer": "Bir nechta vazifalarni paralel tarzda bajarish",
    "noAnswer1": "Yagona yadroda ishlashga qaratilgan",
    "noAnswer2": "Tezda ishga tushirish va faqat bitta jarayonni bajarish",
    "noAnswer3": "Protsessorni juda ko'p energiya sarflash"
  },
  {
    "question": "Ko'pyadroli protsessorlar qaysi turdagi kompyuter tizimlarida ishlaydi?",
    "answer": "Serverlar, stansiyalar va ilmiy hisoblash tizimlarida",
    "noAnswer1": "Faqat yengil portativ tizimlar",
    "noAnswer2": "Faqat mobil telefonlarda",
    "noAnswer3": "Faqat grafik kartalarda"
  },
  {
    "question": "Ko'pyadroli protsessorlarning \"heterogeneous architecture\" nima?",
    "answer": "Turli turdagi protsessorlarni bir tizimda qo'llash",
    "noAnswer1": "Faqat bitta turdagi protsessorlardan foydalanish",
    "noAnswer2": "Bir xil protsessor turida ishlash",
    "noAnswer3": "Protsessorlarsiz tizimlar"
  },
  {
    "question": "Ko'pyadroli protsessorlar uchun samarali energiya boshqaruvi qanday amalga oshiriladi?",
    "answer": "Energiya sarfini minimallashtirish uchun yadro va xotira resurslarini optimallashtirish",
    "noAnswer1": "Protsessorlarni doimiy ishlashga majburlash",
    "noAnswer2": "Protsessorlarni o'chirish",
    "noAnswer3": "Haroratni doimiy ravishda yuqori darajada ushlab turish"
  },
  {
    "question": "Parallel xisoblashni modellashtirish nima?",
    "answer": "Bir nechta jarayonlarni bir vaqtning o'zida bajarishni simulyatsiya qilish",
    "noAnswer1": "Faqat bitta jarayonni bajarish",
    "noAnswer2": "Faqat matematika hisoblashlarini bajarish",
    "noAnswer3": "Ma'lumotlarni saqlash va uzatishni yaxshilash"
  },
  {
    "question": "Parallel xisoblash tizimini tahlil qilishda asosiy maqsad nima?",
    "answer": "Xisoblash vaqti va resurslardan samarali foydalanish",
    "noAnswer1": "Xotira sig'imini oshirish",
    "noAnswer2": "Yalpi energiya iste'molini kamaytirish",
    "noAnswer3": "Tarmoq tezligini oshirish"
  },
  {
    "question": "Parallel xisoblashni tahlil qilishda qanday asboblar ishlatiladi?",
    "answer": "Modellashtirish dasturlari va simulyatorlar",
    "noAnswer1": "Faqat xotira va CPU optimallashtirish",
    "noAnswer2": "Dasturlash tillari va algoritmlar",
    "noAnswer3": "Matematika funksiyalari"
  }
];
const clean = text => String(text)?.replace(/[^a-zA-Z0-9А-яЁё+\-*/]/g, "").replaceAll(" ", "").toLowerCase();

const generate = (data = [], isCheck = false) => {
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
                if (!isCheck) {
                  labelChecked?.classList?.add("checked");
                  labelChecked?.click();
                }
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
  if (isCheck) {
    document
      .querySelector(".box.box-default:nth-child(3) .box-header h3.box-title")
      .setAttribute("title", statusText);
  } else {
    document
      .querySelector('.box.box-default [data-target="#myModal"]')
      .setAttribute("title", statusText);
  }
};

window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === ";") {
    generate(data);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.altKey && event.key === ";") {
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

try {
  const boxTitle = document.querySelector(
    ".box.box-default:nth-child(3) .box-header h3.box-title"
  );

  boxTitle.style.cursor = "pointer";
  boxTitle.addEventListener("click", (e) => {
    e.stopPropagation();
    generate(data, true);
  });
} catch (error) {}