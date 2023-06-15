const data = [
  {
    "question": "<!DOCTYPE html> ning vazifasi nimadan iborat?",
    "answer": " <! DOCTYPE html> deklaratsiyasi bu hujjatni HTML deb belgilaydi",
    "noAnswer1": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTMLdagi kaliti",
    "noAnswer2": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTMLdan boshqa tilda ham qo`llash mumkinligi uchun kalit",
    "noAnswer3": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTMLda moslashuvchanligini ta’minlaydi"
  },
  {
    "question": "<body>   <h1> Salom TATU   <p>Men Tatu da o`qiyman va hozir oraliq nazoratda o`tirimman! </p>  </body> Mana shu yozilgan dasturdai xatolikni aniqlang!",
    "answer": " <h1> juft teg hisoblanadi. Bu misolda u toq teg bo`lib qolgan. </h1> qolib ketgan.",
    "noAnswer1": "<p> toq teg hisoblanadi. Bu misolda u juft teg bo`lib qolgan.  </p> ortiqcha.",
    "noAnswer2": "Bu dasturda  <h1> va  <p> xato qo`llanilgan.Ularni bir vaqtda qo`llab bo`lmaydi.",
    "noAnswer3": "Bu dastur yozilishida hech qanday xatolik mavjud emas."
  },
  {
    "question": "<body> elementining vazifasini belgilang.",
    "answer": " <body> elementi ko'rinadigan sahifa tarkibiga ega.",
    "noAnswer1": "<body> elementi sahifa nomini kiritishda foydalaniladi.",
    "noAnswer2": "<body> maxsus belgi hisoblanib u o`zida hech qanday ma’lumot saqlamaydi.",
    "noAnswer3": "<body> elementi sahifaning bosh qismi hisoblanadi. Unga sahifaning nomi va mazmuni yoziladi."
  },
  {
    "question": "<div>,  <h1> -  <h6>,  <p>,  <form>,  <header>,  <footer>,  <section>  ushbu teglar qanday umumiy jihatga ega?",
    "answer": "Block-level elementlar",
    "noAnswer1": "Inline elementlar",
    "noAnswer2": "Box elementlar",
    "noAnswer3": "Turkumli elementlar"
  },
  {
    "question": "<h1> elementi nima vazifani bajaradi?",
    "answer": " <h1> elementi katta sarlavhani belgilaydi",
    "noAnswer1": "<h1> elementi kichik sarlavhani belgilaydi.",
    "noAnswer2": "<h1> elementi sarlavha hosil qiladi.",
    "noAnswer3": "<h1> elementi uzun chiziq hosil qiladi."
  },
  {
    "question": "<h1 style=”color: green;”> Hello word </h1> shu dasturning natijasida nima hosil bo`ladi?",
    "answer": "Yashil rangda katta shriftdaa Hello word degan so`z hosil bo`ladi.",
    "noAnswer1": "Yashil rangda kichkina shriftda Hello word degan so`z hosil bo`ladi.",
    "noAnswer2": "Hech narsa hosil bo`lmaydi. Sabab style xato qo`llanilgan.",
    "noAnswer3": "Yashil rangda abzasdan katta shriftda Hello worddegan so`z hosil bo`ladi."
  },
  {
    "question": "<h1 style=”color: rgb(0,0,255);”> Salom Dunyo </h1> shu dasturning natijasida nima hosil bo`ladi?",
    "answer": "Ko`k rangda katta shriftdaa Salom dunyo degan so`z hosil bo`ladi.",
    "noAnswer1": "Ko`k rangda kichkina shriftda Salom dunyo degan so`z hosil bo`ladi.",
    "noAnswer2": "Hech narsa hosil bo`lmaydi. Sabab style xato qo`llanilgan.",
    "noAnswer3": "Ko`k rangda abzasdan katta shriftda Salom dunyo degan so`z hosil bo`ladi."
  },
  {
    "question": "<h1 style=”color: yellow;”> Salom Dunyo </h1> shu dasturning natijasida nima hosil bo`ladi?",
    "answer": "Sariq rangda katta shriftdaa Salom dunyo degan so`z hosil bo`ladi.",
    "noAnswer1": "Sariq rangda kichkina shriftda Salom dunyo degan so`z hosil bo`ladi.",
    "noAnswer2": "Hech narsa hosil bo`lmaydi. Sabab style xato qo`llanilgan.",
    "noAnswer3": "Sariq rangda abzasdan katta shriftda Salom dunyo degan so`z hosil bo`ladi."
  },
  {
    "question": "<h1 style=”color:rgb(255,0,0);”> Salom Dunyo </h1> shu dasturning natijasida nima hosil bo`ladi?",
    "answer": "Qizil rangda katta shriftdaa Salom dunyo degan so`z hosil bo`ladi.",
    "noAnswer1": "Qizil rangda kichkina shriftda Salom dunyo degan so`z hosil bo`ladi.",
    "noAnswer2": "Hech narsa hosil bo`lmaydi. Sabab style xato qo`llanilgan.",
    "noAnswer3": "Qizil rangda abzasdan katta shriftda Salom dunyo degan so`z hosil bo`ladi."
  },
  {
    "question": "<head> elementining vazifasini aniqlang.",
    "answer": " <head> elementi hujjat haqidagi meta ma'lumotni o'z ichiga oladi",
    "noAnswer1": "<head> elementi sahifaning bosh qismi hisoblanadi. Unga sahifaning nomi va mazmuni yoziladi.",
    "noAnswer2": "<head> elementi bu browserda ko`rinadigan sahifaning nomini kiritish uchun xizmat qiladi.",
    "noAnswer3": "<head> elementi bu maxsus belgi hisoblanib u o`zida hech qanday ma’lumot saqlamaydi."
  },
  {
    "question": "<html> elementining vazifasini ko`rsating.",
    "answer": " <html> elementi HTML sahifasining ildiz elementidir",
    "noAnswer1": "<html> elementi ochilgan fayl .html kengaytmada ekanliginibil dirib turadi.",
    "noAnswer2": "<html> elementi sahifa himoyasi uchun qo`llaniladi.",
    "noAnswer3": "<html> elementi bu HTML tilining maxsus belgisi hisoblanadi."
  },
  {
    "question": "<p> elementi nima vazifani bajaradi?",
    "answer": " <p> elementi sarlavha hosil qilish uchun foydalaniladi",
    "noAnswer1": "<p> elementi kata sarlavhani belgilaydi",
    "noAnswer2": "<p> elementi kichik sarlavhani belgilaydi.",
    "noAnswer3": "<p> elementi uzun chiziq hosil qilishda foydalaniladi."
  },
  {
    "question": "<p>Hello World! </p>  ushbu so'z rangini o'zgartirish uchun CSSda qanday style yozish kerak?",
    "answer": "p { color: red; }",
    "noAnswer1": "p { backgrount-color:red;}",
    "noAnswer2": "h1 { color: red;}",
    "noAnswer3": "p { kolor: red;"
  },
  {
    "question": "<picture> elementini teglari qaysilar?",
    "answer": " <source> va  <img>",
    "noAnswer1": "<source> va  <audio>",
    "noAnswer2": "<audio> va  <img>",
    "noAnswer3": "<p> va  <img>"
  },
  {
    "question": "<Select> elementiga ma’lumotlar qaysi element yordamida kiritiladi?",
    "answer": " <option>",
    "noAnswer1": "<nav>",
    "noAnswer2": "<ul>",
    "noAnswer3": "<li>"
  },
  {
    "question": "<style> bu….?",
    "answer": "CSS stillarini kod ichida yozish imkonini beradi",
    "noAnswer1": "Brauzerdan qanday tip qo’shilayotganini beradi",
    "noAnswer2": "Qaysi tipda stillar bilan ishlash imkonini beradi",
    "noAnswer3": "Havolalarni hosil qilish"
  },
  {
    "question": "<title> elementining vazifasini belgilang.",
    "answer": " <title> elementi sahifa nomini kiritishda foydalaniladi.",
    "noAnswer1": "<title> elementi sahifaning bosh qismi hisoblanadi. Unga sahifaning nomi va mazmuni yoziladi.",
    "noAnswer2": "<title> maxsus belgi hisoblanib u o`zida hech qanday ma’lumot saqlamaydi.",
    "noAnswer3": "<title> elementi bu htmlda ahamiyatga ega bo`lgan element hisoblanadi. Unga hech nima yozmasa ham bo`laveradi."
  },
  {
    "question": "\"test\" sinf nomi bilan elementlarni qanday yoziladi?",
    "answer": ".test",
    "noAnswer1": "test",
    "noAnswer2": "*test",
    "noAnswer3": "test"
  },
  {
    "question": "\"xxx.js\" deb nomlangan tashqi scriptga murojaat qilish uchun to'g'ri sintaksis qanday?",
    "answer": " <script src=\"xxx.js\">",
    "noAnswer1": "<script name=\"xxx.js\">",
    "noAnswer2": "<script href=\"xxx.js\">",
    "noAnswer3": "<script =\"xxx.js\">"
  },
  {
    "question": "…- bu oldindan formatlashtirilgan matnning qo’llanilishidir.",
    "answer": " <pre>",
    "noAnswer1": "<br>",
    "noAnswer2": "<hr>",
    "noAnswer3": "<var>"
  },
  {
    "question": "….- web dasturlashda foydalanuvchi tomonidan kiritilayotgan ma’lumotlarni tartibga solish uchun qo`llaniladi.",
    "answer": "Formalar",
    "noAnswer1": "Jadvallar",
    "noAnswer2": "Teglar",
    "noAnswer3": "Attributlar"
  },
  {
    "question": "7,25 sonini eng yaqin butun songa qanday yaxlitlash mumkin?",
    "answer": "Math.round(7.25)",
    "noAnswer1": "round(7.25)",
    "noAnswer2": "Math.rnd(7.25)",
    "noAnswer3": "rnd(7.25)"
  },
  {
    "question": "Alink parametrining vazifasi nimadan iborat?",
    "answer": "Faol murojaatning rangini belgilaydi.",
    "noAnswer1": "Hujjatning quyi chegaralarini pixel larda ifodalaydi",
    "noAnswer2": "Hali ko`rib chiqilmagan silkaning rangini belgilaydi.",
    "noAnswer3": "Ishlatilgan murojaat rangini belgilaydi."
  },
  {
    "question": "Background-color xususiyati nima vazifani bajaradi?",
    "answer": "HTML da fon rangini tanlash uchun foydalaniladi.",
    "noAnswer1": "HTML da yozuv rangini tanlash uchun foydalaniladi.",
    "noAnswer2": "HTML da yozuv shriftini tanlashda foydalaniladi.",
    "noAnswer3": "HTML da yozuv shaklini tanlashda foydalaniladi."
  },
  {
    "question": "Barcha  <h1> elementlari uchun fon rangini qanday qo'shish mumkin?",
    "answer": "h1 {background-color:#FFFFFF;}",
    "noAnswer1": "all.h1 {background-color:#FFFFFF;}",
    "noAnswer2": "h1.all {background-color:#FFFFFF;}",
    "noAnswer3": "h1.all {color:#FFFFFF;}"
  },
  {
    "question": "Barcha  <p> elementlarni qalin qilish uchun to'g'ri CSS sintaksisi qanday?",
    "answer": "p {font-weight:bold;}",
    "noAnswer1": "p {text-size:bold;}",
    "noAnswer2": "<p style=\"font-size:bold;\">",
    "noAnswer3": "<p style=\"text-size:bold;\">"
  },
  {
    "question": "BgColor parametrining vazifasi nimadan iborat?",
    "answer": "Hujjat fonining rangini belgilaydi.",
    "noAnswer1": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilini belgilaydi.",
    "noAnswer2": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilsiz chaqirishni belgilaydi.",
    "noAnswer3": "Hujjat fonining rangini URL manzil bilan chaiqirishni belgilaydi"
  },
  {
    "question": "BGPROPERTIES parametrining vazifasi nimadan iborat?",
    "answer": "Agar fixed qiymati o`rnatilmagan bo`lsa, fon tasviri aylantirilmaydi.",
    "noAnswer1": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilini belgilaydi.",
    "noAnswer2": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilsiz chaqirishni belgilaydi.",
    "noAnswer3": "Hujjat fonining rangini URL manzil bilan chaiqirishni belgilaydi"
  },
  {
    "question": "Body tegining Background parametric qanday vazifa bajaradi?",
    "answer": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilini belgilaydi.",
    "noAnswer1": "Hujjat fonining rangini belgilaydi",
    "noAnswer2": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilsiz chaqirishni belgilaydi.",
    "noAnswer3": "Hujjat fonining rangini URL manzil bilan chaiqirishni belgilaydi"
  },
  {
    "question": "BottomMargin parametrining vazifasi qanday?",
    "answer": "Hujjatning quyi chegarasini pixel larda ifodalaydi.",
    "noAnswer1": "Hujjatning yuqori chegarasini pixel larda ifodalaydi",
    "noAnswer2": "Hujjatning o`ng chekasini pixel larda ifodalaydi",
    "noAnswer3": "Hujjatning chap chekkasini pixel larda ifodalaydi."
  },
  {
    "question": "Browser nima?",
    "answer": "Maxsus HTML tilida yaratilgan hujjatlarni o`quvchi kompyuter dasturi",
    "noAnswer1": "HTML tilida yaratilgan teglarni o`quvchi dastur.",
    "noAnswer2": "HTML ni ekranda ko`rsatib beradigan qurilma.",
    "noAnswer3": "Faqat HTML emas balki istalgan dasturlash tilida yozilgan dasturlarni tasvirlovchi dastur."
  },
  {
    "question": "Browserda HTML ning qaysi qisminigina ko`rish mumkin>",
    "answer": " <body>… </body> faqat shu elementlar orasidagi qismni ko`rish mumkin.",
    "noAnswer1": "HTML boshlanishidan to oxirigacha bo`lgan jarayonni ko`rish mumkin.",
    "noAnswer2": "Faqat  <title>… </title> qismni ko`rish mumkin.",
    "noAnswer3": "Browser html ning hech bir qisnmini ko`rsatmaydi."
  },
  {
    "question": "Browserlar HTML freymlarini asosan qaysi versiyadan boshlab tushuna boshladi?",
    "answer": "HTML 4.0",
    "noAnswer1": "HTML 3.2",
    "noAnswer2": "HTML 5.0",
    "noAnswer3": "XHTML"
  },
  {
    "question": "Client-Side ning vazifasi nima?",
    "answer": "Javascriptni ochishga va undagi kodlarni o`zgartirish ruxsatini bermaydi.",
    "noAnswer1": "Javascriptni ochishga va undagi kodlarni o`zgartirish ruxsatini beradi",
    "noAnswer2": "Javascriptni ochish ruxsatini bermaydi.",
    "noAnswer3": "Javascriptni kodlarni o`zgartirish ruxsatini bermaydi."
  },
  {
    "question": "COLS attributining vazifasini aniqlang.",
    "answer": "Maydonning ustunlari sonini belgilaydi.",
    "noAnswer1": "Maydonning satrlari sonini belgilaydi.",
    "noAnswer2": "Maydonning ustun va satrlari sonini belgilaydi",
    "noAnswer3": "Maydonning nomini belgilaydi"
  },
  {
    "question": "CSS birinchi marta qachon ishlab chiqilgan.",
    "answer": "1997-yil",
    "noAnswer1": "1998-yil",
    "noAnswer2": "1999-yil",
    "noAnswer3": "2000-yil"
  },
  {
    "question": "CSS bloklar modeli nimalarda iborat?",
    "answer": "margin, border, padding va content",
    "noAnswer1": "border",
    "noAnswer2": "margin va padding",
    "noAnswer3": "padding va content"
  },
  {
    "question": "CSS da asosiy fon va rang uchu vavob beradigan still xususyatlari",
    "answer": "barcha javoblar tog'ri",
    "noAnswer1": "color,background- color,background- image",
    "noAnswer2": "background- repeat,background- attachment",
    "noAnswer3": "background- position,background"
  },
  {
    "question": "Css da belgilangan maydonga sig'adigan darajada katta bo'lgan tarkib bilan nima bo'lishini boshqaradigan xususiyat?",
    "answer": "overflow",
    "noAnswer1": "position",
    "noAnswer2": "display",
    "noAnswer3": "opacity"
  },
  {
    "question": "CSS da berilgan blokni chegarasini qizil ranga o'zgartirish uchun quyidagilardan qaysi biri ishlatiladi?",
    "answer": "border-color: red;",
    "noAnswer1": "border: red;",
    "noAnswer2": "color: red;",
    "noAnswer3": "backgrountcolor: red;"
  },
  {
    "question": "Css da elementlarning position xususiyati nechta qiymat qabul qilishi mumkin?",
    "answer": "5 ta",
    "noAnswer1": "6 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": "3 ta"
  },
  {
    "question": "CSS da margin ning vazifasu nimadan iborat.",
    "answer": "Elementlar orasidagi masofani belgilaydi.",
    "noAnswer1": "Yozuvlar orasidagi masofani belgilaydi.",
    "noAnswer2": "Jadvallar orasidagi masiofani belgilaydi.",
    "noAnswer3": "Yozuv kattaligi bo`yicha tartiblaydi."
  },
  {
    "question": "CSS faylga HTML dan qanday qilib bo`g`lanish mumkin?",
    "answer": " <link> elementi orqali.",
    "noAnswer1": "<script> elementi orqali",
    "noAnswer2": "<source> elementi orqali",
    "noAnswer3": "<src> elementi orqali"
  },
  {
    "question": "CSS identifikatori (id) tanlash uchun qanday belgidan foydalaniladi?",
    "answer": "#",
    "noAnswer1": ".",
    "noAnswer2": "ID",
    "noAnswer3": "HECH QANDAY BELGI QO'YILMAYDI"
  },
  {
    "question": "CSS jadvallarini kiritishning nechta usuli mavjud va ular qaysilar?",
    "answer": "3ta, Tashqi CSS Ichki CSS Kiritilgan CSS",
    "noAnswer1": "2ta, Ichki CSS Kiritilgan CSS",
    "noAnswer2": "2ta, Tashqi CSS Ichki CSS",
    "noAnswer3": "1ta, Ichki CSS"
  },
  {
    "question": "CSS ning kengaytmasi to'g'ri ko'rsatilgan javobni toping",
    "answer": "cascading style sheets",
    "noAnswer1": "cascading sources sheets",
    "noAnswer2": "cascading  sheets style",
    "noAnswer3": "cascading  shields style"
  },
  {
    "question": "CSS ning kengaytmasini to`g`ri ko`rsating.",
    "answer": "Cascading Style Sheets",
    "noAnswer1": "Cascading Style Shut",
    "noAnswer2": "Cascad Style Sheets",
    "noAnswer3": "Cascading Symbol Sheets"
  },
  {
    "question": "CSS ning toliq holati nechanchi yilda yaratilgan?",
    "answer": "1997",
    "noAnswer1": "1995",
    "noAnswer2": "2000",
    "noAnswer3": "1996"
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-image buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fonga biron bir rasm tanlash uchun foydalaniladi",
    "noAnswer1": "Fonga razmer olish uchun foydalaniladi.",
    "noAnswer2": "Yozuv razmerini tanlash uchun foydalaniladi.",
    "noAnswer3": "Yozuv shaklini tanlash uchun foydalaniladi."
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-repeat buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fon uchun tanlangan rasmning gorizontal yoki vertical o`q bo`yicha takrorlanishini amalga oshiradi.",
    "noAnswer1": "Fon uchun tanlangan rasmning o`lchamlarini belgilashda ishlatiladi.",
    "noAnswer2": "Fonga biron bir rasm tanlash uchun foydalaniladi",
    "noAnswer3": "Fonga razmer olish uchun foydalaniladi."
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-size buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fon uchun tanlangan rasmning o`lchamlarini belgilashda ishlatiladi.",
    "noAnswer1": "Fonga biron bir rasm tanlash uchun foydalaniladi",
    "noAnswer2": "Fonga razmer olish uchun foydalaniladi.",
    "noAnswer3": "Yozuv razmerini tanlash uchun foydalaniladi."
  },
  {
    "question": "CSS qoidasiga ko'ra sahifadagi har bir HTML elementiga ta'sir ko'rsatish uchun qanday belgidan foydalanish kerak?",
    "answer": "*",
    "noAnswer1": ".",
    "noAnswer2": "unday belgi mavjud emas",
    "noAnswer3": "#"
  },
  {
    "question": "CSS shrift turlari qaysilar kiradi",
    "answer": "generic family, font family.",
    "noAnswer1": "font family, font style",
    "noAnswer2": "font style, generic family",
    "noAnswer3": "generic style, font family"
  },
  {
    "question": "CSS3 da media xususiyatining vazifasi nimadan iborat?",
    "answer": "Sahifaning istalgan qurilmada moslashuvchanligini ta’minlab beradi.",
    "noAnswer1": "Sahifa media (qo`shiq, video va boshqalarni) fayllarni yuklashda yordamchi hisoblanadi.",
    "noAnswer2": "Sahifaga turli ma’lumotlarni shriftlangan holatda qo`shilishini ta’minlaydi.",
    "noAnswer3": "Sahifa o`lchamlari bila ishlaydi."
  },
  {
    "question": "CSS3 dagi translate xususiyatining vazifasi nimadan iborat.",
    "answer": "Blocklarni X va Y o`qi bo`yicha joylashuvini belgilaydi.",
    "noAnswer1": "Blocklarni joylashuvini belgilaydi.",
    "noAnswer2": "Blocklarni harakatga keltiradi.",
    "noAnswer3": "Bunday xususiyat mavjud emas."
  },
  {
    "question": "CSS3 dan foydalanganda Aktiv holat qanday belgilanadi?",
    "answer": ":active;",
    "noAnswer1": ":focus;",
    "noAnswer2": ":visited;",
    "noAnswer3": ":hover;"
  },
  {
    "question": "CSS3 dan foydalanganda kursor olib borilgan holat qanday belgilanadi?",
    "answer": ":hover;",
    "noAnswer1": ":visited;",
    "noAnswer2": ":focus;",
    "noAnswer3": ":active;"
  },
  {
    "question": "CSS3 dan foydalanganda maydonlar uchun foydalanilayotgan holat qanday belgilanadi?",
    "answer": ":focus;",
    "noAnswer1": ":visited;",
    "noAnswer2": ":hover;",
    "noAnswer3": ":active;"
  },
  {
    "question": "CSS3 dan foydalanganda tashrif buyurilgan holat qanday belgilanadi?",
    "answer": ":visited;",
    "noAnswer1": ":hover;",
    "noAnswer2": ":focus;",
    "noAnswer3": ":active;"
  },
  {
    "question": "CSS3 filter xususiyatidan asosan qaysi elementda ko`p foydalaniladi.",
    "answer": "Asosan  <img>, rasmlar ustida ish olib borilganda foydalaniladi.",
    "noAnswer1": "Asosan body qismda ko`p foydalaniladi.",
    "noAnswer2": "Asosan yozuvlar bilan ishlaganda,  <h1>…. </h>,  <h6> …..  </h6> larda ko`proq foydalaniladi.",
    "noAnswer3": "Asosan  <table> .. </table> ko`p foydalaniladi."
  },
  {
    "question": "CSSda background-color ning vazifasi qanday?",
    "answer": "Sahifani orqa rangini belgilaydi",
    "noAnswer1": "Sahifani chetki qirrasini rangini belgilaydi",
    "noAnswer2": "matn rangini belgilaydi",
    "noAnswer3": "matn shiriftini o'zgartiradi"
  },
  {
    "question": "Cssda float nechta qiymat qabul qiladi?",
    "answer": "4ta, left, right, inherit, none;",
    "noAnswer1": "3ta, left, right, inherit;",
    "noAnswer2": "2ta left, right;",
    "noAnswer3": "tjy"
  },
  {
    "question": "CSSda ichki uslublar qanday elemen orqali bog'lanadi?",
    "answer": " <style>",
    "noAnswer1": "<link>",
    "noAnswer2": "<a>",
    "noAnswer3": "<br>"
  },
  {
    "question": "CSSda sharhlar qanday belgilar orqali ifodalanadi?",
    "answer": "/* */",
    "noAnswer1": "//",
    "noAnswer2": "<!-- -->",
    "noAnswer3": "///"
  },
  {
    "question": "CSSda tashqi uslublar qanday elemen orqali bog'lanadi?",
    "answer": " <link>",
    "noAnswer1": "<style>",
    "noAnswer2": "<a>",
    "noAnswer3": "<br>"
  },
  {
    "question": "DOM bu-…........",
    "answer": "xujjat obekt modeli",
    "noAnswer1": "uy obekt modeli",
    "noAnswer2": "hisobot obekti modeli",
    "noAnswer3": "t.j.y"
  },
  {
    "question": "Element ko'rinmas yoki ko'rinadigan holda bo'lishi kerakligini aniqlaydi",
    "answer": "visibility",
    "noAnswer1": "Display",
    "noAnswer2": "background()",
    "noAnswer3": "size()"
  },
  {
    "question": "Element matn rangini o'zgartirish uchun qaysi CSS xususiyatidan foydalaniladi?",
    "answer": "color",
    "noAnswer1": "rgb",
    "noAnswer2": "text-color",
    "noAnswer3": "fgcolor"
  },
  {
    "question": "Element shriftini o'zgartirish uchun qaysi xususiyatdan foydalaniladi?",
    "answer": "font-family",
    "noAnswer1": "font-style",
    "noAnswer2": "font-size",
    "noAnswer3": "font-weight"
  },
  {
    "question": "Elementning chap chetini o'zgartirish uchun qaysi xususiyatdan foydalaniladi?",
    "answer": "margin-left",
    "noAnswer1": "padding-left",
    "noAnswer2": "margin",
    "noAnswer3": "indent"
  },
  {
    "question": "Faylga murojat Tegi orqali amalga oshiriladi.",
    "answer": " <head>",
    "noAnswer1": "<body>",
    "noAnswer2": "<table>",
    "noAnswer3": "<title>"
  },
  {
    "question": "Float dan keyin joylashadigan clearning both qiymat qanday vazifani bajaradi?",
    "answer": "O’ng va Chap tomondan joylashgan elementlarga ruhsat berilmaydi;",
    "noAnswer1": "O’ng  tomondan joylashgan elementlarga ruhsat berilmaydi;",
    "noAnswer2": "Chap tomondan joylashgan elementlarga ruhsat berilmaydi;",
    "noAnswer3": "Ota element qiymatini meros qilib oladi;"
  },
  {
    "question": "Fon rangini o'zgartirish uchun qaysi xususiyatdan foydalaniladi?",
    "answer": "background-color",
    "noAnswer1": "rgb",
    "noAnswer2": "color",
    "noAnswer3": "bgcolor"
  },
  {
    "question": "Fonning bo’yaladigan qismini ko’rsatish uchun qaysi xususiyatdan foydalaniladi?",
    "answer": "background-clip",
    "noAnswer1": "background-color",
    "noAnswer2": "background-paint",
    "noAnswer3": "background-origin"
  },
  {
    "question": "FOR sikli qanday boshlanadi?",
    "answer": "for (i = 0; i  <= 5; i++)",
    "noAnswer1": "for i = 1 to 5",
    "noAnswer2": "for (i = 0; i  <= 5)",
    "noAnswer3": "for (i  <= 5; i++)"
  },
  {
    "question": "Forma elementi hisoblangan  <form> </form> asosan qaysi tegdan tashkil qopgan.",
    "answer": " <input>",
    "noAnswer1": "<src>",
    "noAnswer2": "<href>",
    "noAnswer3": "<submit>"
  },
  {
    "question": "Forma ma’lumotlarni jo’natish manzili qaysi attribut yordamida ko’rsatiladi?",
    "answer": "action",
    "noAnswer1": "href",
    "noAnswer2": "Src",
    "noAnswer3": "form"
  },
  {
    "question": "Formada bir nechta ma’lumotlar ichidan faqat birini tanlash imkoniyatini beruvchi elementni aniqlang?",
    "answer": "radio",
    "noAnswer1": "checkbox",
    "noAnswer2": "area",
    "noAnswer3": "Password"
  },
  {
    "question": "Formada bir nechta ma’lumotlar ichidan istalganini tanlash imkoniyatini beruvchi elementni aniqlang?",
    "answer": "checkbox",
    "noAnswer1": "radio",
    "noAnswer2": "area",
    "noAnswer3": "Password"
  },
  {
    "question": "Formada menyularni qaysi element orqali hosil qilinadi?",
    "answer": " <select>",
    "noAnswer1": "<option>",
    "noAnswer2": "<nav>",
    "noAnswer3": "<ul>"
  },
  {
    "question": "Formada method xususiyatining paramaterli necha xil bo`ladi?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "Foydalanuvchi oyna bilan ishlashni tugatib, brauzer oynasini yopishi, yoki boshqa xujjatni qo`shishi Qaysi xolatni beradi?",
    "answer": "onUnload",
    "noAnswer1": "onLoad",
    "noAnswer2": "printRecord",
    "noAnswer3": "toLowerCase"
  },
  {
    "question": "Giperhavola yaratish uchun to'g'ri HTML nima?",
    "answer": " <a href=\"http://www.w3schools.com\">W3Schools </a>",
    "noAnswer1": "<a>http://www.w3schools.com </a>",
    "noAnswer2": "<a url=\"http://www.w3schools.com\">W3Schools.com </a>",
    "noAnswer3": "<a name=\"http://www.w3schools.com\">W3Schools.com </a>"
  },
  {
    "question": "Har qanday elementlarni aylana shaklidagi burchaklarga keltirish uchun dan foydalaniladi",
    "answer": "border-radius",
    "noAnswer1": "border-style",
    "noAnswer2": "rounded-border",
    "noAnswer3": "border"
  },
  {
    "question": "HTML bilan ishlovchi muhitlarni belgilang.",
    "answer": "Hamma javoblar to`g`ri",
    "noAnswer1": "SublimeText",
    "noAnswer2": "Notepad",
    "noAnswer3": "Dreamweaver"
  },
  {
    "question": "HTML da  <b>.. </b> Elementining vazifasi nima?",
    "answer": "HTML sahifasidagi yozuvni qalin bold holatga o`tkazish uchun qo`llaniladi.",
    "noAnswer1": "HTML sahifasidagi yozuvni egri italic holatga o`tkazish uchun qo`llaniladi.",
    "noAnswer2": "HTML sahifasidagi yozuvni tagi chizilgan underline holatga o`tkazish uchun qo`llaniladi.",
    "noAnswer3": "HTML sahifasidagi yozuvni shriftini o`zgartirish uchun qo`llaniladi."
  },
  {
    "question": "HTML da block hosil qiluvchi tegni belgilang.",
    "answer": " <div>",
    "noAnswer1": "<block>",
    "noAnswer2": "<class>",
    "noAnswer3": "<id>"
  },
  {
    "question": "HTML da Color xususiyati nima vazifa bajaradi?",
    "answer": "Yozuv rangini tanlash",
    "noAnswer1": "Fon rangini tanlash",
    "noAnswer2": "Yozuv shriftini tanlash",
    "noAnswer3": "Jadval rangini tanlash"
  },
  {
    "question": "HTML da forma hosil qiluvchi element nomini ko`rsating.",
    "answer": " <form> </form>",
    "noAnswer1": "<table> </table>",
    "noAnswer2": "<forma> </forma>",
    "noAnswer3": "<div> </div>"
  },
  {
    "question": "HTML da freym tizimini joriy qilish uchun qaysi teglardan foydalaniladi?",
    "answer": "Hamma javoblar to`g`ri",
    "noAnswer1": "<FRAMESET>",
    "noAnswer2": "<FRAME>",
    "noAnswer3": "<NOFRAME>"
  },
  {
    "question": "HTML da freymlar asosan qaysi versiyadan boshlab qo`llanilgan?",
    "answer": "HTML 3.2",
    "noAnswer1": "HTML 4.0",
    "noAnswer2": "HTML5",
    "noAnswer3": "XHTML"
  },
  {
    "question": "HTML da horizantal-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini gorizantal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer1": "HTML elementlarini vertikal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer2": "HTML elementlarini gorizontal va vertikal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer3": "HTML elementlarini joylashuvini amalga oshiradi."
  },
  {
    "question": "HTML da izoh to`g`ri yozilgan qatorni ko`rsating.",
    "answer": " <! - - Bu izoh - - >",
    "noAnswer1": "// Bu izoh",
    "noAnswer2": "/* Bu izoh */",
    "noAnswer3": "<? Bu izoh ?>"
  },
  {
    "question": "HTML da jadval hosil qilishda foydalaniladigan tegni belgilang.",
    "answer": " <table> </table>",
    "noAnswer1": "<table>",
    "noAnswer2": "<table td>",
    "noAnswer3": "<table tr>"
  },
  {
    "question": "HTML da murojaat qaysi teg orqali hosil qilinadi",
    "answer": " <a>",
    "noAnswer1": "<br>",
    "noAnswer2": "<hr>",
    "noAnswer3": "<href>"
  },
  {
    "question": "HTML da qanday teglar mavjud?",
    "answer": "Juft va toq",
    "noAnswer1": "Faqat juft",
    "noAnswer2": "Faqat toq",
    "noAnswer3": "Hech qanday teglar mavjud emas"
  },
  {
    "question": "HTML da ro`yxatlar hosil qilish uchun qaysi tegdan foydalaniladi?",
    "answer": " <ul> </ul>",
    "noAnswer1": "<table> </table>",
    "noAnswer2": "<li> </li>",
    "noAnswer3": "<form> </form>"
  },
  {
    "question": "HTML da sahifaga rasm joylash uchun foydalaniladigan teg nomini belgilang.",
    "answer": " <img>",
    "noAnswer1": "<source>",
    "noAnswer2": "<image>",
    "noAnswer3": "<pic>"
  },
  {
    "question": "HTML da text-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini gorizontal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer1": "HTML elementlarini vertikal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer2": "HTML elementlarini gorizontal va vertical o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer3": "HTML elementlarini joylashuvini amalga oshiradi."
  },
  {
    "question": "HTML da vertical-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini vertikal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer1": "HTML elementlarini gorizontal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer2": "HTML elementlarini gorizontal va vertikal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer3": "HTML elementlarini joylashuvini amalga oshiradi."
  },
  {
    "question": "HTML dagi sahifaga ishlov berish uchun qaysi attributdan foydalaniladi?",
    "answer": "style",
    "noAnswer1": "design",
    "noAnswer2": "describe",
    "noAnswer3": "canvas"
  },
  {
    "question": "HTML elementlari nimalar orqali tasvirlanadi?",
    "answer": "HTML teglari orqali",
    "noAnswer1": "HTML attributlari orqali",
    "noAnswer2": "HTML contentlari orqali",
    "noAnswer3": "HTML boshqa til funksiyalari orqali"
  },
  {
    "question": "HTML faylining kengaytmasini ko`rsating.",
    "answer": ".html",
    "noAnswer1": ".hml",
    "noAnswer2": ".xml",
    "noAnswer3": ".css"
  },
  {
    "question": "HTML hujjat ma'nosi?",
    "answer": "Hyper Text Markup Language",
    "noAnswer1": "Hyper Text Market Language",
    "noAnswer2": "Hide Textil Markup Laught",
    "noAnswer3": "Hype Text Markup Language"
  },
  {
    "question": "HTML nechinchi yil, kim tomonidan ishlab chiqilgan?",
    "answer": "1990-yil, Tim Berners Li",
    "noAnswer1": "1990-yil Jon Rezig",
    "noAnswer2": "1991-yil Tim Berners Li",
    "noAnswer3": "1991-yil Jon Rezig"
  },
  {
    "question": "HTML ning versiyalari keltirilgan javobni ko`rsating.",
    "answer": "HTML-1991,HTML 2.0-1995, HTML 3.2-v1997, HTML 4.01-v1999, XHTML-2000, HTML5-2014.",
    "noAnswer1": "HTML-1994, HTML 2.0-1995, HTML 3.2- 1997, HTML 4.01-1999, XHTML-2000, HTML5-2014.",
    "noAnswer2": "HTML-1991, HTML 2.0-1995, HTML 3.2-1997, HTML5-2014.",
    "noAnswer3": "HTML-1991, HTML 2.0-1995, HTML 3.2-1997, HTML 4.01-1999, XHTML-2000, HTML5-2018."
  },
  {
    "question": "HTML qaysi tilga asoslangan holda ishlab chiqilgan.",
    "answer": "SGML",
    "noAnswer1": "WML",
    "noAnswer2": "XML",
    "noAnswer3": "XHTML"
  },
  {
    "question": "HTML tili kim tomonidan barpo etilgan?",
    "answer": "Tim Berners-Li",
    "noAnswer1": "Paskal",
    "noAnswer2": "Klod Shennon",
    "noAnswer3": "Jek Kilbi"
  },
  {
    "question": "HTML tilida murojaatni boshqa manzilga yo`naltirish uchun qaysi attrubutdan foydalaniladi?",
    "answer": "href",
    "noAnswer1": "link",
    "noAnswer2": "src",
    "noAnswer3": "type"
  },
  {
    "question": "HTMLda browserdan nima uchun foydalaniladi?",
    "answer": "Browser html teglari yozilishi natijasida hosil bo`lgan sahifani ko`rsatadi",
    "noAnswer1": "Browser html dagi belgilarni ko`rsatadi",
    "noAnswer2": "Browser html teglarini ko`rsatadi",
    "noAnswer3": "Browser html teglarini tartiblangan holatini ko`rsatadi"
  },
  {
    "question": "Ichki uslublar jadvalini aniqlash uchun qaysi HTML tegidan foydalaniladi?",
    "answer": " <style>",
    "noAnswer1": "<css>",
    "noAnswer2": "<html>",
    "noAnswer3": "<script>"
  },
  {
    "question": "Inline uslublarini aniqlash uchun qaysi HTML atributidan foydalaniladi?",
    "answer": "style",
    "noAnswer1": "class",
    "noAnswer2": "styles",
    "noAnswer3": "font"
  },
  {
    "question": "Inputga matnli ma’lumot kiritish uchun type=” ? ” nima yozilishi kerak?",
    "answer": "text",
    "noAnswer1": "checkbox",
    "noAnswer2": "password",
    "noAnswer3": "Mail"
  },
  {
    "question": "Javascript birinchi marta qachon ishlab chiqilgan.",
    "answer": "1995-yil",
    "noAnswer1": "1996-yil",
    "noAnswer2": "1997-yil",
    "noAnswer3": "1998-yil"
  },
  {
    "question": "JavaScript dasturlash tilida o’zgaruvchilar to’g’ri e’lon qilingan javobni toping.",
    "answer": "$nom, nom, _nom",
    "noAnswer1": ".nom, -nom, $nom",
    "noAnswer2": "var, $nom, _nom",
    "noAnswer3": "Nom2, $nom, -nom"
  },
  {
    "question": "JavaScript massivini yozishning to'g'ri yo'li qanday?",
    "answer": "var colors = [\"red\", \"green\", \"blue\"]",
    "noAnswer1": "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
    "noAnswer2": "var colors = \"red\", \"green\", \"blue\"",
    "noAnswer3": "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")"
  },
  {
    "question": "JavaScript o'zgaruvchisini qanday e'lon qilinadi?",
    "answer": "var carName;",
    "noAnswer1": "variable carName;",
    "noAnswer2": "v carName;",
    "noAnswer3": "carName;"
  },
  {
    "question": "JavaScript qaysi firma tomonidan ishlab chiqilgan?",
    "answer": "Netscape",
    "noAnswer1": "Google",
    "noAnswer2": "Intel",
    "noAnswer3": "AMDA/A4"
  },
  {
    "question": "JavaScript qaysi HTML elementiga joylashtiriladi?",
    "answer": " <script>",
    "noAnswer1": "<javascript>",
    "noAnswer2": "<scripting>",
    "noAnswer3": "<js>"
  },
  {
    "question": "JavaScript ssenariysida qaysi ob’ekt usul va kattaliklaridan foydalangan holda brauzerga yuklangan xujjatning joriy vaqtdagi xolati haqida ma’lumot olish mumkin?",
    "answer": "document",
    "noAnswer1": "window",
    "noAnswer2": "parent",
    "noAnswer3": "location"
  },
  {
    "question": "JavaScript tilida eng bosh brauzer ob’ekti hisoblanadi?",
    "answer": "window",
    "noAnswer1": "document",
    "noAnswer2": "parent",
    "noAnswer3": "frame"
  },
  {
    "question": "JavaScript tilida massivlar uchun qaysi usul qo‘llaniladi?",
    "answer": "uchta usul: join, reverse, sort",
    "noAnswer1": "Ikkita usul: reverse, sort",
    "noAnswer2": "To‘rtta usul: anchor, bold, reverse, sort",
    "noAnswer3": "Massivlvr uchun usullar mavjud emas"
  },
  {
    "question": "JavaScript tilida qanday binar operatorlar mavjud?",
    "answer": "-, +, /, %",
    "noAnswer1": "-, !, ++, --",
    "noAnswer2": "&, |, ~, ^",
    "noAnswer3": ">, >,  < <"
  },
  {
    "question": "JavaScript tilida qanday unar operatorlar mavjud?",
    "answer": "-, !, ++, --",
    "noAnswer1": "-, +, /, %",
    "noAnswer2": "&, |, ~, ^",
    "noAnswer3": ">, >,  < <"
  },
  {
    "question": "JavaScriptda barcha teglarga murojaat qanday amalga oshiriladi?",
    "answer": "document.getElementB yTagName(‘..’);",
    "noAnswer1": "document.getElementB yId(‘..’);",
    "noAnswer2": "document.getElementB yTagNames(‘..’);",
    "noAnswer3": "document.getElementB yClass(‘..’);"
  },
  {
    "question": "JavaScriptda class orqali murojaat to`g`ri ko`rsatilgan javobni belgilang.",
    "answer": "JavaScriptda class orqali murojaat mavjud emas.",
    "noAnswer1": "document.getElementB yClass(‘..’);",
    "noAnswer2": "document.getElementB yId(‘..’);",
    "noAnswer3": "document.getElementB yTagName(‘..’);"
  },
  {
    "question": "JavaScriptda id orqali murojaat to`g`ri ko`rsatilgan javobni belgilang.",
    "answer": "document.getElementB yId(‘..’);",
    "noAnswer1": "document.getElementB yTagName(‘..’);",
    "noAnswer2": "document.getElementB yTagNames(‘..’);",
    "noAnswer3": "document.getElementB yClass(‘..’);"
  },
  {
    "question": "JavaScript-da IF shartini qanday yozish kerak?",
    "answer": "if (i == 5)",
    "noAnswer1": "if i == 5 then",
    "noAnswer2": "if i = 5",
    "noAnswer3": "if i = 5 then"
  },
  {
    "question": "JavaScriptda onLoad  amalining vazifasi nima?",
    "answer": "HTML hujjati ishga tushgan payt,ya’ni oyna ochilganda",
    "noAnswer1": "Sichqoncha ko’rsatkichini tashqariga olgan payt",
    "noAnswer2": "Sichqoncha ko’rsatkichi oyna yoki freymdan",
    "noAnswer3": "Sichqoncha ko’rsatkichi oyna yoki freymdan"
  },
  {
    "question": "JavaScriptda onMouseOut  amalining vazifasi nima?",
    "answer": "sichqoncha ko’rsatkichini tashqariga olgan payt",
    "noAnswer1": "Ishchi tugmani bosgan payt",
    "noAnswer2": "Ishchi tugmani bosib qo’yib yuborgan payt",
    "noAnswer3": "Ob’ektni o’chirgan payt"
  },
  {
    "question": "Javascriptda qanday arifmetik amallardan foydalaniladi?",
    "answer": "+, - , * , / , %, ++, --",
    "noAnswer1": "+, - , * , / , %, ++, --, &",
    "noAnswer2": "+, - , * , / , %, ++, --, =",
    "noAnswer3": "+, - , * , / , %, ++, --, *="
  },
  {
    "question": "JavaScript-da qanday qilib funksiya yaratiladi?",
    "answer": "function myFunction()",
    "noAnswer1": "function = myFunction()",
    "noAnswer2": "function:myFunction()",
    "noAnswer3": "function Function()"
  },
  {
    "question": "JavaScript-ni kiritish uchun to'g'ri joy qayerda?",
    "answer": " <head> bo'limi ham,  <body> bo'limi ham to'g'ri",
    "noAnswer1": "<head> bo'limi",
    "noAnswer2": "<body> bo'limi",
    "noAnswer3": "To`g`ri javob mavjud emas"
  },
  {
    "question": "Javascriptni tarmoq ilovalari uchun ishlatish mumkinmi?",
    "answer": "Yo`q",
    "noAnswer1": "Ha",
    "noAnswer2": "Ba’zan",
    "noAnswer3": "To`g`ri javob mavjud emas"
  },
  {
    "question": "Javascriptning javadan farqi nimada.",
    "answer": "Javascript HTML ga birlashtirish uchun mo`ljallangan",
    "noAnswer1": "Javascript obyektli dasturlash tili bo`lib u mustaqil ishlash xususiyatiga ega",
    "noAnswer2": "Javascript ham HTML ga biriktirilgan ham obyektli dasturlash tili ham hisoblanadi.",
    "noAnswer3": "To`g`ri javob mavjud emas"
  },
  {
    "question": "Ko`p satrli ma’lumotlar kiritish imkonini beruvchi attributni belgilang.",
    "answer": "textarea",
    "noAnswer1": "text",
    "noAnswer2": "string",
    "noAnswer3": "Password"
  },
  {
    "question": "LeftMargin parametrining vazifasi nimadan iborat?",
    "answer": "Hujjatning chap chekkasini pixel larda ifodalaydi.",
    "noAnswer1": "Hujjatning quyi chegarasini pixel larda ifodalaydi.",
    "noAnswer2": "Hujjatning yuqori chegarasini pixel larda ifodalaydi",
    "noAnswer3": "Hujjatning o`ng chekasini pixel larda ifodalaydi"
  },
  {
    "question": "Link parametrining vazifasi nimadan iborat?",
    "answer": "Hali ko`rib chiqilmagan silkaning rangini belgilaydi.",
    "noAnswer1": "Hujjatning quyi chegaralarini pixel larda ifodalaydi",
    "noAnswer2": "Faol murojaatning rangini belgilaydi.",
    "noAnswer3": "Ishlatilgan murojaat rangini belgilaydi."
  },
  {
    "question": "Matinni quyidagi ko'rinishda ekranga chop etish uchun qaysi tegdan foydalaniladi? Coffee Tea Milk",
    "answer": " <ul>",
    "noAnswer1": "<b>",
    "noAnswer2": "<br>",
    "noAnswer3": "<a>"
  },
  {
    "question": "Matnni qalin qilib qanday qilish mumkin?",
    "answer": "font-weight:bold;",
    "noAnswer1": "style:bold;",
    "noAnswer2": "font:bold;",
    "noAnswer3": "size:bold;"
  },
  {
    "question": "Method xususiyatlarini tog`ri belgilang.",
    "answer": "“GET” va “POST”",
    "noAnswer1": "“GET”, “POST”, “SECRET”",
    "noAnswer2": "“GET”",
    "noAnswer3": "“POST”"
  },
  {
    "question": "Muayyan sinfga ega elementlarni tanlash uchun qanday belgidan foydalaniladi?",
    "answer": ".",
    "noAnswer1": "hech qanday belgidan foydalanilmaydi",
    "noAnswer2": ";",
    "noAnswer3": "#"
  },
  {
    "question": "Nuqtalar o'rniga mos so'zni qo'yib jumlani to'ldiring. Id nomi  … bilan boshlanmaydi!",
    "answer": "raqam",
    "noAnswer1": "kiril harf",
    "noAnswer2": ",",
    "noAnswer3": "!"
  },
  {
    "question": "Ogohlantirish qutisiga \"Salom dunyo\"ni qanday yozish mumkin?",
    "answer": "alert (\"Salom dunyo\");",
    "noAnswer1": "msgBox(\"Salom dunyo\");",
    "noAnswer2": "alertBox (\"Salom dunyo\");",
    "noAnswer3": "msg(\"Salom dunyo\");"
  },
  {
    "question": "Opocity elementi qanday vazifa bajaradi?",
    "answer": "Fonning shafofligini belgilaydi",
    "noAnswer1": "matn egriligini taminlaydi",
    "noAnswer2": "matn rangini belgilaydi",
    "noAnswer3": "matn shiriftini o'zgartiradi"
  },
  {
    "question": "o'zgarmas position xususiyatini toping",
    "answer": "fixed",
    "noAnswer1": "top",
    "noAnswer2": "static",
    "noAnswer3": "Absolute"
  },
  {
    "question": "O'zgaruvchi qaysi teg orqali e'lon qilinadi?",
    "answer": " <var>",
    "noAnswer1": "<b>",
    "noAnswer2": "<br>",
    "noAnswer3": "<a>"
  },
  {
    "question": "O'zgaruvchiga qiymat berish uchun qaysi operator ishlatiladi?",
    "answer": "=",
    "noAnswer1": "+",
    "noAnswer2": "-",
    "noAnswer3": "/"
  },
  {
    "question": "Position xususiyatining nech xil qiymati mavjud?",
    "answer": "4",
    "noAnswer1": "3",
    "noAnswer2": "2",
    "noAnswer3": "1"
  },
  {
    "question": "Pozitsiya xususiyatining standart qiymati nima?",
    "answer": "static",
    "noAnswer1": "absolute",
    "noAnswer2": "relative",
    "noAnswer3": "fixed"
  },
  {
    "question": "Qanday qilib giperhavolalarni tagiga chizilmasdan ko'rsatish mumkin?",
    "answer": "a {text-decoration:none;}",
    "noAnswer1": "a {decoration:no-underline;}",
    "noAnswer2": "a {text-decoration:no-underline;}",
    "noAnswer3": "a {underline:none;}"
  },
  {
    "question": "Qanday qilib JavaScript-ga sharh qo'shishingiz mumkin?",
    "answer": "//Bu izoh",
    "noAnswer1": "//Bu izoh\\\\",
    "noAnswer2": "<!--Bu sharh-->",
    "noAnswer3": "<!--Bu sharh"
  },
  {
    "question": "Qanday vstroenniy JavaScript ssenariyi klasi kompyuter soati bo‘yicha turli holatlarni bajarishi mumkin?",
    "answer": "Date",
    "noAnswer1": "String",
    "noAnswer2": "Math",
    "noAnswer3": "To‘g‘ri javob yo‘q"
  },
  {
    "question": "Qaysi CSS atributi elementlarni ekranga qay tarzda chiqarish kerakligini ifodalaydi",
    "answer": "Display()",
    "noAnswer1": "color()",
    "noAnswer2": "background()",
    "noAnswer3": "size()"
  },
  {
    "question": "Qaysi CSS sintaksisi to'g'ri?",
    "answer": "body {color: black;}",
    "noAnswer1": "{body:color=black;}",
    "noAnswer2": "body:color=black;",
    "noAnswer3": "{body;color:black;}"
  },
  {
    "question": "Qaysi CSS xususiyati element qayerga joylashtirilish kerakligini aniqlash uchun ishlatiladi?",
    "answer": "Position",
    "noAnswer1": "Condition",
    "noAnswer2": "auto",
    "noAnswer3": "Fixed"
  },
  {
    "question": "Qaysi CSS xususiyati matn hajmini boshqaradi?",
    "answer": "font-size",
    "noAnswer1": "font-style",
    "noAnswer2": "text-style",
    "noAnswer3": "text-size"
  },
  {
    "question": "Qaysi HTML elementi navigatsiya havolalarini belgilaydi?",
    "answer": " <nav>",
    "noAnswer1": "<gate>",
    "noAnswer2": "<navigation>",
    "noAnswer3": "<navigate>"
  },
  {
    "question": "Qaysi javobda havola sichqoncha ustidagi holat kodi berilgan",
    "answer": "a:hover.",
    "noAnswer1": "a:visited",
    "noAnswer2": "a:link",
    "noAnswer3": "a:active"
  },
  {
    "question": "qaysi style gorizontal yo'nalish bo'yicha eng o'rta qismiga joylashtirishishi mumkin?",
    "answer": "margin: auto;",
    "noAnswer1": "width: auto;",
    "noAnswer2": "height:auto;",
    "noAnswer3": "max-height:auto;"
  },
  {
    "question": "Qaysi usul quyi indeks sifatida tasvirlangan satrni qaytaradi?",
    "answer": "sub",
    "noAnswer1": "italics",
    "noAnswer2": "reverse",
    "noAnswer3": "fixed"
  },
  {
    "question": "Qaysi xususiyat elementning fon rangini belgilaydi?",
    "answer": "Background-color",
    "noAnswer1": "Color",
    "noAnswer2": "Font-color",
    "noAnswer3": "Background-repeat"
  },
  {
    "question": "Quyidagi HTML elementining mazmunini o'zgartirish uchun to'g'ri JavaScript sintaksisi nima?  <p id=\"demo\">Bu namoyish. </p>",
    "answer": "document.getElementById(\"demo\").innerHTML = \"Salom Dunyo!\";",
    "noAnswer1": "document.getElement(\"p\").innerHTML = \"Salom dunyo!\";",
    "noAnswer2": "document.getElementByName(\"p\").innerHTML = \"Salom Dunyo!\";",
    "noAnswer3": "demo.innerHTML = \"Salom dunyo!\";"
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang.  <b>Salom <b>",
    "answer": "Browserda Salom so`zi qalin shriftda hosil bo`ladi.",
    "noAnswer1": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil bo`ladi.",
    "noAnswer2": "Browserda Salom so`zi ostiga chizilgan holatda hosil bo`ladi.",
    "noAnswer3": "Browserda Salom so`zi ustiga chizilgan holatda hosil bo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang.  <i>Salom <i>",
    "answer": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil bo`ladi.",
    "noAnswer1": "Browserda Salom so`zi qalin shriftda hosil bo`ladi.",
    "noAnswer2": "Browserda Salom so`zi ostiga chizilgan holatda hosil bo`ladi.",
    "noAnswer3": "Browserda Salom so`zi ustiga chizilgan holatda hosil bo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang.  <s>Salom <s>",
    "answer": "Browserda Salom so`zi ustiga chizilgan holatda hosil bo`ladi.",
    "noAnswer1": "Browserda Salom so`zi ostiga chizilgan holatda hosil bo`ladi.",
    "noAnswer2": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil bo`ladi.",
    "noAnswer3": "Browserda Salom so`zi qalin shriftda hosil bo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang.  <u>Salom <u>",
    "answer": "Browserda Salom so`zi ostiga chizilgan holatda hosil bo`ladi.",
    "noAnswer1": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil bo`ladi.",
    "noAnswer2": "Browserda Salom so`zi qalin shriftda hosil bo`ladi.",
    "noAnswer3": "Browserda Salom so`zi ustiga chizilgan holatda hosil bo`ladi."
  },
  {
    "question": "Rasm qo'shish uchun  HTML qatori qaysi?",
    "answer": " <img src=\"image.gif\" alt=\"Mening rasmim\">",
    "noAnswer1": "<img alt=\"MyImage\">image.gif </img>",
    "noAnswer2": "<image src=\"image.gif\" alt=\"Mening rasmim\">",
    "noAnswer3": "<img href=\"image.gif\" alt=\"Mening rasmim\">"
  },
  {
    "question": "Reset attributini vazifasini aniqlang.",
    "answer": "Formani dastlabki kirish holatiga olib keladi.",
    "noAnswer1": "Formaga faqat text holatdagi matnlar kirishini talab qiladi.",
    "noAnswer2": "Formaga ma’lumotlar kiritishnni yakunlash",
    "noAnswer3": "Formaga faqat raqamli holdagi ma’lumotlar kirishini talab qiladi."
  },
  {
    "question": "RightMargin parametrining vazifasi nimadan iborat?",
    "answer": "Hujjatning o`ng chekasini pixel larda ifodalaydi",
    "noAnswer1": "Hujjatning quyi chegarasini pixel larda ifodalaydi.",
    "noAnswer2": "Hujjatning chap chekkasini pixel larda ifodalaydi.",
    "noAnswer3": "Hujjatning yuqori chegarasini pixel larda ifodalaydi"
  },
  {
    "question": "ROWS attributining vazifasini aniqlang.",
    "answer": "Maydonning satrlari sonini belgilaydi.",
    "noAnswer1": "Maydonning ustunlari sonini belgilaydi.",
    "noAnswer2": "Maydonning nomini belgilaydi",
    "noAnswer3": "Maydonning ustun va satrlari sonini belgilaydi"
  },
  {
    "question": "Satr uzilishini kiritish uchun to'g'ri HTML elementi nima?",
    "answer": " <br>",
    "noAnswer1": "<lb>",
    "noAnswer2": "<break>",
    "noAnswer3": "<td>"
  },
  {
    "question": "SCRIPT tegi to`g`ri keltirilgan variantni tanlang.",
    "answer": " <SCRIPT LANGUAGE= dasturlash tili>dastur matni  </SCRIPT>",
    "noAnswer1": "<SCRIPT TYPE=xujjat tipi>dastur matni  </SCRIPT>",
    "noAnswer2": "<SCRIPT NAME=dasturlash tili>dastur matni  </SCRIPT>",
    "noAnswer3": "<SCRIPT TYPE=dasturlash tili turi>dastur matni  </SCRIPT>"
  },
  {
    "question": "Scroll parametrining vazifasi nimadan iborat?",
    "answer": "Browser darchalarini harakatlantirish yo`laklarini o`rnatadi.",
    "noAnswer1": "Agar fixed qiymati o`rnatilmagan bo`lsa, fon tasviri aylantirilmaydi.",
    "noAnswer2": "Browser darchalarini formatlab ko`rsatadi.",
    "noAnswer3": "Browser darchasini moslashuvchanligini ta’minlaydi."
  },
  {
    "question": "Style attribute HTML ning qaysi qismida foydalaniladi?",
    "answer": "HTML elementlari ichida joylashadi. Ya’ni  <h1 style=””> </h1>",
    "noAnswer1": "HTML elementlaridan keyin joylashadi. Ya’ni  <h1 > < style=””> </h1>",
    "noAnswer2": "HTMLning o`zida sytle attributidan foydalanib bo`lmaydi.",
    "noAnswer3": "Faqat body elementiga ishlov berish mumkin style bilan qolgan hollarda xatolik hisoblanadi."
  },
  {
    "question": "Submit attributining vazifasini aniqlang.",
    "answer": "Formaga ma’lumotlar kiritishnni yakunlash",
    "noAnswer1": "Formani dastlabki kirish holatiga olib keladi.",
    "noAnswer2": "Formaga faqat text holatdagi matnlar kirishini talab qiladi.",
    "noAnswer3": "Formaga faqat raqamli holdagi ma’lumotlar kirishini talab qiladi."
  },
  {
    "question": "table { border: 1px solid black; }/*ushbu kod qanday jadvalni hosil qiladi.*/",
    "answer": "faqatgina jadval atrofiga chegara hosil qiladi.",
    "noAnswer1": "alohida katakli jadval hosil qiladi",
    "noAnswer2": "chegaralari juft bo'ladi",
    "noAnswer3": "chegaralar juft va katakli bo'ladi"
  },
  {
    "question": "Tashqi uslublar jadvaliga murojaat qilish uchun HTML hujjatining qaysi joyi to'g'ri?",
    "answer": " <head> bo'limida",
    "noAnswer1": "<body> bo'limida",
    "noAnswer2": "Hujjat oxirida",
    "noAnswer3": "To`g`ri javob mavjud emas"
  },
  {
    "question": "Tashqi uslublar jadvaliga murojaat qilish uchun to'g'ri HTML kod qaysi?",
    "answer": " <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">",
    "noAnswer1": "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.html\">",
    "noAnswer2": "<style src=\"mystyle.css\">",
    "noAnswer3": "<stylesheet>mystyle.css </stylesheet>"
  },
  {
    "question": "Tegishli elementlarni bir guruhga ajratish uchun qaysi tegdan foydalanish mumkin?",
    "answer": " <fieldset>  </fieldset>",
    "noAnswer1": "<mark>  </mark>",
    "noAnswer2": "<section>  </section>",
    "noAnswer3": "<wbr>  </wbr>"
  },
  {
    "question": "Ushbu elementlarning qaysi biri barcha  <jadval> elementlari hisoblanadi?",
    "answer": " <table> <tr> <td>",
    "noAnswer1": "<thead> <body> <tr>",
    "noAnswer2": "<table> <tr> <tt>",
    "noAnswer3": "<table> <head> <tfoot>"
  },
  {
    "question": "Ushbu holatda p {color: red;} p tegining property qismi qaysi?",
    "answer": "color",
    "noAnswer1": "red",
    "noAnswer2": "p{…}",
    "noAnswer3": "to'g'ri javob yo'q"
  },
  {
    "question": "Video fayllarni qo`yish uchun to'g'ri HTML elementi nima?",
    "answer": " <video>",
    "noAnswer1": "<audio>",
    "noAnswer2": "<film>",
    "noAnswer3": "<iframe>"
  },
  {
    "question": "VLink parametrining vazifasi nimadan iborat?",
    "answer": "Ishlatilgan murojaat rangini belgilaydi.",
    "noAnswer1": "Hali ko`rib chiqilmagan silkaning rangini belgilaydi.",
    "noAnswer2": "Hujjatning quyi chegaralarini pixel larda ifodalaydi",
    "noAnswer3": "Faol murojaatning rangini belgilaydi."
  },
  {
    "question": "Web sahifaga video joylashtirish uchun qaysi tegdan foydalaniladi?",
    "answer": " <video>",
    "noAnswer1": "<tt>",
    "noAnswer2": "<ul>",
    "noAnswer3": "<li>"
  },
  {
    "question": "Websaytlar odatda qanday qismlarga bo’linadi?",
    "answer": "header, menyular, content, footer",
    "noAnswer1": "content, main, footer",
    "noAnswer2": "Link, header, main,script",
    "noAnswer3": "Meta, link, body, script"
  },
  {
    "question": "WHILE sikli qanday boshlanadi?",
    "answer": "while (i  <= 10)",
    "noAnswer1": "while (i == 10)",
    "noAnswer2": "while (i  <= 10; i++)",
    "noAnswer3": "while i = 1 to 10"
  },
  {
    "question": "WML ning kengaytmasini toping.",
    "answer": "Wireless Markup Language",
    "noAnswer1": "eXtensible Markup Language",
    "noAnswer2": "Wireless Modefinition Language",
    "noAnswer3": "World Markup Language"
  },
  {
    "question": "World Wide Web bu nima?",
    "answer": "Xalqaro o'rgimchak to'ri",
    "noAnswer1": "Xalqaro pochta tarmog'i",
    "noAnswer2": "Xalqaro aloqa tarmog'i",
    "noAnswer3": "Xalqaro qidruv tizimi"
  },
  {
    "question": "World Wide Web nechanchi yillarda yaratilgan?",
    "answer": "1991-1993",
    "noAnswer1": "2000-2001",
    "noAnswer2": "1995-1996",
    "noAnswer3": "1970-1973"
  },
  {
    "question": "WWW belgi nima ma'noni anglatadi?",
    "answer": "World Wide Web",
    "noAnswer1": "World Wide Writing",
    "noAnswer2": "Word Web Wide",
    "noAnswer3": "Writing Web Wide"
  },
  {
    "question": "WWW ning asosiy tuzilish elementi nima?",
    "answer": "Web sahifa",
    "noAnswer1": "Web brauzer",
    "noAnswer2": "Web server",
    "noAnswer3": "Internet"
  },
  {
    "question": "X va y ning eng yuqori qiymatiga ega bo'lgan sonni qanday topiladi?",
    "answer": "Math.max(x, y)",
    "noAnswer1": "ceil(x, y)",
    "noAnswer2": "Math.ceil(x, y)",
    "noAnswer3": "top(x, y)"
  },
  {
    "question": "Yashirin maydon hosil qiluvchi attributni belgilang.",
    "answer": "Reset",
    "noAnswer1": "hidden",
    "noAnswer2": "disable",
    "noAnswer3": "Visible"
  },
  {
    "question": "None",
    "answer": "None",
    "noAnswer1": "None",
    "noAnswer2": "None",
    "noAnswer3": "None"
  },
  {
    "question": "HTML elementlari nimalar orqali tasvirlanadi?",
    "answer": "HTML teglari orqali",
    "noAnswer1": "HTML attributlari orqali",
    "noAnswer2": "HTML contentlari orqali",
    "noAnswer3": "HTML boshqa til funksiyalari orqali"
  },
  {
    "question": "HTML faylining kengaytmasini ko`rsating.",
    "answer": ".html",
    "noAnswer1": ".hml",
    "noAnswer2": ".xml",
    "noAnswer3": ".css"
  },
  {
    "question": "HTMLda browserdan nima uchun foydalaniladi?",
    "answer": "Browser html teglari yozilishi natijasida hosil bo`lgan sahifani ko`rsatadi",
    "noAnswer1": "Browser html dagi belgilarni ko`rsatadi",
    "noAnswer2": "Browser html teglarini ko`rsatadi",
    "noAnswer3": "Browser html teglarini tartiblangan holatini ko`rsatadi"
  },
  {
    "question": "<!DOCTYPE html> ning vazifasi nimadan iborat?",
    "answer": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTML deb belgilaydi",
    "noAnswer1": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTMLdagi kaliti",
    "noAnswer2": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTMLdan boshqa tilda ham qo`llash mumkinligi uchun kalit",
    "noAnswer3": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTMLda moslashuvchanligini ta’minlaydi"
  },
  {
    "question": "<html> elementining vazifasini ko`rsating.",
    "answer": "<html> elementi HTML sahifasining ildiz elementidir",
    "noAnswer1": "<html> elementi ochilgan fayl .html kengaytmada ekanliginibil dirib turadi.",
    "noAnswer2": "<html> elementi sahifa himoyasi uchun qo`llaniladi.",
    "noAnswer3": "<html> elementi bu HTML tilining maxsus belgisi hisoblanadi."
  },
  {
    "question": "<head> elementining vazifasini aniqlang.",
    "answer": "<head> elementi hujjat haqidagi meta ma'lumotni o'z ichiga oladi",
    "noAnswer1": "<head> elementi sahifaning bosh qismi hisoblanadi. Unga sahifaning nomi va mazmuni yoziladi.",
    "noAnswer2": "<head> elementi bu browserda ko`rinadigan sahifaning nomini kiritish uchun xizmat qiladi.",
    "noAnswer3": "<head> elementi bu maxsus belgi hisoblanib u o`zida hech qanday ma’lumot saqlamaydi."
  },
  {
    "question": "<title> elementining vazifasini belgilang.",
    "answer": "<title> elementi sahifa nomini kiritishda foydalaniladi.",
    "noAnswer1": "<title> elementi sahifaning bosh qismi hisoblanadi. Unga sahifaning nomi va mazmuni yoziladi.",
    "noAnswer2": "<title> maxsus belgi hisoblanib u o`zida hech qanday ma’lumot saqlamaydi.",
    "noAnswer3": "<title> elementi bu htmlda ahamiyatga ega bo`lgan element hisoblanadi. Unga hech nima yozmasa ham bo`laveradi."
  },
  {
    "question": "<body> elementining vazifasini belgilang.",
    "answer": "<body> elementi ko'rinadigan sahifa tarkibiga ega.",
    "noAnswer1": "<body> elementi sahifa nomini kiritishda foydalaniladi.",
    "noAnswer2": "<body> maxsus belgi hisoblanib u o`zida hech qanday ma’lumot saqlamaydi.",
    "noAnswer3": "<body> elementi sahifaning bosh qismi hisoblanadi. Unga sahifaning nomi va mazmuni yoziladi."
  },
  {
    "question": "<h1> elementi nima vazifani bajaradi?",
    "answer": "<h1> elementi katta sarlavhani belgilaydi",
    "noAnswer1": "<h1> elementi kichik sarlavhani belgilaydi.",
    "noAnswer2": "<h1> elementi sarlavha hosil qiladi.",
    "noAnswer3": "<h1> elementi uzun chiziq hosil qiladi."
  },
  {
    "question": "<p> elementi nima vazifani bajaradi?",
    "answer": "<p> elementi sarlavha hosil qilish uchun foydalaniladi",
    "noAnswer1": "<p> elementi kata sarlavhani belgilaydi",
    "noAnswer2": "<p> elementi kichik sarlavhani belgilaydi.",
    "noAnswer3": "<p> elementi uzun chiziq hosil qilishda foydalaniladi."
  },
  {
    "question": "HTML da qanday teglar mavjud?",
    "answer": "Juft va toq",
    "noAnswer1": "Faqat juft",
    "noAnswer2": "Faqat toq",
    "noAnswer3": "Hech qanday teglar mavjud emas"
  },
  {
    "question": "Browserda HTML ning qaysi qisminigina ko`rish mumkin>",
    "answer": "<body>…</body> faqat shu elementlar orasidagi qismni ko`rish mumkin.",
    "noAnswer1": "HTML boshlanishidan to oxirigacha bo`lgan jarayonni ko`rish mumkin.",
    "noAnswer2": "Faqat <title>…</title> qismni ko`rish mumkin.",
    "noAnswer3": "Browser html ning hech bir qisnmini ko`rsatmaydi."
  },
  {
    "question": "HTML ning versiyalari keltirilgan javobni ko`rsating.",
    "answer": "HTML-1991,HTML 2.0-1995, HTML 3.2-v1997, HTML 4.01-v1999, XHTML-2000, HTML5-2014.",
    "noAnswer1": "HTML-1994, HTML 2.0-1995, HTML 3.2- 1997, HTML 4.01-1999, XHTML-2000, HTML5-2014.",
    "noAnswer2": "HTML-1991, HTML 2.0-1995, HTML 3.2-1997, HTML5-2014.",
    "noAnswer3": "HTML-1991, HTML 2.0-1995, HTML 3.2-1997, HTML 4.01-1999, XHTML-2000, HTML5-2018."
  },
  {
    "question": "<body>  <h1> Salom TATU  <p>Men Tatu da o`qiyman va hozir oraliq nazoratda o`tirimman!</p> </body> Mana shu yozilgan dasturdai xatolikni aniqlang!",
    "answer": "<h1> juft teg hisoblanadi. Bu misolda u toq teg bo`lib qolgan.</h1> qolib ketgan.",
    "noAnswer1": "<p> toq teg hisoblanadi. Bu misolda u juft teg bo`lib qolgan. </p> ortiqcha.",
    "noAnswer2": "Bu dasturda <h1> va <p> xato qo`llanilgan.Ularni bir vaqtda qo`llab bo`lmaydi.",
    "noAnswer3": "Bu dastur yozilishida hech qanday xatolik mavjud emas."
  },
  {
    "question": "HTML da murojaat qaysi teg orqali hosil qilinadi",
    "answer": "<a>",
    "noAnswer1": "<br>",
    "noAnswer2": "<hr>",
    "noAnswer3": "<href>"
  },
  {
    "question": "HTML tilida murojaatni boshqa manzilga yo`naltirish uchun qaysi attrubutdan foydalaniladi?",
    "answer": "href",
    "noAnswer1": "link",
    "noAnswer2": "src",
    "noAnswer3": "type"
  },
  {
    "question": "HTML da sahifaga rasm joylash uchun foydalaniladigan teg nomini belgilang.",
    "answer": "<img>",
    "noAnswer1": "<source>",
    "noAnswer2": "<image>",
    "noAnswer3": "<pic>"
  },
  {
    "question": "HTML da jadval hosil qilishda foydalaniladigan tegni belgilang.",
    "answer": "<table></table>",
    "noAnswer1": "<table>",
    "noAnswer2": "<table td>",
    "noAnswer3": "<table tr>"
  },
  {
    "question": "HTML dagi sahifaga ishlov berish uchun qaysi attributdan foydalaniladi?",
    "answer": "style",
    "noAnswer1": "design",
    "noAnswer2": "describe",
    "noAnswer3": "canvas"
  },
  {
    "question": "Style attribute HTML ning qaysi qismida foydalaniladi?",
    "answer": "HTML elementlari ichida joylashadi. Ya’ni <h1 style=””></h1>",
    "noAnswer1": "HTML elementlaridan keyin joylashadi. Ya’ni <h1 >< style=””></h1>",
    "noAnswer2": "HTMLning o`zida sytle attributidan foydalanib bo`lmaydi.",
    "noAnswer3": "Faqat body elementiga ishlov berish mumkin style bilan qolgan hollarda xatolik hisoblanadi."
  },
  {
    "question": "Background-color xususiyati nima vazifani bajaradi?",
    "answer": "HTML da fon rangini tanlash uchun foydalaniladi.",
    "noAnswer1": "HTML da yozuv rangini tanlash uchun foydalaniladi.",
    "noAnswer2": "HTML da yozuv shriftini tanlashda foydalaniladi.",
    "noAnswer3": "HTML da yozuv shaklini tanlashda foydalaniladi."
  },
  {
    "question": "HTML da Color xususiyati nima vazifa bajaradi?",
    "answer": "Yozuv rangini tanlash",
    "noAnswer1": "Fon rangini tanlash",
    "noAnswer2": "Yozuv shriftini tanlash",
    "noAnswer3": "Jadval rangini tanlash"
  },
  {
    "question": "<h1 style=”color: yellow;”> Salom Dunyo</h1> shu dasturning natijasida nima hosil bo`ladi?",
    "answer": "Sariq rangda katta shriftdaa Salom dunyo degan so`z hosil bo`ladi.",
    "noAnswer1": "Sariq rangda kichkina shriftda Salom dunyo degan so`z hosil bo`ladi.",
    "noAnswer2": "Hech narsa hosil bo`lmaydi. Sabab style xato qo`llanilgan.",
    "noAnswer3": "Sariq rangda abzasdan katta shriftda Salom dunyo degan so`z hosil bo`ladi."
  },
  {
    "question": "HTML da text-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini gorizontal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer1": "HTML elementlarini vertikal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer2": "HTML elementlarini gorizontal va vertical o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer3": "HTML elementlarini joylashuvini amalga oshiradi."
  },
  {
    "question": "HTML da vertical-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini vertikal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer1": "HTML elementlarini gorizontal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer2": "HTML elementlarini gorizontal va vertikal o`q bo`yicha joylashuvini amalga oshiradi.",
    "noAnswer3": "HTML elementlarini joylashuvini amalga oshiradi."
  },
  {
    "question": "HTML da <b>..</b> Elementining vazifasi nima?",
    "answer": "HTML sahifasidagi yozuvni qalin bold holatga o`tkazish uchun qo`llaniladi.",
    "noAnswer1": "HTML sahifasidagi yozuvni egri italic holatga o`tkazish uchun qo`llaniladi.",
    "noAnswer2": "HTML sahifasidagi yozuvni tagi chizilgan underline holatga o`tkazish uchun qo`llaniladi.",
    "noAnswer3": "HTML sahifasidagi yozuvni shriftini o`zgartirish uchun qo`llaniladi."
  },
  {
    "question": "HTML da izoh to`g`ri yozilgan qatorni ko`rsating.",
    "answer": "<! - - Bu izoh - - >",
    "noAnswer1": "// Bu izoh",
    "noAnswer2": "/* Bu izoh */",
    "noAnswer3": "<? Bu izoh ?>"
  },
  {
    "question": "CSS ning kengaytmasini to`g`ri ko`rsating.",
    "answer": "Cascading Style Sheets",
    "noAnswer1": "Cascading Style Shut",
    "noAnswer2": "Cascad Style Sheets",
    "noAnswer3": "Cascading Symbol Sheets"
  },
  {
    "question": "CSS faylga HTML dan qanday qilib bo`g`lanish mumkin?",
    "answer": "<link> elementi orqali.",
    "noAnswer1": "<script> elementi orqali",
    "noAnswer2": "<source> elementi orqali",
    "noAnswer3": "<src> elementi orqali"
  },
  {
    "question": "HTML da ro`yxatlar hosil qilish uchun qaysi tegdan foydalaniladi?",
    "answer": "<ul></ul>",
    "noAnswer1": "<table></table>",
    "noAnswer2": "<li></li>",
    "noAnswer3": "<form></form>"
  },
  {
    "question": "HTML da block hosil qiluvchi tegni belgilang.",
    "answer": "<div>",
    "noAnswer1": "<block>",
    "noAnswer2": "<class>",
    "noAnswer3": "<id>"
  },
  {
    "question": "HTML da forma hosil qiluvchi element nomini ko`rsating.",
    "answer": "<form></form>",
    "noAnswer1": "<table></table>",
    "noAnswer2": "<forma></forma>",
    "noAnswer3": "<div></div>"
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-image buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fonga biron bir rasm tanlash uchun foydalaniladi",
    "noAnswer1": "Fonga razmer olish uchun foydalaniladi.",
    "noAnswer2": "Yozuv razmerini tanlash uchun foydalaniladi.",
    "noAnswer3": "Yozuv shaklini tanlash uchun foydalaniladi."
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-size buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fon uchun tanlangan rasmning o`lchamlarini belgilashda ishlatiladi.",
    "noAnswer1": "Fonga biron bir rasm tanlash uchun foydalaniladi",
    "noAnswer2": "Fonga razmer olish uchun foydalaniladi.",
    "noAnswer3": "Yozuv razmerini tanlash uchun foydalaniladi."
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-repeat buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fon uchun tanlangan rasmning gorizontal yoki vertical o`q bo`yicha takrorlanishini amalga oshiradi.",
    "noAnswer1": "Fon uchun tanlangan rasmning o`lchamlarini belgilashda ishlatiladi.",
    "noAnswer2": "Fonga biron bir rasm tanlash uchun foydalaniladi",
    "noAnswer3": "Fonga razmer olish uchun foydalaniladi."
  },
  {
    "question": "HTML nechinchi yil, kim tomonidan ishlab chiqilgan?",
    "answer": "1990-yil, Tim Berners Li",
    "noAnswer1": "1990-yil Jon Rezig",
    "noAnswer2": "1991-yil Tim Berners Li",
    "noAnswer3": "1991-yil Jon Rezig"
  },
  {
    "question": "CSS birinchi marta qachon ishlab chiqilgan.",
    "answer": "1997-yil",
    "noAnswer1": "1998-yil",
    "noAnswer2": "1999-yil",
    "noAnswer3": "2000-yil"
  },
  {
    "question": "CSS da margin ning vazifasu nimadan iborat.",
    "answer": "Elementlar orasidagi masofani belgilaydi.",
    "noAnswer1": "Yozuvlar orasidagi masofani belgilaydi.",
    "noAnswer2": "Jadvallar orasidagi masiofani belgilaydi.",
    "noAnswer3": "Yozuv kattaligi bo`yicha tartiblaydi."
  },
  {
    "question": "CSS3 da media xususiyatining vazifasi nimadan iborat?",
    "answer": "Sahifaning istalgan qurilmada moslashuvchanligini ta’minlab beradi.",
    "noAnswer1": "Sahifa media (qo`shiq, video va boshqalarni) fayllarni yuklashda yordamchi hisoblanadi.",
    "noAnswer2": "Sahifaga turli ma’lumotlarni shriftlangan holatda qo`shilishini ta’minlaydi.",
    "noAnswer3": "Sahifa o`lchamlari bila ishlaydi."
  },
  {
    "question": "CSS3 filter xususiyatidan asosan qaysi elementda ko`p foydalaniladi.",
    "answer": "Asosan <img>, rasmlar ustida ish olib borilganda foydalaniladi.",
    "noAnswer1": "Asosan body qismda ko`p foydalaniladi.",
    "noAnswer2": "Asosan yozuvlar bilan ishlaganda, <h1>….</h>, <h6> ….. </h6> larda ko`proq foydalaniladi.",
    "noAnswer3": "Asosan <table> ..</table> ko`p foydalaniladi."
  },
  {
    "question": "Forma ma’lumotlarni jo’natish manzili qaysi attribut yordamida ko’rsatiladi?",
    "answer": "action",
    "noAnswer1": "href",
    "noAnswer2": "Src",
    "noAnswer3": "form"
  },
  {
    "question": "CSS3 dagi translate xususiyatining vazifasi nimadan iborat.",
    "answer": "Blocklarni X va Y o`qi bo`yicha joylashuvini belgilaydi.",
    "noAnswer1": "Blocklarni joylashuvini belgilaydi.",
    "noAnswer2": "Blocklarni harakatga keltiradi.",
    "noAnswer3": "Bunday xususiyat mavjud emas."
  },
  {
    "question": "CSS ning kengaytmasi to'g'ri ko'rsatilgan javobni toping",
    "answer": "cascading style sheets",
    "noAnswer1": "cascading sources sheets",
    "noAnswer2": "cascading  sheets style",
    "noAnswer3": "cascading  shields style"
  },
  {
    "question": "CSS bloklar modeli nimalarda iborat?",
    "answer": "margin, border, padding va content",
    "noAnswer1": "border",
    "noAnswer2": "margin va padding",
    "noAnswer3": "padding va content"
  },
  {
    "question": "<div>, <h1> - <h6>, <p>, <form>, <header>, <footer>, <section>  ushbu teglar qanday umumiy jihatga ega?",
    "answer": "Block-level elementlar",
    "noAnswer1": "Inline elementlar",
    "noAnswer2": "Box elementlar",
    "noAnswer3": "Turkumli elementlar"
  },
  {
    "question": "Qaysi CSS atributi elementlarni ekranga qay tarzda chiqarish kerakligini ifodalaydi",
    "answer": "Display()",
    "noAnswer1": "color()",
    "noAnswer2": "background()",
    "noAnswer3": "size()"
  },
  {
    "question": "Element ko'rinmas yoki ko'rinadigan holda bo'lishi kerakligini aniqlaydi",
    "answer": "visibility",
    "noAnswer1": "Display",
    "noAnswer2": "background()",
    "noAnswer3": "size()"
  },
  {
    "question": "qaysi style gorizontal yo'nalish bo'yicha eng o'rta qismiga joylashtirishishi mumkin?",
    "answer": "margin: auto;",
    "noAnswer1": "width: auto;",
    "noAnswer2": "height:auto;",
    "noAnswer3": "max-height:auto;"
  },
  {
    "question": "Qaysi CSS xususiyati element qayerga joylashtirilish kerakligini aniqlash uchun ishlatiladi?",
    "answer": "Position",
    "noAnswer1": "Condition",
    "noAnswer2": "auto",
    "noAnswer3": "Fixed"
  },
  {
    "question": "Position xususiyatining nech xil qiymati mavjud?",
    "answer": "4",
    "noAnswer1": "3",
    "noAnswer2": "2",
    "noAnswer3": "1"
  },
  {
    "question": "o'zgarmas position xususiyatini toping",
    "answer": "fixed",
    "noAnswer1": "top",
    "noAnswer2": "static",
    "noAnswer3": "Absolute"
  },
  {
    "question": "Qaysi javobda havola sichqoncha ustidagi holat kodi berilgan",
    "answer": "a:hover.",
    "noAnswer1": "a:visited",
    "noAnswer2": "a:link",
    "noAnswer3": "a:active"
  },
  {
    "question": "CSS shrift turlari qaysilar kiradi",
    "answer": "generic family, font family.",
    "noAnswer1": "font family, font style",
    "noAnswer2": "font style, generic family",
    "noAnswer3": "generic style, font family"
  },
  {
    "question": "table { border: 1px solid black; }/*ushbu kod qanday jadvalni hosil qiladi.*/",
    "answer": "faqatgina jadval atrofiga chegara hosil qiladi.",
    "noAnswer1": "alohida katakli jadval hosil qiladi",
    "noAnswer2": "chegaralari juft bo'ladi",
    "noAnswer3": "chegaralar juft va katakli bo'ladi"
  },
  {
    "question": "WML ning kengaytmasini toping.",
    "answer": "Wireless Markup Language",
    "noAnswer1": "eXtensible Markup Language",
    "noAnswer2": "Wireless Modefinition Language",
    "noAnswer3": "World Markup Language"
  },
  {
    "question": "HTML bilan ishlovchi muhitlarni belgilang.",
    "answer": "Hamma javoblar to`g`ri",
    "noAnswer1": "SublimeText",
    "noAnswer2": "Notepad",
    "noAnswer3": "Dreamweaver"
  },
  {
    "question": "HTML qaysi tilga asoslangan holda ishlab chiqilgan.",
    "answer": "SGML",
    "noAnswer1": "WML",
    "noAnswer2": "XML",
    "noAnswer3": "XHTML"
  },
  {
    "question": "Browser nima?",
    "answer": "Maxsus HTML tilida yaratilgan hujjatlarni o`quvchi kompyuter dasturi",
    "noAnswer1": "HTML tilida yaratilgan teglarni o`quvchi dastur.",
    "noAnswer2": "HTML ni ekranda ko`rsatib beradigan qurilma.",
    "noAnswer3": "Faqat HTML emas balki istalgan dasturlash tilida yozilgan dasturlarni tasvirlovchi dastur."
  },
  {
    "question": "PHPda boshqa fayldagi ma’lumotlarni yuklash funksiyasi qaysi",
    "answer": "include",
    "noAnswer1": "add",
    "noAnswer2": "src",
    "noAnswer3": "href"
  },
  {
    "question": "PHP dasturida o’zgarmas qaysi buyruq yordamida e’lon qilinadi?",
    "answer": "define",
    "noAnswer1": "int",
    "noAnswer2": "const",
    "noAnswer3": "phpinfo"
  },
  {
    "question": "Alink parametrining vazifasi nimadan iborat?",
    "answer": "Faol murojaatning rangini belgilaydi.",
    "noAnswer1": "Hujjatning quyi chegaralarini pixel larda ifodalaydi",
    "noAnswer2": "Hali ko`rib chiqilmagan silkaning rangini belgilaydi.",
    "noAnswer3": "Ishlatilgan murojaat rangini belgilaydi."
  },
  {
    "question": "Link parametrining vazifasi nimadan iborat?",
    "answer": "Hali ko`rib chiqilmagan silkaning rangini belgilaydi.",
    "noAnswer1": "Hujjatning quyi chegaralarini pixel larda ifodalaydi",
    "noAnswer2": "Faol murojaatning rangini belgilaydi.",
    "noAnswer3": "Ishlatilgan murojaat rangini belgilaydi."
  },
  {
    "question": "VLink parametrining vazifasi nimadan iborat?",
    "answer": "Ishlatilgan murojaat rangini belgilaydi.",
    "noAnswer1": "Hali ko`rib chiqilmagan silkaning rangini belgilaydi.",
    "noAnswer2": "Hujjatning quyi chegaralarini pixel larda ifodalaydi",
    "noAnswer3": "Faol murojaatning rangini belgilaydi."
  },
  {
    "question": "Body tegining Background parametric qanday vazifa bajaradi?",
    "answer": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilini belgilaydi.",
    "noAnswer1": "Hujjat fonining rangini belgilaydi",
    "noAnswer2": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilsiz chaqirishni belgilaydi.",
    "noAnswer3": "Hujjat fonining rangini URL manzil bilan chaiqirishni belgilaydi"
  },
  {
    "question": "BottomMargin parametrining vazifasi qanday?",
    "answer": "Hujjatning quyi chegarasini pixel larda ifodalaydi.",
    "noAnswer1": "Hujjatning yuqori chegarasini pixel larda ifodalaydi",
    "noAnswer2": "Hujjatning o`ng chekasini pixel larda ifodalaydi",
    "noAnswer3": "Hujjatning chap chekkasini pixel larda ifodalaydi."
  },
  {
    "question": "LeftMargin parametrining vazifasi nimadan iborat?",
    "answer": "Hujjatning chap chekkasini pixel larda ifodalaydi.",
    "noAnswer1": "Hujjatning quyi chegarasini pixel larda ifodalaydi.",
    "noAnswer2": "Hujjatning yuqori chegarasini pixel larda ifodalaydi",
    "noAnswer3": "Hujjatning o`ng chekasini pixel larda ifodalaydi"
  },
  {
    "question": "RightMargin parametrining vazifasi nimadan iborat?",
    "answer": "Hujjatning o`ng chekasini pixel larda ifodalaydi",
    "noAnswer1": "Hujjatning quyi chegarasini pixel larda ifodalaydi.",
    "noAnswer2": "Hujjatning chap chekkasini pixel larda ifodalaydi.",
    "noAnswer3": "Hujjatning yuqori chegarasini pixel larda ifodalaydi"
  },
  {
    "question": "BgColor parametrining vazifasi nimadan iborat?",
    "answer": "Hujjat fonining rangini belgilaydi.",
    "noAnswer1": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilini belgilaydi.",
    "noAnswer2": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilsiz chaqirishni belgilaydi.",
    "noAnswer3": "Hujjat fonining rangini URL manzil bilan chaiqirishni belgilaydi"
  },
  {
    "question": "BGPROPERTIES parametrining vazifasi nimadan iborat?",
    "answer": "Agar fixed qiymati o`rnatilmagan bo`lsa, fon tasviri aylantirilmaydi.",
    "noAnswer1": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilini belgilaydi.",
    "noAnswer2": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL- manzilsiz chaqirishni belgilaydi.",
    "noAnswer3": "Hujjat fonining rangini URL manzil bilan chaiqirishni belgilaydi"
  },
  {
    "question": "Scroll parametrining vazifasi nimadan iborat?",
    "answer": "Browser darchalarini harakatlantirish yo`laklarini o`rnatadi.",
    "noAnswer1": "Agar fixed qiymati o`rnatilmagan bo`lsa, fon tasviri aylantirilmaydi.",
    "noAnswer2": "Browser darchalarini formatlab ko`rsatadi.",
    "noAnswer3": "Browser darchasini moslashuvchanligini ta’minlaydi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <b>Salom<b>",
    "answer": "Browserda Salom so`zi qalin shriftda hosil bo`ladi.",
    "noAnswer1": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil bo`ladi.",
    "noAnswer2": "Browserda Salom so`zi ostiga chizilgan holatda hosil bo`ladi.",
    "noAnswer3": "Browserda Salom so`zi ustiga chizilgan holatda hosil bo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <i>Salom<i>",
    "answer": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil bo`ladi.",
    "noAnswer1": "Browserda Salom so`zi qalin shriftda hosil bo`ladi.",
    "noAnswer2": "Browserda Salom so`zi ostiga chizilgan holatda hosil bo`ladi.",
    "noAnswer3": "Browserda Salom so`zi ustiga chizilgan holatda hosil bo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <u>Salom<u>",
    "answer": "Browserda Salom so`zi ostiga chizilgan holatda hosil bo`ladi.",
    "noAnswer1": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil bo`ladi.",
    "noAnswer2": "Browserda Salom so`zi qalin shriftda hosil bo`ladi.",
    "noAnswer3": "Browserda Salom so`zi ustiga chizilgan holatda hosil bo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <s>Salom<s>",
    "answer": "Browserda Salom so`zi ustiga chizilgan holatda hosil bo`ladi.",
    "noAnswer1": "Browserda Salom so`zi ostiga chizilgan holatda hosil bo`ladi.",
    "noAnswer2": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil bo`ladi.",
    "noAnswer3": "Browserda Salom so`zi qalin shriftda hosil bo`ladi."
  },
  {
    "question": "…- bu oldindan formatlashtirilgan matnning qo’llanilishidir.",
    "answer": "<pre>",
    "noAnswer1": "<br>",
    "noAnswer2": "<hr>",
    "noAnswer3": "<var>"
  },
  {
    "question": "….- web dasturlashda foydalanuvchi tomonidan kiritilayotgan ma’lumotlarni tartibga solish uchun qo`llaniladi.",
    "answer": "Formalar",
    "noAnswer1": "Jadvallar",
    "noAnswer2": "Teglar",
    "noAnswer3": "Attributlar"
  },
  {
    "question": "Forma elementi hisoblangan <form></form> asosan qaysi tegdan tashkil qopgan.",
    "answer": "<input>",
    "noAnswer1": "<src>",
    "noAnswer2": "<href>",
    "noAnswer3": "<submit>"
  },
  {
    "question": "Formada method xususiyatining paramaterli necha xil bo`ladi?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "Method xususiyatlarini tog`ri belgilang.",
    "answer": "“GET” va “POST”",
    "noAnswer1": "“GET”, “POST”, “SECRET”",
    "noAnswer2": "“GET”",
    "noAnswer3": "“POST”"
  },
  {
    "question": "Formada menyularni qaysi element orqali hosil qilinadi?",
    "answer": "<select>",
    "noAnswer1": "<option>",
    "noAnswer2": "<nav>",
    "noAnswer3": "<ul>"
  },
  {
    "question": "<Select> elementiga ma’lumotlar qaysi element yordamida kiritiladi?",
    "answer": "<option>",
    "noAnswer1": "<nav>",
    "noAnswer2": "<ul>",
    "noAnswer3": "<li>"
  },
  {
    "question": "Inputga matnli ma’lumot kiritish uchun type=” ? ” nima yozilishi kerak?",
    "answer": "text",
    "noAnswer1": "checkbox",
    "noAnswer2": "password",
    "noAnswer3": "Mail"
  },
  {
    "question": "Formada bir nechta ma’lumotlar ichidan faqat birini tanlash imkoniyatini beruvchi elementni aniqlang?",
    "answer": "radio",
    "noAnswer1": "checkbox",
    "noAnswer2": "area",
    "noAnswer3": "Password"
  },
  {
    "question": "Formada bir nechta ma’lumotlar ichidan istalganini tanlash imkoniyatini beruvchi elementni aniqlang?",
    "answer": "checkbox",
    "noAnswer1": "radio",
    "noAnswer2": "area",
    "noAnswer3": "Password"
  },
  {
    "question": "Reset attributini vazifasini aniqlang.",
    "answer": "Formani dastlabki kirish holatiga olib keladi.",
    "noAnswer1": "Formaga faqat text holatdagi matnlar kirishini talab qiladi.",
    "noAnswer2": "Formaga ma’lumotlar kiritishnni yakunlash",
    "noAnswer3": "Formaga faqat raqamli holdagi ma’lumotlar kirishini talab qiladi."
  },
  {
    "question": "Submit attributining vazifasini aniqlang.",
    "answer": "Formaga ma’lumotlar kiritishnni yakunlash",
    "noAnswer1": "Formani dastlabki kirish holatiga olib keladi.",
    "noAnswer2": "Formaga faqat text holatdagi matnlar kirishini talab qiladi.",
    "noAnswer3": "Formaga faqat raqamli holdagi ma’lumotlar kirishini talab qiladi."
  },
  {
    "question": "Yashirin maydon hosil qiluvchi attributni belgilang.",
    "answer": "Reset",
    "noAnswer1": "hidden",
    "noAnswer2": "disable",
    "noAnswer3": "Visible"
  },
  {
    "question": "Ko`p satrli ma’lumotlar kiritish imkonini beruvchi attributni belgilang.",
    "answer": "textarea",
    "noAnswer1": "text",
    "noAnswer2": "string",
    "noAnswer3": "Password"
  },
  {
    "question": "COLS attributining vazifasini aniqlang.",
    "answer": "Maydonning ustunlari sonini belgilaydi.",
    "noAnswer1": "Maydonning satrlari sonini belgilaydi.",
    "noAnswer2": "Maydonning ustun va satrlari sonini belgilaydi",
    "noAnswer3": "Maydonning nomini belgilaydi"
  },
  {
    "question": "ROWS attributining vazifasini aniqlang.",
    "answer": "Maydonning satrlari sonini belgilaydi.",
    "noAnswer1": "Maydonning ustunlari sonini belgilaydi.",
    "noAnswer2": "Maydonning nomini belgilaydi",
    "noAnswer3": "Maydonning ustun va satrlari sonini belgilaydi"
  },
  {
    "question": "HTML da freymlar asosan qaysi versiyadan boshlab qo`llanilgan?",
    "answer": "HTML 3.2",
    "noAnswer1": "HTML 4.0",
    "noAnswer2": "HTML5",
    "noAnswer3": "XHTML"
  },
  {
    "question": "Browserlar HTML freymlarini asosan qaysi versiyadan boshlab tushuna boshladi?",
    "answer": "HTML 4.0",
    "noAnswer1": "HTML 3.2",
    "noAnswer2": "HTML 5.0",
    "noAnswer3": "XHTML"
  },
  {
    "question": "HTML da freym tizimini joriy qilish uchun qaysi teglardan foydalaniladi?",
    "answer": "Hamma javoblar to`g`ri",
    "noAnswer1": "<FRAMESET>",
    "noAnswer2": "<FRAME>",
    "noAnswer3": "<NOFRAME>"
  },
  {
    "question": "CSS3 dan foydalanganda kursor olib borilgan holat qanday belgilanadi?",
    "answer": ":hover;",
    "noAnswer1": ":visited;",
    "noAnswer2": ":focus;",
    "noAnswer3": ":active;"
  },
  {
    "question": "CSS3 dan foydalanganda tashrif buyurilgan holat qanday belgilanadi?",
    "answer": ":visited;",
    "noAnswer1": ":hover;",
    "noAnswer2": ":focus;",
    "noAnswer3": ":active;"
  },
  {
    "question": "CSS3 dan foydalanganda maydonlar uchun foydalanilayotgan holat qanday belgilanadi?",
    "answer": ":focus;",
    "noAnswer1": ":visited;",
    "noAnswer2": ":hover;",
    "noAnswer3": ":active;"
  },
  {
    "question": "CSS3 dan foydalanganda Aktiv holat qanday belgilanadi?",
    "answer": ":active;",
    "noAnswer1": ":focus;",
    "noAnswer2": ":visited;",
    "noAnswer3": ":hover;"
  },
  {
    "question": "Matinni quyidagi ko'rinishda ekranga chop etish uchun qaysi tegdan foydalaniladi? Coffee Tea Milk",
    "answer": "<ul>",
    "noAnswer1": "<b>",
    "noAnswer2": "<br>",
    "noAnswer3": "<a>"
  },
  {
    "question": "O'zgaruvchi qaysi teg orqali e'lon qilinadi?",
    "answer": "<var>",
    "noAnswer1": "<b>",
    "noAnswer2": "<br>",
    "noAnswer3": "<a>"
  },
  {
    "question": "Web sahifaga video joylashtirish uchun qaysi tegdan foydalaniladi?",
    "answer": "<video>",
    "noAnswer1": "<tt>",
    "noAnswer2": "<ul>",
    "noAnswer3": "<li>"
  },
  {
    "question": "Ushbu holatda p {color: red;} p tegining property qismi qaysi?",
    "answer": "color",
    "noAnswer1": "red",
    "noAnswer2": "p{…}",
    "noAnswer3": "to'g'ri javob yo'q"
  },
  {
    "question": "CSS da berilgan blokni chegarasini qizil ranga o'zgartirish uchun quyidagilardan qaysi biri ishlatiladi?",
    "answer": "border-color: red;",
    "noAnswer1": "border: red;",
    "noAnswer2": "color: red;",
    "noAnswer3": "backgrountcolor: red;"
  },
  {
    "question": "<p>Hello World!</p>  ushbu so'z rangini o'zgartirish uchun CSSda qanday style yozish kerak?",
    "answer": "p { color: red; }",
    "noAnswer1": "p { backgrount-color:red;}",
    "noAnswer2": "h1 { color: red;}",
    "noAnswer3": "p { kolor: red;"
  },
  {
    "question": "CSS identifikatori (id) tanlash uchun qanday belgidan foydalaniladi?",
    "answer": "#",
    "noAnswer1": ".",
    "noAnswer2": "ID",
    "noAnswer3": "HECH QANDAY BELGI QO'YILMAYDI"
  },
  {
    "question": "Nuqtalar o'rniga mos so'zni qo'yib jumlani to'ldiring. Id nomi  … bilan boshlanmaydi!",
    "answer": "raqam",
    "noAnswer1": "kiril harf",
    "noAnswer2": ",",
    "noAnswer3": "!"
  },
  {
    "question": "CSS jadvallarini kiritishning nechta usuli mavjud va ular qaysilar?",
    "answer": "3ta, Tashqi CSS Ichki CSS Kiritilgan CSS",
    "noAnswer1": "2ta, Ichki CSS Kiritilgan CSS",
    "noAnswer2": "2ta, Tashqi CSS Ichki CSS",
    "noAnswer3": "1ta, Ichki CSS"
  },
  {
    "question": "CSSda tashqi uslublar qanday elemen orqali bog'lanadi?",
    "answer": "<link>",
    "noAnswer1": "<style>",
    "noAnswer2": "<a>",
    "noAnswer3": "<br>"
  },
  {
    "question": "CSSda ichki uslublar qanday elemen orqali bog'lanadi?",
    "answer": "<style>",
    "noAnswer1": "<link>",
    "noAnswer2": "<a>",
    "noAnswer3": "<br>"
  },
  {
    "question": "CSSda sharhlar qanday belgilar orqali ifodalanadi?",
    "answer": "/* */",
    "noAnswer1": "//",
    "noAnswer2": "<!-- -->",
    "noAnswer3": "///"
  },
  {
    "question": "CSSda background-color ning vazifasi qanday?",
    "answer": "Sahifani orqa rangini belgilaydi",
    "noAnswer1": "Sahifani chetki qirrasini rangini belgilaydi",
    "noAnswer2": "matn rangini belgilaydi",
    "noAnswer3": "matn shiriftini o'zgartiradi"
  },
  {
    "question": "Opocity elementi qanday vazifa bajaradi?",
    "answer": "Fonning shafofligini belgilaydi",
    "noAnswer1": "matn egriligini taminlaydi",
    "noAnswer2": "matn rangini belgilaydi",
    "noAnswer3": "matn shiriftini o'zgartiradi"
  },
  {
    "question": "Cssda float nechta qiymat qabul qiladi?",
    "answer": "4ta, left, right, inherit, none;",
    "noAnswer1": "3ta, left, right, inherit;",
    "noAnswer2": "2ta left, right;",
    "noAnswer3": "tjy"
  },
  {
    "question": "Float dan keyin joylashadigan clearning both qiymat qanday vazifani bajaradi?",
    "answer": "O’ng va Chap tomondan joylashgan elementlarga ruhsat berilmaydi;",
    "noAnswer1": "O’ng  tomondan joylashgan elementlarga ruhsat berilmaydi;",
    "noAnswer2": "Chap tomondan joylashgan elementlarga ruhsat berilmaydi;",
    "noAnswer3": "Ota element qiymatini meros qilib oladi;"
  },
  {
    "question": "Css da belgilangan maydonga sig'adigan darajada katta bo'lgan tarkib bilan nima bo'lishini boshqaradigan xususiyat?",
    "answer": "overflow",
    "noAnswer1": "position",
    "noAnswer2": "display",
    "noAnswer3": "opacity"
  },
  {
    "question": "Qaysi xususiyat elementning fon rangini belgilaydi?",
    "answer": "Background-color",
    "noAnswer1": "Color",
    "noAnswer2": "Font-color",
    "noAnswer3": "Background-repeat"
  },
  {
    "question": "Css da elementlarning position xususiyati nechta qiymat qabul qilishi mumkin?",
    "answer": "5 ta",
    "noAnswer1": "6 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": "3 ta"
  },
  {
    "question": "WWW belgi nima ma'noni anglatadi?",
    "answer": "World Wide Web",
    "noAnswer1": "World Wide Writing",
    "noAnswer2": "Word Web Wide",
    "noAnswer3": "Writing Web Wide"
  },
  {
    "question": "HTML hujjat ma'nosi?",
    "answer": "Hyper Text Markup Language",
    "noAnswer1": "Hyper Text Market Language",
    "noAnswer2": "Hide Textil Markup Laught",
    "noAnswer3": "Hype Text Markup Language"
  },
  {
    "question": "HTML tili kim tomonidan barpo etilgan?",
    "answer": "Tim Berners-Li",
    "noAnswer1": "Paskal",
    "noAnswer2": "Klod Shennon",
    "noAnswer3": "Jek Kilbi"
  },
  {
    "question": "WWW ning asosiy tuzilish elementi nima?",
    "answer": "Web sahifa",
    "noAnswer1": "Web brauzer",
    "noAnswer2": "Web server",
    "noAnswer3": "Internet"
  },
  {
    "question": "World Wide Web bu nima?",
    "answer": "Xalqaro o'rgimchak to'ri",
    "noAnswer1": "Xalqaro pochta tarmog'i",
    "noAnswer2": "Xalqaro aloqa tarmog'i",
    "noAnswer3": "Xalqaro qidruv tizimi"
  },
  {
    "question": "World Wide Web nechanchi yillarda yaratilgan?",
    "answer": "1991-1993",
    "noAnswer1": "2000-2001",
    "noAnswer2": "1995-1996",
    "noAnswer3": "1970-1973"
  },
  {
    "question": "CSS ning toliq holati nechanchi yilda yaratilgan?",
    "answer": "1997",
    "noAnswer1": "1995",
    "noAnswer2": "2000",
    "noAnswer3": "1996"
  },
  {
    "question": "Faylga murojat Tegi orqali amalga oshiriladi.",
    "answer": "<head>",
    "noAnswer1": "<body>",
    "noAnswer2": "<table>",
    "noAnswer3": "<title>"
  },
  {
    "question": "CSS da asosiy fon va rang uchu vavob beradigan still xususyatlari",
    "answer": "barcha javoblar tog'ri",
    "noAnswer1": "color,background- color,background- image",
    "noAnswer2": "background- repeat,background- attachment",
    "noAnswer3": "background- position,background"
  },
  {
    "question": "<picture> elementini teglari qaysilar?",
    "answer": "<source> va <img>",
    "noAnswer1": "<source> va <audio>",
    "noAnswer2": "<audio> va <img>",
    "noAnswer3": "<p> va <img>"
  },
  {
    "question": "Websaytlar odatda qanday qismlarga bo’linadi?",
    "answer": "header, menyular, content, footer",
    "noAnswer1": "content, main, footer",
    "noAnswer2": "Link, header, main,script",
    "noAnswer3": "Meta, link, body, script"
  },
  {
    "question": "Har qanday elementlarni aylana shaklidagi burchaklarga keltirish uchun dan foydalaniladi",
    "answer": "border-radius",
    "noAnswer1": "border-style",
    "noAnswer2": "rounded-border",
    "noAnswer3": "border"
  },
  {
    "question": "Fonning bo’yaladigan qismini ko’rsatish uchun qaysi xususiyatdan foydalaniladi?",
    "answer": "background-clip",
    "noAnswer1": "background-color",
    "noAnswer2": "background-paint",
    "noAnswer3": "background-origin"
  },
  {
    "question": "Tegishli elementlarni bir guruhga ajratish uchun qaysi tegdan foydalanish mumkin?",
    "answer": "<fieldset> </fieldset>",
    "noAnswer1": "<mark> </mark>",
    "noAnswer2": "<section> </section>",
    "noAnswer3": "<wbr> </wbr>"
  },
  {
    "question": "<style> bu….?",
    "answer": "CSS stillarini kod ichida yozish imkonini beradi",
    "noAnswer1": "Brauzerdan qanday tip qo’shilayotganini beradi",
    "noAnswer2": "Qaysi tipda stillar bilan ishlash imkonini beradi",
    "noAnswer3": "Havolalarni hosil qilish"
  },
  {
    "question": "AngularJs o'zi nima?",
    "answer": "Google tomonidan ishlab chiqarilgan JavaScript\nframenwork"
  },
  {
    "question": "Audio tegining atributlarini belgilang.                1.autoplay 2.controls                                                            3.loop\n4.align                                                           5.muted\n6.default                                                    7.preload\n8.src",
    "answer": "1,2,3,5,7,8"
  },
  {
    "question": "<A>…</A> ushbu tegning vazifasi ?",
    "answer": "hujjatga giperaloqani o`rnatish."
  },
  {
    "question": "Abbreviaturaning ma’nodoshi ?",
    "answer": "Qisqartma"
  },
  {
    "question": "<ADDRESS>…</ADDRESS> ……   to’g’ri javobni ko’rsating.",
    "answer": "hujjat muallifini belgilash va adresini ko`rsatish uchun ishlatiladi."
  },
  {
    "question": "Audio tegining atributlarini belgilang\n1.autoplay                                                                    2.controls\n3.loop 4.align 5.muted 6.default 7.preload\n8.src",
    "answer": "1,2,3,5,7,8"
  },
  {
    "question": "Area tegining atributlarini belgilang . 1 acceskey\n2 align\n3 top\n4 href\n5 default\n6 shape 7size",
    "answer": "1,4,5,6;"
  },
  {
    "question": "Alink parametrining vazifasi nimadan iborat?",
    "answer": "Faol murojaatning rangini belgilaydi."
  },
  {
    "question": "Browser nima?",
    "answer": "Maxsus HTML tilida yaratilgan hujjatlarni o`quvchi\nkompyuter dasturi"
  },
  {
    "question": "Browserda HTML ning qaysi qisminigina ko`rish mumkin>",
    "answer": "<body>…</body> faqat shu elementlar orasidagi qismni ko`rish mumkin."
  },
  {
    "question": "Bdo tegida rtl atributi nima vazifani bajaradi?",
    "answer": "Yozuv o’ngdan chapga qarab yoziladi"
  },
  {
    "question": "Bitta tegni bir vaqtning o’zida ham classi ham id si bo’lishi\nmumkinmi?",
    "answer": "Ha"
  },
  {
    "question": "Border xususiyati to`g`ri qo`llangan javobni belgilang.",
    "answer": "border: 1px solid #777;"
  },
  {
    "question": "Button tegining atributi to’g’ri keltirilgan variantni tanlang.",
    "answer": "Type ."
  },
  {
    "question": "Bir xil tipli elementlar birlashmasi nima bo‘lishi mumkin?",
    "answer": "Massiv"
  },
  {
    "question": "Background-color xususiyati nima vazifani bajaradi?",
    "answer": "HTML da fon rangini tanlash uchun foydalaniladi."
  },
  {
    "question": "Birinchi marta JQuery qayerda va nechanchi yil taqdim etilgan.",
    "answer": "2006-yil Nyu_Yorkda"
  },
  {
    "question": "Box-shadow xususiyati tog`ri qo`llangan javobni belgilang.",
    "answer": "box-shadow: (2px , 2px , 2px #777);"
  },
  {
    "question": "Bugungi kunda mobil aloqa vositalaridan foydalanuvchilar uchun qanday til mavjud.",
    "answer": "WML"
  },
  {
    "question": "Body tegining Background parametric qanday vazifa bajaradi?",
    "answer": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL-\nmanzilini belgilaydi."
  },
  {
    "question": "BottomMargin parametrining vazifasi qanday?",
    "answer": "Hujjatning quyi chegarasini pixel larda ifodalaydi."
  },
  {
    "question": "BgColor parametrining vazifasi nimadan iborat?",
    "answer": "Hujjat fonining rangini belgilaydi."
  },
  {
    "question": "BGPROPERTIES parametrining vazifasi nimadan iborat?",
    "answer": "Agar fixed qiymati o`rnatilmagan bo`lsa, fon tasviri\naylantirilmaydi."
  },
  {
    "question": "BMW ga murojat qilishni korsating\n$cars = array( array(\"Volvo\",22,18),\narray(\"BMW\",15,13),\narray(\"Saab\",5,2), array(\"Land Rover\",17,15)\n);",
    "answer": "$cars[1][0]"
  },
  {
    "question": "Box-shadow xususiyati tog`ri qo`llangan javobni belgilang.",
    "answer": "box-shadow: (2px , 2px , 2px #777);"
  },
  {
    "question": "Browserlar HTML freymlarini asosan qaysi versiyadan boshlab\ntushuna boshladi?",
    "answer": "HTML 4.0"
  },
  {
    "question": "Brauzerida skriptlarni o'chirib qo'ygan yoki mijozlar skriptlarini\nqo'llab-quvvatlamaydigan foydalanuvchilar uchun qaysi elementdan foydalaniladi?",
    "answer": "<noscript>"
  },
  {
    "question": "Basefont tegining vazifasi?",
    "answer": "Koddagi yozuvni bir xil shriftda yozilishini ta’minlaydi"
  },
  {
    "question": "Big tegi……",
    "answer": "Yozuvlarni belgilangan o’lchamdan kattaroq o’chamda yozish uchun ishlatiladi"
  },
  {
    "question": "Body tegining Background parametric qanday vazifa bajaradi?",
    "answer": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL-\nmanzilini belgilaydi."
  },
  {
    "question": "Background-repeat xususiyati nechta qiymat qabul qiladi?",
    "answer": "3 ta"
  },
  {
    "question": "Barcha asosiy kodlar qaysi tegda joylashadi?",
    "answer": "Body"
  },
  {
    "question": "Blockquote tegi haqida to’g’ri  ma’lumot berilgan jumlani toping.",
    "answer": "bu teg ichidagi yozuv qo‘shtirnoqqa olinmaydi"
  },
  {
    "question": "Background-origin xususiyati nima maqsadda ishlatiladi?",
    "answer": "Fon rasmini joylashish o’rnini ko’rsatish uchun"
  },
  {
    "question": "Background-size xususiyatining cover qiymati orqali nima amalga\noshiriladi?",
    "answer": "Content maydon background-image da berilgan rasm bilan\nbutkul qoplanadi"
  },
  {
    "question": "Background-origin xususiyati nima maqsadda ishlatiladi?",
    "answer": "Fon rasmini joylashish o’rnini ko’rsatish uchun"
  },
  {
    "question": "border-image-source, border-image-slice, border-image- width, border-image-outset va border-image-repeat lar uchun qisqacha xususiyat qaysi?",
    "answer": "border-image"
  },
  {
    "question": "border-image to’g’ri ishlatilgan javobni toping",
    "answer": "border-image:"
  },
  {
    "question": "<body> elementining vazifasini belgilang.",
    "answer": "<body> elementi ko'rinadigan sahifa tarkibiga ega."
  },
  {
    "question": "…- bu oldindan formatlashtirilgan matnning qo’llanilishidir.",
    "answer": "<pre>"
  },
  {
    "question": "<br>…</br> tegi klaviaturaning qaysi tugmasiga mos keladi?",
    "answer": "Enter"
  },
  {
    "question": "<br>…</br>tegi qanday vazifani bajaradi ?",
    "answer": "Kursorni bitta pastga tushiradi"
  },
  {
    "question": "<b>...<b> ushbu tegning vazifasi nima?",
    "answer": "Teg ichidagi yozuv qalin shriftda bo’ladi"
  },
  {
    "question": "border-width elementining vazifasi qanday?",
    "answer": "fon chekka chizig'ini kengligini belgilaydi"
  },
  {
    "question": "border-color elementining vazifasi qanday?",
    "answer": "fon chekka chizig'ini rangini belgilaydi"
  },
  {
    "question": "background-image elementining vazifasi qanday?",
    "answer": "Orqa fonga rasm joylashtirish uchun"
  },
  {
    "question": "<b></b> tegiga analog bo`lgan tegni belgilang.",
    "answer": "<strong></strong>"
  },
  {
    "question": "<body> elementining vazifasini belgilang.",
    "answer": "<body> elementi ko'rinadigan sahifa tarkibiga ega."
  },
  {
    "question": "<body>  <h1> Salom TATU  <p>Men Tatu da o`qiyman va hozir oraliq nazoratda o`tirimman!</p> </body> Mana shu yozilgan dasturdai xatolikni aniqlang!",
    "answer": "<h1> juft teg hisoblanadi. Bu misolda u toq teg bo`lib qolgan. </h1> qolib ketgan."
  },
  {
    "question": "background-position elementining vazifasi qanday?",
    "answer": "fon tasviri o'rnini belgilash uchun ishlatiladi"
  },
  {
    "question": "background-repeat elementining vazifasi qanday?",
    "answer": "Fon rasmini bir marotaba ko'rsatish uchun"
  },
  {
    "question": "% binar operatori nimani ifodalaydi?",
    "answer": "Bo’linmani qoldig’ini ifodalaydi"
  },
  {
    "question": "<big>...</big> tahrirlovchi tegining vazifasini aniqlang.",
    "answer": "Shrift o`lchamini kattalashtirish"
  },
  {
    "question": "$b = intval(qiymat);\nQanday jarayon sodir bo’lmoqda?",
    "answer": "qiymat integer tipi o’zgartirilib, b o’zgaruvchiga\nberilmoqda"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, -8, -200, -220);\necho max(0, 150, 30, 20, -8, -200);\n?>",
    "answer": "-220  150"
  },
  {
    "question": "E’lon qilingan o’zgaruvchi tipini va qiymatini chiqarish funktsiyasi\nbelgilang",
    "answer": "var_dump()"
  },
  {
    "question": "E’lon qilingan o’zgaruvchilarni o’chirish funktsiyasi aniqlang.",
    "answer": "unset()"
  },
  {
    "question": "Element ko'rinmas yoki ko'rinadigan holda bo'lishi kerakligini\naniqlaydi",
    "answer": "visibility"
  },
  {
    "question": "Element hali ham avvalgidek bo'sh joyni egallaydi. Element\nyashiringan, ammo baribir tartibga ta'sir qiladi. Bu quyidagi qaysi hususiyatga to’g’ri keladi?",
    "answer": "visibility:hidden;"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Peter\"=>\"35\", \"Ben\"=>\"37\", \"Joe\"=>\"43\");",
    "answer": "Ismi: Ben."
  },
  {
    "question": "foreach($age as $ism => $yosh) { If ($yosh == “37“) {\necho \"Ismi: \" . $ism . \".\" ;\n}\n}"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Peter\"=>\"35\", \"Ben\"=>\"37\", \"Joe\"=>\"43\");\nforeach($age as $ism => $yosh) {\necho \"Ismi: \" . $ism . \", yoshi: \" . $yosh; echo \", \";\n}",
    "answer": "Ismi: Peter, yoshi: 35, Ismi: Ben, yoshi: 37, Ismi: Joe, yoshi: 43,"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Peter\"=>\"35\", \"Ben\"=>\"37\", \"Joe\"=>\"43\");\necho \"Ben \" . $age['Ben'] . \" yoshda.\";",
    "answer": "Ben 37 yoshda."
  },
  {
    "question": "Element ko’rish maydoniga nisbatan joylashtirilgan. Yani sahifa siljiganda ham u o’z joyini o’zgartirmaydi. Quyidagi qaysi\nxususiyatda shunday?",
    "answer": "position:fixed;"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Abror\"=>\"35\", \"Abduxoshim\"=>\"37\", \"Sarvinoz\"=>\"43\");\nforeach($age as $ism => $yoshi) { echo \"$yoshi, \";\n}",
    "answer": "35, 37, 43,"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\necho \"Men \" . $cars[0] . \", \" . $cars[1] . \" va \" . $cars[2] . \" larni yaxshi koraman.\";",
    "answer": "Men Volvo, BMW va Toyota larni yaxshi koraman."
  },
  {
    "question": "Ekranda funksiya yordamida “Hello world!“ sozi chiqadigon javobni belgilang.",
    "answer": "function fun() {\necho \"Hello world!\";\n}\nfun();"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Abror\"=>\"35\", \"Abduxoshim\"=>\"37\", \"Sarvinoz\"=>\"43\");\nforeach($age as $ism => $yoshl) { echo \"$ism, \";\n}",
    "answer": "Abror, Abduxoshim, Sarvinoz,"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$colors = array(\"red\", \"green\", \"blue\", \"yellow\");\nforeach ($colors as $value) { echo \"$value, \";\n}",
    "answer": "red, green, blue, yellow,"
  },
  {
    "question": "Ekranda nima hosil bo`ladi? Foreach ($x = 0; $x <= 10; $x++) {\necho $x;\n}",
    "answer": "Dasturda xatolik xosil boldi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$x = 10; do {\n$x++; echo $x;\n} while ($x < 6)",
    "answer": "Ekranda 11 soni xosil boladi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$x = 1; do {\n$x++; echo $x;\n} while ($x < 6)",
    "answer": "1 dan 6 gacha sonlar xosil boladi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$i = 1;\nwhile (1 == 1) { echo $i;\n$i++;\nIf ($i < 6) { B=break;\n}\n}",
    "answer": "1 dan 5 gacha sonlar xosil boladi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$i = 1;",
    "answer": "Shart amali cheksiz davob etadi, va ekratda cheksiz tartibda 1 soni xosil qilinadi"
  },
  {
    "question": "while ($i < 6) { echo $i;\n}"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n%n = “qizil“ Switch (%n) {\ncase “sariq“:\necho “yoqtirgan rangiz sariq“; Break;\ncase “qizil“:\necho “yoqtirgan rangiz qizil“; Break;\ncase “qora“:\necho “yoqtirgan rangiz qora“; Break;\ndefault:\necho “ishlamadi“\n}",
    "answer": "yoqtirgan rangiz qizil"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n%n = 1\nSwitch (%n) { case 2:\necho “salom dunyo!“; Break;\ncase 1:\necho “Hello world!“; Break;\ndefault:\necho “ishlamadi“\n}",
    "answer": "Hello world!"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$a = 10;\nIf ($a%2 == 1){\necho “son juft“;\n} elseif ($a == 10) { Echo “son toq“;\n}",
    "answer": "son toq"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\nEcho 15 % 4;\n?>",
    "answer": 3
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\nEcho 25 % 4;\n?>",
    "answer": 1
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php  echo(rand(10, 100));\n?>",
    "answer": "Bu sonlarni birortasi chiqmaydi. Sabab ular berilgan oraliqqa tegishli emas."
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php  echo(rand(10, 100));\n?>",
    "answer": "Barcha javoblar chiqishi mumkin."
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php  echo(rand(10, 100));\n?>",
    "answer": "Barcha javoblar chiqishi mumkin."
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php echo(rand());\n?>",
    "answer": "Barcha javoblar chiqishi mumkin."
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho sqrt(625);\n?>",
    "answer": 25
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho sqrt(64);\n?>",
    "answer": 8
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho abs(2.5);\n?>",
    "answer": 2.5
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php echo(abs(-6.7));\n?>",
    "answer": 6.7
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, -8, -200, -20);\necho max(0, 30, 20, -8, -200);\n?>",
    "answer": "-200  30"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, -8, -200, -220);\necho max(0, 150, 30, 20, -8, -200);\n?>",
    "answer": "-220  150"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, -8, -200, -220);\n?>",
    "answer": -220
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, 150, 30, 20, -8, -200);\n?>",
    "answer": -200
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho max(0, 150, 30, 20, -8, -200);\n?>",
    "answer": 150
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php echo pi();\n?>",
    "answer": 3.1415926535898
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\n$x = 59.85;\necho is_int($x);\n?>",
    "answer": 0
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\n$x = 123.9;\necho is_int($x);\n?>",
    "answer": 0
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\n$x = 1239;\necho is_int($x);\n?>",
    "answer": 1
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\n$x = 5985;\necho is_int($x);\n?>",
    "answer": 1
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strrev(\"Bu, nima bu! \");\n?>",
    "answer": "!ub amin ,uB"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strrev(\"Salom dunyo!\");\n?>",
    "answer": "!oynud molaS"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strrev(\"Hello world!\");\n?>",
    "answer": "!dlrow olleH"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho str_word_count(\"Bu, nima bu! \");\n?>",
    "answer": 3
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho str_word_count(\"Salom, dunyo! \");\n?>",
    "answer": 2
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho str_word_count(\"Hello world! \");\n?>",
    "answer": 2
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strlen(\"Bu matn uzunligi qancha?\");\n?>",
    "answer": 24
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strlen(\"Salom!\");\n?>",
    "answer": 6
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strlen(\"Hello world!\");\n?>",
    "answer": 12
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n<?php\n$txt = \"W3Schools.com\"; echo \"I love $txt!\";\n?>",
    "answer": "I love W3Schools.com!"
  },
  {
    "question": "ekranda nima hosil bo`ladi?\n<?php\n$a = 10.5;\necho $a;\n?>",
    "answer": 10.5
  },
  {
    "question": "Elementlar va psevdo-elementlar o’z ichiga qanday elememtlarni\noladi?",
    "answer": "h1, div, :before va :after kabilar"
  },
  {
    "question": "<embed> tegining majburiy atributini belgilang.",
    "answer": "SRC"
  },
  {
    "question": "em, ex, ch, rem, vw, vh, vmin, vmax o’lchamlari uzunlikning qaysi o’lchov birligi bo’limiga mansub?",
    "answer": "Relative"
  },
  {
    "question": "... elementning atrofiga border dan tashqariga chiziladigan chiziq. U\nelement boshqa elementlardan ajralib turishi uchun ishlatilishi mumkin.",
    "answer": "Outline"
  },
  {
    "question": "<em> tegi qaysi so'zning qisqartmasi?",
    "answer": "emphasis"
  },
  {
    "question": "Canvas tegi- ….",
    "answer": "JavaScript orqali turli xildagi ob’ektlarni chizish, rasm\nchiqarish, transformasiya va xususiyatlarni o`zgartirish imkoniyatiga ega maydon yaratadi"
  },
  {
    "question": "Caption tegining vazifasi?",
    "answer": "Jadvalga nom beradi"
  },
  {
    "question": "COLS attributining vazifasini aniqlang.",
    "answer": "Maydonning ustunlari sonini"
  },
  {
    "question": "Client-Side ning vazifasi nima?",
    "answer": "Javascriptni ochishga va undagi kodlarni o`zgartirish\nruxsatini bermaydi."
  },
  {
    "question": "CSS ning kengaytmasini to`g`ri ko`rsating.",
    "answer": "Cascading Style Sheets"
  },
  {
    "question": "CSS faylga HTML dan qanday qilib bo`g`lanish mumkin?",
    "answer": "<link> elementi orqali."
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-image buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fonga biron bir rasm tanlash uchun foydalaniladi"
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-size buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fon uchun tanlangan rasmning o`lchamlarini belgilashda ishlatiladi."
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-repeat\nbuyrug`ining vazifasi nimadan iborat?",
    "answer": "Fon uchun tanlangan rasmning gorizontal yoki vertical o`q\nbo`yicha takrorlanishini amalga oshiradi."
  },
  {
    "question": "CSS3 orqali bloklarga soya hosil qilsih qaysi xususiyat orqali amalga oshiriladi?",
    "answer": "box-shadow"
  },
  {
    "question": "CSS birinchi marta qachon ishlab chiqilgan.",
    "answer": "1997-yil"
  },
  {
    "question": "CSS da margin ning vazifasu nimadan iborat.",
    "answer": "Elementlar orasidagi masofani belgilaydi."
  },
  {
    "question": "CSS3 da border xususiyatining vazifasi nima?",
    "answer": "Sahifani chegaralash"
  },
  {
    "question": "CSS3 dagi translate xususiyatining vazifasi nimadan iborat.",
    "answer": "Blocklarni X va Y o`qi bo`yicha joylashuvini belgilaydi."
  },
  {
    "question": "CSS3 da media xususiyatining vazifasi nimadan iborat?",
    "answer": "Sahifaning istalgan qurilmada moslashuvchanligini\nta’minlab beradi."
  },
  {
    "question": "CSS3 orqali yozuvga soya berish qaysi xususiyat orqali amalga oshiriladi?",
    "answer": "text-shadow"
  },
  {
    "question": "CSS3 filter xususiyatidan asosan qaysi elementda ko`p foydalaniladi.",
    "answer": "Asosan <img>, rasmlar ustida ish olib borilganda\nfoydalaniladi."
  },
  {
    "question": "CSS3 bilan ishlaganda rasm faqat oq va qora rangdan iborat bo`lish\nuchun filter qanday tanlanishi kerak?",
    "answer": "Filter: grayscale(100%);"
  },
  {
    "question": "Content atrofidagi sohani tozalovchi shaffof qism nima deb ataladi?",
    "answer": "Padding"
  },
  {
    "question": "Content va Padding atrofidagi hoshiya?",
    "answer": "border"
  },
  {
    "question": "Css da elementlarning position xususiyati nechta qiymat qabul qilishi  mumkin?",
    "answer": "5 ta"
  },
  {
    "question": "Css da belgilangan maydonga sig'adigan darajada katta bo'lgan\ntarkib bilan nima bo'lishini boshqaradigan xususiyat?",
    "answer": "overflow"
  },
  {
    "question": "Cssda float nechta qiymat qabul qiladi?",
    "answer": "4ta, left, right, inherit, none;"
  },
  {
    "question": "Css da rasm ostidagi bo’shliqni qanday olib tashlash mumkin.",
    "answer": "img { display:block;}"
  },
  {
    "question": "CSS ning kengaytmasi to'g'ri ko'rsatilgan javobni toping",
    "answer": "cascading style sheets"
  },
  {
    "question": "Css da h1 ni nima deb atash mumkin?",
    "answer": "Selector"
  },
  {
    "question": "Css da color:red;  ni nima deb atash mumkin?",
    "answer": "Selector"
  },
  {
    "question": "Css da float nima?",
    "answer": "elementni maydonni qayeridan boshlab joylashishini\nbelgilaydi"
  },
  {
    "question": "CSS bloklar modeli nimalarda iborat?",
    "answer": "margin, border, padding va content"
  },
  {
    "question": "CSS ni qo'shishni nech xil yo'li mavjud?",
    "answer": 3
  },
  {
    "question": "CSS shrift turlari qaysilar kiradi",
    "answer": "generic family, font family."
  },
  {
    "question": "CSS3 dan foydalanganda kursor olib borilgan holat qanday\nbelgilanadi?",
    "answer": ":hover;"
  },
  {
    "question": "CSS3 dan foydalanganda tashrif buyurilgan holat qanday\nbelgilanadi?",
    "answer": ":visited;"
  },
  {
    "question": "CSS3 dan foydalanganda maydonlar uchun foydalanilayotgan holat qanday belgilanadi?",
    "answer": ":focus;"
  },
  {
    "question": "CSS3 dan foydalanganda Aktiv holat qanday belgilanadi?",
    "answer": ":active;"
  },
  {
    "question": "CSS da berilgan blokni chegarasini qizil ranga o'zgartirish uchun\nquyidagilardan qaysi biri ishlatiladi?",
    "answer": "border-color: red;"
  },
  {
    "question": "CSS identifikatori (id) tanlash uchun qanday belgidan foydalaniladi?",
    "answer": "#"
  },
  {
    "question": "CSSda background-color ning vazifasi qanday?",
    "answer": "Sahifani orqa rangini belgilaydi"
  },
  {
    "question": "CSS ning toliq holati nechanchi yilda yaratilgan?",
    "answer": 1997
  },
  {
    "question": "CSS qoidasiga ko'ra sahifadagi har bir",
    "answer": "*"
  },
  {
    "question": "CSS jadvallarini kiritishning nechta usuli mavjud va ular qaysilar?",
    "answer": "3ta, Tashqi CSS\nIchki CSS Kiritilgan CSS"
  },
  {
    "question": "CSSda tashqi uslublar qanday elemen orqali bog'lanadi?",
    "answer": "<link>"
  },
  {
    "question": "CSSda ichki uslublar qanday elemen orqali bog'lanadi?",
    "answer": "<style>"
  },
  {
    "question": "CSSda sharhlar qanday belgilar orqali ifodalanadi?",
    "answer": "/* */"
  },
  {
    "question": "CSS ga tegishli barcha darslar misollari…..",
    "answer": "Firefox Mozilla brouzeri orqali tekshiriladi"
  },
  {
    "question": "CSS da asosiy fon va rang uchu vavob beradigan still xususyatlari",
    "answer": "barcha javoblar tog'ri"
  },
  {
    "question": "CSS da uzunliklar nechta bo’limga bo’linadi va ular qaysilar?",
    "answer": "2 ta. Absolute va relative"
  },
  {
    "question": "CSS da elementga bir nechta orqa fon rasmlarini qo’shish uchun\nqaysi xususiyat ishlatiladi?",
    "answer": "background-image"
  },
  {
    "question": "<CITE>…</CITE> - ushbu tegning vazifasi nimadan iborat?",
    "answer": "kitob nomlari yoki sitatalar va maqolalarda boshqa manbalarga murojaat va hokazolarni belgilash uchun\nishlatiladi."
  },
  {
    "question": "cm, mm, px, in, pt, pc o’lchamlari uzunlikning qaysi o’lchov birligi\nbo’limiga mansub?",
    "answer": "Absolute"
  },
  {
    "question": "checkbox ob’ekti uchun nechta va qanday usullar mavjud?",
    "answer": "bittausul: click"
  },
  {
    "question": "Forma ma’lumotlarni jo’natish manzili qaysi attribut yordamida ko’rsatiladi?",
    "answer": "action"
  },
  {
    "question": "Filter ning qaysi xususiyati rasmni xira ko`rinishga keltiradi?",
    "answer": "Blur()"
  },
  {
    "question": "Filterning blur() xususiyati to`g`ri ishlatilgan javobni belgilang.",
    "answer": "Filter: blur(5px);"
  },
  {
    "question": "Filter ning qaysi xususiyati rasmni yorqin ko`rinishga keltiradi?",
    "answer": "Brightness()"
  },
  {
    "question": "Filterning brightness() xususiyati to`g`ri ishlatilgan javobni\nbelgilang.",
    "answer": "Filter: brightness(100%);"
  },
  {
    "question": "Filterning drop-shadow xususiyatining vazifasi nimadan iborat?",
    "answer": "Gorizontal va vertical o`q bo`yicha soya hosil qiladi."
  },
  {
    "question": "Filterning opacity() xususiyatining vazifasi nimadan iborat?",
    "answer": "Ko`rinish chegarasini o`zgartirishda qo`llaniladi."
  },
  {
    "question": "Formada method xususiyatining paramaterli necha xil bo`ladi?",
    "answer": 2
  },
  {
    "question": "Formada menyularni qaysi element orqali hosil qilinadi?",
    "answer": "<select>"
  },
  {
    "question": "Forma elementi hisoblangan <form></form> asosan qaysi tegdan tashkil qopgan.",
    "answer": "<input>"
  },
  {
    "question": "Formada bir nechta ma’lumotlar ichidan faqat birini tanlash\nimkoniyatini beruvchi elementni aniqlang?",
    "answer": "radio"
  },
  {
    "question": "Formada bir nechta ma’lumotlar ichidan istalganini tanlash imkoniyatini beruvchi elementni aniqlang?",
    "answer": "checkbox"
  },
  {
    "question": "<FRAMESET> tegining attributlarini belgilang.",
    "answer": "COLS va ROWS"
  },
  {
    "question": "Foydalanuvchi oyna bilan ishlashni tugatib, brauzer oynasini yopishi, yoki boshqa xujjatni qo`shishi Qaysi xolatni beradi?",
    "answer": "onUnload"
  },
  {
    "question": "Faylga murojat          Tegi orqali amalga oshiriladi.",
    "answer": "<head>"
  },
  {
    "question": "FORM tegining qaysi parametri CGI dasturni va to‘la berilgan parametrlarini yuklanuvchi URL adresini ko‘rsatadi?",
    "answer": "ACTION"
  },
  {
    "question": "Fonning bo’yaladigan qismini ko’rsatish uchun qaysi xususiyatdan\nfoydalaniladi?",
    "answer": "background-clip"
  },
  {
    "question": "For sikl operatori yordamida massiv elementlari murojat qilish tog`ri korsatilgan javobni toping",
    "answer": "$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\nfor($x = 0; $x < count($cars); $x++) { echo $cars[$x];\n}"
  },
  {
    "question": "<form> tegi qanday vazifani bajaradi?",
    "answer": "Veb sahifaga forma joylashtirish, forma foydalanuvchi va\nveb server bilan aloqani ta’minlab beradi"
  },
  {
    "question": "<frame> bu…?",
    "answer": "Har bir alohida freymni sozlash, bu teg nechta bo’lsa, shuncha veb sahifa bitta freymga qo’shilayotgan bo’ladi"
  },
  {
    "question": "<frameset> tegining nechta atributi mavjud?",
    "answer": "5 ta"
  },
  {
    "question": "foreach sikl operatorini boshqa sikl operatorlaridan farqli jixati niimada?",
    "answer": "Bu sikl operatorida faqat massivlar ustida ishalsh imkoni taqdim etib, bular ustisida ammallar bajarish imkonini\nberadi"
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga $a = 4, $ b = 10 deb olinsa qanday natija qaytadi?",
    "answer": 14
  },
  {
    "question": "familiya nomli o`zgaruvchi e`lon qiling",
    "answer": "$familiya;"
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga $a = 0, $ b = 10 deb olinsa qanday natija qaytadi?",
    "answer": 10
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga $a = 6, $ b = 10 deb olinsa qanday natija qaytadi?",
    "answer": 16
  },
  {
    "question": "function differ($a, $b)\n{return $a - $b;}\nYuqoridagi funksiyaga $a = 4, $ b = 10 deb olinsa qanday natija qaytadi?",
    "answer": -6
  },
  {
    "question": "function show($a)\n{return $a;}\nYuqoridagi funksiyaga $a = „Salom, dunyo!“ deb olinsa qanday natija qaytadi?",
    "answer": "Salom, dunyo!"
  },
  {
    "question": "function differ($a, $b)\n{return $a - $b;}\nYuqoridagi funksiyaga differ(4, 10) deb olinsa qanday natija qaytadi?",
    "answer": -6
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga summ(6, 10) deb olinsa qanday natija qaytadi?",
    "answer": 16
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga summ(10, 6) deb olinsa qanday natija qaytadi?",
    "answer": 16
  },
  {
    "question": "familiya nomli o`zgaruvchi e`lon qiling va unda Anvarov\nfamiliyasini o`zlashtiring",
    "answer": "$familiya = “Anvarov“;"
  },
  {
    "question": "<frameset cols=\"50%,50%\">    <frameset rows=\"50%,50%\">\n<frame src=\"cell.htm\">      <frame src=\"cell.htm\">    </frameset>\n<frameset rows=\"33%,33%,33%\">      <frame src=\"cell.htm\">\n<frame src=\"cell.htm\">      <frame src=\"cell.htm\">    </frameset>\n</frameset>  Nechta freym mavjud,",
    "answer": 5
  },
  {
    "question": "<figure>\n<img src=\"../html/pic_trulli.jpg\" alt=\"Trulli\" style=\"width:100%\">\n<figcaption>Img.1 - Trulli, Puglia, Italy.</figcaption>\n</figure> natijada figcaption tegida yozilgan matn rasmning qayerida chiqadi?",
    "answer": "rasmning ostida"
  },
  {
    "question": "Rgb(255, 0 , 0) bu qaysi rang?",
    "answer": "qizil"
  },
  {
    "question": "RightMargin parametrining vazifasi nimadan iborat?",
    "answer": "Hujjatning o`ng chekasini pixel larda ifodalaydi"
  },
  {
    "question": "Reset attributini vazifasini aniqlang.",
    "answer": "Formani dastlabki kirish holatiga olib keladi."
  },
  {
    "question": "ROWS attributining vazifasini aniqlang.",
    "answer": "Maydonning satrlari sonini belgilaydi."
  },
  {
    "question": "RGB so'zining kengaytmasi qanday?",
    "answer": "red green blue"
  },
  {
    "question": "Rasmga tekkanda xiralashgan bo’lishi uchun yoziladigan css kodi to’g’ri berilgan qatorni toping?",
    "answer": "img:hover{ opacity:0.7}"
  },
  {
    "question": "<Ruby> tegida nima mavjud?",
    "answer": "yoqutli izoh"
  },
  {
    "question": "RGBA yordamida shafoflik qanday yoziladi?",
    "answer": "div {\nbackground: rgba(0, 128, 0, 0.3)\n}"
  },
  {
    "question": "Rasmni belgilangan joyga qadash qaysi element orqali amalga\noshiriladi?",
    "answer": "background-attachment: fixed;"
  },
  {
    "question": "<ruby> tegi qaysi teglar bilan ishlatiladi?",
    "answer": "<rt> va <rp>"
  },
  {
    "question": "ranglar nomli o`zgaruvchi e`lon qiling",
    "answer": "$ranglar;"
  },
  {
    "question": "ranglar nomli o`zgaruvchi e`lon qiling va unda qora rangiini\no`zlashtiring",
    "answer": "$ranglar = “qora“;"
  },
  {
    "question": "<rp> tegidan nima uchun foydalaniladi?",
    "answer": "yoqut matni atrofidagi qavslarni qo'yish uchun"
  },
  {
    "question": "<rt> yorlig'i nimani belgilaydi?",
    "answer": "yoqimsiz annotatsiyada belgilar izohini yoki talaffuzini\nbelgilaydi"
  },
  {
    "question": "LeftMargin parametrining vazifasi nimadan iborat?",
    "answer": "Hujjatning chap chekkasini pixel larda ifodalaydi."
  },
  {
    "question": "Link parametrining vazifasi nimadan iborat?",
    "answer": "Hali ko`rib chiqilmagan silkaning rangini belgilaydi."
  },
  {
    "question": "<label> bu..?",
    "answer": "Metka orqali bog’lnishni amalga oshirib beradi"
  },
  {
    "question": "<legend> ….. orqali hosil qilingan guruhga nom berish.",
    "answer": "Fieldset"
  },
  {
    "question": "<li> bu qaysi teg ichida ishlatiladi?",
    "answer": "<ul>"
  },
  {
    "question": "<link> nima uchun ishlatiladi?",
    "answer": "Tashqi muhitd joylashgan fayllarni, veb sahifaga ulash\nuchun ishlatiladi"
  },
  {
    "question": "Date ob’ekti nima qiladi?",
    "answer": "Kompyuter soati ustida amallar bajaradi"
  },
  {
    "question": "DOM bu-…........",
    "answer": "xujjat obekt modeli"
  },
  {
    "question": "<!DOCTYPE html> ning vazifasi nimadan iborat?",
    "answer": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTML deb belgilaydi"
  },
  {
    "question": "Drop-shadow xususiyati to`g`ri ishlatilgan javobni belgilang.",
    "answer": "Filter: drop-shadow(8px, 8px, 10px, blue);"
  },
  {
    "question": "define() qanday maqsadda foydalaniladi?",
    "answer": "O`zgarmaslarni e`lon qilish uchun ishlatiladi, ya`ni\nConst bilan bir xil"
  },
  {
    "question": "do … while sikl operatorini boshqa sikl operatorlaridan farqli jixati niimada?",
    "answer": "Bu sikl operatorida bajarilishi kutilayotgan amallar eng kamida bir marotaba bajarilishligida"
  },
  {
    "question": "<div> va <span> elementlari orasidagi farq nimada?",
    "answer": "<div> elementi boshqa elementlar uchun konteyner sifatida\nko'rsatiladi, <span> elementi esa boshqa elementlar tarkibiga kiritilish uchun mo'ljallangan."
  },
  {
    "question": "<del> </del> tegining vazifasi?",
    "answer": "matnning ustidan chiziladi"
  },
  {
    "question": "<dd>  tegi qaysi teglar bilan birgalikda ishlatiladi?",
    "answer": "<dl> va <dt>"
  },
  {
    "question": "do … while sikl operatori strukturasini korsating!",
    "answer": "do {\namal;\n} while (shart)"
  },
  {
    "question": "<datalist> </datalist> tegining vazifasi?",
    "answer": "matnli maydonda kiritish sharoitida ochiluvchi ro'yxat\nyaratadi."
  },
  {
    "question": "<dfn> tegi bu…?",
    "answer": "dastur kodi"
  },
  {
    "question": "data tegining atributini belgilang.",
    "answer": "Value"
  },
  {
    "question": "<div>, <h1> - <h6>, <p>, <form>, <header>, <footer>, <section> ushbu teglar qanday umumiy jihatga ega?",
    "answer": "Block-level elementlar"
  },
  {
    "question": "dogs,tuts,cars bu-….",
    "answer": "MyVar qiymatlari boladi"
  },
  {
    "question": "d=new Date() d nimaga teng?",
    "answer": "bugungi sana va vaqtga teng"
  },
  {
    "question": "Gipermatinli xabarlarni uzatuvchi bayonnoma bu-",
    "answer": "HTTP"
  },
  {
    "question": "Giperhavola ostidagi chiziqlarni qanday bekor qilish kerak?",
    "answer": "text-decoration:none;"
  },
  {
    "question": "Gettype($a);\nagar  a o’zgaruvchini tipi noma’lum bo’lsa qanday type beradi?",
    "answer": "Unknown"
  },
  {
    "question": "Z-indexning asl qiymati nechaga teng?",
    "answer": 0
  },
  {
    "question": "Jquery bilan murojaat qilganda * selektori qanday vazifa bajaradi?",
    "answer": "Hujjatdagi barcha teglarga bo`lgan murojaatni ta’minlaydi."
  },
  {
    "question": "JavaScriptda barcha teglarga murojaat qanday amalga oshiriladi?",
    "answer": "document.getElementByTagName(‘..’);"
  },
  {
    "question": "JavaScriptda id orqali murojaat to`g`ri ko`rsatilgan javobni\nbelgilang.",
    "answer": "document.getElementById(‘..’);"
  },
  {
    "question": "JavaScriptda class orqali murojaat to`g`ri ko`rsatilgan javobni\nbelgilang.",
    "answer": "JavaScriptda class orqali murojaat mavjud emas."
  },
  {
    "question": "JQueryda barcha teglarga murojaat qanday amalga oshiriladi?",
    "answer": "$(‘….”)"
  },
  {
    "question": "JQueryda id orqali murojaat qanday amalga oshiriladi?",
    "answer": "$(‘IdNum’)"
  },
  {
    "question": "Jqueryda class nomi orqali murojaat to`g`ri ko`rsatilgan javobni\nbelgilang.",
    "answer": "jquery(‘.className’);"
  },
  {
    "question": "Jqueryda click hodisasi nima vazifa bajaradi?",
    "answer": "Sichqoncha bosilgan xolat"
  },
  {
    "question": "Jqueryda toggle() hodisasi nima vazifa bajaradi?",
    "answer": "Berilgan funksiyalarni ketma-ket bajarilishini ta’minlaydi."
  },
  {
    "question": "Jqueryda dblclick() hodisasi nima vazifa bajaradi?",
    "answer": "Ikki marta chertish"
  },
  {
    "question": "JavaScript tilidagi quyidagi funksiyaning ma’nosi nima? charAt",
    "answer": "Son qiymati"
  },
  {
    "question": "Jqueryda mousemove() hodisasi nima vazifa bajaradi?",
    "answer": "Sichqonchaning harakatlanishi"
  },
  {
    "question": "Jqueryda mouseover() hodisasi nima vazifa bajaradi?",
    "answer": "Sichqoncha olib borilganda"
  },
  {
    "question": "Jqueryda mouseout() hodisasi nima vazifa bajaradi?",
    "answer": "Sichqoncha olib qochilganda"
  },
  {
    "question": "Jqueryda hover() hodisasi nima vazifa bajaradi?",
    "answer": "Qo`l olib borilganda"
  },
  {
    "question": "Jqueryda keypress() hodisasi nima vazifa bajaradi?",
    "answer": "Klaviatura bosilgan holat"
  },
  {
    "question": "Jqueryda keydown() hodisasi nima vazifa bajaradi?",
    "answer": "Klaviatura bosib turilgan holat"
  },
  {
    "question": "Jqueryda keyup() hodisasi nima vazifa bajaradi?",
    "answer": "Klaviatura qo`yib yuborilgan holat"
  },
  {
    "question": "Jqueryda focus() hodisasi nima vazifa bajaradi?",
    "answer": "Ma’lumotlar kiritilayotgan holat"
  },
  {
    "question": "Jqueryda blur() hodisasi nima vazifa bajaradi?",
    "answer": "Fokus yo`qolgan holat"
  },
  {
    "question": "Jqueryda change() hodisasi nima vazifa bajaradi?",
    "answer": "Kiritib bo`lingan holat"
  },
  {
    "question": "Jqueryda submit() hodisasi nima vazifa bajaradi?",
    "answer": "Ma’lumotlar jo`natilgan holat"
  },
  {
    "question": "Jqueryda select() hodisasi nima vazifa bajaradi?",
    "answer": "Tanlangan holat"
  },
  {
    "question": "Jqueryning eng muhim afzaligi nimada?",
    "answer": "Animatsiyalar yaratish"
  },
  {
    "question": "Jquery da animatsiyalar bilan ishlaganda, undagi jarayonlar nima\nbilan uzviy bo`glangan bo`ladi.",
    "answer": "Vaqt bilan"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda show() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Vaqt ichida ob’yektlarni ko`rsatish"
  },
  {
    "question": "JQuery bilan ishlash uchun qaysi faylni sahifaga ulash kerak?",
    "answer": "Jquery.js"
  },
  {
    "question": "JQuerydagi barcha funksiyalar qaysi belgi orqali amalga oshiriqiladi.",
    "answer": "$"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda hide() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Vaqt ichida ob’yektni berkitish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda toggle() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Ko`rsatish va berkitish amallarini ketma-ket bajarish."
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda slidedown() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Slaydni pastga tushirish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda slideup() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Slaydni yuqoriga ko`tarish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda fadein() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Shaffoflikdan paydo qilish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda fadeout() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Shaffoflikni yo`qotish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda animate() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Animatsiyalar yaratish"
  },
  {
    "question": "Javascript birinchi marta qachon ishlab chiqilgan.",
    "answer": "1995-yil"
  },
  {
    "question": "Javascriptning javadan farqi nimada.",
    "answer": "Javascript HTML ga birlashtirish uchun mo`ljallangan"
  },
  {
    "question": "Javascriptda qanday arifmetik amallardan foydalaniladi?",
    "answer": "+, - , * , / , %, ++, --"
  },
  {
    "question": "Javascriptni tarmoq ilovalari uchun ishlatish mumkinmi?",
    "answer": "Yo`q"
  },
  {
    "question": "JavaScript dasturlash tilida o’zgaruvchilar to’g’ri e’lon qilingan\njavobni toping.",
    "answer": "$nom, nom, _nom"
  },
  {
    "question": "JQueryda berilgan buyruqlarni ketma ket bajarish holati qanday\nnomlanadi?",
    "answer": "toggle"
  },
  {
    "question": "JQuery asoschisi",
    "answer": "J.Rezig"
  },
  {
    "question": "JavaScript tilida qanday unar operatorlar mavjud?",
    "answer": "-, !, ++, --"
  },
  {
    "question": "JavaScript tilida qanday binar operatorlar mavjud?",
    "answer": "-, +, /, %"
  },
  {
    "question": "JavaScript tilida qaysi buyruqlar alohida bitlar bilan ishlaydi?",
    "answer": "&, |, ~, ^"
  },
  {
    "question": "JavaScript tilida qanday siljitish operatorlari mavjud?",
    "answer": ">>, >>>, <<"
  },
  {
    "question": "JavaScript tilida qanday munosabat operatorlari mavjud?",
    "answer": ">, >=,<,<="
  },
  {
    "question": "JavaScript tilida qanday mantiqiy operatorlar mavjud?",
    "answer": "||,&&"
  },
  {
    "question": "JavaScript tilida qanday o‘zlashtirish operatorlari mavjud?",
    "answer": "=,+=,-=,/=,"
  },
  {
    "question": "JavaScript tilida qanday ob’ektlar mavjud?",
    "answer": "vstroenniy ob’ektlar, dasturchi o‘zi yaratuvchi brauzer va\nob’ektlar ob’ektlari"
  },
  {
    "question": "JavaScript tilida qanday brauzer ob’ektlari mavjud?",
    "answer": "document, parent, frame, location"
  },
  {
    "question": "JavaScript tilida eng bosh brauzer ob’ekti hisoblanadi?",
    "answer": "window"
  },
  {
    "question": "JavaScript tilida massivlar uchun qaysi usul qo‘llaniladi?",
    "answer": "uchta usul: join, reverse, sort"
  },
  {
    "question": "JavaScript ssenariysida qaysi ob’ekt usul va kattaliklaridan\nfoydalangan holda brauzerga yuklangan xujjatning joriy vaqtdagi xolati haqida ma’lumot olish mumkin?",
    "answer": "document"
  },
  {
    "question": "JavaScript da qanday sonlar haqiqiy sonlar bo‘la oladi?",
    "answer": "0.0, -2.9, 0.7E1, 14.7e-2, 1e+308"
  },
  {
    "question": "JavaScript da \"=\", \"+=\", \"-=\", \"*=\", \"/=\", \"%=\" operatorlar qanday\nnomlanadi?",
    "answer": "O‘zlashtirish operatorlari"
  },
  {
    "question": "JavaScript da qanday shart operatorlari mavjud?",
    "answer": "if"
  },
  {
    "question": "JavaScript tilida  web sahifadagi barcha elementlar qay tarzda\njoylashitiriladi?",
    "answer": "Ierarxik"
  },
  {
    "question": "JavaScriptda onMouseOver amalining vazifasi nima?",
    "answer": "sichqoncha ko’rsatkichini yo’naltirgan payt"
  },
  {
    "question": "JavaScriptda onMouseOut  amalining vazifasi nima?",
    "answer": "sichqoncha ko’rsatkichini tashqariga olgan payt"
  },
  {
    "question": "JavaScriptda onLoad  amalining vazifasi nima?",
    "answer": "HTML hujjati ishga tushgan payt,ya’ni oyna ochilganda"
  },
  {
    "question": "JavaScriptda onUnload  amalining vazifasi nima?",
    "answer": "HTML hujjati ishni yakunlagan payt, ya‟ni oyna\nyopilganda"
  },
  {
    "question": "JavaScriptda onBlur  amalining vazifasi nima?",
    "answer": "Sichqoncha ko’rsatkichi oyna yoki freymdan tashqarida bo’lishi"
  },
  {
    "question": "JavaScriptda onChange  amalining vazifasi nima?",
    "answer": "Kontent o’zgargan payt"
  },
  {
    "question": "JavaScriptda onDragDrop amalining vazifasi nima?",
    "answer": "Ob’ektni dragdrop qilgan payt"
  },
  {
    "question": "JavaScriptda onFocus  amalining vazifasi nima?",
    "answer": "Sichqoncha ko’rsatkichini oyna yoki freymda ushlagan payt"
  },
  {
    "question": "JavaScriptda onKeyDown  amalining vazifasi nima?",
    "answer": "Ishchi tugmani bosib turgan payt"
  },
  {
    "question": "JavaScriptda onKeyPress  amalining vazifasi nima?",
    "answer": "Ishchi tugmani bosgan payt"
  },
  {
    "question": "JavaScriptda onKeyUp amalining vazifasi nima?",
    "answer": "Ishchi tugmani bosib qo’yib yuborgan payt"
  },
  {
    "question": "JavaScriptda onMouseDown   amalining vazifasi nima?",
    "answer": "Sichqonchaning tugmasi bosilgan payt"
  },
  {
    "question": "JavaScriptda onMouseMove  amalining vazifasi nima?",
    "answer": "Sichqoncha ko’rsatkichini qimirlatgan payt"
  },
  {
    "question": "JavaScriptda onMouseUp amalining vazifasi nima?",
    "answer": "Sichqonchani bosib qo’yib yoborgandan keyingi payt"
  },
  {
    "question": "JavaScriptda onSubmit  amalining vazifasi nima?",
    "answer": "Submit bo’lgan payt"
  },
  {
    "question": "JavaScriptda onSelect amalining vazifasi nima?",
    "answer": "Tanlangan payt"
  },
  {
    "question": "JavaScriptda substr-bu?",
    "answer": "Bu funksiya berilgan string toifadagi ma’lumotdan nechanchi simvoldan boshlab nechta simvol tanlab olishni\nta’minlaydi."
  },
  {
    "question": "JavaScriptda  qatorni haqiqiy songa aylantiruvchi usul?",
    "answer": "String --> float"
  },
  {
    "question": "JavaScript tilidagi quyidagi funksiyaning ma’nosi nima? charAt",
    "answer": "Son qiymati"
  },
  {
    "question": "JavaScript tilidagi quyidagi funksiyaning ma’nosi nima? indexOf",
    "answer": "Simvol"
  },
  {
    "question": "JavaScriptda toLowerCase() funksiyaning vazifasi nima?",
    "answer": "Bu funksiya rus yoki lotin alifbosidagi katta harflarni\nkichik harflarga almashtiradi."
  },
  {
    "question": "JavaScriptda alert, prompt, confirm funksiyalari qanday funksiyalar\ndeb ataladi?",
    "answer": "Xabar beruvchi"
  },
  {
    "question": "JavaScriptda Binar amal mavjudmi?",
    "answer": "Mavjud"
  },
  {
    "question": "JavaScriptda Math.abs(x) nimani hisoblaydi?",
    "answer": "Qiymatning modulini hisoblash"
  },
  {
    "question": "JavaScriptda Math.round(x) nimani hisoblaydi?",
    "answer": "X sonini butun qismini topish"
  },
  {
    "question": "JavaScriptda Math.log(x) nimani hisoblaydi?",
    "answer": "Natural  logarifmni hisoblash"
  },
  {
    "question": "JavaScriptda Math.acos(x) nimani hisoblaydi?",
    "answer": "X ning arkkosinusini hisoblash"
  },
  {
    "question": "JavaScriptda Math.asin(x)  nimani hisoblaydi?",
    "answer": "X ning arksinusini hisoblash"
  },
  {
    "question": "JavaScriptda Math.atan2(a,b) nimani hisoblaydi?",
    "answer": "Arktanges a / b bo’yich hisoblash;"
  },
  {
    "question": "JavaScriptda Math.ceil(x) nimani hisoblaydi?",
    "answer": "X ga juda yaqin sonni topish"
  },
  {
    "question": "JavaScriptda Math.max(a,b) nimani hisoblaydi?",
    "answer": "A va b sonlar ichidan eng kattasini topish"
  },
  {
    "question": "JavaScriptda Math.exp(x) nimani hisoblaydi?",
    "answer": "Exp ni hisoblash"
  },
  {
    "question": "JavaScript qaysi firma tomonidan ishlab chiqilgan?",
    "answer": "Netscape"
  },
  {
    "question": "JavaScript ssenariysida qaysi ob’ekt usul va kattaliklaridan\nfoydalangan holda brauzerga yuklangan xujjatning joriy vaqtdagi xolati haqida ma’lumot olish mumkin?",
    "answer": "document"
  },
  {
    "question": "Jumlani davom ettiring.<picture> yorlig'i ...",
    "answer": "veb-ishlab chiquvchilarga rasm manbalarini aniqlashda\nko'proq moslashuvchanlikni beradi."
  },
  {
    "question": "Jqueryni asoschisini to`g`ri belglang.",
    "answer": "Jon Rezig"
  },
  {
    "question": "Inline elementlarga quyidagilardan qaysilar kiradi?",
    "answer": "<span>, <a>, <img>"
  },
  {
    "question": "IDENTIFIKATOR nima uchun ishlatiladi",
    "answer": "butun web sahifadan faqatgina bitta elementga still berish uchun"
  },
  {
    "question": "Inputga matnli ma’lumot kiritish uchun type=” ? ” nima yozilishi\nkerak?",
    "answer": "Text"
  },
  {
    "question": "Ikki son yig`indisini qaytaruvchi funksiya tuzing:\nKiruvchi parametrlar $a va $b deb olinsin",
    "answer": "function summ($a, $b)\n{return $a + $b;}"
  },
  {
    "question": "ism nomli o`zgaruvchi e`lon qiling va unda Anvar ismini\no`zlashtiring",
    "answer": "$ism = “Anvar“;"
  },
  {
    "question": "integer qanday tip?",
    "answer": "Butun son"
  },
  {
    "question": "<ins> tegi qanday vazifani bajaradi?",
    "answer": "Yozuvni tagiga chizadi"
  },
  {
    "question": "<i></i> tegiga analog bo`lgan tegni belgilang.",
    "answer": "<em></em>"
  },
  {
    "question": "ism nomli o`zgaruvchi e`lon qiling",
    "answer": "$ism;"
  },
  {
    "question": "<i> bu…?",
    "answer": "Yozuv qiychiqroq yoziladi"
  },
  {
    "question": "<img> qanday teg?",
    "answer": "<img> qanday teg?"
  },
  {
    "question": "<input> bu teg orqali nimani yaratish mumkin?",
    "answer": "Form elementlarini"
  },
  {
    "question": "img {\ndisplay: block; margin-left: auto; margin-right: auto;}\nBunda rasm qanday chiqadi?",
    "answer": "o’ngdan chapdan o’rtada"
  },
  {
    "question": "isFinite ning vazifasi nima?",
    "answer": "butun son argumentini ifodalaydi"
  },
  {
    "question": "Yozuvni ustiga chizish uchun qaysi teglardan foydalanladi?",
    "answer": "<s>..</s>, <strike>…</strike>, <del>…</del>;"
  },
  {
    "question": "Yoqutli izohga ta'rif bering",
    "answer": "mos keladigan belgilar talaffuzi yoki ma'nosini\nko'rsatadigan asosiy matnga biriktirilgan kichik qo'shimcha matn."
  },
  {
    "question": "Yoqutli izoh ko'pincha qaysi davlat nashrlarida qo'llaniladi.",
    "answer": "Yaponiya"
  },
  {
    "question": "Yagona adresga ega va (brauzera yordamida) ochish, o‘qish\nimkoniyatiga ega bo‘lgan xujjat…",
    "answer": "Web-sahifa"
  },
  {
    "question": "Yashirin maydon hosil qiluvchi attributni belgilang.",
    "answer": "Reset"
  },
  {
    "question": "….yani matn va rasmlar joylashadigan qism?",
    "answer": "content"
  },
  {
    "question": "Qaysi atribut mavjud bo'lsa, <script> elementi bo'sh bo'lishi kerak?",
    "answer": "Src"
  },
  {
    "question": "Qaysi xususiyat yordamida element xoshiyasi uchun rasmlardan foydalansa bo’ladi?",
    "answer": "border-image"
  },
  {
    "question": "Qaysi xususiyat elementning fon rangini belgilaydi?",
    "answer": "Background-color"
  },
  {
    "question": "Qaysi tegda yozuvlar markazdan boshlab yoziladi, teglar ham\nbo’lishi mumkin?",
    "answer": "Center"
  },
  {
    "question": "Quyidagi jumlani to’ldiring     …. - abbreviaturalarni belgilash uchun ishlatiladi.",
    "answer": "<Acronym>…</acronym>"
  },
  {
    "question": "Qaysi operator yordamida formada berilgan bir nechta ro‘yxat\nichidan birini tanlash amalga oshiriladi?",
    "answer": "<SELECT>"
  },
  {
    "question": "Quyidagilardan qaysi teg toq teg hisoblanadi?",
    "answer": "col"
  },
  {
    "question": "Qaysi javobda PHP da butun qiymat qaytaradigon funksiya yaratilingan?",
    "answer": "function fun() { return 1;\n}"
  },
  {
    "question": "Qaysi javobda PHP dagi for sikl operatoridan togri foydalanilgan?",
    "answer": "for ($i = 0; $i < 10; $i++) { echo $i;\n}"
  },
  {
    "question": "Qanday xolada “Hello world“ so`zi ekranga chiqadi (nuqtalar orniga amalni tanleng)\n$a = 50;\n$b = 10;\nIf ($a … $b == 5) { Echo “Hello world“;\n}",
    "answer": "/"
  },
  {
    "question": "Qachon if shart amali ishga tushadi\n$soat = date(“H“);\nIf (t < “20“){\necho “Kech tushmabdi“;",
    "answer": "Soat 20:00 dan bolmagan xollarda"
  },
  {
    "question": "Quyidagi kod natijasida brauzerda qanday natija ko’rinadi:\nbackground: url(img.gif) right bottom;",
    "answer": "img.gif ekranda o’ng pastki burchakda chiqadi"
  },
  {
    "question": "Qaysi xususiyat yordamida element xoshiyasi uchun rasmlardan\nfoydalansa bo’ladi?",
    "answer": "border-image"
  },
  {
    "question": "Qaysi funksiya satr ko`rinishida berilgan sanani sintaksik taxlil kilib,\nuni millisekund ko`rinishiga keltiradi",
    "answer": "getSeconds()"
  },
  {
    "question": "Qaysi usul joriy oynani ko`rsatadi yoki yangisini ochadi?",
    "answer": "open"
  },
  {
    "question": "Qaysi ob’ekt ichiga yozilgan bir yoki bir nechta URL fragmentlari qismini ukish va yozishni ifodalaydi?",
    "answer": "Location"
  },
  {
    "question": "Qaysi funksiya sonni yaqinlashishi bo‘yicha yaxlitlaydi",
    "answer": "ceil(x)"
  },
  {
    "question": "Qaysi operator for yoki while sikl operatorlari bajarilishini to‘xtatadi",
    "answer": "break"
  },
  {
    "question": "Quyidagi operatsiyalar qanday nomlanadi: \"!\", \"~\", \"++\", \"--\";",
    "answer": "inkor, inkrement, dekrement"
  },
  {
    "question": "Qaysi usul quyi indeks sifatida tasvirlangan satrni qaytaradi?",
    "answer": "sub"
  },
  {
    "question": "Qanday vstroenniy JavaScript ssenariyi klasi kompyuter soati\nbo‘yicha turli holatlarni bajarishi mumkin?",
    "answer": "Date"
  },
  {
    "question": "Qaysi usul 0 dan 1gacha oraliqdagi ixtiyoriy soni qaytaradi",
    "answer": "random"
  },
  {
    "question": "Qaysi usul yordamida ekranga ikkita OK va Cancel tugmalari\nbo‘lgan muloqot oynasini chiqarish mumkin",
    "answer": "confirm"
  },
  {
    "question": "Quyida keltirilgan dasturldagi Son o’zgaruvchisining qiymatini toping.\nSon=8; Son=Son+2;",
    "answer": 10
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <b>Salom<b>",
    "answer": "Browserda Salom so`zi qalin shriftda hosil bo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <i>Salom<i>",
    "answer": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil\nbo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <u>Salom<u>",
    "answer": "Browserda Salom so`zi ostiga chizilgan holatda hosil\nbo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <s>Salom<s>",
    "answer": "Browserda Salom so`zi ustiga chizilgan holatda hosil\nbo`ladi."
  },
  {
    "question": "Qaysi tilning teglari hujjatni ekranda ko`rinishini ifodalaydi.",
    "answer": "HTML"
  },
  {
    "question": "Qaysi tilning teglari hujjatdagi ma’lumtlarni tavsiflash uchun\nishlatiladi.",
    "answer": "XML"
  },
  {
    "question": "Qaysi javobda font-style qiymatlari bor",
    "answer": "Normal, italic, oblique."
  },
  {
    "question": "Qaysi javobda havola sichqoncha ustidagi holat kodi berilgan",
    "answer": "a:hover."
  },
  {
    "question": "qaysi style gorizontal yo'nalish bo'yicha eng o'rta qismiga",
    "answer": "margin: auto;"
  },
  {
    "question": "joylashtirishishi mumkin?"
  },
  {
    "question": "Qaysi CSS xususiyati element qayerga joylashtirilish kerakligini\naniqlash uchun ishlatiladi?",
    "answer": "Position"
  },
  {
    "question": "Qaysi CSS atributi elementlarni ekranga qay tarzda chiqarish kerakligini ifodalaydi",
    "answer": "Display()"
  },
  {
    "question": "<q> tegi nimani belgilash uchun xizmat qiladi?",
    "answer": "qisqa tirnoqni"
  },
  {
    "question": "Quyidagi kodning natijasini aniqlang: background: linear-\ngradient(left top, blue, yellow);",
    "answer": "Fon rangi chap tomon yuqori qismidan boshlab ko`k va\nsariq rangda bo`yaladi."
  },
  {
    "question": "Quyidagi kodning natijasini aniqlang: background: linear- gradient(90 deg , blue, yellow);",
    "answer": "Fon rangi 90 dradus holatida ikkiga bo`lingan holda, o`ng tomondan boshlab ko`k va sariq rangda bo`yaladi."
  },
  {
    "question": "Ko`p satrli ma’lumotlar kiritish imkonini beruvchi attributni belgilang.",
    "answer": "Textarea"
  },
  {
    "question": "<kbd> bu…?",
    "answer": "Matnda, klaviaturadan kiritish kerak bo’lgan belgilarni chiqarish uchun ishlatiladi, shunda bu yozuv ajralib turadi"
  },
  {
    "question": "Matnlarni (yozuvlarni) kesish funksiyasini toping.",
    "answer": "Substr()"
  },
  {
    "question": "Method xususiyatlarini tog`ri belgilang.",
    "answer": "“GET” va “POST”"
  },
  {
    "question": "Matinni quyidagi ko'rinishda ekranga chop etish uchun qaysi tegdan foydalaniladi?\nCoffee Tea Milk",
    "answer": "<ul>"
  },
  {
    "question": "Muayyan sinfga ega elementlarni tanlash uchun qanday belgidan foydalaniladi?",
    "answer": "."
  },
  {
    "question": "Massivlarni qiymatlari boyicha saralash funksiyasini korsating.",
    "answer": "asort()"
  },
  {
    "question": "Massivlarni index si boyicha saralash funksiyasini korsating.",
    "answer": "ksort()"
  },
  {
    "question": "matnni pastga tushurish uchun qaysi tegdan foydalaniladi",
    "answer": "<br>"
  },
  {
    "question": "Massivlarni tog`ti tartibda saralash funksiyasini korsating.",
    "answer": "sort()"
  },
  {
    "question": "Massivlarni teskari tartibda saralash funksiyasini korsating.",
    "answer": "rsort()"
  },
  {
    "question": "<meter> - ...",
    "answer": "ma'lum diapazondagi yoki kasrli qiymatdagi skalyar\no'lchovni belgilaydi"
  },
  {
    "question": "<meta> bu…?",
    "answer": "Qidiruv tizimlari, va brauzerlar uchun, saytning asosiy qismi"
  },
  {
    "question": "<map> bu…?",
    "answer": "Ikkita element(teg)ni bog’lash uchun ishlatiladi"
  },
  {
    "question": "<meter> - ...",
    "answer": "ma'lum diapazondagi yoki kasrli qiymatdagi skalyar o'lchovni belgilaydi"
  },
  {
    "question": "<mark> qanday vazifani bajaradi?",
    "answer": "T.j.y"
  },
  {
    "question": "<meta> bu…?",
    "answer": "Qidiruv tizimlari, va brauzerlar uchun, saytning asosiy\nqismi"
  },
  {
    "question": "<meter> - ...",
    "answer": "ma'lum diapazondagi yoki kasrli qiymatdagi skalyar\no'lchovni belgilaydi"
  },
  {
    "question": "@media screen and (min-width: 480px){…}  quyidagi kodning vazifasi nima?",
    "answer": "Sahifa eng kichik ko`rinish holatiga o`tganda ekranning eni 480px dan kam bo`lmasligi kerak bo`ladi."
  },
  {
    "question": "Nuqtalar o`rniga kerakli qo`shimchani qo`shing:\n… “Hello World!“;",
    "answer": "echo"
  },
  {
    "question": "<nav>-tegi nimani belgilaydi?",
    "answer": "navigatsiya havolalari to'plamini"
  },
  {
    "question": "<noframes> tegi - ...",
    "answer": "bu freymlarni qo'llab-quvvatlamaydigan brauzerlar uchun\nzaxira yorlig'i"
  },
  {
    "question": "<noscript> tegi",
    "answer": "o'z brauzerida skriptlarni o'chirib qo'ygan yoki skriptni qo'llab-quvvatlamaydigan brauzerga ega bo'lgan foydalanuvchilar uchun alternativ tarkibni belgilaydi"
  },
  {
    "question": "ngAnimate bu-…..",
    "answer": "modul klasslarini qo'shib yoki olib tashlaydi"
  },
  {
    "question": "ng-controller direktivasi bu-",
    "answer": "dastur boshqaruvini belgilaydi"
  },
  {
    "question": "Novalidate bu-…",
    "answer": "har qanday standart brauzer tekshiruvini ochirib qoyadi"
  },
  {
    "question": "Null nimani ifodalaydi?",
    "answer": "bo‘sh to‘plamni ifodalash uchun maxsus belgi"
  },
  {
    "question": "Nuqtalar o'rniga mos so'zni qo'yib jumlani to'ldiring. Id nomi  …\nbilan boshlanmaydi!",
    "answer": "raqam"
  },
  {
    "question": "Nuqtalar o’rniga mos so’zni qo’ying Article tegi-saytning …..haqida\nma’lumot",
    "answer": "Tarkibi"
  },
  {
    "question": "Nuqtalar o’rniga mos so’zni qo’ying aside tegi-kontentning\nyonboshdan joylashuvchi ma’lumot,  …… gipermurojaat",
    "answer": "Arxivga"
  },
  {
    "question": "Opacity() xususiyatining to`g`ri qo`llangan javobni belgilang.",
    "answer": "filter: opacity(30%);"
  },
  {
    "question": "Opocity elementi qanday vazifa bajaradi?",
    "answer": "Fonning shafofligini belgilaydi"
  },
  {
    "question": "<ol> tegiga to'g'ri berilgan ta'rifni toping.",
    "answer": "buyurtma qilingan ro'yxatni belgilaydi."
  },
  {
    "question": "<ol> tegidagi buyurtma qilingan ro'yxat qanday tartibida bo'lishi mumkin?",
    "answer": "raqamli yoki alifbo"
  },
  {
    "question": "<output> ...",
    "answer": "yorlig'i hisob-kitob natijasini anglatadi."
  },
  {
    "question": "<optroup> tegiga ta'rif bering",
    "answer": "<optroup> ochiladigan ro'yxatda tegishli parametrlarni\nguruhlash uchun ishlatiladi."
  },
  {
    "question": "<object> tegiga ta'rif bering.",
    "answer": "HTML hujjat ichida ko'milgan ob'ektni belgilaydi."
  },
  {
    "question": "<ol type=”a”>  <li>650-  16</li>  <li>640-16</li> </ol>   Hosil\nqilingan ro`yxatning ko`rinishi qanday bo`ladi.",
    "answer": "a. 650-16 b. 640-16"
  },
  {
    "question": "<ol type=”1”>  <li>650-  16</li>  <li>640-16</li> </ol>   Hosil qilingan ro`yxatning ko`rinishi qanday bo`ladi.",
    "answer": "1. 650-16 2. 640-16"
  },
  {
    "question": "outline-style xususiyati quyidagi qiymatlarni qaysi biri yashiringan outline qabul qiladi",
    "answer": "hidden"
  },
  {
    "question": "«||», «&&» operatorlari qanday nomlanadi?",
    "answer": "mantiqiy operatorlar"
  },
  {
    "question": "Php.ini faylidagi barcha sozlash qaysi buyruq orqali ko’rish mumkin\nbo’ladi.",
    "answer": "natijalarini phpinfo();"
  },
  {
    "question": "PHP da qaysi parametr xatolik xabari darajasini aniqlaydi?",
    "answer": "display_errors [on | off]"
  },
  {
    "question": "PHP da ko‘p satrli kommentari (izoh) qanday beriladi?",
    "answer": "/* va */"
  },
  {
    "question": "Php da sessiyalarga qandek murojat qilinadi?",
    "answer": "session_start();\n$_SESSION[\"kalit\"] = \"qiymat\";"
  },
  {
    "question": "PHPda ma’lumotlarni uzatish usullarini ko’rsating",
    "answer": "POST, GET"
  },
  {
    "question": "PHP dasturida o’zgaruvchining oldiga  qanday belgi qo’yiladi?",
    "answer": "$"
  },
  {
    "question": "PHP da massivning elementlari sonini bilish uchun qaysi\nfunksiyadan foydalanilinadi?",
    "answer": "count()"
  },
  {
    "question": "PHP da sikl operatorlarini korsating",
    "answer": "while, for, do while, foreach"
  },
  {
    "question": "PHP kodlari yozilgan faylni kengaytmasi qanday bo`lishi kerak?",
    "answer": ".php"
  },
  {
    "question": "PHPda ma’lumotlarni uzatish usullarini ko’rsating",
    "answer": "POST, GET"
  },
  {
    "question": "PHP dasturida o’zgaruvchining oldiga  qanday belgi qo’yiladi?",
    "answer": "$"
  },
  {
    "question": "PHP dasturlash tili asoschisi kim?",
    "answer": "Rasmus Lerdorf"
  },
  {
    "question": "Position xususiyatining nech xil qiymati mavjud?",
    "answer": 4
  },
  {
    "question": "PHP dasturida o’zgarmas qaysi buyruq yordamida e’lon qilinadi?",
    "answer": "define"
  },
  {
    "question": "<Param> tegi nima uchun ishlatiladi?",
    "answer": "<object> elementi bilan o'rnatilgan plaginlar uchun\nparametrlarni aniqlash uchun ishlatiladi"
  },
  {
    "question": "PHPda boshqa fayldagi ma’lumotlarni yuklash funksiyasi qaysi",
    "answer": "include"
  },
  {
    "question": "<p>Hello World!</p>  ushbu so'z rangini o'zgartirish uchun CSSda qanday style yozish kerak?",
    "answer": "p {\ncolor: red; }"
  },
  {
    "question": "<p></p> tegi qanday teg hisoblanadi?",
    "answer": "inline"
  },
  {
    "question": "<p></p> tegi nimani belgilaydi?",
    "answer": "xatni belgilaydi"
  },
  {
    "question": "<pre> yorlig'ining vazifai nima?",
    "answer": "oldindan formatlangan matnni belgilash"
  },
  {
    "question": "<picture> elementini teglari qaysilar?",
    "answer": "<source> va <img>"
  },
  {
    "question": "<picture> elementi necha xil tegdan iborat?",
    "answer": "2 xil"
  },
  {
    "question": "<progress> tegi nimani anglatadi?",
    "answer": "vazifaning bajarilishini anglatadi"
  },
  {
    "question": "HTML so`zining kengaytmasi nima?",
    "answer": "Hyper Text Markup Language"
  },
  {
    "question": "HTML elementlari nimalar orqali tasvirlanadi?",
    "answer": "HTML teglari orqali"
  },
  {
    "question": "HTML faylining kengaytmasini ko`rsating.",
    "answer": ".htm, .html"
  },
  {
    "question": "HTMLda browserdan nima uchun foydalaniladi?",
    "answer": "Browser html teglari yozilishi natijasida hosil bo`lgan\nsahifani ko`rsatadi"
  },
  {
    "question": "HTML da jadval hosil qilishda foydalaniladigan tegni belgilang.",
    "answer": "<table></table>"
  },
  {
    "question": "HTML dagi sahifaga ishlov berish uchun qaysi attributdan foydalaniladi?",
    "answer": "style"
  },
  {
    "question": "HTML da qanday usulda rang berish mumkin.",
    "answer": "Hamma javob to`g`ri"
  },
  {
    "question": "HTML da Color xususiyati nima vazifa bajaradi?",
    "answer": "Yozuv rangini tanlash"
  },
  {
    "question": "HTML da font-family xususiyatining vazifasi nimadan iborat.",
    "answer": "HTML da yozuv shaklini tanlash uchun qo`llaniladi."
  },
  {
    "question": "HTML da font-size xususiyatining vazifasi nima?",
    "answer": "HTML da yozuv shriftini tanlash uchun qo`llaniladi."
  },
  {
    "question": "HTML da text-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini gorizontal o`q bo`yicha joylashuvini\namalga oshiradi."
  },
  {
    "question": "HTML da vertical-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini vertikal o`q bo`yicha joylashuvini\namalga oshiradi."
  },
  {
    "question": "HTML da <b>..</b> Elementining vazifasi nima?",
    "answer": "HTML sahifasidagi yozuvni qalin bold holatga o`tkazish\nuchun qo`llaniladi."
  },
  {
    "question": "HTML da sahifa formatlarini belgilashda <b> va <strong> elementlarining farqi nimada?",
    "answer": "Bu elementlarni browser yordamida farqlash qiyin.\n<strong> bilan berilgan formatlar muhim hisoblanadi."
  },
  {
    "question": "HTML da <mark> elementining vazifasi nima?",
    "answer": "HTML da sahifa yozuvlarini ajratib ko`rsatish uchun\n<mark> elementidan foydalaniladi."
  },
  {
    "question": "HTML da <del> elementining vazifasi nima?",
    "answer": "HTML da sahifa yozuvini ustiga chizilgan holatda chiqarish uchun foydalaniladi."
  },
  {
    "question": "HTML da <ins> elementining vazifasi nima?",
    "answer": "HTML da sahifa yozuvini ostiga chizilgan holatda\nchiqarish uchun foydalaniladi."
  },
  {
    "question": "HTML da <q>…</q> elementining vazifasi nima?",
    "answer": "HTML da yozilgan sahifa yozuvlarini qo`shtirnoq ichiga olish uchun foydalaniladi."
  },
  {
    "question": "HTML da izoh to`g`ri yozilgan qatorni ko`rsating.",
    "answer": "<! - - Bu izoh - - >"
  },
  {
    "question": "HTML da ro`yxatlar hosil qilish uchun qaysi tegdan foydalaniladi?",
    "answer": "<ul></ul>"
  },
  {
    "question": "HTML da block hosil qiluvchi tegni belgilang.",
    "answer": "<div>"
  },
  {
    "question": "HTML da forma hosil qiluvchi element nomini ko`rsating.",
    "answer": "<form></form>"
  },
  {
    "question": "HTML nechinchi yil, kim tomonidan ishlab chiqilgan?",
    "answer": "1990-yil, Tim Berners Li"
  },
  {
    "question": "HTML da tartiblangan ro`yxat hosil qilish uchun qaysi tegdan\nfoydalaniladi.",
    "answer": "<ol></ol>"
  },
  {
    "question": "HTML bilan ishlovchi muhitlarni belgilang.",
    "answer": "Hamma javoblar to`g`ri"
  },
  {
    "question": "HTML qaysi tilga asoslangan holda ishlab chiqilgan.",
    "answer": "SGML"
  },
  {
    "question": "HTML da ishlatiladigan mantiqiy teglar to`g`ri berilgan qatorni\nbelgilang.",
    "answer": "<em></em>, <strong></strong>, <cite><cite>"
  },
  {
    "question": "HTML da freymlar asosan qaysi versiyadan boshlab qo`llanilgan?",
    "answer": "HTML 3.2"
  },
  {
    "question": "HTML da freym tizimini joriy qilish uchun qaysi teglardan\nfoydalaniladi?",
    "answer": "Hamma javoblar to`g`ri"
  },
  {
    "question": "HTML hujjat ma'nosi?",
    "answer": "Hyper Text Markup Language"
  },
  {
    "question": "HTML tili kim tomonidan barpo etilgan?",
    "answer": "Tim Berners-Li"
  },
  {
    "question": "HTMLda matnga tag chiziq chizish uchun qaysi tegdan\nfoydalaniladi?",
    "answer": "<u>"
  },
  {
    "question": "Hero image nima?",
    "answer": "Matnli katta rasm"
  },
  {
    "question": "HTML5 da qaysi tegdan foydalanib bo'lmaydi?",
    "answer": "<dir></dir>"
  },
  {
    "question": "HTMLda xat boshini qaysi teg orqali ifodalash kerak?",
    "answer": "<p>"
  },
  {
    "question": "Html kodi: <ul class=\"a\"><li>Coffee</li></ul> Css kodi: ul.a {list-style-type: lower-alpha;}\nNatijasi qaysi javob uchun to’g’ri keladi?",
    "answer": "a. Coffee"
  },
  {
    "question": "Htmlspecialchars() funksiyasi vazifasini toping.",
    "answer": "html ko’rinishidagi yozuvlarni ham matn deb qabul qiladi"
  },
  {
    "question": "Har qanday elementlarni aylana shaklidagi burchaklarga keltirish uchun … dan foydalaniladi",
    "answer": "border-radius"
  },
  {
    "question": "<html> elementining vazifasini ko`rsating.",
    "answer": "<html> elementi HTML sahifasining ildiz elementidir"
  },
  {
    "question": "<head> elementining vazifasini aniqlang.",
    "answer": "<head> elementi hujjat haqidagi meta ma'lumotni o'z\nichiga oladi"
  },
  {
    "question": "<h1> elementi nima vazifani bajaradi?",
    "answer": "<h1> elementi katta sarlavhani belgilaydi"
  },
  {
    "question": "<head> <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">\n</head> ushbu usul CSS ni  qanday qo'shish usuli?",
    "answer": "Tashqi dizayn orqali"
  },
  {
    "question": "<h1> <h6><p><form><header><footer><section> bularga xos xususiyat to’g’ri berilgan javobni tanlang:",
    "answer": "block-level elementlar"
  },
  {
    "question": "<hr> tegining yopiluvchi tegi mavjudmi?",
    "answer": "Yo’q"
  },
  {
    "question": "<h1>…..</h1> bu tegni necha hil ko’rinishda yozish mumkin?",
    "answer": 6
  },
  {
    "question": "<head> bu…?",
    "answer": "Sahifaning bosh qismi"
  },
  {
    "question": "<header> bu..?",
    "answer": "Sahifaning nomi uchun teg"
  },
  {
    "question": "<html> tegi qanday vazifani bajaradi?",
    "answer": "Bu teg html hujjat boshlanishini bildiradi va barcha kodlar\nshu tegichiga yoziladi"
  },
  {
    "question": "<h1 style=”color: yellow;”> Salom Dunyo</h1> shu dasturning\nnatijasida nima hosil bo`ladi?",
    "answer": "Sariq rangda katta shriftdaa Salom dunyo degan so`z hosil\nbo`ladi."
  },
  {
    "question": "XML ning kengaytmasini toping.",
    "answer": "eXtensible Markup Language"
  },
  {
    "question": "XML ning HTML tilidan farqi nimada?",
    "answer": "XML da o`zimiz mustaqil yangi teglar hosil qila olamiz."
  },
  {
    "question": "XHTML tili qanday til hisoblanadi?",
    "answer": "XML va HTML ning birlashmasini tashkil etgan til."
  },
  {
    "question": "….  xususiyati elementlarni taxlam ko'rinishida ifodalaydi(elementlardan qaysinisi old qismda, qaysinisi orqa fonda\nyoki boshqacha ko'rinishlarda turish kerakligi)",
    "answer": "z-index"
  },
  {
    "question": "O’zgaruvchi bor yoki yo’qligini tekshiradigan funktsiya qanday?",
    "answer": "isset() va empty()"
  },
  {
    "question": "O’zgaruvchini tipi haqida ma’lumot olish funktsiyasi qanday?",
    "answer": "gettype()"
  },
  {
    "question": "O’zgaruvchi tipini o’rnatish funktsiyasi toping",
    "answer": "settype()"
  },
  {
    "question": "O'zgartirilgan yoki o'chirilgan matnni aniqlash uchun qaysi tegdan\nfoydalaniladi?",
    "answer": "<del>"
  },
  {
    "question": "O'zgaruvchi qaysi teg orqali e'lon qilinadi?",
    "answer": "<var>"
  },
  {
    "question": "o'zgarmas position xususiyatini toping",
    "answer": "fixed"
  },
  {
    "question": "Summary qanday atribut?",
    "answer": "Jadval haqida umumiy ma’lumot yozish uchun"
  },
  {
    "question": "Saytning quyi qismi bo'limini aniqlovchi teg nomi?",
    "answer": "<footer> </footer>"
  },
  {
    "question": "Sessiyadagi ma`lumotlarni ochirib yuborish uchun qaysi funksiyardan foydalanilinadi?",
    "answer": "session_unset() va session_destroy()"
  },
  {
    "question": "Server tomonda ishlovchi dasturlash tilini ko`rsating:",
    "answer": "PHP"
  },
  {
    "question": "Sahifa elementlari uchun yagona identifikator bu nima?",
    "answer": "id"
  },
  {
    "question": "SCRIPT tegi to`g`ri keltirilgan variantni tanlang.",
    "answer": "<SCRIPT LANGUAGE= dasturlash tili>dastur matni\n</SCRIPT>"
  },
  {
    "question": "Submit attributining vazifasini aniqlang.",
    "answer": "Formaga ma’lumotlar kiritishnni yakunlash"
  },
  {
    "question": "<Select> elementiga ma’lumotlar qaysi element yordamida kiritiladi?",
    "answer": "<option>"
  },
  {
    "question": "Scroll parametrining vazifasi nimadan iborat?",
    "answer": "Browser darchalarini harakatlantirish yo`laklarini o`rnatadi."
  },
  {
    "question": "Sahifa fon rangini tanlashda bir emas bir necha ranglar jamlanmasidan foydalanish uchun qaysi xususiyatdan foydalaniladi?",
    "answer": "background: linear-gradient()"
  },
  {
    "question": "SQLda ma’lumotlar bazasida ustun elementlari yig’indisini\nhisoblash funksiyasi?",
    "answer": "SUMM"
  },
  {
    "question": "Serverda ma’lumotlarni saqlash uchun ko’rsatiladigna xizmat turi qanday nomlanadi",
    "answer": "hosting"
  },
  {
    "question": "Style attribute HTML ning qaysi qismida foydalaniladi?",
    "answer": "HTML elementlari ichida joylashadi. Ya’ni <h1\nstyle=””></h1>"
  },
  {
    "question": "<small>…</small> tahrirlovchi tegining vazifasini aniqlang.",
    "answer": "Shrift o`lchamini kichiklashtirish"
  },
  {
    "question": "<sub>...</sub> tahrirlovchi tegining vazifasini aniqlang.",
    "answer": "Indeksga yozish"
  },
  {
    "question": "… selektori har qanday element selektoridan kuchli.",
    "answer": "klass"
  },
  {
    "question": "string qanday turdagi ma`lumot turi hisoblanadi",
    "answer": "matnlar uchun"
  },
  {
    "question": "<select>…</select> qanday vazifani bajaradi?",
    "answer": "Foydalanuvchi tanlashi uchun bir necha variantga ega\nbo’lgan ro’yxat hosil qilish"
  },
  {
    "question": "<small>..</small> …….?",
    "answer": "Yozuvlar odatdagi ko’rinishidan sal kichikroq bo’ladi"
  },
  {
    "question": "<sup>…<sup> qanday teg?",
    "answer": "Bir sonni darajasini yozishda foydalaniladi. Bu teg ichida\nsonlar kichikroq va yuqoriroqda joylashgan boladi"
  },
  {
    "question": "<strong>..</strong> bu…?",
    "answer": "Matndagiyozuvni toq qilib yozishda ishlatiladi"
  },
  {
    "question": "<span>…</span> bu…..?",
    "answer": "Nechta ustunni guruh ischiga olis kerak ekanligini o’rnatish"
  },
  {
    "question": "<strike>…</strike> bu….?",
    "answer": "Yozuvni ustiga chizadi"
  },
  {
    "question": "<style> bu….?",
    "answer": "CSS stillarini kod ichida yozish imkonini beradi"
  },
  {
    "question": "<strong> tegi qaysi tegiga yordamchi teg hisoblanadi?",
    "answer": "<b>"
  },
  {
    "question": "<s> yorlig'i nimani belgilaydi?",
    "answer": "endi noto'g'ri, aniq yoki tegishli bo'lmagan matnni\nbelgilaydi"
  },
  {
    "question": "<s> yorlig'i nima uchun ishlatilmasligi kerak?",
    "answer": "o'zgartirilgan yoki o'chirilgan matnni aniqlash uchun"
  },
  {
    "question": "<s> elementi HTML 4.01 da nima uchun ishlatilgan?",
    "answer": "eskirgan va aniq matnni aniqlash uchun"
  },
  {
    "question": "<samp> yorlig'i nima?",
    "answer": "bu so'z birikmasi"
  },
  {
    "question": "<samp> yorlig'i nima aniqlaydi?",
    "answer": "kompyuter dasturidan olingan namunani aniqlaydi"
  },
  {
    "question": "<script> tegidan nima uchun foydalaniladi?",
    "answer": "mijoz tomonidagi skriptni (JavaScript) aniqlash uchun foydalaniladi"
  },
  {
    "question": "<section> yorlig'i nimani belgilaydi?",
    "answer": "hujjatdagi bo'limlarni, masalan, boblar, sarlavhalar,\naltbilgilar yoki boshqa har qanday bo'limlarni belgilaydi"
  },
  {
    "question": "Tegishli elementlarni bir guruhga ajratish uchun qaysi tegdan\nfoydalanish mumkin?",
    "answer": "<fieldset> </fieldset>"
  },
  {
    "question": "Text-shadow xususiyati tog`ri qo`llangan javobni belgilang.",
    "answer": "text-shadow: (2px , 2px , 2px #777);"
  },
  {
    "question": "<title> elementining vazifasini b.",
    "answer": "<title> elementi sahifa nomini kiritishda foydalaniladi."
  },
  {
    "question": "table { border: 1px solid black; }/*ushbu kod qanday jadvalni hosil qiladi.*/",
    "answer": "faqatgina jadval atrofiga chegara hosil qiladi."
  },
  {
    "question": "<td>…</td> qanday teg hisoblanadi?",
    "answer": "Jadvalda bitta yacheyka hosil qilish uchun ishlatiladi"
  },
  {
    "question": "<textarea>…</textarea> qanday teg hisoblanadi?",
    "answer": "Forma elementi bo’lib, kata hajmdagi matnlrni kiritish uchun ishlatiladi"
  },
  {
    "question": "<tfoot>…</tfoot> atributlari qaysilar?",
    "answer": "<thead>, <tbody>, <tfoot>"
  },
  {
    "question": "<th>…</th> qanday teg?",
    "answer": "Jadvalning eng yuqori yacheykalarini, yani ustunga tegishli zagalovkalarni yaratish"
  },
  {
    "question": "<thead>…</thead>  nima?",
    "answer": "Jadvalning yuqori qatorlaridan bir yoki bir nechtasini\nsaqlash uchun ishlatiladi"
  },
  {
    "question": "<title>…</title> nima uchun ishlatiladi?",
    "answer": "Sahifa nomini berish uchun"
  },
  {
    "question": "<tr>…</tr> nima?",
    "answer": "Jadval qatorini yaratish"
  },
  {
    "question": "<table>….</table> qanday teg?",
    "answer": "Jadval yaratuvchi teg"
  },
  {
    "question": "<tbody>…</tbody> nma uchun ishlatildi?",
    "answer": "Jadvaldagi asosiy ma’lumotlar joylashgan  (o’rtadagi)\nqatorlarni guruhlash uchun ishlatiladi"
  },
  {
    "question": "<tfooot>…</tfoot> nima uchun ishlatiladi?",
    "answer": "Jadval quyi qismidagi bir yoki bir nechta qatorlarni guruhlash uchun ishlatiladi"
  },
  {
    "question": "while shart operatorini ishlash prinsipini korsating",
    "answer": "while (shart) {amal}"
  },
  {
    "question": "Websaytlar odatda qanday qismlarga bo’linadi?",
    "answer": "header, menyular, content, footer"
  },
  {
    "question": "WWW belgi nima ma'noni anglatadi?",
    "answer": "World Wide Web"
  },
  {
    "question": "Websayt logotipi yoki nomini o’z ichiga oluvchi qism qanday nomlanadi?",
    "answer": "header"
  },
  {
    "question": "Websaytning mualliflik huquqi, kontakt",
    "answer": "footer"
  },
  {
    "question": "WWW ning asosiy tuzilish elementi nima?",
    "answer": "Web sahifa"
  },
  {
    "question": "World Wide Web bu nima?",
    "answer": "Xalqaro o'rgimchak to'ri"
  },
  {
    "question": "World Wide Web nechanchi yillarda yaratilgan?",
    "answer": "1991-1993"
  },
  {
    "question": "WWW xizmati qachon va qayerda yaratilgan?",
    "answer": "1991-yil,Jenevada"
  },
  {
    "question": "Web sahifaga video joylashtirish uchun qaysi tegdan foydalaniladi?",
    "answer": "<video>"
  },
  {
    "question": "WML ning kengaytmasini toping.",
    "answer": "Wireless Markup Language"
  },
  {
    "question": "Web dasturlash texnologiyalarini, dasturlarini, interfaol o`zaro aloqa\nqismini nechta qismga ajratish mumkin.",
    "answer": "2 qism: Client-side va server-side;"
  },
  {
    "question": "….- web dasturlashda foydalanuvchi tomonidan kiritilayotgan\nma’lumotlarni tartibga solish uchun qo`llaniladi.",
    "answer": "Formalar"
  },
  {
    "question": "URL manzilini ko'rsatuvchi toq teg nomini belgilang.",
    "answer": "<base>"
  },
  {
    "question": "Ushbu holatda Salom so'zini chegarasi qanday holatda ekranga chiqadi?          <!DOCTYPE html>\n<html>\n<head>\n<style>\np.dotted {border-style: dashed;} <p class=\"dotted\">Salom</p>",
    "answer": "Salom so'zi kesilgan chegarani belgilangan holatda"
  },
  {
    "question": "Ushbu holatda Salom so'zini chegarasi qanday holatda ekranga chiqadi?          <!DOCTYPE html>\n<html>\n<head>\n<style>\np.dotted {border-style: solid;} <p class=\"dotted\">Salom</p>",
    "answer": "Salom so'zi oddiy tekis chiziqli chegarani belgilangan holatda"
  },
  {
    "question": "Ushbu holatda Salom so'zini chegarasi qanday holatda ekranga chiqadi?          <!DOCTYPE html>\n<html>\n<head>\n<style>\np.dotted {border-style: dotted;} <p class=\"dotted\">Salom</p>",
    "answer": "Salom so'zi nuqtali chegarani belgilangan holatda"
  },
  {
    "question": "Ushbu holatda ekranga qanday natija chiqadi?\n<!DOCTYPE html>\n<html>\n<head>\n<style> p {\ntext-align: center; color: red;\n}\n</style>\n</head>\n<body>\n<p>Salom</p>\n<p id=\"para1\">Barchaga</p>\n<p>And me!</p>\n</body>\n</html>",
    "answer": "Barcha <p> teglarini texti qizil rangda sahifaning o'rtasida chiqadi"
  },
  {
    "question": "Ushbu holatda p {\ncolor: red;} p tegining property qismi qaysi?",
    "answer": "color"
  },
  {
    "question": "VLink parametrining vazifasi nimadan iborat?",
    "answer": "Ishlatilgan murojaat rangini belgilaydi."
  },
  {
    "question": "var MyStr; MyStr = \"Hello World!\"; k = MyStr.length;\ndocument.write(\"Satr uzunligi\" + k); natija qanday bo‘ladi?",
    "answer": "Satr uzunligi 11"
  },
  {
    "question": "var MyStr; MyStr = \"Hello World!\"; k = MyStr.length; document.write(\"Satr uzunligi\" + k); natija qanday bo‘ladi?",
    "answer": "Satr uzunligi 11"
  },
  {
    "question": "<variant> tegi nimani belgilaydi?",
    "answer": "tanlanganlar ro'yxatidagi tanlovni belgilaydi."
  },
  {
    "question": "<variant> elementlari qaysi elementlar ichiga kiradi?",
    "answer": "<select> yoki <datalist>"
  },
  {
    "question": "integer qanday tip?",
    "answer": "Butun son"
  },
  {
    "question": "Yashirin maydon hosil qiluvchi attributni belgilang.",
    "answer": "Reset"
  },
  {
    "question": "Shriftning o'lchami, rangi va hajmi qaysi teg yordamida\no'zgartiriladi?",
    "answer": "<font></font>"
  },
  {
    "question": "Sharxlar PHPda qanday yoziladi",
    "answer": "// Sharx # Sharx\n/* Sharx\n*/"
  },
  {
    "question": "Shart operatorini ko`rsating",
    "answer": "if()"
  },
  {
    "question": "$a = 10; $b = 10;\n$natija = $a + $b; Echo “$natija“;\nEkranda qanday yozuv hosil bo`ladi?",
    "answer": 20
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c += $a;\n$c = 12, $a = 12 deb oling.",
    "answer": 24
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c += $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 22
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c -= $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 2
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c %= $a;\n$c = 10, $a = 12 deb oling.",
    "answer": 10
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c %= $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 2
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c %= $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 2
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c %= $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 2
  },
  {
    "question": "Savol",
    "answer": "TJ"
  },
  {
    "question": "AngularJs o'zi nima?",
    "answer": "Google tomonidan ishlab chiqarilgan JavaScript\nframenwork"
  },
  {
    "question": "Audio tegining atributlarini belgilang.                1.autoplay 2.controls                                                            3.loop\n4.align                                                           5.muted\n6.default                                                    7.preload",
    "answer": "1,2,3,5,7,8"
  },
  {
    "question": "8.src"
  },
  {
    "question": "<A>…</A> ushbu tegning vazifasi ?",
    "answer": "hujjatga giperaloqani o`rnatish."
  },
  {
    "question": "Abbreviaturaning ma’nodoshi ?",
    "answer": "Qisqartma"
  },
  {
    "question": "<ADDRESS>…</ADDRESS> ……   to’g’ri javobni ko’rsating.",
    "answer": "hujjat muallifini belgilash va adresini ko`rsatish uchun ishlatiladi."
  },
  {
    "question": "Audio tegining atributlarini belgilang\n1.autoplay                                                                    2.controls\n3.loop 4.align 5.muted 6.default 7.preload\n8.src",
    "answer": "1,2,3,5,7,8"
  },
  {
    "question": "Area tegining atributlarini belgilang . 1 acceskey\n2 align\n3 top\n4 href\n5 default\n6 shape 7size",
    "answer": "1,4,5,6;"
  },
  {
    "question": "Alink parametrining vazifasi nimadan iborat?",
    "answer": "Faol murojaatning rangini belgilaydi."
  },
  {
    "question": "Browser nima?",
    "answer": "Maxsus HTML tilida yaratilgan hujjatlarni o`quvchi kompyuter dasturi"
  },
  {
    "question": "Browserda HTML ning qaysi qisminigina ko`rish mumkin>",
    "answer": "<body>…</body> faqat shu elementlar orasidagi qismni ko`rish mumkin."
  },
  {
    "question": "Bdo tegida rtl atributi nima vazifani bajaradi?",
    "answer": "Yozuv o’ngdan chapga qarab yoziladi"
  },
  {
    "question": "Bitta tegni bir vaqtning o’zida ham classi ham id si bo’lishi\nmumkinmi?",
    "answer": "Ha"
  },
  {
    "question": "Border xususiyati to`g`ri qo`llangan javobni belgilang.",
    "answer": "border: 1px solid #777;"
  },
  {
    "question": "Button tegining atributi to’g’ri keltirilgan variantni tanlang.",
    "answer": "Type ."
  },
  {
    "question": "Bir xil tipli elementlar birlashmasi nima bo‘lishi mumkin?",
    "answer": "Massiv"
  },
  {
    "question": "Background-color xususiyati nima vazifani bajaradi?",
    "answer": "HTML da fon rangini tanlash uchun foydalaniladi."
  },
  {
    "question": "Birinchi marta JQuery qayerda va nechanchi yil taqdim etilgan.",
    "answer": "2006-yil Nyu_Yorkda"
  },
  {
    "question": "Box-shadow xususiyati tog`ri qo`llangan javobni belgilang.",
    "answer": "box-shadow: (2px , 2px , 2px #777);"
  },
  {
    "question": "Bugungi kunda mobil aloqa vositalaridan foydalanuvchilar uchun\nqanday til mavjud.",
    "answer": "WML"
  },
  {
    "question": "Body tegining Background parametric qanday vazifa bajaradi?",
    "answer": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL-\nmanzilini belgilaydi."
  },
  {
    "question": "BottomMargin parametrining vazifasi qanday?",
    "answer": "Hujjatning quyi chegarasini pixel larda ifodalaydi."
  },
  {
    "question": "BgColor parametrining vazifasi nimadan iborat?",
    "answer": "Hujjat fonining rangini belgilaydi."
  },
  {
    "question": "BGPROPERTIES parametrining vazifasi nimadan iborat?",
    "answer": "Agar fixed qiymati o`rnatilmagan bo`lsa, fon tasviri\naylantirilmaydi."
  },
  {
    "question": "BMW ga murojat qilishni korsating\n$cars = array( array(\"Volvo\",22,18),\narray(\"BMW\",15,13),\narray(\"Saab\",5,2), array(\"Land Rover\",17,15)\n);",
    "answer": "$cars[1][0]"
  },
  {
    "question": "Box-shadow xususiyati tog`ri qo`llangan javobni belgilang.",
    "answer": "box-shadow: (2px , 2px , 2px #777);"
  },
  {
    "question": "Browserlar HTML freymlarini asosan qaysi versiyadan boshlab\ntushuna boshladi?",
    "answer": "HTML 4.0"
  },
  {
    "question": "Brauzerida skriptlarni o'chirib qo'ygan yoki mijozlar skriptlarini\nqo'llab-quvvatlamaydigan foydalanuvchilar uchun qaysi elementdan foydalaniladi?",
    "answer": "<noscript>"
  },
  {
    "question": "Basefont tegining vazifasi?",
    "answer": "Koddagi yozuvni bir xil shriftda yozilishini ta’minlaydi"
  },
  {
    "question": "Big tegi……",
    "answer": "Yozuvlarni belgilangan o’lchamdan kattaroq o’chamda yozish uchun ishlatiladi"
  },
  {
    "question": "Body tegining Background parametric qanday vazifa bajaradi?",
    "answer": "Fondagi tasvir sifatida foydalanuvchi tasvirining URL-\nmanzilini belgilaydi."
  },
  {
    "question": "Background-repeat xususiyati nechta qiymat qabul qiladi?",
    "answer": "3 ta"
  },
  {
    "question": "Barcha asosiy kodlar qaysi tegda joylashadi?",
    "answer": "Body"
  },
  {
    "question": "Blockquote tegi haqida to’g’ri  ma’lumot berilgan jumlani toping.",
    "answer": "bu teg ichidagi yozuv qo‘shtirnoqqa olinmaydi"
  },
  {
    "question": "Background-origin xususiyati nima maqsadda ishlatiladi?",
    "answer": "Fon rasmini joylashish o’rnini ko’rsatish uchun"
  },
  {
    "question": "Background-size xususiyatining cover qiymati orqali nima amalga\noshiriladi?",
    "answer": "Content maydon background-image da berilgan rasm bilan\nbutkul qoplanadi"
  },
  {
    "question": "Background-origin xususiyati nima maqsadda ishlatiladi?",
    "answer": "Fon rasmini joylashish o’rnini ko’rsatish uchun"
  },
  {
    "question": "border-image-source, border-image-slice, border-image- width, border-image-outset va border-image-repeat lar uchun qisqacha xususiyat qaysi?",
    "answer": "border-image"
  },
  {
    "question": "border-image to’g’ri ishlatilgan javobni toping",
    "answer": "border-image:"
  },
  {
    "question": "<body> elementining vazifasini belgilang.",
    "answer": "<body> elementi ko'rinadigan sahifa tarkibiga ega."
  },
  {
    "question": "…- bu oldindan formatlashtirilgan matnning qo’llanilishidir.",
    "answer": "<pre>"
  },
  {
    "question": "<br>…</br> tegi klaviaturaning qaysi tugmasiga mos keladi?",
    "answer": "Enter"
  },
  {
    "question": "<br>…</br>tegi qanday vazifani bajaradi ?",
    "answer": "Kursorni bitta pastga tushiradi"
  },
  {
    "question": "<b>...<b> ushbu tegning vazifasi nima?",
    "answer": "Teg ichidagi yozuv qalin shriftda bo’ladi"
  },
  {
    "question": "border-width elementining vazifasi qanday?",
    "answer": "fon chekka chizig'ini kengligini belgilaydi"
  },
  {
    "question": "border-color elementining vazifasi qanday?",
    "answer": "fon chekka chizig'ini rangini belgilaydi"
  },
  {
    "question": "background-image elementining vazifasi qanday?",
    "answer": "Orqa fonga rasm joylashtirish uchun"
  },
  {
    "question": "<b></b> tegiga analog bo`lgan tegni belgilang.",
    "answer": "<strong></strong>"
  },
  {
    "question": "<body> elementining vazifasini belgilang.",
    "answer": "<body> elementi ko'rinadigan sahifa tarkibiga ega."
  },
  {
    "question": "<body>  <h1> Salom TATU  <p>Men Tatu da o`qiyman va hozir oraliq nazoratda o`tirimman!</p> </body> Mana shu yozilgan dasturdai xatolikni aniqlang!",
    "answer": "<h1> juft teg hisoblanadi. Bu misolda u toq teg bo`lib qolgan. </h1> qolib ketgan."
  },
  {
    "question": "background-position elementining vazifasi qanday?",
    "answer": "fon tasviri o'rnini belgilash uchun ishlatiladi"
  },
  {
    "question": "background-repeat elementining vazifasi qanday?",
    "answer": "Fon rasmini bir marotaba ko'rsatish uchun"
  },
  {
    "question": "% binar operatori nimani ifodalaydi?",
    "answer": "Bo’linmani qoldig’ini ifodalaydi"
  },
  {
    "question": "<big>...</big> tahrirlovchi tegining vazifasini aniqlang.",
    "answer": "Shrift o`lchamini kattalashtirish"
  },
  {
    "question": "$b = intval(qiymat);\nQanday jarayon sodir bo’lmoqda?",
    "answer": "qiymat integer tipi o’zgartirilib, b o’zgaruvchiga berilmoqda"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, -8, -200, -220);\necho max(0, 150, 30, 20, -8, -200);\n?>",
    "answer": "-220  150"
  },
  {
    "question": "E’lon qilingan o’zgaruvchi tipini va qiymatini chiqarish funktsiyasi belgilang",
    "answer": "var_dump()"
  },
  {
    "question": "E’lon qilingan o’zgaruvchilarni o’chirish funktsiyasi aniqlang.",
    "answer": "unset()"
  },
  {
    "question": "Element ko'rinmas yoki ko'rinadigan holda bo'lishi kerakligini\naniqlaydi",
    "answer": "visibility"
  },
  {
    "question": "Element hali ham avvalgidek bo'sh joyni egallaydi. Element\nyashiringan, ammo baribir tartibga ta'sir qiladi. Bu quyidagi qaysi hususiyatga to’g’ri keladi?",
    "answer": "visibility:hidden;"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Peter\"=>\"35\", \"Ben\"=>\"37\", \"Joe\"=>\"43\");\nforeach($age as $ism => $yosh) { If ($yosh == “37“) {\necho \"Ismi: \" . $ism . \".\" ;\n}\n}",
    "answer": "Ismi: Ben."
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Peter\"=>\"35\", \"Ben\"=>\"37\", \"Joe\"=>\"43\");\nforeach($age as $ism => $yosh) {\necho \"Ismi: \" . $ism . \", yoshi: \" . $yosh; echo \", \";",
    "answer": "Ismi: Peter, yoshi: 35, Ismi: Ben, yoshi: 37, Ismi: Joe, yoshi: 43,"
  },
  {
    "question": "}"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Peter\"=>\"35\", \"Ben\"=>\"37\", \"Joe\"=>\"43\");\necho \"Ben \" . $age['Ben'] . \" yoshda.\";",
    "answer": "Ben 37 yoshda."
  },
  {
    "question": "Element ko’rish maydoniga nisbatan joylashtirilgan. Yani sahifa siljiganda ham u o’z joyini o’zgartirmaydi. Quyidagi qaysi\nxususiyatda shunday?",
    "answer": "position:fixed;"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Abror\"=>\"35\", \"Abduxoshim\"=>\"37\", \"Sarvinoz\"=>\"43\");\nforeach($age as $ism => $yoshi) { echo \"$yoshi, \";\n}",
    "answer": "35, 37, 43,"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\necho \"Men \" . $cars[0] . \", \" . $cars[1] . \" va \" . $cars[2] . \" larni yaxshi koraman.\";",
    "answer": "Men Volvo, BMW va Toyota larni yaxshi koraman."
  },
  {
    "question": "Ekranda funksiya yordamida “Hello world!“ sozi chiqadigon javobni belgilang.",
    "answer": "function fun() {\necho \"Hello world!\";\n}\nfun();"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$age = array(\"Abror\"=>\"35\", \"Abduxoshim\"=>\"37\", \"Sarvinoz\"=>\"43\");\nforeach($age as $ism => $yoshl) { echo \"$ism, \";\n}",
    "answer": "Abror, Abduxoshim, Sarvinoz,"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$colors = array(\"red\", \"green\", \"blue\", \"yellow\");\nforeach ($colors as $value) { echo \"$value, \";\n}",
    "answer": "red, green, blue, yellow,"
  },
  {
    "question": "Ekranda nima hosil bo`ladi? Foreach ($x = 0; $x <= 10; $x++) {\necho $x;\n}",
    "answer": "Dasturda xatolik xosil boldi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$x = 10; do {\n$x++; echo $x;\n} while ($x < 6)",
    "answer": "Ekranda 11 soni xosil boladi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$x = 1; do {\n$x++; echo $x;\n} while ($x < 6)",
    "answer": "1 dan 6 gacha sonlar xosil boladi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$i = 1;\nwhile (1 == 1) { echo $i;\n$i++;\nIf ($i < 6) { B=break;\n}\n}",
    "answer": "1 dan 5 gacha sonlar xosil boladi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$i = 1;\nwhile ($i < 6) { echo $i;\n}",
    "answer": "Shart amali cheksiz davob etadi, va ekratda cheksiz tartibda 1 soni xosil qilinadi"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n%n = “qizil“ Switch (%n) {\ncase “sariq“:\necho “yoqtirgan rangiz sariq“; Break;\ncase “qizil“:\necho “yoqtirgan rangiz qizil“;Break; case “qora“:\necho “yoqtirgan rangiz qora“; Break;\ndefault:\necho “ishlamadi“\n}",
    "answer": "yoqtirgan rangiz qizil"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n%n = 1\nSwitch (%n) { case 2:\necho “salom dunyo!“; Break;\ncase 1:\necho “Hello world!“; Break;\ndefault:\necho “ishlamadi“\n}",
    "answer": "Hello world!"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n$a = 10;\nIf ($a%2 == 1){\necho “son juft“;\n} elseif ($a == 10) { Echo “son toq“;\n}",
    "answer": "son toq"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\nEcho 15 % 4;\n?>",
    "answer": 3
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\nEcho 25 % 4;\n?>",
    "answer": 1
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php  echo(rand(10, 100));\n?>",
    "answer": "Bu sonlarni birortasi chiqmaydi. Sabab ular berilgan oraliqqa tegishli emas."
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php  echo(rand(10, 100));\n?>",
    "answer": "Barcha javoblar chiqishi mumkin."
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php  echo(rand(10, 100));\n?>",
    "answer": "Barcha javoblar chiqishi mumkin."
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php echo(rand());\n?>",
    "answer": "Barcha javoblar chiqishi mumkin."
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho sqrt(625);\n?>",
    "answer": 25
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho sqrt(64);\n?>",
    "answer": 8
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho abs(2.5);\n?>",
    "answer": 2.5
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php echo(abs(-6.7));\n?>",
    "answer": 6.7
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, -8, -200, -20);\necho max(0, 30, 20, -8, -200);\n?>",
    "answer": "-200  30"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, -8, -200, -220);\necho max(0, 150, 30, 20, -8, -200);",
    "answer": "-220  150"
  },
  {
    "question": "?>"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, -8, -200, -220);\n?>",
    "answer": -220
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho min(0, 150, 30, 20, -8, -200);\n?>",
    "answer": -200
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho max(0, 150, 30, 20, -8, -200);\n?>",
    "answer": 150
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php echo pi();\n?>",
    "answer": 3.1415926535898
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\n$x = 59.85;\necho is_int($x);\n?>",
    "answer": 0
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\n$x = 123.9;\necho is_int($x);\n?>",
    "answer": 0
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\n$x = 1239;\necho is_int($x);\n?>",
    "answer": 1
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\n$x = 5985;\necho is_int($x);\n?>",
    "answer": 1
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strrev(\"Bu, nima bu! \");\n?>",
    "answer": "!ub amin ,uB"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strrev(\"Salom dunyo!\");\n?>",
    "answer": "!oynud molaS"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strrev(\"Hello world!\");\n?>",
    "answer": "!dlrow olleH"
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho str_word_count(\"Bu, nima bu! \");\n?>",
    "answer": 3
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho str_word_count(\"Salom, dunyo! \");\n?>",
    "answer": 2
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho str_word_count(\"Hello world! \");\n?>",
    "answer": 2
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strlen(\"Bu matn uzunligi qancha?\");\n?>",
    "answer": 24
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strlen(\"Salom!\");\n?>",
    "answer": 6
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php\necho strlen(\"Salom, dunyo!\");\n?>",
    "answer": 13
  },
  {
    "question": "Ekranda qanday qiymat paydo bo`ladi:\n<?php",
    "answer": 12
  },
  {
    "question": "echo strlen(\"Hello world!\");\n?>"
  },
  {
    "question": "Ekranda nima hosil bo`ladi?\n<?php\n$txt = \"W3Schools.com\"; echo \"I love $txt!\";\n?>",
    "answer": "I love W3Schools.com!"
  },
  {
    "question": "ekranda nima hosil bo`ladi?\n<?php\n$a = 10.5;\necho $a;\n?>",
    "answer": 10.5
  },
  {
    "question": "Elementlar va psevdo-elementlar o’z ichiga qanday elememtlarni\noladi?",
    "answer": "h1, div, :before va :after kabilar"
  },
  {
    "question": "<embed> tegining majburiy atributini belgilang.",
    "answer": "SRC"
  },
  {
    "question": "em, ex, ch, rem, vw, vh, vmin, vmax o’lchamlari uzunlikning qaysi o’lchov birligi bo’limiga mansub?",
    "answer": "Relative"
  },
  {
    "question": "... elementning atrofiga border dan tashqariga chiziladigan chiziq. U element boshqa elementlardan ajralib turishi uchun ishlatilishi\nmumkin.",
    "answer": "Outline"
  },
  {
    "question": "<em> tegi qaysi so'zning qisqartmasi?",
    "answer": "emphasis"
  },
  {
    "question": "Canvas tegi- ….",
    "answer": "JavaScript orqali turli xildagi ob’ektlarni chizish, rasm\nchiqarish, transformasiya va xususiyatlarni o`zgartirish imkoniyatiga ega maydon yaratadi"
  },
  {
    "question": "Caption tegining vazifasi?",
    "answer": "Jadvalga nom beradi"
  },
  {
    "question": "COLS attributining vazifasini aniqlang.",
    "answer": "Maydonning ustunlari sonini"
  },
  {
    "question": "Client-Side ning vazifasi nima?",
    "answer": "Javascriptni ochishga va undagi kodlarni o`zgartirish\nruxsatini bermaydi."
  },
  {
    "question": "CSS ning kengaytmasini to`g`ri ko`rsating.",
    "answer": "Cascading Style Sheets"
  },
  {
    "question": "CSS faylga HTML dan qanday qilib bo`g`lanish mumkin?",
    "answer": "<link> elementi orqali."
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-image\nbuyrug`ining vazifasi nimadan iborat?",
    "answer": "Fonga biron bir rasm tanlash uchun foydalaniladi"
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-size buyrug`ining vazifasi nimadan iborat?",
    "answer": "Fon uchun tanlangan rasmning o`lchamlarini belgilashda ishlatiladi."
  },
  {
    "question": "CSS orqali sahifaga ishlov berilganda background-repeat\nbuyrug`ining vazifasi nimadan iborat?",
    "answer": "Fon uchun tanlangan rasmning gorizontal yoki vertical o`q\nbo`yicha takrorlanishini amalga oshiradi."
  },
  {
    "question": "CSS3 orqali bloklarga soya hosil qilsih qaysi xususiyat orqali amalga oshiriladi?",
    "answer": "box-shadow"
  },
  {
    "question": "CSS birinchi marta qachon ishlab chiqilgan.",
    "answer": "1997-yil"
  },
  {
    "question": "CSS da margin ning vazifasu nimadan iborat.",
    "answer": "Elementlar orasidagi masofani belgilaydi."
  },
  {
    "question": "CSS3 da border xususiyatining vazifasi nima?",
    "answer": "Sahifani chegaralash"
  },
  {
    "question": "CSS3 dagi translate xususiyatining vazifasi nimadan iborat.",
    "answer": "Blocklarni X va Y o`qi bo`yicha joylashuvini belgilaydi."
  },
  {
    "question": "CSS3 da media xususiyatining vazifasi nimadan iborat?",
    "answer": "Sahifaning istalgan qurilmada moslashuvchanligini\nta’minlab beradi."
  },
  {
    "question": "CSS3 orqali yozuvga soya berish qaysi xususiyat orqali amalga oshiriladi?",
    "answer": "text-shadow"
  },
  {
    "question": "CSS3 filter xususiyatidan asosan qaysi elementda ko`p foydalaniladi.",
    "answer": "Asosan <img>, rasmlar ustida ish olib borilganda\nfoydalaniladi."
  },
  {
    "question": "CSS3 bilan ishlaganda rasm faqat oq va qora rangdan iborat bo`lish uchun filter qanday tanlanishi kerak?",
    "answer": "Filter: grayscale(100%);"
  },
  {
    "question": "Content atrofidagi sohani tozalovchi shaffof qism nima deb ataladi?",
    "answer": "Padding"
  },
  {
    "question": "Content va Padding atrofidagi hoshiya?",
    "answer": "border"
  },
  {
    "question": "Css da elementlarning position xususiyati nechta qiymat qabul\nqilishi  mumkin?",
    "answer": "5 ta"
  },
  {
    "question": "Css da belgilangan maydonga sig'adigan darajada katta bo'lgan\ntarkib bilan nima bo'lishini boshqaradigan xususiyat?",
    "answer": "overflow"
  },
  {
    "question": "Cssda float nechta qiymat qabul qiladi?",
    "answer": "4ta, left, right, inherit, none;"
  },
  {
    "question": "Css da rasm ostidagi bo’shliqni qanday olib tashlash mumkin.",
    "answer": "img { display:block;}"
  },
  {
    "question": "CSS ning kengaytmasi to'g'ri ko'rsatilgan javobni toping",
    "answer": "cascading style sheets"
  },
  {
    "question": "Css da h1 ni nima deb atash mumkin?",
    "answer": "Selector"
  },
  {
    "question": "Css da color:red;  ni nima deb atash mumkin?",
    "answer": "Selector"
  },
  {
    "question": "Css da float nima?",
    "answer": "elementni maydonni qayeridan boshlab joylashishini\nbelgilaydi"
  },
  {
    "question": "CSS bloklar modeli nimalarda iborat?",
    "answer": "margin, border, padding va content"
  },
  {
    "question": "CSS ni qo'shishni nech xil yo'li mavjud?",
    "answer": 3
  },
  {
    "question": "CSS shrift turlari qaysilar kiradi",
    "answer": "generic family, font family."
  },
  {
    "question": "CSS3 dan foydalanganda kursor olib borilgan holat qanday\nbelgilanadi?",
    "answer": ":hover;"
  },
  {
    "question": "CSS3 dan foydalanganda tashrif buyurilgan holat qanday\nbelgilanadi?",
    "answer": ":visited;"
  },
  {
    "question": "CSS3 dan foydalanganda maydonlar uchun foydalanilayotgan holat\nqanday belgilanadi?",
    "answer": ":focus;"
  },
  {
    "question": "CSS3 dan foydalanganda Aktiv holat qanday belgilanadi?",
    "answer": ":active;"
  },
  {
    "question": "CSS da berilgan blokni chegarasini qizil ranga o'zgartirish uchun\nquyidagilardan qaysi biri ishlatiladi?",
    "answer": "border-color: red;"
  },
  {
    "question": "CSS identifikatori (id) tanlash uchun qanday belgidan foydalaniladi?",
    "answer": "#"
  },
  {
    "question": "CSSda background-color ning vazifasi qanday?",
    "answer": "Sahifani orqa rangini belgilaydi"
  },
  {
    "question": "CSS ning toliq holati nechanchi yilda yaratilgan?",
    "answer": 1997
  },
  {
    "question": "CSS qoidasiga ko'ra sahifadagi har bir",
    "answer": "*"
  },
  {
    "question": "CSS jadvallarini kiritishning nechta usuli mavjud va ular qaysilar?",
    "answer": "3ta, Tashqi CSS Ichki CSS\nKiritilgan CSS"
  },
  {
    "question": "CSSda tashqi uslublar qanday elemen orqali bog'lanadi?",
    "answer": "<link>"
  },
  {
    "question": "CSSda ichki uslublar qanday elemen orqali bog'lanadi?",
    "answer": "<style>"
  },
  {
    "question": "CSSda sharhlar qanday belgilar orqali ifodalanadi?",
    "answer": "/* */"
  },
  {
    "question": "CSS ga tegishli barcha darslar misollari…..",
    "answer": "Firefox Mozilla brouzeri orqali tekshiriladi"
  },
  {
    "question": "CSS da asosiy fon va rang uchu vavob beradigan still xususyatlari",
    "answer": "barcha javoblar tog'ri"
  },
  {
    "question": "CSS da uzunliklar nechta bo’limga bo’linadi va ular qaysilar?",
    "answer": "2 ta. Absolute va relative"
  },
  {
    "question": "CSS da elementga bir nechta orqa fon rasmlarini qo’shish uchun\nqaysi xususiyat ishlatiladi?",
    "answer": "background-image"
  },
  {
    "question": "<CITE>…</CITE> - ushbu tegning vazifasi nimadan iborat?",
    "answer": "kitob nomlari yoki sitatalar va maqolalarda boshqa manbalarga murojaat va hokazolarni belgilash uchun\nishlatiladi."
  },
  {
    "question": "cm, mm, px, in, pt, pc o’lchamlari uzunlikning qaysi o’lchov birligi\nbo’limiga mansub?",
    "answer": "Absolute"
  },
  {
    "question": "checkbox ob’ekti uchun nechta va qanday usullar mavjud?",
    "answer": "bittausul: click"
  },
  {
    "question": "Forma ma’lumotlarni jo’natish manzili qaysi attribut yordamida ko’rsatiladi?",
    "answer": "action"
  },
  {
    "question": "Filter ning qaysi xususiyati rasmni xira ko`rinishga keltiradi?",
    "answer": "Blur()"
  },
  {
    "question": "Filterning blur() xususiyati to`g`ri ishlatilgan javobni belgilang.",
    "answer": "Filter: blur(5px);"
  },
  {
    "question": "Filter ning qaysi xususiyati rasmni yorqin ko`rinishga keltiradi?",
    "answer": "Brightness()"
  },
  {
    "question": "Filterning brightness() xususiyati to`g`ri ishlatilgan javobni\nbelgilang.",
    "answer": "Filter: brightness(100%);"
  },
  {
    "question": "Filterning drop-shadow xususiyatining vazifasi nimadan iborat?",
    "answer": "Gorizontal va vertical o`q bo`yicha soya hosil qiladi."
  },
  {
    "question": "Filterning opacity() xususiyatining vazifasi nimadan iborat?",
    "answer": "Ko`rinish chegarasini o`zgartirishda qo`llaniladi."
  },
  {
    "question": "Formada method xususiyatining paramaterli necha xil bo`ladi?",
    "answer": 2
  },
  {
    "question": "Formada menyularni qaysi element orqali hosil qilinadi?",
    "answer": "<select>"
  },
  {
    "question": "Forma elementi hisoblangan <form></form> asosan qaysi tegdan\ntashkil qopgan.",
    "answer": "<input>"
  },
  {
    "question": "Formada bir nechta ma’lumotlar ichidan faqat birini tanlash imkoniyatini beruvchi elementni aniqlang?",
    "answer": "radio"
  },
  {
    "question": "Formada bir nechta ma’lumotlar ichidan istalganini tanlash\nimkoniyatini beruvchi elementni aniqlang?",
    "answer": "checkbox"
  },
  {
    "question": "<FRAMESET> tegining attributlarini belgilang.",
    "answer": "COLS va ROWS"
  },
  {
    "question": "Foydalanuvchi oyna bilan ishlashni tugatib, brauzer oynasini yopishi, yoki boshqa xujjatni\nqo`shishi Qaysi xolatni beradi?",
    "answer": "onUnload"
  },
  {
    "question": "Faylga murojat          Tegi orqali amalga oshiriladi.",
    "answer": "<head>"
  },
  {
    "question": "FORM tegining qaysi parametri CGI dasturni va to‘la berilgan\nparametrlarini yuklanuvchi URL adresini ko‘rsatadi?",
    "answer": "ACTION"
  },
  {
    "question": "Fonning bo’yaladigan qismini ko’rsatish uchun qaysi xususiyatdan\nfoydalaniladi?",
    "answer": "background-clip"
  },
  {
    "question": "For sikl operatori yordamida massiv elementlari murojat qilish tog`ri korsatilgan javobni toping",
    "answer": "$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\nfor($x = 0; $x < count($cars); $x++) { echo $cars[$x];\n}"
  },
  {
    "question": "<form> tegi qanday vazifani bajaradi?",
    "answer": "Veb sahifaga forma joylashtirish, forma foydalanuvchi va veb server bilan aloqani ta’minlab beradi"
  },
  {
    "question": "<frame> bu…?",
    "answer": "Har bir alohida freymni sozlash, bu teg nechta bo’lsa,\nshuncha veb sahifa bitta freymga qo’shilayotgan bo’ladi"
  },
  {
    "question": "<frameset> tegining nechta atributi mavjud?",
    "answer": "5 ta"
  },
  {
    "question": "foreach sikl operatorini boshqa sikl operatorlaridan farqli jixati niimada?",
    "answer": "Bu sikl operatorida faqat massivlar ustida ishalsh imkoni\ntaqdim etib, bular ustisida ammallar bajarish imkonini beradi"
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga $a = 4, $ b = 10 deb olinsa qanday natija qaytadi?",
    "answer": 14
  },
  {
    "question": "familiya nomli o`zgaruvchi e`lon qiling",
    "answer": "$familiya;"
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga $a = 0, $ b = 10 deb olinsa qanday natija qaytadi?",
    "answer": 10
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga $a = 6, $ b = 10 deb olinsa qanday natija qaytadi?",
    "answer": 16
  },
  {
    "question": "function differ($a, $b)\n{return $a - $b;}\nYuqoridagi funksiyaga $a = 4, $ b = 10 deb olinsa qanday natija qaytadi?",
    "answer": -6
  },
  {
    "question": "function show($a)\n{return $a;}\nYuqoridagi funksiyaga $a = „Salom, dunyo!“ deb olinsa qanday natija qaytadi?",
    "answer": "Salom, dunyo!"
  },
  {
    "question": "function differ($a, $b)\n{return $a - $b;}\nYuqoridagi funksiyaga differ(4, 10) deb olinsa qanday natija qaytadi?",
    "answer": -6
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga summ(6, 10) deb olinsa qanday natija qaytadi?",
    "answer": 16
  },
  {
    "question": "function summ($a, $b)\n{return $a + $b;}\nYuqoridagi funksiyaga summ(10, 6) deb olinsa qanday natija qaytadi?",
    "answer": 16
  },
  {
    "question": "familiya nomli o`zgaruvchi e`lon qiling va unda Anvarov\nfamiliyasini o`zlashtiring",
    "answer": "$familiya = “Anvarov“;"
  },
  {
    "question": "<frameset cols=\"50%,50%\">    <frameset rows=\"50%,50%\">\n<frame src=\"cell.htm\">      <frame src=\"cell.htm\">    </frameset>\n<frameset rows=\"33%,33%,33%\">      <frame src=\"cell.htm\">\n<frame src=\"cell.htm\">      <frame src=\"cell.htm\">    </frameset>\n</frameset>  Nechta freym mavjud,",
    "answer": 5
  },
  {
    "question": "<figure>\n<img src=\"../html/pic_trulli.jpg\" alt=\"Trulli\" style=\"width:100%\">\n<figcaption>Img.1 - Trulli, Puglia, Italy.</figcaption>\n</figure> natijada figcaption tegida yozilgan matn rasmning qayerida chiqadi?",
    "answer": "rasmning ostida"
  },
  {
    "question": "Rgb(255, 0 , 0) bu qaysi rang?",
    "answer": "qizil"
  },
  {
    "question": "RightMargin parametrining vazifasi nimadan iborat?",
    "answer": "Hujjatning o`ng chekasini pixel larda ifodalaydi"
  },
  {
    "question": "Reset attributini vazifasini aniqlang.",
    "answer": "Formani dastlabki kirish holatiga olib keladi."
  },
  {
    "question": "ROWS attributining vazifasini aniqlang.",
    "answer": "Maydonning satrlari sonini belgilaydi."
  },
  {
    "question": "RGB so'zining kengaytmasi qanday?",
    "answer": "red green blue"
  },
  {
    "question": "Rasmga tekkanda xiralashgan bo’lishi uchun yoziladigan css kodi to’g’ri berilgan qatorni toping?",
    "answer": "img:hover{ opacity:0.7}"
  },
  {
    "question": "<Ruby> tegida nima mavjud?",
    "answer": "yoqutli izoh"
  },
  {
    "question": "RGBA yordamida shafoflik qanday yoziladi?",
    "answer": "div {\nbackground: rgba(0, 128, 0, 0.3)\n}"
  },
  {
    "question": "Rasmni belgilangan joyga qadash qaysi element orqali amalga oshiriladi?",
    "answer": "background-attachment: fixed;"
  },
  {
    "question": "<ruby> tegi qaysi teglar bilan ishlatiladi?",
    "answer": "<rt> va <rp>"
  },
  {
    "question": "ranglar nomli o`zgaruvchi e`lon qiling",
    "answer": "$ranglar;"
  },
  {
    "question": "ranglar nomli o`zgaruvchi e`lon qiling va unda qora rangiini\no`zlashtiring",
    "answer": "$ranglar = “qora“;"
  },
  {
    "question": "<rp> tegidan nima uchun foydalaniladi?",
    "answer": "yoqut matni atrofidagi qavslarni qo'yish uchun"
  },
  {
    "question": "<rt> yorlig'i nimani belgilaydi?",
    "answer": "yoqimsiz annotatsiyada belgilar izohini yoki talaffuzini\nbelgilaydi"
  },
  {
    "question": "LeftMargin parametrining vazifasi nimadan iborat?",
    "answer": "Hujjatning chap chekkasini pixel larda ifodalaydi."
  },
  {
    "question": "Link parametrining vazifasi nimadan iborat?",
    "answer": "Hali ko`rib chiqilmagan silkaning rangini belgilaydi."
  },
  {
    "question": "<label> bu..?",
    "answer": "Metka orqali bog’lnishni amalga oshirib beradi"
  },
  {
    "question": "<legend> ….. orqali hosil qilingan guruhga nom berish.",
    "answer": "Fieldset"
  },
  {
    "question": "<li> bu qaysi teg ichida ishlatiladi?",
    "answer": "<ul>"
  },
  {
    "question": "<link> nima uchun ishlatiladi?",
    "answer": "Tashqi muhitd joylashgan fayllarni, veb sahifaga ulash\nuchun ishlatiladi"
  },
  {
    "question": "Date ob’ekti nima qiladi?",
    "answer": "Kompyuter soati ustida amallar bajaradi"
  },
  {
    "question": "DOM bu-…........",
    "answer": "xujjat obekt modeli"
  },
  {
    "question": "<!DOCTYPE html> ning vazifasi nimadan iborat?",
    "answer": "<! DOCTYPE html> deklaratsiyasi bu hujjatni HTML deb belgilaydi"
  },
  {
    "question": "Drop-shadow xususiyati to`g`ri ishlatilgan javobni belgilang.",
    "answer": "Filter: drop-shadow(8px, 8px, 10px, blue);"
  },
  {
    "question": "define() qanday maqsadda foydalaniladi?",
    "answer": "O`zgarmaslarni e`lon qilish uchun ishlatiladi, ya`ni\nConst bilan bir xil"
  },
  {
    "question": "do … while sikl operatorini boshqa sikl operatorlaridan farqli jixati\nniimada?",
    "answer": "Bu sikl operatorida bajarilishi kutilayotgan amallar eng\nkamida bir marotaba bajarilishligida"
  },
  {
    "question": "<div> va <span> elementlari orasidagi farq nimada?",
    "answer": "<div> elementi boshqa elementlar uchun konteyner sifatida\nko'rsatiladi, <span> elementi esa boshqa elementlar tarkibiga kiritilish uchun mo'ljallangan."
  },
  {
    "question": "<del> </del> tegining vazifasi?",
    "answer": "matnning ustidan chiziladi"
  },
  {
    "question": "<dd>  tegi qaysi teglar bilan birgalikda ishlatiladi?",
    "answer": "<dl> va <dt>"
  },
  {
    "question": "do … while sikl operatori strukturasini korsating!",
    "answer": "do {\namal;\n} while (shart)"
  },
  {
    "question": "<datalist> </datalist> tegining vazifasi?",
    "answer": "matnli maydonda kiritish sharoitida ochiluvchi ro'yxat\nyaratadi."
  },
  {
    "question": "<dfn> tegi bu…?",
    "answer": "dastur kodi"
  },
  {
    "question": "data tegining atributini belgilang.",
    "answer": "Value"
  },
  {
    "question": "<div>, <h1> - <h6>, <p>, <form>, <header>, <footer>, <section> ushbu teglar qanday umumiy jihatga ega?",
    "answer": "Block-level elementlar"
  },
  {
    "question": "dogs,tuts,cars bu-….",
    "answer": "MyVar qiymatlari boladi"
  },
  {
    "question": "d=new Date() d nimaga teng?",
    "answer": "bugungi sana va vaqtga teng"
  },
  {
    "question": "Gipermatinli xabarlarni uzatuvchi bayonnoma bu-",
    "answer": "HTTP"
  },
  {
    "question": "Giperhavola ostidagi chiziqlarni qanday bekor qilish kerak?",
    "answer": "text-decoration:none;"
  },
  {
    "question": "Gettype($a);\nagar  a o’zgaruvchini tipi noma’lum bo’lsa qanday type beradi?",
    "answer": "Unknown"
  },
  {
    "question": "Z-indexning asl qiymati nechaga teng?",
    "answer": 0
  },
  {
    "question": "Jquery bilan murojaat qilganda * selektori qanday vazifa bajaradi?",
    "answer": "Hujjatdagi barcha teglarga bo`lgan murojaatni ta’minlaydi."
  },
  {
    "question": "JavaScriptda barcha teglarga murojaat qanday amalga oshiriladi?",
    "answer": "document.getElementByTagName(‘..’);"
  },
  {
    "question": "JavaScriptda id orqali murojaat to`g`ri ko`rsatilgan javobni\nbelgilang.",
    "answer": "document.getElementById(‘..’);"
  },
  {
    "question": "JavaScriptda class orqali murojaat to`g`ri ko`rsatilgan javobni\nbelgilang.",
    "answer": "JavaScriptda class orqali murojaat mavjud emas."
  },
  {
    "question": "JQueryda barcha teglarga murojaat qanday amalga oshiriladi?",
    "answer": "$(‘….”)"
  },
  {
    "question": "JQueryda id orqali murojaat qanday amalga oshiriladi?",
    "answer": "$(‘IdNum’)"
  },
  {
    "question": "Jqueryda class nomi orqali murojaat to`g`ri ko`rsatilgan javobni belgilang.",
    "answer": "jquery(‘.className’);"
  },
  {
    "question": "Jqueryda click hodisasi nima vazifa bajaradi?",
    "answer": "Sichqoncha bosilgan xolat"
  },
  {
    "question": "Jqueryda toggle() hodisasi nima vazifa bajaradi?",
    "answer": "Berilgan funksiyalarni ketma-ket bajarilishini ta’minlaydi."
  },
  {
    "question": "Jqueryda dblclick() hodisasi nima vazifa bajaradi?",
    "answer": "Ikki marta chertish"
  },
  {
    "question": "JavaScript tilidagi quyidagi funksiyaning ma’nosi nima? charAt",
    "answer": "Son qiymati"
  },
  {
    "question": "Jqueryda mousemove() hodisasi nima vazifa bajaradi?",
    "answer": "Sichqonchaning harakatlanishi"
  },
  {
    "question": "Jqueryda mouseover() hodisasi nima vazifa bajaradi?",
    "answer": "Sichqoncha olib borilganda"
  },
  {
    "question": "Jqueryda mouseout() hodisasi nima vazifa bajaradi?",
    "answer": "Sichqoncha olib qochilganda"
  },
  {
    "question": "Jqueryda hover() hodisasi nima vazifa bajaradi?",
    "answer": "Qo`l olib borilganda"
  },
  {
    "question": "Jqueryda keypress() hodisasi nima vazifa bajaradi?",
    "answer": "Klaviatura bosilgan holat"
  },
  {
    "question": "Jqueryda keydown() hodisasi nima vazifa bajaradi?",
    "answer": "Klaviatura bosib turilgan holat"
  },
  {
    "question": "Jqueryda keyup() hodisasi nima vazifa bajaradi?",
    "answer": "Klaviatura qo`yib yuborilgan holat"
  },
  {
    "question": "Jqueryda focus() hodisasi nima vazifa bajaradi?",
    "answer": "Ma’lumotlar kiritilayotgan holat"
  },
  {
    "question": "Jqueryda blur() hodisasi nima vazifa bajaradi?",
    "answer": "Fokus yo`qolgan holat"
  },
  {
    "question": "Jqueryda change() hodisasi nima vazifa bajaradi?",
    "answer": "Kiritib bo`lingan holat"
  },
  {
    "question": "Jqueryda submit() hodisasi nima vazifa bajaradi?",
    "answer": "Ma’lumotlar jo`natilgan holat"
  },
  {
    "question": "Jqueryda select() hodisasi nima vazifa bajaradi?",
    "answer": "Tanlangan holat"
  },
  {
    "question": "Jqueryning eng muhim afzaligi nimada?",
    "answer": "Animatsiyalar yaratish"
  },
  {
    "question": "Jquery da animatsiyalar bilan ishlaganda, undagi jarayonlar nima\nbilan uzviy bo`glangan bo`ladi.",
    "answer": "Vaqt bilan"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda show() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Vaqt ichida ob’yektlarni ko`rsatish"
  },
  {
    "question": "JQuery bilan ishlash uchun qaysi faylni sahifaga ulash kerak?",
    "answer": "Jquery.js"
  },
  {
    "question": "JQuerydagi barcha funksiyalar qaysi belgi orqali amalga oshiriqiladi.",
    "answer": "$"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda hide() funksiyasining vazifasi nimadan iborat.",
    "answer": "Vaqt ichida ob’yektni berkitish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda toggle() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Ko`rsatish va berkitish amallarini ketma-ket bajarish."
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda slidedown() funksiyasining vazifasi nimadan iborat.",
    "answer": "Slaydni pastga tushirish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda slideup() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Slaydni yuqoriga ko`tarish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda fadein() funksiyasining vazifasi nimadan iborat.",
    "answer": "Shaffoflikdan paydo qilish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda fadeout() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Shaffoflikni yo`qotish"
  },
  {
    "question": "Jqueryda animatsiyalar bilan ishlaganda animate() funksiyasining\nvazifasi nimadan iborat.",
    "answer": "Animatsiyalar yaratish"
  },
  {
    "question": "Javascript birinchi marta qachon ishlab chiqilgan.",
    "answer": "1995-yil"
  },
  {
    "question": "Javascriptning javadan farqi nimada.",
    "answer": "Javascript HTML ga birlashtirish uchun mo`ljallangan"
  },
  {
    "question": "Javascriptda qanday arifmetik amallardan foydalaniladi?",
    "answer": "+, - , * , / , %, ++, --"
  },
  {
    "question": "Javascriptni tarmoq ilovalari uchun ishlatish mumkinmi?",
    "answer": "Yo`q"
  },
  {
    "question": "JavaScript dasturlash tilida o’zgaruvchilar to’g’ri e’lon qilingan\njavobni toping.",
    "answer": "$nom, nom, _nom"
  },
  {
    "question": "JQueryda berilgan buyruqlarni ketma ket bajarish holati qanday\nnomlanadi?",
    "answer": "toggle"
  },
  {
    "question": "JQuery asoschisi",
    "answer": "J.Rezig"
  },
  {
    "question": "JavaScript tilida qanday unar operatorlar mavjud?",
    "answer": "-, !, ++, --"
  },
  {
    "question": "JavaScript tilida qanday binar operatorlar mavjud?",
    "answer": "-, +, /, %"
  },
  {
    "question": "JavaScript tilida qaysi buyruqlar alohida bitlar bilan ishlaydi?",
    "answer": "&, |, ~, ^"
  },
  {
    "question": "JavaScript tilida qanday siljitish operatorlari mavjud?",
    "answer": ">>, >>>, <<"
  },
  {
    "question": "JavaScript tilida qanday munosabat operatorlari mavjud?",
    "answer": ">, >=,<,<="
  },
  {
    "question": "JavaScript tilida qanday mantiqiy operatorlar mavjud?",
    "answer": "||,&&"
  },
  {
    "question": "JavaScript tilida qanday o‘zlashtirish operatorlari mavjud?",
    "answer": "=,+=,-=,/=,"
  },
  {
    "question": "JavaScript tilida qanday ob’ektlar mavjud?",
    "answer": "vstroenniy ob’ektlar, dasturchi o‘zi yaratuvchi brauzer va ob’ektlar ob’ektlari"
  },
  {
    "question": "JavaScript tilida qanday brauzer ob’ektlari mavjud?",
    "answer": "document, parent, frame, location"
  },
  {
    "question": "JavaScript tilida eng bosh brauzer ob’ekti hisoblanadi?",
    "answer": "window"
  },
  {
    "question": "JavaScript tilida massivlar uchun qaysi usul qo‘llaniladi?",
    "answer": "uchta usul: join, reverse, sort"
  },
  {
    "question": "JavaScript ssenariysida qaysi ob’ekt usul va kattaliklaridan foydalangan holda brauzerga yuklangan xujjatning joriy vaqtdagi\nxolati haqida ma’lumot olish mumkin?",
    "answer": "document"
  },
  {
    "question": "JavaScript da qanday sonlar haqiqiy sonlar bo‘la oladi?",
    "answer": "0.0, -2.9, 0.7E1, 14.7e-2, 1e+308"
  },
  {
    "question": "JavaScript da \"=\", \"+=\", \"-=\", \"*=\", \"/=\", \"%=\" operatorlar qanday\nnomlanadi?",
    "answer": "O‘zlashtirish operatorlari"
  },
  {
    "question": "JavaScript da qanday shart operatorlari mavjud?",
    "answer": "if"
  },
  {
    "question": "JavaScript tilida  web sahifadagi barcha elementlar qay tarzda\njoylashitiriladi?",
    "answer": "Ierarxik"
  },
  {
    "question": "JavaScriptda onMouseOver amalining vazifasi nima?",
    "answer": "sichqoncha ko’rsatkichini yo’naltirgan payt"
  },
  {
    "question": "JavaScriptda onMouseOut  amalining vazifasi nima?",
    "answer": "sichqoncha ko’rsatkichini tashqariga olgan payt"
  },
  {
    "question": "JavaScriptda onLoad  amalining vazifasi nima?",
    "answer": "HTML hujjati ishga tushgan payt,ya’ni oyna ochilganda"
  },
  {
    "question": "JavaScriptda onUnload  amalining vazifasi nima?",
    "answer": "HTML hujjati ishni yakunlagan payt, ya‟ni oyna\nyopilganda"
  },
  {
    "question": "JavaScriptda onBlur  amalining vazifasi nima?",
    "answer": "Sichqoncha ko’rsatkichi oyna yoki freymdan tashqarida\nbo’lishi"
  },
  {
    "question": "JavaScriptda onChange  amalining vazifasi nima?",
    "answer": "Kontent o’zgargan payt"
  },
  {
    "question": "JavaScriptda onDragDrop amalining vazifasi nima?",
    "answer": "Ob’ektni dragdrop qilgan payt"
  },
  {
    "question": "JavaScriptda onFocus  amalining vazifasi nima?",
    "answer": "Sichqoncha ko’rsatkichini oyna yoki freymda ushlagan\npayt"
  },
  {
    "question": "JavaScriptda onKeyDown  amalining vazifasi nima?",
    "answer": "Ishchi tugmani bosib turgan payt"
  },
  {
    "question": "JavaScriptda onKeyPress  amalining vazifasi nima?",
    "answer": "Ishchi tugmani bosgan payt"
  },
  {
    "question": "JavaScriptda onKeyUp amalining vazifasi nima?",
    "answer": "Ishchi tugmani bosib qo’yib yuborgan payt"
  },
  {
    "question": "JavaScriptda onMouseDown   amalining vazifasi nima?",
    "answer": "Sichqonchaning tugmasi bosilgan payt"
  },
  {
    "question": "JavaScriptda onMouseMove  amalining vazifasi nima?",
    "answer": "Sichqoncha ko’rsatkichini qimirlatgan payt"
  },
  {
    "question": "JavaScriptda onMouseUp amalining vazifasi nima?",
    "answer": "Sichqonchani bosib qo’yib yoborgandan keyingi payt"
  },
  {
    "question": "JavaScriptda onSubmit  amalining vazifasi nima?",
    "answer": "Submit bo’lgan payt"
  },
  {
    "question": "JavaScriptda onSelect amalining vazifasi nima?",
    "answer": "Tanlangan payt"
  },
  {
    "question": "JavaScriptda substr-bu?",
    "answer": "Bu funksiya berilgan string toifadagi ma’lumotdan\nnechanchi simvoldan boshlab nechta simvol tanlab olishni ta’minlaydi."
  },
  {
    "question": "JavaScriptda  qatorni haqiqiy songa aylantiruvchi usul?",
    "answer": "String --> float"
  },
  {
    "question": "JavaScript tilidagi quyidagi funksiyaning ma’nosi nima? charAt",
    "answer": "Son qiymati"
  },
  {
    "question": "JavaScript tilidagi quyidagi funksiyaning ma’nosi nima? indexOf",
    "answer": "Simvol"
  },
  {
    "question": "JavaScriptda toLowerCase() funksiyaning vazifasi nima?",
    "answer": "Bu funksiya rus yoki lotin alifbosidagi katta harflarni kichik harflarga almashtiradi."
  },
  {
    "question": "JavaScriptda alert, prompt, confirm funksiyalari qanday funksiyalar\ndeb ataladi?",
    "answer": "Xabar beruvchi"
  },
  {
    "question": "JavaScriptda Binar amal mavjudmi?",
    "answer": "Mavjud"
  },
  {
    "question": "JavaScriptda Math.abs(x) nimani hisoblaydi?",
    "answer": "Qiymatning modulini hisoblash"
  },
  {
    "question": "JavaScriptda Math.round(x) nimani hisoblaydi?",
    "answer": "X sonini butun qismini topish"
  },
  {
    "question": "JavaScriptda Math.log(x) nimani hisoblaydi?",
    "answer": "Natural  logarifmni hisoblash"
  },
  {
    "question": "JavaScriptda Math.acos(x) nimani hisoblaydi?",
    "answer": "X ning arkkosinusini hisoblash"
  },
  {
    "question": "JavaScriptda Math.asin(x)  nimani hisoblaydi?",
    "answer": "X ning arksinusini hisoblash"
  },
  {
    "question": "JavaScriptda Math.atan2(a,b) nimani hisoblaydi?",
    "answer": "Arktanges a / b bo’yich hisoblash;"
  },
  {
    "question": "JavaScriptda Math.ceil(x) nimani hisoblaydi?",
    "answer": "X ga juda yaqin sonni topish"
  },
  {
    "question": "JavaScriptda Math.max(a,b) nimani hisoblaydi?",
    "answer": "A va b sonlar ichidan eng kattasini topish"
  },
  {
    "question": "JavaScriptda Math.exp(x) nimani hisoblaydi?",
    "answer": "Exp ni hisoblash"
  },
  {
    "question": "JavaScript qaysi firma tomonidan ishlab chiqilgan?",
    "answer": "Netscape"
  },
  {
    "question": "JavaScript ssenariysida qaysi ob’ekt usul va kattaliklaridan foydalangan holda brauzerga yuklangan xujjatning joriy vaqtdagi\nxolati haqida ma’lumot olish mumkin?",
    "answer": "document"
  },
  {
    "question": "Jumlani davom ettiring.<picture> yorlig'i ...",
    "answer": "veb-ishlab chiquvchilarga rasm manbalarini aniqlashda\nko'proq moslashuvchanlikni beradi."
  },
  {
    "question": "Jqueryni asoschisini to`g`ri belglang.",
    "answer": "Jon Rezig"
  },
  {
    "question": "Inline elementlarga quyidagilardan qaysilar kiradi?",
    "answer": "<span>, <a>, <img>"
  },
  {
    "question": "IDENTIFIKATOR nima uchun ishlatiladi",
    "answer": "butun web sahifadan faqatgina bitta elementga still berish uchun"
  },
  {
    "question": "Inputga matnli ma’lumot kiritish uchun type=” ? ” nima yozilishi\nkerak?",
    "answer": "Text"
  },
  {
    "question": "Ikki son yig`indisini qaytaruvchi funksiya tuzing: Kiruvchi parametrlar $a va $b deb olinsin",
    "answer": "function summ($a, $b)\n{return $a + $b;}"
  },
  {
    "question": "ism nomli o`zgaruvchi e`lon qiling va unda Anvar ismini\no`zlashtiring",
    "answer": "$ism = “Anvar“;"
  },
  {
    "question": "integer qanday tip?",
    "answer": "Butun son"
  },
  {
    "question": "<ins> tegi qanday vazifani bajaradi?",
    "answer": "Yozuvni tagiga chizadi"
  },
  {
    "question": "<i></i> tegiga analog bo`lgan tegni belgilang.",
    "answer": "<em></em>"
  },
  {
    "question": "ism nomli o`zgaruvchi e`lon qiling",
    "answer": "$ism;"
  },
  {
    "question": "<img> qanday teg?",
    "answer": "<img> qanday teg?"
  },
  {
    "question": "<input> bu teg orqali nimani yaratish mumkin?",
    "answer": "Form elementlarini"
  },
  {
    "question": "img {\ndisplay: block; margin-left: auto; margin-right: auto;}\nBunda rasm qanday chiqadi?",
    "answer": "o’ngdan chapdan o’rtada"
  },
  {
    "question": "isFinite ning vazifasi nima?",
    "answer": "butun son argumentini ifodalaydi"
  },
  {
    "question": "Yozuvni ustiga chizish uchun qaysi teglardan foydalanladi?",
    "answer": "<s>..</s>, <strike>…</strike>, <del>…</del>;"
  },
  {
    "question": "Yoqutli izohga ta'rif bering",
    "answer": "mos keladigan belgilar talaffuzi yoki ma'nosini\nko'rsatadigan asosiy matnga biriktirilgan kichik qo'shimcha matn."
  },
  {
    "question": "Yoqutli izoh ko'pincha qaysi davlat nashrlarida qo'llaniladi.",
    "answer": "Yaponiya"
  },
  {
    "question": "Yagona adresga ega va (brauzera yordamida) ochish, o‘qish\nimkoniyatiga ega bo‘lgan xujjat…",
    "answer": "Web-sahifa"
  },
  {
    "question": "Yashirin maydon hosil qiluvchi attributni belgilang.",
    "answer": "Reset"
  },
  {
    "question": "….yani matn va rasmlar joylashadigan qism?",
    "answer": "content"
  },
  {
    "question": "Qaysi atribut mavjud bo'lsa, <script> elementi bo'sh bo'lishi kerak?",
    "answer": "Src"
  },
  {
    "question": "Qaysi xususiyat yordamida element xoshiyasi uchun rasmlardan foydalansa bo’ladi?",
    "answer": "border-image"
  },
  {
    "question": "Qaysi xususiyat elementning fon rangini belgilaydi?",
    "answer": "Background-color"
  },
  {
    "question": "Qaysi tegda yozuvlar markazdan boshlab yoziladi, teglar ham\nbo’lishi mumkin?",
    "answer": "Center"
  },
  {
    "question": "Quyidagi jumlani to’ldiring     …. - abbreviaturalarni belgilash\nuchun ishlatiladi.",
    "answer": "<Acronym>…</acronym>"
  },
  {
    "question": "Qaysi operator yordamida formada berilgan bir nechta ro‘yxat\nichidan birini tanlash amalga oshiriladi?",
    "answer": "<SELECT>"
  },
  {
    "question": "Quyidagilardan qaysi teg toq teg hisoblanadi?",
    "answer": "col"
  },
  {
    "question": "Qaysi javobda PHP da butun qiymat qaytaradigon funksiya yaratilingan?",
    "answer": "function fun() { return 1;\n}"
  },
  {
    "question": "Qaysi javobda PHP dagi for sikl operatoridan togri foydalanilgan?",
    "answer": "for ($i = 0; $i < 10; $i++) { echo $i;\n}"
  },
  {
    "question": "Qanday xolada “Hello world“ so`zi ekranga chiqadi (nuqtalar orniga amalni tanleng)\n$a = 50;\n$b = 10;\nIf ($a … $b == 5) { Echo “Hello world“;\n}",
    "answer": "/"
  },
  {
    "question": "Qachon if shart amali ishga tushadi\n$soat = date(“H“);\nIf (t < “20“){\necho “Kech tushmabdi“;",
    "answer": "Soat 20:00 dan bolmagan xollarda"
  },
  {
    "question": "Quyidagi kod natijasida brauzerda qanday natija ko’rinadi:\nbackground: url(img.gif) right bottom;",
    "answer": "img.gif ekranda o’ng pastki burchakda chiqadi"
  },
  {
    "question": "Qaysi xususiyat yordamida element xoshiyasi uchun rasmlardan\nfoydalansa bo’ladi?",
    "answer": "border-image"
  },
  {
    "question": "Qaysi funksiya satr ko`rinishida berilgan sanani sintaksik taxlil kilib, uni millisekund\nko`rinishiga keltiradi",
    "answer": "getSeconds()"
  },
  {
    "question": "Qaysi usul joriy oynani ko`rsatadi yoki\nyangisini ochadi?",
    "answer": "open"
  },
  {
    "question": "Qaysi ob’ekt ichiga yozilgan bir yoki bir nechta URL fragmentlari qismini ukish va\nyozishni ifodalaydi?",
    "answer": "Location"
  },
  {
    "question": "Qaysi funksiya sonni yaqinlashishi bo‘yicha\nyaxlitlaydi",
    "answer": "ceil(x)"
  },
  {
    "question": "Qaysi operator for yoki while sikl operatorlari bajarilishini to‘xtatadi",
    "answer": "break"
  },
  {
    "question": "Quyidagi operatsiyalar qanday nomlanadi: \"!\", \"~\", \"++\", \"--\";",
    "answer": "inkor, inkrement, dekrement"
  },
  {
    "question": "Qaysi usul quyi indeks sifatida tasvirlangan satrni qaytaradi?",
    "answer": "sub"
  },
  {
    "question": "Qanday vstroenniy JavaScript ssenariyi klasi kompyuter soati\nbo‘yicha turli holatlarni bajarishi mumkin?",
    "answer": "Date"
  },
  {
    "question": "Qaysi usul 0 dan 1gacha oraliqdagi ixtiyoriy soni qaytaradi",
    "answer": "random"
  },
  {
    "question": "Qaysi usul yordamida ekranga ikkita OK va Cancel tugmalari bo‘lgan muloqot oynasini chiqarish mumkin",
    "answer": "confirm"
  },
  {
    "question": "Quyida keltirilgan dasturldagi Son o’zgaruvchisining qiymatini toping.\nSon=8; Son=Son+2;",
    "answer": 10
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <b>Salom<b>",
    "answer": "Browserda Salom so`zi qalin shriftda hosil bo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <i>Salom<i>",
    "answer": "Browserda Salom so`zi kursiv ya’ni egilgan holatda hosil\nbo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <u>Salom<u>",
    "answer": "Browserda Salom so`zi ostiga chizilgan holatda hosil\nbo`ladi."
  },
  {
    "question": "Quyidagi yozilgan kodning natijasini aniqlang. <s>Salom<s>",
    "answer": "Browserda Salom so`zi ustiga chizilgan holatda hosil\nbo`ladi."
  },
  {
    "question": "Qaysi tilning teglari hujjatni ekranda ko`rinishini ifodalaydi.",
    "answer": "HTML"
  },
  {
    "question": "Qaysi tilning teglari hujjatdagi ma’lumtlarni tavsiflash uchun\nishlatiladi.",
    "answer": "XML"
  },
  {
    "question": "Qaysi javobda font-style qiymatlari bor",
    "answer": "Normal, italic, oblique."
  },
  {
    "question": "Qaysi javobda havola sichqoncha ustidagi holat kodi berilgan",
    "answer": "a:hover."
  },
  {
    "question": "qaysi style gorizontal yo'nalish bo'yicha eng o'rta qismiga joylashtirishishi mumkin?",
    "answer": "margin: auto;"
  },
  {
    "question": "Qaysi CSS xususiyati element qayerga joylashtirilish kerakligini\naniqlash uchun ishlatiladi?",
    "answer": "Position"
  },
  {
    "question": "Qaysi CSS atributi elementlarni ekranga qay tarzda chiqarish kerakligini ifodalaydi",
    "answer": "Display()"
  },
  {
    "question": "<q> tegi nimani belgilash uchun xizmat qiladi?",
    "answer": "qisqa tirnoqni"
  },
  {
    "question": "Quyidagi kodning natijasini aniqlang: background: linear-\ngradient(left top, blue, yellow);",
    "answer": "Fon rangi chap tomon yuqori qismidan boshlab ko`k va\nsariq rangda bo`yaladi."
  },
  {
    "question": "Quyidagi kodning natijasini aniqlang: background: linear- gradient(90 deg , blue, yellow);",
    "answer": "Fon rangi 90 dradus holatida ikkiga bo`lingan holda, o`ng tomondan boshlab ko`k va sariq rangda bo`yaladi."
  },
  {
    "question": "Ko`p satrli ma’lumotlar kiritish imkonini beruvchi attributni belgilang.",
    "answer": "Textarea"
  },
  {
    "question": "<kbd> bu…?",
    "answer": "Matnda, klaviaturadan kiritish kerak bo’lgan belgilarni chiqarish uchun ishlatiladi, shunda bu yozuv ajralib turadi"
  },
  {
    "question": "Matnlarni (yozuvlarni) kesish funksiyasini toping.",
    "answer": "Substr()"
  },
  {
    "question": "Method xususiyatlarini tog`ri belgilang.",
    "answer": "“GET” va “POST”"
  },
  {
    "question": "Matinni quyidagi ko'rinishda ekranga chop etish uchun qaysi tegdan foydalaniladi?\nCoffee\nTea Milk",
    "answer": "<ul>"
  },
  {
    "question": "Muayyan sinfga ega elementlarni tanlash uchun qanday belgidan\nfoydalaniladi?",
    "answer": "."
  },
  {
    "question": "Massivlarni qiymatlari boyicha saralash funksiyasini korsating.",
    "answer": "asort()"
  },
  {
    "question": "Massivlarni index si boyicha saralash funksiyasini korsating.",
    "answer": "ksort()"
  },
  {
    "question": "matnni pastga tushurish uchun qaysi tegdan foydalaniladi",
    "answer": "<br>"
  },
  {
    "question": "Massivlarni tog`ti tartibda saralash funksiyasini korsating.",
    "answer": "sort()"
  },
  {
    "question": "Massivlarni teskari tartibda saralash funksiyasini korsating.",
    "answer": "rsort()"
  },
  {
    "question": "<meter> - ...",
    "answer": "ma'lum diapazondagi yoki kasrli qiymatdagi skalyar\no'lchovni belgilaydi"
  },
  {
    "question": "<meta> bu…?",
    "answer": "Qidiruv tizimlari, va brauzerlar uchun, saytning asosiy\nqismi"
  },
  {
    "question": "<map> bu…?",
    "answer": "Ikkita element(teg)ni bog’lash uchun ishlatiladi"
  },
  {
    "question": "<meter> - ...",
    "answer": "ma'lum diapazondagi yoki kasrli qiymatdagi skalyar o'lchovni belgilaydi"
  },
  {
    "question": "<mark> qanday vazifani bajaradi?",
    "answer": "T.j.y"
  },
  {
    "question": "<meta> bu…?",
    "answer": "Qidiruv tizimlari, va brauzerlar uchun, saytning asosiy qismi"
  },
  {
    "question": "<meter> - ...",
    "answer": "ma'lum diapazondagi yoki kasrli qiymatdagi skalyar\no'lchovni belgilaydi"
  },
  {
    "question": "@media screen and (min-width: 480px){…}  quyidagi kodning vazifasi nima?",
    "answer": "Sahifa eng kichik ko`rinish holatiga o`tganda ekranning eni 480px dan kam bo`lmasligi kerak bo`ladi."
  },
  {
    "question": "Nuqtalar o`rniga kerakli qo`shimchani qo`shing:\n… “Hello World!“;",
    "answer": "echo"
  },
  {
    "question": "<nav>-tegi nimani belgilaydi?",
    "answer": "navigatsiya havolalari to'plamini"
  },
  {
    "question": "<noframes> tegi - ...",
    "answer": "bu freymlarni qo'llab-quvvatlamaydigan brauzerlar uchun\nzaxira yorlig'i"
  },
  {
    "question": "<noscript> tegi",
    "answer": "o'z brauzerida skriptlarni o'chirib qo'ygan yoki skriptni qo'llab-quvvatlamaydigan brauzerga ega bo'lgan foydalanuvchilar uchun alternativ tarkibni belgilaydi"
  },
  {
    "question": "ngAnimate bu-…..",
    "answer": "modul klasslarini qo'shib yoki olib tashlaydi"
  },
  {
    "question": "ng-controller direktivasi bu-",
    "answer": "dastur boshqaruvini belgilaydi"
  },
  {
    "question": "Novalidate bu-…",
    "answer": "har qanday standart brauzer tekshiruvini ochirib qoyadi"
  },
  {
    "question": "Null nimani ifodalaydi?",
    "answer": "bo‘sh to‘plamni ifodalash uchun maxsus belgi"
  },
  {
    "question": "Nuqtalar o'rniga mos so'zni qo'yib jumlani to'ldiring. Id nomi  …\nbilan boshlanmaydi!",
    "answer": "raqam"
  },
  {
    "question": "Nuqtalar o’rniga mos so’zni qo’ying Article tegi-saytning …..haqida\nma’lumot",
    "answer": "Tarkibi"
  },
  {
    "question": "Nuqtalar o’rniga mos so’zni qo’ying aside tegi-kontentning\nyonboshdan joylashuvchi ma’lumot,  …… gipermurojaat",
    "answer": "Arxivga"
  },
  {
    "question": "Opacity() xususiyatining to`g`ri qo`llangan javobni belgilang.",
    "answer": "filter: opacity(30%);"
  },
  {
    "question": "Opocity elementi qanday vazifa bajaradi?",
    "answer": "Fonning shafofligini belgilaydi"
  },
  {
    "question": "<ol> tegiga to'g'ri berilgan ta'rifni toping.",
    "answer": "buyurtma qilingan ro'yxatni belgilaydi."
  },
  {
    "question": "<ol> tegidagi buyurtma qilingan ro'yxat qanday tartibida bo'lishi mumkin?",
    "answer": "raqamli yoki alifbo"
  },
  {
    "question": "<output> ...",
    "answer": "yorlig'i hisob-kitob natijasini anglatadi."
  },
  {
    "question": "<optroup> tegiga ta'rif bering",
    "answer": "<optroup> ochiladigan ro'yxatda tegishli parametrlarni\nguruhlash uchun ishlatiladi."
  },
  {
    "question": "<object> tegiga ta'rif bering.",
    "answer": "HTML hujjat ichida ko'milgan ob'ektni belgilaydi."
  },
  {
    "question": "<ol type=”a”>  <li>650-  16</li>  <li>640-16</li> </ol>   Hosil\nqilingan ro`yxatning ko`rinishi qanday bo`ladi.",
    "answer": "a. 650-16 b. 640-16"
  },
  {
    "question": "<ol type=”1”>  <li>650-  16</li>  <li>640-16</li> </ol>   Hosil qilingan ro`yxatning ko`rinishi qanday bo`ladi.",
    "answer": "1. 650-16 2. 640-16"
  },
  {
    "question": "outline-style xususiyati quyidagi qiymatlarni qaysi biri yashiringan outline qabul qiladi",
    "answer": "hidden"
  },
  {
    "question": "«||», «&&» operatorlari qanday nomlanadi?",
    "answer": "mantiqiy operatorlar"
  },
  {
    "question": "Php.ini faylidagi barcha sozlash qaysi buyruq orqali ko’rish mumkin\nbo’ladi.",
    "answer": "natijalarini phpinfo();"
  },
  {
    "question": "PHP da qaysi parametr xatolik xabari darajasini aniqlaydi?",
    "answer": "display_errors [on | off]"
  },
  {
    "question": "PHP da ko‘p satrli kommentari (izoh) qanday beriladi?",
    "answer": "/* va */"
  },
  {
    "question": "Php da sessiyalarga qandek murojat qilinadi?",
    "answer": "session_start();\n$_SESSION[\"kalit\"] = \"qiymat\";"
  },
  {
    "question": "PHPda ma’lumotlarni uzatish usullarini ko’rsating",
    "answer": "POST, GET"
  },
  {
    "question": "PHP dasturida o’zgaruvchining oldiga  qanday belgi qo’yiladi?",
    "answer": "$"
  },
  {
    "question": "PHP da massivning elementlari sonini bilish uchun qaysi\nfunksiyadan foydalanilinadi?",
    "answer": "count()"
  },
  {
    "question": "PHP da sikl operatorlarini korsating",
    "answer": "while, for, do while, foreach"
  },
  {
    "question": "PHP kodlari yozilgan faylni kengaytmasi qanday bo`lishi kerak?",
    "answer": ".php"
  },
  {
    "question": "PHPda ma’lumotlarni uzatish usullarini ko’rsating",
    "answer": "POST, GET"
  },
  {
    "question": "PHP dasturida o’zgaruvchining oldiga  qanday belgi qo’yiladi?",
    "answer": "$"
  },
  {
    "question": "PHP dasturlash tili asoschisi kim?",
    "answer": "Rasmus Lerdorf"
  },
  {
    "question": "Position xususiyatining nech xil qiymati mavjud?",
    "answer": 4
  },
  {
    "question": "PHP dasturida o’zgarmas qaysi\nbuyruq yordamida e’lon qilinadi?",
    "answer": "define"
  },
  {
    "question": "<Param> tegi nima uchun ishlatiladi?",
    "answer": "<object> elementi bilan o'rnatilgan plaginlar uchun\nparametrlarni aniqlash uchun ishlatiladi"
  },
  {
    "question": "PHPda boshqa fayldagi ma’lumotlarni yuklash funksiyasi qaysi",
    "answer": "include"
  },
  {
    "question": "<p>Hello World!</p>  ushbu so'z rangini o'zgartirish uchun CSSda\nqanday style yozish kerak?",
    "answer": "p {\ncolor: red; }"
  },
  {
    "question": "<p></p> tegi qanday teg hisoblanadi?",
    "answer": "inline"
  },
  {
    "question": "<p></p> tegi nimani belgilaydi?",
    "answer": "xatni belgilaydi"
  },
  {
    "question": "<pre> yorlig'ining vazifai nima?",
    "answer": "oldindan formatlangan matnni belgilash"
  },
  {
    "question": "<picture> elementini teglari qaysilar?",
    "answer": "<source> va <img>"
  },
  {
    "question": "<p> elementi nima vazifani bajaradi?",
    "answer": "<p> elementi sarlavha hosil qilish uchun foydalaniladi"
  },
  {
    "question": "<progress> tegi nimani anglatadi?",
    "answer": "vazifaning bajarilishini anglatadi"
  },
  {
    "question": "HTML so`zining kengaytmasi nima?",
    "answer": "Hyper Text Markup Language"
  },
  {
    "question": "HTML elementlari nimalar orqali tasvirlanadi?",
    "answer": "HTML teglari orqali"
  },
  {
    "question": "HTML faylining kengaytmasini ko`rsating.",
    "answer": ".htm, .html"
  },
  {
    "question": "HTMLda browserdan nima uchun foydalaniladi?",
    "answer": "Browser html teglari yozilishi natijasida hosil bo`lgan\nsahifani ko`rsatadi"
  },
  {
    "question": "HTML da jadval hosil qilishda foydalaniladigan tegni belgilang.",
    "answer": "<table></table>"
  },
  {
    "question": "HTML dagi sahifaga ishlov berish uchun qaysi attributdan\nfoydalaniladi?",
    "answer": "style"
  },
  {
    "question": "HTML da qanday usulda rang berish mumkin.",
    "answer": "Hamma javob to`g`ri"
  },
  {
    "question": "HTML da Color xususiyati nima vazifa bajaradi?",
    "answer": "Yozuv rangini tanlash"
  },
  {
    "question": "HTML da font-family xususiyatining vazifasi nimadan iborat.",
    "answer": "HTML da yozuv shaklini tanlash uchun qo`llaniladi."
  },
  {
    "question": "HTML da font-size xususiyatining vazifasi nima?",
    "answer": "HTML da yozuv shriftini tanlash uchun qo`llaniladi."
  },
  {
    "question": "HTML da text-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini gorizontal o`q bo`yicha joylashuvini\namalga oshiradi."
  },
  {
    "question": "HTML da vertical-align xususiyatining vazifasi nima?",
    "answer": "HTML elementlarini vertikal o`q bo`yicha joylashuvini amalga oshiradi."
  },
  {
    "question": "HTML da <b>..</b> Elementining vazifasi nima?",
    "answer": "HTML sahifasidagi yozuvni qalin bold holatga o`tkazish\nuchun qo`llaniladi."
  },
  {
    "question": "HTML da sahifa formatlarini belgilashda <b> va <strong>\nelementlarining farqi nimada?",
    "answer": "Bu elementlarni browser yordamida farqlash qiyin.\n<strong> bilan berilgan formatlar muhim hisoblanadi."
  },
  {
    "question": "HTML da <mark> elementining vazifasi nima?",
    "answer": "HTML da sahifa yozuvlarini ajratib ko`rsatish uchun\n<mark> elementidan foydalaniladi."
  },
  {
    "question": "HTML da <del> elementining vazifasi nima?",
    "answer": "HTML da sahifa yozuvini ustiga chizilgan holatda\nchiqarish uchun foydalaniladi."
  },
  {
    "question": "HTML da <ins> elementining vazifasi nima?",
    "answer": "HTML da sahifa yozuvini ostiga chizilgan holatda\nchiqarish uchun foydalaniladi."
  },
  {
    "question": "HTML da <q>…</q> elementining vazifasi nima?",
    "answer": "HTML da yozilgan sahifa yozuvlarini qo`shtirnoq ichiga\nolish uchun foydalaniladi."
  },
  {
    "question": "HTML da izoh to`g`ri yozilgan qatorni ko`rsating.",
    "answer": "<! - - Bu izoh - - >"
  },
  {
    "question": "HTML da ro`yxatlar hosil qilish uchun qaysi tegdan foydalaniladi?",
    "answer": "<ul></ul>"
  },
  {
    "question": "HTML da block hosil qiluvchi tegni belgilang.",
    "answer": "<div>"
  },
  {
    "question": "HTML da forma hosil qiluvchi element nomini ko`rsating.",
    "answer": "<form></form>"
  },
  {
    "question": "HTML nechinchi yil, kim tomonidan ishlab chiqilgan?",
    "answer": "1990-yil, Tim Berners Li"
  },
  {
    "question": "HTML da tartiblangan ro`yxat hosil qilish uchun qaysi tegdan\nfoydalaniladi.",
    "answer": "<ol></ol>"
  },
  {
    "question": "HTML bilan ishlovchi muhitlarni belgilang.",
    "answer": "Hamma javoblar to`g`ri"
  },
  {
    "question": "HTML qaysi tilga asoslangan holda ishlab chiqilgan.",
    "answer": "SGML"
  },
  {
    "question": "HTML da ishlatiladigan mantiqiy teglar to`g`ri berilgan qatorni\nbelgilang.",
    "answer": "<em></em>, <strong></strong>, <cite><cite>"
  },
  {
    "question": "HTML da freymlar asosan qaysi versiyadan boshlab qo`llanilgan?",
    "answer": "HTML 3.2"
  },
  {
    "question": "HTML da freym tizimini joriy qilish uchun qaysi teglardan foydalaniladi?",
    "answer": "Hamma javoblar to`g`ri"
  },
  {
    "question": "HTML hujjat ma'nosi?",
    "answer": "Hyper Text Markup Language"
  },
  {
    "question": "HTML tili kim tomonidan barpo etilgan?",
    "answer": "Tim Berners-Li"
  },
  {
    "question": "HTMLda matnga tag chiziq chizish uchun qaysi tegdan\nfoydalaniladi?",
    "answer": "<u>"
  },
  {
    "question": "Hero image nima?",
    "answer": "Matnli katta rasm"
  },
  {
    "question": "HTML5 da qaysi tegdan foydalanib bo'lmaydi?",
    "answer": "<dir></dir>"
  },
  {
    "question": "HTMLda xat boshini qaysi teg orqali ifodalash kerak?",
    "answer": "<p>"
  },
  {
    "question": "Html kodi: <ul class=\"a\"><li>Coffee</li></ul>\nCss kodi: ul.a {list-style-type: lower-alpha;} Natijasi qaysi javob uchun to’g’ri keladi?",
    "answer": "a. Coffee"
  },
  {
    "question": "Htmlspecialchars() funksiyasi vazifasini toping.",
    "answer": "html ko’rinishidagi yozuvlarni ham matn deb qabul qiladi"
  },
  {
    "question": "Har qanday elementlarni aylana shaklidagi burchaklarga keltirish uchun … dan foydalaniladi",
    "answer": "border-radius"
  },
  {
    "question": "<html> elementining vazifasini ko`rsating.",
    "answer": "<html> elementi HTML sahifasining ildiz elementidir"
  },
  {
    "question": "<head> elementining vazifasini aniqlang.",
    "answer": "<head> elementi hujjat haqidagi meta ma'lumotni o'z\nichiga oladi"
  },
  {
    "question": "<h1 style=”color: yellow;”> Salom Dunyo</h1> shu dasturning\nnatijasida nima hosil bo`ladi?",
    "answer": "Sariq rangda katta shriftdaa Salom dunyo degan so`z hosil\nbo`ladi."
  },
  {
    "question": "<head> <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">\n</head> ushbu usul CSS ni  qanday qo'shish usuli?",
    "answer": "Tashqi dizayn orqali"
  },
  {
    "question": "<h1> <h6><p><form><header><footer><section> bularga xos\nxususiyat to’g’ri berilgan javobni tanlang:",
    "answer": "block-level elementlar"
  },
  {
    "question": "<hr> tegining yopiluvchi tegi mavjudmi?",
    "answer": "Yo’q"
  },
  {
    "question": "<h1>…..</h1> bu tegni necha hil ko’rinishda yozish mumkin?",
    "answer": 6
  },
  {
    "question": "<head> bu…?",
    "answer": "Sahifaning bosh qismi"
  },
  {
    "question": "<header> bu..?",
    "answer": "Sahifaning nomi uchun teg"
  },
  {
    "question": "<html> tegi qanday vazifani bajaradi?",
    "answer": "Bu teg html hujjat boshlanishini bildiradi va barcha kodlar\nshu tegichiga yoziladi"
  },
  {
    "question": "<h1 style=”color: yellow;”> Salom Dunyo</h1> shu dasturning\nnatijasida nima hosil bo`ladi?",
    "answer": "Sariq rangda katta shriftdaa Salom dunyo degan so`z hosil\nbo`ladi."
  },
  {
    "question": "XML ning kengaytmasini toping.",
    "answer": "eXtensible Markup Language"
  },
  {
    "question": "XML ning HTML tilidan farqi nimada?",
    "answer": "XML da o`zimiz mustaqil yangi teglar hosil qila olamiz."
  },
  {
    "question": "XHTML tili qanday til hisoblanadi?",
    "answer": "XML va HTML ning birlashmasini tashkil etgan til."
  },
  {
    "question": "….  xususiyati elementlarni taxlam ko'rinishida\nifodalaydi(elementlardan qaysinisi old qismda, qaysinisi orqa fonda yoki boshqacha ko'rinishlarda turish kerakligi)",
    "answer": "z-index"
  },
  {
    "question": "O’zgaruvchi bor yoki yo’qligini tekshiradigan funktsiya qanday?",
    "answer": "isset() va empty()"
  },
  {
    "question": "O’zgaruvchini tipi haqida ma’lumot olish funktsiyasi qanday?",
    "answer": "gettype()"
  },
  {
    "question": "O’zgaruvchi tipini o’rnatish funktsiyasi toping",
    "answer": "settype()"
  },
  {
    "question": "O'zgartirilgan yoki o'chirilgan matnni aniqlash uchun qaysi tegdan\nfoydalaniladi?",
    "answer": "<del>"
  },
  {
    "question": "O'zgaruvchi qaysi teg orqali e'lon qilinadi?",
    "answer": "<var>"
  },
  {
    "question": "o'zgarmas position xususiyatini toping",
    "answer": "fixed"
  },
  {
    "question": "Summary qanday atribut?",
    "answer": "Jadval haqida umumiy ma’lumot yozish uchun"
  },
  {
    "question": "Saytning quyi qismi bo'limini aniqlovchi teg nomi?",
    "answer": "<footer> </footer>"
  },
  {
    "question": "Sessiyadagi ma`lumotlarni ochirib yuborish uchun qaysi funksiyardan foydalanilinadi?",
    "answer": "session_unset() va session_destroy()"
  },
  {
    "question": "Server tomonda ishlovchi dasturlash tilini ko`rsating:",
    "answer": "PHP"
  },
  {
    "question": "Sahifa elementlari uchun yagona identifikator bu nima?",
    "answer": "id"
  },
  {
    "question": "SCRIPT tegi to`g`ri keltirilgan variantni tanlang.",
    "answer": "<SCRIPT LANGUAGE= dasturlash tili>dastur matni </SCRIPT>"
  },
  {
    "question": "Submit attributining vazifasini aniqlang.",
    "answer": "Formaga ma’lumotlar kiritishnni yakunlash"
  },
  {
    "question": "<Select> elementiga ma’lumotlar qaysi element yordamida\nkiritiladi?",
    "answer": "<option>"
  },
  {
    "question": "Scroll parametrining vazifasi nimadan iborat?",
    "answer": "Browser darchalarini harakatlantirish yo`laklarini o`rnatadi."
  },
  {
    "question": "Sahifa fon rangini tanlashda bir emas bir necha ranglar\njamlanmasidan foydalanish uchun qaysi xususiyatdan foydalaniladi?",
    "answer": "background: linear-gradient()"
  },
  {
    "question": "SQLda ma’lumotlar bazasida ustun elementlari yig’indisini hisoblash funksiyasi?",
    "answer": "SUMM"
  },
  {
    "question": "Serverda ma’lumotlarni saqlash uchun ko’rsatiladigna xizmat turi\nqanday nomlanadi",
    "answer": "hosting"
  },
  {
    "question": "Style attribute HTML ning qaysi qismida foydalaniladi?",
    "answer": "HTML elementlari ichida joylashadi. Ya’ni <h1 style=””></h1>"
  },
  {
    "question": "<small>…</small> tahrirlovchi tegining vazifasini aniqlang.",
    "answer": "Shrift o`lchamini kichiklashtirish"
  },
  {
    "question": "<sub>...</sub> tahrirlovchi tegining vazifasini aniqlang.",
    "answer": "Indeksga yozish"
  },
  {
    "question": "… selektori har qanday element selektoridan kuchli.",
    "answer": "klass"
  },
  {
    "question": "string qanday turdagi ma`lumot turi hisoblanadi",
    "answer": "matnlar uchun"
  },
  {
    "question": "<select>…</select> qanday vazifani bajaradi?",
    "answer": "Foydalanuvchi tanlashi uchun bir necha variantga ega\nbo’lgan ro’yxat hosil qilish"
  },
  {
    "question": "<small>..</small> …….?",
    "answer": "Yozuvlar odatdagi ko’rinishidan sal kichikroq bo’ladi"
  },
  {
    "question": "<sup>…<sup> qanday teg?",
    "answer": "Bir sonni darajasini yozishda foydalaniladi. Bu teg ichida\nsonlar kichikroq va yuqoriroqda joylashgan boladi"
  },
  {
    "question": "<strong>..</strong> bu…?",
    "answer": "Matndagiyozuvni toq qilib yozishda ishlatiladi"
  },
  {
    "question": "<span>…</span> bu…..?",
    "answer": "Nechta ustunni guruh ischiga olis kerak ekanligini o’rnatish"
  },
  {
    "question": "<strike>…</strike> bu….?",
    "answer": "Yozuvni ustiga chizadi"
  },
  {
    "question": "<style> bu….?",
    "answer": "CSS stillarini kod ichida yozish imkonini beradi"
  },
  {
    "question": "<strong> tegi qaysi tegiga yordamchi teg hisoblanadi?",
    "answer": "<b>"
  },
  {
    "question": "<s> yorlig'i nimani belgilaydi?",
    "answer": "endi noto'g'ri, aniq yoki tegishli bo'lmagan matnni\nbelgilaydi"
  },
  {
    "question": "<s> yorlig'i nima uchun ishlatilmasligi kerak?",
    "answer": "o'zgartirilgan yoki o'chirilgan matnni aniqlash uchun"
  },
  {
    "question": "<s> elementi HTML 4.01 da nima uchun ishlatilgan?",
    "answer": "eskirgan va aniq matnni aniqlash uchun"
  },
  {
    "question": "<samp> yorlig'i nima?",
    "answer": "bu so'z birikmasi"
  },
  {
    "question": "<samp> yorlig'i nima aniqlaydi?",
    "answer": "kompyuter dasturidan olingan namunani aniqlaydi"
  },
  {
    "question": "<script> tegidan nima uchun foydalaniladi?",
    "answer": "mijoz tomonidagi skriptni (JavaScript) aniqlash uchun foydalaniladi"
  },
  {
    "question": "<section> yorlig'i nimani belgilaydi?",
    "answer": "hujjatdagi bo'limlarni, masalan, boblar, sarlavhalar, altbilgilar yoki boshqa har qanday bo'limlarni belgilaydi"
  },
  {
    "question": "Tegishli elementlarni bir guruhga ajratish uchun qaysi tegdan\nfoydalanish mumkin?",
    "answer": "<fieldset> </fieldset>"
  },
  {
    "question": "Text-shadow xususiyati tog`ri qo`llangan javobni belgilang.",
    "answer": "text-shadow: (2px , 2px , 2px #777);"
  },
  {
    "question": "<title> elementining vazifasini b.",
    "answer": "<title> elementi sahifa nomini kiritishda foydalaniladi."
  },
  {
    "question": "table { border: 1px solid black; }/*ushbu kod qanday jadvalni hosil qiladi.*/",
    "answer": "faqatgina jadval atrofiga chegara hosil qiladi."
  },
  {
    "question": "<td>…</td> qanday teg hisoblanadi?",
    "answer": "Jadvalda bitta yacheyka hosil qilish uchun ishlatiladi"
  },
  {
    "question": "<textarea>…</textarea> qanday teg hisoblanadi?",
    "answer": "Forma elementi bo’lib, kata hajmdagi matnlrni kiritish\nuchun ishlatiladi"
  },
  {
    "question": "<tfoot>…</tfoot> atributlari qaysilar?",
    "answer": "<thead>, <tbody>, <tfoot>"
  },
  {
    "question": "<th>…</th> qanday teg?",
    "answer": "Jadvalning eng yuqori yacheykalarini, yani ustunga tegishli zagalovkalarni yaratish"
  },
  {
    "question": "<thead>…</thead>  nima?",
    "answer": "Jadvalning yuqori qatorlaridan bir yoki bir nechtasini\nsaqlash uchun ishlatiladi"
  },
  {
    "question": "<title>…</title> nima uchun ishlatiladi?",
    "answer": "Sahifa nomini berish uchun"
  },
  {
    "question": "<tr>…</tr> nima?",
    "answer": "Jadval qatorini yaratish"
  },
  {
    "question": "<table>….</table> qanday teg?",
    "answer": "Jadval yaratuvchi teg"
  },
  {
    "question": "<tbody>…</tbody> nma uchun ishlatildi?",
    "answer": "Jadvaldagi asosiy ma’lumotlar joylashgan  (o’rtadagi) qatorlarni guruhlash uchun ishlatiladi"
  },
  {
    "question": "<tfooot>…</tfoot> nima uchun ishlatiladi?",
    "answer": "Jadval quyi qismidagi bir yoki bir nechta qatorlarni\nguruhlash uchun ishlatiladi"
  },
  {
    "question": "while shart operatorini ishlash prinsipini korsating",
    "answer": "while (shart) {amal}"
  },
  {
    "question": "Websaytlar odatda qanday qismlarga bo’linadi?",
    "answer": "header, menyular, content, footer"
  },
  {
    "question": "WWW belgi nima ma'noni anglatadi?",
    "answer": "World Wide Web"
  },
  {
    "question": "Websayt logotipi yoki nomini o’z ichiga oluvchi qism qanday\nnomlanadi?",
    "answer": "header"
  },
  {
    "question": "Websaytning mualliflik huquqi, kontakt",
    "answer": "footer"
  },
  {
    "question": "WWW ning asosiy tuzilish elementi nima?",
    "answer": "Web sahifa"
  },
  {
    "question": "World Wide Web bu nima?",
    "answer": "Xalqaro o'rgimchak to'ri"
  },
  {
    "question": "World Wide Web nechanchi yillarda yaratilgan?",
    "answer": "1991-1993"
  },
  {
    "question": "WWW xizmati qachon va qayerda yaratilgan?",
    "answer": "1991-yil,Jenevada"
  },
  {
    "question": "Web sahifaga video joylashtirish uchun qaysi tegdan foydalaniladi?",
    "answer": "<video>"
  },
  {
    "question": "WML ning kengaytmasini toping.",
    "answer": "Wireless Markup Language"
  },
  {
    "question": "Web dasturlash texnologiyalarini, dasturlarini, interfaol o`zaro aloqa\nqismini nechta qismga ajratish mumkin.",
    "answer": "2 qism: Client-side va server-side;"
  },
  {
    "question": "….- web dasturlashda foydalanuvchi tomonidan kiritilayotgan ma’lumotlarni tartibga solish uchun qo`llaniladi.",
    "answer": "Formalar"
  },
  {
    "question": "URL manzilini ko'rsatuvchi toq teg nomini belgilang.",
    "answer": "<base>"
  },
  {
    "question": "Ushbu holatda Salom so'zini chegarasi qanday holatda ekranga chiqadi?          <!DOCTYPE html>\n<html>\n<head>\n<style>\np.dotted {border-style: dashed;} <p class=\"dotted\">Salom</p>",
    "answer": "Salom so'zi kesilgan chegarani belgilangan holatda"
  },
  {
    "question": "Ushbu holatda Salom so'zini chegarasi qanday holatda ekranga chiqadi?          <!DOCTYPE html>\n<html>\n<head>\n<style>\np.dotted {border-style: solid;} <p class=\"dotted\">Salom</p>",
    "answer": "Salom so'zi oddiy tekis chiziqli chegarani belgilangan holatda"
  },
  {
    "question": "Ushbu holatda Salom so'zini chegarasi qanday holatda ekranga chiqadi?          <!DOCTYPE html>\n<html>",
    "answer": "Salom so'zi nuqtali chegarani belgilangan holatda"
  },
  {
    "question": "<head>\n<style>\np.dotted {border-style: dotted;} <p class=\"dotted\">Salom</p>"
  },
  {
    "question": "Ushbu holatda ekranga qanday natija chiqadi?\n<!DOCTYPE html>\n<html>\n<head>\n<style> p {\ntext-align: center; color: red;\n}\n</style>\n</head>\n<body>\n<p>Salom</p>\n<p id=\"para1\">Barchaga</p>\n<p>And me!</p>\n</body>\n</html>",
    "answer": "Barcha <p> teglarini texti qizil rangda sahifaning o'rtasida chiqadi"
  },
  {
    "question": "Ushbu holatda p {\ncolor: red;} p tegining property qismi qaysi?",
    "answer": "color"
  },
  {
    "question": "VLink parametrining vazifasi nimadan iborat?",
    "answer": "Ishlatilgan murojaat rangini belgilaydi."
  },
  {
    "question": "var MyStr; MyStr = \"Hello World!\"; k = MyStr.length; document.write(\"Satr uzunligi\" +\nk); natija qanday bo‘ladi?",
    "answer": "Satr uzunligi 11"
  },
  {
    "question": "var MyStr; MyStr = \"Hello World!\"; k = MyStr.length; document.write(\"Satr uzunligi\" +\nk); natija qanday bo‘ladi?",
    "answer": "Satr uzunligi 11"
  },
  {
    "question": "<variant> tegi nimani belgilaydi?",
    "answer": "tanlanganlar ro'yxatidagi tanlovni belgilaydi."
  },
  {
    "question": "<variant> elementlari qaysi elementlar ichiga kiradi?",
    "answer": "<select> yoki <datalist>"
  },
  {
    "question": "integer qanday tip?",
    "answer": "Butun son"
  },
  {
    "question": "Yashirin maydon hosil qiluvchi attributni belgilang.",
    "answer": "Reset"
  },
  {
    "question": "Shriftning o'lchami, rangi va hajmi qaysi teg yordamida o'zgartiriladi?",
    "answer": "<font></font>"
  },
  {
    "question": "Sharxlar PHPda qanday yoziladi",
    "answer": "// Sharx # Sharx\n/* Sharx\n*/"
  },
  {
    "question": "Shart operatorini ko`rsating",
    "answer": "if()"
  },
  {
    "question": "$a = 10; $b = 10;\n$natija = $a + $b; Echo “$natija“;\nEkranda qanday yozuv hosil bo`ladi?",
    "answer": 20
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c += $a;\n$c = 12, $a = 12 deb oling.",
    "answer": 24
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c += $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 22
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c -= $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 2
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c %= $a;\n$c = 10, $a = 12 deb oling.",
    "answer": 10
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c %= $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 2
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c %= $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 2
  },
  {
    "question": "$c qanday qiymatni qabul qiladi?\n$c %= $a;\n$c = 12, $a = 10 deb oling.",
    "answer": 2
  }
];
const clean = text => String(text)?.replace(/[^a-zA-Z0-9A-yaYoyo!@#$%^&*()_+\-{}[\]:;<>/=]/g, "").replaceAll(" ", "").toLowerCase();

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