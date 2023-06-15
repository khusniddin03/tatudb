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
    "answer": "",
    "noAnswer1": ".",
    "noAnswer2": "unday belgi mavjud emas"
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
    "answer": "",
    "noAnswer1": "hech qanday belgidan foydalanilmaydi",
    "noAnswer2": ";"
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
    "answer": "HTML hujjati ishga tushgan payt,ya’ni oyna ochilganda",
    "noAnswer1": "Sichqoncha ko’rsatkichini tashqariga olgan payt",
    "noAnswer2": "Sichqoncha ko’rsatkichi oyna yoki freymdan",
    "noAnswer3": "Sichqoncha ko’rsatkichi oyna yoki freymdan"
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
  }
];
const clean = (text) => {
  return String(text)
    ?.replace(/[^a-zA-Z0-9А-яЁё]/g, "")
    .replaceAll(" ", "")
    .toLowerCase();
}

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