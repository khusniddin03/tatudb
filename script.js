const data = [
  {
    "question": "Dasturchi tomonidan ixtiyoriy kiritilgan mavjud tiplar asosida yaratilgan strukturalangan toifa nima deyiladi?",
    "answer": "Class.",
    "noAnswer1": "struct;",
    "noAnswer2": "void;",
    "noAnswer3": "char;"
  },
  {
    "question": "+\r\n\r\nDek so‘zi qanday manoni anglatadi?",
    "answer": "2 ta chetga ega",
    "noAnswer1": "2 ta chiqishga ega",
    "noAnswer2": "orqaga va oldinga qaytish",
    "noAnswer3": "oldinga yurish"
  },
  {
    "question": "+\r\n\r\nQaysi saralash algoritmlari faylda (tashqi xotirada) saralash uchun qo’llaniladi?",
    "answer": "tashqi",
    "noAnswer1": "merge",
    "noAnswer2": "piramida",
    "noAnswer3": "counting"
  },
  {
    "question": "+\r\n\r\nQaysi saralash algoritmlari massivda (ichki xotirada) saralash uchun qo’llaniladi?",
    "answer": "ichki",
    "noAnswer1": "merge",
    "noAnswer2": "piramida",
    "noAnswer3": "counting"
  },
  {
    "question": "+\r\n\r\nDinamik malumotlar tuzilmasi nechta xususiyatga ega?",
    "answer": "2 turga",
    "noAnswer1": "5 turga",
    "noAnswer2": "4 turga",
    "noAnswer3": "7 turga"
  },
  {
    "question": "+\r\n\r\nInsertion saralash algoritmining go’yasi qanday?",
    "answer": "massivdagi elementlarni huddi karta o’yinidek, birma-bir o’z joyiga joylab chiqish",
    "noAnswer1": "massivdagi elementlarni kattasini chap tomonga kichigini o’ng tomonga tanlab saralash",
    "noAnswer2": "massivdagi elementlarni kattasini o’ng tomonga kichigini chap tomonga tanlab saralash",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\nEng ko‘p foydalaniladigan daraxtlar turi qaysi?",
    "answer": "binar",
    "noAnswer1": "heap",
    "noAnswer2": "ko’p o’lchamli",
    "noAnswer3": "muvozanatlangan"
  },
  {
    "question": "+\r\n\r\nSaralash algoritmlarining qay biri tez yoki sekin ishlashini, qaysi sayt orqali simulatsiyasini ko’rsak bo’ladi?",
    "answer": "toptal.com",
    "noAnswer1": "visualgo.net",
    "noAnswer2": "simulatorsort.net",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\nEXM xotirasida daraxtni ifodalashning eng qulay usuli",
    "answer": "Uni bog`langan ro`yxatlar ko`rinishida tasvirlash",
    "noAnswer1": "Uni bog`lanmagan ro`yxatlar ko`rinishida tasvirlash",
    "noAnswer2": "Uni ro`yxatlar ko`rinishida tasvirlash",
    "noAnswer3": "Uni bog`lamli ro`yxatlar ko`rinishida tasvirlash"
  },
  {
    "question": "+\r\n\r\nLong double tipi xotiradan qancha joy egallaydi?",
    "answer": "8 bayt",
    "noAnswer1": "12 bayt",
    "noAnswer2": "14 bayt",
    "noAnswer3": "Kompyuter konfiguratsiyasiga qarab"
  },
  {
    "question": "+\r\n\r\nFayl nima?",
    "answer": "Malumotlarni saqlash uchun tashqi xotiraning nomlangan qismi",
    "noAnswer1": "Baytlar yig`indisi;",
    "noAnswer2": "Dasturda ishlashni osonlashtirish uchun kerakli funksiya",
    "noAnswer3": "Malumotlarning tartiblangan, ketma-ketlikdagi yig'indisi"
  },
  {
    "question": "+\r\n\r\nFIFO - ..",
    "answer": "First In - First Out",
    "noAnswer1": "First Income -First Output",
    "noAnswer2": "First Insert – First Output",
    "noAnswer3": "First Inter – First Output"
  },
  {
    "question": "+\r\n\r\nFIFO navbat ko’rinishining ma’nosi nima?",
    "answer": "Birinchi kelgan birinchi ketadi,",
    "noAnswer1": "Ohirgi kelgan birinchi ketadi;",
    "noAnswer2": "Birinchi kelgan ohiri ketadi;",
    "noAnswer3": "Ohiri kelgan oxiri ketadi."
  },
  {
    "question": "+\r\n\r\nFunksiya deb nimaga aytiladi?",
    "answer": "Dasturning istalgan qismidan murojat qilib, bir necha bor ishlatish mumkin bo’lgan operatorlar guruhi",
    "noAnswer1": "O’zining qiymati sifatida xotira adresini o’zlashtiruvchi va unga xizmat ko’rsatuvchi xususiyat",
    "noAnswer2": "o’zidan hech qanday qiymat qaytarmaydigan va kelgan qiymatlarni tartiblash orqali qayta ishlaydigan operatorlar guruhi",
    "noAnswer3": "Shartsiz qabul qilinadigan operatorga"
  },
  {
    "question": "+\r\n\r\nFunksiya tanasida  olingan  o’zgaruvchilar  qachongacha  amal  qiladi?",
    "answer": "berilgan nuqtadan  blokkacha",
    "noAnswer1": "berilgan  nuqtadan  dastur  oxirgacha",
    "noAnswer2": "berilgan  nuqtadan  biz  xohlagan  joygacha",
    "noAnswer3": "faqat  blok tashqarisida"
  },
  {
    "question": "+\r\n\r\nFunksiyalar qiymat qaytarishiga  qarab  necha  turli  bo’ladi?",
    "answer": "2",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "turi yoq"
  },
  {
    "question": "+\r\n\r\nGlobal o’zgaruvchilar deb nimaga aytiladi?",
    "answer": "ham asosiy programmada, ham funksiyada ishlatish mumkin bo’lgan o’zgaruvchi",
    "noAnswer1": "faqat funksiyada ishlatilishi mumkin bo’lgan o’zgaruvchilar",
    "noAnswer2": "asosiy funksiyadan chaqiriluvchi funksiyaga",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan parametrlarni qabul qilib qayta  ishlovchi funksiyalar"
  },
  {
    "question": "+\r\n\r\nGraf turlari qaysilar?",
    "answer": "Orgraf, gipergraf, graf",
    "noAnswer1": "Chiziqli graf, orgraf",
    "noAnswer2": "Gipergraf, Chiziqsiz graf, toifalangan graf",
    "noAnswer3": "Chiziqli va chiziqsiz"
  },
  {
    "question": "+\r\n\r\nHam asosiy dasturda ham funksiyada ishlashi mumkin bo’lgan o’zgaruvchilar bu …?",
    "answer": "global o’zgaruvchilar",
    "noAnswer1": "parametirsiz o’zgaruvchilar",
    "noAnswer2": "laokal o’zgaruvchilar",
    "noAnswer3": "parametirsiz va lokal o'zgaruvchilar"
  },
  {
    "question": "+\r\n\r\nHaqiqiy tipga nisbatan unar amallar ishlatilsa natija qanday sonlar chiqadi?",
    "answer": "Haqiqiy",
    "noAnswer1": "Butun",
    "noAnswer2": "Mantiqiy",
    "noAnswer3": "Satrli"
  },
  {
    "question": "+\r\n\r\nHar xil obyektlarni ifodalovchi baytlar ketma ketligi bu …?",
    "answer": "binar fayl",
    "noAnswer1": "binar va rekursiv",
    "noAnswer2": "rekursiv funksiya",
    "noAnswer3": "mantiqiy fayl"
  },
  {
    "question": "+\r\n\r\nIchki saralash nima?",
    "answer": "operativ hotiradagi saralash.",
    "noAnswer1": "tashqi hotiradagi saralash;",
    "noAnswer2": "ichki ma’lumotlarni turlicha saralash;",
    "noAnswer3": "tashqi ma’lumotlarni turlicha saralash;"
  },
  {
    "question": "+\r\n\r\nIkki o’lchovli massivda indekslar soni nechta bo’ladi?",
    "answer": "2 ta",
    "noAnswer1": "6 ta",
    "noAnswer2": "3 ta",
    "noAnswer3": "4 ta"
  },
  {
    "question": "+\r\n\r\nisEmpty() ni vazifasi?",
    "answer": "navbatni bo‘shligini tekshirish",
    "noAnswer1": "navbatni bo’sh holga keltirish",
    "noAnswer2": "navbatni ochirish",
    "noAnswer3": "navbatga qoshish"
  },
  {
    "question": "+\r\n\r\nKalitni berilgan argument bilan mosligini aniqlovchi algoritmga berilgan argument bo’yicha … deb ataladi. Nuqtalar o’rniga kerakli so’zni qo’ying.",
    "answer": "qidiruv",
    "noAnswer1": "tartib",
    "noAnswer2": "saralash",
    "noAnswer3": "kalitni tanlash"
  },
  {
    "question": "+\r\n\r\nKvadrat massiv deb qanday massivlarga aytiladi?",
    "answer": "ustunlar va satrlar soni teng bo’lgan massivga.",
    "noAnswer1": "faqat bir xil elementdan tashkil topgan massivga;",
    "noAnswer2": "ustunlar soni satrlar sonidan ko’p bo’lgan massivga;",
    "noAnswer3": "satrlar soni ustunlar sonidan ko’p bo’lgan massivga;"
  },
  {
    "question": "+\r\n\r\nLokal o’zgaruvchilar dep nimaga aytiladi?",
    "answer": "faqat funksiyada ishlatilishi mumkin bo’lgan o’zgaruvchilar",
    "noAnswer1": "ham asosiy programmada, ham funksiyada ishlatish mumkin bo’lgan o’zgaruvchi",
    "noAnswer2": "Asosiy funksiyadan chaqiriluvchi funksiyaga",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan parametrlarni qabul qilib qayta ishlovchi funksiyalar"
  },
  {
    "question": "+\r\n\r\nMa`lumotlar tuzilmasini …. tasvirlash - bunda qaralayotgan ma`lumotlar tuzilmasi kompyuter xotirasida, aniqrog`I operativ xotirada qanday joylashishi tushuniladi.",
    "answer": "Fizik",
    "noAnswer1": "Matematik",
    "noAnswer2": "Konisturiktiv",
    "noAnswer3": "Matematik va konisturiktiv"
  },
  {
    "question": "+\r\n\r\nMa‘lumotlar tuzilmasini …. tasvirlash - bu tuzilmani biror bir dasturlash tilida ifodalashdir.",
    "answer": "Mantiqiy",
    "noAnswer1": "An`anaviy",
    "noAnswer2": "Modulli",
    "noAnswer3": "Maqsadli"
  },
  {
    "question": "+\r\n\r\nMa’lumotlar tuzilmasi va algoritmi fanida saralashning necha turi mavjud?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "+\r\n\r\nMa'lumotlar tuzilmasi fanida daraxt so`zi ko`pincha qanday nomlanadi?",
    "answer": "Tree",
    "noAnswer1": "Heap",
    "noAnswer2": "Heap tree",
    "noAnswer3": "Binar daraxt"
  },
  {
    "question": "+\r\n\r\nMalumotlar tuzilmasining asosiy ko’rinishi necha turga bo’linadi?",
    "answer": "6",
    "noAnswer1": "8",
    "noAnswer2": "10",
    "noAnswer3": "12"
  },
  {
    "question": "+\r\n\r\nAgar saralanayotgan yozuvlar xotirada katta xajmni egallasa, u holda ularni almashtirishlar ko’p vaqt va katta hajmdagi xotira sarfini talab qiladi. Ushbu sarfni kamaytirish maqsadida, saralash kalitlar adresi jadvalida amalga oshiriladi. Bunda faqatgina ma’lumot ko’rsatkichlari almashtirilib, elementlar o’z joyida qoladi. Bu usul qanday usul deyiladi?",
    "answer": "adreslar jadvalini saralash",
    "noAnswer1": "xotiradan unomli foydalanish",
    "noAnswer2": "vaqt va xotirali saralash",
    "noAnswer3": "vaqt va xotiradan unumli foydalanish"
  },
  {
    "question": "+\r\n\r\nMantiqiy operatsiyalar toifasidagi o’zgaruvchining qabul qiladigan qiymat oralig’i qanday?",
    "answer": "true, false",
    "noAnswer1": "0 va 1",
    "noAnswer2": "or va not",
    "noAnswer3": "barcha javoblar xato"
  },
  {
    "question": "+\r\n\r\nMassiv elementlari indeksi nechchidan boshlanadi?",
    "answer": "0",
    "noAnswer1": "1",
    "noAnswer2": "2",
    "noAnswer3": "istalgan nomerdan"
  },
  {
    "question": "+\r\n\r\n... — belgilangan miqdordagi elementlarni oʻz ichiga oladigan konteyner va ushbu elementlar bir xil turdagi boʻlishi kerak.",
    "answer": "Massiv",
    "noAnswer1": "Element",
    "noAnswer2": "Rekursiya",
    "noAnswer3": "Qiymat"
  },
  {
    "question": "+\r\n\r\nMassivda bo’luvchi element X tanlanadi. Elementlarni shunday joylashtiramizki, dastlab X dan kichik yoki teng bo’lgan elementlar joylashsin, keyin undan katta bo’lgan elementlar joylashsin. Keyin ularni alohida saralaymiz. Bu qaysi algoritm g’oyasi?",
    "answer": "Tezkor saralash",
    "noAnswer1": "Pufakcha metodi",
    "noAnswer2": "Hoar metodi",
    "noAnswer3": "Merge metodi"
  },
  {
    "question": "+\r\n\r\nMassivlarning qanday turlari mavjud?",
    "answer": "dinamik va static massivlar",
    "noAnswer1": "statik va chekli massivlar",
    "noAnswer2": "dinamik va bog’lamli massivlar",
    "noAnswer3": "konvaersativ va chekli massivlar"
  },
  {
    "question": "+\r\n\r\nMassivni necha xil ko’rinishi mavjud?",
    "answer": "2 xil",
    "noAnswer1": "3 xil",
    "noAnswer2": "4 xil",
    "noAnswer3": "turli xil"
  },
  {
    "question": "+\r\n\r\nMatritsa elementlari indekisi doimo qaysi raqamdan boshlanadi?",
    "answer": "0",
    "noAnswer1": "1",
    "noAnswer2": "2",
    "noAnswer3": "3"
  },
  {
    "question": "+\r\n\r\nm tartibli daraxt nima?",
    "answer": "Agar maksimal chiqish darajasi m bo`lsa",
    "noAnswer1": "Agar maksimal chiqish darajasi minimal bo`lsa",
    "noAnswer2": "Agar maksimal chiqish darajasi maximal bo`lsa",
    "noAnswer3": "Agar maksimal chiqish darajasi array(m) bo`lsa"
  },
  {
    "question": "+\r\n\r\nO`ziga murojaat qiluvchi funksiya?",
    "answer": "Rekursiv",
    "noAnswer1": "Elementar",
    "noAnswer2": "Return",
    "noAnswer3": "Xesh funksiya"
  },
  {
    "question": "+\r\n\r\nDaraxt yordamida saralashning yaxshilangan variant nima deb ataladi?",
    "answer": "piramidali saralash",
    "noAnswer1": "binary tree saralash",
    "noAnswer2": "heap tree saralash)",
    "noAnswer3": "perfect tree saralash"
  },
  {
    "question": "+\r\n\r\nPiramidali saralashni ixtirochisi kim?",
    "answer": "Dj. Uillyams",
    "noAnswer1": "Mark Tomphson",
    "noAnswer2": "T. Oliver",
    "noAnswer3": "F. Allen"
  },
  {
    "question": "+\r\n\r\n... - almashinish prinsipiga asoslangan mukammallashgan saralashning bir usuli.",
    "answer": "Tez saralash",
    "noAnswer1": "Pufakchali saralash",
    "noAnswer2": "Element chiqarish orqali saralash",
    "noAnswer3": "Selection saralash"
  },
  {
    "question": "+\r\n\r\nTez saralash algoritmining ixtirochisi kim?",
    "answer": "Toni Xoar",
    "noAnswer1": "Mark Tomphson",
    "noAnswer2": "T. Oliver",
    "noAnswer3": "Feldher Allen"
  },
  {
    "question": "+\r\n\r\nQanday fayllar binar fayllar deyiladi?",
    "answer": "Har xil obyektlarni ifodalovchi baytlar ketma –ketligi",
    "noAnswer1": "Bir xil obyektlarni ifodalovchi baytlar ketma –ketligi",
    "noAnswer2": "Faylning aynan bir joyga yo`naltirilgani",
    "noAnswer3": "Aynan bir malumot kiritish yoki chiqarish uchun mo`jallangan faylga"
  },
  {
    "question": "+\r\n\r\n… - bu dasturchilarga navbat, ro'yxat va stek kabi keng tarqalgan ma'lumotlar tuzilmalarini osonlikcha amalga oshirishga imkon beradigan sinf andozalari va algoritmlarning universal to'plamidir.",
    "answer": "Konteynerlar kutubxonasi",
    "noAnswer1": "Ma’lumot tuzilmalari",
    "noAnswer2": "Universal algoritmlar",
    "noAnswer3": "Bo’lib tashla va hukumronlik qil algoritmi"
  },
  {
    "question": "+\r\n\r\nQaysi toifa faqat butun sonlarni o’z ichiga oladi?",
    "answer": "int",
    "noAnswer1": "float",
    "noAnswer2": "double",
    "noAnswer3": "long"
  },
  {
    "question": "+\r\n\r\nRo’yxatning oxiridan kirish uchun qaysi ko’rsatkichdan foydalanmiz?",
    "answer": "Tail",
    "noAnswer1": "Main",
    "noAnswer2": "Last in",
    "noAnswer3": "LIFO"
  },
  {
    "question": "+\r\n\r\nQiymatlar parametri deb nimaga aytiladi?",
    "answer": "asosiy dasturdan funksiyaga uzatiladigan o’zgaruvchilar qiymatini qabul qilib oluvchi parametrlar",
    "noAnswer1": "asosiy funksiyadan chaqiriluvchi funksiya",
    "noAnswer2": "ham asosiy programmada, ham funksiyada ishlatish mumkin bo’lgan parameter",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan parametrlarni qabul qilib qayta ishlovchi va o’zida doimiy saqlovchi parametr"
  },
  {
    "question": "+\r\n\r\nBir bog’lamli ro’yhatlarda indeksni saqlovchi nechtaga ajratiladi?",
    "answer": "2",
    "noAnswer1": "1",
    "noAnswer2": "3",
    "noAnswer3": "istalgancha"
  },
  {
    "question": "+\r\n\r\nBir bog’lamli ro’yhatning xar bir indeksida nima saqlanadi?",
    "answer": "ma’lumot va o’zidan oldingi ma’lumot indeksi",
    "noAnswer1": "o’zidan olindingi va keying ma’lumotlar",
    "noAnswer2": "ro’yhatning massivlari soni",
    "noAnswer3": "ro’yhatning ketma-ketlik zanjiri"
  },
  {
    "question": "+\r\n\r\nTo’liq binar daraxt nima?",
    "answer": "chiqish darajasi 0 yoki 2 bo’lsa",
    "noAnswer1": "chiqish darajasi 1 yoki 2 bo’lsa",
    "noAnswer2": "chiqish darajasi 0 yoki 1 bo’lsa",
    "noAnswer3": "chiqish darajasi faqat 2 bo’lsa"
  },
  {
    "question": "+\r\n\r\nMa’lumotlarni tasvirlashning mantiqiy bosqichi deganda nimani tushunasiz?",
    "answer": "ma’lumotlar tuzilmasini biror  bir  dasturlash  tilida  ifodalanishi tushuniladi",
    "noAnswer1": "ushbu  bosqichda  EHM  xotirasi chekli bo`lganligi sababli, xotirani taqsimlash va uni boshqarish muammosi hal qilinadi",
    "noAnswer2": "ob’yekt, xodisa yoki biror bir jarayonni matematik model qurildi degani osha qaralayotgan tizimni ma’lum bir matematik qonuniyatlar orqali, ya’ni matematik formulalar orqali ifodalanishidir",
    "noAnswer3": "ma’lumotlarning abstrakt turlarini tavsiflash uchun o’zida o’zgaruvchilarning aniq to’plamini, mumkin bo’lgan ma’lumotlar turini mujassamlashtirgan ma’lumotlar tuzilmasidan foydalaniladi"
  },
  {
    "question": "+\r\n\r\nMa’lumotlarning abstrakt (mavhum) turlari nima?",
    "answer": "bu matematik model va shu model doirasida aniqlangan turli xil operatorlardir",
    "noAnswer1": "bu mavhum elementlarni jamlovchi ma'lumotlar tuzilmasi",
    "noAnswer2": "bu abstrakt elementlarni massivda e'lon qilish orqali algoritmda ifodalash nazariyasi",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "+\r\n\r\n... - bu biror bir ob’ekt, jarayon, hodisa yoki voqelikni ifodalab (tasniflab) beruvchi belgi yoki belgilar majmuasidir.",
    "answer": "ma'lumot",
    "noAnswer1": "algoritm",
    "noAnswer2": "dastur",
    "noAnswer3": "dastur kodi"
  },
  {
    "question": "+\r\n\r\nRekursiv algoritm nima?",
    "answer": "bu algoritmni aniqlashda o’ziga bevosita va bilvosita murojaat qilishdir",
    "noAnswer1": "bu algoritmni aniqlashda o’ziga bevosita murojaat qilishdir",
    "noAnswer2": "tadqiq qilinayotgan jarayonni aniqlash shu jarayonni o'rin almashtirish orqali amalga oshiriladi",
    "noAnswer3": "bu algaritim oziga qilingan murojarlarni ochiriadi"
  },
  {
    "question": "+\r\n\r\nRekursiya nima?",
    "answer": "tadqiq qilinayotgan jarayonni aniqlash mazkur jarayonga murojaat qilish orqali amalga oshiriladi",
    "noAnswer1": "tadqiq qilinayotgan jarayonni aniqlash mazkur jarayonga qaytish orqali amalga oshiriladi",
    "noAnswer2": "tadqiq qilinayotgan jarayonni aniqlash shu jarayonni takrorlash orqali amalga oshiriladi",
    "noAnswer3": "tadqiq qilinayotgan jarayonni aniqlash shu jarayonni o'rin almashtirish orqali amalga oshiriladi"
  },
  {
    "question": "+\r\n\r\nRo`yxat elementlari soni n ga teng. Ro`yxat uzunligi nechiga teng?",
    "answer": "n",
    "noAnswer1": "n-1",
    "noAnswer2": "n*2",
    "noAnswer3": "logn"
  },
  {
    "question": "+\r\n\r\nTuzilmada  elementlar  o‘zidan  keyingi  element  bilan  bog‘langan  bolsa qanday ro’yhat deyiladi",
    "answer": "bir bog’lamli",
    "noAnswer1": "ikki bog’lamli",
    "noAnswer2": "bog’lamli ro'yhat",
    "noAnswer3": "ketma-ketli bog’langan"
  },
  {
    "question": "+\r\n\r\nTo’tr nafar inson A dan B ga osma ko’prik orqali imkoni boricha tezroq o’tib olishi kerak. Ko’prik ko’pi bilan bir vaqtda 2 kishini ko’taradi xolos. Qorong’u bo’lgani uchun fonarsiz o’tib bo’lmaydi. Fonar faqat 1 ta. To’rt nafar insonnning ko’prikdan o’tish vaqti turlicha, ya’ni mos ravishda 1, 3, 6, 9 daqiqa. Ko’prikdan o’tib olish vaqtining optimal qiymatini toping.",
    "answer": "19",
    "noAnswer1": "17",
    "noAnswer2": "18",
    "noAnswer3": "20"
  },
  {
    "question": "+\r\n\r\nStack ustida amallar bajarishimizda PUSH nima vazifa bajaradi",
    "answer": "element qo’shish",
    "noAnswer1": "element sug’urib olish",
    "noAnswer2": "o’tadagi elementni ko’rish",
    "noAnswer3": "elementlar sonini hisoblash"
  },
  {
    "question": "+\r\n\r\nStack ustida amallar bajarishimizda POP nima vazifa bajaradi",
    "answer": "element sug’urib olish",
    "noAnswer1": "element qo’shish",
    "noAnswer2": "o’tadagi elementni ko’rish",
    "noAnswer3": "elementlar sonini hisoblash"
  },
  {
    "question": "+\r\n\r\nStack ustida amallar bajarishimizda isFull nima vazifa bajaradi",
    "answer": "to’plam to’la ekenligini tekshirish",
    "noAnswer1": "element qo’shish va element sug’urib olish",
    "noAnswer2": "o’tadagi elementni ko’rish",
    "noAnswer3": "elementlar sonini hisoblash"
  },
  {
    "question": "+\r\n\r\nStack asosida qaysi funksiya ishlaydi?",
    "answer": "Rekursiv funksiya",
    "noAnswer1": "Xesh funksiya",
    "noAnswer2": "Call stack funksiya",
    "noAnswer3": "Program stack funksiya"
  },
  {
    "question": "+\r\n\r\nCall Stack qaysi funksiya asosida ishlaydi?",
    "answer": "Rekursiv funksiya",
    "noAnswer1": "Xesh funksiya",
    "noAnswer2": "Conquer funksiya",
    "noAnswer3": "Program stack funksiya"
  },
  {
    "question": "+\r\n\r\n… – bu elementlarning tartiblangan to’plami bo’lib, bunda elementlarni qo’shish bir tomondan – tuzilma oxiridan (bu navbat oxiri deb ataladi), elementlarni o’chirish esa, tuzilmaning ikkinchi oxiri – navbat boshi deb ataluvchi tomonidan ruxsat beriladi.",
    "answer": "Navbat",
    "noAnswer1": "Dek",
    "noAnswer2": "Conquer funksiya",
    "noAnswer3": "Program stack"
  },
  {
    "question": "+\r\n\r\nUlardan qaysi biri additiv binar amal?",
    "answer": "(+) qo’shish",
    "noAnswer1": "(*) ko’paytirish",
    "noAnswer2": "(:) bo’lish",
    "noAnswer3": "(%) modul olish ya’ni qoldiqli bo’lish"
  },
  {
    "question": "+\r\n\r\nMa'lumotlar tuzilmasi va algoritmlar fanining vazifasi nima?",
    "answer": "talabalarni turli xil ma’lumotlar tuzilmalari bilan tanishtirish, yangi tuzilmalarni ishlab chiqish va o’quv jarayonlariga tadbiq etish usullari o’rgatishdan iboratdir",
    "noAnswer1": "turli dasturlash tizimlarida loyihalash usullari, ma’lumotlar tuzilmasini ishlab chiqish hamda algoritmlar bo’yicha nazariy va amaliy bilimlar berish",
    "noAnswer2": "Kurs talabalarni tuzilmalar ko’rinishida ma’lumotlarni gayta ishlash, optimal algoritimlar ishlab chiqish va dasturlash ko’nikmalarini takomillashtirishga yo’naltiradi",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "+\r\n\r\nMa’lumotlarni tasvirlash nechta ko`rinishdagi bosqichlarga ajratiladi?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "6"
  },
  {
    "question": "+\r\n\r\nBalanced search tree‘da Big O nimaga teng?",
    "answer": "logn",
    "noAnswer1": "n*logn",
    "noAnswer2": "n*edges",
    "noAnswer3": "n"
  },
  {
    "question": "+\r\n\r\n… - daraxtni balansda ushlab turish uchun node’larni chapga yoki o’ngga burish yoki ranglarni almashtirish amallarini bajarardi.",
    "answer": "Red-black tree",
    "noAnswer1": "AVL tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Perfect tree"
  },
  {
    "question": "+\r\n\r\nBinar daraxtning asosiy nechta turi mavjud?",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "2"
  },
  {
    "question": "+\r\n\r\n… - daraxtni balansda ushlab turish uchun node’larni chapga yoki o’ngga burish amallarini bajarardi.",
    "answer": "AVL tree",
    "noAnswer1": "Binary complate tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Perfect tree"
  },
  {
    "question": "+\r\n\r\nHar bir node 0 yoki 2 children node’ga ega bo’lgan binary tree nima deb ataladi?",
    "answer": "Full binary tree",
    "noAnswer1": "Binary complate tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Perfect binary tree"
  },
  {
    "question": "+\r\n\r\nAgar barcha internal node’larda ikkitadan child bo’lsa va barcha external childlar bir darajada bo’lsa qanday daraxt deb ataladi?",
    "answer": "Perfect binary tree",
    "noAnswer1": "Binary complate tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Fullt binary tree"
  },
  {
    "question": "+\r\n\r\nAgar har bir parent node’ning faqat bitta child node’i bo’lsa qanday daraxt deb ataladi?",
    "answer": "Degenerate binary tree",
    "noAnswer1": "Binary complate tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Fullt binary tree"
  },
  {
    "question": "+\r\n\r\nRed-black tree hususiyatlariqaysi javobda to’g’ri berilgan?",
    "answer": "Barcha javoblar to’g’ri",
    "noAnswer1": "Node’da ikki qizil bog’lanish bo’lishi mumkin emas, bu holda 4-node bo’lib qoladi va 2-3 tree’dagi kabi u uchta 2-node’ga ajratiladi",
    "noAnswer2": "root’dan leaf’gacha barcha yo’nalishlarda bir xil sonda qora bog’lanishlar (odatiy bog’lanishlar) bo’ladi – ya’ni mukammal qora balansga ega",
    "noAnswer3": "3-node’ning katta qiymati parent’ga o’tadi, shu sababli qizil bog’lanish node’ning faqat chap tarafida bo’ladi"
  },
  {
    "question": "+\r\n\r\nMa'lumotlar tuzilmasi va algoritmlar fanining maqsadi nima?",
    "answer": "turli dasturlash tizimlarida loyihalash usullari, ma’lumotlar tuzilmasini ishlab chiqish hamda algoritmlar bo’yicha nazariy va amaliy bilimlar berish",
    "noAnswer1": "talabalarni turli xil ma’lumotlar tuzilmalari bilan tanishtirish, yangi tuzilmalarni ishlab chiqish va o’quv jarayonlariga tadbiq etish usullari o’rgatishdan iboratdir",
    "noAnswer2": "Kurs talabalarni tuzilmalar ko’rinishida ma’lumotlarni gayta ishlash, optimal algoritimlar ishlab chiqish va dasturlash ko’nikmalarini takomillashtirishga yo’naltiradi",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "+\r\n\r\nAlgoritm samaradorligi nima bilan o'lchanadi?",
    "answer": "tezlik va xotira",
    "noAnswer1": "xatosiz va tez",
    "noAnswer2": "algoritmlar to'g'ri ishlatilganligiga",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "+\r\n\r\n… - muammoning qadam-baqadam yechimi.",
    "answer": "algoritm",
    "noAnswer1": "loyiha",
    "noAnswer2": "dastur",
    "noAnswer3": "dastur kodi"
  },
  {
    "question": "+\r\n\r\nDasturga to'g'ri tarif berilgan javobni tanlang.",
    "answer": "qo'yilgan muammoga yechim topish uchun kompyuterga qaysi amallarni qanday ketma-ketlikda bajarishni aytuvchi ko'rsatmalar to'plami",
    "noAnswer1": "aniq sondagi amallarni bajarish nazarda tutilib, ijrochiga joriy qadam tugatilishi bilan keyin bajariladigan qadam aniq ko’rsatilishi kerak",
    "noAnswer2": "berilgan ko’rsatmalar ijrochiga tushunarli bo’lishi va uning talablariga to’liq javob berishi kerak",
    "noAnswer3": "ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma"
  },
  {
    "question": "+\r\n\r\nUnda elementlarni kiritish va o'qish, elementlar uchidan amalga oshiriladi. U nima?",
    "answer": "Stek",
    "noAnswer1": "Dek",
    "noAnswer2": "Qator",
    "noAnswer3": "Navbat"
  },
  {
    "question": "+\r\n\r\nAlgoritmlarda natijaviylik nima?",
    "answer": "Har bir algoritm chekli sondagi qadamlardan so‘ng albatta natija berishi shart.",
    "noAnswer1": "aniq sondagi amallarni bajarish nazarda tutilib, ijrochiga joriy qadam tugatilishi bilan keyin bajariladigan qadam aniq ko’rsatilishi kerak",
    "noAnswer2": "berilgan ko’rsatmalar ijrochiga tushunarli bo’lishi va uning talablariga to’liq javob berishi kerak",
    "noAnswer3": "hal qilinayotgan jarayonni qadamma-qadam ko’rinish tasvirlanishi"
  },
  {
    "question": "+\r\n\r\nAlgoritmning qanday xossalari mavjud?",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "diskretlik va ommaviylik",
    "noAnswer2": "tushunarlilik va aniqlik",
    "noAnswer3": "natijaviylik, tushunarlilik va aniqlik"
  },
  {
    "question": "+\r\n\r\nAlgoritmlar nazariyasini o'rgangan olim D.E.Knut algoritmga qanday ta'rif bergan?",
    "answer": "Algoritm – bu aniq masalalar to’plamini yechish uchun amallar ketma-ketligini aniqlovchi tugallangan qoidalar majmuasi bo’lib, u 5 ta muhim xossalarga ega bo’ladi: tugallanganlik, aniqlik, kirish, chiqish, samaradorlik.",
    "noAnswer1": "Algoritm – bu ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma",
    "noAnswer2": "Algoritm – bu qat’iy belgilangan qoidalarga muvofiq amalga oshiriladigan muayyan sondagi qadamlardan keyin masalaning yechimiga olib keluvchi hisoblash tizimidir.",
    "noAnswer3": "Algoritm — bu bir turdagi masalalarni yechishga olib keladigan aniq operatsiya (amal)lar tizimini muayyan tartibda bajarish to’g’risidagi ko’rsatma"
  },
  {
    "question": "+\r\n\r\nAlgoritmlar nazariyasini o'rgangan olim A.Markov algoritmga qanday ta'rif bergan?",
    "answer": "Algoritm – bu ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma",
    "noAnswer1": "Algoritm – bu qat’iy belgilangan qoidalarga muvofiq amalga oshiriladigan muayyan sondagi qadamlardan keyin masalaning yechimiga olib keluvchi hisoblash tizimidir.",
    "noAnswer2": "Algoritm — bu bir turdagi masalalarni yechishga olib keladigan aniq operatsiya (amal)lar tizimini muayyan tartibda bajarish to’g’risidagi ko’rsatma",
    "noAnswer3": "Algoritm – bu aniq masalalar to’plamini yechish uchun amallar ketma-ketligini aniqlovchi tugallangan qoidalar majmuasi bo’lib, u 5 ta muhim xossalarga ega bo’ladi: tugallanganlik, aniqlik, kirish, chiqish, samaradorlik."
  },
  {
    "question": "+\r\n\r\nStek qanday prinsip boyicha ishlaydi",
    "answer": "oxirgi  kelgan  birinchi  ketadi",
    "noAnswer1": "oxirgi  kelgan  oxiri  ketadi",
    "noAnswer2": "birinchi  kelgan  birinchi  ketadi",
    "noAnswer3": "birinchi  ketgan  oxiri  keladi"
  },
  {
    "question": "+\r\n\r\n\"String a(\"\"yaxshi\"\");\r\nString b(\"\"kun\"\");\r\nString c=a+b;\r\nNatija ?\r\n\"",
    "answer": "\"yaxshikun\"",
    "noAnswer1": "\"yaxshi+kun\"",
    "noAnswer2": "\"a+b\"",
    "noAnswer3": "\"yaxshi kun\""
  },
  {
    "question": "+\r\n\r\nAlgoritmlar nazariyasini o'rgangan olim A.Kolmogorov algoritmga qanday ta'rif bergan?",
    "answer": "Algoritm – bu qat’iy belgilangan qoidalarga muvofiq amalga oshiriladigan muayyan sondagi qadamlardan keyin masalaning yechimiga olib keluvchi hisoblash tizimidir.",
    "noAnswer1": "Algoritm — bu bir turdagi masalalarni yechishga olib keladigan aniq operatsiya (amal)lar tizimini muayyan tartibda bajarish to’g’risidagi ko’rsatma",
    "noAnswer2": "Algoritm – bu ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "+\r\n\r\nM.M.Rozental tahriri ostida chop etilgan falsafa lug’atida algoritmga qanday ta'rif berilgan?",
    "answer": "Algoritm — bu bir turdagi masalalarni yechishga olib keladigan aniq operatsiya (amal)lar tizimini muayyan tartibda bajarish to’g’risidagi ko’rsatma",
    "noAnswer1": "Algoritm – bu qat’iy belgilangan qoidalarga muvofiq amalga oshiriladigan muayyan sondagi qadamlardan keyin masalaning yechimiga olib keluvchi hisoblash tizimidir.",
    "noAnswer2": "Algoritm – bu ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "+\r\n\r\n… - bu qo’yilgan masalani  yechilishiga olib keluvchi aniq harakatlarning chekli ketma-ketligidir.",
    "answer": "algoritm",
    "noAnswer1": "Rekursiv funksiya",
    "noAnswer2": "rekursiya",
    "noAnswer3": "parametirsiz va lokal o'zgaruvchilar"
  },
  {
    "question": "+\r\n\r\nswitch quyidagi tiplarning qaysi biri bilan ishlaydi?",
    "answer": "int",
    "noAnswer1": "float",
    "noAnswer2": "double",
    "noAnswer3": "while"
  },
  {
    "question": "+\r\n\r\nTanlash operatori nima dep nomlanadi?",
    "answer": "switch",
    "noAnswer1": "if",
    "noAnswer2": "for",
    "noAnswer3": "while"
  },
  {
    "question": "+\r\n\r\nTanlash operatorini birorta ham qiymatiga to’gri kelmagan holda qaysi operator qo’yiladi?",
    "answer": "default",
    "noAnswer1": "case",
    "noAnswer2": "else",
    "noAnswer3": "if"
  },
  {
    "question": "+\r\n\r\nTashqi saralash nima?",
    "answer": "tashqi hotiradagi saralash;",
    "noAnswer1": "operativ hotiradagi saralash;",
    "noAnswer2": "ichki ma’lumotlarni turlicha saralash;",
    "noAnswer3": "tashqi ma’lumotlarni turlicha saralash;"
  },
  {
    "question": "+\r\n\r\nTo`liq m-tartibli daraxt nima?",
    "answer": "Agar chiqish darajasi 0 yoki m bo’lsa",
    "noAnswer1": "chiqish darajasi 0 yoki 2 bo’lsa",
    "noAnswer2": "chiqish darajasi 0 yoki 1 bo’lsa",
    "noAnswer3": "chiqish darajasi 0 yoki n bo’lsa"
  },
  {
    "question": "+\r\n\r\n\"Uni ikkita bo’lakga ajratamiz.\r\nBo’laklarni alohida saralaymiz.\r\nSaralangan massivlarni birlashtiramiz.\r\nUshbu algoritm qaysi saralashniki?\r\n\"",
    "answer": "Bo’lib tashlab hukumronlik qil metodi",
    "noAnswer1": "Quick sort",
    "noAnswer2": "Qo'shib  hukumronlik qil metodi",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "+\r\n\r\nUshbu algoritmlar ishlab chiqarilayotganda, ko’proq, jadvaldagi kalitlarni taqqoslash soniga e’tibor qaratiladi. Qaysi algoritmlar haqida gap ketmoqda?",
    "answer": "Qidiruv algoritmlari",
    "noAnswer1": "Saralash algoritmlar",
    "noAnswer2": "Hisoblash algoritmlari",
    "noAnswer3": "Navbat algoritmlari"
  },
  {
    "question": "+\r\n\r\nXotiradan 8 bayt joy egallaydigan butun qiymatli o’zgaruvchini ko’rsating",
    "answer": "double a;",
    "noAnswer1": "long a;",
    "noAnswer2": "long long a;",
    "noAnswer3": "long double a;"
  },
  {
    "question": "+\r\n\r\nYarimstatik  ma‘lumotlar  tuzilmasiga nimalar kiradi",
    "answer": "stek, dek, navbat",
    "noAnswer1": "qator, dek, navbat",
    "noAnswer2": "stek, dek, ustun",
    "noAnswer3": "qator, dek, ustun"
  },
  {
    "question": "+\r\n\r\n… – node’lar o’rtasidagi bog’lanish bir tomonlama bo’ladi.",
    "answer": "yo’nalishli tomonlar",
    "noAnswer1": "stack",
    "noAnswer2": "navbat",
    "noAnswer3": "Butun tipli stack"
  },
  {
    "question": "+\r\n\r\n… – node’lar ikki taraflama bog’langan bo’ladi.",
    "answer": "yo’nalishsiz tomonlar",
    "noAnswer1": "stack",
    "noAnswer2": "dek",
    "noAnswer3": "navbat"
  },
  {
    "question": "+\r\n\r\n… – ikki va undan ko’p node’lar orasidagi yo’l.",
    "answer": "Path",
    "noAnswer1": "Degree",
    "noAnswer2": "Dek",
    "noAnswer3": "Binar"
  },
  {
    "question": "+\r\n\r\n… – node’ning boshqa node’larga bog’lanishlari soni.",
    "answer": "Degree",
    "noAnswer1": "Cycle",
    "noAnswer2": "Directed",
    "noAnswer3": "Vertex"
  },
  {
    "question": "+\r\n\r\n… - algoritmi oson klassik graph algoritmlaridan biri bo’lib, u rekursiya ichida graph’dagi barcha vertex’larni tekshirib chiqishga yordam beradi.",
    "answer": "Depth first search",
    "noAnswer1": "Trémaux maze exploration",
    "noAnswer2": "Traversal",
    "noAnswer3": "Breadth first search"
  },
  {
    "question": "+\r\n\r\nVaznli graf deb nimaga aytiladi?",
    "answer": "har bir yoyga mos ravishda qandaydir sonli qiymatlar – og’irlik qo’yilgan graflar",
    "noAnswer1": "ularda yo’naltrilgan, shuningdek yo’naltirilmagan bog’lovchi yoylar bo’lishi mumkin",
    "noAnswer2": "ikkila tomonga ham harakatlanish mumkin va uning og’irligi mavjud",
    "noAnswer3": "faqar ikkila tomonga ham harakatlanish mumkin va uning og’irligi manfiy yoki musbat"
  },
  {
    "question": "+\r\n\r\nAralash graf deb nimaga aytiladi?",
    "answer": "ularda yo’naltrilgan va yo’naltirilmagan bog’lovchi yoylar bo’lishi mumkin",
    "noAnswer1": "har bir yoyga mos ravishda qandaydir sonli qiymatlar – og’irlik qo’yilgan graflar",
    "noAnswer2": "ikkila tomonga ham harakatlanish mumkin va uning og’irligi mavjud",
    "noAnswer3": "faqar ikkila tomonga ham harakatlanish mumkin va uning og’irligi manfiy yoki musbat"
  },
  {
    "question": "+\r\n\r\nBir toifaga mansub elementlar to’plami nima dep nomlanadi?",
    "answer": "massiv",
    "noAnswer1": "enum",
    "noAnswer2": "matritsa",
    "noAnswer3": "korsatkich"
  },
  {
    "question": "+\r\n\r\n LIFO bu nimaning ta’rifi?",
    "answer": "Stek",
    "noAnswer1": "Navbat",
    "noAnswer2": "Dek",
    "noAnswer3": "Qator"
  },
  {
    "question": "+\r\n\r\n Massiv bu …",
    "answer": "Bir toifali chekli qiymatlarning tartiblangan to’plami.",
    "noAnswer1": "Bir toifali cheksiz qiymatlarning tartiblangan to’plami;",
    "noAnswer2": "Turli toifali cheksiz qiymatlarning tartiblangan to’plami;",
    "noAnswer3": "Turli toifali chekli qiymatlarning tartiblangan to’plami;"
  },
  {
    "question": "+\r\n\r\n Massivni initsalizatsiyalash to’g’ri ko’rsatilgan javobni toping?",
    "answer": "int a[3]={45,12,1}.",
    "noAnswer1": "int a[4]={12,3,4,43,2};",
    "noAnswer2": "int a[5]={“12,3,4”};",
    "noAnswer3": "float j[]={‘1,2,3,4,5.5,5.6’};"
  },
  {
    "question": "+\r\n\r\n Multiplikativ binar amallarni ko’rsating.",
    "answer": "(*), (/) , (%)",
    "noAnswer1": "(+), (-), (*), (/)",
    "noAnswer2": "(%), (!), (),",
    "noAnswer3": "(!), (), (=)"
  },
  {
    "question": "+\r\n\r\n pop() qanday vazifa bajaradi?",
    "answer": "stekdan elemantni o’chiradi",
    "noAnswer1": "stekka element qo’shadi",
    "noAnswer2": "stek elementini o’zgartiradi",
    "noAnswer3": "vazifa bajarmaydi"
  },
  {
    "question": "+\r\n\r\nMavjud saralash algoritmlarini qanday guruhga ajratish mumkin?",
    "answer": "ichki va tashqi saralash algoritmlari",
    "noAnswer1": "merge va selection saralash algoritmlari",
    "noAnswer2": "bubble va insertion saralash algoritmlari",
    "noAnswer3": "piramidali va quick saralash algoritmlari"
  },
  {
    "question": "+\r\n\r\nMassivlarda saralash usullarini nechta sinfga ajratish mumkin?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "6"
  },
  {
    "question": "+\r\n\r\nQanday tip matematikada matritsa yoki jadval tushunchasiga mos keladi",
    "answer": "Ikki o’lchovli massiv",
    "noAnswer1": "Double float",
    "noAnswer2": "Boolen",
    "noAnswer3": "Uch o’lchovli massiv"
  },
  {
    "question": "+\r\n\r\nMassivlarda saralash usullarini qanday sinflari mavjud?",
    "answer": "qo’yish orqali va tanlash asosida saralash",
    "noAnswer1": "tanlash va qo’yish asosida saralash",
    "noAnswer2": "tanlash va belgilash asosida saralash",
    "noAnswer3": "belgilash va qo’yish orqali saralash"
  },
  {
    "question": "+\r\n\r\nQuick sort qaysi metodga asoslanadi?",
    "answer": "Bo’lib tashla va hukumronlik qil metodiga",
    "noAnswer1": "Sheyker saralash usul metodiga",
    "noAnswer2": "Merge va tanlash metodiga",
    "noAnswer3": "Pufakcha metodiga"
  },
  {
    "question": "+\r\n\r\nStephen Hawking rekursiyaga qanday ta’rif bergan?",
    "answer": "Rekursiya nimaligini tushunish uchun oldin rekursiya nimagligini tushunish kerak",
    "noAnswer1": "rekursiya dasturlashning eng murakkab masalalarining asosi hisoblanadi, shuning uchun ham uni yaxshi tushunish va to’g’ri ishlata olish juda ham muhim",
    "noAnswer2": "Rekursiv funksiya qaysidir vaqtga kelib o’ziga murojaat qilishni to’xtatishi kerak bo’ladi.",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\nDouble Float tipi xotiradan qancha joy egallaydi?",
    "answer": "8 bayt",
    "noAnswer1": "12 bayt",
    "noAnswer2": "16 bayt",
    "noAnswer3": "Kompyuter konfiguratsiyasiga qarab"
  },
  {
    "question": "+\r\n\r\n ...- bu elementlari soni bir hil faqatgina teskari ketma- ketlikda yozilgan ikkita bir bog‘lamli ro‘yxatdir.",
    "answer": "Ikki bog‘lamli ro‘yxat",
    "noAnswer1": "Bir bog‘lamli ro‘yxat",
    "noAnswer2": "Navbat",
    "noAnswer3": "Dek"
  },
  {
    "question": "+\r\n\r\nBazaviy ma’lumotlar toifasiga nima kiradi?",
    "answer": "bo’sh va skalyar",
    "noAnswer1": "skalyar va tuzilmaviy",
    "noAnswer2": "butun sonli va xaqiqiy",
    "noAnswer3": "binar va tuzilmaviy"
  },
  {
    "question": "+\r\n\r\n“oxirgi kelgan - birinchi ketadi” bu nimaning ta’rifi?",
    "answer": "Stek",
    "noAnswer1": "Navbat",
    "noAnswer2": "Dek",
    "noAnswer3": "Qator"
  },
  {
    "question": "+\r\n\r\n… – ixtiyoriy uzunlikdagi kirish ma’lumotini chiqishda belgilangan uzunlikdagi xesh qiymatga aylantirib beruvchi bir tomonlama funksiyalarga aytiladi.",
    "answer": "Xesh funksiyalar",
    "noAnswer1": "Xesh rekursiya",
    "noAnswer2": "Xesh jadval",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\nYahshi xesh funksiya belgisi nima?",
    "answer": "bir xil matn uchun bir xil son qaytariladi",
    "noAnswer1": "bir xil matn uchun turli xil son qaytariladi",
    "noAnswer2": "turli xil matn uchun bir xil son qaytariladi",
    "noAnswer3": "bir xil matn uchun  turli xil shifr qaytariladi"
  },
  {
    "question": "+\r\n\r\n Float tipi xotiradan qancha joy egallaydi?",
    "answer": "4 bayt",
    "noAnswer1": "12 bayt",
    "noAnswer2": "8 bayt",
    "noAnswer3": "Kompyuter Konfiguratsiyasiga qarab"
  },
  {
    "question": "+\r\n\r\n Haqiqiy toifaga nisbatan binar amallar bajarilsa natija qanday tipga tegishli bo’ladi?",
    "answer": "Mantiqiy",
    "noAnswer1": "Haqiqiy",
    "noAnswer2": "Butun",
    "noAnswer3": "Satrli"
  },
  {
    "question": "+\r\n\r\n Ikki o’lchovli massiv nima dep nomlanadi?",
    "answer": "matritsa",
    "noAnswer1": "2 parametrli massiv",
    "noAnswer2": "enum",
    "noAnswer3": "switch"
  },
  {
    "question": "+\r\n\r\nQaysi javobda xesh funksiya turlari ko’rsatilgan?",
    "answer": "Barcha javoblar to’g’ri",
    "noAnswer1": "MD2, MD5, MD4, MD6",
    "noAnswer2": "SHA-1, SHA-2",
    "noAnswer3": "CubeHash, BMW"
  },
  {
    "question": "+\r\n\r\nSaralashdan asosiy maqsad nima?",
    "answer": "saralangan ma’lumotlarni qayta ishlash jarayonida zarur bo’ladigan elementni tez va oson qidirib topishni soddalashtirish",
    "noAnswer1": "Elementlarni kalit bo’yicha tartiblashda har bir keyingi elementning kaliti oldingisidan kichik bo’lsa kamayish tartibida, kalit maydon qiymati oldingisidan katta bo’lsa o’sish tartibida saralash",
    "noAnswer2": "saralash algoritmlarining asosiy xususiyati tezkor xotirada ishlashni minimallashtirish",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\nIstalgan tugunlari qo'shni bo'lgan graf xisoblanadi yani barcha tugunlar o'zaro birlashtirilgan bo'lsa bu..?",
    "answer": "to'liq graf (complete graph)",
    "noAnswer1": "yagona graf(only graph)",
    "noAnswer2": "yarim graf(half graph)",
    "noAnswer3": "graf(graph)"
  },
  {
    "question": "+\r\n\r\nMavjud saralash algoritmlarini nechta guruhga ajratish mumkin?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "+\r\n\r\n... – elementlarni ma‘lum bir tartibda joylashtirish amali",
    "answer": "Saralash",
    "noAnswer1": "ma‘lumotlarning sodda toifalari",
    "noAnswer2": "Qidirish",
    "noAnswer3": "Muvozanatlash"
  },
  {
    "question": "+\r\n\r\nindeks – bu ….",
    "answer": "massiv xadining joylashgan o’rnini anglatuvchi taktik qiymat",
    "noAnswer1": "massivlar qitymati xadining matematik qiymati",
    "noAnswer2": "o’zgaruvchiga  yozilgan tartib xadi",
    "noAnswer3": "chekli qiymatlarning tartiblangan to’plamidir"
  },
  {
    "question": "+\r\n\r\n…  – bu tur o‘zgaruvchilari ma‘lumotlarni ko‘rsatkichlari yoki manzillari (adres) to‘plamini namoyon qiladi.",
    "answer": "Ko‘rsatkichli tur",
    "noAnswer1": "Ifodaviy tur",
    "noAnswer2": "Belgisiz tur",
    "noAnswer3": "Algoritm"
  },
  {
    "question": "+\r\n\r\n… -  bu yozuvning chekli majmuasidir.",
    "answer": "Jadval",
    "noAnswer1": "Massiv",
    "noAnswer2": "Yozuv",
    "noAnswer3": "Belgi"
  },
  {
    "question": "+\r\n\r\n…  - bunda tizimga kelib tushgan oxirgi talabga birinchi bo‘lib xizmat ko‘rsatiladi va tizimdan chiqariladi.",
    "answer": "Stek",
    "noAnswer1": "Dek",
    "noAnswer2": "MEK",
    "noAnswer3": "Jadval"
  },
  {
    "question": "+\r\n\r\n… -  elementlari bir turga tegishli, ketma-ket joylashgan va umumiy nomga ega bo‘lgan tuzilmadir.",
    "answer": "Massiv",
    "noAnswer1": "To`plam",
    "noAnswer2": "Bo'lak",
    "noAnswer3": "Qism"
  },
  {
    "question": "+\r\n\r\n… -  ro‘yxat elementlari ko‘rsatkichlari maydoni yagona bo‘ladi",
    "answer": "Bir bog‘lamli ro‘yxat",
    "noAnswer1": "ko`p bog`lamli",
    "noAnswer2": "Ayana yo`nalgan",
    "noAnswer3": "Qattiq ro`yxat"
  },
  {
    "question": "+\r\n\r\n… -  tuzilmadan bironta elementni joylashgan o‘rnini aniqlash amali",
    "answer": "Qidirish",
    "noAnswer1": "Saralash",
    "noAnswer2": "Kiritish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "+\r\n\r\n… – bu bir turga tegishli bo‘lgan elementlar ketma-ketligidir.",
    "answer": "Ro`yxat",
    "noAnswer1": "Jadval",
    "noAnswer2": "Satr",
    "noAnswer3": "Yozuv"
  },
  {
    "question": "+\r\n\r\n… – bu butun sonlar to‘plamini qandaydir qism to‘plamini ifodalab, uning qiymatlar sohasi kompyuter konfigurasiyasiga bog‘liq ravishda o‘zgarib turadi",
    "answer": "Butun tur",
    "noAnswer1": "Maxfiy tur",
    "noAnswer2": "Ochiq tur",
    "noAnswer3": "Yopiq tur"
  },
  {
    "question": "+\r\n\r\n… – bu ikki chetga ega bo‘lgan navbatdir. Talabga xizmat ko‘rsatish tizimning har ikkala tomonidan amalga oshirilishi mumkin.",
    "answer": "Dek",
    "noAnswer1": "Stek",
    "noAnswer2": "Rep",
    "noAnswer3": "MEK"
  },
  {
    "question": "+\r\n\r\n… – bu yozuv identifikatori. Ushbu identifikatorni saqlash uchun maxsus maydon ajratiladi",
    "answer": "Kalit",
    "noAnswer1": "Matn",
    "noAnswer2": "Dinamika",
    "noAnswer3": "Jadval"
  },
  {
    "question": "+\r\n\r\n… – bunda ro‘yxatni tashkil etuvchi elementlar mavjud emas.",
    "answer": "Bo‘sh ro‘yxat",
    "noAnswer1": "Belgili ro`yxat",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "Chizili ro‘yxat , Belgili ro`yxat, Jadvalli ro`yxat"
  },
  {
    "question": "+\r\n\r\n… – bunda ro‘yxatni tashkil etuvchi elementlar orasidagi bog‘liqlik ko‘rsatkichlar orqali amalga oshiriladi.",
    "answer": "Bog‘langan ro‘yxat",
    "noAnswer1": "Belgili ro`yxat",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "Bog‘langan ro‘yxat , Belgili ro`yxat, Jadvalli ro`yxat"
  },
  {
    "question": "+\r\n\r\n…  ko‘rinishidagi ma‘lumotlar tuzilmasi- bu shunday tuzilmaki, uning elementlari orasida hech qanday munosabat o‘rnatilmagan.",
    "answer": "To`plam",
    "noAnswer1": "Mantiqiy",
    "noAnswer2": "Rost",
    "noAnswer3": "Yolg'on"
  },
  {
    "question": "+\r\n\r\n… - maydon deb ataluvchi chekli sondagi ma‘lumotlar tuzilmasidir. Turli maydon o‘zgaruvchilari turli turga tegishli bo‘lishi mumkin.",
    "answer": "Yozuv",
    "noAnswer1": "Massiv",
    "noAnswer2": "To'plam",
    "noAnswer3": "Jadval"
  },
  {
    "question": "+\r\n\r\n\"… - mazkur tur mantiqiy mulohazalarni to‘g‘ri yoki noto‘g‘riliginii aniqlash uchun ishlatilib, ushbu turdagi o‘zgaruvchi 2 ta qiymatdan faqatgina bittasini qabul qiladi: 0 (false) yoki 1 (true).\"",
    "answer": "Matiqiy tur",
    "noAnswer1": "Butun tur",
    "noAnswer2": "Soxta tur",
    "noAnswer3": "Ochiq tur"
  },
  {
    "question": "+\r\n\r\n… – mazkur tur o‘zgaruvchilari belgili qiymatlarni qabul qilishadi, masalan, harflar, raqamlar, matematik belgilar va boshqalar.",
    "answer": "Belgili tur",
    "noAnswer1": "Butun tur",
    "noAnswer2": "Qiymatsiz tur",
    "noAnswer3": "Qiymatli tur"
  },
  {
    "question": "+\r\n\r\nBir xil hisoblash jarayonini bir necha bor takrorlanishi nima deyiladi?",
    "answer": "sikl",
    "noAnswer1": "takrorlanish",
    "noAnswer2": "shart",
    "noAnswer3": "qiymat qaytarish;"
  },
  {
    "question": "+\r\n\r\nBir xil toifali, chekli qiymatlarning tartiblanganto’plamiga nima deb ataladi?",
    "answer": "Massiv",
    "noAnswer1": "Rekursiv funksiya",
    "noAnswer2": "register",
    "noAnswer3": "oqim"
  },
  {
    "question": "+\r\n\r\nBir yoki bir necha belgilar birlashmasi nima dep ataladi?",
    "answer": "satr",
    "noAnswer1": "soz",
    "noAnswer2": "gap",
    "noAnswer3": "belgilash birlashmasi"
  },
  {
    "question": "+\r\n\r\nBironta tugundan boshqa bir tugungacha bo'lgan yonma-yon joylashgan tugunlar ketma-ketligi nima?",
    "answer": "yo'l",
    "noAnswer1": "daraxt soni",
    "noAnswer2": "ildiz",
    "noAnswer3": "navbat"
  },
  {
    "question": "+\r\n\r\nBitta asosdan tarqalgan tuzilma qaysi tuzlimaga misol bo’ladi?",
    "answer": "daraxt",
    "noAnswer1": "ketma ket",
    "noAnswer2": "to’plam",
    "noAnswer3": "graf"
  },
  {
    "question": "+\r\n\r\nBoshi va oxiri tutashuvchi tugundan iborat yo'l nima hisoblanadi?",
    "answer": "Halqa",
    "noAnswer1": "Vertex Degree(tugun darajasi)",
    "noAnswer2": "root(ildiz)",
    "noAnswer3": "left(chap)"
  },
  {
    "question": "+\r\n\r\nButun qiymat qabul qiluvchi tiplarni ko`rsating",
    "answer": "short int, int",
    "noAnswer1": "float, double",
    "noAnswer2": "\" float,  long long;\"",
    "noAnswer3": "long, float"
  },
  {
    "question": "+\r\n\r\n… - bu tuzilma elementlarini qandaydir kriteriya asosida tartiblash.",
    "answer": "saralash",
    "noAnswer1": "kamayish tartibida saralash",
    "noAnswer2": "o’sish tartibida saralash",
    "noAnswer3": "qidirish"
  },
  {
    "question": "+\r\n\r\nElementlarni kalit maydonlarining har bir keyingisi o’zidan oldingisidan kichik bo’lsa, bunday saralash nima deyiladi.",
    "answer": "kamayish tartibida saralash",
    "noAnswer1": "saralash maqsadi",
    "noAnswer2": "saralash xususiyati",
    "noAnswer3": "saralashning optimal yechimi"
  },
  {
    "question": "+\r\n\r\n– bu elementlarni saralash uchun qo’llaniladigan algoritm hisoblanadi.",
    "answer": "Saralash algoritmi",
    "noAnswer1": "Saralash maqsadi",
    "noAnswer2": "Sorting problem",
    "noAnswer3": "Sorting goals"
  },
  {
    "question": "+\r\n\r\nChar tipidagi o’zgaruvchiga necha bayt kerak bo’ladi?",
    "answer": "1",
    "noAnswer1": "2",
    "noAnswer2": "4",
    "noAnswer3": "8"
  },
  {
    "question": "+\r\n\r\nBazaviy ma’lumotlar toifasiga nima kiradi?",
    "answer": "butun sonli va xaqiqiy",
    "noAnswer1": "skalyar va tuzilmaviy",
    "noAnswer2": "bo’sh va skalyar",
    "noAnswer3": "binar va tuzilmaviy"
  },
  {
    "question": "+\r\n\r\nAgar daraxtning maksimal chiqish darajasi 2 bo’lsa, bunday daraxt nima deb ataladi?",
    "answer": "Binar daraxt",
    "noAnswer1": "Indekslangan daraxt",
    "noAnswer2": "Binar rekursiya",
    "noAnswer3": "Juft bog’lami daraxt"
  },
  {
    "question": "+\r\n\r\n Belgili toifalar necha xil bo’ladi?",
    "answer": "2",
    "noAnswer1": "5",
    "noAnswer2": "8",
    "noAnswer3": "10"
  },
  {
    "question": "+\r\n\r\nBelgili toifalar qaysilar?",
    "answer": "o’zlashtirish va taqqoslash",
    "noAnswer1": "faqat taqqoslash",
    "noAnswer2": "taqqoslash, o’zlashtirish va munosabati",
    "noAnswer3": "faqat o’zlashtirish"
  },
  {
    "question": "+\r\n\r\n Binar daraxtlarda ota o’g’illari bilan qanday bog’lanadi?",
    "answer": "Gorizontal chiziq bilan",
    "noAnswer1": "Tog’ri chiziq bilan",
    "noAnswer2": "Vertical chiziq bilan",
    "noAnswer3": "Ixtiyoriy tarzda"
  },
  {
    "question": "+\r\n\r\nBoolen tipi kompyuter xotirasidan qancha hajm egallaydi",
    "answer": "1 bayt",
    "noAnswer1": "2 bayt",
    "noAnswer2": "4 bayt",
    "noAnswer3": "8 bayt"
  },
  {
    "question": "+\r\n\r\nBu algoritmni aniqlashda o’ziga bevosita yoki bilvosita muroojat qilishdir. Qanday algoritm haqida gap ketmoqda?",
    "answer": "Rekursiv algoritm",
    "noAnswer1": "Stuctiv algoritm",
    "noAnswer2": "Classlar algorimi",
    "noAnswer3": "Navbatlar algoritmi"
  },
  {
    "question": "+\r\n\r\n… – obyektga yo’naltirilgan dasturlash (OYD) asosiy printsiplaridan biri. Bunda, sinf boshqa sinflarning o‘zgaruvchilari va metodlaridan o‘zining o‘zgaruvchisi va metodi sifatida foydalanishi mumkin.",
    "answer": "merosxo’rlik",
    "noAnswer1": "dinamik massivlar",
    "noAnswer2": "algoritm",
    "noAnswer3": "rekursiya"
  },
  {
    "question": "+\r\n\r\n… – ikki yoki undan ortiq o'xshash, ammo texnik jihatdan har xil vazifalarni hal qilish uchun bir xil funksiya nomidan foydalanishga imkon beruvchi xususiyat.",
    "answer": "Polimorfizm",
    "noAnswer1": "Dinamik massiv",
    "noAnswer2": "Statik massiv",
    "noAnswer3": "Rekursiya"
  },
  {
    "question": "+\r\n\r\nQuyidagilardan qaysi biri rekursiv triadaga kirmaydi?",
    "answer": "Daraxtni asoslashtirish",
    "noAnswer1": "Rekursiya bazasi",
    "noAnswer2": "Parametrizatsiya qilish",
    "noAnswer3": "Dekompozitsiya"
  },
  {
    "question": "+\r\n\r\nSaralashning maqsadi?",
    "answer": "tartiblangan to’plamda kerakli elementni tartiblashdan iborat bo’ladi",
    "noAnswer1": "tartiblangan to’plamda kerakli elementni indeksatsiyasini osonlashtirishdan iborat",
    "noAnswer2": "tartiblangan to’plamda kerakli elementni parametrizatsiyalashni osonlashtirishdan iborat",
    "noAnswer3": "tartiblangan to’plamda kerakli elementni bir biriga bog’lashnini osonlashtirishdan iborat"
  },
  {
    "question": "+\r\n\r\n… - bu ma’lum bir ma’lumotlar tuzilmasidagi tartibsiz ma’lumotlarni ularning qandaydir xususiyatiga ko’ra tartiblab chiqish.",
    "answer": "saralash",
    "noAnswer1": "ketma-ket tartiblash",
    "noAnswer2": "tanlab saralash",
    "noAnswer3": "pufakchali saralash"
  },
  {
    "question": "+\r\n\r\nSaralashning qanday turlari mavjud?",
    "answer": "Selection, insertion, merge, radix",
    "noAnswer1": "Bubble, stack, quick, shell",
    "noAnswer2": "Bubble, shell, deque, selection",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\n Uni omborxona yoki kutubxonaning bir turi sifatida ko'rish mumkin.",
    "answer": "Ma’lumotlar strukturasini",
    "noAnswer1": "Classlar tarkibini",
    "noAnswer2": "Ma’lumotlar tarkibini",
    "noAnswer3": "Steklar jadvalini"
  },
  {
    "question": "+\r\n\r\nNima uchun turli xil saralash algoritmlari ishlatiladi?",
    "answer": "Saralash algoritmlari turli ma’lumotlar tuzilmasida turlicha ishlashi mumkin",
    "noAnswer1": "Bubble saralashdan ko’ra quick saralash tez ishlganligi uchun",
    "noAnswer2": "Saralash algoritmlari turg’un holatda ishlagani uchun",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\nNima uchun turli xil saralash algoritmlari ishlatiladi?",
    "answer": "Saralash algoritmlari turg’unlik jihatidan farq qilishi mumkin",
    "noAnswer1": "Bubble saralashdan ko’ra quick saralash tez ishlganligi uchun",
    "noAnswer2": "Saralash algoritmlarida turlicha algoritmlardan foydalaniladi",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\nSaralash qanday toifaga bo’linadi?",
    "answer": "turg’un va noturg’un",
    "noAnswer1": "bubble, selection, insertion",
    "noAnswer2": "tez va yomon ishlovchi",
    "noAnswer3": "best, average, worst"
  },
  {
    "question": "+\r\n\r\n\".. – bunda tizimga kelib tushgan birinchi talabga birinchi bo‘lib xizmat ko‘rsatiladi va tizimdan chiqariladi\"",
    "answer": "Navbat",
    "noAnswer1": "Qator",
    "noAnswer2": "Bosqich",
    "noAnswer3": "Baxo"
  },
  {
    "question": "+\r\n\r\n\"… – mazkur turga kasr qismlari bor haqiqiy chekli sonlar to‘plami kiradi. To‘plamni chekli bo‘lish sharti kompyuterda sonlarni ifodalash chegaralanganligi bilan bog‘liq.\"",
    "answer": "Haqiqiy tur",
    "noAnswer1": "Soxta tur",
    "noAnswer2": "Butun tur",
    "noAnswer3": "Odatiy tur"
  },
  {
    "question": "+\r\n\r\n… ro‘yxat – bunda tuzilma elementlari ko‘pi bilan tuzilmaning m ta elementi bilan bog‘langan bo‘ladi",
    "answer": "m bog`lamli",
    "noAnswer1": "Ko`p bog`lamli",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "m bog`lamli, Ko`p bog`lamli, Jadvalli ro`yxat"
  },
  {
    "question": "+\r\n\r\nAgar har bir element o’zidan  oldingi  va  o’zidan  keyingi  element  bilan  bog’langan  bolsa qanday ro’yhat deyiladi",
    "answer": "ikki bog’lamli",
    "noAnswer1": "uch bog’lamli",
    "noAnswer2": "bir bog’lamli",
    "noAnswer3": "ketma-ketli bog’langan"
  },
  {
    "question": "+\r\n\r\nAgar ikki qo’shni element noto’g’ri tartibda joylashib qolgan bo’lsa, ularning o’rnini almashtiramiz. Elementlar o’z o’rinlariga pufakga o’xshab siljib boradi. Yuqorida qaysi usul algoritmi keltirilgan?",
    "answer": "Bubble sort",
    "noAnswer1": "Quick sort",
    "noAnswer2": "Merge sort",
    "noAnswer3": "Tanlash orqali saralash"
  },
  {
    "question": "+\r\n\r\nAlgoritm xossalari nechta?",
    "answer": "5",
    "noAnswer1": "6",
    "noAnswer2": "8",
    "noAnswer3": "10"
  },
  {
    "question": "+\r\n\r\nAsosiy programmadan hech qanday parameter qabul qilib olmaydigan funksiyalar nima dep aytiladi?",
    "answer": "parametrsiz funksiya.",
    "noAnswer1": "parametrli funfsiya;",
    "noAnswer2": "takrorlanuvchi funksiya;",
    "noAnswer3": "void funksiyasi;"
  },
  {
    "question": "+\r\n\r\nBalandlik bu nima?",
    "answer": "bu daraxt bosqichi soni",
    "noAnswer1": "daraxt soni",
    "noAnswer2": "shoxlari",
    "noAnswer3": "daraxt ildizlri"
  },
  {
    "question": "+\r\n\r\nKriteriya sifatida odatda nima deb ataluvchi sonli maydon qo’llaniladi?",
    "answer": "kalit",
    "noAnswer1": "yasheyka",
    "noAnswer2": "maydon hajmi",
    "noAnswer3": "string son"
  },
  {
    "question": "+\r\n\r\nBinar daraxt deb nimaga aytiladi?",
    "answer": "Agar maksimal chiqish darajasi 2 bo`lsa",
    "noAnswer1": "Agar maksimal chiqish darajasi 2 va undan ko’p bo`lsa",
    "noAnswer2": "Agar chiqish darajasi faqat 2 bo`lsa",
    "noAnswer3": "Agar maksimal chiqish darajasi n bo`lsa"
  },
  {
    "question": "+\r\n\r\n… - ma’lumotlarni qayta ishlashda berilgan qiymat (kalit) bo’yicha elementni qidirib topishni yengillashtirishdan iborat.",
    "answer": "Saralash maqsadi",
    "noAnswer1": "Saralash xususiyati",
    "noAnswer2": "Sorting problem",
    "noAnswer3": "Sorting algoritm"
  },
  {
    "question": "+\r\n\r\nIchki saralash algoritmlari qaerda qo’llaniladi?",
    "answer": "massivda",
    "noAnswer1": "faylda",
    "noAnswer2": "tartibsiz ma’lumotlarda",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\nDaraxt – bu nima?",
    "answer": "chiziqsiz bog‘langan ma‘lumotlar tuzilmasidir",
    "noAnswer1": "chiziqli bog’angan malumotlar tuzilmasi",
    "noAnswer2": "ketma ket bog’langan malumotlar tuzilmasi",
    "noAnswer3": "parallel bog’langan malumotlar tuzilmasi"
  },
  {
    "question": "+\r\n\r\nTashqii saralash algoritmlari qaerda qo’llaniladi?",
    "answer": "faylda",
    "noAnswer1": "xotira maydonida",
    "noAnswer2": "tartibsiz ma’lumotlarda",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "+\r\n\r\nDaraxt baalandligi nima?",
    "answer": "daraxt bosqichlari soni",
    "noAnswer1": "daraxt ildizlari",
    "noAnswer2": "daraxt barglari",
    "noAnswer3": "daraxt barglari va shoxlari"
  },
  {
    "question": "+\r\n\r\nDaraxt bu …. .Jumlani davom ettiting:",
    "answer": "tugun deb ataladigan bir yoki bir nechta elementlardan tashkil topgan cheksiz to'plamdir",
    "noAnswer1": "ma’lumotlarni bir-biriga bog’liq ekanligini tavsiflovchi vosita;",
    "noAnswer2": "\"tugun deb ataladigan bir yoki bir nechta elementlardan tashkil topgan chekli to'plamdir;\"",
    "noAnswer3": "bir yoki bir nechta elementlardan tashkil topgan cheksiz to'plamdir"
  },
  {
    "question": "+\r\n\r\nDaraxt turlari qaysilar?",
    "answer": "Binar daraxtlar, ko’p o’lchamli daraxtlar",
    "noAnswer1": "Unar daraxtlar, ko’p o’lchamli daraxtlar",
    "noAnswer2": "Binar daraxtlar, cheksiz  o’lchamli daraxtlar",
    "noAnswer3": "Unar daraxtlar, chekli  o’lchamli daraxtlar"
  },
  {
    "question": "+\r\n\r\nDastur  bajarilishi  mobaynida  o‘zgarib  turadigan  tuzilmaga nima deyiladi",
    "answer": "dinamik",
    "noAnswer1": "static",
    "noAnswer2": "fizik",
    "noAnswer3": "mexanik"
  },
  {
    "question": "+\r\n\r\nDastur bajarilayotganda vujudga keladigan yoki o`lchamlari dastur bajarilishi mobaynida aniqlanadigan ob`yektlar qanday ob`yektlar deyiladi?",
    "answer": "Dinamik",
    "noAnswer1": "Statik",
    "noAnswer2": "Massiv",
    "noAnswer3": "Mantiqiy"
  },
  {
    "question": "+\r\n\r\nQaysi dasturlash tillarida umuman takrorlanish operatorlari yo’q va bu borada butunlay rekursiyaga tayanadi C++tilida belgili toifalarning qiymatlari qanday belgi orqali belgilanadi?",
    "answer": "Erlang",
    "noAnswer1": "Python",
    "noAnswer2": "C++",
    "noAnswer3": "JavaScript"
  },
  {
    "question": "+\r\n\r\nDaraxtning har bir tugunida katta o’g’ilga mos shoxidan tashqari barha shohlari kesib tashlanadi. Bunday holatda qaysi shox katta o’g’il vazifasida bo’ladi?",
    "answer": "Chetki chap shox",
    "noAnswer1": "Tugun pastidagi shox",
    "noAnswer2": "Eng pastki shox",
    "noAnswer3": "Chetki o’ng shox"
  },
  {
    "question": "+\r\n\r\n Dasturda Amallar necha xil bo’ladi?",
    "answer": "2 xil (binar va unar)",
    "noAnswer1": "2 xil (sonli va satrli)",
    "noAnswer2": "Aniqlab bo’lmaydi",
    "noAnswer3": "Dastur tipiga qarab"
  },
  {
    "question": "+\r\n\r\nDasturlash tillarida ma’lumotlar necha turga bo’linadi?",
    "answer": "bazaviy va keltirilgan",
    "noAnswer1": "Rost va yolg’on",
    "noAnswer2": "Fizik va biologik",
    "noAnswer3": "Skalyar va bo’sh"
  },
  {
    "question": "+\r\n\r\n“….” - so'zi ingliz tilidan olingan bo’lib, uning ma'nosi “shovqin” yoki “aralash” kabi ta'riflanadi.",
    "answer": "Xesh",
    "noAnswer1": "Rekursiya",
    "noAnswer2": "Shifrlash",
    "noAnswer3": "Vector"
  },
  {
    "question": "+\r\n\r\n… – bu ma'lum bir turdagi va ixtiyoriy uzunlikdagi kirish ma'lumotlari massivini fiksirlangan uzunlikdagi chiquvchi bitlar qatoriga aylantirish.",
    "answer": "Xeshlash",
    "noAnswer1": "Rekursiya",
    "noAnswer2": "Ma’lumotni ifodalash",
    "noAnswer3": "Tiplar va float"
  },
  {
    "question": "+\r\n\r\n... – bu shunday kalitki, u ikkidan ortiq maydonni o‘z ichiga oladi.",
    "answer": "Qo`shimcha kalit",
    "noAnswer1": "Kalitlar maydoni",
    "noAnswer2": "Yozuv kaliti",
    "noAnswer3": "Qulfli shifr"
  },
  {
    "question": "2. Ushbu sonni 10lik sanoq sistemasidan 2lik sanoq sistemasiga o’tkazing.\n3110->X2\n",
    "answer": "111112:",
    "noAnswer1": "111012;",
    "noAnswer2": "110112;",
    "noAnswer3": "100112;"
  },
  {
    "question": "2 lik sanoq sistemasida ushbu qiymatni javobi nechiga teng?\n      1+1+1+1+1=?\n",
    "answer": 101,
    "noAnswer1": 5,
    "noAnswer2": 1001,
    "noAnswer3": 11
  },
  {
    "question": "2 lik sanoq sistemasida ushbu qiymatni javobi nechiga teng?\n1+1+1+1=?\n",
    "answer": 100,
    "noAnswer1": 4,
    "noAnswer2": 101,
    "noAnswer3": 11
  },
  {
    "question": "2 lik sanoq sistemasida ushbu qiymatni javobi nechiga teng?\n10-1=?\n",
    "answer": 1,
    "noAnswer1": 9,
    "noAnswer2": 0,
    "noAnswer3": 11
  },
  {
    "question": "Ma’lumotlar toifasi necha turga bo’linadi va ular qaysilar?",
    "answer": "2 turga Bazaviy va Keltirilgan.",
    "noAnswer1": "3 turga Bo’sh , Skalyar va Tuzilmaviy;",
    "noAnswer2": "2 turga Skalyar va Tuzulmaviy;",
    "noAnswer3": "3 turga Bazaviy, Tuzulmaviy va Skalyar;"
  },
  {
    "question": "Bitta operandga qo’llaniladigan amallar nima dep nomlanadi?",
    "answer": "unar",
    "noAnswer1": "binar",
    "noAnswer2": "class",
    "noAnswer3": "union"
  },
  {
    "question": "Additiv amal qanday belgilanadi?",
    "answer": "+",
    "noAnswer1": "-",
    "noAnswer2": "%",
    "noAnswer3": "*"
  },
  {
    "question": "Multiplikativ amal qanday belgilanadi?",
    "answer": "*",
    "noAnswer1": "/",
    "noAnswer2": "+",
    "noAnswer3": "-"
  },
  {
    "question": "Modul olish amali qanday belgilanadi?",
    "answer": "%",
    "noAnswer1": "||",
    "noAnswer2": "/",
    "noAnswer3": "&"
  },
  {
    "question": "Ushbu jumlani to’ldiring.\n Modul amali … sonni … songa bo’lishdan hosil bo’ladigan qoldiqqa tengdir.\n",
    "answer": "butun butun ",
    "noAnswer1": "xaqiqiy butun",
    "noAnswer2": "butun xaqiqiy",
    "noAnswer3": "xaqiqiy xaqiqiy"
  },
  {
    "question": "Ushbu jumlani to’ldiring.\nAgar modul amali … operandlarga qo’llanilsa, natija ham …bo’ladi, aks holda natija ishorasi kompilyatorga bog’liqdir.\n",
    "answer": "musbat musbat",
    "noAnswer1": "musbat manfiy",
    "noAnswer2": "manfiy musbat",
    "noAnswer3": "manfiy manfiy"
  },
  {
    "question": "Ushbu jumlani to’ldiring.\n Agar operandlar biri long tipiga tegishli bo’lsa ikkinchi operand ham … tipiga keltiriladi va natija ham long tipiga tegishli bo’ladi.\n",
    "answer": "long",
    "noAnswer1": "daouble",
    "noAnswer2": "int ",
    "noAnswer3": "short"
  },
  {
    "question": "Ushbu jumlani to’ldiring.\n Agar operandlar biri float tipiga tegishli bo’lsa ikkinchi operand ham … tipiga keltiriladi va natija ham float tipiga tegishli bo’ladi.\n",
    "answer": "float ",
    "noAnswer1": "double",
    "noAnswer2": "int ",
    "noAnswer3": "long"
  },
  {
    "question": "Ushbu jumlani to’ldiring.\n Agar operandlar biri double tipiga tegishli bo’lsa ikkinchi operand ham … tipiga keltiriladi va natija ham double tipiga tegishli bo’ladi.\n",
    "answer": "double",
    "noAnswer1": "float",
    "noAnswer2": "long",
    "noAnswer3": "int"
  },
  {
    "question": "Ushbu jumlani to’ldiring.\n Agar operandlar biri long double  tipiga tegishli bo’lsa ikkinchi operand ham … tipiga keltiriladi va natija ham long double tipiga tegishli bo’ladi.\n",
    "answer": "long double",
    "noAnswer1": "long long",
    "noAnswer2": "float ",
    "noAnswer3": "double"
  },
  {
    "question": "Ushbu jumlani to’ldiring.  \n… amali ++i ko’rinishda ishlatiladi. Bunda  oldin o’zgaruvchi qiymatini oshirib so’ngra foydalaniladi.\n",
    "answer": "prefix",
    "noAnswer1": "postfix",
    "noAnswer2": "unar",
    "noAnswer3": "binar"
  },
  {
    "question": "Ushbu jumlani to’ldiring.\n… amali i++ ko’rinishda  bo’ladi. Bunda ishlatishdan oldin o’zgaruvchi qiymatidan foydalanib, so’ngra oshiriladi.\n",
    "answer": "postfiks",
    "noAnswer1": "prefix",
    "noAnswer2": "unar",
    "noAnswer3": "binar"
  },
  {
    "question": "Quyidagi berilganlardan short int toifasiga kiruvchi unsigned qabul qiluvchi qiymatini toping.",
    "answer": "0... 65535",
    "noAnswer1": -3276832768,
    "noAnswer2": "0 ... 32767;",
    "noAnswer3": "21……. 45675678"
  },
  {
    "question": "Bir toifa bilan ikkinchi toifani aynan qanday hususiyatlari orqali farqlash mumkin?",
    "answer": "qiymatlar qabul qilish oralig’i \nva xotiradan egallagan joyining katta yoki kichikligi bilan.\n",
    "noAnswer1": "Yozilishi va tipi bilan ",
    "noAnswer2": "xotiradan egallagan joyining\n katta yoki kichikligi bilan;\n",
    "noAnswer3": "qiymatlar qabul qilish oralig’I bilan;"
  },
  {
    "question": "long int toiasini hotiradan egallagan joyi qancha",
    "answer": "4 bayt",
    "noAnswer1": "8 bayt ",
    "noAnswer2": "12 bayt",
    "noAnswer3": "6 bayt"
  },
  {
    "question": "short int toiasini hotiradan egallagan joyi qancha?",
    "answer": "2 bayt",
    "noAnswer1": "6 bayt",
    "noAnswer2": "4 bayt",
    "noAnswer3": "8 bayt"
  },
  {
    "question": "Quyidagi berilganlardan int toifasiga kiruvchi unsigned qabul qiluvchi qiymatini toping.",
    "answer": "0 ... 4294967295,",
    "noAnswer1": "-2147483648 ... 2147483647",
    "noAnswer2": "0 ... 65535;",
    "noAnswer3": "-32768 ... 32767;"
  },
  {
    "question": "Ushbu jumlani to’ldiring.\nC++ tilida …  deb bir necha belgilar ketma ketligi tushuniladi.\n",
    "answer": "so'z",
    "noAnswer1": "string tipi",
    "noAnswer2": "char tipi",
    "noAnswer3": "gap"
  },
  {
    "question": " Hisoblash jarayonida qiymatini o’zgartirmaydigan kattaliklar nima dep nomlanadi?",
    "answer": "const",
    "noAnswer1": "ozgaruvchilar",
    "noAnswer2": "tiplarni ozgarishi",
    "noAnswer3": "malumotlarni ozgarishi"
  },
  {
    "question": "Izohlar nima uchun ishlatiladi?",
    "answer": "barcha javoblar to’g’ri ,",
    "noAnswer1": "izoh uchun belgilangan qatorda \nhech qanday amal bajarilmaydi\n",
    "noAnswer2": "programmani biror qismini \ntushuntirish uchun ishlatiladi;\n",
    "noAnswer3": "programmaning ma’lum qismini \ntavsiflash  uchun ishlatiladi;\n"
  },
  {
    "question": "Operatorlarni biri ikkinchisidan qanday belgi orqali ajratiladi",
    "answer": "nuqtali vergul",
    "noAnswer1": "iki nuqta",
    "noAnswer2": "vergul",
    "noAnswer3": " nuqta"
  },
  {
    "question": "Hech qanday qiymat qaytarmaydigan funksiya nima dep nomlanadi?",
    "answer": "void",
    "noAnswer1": "main",
    "noAnswer2": "return",
    "noAnswer3": "identifikatsiya"
  },
  {
    "question": "Agar funksiya qaytaradigan qiymat toifasi yozilmagan bo’lsa  qanday tipda ma’lumot qaytadi?",
    "answer": "int ",
    "noAnswer1": "return ",
    "noAnswer2": "float ",
    "noAnswer3": "bool"
  },
  {
    "question": "Qaysi belgi orasida matn yozilsa hech qanday o’zgartirishlarsiz ekranga chiqadi?",
    "answer": "qoshtirnoq",
    "noAnswer1": "ostki chiziqcha",
    "noAnswer2": "nuqta ",
    "noAnswer3": "vergul"
  },
  {
    "question": "Qo’shtirnoq orasida yozilgan ma’lumotlar nima dep nomlanadi?",
    "answer": "satr",
    "noAnswer1": "gap",
    "noAnswer2": "matn",
    "noAnswer3": "simvol"
  },
  {
    "question": "Matematik funksiyalardan programmada foydalanish uchun qaysi kutbhonani \nprogrammaga qo’shish kerak?\n",
    "answer": "math.h",
    "noAnswer1": "iostream",
    "noAnswer2": "ostream",
    "noAnswer3": "algorithm"
  },
  {
    "question": "bool toifasi qanday qiymatlar qabul qiladi?",
    "answer": "true yoki false",
    "noAnswer1": "raqamli va satrli;",
    "noAnswer2": "raqamli",
    "noAnswer3": "satrli"
  },
  {
    "question": "bool toifasi kompter hotirasida qancha joy egallaydi?",
    "answer": "1 bayt",
    "noAnswer1": "2 bayt",
    "noAnswer2": "3 bayt",
    "noAnswer3": "4bayt"
  },
  {
    "question": " char toifasi kompter hotirasida qancha joy egallaydi?",
    "answer": "1 bayt",
    "noAnswer1": "2 bayt",
    "noAnswer2": "4 bayt",
    "noAnswer3": "8 bayt"
  },
  {
    "question": "math.h matematik kutbxonasida x sonini natural lagarifimi qanday belgilanadi?",
    "answer": "log(x),",
    "noAnswer1": "log10(x);",
    "noAnswer2": "ln(x);",
    "noAnswer3": "sqrt(x);"
  },
  {
    "question": "Math.h kutbhonasida barcha trigonometrik funksiyalar qanday o’lchovida beriladi?",
    "answer": "radian",
    "noAnswer1": "gradus",
    "noAnswer2": "kg",
    "noAnswer3": "litr"
  },
  {
    "question": "C++ da bir toifadan boshqa bir toifaga o’tishning necha hil turi mavjud?",
    "answer": "2xil oshkor va oshkormas",
    "noAnswer1": "3 xil",
    "noAnswer2": "4 xil",
    "noAnswer3": "bir turdan boshqa bir\n turga o’tib bo’lmaydi\n"
  },
  {
    "question": " Quyidagilardan qaysi birida bir turdan boshqa turga o’tishning ishkor variant qo’llanilmoqda?",
    "answer": "int a;   a=(float)3.4:",
    "noAnswer1": "int a; a=(int)3.4;",
    "noAnswer2": "int a;   a(int)3.4;",
    "noAnswer3": "float a; a=(float)3.4;"
  },
  {
    "question": " Mantiqiy inkor “!” operatori qanday vazifani bajaradi.",
    "answer": "rost qiymatni yolg’onga \naytlantiradi yoki aksincha,\n",
    "noAnswer1": "ikki mantiqiy o’zgaruvchi rost \nbolganda rost qaytaradi yoki aksincha\n",
    "noAnswer2": "ikki mantiqiy o’zgaruvchi yolg’on bolganda\n yolg’on qaytaradi yoki aksincha\n",
    "noAnswer3": "hech bo’lmaganda bittasi rost \nbo’lsa ham rost qiymat qaytaradi\n"
  },
  {
    "question": "Mantiqiy ko’paytirish amali qanday holatlarda yolg’on qiymat qaytaradi?",
    "answer": "barcha javoblar to’g’ri",
    "noAnswer1": "biri rost ikkinchisi yolg’on\n bo’lgan holatlarda;\n",
    "noAnswer2": "biri yolg’on ikkinchisi rost \nbo’lgan holatlarda\n",
    "noAnswer3": "har ikkisi ham yolg’on \nbo’lgan holatlarda\n"
  },
  {
    "question": "Ushbu ifodada “c” qanday qiymat qaytaradi?\na=true; b=false;\nc=!a;\nc=a&&b;\nc=a||b; \n",
    "answer": "true ",
    "noAnswer1": "false",
    "noAnswer2": "yolgon",
    "noAnswer3": 0
  },
  {
    "question": "Ushbu ifodada “c”  qanday qiymat qaytaradi?\na=true; b=true;\na=!a;\nc=a&&b\n",
    "answer": "true",
    "noAnswer1": "false",
    "noAnswer2": "yolgon",
    "noAnswer3": 0
  },
  {
    "question": "A=true, B=false, C=true, D=false bo’lsa, quyidagi mantiqiy ifoda natijasini aniqlang.\n!((A&&B)||(C&&D))||(A||B)\n",
    "answer": "true",
    "noAnswer1": "false",
    "noAnswer2": "yolgon",
    "noAnswer3": 0
  },
  {
    "question": "A=true, B=false, C=true, D=false bo’lsa, quyidagi mantiqiy ifoda natijasini aniqlang.\n!((!A&&B)||(C&&D))||(A||B)\n",
    "answer": "true",
    "noAnswer1": "false",
    "noAnswer2": "yolgon",
    "noAnswer3": 0
  },
  {
    "question": "A=true, B=false, C=true, D=false bo’lsa, quyidagi mantiqiy ifoda natijasini aniqlang.\n((!A&&B)||(C&&D))||(A&&B)\n",
    "answer": "false",
    "noAnswer1": "true",
    "noAnswer2": "rost",
    "noAnswer3": 0
  },
  {
    "question": "A=false, B=false, C=true, D=false bo’lsa, quyidagi mantiqiy ifoda natijasini aniqlang.\n    !((!A&&B)||(C&&D))||(A||B)\n",
    "answer": "true",
    "noAnswer1": "false",
    "noAnswer2": "yolgon",
    "noAnswer3": 0
  },
  {
    "question": "Tanlash operatori nima dep nomlanadi?",
    "answer": "switch",
    "noAnswer1": "if",
    "noAnswer2": "for",
    "noAnswer3": "while"
  },
  {
    "question": "Tanlash operatorini birorta ham qiymatiga to’gri kelmagan holda qaysi operator qo’yiladi?",
    "answer": "default",
    "noAnswer1": "case",
    "noAnswer2": "else ",
    "noAnswer3": "if"
  },
  {
    "question": "Shart operatori nima dep nomalanadi?",
    "answer": "if",
    "noAnswer1": "switch",
    "noAnswer2": "for",
    "noAnswer3": "while"
  },
  {
    "question": "continue funksiyasini qaysi operatorlarga qo’llash mumkin?",
    "answer": "Har qanday sikl operatoriga,",
    "noAnswer1": "for",
    "noAnswer2": "while",
    "noAnswer3": "do while"
  },
  {
    "question": "Eng soda doimiy takrorlanuvchi sikl operatori  qanday yoziladi?",
    "answer": "for( ; ; ),",
    "noAnswer1": "for(int i=0; i<1000; i++);",
    "noAnswer2": "for(int i=0; i<1000;i--);",
    "noAnswer3": "for(int i=0; i<n; i++);"
  },
  {
    "question": "Qaysi sikl operatorida avval shart bajarilib keyin tekshiriladi?",
    "answer": "do while",
    "noAnswer1": "while",
    "noAnswer2": "for ",
    "noAnswer3": "switch"
  },
  {
    "question": " Qaysi sikl operatoridan shart yolg’on bo’lsa ham hech bo’lmaganda 1 marta foydalaniladi?",
    "answer": "do while",
    "noAnswer1": "while",
    "noAnswer2": "for",
    "noAnswer3": "switch"
  },
  {
    "question": "Ko’rsatkichlar nima uchun ishlatiladi?",
    "answer": "o’zining qiymati sifatida xotira\n adresini saqlovchi,\n",
    "noAnswer1": "yo’l boshlovchi",
    "noAnswer2": "o’zining qiymati sifatida toifani \nhotiradan egallagan joyini ko’rsatadi;\n",
    "noAnswer3": "toifani musbat va manfiy \nchegarasini aniqlashga;\n"
  },
  {
    "question": "Funksiya dep nimaga aytiladi?",
    "answer": "Dasturning istalgan qismidan murojat qilib,\n birnecha bor ishlatish mumkin bo’lgan operatorlar guruhi,\n",
    "noAnswer1": "o’zining qiymati sifatida hotira \nadresini o’zlashtiruvchiga \n",
    "noAnswer2": "o’zidan hech qanday qiymat\n qaytarmaydigan operatorga;\n",
    "noAnswer3": "Shartsiz qabul qilinadigan operatorga"
  },
  {
    "question": "Asosiy programmadan hech qanday parameter qabul qilib olmaydigan funksiyalar nima dep aytiladi?",
    "answer": "parametrsiz funksiya.",
    "noAnswer1": "parametrli funfsiya;",
    "noAnswer2": "takrorlanuvchi funksiya;",
    "noAnswer3": "void funksiyasi;"
  },
  {
    "question": "Global o’zgaruvchilar dep nimaga aytiladi?",
    "answer": "ham asosiy programmada, ham funksiyada\n ishlatish mumkin bo’lgan o’zgaruvchi.\n",
    "noAnswer1": "faqat funksiyada ishlatilishi mumkin \nbo’lgan o’zgaruvchilar;\n",
    "noAnswer2": "Asosiy funksiyadan chaqiriluvchi \nfunksiyaga;\n",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan parametrlarni \nqabul qilib qayta  ishlovchi funksiyalar\n"
  },
  {
    "question": "Lokal o’zgaruvchilar dep nimaga aytiladi?",
    "answer": "faqat funksiyada ishlatilishi\n mumkin bo’lgan o’zgaruvchilar.\n",
    "noAnswer1": "ham asosiy programmada, ham funksiyada\n ishlatish mumkin bo’lgan o’zgaruvchi\n",
    "noAnswer2": "Asosiy funksiyadan chaqiriluvchi\n funksiyaga;\n",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan\n parametrlarni qabul qilib qayta ishlovchi funksiyalar;\n"
  },
  {
    "question": "Qiymatlar parametri dep nimaga aytiladi?",
    "answer": "asosiy dasturdan funksiyaga uzatiladigan o’zgaruvchilar\n qiymatini qabul qilib oluvchi parametrlar\n",
    "noAnswer1": "Asosiy funksiyadan chaqiriluvchi funksiya",
    "noAnswer2": "ham asosiy programmada, ham funksiyada \nishlatish mumkin bo’lgan parameter\n",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan parametrlarni \nqabul qilib qayta ishlovchi funksiya\n"
  },
  {
    "question": "Qaysi toifa faqat butun sonlarni o’z ichiga oladi?",
    "answer": "int",
    "noAnswer1": " float",
    "noAnswer2": "double",
    "noAnswer3": "long"
  },
  {
    "question": " Toifalarni qanday kalit so’zlari bilan modifikatsiyalash mumkin  ",
    "answer": "signed (ishorali), \nunsigned (ishorasiz).\n",
    "noAnswer1": "butun, haqiqiy;",
    "noAnswer2": "baytiga qarab",
    "noAnswer3": "tipiga qarab;"
  },
  {
    "question": "Ishorasiz toifalar nima uchun ishlatiladi?",
    "answer": "barcha bitlar qiymatlarni \nsaqlash uchun \n",
    "noAnswer1": "toifalarni birini ikkinchisidan \nfarqlash uchun\n",
    "noAnswer2": "qiymat qabul qilish \noraligi ortadi\n",
    "noAnswer3": "bunday toifa mavjud \nemas\n"
  },
  {
    "question": " Ishorasiz sonlar uchun qiymatlar qabul qilish oralig’I to’g’ri ko’rsatilgan qatorni belgilang.",
    "answer": "(0...2n-1),",
    "noAnswer1": "(-2n-1… 2n-1-1);",
    "noAnswer2": "(0…2n);",
    "noAnswer3": "(-2n-1…2n-1);"
  },
  {
    "question": "Ishorali sonlar uchun qiymatlar qabul qilish oralig’i to’g’ri ko’rsatilgan qatorni belgilang.",
    "answer": "(-2n-1… 2n-1-1) .",
    "noAnswer1": "(0...2n-1);",
    "noAnswer2": "(0…2n);",
    "noAnswer3": "(-2n-1…2n-1);"
  },
  {
    "question": ". ==  !=   <   <=   >   >= operatorlar bilan binar amallarni\nbajarish qaysi toifaga kiradi?\n\n",
    "answer": "bool",
    "noAnswer1": "int   ",
    "noAnswer2": "short",
    "noAnswer3": "double"
  },
  {
    "question": " C++ da and mantiqiy amalining yana bir yozilish shakli qanday?",
    "answer": "&&",
    "noAnswer1": "||",
    "noAnswer2": "!",
    "noAnswer3": "xor"
  },
  {
    "question": "C++ da or mantiqiy amalining yana bir yozilish shakli qanday?",
    "answer": "||",
    "noAnswer1": "&&",
    "noAnswer2": "!",
    "noAnswer3": "xor"
  },
  {
    "question": " C++ da not mantiqiy amalining yana bir yozilish shakli qanday?",
    "answer": "!",
    "noAnswer1": "||",
    "noAnswer2": "&&",
    "noAnswer3": "xor"
  },
  {
    "question": "C++ da inkor-yoki mantiqiy amalining yana bir yozilish shakli qanday?",
    "answer": "xor",
    "noAnswer1": "&&",
    "noAnswer2": "||",
    "noAnswer3": "!"
  },
  {
    "question": " C++tilida belgili toifalarning qiymatlari qanday belgi orqali belgilanadi?",
    "answer": "qo’shtirnoq ichida beriladi.",
    "noAnswer1": "ikki nuqta ichida beriladi;",
    "noAnswer2": "nuqtali vergul ichida;",
    "noAnswer3": "vergullar orasida;"
  },
  {
    "question": "Bir yoki bir necha belgilar birlashmasi nima dep ataladi?",
    "answer": "satr",
    "noAnswer1": "soz",
    "noAnswer2": "gap",
    "noAnswer3": "belgilash birlashmasi"
  },
  {
    "question": "Ko’rsatkichlar hotirada qancha joy egallaydi?",
    "answer": "4 bayt",
    "noAnswer1": "1 bayt ",
    "noAnswer2": "2 bayt",
    "noAnswer3": "8 bayt"
  },
  {
    "question": "Bir toifaga mansub elementlar to’plami nima dep nomlanadi?",
    "answer": "massiv",
    "noAnswer1": "enum",
    "noAnswer2": "matritsa",
    "noAnswer3": "korsatkich"
  },
  {
    "question": "Massivni necha xil ko’rinishi mavjud?",
    "answer": "2 xil",
    "noAnswer1": "3 xil",
    "noAnswer2": "4 xil",
    "noAnswer3": "turli xil"
  },
  {
    "question": " Ikki o’lchovli massiv nima dep nomlanadi?",
    "answer": "matritsa",
    "noAnswer1": "2 parametrli massiv",
    "noAnswer2": "enum",
    "noAnswer3": "switch"
  },
  {
    "question": "Ikki o’lchovli massivda indekslar soni nechta bo’ladi?",
    "answer": "2 ta ",
    "noAnswer1": "1 ta",
    "noAnswer2": "3 ta",
    "noAnswer3": "4ta"
  },
  {
    "question": "Matritsa elementlari indekisi doimo qaysi raqamdan boshlanadi?",
    "answer": 0,
    "noAnswer1": 1,
    "noAnswer2": 2,
    "noAnswer3": 3
  },
  {
    "question": "Jumlani to’ldiring.\nAgar massiv toifasi char bo’lsa, u holda massiv … hisoblanadi.\n",
    "answer": "satr",
    "noAnswer1": "belgi",
    "noAnswer2": "harf",
    "noAnswer3": "son"
  },
  {
    "question": "C++ da satr uzunligini aniqlash uchun qaysi buyrug’dan foydalanamiz?",
    "answer": "strlen(),",
    "noAnswer1": "sizeof();",
    "noAnswer2": "length();",
    "noAnswer3": "size();"
  },
  {
    "question": "Qaysi klassi o’zgaruvchan\nuzunlikdagi massiv yaratishga yordam beradi?\n",
    "answer": "vector",
    "noAnswer1": "void",
    "noAnswer2": "enum",
    "noAnswer3": "public"
  },
  {
    "question": "Massivni e’lon qilish to’g’ri ko’rsatilgan qatorni toping?",
    "answer": "int a[50] :     ",
    "noAnswer1": "float a=[50];      ",
    "noAnswer2": "int a{50};     ",
    "noAnswer3": "int a[3]={“1,2,3”};"
  },
  {
    "question": " Massivni initsalizatsiyalash to’g’ri ko’rsatilgan javobni toping?",
    "answer": "int a[3]={45,12,1}.      ",
    "noAnswer1": "int a[4]={12,3,4,43,2};",
    "noAnswer2": "int a[3]={“12,3,4”};            ",
    "noAnswer3": "float j[]={‘1,2,3,4,5.5,5.6’};"
  },
  {
    "question": "Noto’g’ri kiritilgan ikki o’lchovli massivni aniqlang?",
    "answer": "int a[2][3]={1,2,3,4,5,6,4}.",
    "noAnswer1": "int k[2][2]={1,2,3,4} ;   ",
    "noAnswer2": "int a[3][5];     ",
    "noAnswer3": "int k[2][3]={{0,1,2},{3,4,5}};"
  },
  {
    "question": " Quyidagi massivda j indeksi nimani bildiradi?  int a[i][j];",
    "answer": "ustunlar sonini.  ",
    "noAnswer1": "elementlar sonini;",
    "noAnswer2": "satrlar sonini;  ",
    "noAnswer3": "massiv necha o’lchamliligini;"
  },
  {
    "question": "Quyidagi massivda nechta element qatnashgan\nint k[3][4];   \n",
    "answer": "12 ta ",
    "noAnswer1": "3 ta ",
    "noAnswer2": "4 ta ",
    "noAnswer3": "34 ta"
  },
  {
    "question": "Quyidagi massivni oxirgi elementini toping \nInt a[7]={1,2,3,4,5,6,7};    \n",
    "answer": " a[6]:     ",
    "noAnswer1": " a[7]:     ",
    "noAnswer2": " a[8]:     ",
    "noAnswer3": " a[9]:     "
  },
  {
    "question": " Ikki satr va uch ustundan iborat massivni elon qiling",
    "answer": "int a[2][3]:  ",
    "noAnswer1": "int a[3]; int a[2];    ",
    "noAnswer2": "int a[3][2];      ",
    "noAnswer3": "int a[][]={2,3};"
  },
  {
    "question": "Dasturning natijasi qanday boladi?\n #include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b;\n                  float c;\n    a=3;\n    b=2;\n    c=a/b;\n    switch (c)\n    {\n        case 1  : cout << \"C++\"; break;\n        case 1.5: cout << \"Dastur\"; break;\n        case 2  : cout << \"Tugadi\"; break;\n        case 2.5: cout << \"Salom\"; break;\n    }\n    return 0;\n}\n",
    "answer": "dastur xato",
    "noAnswer1": "c++",
    "noAnswer2": "dastur",
    "noAnswer3": "tugadi"
  },
  {
    "question": "Dastur natijasi qanday boladi?\n#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,c;\n    a=2;\n    b=0;\n    c=0;\n    bool e= a>=b && c<=b;\n    cout << a+e << endl;\n    return 0;\n}\n",
    "answer": 3,
    "noAnswer1": 2,
    "noAnswer2": 0,
    "noAnswer3": "dasturda xatolik bor"
  },
  {
    "question": " Fayllar bilan ishlash oqimlariga qaysilar kiradi?",
    "answer": "ifstream, ofstream, fstream.",
    "noAnswer1": " iostream , ostream , istream;",
    "noAnswer2": " ifstream , ,cout istream;",
    "noAnswer3": "iostream , ofstream, istream;"
  },
  {
    "question": "|-bu belgi qanday mantiqiy amal?",
    "answer": "mantiqiy yoki(qo’shish).",
    "noAnswer1": "istisno qiluvchi;",
    "noAnswer2": "matiqiy va (kopaytiruvchi);",
    "noAnswer3": "mantiqiy inkor(inversiya);"
  },
  {
    "question": "Massiv qanday elon qilinadi?",
    "answer": "int a [n]; flout a[n];double a[n].",
    "noAnswer1": "int a; flout a;double a;",
    "noAnswer2": "int (a); flout (a); double (a);",
    "noAnswer3": "xammasi to’g’ri"
  },
  {
    "question": "Belgili tipni qabul qiluvchi o’zgaruvchilarni e’lon \nqilish uchun qaysi xizmatchi so’zidan foydalanish mumkin?\n",
    "answer": "char",
    "noAnswer1": "void",
    "noAnswer2": "bool",
    "noAnswer3": "int"
  },
  {
    "question": "A=1 B=1 A&B ni qiymatini toping.",
    "answer": 1,
    "noAnswer1": 0,
    "noAnswer2": 2,
    "noAnswer3": "1 va 0"
  },
  {
    "question": "Faqat bir qatorni izohga aylantirish uchun qo’llaniladigan belgilar.",
    "answer": "//",
    "noAnswer1": "/*   */",
    "noAnswer2": "*/",
    "noAnswer3": "/*"
  },
  {
    "question": "Ekranga qanday natija chiqadi?       (a=16)\nint main()\n{int a;\ncin>>a;\ncout<<sizeof(a);\n    return 0;\n}\n",
    "answer": 4,
    "noAnswer1": 8,
    "noAnswer2": 9,
    "noAnswer3": 47
  },
  {
    "question": "Parametrli sikl operatorini ko'rsating.",
    "answer": "for()",
    "noAnswer1": "do{}while();",
    "noAnswer2": "while();",
    "noAnswer3": "if();"
  },
  {
    "question": "Sharti keyin berilgan sikl operatorini ko'rsating.",
    "answer": "do{}while().",
    "noAnswer1": "while();",
    "noAnswer2": "if();",
    "noAnswer3": "for();"
  },
  {
    "question": "Sikl operatorining qaysi turida sikl tanasi kamida bir marotaba majburiy tarzda bajariladi?",
    "answer": "do{}while().",
    "noAnswer1": "while();",
    "noAnswer2": "if();",
    "noAnswer3": "for();"
  },
  {
    "question": "Ma’lumotlar tarkibi to’liq yoritilgan?",
    "answer": "ma'lumotlar bilan ishlashni, shu jumladan \nularni saqlash, qo'shish va o'chirish, o'zgartirish, qidirish va \nboshqalarni tashkil etuvchi ijrochi,\n",
    "noAnswer1": "har xil turdagi axborot ;",
    "noAnswer2": "axborotlardan tuzilgan \nma’lumotlar to’plami;\n",
    "noAnswer3": "t.j.y"
  },
  {
    "question": "Daraxt bu …. .Jumlani davom ettiting:",
    "answer": "tugun deb ataladigan bir yoki bir nechta elementlardan \ntashkil topgan cheksiz to'plamdir\n",
    "noAnswer1": "ma’lumotlarni bir-biriga bog’liq\n ekanligini tavsiflovchi vosita;\n",
    "noAnswer2": "tugun deb ataladigan bir yoki bir nechta elementlardan \ntashkil topgan chekli to'plamdir;\n",
    "noAnswer3": " bir yoki bir nechta elementlardan \ntashkil topgan cheksiz to'plamdir;\n"
  },
  {
    "question": "Char tipidagi o’zgaruvchiga necha bayt kerak bo’ladi?",
    "answer": 1,
    "noAnswer1": 2,
    "noAnswer2": 4,
    "noAnswer3": 8
  },
  {
    "question": "char qiymatini butun songa o'tkazish o'rniga nimani talqin qilamiz?",
    "answer": "ASCII belgisi sifatida talqin qilinadi.",
    "noAnswer1": "Dasturda buning iloji yo’q;",
    "noAnswer2": "Havolalardan foydalanish orqali talqin qilinadi;",
    "noAnswer3": "T.J.y;"
  },
  {
    "question": "ASCII (inglizcha \"ma'lumot almashish uchun Amerika standart kodi\" dan) – bu …. .Jumlani davom ettiring.",
    "answer": "inglizcha belgilar (+ bir nechta boshqalar) 0 dan 127 gacha bo'lgan raqamlar ko'rinishida ko'rsatiladigan ma'lumot almashishning Amerika standart kodi.",
    "noAnswer1": "bu inglizcha belgilar (+ bir nechta boshqalar) 0 dan 256 gacha bo'lgan raqamlar ko'rinishida ko'rsatiladigan ma'lumot almashishning Amerika standart kodi;",
    "noAnswer2": "bu fransuzcha belgilar (+ bir nechta boshqalar) 0 dan 127 gacha bo'lgan raqamlar ko'rinishida ko'rsatiladigan ma'lumot almashishning Amerika standart kodi;",
    "noAnswer3": "bu turli xil tillardagi belgilar (+ bir nechta boshqalar) 0 dan 127 gacha bo'lgan raqamlar ko'rinishida ko'rsatiladigan ma'lumot almashishning Amerika standart kodi;"
  },
  {
    "question": "ASCII bo’yicha “a” ni kodi to’g’ri ko’rsatilgan javobni tanlang.",
    "answer": 97,
    "noAnswer1": 98,
    "noAnswer2": 99,
    "noAnswer3": 65
  },
  {
    "question": "Ko’satkichlarni oldilan qaysi belgi qo’yilishi shart?",
    "answer": "*",
    "noAnswer1": ":",
    "noAnswer2": "&",
    "noAnswer3": "?"
  },
  {
    "question": "O'zining qiymati sifatida xotira manziliini ko'rsatuvchi (saqlovchi) o'zgaruvchilarga nimalar deyiladi?",
    "answer": "Ko’rsatkich o’zgaruvchilari",
    "noAnswer1": "Havolalar;",
    "noAnswer2": "Xotira o’zgaruvchilari ;",
    "noAnswer3": "Belgili o’zgaruvchilar;"
  },
  {
    "question": " sizeof(n) bu funksiyani vazifasi nima?",
    "answer": " n xotiradan qancha joy egallaganligini ko’rsatadi?",
    "noAnswer1": " n ni qiymatini ekranga chiqaradi",
    "noAnswer2": "n ni belgili tipga o’tkazadi;",
    "noAnswer3": "ASCII kodini chiqaradi;"
  },
  {
    "question": " Adrеsni оlish amali  qaysi?",
    "answer": "&",
    "noAnswer1": "*",
    "noAnswer2": "_",
    "noAnswer3": "?"
  },
  {
    "question": ".for(int i=1;i<=10;i++)\n{\ncout<<i<<” ”;\n}\nDastur natijasi qanday?\n",
    "answer": "1 dan 10 gacha sonlar chiqadi.",
    "noAnswer1": "1 dan 9 gacha sonlar chiqadi;",
    "noAnswer2": "1 dan 10 gacha sonlar yigindisi chiqadi;",
    "noAnswer3": "1 dan 9 gacha sonlar yigindisi chiqadi;"
  },
  {
    "question": "Massivni e’lon qilish to’g’ri ko’rsatilgan qatorni toping?",
    "answer": "int a[50]   ",
    "noAnswer1": "float a=[50];    ",
    "noAnswer2": "int a{50};    ",
    "noAnswer3": "int a[3]={“1,2,3”};"
  },
  {
    "question": ". Quyidagi ifodadan qanday qiymat chiqishini aniqlang?\nint a[]={1,2,3,4,5};\ncout<<a[3];\n",
    "answer": 4,
    "noAnswer1": 3,
    "noAnswer2": 2,
    "noAnswer3": 5
  },
  {
    "question": " Massiv bu … ",
    "answer": "Bir toifali chekli qiymatlarning tartiblangan to’plami.",
    "noAnswer1": "Bir toifali cheksiz qiymatlarning tartiblangan to’plami;",
    "noAnswer2": "Turli toifali cheksiz qiymatlarning tartiblangan to’plami;",
    "noAnswer3": "Turli toifali chekli qiymatlarning tartiblangan to’plami;"
  },
  {
    "question": ".Bir xil hisoblash jarayonini bir necha bor takrorlanishi nima deyiladi?",
    "answer": "sikl",
    "noAnswer1": "takrorlanish",
    "noAnswer2": "shart",
    "noAnswer3": "qiymat qaytarish;"
  },
  {
    "question": "Massiv elementlari indeksi nechchidan boshlanadi?",
    "answer": 0,
    "noAnswer1": 1,
    "noAnswer2": 2,
    "noAnswer3": "istalgan nomerdan"
  },
  {
    "question": "Parametrli sikl operatorini ko'rsating.",
    "answer": "for(){},",
    "noAnswer1": "while(){}; ",
    "noAnswer2": "do{}while();",
    "noAnswer3": "if(){};"
  },
  {
    "question": "int a=15;\nwhile(a>0)\n{--a;}\nDastur qismida sikl tanasi necha marta bajariladi?\n",
    "answer": 15,
    "noAnswer1": 14,
    "noAnswer2": 16,
    "noAnswer3": 0
  },
  {
    "question": "Sharti oldin berilgan sikl operatori tuzilishini ko'rsating.",
    "answer": "while(shart) {sikl tanasi;}.",
    "noAnswer1": "while(sikl tanasi) {shart};",
    "noAnswer2": "do(sikl tanasi) while{shart};",
    "noAnswer3": "do{sikl tanasi} while(shart);"
  },
  {
    "question": " Sharti keyin berilgan sikl operatori tuzilishini ko'rsating.",
    "answer": "do{sikl tanasi} while(shart);",
    "noAnswer1": "while(sikl tanasi) {shart;};",
    "noAnswer2": "do(sikl tanasi) while{shart;};",
    "noAnswer3": " while(shart) {sikl tanasi;};"
  },
  {
    "question": "int i=1;\nwhile(i>-1)\n{cout<< i << endl; i++;}\nDastur qismida sikl tanasi necha marta bajariladi?\n",
    "answer": "cheksiz:",
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": "bajarilmaydi"
  },
  {
    "question": "bajarilmaydi;\n122. int a=0;\nwhile(a-1<5)\n{a++;}\nDastur qismida sikl tanasi necha marta bajariladi?\n",
    "answer": 6,
    "noAnswer1": 5,
    "noAnswer2": 4,
    "noAnswer3": 0
  },
  {
    "question": " for (int a=0; a<50; a+=10) {cout<<a<<\",\"}\nDastur qismida qanday natija chiqariladi?\n",
    "answer": "0,10,20,30,40",
    "noAnswer1": " 10,20,30,40,50;",
    "noAnswer2": "10,20,30,40;",
    "noAnswer3": "0,10,20,30,50;"
  },
  {
    "question": "int s=-1;\nfor (int a=0; a<10; a++) {s+=a;}\ncout<< s <<endl;\nDastur qismida qanday natija chiqariladi?\n",
    "answer": 44,
    "noAnswer1": 45,
    "noAnswer2": 46,
    "noAnswer3": "hech nima chiqmaydi"
  },
  {
    "question": " Length() funksiyasining vazifasini aniqlang.",
    "answer": "String tipidagi satr uzunligini aniqlaydi.",
    "noAnswer1": "Char tipidagi satr uzunligini aniqlaydi.",
    "noAnswer2": "C) Bunday funksiya mavjud emas.",
    "noAnswer3": " Satr uzunligini aniqlaydi."
  },
  {
    "question": "Massivni e’lon qilishda massiv indeksi qanday belgi ostida bo’ladi?",
    "answer": "[…]",
    "noAnswer1": "{…}",
    "noAnswer2": "(…) ",
    "noAnswer3": "|….|"
  },
  {
    "question": "String a(\"yaxshi\");\nString b(\"kun\");\nString c=a+b;\nNatija ?\n",
    "answer": "\"yaxshikun\"",
    "noAnswer1": "\"yaxshi+kun\";",
    "noAnswer2": " \"a+b\";",
    "noAnswer3": "\"yaxshi kun\""
  },
  {
    "question": "Ixtiyoriy  funksiyadan  chiqish  uchun….xizmatchi   so’zi  ishlatiladi.",
    "answer": "return,",
    "noAnswer1": "main;",
    "noAnswer2": "void;",
    "noAnswer3": "{};"
  },
  {
    "question": "belgili   tipdagi  malumotlarni qabul  qilib, butun  tipdagi  malumot qaytaruvchi  funksiyani  toping?",
    "answer": "int son(char a )",
    "noAnswer1": "char son(Int a )",
    "noAnswer2": "float son(char a )",
    "noAnswer3": "string son(Int a );"
  },
  {
    "question": "string a=”yakuniy nazorat”; int s=a.length(); s=?",
    "answer": "S=15,",
    "noAnswer1": " S=14;",
    "noAnswer2": "S=13;",
    "noAnswer3": " S=12;"
  },
  {
    "question": "Xotiradan sakkiz bayt joy egallaydigan butun qiymatli o’zgaruvchini ko’rsating?",
    "answer": " double a",
    "noAnswer1": "long long a;",
    "noAnswer2": " long double a;",
    "noAnswer3": "int a;"
  },
  {
    "question": "Kvadrat massiv deb qanday massivlarga aytiladi?",
    "answer": "ustunlar va satrlar soni teng bo’lgan massivga.",
    "noAnswer1": "faqat bir xil elementdan tashkil topgan massivga;",
    "noAnswer2": "ustunlar soni satrlar sonidan ko’p bo’lgan massivga;",
    "noAnswer3": "satrlar soni ustunlar sonidan ko’p bo’lgan massivga;"
  },
  {
    "question": "Noto’g’ri kiritilgan ikki o’lchovli massivni aniqlang?",
    "answer": "int a[2][3]={1,2,3,4,5,6,4}:",
    "noAnswer1": " int k[2][2]={1,2,3,4} ;   ",
    "noAnswer2": "int a[3][5];",
    "noAnswer3": "int k[2][3]={{0,1,2},{3,4,5}};"
  },
  {
    "question": "Quyidagi massivda nechta element qatnashgan int k[3][4];",
    "answer": 12,
    "noAnswer1": 4,
    "noAnswer2": 3,
    "noAnswer3": 7
  },
  {
    "question": "C++ tilida simvolli massivlar qanday e’lon qilinadi?",
    "answer": "char a[10].",
    "noAnswer1": "string h[5];",
    "noAnswer2": "int a[9];",
    "noAnswer3": "float  a[5];"
  },
  {
    "question": "Ro’hat qanday turlarga bo’linadi?",
    "answer": "2 ta bog’langan va bog’lanmagan;",
    "noAnswer1": "2 ta tarmoqlangan va tarmoqlanmagan;",
    "noAnswer2": " 3 qo’shilgan, qo’shilmagan,bog’liqli ;",
    "noAnswer3": "T.j.y;"
  },
  {
    "question": "Stek , dek va navbatlar qaysi ro’yhat turiga misol bo’ladi?",
    "answer": "bog’lanmagan.;",
    "noAnswer1": "bog’langan;",
    "noAnswer2": "tarmoqlangan;",
    "noAnswer3": "tarmoqlanmagan;"
  },
  {
    "question": "FIFO navbat ko’rinishining ma’nosi nima?",
    "answer": "Birinchi kelgan birinchi ketadi,",
    "noAnswer1": "Ohirgi kelgan birinchi ketadi;",
    "noAnswer2": "Birinchi kelgan ohiri ketadi;",
    "noAnswer3": "T.J.Y;"
  },
  {
    "question": "Ma’lumotlar bazalarining tuzilmasi bo’yicha adabiyotlarda yo’naltirilgan\ngraf ko’rinishiga ega ma’lumotlar modeli nima deb ataladi?\n",
    "answer": "tarmoq.",
    "noAnswer1": "graf;",
    "noAnswer2": "ro’yhat;",
    "noAnswer3": "daraxt;"
  },
  {
    "question": "…… ba’zi cheklovlarga ega grafdan iborat, ya’ni bu tsikllarga ega\nbo’lmagan yo’naltirilgan grafdir.Nuqtalar o’rniga keraklisini qo’ying;\n",
    "answer": "Daraxt:",
    "noAnswer1": "graf;",
    "noAnswer2": "ro’yhat;",
    "noAnswer3": "tarmoq;"
  },
  {
    "question": " Jadval bu …. .Gapni davom ettiring:",
    "answer": "har bir elementi kalitning ma’lum qiymati bilan tavsiflanadigan\nva elementlaridan erkin foydalanish kalit bo’yicha amalga oshiriladigan\nma’lumotlarning chiziqli tuzilmasidir.\n",
    "noAnswer1": " ba’zi cheklovlarga ega grafdan iborat, ya’ni bu tsikllarga ega\nbo’lmagan yo’naltirilgan grafdir;\n",
    "noAnswer2": "Ma’lumotlar bazalarining tuzilmasi bo’yicha adabiyotlarda yo’naltirilgan\ngraf ko’rinishiga ega ma’lumotlar modeli;\n",
    "noAnswer3": "Muayyan sinfga oid ko’plab obyektlarni\nta’riflovchi yozuv;\n"
  },
  {
    "question": "…… - bu qiymati tegishli elementning massivdagi joyini\naniqlaydigan butun sondir. Nuqtalar o’rniga kerakli so’zni qo’ying.\n",
    "answer": "Indeks.",
    "noAnswer1": " Kodlash;",
    "noAnswer2": "Shifr;",
    "noAnswer3": "Tartib;"
  },
  {
    "question": "Bir o’lchamli massiv nima deb ataladi?",
    "answer": "vector:",
    "noAnswer1": "graf;",
    "noAnswer2": "daraxt;",
    "noAnswer3": "chiziqli massiv;"
  },
  {
    "question": "Son, liter, matn, belgi va yanada murakkab tuzilmaga ega bo’lgan ketma-ketliklar qanday ko’rinishda bo’ladi?",
    "answer": "ro’yxatlar va daraxtlar ko’rinishidagi \nshakllardan iborat bo’ladi,\n",
    "noAnswer1": "faqat ro’yhatlar ko’rinishida;",
    "noAnswer2": "faqat daraxtlar ko’rinishida bo’ladi;",
    "noAnswer3": "faqat graflar ko’rinishida bo’ladi;"
  },
  {
    "question": "Strukturalarni e’lon qilish uchun qaysi kalit so’z ishlatiladi?",
    "answer": "struct,",
    "noAnswer1": "class;",
    "noAnswer2": "void;",
    "noAnswer3": "char;"
  },
  {
    "question": "Dasturchi tomonidan ixtiyoriy kiritilgan mavjud tiplar asosida\nyaratilgan strukturalangan toifa hisoblanadi?\n",
    "answer": "Class.",
    "noAnswer1": "struct;",
    "noAnswer2": "void;",
    "noAnswer3": "char;"
  },
  {
    "question": "Agar kalitlar ma‟lumotlar jadvalidan ajratib olinib alohida fayl\nsifatida saqlansa, u holda bunday kalitlar … kalitlar deyiladi. . Nuqtalar o’rniga kerakli so’zni qo’ying.\n",
    "answer": "tashqi",
    "noAnswer1": "ichki;",
    "noAnswer2": " tayyor;",
    "noAnswer3": " mos kalitlar;"
  },
  {
    "question": "Agar kalitlar ma’lumotlar jadvalidan ajratib olinib yozuvning bir maydoni sifatida jadvalda saqlansa … kalit deyiladi. Nuqtalar o’rniga kerakli so’zni qo’ying.",
    "answer": "ichki",
    "noAnswer1": "tashqi;",
    "noAnswer2": "tayyor;",
    "noAnswer3": "mos kalitlar;"
  },
  {
    "question": "Kalitni berilgan argument bilan mosligini aniqlovchi algoritmga berilgan\nargument bo’yicha … deb ataladi. Nuqtalar o’rniga kerakli so’zni qo’ying.\n",
    "answer": "qidiruv",
    "noAnswer1": "tartib",
    "noAnswer2": "saralash",
    "noAnswer3": "tanlash"
  },
  {
    "question": "Ma’lumotlar tuzilmasi va algoritmi fanida saralashning necha turi mavjud?",
    "answer": 2,
    "noAnswer1": 3,
    "noAnswer2": 4,
    "noAnswer3": 5
  },
  {
    "question": "Ichki saralash nima?",
    "answer": "operativ hotiradagi saralash.",
    "noAnswer1": "tashqi hotiradagi saralash;",
    "noAnswer2": "ichki ma’lumotlarni turlicha saralash;",
    "noAnswer3": "tashqi ma’lumotlarni turlicha saralash;"
  },
  {
    "question": "Tashqi saralash nima?",
    "answer": "tashqi hotiradagi saralash,",
    "noAnswer1": " operativ hotiradagi saralash;",
    "noAnswer2": "ichki ma’lumotlarni turlicha saralash;",
    "noAnswer3": "tashqi ma’lumotlarni turlicha saralash;"
  },
  {
    "question": "To’g’ridan to’g’ri qo’shish usuli?",
    "answer": "insertion.;",
    "noAnswer1": "selection;",
    "noAnswer2": "exchange",
    "noAnswer3": "nothing"
  },
  {
    "question": "To’g’ridan to’g’ri tanlash usuli?",
    "answer": "insertion.;",
    "noAnswer1": "selection;",
    "noAnswer2": "exchange",
    "noAnswer3": "nothing"
  },
  {
    "question": "To’g’ridan to’g’ri almashtirish usuli?",
    "answer": "exchange",
    "noAnswer1": "insertion",
    "noAnswer2": "selection",
    "noAnswer3": "nothing"
  },
  {
    "question": ".Elementlar o’zidan keyingi  elment bilan bog’langan bo’lsa bunday ro’yhatlarga qanday ro’yhatlar deyiladi?",
    "answer": "bir bog'lamli",
    "noAnswer1": "ikki boglamli",
    "noAnswer2": "uch bog'lamli",
    "noAnswer3": "bog'lanmagan"
  },
  {
    "question": "Elementlar o’zidan oldingi va keyingi elment bilan bog’langan bo’lsa bunday ro’yhatlarga qanday ro’yhatlar deyiladi?",
    "answer": "ikki bog'lamli",
    "noAnswer1": "bir bog'lamli",
    "noAnswer2": "uch bog'lamli",
    "noAnswer3": "bog'lanmagan"
  },
  {
    "question": "Ro’yhatning har bir elementi shu elementni identifikatsiyalash uchun nimaga ega bo’lishi kerak?",
    "answer": "kalitga",
    "noAnswer1": "malumotga",
    "noAnswer2": "tuzilmaga",
    "noAnswer3": "bog'lamaga"
  },
  {
    "question": "Barg tuguning balandligi nechaga teng?",
    "answer": 0,
    "noAnswer1": -1,
    "noAnswer2": -2,
    "noAnswer3": 1
  },
  {
    "question": "Bo’sh qism daraxtining balandligi nechga teng?",
    "answer": -1,
    "noAnswer1": 0,
    "noAnswer2": 1,
    "noAnswer3": -2
  },
  {
    "question": "Agar grafda boshi va ohiri bitta tugunda tutashadigan qirra mavjud bo’lsa, unga qanday qirra deyiladi?",
    "answer": "irmoqli",
    "noAnswer1": "o’suvchi;",
    "noAnswer2": " kamayuvchi;",
    "noAnswer3": "to’siqli;"
  },
  {
    "question": " ……- bu boshi va ohiri tutashuvchi tugundan iborat yo’l hisoblanadi. Nuqlar o’rniga kerakli so’zni tanlang:",
    "answer": "Halqa(cycle),",
    "noAnswer1": "Doira;",
    "noAnswer2": "Tugun darajasi (vertex degree);",
    "noAnswer3": "t.j y;"
  },
  {
    "question": "…… bu tugundan chiquvchi yoylar soni hisoblanadi. Nuqlar o’rniga kerakli so’zni tanlang:",
    "answer": "Tugun darajasi (vertex degree)",
    "noAnswer1": "Doira;",
    "noAnswer2": "Halqa(cycle);",
    "noAnswer3": "t.j y;"
  },
  {
    "question": "Ihtiyoriy grafda toq tugunlar soni qanday bo’ladi?",
    "answer": "juft",
    "noAnswer1": "toq",
    "noAnswer2": "taqsimlangan",
    "noAnswer3": "taqsimlanmagan"
  },
  {
    "question": "Tugun darajalari toq qiymatli bo’lsa qanday tugunlar deyiladi?",
    "answer": "toq tugunlar.",
    "noAnswer1": "juft tugunlar;",
    "noAnswer2": "boilnmas",
    "noAnswer3": "bolinadigan"
  },
  {
    "question": "Ixtiyoriy ma’lumot yoki tuzilma elementi bir-biridan asosiysi nimasi bilan farq qiladi?",
    "answer": "kaliti",
    "noAnswer1": "qiymati",
    "noAnswer2": "soni",
    "noAnswer3": "o'lachami"
  },
  {
    "question": "Kalit necha xil bo’ladi?",
    "answer": 2,
    "noAnswer1": 3,
    "noAnswer2": 4,
    "noAnswer3": 5
  },
  {
    "question": "Kalitni xillari tog’ri ko’rsatilgan javobni tanlang?",
    "answer": "birlamchi va ikkilamchi",
    "noAnswer1": "tasdiqlanadigan va tasdiqlanmaydigan;",
    "noAnswer2": " turlangan va turlanmagan;",
    "noAnswer3": "tarmoqli va tarmoqsiz;"
  },
  {
    "question": " Birlamchi kalit ….? ",
    "answer": "Takrorlanmaydi,noyob,",
    "noAnswer1": "takrorlanadi, ommabop;",
    "noAnswer2": "qaytalanadi;",
    "noAnswer3": "t.j.y;"
  },
  {
    "question": "Ikkilamchi kalit…..?",
    "answer": "takrorlanadigan kalit,",
    "noAnswer1": "Takrorlanmaydi,noyob;",
    "noAnswer2": "qaytalanadi;",
    "noAnswer3": "t.j.y"
  },
  {
    "question": "“bo’lib ol va egalik qil” tamoyilining yaqqol misol bo’lgan saralash algoritmi?",
    "answer": "quicksort:",
    "noAnswer1": "insertionsort;",
    "noAnswer2": "bubblesort;",
    "noAnswer3": "selectionsort;"
  },
  {
    "question": "Agar daraxtning maksimal chiqish darajasi qanchaga teng bo’lsa , u holda bunday daraxt binary daraxt deyiladi",
    "answer": 2,
    "noAnswer1": 3,
    "noAnswer2": 4,
    "noAnswer3": 5
  },
  {
    "question": "Mantiqiy operatsiyalar  toifasidagi o’zgaruvchining qabul\nqiladigan qiymat oralig’i qanday?\n",
    "answer": "true, false:",
    "noAnswer1": 1.1,
    "noAnswer2": "1,-1",
    "noAnswer3": 1
  },
  {
    "question": "…. - ingliz tilidan olingan bo’lib 2 ta chetga ega navbat degan ma’noni bildiradi. Nuqlar o’rniga kerakli so’zni tanlang:",
    "answer": "Dek.",
    "noAnswer1": "Stek;",
    "noAnswer2": "Fifo;",
    "noAnswer3": "Lifo;"
  },
  {
    "question": "Daraxtda shunday bitta element borki, unga boshqa elementlardan murojaat\nyo’q. Bu element nima deyiladi;\n",
    "answer": "daraxt ildizi",
    "noAnswer1": "tuguni;",
    "noAnswer2": "shohi;",
    "noAnswer3": "bargi;"
  },
  {
    "question": "int strlen (satr); ning vazifasini toping.",
    "answer": "Char tipidagi satr uzunligini qaytaradi",
    "noAnswer1": " String tipidagi satr uzunligini qaytaradi;",
    "noAnswer2": " Nusxa olish operatori;",
    "noAnswer3": " To’g’ri javob yo’q;"
  },
  {
    "question": "S.substr(n1,n2) ning vazifasini toping.",
    "answer": "S.substr(n1,n2) ning vazifasini toping.",
    "noAnswer1": "S satrning n1 elementidan boshlab\n  n2 ta elementini o’chirib tashlash;\n",
    "noAnswer2": " S satrning uzunligini aniqlash;",
    "noAnswer3": " Tog’ri javob yo’q;"
  },
  {
    "question": "String tipi uchun satr uzunligini aniqlovchi funksiyani toping.",
    "answer": " Length(),",
    "noAnswer1": "Strlen();",
    "noAnswer2": " Erase();",
    "noAnswer3": " Substr();"
  },
  {
    "question": "String s=”dasturlash”;  String a=s.substr(0,4); a=?",
    "answer": "a=”dast”",
    "noAnswer1": " a=”das”;",
    "noAnswer2": " a=”dastu”;",
    "noAnswer3": " a=”dastdastdastdast”;"
  },
  {
    "question": "int a=s.find (“a”); funksiyani ma’nosi?",
    "answer": "S satrdan birinchi uchragan “a”ni nomerini qaytaradi.",
    "noAnswer1": "S satrdan oxirgi uchragan “a”ni \nnomerini qaytaradi;\n",
    "noAnswer2": "S satrning uzunligini qaytaradi;",
    "noAnswer3": " S satrdan “a”larni sanab chiqadi;"
  },
  {
    "question": "char[50]=”qator”;  Satr oxiri qanday belgi bilan yakunlanadi.",
    "answer": "“\\0” ",
    "noAnswer1": "to’g’ri javob yo’q;",
    "noAnswer2": "probel bilan;",
    "noAnswer3": "“r”;"
  },
  {
    "question": "cin.getline ( <satr>, <satr uzunligi>); satr uzunligi uchun qaysi funksiyadan foydalanish mumkin.",
    "answer": "sizeof(<satr>),",
    "noAnswer1": "erase();",
    "noAnswer2": "substr();",
    "noAnswer3": "find();"
  },
  {
    "question": "Fayl nima ?",
    "answer": "Malumotlarni saqlash uchun tashqi \nxotiraning nomlangan qismi\n",
    "noAnswer1": "Baytlar yig`indisi;",
    "noAnswer2": "Dasturda ishlashni osonlashtirish \nuchun kerakli funksiya;\n",
    "noAnswer3": "A va C javob to`g`ri;"
  },
  {
    "question": "Qanday fayllar binar fayllar deyiladi ?",
    "answer": "Har xil obyektlarni ifodalovchi \nbaytlar ketma –ketligi.\n",
    "noAnswer1": "Bir xil obyektlarni ifodalovchi \nbaytlar ketma –ketligi;\n",
    "noAnswer2": "Faylning aynan bir joyga yo`naltirilgani;",
    "noAnswer3": " Aynan bir malumot kiritish yoki\n chiqarish uchun mo`jallangan faylga;\n"
  },
  {
    "question": "funksiyalar qiymat qaytarishiga  qarab  necha  turli  bo’ladi?",
    "answer": 2,
    "noAnswer1": 4,
    "noAnswer2": 3,
    "noAnswer3": "turi yoq"
  },
  {
    "question": "funksiya tanasida  olingan  o’zgaruvchilar  qachogacha  amal  qiladi?",
    "answer": "berilgan nuqtadan  blokkacha.",
    "noAnswer1": "berilgan  nuqtadan  dastur  oxirgacha;",
    "noAnswer2": "berilgan  nuqtadan  biz  xohlagan  joygacha;",
    "noAnswer3": "faqat  blok tashqarisida;"
  },
  {
    "question": "dasturda  qaysi  funksiya  bo’lishi  shart?",
    "answer": "main.",
    "noAnswer1": "int;",
    "noAnswer2": "void;",
    "noAnswer3": "return"
  },
  {
    "question": "int katta(float  a) bu  funksiya  qanday  qiymat  qabul   qiladi  va  qanday  qiymat  qaytaradi?",
    "answer": "haqiqiy,butun",
    "noAnswer1": "butun,haqiqiy;",
    "noAnswer2": "belgi,haqiqiy; ",
    "noAnswer3": "haqiqiy,haqiqiy;"
  },
  {
    "question": "belgili   tipdagi  malumotlarni qabul  qilib, butun  tipdagi  malumot qaytaruvchi  funksiyani  toping?",
    "answer": "int son(char a )",
    "noAnswer1": "char son(Int a );",
    "noAnswer2": "float son(char a );",
    "noAnswer3": "string son(Int a );"
  },
  {
    "question": "dasturining  asosiy  qismida  va  funksiyada   faol  \nqo’llaniluvchi  o’zgaruvchilar  nima deyiladi?\n",
    "answer": "global o’zgaruvchlar.",
    "noAnswer1": "local  o’zgaruvchilar;",
    "noAnswer2": "qatiy  o’zgarmaslar;",
    "noAnswer3": "T.J.Y;"
  },
  {
    "question": "funksiya  tanasida  faol  o’zgaruvchilar   nima  deb  ataladi?",
    "answer": "local o’zgaruvchlar:",
    "noAnswer1": "global  o’zgaruvchilar;",
    "noAnswer2": "qatiy  o’zgarmaslar;",
    "noAnswer3": "T.J.Y;"
  },
  {
    "question": "Butun qiymat qabul qiluvchi tiplarni ko`rsating",
    "answer": "short, int, long long.",
    "noAnswer1": "float, double, long double;",
    "noAnswer2": " float, double, long double, \nshort, int, long long;\n",
    "noAnswer3": "long, float, int;"
  },
  {
    "question": "Dasturda global o’zgaruvchilar xotiraning qaysi qismida saqlanadi?",
    "answer": " Global",
    "noAnswer1": " Stekli;",
    "noAnswer2": " Registrli;",
    "noAnswer3": " Dinamik taqsimlanuvchi bo’sh;"
  },
  {
    "question": "Dasturda local o’zgaruvchilar xotiraning qaysi qismida saqlanadi?",
    "answer": "Stekli:",
    "noAnswer1": " Global;",
    "noAnswer2": "Registrli;",
    "noAnswer3": " Dinamik taqsimlanuvchi bo’sh;"
  },
  {
    "question": "Dasturda ichki xizmatchi ma’lumotlari xotiraning qaysi qismida saqlanadi?",
    "answer": " Registrli",
    "noAnswer1": " Global;",
    "noAnswer2": " Stekli;",
    "noAnswer3": "Dinamik taqsimlanuvchi bo’sh;"
  },
  {
    "question": "Massiv elementiga nima orqali murojaat qilinadi?",
    "answer": "indeksi orqali,   ",
    "noAnswer1": " tipi orqali; ",
    "noAnswer2": "kodi orqali;",
    "noAnswer3": "funksiya orqali;"
  },
  {
    "question": "Agar massiv elementiga qaraganda kamroq element berilgan bo’lsa natija qanday chiqadi?",
    "answer": "berilgan elementlar va qolgan elementlarni 0 lar bilan.",
    "noAnswer1": " berilgan elementlar va qolgan elementlarni\n o’zi istagan qiymat bilan to’ldiradi;\n",
    "noAnswer2": "to’ldiradi berilgan elementlarni o’zigina chiqadi;",
    "noAnswer3": "Dasturda xatolik deb chiqaradi;"
  },
  {
    "question": "Massivlarda Indeks sifatida qanday ifodalardan foydalanish mumkin?`",
    "answer": "char",
    "noAnswer1": "int",
    "noAnswer2": "float",
    "noAnswer3": "barcha javob to'gri"
  },
  {
    "question": "Massivlarning qanday turlari mavjud?",
    "answer": "dinamik va statik",
    "noAnswer1": "statik massivlar",
    "noAnswer2": "dinamik massivlar",
    "noAnswer3": "konvaersativ massivlar"
  },
  {
    "question": "Ro`yxat elementlari soni n ga teng . Ro`yxat nimasi deyiladi.",
    "answer": "uzunligi ",
    "noAnswer1": "o'lchami ",
    "noAnswer2": "tasnifi",
    "noAnswer3": "t.j.y"
  },
  {
    "question": "Ro`yxat elementlari soni n ga teng . Ro`yxat nimasi deyiladi.",
    "answer": "bo'sh ",
    "noAnswer1": "to'la",
    "noAnswer2": "tarmoqli",
    "noAnswer3": "tarmoqlanmagan;"
  },
  {
    "question": "Chiziqsiz ma’lumotlar tuzilmasi deb nimaga aytiladi?",
    "answer": "Agar tuzilmani tashkil etuvchi elementlar qat’iy tartiblanmagan bo’lsa.",
    "noAnswer1": " Agar tuzilmani tashkil etuvchi elementlar qat’iy tartiblangan bo’lsa.",
    "noAnswer2": " Agar tuzilmani tashkil etuvchi elementlar noqat’iy tartiblanmagan bo’lsa.",
    "noAnswer3": "Agar tuzilmani tashkil etuvchi elementlar noqat’iy tartiblangan bo’lsa."
  },
  {
    "question": "Chiziqsiz ma’lumotlar tuzilmasida elementlar orasidagi munosabatlar qanday bo’lishi mumkin?",
    "answer": "   Ixtiyoriy",
    "noAnswer1": "    Cheksiz",
    "noAnswer2": "Chekli",
    "noAnswer3": "  Ixtiyoriy va cheksiz"
  },
  {
    "question": "Chiziqli tuzilmani belgisini nechta faktga ajratish mumkin?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "6",
    "noAnswer3": "2"
  },
  {
    "question": "Chiziqsiz ma’lumotlar tuzilmasi klassifikatsiyasi qaysilar?",
    "answer": "Ro’yxatlar,graflar,daraxtlar",
    "noAnswer1": "Ro’yxatlar,ma’lumotlar",
    "noAnswer2": "Graflar,daraxtlar,vektorlar",
    "noAnswer3": "Vektorlar,ro’yxatlar"
  },
  {
    "question": "Ro’yxatlar turlari qaysilar?",
    "answer": "Chiqsiz 2 bog’lamli,ko’p bog’lamli",
    "noAnswer1": "Chiqsiz ko’p bog’lamli,ko’p bog’lamsiz",
    "noAnswer2": " Chiqli bog’lamli,ko’p bog’lamli",
    "noAnswer3": "  Chiziqli  bog’lamsiz,ko’p bog’lamli"
  },
  {
    "question": "Daraxt turlari qaysilar?",
    "answer": "Binar daraxtlar,ko’p o’lchamli daraxtlar",
    "noAnswer1": "Unar daraxtlar,ko’p o’lchamli daraxtlar",
    "noAnswer2": "  Binar daraxtlar,cheksiz  o’lchamli daraxtlar",
    "noAnswer3": "Unar daraxtlar,chekli  o’lchamli daraxtlar "
  },
  {
    "question": "Graf turlari qaysilar?",
    "answer": "Orgraf,gipergraf,graf",
    "noAnswer1": "Chiziqli graf,orgraf ",
    "noAnswer2": "Gipergraf,Chiziqsiz graf",
    "noAnswer3": "Chiziqli va chiziqsiz"
  },
  {
    "question": "Ixtiyoriy ko’rinishdagi chiziqsiz ma’lumotlar tuzilmasini necha xil usulda tasvirlash mumkin?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "6",
    "noAnswer3": "7"
  },
  {
    "question": "Ixtiyoriy ko’rinishdagi chiziqsiz ma’lumotlar tuzilmasini usullari qaysilar?",
    "answer": "Qo’shma matritsa,ko’rsatkichli bog’langan ro’yxat",
    "noAnswer1": "ko’rsatkichsiz ro’yxatlar,matritsalar",
    "noAnswer2": "  matritsalar,ro’yxatlar",
    "noAnswer3": " Qo’shma matritsa,ro’yxatlar"
  },
  {
    "question": "Ko’p bog’lamli ro’yxatlarda bo’shagan elementni utilizatsiya qilish necha usuldan iborat?",
    "answer": "2",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "5"
  },
  {
    "question": "Ko’p bog’lamli ro’yxatlarda bo’shagan elementni utilizatsiya qilish usullari qaysilar?",
    "answer": "hisoblagichlar,keraksiz elementlarni yig’ish usullari",
    "noAnswer1": "  hisoblagichlar,kerakli elementlarni yig’ish usullari",
    "noAnswer2": "qo’shish,keraksiz elementlarni yig’ish usullari",
    "noAnswer3": "hisoblagichlar,qo’shish usullari"
  },
  {
    "question": "Ko’p bo’g’lamli tuzilmalarni amalga oshirish natijasida nima hosil bo’ladi?",
    "answer": "To’r",
    "noAnswer1": "ro’yxatlar",
    "noAnswer2": "axborotlar",
    "noAnswer3": "to’r, ro’yxatlar"
  },
  {
    "question": "Rekursiya nima?",
    "answer": "tadqiq qilinayotgan jarayonni aniqlash mazkur jarayonga murojaat qilish orqali amalga oshiriladi",
    "noAnswer1": " tadqiq qilinayotgan jarayonni aniqlash mazkur jarayonga qaytish orqali amalga oshiriladi",
    "noAnswer2": " tadqiq qilinayotgan jarayonni aniqlash shu jarayonni takrorlash orqali amalga oshiriladi",
    "noAnswer3": "to’g’ri javob yo’q"
  },
  {
    "question": "Rekursiv algoritm nima?",
    "answer": "bu algoritmni aniqlashda o’ziga bevosita va bilvosita murojaat qilishdir",
    "noAnswer1": " bu algoritmni aniqlashda o’ziga bevosita murojaat qilishdir ",
    "noAnswer2": "  bu algoritmni aniqlashda o’ziga  bilvosita murojaat qilishdir",
    "noAnswer3": " to’g’ri javob yo’q"
  },
  {
    "question": "Rekursiv triada nechta qismdan iborat?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "2",
    "noAnswer3": "5"
  },
  {
    "question": "Rekursiv triada asoslari qaysilar?",
    "answer": "  parametrizatsiya qilish,rekursiya bazasi,dekompozitsiya",
    "noAnswer1": " parametrizatsiya qilish,rekursiya bazasi,dekompozitsiya",
    "noAnswer2": " rekursiya bazasi,dekompozitsiya",
    "noAnswer3": " to’g’ri javob yo’q"
  },
  {
    "question": "Daraxt nima?",
    "answer": "Chiziqsiz bog’langan ma’lumotlar tuzilmasidir",
    "noAnswer1": "  Chiziqli bog’langan ma’lumotlar tuzilmasidir",
    "noAnswer2": " Chiziqsiz bog’lanmagan ma’lumotlar tuzilmasidir",
    "noAnswer3": " Chiziqli bog’lanmagan ma’lumotlar tuzilmasidir"
  },
  {
    "question": "Daraxt baalandligi nima?",
    "answer": "Daraxt bosqichlari soni",
    "noAnswer1": "daraxt ildizlari",
    "noAnswer2": "daraxt barglari",
    "noAnswer3": ".tog’ri javob yo’q"
  },
  {
    "question": "Tugundan chiqish darajasi nima?",
    "answer": "Daraxt tugunlaridan chiqayotgan shoxlar soni",
    "noAnswer1": "daraxt shoxlari",
    "noAnswer2": "daraxt barglari soni",
    "noAnswer3": "daraxt tanasi"
  },
  {
    "question": "Daraxt klassifikatsiyasi necha turdan iborat?",
    "answer": "4",
    "noAnswer1": "5",
    "noAnswer2": "2",
    "noAnswer3": "7"
  },
  {
    "question": "To’liq binar daraxt nima?",
    "answer": "chiqish darajasi 0 yoki 2 bo’lsa",
    "noAnswer1": " chiqish darajasi 1 yoki 2 bo’lsa",
    "noAnswer2": "chiqish darajasi 0 yoki 1 bo’lsa",
    "noAnswer3": " to’g’ri javob yo’q"
  },
  {
    "question": "m-tartibli daraxt nima?",
    "answer": "Agar maksimal chiqish darajasi m bo`lsa",
    "noAnswer1": " Agar maksimal chiqish darajasi nol bo`lsa ",
    "noAnswer2": " Agar maksimal chiqish darajasi n bo`lsa",
    "noAnswer3": " Agar maksimal chiqish darajasi 1 bo`lsa"
  },
  {
    "question": "To`liq m-tartibli daraxt nima?",
    "answer": "Agar chiqish darajasi 0 yoki m bo’lsa",
    "noAnswer1": "chiqish darajasi 0 yoki 2 bo’lsa",
    "noAnswer2": "chiqish darajasi 0 yoki 1 bo’lsa",
    "noAnswer3": "chiqish darajasi 0 yoki n bo’lsa"
  },
  {
    "question": "Binar daraxt deb nimaga aytiladi?",
    "answer": "Agar maksimal chiqish darajasi 2 bo`lsa",
    "noAnswer1": "Agar maksimal chiqish darajasi 1 bo`lsa",
    "noAnswer2": "Agar maksimal chiqish darajasi 0 bo`lsa",
    "noAnswer3": "Agar maksimal chiqish darajasi m bo`lsa"
  },
  {
    "question": "EXM xotirasida daraxtni ifodalashning eng qulay usuli ",
    "answer": "Uni bog`langan ro`yxatlar ko`rinishida ",
    "noAnswer1": "Uni bog`lanmagan ro`yxatlar ko`rinishida ",
    "noAnswer2": "Uni ro`yxatlar ko`rinishida ",
    "noAnswer3": "Uni bog`lamli ro`yxatlar ko`rinishida "
  },
  {
    "question": "Dinamik malumotlar tuzilmasi nechta xususiyatga ega?",
    "answer": " 2 turga",
    "noAnswer1": " 5 turga ",
    "noAnswer2": "4 turga ",
    "noAnswer3": "7 turga"
  },
  {
    "question": "Dastur bajarilayotganda vujudga keladigan yoki o`lchamlari dastur bajarilishi mobaynida aniqlanadigan ob`yektlar qanday ob`yektlar deyiladi?",
    "answer": "Dinamik",
    "noAnswer1": "Statik",
    "noAnswer2": "Massiv",
    "noAnswer3": " Mantiqiy"
  },
  {
    "question": "Agar ro`yxat elementlari ko`rsatgichlar orqali bog`langan bo`lsa, u holda bunday tuzilmaga qanday ro`yxat deb ataladi?",
    "answer": "  Bog`langan ro`yxat",
    "noAnswer1": "Bog`lanmagan ro`yat",
    "noAnswer2": "Umumiy ro`yxat",
    "noAnswer3": "Umumlashgan ro`yxat"
  },
  {
    "question": "Agar ro`yxatning elementlari ko`pi bilan tuzilmaning  m ta elementi bilan o`zaro bog`langan bo`lsa……",
    "answer": " M bog`lamli deyiladi",
    "noAnswer1": "N bog`lamli deyiladi",
    "noAnswer2": "A bog`lamli deyiladi",
    "noAnswer3": "M-n bog`lamli deyiladi"
  },
  {
    "question": "Agar bog`langan ro`yxat elementlari mavjud bo`lmasa, u holda bunday ro`yxat … deb ataladi.",
    "answer": "Bo`sh ro`yxat",
    "noAnswer1": "To`liq ro`txat",
    "noAnswer2": "To`liqsiz ro`yxat",
    "noAnswer3": "Too`ldirilgan ro`yxat"
  },
  {
    "question": "Mantiqiy tasvirlash nuqtai nazaridan ro`yxatlar necha turga bo`linadi?",
    "answer": "2 ga ",
    "noAnswer1": "3 ga",
    "noAnswer2": " 4 ga",
    "noAnswer3": "5 ga"
  },
  {
    "question": "Mantiqiy tasvirlash nuqtai nazaridan ro`yxatlar turini sanang?",
    "answer": "Chiziqli va chiziqsiz",
    "noAnswer1": "Faqat chiziqli",
    "noAnswer2": "Faqat chiziqsiz",
    "noAnswer3": "Turi mavjud emas"
  },
  {
    "question": "Chiziqli ro`yxatlarga qaysilar kiradi?",
    "answer": " 1 va 2 bog`lamli",
    "noAnswer1": "2 bog`lamli",
    "noAnswer2": "1 bog`lamli",
    "noAnswer3": "Ko`p bog`lamli "
  },
  {
    "question": "Chiziqsiz ro`yxatlarga qaysilar kiradi?",
    "answer": "Ko`p bog`lamli",
    "noAnswer1": "2 bog`lamli",
    "noAnswer2": "1 bog`lamli",
    "noAnswer3": "1 va 2 bog`lamli"
  },
  {
    "question": "Bog`langan ro`yxatlar ustida nacha xil amal bajarish mumkin?",
    "answer": "4 xil",
    "noAnswer1": "5 xil",
    "noAnswer2": "6 xil",
    "noAnswer3": "7 xil"
  },
  {
    "question": "Ro`yxatning istalgan elementini o`chirish mumkinmi?",
    "answer": "Mumkin",
    "noAnswer1": "Mumkin emas",
    "noAnswer2": "Faqat qo`shish mumkin",
    "noAnswer3": "Faqat qidirish mumkun"
  },
  {
    "question": "Bog`langan ro`yxatlar elementlarini chop qilish mumkini?",
    "answer": "Mumkin",
    "noAnswer1": "Mumkin emas",
    "noAnswer2": "Faqat qo`shish mumkin",
    "noAnswer3": "Faqat qidirish mumkun"
  },
  {
    "question": "Agar ro`yxat elementlari faqatgina bitta ko`rsatkichlar maydoniga ega bo`lsa, u holda bunday  tuzilmaga  …  yo`naltirilgan ro`yxat deb ataladi.",
    "answer": "Bir bog`lamli yoki ir tomanlama",
    "noAnswer1": "Faqat bir bog`lamli ",
    "noAnswer2": "Faqat bir tomonlama",
    "noAnswer3": "Ko`p bog`lamli"
  },
  {
    "question": "Royxat elementlariga murojat qanday amalga oshiriladi?",
    "answer": " Ro`yxat boshidan",
    "noAnswer1": "Ro`yxat oxridan",
    "noAnswer2": "Ro`yxat o`rtasidan",
    "noAnswer3": "Murojat qilib bo`lmaydi"
  },
  {
    "question": "Bir bog`lamli ro`yxat elementi nechta maydonga ega?",
    "answer": "2 ta",
    "noAnswer1": "3 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": "5 ta"
  },
  {
    "question": "Bir bog`lamli ro`yxat elementi maydonlarini sanang.",
    "answer": "Information va ko`rsatgich maydon",
    "noAnswer1": "Information maydon",
    "noAnswer2": "Ko`rsatgich maydon",
    "noAnswer3": "Maydon mavjud emas"
  },
  {
    "question": "LST nima?",
    "answer": "Ro`yxat boshiga ko`rsatgich",
    "noAnswer1": "Ro`yxat oxiriga ko`rsatgich",
    "noAnswer2": "Ro`yxat o`rtasiga ko`rsatgich",
    "noAnswer3": "Ro`yxat davomiga ko`rsatgich"
  },
  {
    "question": "Ro`yxat eng so`ngi elementining o`rsatgich maydoni bo`sh bo`lishi bu…?",
    "answer": "NIL",
    "noAnswer1": "LST",
    "noAnswer2": "NST",
    "noAnswer3": "MST"
  },
  {
    "question": "Elementni ro`yxatdan o`chirishning paskal tilida amalga oshirish to`g`ri  ko`rsatilgan qatorni ko`rsating.",
    "answer": "P:=Lst; X:=P^.Info; Lst:=P^.Next; Dispose(P);",
    "noAnswer1": "P:=Lst; X=P^.Info; Lst=P^.Next; Dispose(P);",
    "noAnswer2": "P:=Lst; X:=P^Info; Lst:=P^Next; Dispose(P);",
    "noAnswer3": "P:=Lst; X:=Info; Lst:=Next; Dispose(P);"
  },
  {
    "question": "Ikki bog`lamli ro`yxatning xar bir elementi nechta ko`rsatgichga ega?",
    "answer": "2 ta ",
    "noAnswer1": "3 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": "5 ta"
  },
  {
    "question": "Ikki bog`lamli ro`yxat ustida amallarni sanang.",
    "answer": "Ro`yxat elementini yaratish, qidirish, o`cherish, ko`rsatilgan joyiga elementini ko`yish.",
    "noAnswer1": "Ro`yxat elementini yaratish, ko`rsatilgan joyiga elementini ko`yish.",
    "noAnswer2": "Ro`yxat elementini yaratish, qidirish.",
    "noAnswer3": "Ro`yxat elementini qidirish,  ko`rsatilgan joyiga elementini ko`yish."
  },
  {
    "question": "Ixtiyoriy bir bo`g`inli ro`yxatni stek deb qarash mumkinmi?",
    "answer": "Mumkin",
    "noAnswer1": "Mumkin emes",
    "noAnswer2": "Ko`p bo`g`inli ro`yxatni",
    "noAnswer3": "Bunday amal yo`q"
  },
  {
    "question": "Qanday  ro`yxat oddiy bir bo`g`imli ro`yxatda eng so`ngi element ko`rsatgichiga ro`yxat boshi elementi o`rsatki chiqiymatini o`zlashtirish orqali xosil qilinadi.",
    "answer": "Xalqasimon bir bog`lamli",
    "noAnswer1": "Xalqasimon ikki bog`lmli",
    "noAnswer2": "Xalqasimon ko`p bog`lamli",
    "noAnswer3": "Aylana bir bog`lamli"
  },
  {
    "question": "Bog`langan ro`yxat elementining ko`rsatkichlari maydoni soni qanday bo`lishi mumkin?",
    "answer": "Bir nechta va turli xil",
    "noAnswer1": "Faqat bitta ",
    "noAnswer2": "Turli xil",
    "noAnswer3": "Bir nechta"
  },
  {
    "question": "Bog`langan ro`yxatlar eng ko`p qanday tuzilmalardan hisoblanadi?",
    "answer": "Dinamik",
    "noAnswer1": "Statik",
    "noAnswer2": "Umumiy",
    "noAnswer3": "Umumlashgan."
  },
  {
    "question": "Tugundan chiqayotgan shoxlar soni nimani belgilaydi",
    "answer": " Tugundan chiqish darajasini",
    "noAnswer1": "Daraxt balandligini",
    "noAnswer2": " Daraxt indeksatsiyasini",
    "noAnswer3": "Daraxtning bog’lanish bosqichlarini"
  },
  {
    "question": " Daraxt maksimal chiqish darajasi m-bo’lsa, u holda bunday daraxt qanday tartibli daraxt deyiladi?",
    "answer": "m-tartibli daraxt",
    "noAnswer1": " Binar daraxt",
    "noAnswer2": "To’liq m-tartibli daraxt",
    "noAnswer3": " to’liq binar daraxt"
  },
  {
    "question": " Daraxt chiqish darajasi 0 yoki m bo’lsa, u holda bunday daraxt qanday tartibli daraxt deyiladi?",
    "answer": " To’liq m-tartibli daraxt",
    "noAnswer1": "To’liq binar daraxt",
    "noAnswer2": " Binar daraxt",
    "noAnswer3": " M-tartibli daraxt"
  },
  {
    "question": "Daraxt maksimal chiqish darajasi 2 bo’lsa, u holda bunday daraxt qanday tartibli daraxt deyiladi",
    "answer": " Binar daraxt",
    "noAnswer1": "To’liq binar daraxt",
    "noAnswer2": " 2-tartibli daraxt",
    "noAnswer3": " 2 tartibli to’liq binar daraxt"
  },
  {
    "question": "Daraxt chiqish darajasi 0 yoki 2 bo’lsa, u holda bunday daraxt qanday tartibli daraxt deyiladi?",
    "answer": " To’liq binar daraxt",
    "noAnswer1": " Binar daraxt",
    "noAnswer2": "2-tartibli daraxt",
    "noAnswer3": "2 tartibli to’liq binar daraxt"
  },
  {
    "question": " Agar daraxtning maksimal chiqish darajasi 2 bo’lsa, bunday daraxt nima deb ataladi?",
    "answer": " Binar daraxt",
    "noAnswer1": "Indekslangan daraxt",
    "noAnswer2": " Binar rekursiya",
    "noAnswer3": " Juft bog’lami daraxt"
  },
  {
    "question": " Binar daraxtlarda ota o’g’illari bilan qanday bog’lanadi?",
    "answer": "Garizontal chiziq bilan",
    "noAnswer1": " Tog’ri chiziq bilan",
    "noAnswer2": "Vertical chiziq bilan",
    "noAnswer3": " Ixtiyoriy tarzda"
  },
  {
    "question": " Quyidagilardan qaysi biri rekursiv triadaga kirmaydi?",
    "answer": " Daraxtni asoslashtirish",
    "noAnswer1": " Rekursiya bazasi",
    "noAnswer2": " Parametrizatsiya qilish",
    "noAnswer3": " Dekompozitsiya"
  },
  {
    "question": " Daraxtning har bir tugunida katta o’g’ilga mos shoxidan tashqari barha shohlari kesib tashlanadi. Bunday holatda qaysi shox katta o’g’il vazifasida bo’ladi?",
    "answer": " Chetki chap shox",
    "noAnswer1": "Tugun pastidagi shox",
    "noAnswer2": "Eng pastki shox",
    "noAnswer3": " Chetki o’ng shox"
  },
  {
    "question": " Bu algoritmni aniqlashda o’ziga bevosita yoki bilvosita muroojat qilishdir. Qanday algoritm haqida gap ketmoqda?",
    "answer": " Rekursiv algaritm",
    "noAnswer1": " Stuctiv algoritm",
    "noAnswer2": " Classlar algorimi",
    "noAnswer3": " Navbatlar algoritmi"
  },
  {
    "question": " Saralash algoritmlari nechta tipga bo’linadi?",
    "answer": " 2 ta",
    "noAnswer1": " 3 ta",
    "noAnswer2": " 4 ta",
    "noAnswer3": " 5 ta"
  },
  {
    "question": " Tanlash orqali saralashda har qadamda hali ko’rilmagan elementlar orasidan qay biri tanladi",
    "answer": " Eng kichigini",
    "noAnswer1": " Alifbo tartibida oldin keluvchi element",
    "noAnswer2": " Eng ko’p ko’rilganini",
    "noAnswer3": " Tipi yaqinini"
  },
  {
    "question": " Tanlash orqali saralash jarayoni necha marotaba davom etadi?",
    "answer": " N-1 marta",
    "noAnswer1": "Saralanayotgan element tipi soniga qarab",
    "noAnswer2": " N marta",
    "noAnswer3": " Ixtiyoriy daraja tanlanadi"
  },
  {
    "question": " Agar ikki qo’shni element noto’g’ri tartibda joylashib qolgan bo’lsa, ularning o’rnini almashtiramiz. Umumiy n-1 marta jarayon bajariladi. Har safar ikkita qo’shni element taqqoslanadi.\nElementlar o’z o’rinlariga pufakga o’xshab siljib boradi.\nYuqorida qaysi usul algoritmi keltirilgan?\n",
    "answer": "Bubble sort",
    "noAnswer1": " Quick sort",
    "noAnswer2": "Merge sort",
    "noAnswer3": " Tanlash orqali saralash"
  },
  {
    "question": "Pufakcha usulida saralashda quyidagilardan qaysi bigiga qolganlariga teng emas?",
    "answer": " Qo’shimcha xotira",
    "noAnswer1": "Almashtirishlar soni",
    "noAnswer2": " Taqqoslashlar soni",
    "noAnswer3": " Ishlash vaqti"
  },
  {
    "question": " Jon fon Neyman tomonidan 1946 – yil qaysi saralash algoritmi taklif qilingan.",
    "answer": " Merge sort",
    "noAnswer1": " Neyman sort",
    "noAnswer2": " Quick sort",
    "noAnswer3": " Bubble sort"
  },
  {
    "question": "Uni ikkita bo’lakga ajratamiz.\nBo’laklarni alohida saralaymiz.\nSaralangan massivlarni birlashtiramiz.\nUshbu algoritm qaysi saralashniki?\n",
    "answer": " Bo’lib tashlab hukumronlik qil metodi",
    "noAnswer1": " Quick sort",
    "noAnswer2": "Bubble metodi",
    "noAnswer3": " To’g’ri javob keltirilmagan"
  },
  {
    "question": " 1964 – yilda Charlz Hoar tomonidan qaysi saralash algoritmi taklif qilingan.",
    "answer": " Quick sort",
    "noAnswer1": "Merge sort",
    "noAnswer2": "Hoar sort",
    "noAnswer3": " Bubble sort"
  },
  {
    "question": " Quick sort qaysi metodga asoslanadi?",
    "answer": " Bo’lib tashla va hukumronlik qil metodiga",
    "noAnswer1": " Hoar metodiga",
    "noAnswer2": " Merge metodiga",
    "noAnswer3": " Pufakcha metodiga"
  },
  {
    "question": " Massivda bo’luvchi element X tanlanadi.\nElementlarni shunday joylashtiramizki, dastlab X dan kichik yoki teng bo’lgan elementlar joylashsin, keyin undan katta bo’lgan elementlar joylashsin.\nKeyin ularni alohida saralaymiz.\nBu qaysi algoritm g’oyasi\n",
    "answer": " Tezkor saralash",
    "noAnswer1": "Pufakcha metodi",
    "noAnswer2": " Hoar metodi",
    "noAnswer3": " Merge metodi"
  },
  {
    "question": " Uni omborxona yoki kutubxonaning bir turi sifatida ko'rish mumkin.",
    "answer": "cMa’lumotlar strukturasini",
    "noAnswer1": " Classlarni",
    "noAnswer2": " Ma’lumotlar tarkibini",
    "noAnswer3": " Steklarni"
  },
  {
    "question": " Kalitlarni taqqoslashlar soni\nDasturni ishlab chiqishga ketgan vaqt\nDasturni ishlashi uchun ketgan vaqt\nTalab qilinadigan xotira hajmi\nBu nimaning samaradorlik mezonlari?\n",
    "answer": " Qidiruv algaritmlarining",
    "noAnswer1": "Saralash algoritmining",
    "noAnswer2": " Hisoblash algoritmining",
    "noAnswer3": " Navbat algoritmining"
  },
  {
    "question": " Ushbu algoritmlar ishlab chiqarilayotganda, ko’proq, jadvaldagi kalitlarni taqqoslash soniga e’tibor qaratiladi. Qaysi algoritmlar haqida gap ketmoqda?",
    "answer": " Qidiruv algaritmlari",
    "noAnswer1": "Saralash algoritmlar",
    "noAnswer2": " Hisoblash algoritmlari",
    "noAnswer3": " Navbat algoritmlari"
  },
  {
    "question": "Massiv yoki bog’langan ro’yxatlarda.\nElementni jadvalga qo’shish talab qilinsa, u holda qidiruvni amalaga oshirish qay birida qulayroq kechadi?\n",
    "answer": " Ro’yhatlarda",
    "noAnswer1": " Bir xil kechadi",
    "noAnswer2": "Massivlarda",
    "noAnswer3": " Elementlar soniga qarab"
  },
  {
    "question": " Qaysi usulda topilgan element jadvalda bitta oldingi element bilan o’rin almashtiradi va agar ushbu elementga ko’p murojaat qilinsa, bittadan oldinga surulib borib natijada jadval boshida bo’ladi?",
    "answer": "Transpazitsiya usuli",
    "noAnswer1": "Bubble sort usuli",
    "noAnswer2": " Quick sort usuli",
    "noAnswer3": " Merge usuli"
  },
  {
    "question": " Qaysi holatda indeksli qidiruv samaradorligini C=√n+1=O(√n) kabi mukammallashtirish mumkin?",
    "answer": " Bo’lishi mumkin barcha holatlar teng bo’lsa",
    "noAnswer1": " Merge usulida",
    "noAnswer2": "Quick sort usulida",
    "noAnswer3": " Bubble sort usulida"
  },
  {
    "question": " U  berilgan  to’plam  elementlarini  biror  bir  tartibda  joylashtirish  jarayonidir. U nima",
    "answer": "Saralash",
    "noAnswer1": "Parametrizatsiya",
    "noAnswer2": " Qidiruv",
    "noAnswer3": " Indeksatsiya"
  },
  {
    "question": " Saralashning maqsadi - ?",
    "answer": "tartiblangan to’plamda kerakli elementni tartiblashdan iborat bo’ladi",
    "noAnswer1": "tartiblangan to’plamda kerakli elementni indeksatsiyasini osonlashtirishdan iborat",
    "noAnswer2": " tartiblangan to’plamda kerakli elementni parametrizatsiyalashni osonlashtirishdan iborat",
    "noAnswer3": "tartiblangan to’plamda kerakli elementni bir biriga bog’lashnini osonlashtirishdan iborat"
  },
  {
    "question": "Qaysi saralash usulida hali ko’rilmagan massiv elementlar orasidan 1-elementini eng kichik elementi deb tanlanadi shundan so’ng massivning barcha elementlari bilan solishtiriladi va natijasida eng kichik elementni massivning boshiga joylashtiriladi.",
    "answer": " Tanlash orqali saralash usuli",
    "noAnswer1": " Pufakcha usuli",
    "noAnswer2": "Morge usuli",
    "noAnswer3": " Hollan usuli"
  },
  {
    "question": " Saralashning necha turi mavjud",
    "answer": "2 ta",
    "noAnswer1": " 3 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": " 5 ta"
  },
  {
    "question": " Operativ xotiradagi saralash bu qaysi saralash turiga kiradi?",
    "answer": " Ichki saralash",
    "noAnswer1": "Tashqi saralash",
    "noAnswer2": " Operativ saralash",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": " Saralashni nechta usuli mavjud?",
    "answer": "2 ta",
    "noAnswer1": "3 ta",
    "noAnswer2": " 4 ta",
    "noAnswer3": "5 ta"
  },
  {
    "question": " Quyidagilardan qaysilari saralash usullari?",
    "answer": "Qat’iy va yaxshilangan",
    "noAnswer1": " Operativ va yaxshilangan",
    "noAnswer2": "Tashqi va operativ",
    "noAnswer3": " Ichki va operatish"
  },
  {
    "question": " Quyidagi usullardan qay birida almashtirishlar soni keskin farqlanadi?",
    "answer": " Yaxshilangan usul",
    "noAnswer1": " Qat’iy usullar",
    "noAnswer2": "Tog’ridan to’g’ri tanlash usuli",
    "noAnswer3": " Tog’ridan to’g’ri qo’shish usuli"
  },
  {
    "question": " Faraz qilaylik, a1, a2, … , anelementlar ketma-ketligi berilgan bo’lsin.\nBerilgan elementlar ichidan eng kichik kalitga ega element tanlanadi.\nUshbu element boshlangich ketma-ketlikdagi birinchi element a1 bilan o’rin almashadi\nUndan keyin ushbu jarayon qolgan n-1 ta element, n-2 ta element va hokazo, toki bitta eng katta element qolgunga davom ettiriladi.\nSavol bu qaysi tamoyil asosi hisoblanadi?\n",
    "answer": " To’g’ridan to’g’ri tanlash usuli",
    "noAnswer1": " Tog’ridan to’g’ri qo’shish usuli",
    "noAnswer2": " Tog’ridan to’g’ri almashtirish usuli",
    "noAnswer3": " Yaxshilangan usul"
  },
  {
    "question": " Qisqarib boruvchi qadamlar orqali saralash uslini fanda qanday ataladi",
    "answer": " Shell usuli",
    "noAnswer1": " Quick sort",
    "noAnswer2": "Merge usuli",
    "noAnswer3": " Bubble sort"
  },
  {
    "question": " Shel usuli qachon taklif qilingan?",
    "answer": " 1959 yilda",
    "noAnswer1": " 1938 yilda",
    "noAnswer2": " 1987 yilda",
    "noAnswer3": " 1948 yilda"
  },
  {
    "question": " Qaysi tur mantiqiy mulohazalarning to’g’riligini aniqlash uchun, turli xil dasturlash tillarida turlicha ifodalanadigan ifodalarni 2 ta ko’rinishda ifodalaydi?",
    "answer": " Mantiqiy tur",
    "noAnswer1": " Butun tur",
    "noAnswer2": "Belgili tur",
    "noAnswer3": " Satrli tur"
  },
  {
    "question": "Mantiqiy tur uchun qiyinroq hisoblanuvchi operatsiyalar qaysilar?",
    "answer": "Chiqarib tashlash, ekvivalensiya, implikatsiya",
    "noAnswer1": " Chiqarib tashlash, inkor, yoki",
    "noAnswer2": " Va, yoki, inkor",
    "noAnswer3": " Va, yoki, ekvivalensiya"
  },
  {
    "question": " Mantiqiy qiymatlar xotirada qancha joy egallaydi?",
    "answer": " 1 bit",
    "noAnswer1": " 2 bit",
    "noAnswer2": " 8 bit",
    "noAnswer3": " 1 bayt"
  },
  {
    "question": " Inkor amali qaysi qatorda to’g’ri berilgan?",
    "answer": " Not a",
    "noAnswer1": " A or b",
    "noAnswer2": " A and b",
    "noAnswer3": " To’g’ri javob yo’q"
  },
  {
    "question": " Dizyunksiya amali qaysi qatorda to’g’ri berilgan?",
    "answer": " A or b",
    "noAnswer1": " Not a",
    "noAnswer2": " A and b",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": " Konyunksiya amali qaysi qatorda to’g’ri berilgan?",
    "answer": " A and b",
    "noAnswer1": " To’g’ri javob yo’q",
    "noAnswer2": "A or b",
    "noAnswer3": " Not a"
  },
  {
    "question": " Dizyunksiyaning inkori dasturlashda qanday yoziladi?",
    "answer": " Xor",
    "noAnswer1": " !",
    "noAnswer2": " Or !",
    "noAnswer3": " &&"
  },
  {
    "question": " #include <iostream> \nUsing namespace std; int main(){\nBool b=true;Bool s=false;\nBool d1 =not b || s;\nBool d2=b && s; bool d3=b xor s;\nCout<<d1<<\" \"<<d2<<\" \"<<d3;System (\"pause \");}\nDastur natijasini toping.\n",
    "answer": " 0 0 1",
    "noAnswer1": " 0 0 0 ",
    "noAnswer2": " 0 1 1",
    "noAnswer3": " 1 0 1"
  },
  {
    "question": " Bir tipli nomerlangan ma’lumotlar janlanmasi nima deb ataladi?",
    "answer": " Massiv",
    "noAnswer1": " Determinant",
    "noAnswer2": " Int",
    "noAnswer3": " Matritsa"
  },
  {
    "question": " U indeksli o’zgaruvchi tushunchasiga mos keladi. U dasturlashda qanday ataladi",
    "answer": " Massiv",
    "noAnswer1": " Fifo",
    "noAnswer2": " Qatorlar",
    "noAnswer3": " Nifo"
  },
  {
    "question": " C++ dasturlash tili standarti bo’yicha massiv indekslari nechtagacha bo’lishi mumkin",
    "answer": " 31 ta",
    "noAnswer1": " 37 ta",
    "noAnswer2": " 23 ta",
    "noAnswer3": " 5 ta"
  },
  {
    "question": " Qanday tip matematikada matritsa yoki jadval tushunchasiga mos keladi",
    "answer": " Ikki o’lchovli massiv",
    "noAnswer1": " Double float",
    "noAnswer2": " Boolen",
    "noAnswer3": " Bir o’lchovli massiv"
  },
  {
    "question": " Quyidagi initsalizatsiyalardan qaysi biri dasturlashda xato natija beradi?",
    "answer": "Float[][]={(1.3,1.1,1.4),(-1,4.4),(1.3, 2.4)}",
    "noAnswer1": " Int х[3][3]={(1,-2,3),(1,2),(-4)}",
    "noAnswer2": " Float d[2][3]={1,-2.5,10,-5.3,2,14}",
    "noAnswer3": " Double х[][2]={(1.1,1.5),(-1.6,2.5),(3,-4)}"
  },
  {
    "question": " Turli tipdagi ma’lumotlarning biror nom ostida birlashtirilgan, dasturchi tomonidan beriladigan yangi tip nima deb ataladi?",
    "answer": " Structura",
    "noAnswer1": " Class",
    "noAnswer2": " Navbat",
    "noAnswer3": " Massiv"
  },
  {
    "question": "Uni e’lon qilish uchun struct xizmatchi so’zi ishlatiladi. U nima?",
    "answer": " Yozuv",
    "noAnswer1": " Massiv",
    "noAnswer2": " Qator",
    "noAnswer3": " Class"
  },
  {
    "question": " “oxirgi kelgan - birinchi ketati” bu nimaning ta’rifi?",
    "answer": " Stek",
    "noAnswer1": " Navbat",
    "noAnswer2": " Dek",
    "noAnswer3": " Qator"
  },
  {
    "question": " Lifo bu nimaning ta’rifi?",
    "answer": " Stek",
    "noAnswer1": " Navbat",
    "noAnswer2": " Dek",
    "noAnswer3": " Qator"
  },
  {
    "question": " Unda elementlarni kiritish va tomondan ya’ni uchidan amalga oshiriladi. U nima",
    "answer": " Stek",
    "noAnswer1": " Dek",
    "noAnswer2": " Qator",
    "noAnswer3": " Navbat"
  },
  {
    "question": " C++ tilida steklar qanday amalga oshiriladi?",
    "answer": " A va b javoblar to’g’ri",
    "noAnswer1": " Structura ko’rinishida",
    "noAnswer2": " Bir o’lchovli massiv ko’rinishida",
    "noAnswer3": " Statik ko’rinishda"
  },
  {
    "question": " Nima 2 ta chetga ega navbat ma’nosini beradi?",
    "answer": " Dek",
    "noAnswer1": " Stek",
    "noAnswer2": " Structura",
    "noAnswer3": " Lifo"
  },
  {
    "question": " Double ended queue\nBu nimaning ta’rifi?\n",
    "answer": " Dek",
    "noAnswer1": " Stek",
    "noAnswer2": " Navbat",
    "noAnswer3": " Qator"
  },
  {
    "question": " Navbat bu - ...",
    "answer": " Fifo",
    "noAnswer1": " Lifo",
    "noAnswer2": " Stek",
    "noAnswer3": " Infifo"
  },
  {
    "question": "Elementlarning oxiridan qo’shilib, boshidan chiqarib tashlanishi nima deb ataladi",
    "answer": " Navbat",
    "noAnswer1": " Stek",
    "noAnswer2": " Dek",
    "noAnswer3": " Nifo"
  },
  {
    "question": " C++ dasturlash muhitida ma'lumotlarni massivdan tashqari sal boshqacharoq usulda saqlashning yana bir turi mavjud, bu nima?",
    "answer": " Vektorlar",
    "noAnswer1": " Rekursiyalarм",
    "noAnswer2": " Classlar",
    "noAnswer3": " Qatorlar"
  },
  {
    "question": " Ayrim paytlarda massivga nechta element kiritilishi ma'lum bo‘lmaydi va o‘shanda dinamik dasturlashdan foydalanish kerak bo‘ladi, ya'ni massivga qo‘shiladigan elementga xotira ajratishga to‘g‘ri keladi, bunday paytda qaysi kitobxonadan foydalanish optimalroq hisoblanadi?",
    "answer": " Vector",
    "noAnswer1": " Dynamics.h",
    "noAnswer2": " Recursy",
    "noAnswer3": " Class"
  },
  {
    "question": " Qaysi class o‘zgaruvchan uzunlikdagi massiv yaratishga yordam beradi?",
    "answer": " Vector",
    "noAnswer1": "       Class",
    "noAnswer2": "      Recursia",
    "noAnswer3": "       Setclass"
  },
  {
    "question": " Elementlari soni oldindan ma'lum bo‘lmagan bir xil toifadagi elementlar ketma-ketligi dasturlashda nima deb ataladi",
    "answer": " Vector",
    "noAnswer1": " Massiv",
    "noAnswer2": " Class",
    "noAnswer3": " Graph"
  },
  {
    "question": " Dasturlashda vectorni e’lon qilish sintaksisi to’g’ri ko’rsatilgan qatorni toping",
    "answer": " Vector<int> q",
    "noAnswer1": " vector a[100]",
    "noAnswer2": " Q int[vector]",
    "noAnswer3": " Vector a<int> [100]"
  },
  {
    "question": " Dasturlash tillarida ma’lumotlar necha turga bo’linadi?",
    "answer": " bazaviy va keltirilgan",
    "noAnswer1": " Rost va yolg’on",
    "noAnswer2": " Fizik va biologik",
    "noAnswer3": " Skalyar va bo’sh"
  },
  {
    "question": " Void kalit so’zi qaysi toifaga tegishli ekanligini ko’rsatadi?",
    "answer": " Hecsh qaysi",
    "noAnswer1": " Haqiqiy",
    "noAnswer2": " Butun",
    "noAnswer3": " Raqamli"
  },
  {
    "question": " Dasturning asosiy tanasi nima?",
    "answer": "int main()",
    "noAnswer1": " Tiplar",
    "noAnswer2": "float",
    "noAnswer3": "barchasi to`g`ri"
  },
  {
    "question": " Dasturda Amallar necha xil bo’ladi?",
    "answer": " 2 xil (binar va unar)",
    "noAnswer1": " 2 xil (sonli va satrli)",
    "noAnswer2": " Aniqlab bo’lmaydi",
    "noAnswer3": " Dastur tipiga qarab"
  },
  {
    "question": " Ulardan qaysi biri additiv binar amal?",
    "answer": "(+) qo’shish",
    "noAnswer1": " (*) ko’paytirish",
    "noAnswer2": "(:) bo’lish",
    "noAnswer3": " (%) modul olish ya’ni qoldiqli bo’lish"
  },
  {
    "question": " Multiplikativ binar amallarni ko’rsating.",
    "answer": "(*), (/) , (%)",
    "noAnswer1": "(+), (-), (*), (/)",
    "noAnswer2": " (%), (!), (<), (>),",
    "noAnswer3": " (!), (<) , (>), (=)"
  },
  {
    "question": " [++] va [--] lar qanday amallar?",
    "answer": " Unar",
    "noAnswer1": " Takrorlanuvchi",
    "noAnswer2": " Xususiy",
    "noAnswer3": " Binar"
  },
  {
    "question": " Prefiksni ko’rsating",
    "answer": "#VALUE!",
    "noAnswer1": " Using namespace",
    "noAnswer2": " I++",
    "noAnswer3": "(;), (<<), (>>), cout, cin, …"
  },
  {
    "question": "Postfiksni ko’rsating",
    "answer": "i++",
    "noAnswer1": " ++i",
    "noAnswer2": " Using namespace std;",
    "noAnswer3": " (;), (<<), (>>), cout, cin, …"
  },
  {
    "question": " int main(){\n    int a=100,b=10,c=5;     \n    for(int i=0; i<2; i++)\n   { a/=b-c; }\n    cout<<\"a=\"<<a<<endl;\n    system(\"PAUSE\");}\nDastur natijasini toping\n",
    "answer": 4,
    "noAnswer1": "       20",
    "noAnswer2": 0,
    "noAnswer3": 100
  },
  {
    "question": " Dasturlash tillarida ma’lumotlar necha turga bo’linadi?",
    "answer": "bazaviy va keltirilgan",
    "noAnswer1": "b) Rost va yolg’on",
    "noAnswer2": "c) Fizik va biologik",
    "noAnswer3": "d) Skalyar va bo’sh"
  },
  {
    "question": "Void kalit so’zi qaysi toifaga tegishli ekanligini ko’rsatadi?",
    "answer": "hech qaysi",
    "noAnswer1": " Butun",
    "noAnswer2": " Haqiqiy",
    "noAnswer3": "Raqamli"
  },
  {
    "question": " Dasturning asosiy tanasi nima?",
    "answer": "int main()",
    "noAnswer1": "a) Tiplar",
    "noAnswer2": "int",
    "noAnswer3": "barchasi xato"
  },
  {
    "question": " Dasturda Amallar necha xil bo’ladi?",
    "answer": "2 xil  (unar va binar)",
    "noAnswer1": "c) Dastur tipiga qarab",
    "noAnswer2": "b) Aniqlab bo’lmaydi",
    "noAnswer3": "2 xil (sonli va satrli)"
  },
  {
    "question": " Ulardan qaysi biri additiv binar amal?",
    "answer": " (+) qo’shish",
    "noAnswer1": "(*) ko’paytirish",
    "noAnswer2": "(:) bo’lish",
    "noAnswer3": " (%) modul olish ya’ni qoldiqli bo’lish"
  },
  {
    "question": "Daraxt bog’lanish bosqichlari nechidan boshlanadi?",
    "answer": " 0 dan",
    "noAnswer1": " 1 dan",
    "noAnswer2": " Bosqichlar soni ahamiyatga ega emas, shu sababli sanoqga ega emas",
    "noAnswer3": "d) Daraxt turiga qarab tanlanadi"
  },
  {
    "question": " [++] va [--] lar qanday amallar?",
    "answer": "Unar",
    "noAnswer1": "b) Xususiy",
    "noAnswer2": " Takrorlanuvchi",
    "noAnswer3": "a) Binar"
  },
  {
    "question": " Prefiksni ko’rsating",
    "answer": " ++I",
    "noAnswer1": "I++",
    "noAnswer2": " Using namespace",
    "noAnswer3": " (;), (<<), (>>), cout, cin, …"
  },
  {
    "question": " Postfiksni ko’rsating",
    "answer": "i++",
    "noAnswer1": " Using namespace std;",
    "noAnswer2": " (;), (<<), (>>), cout, cin, …",
    "noAnswer3": " ++i"
  },
  {
    "question": " int main(){\n    int a=100,b=10,c=5;     \n    for(int i=0; i<2; i++)\n    { a/=b-c; }\n    cout<<\"a=\"<<a<<endl;\n    system(\"PAUSE\");}\nDastur natijasini toping.\n",
    "answer": " *4",
    "noAnswer1": 0,
    "noAnswer2": 20,
    "noAnswer3": 100
  },
  {
    "question": " uning o’lchami mashina, ya'ni kompyuter konfiguratsiyasiga bog’liq ravishda o’zgarib turadi. Gap nima haqida ketmoqda.",
    "answer": "Intejer tipi",
    "noAnswer1": " Tiplar haqida",
    "noAnswer2": "Media fayllar",
    "noAnswer3": " Rasmlar"
  },
  {
    "question": " Integer Toifa modifikatsiyalarini ayting",
    "answer": "signed va unsigned",
    "noAnswer1": " Short va Long",
    "noAnswer2": " Double va Long",
    "noAnswer3": " Short, Long va double intlar"
  },
  {
    "question": " Signed Int toifasida modifikatsiyalanganda qiymatning eng chap bitidagi 0 yoki bir nimani bildiradi.",
    "answer": "Ishorani",
    "noAnswer1": " Hajmini",
    "noAnswer2": " Kengligini",
    "noAnswer3": " Kengaytmasini"
  },
  {
    "question": " Int tipi ustida ==, !=, <=, >=, < , > kabi amallar bajarilganda natija qaysi tipga kiradi",
    "answer": "Bool",
    "noAnswer1": "a) Int",
    "noAnswer2": "c) Float",
    "noAnswer3": "d) String"
  },
  {
    "question": " Xotiradan egallangan hajmni bilish uchun qaydi xizmatchi so’zdan foydalaniladi",
    "answer": "sizeof()",
    "noAnswer1": " Memory()",
    "noAnswer2": " Deminsionof()",
    "noAnswer3": " &a"
  },
  {
    "question": " Haqiqiy toifaga nisbatan binar amallar bajarilsa natija qanday tipga tegishli bo’ladi?",
    "answer": "Mantiqiy",
    "noAnswer1": " Haqiqiy",
    "noAnswer2": " Butun",
    "noAnswer3": "Satrli"
  },
  {
    "question": "Haqiqiy tipga nisbatan unar amallar ishlatilsa natija qanday sonlar chiqadi?",
    "answer": "Haqiqiy",
    "noAnswer1": " Butun",
    "noAnswer2": " Mantiqiy",
    "noAnswer3": " Satrli"
  },
  {
    "question": " U tip Kompyuter xotirasida asosan qo’shg’aluvchan nuqta formatida saqlanadi. U qanday tip",
    "answer": "Haqiqiy tip",
    "noAnswer1": " Mantiqiy tip",
    "noAnswer2": " Butun tip",
    "noAnswer3": " Satrli tip"
  },
  {
    "question": " Float tipi xotiradan qancha joy egallaydi?",
    "answer": "4 bayt",
    "noAnswer1": " 2 bayt",
    "noAnswer2": " 8 bayt",
    "noAnswer3": " Kompyuter Konfiguratsiyasiga qarab"
  },
  {
    "question": "  Double Float tipi xotiradan qancha joy egallaydi?",
    "answer": "8 bayt",
    "noAnswer1": "a) 4 bayt",
    "noAnswer2": "c) 2 bayt",
    "noAnswer3": "d) Kompyuter konfiguratsiyasiga qarab"
  },
  {
    "question": "Long double tipi xotiradan qancha joy egallaydi?",
    "answer": " 8 bayt",
    "noAnswer1": "2 bayt",
    "noAnswer2": " 4 bayt",
    "noAnswer3": " Kompyuter konfiguratsiyasiga qarab"
  },
  {
    "question": "Yo’q , yoki , va amallari qaysi toifa ustida bajariladi",
    "answer": "Boolen",
    "noAnswer1": " Haqiqiy",
    "noAnswer2": " (1va (0) qiymatli butun tip ustida",
    "noAnswer3": " Butun tip ustida"
  },
  {
    "question": " Boolen tipi kompyuter xotirasidan qancha hajm egallaydi",
    "answer": " 1 bayt",
    "noAnswer1": " 2 bayt",
    "noAnswer2": " 4 bayt",
    "noAnswer3": " 8 bayt"
  },
  {
    "question": " Unsigned char tipi xotiradan qancha joy egallaydi",
    "answer": "1bayt",
    "noAnswer1": " 2 bayt",
    "noAnswer2": " 4 bayt",
    "noAnswer3": " 8 bayt"
  },
  {
    "question": " #include <iostream.h>\nUsing manespace std;Int main(){\nChar x=`a`, y=`b`; char min;\nIf(x>y) min=y;Else min=x;\nCout<<min;Return 0;}\nDastur natijasini toping\n",
    "answer": "a",
    "noAnswer1": " B",
    "noAnswer2": " Xato beradi",
    "noAnswer3": " (b)"
  },
  {
    "question": "Ma'lumotlar tuzilmasi fanida daraxt so`zi ko`pincha qanday nomlanadi?",
    "answer": "Tree",
    "noAnswer1": "oila ",
    "noAnswer2": "sanoq tizimi",
    "noAnswer3": "safe"
  },
  {
    "question": "O`ziga murojaat qiluvchi funksiya?",
    "answer": "Rekursiv",
    "noAnswer1": "void",
    "noAnswer2": "return",
    "noAnswer3": "main"
  },
  {
    "question": "...– bu bironta ob‘ektga tegishli turli toifadagi maydonlar to‘plamidir.",
    "answer": "Yozuv ",
    "noAnswer1": "obekt",
    "noAnswer2": "Dastur",
    "noAnswer3": "Daraxt"
  },
  {
    "question": "Primitiv toifalar (...)",
    "answer": "ma‘lumotlarning sodda toifalari",
    "noAnswer1": "Ma'lumotlar bazasi",
    "noAnswer2": "sanoq tizimi",
    "noAnswer3": "tree"
  },
  {
    "question": "Ma‘lumotlar toifalari … turga ajratiladi",
    "answer": 3,
    "noAnswer1": 5,
    "noAnswer2": 2,
    "noAnswer3": 7
  },
  {
    "question": "... – elementlarni ma‘lum bir tartibda joylashtirish amali",
    "answer": "Saralash",
    "noAnswer1": "ma‘lumotlarning sodda toifalari",
    "noAnswer2": "Qidirish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "… -  tuzilmadan bironta elementni joylashgan o‘rnini aniqlash amali",
    "answer": "Qidirish",
    "noAnswer1": "Saralash",
    "noAnswer2": "Kiritish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "... - tuzilma elementlariga 1 martadan murojaat qilish amali.",
    "answer": " Ko‘rikdan o‘tkazish (traversing)",
    "noAnswer1": "Saralash",
    "noAnswer2": "Kiritish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "... – xar bit amal oddiy va soda bo‘lishi kerak",
    "answer": "Samaradorlilik",
    "noAnswer1": "Saralash",
    "noAnswer2": "Kiritish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "Qiymat qaytarmaydigan funksiya qaysi?",
    "answer": "void",
    "noAnswer1": "main",
    "noAnswer2": "int",
    "noAnswer3": "rekursiv"
  },
  {
    "question": "if(n<0){cout<<a;} else{cout<<a-1;}  a=3,n=0 bo`lsa, ekranga qanday qiymat chiqadi?",
    "answer": 2,
    "noAnswer1": 1,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "if(n<0){cout<<a;} else{cout<<a-1;}  a=3,n=-2 bo`lsa, ekranga qanday qiymat chiqadi?",
    "answer": 3,
    "noAnswer1": 2,
    "noAnswer2": 4,
    "noAnswer3": 0
  },
  {
    "question": "if(n=>0){cout<<a;} else{cout<<a-1;}  a=3,n=-2 bo`lsa, ekranga qanday qiymat chiqadi?",
    "answer": "dastur xato",
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "if(n=>0){cout<<a;} else{cout<<a-1;}  a=5,n=-2 bo`lsa, ekranga qanday qiymat chiqadi?",
    "answer": "dastur xato",
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "for(int i=5;i<8;i++){...} ushbu sikl necha marta takrorlanadi?",
    "answer": 3,
    "noAnswer1": 5,
    "noAnswer2": 8,
    "noAnswer3": 0
  },
  {
    "question": "for(int i=5;i<=8;i++){...} ushbu sikl necha marta takrorlanadi?",
    "answer": 4,
    "noAnswer1": 3,
    "noAnswer2": 5,
    "noAnswer3": 7
  },
  {
    "question": "for(int i=0;i<=8;i++){...} ushbu sikl necha marta takrorlanadi?",
    "answer": 9,
    "noAnswer1": 8,
    "noAnswer2": 0,
    "noAnswer3": 7
  },
  {
    "question": "Sharti keyin beriladugan sikl operatori?",
    "answer": "do{...}while(…)",
    "noAnswer1": "while(…){…}",
    "noAnswer2": "for(…){…}",
    "noAnswer3": "savol xato"
  },
  {
    "question": "Sharti oldin beriladugan sikl operatori?",
    "answer": "while(…){…}",
    "noAnswer1": "do{...}while(…)",
    "noAnswer2": "for(…){…}",
    "noAnswer3": "savol xato"
  },
  {
    "question": "Parametrli sikl operatori qaysi?",
    "answer": "for(…){…}",
    "noAnswer1": "do{...}while(…)",
    "noAnswer2": "while(…){…}",
    "noAnswer3": "savol xato"
  },
  {
    "question": "do{…}while(n>0) n=0 bo`lganda sikl  necha marta takrorlanadi? ",
    "answer": 1,
    "noAnswer1": 0,
    "noAnswer2": 2,
    "noAnswer3": "cheksiz"
  },
  {
    "question": "for(int i=1; i<n;i++){n--;}  n=0 bo`lganda sikl  necha marta takrorlanadi? ",
    "answer": "cheksiz",
    "noAnswer1": 2,
    "noAnswer2": 1,
    "noAnswer3": 0
  },
  {
    "question": "switch quyidagi tiplarning qaysi biri bilan ishlaydi?",
    "answer": "int ",
    "noAnswer1": "float",
    "noAnswer2": "double"
  },
  {
    "question": "int aloqa(){int a=5; return a;} funksiya nomini toping",
    "answer": "aloqa",
    "noAnswer1": "int",
    "noAnswer2": "return",
    "noAnswer3": "a"
  },
  {
    "question": "for(int i ; i<=10 ; i++) - bu siklda [i] nima?",
    "answer": "sikl parametri",
    "noAnswer1": "sikl operatori, majburiy ajratuvchi",
    "noAnswer2": "o’zgarmas",
    "noAnswer3": "sikl operatori"
  },
  {
    "question": "Sharti oldin berilgan takrorlanish operatorini toping",
    "answer": "While  ",
    "noAnswer1": "if  ",
    "noAnswer2": "else",
    "noAnswer3": "for"
  },
  {
    "question": " Fayllar bilan ishlash oqimlariga qaysilar kiradi",
    "answer": "ifstream, ofstream, fstream",
    "noAnswer1": "TJY",
    "noAnswer2": "ifstream , ,cout istream",
    "noAnswer3": "iostream , ofstream, istream"
  },
  {
    "question": "Bir xil toifali , chekli qiymatlarning tartiblanganto’plamiga nima deb ataladi?",
    "answer": "Massiv",
    "noAnswer1": "Rekursiv funksiya ",
    "noAnswer2": "TJY",
    "noAnswer3": "oqim"
  },
  {
    "question": "Mantiqiy amallarda & belgisini vazifasi nima",
    "answer": "ko’paytirish",
    "noAnswer1": "ayirish",
    "noAnswer2": "bo’lish",
    "noAnswer3": "TJY"
  },
  {
    "question": "int main(){\nint a = 7, b = 11;\nbool OK = a < 7 ^ b > 10;\ncout << OK;\nreturn 0;}\nUshbu dastur natijasini toping:\n",
    "answer": 1,
    "noAnswer1": 0,
    "noAnswer2": 11,
    "noAnswer3": 7
  },
  {
    "question": "Quyidagi ifodadan qanday qiymat chiqishini aniqlang?int a[5]={1,2,3,4,5}; cout<<a[3];",
    "answer": 4,
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 5
  },
  {
    "question": "Massivlarning qanday turlari mavjud?",
    "answer": "  dinamik va static massivla     ",
    "noAnswer1": " statik massivlar    ",
    "noAnswer2": "tjy",
    "noAnswer3": " konsterativ massivlar"
  },
  {
    "question": "Parametrli sikl operatoridan tog'ri foydalanilgan javobni ko'rsating.",
    "answer": "for (int i=0; i<=n; i++)",
    "noAnswer1": "for (int i=0, i<=n; i++)",
    "noAnswer2": "for (int i=0; i<=n; i++ ;)",
    "noAnswer3": "tjy"
  },
  {
    "question": "Sharti keyin berilgan sikl operatori tuzilishini ko'rsating.",
    "answer": "do{sikl tanasi;} while(shart)",
    "noAnswer1": "while(shart) {sikl tanasi;}",
    "noAnswer2": "tjy",
    "noAnswer3": "do{shart} while(sikl tanasi;)"
  },
  {
    "question": "<indeks> -bu? ",
    "answer": "massiv xadining joylashgan o’rnini anglatuvchi taktik qiymat",
    "noAnswer1": "massivlar qitymati xadining matematik qiymati",
    "noAnswer2": "o’zgaruvchiga  yozilgan tartib xadi ",
    "noAnswer3": "chekli qiymatlarning tartiblangan to’plamidir"
  },
  {
    "question": "Xotiradan sakkiz bayt joy egallaydigan butun qiymatli o’zgaruvchini ko’rsating",
    "answer": "double a;",
    "noAnswer1": "TJY",
    "noAnswer2": "long long a;",
    "noAnswer3": "long double a;"
  },
  {
    "question": "Har xil obyektlarni ifodalovchi baytlar ketma ketligi bu ?",
    "answer": "binar fayl",
    "noAnswer1": "TJY",
    "noAnswer2": "rekursiv funksiya",
    "noAnswer3": "mantiqiy fayl"
  },
  {
    "question": "Ham asosiy programmadaham funksiyada ishlashi mumkin bo’lgan o’zgaruvchilar bu …?",
    "answer": "global o’zgaruvchilar",
    "noAnswer1": "parametirsiz o’zgaruvchilar",
    "noAnswer2": "laokal o’zgaruvchilar",
    "noAnswer3": "TJY"
  },
  {
    "question": "int main()\n{ int a=30, b=40, c=35,d;\nif (a>b) {d=b;}\nelse {d=a;}\nif(d>c)d=c;\n    cout << d;\n    return 0;}\n",
    "answer": 30,
    "noAnswer1": 40,
    "noAnswer2": 5,
    "noAnswer3": 100
  },
  {
    "question": "Short int kompyuter xotirasida necha bayt joy egallaydi?",
    "answer": "2 bayt",
    "noAnswer1": "4bayt",
    "noAnswer2": "8bayt",
    "noAnswer3": "10bayt"
  },
  {
    "question": "Eng ko‘p foydalaniladigan daraxtlar turi qaysi?",
    "answer": "binar",
    "noAnswer1": "unar",
    "noAnswer2": "kop olchamli",
    "noAnswer3": "muvozanatlangan"
  },
  {
    "question": "Daraxt ko‘ruvini amalga oshirish uchun nechta prosedurani bajarish lozim?",
    "answer": 3,
    "noAnswer1": 4,
    "noAnswer2": 2,
    "noAnswer3": 5
  },
  {
    "question": " Agar elementlar daraxtga kalit qiymatlari o‘sish (kamayish) tartibida kelib tushgan bo‘lsa, u holda daraxt qaysi tomonga yo‘nalgan ro‘yxat hosil qiladi ?",
    "answer": "bir tomonga",
    "noAnswer1": "ikkala tomonga",
    "noAnswer2": "ortaga",
    "noAnswer3": "ixtiyoriy"
  },
  {
    "question": " Bir tomonlama yo‘naltirilgan ro‘yxatda chiqishlar soni qanday bo‘ladi",
    "answer": "N/2",
    "noAnswer1": "N",
    "noAnswer2": "2N",
    "noAnswer3": "N/4"
  },
  {
    "question": " Tugun daraxtda o‘chirilayotganda necha hil variant bo‘lishi mumkin?",
    "answer": 3,
    "noAnswer1": 4,
    "noAnswer2": 5,
    "noAnswer3": 2
  },
  {
    "question": "Ikkita muvozanatlangan AVL daraxti berilgan bo‘lsin. Ularni birlashtirish natijasida yangi muvozanatlangan qanday daraxt hosil bo‘lishi kerak?",
    "answer": "binar",
    "noAnswer1": "kop olchamli",
    "noAnswer2": "unar",
    "noAnswer3": "muvozanatlangan"
  },
  {
    "question": "Binar daraxt ustida amal bajarish qiyinligi uning nimasiga to‘g‘ri proporsional?",
    "answer": "balandligiga",
    "noAnswer1": "nomeriga",
    "noAnswer2": "yuzasiga",
    "noAnswer3": "hajmiga"
  },
  {
    "question": " Agar daraxtning o‘ng va chap qism daraxtlari bosqichlari va vazni teng bo‘lsa, u holda bunday binar daraxt qanday muvozanatlangan daraxt deyiladi?",
    "answer": "ideal",
    "noAnswer1": "normal",
    "noAnswer2": "yuqori",
    "noAnswer3": "quyi"
  },
  {
    "question": " Binar daraxt muvozanatlangan deyiladi, agar uning ixtiyoriy bir tugunining xar ikkala qism daraxti balandligi farqi nechaga teng bo‘lsa?",
    "answer": 1,
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "Ideal muvozanatlangan daraxtda xar bir tugundan chiquvchi qism daraxtlar nimasiga teng xisoblanadi?",
    "answer": "balandlik",
    "noAnswer1": "yuza",
    "noAnswer2": "hajmi",
    "noAnswer3": "orni"
  },
  {
    "question": " Nechanchi yili muvozanatlangan AVL daraxtni taklif etishgan?",
    "answer": 1962,
    "noAnswer1": 1982,
    "noAnswer2": 1968,
    "noAnswer3": 1958
  },
  {
    "question": "AVL daraxtida xar bir tugunning o‘ng va chap qism daraxtlari balandliklari orasidagi farq nechchidan katta emas. ",
    "answer": 1,
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": " Ildizdan to eng pastgi tugungacha bo‘lgan tugunlar soni nima?",
    "answer": "balandlik",
    "noAnswer1": "qiymati",
    "noAnswer2": "tartib nomeri",
    "noAnswer3": "yuza"
  },
  {
    "question": " Agar daraxt balandligi nechaga teng bo‘lsa, hech bo‘lmaganda 5ta taqqoslashni bajarishga to‘g‘ri keladi?",
    "answer": 5,
    "noAnswer1": 6,
    "noAnswer2": 4,
    "noAnswer3": 3
  },
  {
    "question": "Eng oddiy holatda daraxtni shunday qurish mumkinki, bunda uning balandligi elementlar soniga teng bo‘ladi va daraxt necha bog‘lamli ro‘yhatli bo‘lib chiqadi?",
    "answer": 1,
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "AVL-daraxtidan tugunni o‘chirish oddiy ikkilik daraxtidan shunga o‘xshash operatsiyani amalga oshirishdan ancha murakkab bo‘lib, necha bosqichlarni o‘z ichiga oladi?",
    "answer": 3,
    "noAnswer1": 2,
    "noAnswer2": 4,
    "noAnswer3": 5
  },
  {
    "question": " new_node funksiyasi qanday tugunni yaratish uchun qo‘llaniladi?",
    "answer": "yangi",
    "noAnswer1": "qoshimcha",
    "noAnswer2": "ikkitalik",
    "noAnswer3": "sodda"
  },
  {
    "question": "Burib muvozanatlash algoritmining nechta usullari mavjud?",
    "answer": 4,
    "noAnswer1": 5,
    "noAnswer2": 3,
    "noAnswer3": 6
  },
  {
    "question": "AVL daraxtda xar bir tugunning muvozanatlanganlik koeffisiyenti qanaqa to‘plamdan qiymat qabul qiladi ?",
    "answer": "(-1, 0, 1)",
    "noAnswer1": "(-1, 1)",
    "noAnswer2": "(-2,-1, 0, 1,2)",
    "noAnswer3": 0
  },
  {
    "question": "Agar bit maydonida nechchi yozilgan bo‘lsa, demak, left va right ko‘rsatgichlar shu tugunni o‘ng va chap qism daraxtlarini ko‘rsatadilar?",
    "answer": 0,
    "noAnswer1": 1,
    "noAnswer2": 2,
    "noAnswer3": -1
  },
  {
    "question": "… bu biror obyekt, jarayon, xodisa yoki voqeylikni ifodalab beruvchi belgi yoki belgilar majmuasi",
    "answer": " Malumot",
    "noAnswer1": "Jadval",
    "noAnswer2": "Yuklama",
    "noAnswer3": "Subyekt"
  },
  {
    "question": "… bu tuzilmani tashkil qiluvchi elementlar va ular orasidagi bog`liqlikni ko'rsatib beruvchi munosabat ",
    "answer": "Malumotlar tuzilmasi",
    "noAnswer1": "Algaritm",
    "noAnswer2": "Modulyar qism",
    "noAnswer3": "Modul"
  },
  {
    "question": "… bu tadqiq etilayaotgan obyekt, jarayonini ma'lum bir qonuniyatlar orqali ifodalash",
    "answer": "Abstrakt qism",
    "noAnswer1": "Obyekt",
    "noAnswer2": "Modulyar qism",
    "noAnswer3": "Malumotlar tuzilmasi"
  },
  {
    "question": "Ma`lumotlar tuzilmasini …. tasvirlash - bunda qaralayotgan ma`lumotlar tuzilmasi kompyuter xotirasida, aniqrog`I operativ xotirada qanday joylashishi tushuniladi.",
    "answer": "Fizik",
    "noAnswer1": "Matematik",
    "noAnswer2": "A va B ",
    "noAnswer3": "Barchasi tog`ri"
  },
  {
    "question": "Ma‘lumotlar tuzilmasini …. tasvirlash - bu tuzilmani biror bir dasturlash tilida ifodalashdir.",
    "answer": "Mantiqiy",
    "noAnswer1": "An`anaviy",
    "noAnswer2": "Modulli",
    "noAnswer3": "Maqsadli"
  },
  {
    "question": "…  ko‘rinishidagi ma‘lumotlar tuzilmasi- bu shunday tuzilmaki , uning elementlari orasida hyech qanday munosabat o‘rnatilmagan.",
    "answer": "To`plam",
    "noAnswer1": "Mantiqiy",
    "noAnswer2": "Rost",
    "noAnswer3": "Yolg'on"
  },
  {
    "question": "… – shunday\nabstrakt tuzilmaki, bunda R to‘plam faqatgina bita chiziqli\nmunosabatdan iborat (ya‘ni,  birinchi va ohirgi elementdan tashqari har bir element uchun o‘zidan oldin va keyinkeladigan element mavjud.",
    "answer": "Ketma-ketlik",
    "noAnswer1": "To`plam",
    "noAnswer2": "Matematik",
    "noAnswer3": "Fizik"
  },
  {
    "question": "...– shunday tuzilmaki, bunda R munosabatlar\nto‘plami ikkita chiziqli munosabatdan tashkil topgan\nbo‘ladi.",
    "answer": "Matritsa",
    "noAnswer1": "To`plam",
    "noAnswer2": "Matematik",
    "noAnswer3": "Algoritm"
  },
  {
    "question": "...– bunda R to‘plam iyerarxik tartibdagi bitta\nmunosabatdan tashkil topgan tuzilmadir.",
    "answer": "Daraxt",
    "noAnswer1": "Dik",
    "noAnswer2": "Mik",
    "noAnswer3": "Matritsa"
  },
  {
    "question": "..– bunda R munosabatlar to‘plami faqatgina bitta binar tartibli munosabatdan tashkil topgan bo‘ladi",
    "answer": "Graf",
    "noAnswer1": "Daraxt",
    "noAnswer2": "Dik",
    "noAnswer3": "Ildiz"
  },
  {
    "question": "...– bu shunday ma‘lumotlar tuzilmasiki, bunda R to‘plam ikki yoki undan ortiq turli tartibdagi munosabatlardan tashkil topgan bo‘ladi.",
    "answer": "Gipergraf",
    "noAnswer1": "Funksiya",
    "noAnswer2": "Modul",
    "noAnswer3": "Ildiz"
  },
  {
    "question": "Ma`lumotlar tuzilmasini … qilish -ma‘lumotlar tuzilmasini bir jinsli guruhlarga ajratish jarayoni",
    "answer": "Klassifikatsiya",
    "noAnswer1": "Modulyatsiya",
    "noAnswer2": "Demodulyatsa",
    "noAnswer3": "Klassik"
  },
  {
    "question": "… ma‘lumotlar tuzilmasi - dastur bajarilishi mobaynida tuzilma elementlari soni va/yoki ular orasidagi munosabatlar o‘zgaradi.",
    "answer": "Dinamik",
    "noAnswer1": "Statik",
    "noAnswer2": "Yumshoq",
    "noAnswer3": "Qattiq"
  },
  {
    "question": "… ma‘lumotlar tuzilmasi - dastur bajarilishi obaynida tuzilmani tashkil etuvchi elementlar, ular orasidagi munosabatlar o‘zgarmaydi.",
    "answer": "Statik",
    "noAnswer1": "Dinamik",
    "noAnswer2": "Modulyar qism",
    "noAnswer3": "Barchasi tog`ri"
  },
  {
    "question": "Ma‘lumotlarni standart turlari…",
    "answer": "haqiqiy, mantiqiy, belgili\n(simvol), ko‘rsatkichli",
    "noAnswer1": "bir va ko`p o'zgaruvchilik",
    "noAnswer2": "Qismli",
    "noAnswer3": "Bo'lakli"
  },
  {
    "question": "… – bu butun sonlar to‘plamini qandaydir qism\nto‘plamini ifodalab, uning qiymatlar sohasi kompyuter konfigurasiyasiga bog‘liq ravishda o‘zgarib turadi",
    "answer": "Butun tur",
    "noAnswer1": "Maxfiy tur",
    "noAnswer2": "Ochiq tur",
    "noAnswer3": "Yopiq tur"
  },
  {
    "question": "… – mazkur turga kasr qismlari bor chekli sonlar\nto‘plami kiradi. To‘plamni chekli bo‘lish sharti\nkompyuterda sonlarni ifodalash chegaralanganligi\nbilan bog‘liq.",
    "answer": "Haqiqiy tur",
    "noAnswer1": "Soxta tur",
    "noAnswer2": "Butun tur",
    "noAnswer3": "Odatiy tur"
  },
  {
    "question": "… - mazkur tur mantiqiy mulohazalarni to‘g‘ri\nyoki noto‘g‘riliginii aniqlash uchun ishlatilib, ushbu turdagi o‘zgaruvchi 2 ta qiymatdan faqatgina bittasini qabul qiladi: 0 (false) yoki 1 (true).",
    "answer": "Matiqiy tur",
    "noAnswer1": "Butun tur",
    "noAnswer2": "Soxta tur",
    "noAnswer3": "Ochiq tur"
  },
  {
    "question": "… – mazkur tur o‘zgaruvchilari belgili qiymatlarni qabul qilishadi, masalan, harflar, raqamlar, matematik belgilar va boshqalar.",
    "answer": "Belgili tur",
    "noAnswer1": "Butun tur",
    "noAnswer2": "Qiymatsiz tur",
    "noAnswer3": "Qiymatli tur"
  },
  {
    "question": "…  – bu tur o‘zgaruvchilari ma‘lumotlarni\nko‘rsatkichlari yoki manzillari (adres) to‘plamini namoyon qiladi,",
    "answer": "Ko‘rsatkichli tur",
    "noAnswer1": "Ifodaviy tur",
    "noAnswer2": "Belgisiz tur",
    "noAnswer3": "Algoritm"
  },
  {
    "question": "… - bu eng sodda statik va chiziqli tartiblangan tuzilma.",
    "answer": "Vektor",
    "noAnswer1": "Statika",
    "noAnswer2": "Dinamika",
    "noAnswer3": "Ifoda"
  },
  {
    "question": "… -  elementlari bir turga tegishli, ketma-ket joylashgan va umumiy nomga ega bo‘lgan\ntuzilmadir.",
    "answer": "Massiv",
    "noAnswer1": "To`plam",
    "noAnswer2": "Bo'lak ",
    "noAnswer3": "Qism"
  },
  {
    "question": "… - maydon deb ataluvchi chekli sondagi ma‘lumotlar tuzilmasidir. Turli maydon o‘zgaruvchilari turli turga tegishli bo‘lishi mumkin.",
    "answer": "Yozuv",
    "noAnswer1": "Massiv",
    "noAnswer2": "To'plam",
    "noAnswer3": "Jadval"
  },
  {
    "question": "… -  bu yozuvning chekli majmuasidir.",
    "answer": "Jadval",
    "noAnswer1": "Katak",
    "noAnswer2": "Yozuv",
    "noAnswer3": "Belgi"
  },
  {
    "question": "… – bu yozuv identifikatori. Ushbu identifikatorni saqlash uchun maxsus maydon ajratiladi",
    "answer": "Kalit",
    "noAnswer1": "Matn",
    "noAnswer2": "Dinamika",
    "noAnswer3": "Jadval"
  },
  {
    "question": "... – bu shunday kalitki, u ikkidan ortiq maydonni o‘z ichiga oladi.",
    "answer": "Qo`shimcha kalit",
    "noAnswer1": "Kalit",
    "noAnswer2": "Yozuv kaliti",
    "noAnswer3": "Qulf"
  },
  {
    "question": "… – bu bir turga tegishli bo‘lgan elementlar ketma-\nketligidir.",
    "answer": "Ro`yxat",
    "noAnswer1": "Jadval",
    "noAnswer2": "Satr",
    "noAnswer3": "Yozuv"
  },
  {
    "question": "FIFO - ..",
    "answer": "Firs input - First output",
    "noAnswer1": "Firs Inter First Output",
    "noAnswer2": "A va B",
    "noAnswer3": "Barchasi tog`ri"
  },
  {
    "question": ".. – bunda tizimga kelib tushgan birinchi talabga\nbirinchi bo‘lib xizmat ko‘rsatiladi va tizimdan\nchiqariladi",
    "answer": "Navbat",
    "noAnswer1": "Qator",
    "noAnswer2": "Bosqich",
    "noAnswer3": "Baxo"
  },
  {
    "question": "…  - bunda tizimga kelib\ntushgan oxirgi talabga birinchi\nbo‘lib xizmat ko‘rsatiladi va\ntizimdan chiqariladi.",
    "answer": "Stek",
    "noAnswer1": "Dek",
    "noAnswer2": "MEK",
    "noAnswer3": "Jadval"
  },
  {
    "question": "… – bu ikki chetga ega bo‘lgan navbatdir. Talabga\nxizmat ko‘rsatish tizimning har ikkala tomonidan amalga oshirilishi mumkin.",
    "answer": "Dek",
    "noAnswer1": "Stek",
    "noAnswer2": "Rep",
    "noAnswer3": "MEK"
  },
  {
    "question": "… – bunda ro‘yxatni tashkil etuvchi elementlar orasidagi bog‘liqlik ko‘rsatkichlar orqali amalga\noshiriladi.",
    "answer": "Bog‘langan ro‘yxat",
    "noAnswer1": "Belgili ro`yxat",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "tog`ri javob yo`q"
  },
  {
    "question": "… ro‘yxat – bunda tuzilma elementlari ko‘pi bilan tuzilmaning m ta elementi bilan bog‘langan bo‘ladi",
    "answer": " m bog`lamli",
    "noAnswer1": "Ko`p bog`lamli",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "Barchasi tog`ri"
  },
  {
    "question": "… – bunda ro‘yxatni tashkil etuvchi elementlar mavjud emas.",
    "answer": " Bo‘sh ro‘yxat ",
    "noAnswer1": "Belgili ro`yxat",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "Barchasi tog`ri"
  },
  {
    "question": "… – bunda ro‘yxatni tashkil etuvchi elementlar orasidagi bog‘liqlik qat‘iy tartiblangan bo‘lib,\nelement ko‘rsatkichi o‘zidan bitta navbatdagi yoki bitta oldingi element adresini o‘z ichiga oladi.",
    "answer": "Chizili ro‘yxat ",
    "noAnswer1": "Belgili ro`yxat",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "Barchasi tog`ri"
  },
  {
    "question": "… -  ro‘yxat elementlari ko‘rsatkichlari maydoni\nyagona bo‘ladi",
    "answer": "Bir bog‘lamli ro‘yxat",
    "noAnswer1": "ko`p bog`lamli",
    "noAnswer2": "Ayana yo`nalgan ",
    "noAnswer3": "Qattiq ro`yxat"
  },
  {
    "question": "... – chiziqli ro‘yxatda eng so‘ngi elementning ko‘rsatkichlari maydoniga ro‘yxatning birinchi elementi manzili o‘zlashtirilgan bo‘ladi.",
    "answer": "Halqasimon ro‘yxat",
    "noAnswer1": "Bir bog‘lamli ro‘yxat",
    "noAnswer2": "ko`p bog`lamli",
    "noAnswer3": "Ayana yo`nalgan "
  },
  {
    "question": " ...- bu elementlari soni bir hil faqatgina teskari ketma- ketlikda yozilgan ikkita bir bog‘lamli ro‘yxatdir.",
    "answer": "Ikki bog‘lamli ro‘yxat",
    "noAnswer1": "Bir bog‘lamli ro‘yxat",
    "noAnswer2": "ko`p bog`lamli",
    "noAnswer3": "Belgili ro`yxat"
  },
  {
    "question": "… - uzilmani har bir elementi boshqa ixtiyoriy elementga va aksincha, har bir elementga tuzilmaning ixtiyoriy sondagi elementi murojaat qilishi mumkin.",
    "answer": "Chiziqsiz ma‘lumotlar\ntuzilmasi",
    "noAnswer1": "Belgili  ma‘lumotlar\ntuzilmasi",
    "noAnswer2": "Ro`yxatli  ma‘lumotlar\ntuzilmasi",
    "noAnswer3": "Oniy  ma‘lumotlar\ntuzilmasi"
  },
  {
    "question": "Qanday tushunchani birinchi marotaba 1936 yil vengriya matematigi Denni Kyonig kiritgan?",
    "answer": "Graf",
    "noAnswer1": "daraxt soni",
    "noAnswer2": "ildiz",
    "noAnswer3": "navbat"
  },
  {
    "question": "isEmpty() ni vazifasi?",
    "answer": "navbatni bo‘shlikka tekshirish",
    "noAnswer1": "navbatni tozalash",
    "noAnswer2": "navbatni ochirish"
  },
  {
    "question": "enqueue(el) ni vazifasi.?",
    "answer": "el elementni navbatga joylashtirish",
    "noAnswer1": "navbatni ochirish",
    "noAnswer2": "navbatni tozalash",
    "noAnswer3": "navbatga joylashtirish"
  },
  {
    "question": "dequeue() ni vazifasi.?",
    "answer": "navbatdan birinchi elementni olish",
    "noAnswer1": "navbatdan ikkinchi elementni olish",
    "noAnswer2": "navbatdan uchinchi elementni olish",
    "noAnswer3": "navbatdan tortinchi elementni olish"
  },
  {
    "question": "Navbatning birinchi elementini uni o‘chirmasdan qaytaradi?",
    "answer": "firstEl()",
    "noAnswer1": "isEmpty()",
    "noAnswer2": "clear()",
    "noAnswer3": "dequeue()"
  },
  {
    "question": "Next  ni vazifasi?.",
    "answer": "keyingi elementga ko‘rsatkich",
    "noAnswer1": "elementga ko‘rsatkich",
    "noAnswer2": "so'ngi elementga ko‘rsatkich",
    "noAnswer3": "7- elementga ko‘rsatkich"
  },
  {
    "question": "Balandlik bu nima.?",
    "answer": "bu daraxt bosqichi soni",
    "noAnswer1": "daraxt soni",
    "noAnswer2": "shoxlari",
    "noAnswer3": "daraxt ildizlri"
  },
  {
    "question": "Tugun balandligi  bu?",
    "answer": "height",
    "noAnswer1": "width",
    "noAnswer2": "left",
    "noAnswer3": "right"
  },
  {
    "question": "R(right)-ni vazifasi qanday?",
    "answer": "bir marta o‘ngga burash",
    "noAnswer1": "bir marta chapga burash",
    "noAnswer2": "chapga va o‘ngga burish",
    "noAnswer3": "o‘ngga va chapga burish"
  },
  {
    "question": "L(right)-ni vazifasi qanday?",
    "answer": "bir marta chapga burash",
    "noAnswer1": "bir marta o‘ngga burash",
    "noAnswer2": "chapga va o‘ngga burish",
    "noAnswer3": "chapga va o‘ngga burish"
  },
  {
    "question": "L(left) R(right)-ni vazifasi qanday?",
    "answer": "chapga va o‘ngga burish",
    "noAnswer1": "chapga va o‘ngga burish",
    "noAnswer2": "bir marta chapga burash",
    "noAnswer3": "bir marta o‘ngga burash"
  },
  {
    "question": "R(right) L(left)-ni vazifasi qanday?",
    "answer": "chapga va o‘ngga burish",
    "noAnswer1": "chapga va o‘ngga burish",
    "noAnswer2": "bir marta chapga burash",
    "noAnswer3": "bir marta o‘ngga burash"
  },
  {
    "question": "Vertex Degree-qanday manoni anglatadi?",
    "answer": "tugun darajasi",
    "noAnswer1": "tugun va tugunlar",
    "noAnswer2": "tugun qiymati",
    "noAnswer3": "tugun soni"
  },
  {
    "question": "Bironta tugundan boshqa bir tugungacha bo'lgan yonma-yon joylashgan tugunlar ketma-ketligi nima?",
    "answer": "Yo'l",
    "noAnswer1": "daraxt soni",
    "noAnswer2": "ildiz",
    "noAnswer3": "navbat"
  },
  {
    "question": "Qanday tushunchani birinchi marotaba 1936 yil vengriya matematigi Denni Kyonig kiritgan?",
    "answer": "Graf",
    "noAnswer1": "daraxt soni",
    "noAnswer2": "ildiz",
    "noAnswer3": "navbat"
  },
  {
    "question": "clear() ni vazifasi.?",
    "answer": "navbatni tozalash",
    "noAnswer1": "navbatni ochirish",
    "noAnswer2": "ayirish",
    "noAnswer3": "qoshish"
  },
  {
    "question": "Boshi va oxiri tutashuvchi tugundan iborat yo'l nima hisoblanadi?",
    "answer": "Halqa(crcle)",
    "noAnswer1": "Vertex Degree(tugun darajasi)",
    "noAnswer2": "root(ildiz)",
    "noAnswer3": "left(chap)"
  },
  {
    "question": " Istalgan tugunlari qo'shni bo'lgan graf xisoblanadi yani barcha tugunlar o'zaro birlashtirilgan bo'lsa bu..?",
    "answer": "To'liq graf (complete graph)",
    "noAnswer1": "yagona graf(only graph)",
    "noAnswer2": "yarim graf(half graph)",
    "noAnswer3": "graf(graph)"
  },
  {
    "question": " int main(){\nint n = 757, x, y, z;\nx = n / 100;\ny = n / 10 % 10;\nz = n % 10;\nbool OK = x != y && y != z;\ncout << OK;\nreturn 0;  } Ushbu dastur natijasini toping\n",
    "answer": 1,
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "Malumotlarni tasvirlash bosqichlari nechta ",
    "answer": "3.",
    "noAnswer1": "4.",
    "noAnswer2": "5.",
    "noAnswer3": "6."
  },
  {
    "question": "Ob’yekt, xodisa yoki biror bir jarayonni matematik formulalar orqali ifodalash qaysi bosqichga kiradi",
    "answer": " abstrak ",
    "noAnswer1": "mantiqiy",
    "noAnswer2": "fizik   ",
    "noAnswer3": "modul"
  },
  {
    "question": "Ma’lumotlar tuzilmasini biror  bir  dasturlash  tilida  ifodalanishi qaysi bosqichga kiradi",
    "answer": "mantiqiy",
    "noAnswer1": " abstrak ",
    "noAnswer2": "fizik   ",
    "noAnswer3": "modul"
  },
  {
    "question": " Qaysi bosqichda EXM  xotirasi chekli bo`lganligi sababli, xotirani taqsimlash va uni boshqarish muammosi hal qiladi",
    "answer": "fizik   ",
    "noAnswer1": " abstrak ",
    "noAnswer2": "mantiqiy",
    "noAnswer3": "modul"
  },
  {
    "question": " ......-biror bir ob’yekt, jarayon, xodisa yoki voqelikni ifodalab beruvchi belgi yoki belgilar majmuasidir.Nuqtalar o’rniga mos javobni qo’ying.¬¬¬¬",
    "answer": "Malumot",
    "noAnswer1": " axborot ",
    "noAnswer2": "qoida",
    "noAnswer3": "mantiqiy fayl"
  },
  {
    "question": "Butun sonlar tipini ko’rsating",
    "answer": "int",
    "noAnswer1": "float",
    "noAnswer2": "bool",
    "noAnswer3": "char"
  },
  {
    "question": ".Xaqiqiy sonlar tipini ko’rasting",
    "answer": "float",
    "noAnswer1": "int",
    "noAnswer2": "bool",
    "noAnswer3": "char"
  },
  {
    "question": "Mantiqiy sonlar tipini ko’rsating",
    "answer": "bool",
    "noAnswer1": "int",
    "noAnswer2": "float",
    "noAnswer3": "char"
  },
  {
    "question": "Belgili sonlar tipini ko’rsating",
    "answer": "char",
    "noAnswer1": "bool",
    "noAnswer2": "float",
    "noAnswer3": "int"
  },
  {
    "question": ".Butun  sonlar turi qanday turga bo’linadi",
    "answer": "ishorali va ishorasiz",
    "noAnswer1": "musbat va manfiy ",
    "noAnswer2": " juft va toq  ",
    "noAnswer3": " hech qanday"
  },
  {
    "question": " Ma’lumotlar tuzilmasi necha xil usulda uzatiladi?",
    "answer": 4,
    "noAnswer1": 3,
    "noAnswer2": 2,
    "noAnswer3": 1
  },
  {
    "question": " Foydalanuvchi tomonidan aniqlanadigan toifalar necha xil?",
    "answer": 2,
    "noAnswer1": 4,
    "noAnswer2": 6,
    "noAnswer3": 8
  },
  {
    "question": "Foydalanuvchi tomonidan aniqlanadigan toifalar qaysilar?",
    "answer": "diapozonli va sanaladigan",
    "noAnswer1": "daraxt va sanalmaydigan",
    "noAnswer2": " faqat ketma- ket  ",
    "noAnswer3": "turli xil"
  },
  {
    "question": "C++ dasturlash tilida satrlar chegarasi qancha bo’ladi?",
    "answer": " 0 dan 255 gacha",
    "noAnswer1": " 0 dan 256 gacha",
    "noAnswer2": "0 dan 1024 gacha ",
    "noAnswer3": "0 dan 512 gacha"
  },
  {
    "question": " Belgili toifalar necha xil bo’ladi?",
    "answer": 2,
    "noAnswer1": 15,
    "noAnswer2": 28,
    "noAnswer3": "hech qanday"
  },
  {
    "question": " Belgili toifalar qaysilar?",
    "answer": "o’zlashtirish va taqqoslash   ",
    "noAnswer1": "faqat taqqoslash  ",
    "noAnswer2": "toifalar 3 xil bo’ladi ",
    "noAnswer3": "faqat o’zlashtirish"
  },
  {
    "question": " Stek qanday elon qilinadi?",
    "answer": "Stack <toifa> stek_nomi;   ",
    "noAnswer1": "Stack nomi <toifa>",
    "noAnswer2": "<toifa> Stack nomi  ",
    "noAnswer3": "xammasi xato"
  },
  {
    "question": "clear() qanday vazifa bajaradi?",
    "answer": "stekni tozlayadi",
    "noAnswer1": "stekni yangilaydi ",
    "noAnswer2": "stekga yangi elemant kiritadi",
    "noAnswer3": "vazifa bajarmaydi."
  },
  {
    "question": " pop() qanday vazifa bajaradi?",
    "answer": " stekdan elemantni o’chiradi",
    "noAnswer1": "stekka element qo’shadi ",
    "noAnswer2": "stek elementini o’zgartiradi",
    "noAnswer3": "vazifa bajarmaydi"
  },
  {
    "question": "push(el) qanday vazifa bajaradi?",
    "answer": " elememnt kiritadi",
    "noAnswer1": "element tanlaydi ",
    "noAnswer2": "element o’chiradi ",
    "noAnswer3": "element o’zgartiradi."
  },
  {
    "question": "Yarimstatik  ma‘lumotlar  tuzilmasiga nimalar kiradi ",
    "answer": "stek, dek, navbat ",
    "noAnswer1": "qator, dek, navbat",
    "noAnswer2": "stek, dek, ustun",
    "noAnswer3": "qator, dek, ustun"
  },
  {
    "question": "Stek qanday prinsip boyicha ishlaydi",
    "answer": "oxirgi  kelgan  birinchi  ketadi ",
    "noAnswer1": " oxirgi  kelgan  oxiri  ketadi",
    "noAnswer2": "birinchi  kelgan  birinchi  ketadi",
    "noAnswer3": "birinchi  ketgan  oxiri  keladi"
  },
  {
    "question": "Daturning qiymatini toping?\n#include <iostream>\nusing namespace std;\nint main()\n{\nint a=3,b;\nb=a+3;\ncout>>b;\nreturn 0;}",
    "answer": 6,
    "noAnswer1": 5,
    "noAnswer2": 4,
    "noAnswer3": 9
  },
  {
    "question": "Qiymatni hisoblang ?\nInt n,S;\ncin>>n;    //5\nS=0;\nfor(int i=0; i<=n;i++)\nS+=I;\ncout<<S;",
    "answer": 15,
    "noAnswer1": 16,
    "noAnswer2": 14,
    "noAnswer3": 13
  },
  {
    "question": "dastur natijasini toping\n....\nint main()\n{ int a=7;\ncout<<a<<\" \";\ncout<<a++<<\" \";\ncout<<++a;\n    return 0;  }\n",
    "answer": "7 7 9 ",
    "noAnswer1": "7 7 7 ",
    "noAnswer2": "7 9 7 ",
    "noAnswer3": "7 9 9 "
  },
  {
    "question": "Ushbu dastur natijasi nima chiqadi?\n#include <iostream>\n#include <math.h>\nusing namespace std;\nint main ()\n{int x,y;   //x=132 y=7\ncin>>x>>y;\ncout<<(x%y);\nreturn 0;  }",
    "answer": 6,
    "noAnswer1": 1,
    "noAnswer2": 0,
    "noAnswer3": "xatolik beradi"
  },
  {
    "question": "Ushbu dastur natijasi nima chiqadi?\n#uinclude <iostream>\nusing namespace std;//a=30 b=40\nint main (){\nint a,b,c;\ncin>>a>>b;\nc=a>b?a:b;\ncout<<c;\nreturn 0;  }",
    "answer": 40,
    "noAnswer1": 30,
    "noAnswer2": 1,
    "noAnswer3": 0
  },
  {
    "question": "Registorlarni vazifasi nima?",
    "answer": "Dasturni bajarilish tezligini ortirib beradi ",
    "noAnswer1": "Dasturni hatoliklarini qidiradi   ",
    "noAnswer2": "Dasturdagi qo'shimcha ma'lumotlarni birlashtiradi",
    "noAnswer3": "Dastur uchun hotirani band qilib turadi"
  },
  {
    "question": "Algoritm xossalari nechta?",
    "answer": 5,
    "noAnswer1": 4,
    "noAnswer2": 3,
    "noAnswer3": 2
  },
  {
    "question": "bitta asosdan tarqalgan tuzilma qaysi tuzlimaga misol bo’ladi?",
    "answer": "daraxt",
    "noAnswer1": "ketma ket  ",
    "noAnswer2": "to’plam",
    "noAnswer3": "graf"
  },
  {
    "question": "Malumotlar tuzilmasining asosiy ko’rinishi necha turga bo’linadi?",
    "answer": 6,
    "noAnswer1": 4,
    "noAnswer2": 3,
    "noAnswer3": 2
  },
  {
    "question": "Malumotlar tuzilmalari to’g’ri keltirilgan javobni aniqlang?",
    "answer": "MMT VA FMT   ",
    "noAnswer1": "MMT",
    "noAnswer2": "FMT",
    "noAnswer3": "xech qanday"
  },
  {
    "question": "Malumotlar tuzilmasi necha xil?",
    "answer": 2,
    "noAnswer1": 3,
    "noAnswer2": 4,
    "noAnswer3": 5
  },
  {
    "question": "Daraxt ko‘ruvini amalga oshirish uchun nechta prosedurani bajarish kerak?",
    "answer": 3,
    "noAnswer1": 2,
    "noAnswer2": 4,
    "noAnswer3": 7
  },
  {
    "question": "Daraxtlar ustida bajariladigan amallar necha tur?",
    "answer": 3,
    "noAnswer1": 2,
    "noAnswer2": 5,
    "noAnswer3": 6
  },
  {
    "question": "Daraxt – bu nima? ",
    "answer": "bu chiziqsiz bog‘langan ma‘lumotlar tuzilmasidir  ",
    "noAnswer1": "chiziqli bog’angan malumotlar tuzilmasi   ",
    "noAnswer2": "ketma ket bog’langan malumotlar tuzilmasi  ",
    "noAnswer3": "parallel bog’langan malumotlar tuzilmasi"
  },
  {
    "question": "nonRecursiveReverse() har bir iteratsiyada kamida nechta murojaatdan foydalanadi.",
    "answer": "1 ta  ",
    "noAnswer1": "foydalanilmaydi",
    "noAnswer2": "cheksiz foydalaniladi  ",
    "noAnswer3": "3 ta"
  },
  {
    "question": "Rekursiv ta'riflar nech xil maqsadda xizmat qiladi:",
    "answer": 2,
    "noAnswer1": 3,
    "noAnswer2": 4,
    "noAnswer3": 6
  },
  {
    "question": "Dumli rekursiya faqatgina nechta rekursiv murojaatni funksiya oxirida qo‘llash         orqali xarakterlanadi.",
    "answer": 1,
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "aktivatsiya rekordi ishga tushirish vaqti stekida yaratiladi.",
    "answer": "run-time stack   ",
    "noAnswer1": "time stack   ",
    "noAnswer2": "run-time    ",
    "noAnswer3": "run stack"
  },
  {
    "question": "Dumli rekursiya faqatgina bitta rekursiv murojaatni funksiya qayerida qo‘llaydi",
    "answer": "oxirida",
    "noAnswer1": "boshida",
    "noAnswer2": "ruturn dan keyin  ",
    "noAnswer3": "int main() dan keyin"
  },
  {
    "question": "Agar  oxirgi  element  birinchi element  ko’rsatkichi  bilan  bog’langan  bo’lsa qanday ro’yhat deyiladi",
    "answer": "halqasimon",
    "noAnswer1": "uch bog’lamli   ",
    "noAnswer2": "bir bog’lamli    ",
    "noAnswer3": "ketma-ketli bog’langan"
  },
  {
    "question": "Agar har bir element o’zidan  oldingi  va  o’zidan  keyingi  element  bilan  bog’langan  bolsa qanday ro’yhat deyiladi",
    "answer": "ikki bog’lamli     ",
    "noAnswer1": "uch bog’lamli   ",
    "noAnswer2": "bir bog’lamli    ",
    "noAnswer3": "ketma-ketli bog’langan"
  },
  {
    "question": "Tuzilmada  elementlar  o‘zidan  keyingi  element  bilan  bog‘langan  bolsa qanday ro’yhat deyiladi",
    "answer": "bir bog’lamli     ",
    "noAnswer1": "ikki bog’lamli   ",
    "noAnswer2": "uch bog’lamli    ",
    "noAnswer3": "ketma-ketli bog’langan"
  },
  {
    "question": "Dinamik tuzilmada elementlar qayerdav joylashadi",
    "answer": "xotiraning istalgan qismida   ",
    "noAnswer1": "faylda ",
    "noAnswer2": "tashqi xotirada   ",
    "noAnswer3": "saqlanmaydi"
  },
  {
    "question": "Dastur  bajarilishi  mobaynida  o‘zgarib  turadigan  tuzilmaga nima deyiladi",
    "answer": "dinamik",
    "noAnswer1": "static",
    "noAnswer2": "fizik",
    "noAnswer3": "mexanik"
  },
  {
    "question": "Pop_front()-qanday vazifani bajaradi",
    "answer": "oxiridan element chiqarish   ",
    "noAnswer1": "boshidan element chiqarish  ",
    "noAnswer2": "orqasidan element chiqarish  ",
    "noAnswer3": "o‘rtasidan element chiqarish"
  },
  {
    "question": ". Dek bilan ishash uchun qaysi kutubxona chaqiraladi?",
    "answer": "#include<deque.h>   ",
    "noAnswer1": "#include<stek.h>",
    "noAnswer2": "#include<queue.h> ",
    "noAnswer3": "#include<stype.h>"
  },
  {
    "question": "Dek so‘zi qanday manoni anglatadi?",
    "answer": "2 ta chetga ega    ",
    "noAnswer1": "1 ta chetga ega   ",
    "noAnswer2": "orqaga qaytish   ",
    "noAnswer3": "oldinga yurish"
  },
  {
    "question": "dequeue()-qanday vazifa bajaradi",
    "answer": "navbatni birinchi elementini olish   ",
    "noAnswer1": "elementni navbatga joylashtiradi   ",
    "noAnswer2": "element navbat o’chiradi   ",
    "noAnswer3": "elementni o’zgartiradi"
  },
  {
    "question": "enqueue(el) qanday vazifa bajaradi?",
    "answer": "elementni navbatga joylashtiradi   ",
    "noAnswer1": "elementni kiritadi  ",
    "noAnswer2": "element navbat o’chiradi   ",
    "noAnswer3": "elementni o’zgartiradi"
  },
  {
    "question": "Ma'lumotlar tuzilmasi fanida daraxt so`zi ko`pincha qanday nomlanadi?",
    "answer": "Tree",
    "noAnswer1": "oila ",
    "noAnswer2": "sanoq tizimi",
    "noAnswer3": "safe"
  },
  {
    "question": "O`ziga murojaat qiluvchi funksiya?",
    "answer": "Rekursiv",
    "noAnswer1": "void",
    "noAnswer2": "return",
    "noAnswer3": "main"
  },
  {
    "question": "...– bu bironta ob‘ektga tegishli turli toifadagi maydonlar to‘plamidir.",
    "answer": "Yozuv ",
    "noAnswer1": "obekt",
    "noAnswer2": "Dastur",
    "noAnswer3": "Daraxt"
  },
  {
    "question": "Primitiv toifalar (...)",
    "answer": "ma‘lumotlarning sodda toifalari",
    "noAnswer1": "Ma'lumotlar bazasi",
    "noAnswer2": "sanoq tizimi",
    "noAnswer3": "tree"
  },
  {
    "question": "Ma‘lumotlar toifalari … turga ajratiladi",
    "answer": 3,
    "noAnswer1": 5,
    "noAnswer2": 2,
    "noAnswer3": 7
  },
  {
    "question": "... – elementlarni ma‘lum bir tartibda joylashtirish amali",
    "answer": "Saralash",
    "noAnswer1": "ma‘lumotlarning sodda toifalari",
    "noAnswer2": "Qidirish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "… -  tuzilmadan bironta elementni joylashgan o‘rnini aniqlash amali",
    "answer": "Qidirish",
    "noAnswer1": "Saralash",
    "noAnswer2": "Kiritish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "... - tuzilma elementlariga 1 martadan murojaat qilish amali.",
    "answer": " Ko‘rikdan o‘tkazish (traversing)",
    "noAnswer1": "Saralash",
    "noAnswer2": "Kiritish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "... – xar bit amal oddiy va soda bo‘lishi kerak",
    "answer": "Samaradorlilik",
    "noAnswer1": "Saralash",
    "noAnswer2": "Kiritish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "Qiymat qaytarmaydigan funksiya qaysi?",
    "answer": "void",
    "noAnswer1": "main",
    "noAnswer2": "int",
    "noAnswer3": "rekursiv"
  },
  {
    "question": "if(n<0){cout<<a;} else{cout<<a-1;}  a=3,n=0 bo`lsa, ekranga qanday qiymat chiqadi?",
    "answer": 2,
    "noAnswer1": 1,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "if(n<0){cout<<a;} else{cout<<a-1;}  a=3,n=-2 bo`lsa, ekranga qanday qiymat chiqadi?",
    "answer": 3,
    "noAnswer1": 2,
    "noAnswer2": 4,
    "noAnswer3": 0
  },
  {
    "question": "if(n=>0){cout<<a;} else{cout<<a-1;}  a=3,n=-2 bo`lsa, ekranga qanday qiymat chiqadi?",
    "answer": "dastur xato",
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "if(n=>0){cout<<a;} else{cout<<a-1;}  a=5,n=-2 bo`lsa, ekranga qanday qiymat chiqadi?",
    "answer": "dastur xato",
    "noAnswer1": 2,
    "noAnswer2": 3,
    "noAnswer3": 4
  },
  {
    "question": "for(int i=5;i<8;i++){...} ushbu sikl necha marta takrorlanadi?",
    "answer": 3,
    "noAnswer1": 5,
    "noAnswer2": 8,
    "noAnswer3": 0
  },
  {
    "question": "for(int i=5;i<=8;i++){...} ushbu sikl necha marta takrorlanadi?",
    "answer": 4,
    "noAnswer1": 3,
    "noAnswer2": 5,
    "noAnswer3": 7
  },
  {
    "question": "for(int i=0;i<=8;i++){...} ushbu sikl necha marta takrorlanadi?",
    "answer": 9,
    "noAnswer1": 8,
    "noAnswer2": 0,
    "noAnswer3": 7
  },
  {
    "question": "Sharti keyin beriladugan sikl operatori?",
    "answer": "do{...}while(…)",
    "noAnswer1": "while(…){…}",
    "noAnswer2": "for(…){…}",
    "noAnswer3": "savol xato"
  },
  {
    "question": "Sharti oldin beriladugan sikl operatori?",
    "answer": "while(…){…}",
    "noAnswer1": "do{...}while(…)",
    "noAnswer2": "for(…){…}",
    "noAnswer3": "savol xato"
  },
  {
    "question": "Parametrli sikl operatori qaysi?",
    "answer": "for(…){…}",
    "noAnswer1": "do{...}while(…)",
    "noAnswer2": "while(…){…}",
    "noAnswer3": "savol xato"
  },
  {
    "question": "do{…}while(n>0) n=0 bo`lganda sikl  necha marta takrorlanadi? ",
    "answer": 1,
    "noAnswer1": 0,
    "noAnswer2": 2,
    "noAnswer3": "cheksiz"
  },
  {
    "question": "for(int i=1; i<n;i++){n--;}  n=0 bo`lganda sikl  necha marta takrorlanadi? ",
    "answer": "cheksiz",
    "noAnswer1": 2,
    "noAnswer2": 1,
    "noAnswer3": 0
  },
  {
    "question": "switch quyidagi tiplarning qaysi biri bilan ishlaydi?",
    "answer": "int ",
    "noAnswer1": "float",
    "noAnswer2": "double"
  },
  {
    "question": "int aloqa(){int a=5; return a;} funksiya nomini toping",
    "answer": "aloqa",
    "noAnswer1": "int",
    "noAnswer2": "return",
    "noAnswer3": "a"
  },
  {
    "question": "for(int i ; i<=10 ; i++) - bu siklda [i] nima?",
    "answer": "sikl parametri",
    "noAnswer1": "sikl operatori, majburiy ajratuvchi",
    "noAnswer2": "o’zgarmas",
    "noAnswer3": "sikl operatori"
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