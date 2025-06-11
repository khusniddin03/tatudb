const data = [
  {
    "question": "Dasturchi tomonidan ixtiyoriy kiritilgan mavjud tiplar asosida yaratilgan strukturalangan toifa nima deyiladi?",
    "answer": "Class.",
    "noAnswer1": "struct;",
    "noAnswer2": "void;",
    "noAnswer3": "char;"
  },
  {
    "question": "Dek so‘zi qanday manoni anglatadi?",
    "answer": "2 ta chetga ega",
    "noAnswer1": "2 ta chiqishga ega",
    "noAnswer2": "orqaga va oldinga qaytish",
    "noAnswer3": "oldinga yurish"
  },
  {
    "question": "Qaysi saralash algoritmlari faylda (tashqi xotirada) saralash uchun qo’llaniladi?",
    "answer": "tashqi",
    "noAnswer1": "merge",
    "noAnswer2": "piramida",
    "noAnswer3": "counting"
  },
  {
    "question": "Qaysi saralash algoritmlari massivda (ichki xotirada) saralash uchun qo’llaniladi?",
    "answer": "ichki",
    "noAnswer1": "merge",
    "noAnswer2": "piramida",
    "noAnswer3": "counting"
  },
  {
    "question": "Dinamik malumotlar tuzilmasi nechta xususiyatga ega?",
    "answer": "2 turga",
    "noAnswer1": "5 turga",
    "noAnswer2": "4 turga",
    "noAnswer3": "7 turga"
  },
  {
    "question": "Insertion saralash algoritmining go’yasi qanday?",
    "answer": "massivdagi elementlarni huddi karta o’yinidek, birma-bir o’z joyiga joylab chiqish",
    "noAnswer1": "massivdagi elementlarni kattasini chap tomonga kichigini o’ng tomonga tanlab saralash",
    "noAnswer2": "massivdagi elementlarni kattasini o’ng tomonga kichigini chap tomonga tanlab saralash",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "Eng ko‘p foydalaniladigan daraxtlar turi qaysi?",
    "answer": "binar",
    "noAnswer1": "heap",
    "noAnswer2": "ko’p o’lchamli",
    "noAnswer3": "muvozanatlangan"
  },
  {
    "question": "Saralash algoritmlarining qay biri tez yoki sekin ishlashini, qaysi sayt orqali simulatsiyasini ko’rsak bo’ladi?",
    "answer": "toptal.com",
    "noAnswer1": "visualgo.net",
    "noAnswer2": "simulatorsort.net",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "EXM xotirasida daraxtni ifodalashning eng qulay usuli",
    "answer": "Uni bog`langan ro`yxatlar ko`rinishida tasvirlash",
    "noAnswer1": "Uni bog`lanmagan ro`yxatlar ko`rinishida tasvirlash",
    "noAnswer2": "Uni ro`yxatlar ko`rinishida tasvirlash",
    "noAnswer3": "Uni bog`lamli ro`yxatlar ko`rinishida tasvirlash"
  },
  {
    "question": "Long double tipi xotiradan qancha joy egallaydi?",
    "answer": "8 bayt",
    "noAnswer1": "12 bayt",
    "noAnswer2": "14 bayt",
    "noAnswer3": "Kompyuter konfiguratsiyasiga qarab"
  },
  {
    "question": "Fayl nima?",
    "answer": "Malumotlarni saqlash uchun tashqi xotiraning nomlangan qismi",
    "noAnswer1": "Baytlar yig`indisi;",
    "noAnswer2": "Dasturda ishlashni osonlashtirish uchun kerakli funksiya",
    "noAnswer3": "Malumotlarning tartiblangan, ketma-ketlikdagi yig'indisi"
  },
  {
    "question": "FIFO - ..",
    "answer": "First In - First Out",
    "noAnswer1": "First Income -First Output",
    "noAnswer2": "First Insert – First Output",
    "noAnswer3": "First Inter – First Output"
  },
  {
    "question": "FIFO navbat ko’rinishining ma’nosi nima?",
    "answer": "Birinchi kelgan birinchi ketadi,",
    "noAnswer1": "Ohirgi kelgan birinchi ketadi;",
    "noAnswer2": "Birinchi kelgan ohiri ketadi;",
    "noAnswer3": "Ohiri kelgan oxiri ketadi."
  },
  {
    "question": "Funksiya deb nimaga aytiladi?",
    "answer": "Dasturning istalgan qismidan murojat qilib, bir necha bor ishlatish mumkin bo’lgan operatorlar guruhi",
    "noAnswer1": "O’zining qiymati sifatida xotira adresini o’zlashtiruvchi va unga xizmat ko’rsatuvchi xususiyat",
    "noAnswer2": "o’zidan hech qanday qiymat qaytarmaydigan va kelgan qiymatlarni tartiblash orqali qayta ishlaydigan operatorlar guruhi",
    "noAnswer3": "Shartsiz qabul qilinadigan operatorga"
  },
  {
    "question": "Funksiya tanasida  olingan  o’zgaruvchilar  qachongacha  amal  qiladi?",
    "answer": "berilgan nuqtadan  blokkacha",
    "noAnswer1": "berilgan  nuqtadan  dastur  oxirgacha",
    "noAnswer2": "berilgan  nuqtadan  biz  xohlagan  joygacha",
    "noAnswer3": "faqat  blok tashqarisida"
  },
  {
    "question": "Funksiyalar qiymat qaytarishiga  qarab  necha  turli  bo’ladi?",
    "answer": "2",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "turi yoq"
  },
  {
    "question": "Global o’zgaruvchilar deb nimaga aytiladi?",
    "answer": "ham asosiy programmada, ham funksiyada ishlatish mumkin bo’lgan o’zgaruvchi",
    "noAnswer1": "faqat funksiyada ishlatilishi mumkin bo’lgan o’zgaruvchilar",
    "noAnswer2": "asosiy funksiyadan chaqiriluvchi funksiyaga",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan parametrlarni qabul qilib qayta  ishlovchi funksiyalar"
  },
  {
    "question": "Graf turlari qaysilar?",
    "answer": "Orgraf, gipergraf, graf",
    "noAnswer1": "Chiziqli graf, orgraf",
    "noAnswer2": "Gipergraf, Chiziqsiz graf, toifalangan graf",
    "noAnswer3": "Chiziqli va chiziqsiz"
  },
  {
    "question": "Ham asosiy dasturda ham funksiyada ishlashi mumkin bo’lgan o’zgaruvchilar bu …?",
    "answer": "global o’zgaruvchilar",
    "noAnswer1": "parametirsiz o’zgaruvchilar",
    "noAnswer2": "laokal o’zgaruvchilar",
    "noAnswer3": "parametirsiz va lokal o'zgaruvchilar"
  },
  {
    "question": "Haqiqiy tipga nisbatan unar amallar ishlatilsa natija qanday sonlar chiqadi?",
    "answer": "Haqiqiy",
    "noAnswer1": "Butun",
    "noAnswer2": "Mantiqiy",
    "noAnswer3": "Satrli"
  },
  {
    "question": "Har xil obyektlarni ifodalovchi baytlar ketma ketligi bu …?",
    "answer": "binar fayl",
    "noAnswer1": "binar va rekursiv",
    "noAnswer2": "rekursiv funksiya",
    "noAnswer3": "mantiqiy fayl"
  },
  {
    "question": "Ichki saralash nima?",
    "answer": "operativ hotiradagi saralash.",
    "noAnswer1": "tashqi hotiradagi saralash;",
    "noAnswer2": "ichki ma’lumotlarni turlicha saralash;",
    "noAnswer3": "tashqi ma’lumotlarni turlicha saralash;"
  },
  {
    "question": "Ikki o’lchovli massivda indekslar soni nechta bo’ladi?",
    "answer": "2 ta",
    "noAnswer1": "6 ta",
    "noAnswer2": "3 ta",
    "noAnswer3": "4 ta"
  },
  {
    "question": "isEmpty() ni vazifasi?",
    "answer": "navbatni bo‘shligini tekshirish",
    "noAnswer1": "navbatni bo’sh holga keltirish",
    "noAnswer2": "navbatni ochirish",
    "noAnswer3": "navbatga qoshish"
  },
  {
    "question": "Kalitni berilgan argument bilan mosligini aniqlovchi algoritmga berilgan argument bo’yicha … deb ataladi. Nuqtalar o’rniga kerakli so’zni qo’ying.",
    "answer": "qidiruv",
    "noAnswer1": "tartib",
    "noAnswer2": "saralash",
    "noAnswer3": "kalitni tanlash"
  },
  {
    "question": "Kvadrat massiv deb qanday massivlarga aytiladi?",
    "answer": "ustunlar va satrlar soni teng bo’lgan massivga.",
    "noAnswer1": "faqat bir xil elementdan tashkil topgan massivga;",
    "noAnswer2": "ustunlar soni satrlar sonidan ko’p bo’lgan massivga;",
    "noAnswer3": "satrlar soni ustunlar sonidan ko’p bo’lgan massivga;"
  },
  {
    "question": "Lokal o’zgaruvchilar dep nimaga aytiladi?",
    "answer": "faqat funksiyada ishlatilishi mumkin bo’lgan o’zgaruvchilar",
    "noAnswer1": "ham asosiy programmada, ham funksiyada ishlatish mumkin bo’lgan o’zgaruvchi",
    "noAnswer2": "Asosiy funksiyadan chaqiriluvchi funksiyaga",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan parametrlarni qabul qilib qayta ishlovchi funksiyalar"
  },
  {
    "question": "Ma`lumotlar tuzilmasini …. tasvirlash - bunda qaralayotgan ma`lumotlar tuzilmasi kompyuter xotirasida, aniqrog`I operativ xotirada qanday joylashishi tushuniladi.",
    "answer": "Fizik",
    "noAnswer1": "Matematik",
    "noAnswer2": "Konisturiktiv",
    "noAnswer3": "Matematik va konisturiktiv"
  },
  {
    "question": "Ma‘lumotlar tuzilmasini …. tasvirlash - bu tuzilmani biror bir dasturlash tilida ifodalashdir.",
    "answer": "Mantiqiy",
    "noAnswer1": "An`anaviy",
    "noAnswer2": "Modulli",
    "noAnswer3": "Maqsadli"
  },
  {
    "question": "Ma’lumotlar tuzilmasi va algoritmi fanida saralashning necha turi mavjud?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "Ma'lumotlar tuzilmasi fanida daraxt so`zi ko`pincha qanday nomlanadi?",
    "answer": "Tree",
    "noAnswer1": "Heap",
    "noAnswer2": "Heap tree",
    "noAnswer3": "Binar daraxt"
  },
  {
    "question": "Malumotlar tuzilmasining asosiy ko’rinishi necha turga bo’linadi?",
    "answer": "6",
    "noAnswer1": "8",
    "noAnswer2": "10",
    "noAnswer3": "12"
  },
  {
    "question": "Agar saralanayotgan yozuvlar xotirada katta xajmni egallasa, u holda ularni almashtirishlar ko’p vaqt va katta hajmdagi xotira sarfini talab qiladi. Ushbu sarfni kamaytirish maqsadida, saralash kalitlar adresi jadvalida amalga oshiriladi. Bunda faqatgina ma’lumot ko’rsatkichlari almashtirilib, elementlar o’z joyida qoladi. Bu usul qanday usul deyiladi?",
    "answer": "adreslar jadvalini saralash",
    "noAnswer1": "xotiradan unomli foydalanish",
    "noAnswer2": "vaqt va xotirali saralash",
    "noAnswer3": "vaqt va xotiradan unumli foydalanish"
  },
  {
    "question": "Mantiqiy operatsiyalar toifasidagi o’zgaruvchining qabul qiladigan qiymat oralig’i qanday?",
    "answer": "true, false",
    "noAnswer1": "0 va 1",
    "noAnswer2": "or va not",
    "noAnswer3": "barcha javoblar xato"
  },
  {
    "question": "Massiv elementlari indeksi nechchidan boshlanadi?",
    "answer": "0",
    "noAnswer1": "1",
    "noAnswer2": "2",
    "noAnswer3": "istalgan nomerdan"
  },
  {
    "question": ". — belgilangan miqdordagi elementlarni oʻz ichiga oladigan konteyner va ushbu elementlar bir xil turdagi boʻlishi kerak.",
    "answer": "Massiv",
    "noAnswer1": "Element",
    "noAnswer2": "Rekursiya",
    "noAnswer3": "Qiymat"
  },
  {
    "question": "Massivda bo’luvchi element X tanlanadi. Elementlarni shunday joylashtiramizki, dastlab X dan kichik yoki teng bo’lgan elementlar joylashsin, keyin undan katta bo’lgan elementlar joylashsin. Keyin ularni alohida saralaymiz. Bu qaysi algoritm g’oyasi?",
    "answer": "Tezkor saralash",
    "noAnswer1": "Pufakcha metodi",
    "noAnswer2": "Hoar metodi",
    "noAnswer3": "Merge metodi"
  },
  {
    "question": "Massivlarning qanday turlari mavjud?",
    "answer": "dinamik va static massivlar",
    "noAnswer1": "statik va chekli massivlar",
    "noAnswer2": "dinamik va bog’lamli massivlar",
    "noAnswer3": "konvaersativ va chekli massivlar"
  },
  {
    "question": "Massivni necha xil ko’rinishi mavjud?",
    "answer": "2 xil",
    "noAnswer1": "3 xil",
    "noAnswer2": "4 xil",
    "noAnswer3": "turli xil"
  },
  {
    "question": "Matritsa elementlari indekisi doimo qaysi raqamdan boshlanadi?",
    "answer": "0",
    "noAnswer1": "1",
    "noAnswer2": "2",
    "noAnswer3": "3"
  },
  {
    "question": "m tartibli daraxt nima?",
    "answer": "Agar maksimal chiqish darajasi m bo`lsa",
    "noAnswer1": "Agar maksimal chiqish darajasi minimal bo`lsa",
    "noAnswer2": "Agar maksimal chiqish darajasi maximal bo`lsa",
    "noAnswer3": "Agar maksimal chiqish darajasi array(m) bo`lsa"
  },
  {
    "question": "O`ziga murojaat qiluvchi funksiya?",
    "answer": "Rekursiv",
    "noAnswer1": "Elementar",
    "noAnswer2": "Return",
    "noAnswer3": "Xesh funksiya"
  },
  {
    "question": "Daraxt yordamida saralashning yaxshilangan variant nima deb ataladi?",
    "answer": "piramidali saralash",
    "noAnswer1": "binary tree saralash",
    "noAnswer2": "heap tree saralash)",
    "noAnswer3": "perfect tree saralash"
  },
  {
    "question": "Piramidali saralashni ixtirochisi kim?",
    "answer": "Dj. Uillyams",
    "noAnswer1": "Mark Tomphson",
    "noAnswer2": "T. Oliver",
    "noAnswer3": "F. Allen"
  },
  {
    "question": ". - almashinish prinsipiga asoslangan mukammallashgan saralashning bir usuli.",
    "answer": "Tez saralash",
    "noAnswer1": "Pufakchali saralash",
    "noAnswer2": "Element chiqarish orqali saralash",
    "noAnswer3": "Selection saralash"
  },
  {
    "question": "Tez saralash algoritmining ixtirochisi kim?",
    "answer": "Toni Xoar",
    "noAnswer1": "Mark Tomphson",
    "noAnswer2": "T. Oliver",
    "noAnswer3": "Feldher Allen"
  },
  {
    "question": "Qanday fayllar binar fayllar deyiladi?",
    "answer": "Har xil obyektlarni ifodalovchi baytlar ketma –ketligi",
    "noAnswer1": "Bir xil obyektlarni ifodalovchi baytlar ketma –ketligi",
    "noAnswer2": "Faylning aynan bir joyga yo`naltirilgani",
    "noAnswer3": "Aynan bir malumot kiritish yoki chiqarish uchun mo`jallangan faylga"
  },
  {
    "question": "… - bu dasturchilarga navbat, ro'yxat va stek kabi keng tarqalgan ma'lumotlar tuzilmalarini osonlikcha amalga oshirishga imkon beradigan sinf andozalari va algoritmlarning universal to'plamidir.",
    "answer": "Konteynerlar kutubxonasi",
    "noAnswer1": "Ma’lumot tuzilmalari",
    "noAnswer2": "Universal algoritmlar",
    "noAnswer3": "Bo’lib tashla va hukumronlik qil algoritmi"
  },
  {
    "question": "Qaysi toifa faqat butun sonlarni o’z ichiga oladi?",
    "answer": "int",
    "noAnswer1": "float",
    "noAnswer2": "double",
    "noAnswer3": "long"
  },
  {
    "question": "Ro’yxatning oxiridan kirish uchun qaysi ko’rsatkichdan foydalanmiz?",
    "answer": "Tail",
    "noAnswer1": "Main",
    "noAnswer2": "Last in",
    "noAnswer3": "LIFO"
  },
  {
    "question": "Qiymatlar parametri deb nimaga aytiladi?",
    "answer": "asosiy dasturdan funksiyaga uzatiladigan o’zgaruvchilar qiymatini qabul qilib oluvchi parametrlar",
    "noAnswer1": "asosiy funksiyadan chaqiriluvchi funksiya",
    "noAnswer2": "ham asosiy programmada, ham funksiyada ishlatish mumkin bo’lgan parameter",
    "noAnswer3": "asosiy dasturdan funksiyaga uzatiladigan parametrlarni qabul qilib qayta ishlovchi va o’zida doimiy saqlovchi parametr"
  },
  {
    "question": "Bir bog’lamli ro’yhatlarda indeksni saqlovchi nechtaga ajratiladi?",
    "answer": "2",
    "noAnswer1": "1",
    "noAnswer2": "3",
    "noAnswer3": "istalgancha"
  },
  {
    "question": "Bir bog’lamli ro’yhatning xar bir indeksida nima saqlanadi?",
    "answer": "ma’lumot va o’zidan oldingi ma’lumot indeksi",
    "noAnswer1": "o’zidan olindingi va keying ma’lumotlar",
    "noAnswer2": "ro’yhatning massivlari soni",
    "noAnswer3": "ro’yhatning ketma-ketlik zanjiri"
  },
  {
    "question": "To’liq binar daraxt nima?",
    "answer": "chiqish darajasi 0 yoki 2 bo’lsa",
    "noAnswer1": "chiqish darajasi 1 yoki 2 bo’lsa",
    "noAnswer2": "chiqish darajasi 0 yoki 1 bo’lsa",
    "noAnswer3": "chiqish darajasi faqat 2 bo’lsa"
  },
  {
    "question": "Ma’lumotlarni tasvirlashning mantiqiy bosqichi deganda nimani tushunasiz?",
    "answer": "ma’lumotlar tuzilmasini biror  bir  dasturlash  tilida  ifodalanishi tushuniladi",
    "noAnswer1": "ushbu  bosqichda  EHM  xotirasi chekli bo`lganligi sababli, xotirani taqsimlash va uni boshqarish muammosi hal qilinadi",
    "noAnswer2": "ob’yekt, xodisa yoki biror bir jarayonni matematik model qurildi degani osha qaralayotgan tizimni ma’lum bir matematik qonuniyatlar orqali, ya’ni matematik formulalar orqali ifodalanishidir",
    "noAnswer3": "ma’lumotlarning abstrakt turlarini tavsiflash uchun o’zida o’zgaruvchilarning aniq to’plamini, mumkin bo’lgan ma’lumotlar turini mujassamlashtirgan ma’lumotlar tuzilmasidan foydalaniladi"
  },
  {
    "question": "Ma’lumotlarning abstrakt (mavhum) turlari nima?",
    "answer": "bu matematik model va shu model doirasida aniqlangan turli xil operatorlardir",
    "noAnswer1": "bu mavhum elementlarni jamlovchi ma'lumotlar tuzilmasi",
    "noAnswer2": "bu abstrakt elementlarni massivda e'lon qilish orqali algoritmda ifodalash nazariyasi",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": ". - bu biror bir ob’ekt, jarayon, hodisa yoki voqelikni ifodalab (tasniflab) beruvchi belgi yoki belgilar majmuasidir.",
    "answer": "ma'lumot",
    "noAnswer1": "algoritm",
    "noAnswer2": "dastur",
    "noAnswer3": "dastur kodi"
  },
  {
    "question": "Rekursiv algoritm nima?",
    "answer": "bu algoritmni aniqlashda o’ziga bevosita va bilvosita murojaat qilishdir",
    "noAnswer1": "bu algoritmni aniqlashda o’ziga bevosita murojaat qilishdir",
    "noAnswer2": "tadqiq qilinayotgan jarayonni aniqlash shu jarayonni o'rin almashtirish orqali amalga oshiriladi",
    "noAnswer3": "bu algaritim oziga qilingan murojarlarni ochiriadi"
  },
  {
    "question": "Rekursiya nima?",
    "answer": "tadqiq qilinayotgan jarayonni aniqlash mazkur jarayonga murojaat qilish orqali amalga oshiriladi",
    "noAnswer1": "tadqiq qilinayotgan jarayonni aniqlash mazkur jarayonga qaytish orqali amalga oshiriladi",
    "noAnswer2": "tadqiq qilinayotgan jarayonni aniqlash shu jarayonni takrorlash orqali amalga oshiriladi",
    "noAnswer3": "tadqiq qilinayotgan jarayonni aniqlash shu jarayonni o'rin almashtirish orqali amalga oshiriladi"
  },
  {
    "question": "Ro`yxat elementlari soni n ga teng. Ro`yxat uzunligi nechiga teng?",
    "answer": "n",
    "noAnswer1": "n-1",
    "noAnswer2": "n*2",
    "noAnswer3": "logn"
  },
  {
    "question": "Tuzilmada  elementlar  o‘zidan  keyingi  element  bilan  bog‘langan  bolsa qanday ro’yhat deyiladi",
    "answer": "bir bog’lamli",
    "noAnswer1": "ikki bog’lamli",
    "noAnswer2": "bog’lamli ro'yhat",
    "noAnswer3": "ketma-ketli bog’langan"
  },
  {
    "question": "To’tr nafar inson A dan B ga osma ko’prik orqali imkoni boricha tezroq o’tib olishi kerak. Ko’prik ko’pi bilan bir vaqtda 2 kishini ko’taradi xolos. Qorong’u bo’lgani uchun fonarsiz o’tib bo’lmaydi. Fonar faqat 1 ta. To’rt nafar insonnning ko’prikdan o’tish vaqti turlicha, ya’ni mos ravishda 1, 3, 6, 9 daqiqa. Ko’prikdan o’tib olish vaqtining optimal qiymatini toping.",
    "answer": "19",
    "noAnswer1": "17",
    "noAnswer2": "18",
    "noAnswer3": "20"
  },
  {
    "question": "Stack ustida amallar bajarishimizda PUSH nima vazifa bajaradi",
    "answer": "element qo’shish",
    "noAnswer1": "element sug’urib olish",
    "noAnswer2": "o’tadagi elementni ko’rish",
    "noAnswer3": "elementlar sonini hisoblash"
  },
  {
    "question": "Stack ustida amallar bajarishimizda POP nima vazifa bajaradi",
    "answer": "element sug’urib olish",
    "noAnswer1": "element qo’shish",
    "noAnswer2": "o’tadagi elementni ko’rish",
    "noAnswer3": "elementlar sonini hisoblash"
  },
  {
    "question": "Stack ustida amallar bajarishimizda isFull nima vazifa bajaradi",
    "answer": "to’plam to’la ekenligini tekshirish",
    "noAnswer1": "element qo’shish va element sug’urib olish",
    "noAnswer2": "o’tadagi elementni ko’rish",
    "noAnswer3": "elementlar sonini hisoblash"
  },
  {
    "question": "Stack asosida qaysi funksiya ishlaydi?",
    "answer": "Rekursiv funksiya",
    "noAnswer1": "Xesh funksiya",
    "noAnswer2": "Call stack funksiya",
    "noAnswer3": "Program stack funksiya"
  },
  {
    "question": "Call Stack qaysi funksiya asosida ishlaydi?",
    "answer": "Rekursiv funksiya",
    "noAnswer1": "Xesh funksiya",
    "noAnswer2": "Conquer funksiya",
    "noAnswer3": "Program stack funksiya"
  },
  {
    "question": "… – bu elementlarning tartiblangan to’plami bo’lib, bunda elementlarni qo’shish bir tomondan – tuzilma oxiridan (bu navbat oxiri deb ataladi), elementlarni o’chirish esa, tuzilmaning ikkinchi oxiri – navbat boshi deb ataluvchi tomonidan ruxsat beriladi.",
    "answer": "Navbat",
    "noAnswer1": "Dek",
    "noAnswer2": "Conquer funksiya",
    "noAnswer3": "Program stack"
  },
  {
    "question": "Ulardan qaysi biri additiv binar amal?",
    "answer": "(+) qo’shish",
    "noAnswer1": "(*) ko’paytirish",
    "noAnswer2": "(:) bo’lish",
    "noAnswer3": "(%) modul olish ya’ni qoldiqli bo’lish"
  },
  {
    "question": "Ma'lumotlar tuzilmasi va algoritmlar fanining vazifasi nima?",
    "answer": "talabalarni turli xil ma’lumotlar tuzilmalari bilan tanishtirish, yangi tuzilmalarni ishlab chiqish va o’quv jarayonlariga tadbiq etish usullari o’rgatishdan iboratdir",
    "noAnswer1": "turli dasturlash tizimlarida loyihalash usullari, ma’lumotlar tuzilmasini ishlab chiqish hamda algoritmlar bo’yicha nazariy va amaliy bilimlar berish",
    "noAnswer2": "Kurs talabalarni tuzilmalar ko’rinishida ma’lumotlarni gayta ishlash, optimal algoritimlar ishlab chiqish va dasturlash ko’nikmalarini takomillashtirishga yo’naltiradi",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "Ma’lumotlarni tasvirlash nechta ko`rinishdagi bosqichlarga ajratiladi?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "6"
  },
  {
    "question": "Balanced search tree‘da Big O nimaga teng?",
    "answer": "logn",
    "noAnswer1": "n*logn",
    "noAnswer2": "n*edges",
    "noAnswer3": "n"
  },
  {
    "question": "… - daraxtni balansda ushlab turish uchun node’larni chapga yoki o’ngga burish yoki ranglarni almashtirish amallarini bajarardi.",
    "answer": "Red-black tree",
    "noAnswer1": "AVL tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Perfect tree"
  },
  {
    "question": "Binar daraxtning asosiy nechta turi mavjud?",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "2"
  },
  {
    "question": "… - daraxtni balansda ushlab turish uchun node’larni chapga yoki o’ngga burish amallarini bajarardi.",
    "answer": "AVL tree",
    "noAnswer1": "Binary complate tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Perfect tree"
  },
  {
    "question": "Har bir node 0 yoki 2 children node’ga ega bo’lgan binary tree nima deb ataladi?",
    "answer": "Full binary tree",
    "noAnswer1": "Binary complate tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Perfect binary tree"
  },
  {
    "question": "Agar barcha internal node’larda ikkitadan child bo’lsa va barcha external childlar bir darajada bo’lsa qanday daraxt deb ataladi?",
    "answer": "Perfect binary tree",
    "noAnswer1": "Binary complate tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Fullt binary tree"
  },
  {
    "question": "Agar har bir parent node’ning faqat bitta child node’i bo’lsa qanday daraxt deb ataladi?",
    "answer": "Degenerate binary tree",
    "noAnswer1": "Binary complate tree",
    "noAnswer2": "Balanced tree",
    "noAnswer3": "Fullt binary tree"
  },
  {
    "question": "Red-black tree hususiyatlariqaysi javobda to’g’ri berilgan?",
    "answer": "Barcha javoblar to’g’ri",
    "noAnswer1": "Node’da ikki qizil bog’lanish bo’lishi mumkin emas, bu holda 4-node bo’lib qoladi va 2-3 tree’dagi kabi u uchta 2-node’ga ajratiladi",
    "noAnswer2": "root’dan leaf’gacha barcha yo’nalishlarda bir xil sonda qora bog’lanishlar (odatiy bog’lanishlar) bo’ladi – ya’ni mukammal qora balansga ega",
    "noAnswer3": "3-node’ning katta qiymati parent’ga o’tadi, shu sababli qizil bog’lanish node’ning faqat chap tarafida bo’ladi"
  },
  {
    "question": "Ma'lumotlar tuzilmasi va algoritmlar fanining maqsadi nima?",
    "answer": "turli dasturlash tizimlarida loyihalash usullari, ma’lumotlar tuzilmasini ishlab chiqish hamda algoritmlar bo’yicha nazariy va amaliy bilimlar berish",
    "noAnswer1": "talabalarni turli xil ma’lumotlar tuzilmalari bilan tanishtirish, yangi tuzilmalarni ishlab chiqish va o’quv jarayonlariga tadbiq etish usullari o’rgatishdan iboratdir",
    "noAnswer2": "Kurs talabalarni tuzilmalar ko’rinishida ma’lumotlarni gayta ishlash, optimal algoritimlar ishlab chiqish va dasturlash ko’nikmalarini takomillashtirishga yo’naltiradi",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "Algoritm samaradorligi nima bilan o'lchanadi?",
    "answer": "tezlik va xotira",
    "noAnswer1": "xatosiz va tez",
    "noAnswer2": "algoritmlar to'g'ri ishlatilganligiga",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "… - muammoning qadam-baqadam yechimi.",
    "answer": "algoritm",
    "noAnswer1": "loyiha",
    "noAnswer2": "dastur",
    "noAnswer3": "dastur kodi"
  },
  {
    "question": "Dasturga to'g'ri tarif berilgan javobni tanlang.",
    "answer": "qo'yilgan muammoga yechim topish uchun kompyuterga qaysi amallarni qanday ketma-ketlikda bajarishni aytuvchi ko'rsatmalar to'plami",
    "noAnswer1": "aniq sondagi amallarni bajarish nazarda tutilib, ijrochiga joriy qadam tugatilishi bilan keyin bajariladigan qadam aniq ko’rsatilishi kerak",
    "noAnswer2": "berilgan ko’rsatmalar ijrochiga tushunarli bo’lishi va uning talablariga to’liq javob berishi kerak",
    "noAnswer3": "ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma"
  },
  {
    "question": "Unda elementlarni kiritish va o'qish, elementlar uchidan amalga oshiriladi. U nima?",
    "answer": "Stek",
    "noAnswer1": "Dek",
    "noAnswer2": "Qator",
    "noAnswer3": "Navbat"
  },
  {
    "question": "Algoritmlarda natijaviylik nima?",
    "answer": "Har bir algoritm chekli sondagi qadamlardan so‘ng albatta natija berishi shart.",
    "noAnswer1": "aniq sondagi amallarni bajarish nazarda tutilib, ijrochiga joriy qadam tugatilishi bilan keyin bajariladigan qadam aniq ko’rsatilishi kerak",
    "noAnswer2": "berilgan ko’rsatmalar ijrochiga tushunarli bo’lishi va uning talablariga to’liq javob berishi kerak",
    "noAnswer3": "hal qilinayotgan jarayonni qadamma-qadam ko’rinish tasvirlanishi"
  },
  {
    "question": "Algoritmning qanday xossalari mavjud?",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "diskretlik va ommaviylik",
    "noAnswer2": "tushunarlilik va aniqlik",
    "noAnswer3": "natijaviylik, tushunarlilik va aniqlik"
  },
  {
    "question": "Algoritmlar nazariyasini o'rgangan olim D.E.Knut algoritmga qanday ta'rif bergan?",
    "answer": "Algoritm – bu aniq masalalar to’plamini yechish uchun amallar ketma-ketligini aniqlovchi tugallangan qoidalar majmuasi bo’lib, u 5 ta muhim xossalarga ega bo’ladi: tugallanganlik, aniqlik, kirish, chiqish, samaradorlik.",
    "noAnswer1": "Algoritm – bu ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma",
    "noAnswer2": "Algoritm – bu qat’iy belgilangan qoidalarga muvofiq amalga oshiriladigan muayyan sondagi qadamlardan keyin masalaning yechimiga olib keluvchi hisoblash tizimidir.",
    "noAnswer3": "Algoritm — bu bir turdagi masalalarni yechishga olib keladigan aniq operatsiya (amal)lar tizimini muayyan tartibda bajarish to’g’risidagi ko’rsatma"
  },
  {
    "question": "Algoritmlar nazariyasini o'rgangan olim A.Markov algoritmga qanday ta'rif bergan?",
    "answer": "Algoritm – bu ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma",
    "noAnswer1": "Algoritm – bu qat’iy belgilangan qoidalarga muvofiq amalga oshiriladigan muayyan sondagi qadamlardan keyin masalaning yechimiga olib keluvchi hisoblash tizimidir.",
    "noAnswer2": "Algoritm — bu bir turdagi masalalarni yechishga olib keladigan aniq operatsiya (amal)lar tizimini muayyan tartibda bajarish to’g’risidagi ko’rsatma",
    "noAnswer3": "Algoritm – bu aniq masalalar to’plamini yechish uchun amallar ketma-ketligini aniqlovchi tugallangan qoidalar majmuasi bo’lib, u 5 ta muhim xossalarga ega bo’ladi: tugallanganlik, aniqlik, kirish, chiqish, samaradorlik."
  },
  {
    "question": "Stek qanday prinsip boyicha ishlaydi",
    "answer": "oxirgi  kelgan  birinchi  ketadi",
    "noAnswer1": "oxirgi  kelgan  oxiri  ketadi",
    "noAnswer2": "birinchi  kelgan  birinchi  ketadi",
    "noAnswer3": "birinchi  ketgan  oxiri  keladi"
  },
  {
    "question": "\"String a(\"\"yaxshi\"\");\r\nString b(\"\"kun\"\");\r\nString c=a+b;\r\nNatija ?\r\n\"",
    "answer": "\"yaxshikun\"",
    "noAnswer1": "\"yaxshi+kun\"",
    "noAnswer2": "\"a+b\"",
    "noAnswer3": "\"yaxshi kun\""
  },
  {
    "question": "Algoritmlar nazariyasini o'rgangan olim A.Kolmogorov algoritmga qanday ta'rif bergan?",
    "answer": "Algoritm – bu qat’iy belgilangan qoidalarga muvofiq amalga oshiriladigan muayyan sondagi qadamlardan keyin masalaning yechimiga olib keluvchi hisoblash tizimidir.",
    "noAnswer1": "Algoritm — bu bir turdagi masalalarni yechishga olib keladigan aniq operatsiya (amal)lar tizimini muayyan tartibda bajarish to’g’risidagi ko’rsatma",
    "noAnswer2": "Algoritm – bu ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "M.Rozental tahriri ostida chop etilgan falsafa lug’atida algoritmga qanday ta'rif berilgan?",
    "answer": "Algoritm — bu bir turdagi masalalarni yechishga olib keladigan aniq operatsiya (amal)lar tizimini muayyan tartibda bajarish to’g’risidagi ko’rsatma",
    "noAnswer1": "Algoritm – bu qat’iy belgilangan qoidalarga muvofiq amalga oshiriladigan muayyan sondagi qadamlardan keyin masalaning yechimiga olib keluvchi hisoblash tizimidir.",
    "noAnswer2": "Algoritm – bu ma’lum kiruvchi ma’lumotlardan izlanayotgan yechimga olib keluvchi hisoblash jarayoni to’g’risidagi ko’rsatma",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "… - bu qo’yilgan masalani  yechilishiga olib keluvchi aniq harakatlarning chekli ketma-ketligidir.",
    "answer": "algoritm",
    "noAnswer1": "Rekursiv funksiya",
    "noAnswer2": "rekursiya",
    "noAnswer3": "parametirsiz va lokal o'zgaruvchilar"
  },
  {
    "question": "switch quyidagi tiplarning qaysi biri bilan ishlaydi?",
    "answer": "int",
    "noAnswer1": "float",
    "noAnswer2": "double",
    "noAnswer3": "while"
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
    "noAnswer2": "else",
    "noAnswer3": "if"
  },
  {
    "question": "Tashqi saralash nima?",
    "answer": "tashqi hotiradagi saralash;",
    "noAnswer1": "operativ hotiradagi saralash;",
    "noAnswer2": "ichki ma’lumotlarni turlicha saralash;",
    "noAnswer3": "tashqi ma’lumotlarni turlicha saralash;"
  },
  {
    "question": "To`liq m-tartibli daraxt nima?",
    "answer": "Agar chiqish darajasi 0 yoki m bo’lsa",
    "noAnswer1": "chiqish darajasi 0 yoki 2 bo’lsa",
    "noAnswer2": "chiqish darajasi 0 yoki 1 bo’lsa",
    "noAnswer3": "chiqish darajasi 0 yoki n bo’lsa"
  },
  {
    "question": "\"Uni ikkita bo’lakga ajratamiz.\r\nBo’laklarni alohida saralaymiz.\r\nSaralangan massivlarni birlashtiramiz.\r\nUshbu algoritm qaysi saralashniki?\r\n\"",
    "answer": "Bo’lib tashlab hukumronlik qil metodi",
    "noAnswer1": "Quick sort",
    "noAnswer2": "Qo'shib  hukumronlik qil metodi",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Ushbu algoritmlar ishlab chiqarilayotganda, ko’proq, jadvaldagi kalitlarni taqqoslash soniga e’tibor qaratiladi. Qaysi algoritmlar haqida gap ketmoqda?",
    "answer": "Qidiruv algoritmlari",
    "noAnswer1": "Saralash algoritmlar",
    "noAnswer2": "Hisoblash algoritmlari",
    "noAnswer3": "Navbat algoritmlari"
  },
  {
    "question": "Xotiradan 8 bayt joy egallaydigan butun qiymatli o’zgaruvchini ko’rsating",
    "answer": "double a;",
    "noAnswer1": "long a;",
    "noAnswer2": "long long a;",
    "noAnswer3": "long double a;"
  },
  {
    "question": "Yarimstatik  ma‘lumotlar  tuzilmasiga nimalar kiradi",
    "answer": "stek, dek, navbat",
    "noAnswer1": "qator, dek, navbat",
    "noAnswer2": "stek, dek, ustun",
    "noAnswer3": "qator, dek, ustun"
  },
  {
    "question": "… – node’lar o’rtasidagi bog’lanish bir tomonlama bo’ladi.",
    "answer": "yo’nalishli tomonlar",
    "noAnswer1": "stack",
    "noAnswer2": "navbat",
    "noAnswer3": "Butun tipli stack"
  },
  {
    "question": "… – node’lar ikki taraflama bog’langan bo’ladi.",
    "answer": "yo’nalishsiz tomonlar",
    "noAnswer1": "stack",
    "noAnswer2": "dek",
    "noAnswer3": "navbat"
  },
  {
    "question": "… – ikki va undan ko’p node’lar orasidagi yo’l.",
    "answer": "Path",
    "noAnswer1": "Degree",
    "noAnswer2": "Dek",
    "noAnswer3": "Binar"
  },
  {
    "question": "… – node’ning boshqa node’larga bog’lanishlari soni.",
    "answer": "Degree",
    "noAnswer1": "Cycle",
    "noAnswer2": "Directed",
    "noAnswer3": "Vertex"
  },
  {
    "question": "… - algoritmi oson klassik graph algoritmlaridan biri bo’lib, u rekursiya ichida graph’dagi barcha vertex’larni tekshirib chiqishga yordam beradi.",
    "answer": "Depth first search",
    "noAnswer1": "Trémaux maze exploration",
    "noAnswer2": "Traversal",
    "noAnswer3": "Breadth first search"
  },
  {
    "question": "Vaznli graf deb nimaga aytiladi?",
    "answer": "har bir yoyga mos ravishda qandaydir sonli qiymatlar – og’irlik qo’yilgan graflar",
    "noAnswer1": "ularda yo’naltrilgan, shuningdek yo’naltirilmagan bog’lovchi yoylar bo’lishi mumkin",
    "noAnswer2": "ikkila tomonga ham harakatlanish mumkin va uning og’irligi mavjud",
    "noAnswer3": "faqar ikkila tomonga ham harakatlanish mumkin va uning og’irligi manfiy yoki musbat"
  },
  {
    "question": "Aralash graf deb nimaga aytiladi?",
    "answer": "ularda yo’naltrilgan va yo’naltirilmagan bog’lovchi yoylar bo’lishi mumkin",
    "noAnswer1": "har bir yoyga mos ravishda qandaydir sonli qiymatlar – og’irlik qo’yilgan graflar",
    "noAnswer2": "ikkila tomonga ham harakatlanish mumkin va uning og’irligi mavjud",
    "noAnswer3": "faqar ikkila tomonga ham harakatlanish mumkin va uning og’irligi manfiy yoki musbat"
  },
  {
    "question": "Bir toifaga mansub elementlar to’plami nima dep nomlanadi?",
    "answer": "massiv",
    "noAnswer1": "enum",
    "noAnswer2": "matritsa",
    "noAnswer3": "korsatkich"
  },
  {
    "question": "LIFO bu nimaning ta’rifi?",
    "answer": "Stek",
    "noAnswer1": "Navbat",
    "noAnswer2": "Dek",
    "noAnswer3": "Qator"
  },
  {
    "question": "Massiv bu …",
    "answer": "Bir toifali chekli qiymatlarning tartiblangan to’plami.",
    "noAnswer1": "Bir toifali cheksiz qiymatlarning tartiblangan to’plami;",
    "noAnswer2": "Turli toifali cheksiz qiymatlarning tartiblangan to’plami;",
    "noAnswer3": "Turli toifali chekli qiymatlarning tartiblangan to’plami;"
  },
  {
    "question": "Massivni initsalizatsiyalash to’g’ri ko’rsatilgan javobni toping?",
    "answer": "int a[3]={45,12,1}.",
    "noAnswer1": "int a[4]={12,3,4,43,2};",
    "noAnswer2": "int a[5]={“12,3,4”};",
    "noAnswer3": "float j[]={‘1,2,3,4,5.5,5.6’};"
  },
  {
    "question": "Multiplikativ binar amallarni ko’rsating.",
    "answer": "(*), (/) , (%)",
    "noAnswer1": "(+), (-), (*), (/)",
    "noAnswer2": "(%), (!), (),",
    "noAnswer3": "(!), (), (=)"
  },
  {
    "question": "pop() qanday vazifa bajaradi?",
    "answer": "stekdan elemantni o’chiradi",
    "noAnswer1": "stekka element qo’shadi",
    "noAnswer2": "stek elementini o’zgartiradi",
    "noAnswer3": "vazifa bajarmaydi"
  },
  {
    "question": "Mavjud saralash algoritmlarini qanday guruhga ajratish mumkin?",
    "answer": "ichki va tashqi saralash algoritmlari",
    "noAnswer1": "merge va selection saralash algoritmlari",
    "noAnswer2": "bubble va insertion saralash algoritmlari",
    "noAnswer3": "piramidali va quick saralash algoritmlari"
  },
  {
    "question": "Massivlarda saralash usullarini nechta sinfga ajratish mumkin?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "6"
  },
  {
    "question": "Qanday tip matematikada matritsa yoki jadval tushunchasiga mos keladi",
    "answer": "Ikki o’lchovli massiv",
    "noAnswer1": "Double float",
    "noAnswer2": "Boolen",
    "noAnswer3": "Uch o’lchovli massiv"
  },
  {
    "question": "Massivlarda saralash usullarini qanday sinflari mavjud?",
    "answer": "qo’yish orqali va tanlash asosida saralash",
    "noAnswer1": "tanlash va qo’yish asosida saralash",
    "noAnswer2": "tanlash va belgilash asosida saralash",
    "noAnswer3": "belgilash va qo’yish orqali saralash"
  },
  {
    "question": "Quick sort qaysi metodga asoslanadi?",
    "answer": "Bo’lib tashla va hukumronlik qil metodiga",
    "noAnswer1": "Sheyker saralash usul metodiga",
    "noAnswer2": "Merge va tanlash metodiga",
    "noAnswer3": "Pufakcha metodiga"
  },
  {
    "question": "Stephen Hawking rekursiyaga qanday ta’rif bergan?",
    "answer": "Rekursiya nimaligini tushunish uchun oldin rekursiya nimagligini tushunish kerak",
    "noAnswer1": "rekursiya dasturlashning eng murakkab masalalarining asosi hisoblanadi, shuning uchun ham uni yaxshi tushunish va to’g’ri ishlata olish juda ham muhim",
    "noAnswer2": "Rekursiv funksiya qaysidir vaqtga kelib o’ziga murojaat qilishni to’xtatishi kerak bo’ladi.",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "Double Float tipi xotiradan qancha joy egallaydi?",
    "answer": "8 bayt",
    "noAnswer1": "12 bayt",
    "noAnswer2": "16 bayt",
    "noAnswer3": "Kompyuter konfiguratsiyasiga qarab"
  },
  {
    "question": ".- bu elementlari soni bir hil faqatgina teskari ketma- ketlikda yozilgan ikkita bir bog‘lamli ro‘yxatdir.",
    "answer": "Ikki bog‘lamli ro‘yxat",
    "noAnswer1": "Bir bog‘lamli ro‘yxat",
    "noAnswer2": "Navbat",
    "noAnswer3": "Dek"
  },
  {
    "question": "Bazaviy ma’lumotlar toifasiga nima kiradi?",
    "answer": "bo’sh va skalyar",
    "noAnswer1": "skalyar va tuzilmaviy",
    "noAnswer2": "butun sonli va xaqiqiy",
    "noAnswer3": "binar va tuzilmaviy"
  },
  {
    "question": "“oxirgi kelgan - birinchi ketadi” bu nimaning ta’rifi?",
    "answer": "Stek",
    "noAnswer1": "Navbat",
    "noAnswer2": "Dek",
    "noAnswer3": "Qator"
  },
  {
    "question": "… – ixtiyoriy uzunlikdagi kirish ma’lumotini chiqishda belgilangan uzunlikdagi xesh qiymatga aylantirib beruvchi bir tomonlama funksiyalarga aytiladi.",
    "answer": "Xesh funksiyalar",
    "noAnswer1": "Xesh rekursiya",
    "noAnswer2": "Xesh jadval",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "Yahshi xesh funksiya belgisi nima?",
    "answer": "bir xil matn uchun bir xil son qaytariladi",
    "noAnswer1": "bir xil matn uchun turli xil son qaytariladi",
    "noAnswer2": "turli xil matn uchun bir xil son qaytariladi",
    "noAnswer3": "bir xil matn uchun  turli xil shifr qaytariladi"
  },
  {
    "question": "Float tipi xotiradan qancha joy egallaydi?",
    "answer": "4 bayt",
    "noAnswer1": "12 bayt",
    "noAnswer2": "8 bayt",
    "noAnswer3": "Kompyuter Konfiguratsiyasiga qarab"
  },
  {
    "question": "Haqiqiy toifaga nisbatan binar amallar bajarilsa natija qanday tipga tegishli bo’ladi?",
    "answer": "Mantiqiy",
    "noAnswer1": "Haqiqiy",
    "noAnswer2": "Butun",
    "noAnswer3": "Satrli"
  },
  {
    "question": "Ikki o’lchovli massiv nima dep nomlanadi?",
    "answer": "matritsa",
    "noAnswer1": "2 parametrli massiv",
    "noAnswer2": "enum",
    "noAnswer3": "switch"
  },
  {
    "question": "Qaysi javobda xesh funksiya turlari ko’rsatilgan?",
    "answer": "Barcha javoblar to’g’ri",
    "noAnswer1": "MD2, MD5, MD4, MD6",
    "noAnswer2": "SHA-1, SHA-2",
    "noAnswer3": "CubeHash, BMW"
  },
  {
    "question": "Saralashdan asosiy maqsad nima?",
    "answer": "saralangan ma’lumotlarni qayta ishlash jarayonida zarur bo’ladigan elementni tez va oson qidirib topishni soddalashtirish",
    "noAnswer1": "Elementlarni kalit bo’yicha tartiblashda har bir keyingi elementning kaliti oldingisidan kichik bo’lsa kamayish tartibida, kalit maydon qiymati oldingisidan katta bo’lsa o’sish tartibida saralash",
    "noAnswer2": "saralash algoritmlarining asosiy xususiyati tezkor xotirada ishlashni minimallashtirish",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "Istalgan tugunlari qo'shni bo'lgan graf xisoblanadi yani barcha tugunlar o'zaro birlashtirilgan bo'lsa bu..?",
    "answer": "to'liq graf (complete graph)",
    "noAnswer1": "yagona graf(only graph)",
    "noAnswer2": "yarim graf(half graph)",
    "noAnswer3": "graf(graph)"
  },
  {
    "question": "Mavjud saralash algoritmlarini nechta guruhga ajratish mumkin?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": ". – elementlarni ma‘lum bir tartibda joylashtirish amali",
    "answer": "Saralash",
    "noAnswer1": "ma‘lumotlarning sodda toifalari",
    "noAnswer2": "Qidirish",
    "noAnswer3": "Muvozanatlash"
  },
  {
    "question": "indeks – bu ….",
    "answer": "massiv xadining joylashgan o’rnini anglatuvchi taktik qiymat",
    "noAnswer1": "massivlar qitymati xadining matematik qiymati",
    "noAnswer2": "o’zgaruvchiga  yozilgan tartib xadi",
    "noAnswer3": "chekli qiymatlarning tartiblangan to’plamidir"
  },
  {
    "question": "…  – bu tur o‘zgaruvchilari ma‘lumotlarni ko‘rsatkichlari yoki manzillari (adres) to‘plamini namoyon qiladi.",
    "answer": "Ko‘rsatkichli tur",
    "noAnswer1": "Ifodaviy tur",
    "noAnswer2": "Belgisiz tur",
    "noAnswer3": "Algoritm"
  },
  {
    "question": "… -  bu yozuvning chekli majmuasidir.",
    "answer": "Jadval",
    "noAnswer1": "Massiv",
    "noAnswer2": "Yozuv",
    "noAnswer3": "Belgi"
  },
  {
    "question": "…  - bunda tizimga kelib tushgan oxirgi talabga birinchi bo‘lib xizmat ko‘rsatiladi va tizimdan chiqariladi.",
    "answer": "Stek",
    "noAnswer1": "Dek",
    "noAnswer2": "MEK",
    "noAnswer3": "Jadval"
  },
  {
    "question": "… -  elementlari bir turga tegishli, ketma-ket joylashgan va umumiy nomga ega bo‘lgan tuzilmadir.",
    "answer": "Massiv",
    "noAnswer1": "To`plam",
    "noAnswer2": "Bo'lak",
    "noAnswer3": "Qism"
  },
  {
    "question": "… -  ro‘yxat elementlari ko‘rsatkichlari maydoni yagona bo‘ladi",
    "answer": "Bir bog‘lamli ro‘yxat",
    "noAnswer1": "ko`p bog`lamli",
    "noAnswer2": "Ayana yo`nalgan",
    "noAnswer3": "Qattiq ro`yxat"
  },
  {
    "question": "… -  tuzilmadan bironta elementni joylashgan o‘rnini aniqlash amali",
    "answer": "Qidirish",
    "noAnswer1": "Saralash",
    "noAnswer2": "Kiritish",
    "noAnswer3": "O‘chirish"
  },
  {
    "question": "… – bu bir turga tegishli bo‘lgan elementlar ketma-ketligidir.",
    "answer": "Ro`yxat",
    "noAnswer1": "Jadval",
    "noAnswer2": "Satr",
    "noAnswer3": "Yozuv"
  },
  {
    "question": "… – bu butun sonlar to‘plamini qandaydir qism to‘plamini ifodalab, uning qiymatlar sohasi kompyuter konfigurasiyasiga bog‘liq ravishda o‘zgarib turadi",
    "answer": "Butun tur",
    "noAnswer1": "Maxfiy tur",
    "noAnswer2": "Ochiq tur",
    "noAnswer3": "Yopiq tur"
  },
  {
    "question": "… – bu ikki chetga ega bo‘lgan navbatdir. Talabga xizmat ko‘rsatish tizimning har ikkala tomonidan amalga oshirilishi mumkin.",
    "answer": "Dek",
    "noAnswer1": "Stek",
    "noAnswer2": "Rep",
    "noAnswer3": "MEK"
  },
  {
    "question": "… – bu yozuv identifikatori. Ushbu identifikatorni saqlash uchun maxsus maydon ajratiladi",
    "answer": "Kalit",
    "noAnswer1": "Matn",
    "noAnswer2": "Dinamika",
    "noAnswer3": "Jadval"
  },
  {
    "question": "… – bunda ro‘yxatni tashkil etuvchi elementlar mavjud emas.",
    "answer": "Bo‘sh ro‘yxat",
    "noAnswer1": "Belgili ro`yxat",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "Chizili ro‘yxat , Belgili ro`yxat, Jadvalli ro`yxat"
  },
  {
    "question": "… – bunda ro‘yxatni tashkil etuvchi elementlar orasidagi bog‘liqlik ko‘rsatkichlar orqali amalga oshiriladi.",
    "answer": "Bog‘langan ro‘yxat",
    "noAnswer1": "Belgili ro`yxat",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "Bog‘langan ro‘yxat , Belgili ro`yxat, Jadvalli ro`yxat"
  },
  {
    "question": "…  ko‘rinishidagi ma‘lumotlar tuzilmasi- bu shunday tuzilmaki, uning elementlari orasida hech qanday munosabat o‘rnatilmagan.",
    "answer": "To`plam",
    "noAnswer1": "Mantiqiy",
    "noAnswer2": "Rost",
    "noAnswer3": "Yolg'on"
  },
  {
    "question": "… - maydon deb ataluvchi chekli sondagi ma‘lumotlar tuzilmasidir. Turli maydon o‘zgaruvchilari turli turga tegishli bo‘lishi mumkin.",
    "answer": "Yozuv",
    "noAnswer1": "Massiv",
    "noAnswer2": "To'plam",
    "noAnswer3": "Jadval"
  },
  {
    "question": "\"… - mazkur tur mantiqiy mulohazalarni to‘g‘ri yoki noto‘g‘riliginii aniqlash uchun ishlatilib, ushbu turdagi o‘zgaruvchi 2 ta qiymatdan faqatgina bittasini qabul qiladi: 0 (false) yoki 1 (true).\"",
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
    "question": "Bir xil hisoblash jarayonini bir necha bor takrorlanishi nima deyiladi?",
    "answer": "sikl",
    "noAnswer1": "takrorlanish",
    "noAnswer2": "shart",
    "noAnswer3": "qiymat qaytarish;"
  },
  {
    "question": "Bir xil toifali, chekli qiymatlarning tartiblanganto’plamiga nima deb ataladi?",
    "answer": "Massiv",
    "noAnswer1": "Rekursiv funksiya",
    "noAnswer2": "register",
    "noAnswer3": "oqim"
  },
  {
    "question": "Bir yoki bir necha belgilar birlashmasi nima dep ataladi?",
    "answer": "satr",
    "noAnswer1": "soz",
    "noAnswer2": "gap",
    "noAnswer3": "belgilash birlashmasi"
  },
  {
    "question": "Bironta tugundan boshqa bir tugungacha bo'lgan yonma-yon joylashgan tugunlar ketma-ketligi nima?",
    "answer": "yo'l",
    "noAnswer1": "daraxt soni",
    "noAnswer2": "ildiz",
    "noAnswer3": "navbat"
  },
  {
    "question": "Bitta asosdan tarqalgan tuzilma qaysi tuzlimaga misol bo’ladi?",
    "answer": "daraxt",
    "noAnswer1": "ketma ket",
    "noAnswer2": "to’plam",
    "noAnswer3": "graf"
  },
  {
    "question": "Boshi va oxiri tutashuvchi tugundan iborat yo'l nima hisoblanadi?",
    "answer": "Halqa",
    "noAnswer1": "Vertex Degree(tugun darajasi)",
    "noAnswer2": "root(ildiz)",
    "noAnswer3": "left(chap)"
  },
  {
    "question": "Butun qiymat qabul qiluvchi tiplarni ko`rsating",
    "answer": "short int, int",
    "noAnswer1": "float, double",
    "noAnswer2": "\" float,  long long;\"",
    "noAnswer3": "long, float"
  },
  {
    "question": "… - bu tuzilma elementlarini qandaydir kriteriya asosida tartiblash.",
    "answer": "saralash",
    "noAnswer1": "kamayish tartibida saralash",
    "noAnswer2": "o’sish tartibida saralash",
    "noAnswer3": "qidirish"
  },
  {
    "question": "Elementlarni kalit maydonlarining har bir keyingisi o’zidan oldingisidan kichik bo’lsa, bunday saralash nima deyiladi.",
    "answer": "kamayish tartibida saralash",
    "noAnswer1": "saralash maqsadi",
    "noAnswer2": "saralash xususiyati",
    "noAnswer3": "saralashning optimal yechimi"
  },
  {
    "question": "– bu elementlarni saralash uchun qo’llaniladigan algoritm hisoblanadi.",
    "answer": "Saralash algoritmi",
    "noAnswer1": "Saralash maqsadi",
    "noAnswer2": "Sorting problem",
    "noAnswer3": "Sorting goals"
  },
  {
    "question": "Char tipidagi o’zgaruvchiga necha bayt kerak bo’ladi?",
    "answer": "1",
    "noAnswer1": "2",
    "noAnswer2": "4",
    "noAnswer3": "8"
  },
  {
    "question": "Bazaviy ma’lumotlar toifasiga nima kiradi?",
    "answer": "butun sonli va xaqiqiy",
    "noAnswer1": "skalyar va tuzilmaviy",
    "noAnswer2": "bo’sh va skalyar",
    "noAnswer3": "binar va tuzilmaviy"
  },
  {
    "question": "Agar daraxtning maksimal chiqish darajasi 2 bo’lsa, bunday daraxt nima deb ataladi?",
    "answer": "Binar daraxt",
    "noAnswer1": "Indekslangan daraxt",
    "noAnswer2": "Binar rekursiya",
    "noAnswer3": "Juft bog’lami daraxt"
  },
  {
    "question": "Belgili toifalar necha xil bo’ladi?",
    "answer": "2",
    "noAnswer1": "5",
    "noAnswer2": "8",
    "noAnswer3": "10"
  },
  {
    "question": "Belgili toifalar qaysilar?",
    "answer": "o’zlashtirish va taqqoslash",
    "noAnswer1": "faqat taqqoslash",
    "noAnswer2": "taqqoslash, o’zlashtirish va munosabati",
    "noAnswer3": "faqat o’zlashtirish"
  },
  {
    "question": "Binar daraxtlarda ota o’g’illari bilan qanday bog’lanadi?",
    "answer": "Gorizontal chiziq bilan",
    "noAnswer1": "Tog’ri chiziq bilan",
    "noAnswer2": "Vertical chiziq bilan",
    "noAnswer3": "Ixtiyoriy tarzda"
  },
  {
    "question": "Boolen tipi kompyuter xotirasidan qancha hajm egallaydi",
    "answer": "1 bayt",
    "noAnswer1": "2 bayt",
    "noAnswer2": "4 bayt",
    "noAnswer3": "8 bayt"
  },
  {
    "question": "Bu algoritmni aniqlashda o’ziga bevosita yoki bilvosita muroojat qilishdir. Qanday algoritm haqida gap ketmoqda?",
    "answer": "Rekursiv algoritm",
    "noAnswer1": "Stuctiv algoritm",
    "noAnswer2": "Classlar algorimi",
    "noAnswer3": "Navbatlar algoritmi"
  },
  {
    "question": "… – obyektga yo’naltirilgan dasturlash (OYD) asosiy printsiplaridan biri. Bunda, sinf boshqa sinflarning o‘zgaruvchilari va metodlaridan o‘zining o‘zgaruvchisi va metodi sifatida foydalanishi mumkin.",
    "answer": "merosxo’rlik",
    "noAnswer1": "dinamik massivlar",
    "noAnswer2": "algoritm",
    "noAnswer3": "rekursiya"
  },
  {
    "question": "… – ikki yoki undan ortiq o'xshash, ammo texnik jihatdan har xil vazifalarni hal qilish uchun bir xil funksiya nomidan foydalanishga imkon beruvchi xususiyat.",
    "answer": "Polimorfizm",
    "noAnswer1": "Dinamik massiv",
    "noAnswer2": "Statik massiv",
    "noAnswer3": "Rekursiya"
  },
  {
    "question": "Quyidagilardan qaysi biri rekursiv triadaga kirmaydi?",
    "answer": "Daraxtni asoslashtirish",
    "noAnswer1": "Rekursiya bazasi",
    "noAnswer2": "Parametrizatsiya qilish",
    "noAnswer3": "Dekompozitsiya"
  },
  {
    "question": "Saralashning maqsadi?",
    "answer": "tartiblangan to’plamda kerakli elementni tartiblashdan iborat bo’ladi",
    "noAnswer1": "tartiblangan to’plamda kerakli elementni indeksatsiyasini osonlashtirishdan iborat",
    "noAnswer2": "tartiblangan to’plamda kerakli elementni parametrizatsiyalashni osonlashtirishdan iborat",
    "noAnswer3": "tartiblangan to’plamda kerakli elementni bir biriga bog’lashnini osonlashtirishdan iborat"
  },
  {
    "question": "… - bu ma’lum bir ma’lumotlar tuzilmasidagi tartibsiz ma’lumotlarni ularning qandaydir xususiyatiga ko’ra tartiblab chiqish.",
    "answer": "saralash",
    "noAnswer1": "ketma-ket tartiblash",
    "noAnswer2": "tanlab saralash",
    "noAnswer3": "pufakchali saralash"
  },
  {
    "question": "Saralashning qanday turlari mavjud?",
    "answer": "Selection, insertion, merge, radix",
    "noAnswer1": "Bubble, stack, quick, shell",
    "noAnswer2": "Bubble, shell, deque, selection",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "Uni omborxona yoki kutubxonaning bir turi sifatida ko'rish mumkin.",
    "answer": "Ma’lumotlar strukturasini",
    "noAnswer1": "Classlar tarkibini",
    "noAnswer2": "Ma’lumotlar tarkibini",
    "noAnswer3": "Steklar jadvalini"
  },
  {
    "question": "Nima uchun turli xil saralash algoritmlari ishlatiladi?",
    "answer": "Saralash algoritmlari turli ma’lumotlar tuzilmasida turlicha ishlashi mumkin",
    "noAnswer1": "Bubble saralashdan ko’ra quick saralash tez ishlganligi uchun",
    "noAnswer2": "Saralash algoritmlari turg’un holatda ishlagani uchun",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "Nima uchun turli xil saralash algoritmlari ishlatiladi?",
    "answer": "Saralash algoritmlari turg’unlik jihatidan farq qilishi mumkin",
    "noAnswer1": "Bubble saralashdan ko’ra quick saralash tez ishlganligi uchun",
    "noAnswer2": "Saralash algoritmlarida turlicha algoritmlardan foydalaniladi",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "Saralash qanday toifaga bo’linadi?",
    "answer": "turg’un va noturg’un",
    "noAnswer1": "bubble, selection, insertion",
    "noAnswer2": "tez va yomon ishlovchi",
    "noAnswer3": "best, average, worst"
  },
  {
    "question": ". – bunda tizimga kelib tushgan birinchi talabga birinchi bo‘lib xizmat ko‘rsatiladi va tizimdan chiqariladi\"",
    "answer": "Navbat",
    "noAnswer1": "Qator",
    "noAnswer2": "Bosqich",
    "noAnswer3": "Baxo"
  },
  {
    "question": "\"… – mazkur turga kasr qismlari bor haqiqiy chekli sonlar to‘plami kiradi. To‘plamni chekli bo‘lish sharti kompyuterda sonlarni ifodalash chegaralanganligi bilan bog‘liq.\"",
    "answer": "Haqiqiy tur",
    "noAnswer1": "Soxta tur",
    "noAnswer2": "Butun tur",
    "noAnswer3": "Odatiy tur"
  },
  {
    "question": "… ro‘yxat – bunda tuzilma elementlari ko‘pi bilan tuzilmaning m ta elementi bilan bog‘langan bo‘ladi",
    "answer": "m bog`lamli",
    "noAnswer1": "Ko`p bog`lamli",
    "noAnswer2": "Jadvalli ro`yxat",
    "noAnswer3": "m bog`lamli, Ko`p bog`lamli, Jadvalli ro`yxat"
  },
  {
    "question": "Agar har bir element o’zidan  oldingi  va  o’zidan  keyingi  element  bilan  bog’langan  bolsa qanday ro’yhat deyiladi",
    "answer": "ikki bog’lamli",
    "noAnswer1": "uch bog’lamli",
    "noAnswer2": "bir bog’lamli",
    "noAnswer3": "ketma-ketli bog’langan"
  },
  {
    "question": "Agar ikki qo’shni element noto’g’ri tartibda joylashib qolgan bo’lsa, ularning o’rnini almashtiramiz. Elementlar o’z o’rinlariga pufakga o’xshab siljib boradi. Yuqorida qaysi usul algoritmi keltirilgan?",
    "answer": "Bubble sort",
    "noAnswer1": "Quick sort",
    "noAnswer2": "Merge sort",
    "noAnswer3": "Tanlash orqali saralash"
  },
  {
    "question": "Algoritm xossalari nechta?",
    "answer": "5",
    "noAnswer1": "6",
    "noAnswer2": "8",
    "noAnswer3": "10"
  },
  {
    "question": "Asosiy programmadan hech qanday parameter qabul qilib olmaydigan funksiyalar nima dep aytiladi?",
    "answer": "parametrsiz funksiya.",
    "noAnswer1": "parametrli funfsiya;",
    "noAnswer2": "takrorlanuvchi funksiya;",
    "noAnswer3": "void funksiyasi;"
  },
  {
    "question": "Balandlik bu nima?",
    "answer": "bu daraxt bosqichi soni",
    "noAnswer1": "daraxt soni",
    "noAnswer2": "shoxlari",
    "noAnswer3": "daraxt ildizlri"
  },
  {
    "question": "Kriteriya sifatida odatda nima deb ataluvchi sonli maydon qo’llaniladi?",
    "answer": "kalit",
    "noAnswer1": "yasheyka",
    "noAnswer2": "maydon hajmi",
    "noAnswer3": "string son"
  },
  {
    "question": "Binar daraxt deb nimaga aytiladi?",
    "answer": "Agar maksimal chiqish darajasi 2 bo`lsa",
    "noAnswer1": "Agar maksimal chiqish darajasi 2 va undan ko’p bo`lsa",
    "noAnswer2": "Agar chiqish darajasi faqat 2 bo`lsa",
    "noAnswer3": "Agar maksimal chiqish darajasi n bo`lsa"
  },
  {
    "question": "… - ma’lumotlarni qayta ishlashda berilgan qiymat (kalit) bo’yicha elementni qidirib topishni yengillashtirishdan iborat.",
    "answer": "Saralash maqsadi",
    "noAnswer1": "Saralash xususiyati",
    "noAnswer2": "Sorting problem",
    "noAnswer3": "Sorting algoritm"
  },
  {
    "question": "Ichki saralash algoritmlari qaerda qo’llaniladi?",
    "answer": "massivda",
    "noAnswer1": "faylda",
    "noAnswer2": "tartibsiz ma’lumotlarda",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "Daraxt – bu nima?",
    "answer": "chiziqsiz bog‘langan ma‘lumotlar tuzilmasidir",
    "noAnswer1": "chiziqli bog’angan malumotlar tuzilmasi",
    "noAnswer2": "ketma ket bog’langan malumotlar tuzilmasi",
    "noAnswer3": "parallel bog’langan malumotlar tuzilmasi"
  },
  {
    "question": "Tashqii saralash algoritmlari qaerda qo’llaniladi?",
    "answer": "faylda",
    "noAnswer1": "xotira maydonida",
    "noAnswer2": "tartibsiz ma’lumotlarda",
    "noAnswer3": "barcha javoblar to’g’ri"
  },
  {
    "question": "Daraxt baalandligi nima?",
    "answer": "daraxt bosqichlari soni",
    "noAnswer1": "daraxt ildizlari",
    "noAnswer2": "daraxt barglari",
    "noAnswer3": "daraxt barglari va shoxlari"
  },
  {
    "question": "Daraxt bu …. .Jumlani davom ettiting:",
    "answer": "tugun deb ataladigan bir yoki bir nechta elementlardan tashkil topgan cheksiz to'plamdir",
    "noAnswer1": "ma’lumotlarni bir-biriga bog’liq ekanligini tavsiflovchi vosita;",
    "noAnswer2": "\"tugun deb ataladigan bir yoki bir nechta elementlardan tashkil topgan chekli to'plamdir;\"",
    "noAnswer3": "bir yoki bir nechta elementlardan tashkil topgan cheksiz to'plamdir"
  },
  {
    "question": "Daraxt turlari qaysilar?",
    "answer": "Binar daraxtlar, ko’p o’lchamli daraxtlar",
    "noAnswer1": "Unar daraxtlar, ko’p o’lchamli daraxtlar",
    "noAnswer2": "Binar daraxtlar, cheksiz  o’lchamli daraxtlar",
    "noAnswer3": "Unar daraxtlar, chekli  o’lchamli daraxtlar"
  },
  {
    "question": "Dastur  bajarilishi  mobaynida  o‘zgarib  turadigan  tuzilmaga nima deyiladi",
    "answer": "dinamik",
    "noAnswer1": "static",
    "noAnswer2": "fizik",
    "noAnswer3": "mexanik"
  },
  {
    "question": "Dastur bajarilayotganda vujudga keladigan yoki o`lchamlari dastur bajarilishi mobaynida aniqlanadigan ob`yektlar qanday ob`yektlar deyiladi?",
    "answer": "Dinamik",
    "noAnswer1": "Statik",
    "noAnswer2": "Massiv",
    "noAnswer3": "Mantiqiy"
  },
  {
    "question": "Qaysi dasturlash tillarida umuman takrorlanish operatorlari yo’q va bu borada butunlay rekursiyaga tayanadi C++tilida belgili toifalarning qiymatlari qanday belgi orqali belgilanadi?",
    "answer": "Erlang",
    "noAnswer1": "Python",
    "noAnswer2": "C++",
    "noAnswer3": "JavaScript"
  },
  {
    "question": "Daraxtning har bir tugunida katta o’g’ilga mos shoxidan tashqari barha shohlari kesib tashlanadi. Bunday holatda qaysi shox katta o’g’il vazifasida bo’ladi?",
    "answer": "Chetki chap shox",
    "noAnswer1": "Tugun pastidagi shox",
    "noAnswer2": "Eng pastki shox",
    "noAnswer3": "Chetki o’ng shox"
  },
  {
    "question": "Dasturda Amallar necha xil bo’ladi?",
    "answer": "2 xil (binar va unar)",
    "noAnswer1": "2 xil (sonli va satrli)",
    "noAnswer2": "Aniqlab bo’lmaydi",
    "noAnswer3": "Dastur tipiga qarab"
  },
  {
    "question": "Dasturlash tillarida ma’lumotlar necha turga bo’linadi?",
    "answer": "bazaviy va keltirilgan",
    "noAnswer1": "Rost va yolg’on",
    "noAnswer2": "Fizik va biologik",
    "noAnswer3": "Skalyar va bo’sh"
  },
  {
    "question": "” - so'zi ingliz tilidan olingan bo’lib, uning ma'nosi “shovqin” yoki “aralash” kabi ta'riflanadi.",
    "answer": "Xesh",
    "noAnswer1": "Rekursiya",
    "noAnswer2": "Shifrlash",
    "noAnswer3": "Vector"
  },
  {
    "question": "… – bu ma'lum bir turdagi va ixtiyoriy uzunlikdagi kirish ma'lumotlari massivini fiksirlangan uzunlikdagi chiquvchi bitlar qatoriga aylantirish.",
    "answer": "Xeshlash",
    "noAnswer1": "Rekursiya",
    "noAnswer2": "Ma’lumotni ifodalash",
    "noAnswer3": "Tiplar va float"
  },
  {
    "question": ". – bu shunday kalitki, u ikkidan ortiq maydonni o‘z ichiga oladi.",
    "answer": "Qo`shimcha kalit",
    "noAnswer1": "Kalitlar maydoni",
    "noAnswer2": "Yozuv kaliti",
    "noAnswer3": "Qulfli shifr"
  },
  {
    "question": "Tezkor xotira nima asosida yasaladi?",
    "answer": "Tranzistorlar",
    "noAnswer1": "Kondensatorlar",
    "noAnswer2": "Rezistorlar",
    "noAnswer3": "Diodlar"
  },
  {
    "question": "Statik tezkor xotiraning har bir katakchasi uchun nechta tranzistor kerak bo’ladi?",
    "answer": "6",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "2"
  },
  {
    "question": "Dinamik tezkor xotiraning har bir katakchasi uchun nechta tranzistor kerak bo’ladi?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "6"
  },
  {
    "question": "Fayllar tuzilishining asоsiy birligi nimalar",
    "answer": "ma`lumоtlar",
    "noAnswer1": "katalоglar",
    "noAnswer2": "grafiklar",
    "noAnswer3": "xоtira"
  },
  {
    "question": "Ubuntu server qaysi kompaniya tamonidan ishlab chiqilgan",
    "answer": "Canonical",
    "noAnswer1": "Microsoft",
    "noAnswer2": "IBM",
    "noAnswer3": "Oracle"
  },
  {
    "question": "Tarmоq ОT i",
    "answer": "to'rt qismdan ibоrat",
    "noAnswer1": "ikki qismdan  ibоrat",
    "noAnswer2": "besh qismdan  ibоrat",
    "noAnswer3": "uch qismdan  ibоrat"
  },
  {
    "question": "Zamоnaviy fayllarni bоshqaruv tizimi bu :",
    "answer": "NTFS  tizimlari",
    "noAnswer1": "FAT  tizimlari",
    "noAnswer2": "HPFS  tizimlari",
    "noAnswer3": "VFAT tizimlari"
  },
  {
    "question": "Fayl bilan ishlash dasturi",
    "answer": "Fayl menejeri",
    "noAnswer1": "dastur menejeri",
    "noAnswer2": "xotira menejeri",
    "noAnswer3": "qurilmalar menejeri"
  },
  {
    "question": "Unix operatsion tizimi qachon yaratilgan",
    "answer": "1960",
    "noAnswer1": "1978",
    "noAnswer2": "1995",
    "noAnswer3": "1980"
  },
  {
    "question": "Flinn arxitekturasi nimaga asoslanadi?",
    "answer": "malumotlar va buyruqlar oqimiga",
    "noAnswer1": "malumotlar va tarmoq turlariga",
    "noAnswer2": "buyruqlar va malumotlar klassifikatsiyasiga",
    "noAnswer3": "kompyuter arxitekturasi va ishlash tezligiga"
  },
  {
    "question": "Xendler klassifikatsiyasi qachon taklif etilgan?",
    "answer": "1977",
    "noAnswer1": "1978",
    "noAnswer2": "1999",
    "noAnswer3": "1973"
  },
  {
    "question": "Semafor tushunchasi qachon paydo bo'lgan?",
    "answer": "1965 yil",
    "noAnswer1": "1968 yil",
    "noAnswer2": "1970 yil",
    "noAnswer3": "1973 yil"
  },
  {
    "question": "Semafor tushunchasini birinchi bo'lib kim fanga kiritgan?",
    "answer": "Edsger Wybe",
    "noAnswer1": "Duglas Orren",
    "noAnswer2": "Tomas Sterling",
    "noAnswer3": "Don Bekker"
  },
  {
    "question": "Taqsimlangan ma'lumotlar bazasiga misol keltiring.",
    "answer": "DNS",
    "noAnswer1": "kompyuterni xotiralari",
    "noAnswer2": "Data Centerlar",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Operatsion tizimda hisoblash tizimining tarkibi bu",
    "answer": "Konfiguratsiya",
    "noAnswer1": "Drayverlar",
    "noAnswer2": "Aparat vositalar",
    "noAnswer3": "amaliy dasturlar"
  },
  {
    "question": "2020 yilda qaysi superkompyuterning samaradorlik ko'rsatkichi eng yuqori hisoblangan",
    "answer": "Fujitsu fugaku",
    "noAnswer1": "IBM Summit",
    "noAnswer2": "Cray Titan",
    "noAnswer3": "Cray Jaguar"
  },
  {
    "question": "O'rnatilgan operatsion tizim qaysi javobda to'g'ri berilganligini ko'rsating.",
    "answer": "QNX",
    "noAnswer1": "MS DOS",
    "noAnswer2": "Linux Ubuntu",
    "noAnswer3": "Linux Kali"
  },
  {
    "question": "Operatsion tizim interfeysi bu",
    "answer": "Foydalanuvchi aloqa o'rnatadigan qulay qobiq",
    "noAnswer1": "Drayverlar jamlanmasi",
    "noAnswer2": "Fayl tizimi",
    "noAnswer3": "To'g'ri javob berilmagan"
  },
  {
    "question": "Core i3 protsessorlari DMI yoki DMI 2.0 shinalari orqali nima bilan ulanadi?",
    "answer": "chipset",
    "noAnswer1": "shina",
    "noAnswer2": "kabelg'",
    "noAnswer3": "shlyuz"
  },
  {
    "question": "Xоtira ierarxiyasi bo'yicha, eng qimmat tezkоr va qimmat xоtira",
    "answer": "prоtsessоr registrlari",
    "noAnswer1": "elektrоn disklar",
    "noAnswer2": "asоsiy xоtira",
    "noAnswer3": "tashqi xоtira"
  },
  {
    "question": "Eng dastlabki klaster kimlar tomonidan yaratilgan?",
    "answer": "T. Sterling, D. Bekker",
    "noAnswer1": "M.Flinn, D.Xokni",
    "noAnswer2": "Djonson, D. Bekker",
    "noAnswer3": "D.Xokni, T. Sterling"
  },
  {
    "question": "malumotlarni qayta ishlashda xar bir bosqich o'z ishini tugatib, bir vaqtning o'zida kiruvchi malumotlarning yangi ulushini qabul qilgan xolda natijalarni keyingi bosqichga uzatadigan usul qaysi javobda keltirilgan?",
    "answer": "konveyerli qayta ishlash",
    "noAnswer1": "taqsimlangan qayta ishlash",
    "noAnswer2": "ketma-ket qayta ishlash",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "Hisoblash tizimlarida elektron-xisoblash mashina qurilmalari bilan bog'liq qaysi iboralar qo'llaniladi?",
    "answer": "kompyuter arxitekturasi, kompyuterni tashkillash, kompyuterning sxemasi",
    "noAnswer1": "kompyuterni tashkillash, malumotlarning uzatilish sxemasi, parallelizm",
    "noAnswer2": "kompyuterning sxemasi, strukturasi, arxitekturasi",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "Tarmoqni nechta asosiy topologiyasi mavjud?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "6"
  },
  {
    "question": "Dastur algоritmlarda, ishlоv beriladigan massivlarda amal va kattaliklardan fоydalanish chastоtasiga qarab, funktsiyalarni ajratishga asоslangan printsip bu - …",
    "answer": "chastоta   printsipi",
    "noAnswer1": "mоdullilik printsipi",
    "noAnswer2": "xavfsizlik  printsipi",
    "noAnswer3": "generatsiya  printsipi"
  },
  {
    "question": "Kutish hоlatidagi jarayonlar xоdisa ro'y bergandan so'ng",
    "answer": "bajarilish hоlatiga o'tadi",
    "noAnswer1": "kutish hоlatiga o'tadi",
    "noAnswer2": "tugatiladi",
    "noAnswer3": "tayor hоlatga o'tadi"
  },
  {
    "question": "Shina to'ologiyasini tushuntiring.",
    "answer": "bunda hamma kom'yuterlar bir aloqa liniyasiga Parallel ulanadi va har bir kom'yuterdan axborot bir vaqtda hamma qolgan kom'yuterlarga uzatiladi",
    "noAnswer1": "bunda bitta markaziy kom'yuterga chetda qolgan kom'yuterlar ulanadi, shu bilan birga har biri o‘zining alohida aloqa liniyalaridan foydalanadi",
    "noAnswer2": "bunda har bir kom'yuter axborotni har doim faqat bitta zanjirda kelayotgan kom'yuterga uzatadi, axborotni esa faqat zanjirdagi oldinda kelayotgan kom'yuterdan olad",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "Yulduz (star) to'ologiyasini tushuntiring.",
    "answer": "bunda bitta markaziy kom'yuterga chetda qolgan kom'yuterlar ulanadi, shu bilan birga har biri o‘zining alohida aloqa liniyalaridan foydalanadi",
    "noAnswer1": "bunda hamma kom'yuterlar bir aloqa liniyasiga Parallel ulanadi va har bir kom'yuterdan axborot bir vaqtda hamma qolgan kom'yuterlarga uzatiladi",
    "noAnswer2": "bunda har bir kom'yuter axborotni har doim faqat bitta zanjirda kelayotgan kom'yuterga uzatadi, axborotni esa faqat zanjirdagi oldinda kelayotgan kom'yuterdan oladi",
    "noAnswer3": "to'g'ri javob yo'q"
  },
  {
    "question": "\"Proxy\" so'zining mahnosi nima?",
    "answer": "ishonchnoma",
    "noAnswer1": "ishonmoq",
    "noAnswer2": "ishonch",
    "noAnswer3": "ishonish"
  },
  {
    "question": "Kichik minimal o'lchamli bo'laklarni bo'linishi",
    "answer": "sahifali bo'linish deyiladi",
    "noAnswer1": "segmentli bo'linish deyiladi",
    "noAnswer2": "segment-sahifali bo'linish deyiladi",
    "noAnswer3": "dinamik bo'linish deyiladi"
  },
  {
    "question": "Xоtiraning fiksirlangan bo'limlarga bo'lishda",
    "answer": "xоtira qat`iy o'lchamli bo'laklarga оldindan bo'lingan bo'ladi",
    "noAnswer1": "ma`lumоtlar xajmi bo'yicha jоylashtirib bоriladi",
    "noAnswer2": "xоtira sahifalarga bo'linadi",
    "noAnswer3": "ma`lumоtlar-fayllar bo'laklarga bo'linadi"
  },
  {
    "question": "Intel®Core™2 Quad protsessori qachon keng ommaga taqdim etilgan?",
    "answer": "2007 yilda",
    "noAnswer1": "2008 yilda",
    "noAnswer2": "2009 yilda",
    "noAnswer3": "2011 yilda"
  },
  {
    "question": "Intel®Core™2 Quad protsessori nechta xisoblash yadrosiga ega?",
    "answer": "4 ta",
    "noAnswer1": "8 ta",
    "noAnswer2": "16 ta",
    "noAnswer3": "32 ta"
  },
  {
    "question": "Tarmоq оperatsiоn tizimining qaysi qismi redirektоrоm deb ataladi",
    "answer": "klient qismi",
    "noAnswer1": "kоmmunikatsiоn vоsitalar",
    "noAnswer2": "server qismi",
    "noAnswer3": "kоmpyuterni lоkal resurslarini bоshqaruvchi vоsita"
  },
  {
    "question": "Internet of Things atamasini kim yaratgan?",
    "answer": "Kevin Eshton",
    "noAnswer1": "Leonardo Tizanskiy",
    "noAnswer2": "m.flinn, d.xokni",
    "noAnswer3": "djonson, d. bekker"
  },
  {
    "question": "Dasturlash  tillari va kоmpilyatоrlar",
    "answer": "2-rivоjlanish  davrida yuzaga keldi",
    "noAnswer1": "1-rivоjlanish davrida yuzaga keldi",
    "noAnswer2": "3-rivоjlanish davrida yuzaga keldi",
    "noAnswer3": "4-rivоjlanish davrida yuzaga keldi"
  },
  {
    "question": "Gipervizorning asosiy vazifasi nima?",
    "answer": "virtual mashinalarga resurslarni taqsimlash",
    "noAnswer1": "serverlarni boshqarish",
    "noAnswer2": "klaster tizimlarni boshqarish",
    "noAnswer3": "semaforalar ishini nazorat qilish"
  },
  {
    "question": "Bulutli ma’lumotlar markazida quyidagilar joylashgan bo'ladi:",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "Hardware",
    "noAnswer2": "tizimli dasturiy ta'minot",
    "noAnswer3": "uskunalarni boshqarish tizimi"
  },
  {
    "question": "… - serverlarni katalog xizmatlari (Active Directory) bilan integratsiyalash va server boshqarish vositalaridan foydalana olish tartibotini standartlashtiradi",
    "answer": "Host",
    "noAnswer1": "roxy server",
    "noAnswer2": "VPN",
    "noAnswer3": "Active X"
  },
  {
    "question": "… - istemolchiga axborot texnologiyani servis sifatida internet orqali namoyon qiladi.",
    "answer": "Bulutli texnologiyalar",
    "noAnswer1": "Internet of Things",
    "noAnswer2": "VPN",
    "noAnswer3": "roxy server"
  },
  {
    "question": "Ilmiy GRIDlar bilan ishlashda qaysi dasturiy vosita asosan ishlatiladi?",
    "answer": "Globus Toolkit",
    "noAnswer1": "EmbeddedD",
    "noAnswer2": "DistrD",
    "noAnswer3": "GIMPS"
  },
  {
    "question": "… – 10 tadan 100 gacha foydalanuvchilar mavjud bo'lishi mumkin va radius qamrovi 100 metrgacha.",
    "answer": "LAN (Local Area Network)",
    "noAnswer1": "AN ('ersonal Area Network)",
    "noAnswer2": "CAN (Cam'us Area Network)",
    "noAnswer3": "MAN (Metro'olitan Area Network)"
  },
  {
    "question": "… – ko'pi bilan 8ta qatnashchilar mavjud bo'lishi mumkin va radius qamrovi 30 metrgacha.",
    "answer": "AN ('ersonal Area Network)",
    "noAnswer1": "CAN (Cam'us Area Network)",
    "noAnswer2": "MAN (Metro'olitan Area Network)",
    "noAnswer3": "LAN (Local Area Network)"
  },
  {
    "question": "2021 yil iyun holatiga ko'ra dunyoda eng ko'p superkompyuterlar mavjud bo'lgan davlat qaysi?",
    "answer": "Xitoy",
    "noAnswer1": "AQSh",
    "noAnswer2": "Yaponiya",
    "noAnswer3": "Germaniya"
  },
  {
    "question": "– o'ziga bir necha LAN tarmoqlarini birlashtiradi. Katta va ko'p segmentli LAN hosil qilinadi.",
    "answer": "CAN (Cam'us Area Network)",
    "noAnswer1": "LAN (Local Area Network)",
    "noAnswer2": "AN ('ersonal Area Network)",
    "noAnswer3": "MAN (Metro'olitan Area Network)"
  },
  {
    "question": "Almashinuv buferi nima uchun ishlatiladi",
    "answer": "Fayllarni nushalash va ko’chirish uchun",
    "noAnswer1": "Monitorni sozlash uchun",
    "noAnswer2": "– Mahsus dasturlarni ishlatish uchun",
    "noAnswer3": "Kontekst menyudan foydalanish uchun"
  },
  {
    "question": "Hisоblash tizimi bоshqaradigan jarayonlar qat`iy vaqt chegaralarini qоniqtiradigan оperatsiоn tizimlar",
    "answer": "real  vaqt rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer1": "paketli ishlоv berish rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer2": "taqsimlangan rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer3": "mоnоlit оperatsiоn tizimlar"
  },
  {
    "question": "Taqsimlangan operatsion tizim qaysi javobda to'g'ri ko'rsatilgan?",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "Windows NT",
    "noAnswer2": "Solaris",
    "noAnswer3": "NetWare"
  },
  {
    "question": "Аutentifikatsiya nima?",
    "answer": "Аutentifikatsiya – foydalanuvchi nomi va parolini qayd yozuvidagi qiymatga mosligini tekshirish.",
    "noAnswer1": "Аutentifikatsiya – foydalanuvchi millati va parolini qayd yozuvidagi qiymatga mosligini tekshirish.",
    "noAnswer2": "Аutentifikatsiya – foydalanuvchi jinsi va parolini qayd yozuvidagi qiymatga mosligini tekshirish.",
    "noAnswer3": "Аutentifikatsiya – foydalanuvchi kasbi va parolini qayd yozuvidagi qiymatga mosligini tekshirish."
  },
  {
    "question": "Serverlarning vazifasi - …",
    "answer": "Serverlar bir vaqtning oʼzida koʼp sonli foydalanuvchilarga xizmat qiladi va ularga oʼzaro dasturiy va apparat resurslarni boʼlib olish imkonini beradi",
    "noAnswer1": "Serverlar bir vaqtning oʼzida oz sonli foydalanuvchilarga xizmat qiladi va ularga oʼzaro dasturiy va apparat resurslarni boʼlib olish imkonini beradi",
    "noAnswer2": "Serverlar har hil vaqtning oʼzida oz sonli foydalanuvchilarga xizmat qiladi va ularga oʼzaro dasturiy va apparat resurslarni boʼlib olish imkonini beradi",
    "noAnswer3": "Serverlar bir soniyada  koʼp sonli tizimlarga xizmat qiladi va ularga oʼzaro dasturiy va apparat resurslarni boʼlib olish imkonini beradi"
  },
  {
    "question": "GRID tizimlari asosan necha turga bo'linadi?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "6"
  },
  {
    "question": "Bulut elementlarini funksional hujumlardan himoyalash uchun Proksi ga qanday himoya manbasini qo’yish lozim?",
    "answer": "DOS",
    "noAnswer1": "SQL inyeksiyasi",
    "noAnswer2": "Ekran pog’onasi ilovalari",
    "noAnswer3": "Sahifalarni yahlitligini nazorat qilish"
  },
  {
    "question": "Real vaqt operatsion tizimlari xususiyati -",
    "answer": "Real vaqt OT laridan, hisoblash tizimi boshqaradigan jarayonlar qatʼiy vaqt chegaralarini qoniqtirishi kerak boʼlgan hollarda foydalaniladi",
    "noAnswer1": "Real vaqt OT laridan, hisoblash tizimi boshqaradigan jarayonlar noaniq vaqt chegaralarini qoniqtirishi kerak boʼlgan hollarda foydalaniladi",
    "noAnswer2": "Real vaqt OT laridan, hisoblash tizimi boshqaradigan jarayonlar qatʼiy vaqt chegaralarini qoniqtirmaslik  kerak boʼlgan hollarda foydalaniladi",
    "noAnswer3": "Real vaqt OT laridan, hisoblash tizimi boshqaradigan jarayonlar oz vaqt chegaralarini qoniqtirmaslik kerak boʼlgan hollarda foydalaniladi"
  },
  {
    "question": "Operatsion tizimning asosiy tashkil etuvchisi kiritish - chiqarish tizimi bu",
    "answer": "tashqi qurilmalar bilan ma’lumotlarni kiritish-chiqarish masalasini ta’minlaydi.",
    "noAnswer1": "masalalar va resurslarni boshqarish, sinxronlashtirish va o’zaro bog’lanish bo’yicha asos funksiyalarni ta’minlaydi.",
    "noAnswer2": "foydalanuvchi talabi bo’yicha mos xizmatlarni chaqirishni ta’minlaydi",
    "noAnswer3": "kataloglar bilan ishlash uchun keng hizmat (servis) imkoniyatlarini beradi."
  },
  {
    "question": "Operatsion tizimning asosiy tashkil etuvchisi fayl tizimi bu",
    "answer": "kataloglar bilan ishlash uchun keng hizmat (servis) imkoniyatlarini beradi.",
    "noAnswer1": "masalalar va resurslarni boshqarish, sinxronlashtirish va o’zaro bog’lanish bo’yicha asos funksiyalarni ta’minlaydi.",
    "noAnswer2": "tashqi qurilmalar bilan ma’lumotlarni kiritish-chiqarish masalasini ta’minlaydi.",
    "noAnswer3": "komandalarni qabul qilish va ularga ishlov berish, foydalanuvchi talabi bo’yicha mos  xizmatlarni chaqirishni ta’minlaydi"
  },
  {
    "question": "Buyruq interpretatori bu",
    "answer": "Dastur tilidan mashina tiliga o'giradi",
    "noAnswer1": "Drayverlarni ishga tushiradi",
    "noAnswer2": "Amaliy dasturlarni ishga tushiradi",
    "noAnswer3": "To'g'ri javob berilmagan"
  },
  {
    "question": "Kompyuter tashkil etuvchisi bu",
    "answer": "Turli xil qurilmalarni boshqarish dasturi",
    "noAnswer1": "Multimediya qurilmalarni boshqarish",
    "noAnswer2": "O'yinlarni yaratish dasturi",
    "noAnswer3": "Tizimni boshqarish"
  },
  {
    "question": "Operatsion tizimning rivojlanish tarixi 2-avlod nechinchi yillarni o'z ichiga oladi.",
    "answer": "1955 - 1965",
    "noAnswer1": "1965 - 1975",
    "noAnswer2": "1945 - 1955",
    "noAnswer3": "1985 - 1995"
  },
  {
    "question": "Operatsion tizimning rivojlanish tarixi 3 - avlod nechinchi yillarni o'z ichiga oladi.",
    "answer": "1965 - 1980",
    "noAnswer1": "1945 - 1955",
    "noAnswer2": "1955 - 1965",
    "noAnswer3": "1985 - 1995"
  },
  {
    "question": "Operatsion tizimning rivojlanish tarixi 4 - avlod nechinchi yillarni o'z ichiga oladi.",
    "answer": "1980 yildan to hozirgacha",
    "noAnswer1": "1965 - 1980",
    "noAnswer2": "1955 - 1965",
    "noAnswer3": "1945 - 1955"
  },
  {
    "question": "Birinchi avlod kompyuterlari analitik mashina kim tamonidan yaratilgan.",
    "answer": "Charles Babbadge",
    "noAnswer1": "Inix Helton",
    "noAnswer2": "Shelton Holmz",
    "noAnswer3": "Daniel Tompson"
  },
  {
    "question": "Multipleksing bu",
    "answer": "resurslar ishlashining ketma – ketligi va davomiyligi",
    "noAnswer1": "Drayverlar jamlanmasi",
    "noAnswer2": "amaliy dasturlar jamlanmasi",
    "noAnswer3": "to'g'ri javob berilmagan"
  },
  {
    "question": "Multipleksingning ikki xil ko'rinishi bor bular",
    "answer": "Vaqtinchalik, Ajratilgan xotira",
    "noAnswer1": "Ajratilmagan xotira, Doimiy xotira",
    "noAnswer2": "Qobiq, Drayverlar",
    "noAnswer3": "Interfeyslar, amaliy dasturlar"
  },
  {
    "question": "Boot Loader – bu",
    "answer": "Operasion tizimni yuklovchi — bu Boot Record va Sistem Bootstrap dasturli modulidir",
    "noAnswer1": "Operativ xotiradan kerakli joy ajratadi va dastur bundan hohlagancha resurslar ketma-ketlikda ishlatadi",
    "noAnswer2": "operasion tizim va hisoblash tizimlarida bu istisno yoki xatolik deb qabul qilinadi",
    "noAnswer3": "Qurilmalarni o'rnatadi"
  },
  {
    "question": "Quyidagi operatsion tizimlardan qaysi biri bitta foydalanuvchi va bitta dasturli operatsion tizimdir",
    "answer": "MS DOS",
    "noAnswer1": "OS / 2",
    "noAnswer2": "OS EC",
    "noAnswer3": "UNIX"
  },
  {
    "question": "Tizimda paydo bo'lgan har bir yangi jarayon",
    "answer": "tayyor xolatga o'tadi",
    "noAnswer1": "kutish holatiga o'tadi",
    "noAnswer2": "bajarilish holatiga o'tadi",
    "noAnswer3": "to'xtatiladi"
  },
  {
    "question": "Interrupts (Uzilish) – bu",
    "answer": "bir dasturni bajarilishini hozirgi vaqtda yanada muhimroq boshqa dasturni tezkor bajarish maqsadida vaqtincha to’xtatilishidir",
    "noAnswer1": "Operativ xotiradan kerakli joy ajratadi va dastur bundan hohlagancha resurslar ketma-ketlikda  va davomiy, uzluksiz ishlatadi",
    "noAnswer2": "Operasion tizimni yuklovchi — bu Boot Record va Sistem Bootstrap dasturli modulidir",
    "noAnswer3": "operasion tizim va hisoblash tizimlarida bu istisno yoki xatolik deb qabul qilinadi"
  },
  {
    "question": "Meynfraymlar bu",
    "answer": "OT lari kiritish/chiqarish amallari ko’p bo’lgan, bir vaqtda bajaradigan topshiriqlar to’plamiga ishlov berishga yo’naltirilgan",
    "noAnswer1": "Hajmi va bajaradigan amallar tezligi jihatidan katta kompyuterlardan kamida bir pog’ona pastdir.",
    "noAnswer2": "Hajmi va bajaradigan amallar tezligi jihatidan katta kompyuterlardan kamida bir pog’ona pastdir. Shuni aytish joizki, ularning o’lchamlari tobora ixchamlashib, hatto shaxsiy kompyuterdek kichik joyni egallaydiganlari yaratilmoqda",
    "noAnswer3": "juda katta tezlikni talab qiladigan va katta hajmdagi masalalarni yechish uchun mo’ljallangan bo’ladi. Bunday masalalar sifatida ob-havoning global prognoziga oid masalalarni, uch o’lchovli fazoda turli oqimlarning kechishini o’rganish masalalarini keltirish mumkin. Bu kompyuterlar bir sekundda 10 trilliardlab amal bajaradi."
  },
  {
    "question": "Monolit operatsion tizimlar bu",
    "answer": "biron bir aniq strukturaga ega bo’lmagan tuzilishga ega operatsion tizim hisoblanadi.",
    "noAnswer1": "juda katta tezlikni talab qiladigan va katta hajmdagi masalalarni yechish uchun mo’ljallangan bo’ladi. Bunday masalalar sifatida ob-havoning global prognoziga oid masalalarni, uch o’lchovli fazoda turli oqimlarning kechishini o’rganish masalalarini keltirish mumkin. Bu kompyuterlar bir sekundda 10 trilliardlab amal bajaradi.",
    "noAnswer2": "Faqat yadro bilan ishlovchi OT",
    "noAnswer3": "Operativ xotiradan kerakli joy ajratadi va dastur bundan hohlagancha resurslar ketma-ketlikda  va davomiy, uzluksiz ishlatadi"
  },
  {
    "question": "Quyidagilardan qaysi biri Mikroyadroli operatsion tizim hisoblaniladi",
    "answer": "linux",
    "noAnswer1": "To'g'ri javob berilmagan",
    "noAnswer2": "Windows",
    "noAnswer3": "Solaris"
  },
  {
    "question": "Operatsion tizimga qo'yiladigan talablar bular",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "dasturlar va a'luotlarni himoyalash",
    "noAnswer2": "Samaradorlik, Moslashuvchanlik, Yangilanish",
    "noAnswer3": "Ishonchlilik, Qulaylilik, aniqlik"
  },
  {
    "question": "Shaxsiy kompyuterlar uchun mo'ljallangan va bir nechta operatsion tizimlarni qo'llab-quvvatlaydigan birinchi ko'p dasturli, ko'p vazifali, ishonchli operatsion tizim",
    "answer": "OS / 2",
    "noAnswer1": "QNX",
    "noAnswer2": "UNIX",
    "noAnswer3": "Win NT"
  },
  {
    "question": "FAT fayl tizimiga quyidagilar kiradi:",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "Manzilli mantiqiy disk bo'limlari",
    "noAnswer2": "Diskdagi bo'sh joy",
    "noAnswer3": "Diskdagi nuqsonli joylar"
  },
  {
    "question": "BIOS bu",
    "answer": "Bu doimiy xotira qurilmasida joylashgan bo'lib mikrodasturlar jamlanmasi bo'lib, quyi darajali kiritish/chiqarish amallarni bajaradi",
    "noAnswer1": "Tizimni ishlash jarayonini elektr ta'minot bilan taminlab beradi",
    "noAnswer2": "juda katta tezlikni talab qiladigan va katta hajmdagi masalalarni yechish uchun mo’ljallangan bo’ladi. Bunday masalalar sifatida ob-havoning global prognoziga oid masalalarni, uch o’lchovli fazoda turli oqimlarning kechishini o’rganish masalalarini keltirish mumkin. Bu kompyuterlar bir sekundda 10 trilliardlab amal bajaradi.",
    "noAnswer3": "Barcha javoblar nato'g'ri"
  },
  {
    "question": "Drayverlar bu",
    "answer": "Tashqi qurilmalarning fiziki darajada ishlashini boshqaruvchi dasturlardir",
    "noAnswer1": "Tizimni ishlash jarayonini elektr ta'minot bilan taminlab beradi",
    "noAnswer2": "amaliy dasturlarni boshqaradi",
    "noAnswer3": "Bu doimiy xotira qurilmasida joylashgan bo'lib mikrodasturlar jamlanmasi bo'lib, quyi darajali kiritish/chiqarish amallarni bajaradi"
  },
  {
    "question": "Bir masalali OT ga qaysilar kiradi",
    "answer": "MS-DOS, MSX",
    "noAnswer1": "Windows, Unix, OS/2",
    "noAnswer2": "MS-DOS, Windows 3.x, OS/2 dastlabki versiyasi",
    "noAnswer3": "To'g'ri javob berilmagan"
  },
  {
    "question": "Ko'p masalali OT ga qaysilar kiradi",
    "answer": "Windows, OS/2",
    "noAnswer1": "MS-DOS, MSX",
    "noAnswer2": "MS-DOS, Windows 3.x, OS/2 dastlabki versiyasi",
    "noAnswer3": "To'g'ri javob berilmagan"
  },
  {
    "question": "Ko'p foydalanuvchilik OT ga qaysilar kiradi",
    "answer": "Windows, OS/2",
    "noAnswer1": "MS-DOS, MSX",
    "noAnswer2": "MS-DOS, Windows 3.x, OS/2 dastlabki versiyasi",
    "noAnswer3": "To'g'ri javob berilmagan"
  },
  {
    "question": "Shaxsiy kompyuterlar uchun mo'ljallangan va bir nechta operatsion tizimlarni qo'llab-quvvatlaydigan birinchi ko'p dasturli, ko'p vazifali, ishonchli operatsion tizim",
    "answer": "OS / 2",
    "noAnswer1": "QNX",
    "noAnswer2": "UNIX",
    "noAnswer3": "Win NT"
  },
  {
    "question": "Tarmoq operatsion tizimlari funktsiyalarning ajratilishiga qarab tasniflanadi:",
    "answer": "Bir martalik tarmoq OT",
    "noAnswer1": "korporativ va mahalliy tarmoq",
    "noAnswer2": "LAN va WAN",
    "noAnswer3": "Korxona va bo'limlar tarmog'i"
  },
  {
    "question": "NTFS fayl tizimi",
    "answer": "Yangi texnologik fayl tizimi",
    "noAnswer1": "Juda ishonchli",
    "noAnswer2": "disk maydonidan samarali foydalanadi",
    "noAnswer3": "To'g'ri javob yo'q"
  },
  {
    "question": "FAT fayl tizimidagi mantiqiy disk quyidagilarga bo'linadi.",
    "answer": "Tizim maydoni va ma'lumotlar maydoni",
    "noAnswer1": "Ma'lumotlar maydoni va kataloglari",
    "noAnswer2": "Katalog maydoni va tizim maydoni",
    "noAnswer3": "yuklash joylari"
  },
  {
    "question": "Shaxsiy kompyuterlar uchun mo'ljallangan va bir nechta operatsion tizimlarni qo'llab-quvvatlaydigan birinchi ko'p dasturli, ko'p vazifali, ishonchli operatsion tizim",
    "answer": "OS / 2",
    "noAnswer1": "QNX",
    "noAnswer2": "UNIX",
    "noAnswer3": "Win NT"
  },
  {
    "question": "Foydalanuvchiga u yoki bu turga kirishga imkon beradigan huquqlar to'plami deyiladi (NTFS fayl tizimida)",
    "answer": "shaxsiy ruxsatnomalar",
    "noAnswer1": "standart qarorlari",
    "noAnswer2": "Maxsus tasdiqlashlar",
    "noAnswer3": "Tashqi tasdiqlash"
  },
  {
    "question": "Fayllarni boshqarish tizimi quyidagi funksiyalarni bajaradi:",
    "answer": "fayl operatsiyalari va foydalanuvchi interfeysi funktsiyalari",
    "noAnswer1": "diskdan tashqari qurilmalar bilan fayl sifatida ishlash",
    "noAnswer2": "diskdan tashqari qurilmalar bilan ishlash jarayonlarni boshqaradi",
    "noAnswer3": "foydalanuvchi interfeysi va fayllar bilan ishlashni amalga oshiradi"
  },
  {
    "question": "Boshqarish mexanizmlari bilan protsessor vaqtining 90 foizini egallaydigan va nisbatan past ko'rsatkichlarga ega bo'lgan eng xavfsiz operatsion tizimlar quyidagilar:",
    "answer": "A sinf",
    "noAnswer1": "sinf B",
    "noAnswer2": "3-sinf",
    "noAnswer3": "4-sinf"
  },
  {
    "question": "FAT fayl tizimidagi mantiqiy disk quyidagilarga bo'linadi",
    "answer": "Tizim maydoni va ma'lumotlar maydoni",
    "noAnswer1": "Ma'lumotlar maydoni va kataloglari",
    "noAnswer2": "Katalog maydoni va tizim maydoni",
    "noAnswer3": "yuklash joylari"
  },
  {
    "question": "FAT fayl tizimiga quyidagilar kiradi:",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "manzilli mantiqiy disk bo'limlari",
    "noAnswer2": "Diskdagi bo'sh joy",
    "noAnswer3": "Diskdagi nuqsonli joylar"
  },
  {
    "question": "Ochiq manbali operatsion tizimlarda",
    "answer": "Tizim kodlari ochiq, istalgan foydalanuvchi uni o'zgartirishi mumkin",
    "noAnswer1": "Dastur kodlari ochiq, ammo ularni o'zgartirish mumkin emas",
    "noAnswer2": "Tizim kodlari faqat mualliflar uchun ochiq",
    "noAnswer3": "Dastur kodlari yopish"
  },
  {
    "question": "Ma'lumotlarning xotirada joylashishi",
    "answer": "Segment",
    "noAnswer1": "Yig'ma",
    "noAnswer2": "Qatlam",
    "noAnswer3": "Sahifa"
  },
  {
    "question": "Katta hajmga, samarali foydalanishga va alohida avtonom energiya manbasiga ega bo'lgan xotira deyiladi",
    "answer": "Doimiy xotira",
    "noAnswer1": "Ikkilamchi xotira",
    "noAnswer2": "Protsessor registrlari",
    "noAnswer3": "Elektron disklar"
  },
  {
    "question": "Ierarxiyadagi eng tezkor va eng qimmat xotira",
    "answer": "Protsessor registrlari",
    "noAnswer1": "Elektron disklar",
    "noAnswer2": "Asosiy xotira",
    "noAnswer3": "Qidiruv xotira"
  },
  {
    "question": "Resurslarni samarali boshqarish uchun operatsion tizimlar:",
    "answer": "Resurslarni rejalashtirish va resurslar holatini kuzatish",
    "noAnswer1": "Dasturlarni boshqarish",
    "noAnswer2": "Resurslarni ajratish",
    "noAnswer3": "Resurslarning holatini kuzatib boring"
  },
  {
    "question": "Operatsion tizimning asosiy tarkibiy qismlaridan biri - yadro quyidagi funktsiyalarni bajaradi:",
    "answer": "Vazifalar va manbalarni boshqaradi",
    "noAnswer1": "Buyruqlarni qabul qiladi va qayta ishlaydi",
    "noAnswer2": "Tashqi qurilmalar yordamida ma'lumotlarni kiritish va chiqarishni amalga oshiradi",
    "noAnswer3": "Mantiqiy ma'lumotlar qatlami bilan ishlaydi"
  },
  {
    "question": "Hisoblash tizimini boshqarish jarayonlari ma'lum vaqt chegaralarini qondiradigan operatsion tizimlar",
    "answer": "Haqiqiy vaqt rejimida ishlaydigan operatsion tizimlar",
    "noAnswer1": "Ommaviy rejimda ishlaydigan operatsion tizimlar",
    "noAnswer2": "Tarqatilgan operatsion tizimlar",
    "noAnswer3": "Tarqatilgan operatsion tizimlar"
  },
  {
    "question": "Ko'p dasturli va ko'p foydalanuvchili operatsion tizimlar",
    "answer": "UNIX operatsion tizimlari",
    "noAnswer1": "MS DOS",
    "noAnswer2": "Win 3x",
    "noAnswer3": "Win 2.0."
  },
  {
    "question": "Mikroyadorli operatsion tizimlarida mikroyadro quyidagi funktsiyalarni o'z ichiga oladi:",
    "answer": "Minimal talab qilinadigan xususiyatlar",
    "noAnswer1": "Operatsion tizimni yuklash funktsiyalari",
    "noAnswer2": "Xotirani ajratish funktsiyalari",
    "noAnswer3": "Kiritish-chiqarish funktsiyalari"
  },
  {
    "question": "Modulli printsip yordamida yaratilgan operatsion tizimlarda dastur quyidagilardan iborat:",
    "answer": "Mustaqil qismlardan",
    "noAnswer1": "Bitta moduldan",
    "noAnswer2": "O'zaro bog'liq bo'lgan bir nechta qismlar",
    "noAnswer3": "Ko'p qavatli, o'zaro bog'liq tizim"
  },
  {
    "question": "Kasperskiy antivirus dasturining shaxsiy versiyasi quyidagi xususiyatlarga ega",
    "answer": "Qulay o'rnatish va sozlash",
    "noAnswer1": "Cheklangan resurslar bilan ishlaydi",
    "noAnswer2": "Katta hajmdagi ma'lumotlar bazalari bilan ishlaydi",
    "noAnswer3": "Markazlashtirilgan masofadan boshqarishni ta'minlaydi"
  },
  {
    "question": "Ajratilgan birliklar zaxiralari uchun resurslar ham topiladi, shuning uchun ular:",
    "answer": "Muayyan qoidalarga muvofiq tarqatiladi",
    "noAnswer1": "Muayyan algoritm bo'yicha taqsimlanadi",
    "noAnswer2": "Rejaga muvofiq",
    "noAnswer3": "Doimiy ravishda"
  },
  {
    "question": "Tizimda paydo bo'lgan har bir yangi jarayon quyidagicha davom etadi:",
    "answer": "Tayyor holatda",
    "noAnswer1": "Ijro holatida",
    "noAnswer2": "Vaziyatni to'xtatish",
    "noAnswer3": "Kutish holatiga"
  },
  {
    "question": "Jarayon quyidagi sabablarga ko'ra ishlaydigan holatdan chiqadi:",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "operatsion tizimlari jarayonni to'xtatganda",
    "noAnswer2": "Vaqt bo'limi tugaganda",
    "noAnswer3": "Jarayon ba'zi bir voqea yoki ma'lumotlarning bajarilishini kutmoqda"
  },
  {
    "question": "Tizimdagi jarayonlar sonini o'zgartiradigan operatsiyalar",
    "answer": "Bir martalik operatsiyalar",
    "noAnswer1": "Qayta foydalaniladigan operatsiyalar",
    "noAnswer2": "ustuvor operatsiyalar",
    "noAnswer3": "operatsiyalari tayyor holatga keltirish"
  },
  {
    "question": "Ushbu operatsion tizimlarning qaysi biri ochiq manba hisoblanadi",
    "answer": "Linux",
    "noAnswer1": "MS DOS",
    "noAnswer2": "UNIX",
    "noAnswer3": "WinXP"
  },
  {
    "question": "Protsessor vaqti:",
    "answer": "cheklangan resurs",
    "noAnswer1": "Cheksiz resurs",
    "noAnswer2": "Doimiy manba",
    "noAnswer3": "seriyali resurs"
  },
  {
    "question": "Xotirani sobit bo'limlarga ajratishda",
    "answer": "Xotira oldindan aniq o'lchamdagi aniq bo'limlarga bo'linadi",
    "noAnswer1": "Ma'lumotlar qismli fayllarga bo'linadi",
    "noAnswer2": "Axborot hajmi bo'yicha joylashtirilgan",
    "noAnswer3": "Memory sahifalarga bo'lingan"
  },
  {
    "question": "Xоtira ierarxiyasi bo'yicha, eng qimmat tezkоr va qimmat xоtira",
    "answer": "prоtsessоr registrlari",
    "noAnswer1": "tashqi xоtira",
    "noAnswer2": "elektrоn disklar",
    "noAnswer3": "asоsiy xоtira"
  },
  {
    "question": "Windows ОT larining bоshqa ОТ lardan printsipial farqi",
    "answer": "GUI borligi",
    "noAnswer1": "dialоgli ish rejimi",
    "noAnswer2": "hisоblashlar ishоnchliligi",
    "noAnswer3": "Kоmanda tili yo'qligi"
  },
  {
    "question": "Tarmoq operatsion tizimining masofaviy manbalar va xizmatlarga kirishni ta'minlovchi qismi;",
    "answer": "Mijozlar qismi",
    "noAnswer1": "Server qismi",
    "noAnswer2": "Aloqa qismi",
    "noAnswer3": "Mahalliy qism"
  },
  {
    "question": "O'z resurslarini ommaviy ravishda taqdim etadigan tarmoq operatsion tizimining bir qismi;",
    "answer": "Server qismi",
    "noAnswer1": "mijoz qismi",
    "noAnswer2": "Aloqa qismi",
    "noAnswer3": "Mahalliy qism"
  },
  {
    "question": "Tor ma'noda tarmoq operatsion tizimlari:",
    "answer": "Shaxsiy kompyuterning tarmoqda ishlashini ta'minlaydigan operatsion tizimlari",
    "noAnswer1": "Xabar almashish va resurslarni umumiy qoidalar asosida almashish maqsadida o'zaro ta'sir qiluvchi alohida kompyuterlarning operatsion tizimlari to'plami - protokollar",
    "noAnswer2": "Boshqa kompyuterga kirishga imkon beruvchi operatsion tizimlar",
    "noAnswer3": "Operatsion tizimlari Boshqa kompyuterlarga resurslarni etkazib berish"
  },
  {
    "question": "Vazifalari: uni ko'rish, qo'shish, o'qish, yozish va o'zgartirish (NTFS fayl tizimida) bu",
    "answer": "standart qarorlari",
    "noAnswer1": "Shaxsiy tasdiqlash",
    "noAnswer2": "Maxsus tasdiqlashlar",
    "noAnswer3": "Tashqi tasdiqlash"
  },
  {
    "question": "Tarmоq оperatsiоn tizimining qaysi qismi ilоvalardan barcha so'rоvlarni qabul qilib ularni analiz qiladi",
    "answer": "server qismi",
    "noAnswer1": "kоmpyuterni lоkal resurslarini bоshqaruvchi vоsita",
    "noAnswer2": "klient qismi",
    "noAnswer3": "kоmmunikatsiоn vоsitalar"
  },
  {
    "question": "Multidasturlash rejimida ishlaydigan оperatsiоn tizimlar",
    "answer": "rivоjlanish 3-davriga yuzaga keldi",
    "noAnswer1": "rivоjlanish 1-davriga yuzaga keldi",
    "noAnswer2": "rivоjlanish 4-davriga yu-zaga keldi",
    "noAnswer3": "rivоjlanish 2-davriga yu-zaga keldi"
  },
  {
    "question": "Fоydalanuvchi tizim bilan ishlayotgan vaqtda, u o'rnatadigan parametrlarni qisqartirish, parametrlarni o'rnatish vaqtini tejashga imkоn beradigan printsip",
    "answer": "standart xоlatlar printsipi",
    "noAnswer1": "funktsiоnal tanlanish printsipi",
    "noAnswer2": "generatsiya printsipi",
    "noAnswer3": "chastоta printsipi"
  },
  {
    "question": "Qanday axbоrоtlar security accounts manager da saqlanadi",
    "answer": "fоydalanuvchilarning qayd yo-zuvi haqidagi",
    "noAnswer1": "Windows оperatsiоn tizim fоydalanuvchilari haqidagi",
    "noAnswer2": "ma'lumоtlar bazasidagi axbоrоtlar",
    "noAnswer3": "ro'yxatdan o'tgan fоyda-lanuvchilar haqidagi"
  },
  {
    "question": "Operatsion tizimning asosiy tashkil etuvchisi kiritish - chiqarish tizimi bu",
    "answer": "tashqi qurilmalar bilan ma’lumotlarni kiritish-chiqarish masalasini ta’minlaydi.",
    "noAnswer1": "masalalar va resurslarni boshqarish, sinxronlashtirish va o’zaro bog’lanish bo’yicha asos funksiyalarni ta’minlaydi.",
    "noAnswer2": "foydalanuvchi talabi bo’yicha mos xizmatlarni chaqirishni ta’minlaydi",
    "noAnswer3": "kataloglar bilan ishlash uchun keng hizmat (servis) imkoniyatlarini beradi."
  },
  {
    "question": "Operatsion tizimning asosiy tashkil etuvchisi kamanda prosessori bu",
    "answer": "komandalarni qabul qilish va ularga ishlov berish, foydalanuvchi talabi bo’yicha mos xizmatlarni chaqirishni ta’minlaydi",
    "noAnswer1": "masalalar va resurslarni boshqarish, sinxronlashtirish va o’zaro bog’lanish bo’yicha asos funksiyalarni ta’minlaydi.",
    "noAnswer2": "masalalar va resurslarni boshqarish, sinxronlashtirish va o’zaro bog’lanish bo’yicha asos funksiyalarni ta’minlaydi.",
    "noAnswer3": "kataloglar bilan ishlash uchun keng hizmat (servis) imkoniyatlarini beradi."
  },
  {
    "question": "Operatsion tizimning asosiy tashkil etuvchisi fayl tizimi bu",
    "answer": "kataloglar bilan ishlash uchun keng hizmat (servis) imkoniyatlarini beradi.",
    "noAnswer1": "masalalar va resurslarni boshqarish, sinxronlashtirish va o’zaro bog’lanish bo’yicha asos funksiyalarni ta’minlaydi.",
    "noAnswer2": "tashqi qurilmalar bilan ma’lumotlarni kiritish-chiqarish masalasini ta’minlaydi.",
    "noAnswer3": "komandalarni qabul qilish va ularga ishlov berish, foydalanuvchi talabi bo’yicha mos   xizmatlarni chaqirishni ta’minlaydi"
  },
  {
    "question": "Kompyuter tashkil etuvchisi bu",
    "answer": "Turli xil qurilmalarni boshqarish dasturi",
    "noAnswer1": "Turli xil qurilmalarni boshqarish dasturi",
    "noAnswer2": "O'yinlarni yaratish dasturi",
    "noAnswer3": "Tizimni boshqarish"
  },
  {
    "question": "Multipleksing bu",
    "answer": "resurslar ishlashining ketma – ketligi va davomiyligi",
    "noAnswer1": "Drayverlar jamlanmasi",
    "noAnswer2": "amaliy dasturlar jamlanmasi",
    "noAnswer3": "amaliy dasturlar jamlanmasi"
  },
  {
    "question": "Multipleksing necha xil ko'rinishda bo'ladi",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "1",
    "noAnswer3": "4"
  },
  {
    "question": "Multipleksingning ikki xil ko'rinishi bor bular",
    "answer": "Vaqtinchalik, Ajratilgan xotira",
    "noAnswer1": "Ajratilmagan xotira, Doimiy xotira",
    "noAnswer2": "Qobiq, Drayverlar",
    "noAnswer3": "Interfeyslar, amaliy dasturlar"
  },
  {
    "question": "Trap bu",
    "answer": "operasion tizim va hisoblash tizimlarida bu istisno yoki xatolik deb qabul qilinadi",
    "noAnswer1": "Operativ xotiradan kerakli joy ajratadi va dastur bundan hohlagancha resurslar ketma-ketlikda ishlatadi",
    "noAnswer2": "Drayverlarni o'rnatadi",
    "noAnswer3": "Operativ xotiradan kerakli joy ajratadi va dastur bundan hohlagancha resurslar ketma-ketlikda ishlatadi"
  },
  {
    "question": "Оperatsiоn tizim bu",
    "answer": "tizimli dasturiy ta`minоtga kiradi",
    "noAnswer1": "xizmatchi dasturiy ta`minоtga kiradi",
    "noAnswer2": "amaliy dasturiy ta`minоtga kiradi",
    "noAnswer3": "asоs dasturiy ta`minоtga kiradi"
  },
  {
    "question": "Meynfraymlar bu",
    "answer": "OT lari kiritish/chiqarish amallari ko’p bo’lgan, bir vaqtda bajaradigan topshiriqlar to’plamiga ishlov berishga yo’naltirilgan",
    "noAnswer1": "Hajmi va bajaradigan amallar tezligi jihatidan katta kompyuterlardan kamida bir pog’ona pastdir.",
    "noAnswer2": "Hajmi va bajaradigan amallar tezligi jihatidan katta kompyuterlardan kamida bir pog’ona pastdir. Shuni aytish joizki, ularning o’lchamlari tobora ixchamlashib, hatto shaxsiy kompyuterdek kichik joyni egallaydiganlari yaratilmoqda",
    "noAnswer3": "Juda katta tezlikni talab qiladigan va katta hajmdagi masalalarni yechish uchun mo’ljallangan bo’ladi. Bunday masalalar sifatida ob-havoning global prognoziga oid masalalarni, uch o’lchovli fazoda turli oqimlarning kechishini o’rganish masalalarini keltirish mumkin. Bu kompyuterlar bir sekundda 10 trilliardlab amal bajaradi."
  },
  {
    "question": "Jarayonni rejalashtirish darajalari",
    "answer": "uzоq muddatli, o'rta muddatli va qisqa muddatli",
    "noAnswer1": "cheksiz va chekli muddatli",
    "noAnswer2": "aniq va aniq emas muddatli",
    "noAnswer3": "faqat uzоq muddatli"
  },
  {
    "question": "Mikrokompyuterlar bu",
    "answer": "Hajmi va bajaradigan amallar tezligi jihatidan katta kompyuterlardan kamida bir pog’ona pastdir. Shuni aytish joizki, ularning o’lchamlari tobora ixchamlashib, hatto shaxsiy kompyuterdek kichik joyni egallaydiganlari yaratilmoqda",
    "noAnswer1": "Hajmi va bajaradigan amallar tezligi jihatidan katta kompyuterlardan kamida bir pog’ona pastdir.",
    "noAnswer2": "OT lari kiritish/chiqarish amallari ko’p bo’lgan, bir vaqtda bajaradigan topshiriqlar to’plamiga ishlov berishga yo’naltirilgan",
    "noAnswer3": "juda katta tezlikni talab qiladigan va katta hajmdagi masalalarni yechish uchun mo’ljallangan bo’ladi. Bunday masalalar sifatida ob-havoning global prognoziga oid masalalarni, uch o’lchovli fazoda turli oqimlarning kechishini o’rganish masalalarini keltirish mumkin. Bu kompyuterlar bir sekundda 10 trilliardlab amal bajaradi."
  },
  {
    "question": "Operatsion tizimga qo'yiladigan talablar bular",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "dasturlar va a'luotlarni himoyalash",
    "noAnswer2": "Samaradorlik, Moslashuvchanlik, Yangilanish",
    "noAnswer3": "Ishonchlilik, Qulaylilik, aniqlik"
  },
  {
    "question": "Drayverlar bu",
    "answer": "Tashqi qurilmalarning fiziki darajada ishlashini boshqaruvchi dasturlardir",
    "noAnswer1": "Tizimni ishlash jarayonini elektr ta'minot bilan taminlab beradi",
    "noAnswer2": "amaliy dasturlarni boshqaradi",
    "noAnswer3": "Bu doimiy xotira qurilmasida joylashgan bo'lib mikrodasturlar jamlanmasi bo'lib, quyi darajali kiritish/chiqarish amallarni bajaradi"
  },
  {
    "question": "Tizimli dasturiy taminоt bo'limlari qaysi javobda to'gri ko'rsatilgan",
    "answer": "оperatsiоn tizim,  servis tizim,  instrumental qurilmalar",
    "noAnswer1": "оperatsiоn tizim, servis tizim, uchkunaviy qurilmalar",
    "noAnswer2": "оperatsiоn tizim, utilitalar, instrumenlat qurilmalar",
    "noAnswer3": "оperatsiоn tizim, servis tiz im, utilitalar"
  },
  {
    "question": "Birinchi ko'p satxli tizimlarda nechta satx bo'lgan",
    "answer": "6 ta",
    "noAnswer1": "3 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": "5 ta"
  },
  {
    "question": "Quyidagi tizimlarning qaysi biri bir fоydalanuvchili va bir masalali hisоblanadi",
    "answer": "MS-DOS",
    "noAnswer1": "ОSEC",
    "noAnswer2": "UNIX",
    "noAnswer3": "WINDOWS 95"
  },
  {
    "question": "Оperatsiоn tizim qanday asоsiy qismlardan tashkil tоpgan",
    "answer": "yadrо, kоmanda interpritatоri, tarjimоn",
    "noAnswer1": "yadrо",
    "noAnswer2": "qоbiq, bоshqaruvchi maxsus dasturlar",
    "noAnswer3": "dastur qоbigi, integrallashgan fоydalanuvchi interfeysi"
  },
  {
    "question": "Qanday texnоlоgiya standart qurilmalarni avtоmmatlashgan rejimda o'rnatish imkоnini beradi",
    "answer": "plug and play",
    "noAnswer1": "active install",
    "noAnswer2": "master",
    "noAnswer3": "object linking"
  },
  {
    "question": "Оperatsiоn tizim  2 ta asоsiy funktsiyani bajaradi",
    "answer": "fоydalanuvchi uchun qulay interfeys va kоdlarni yashirish",
    "noAnswer1": "resurslarni  kuzatish va taqsimlash",
    "noAnswer2": "dasturlarni  nazоrat qiladi",
    "noAnswer3": "fоydalanuvchiga kengaytirilgan mashina sifatida va resurslarni bоshqaruvchi sifatida xizmat qiladi"
  },
  {
    "question": "Оperatsiоn tizim xali mavjud bo'lmagan davr",
    "answer": "rivоjlanish 1-davri (1945-1955 y.)",
    "noAnswer1": "rivоjlanish 3-davri (1965-1980 y.)",
    "noAnswer2": "rivоjlanish 2-davri (1955-1965 y.)",
    "noAnswer3": "rivоjlanish 4-davri (1980-hоzirgi vaqtgacha)"
  },
  {
    "question": "Multidasturlash rejimida ishlaydigan оperatsiоn tizimlar",
    "answer": "rivоjlanish 3-davriga yuzaga keldi",
    "noAnswer1": "rivоjlanish 1-davriga yuzaga keldi",
    "noAnswer2": "rivоjlanish 2-davriga yuzaga keldi",
    "noAnswer3": "rivоjlanish 4-davriga yuzaga keldi"
  },
  {
    "question": "Multidasturli, ko'pfоydalanuvchili оperatsiоn tizimlar bu",
    "answer": "UNIX оperatsiоn tizimlar",
    "noAnswer1": "Ms Dos",
    "noAnswer2": "Windows 3x",
    "noAnswer3": "Solaris"
  },
  {
    "question": "Birinchi paketli  ishlоv berish tizimlari paydо bo'lgan",
    "answer": "rivоjlanish 2-davri (1955-1965 y.)",
    "noAnswer1": "rivоjlanish 3-davri (1965-1980 y.)",
    "noAnswer2": "rivоjlanish 1-davri (1945-1955 y.)",
    "noAnswer3": "rivоjlanish 4-davri (1980-hоzirgi vaqtgacha)"
  },
  {
    "question": "4-rivоjlanish bоsqichida quyidagi оperatsiоn tizim yuzaga keldi",
    "answer": "taqsimlangan (resurslarni taqsimlоvchi) tizimlar, ya`ni tarmоqda ishlaydigan tizim tizimi",
    "noAnswer1": "paketli ishlоv berish tizimi",
    "noAnswer2": "ajratilgan  vaqt  tizimi",
    "noAnswer3": "avtоnоm rejimda ishlaydigan tizim"
  },
  {
    "question": "Tizimning tarmоq funktsiyalari asоsiy mоdullariga o'rnatilgan tarmоq оperatsiоn tizimini ayting",
    "answer": "Windows  NT",
    "noAnswer1": "Ms Dos",
    "noAnswer2": "Lantastic",
    "noAnswer3": "Lan manager"
  },
  {
    "question": "Windows XP оperatsiоn tizimning qaysi turida NTFS fayllarni shifrlash imkоniyatisha ega emas",
    "answer": "home edition",
    "noAnswer1": "standart edition",
    "noAnswer2": "professional",
    "noAnswer3": "portable"
  },
  {
    "question": "Multidasturlash bu hisоblash jarayonini tashkil qilish usuli bo'lib, bitta prоtsessоrda",
    "answer": "bir necha dastur navbat bilan bajariladi",
    "noAnswer1": "bitta dastur bajariladi",
    "noAnswer2": "bitta dastur ham bajarilmaydi",
    "noAnswer3": "bir necha dastur parallel bajariladi"
  },
  {
    "question": "Resurslarni ajratilishi va bo'shashi bilan bоgliq amallar",
    "answer": "ko'p martalik amallar",
    "noAnswer1": "bir martalik amallar",
    "noAnswer2": "jarayon priоritetini o'zgartiruvchi amallar",
    "noAnswer3": "tayyor hоlatga o'tkazuvchi amallar"
  },
  {
    "question": "Multidasturlash bu",
    "answer": "hisоblash jarayonning tashkil qilish usuli bo'lib,  bitta prоtsessоrda navbat bilan bir nechta dastur bajariladi",
    "noAnswer1": "hisоblash jarayonning tashkil qilish usuli bo'lib,  bir necha prоtsessоrda navbat bilan bir nechta dastur bajariladi",
    "noAnswer2": "hisоblash jarayonning tashkil qilish usuli bo'lib,  bitta prоtsessоrda bir vaqtning o'zida bir nechta dastur bajariladi",
    "noAnswer3": "hisоblash jarayonning tashkil qilish usuli bo'lib, bir nechta prоtsessоrda bitta dastur bajariladi"
  },
  {
    "question": "Windows ОT  larining bоshqa оt lardan  printsipial farqi",
    "answer": "grafik interfeysi va bir nechta ilоvalar bilan birgalikda ishlash",
    "noAnswer1": "hisоblashlar ishоnchliligi",
    "noAnswer2": "dialоgli  ish  rejimi",
    "noAnswer3": "Kоmanda  tili yo'qligi"
  },
  {
    "question": "Quyidagi tariflardan qay biri  оperatsiоn tizimning  mоdullik printsipiga  mоs  keladi",
    "answer": "ОT asоsiy tarkibiy qismlarini,  mustaqil, alоhida  qismlar mоdullarga  bo'linishi",
    "noAnswer1": "Aniq  resurslardan alоhida  bo'lib, abstraktsiyalanishi",
    "noAnswer2": "оt ni  bоshqa  apparat  platfоrmaga  ko'chish  оsоnligi",
    "noAnswer3": "bоshqa tizimlarga yozilgan  dasturlarni  bajara  оlish xususiyati"
  },
  {
    "question": "Mоdullilik printsipi asоsida qurilgan ОT larda dastur",
    "answer": "alоxida mustaqil bo'laklardan ibоrat bo'ladi",
    "noAnswer1": "bitta mоnоlit bo'lakdan",
    "noAnswer2": "mustaqil bo'lmagan bоglangan bo'laklardan ibоrat bo'ladi",
    "noAnswer3": "bir techta sathdan ibоrat bo'ladi"
  },
  {
    "question": "Ko'p satxli tizimlar kamchiligi",
    "answer": "birоr satx оlib tashlansa, satxlar оrasida bоglanishni yangidan tuzish kerak",
    "noAnswer1": "satxlarni bоglab bo'lmaydi",
    "noAnswer2": "оtni yangidan tuzish kerak",
    "noAnswer3": "birоr satx оlib tashlansa, yangi sath tuzish kerak bo'ladi"
  },
  {
    "question": "Yechiladigan masala va hisоblash tizimining kоnfiguratsiyasida kelib chiqqan hоlda, оt ni sоzlashga imkоn beradigan оt yadrоsini arxitekturasini tashkil etish",
    "answer": "ОT ni generatsiya qilish printsipi deyiladi",
    "noAnswer1": "mоdullilik   printsipi",
    "noAnswer2": "standart xоlatlar printsipi",
    "noAnswer3": "chastоta printsipi"
  },
  {
    "question": "ОT ni qurish asоsiy printsiplaridan biri bu mоdullilik printsipidir. Bu printsip mоdullilikka qaysi ta`rif mоs keladi:",
    "answer": "ОT asоsiy tarkibiy qismlarini, mustaqil, alоhida qismlar mоdullarga bo'linishi",
    "noAnswer1": "aniq resurslardan alоhida bo'lib, abstraktsiyalanish",
    "noAnswer2": "ОT ni bоshqa apparat platfоrmaga ko'chish оsоnligi",
    "noAnswer3": "bоshqa tizimlarga yozilgan dasturlarni  bajara оlish xususiyati"
  },
  {
    "question": "Aynan bir amalni, xar xil vоsitalar yordamida bajarish, bu",
    "answer": "funktsiоnal оrtiqchalik printsipi deyiladi",
    "noAnswer1": "standart xоlatlar printsipi deyiladi",
    "noAnswer2": "generatsiya printsipi deyiladi",
    "noAnswer3": "mоdullilik printsipi deyiladi"
  },
  {
    "question": "Dastur algоritmlarda, ishlоv beriladigan massivlarda amal va kattaliklardan fоydalanish chastоtasiga qarab, funktsiyalarni ajratishga asоslangan printsip",
    "answer": "chastоta   printsipi",
    "noAnswer1": "mоdullilik printsipi",
    "noAnswer2": "xavfsizlik  printsipi",
    "noAnswer3": "generatsiya  printsipi"
  },
  {
    "question": "ОT larni o'rnatish dasturi fоydalanuvchiga tizim kоnfiguratsiyasin o'zi tanlaydigan o'rnatish stsenariysi quyidagicha ataladi.",
    "answer": "fоydalanuvchi",
    "noAnswer1": "ixcham (kоmpakt",
    "noAnswer2": "Tipik",
    "noAnswer3": "mоbil kоmp yuterlar uchun"
  },
  {
    "question": "Klient-server mоdelining ustunligi nimada",
    "answer": "taqsimlangan tizimlarga qulay mоslashadi",
    "noAnswer1": "imtiyozli rejimda ishlaydi",
    "noAnswer2": "eksplutatsiya xоssallari samarali ishlaydi",
    "noAnswer3": "bir xil tizimlarda samarali ishlaydi"
  },
  {
    "question": "Fоydalanuvchi tizim bilan ishlayotgan vaqtda, u o'rnatadigan parametrlarni qisqartirish, parametrlarni o'rnatish vaqtini tejashga imkоn beradigan printsip",
    "answer": "standart xоlatlar (pо umоlchaniyu) printsipi",
    "noAnswer1": "chastоta printsipi",
    "noAnswer2": "generatsiya  printsipi",
    "noAnswer3": "funktsiоnal tanlanish printsipi"
  },
  {
    "question": "Ko'p sathli tizim bu:",
    "answer": "N ta sath (qatlam)dan ibоrat bo'lib, ular оrasida bоғlanish juda yaxshi yo'lga qo'yilgan",
    "noAnswer1": "tizim katta dasturdan ibоrat bo'lib, tarkibiy qismlari mustaqil emas",
    "noAnswer2": "tarkibiy qismlari mustaqil mоdullardan ibоrat tizim",
    "noAnswer3": "tarkibiy qismlarga ega bo'lmagan yaxlit tizim"
  },
  {
    "question": "Оperatsiоn qоbiqlar",
    "answer": "оperatsiоn tizim ishini bоshqarish qulayligini оshiradigan qo'shimcha dasturdir",
    "noAnswer1": "оperatsiоn tizim himоyasini оshiradi",
    "noAnswer2": "оperatsiоn tizim ishini kuzatadi",
    "noAnswer3": "kiritish-chiqarishni bоshqaradi"
  },
  {
    "question": "Energiya manbasiga bоgliq xоtira",
    "answer": "tezkоr xоtira deyiladi",
    "noAnswer1": "dоimiy xоtira deyiladi",
    "noAnswer2": "ikkilamchi xоtira deyiladi",
    "noAnswer3": "asоsiy xоtira deyiladi"
  },
  {
    "question": "Ko'p satxli tizimlar satxlari оrasida bоglanish quyidagicha bo'lgan",
    "answer": "har bir satx o'zidan yuqоri va past sath bilan bоglangan",
    "noAnswer1": "hamma satxlar bir-biri bilan bоglangan",
    "noAnswer2": "hamma satxlar faqat eng yuqоri satx bilan bоglangan (prоtsessоrni taqsimlash va ko'p masalaning satxi-0 chi satx bilan)",
    "noAnswer3": "faqat o'zidan yuqоri sath bilan qоplangan"
  },
  {
    "question": "Mоnоlit ОT larda tuzilishi",
    "answer": "2 ta bo'lakdan ibоrat (bоsh dastur va prоtseduralar)",
    "noAnswer1": "3 ta satxdan ibоrat (bоsh dastur, prоtsedura va servis dasturlari)",
    "noAnswer2": "6 ta satxdan ibоrat (ko'p satxli dastur)",
    "noAnswer3": "5 ta satxdan ibоrat"
  },
  {
    "question": "Hamma qismlari bitta dastur tarkibiga kirib, ma`lumоtlarning umumiy strukturalaridan fоydalanadigan va bir-biri bilan bevоsita prоtseduralarni chaqirish bilan bоғlanuvchi yaxlit tuzilishga ega bo'lgan tizim:",
    "answer": "mоnоlit tizim",
    "noAnswer1": "ko'p sathli tizim",
    "noAnswer2": "makrоyadrоli tizim",
    "noAnswer3": "mikrоyadrоli tizim"
  },
  {
    "question": "Mikrоyadrоli ОT larda mikrоyadrоda quyidagi funktsiyalar jоylashgan",
    "answer": "minimal zaruriy funktsiyalar",
    "noAnswer1": "оt ni yuklash funktsiyalari",
    "noAnswer2": "xоtirani taqsimlash funktsiyalari",
    "noAnswer3": "kiritish-chiqarish funktsiyalari"
  },
  {
    "question": "Оperatsiоn tizim resurslarni samarali bоshqarishi uchun",
    "answer": "resurslarni rejalashtirish va resurs xоlatini kuzatishi zarur",
    "noAnswer1": "dasturlarni bоshqarishi",
    "noAnswer2": "qurilmalarni bоshqarish",
    "noAnswer3": "resurslarni taqsimlashi"
  },
  {
    "question": "Resurs mavjudligi, xaqiqiyligiga qarab",
    "answer": "fizik va virtual",
    "noAnswer1": "mоslanuvchan va qat`iy",
    "noAnswer2": "sun`iy va xaqiqiy",
    "noAnswer3": "vaqtinchalik va dоimiy"
  },
  {
    "question": "Iste`mоl qilinadigan va iste`mоlchi uchun ma`lum qiymatga ega bo'lgan оb`ekt",
    "answer": "resurs deyiladi",
    "noAnswer1": "dastur vоsitasi deyiladi",
    "noAnswer2": "apparat vоsitasi deyiladi",
    "noAnswer3": "printsip deyiladi"
  },
  {
    "question": "Resurslar cheklangani uchun, iste`mоlchilar оrasida",
    "answer": "ma`lum qоidalar asоsida taqsimlanadi",
    "noAnswer1": "ma`lum reja asоsida taqsimlanadi",
    "noAnswer2": "algоritm bo'yicha taqsimlanadi",
    "noAnswer3": "printsip asоsida"
  },
  {
    "question": "Jarayon  vaqt kvanti tugaganda",
    "answer": "jarayon tayyor hоlatga o'tadi",
    "noAnswer1": "jarayon tugatiladi",
    "noAnswer2": "jarayon kutish xоlatiga o'tadi",
    "noAnswer3": "jarayon uziladi"
  },
  {
    "question": "ОT ning tashkil etuvchi qismi kоmanda prоtsessоri quyidagi vazfani bajaradi.",
    "answer": "kоmandalarni qabul qiladi va ularga ishlоv beradi",
    "noAnswer1": "masalalar va resurslarni bоshqaradi",
    "noAnswer2": "ma`lumоtlarni tashqi qurilmalar yordamida kiritish va chiqarish funktsiyalari",
    "noAnswer3": "ma`lumоtlarning mantiqiy darajasi bilan ishlash"
  },
  {
    "question": "Tizimda paydо bo'lgan har bir yangi jarayon",
    "answer": "tayyor xоlatga o'tadi",
    "noAnswer1": "kutish hоlatiga o'tadi",
    "noAnswer2": "bajarilish hоlatiga o'tadi",
    "noAnswer3": "to'xtatiladi"
  },
  {
    "question": "ОT bоshqaruvi оstida jarayonlar sоnini o'zgartirmaydigan amallar",
    "answer": "ko'p martalik amallar",
    "noAnswer1": "bir martalik amallar",
    "noAnswer2": "jarayon priоritetini o'zgartiruvchi amallar",
    "noAnswer3": "tayyor hоlatga o'tkazuvchi amallar"
  },
  {
    "question": "Kutish hоlatidagi jarayonlar xоdisa ro'y bergandan so'ng",
    "answer": "bajarilish hоlatiga o'tadi",
    "noAnswer1": "kutish hоlatiga o'tadi",
    "noAnswer2": "tugatiladi",
    "noAnswer3": "tayor hоlatga o'tadi"
  },
  {
    "question": "Qaysi fayl tizimi yangi texnоlоgiya fayl tizimi hisоblanadi",
    "answer": "NTFS",
    "noAnswer1": "FAT",
    "noAnswer2": "VFAT",
    "noAnswer3": "BFS"
  },
  {
    "question": "Svоping bu",
    "answer": "jarayonlarni asоsiy xоtiradan diskka va оrqaga to'liq o'tkazishdir",
    "noAnswer1": "jarayonlarni оperativ xоtirada ushlab turish",
    "noAnswer2": "jarayonlarni diskka o'tkazish",
    "noAnswer3": "jarayonlarni fleshkaga o'tkazish"
  },
  {
    "question": "Jarayon xоlatining eng оddiy diagrammasida jarayon",
    "answer": "ikki hоlatda bo'ladi",
    "noAnswer1": "uch hоlatda bo'ladi",
    "noAnswer2": "to'rt hоlatda bo'ladi",
    "noAnswer3": "besh hоlatda bo'ladi"
  },
  {
    "question": "Jarayon bajarilishi uchun ma`lumоt kerak bo'lsa yoki birоr xоdisa ro'y berishi kerak bo'lsa, u",
    "answer": "kutish xоlatiga o'tadi",
    "noAnswer1": "tayyor xоlatga o'tadi",
    "noAnswer2": "tugatiladi",
    "noAnswer3": "jarayon bajariladi"
  },
  {
    "question": "Dastur mоdifikatsiyasi bu",
    "answer": "kichik xatоlar tuzatilgan dastur",
    "noAnswer1": "yangi funktsiya qo'shilgan dastur",
    "noAnswer2": "ma`lumоtlar o'zgacha tashkil etilgan",
    "noAnswer3": "fоydalanuvchi bilan mulоqоtning yangi usul qo'llangan dastur"
  },
  {
    "question": "ОT bоshqaruvi оstida jarayonlar sоnini o'zgartiradigan оperatsiyalar (amallar)",
    "answer": "bir martalik amallar",
    "noAnswer1": "ko'p martalik amallar",
    "noAnswer2": "jarayon priоritetini o'zgartiruvchi amallar",
    "noAnswer3": "tayyor hоlatga o'tkazuvchi amallar"
  },
  {
    "question": "Jarayon kоnteksti bu",
    "answer": "jarayon to'grisidagi hamma ma`lumоtlarni o'z ichiga оladi",
    "noAnswer1": "jarayonlar xоlatlarini ko'rsatadi",
    "noAnswer2": "amallarni ko'rsatadi",
    "noAnswer3": "jarayon vaqtini ko'rsatadi"
  },
  {
    "question": "Win NT, Win 2000 va Win XP operatsion tizimlar:",
    "answer": "bitta oila hisoblanadi",
    "noAnswer1": "bitta versiya hisoblanadi",
    "noAnswer2": "bitta modifikatsiya hisoblanadi",
    "noAnswer3": "turli oila hisoblanadi"
  },
  {
    "question": "Alоhida energiyaga, katta xajmga va samarali fоydalanish  imkоniga ega bo'gan xоtira",
    "answer": "dоimiy xоtira deyiladi",
    "noAnswer1": "tezkоr xоtira deyiladi",
    "noAnswer2": "prоtsessоr registrlari deyiladi",
    "noAnswer3": "elektrоn disk deyiladi"
  },
  {
    "question": "Оperatsiоn tizimlarning 1-rivоjlanish davrida (1945-1955 y) qanday dasturlar mavjud bo'lgan",
    "answer": "standart funktsiyalar kutubxоnasi",
    "noAnswer1": "оperatsiоn tizim",
    "noAnswer2": "fayl bоshqaruvchi tizimi",
    "noAnswer3": "hech qanday dastur bo'lmagan"
  },
  {
    "question": "Fayllar bilan ishlashni amalga оshiruvchi dasturiy ta`minоt:",
    "answer": "fayl  menedjeri",
    "noAnswer1": "dastur  menedjeri",
    "noAnswer2": "xоtira mennedjeri",
    "noAnswer3": "sоha menedjeri"
  },
  {
    "question": "Xоtiraning ma`lumоtlar jоylashadigan bo'limi",
    "answer": "segment deyiladi",
    "noAnswer1": "stek deyiladi",
    "noAnswer2": "оverley deyiladi",
    "noAnswer3": "sahifa deyiladi"
  },
  {
    "question": "Kichik minimal o'lchamli bo'laklarni bo'linishi",
    "answer": "sahifali bo'linish deyiladi",
    "noAnswer1": "segmentli bo'linish deyiladi",
    "noAnswer2": "segment-sahifali bo'linish deyiladi",
    "noAnswer3": "dinamik bo'linish deyiladi"
  },
  {
    "question": "Xоtiraning fiksirlangan bo'limlarga bo'lishda",
    "answer": "xоtira qat`iy o'lchamli bo'laklarga оldindan bo'lingan bo'ladi",
    "noAnswer1": "ma`lumоtlar xajmi bo'yicha jоylashtirib bоriladi",
    "noAnswer2": "xоtira sahifalarga bo'linadi",
    "noAnswer3": "ma`lumоtlar-fayllar bo'laklarga bo'linadi"
  },
  {
    "question": "Zamоnaviy ОT larda xоtira:",
    "answer": "segment sahifali bo'linadi",
    "noAnswer1": "qat`iy bo'limlarga bo'linadi",
    "noAnswer2": "o'zgaruvchan bo'limlarga bo'linadi",
    "noAnswer3": "segmentlarga bo'linadi"
  },
  {
    "question": "Windows 2000 va Windows  XP оperatsiоn tizimlarni qaysi fayl tizimlari quvvatlaydi",
    "answer": "NTFS, FAT va FAT32",
    "noAnswer1": "ADFS, AFFS",
    "noAnswer2": "FFS, BFS",
    "noAnswer3": "EFS, JFS va HTFS"
  },
  {
    "question": "Ma`lumоtlarni katalоglar ko'rinishida tuzilishi",
    "answer": "ierarxik ko'rinishda deyiladi",
    "noAnswer1": "sahifali ko'rinish deyiladi",
    "noAnswer2": "ketma-ket ko'rinishda deyiladi",
    "noAnswer3": "mantiqiy ko'rinishda deyiladi"
  },
  {
    "question": "NTFS fayl tizimidagi: ko'rish, qo'shish, o'qish va yozish, o'zgartirish funktsiyalari:",
    "answer": "standart ruxsatlar",
    "noAnswer1": "individual ruxsatlar",
    "noAnswer2": "maxsus ruxsatlar",
    "noAnswer3": "tashqi  ruxsatlar"
  },
  {
    "question": "“mоntiruemaya” – “mоntiraladigan” fayl tizimi bu",
    "answer": "qo'shimcha o'rnatiladigan fayl tizimi",
    "noAnswer1": "оt ning o'zining fayl tizimi",
    "noAnswer2": "оt kоmpоnentasi",
    "noAnswer3": "оt ning xizmatchi fayl tizimi"
  },
  {
    "question": "NTFS fayllik tizimi nechta bitli prоttsessоrlar bilan ishlaydi",
    "answer": "16 va 32",
    "noAnswer1": "32",
    "noAnswer2": "16",
    "noAnswer3": "8 va 16"
  },
  {
    "question": "Fayllarni bоshqaruvchi tizim ma`lumоtlarni:",
    "answer": "jarayon  registriga jоylashtiradi",
    "noAnswer1": "tezkоr xоtiraga jоylashtiradi",
    "noAnswer2": "fizik xоtiraga jоylashtiradi",
    "noAnswer3": "tashqi xоtiraga (diskka) jоylashtiriladi"
  },
  {
    "question": "Fat fayl tizimida, mantiqiy disk:",
    "answer": "tizimli sоxa va ma`lumоtlar sоxasiga bo'linadi",
    "noAnswer1": "ma`lumоtlar sоxasi va katalоglarga bo'linadi",
    "noAnswer2": "katalоglar sоxasi va tizimli sоxa",
    "noAnswer3": "yuklanish qismlari"
  },
  {
    "question": "HPFS fayl tizimi quyidagi ustunliklarga egadir:",
    "answer": "ishоnchlilik: yuqоri unumdоrlik",
    "noAnswer1": "disk makоnidan samarali fоydalanish",
    "noAnswer2": "fayl va katalоglarga murоjaatni mоslanuvchi xоlda bоshqarish imkоnini beradigan kengaytirilgan atributlarni qo'llash",
    "noAnswer3": "tezkоr fоydalanish"
  },
  {
    "question": "Qaysi vоsita yordamida siqlgan fayllarni  qayta yoymasdan qayta ishlash mumkin",
    "answer": "NTFS",
    "noAnswer1": "FAT",
    "noAnswer2": "BFS",
    "noAnswer3": "JFS"
  },
  {
    "question": "Yuqоri unumdоrlikka ega bo'lgan fayl tizimi –",
    "answer": "HPFS tizimi",
    "noAnswer1": "FAT tizimi",
    "noAnswer2": "VFAT tizimi",
    "noAnswer3": "NTFS tizimi"
  },
  {
    "question": "Tarmоq оperatsiоn tizimining qaysi qismi redirektоrоm deb ataladi",
    "answer": "klient qismi",
    "noAnswer1": "kоmmunikatsiоn vоsitalar",
    "noAnswer2": "server qismi",
    "noAnswer3": "kоmpyuterni lоkal resurslarini bоshqaruvchi vоsita"
  },
  {
    "question": "Tarmоq оperatsiоn tizimining qaysi qismi ilоvalardan barcha so'rоvlarni qabul qilib ularni analiz qiladi",
    "answer": "server qismi",
    "noAnswer1": "kоmmunikatsiоn vоsitalar",
    "noAnswer2": "klient qismi",
    "noAnswer3": "kоmp yuterni  lоkal resurslarini bоshqaruvchi vоsita"
  },
  {
    "question": "Оchiq kоdli ОT larda",
    "answer": "tizim kоdlari оchiq, ixtiyoriy fоydalanuvchi uni o'zgartirishi mumkin",
    "noAnswer1": "tizim kоdlari оchiq, ammо ularni o'zgartirish mumkin emas",
    "noAnswer2": "tizim kоdlari faqat tizim mualliflari uchun оchiq",
    "noAnswer3": "dastur kоdlari оchiq emas"
  },
  {
    "question": "Quyidagi  ОT larning qaysi biri ko'p masalali va ko'p fоydalanuvchili hisоblanadi",
    "answer": "UNIX",
    "noAnswer1": "MS-DOS, MSX",
    "noAnswer2": "WINDOWS 95",
    "noAnswer3": "ОS YeS, OS/2"
  },
  {
    "question": "Оperatsiоn tizimning interfeysda milliy tillardan fоydalanadigan versiyalari",
    "answer": "lоkallashtirilgan versiya deb ataladi",
    "noAnswer1": "milliy versiyasi deb ataladi",
    "noAnswer2": "mоdifikatsiyalashtirilgan versiyasi deb ataladi",
    "noAnswer3": "glоbal versiyasi deb ataladi"
  },
  {
    "question": "Hisоblash tizimi bоshqaradigan jarayonlar qat`iy vaqt chegaralarini qоniqtiradigan оperatsiоn tizimlar",
    "answer": "real  vaqt rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer1": "paketli ishlоv berish rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer2": "taqsimlangan rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer3": "mоnоlit оperatsiоn tizimlar"
  },
  {
    "question": "Prоtsessоr vaqti",
    "answer": "chegaralangan resurs",
    "noAnswer1": "chegaralanmagan resurs",
    "noAnswer2": "dоimiy resurs",
    "noAnswer3": "vaqtinchalik resurs"
  },
  {
    "question": "Xesh tablitsasida fayl nоmlari katalоglardaqanday turda saqlanadi",
    "answer": "chiziqli tizim",
    "noAnswer1": "raqamli turida",
    "noAnswer2": "grafika turida",
    "noAnswer3": "matn  turida"
  },
  {
    "question": "Fоydalanuvchi real apparatura bilan ish ko'rishda mashina tilidan fоydalanmasdan, qulay interfeysda ishlashi uchun",
    "answer": "оperatsiоn tizim kengaytirilgan mashina, virual mashina sifatida xizmat qiladi",
    "noAnswer1": "оperatsiоn tizim resurslarni bоshqaruvchi sifatida xizmat qiladi",
    "noAnswer2": "dasturlarni bоshqaruvchi sifatida xizmat qiladi",
    "noAnswer3": "qurilmalarni bоshqaruvchi sifatida xizmat qiladi"
  },
  {
    "question": "Tarmоq оperatsiоn tizimining qaysi qismi ma`lumоtlarni adreslash, buferlash, va uzatilishidagi xavfsizlikni ta`minlaydi",
    "answer": "kоmmunikatsiоn vоsitalar",
    "noAnswer1": "klient qismi",
    "noAnswer2": "server qismi",
    "noAnswer3": "kоmp yuterni lоkal resurslarini bоshqaruvchi vоsita"
  },
  {
    "question": "Qanday axbоrоtlar security accounts manager da saqlanadi",
    "answer": "fоydalanuvchilarning qayd yozuvi haqidagi",
    "noAnswer1": "Windows оperatsiоn tizim fоydalanuvchilari haqidagi",
    "noAnswer2": "ro'yxatdan o'tgan fоydalanuvchilar haqidagi",
    "noAnswer3": "ma lumоtlar bazasidagi axbоrоtlar"
  },
  {
    "question": "Asоsiy maqsadi va samaradоrlik ko'rsatkichi-maksimal o'tkazish qоbiliyati, ya`ni vaqt birligida maksimal sоn masalalarni yechishdan ibоrat bo'lgan ОT lar bu:",
    "answer": "ma`lumоtlarga paketli ishlоv berish tizimlari",
    "noAnswer1": "ma`lumоtlar ketma-ket ishlоv berish tizimlari",
    "noAnswer2": "vaqtni bo'lish tizimlari",
    "noAnswer3": "real vaqt tizimlari"
  },
  {
    "question": "Win NT, Win 2000 va Win Xp оperatsiоn tizimlar",
    "answer": "bitta оila hisоblanadi",
    "noAnswer1": "bitta versiya hisоblanadi",
    "noAnswer2": "bitta mоdifikatsiya hisоblanadi",
    "noAnswer3": "turli оila hisоblanadi"
  },
  {
    "question": "Grafik qоbiqqa ega bo'lgan оperatsiоn tizimni ko'rsating",
    "answer": "WINDOWS XP",
    "noAnswer1": "MS DOS",
    "noAnswer2": "OS/2",
    "noAnswer3": "MSX"
  },
  {
    "question": "Qanday buyruq yordamida mmc da xavfsizlikning lоkal parametrlarini  o'rnatish mumkin",
    "answer": "secpol.msc",
    "noAnswer1": "secpol.mmc",
    "noAnswer2": "mms.sec",
    "noAnswer3": "security/ pol.mss"
  },
  {
    "question": "Qanday bayonnоma faylni lоkal shifrlashga va shifrlangan hоlda uzutishga imkоn beradi",
    "answer": "WEBDAV",
    "noAnswer1": "SSL",
    "noAnswer2": "TLS",
    "noAnswer3": "EFS"
  },
  {
    "question": "Eng  xavfsiz, o'zining bоshqarish mexanizmlari bilan  prоtsessоrning  90% vaqtini оluvchi, nisbatan past unumdоrlikka ega bo'lgan xavfsizlik sinfi bu:",
    "answer": "A sinfi",
    "noAnswer1": "D sinfi",
    "noAnswer2": "B sinfi",
    "noAnswer3": "C1 sinfi"
  },
  {
    "question": "Kasperskiy antivirus dasturining shaxsiy versiyasi (uy va shaxsiy kоmp yuterlarga mo'ljallangan) quyidagi xоssalarga ega",
    "answer": "o'rnatish va sоzlash qulayligi",
    "noAnswer1": "qat`iy chegaralangan resurslar bilan ishlaydi",
    "noAnswer2": "katta xajmdagi ma`lumоtlar bazasi bilan ishlaydi",
    "noAnswer3": "masоfadan markazlashgan hоlatda bоshqarishni ta`minlaydi"
  },
  {
    "question": "«оranjevaya kniga» talablari bo'yicha nechta xavfsizlik sinflari mavjud",
    "answer": "5 ta xavfsizlik sinf",
    "noAnswer1": "2 ta xavfsizlik sinf",
    "noAnswer2": "3 ta xavfsizlik sinf",
    "noAnswer3": "4 ta xavfsizlik sinf"
  },
  {
    "question": "Fayllar tuzilishining asosiy birligi nimalar",
    "answer": "ma`lumotlar",
    "noAnswer1": "kataloglar",
    "noAnswer2": "xotira",
    "noAnswer3": "grafiklar"
  },
  {
    "question": "Dasturlash  tillari va kоmpilyatоrlar",
    "answer": "2-rivоjlanish  davrida yuzaga keldi",
    "noAnswer1": "1-rivоjlanish davrida yuzaga keldi",
    "noAnswer2": "3-rivоjlanish davrida yuzaga keldi",
    "noAnswer3": "4-rivоjlanish davrida yuzaga keldi"
  },
  {
    "question": "Xotiraning maʼlumotlar joylashadigan boʼlimi:",
    "answer": "segment deyiladi",
    "noAnswer1": "stek deyiladi",
    "noAnswer2": "overley deyiladi",
    "noAnswer3": "sahifa deyiladi"
  },
  {
    "question": "Kоmpyuter tarkibiga kiruvchi turli qurilmalarni bоshqaruvchi maxsus dasturlar  ..... .deb ataladi.",
    "answer": "drayverlar",
    "noAnswer1": "оperatsiоn tizim",
    "noAnswer2": "plug and play texnоlоgiyasi",
    "noAnswer3": "xizmatchi dasturlar"
  },
  {
    "question": "Hisoblash tizimlari tarkibi quyidagi qismlardan iborat:",
    "answer": "apparat va dasturiy taʼminot",
    "noAnswer1": "qurilma va dasturlar",
    "noAnswer2": "qurilmalardan",
    "noAnswer3": "faqat dasturlardan"
  },
  {
    "question": "Dastur:",
    "answer": "buyruqlarning tartiblangan ketma-ketligi",
    "noAnswer1": "buyruqlar toʼplami",
    "noAnswer2": "qurilmalar",
    "noAnswer3": "Buyruqlarning istalgan ketma ketligi"
  },
  {
    "question": "Matn redaktori Word bu:",
    "answer": "amaliy Dasturiy taʼminotga kiradi",
    "noAnswer1": "xizmatchi Dasturiy taʼminotga kiradi",
    "noAnswer2": "asos Dasturiy taʼminotga kiradi",
    "noAnswer3": "tizimli Dasturiy taʼminotga kiradi"
  },
  {
    "question": "Operatsion tizim bu:",
    "answer": "tizimli Dasturiy taʼminotga kiradi",
    "noAnswer1": "xizmatchi Dasturiy taʼminotga kiradi",
    "noAnswer2": "amaliy Dasturiy taʼminotga kiradi",
    "noAnswer3": "asos Dasturiy taʼminotga kiradi"
  },
  {
    "question": "Operatsion tizim bu:",
    "answer": "hamma javoblar toʼgʼri",
    "noAnswer1": "foydalanuvchi interfeysini bajaradi",
    "noAnswer2": "dasturlar bilan dastur interfeysi",
    "noAnswer3": "dasturlar bilan qurilmalar oʼrtasidagi interfeys"
  },
  {
    "question": "Operatsion tizim xali mavjud boʼlmagan davr:",
    "answer": "rivojlanish 1-davri (1945-1955 y.)",
    "noAnswer1": "rivojlanish 2-davri (1955-1965 y.)",
    "noAnswer2": "rivojlanish 3-davri (1965-1980 y.)",
    "noAnswer3": "rivojlanish 4-davri (1980-hozirgi vaqtgacha)"
  },
  {
    "question": "Operatsion tizimning asosiy funktsiyalari nechta?",
    "answer": "6 ta",
    "noAnswer1": "5 ta",
    "noAnswer2": "3 ta",
    "noAnswer3": "1 ta"
  },
  {
    "question": "SOFTWARE-bu:",
    "answer": "dasturiy taʼminot",
    "noAnswer1": "apparat taʼminot",
    "noAnswer2": "yordam tizimi",
    "noAnswer3": "qoʼshimcha tizim"
  },
  {
    "question": "Hardware - bu",
    "answer": "apparat taʼminot",
    "noAnswer1": "dasturiy taʼminot",
    "noAnswer2": "dasturiy modul",
    "noAnswer3": "protsessor"
  },
  {
    "question": "MS Office ilovalari bu:",
    "answer": "amaliy Dasturiy taʼminot dasturlaridir",
    "noAnswer1": "xizmatchi Dasturiy taʼminot dasturlaridir",
    "noAnswer2": "asos Dasturiy taʼminot dasturlaridir",
    "noAnswer3": "tizimli Dasturiy taʼminot dasturlaridir"
  },
  {
    "question": "Operatsion qobiqlar bu:",
    "answer": "tizimli Dasturiy taʼminot dasturidir",
    "noAnswer1": "xizmatchi dasturdir",
    "noAnswer2": "amaliy dasturdir",
    "noAnswer3": "asos dasturiy taʼminot"
  },
  {
    "question": "Operatsion tizimning interfeysda milliy tillardan foydalanadigan versiyalari:",
    "answer": "lokallashtirilgan versiya deb ataladi",
    "noAnswer1": "milliy versiyasi deb ataladi",
    "noAnswer2": "modifikatsiyalashtirilgan versiyasi deb ataladi",
    "noAnswer3": "global versiyasi deb ataladi"
  },
  {
    "question": "Foydalanuvchi real apparatura bilan ish koʼrishda mashina tilidan foydalanmasdan, qulay interfeysda ishlashi uchun:",
    "answer": "operatsion tizim kengaytirilgan mashina, virual mashina sifatida xizmat qiladi",
    "noAnswer1": "operatsion tizim resurslarni boshqaruvchi sifatida xizmat qiladi",
    "noAnswer2": "dasturlarni boshqaruvchi sifatida xizmat qiladi",
    "noAnswer3": "qurilmalarni boshqaruvchi sifatida xizmat qiladi"
  },
  {
    "question": "Operatsion tizim resurslarni samarali boshqarishi uchun:",
    "answer": "resurslarni rejalashtirish va resurs xolatini kuzatishi zarur",
    "noAnswer1": "dasturlarni boshqarishi",
    "noAnswer2": "resurslarni taqsimlashi",
    "noAnswer3": "resurs holatini kuzatadi"
  },
  {
    "question": "Hisoblash tizimi boshqaradigan jarayonlar qatʼiy vaqt chegaralarini qoniqtiradigan operatsion tizimlar:",
    "answer": "real vaqt rejimida ishlaydigan operatsion tizimlar",
    "noAnswer1": "paketli ishlov berish rejimida ishlaydigan operatsion tizimlar",
    "noAnswer2": "taqsimlangan rejimida ishlaydigan operatsion tizimlar",
    "noAnswer3": "monolit operatsion tizimlar"
  },
  {
    "question": "Koʼp satxli tizimlar satxlari orasida bogʼlanish quyidagicha boʼlgan",
    "answer": "har bir satx oʼzidan yuqori va pastki sath bilan bogʼlanadi",
    "noAnswer1": "hamma satxlar bir-biri bilan bogʼlangan",
    "noAnswer2": "hamma satxlar faqat eng yuqori satx bilan bogʼlangan",
    "noAnswer3": "xech qaysisi bogʼlanmagan"
  },
  {
    "question": "Mikroyadroli OT larda mikroyadroda quyidagi funktsiyalar joylashgan",
    "answer": "minimal zaruriy funktsiyalar",
    "noAnswer1": "OT ni yuklash funktsiyalari",
    "noAnswer2": "xotirani taqsimlash funktsiyalari",
    "noAnswer3": "kiritish-chiqarish funktsiyalari"
  },
  {
    "question": "OT jarayonlar ustida quyidagi amallarni bajaradi:",
    "answer": "hamma javoblar toʼgʼri",
    "noAnswer1": "jarayon yaratish va tugallash",
    "noAnswer2": "jarayonni toʼxtatib turish, jarayonni blokirovka qilish, blokirovkadan chiqarish",
    "noAnswer3": "jarayon prioritetini oʼzgartirish"
  },
  {
    "question": "Quyidagi OT larning qaysi biri ochiq kodli tizim hisoblanadi",
    "answer": "Linux",
    "noAnswer1": "MS DOS",
    "noAnswer2": "UNIX",
    "noAnswer3": "WinXP"
  },
  {
    "question": "Аlohida energiyaga, katta xajmga va samarali foydalanish imkoniga ega boʼgan xotira:",
    "answer": "doimiy xotira deyiladi",
    "noAnswer1": "tezkor xotira deyiladi",
    "noAnswer2": "protsessor registrlari deyiladi",
    "noAnswer3": "elektron disk"
  },
  {
    "question": "Xotiraning fiksirlangan boʼlimlarga boʼlishda:",
    "answer": "xotira qatʼiy oʼlchamli boʼlaklarga oldindan boʼlingan boʼladi",
    "noAnswer1": "maʼlumotlar-fayllar boʼlaklarga boʼlinadi",
    "noAnswer2": "maʼlumotlar xajmi boʼyicha joylashtirib boriladi",
    "noAnswer3": "xotira sahifalarga boʼlinadi"
  },
  {
    "question": "Ochiq kodli OT larda:",
    "answer": "tizim kodlari ochiq, ixtiyoriy foydalanuvchi uni oʼzgartirishi mumkin",
    "noAnswer1": "tizim kodlari ochiq, ammo ularni oʼzgartirish mumkin emas",
    "noAnswer2": "Tizim kodlari faqat avtorlari uchun ochiq",
    "noAnswer3": "dastur kodlari ochiq emas"
  },
  {
    "question": "Zamonaviy OT larda xotira:",
    "answer": "segment sahifali boʼlinadi",
    "noAnswer1": "oʼzgaruvchan boʼlimlarga boʼlinadi",
    "noAnswer2": "segmentlarga boʼlinadi",
    "noAnswer3": "qatʼiy boʼlimlarga boʼlinadi"
  },
  {
    "question": "Zamonaviy fayllarni boshqaruv tizimi bu- :",
    "answer": "NTFS",
    "noAnswer1": "FAT",
    "noAnswer2": "Super FAT",
    "noAnswer3": "HPFS"
  },
  {
    "question": "Fayllar bilan ishlashni amalga oshiruvchi dasturiy taʼminot:",
    "answer": "fayl menedjeri",
    "noAnswer1": "dastur menedjeri",
    "noAnswer2": "xotira mennedjeri",
    "noAnswer3": "qurilma menedjeri"
  },
  {
    "question": "Fayllarni boshqaruvchi tizim maʼlumotlarni",
    "answer": "Doimiy xotiraga (diskka) joylashtiradi",
    "noAnswer1": "tezkor xotiraga joylashtiradi",
    "noAnswer2": "fizik xotiraga joylashtiradi",
    "noAnswer3": "svopingni bajaradi"
  },
  {
    "question": "Maʼlumotlarni kataloglar koʼrinishida tuzilishi",
    "answer": "ierarxik koʼrinishda deyiladi",
    "noAnswer1": "sahifali koʼrinish deyiladi",
    "noAnswer2": "ketma-ket koʼrinishda deyiladi",
    "noAnswer3": "mantiqiy koʼrinishda deyiladi"
  },
  {
    "question": "FAT fayl tizimi oʼz ichiga quyidagi maʼlumotlarni oladi:",
    "answer": "hamma javoblar toʼgʼri",
    "noAnswer1": "fayl yoki uning fragmentlari uchun ajratilgan mantiqiy diskning adreslanuvchi qismlari",
    "noAnswer2": "disk makoni boʼsh sohalari",
    "noAnswer3": "diskning defekt sohalari"
  },
  {
    "question": "FAT fayl tizimida, mantiqiy disk:",
    "answer": "tizimli soxa va maʼlumotlar soxasiga boʼlinadi",
    "noAnswer1": "maʼlumotlar soxasi va kataloglarga boʼlinadi",
    "noAnswer2": "kataloglar soxasi va tizimli soxa",
    "noAnswer3": "yuklanish qismlari"
  },
  {
    "question": "NTFS fayl tizimi bu:",
    "answer": "yangi texnologiya fayl tizimi",
    "noAnswer1": "yuqori unumdorlikka ega boʼlgan tizim",
    "noAnswer2": "ishonchlilikka ega boʼlgan tizim",
    "noAnswer3": "disk makonidan samarali foydalanadi"
  },
  {
    "question": "Monolit OT larda tuzilishi",
    "answer": "2 ta bo'lakdan iborat",
    "noAnswer1": "3 ta satxdan iborat (bosh dastur, protsedura va servis dasturlari)",
    "noAnswer2": "6 ta satxdan iborat (ko'p satxli dastur)",
    "noAnswer3": "5 ta satxdan iborat"
  },
  {
    "question": "Operatsion tizim qanday asosiy qismlardan tashkil topgan",
    "answer": "yadro, komanda interpritatori, tarjimon",
    "noAnswer1": "yadro",
    "noAnswer2": "qobiq, boshqaruvchi maxsus dasturlar",
    "noAnswer3": "dastur qobigi, integrallashgan foydalanuvchi interfeysi"
  },
  {
    "question": "Fragmentattsiya deb nimaga aytiladi",
    "answer": "xotira bo'limlarga ajratilganda qoladigan bo'l joyi",
    "noAnswer1": "xotiraning bo'limlarga ajralmay qolishi",
    "noAnswer2": "ma`lumotlarning bo'limlarga sigmay qolishi",
    "noAnswer3": "xotiraning bir turi"
  },
  {
    "question": "Qanday texnologiya standart qurilmalarni avtommatlashgan rejimda o'rnatish imkonini beradi",
    "answer": "plug and play",
    "noAnswer1": "active install",
    "noAnswer2": "master",
    "noAnswer3": "object linking"
  },
  {
    "question": "Operatsion tizim  2 ta asosiy funktsiyani bajaradi",
    "answer": "foydalanuvchi uchun qulay interfeys va kodlarni yashirish",
    "noAnswer1": "resurslarni  kuzatish va taqsimlash",
    "noAnswer2": "dasturlarni  nazorat qiladi",
    "noAnswer3": "foydalanuvchiga kengaytirilgan mashina sifatida va resurslarni boshqaruvchi sifatida xizmat qiladi"
  },
  {
    "question": "Operatsion tizim xali mavjud bo'lmagan davr",
    "answer": "rivojlanish 1-davri (1945-1955 y.)",
    "noAnswer1": "rivojlanish 3-davri (1965-1980 y.)",
    "noAnswer2": "rivojlanish 2-davri (1955-1965 y.)",
    "noAnswer3": "rivojlanish 4-davri (1980-hozirgi vaqtgacha)"
  },
  {
    "question": "Mul tidasturlash rejimida ishlaydigan operatsion tizimlar",
    "answer": "rivojlanish 3-davriga yuzaga keldi",
    "noAnswer1": "rivojlanish 1-davriga yuzaga keldi",
    "noAnswer2": "rivojlanish 2-davriga yuzaga keldi",
    "noAnswer3": "rivojlanish 4-davriga yuzaga keldi"
  },
  {
    "question": "Mul tidasturli, ko'pfoydalanuvchili operatsion tizimlar bu",
    "answer": "UNIX operatsion tizimlar",
    "noAnswer1": "Ms Dos",
    "noAnswer2": "Windows 3x",
    "noAnswer3": "Solaris"
  },
  {
    "question": "Birinchi paketli  ishlov berish tizimlari paydo bo'lgan",
    "answer": "rivojlanish 2-davri (1955-1965 y.)",
    "noAnswer1": "rivojlanish 3-davri (1965-1980 y.)",
    "noAnswer2": "rivojlanish 1-davri (1945-1955 y.)",
    "noAnswer3": "rivojlanish 4-davri (1980-hozirgi vaqtgacha)"
  },
  {
    "question": "Tizimning tarmoq funktsiyalari asosiy modullariga o'rnatilgan tarmoq operatsion tizimini ayting",
    "answer": "Windows  NT",
    "noAnswer1": "Ms Dos",
    "noAnswer2": "Lantastic",
    "noAnswer3": "Lan manager"
  },
  {
    "question": "Windows XP operatsion tizimning qaysi turida NTFS fayllarni shifrlash imkoniyatisha ega emas",
    "answer": "home edition",
    "noAnswer1": "standart edition",
    "noAnswer2": "professional",
    "noAnswer3": "portable"
  },
  {
    "question": "Multidasturlash bu hisoblash jarayonini tashkil qilish usuli bo'lib, bitta protsessorda",
    "answer": "bir necha dastur navbat bilan bajariladi",
    "noAnswer1": "bitta dastur bajariladi",
    "noAnswer2": "bitta dastur ham bajarilmaydi",
    "noAnswer3": "bir necha dastur parallel bajariladi"
  },
  {
    "question": "Multi dasturlash bu",
    "answer": "hisoblash jarayonning tashkil qilish usuli bo'lib,  bitta protsessorda navbat bilan bir nechta dastur bajariladi",
    "noAnswer1": "hisoblash jarayonning tashkil qilish usuli bo'lib,  bir necha protsessorda navbat bilan bir nechta dastur bajariladi",
    "noAnswer2": "hisoblash jarayonning tashkil qilish usuli bo'lib,  bitta protsessorda bir vaqtning o'zida bir nechta dastur bajariladi",
    "noAnswer3": "hisoblash jarayonning tashkil qilish usuli bo'lib, bir nechta protsessorda bitta dastur bajariladi"
  },
  {
    "question": "Windows OT  larining boshqa ot lardan  printsipial farqi",
    "answer": "grafik interfeysi va bir nechta ilovalar bilan birgalikda ishlash",
    "noAnswer1": "hisoblashlar ishonchliligi",
    "noAnswer2": "dialogli  ish  rejimi",
    "noAnswer3": "Komanda  tili yo'qligi"
  },
  {
    "question": "Quyidagi tariflardan qay biri  operatsion tizimning  modullik printsipiga  mos  keladi",
    "answer": "OT asosiy tarkibiy qismlarini,  mustaqil, alohida  qismlar modullarga  bo'linishi",
    "noAnswer1": "Aniq  resurslardan alohida  bo'lib, abstraktsiyalanishi",
    "noAnswer2": "ot ni  boshqa  apparat  platformaga  ko'chish  osonligi",
    "noAnswer3": "boshqa tizimlarga yozilgan  dasturlarni  bajara  olish xususiyati"
  },
  {
    "question": "Modullilik printsipi asosida qurilgan OT larda dastur",
    "answer": "aloxida mustaqil bo'laklardan iborat bo'ladi",
    "noAnswer1": "bitta monolit bo'lakdan",
    "noAnswer2": "mustaqil bo'lmagan boglangan bo'laklardan iborat bo'ladi",
    "noAnswer3": "bir techta sathdan iborat bo'ladi"
  },
  {
    "question": "Yechiladigan masala va hisoblash tizimining konfiguratsiyasida kelib chiqqan holda, ot ni sozlashga imkon beradigan ot yadrosini arxitekturasini tashkil etish",
    "answer": "OT ni generatsiya qilish printsipi deyiladi",
    "noAnswer1": "modullilik   printsipi",
    "noAnswer2": "standart xolatlar printsipi",
    "noAnswer3": "chastota printsipi"
  },
  {
    "question": "OT ni qurish asosiy printsiplaridan biri bu modullilik printsipidir. Bu printsip modullilikka qaysi ta`rif mos keladi:",
    "answer": "OT asosiy tarkibiy qismlarini, mustaqil, alohida qismlar modullarga bo'linishi",
    "noAnswer1": "aniq resurslardan alohida bo'lib, abstraktsiyalanish",
    "noAnswer2": "OT ni boshqa apparat platformaga ko'chish osonligi",
    "noAnswer3": "boshqa tizimlarga yozilgan dasturlarni  bajara olish xususiyati"
  },
  {
    "question": "Aynan bir amalni, xar xil vositalar yordamida bajarish, bu",
    "answer": "funktsional ortiqchalik printsipi deyiladi",
    "noAnswer1": "standart xolatlar printsipi deyiladi",
    "noAnswer2": "generatsiya printsipi deyiladi",
    "noAnswer3": "modullilik printsipi deyiladi"
  },
  {
    "question": "Dastur algoritmlarda, ishlov beriladigan massivlarda amal va kattaliklardan foydalanish chastotasiga qarab, funktsiyalarni ajratishga asoslangan printsip",
    "answer": "chastota   printsipi",
    "noAnswer1": "modullilik printsipi",
    "noAnswer2": "xavfsizlik  printsipi",
    "noAnswer3": "generatsiya  printsipi"
  },
  {
    "question": "OT larni o'rnatish dasturi foydalanuvchiga tizim konfiguratsiyasin o'zi tanlaydigan o'rnatish stsenariysi quyidagicha ataladi.",
    "answer": "foydalanuvchi",
    "noAnswer1": "ixcham (kompakt",
    "noAnswer2": "Tipik",
    "noAnswer3": "mobil komp yuterlar uchun"
  },
  {
    "question": "Klient-server modelining ustunligi nimada",
    "answer": "taqsimlangan tizimlarga qulay moslashadi",
    "noAnswer1": "imtiyozli rejimda ishlaydi",
    "noAnswer2": "eksplutatsiya xossallari samarali ishlaydi",
    "noAnswer3": "bir xil tizimlarda samarali ishlaydi"
  },
  {
    "question": "Modullilik printsipi asosida tuzilgan OT larda ixtiyoriy modulni",
    "answer": "ixtiyoriy boshqa modulga, mos interfeys mavjud bo'lsa almashtirish mumkin",
    "noAnswer1": "imtiyozli modullarga almashtirish mumkin",
    "noAnswer2": "hech qanday modulga almashtirish mumkin emas",
    "noAnswer3": "boshqa interfeysga almashtirish"
  },
  {
    "question": "Birinchi ko'p satxli tizimlarda nechta satx bo'lgan",
    "answer": "6 ta",
    "noAnswer1": "3 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": "5 ta"
  },
  {
    "question": "Ko'p satxli tizimlar kamchiligi",
    "answer": "biror satx olib tashlansa, satxlar orasida boglanishni yangidan tuzish kerak",
    "noAnswer1": "satxlarni boglab bo'lmaydi",
    "noAnswer2": "otni yangidan tuzish kerak",
    "noAnswer3": "biror satx olib tashlansa, yangi sath tuzish kerak bo'ladi"
  },
  {
    "question": "Operatsion qobiqlar",
    "answer": "operatsion tizim ishini boshqarish qulayligini oshiradigan qo'shimcha dasturdir",
    "noAnswer1": "operatsion tizim himoyasini oshiradi",
    "noAnswer2": "operatsion tizim ishini kuzatadi",
    "noAnswer3": "kiritish-chiqarishni boshqaradi"
  },
  {
    "question": "Ko'p satxli tizimlar satxlari orasida boglanish quyidagicha bo'lgan",
    "answer": "har bir satx o'zidan yuqori va past sath bilan boglangan",
    "noAnswer1": "hamma satxlar bir-biri bilan boglangan",
    "noAnswer2": "hamma satxlar faqat eng yuqori satx bilan boglangan (protsessorni taqsimlash va ko'p masalaning satxi-0 chi satx bilan)",
    "noAnswer3": "faqat o'zidan yuqori sath bilan qoplangan"
  },
  {
    "question": "Hamma qismlari bitta dastur tarkibiga kirib, ma`lumotlarning umumiy strukturalaridan foydalanadigan va bir-biri bilan bevosita protseduralarni chaqirish bilan bog‘lanuvchi yaxlit tuzilishga ega bo'lgan tizim:",
    "answer": "monolit tizim",
    "noAnswer1": "ko'p sathli tizim",
    "noAnswer2": "makroyadroli tizim",
    "noAnswer3": "mikroyadroli tizim"
  },
  {
    "question": "Mikroyadroli OT larda mikroyadroda quyidagi funktsiyalar joylashgan",
    "answer": "minimal zaruriy funktsiyalar",
    "noAnswer1": "ot ni yuklash funktsiyalari",
    "noAnswer2": "xotirani taqsimlash funktsiyalari",
    "noAnswer3": "kiritish-chiqarish funktsiyalari"
  },
  {
    "question": "Resurs mavjudligi, xaqiqiyligiga qarab",
    "answer": "fizik va virtual",
    "noAnswer1": "moslanuvchan va qat`iy",
    "noAnswer2": "sun`iy va xaqiqiy",
    "noAnswer3": "vaqtinchalik va doimiy"
  },
  {
    "question": "Iste`mol qilinadigan va iste`molchi uchun ma`lum qiymatga ega bo'lgan ob`ekt",
    "answer": "resurs deyiladi",
    "noAnswer1": "dastur vositasi deyiladi",
    "noAnswer2": "apparat vositasi deyiladi",
    "noAnswer3": "printsip deyiladi"
  },
  {
    "question": "Resurslarni ajratilishi va bo'shashi bilan bogliq amallar",
    "answer": "ko'p martalik amallar",
    "noAnswer1": "bir martalik amallar",
    "noAnswer2": "jarayon prioritetini o'zgartiruvchi amallar",
    "noAnswer3": "tayyor holatga o'tkazuvchi amallar"
  },
  {
    "question": "Matn  redaktori  Word bu",
    "answer": "amaliy dasturiy ta`minotga kiradi",
    "noAnswer1": "xizmatchi dasturiy ta`minotga kiradi",
    "noAnswer2": "asos dasturiy ta`minotga kiradi",
    "noAnswer3": "tizimli dasturiy ta`minotga kiradi"
  },
  {
    "question": "Jarayon  vaqt kvanti tugaganda",
    "answer": "jarayon tayyor holatga o'tadi",
    "noAnswer1": "jarayon tugatiladi",
    "noAnswer2": "jarayon kutish xolatiga o'tadi",
    "noAnswer3": "jarayon uziladi"
  },
  {
    "question": "Energiya manbasiga bogliq xotira",
    "answer": "tezkor xotira deyiladi",
    "noAnswer1": "doimiy xotira deyiladi",
    "noAnswer2": "ikkilamchi xotira deyiladi",
    "noAnswer3": "asosiy xotira deyiladi"
  },
  {
    "question": "Xotira ierarxiyasi bo'yicha, eng qimmat tezkor va qimmat xotira",
    "answer": "protsessor registrlari",
    "noAnswer1": "elektron disklar",
    "noAnswer2": "asosiy xotira",
    "noAnswer3": "tashqi xotira"
  },
  {
    "question": "Kutish holatidagi jarayonlar xodisa ro'y bergandan so'ng",
    "answer": "bajarilish holatiga o'tadi",
    "noAnswer1": "kutish holatiga o'tadi",
    "noAnswer2": "tugatiladi",
    "noAnswer3": "tayor holatga o'tadi"
  },
  {
    "question": "Dunyodagi yaratilgan dastlabki kompyuterlardan biri EDSAC qachon ishlab chiqilgan?",
    "answer": "1949 yil",
    "noAnswer1": "1950 yil",
    "noAnswer2": "1948 yil",
    "noAnswer3": "1951 yil"
  },
  {
    "question": "EDSAC superkomp'yuterining samaradorlik ko'rsatkichi to'g'ri keltirilgan javobni ko'rsating",
    "answer": "daqiqasiga 100 ta arifmetik amallarni bajara olish qobiliyatiga ega",
    "noAnswer1": "daqiqasiga 170 ta arifmetik amallarni bajara olish qobiliyatiga ega",
    "noAnswer2": "daqiqasiga 120 ta arifmetik amallarni bajara olish qobiliyatiga ega",
    "noAnswer3": "daqiqasiga 150 ta arifmetik amallarni bajara olish qobiliyatiga ega"
  },
  {
    "question": "…bu ajratilgan server bo'lib  ixtiyoriy tipdagi fayllar ustida kiritish -chiqarish  va saqlash kabi amallarni bajaradi",
    "answer": "fayl server",
    "noAnswer1": "antivirus",
    "noAnswer2": "operatsion tizim",
    "noAnswer3": "dastur"
  },
  {
    "question": "Xozirgi kunda superkompyuterlar uchun eng asosiy OT qaysi?",
    "answer": "Linux",
    "noAnswer1": "Cray",
    "noAnswer2": "Cent OS 7",
    "noAnswer3": "Ubuntu"
  },
  {
    "question": "… – shahar qamrovidagi tarmoq. 1000 metr masofani o'zida qamrab oladi va o'zida 1000 ta foydalanuvchilarni o'ziga birlashtiradi.",
    "answer": "MAN (Metro'olitan Area Network)",
    "noAnswer1": "CAN (Cam'us Area Network)",
    "noAnswer2": "LAN (Local Area Network)",
    "noAnswer3": "PAN (Personal Area Network)"
  },
  {
    "question": "… – global Kompyuter tarmog'i hisoblanadi. Million abonentlarni o'zida birlashtiradi (Internet).",
    "answer": "WAN (Wide Area Network)",
    "noAnswer1": "CAN (Cam'us Area Network)",
    "noAnswer2": "LAN (Local Area Network)",
    "noAnswer3": "PAN (Personal Area Network)"
  },
  {
    "question": "2021 yil iyun holatiga ko'ra dunyoda eng ko'p superkompyuterlar mavjud bo'lgan davlat qaysi?",
    "answer": "Xitoy",
    "noAnswer1": "AQSh",
    "noAnswer2": "Yaponiya",
    "noAnswer3": "Germaniya"
  },
  {
    "question": "2020 yilda qaysi superkompyuterning samaradorlik ko'rsatkichi eng yuqori hisoblangan",
    "answer": "Fujitsu fugaku",
    "noAnswer1": "IBM Summit",
    "noAnswer2": "Cray Titan",
    "noAnswer3": "Cray Jaguar"
  },
  {
    "question": "Taqsimlangan kompyuter tizimi nima?",
    "answer": "Kompyuter tarmog'i",
    "noAnswer1": "kompyuterni tashkillash, malumotlarning uzatilish sxemasi, parallelizm",
    "noAnswer2": "Hujjatning sahifasining oxiriga oʼtish",
    "noAnswer3": "Serverlar"
  },
  {
    "question": "Almashinuv buferi nima uchun ishlatiladi",
    "answer": "Fayllarni nushalash va ko’chirish uchun",
    "noAnswer1": "Monitorni sozlash uchun",
    "noAnswer2": "– Mahsus dasturlarni ishlatish uchun",
    "noAnswer3": "Kontekst menyudan foydalanish uchun"
  },
  {
    "question": "Taqsimlangan fay tizimi nima?",
    "answer": "Tarmoq fayl tizimi",
    "noAnswer1": "Taqsimlangan fayl tizimi",
    "noAnswer2": "Taqsimlanuvchi va parallel fayl tizimlari",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Hisоblash tizimi bоshqaradigan jarayonlar qat`iy vaqt chegaralarini qоniqtiradigan оperatsiоn tizimlar",
    "answer": "real  vaqt rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer1": "paketli ishlоv berish rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer2": "taqsimlangan rejimida ishlaydigan оperatsiоn tizimlar",
    "noAnswer3": "mоnоlit оperatsiоn tizimlar"
  },
  {
    "question": "Taqsimlangan operatsion tizim qaysi javobda to'g'ri ko'rsatilgan?",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "Windows NT",
    "noAnswer2": "Solaris",
    "noAnswer3": "NetWare"
  },
  {
    "question": "Аutentifikatsiya nima?",
    "answer": "Аutentifikatsiya – foydalanuvchi nomi va parolini qayd yozuvidagi qiymatga mosligini tekshirish.",
    "noAnswer1": "Аutentifikatsiya – foydalanuvchi millati va parolini qayd yozuvidagi qiymatga mosligini tekshirish.",
    "noAnswer2": "Аutentifikatsiya – foydalanuvchi jinsi va parolini qayd yozuvidagi qiymatga mosligini tekshirish.",
    "noAnswer3": "Аutentifikatsiya – foydalanuvchi kasbi va parolini qayd yozuvidagi qiymatga mosligini tekshirish."
  },
  {
    "question": "Avtomatlashtirilgan axborot tizimini yaratish, rivojlantirish mohiyati vaqtga nisbatan nimani aks ettiradi?",
    "answer": "Hayotiy tsiklini",
    "noAnswer1": "Kelajakni",
    "noAnswer2": "Tezkorlikni",
    "noAnswer3": "Taqsimlangan tarmoq tizimlarini"
  },
  {
    "question": "Serverlarning vazifasi - …",
    "answer": "Serverlar bir vaqtning oʼzida koʼp sonli foydalanuvchilarga xizmat qiladi va ularga oʼzaro dasturiy va apparat resurslarni boʼlib olish imkonini beradi",
    "noAnswer1": "Serverlar bir vaqtning oʼzida oz sonli foydalanuvchilarga xizmat qiladi va ularga oʼzaro dasturiy va apparat resurslarni boʼlib olish imkonini beradi",
    "noAnswer2": "Serverlar har hil vaqtning oʼzida oz sonli foydalanuvchilarga xizmat qiladi va ularga oʼzaro dasturiy va apparat resurslarni boʼlib olish imkonini beradi",
    "noAnswer3": "Serverlar bir soniyada  koʼp sonli tizimlarga xizmat qiladi va ularga oʼzaro dasturiy va apparat resurslarni boʼlib olish imkonini beradi"
  },
  {
    "question": "GRID tizimlari asosan necha turga bo'linadi?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "5",
    "noAnswer3": "6"
  },
  {
    "question": "Real vaqt operatsion tizimlari xususiyati -",
    "answer": "Real vaqt OT laridan, hisoblash tizimi boshqaradigan jarayonlar qatʼiy vaqt chegaralarini qoniqtirishi kerak boʼlgan hollarda foydalaniladi",
    "noAnswer1": "Real vaqt OT laridan, hisoblash tizimi boshqaradigan jarayonlar noaniq vaqt chegaralarini qoniqtirishi kerak boʼlgan hollarda foydalaniladi",
    "noAnswer2": "Real vaqt OT laridan, hisoblash tizimi boshqaradigan jarayonlar qatʼiy vaqt chegaralarini qoniqtirmaslik  kerak boʼlgan hollarda foydalaniladi",
    "noAnswer3": "Real vaqt OT laridan, hisoblash tizimi boshqaradigan jarayonlar oz vaqt chegaralarini qoniqtirmaslik kerak boʼlgan hollarda foydalaniladi"
  },
  {
    "question": "Mobillilik printsipi nima?",
    "answer": "Bu printsip OTni bir platformadan, boshqa tipdagi platformaga koʼchirish imkonini nazarda tutadi",
    "noAnswer1": "Bu printsip OTni bir platformadan, boshqa tipdagi platformada saqlash va o'chirish  imkonini nazarda tutadi",
    "noAnswer2": "Bu printsip OTni bir platformada saqlash  imkonini nazarda tutadi",
    "noAnswer3": "Bu printsip OTni bir tipdagi platformaga koʼchirish imkonini nazarda tutadi"
  },
  {
    "question": "Xavfsizlik printsipi nima?",
    "answer": "Bir foydalanuvchi resurslarini boshqa foydalanuvchidan himoyani va hamma tizimni resurslarni faqat bitta foydalanuvchi egallab olishidan himoyani koʼzda tutadi",
    "noAnswer1": "Bir foydalanuvchi resurslarini boshqa tizimdan himoyani va hamma tizimni resurslarni faqat bitta tizim egallab olishidan himoyani koʼzda tutadi",
    "noAnswer2": "Bir dastur resurslarini boshqa foydalanuvchidan himoyani va hamma tizimni resurslarni faqat bitta foydalanuvchi egallab olishidan himoyani koʼzda tutadi",
    "noAnswer3": "Bir foydalanuvchi resurslarini boshqa dasturdan himoyani va hamma tizimni resurslarni faqat  foydalanuvchi egallab olishidan himoyani koʼzda tutadi"
  },
  {
    "question": "Bir protsessorli komp'yuter tizimida vaqtning har bir momentida faqat …",
    "answer": "bitta jarayon bajarilishi mumkin",
    "noAnswer1": "ikkita jarayon bajarilishi mumkin",
    "noAnswer2": "uzta jarayon bajarilishi mumkin",
    "noAnswer3": "barcha jarayon bajarilishi mumkin"
  },
  {
    "question": "Uyushtirilgan tahdidlar qanday turlarga boʼlinadi?",
    "answer": "aktiv va passiv tahdidlarga boʼlinadi",
    "noAnswer1": "aktiv va aniq tahdidlarga boʼlinadi",
    "noAnswer2": "aktiv va tez tahdidlarga boʼlinadi",
    "noAnswer3": "aktiv va xavfli tahdidlarga boʼlinadi"
  },
  {
    "question": "Passiv tahdid bu-",
    "answer": "maʼlumotlarga, tizim holatini oʼzgartirmaydigan xuquqsiz murojaatdir",
    "noAnswer1": "maʼlumotlarga, tizim holatini oʼzgartiradigan xuquqsiz murojaatdir",
    "noAnswer2": "maʼlumotlarga, tizim holatini oʼzgartirmaydigan xuquqli murojaatdir",
    "noAnswer3": "maʼlumotlarga, tizim holatini oʼzgartirmaydigan xuquqli murojaatdir"
  },
  {
    "question": "Bulut elementlarini funksional hujumlardan himoyalash uchun Proksi ga qanday himoya manbasini qo’yish lozim?",
    "answer": "DOS",
    "noAnswer1": "SQL inyeksiyasi",
    "noAnswer2": "Ekran pog’onasi ilovalari",
    "noAnswer3": "Sahifalarni yahlitligini nazorat qilish"
  },
  {
    "question": "Public cloud  - …",
    "answer": "bu infratuzilma bulutli xisoblash xizmatlaridan keng omma foydalanish imkoniyatiga ega.",
    "noAnswer1": "bu infratuzilma bulutli xisoblashdan faqatgina tashkilotning aloxida bir jamoasi, (bo’lim) foydalanishi mumkin.",
    "noAnswer2": "bu infratuzilma bulutli xisoblashni tadbiq etishda yagona tashkilot doirasida foydalaniladi.",
    "noAnswer3": "bu infratuzilma tarqatish modellarini barchasini o’z ichiga oladi (xususiy, jamoaviy, ommaviy)."
  },
  {
    "question": "Virtualizatsiya texnologiyasi birinchi bo’lib qachon va qaysi kompaniya tomonidan taqdim etilgan?",
    "answer": "1960-yil, IBM",
    "noAnswer1": "1987-yil, Microsoft",
    "noAnswer2": "1985-yil, Apple",
    "noAnswer3": "1993-yil, Amazon"
  },
  {
    "question": "Desktop qidiruv tizimi - …",
    "answer": "alohida kompyuterning maʻlumotlar bazasidan maʻlumot qidiradi.",
    "noAnswer1": "WWW dan maʻlumot qidiradi",
    "noAnswer2": "alohida tashkilotning ichki tarmogʻidagi kompyuterlardan maʻlumot qidiradi.",
    "noAnswer3": "butun dunyoga taqsimlangan munozaralar mediumi (vositasi) hisoblanadigan Usenetdan maʻlumot qidiradi"
  },
  {
    "question": "“Bulut” hisoblash modelining boshqa turdagi hisoblash modellaridan farqi nimada?",
    "answer": "Tarmoqdan keng holda foydalana olish va talab bo’yicha o’z o’ziga xizmat ko’rsatish",
    "noAnswer1": "Talab bo’yicha o’z o’ziga xizmat ko’rsatish",
    "noAnswer2": "Tarmoqdan keng holda foydalana olish va hisoblsh qulayligi",
    "noAnswer3": "Talab bo’yicha o’z o’ziga xizmat ko’rsatish va hisoblsh qulayligi"
  },
  {
    "question": "LISP tili kim tomonidan qachon yaratilgan?",
    "answer": "Jon Makkarti (1958-yil)",
    "noAnswer1": "Jozef Karl R. L. (1989-yil)",
    "noAnswer2": "Martin Kuper (1955-yil)",
    "noAnswer3": "Stiv Jobs (1971-yil)"
  },
  {
    "question": "Internetdagi birinchi qidiruv tizimi qanday nomlangan?",
    "answer": "Yahoo",
    "noAnswer1": "Google",
    "noAnswer2": "Gmail",
    "noAnswer3": "Yandex"
  },
  {
    "question": "Qidiruv tizimining asosiy vazifasi?",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "Indeks yaratish va yangilab turish (hujjatlardagi maʻlumotlar strukturasi)",
    "noAnswer2": "Qidiruv soʻrovnomalarini bajarish",
    "noAnswer3": "Qidiruv natijasini imkon qadar mazmunli, yaʻni tushunarli shaklda koʻrsatish"
  },
  {
    "question": "Kompyuterlar xotirasining hajmi bir sekundda bajaradigan amallar tezligiga qarab necha guruxga bo'linadi?",
    "answer": "5",
    "noAnswer1": "2",
    "noAnswer2": "4",
    "noAnswer3": "3"
  },
  {
    "question": "Tezkor xotira nima asosida yasaladi?",
    "answer": "Tranzistorlar",
    "noAnswer1": "Kondensatorlar",
    "noAnswer2": "Rezistorlar",
    "noAnswer3": "Diodlar"
  },
  {
    "question": "Tarmoq operatsion tizimlari ... .. qismlardan iborat",
    "answer": "To'rt",
    "noAnswer1": "Ikki",
    "noAnswer2": "Uch",
    "noAnswer3": "Besh"
  },
  {
    "question": "Yuqori mahsuldorlikka ega fayl tizimi",
    "answer": "HPFS",
    "noAnswer1": "FAT",
    "noAnswer2": "NTFS",
    "noAnswer3": "VFAT"
  },
  {
    "question": "Fayllar tuzilishining asоsiy birligi nimalar",
    "answer": "ma`lumоtlar",
    "noAnswer1": "katalоglar",
    "noAnswer2": "xоtira",
    "noAnswer3": "grafiklar"
  },
  {
    "question": "Ubuntu server qaysi kompaniya tamonidan ishlab chiqilgan",
    "answer": "Canonical",
    "noAnswer1": "Microsoft",
    "noAnswer2": "IBM",
    "noAnswer3": "Oracle"
  },
  {
    "question": "Operatsion tizim asoson ...",
    "answer": "tizimli dasturlar jamlanmasi",
    "noAnswer1": "amalaiy dasturlar jamlanmasi",
    "noAnswer2": "multimediyali qurilmalar jamlanmasi",
    "noAnswer3": "qobiqdan iborat"
  },
  {
    "question": "Operatsion tizimda hisoblash tizimining tarkibi bu",
    "answer": "Konfiguratsiya",
    "noAnswer1": "Drayverlar",
    "noAnswer2": "Aparat vositalar",
    "noAnswer3": "amaliy dasturlar"
  },
  {
    "question": "Mоnоlit ОT larda tuzilishi",
    "answer": "4 ta satxdan ibоrat",
    "noAnswer1": "5 ta satxdan ibоrat",
    "noAnswer2": "6 ta satxdan ibоrat (ko'p satxli dastur)",
    "noAnswer3": "3 ta satxdan ibоrat (bоsh dastur, prоtsedura va ser-vis dasturlari)"
  },
  {
    "question": "Amaliy dasturiy ta`minоt",
    "answer": "ma`lum ish jоyida aniq masalalarni yechishga yordam beradigan dastur",
    "noAnswer1": "hisоblash tizimini nazоrat qiluvchi",
    "noAnswer2": "stastikani оlib beradi",
    "noAnswer3": "qurilmalarni ishlatuvchi"
  },
  {
    "question": "Linux yadrosi uchun 2006 yil oxirida ishlab chiqilgan fayl tizimi qaysi?",
    "answer": "SpadFS",
    "noAnswer1": "ext",
    "noAnswer2": "ext3",
    "noAnswer3": "Linuxext"
  },
  {
    "question": "Core i3 oilasining dastlabki vakillari qanday yadro asosida qurilgan?",
    "answer": "Clarkdale",
    "noAnswer1": "Arrandale",
    "noAnswer2": "Arrandaly",
    "noAnswer3": "Clakdale"
  },
  {
    "question": "Qaysi qatorda buyruq protsessorining nomi to‘g‘ri ko‘rsatilgan",
    "answer": "command.com",
    "noAnswer1": "boot. record",
    "noAnswer2": "io.sys",
    "noAnswer3": "himem.sys"
  },
  {
    "question": "18 Ebaytli xotira bilan ishlay oluvchi fayl tizimini ko’rsating?",
    "answer": "Squashfs",
    "noAnswer1": "Gzib",
    "noAnswer2": "Live CD Linux",
    "noAnswer3": "AUFS"
  },
  {
    "question": "Vaqtni aniq hisoblash imkoniyati qaysi yildan boshlangan?",
    "answer": "1948",
    "noAnswer1": "1949",
    "noAnswer2": "1950",
    "noAnswer3": "1951"
  },
  {
    "question": "bz2 kengaytmali fayl qanday fayl",
    "answer": "siqilgan fayl",
    "noAnswer1": "audio fayl",
    "noAnswer2": "matnli fayl",
    "noAnswer3": "video fayl"
  },
  {
    "question": "Core i3 oilasining dastlabki vakillari qanday mikroarxitektura asosida qurilgan",
    "answer": "Nehalem",
    "noAnswer1": "Arrandale",
    "noAnswer2": "Ivy Bridge",
    "noAnswer3": "Sandy Bridge"
  },
  {
    "question": "Ma'lumotlarni uzatish uchun yuqori yuklamali tarmoqni tashkil qilish uchun mo'ljallangan fayl tizimi qaysi?",
    "answer": "Xsan",
    "noAnswer1": "ext",
    "noAnswer2": "NTFS",
    "noAnswer3": "FAT32"
  },
  {
    "question": "GPS sun’iy yo’ldoshlari erdan qancha balandlik(km)da joylashgan bo’ladi?",
    "answer": "20200",
    "noAnswer1": "20000",
    "noAnswer2": "180000",
    "noAnswer3": "18000"
  },
  {
    "question": "Ma'lumotlar markazlashtirilgan tarzda belgilanadigan ______  muvofiq almashiladi",
    "answer": "Qoidalarda",
    "noAnswer1": "Tizimlarga",
    "noAnswer2": "algoritmlarga",
    "noAnswer3": "Dasturga"
  },
  {
    "question": "Shartli ravishda klasterlarni sinflarga ajratish  kimlar tomonidan taklif etilgan?",
    "answer": "Yazek Radaevskiy",
    "noAnswer1": "Duglas Orren",
    "noAnswer2": "Tomas Sterling",
    "noAnswer3": "Don Bekker"
  },
  {
    "question": "Core i3 protsessorlarining to'rtinchi avlodi qanday nomlangan?",
    "answer": "Haswell",
    "noAnswer1": "DMI",
    "noAnswer2": "Nehalem",
    "noAnswer3": "Arrandale"
  },
  {
    "question": "O'rnatilgan operatsion tizim qaysi javobda to'g'ri berilganligini ko'rsating.",
    "answer": "QNX",
    "noAnswer1": "MS DOS",
    "noAnswer2": "Linux Ubuntu",
    "noAnswer3": "Linux Kali"
  },
  {
    "question": "Taqsimlangan fay tizimi nima?",
    "answer": "Tarmoq fayl tizimi",
    "noAnswer1": "Taqsimlangan fayl tizimi",
    "noAnswer2": "Taqsimlanuvchi va parallel fayl tizimlari",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Taqsimlangan ma'lumotlar bazasiga misol keltiring.",
    "answer": "DNS",
    "noAnswer1": "kompyuterni xotiralari",
    "noAnswer2": "Data Centerlar",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Prоtsessоr vaqti",
    "answer": "chegaralangan resurs",
    "noAnswer1": "dоimiy resurs",
    "noAnswer2": "vaqtinchalik resurs",
    "noAnswer3": "chegaralanmagan resurs"
  },
  {
    "question": ". - bu rivojlangan fayl tizimlarining xususiyatlarini va kodning murakkabligini oshirmasdan yaxshi ishlashni ta’minlaydi.",
    "answer": "SpadFS",
    "noAnswer1": "OnFS",
    "noAnswer2": "FATx",
    "noAnswer3": "AthOS"
  },
  {
    "question": "Taqsimlangan tizimlarga misol keltiring",
    "answer": "Barcha javoblar to’g’ri",
    "noAnswer1": "Internet, aloqa tarmoqlari",
    "noAnswer2": "Bank tizimini, Logistik tizimlar",
    "noAnswer3": "Davlat va munisipal boshqaruv"
  },
  {
    "question": "Adres – bu",
    "answer": "Xotira yacheykalarining tartiblangan nomeri",
    "noAnswer1": "Xotiradan tashqari element",
    "noAnswer2": "Kompyuter ichki xotirasining nomi",
    "noAnswer3": "Kompyuter apparat vositalarini boshqaruvchi dasturlar majmui"
  },
  {
    "question": "Kompyuter protsessori qanday vazifani bajaradi",
    "answer": "Asosiy mantiqiy va arifmetik amallarni bajaradi",
    "noAnswer1": "Programmalarni ishlashini tekshiradi",
    "noAnswer2": "Ma‟lumotlarning xotiradan olgan joyini tekshiradi",
    "noAnswer3": "Ma'lumotlarni boshqa qurilmaga uzatadi"
  },
  {
    "question": "QNX ni tarmoqlar uchun qanday  drayverlar mavjud?",
    "answer": "Ethernet, Fast Ethernet, Arcnet, IBM Token Ring va boshqalar",
    "noAnswer1": "Drayverlari mavjud emas",
    "noAnswer2": "QNX tarmoq OT hisoblanmaydi.",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Klasterlash kompyuter tiimlarining qaysi darajalarida qo'llaniladi?",
    "answer": "qurilmaviy tahminot",
    "noAnswer1": "taqsimlangantizim",
    "noAnswer2": "ko'ngilochar dasturlar",
    "noAnswer3": "amaliy tizimlari"
  },
  {
    "question": "Кластерлар бошқа архитектуралардан қайси параметрлар билан фарқ қилади?",
    "answer": "Улар ўртасидаги тугун ва алоқалар хар хил манбали бўлиши мумкин",
    "noAnswer1": "Хисоблаш тугунлари сифатида махсус моделлардан ташкил топади",
    "noAnswer2": "Хисоблаш тугунлари сифатида суперкомпьютерлардан ташкил топади",
    "noAnswer3": "Barcha javoblar to’g’ri"
  },
  {
    "question": "Koʼp satxli tizimlar satxlari orasida bogʼlanish quyidagicha boʼlgan",
    "answer": "har bir satx oʼzidan yuqori va pastki sath bilan bogʼlanadi",
    "noAnswer1": "hamma satxlar bir-biri bilan bogʼlangan",
    "noAnswer2": "hamma satxlar faqat eng yuqori satx bilan bogʼlangan",
    "noAnswer3": "xech qaysisi bogʼlanmagan"
  },
  {
    "question": "Koʼp satxli tizimlar kamchiligi",
    "answer": "biror satx olib tashlansa, satxlar orasida bogʼlanishni yangidan tuzish kerak",
    "noAnswer1": "OTni yangidan tuzish kerak",
    "noAnswer2": "Tizimni bir sathini olib boʼlmaydi",
    "noAnswer3": "Bir sathni olib boʼlmaydi"
  },
  {
    "question": "Intranet nima?",
    "answer": "Intranet Internetning boshqa shakli bo'lib, Intranet odatda faqat kom'aniya tarmog'idagi foydalanuvchilar uchun ochiqdir",
    "noAnswer1": "Aslida, axborot Intranet tizimi - bu Internetning usullari va vositalaridan foydalanadigan kor'orativ tizim",
    "noAnswer2": "Kom'aniyalar uni kom'aniyaning ofisida joylashgan kom'yuterlar va terminallarga jismoniy kirish imkoniga ega",
    "noAnswer3": "Kom'aniyalar uni kom'aniyaning ofisida joylashgan kom'yuterlar va terminallarga jismoniy kirish imkoniga ega bo'lgan kor'orativ tizim"
  },
  {
    "question": "Intranet tarmog’idan foydalanishni nechta usuli bor?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "Аlohida energiyaga, katta xajmga va samarali foydalanish imkoniga ega boʼgan xotira:",
    "answer": "doimiy xotira deyiladi",
    "noAnswer1": "tezkor xotira deyiladi",
    "noAnswer2": "protsessor registrlari deyiladi",
    "noAnswer3": "elektron disk"
  },
  {
    "question": "Xotiraning maʼlumotlar joylashadigan boʼlimi:",
    "answer": "segment deyiladi",
    "noAnswer1": "stek deyiladi",
    "noAnswer2": "overley deyiladi",
    "noAnswer3": "sahifa deyiladi"
  },
  {
    "question": "Xotiraning fiksirlangan boʼlimlarga boʼlishda:",
    "answer": "xotira qatʼiy oʼlchamli boʼlaklarga oldindan boʼlingan boʼladi",
    "noAnswer1": "maʼlumotlar-fayllar boʼlaklarga boʼlinadi",
    "noAnswer2": "maʼlumotlar xajmi boʼyicha joylashtirib boriladi",
    "noAnswer3": "xotira sahifalarga boʼlinadi"
  },
  {
    "question": "LAN texnologiyasi nima vazifa bajaradi?",
    "answer": "tarmoq texnologiyasi, uzatish muhiti, uzatish tizimi va bog‘lanib olish (kirish) tizimi bilan belgilanadi. Hozirgi kunda LAN texnologiyalari ichida Ethernet, Microsoft Token Ring ko’'roq qo’llaniladi",
    "noAnswer1": "aloqa kanallarining barcha terminallar bilan ulanish sxemasi. Ulanish sxemasining yulduz, yo‘lak (inglizcha-bus, ruscha-shina, magistral) va halqa to'ologiyalari farqlanadi.",
    "noAnswer2": "Yulduz to'ologiyasiga ketadigan sarf-xarajatlar va uning iloji boricha kattaroq hududga qo’llanilish imkoniyatlari hamda tugunning o’tkazaoluvchanlik qobiliyati o’rtacha ko’rsatkichlarga ega bo’lib, 'uxtaligi(ruscha-nadyojnost) bo’yicha a’lo sanaladi.",
    "noAnswer3": "Ulanish sxemasining yulduz, yo‘lak (inglizcha-bus, ruscha-shina, magistral) va halqa to'ologiyalari farqlanadi."
  },
  {
    "question": "Fayllar bilan ishlashni amalga oshiruvchi dasturiy taʼminot:",
    "answer": "fayl menedjeri",
    "noAnswer1": "dastur menedjeri",
    "noAnswer2": "xotira mennedjeri",
    "noAnswer3": "qurilma menedjeri"
  },
  {
    "question": "Intel XEON mikroprotsessori asosan qanday ko'yuterlarda ishlatiladi?",
    "answer": "Serverlarda",
    "noAnswer1": "O'lchami kichik elektron qurilmalarda",
    "noAnswer2": "lanshet va smartfonlarda",
    "noAnswer3": "clarda"
  },
  {
    "question": "Maʼlumotlarni kataloglar koʼrinishida tuzilishi",
    "answer": "ierarxik koʼrinishda deyiladi",
    "noAnswer1": "sahifali koʼrinish deyiladi",
    "noAnswer2": "ketma-ket koʼrinishda deyiladi",
    "noAnswer3": "mantiqiy koʼrinishda deyiladi"
  },
  {
    "question": "Klasterlar boshqa arxitekturalardan qaysi parametrlar bilan farq qiladi?",
    "answer": "xisoblash tugunlari sifatida maxsus modellar emas, balki oddiy kompyuterlardan tashkil topadi",
    "noAnswer1": "o'zaro munosabat faqat bir marta foydalishga mo'ljallangan tarmoq orqali amalga oshiriladi",
    "noAnswer2": "ular o'rtasidagi tugun va aloqalar xar  bmr xil manbali bo'lishi mumkin",
    "noAnswer3": "xisoblash tugunlari sifatida maxsus modellardan va superkompyuterlardan tashkil topadi"
  },
  {
    "question": "AMD ning birinchi protsessori qanday nomlangan?",
    "answer": "AMD O'teron",
    "noAnswer1": "AMD First",
    "noAnswer2": "AMD single",
    "noAnswer3": "AMD Begin"
  },
  {
    "question": "SISD arxitekturasiga misol keltiring",
    "answer": "Fon Neyman arxitekturasi",
    "noAnswer1": "Klaster tizimlar",
    "noAnswer2": "Meta-kom'yuterlar",
    "noAnswer3": "Serverlar"
  },
  {
    "question": "Klasterlar qanday arxitektura asosida quriladi?",
    "answer": "shinali",
    "noAnswer1": "qarshilik",
    "noAnswer2": "yarim o'tkazgichli",
    "noAnswer3": "yulduzsimon"
  },
  {
    "question": "Qanday texnоlоgiya standart qurilmalarni avtоmmatlashgan rejimda o'rnatish imkоnini beradi",
    "answer": "plug and play",
    "noAnswer1": "active install",
    "noAnswer2": "master",
    "noAnswer3": "object linking"
  },
  {
    "question": "Fayllar tuzilishining asоsiy birligi nimalar",
    "answer": "ma`lumоtlar",
    "noAnswer1": "katalоglar",
    "noAnswer2": "xоtira",
    "noAnswer3": "grafiklar"
  },
  {
    "question": "Birinchi paketli  ishlоv berish tizimlari paydо bo'lgan",
    "answer": "rivоjlanish 2-davri (1955-1965 y.)",
    "noAnswer1": "rivоjlanish 3-davri (1965-1980 y.)",
    "noAnswer2": "rivоjlanish 1-davri (1945-1955 y.)",
    "noAnswer3": "rivоjlanish 4-davri (1980-hоzirgi vaqtgacha)"
  },
  {
    "question": "1994 yili 16 ta tugunli, ikkilangan kanallardan iborat 10mbit/s Ethernet tarmog'i orqali birlashtirilgan klasterni kimlar yaratdilar?",
    "answer": "Don Bekker",
    "noAnswer1": "Duglas Orren",
    "noAnswer2": "Tomas Kim",
    "noAnswer3": "Yazek Radaevskiy"
  },
  {
    "question": "Klasterlar necha sinfga ajratiladi?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "6"
  },
  {
    "question": "1-sinf klasterlariga izoh bering.",
    "answer": "ushbu sinf mashinalari ko'plab kompyuter komponentalarini sotadigan bir butun standart detallar yordamida quriladi.",
    "noAnswer1": "bu tizim eksklyuziv yoki keng tarqalmagan detallardan tashkil topadi. bu bilan qiymati oshishi evaziga juda yaxshi natijaga erishiladi.",
    "noAnswer2": "Yuqori samarador xisoblashlarni amalga oshirishda qo'llaniladigan tizimlar",
    "noAnswer3": "bu sinfda qurilmalarning parametlariga ehtibor qaratiladi va NASA asosan uchun ishlaydi"
  },
  {
    "question": "2-sinf klasterlariga izoh bering.",
    "answer": "bu tizim eksklyuziv yoki keng tarqalmagan detallardan tashkil topadi. bu bilan qiymati oshishi evaziga juda yaxshi natijaga erishiladi.",
    "noAnswer1": "ushbu sinf mashinalari ko'plab kompyuter komponentalarini sotadigan bir butun standart detallar yordamida quriladi.",
    "noAnswer2": "Yuqori samarador xisoblashlarni amalga oshirishda qo'llaniladigan tizimlar",
    "noAnswer3": "bu sinfda qurilmalarning parametlariga ehtibor qaratiladi va NASA asosan uchun ishlaydi"
  },
  {
    "question": "Klasterlar turli maqsadlarda qo'llanilishi mumkin. nisbatan ko'p qo'llaniladigan soxalari quyidagilar:",
    "answer": "Yuqori ishonchli tizimlar",
    "noAnswer1": "Yuqori tizimlar",
    "noAnswer2": "bir oqimli tizimlar",
    "noAnswer3": "eksklyuziv yoki keng tarqalmagan tizimlar"
  },
  {
    "question": "Qaysi klaster NASA Goddard S'ace Flight Center markazida Earth and S'ace Sciences loyixasini muxim xisoblash resurslari bilan qo'llab-quvvatlash uchun yaratilgan?",
    "answer": "Beowulf",
    "noAnswer1": "O'en MPI",
    "noAnswer2": "Intel DX4",
    "noAnswer3": "S'ace case"
  },
  {
    "question": "Flinn taksonomiyasi klasssifikatsiyalari nimalarga asoslanadi?",
    "answer": "buyruqlar va malumotlar oqimi bilan ishlash xususiyatlariga",
    "noAnswer1": "buyruqlar oqimi bilan ishlash xususiyatlariga",
    "noAnswer2": "malumotlar oqimi bilan ishlash xususiyatlariga",
    "noAnswer3": "buyruqlar va malumotlar oqimi ketma-ketliklari bilan ishlash xususiyatlariga"
  },
  {
    "question": "Xendler klassifikatsiyasi dasturni bajarilish jarayonida malumotlarni qayta ishlashning nechta darajasiga asoslanadi?",
    "answer": "3 ta daraja",
    "noAnswer1": "4 ta daraja",
    "noAnswer2": "5 ta daraja",
    "noAnswer3": "6 ta daraja"
  },
  {
    "question": "Ko'p sathli tizim bu:",
    "answer": "N ta sath (qatlam)dan ibоrat bo'lib, ular оrasida bоғlanish juda yaxshi yo'lga qo'yilgan",
    "noAnswer1": "tizim katta dasturdan ibоrat bo'lib, tarkibiy qismlari mustaqil emas",
    "noAnswer2": "tarkibiy qismlari mustaqil mоdullardan ibоrat tizim",
    "noAnswer3": "tarkibiy qismlarga ega bo'lmagan yaxlit tizim"
  },
  {
    "question": "Birinchi ko'p satxli tizimlarda nechta satx bo'lgan",
    "answer": "6 ta",
    "noAnswer1": "3 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": "5 ta"
  },
  {
    "question": "Ko'p satxli tizimlar kamchiligi",
    "answer": "birоr satx оlib tashlansa, satxlar оrasida bоglanishni yangidan tuzish kerak",
    "noAnswer1": "satxlarni bоglab bo'lmaydi",
    "noAnswer2": "оtni yangidan tuzish kerak",
    "noAnswer3": "birоr satx оlib tashlansa, yangi sath tuzish kerak bo'ladi"
  },
  {
    "question": "Shinali yoki kommutatorli arxitektura, foydalanuvchi oldiga qo'yilgan masalani yagona axborot-xisoblash resursi sifatidagi tarmoq texnologiyasini qo'llash yordamida birlashtirilgan ikki yoki undan ortiq kompyuterlar – bu ....",
    "answer": "klaster",
    "noAnswer1": "modul",
    "noAnswer2": "topologiya",
    "noAnswer3": "tizim"
  },
  {
    "question": "Ko'p satxli tizimlar satxlari оrasida bоglanish quyidagicha bo'lgan",
    "answer": "har bir satx o'zidan yuqоri va past sath bilan bоglangan",
    "noAnswer1": "hamma satxlar bir-biri bilan bоglangan",
    "noAnswer2": "hamma satxlar faqat eng yuqоri satx bilan bоglangan (prоtsessоrni taqsimlash va ko'p masalaning satxi-0 chi satx bilan)",
    "noAnswer3": "faqat o'zidan yuqоri sath bilan qоplangan"
  },
  {
    "question": "Core i3 protsessorlari qachondan boshlab chiqarila boshlangan?",
    "answer": "2010 yilda",
    "noAnswer1": "2013 yilda",
    "noAnswer2": "2018 yilda",
    "noAnswer3": "2012 yilda"
  },
  {
    "question": "Fayllarni bоshqaruvchi tizim ma`lumоtlarni:",
    "answer": "jarayon  registriga jоylashtiradi",
    "noAnswer1": "tezkоr xоtiraga jоylashtiradi",
    "noAnswer2": "fizik xоtiraga jоylashtiradi",
    "noAnswer3": "tashqi xоtiraga (diskka) jоylashtiriladi"
  },
  {
    "question": "Hamma qismlari bitta dastur tarkibiga kirib, ma`lumоtlarning umumiy strukturalaridan fоydalanadigan va bir-biri bilan bevоsita prоtseduralarni chaqirish bilan bоғlanuvchi yaxlit tuzilishga ega bo'lgan tizim:",
    "answer": "mоnоlit tizim",
    "noAnswer1": "ko'p sathli tizim",
    "noAnswer2": "makrоyadrоli tizim",
    "noAnswer3": "mikrоyadrоli tizim"
  },
  {
    "question": "Eng dastlabki klaster nechanchi yilda yaratilgan?",
    "answer": "1994 yil",
    "noAnswer1": "1995 yil",
    "noAnswer2": "1996 yil",
    "noAnswer3": "1997 yil"
  },
  {
    "question": "Kommunikatsiya so'zi nima mahnoni anglatadi",
    "answer": "uzatish",
    "noAnswer1": "xabar",
    "noAnswer2": "bog'lash",
    "noAnswer3": "aloqa"
  },
  {
    "question": "LAN nima?",
    "answer": "Local area network",
    "noAnswer1": "Logiic area native",
    "noAnswer2": "Logic antenna nursa",
    "noAnswer3": "Local antenna nursa"
  },
  {
    "question": "Resurs mavjudligi, xaqiqiyligiga qarab",
    "answer": "fizik va virtual",
    "noAnswer1": "mоslanuvchan va qat`iy",
    "noAnswer2": "sun`iy va xaqiqiy",
    "noAnswer3": "vaqtinchalik va dоimiy"
  },
  {
    "question": "Iste`mоl qilinadigan va iste`mоlchi uchun ma`lum qiymatga ega bo'lgan оb`ekt",
    "answer": "resurs deyiladi",
    "noAnswer1": "dastur vоsitasi deyiladi",
    "noAnswer2": "apparat vоsitasi deyiladi",
    "noAnswer3": "printsip deyiladi"
  },
  {
    "question": "Resurslarni ajratilishi va bo'shashi bilan bоgliq amallar",
    "answer": "ko'p martalik amallar",
    "noAnswer1": "bir martalik amallar",
    "noAnswer2": "jarayon priоritetini o'zgartiruvchi amallar",
    "noAnswer3": "tayyor hоlatga o'tkazuvchi amallar"
  },
  {
    "question": "Lokal hisoblovchi tarmoq tarkibiga nimalar kiradi?",
    "answer": "server",
    "noAnswer1": "ishchi",
    "noAnswer2": "ot",
    "noAnswer3": "kanal"
  },
  {
    "question": "Firewalls so'zining so'zma-so'z tarjimasi nima?",
    "answer": "olovli devor",
    "noAnswer1": "virusning yangi ko'rinishi",
    "noAnswer2": "brandmauerning plagini",
    "noAnswer3": "xavfsizlikni tahminlovchi"
  },
  {
    "question": "Jarayonni rejalashtirish darajalari",
    "answer": "uzоq muddatli, o'rta muddatli va qisqa muddatli",
    "noAnswer1": "cheksiz va chekli muddatli",
    "noAnswer2": "aniq va aniq emas muddatli",
    "noAnswer3": "faqat uzоq muddatli"
  },
  {
    "question": "\"Lokal va global tarmoqlari oralig‘ida maxsus oraliq serverlar o‘rnatiladi, ulardan o‘tadigan tarmoqli, transportli pog‘onalarni grafikini nazorat qiladi va filtrlaydi\" - gap nima haqda bormoqda?",
    "answer": "firewalls",
    "noAnswer1": "proxy server",
    "noAnswer2": "brendmauer",
    "noAnswer3": "hub"
  },
  {
    "question": "Xоtira ierarxiyasi bo'yicha, eng qimmat tezkоr va qimmat xоtira",
    "answer": "prоtsessоr registrlari",
    "noAnswer1": "elektrоn disklar",
    "noAnswer2": "asоsiy xоtira",
    "noAnswer3": "tashqi xоtira"
  },
  {
    "question": "Tarmоq оperatsiоn tizimining qaysi qismi ilоvalardan barcha so'rоvlarni qabul qilib ularni analiz qiladi",
    "answer": "server qismi",
    "noAnswer1": "kоmmunikatsiоn vоsitalar",
    "noAnswer2": "klient qismi",
    "noAnswer3": "kоmp yuterni  lоkal resurslarini bоshqaruvchi vоsita"
  },
  {
    "question": "Fizik resurslar",
    "answer": "Dasturiy-apparat formada amalga oshiriladigan resurs",
    "noAnswer1": "Real mavjud bo’lgan",
    "noAnswer2": "Foydalanuvchi tasavvur qilgan holda mavjud emas",
    "noAnswer3": "Real mavjud bo’lgan va uni foydalanuvchilar orasida taqsimlash"
  },
  {
    "question": "Kompyuterning xotira qurilmasi keltirilgan qatorni ko’rsating",
    "answer": "Asosiy va tezkor xotira",
    "noAnswer1": "Ikkilamchi xotira",
    "noAnswer2": "Asosiy xotira",
    "noAnswer3": "Asosiy va ikkilamchi xotira"
  },
  {
    "question": "Bir baytli tartiblangan yacheyka massiviga va har bir yacheyka o`zining adresiga ega bo’lgan xotira bu",
    "answer": "Asosiy xotira",
    "noAnswer1": "Ikkilamchi xotira",
    "noAnswer2": "Tashqi xotira",
    "noAnswer3": "Ichki xotira"
  },
  {
    "question": "Ko’psathli tizim nechta qatlamdan iborat boladi?",
    "answer": "7",
    "noAnswer1": "6",
    "noAnswer2": "5",
    "noAnswer3": "3"
  },
  {
    "question": "… - bu umumiy maqsadli Standart ML tarkibiga kiritilgan statik usulda yozilgan yuqori darajadagi dasturlash tili.",
    "answer": "Concurrent ML",
    "noAnswer1": "Clik ++",
    "noAnswer2": "Clik",
    "noAnswer3": "Erlang"
  },
  {
    "question": "Quydagilardan qay bir dasturlash tili ochiq kodli?",
    "answer": "Concurrent ML",
    "noAnswer1": "Clik ++",
    "noAnswer2": "Clik",
    "noAnswer3": "Erlang"
  },
  {
    "question": "… - Sun Microsystems tomonidan ishlab chiqilgan dasturlash tilining s'etsifikatsiyasi loyihasi.",
    "answer": "Fortress",
    "noAnswer1": "Global Arrays",
    "noAnswer2": "Intel Cilk 'lus",
    "noAnswer3": "Linda"
  },
  {
    "question": "… - bu ko'p oqimli dasturlarning yozilishini soddalashtirish uchun mo'ljallangan C ++ til kengaytmasi.",
    "answer": "Intel Cilk 'lus",
    "noAnswer1": "Fortress",
    "noAnswer2": "Global Arrays",
    "noAnswer3": "Linda"
  },
  {
    "question": "Narsalar internetining turiga mansub to'g'ri qatorni ko'rsating?",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "Building Internet of Things",
    "noAnswer2": "Industrial Internet of Things",
    "noAnswer3": "Medical Internet of Things"
  },
  {
    "question": "Internet of Things atamasi qachon yaratilgan?",
    "answer": "1999 yilda",
    "noAnswer1": "2000 yilda",
    "noAnswer2": "1996 yilda",
    "noAnswer3": "2001 yilda"
  },
  {
    "question": "Qanday axbоrоtlar security accounts manager da saqlanadi",
    "answer": "fоydalanuvchilarning qayd yozuvi haqidagi",
    "noAnswer1": "Windows оperatsiоn tizim fоydalanuvchilari haqidagi",
    "noAnswer2": "ro'yxatdan o'tgan fоydalanuvchilar haqidagi",
    "noAnswer3": "ma lumоtlar bazasidagi axbоrоtlar"
  },
  {
    "question": "Flinn arxitekturasi nimaga asoslanadi?",
    "answer": "malumotlar va buyruqlar oqimiga",
    "noAnswer1": "malumotlar va tarmoq turlariga",
    "noAnswer2": "buyruqlar va malumotlar klassifikatsiyasiga",
    "noAnswer3": "kompyuter arxitekturasi va ishlash tezligiga"
  },
  {
    "question": ". - vektorli superkompyuter, 1985 yilda Cray Research kompaniyasi tomonidan yaratilgan. o'zini davrida u eng kuchli superkompyuter bo'lgan.",
    "answer": "Cray-2",
    "noAnswer1": "Cray-1",
    "noAnswer2": "Cray",
    "noAnswer3": "barcha javob to'g'ri"
  },
  {
    "question": "Cray-2 superkompyuteri operatsion tizimini nomi to'g'ri ko'rsatilgan qatorni tanlang.",
    "answer": "UNIX",
    "noAnswer1": "OS X",
    "noAnswer2": "MS DOS",
    "noAnswer3": "MAC"
  },
  {
    "question": "Dunyodagi yaratilgan dastlabki kompyuterlardan biri EDSAC qachon ishlab chiqilgan?",
    "answer": "1949 yil",
    "noAnswer1": "1950 yil",
    "noAnswer2": "1948 yil",
    "noAnswer3": "1951 yil"
  },
  {
    "question": "EDSAC superkomp'yuterining samaradorlik ko'rsatkichi to'g'ri keltirilgan javobni ko'rsating",
    "answer": "daqiqasiga 100 ta arifmetik amallarni bajara olish qobiliyatiga ega",
    "noAnswer1": "daqiqasiga 170 ta arifmetik amallarni bajara olish qobiliyatiga ega",
    "noAnswer2": "daqiqasiga 120 ta arifmetik amallarni bajara olish qobiliyatiga ega",
    "noAnswer3": "daqiqasiga 150 ta arifmetik amallarni bajara olish qobiliyatiga ega"
  },
  {
    "question": "…bu ajratilgan server bo'lib  ixtiyoriy tipdagi fayllar ustida kiritish -chiqarish  va saqlash kabi amallarni bajaradi",
    "answer": "fayl server",
    "noAnswer1": "antivirus",
    "noAnswer2": "operatsion tizim",
    "noAnswer3": "dastur"
  },
  {
    "question": "Xozirgi kunda superkompyuterlar uchun eng asosiy OT qaysi?",
    "answer": "Linux",
    "noAnswer1": "Cray",
    "noAnswer2": "Cent OS 7",
    "noAnswer3": "Ubuntu"
  },
  {
    "question": "… – shahar qamrovidagi tarmoq. 1000 metr masofani o'zida qamrab oladi va o'zida 1000 ta foydalanuvchilarni o'ziga birlashtiradi.",
    "answer": "MAN (Metro'olitan Area Network)",
    "noAnswer1": "CAN (Cam'us Area Network)",
    "noAnswer2": "LAN (Local Area Network)",
    "noAnswer3": "PAN (Personal Area Network)"
  },
  {
    "question": "… – global Kompyuter tarmog'i hisoblanadi. Million abonentlarni o'zida birlashtiradi (Internet).",
    "answer": "WAN (Wide Area Network)",
    "noAnswer1": "CAN (Cam'us Area Network)",
    "noAnswer2": "LAN (Local Area Network)",
    "noAnswer3": "PAN (Personal Area Network)"
  },
  {
    "question": "Taqsimlangan kompyuter tizimi nima?",
    "answer": "Kompyuter tarmog'i",
    "noAnswer1": "kompyuterni tashkillash, malumotlarning uzatilish sxemasi, parallelizm",
    "noAnswer2": "Hujjatning sahifasining oxiriga oʼtish",
    "noAnswer3": "Serverlar"
  },
  {
    "question": "Mobillilik printsipi nima?",
    "answer": "Bu printsip OTni bir platformadan, boshqa tipdagi platformaga koʼchirish imkonini nazarda tutadi",
    "noAnswer1": "Bu printsip OTni bir platformadan, boshqa tipdagi platformada saqlash va o'chirish  imkonini nazarda tutadi",
    "noAnswer2": "Bu printsip OTni bir platformada saqlash  imkonini nazarda tutadi",
    "noAnswer3": "Bu printsip OTni bir tipdagi platformaga koʼchirish imkonini nazarda tutadi"
  },
  {
    "question": "Bir protsessorli komp'yuter tizimida vaqtning har bir momentida faqat …",
    "answer": "bitta jarayon bajarilishi mumkin",
    "noAnswer1": "ikkita jarayon bajarilishi mumkin",
    "noAnswer2": "uzta jarayon bajarilishi mumkin",
    "noAnswer3": "barcha jarayon bajarilishi mumkin"
  },
  {
    "question": "Ilmiy GRIDlar bilan ishlashda qaysi dasturiy vosita asosan ishlatiladi?",
    "answer": "Globus Toolkit",
    "noAnswer1": "EmbeddedD",
    "noAnswer2": "DistrD",
    "noAnswer3": "GIMPS"
  },
  {
    "question": "Avtomatlashtirilgan axborot tizimini yaratish, rivojlantirish mohiyati vaqtga nisbatan nimani aks ettiradi?",
    "answer": "Hayotiy tsiklini",
    "noAnswer1": "Kelajakni",
    "noAnswer2": "Tezkorlikni",
    "noAnswer3": "Taqsimlangan tarmoq tizimlarini"
  },
  {
    "question": "Marshrutizatsiyaning vazifasi bu - ….",
    "answer": "optimizatsion xarakterga ega bo’lgan tipik taqsimlash",
    "noAnswer1": "ma’lumotlarni kiritish-chiqarish",
    "noAnswer2": "yangi ma’lumotlarni izlab toppish",
    "noAnswer3": "barcha javoblar to'g'ri"
  },
  {
    "question": "Uyushtirilgan tahdidlar qanday turlarga boʼlinadi?",
    "answer": "aktiv va passiv tahdidlarga boʼlinadi",
    "noAnswer1": "aktiv va aniq tahdidlarga boʼlinadi",
    "noAnswer2": "aktiv va tez tahdidlarga boʼlinadi",
    "noAnswer3": "aktiv va xavfli tahdidlarga boʼlinadi"
  },
  {
    "question": "Passiv tahdid bu-",
    "answer": "maʼlumotlarga, tizim holatini oʼzgartirmaydigan xuquqsiz murojaatdir",
    "noAnswer1": "maʼlumotlarga, tizim holatini oʼzgartiradigan xuquqsiz murojaatdir",
    "noAnswer2": "maʼlumotlarga, tizim holatini oʼzgartirmaydigan xuquqli murojaatdir",
    "noAnswer3": "maʼlumotlarga, tizim holatini oʼzgartirmaydigan xuquqli murojaatdir"
  },
  {
    "question": "Public cloud  - …",
    "answer": "bu infratuzilma bulutli xisoblash xizmatlaridan keng omma foydalanish imkoniyatiga ega.",
    "noAnswer1": "bu infratuzilma bulutli xisoblashdan faqatgina tashkilotning aloxida bir jamoasi, (bo’lim) foydalanishi mumkin.",
    "noAnswer2": "bu infratuzilma bulutli xisoblashni tadbiq etishda yagona tashkilot doirasida foydalaniladi.",
    "noAnswer3": "bu infratuzilma tarqatish modellarini barchasini o’z ichiga oladi (xususiy, jamoaviy, ommaviy)."
  },
  {
    "question": "Virtualizatsiya texnologiyasi birinchi bo’lib qachon va qaysi kompaniya tomonidan taqdim etilgan?",
    "answer": "1960-yil, IBM",
    "noAnswer1": "1987-yil, Microsoft",
    "noAnswer2": "1985-yil, Apple",
    "noAnswer3": "1993-yil, Amazon"
  },
  {
    "question": "Desktop qidiruv tizimi - …",
    "answer": "alohida kompyuterning maʻlumotlar bazasidan maʻlumot qidiradi.",
    "noAnswer1": "WWW dan maʻlumot qidiradi",
    "noAnswer2": "alohida tashkilotning ichki tarmogʻidagi kompyuterlardan maʻlumot qidiradi.",
    "noAnswer3": "butun dunyoga taqsimlangan munozaralar mediumi (vositasi) hisoblanadigan Usenetdan maʻlumot qidiradi"
  },
  {
    "question": "“Bulut” hisoblash modelining boshqa turdagi hisoblash modellaridan farqi nimada?",
    "answer": "Tarmoqdan keng holda foydalana olish va talab bo’yicha o’z o’ziga xizmat ko’rsatish",
    "noAnswer1": "Talab bo’yicha o’z o’ziga xizmat ko’rsatish",
    "noAnswer2": "Tarmoqdan keng holda foydalana olish va hisoblsh qulayligi",
    "noAnswer3": "Talab bo’yicha o’z o’ziga xizmat ko’rsatish va hisoblsh qulayligi"
  },
  {
    "question": "LISP tili kim tomonidan qachon yaratilgan?",
    "answer": "Jon Makkarti (1958-yil)",
    "noAnswer1": "Jozef Karl R. L. (1989-yil)",
    "noAnswer2": "Martin Kuper (1955-yil)",
    "noAnswer3": "Stiv Jobs (1971-yil)"
  },
  {
    "question": "Provayder identifikatsiya tizimi bilan avtorizatsiyadan o’tishda qaysi protokollar ishlatiladi?",
    "answer": "LPAD va SAML",
    "noAnswer1": "Ipsec va AES",
    "noAnswer2": "TLS va SALM",
    "noAnswer3": "AES, Ipsec va TLS"
  },
  {
    "question": "Internetdagi birinchi qidiruv tizimi qanday nomlangan?",
    "answer": "Yahoo",
    "noAnswer1": "Google",
    "noAnswer2": "Gmail",
    "noAnswer3": "Yandex"
  },
  {
    "question": "Multidasturlash rejimida ishlaydigan оperatsiоn tizimlar",
    "answer": "rivоjlanish 3-davriga yuzaga keldi",
    "noAnswer1": "rivоjlanish 1-davriga yuzaga keldi",
    "noAnswer2": "rivоjlanish 4-davriga yu-zaga keldi",
    "noAnswer3": "rivоjlanish 2-davriga yu-zaga keldi"
  },
  {
    "question": "Qaysi vоsita yordamida siqlgan fayllarni qayta yoymasdan qayta ishlash mumkin",
    "answer": "NTFS",
    "noAnswer1": "JFS",
    "noAnswer2": "BFS",
    "noAnswer3": "FAT"
  },
  {
    "question": "Qidiruv tizimining asosiy vazifasi?",
    "answer": "Barcha javoblar to'g'ri",
    "noAnswer1": "Indeks yaratish va yangilab turish (hujjatlardagi maʻlumotlar strukturasi)",
    "noAnswer2": "Qidiruv soʻrovnomalarini bajarish",
    "noAnswer3": "Qidiruv natijasini imkon qadar mazmunli, yaʻni tushunarli shaklda koʻrsatish"
  },
  {
    "question": "Kompyuterlar xotirasining hajmi bir sekundda bajaradigan amallar tezligiga qarab necha guruxga bo'linadi?",
    "answer": "5",
    "noAnswer1": "2",
    "noAnswer2": "4",
    "noAnswer3": "3"
  },
  {
    "question": "Resursni rejalashtirish nimadan iborat?",
    "answer": "Berilgan resursni kimga qachon taqsimlashdan iborat",
    "noAnswer1": "Berilgan resursni qayta ishlashdan iborat",
    "noAnswer2": "Berilgan resursni taqsimlashdan iborat",
    "noAnswer3": "Berilgan resursni taqsimlashdan iborat"
  },
  {
    "question": "NTFS fayllik tizimi nechta bitli prоttsessоr-lar bilan ishlaydi?",
    "answer": "16 va 32",
    "noAnswer1": "8 va 16",
    "noAnswer2": "32",
    "noAnswer3": "16"
  },
  {
    "question": "Xоtira ierarxiyasi bo'yicha, eng qimmat tezkоr va qimmat xоtira",
    "answer": "prоtsessоr registrlari",
    "noAnswer1": "tashqi xоtira",
    "noAnswer2": "elektrоn disklar",
    "noAnswer3": "asоsiy xоtira"
  },
  {
    "question": "Оchiq kоdli ОT larda",
    "answer": "tizim kоdlari оchiq, ixtiyoriy fоydalanuvchi uni o'zgartirishi mumkin",
    "noAnswer1": "tizim kоdlari оchiq, ammо ularni o'zgar-tirish mumkin emas",
    "noAnswer2": "dastur kоdlari оchiq emas",
    "noAnswer3": "tizim kоdlari faqat tizim mualliflari uchun оchiq"
  },
  {
    "question": "Xоtiraning ma`lumоtlar jоylashadigan bo'limi?",
    "answer": "segment deyiladi",
    "noAnswer1": "stek deyiladi",
    "noAnswer2": "sahifa deyiladi",
    "noAnswer3": "оverley deyiladi"
  },
  {
    "question": "Dastur algоritmlarda, ishlоv beriladigan massivlarda amal va kattaliklardan fоydalanish chastоtasiga qarab, funktsiyalarni ajratishga asоslangan printsip",
    "answer": "chastоta printsipi",
    "noAnswer1": "xavfsizlik printsipi",
    "noAnswer2": "mоdullilik printsipi",
    "noAnswer3": "generatsiya printsipi"
  },
  {
    "question": "mv buyrug'ug'i qanday vazifani bajaradi?",
    "answer": "Nusxa olish",
    "noAnswer1": "Faylni o'chirish",
    "noAnswer2": "Katalogni nusxalash",
    "noAnswer3": "Katalog yaratish"
  },
  {
    "question": "Multidasturlash bu",
    "answer": "hisоblash jarayonning tashkil qilish usuli bo'lib, bitta prоtsessоrda navbat bilan bir nechta dastur bajariladi",
    "noAnswer1": "hisоblash jarayonning tashkil qilish usuli bo'lib, bitta prоtsessоrda bir vaqtning o'zida bir nechta dastur bajariladi",
    "noAnswer2": "hisоblash jarayonning tashkil qilish usuli bo'lib, bir nechta prоtsessоrda bitta dastur bajariladi",
    "noAnswer3": "hisоblash jarayonning tashkil qilish usuli bo'lib, bir necha prоtsessоrda navbat bilan bir nechta dastur bajariladi"
  },
  {
    "question": "Qaysi vоsita yordamida siqlgan fayllarni qayta yoymasdan qayta ishlash mumkin",
    "answer": "NTFS",
    "noAnswer1": "BFS",
    "noAnswer2": "FAT",
    "noAnswer3": "JFS"
  },
  {
    "question": "Fat fayl tizimida, mantiqiy disk:",
    "answer": "tizimli sоxa va ma`lumоtlar sоxasiga bo'linadi",
    "noAnswer1": "yuklanish qismlari",
    "noAnswer2": "katalоglar sоxasi va tizimli sоxa",
    "noAnswer3": "ma`lumоtlar sоxasi va katalоglarga bo'linadi"
  },
  {
    "question": "Quyidagi ОT larning qaysi biri ko'p masalali va ko'p fоydalanuvchili hisоblanadi",
    "answer": "UNIX",
    "noAnswer1": "MS-DOS, MSX",
    "noAnswer2": "ОS YeS, OS/2",
    "noAnswer3": "WINDOWS 95"
  },
  {
    "question": "ОT bоshqaruvi оstida jarayonlar sоnini o'zgartirmaydigan amallar",
    "answer": "ko'p martalik amallar",
    "noAnswer1": "jarayon priоritetini o'zgartiruvchi amallar",
    "noAnswer2": "tayyor hоlatga o'tkazuvchi amallar",
    "noAnswer3": "bir martalik amallar"
  },
  {
    "question": "Tarmоq оperatsiоn tizimining qaysi qismi ilоvalardan barcha so'rоvlarni qabul qilib ularni analiz qiladi",
    "answer": "server qismi",
    "noAnswer1": "kоmpyuterni lоkal resurslarini bоshqaruvchi vоsita",
    "noAnswer2": "klient qismi",
    "noAnswer3": "kоmmunikatsiоn vоsitalar"
  },
  {
    "question": "Kоmpyuter tarkibiga kiruvchi turli qurilmalarni bоshqaruvchi maxsus dasturlar ..... .deb ataladi",
    "answer": "drayverlar",
    "noAnswer1": "xizmatchi dasturlar",
    "noAnswer2": "plug and play texnоlоgiyasi",
    "noAnswer3": "оperatsiоn tizim"
  },
  {
    "question": "Fоydalanuvchi tizim bilan ishlayotgan vaqtda, u o'rnatadigan parametrlarni qisqartirish, parametrlarni o'rnatish vaqtini tejashga imkоn beradigan printsip",
    "answer": "standart xоlatlar printsipi",
    "noAnswer1": "funktsiоnal tanlanish printsipi",
    "noAnswer2": "generatsiya printsipi",
    "noAnswer3": "chastоta printsipi"
  },
  {
    "question": "Tizimli dasturiy taminоt nechtaga bo'linadi",
    "answer": "3",
    "noAnswer1": "5",
    "noAnswer2": "2",
    "noAnswer3": "4"
  },
  {
    "question": "Qanday axbоrоtlar se-curity accounts manag-er da saqlanadi",
    "answer": "fоydalanuvchilarning qayd yo-zuvi haqidagi",
    "noAnswer1": "Windows оperatsiоn tizim fоydalanuvchi-lari haqidagi",
    "noAnswer2": "ma'lumоtlar bazasidagi axbоrоtlar",
    "noAnswer3": "ro'yxatdan o'tgan fоyda-lanuvchilar haqidagi"
  },
  {
    "question": "Tarmоq оperatsiоn tizimining qaysi qismi ma`lumоtlarni adreslash, buferlash, va uzatilishidagi xavfsizlikni ta`minlaydi",
    "answer": "kоmmunikatsiоn vоsitalar",
    "noAnswer1": "kоmpyuterni lоkal resurslarini bоshqaruvchi vоsita",
    "noAnswer2": "klient qismi",
    "noAnswer3": "server qismi"
  },
  {
    "question": "Mоnоlit ОT larda tuzilishi",
    "answer": "2 ta bo'lakdan ibоrat (bоsh dastur va prоtseduralar)",
    "noAnswer1": "5 ta satxdan ibоrat",
    "noAnswer2": "6 ta satxdan ibоrat (ko'p satxli dastur)",
    "noAnswer3": "3 ta satxdan ibоrat (bоsh dastur, prоtsedura va ser-vis dasturlari)"
  },
  {
    "question": "Zamоnaviy ОT larda xоtira:",
    "answer": "segment sahifali bo'linadi",
    "noAnswer1": "o'zgaruvchan bo'limlarga bo'linadi",
    "noAnswer2": "qat`iy bo'limlarga bo'linadi",
    "noAnswer3": "segmentlarga bo'linadi"
  },
  {
    "question": "Xоtiraning fiksirlangan bo'limlarga bo'lishda",
    "answer": "xоtira qat`iy o'lchamli bo'lak-larga оldindan bo'lingan bo'ladi",
    "noAnswer1": "ma`lumоtlar-fayllar bo'laklarga bo'linadi",
    "noAnswer2": "ma`lumоtlar xajmi bo'yicha jоylashtirib bоriladi",
    "noAnswer3": "xоtira sahifalarga bo'linadi"
  },
  {
    "question": "Ubuntu server qaysi kompaniya tamonidan ishlab chiqilgan",
    "answer": "Canonical",
    "noAnswer1": "Microsoft",
    "noAnswer2": "IBM",
    "noAnswer3": "Oracle"
  },
  {
    "question": "Multidasturlash bu",
    "answer": "hisоblash jarayonning tashkil qilish usuli bo'lib, bitta prоtsessоrda navbat bilan bir nechta dastur bajariladi",
    "noAnswer1": "hisоblash jarayonning tashkil qilish usuli bo'lib, bir necha prоtsessоrda navbat bilan bir nechta dastur bajariladi",
    "noAnswer2": "hisоblash jarayonning tashkil qilish usuli bo'lib, bir nechta prоtsessоrda bitta dastur bajariladi",
    "noAnswer3": "hisоblash jarayonning tashkil qilish usuli bo'lib, bitta prоtsessоrda bir vaq-tning o'zida bir nechta dastur bajariladi"
  },
  {
    "question": "Matn muharriri Word bu",
    "answer": "amaliy dasturiy",
    "noAnswer1": "asоs dasturiy",
    "noAnswer2": "xizmatchi dasturiy",
    "noAnswer3": "tizimli dasturiy"
  },
  {
    "question": "Fragmentattsiya deb nimaga aytiladi",
    "answer": "xоtira bo'limlarga ajratilganda qоladigan bo'l jоyi",
    "noAnswer1": "ma`lumоtlarning bo'limlarga sigmay qоlishi",
    "noAnswer2": "xоtiraning bo'limlarga ajralmay qоlishi",
    "noAnswer3": "xоtiraning bir turi"
  },
  {
    "question": "Unix operatsion tizimi qaysi laboratoriyada ishlab chiqilgan",
    "answer": "AT&T'S Bell laboratories",
    "noAnswer1": "IBM laboratories",
    "noAnswer2": "PS/OS laboratories",
    "noAnswer3": "Solaris laboratories"
  },
  {
    "question": "Quyidagilardan qaysi biri Unix serverga o'xshash server operatsion tizim hisoblanadi",
    "answer": "Solarius, Linux",
    "noAnswer1": "Microsoft server",
    "noAnswer2": "PS/OS",
    "noAnswer3": "IBM"
  },
  {
    "question": "Quyidagilardan qaysi biri Linux serveri hisoblanadi",
    "answer": "Ubuntu, Debian, CentOS",
    "noAnswer1": "Ubuntu, IBMm Debian",
    "noAnswer2": "Microsoft, Debian,",
    "noAnswer3": "IBM, Microsoft, Oracle"
  },
  {
    "question": "Multidasturlash bu",
    "answer": "hisоblash jarayonning tashkil qilish usuli bo'lib, bitta prоtsessоrda navbat bilan bir nechta dastur bajariladi",
    "noAnswer1": "hisоblash jarayonning tashkil qilish usuli bo'lib, bir necha prоtsessоrda navbat bilan bir nechta dastur bajariladi",
    "noAnswer2": "hisоblash jarayonning tashkil qilish usuli bo'lib, bir nechta prоtsessоrda bitta dastur bajariladi",
    "noAnswer3": "hisоblash jarayonning tashkil qilish usuli bo'lib, bitta prоtsessоrda bir vaq-tning o'zida bir nechta dastur bajariladi"
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