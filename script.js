const data = [
  {
    "question": "Activityning onStart() metodiga mos ta’rifni aniqlang.",
    "answer": "lbu metod activity mobil qurilmaning oynasida hosil bo‘lganda, ya’ni foydalanuvchiga ko‘ringanida chaqiriladi",
    "noAnswer1": "bu metodning vazifasi activity yaratilganida berilgan ketma–ketliklarni bajarishdan iborat va bir marta bajariladi.",
    "noAnswer2": "ushbu metod joriy activity faoliyati vaqtinchalik to‘xtatib, boshqa activity faollashtirilganda chaqiriladi",
    "noAnswer3": "ushbu metod activity ish faoliyati to‘xtatib, qayta ishga tushirilganida chiqariladi"
  },
  {
    "question": "Activityning onStop() metodiga mos ta’rifni aniqlang.",
    "answer": "ushbu metod activity foydalanuvchiga ko‘rinmay qolganida chaqiriladi",
    "noAnswer1": "ushbu metod joriy activity faoliyati vaqtinchalik to‘xtatib, boshqa activity faollashtirilganda chaqiriladi",
    "noAnswer2": "bu metod foydalanuvchi tomonidan activity bilan ishlayotgan vaqtda chaqiriladi",
    "noAnswer3": "bu metod activity mobil qurilmaning oynasida hosil bo‘lganda, ya’ni foydalanuvchiga ko‘ringanida chaqiriladi"
  },
  {
    "question": "Activityning onCreate() metodiga mos ta’rifni aniqlang.",
    "answer": "bu metodning vazifasi activity yaratilganida berilgan ketma–ketliklarni bajarishdan iborat va bir marta bajariladi",
    "noAnswer1": "bu metod activity mobil qurilmaning oynasida hosil bo‘lganda, ya’ni foydalanuvchiga ko‘ringanida chaqiriladi",
    "noAnswer2": "ushbu metod activity ish faoliyati to‘xtatib, qayta ishga tushirilganida chiqariladi",
    "noAnswer3": "ushbu metod joriy activity faoliyati vaqtinchalik to‘xtatib, boshqa activity faollashtirilganda chaqiriladi"
  },
  {
    "question": "Qaysi xususiyat elementni ekranning to‘liq kengligigacha joylashtiradi?",
    "answer": "match_parent",
    "noAnswer1": "parent_wrap",
    "noAnswer2": "wrap_parent",
    "noAnswer3": "wrap_content"
  },
  {
    "question": "Qaysi metod obyektni id bo'yicha topadi?",
    "answer": "findViewById",
    "noAnswer1": "FindViewID",
    "noAnswer2": "findViewId",
    "noAnswer3": "getTextById"
  },
  {
    "question": "Android – bu ...",
    "answer": "bu mobil qurilmalar uchun mo‘ljallangan turli hil ilovalar va xizmatlarni o‘z ichiga olgan operatsion tizim",
    "noAnswer1": "bu mobil qurilmalar uchun mo‘ljallangan turli hil ilovalar va xizmatlarni o‘z ichiga olgan dastur",
    "noAnswer2": "bu mobil qurilmalar uchun mo‘ljallangan turli hil ilovalar va xizmatlarni o‘z ichiga olgan drayver",
    "noAnswer3": "bu mobil qurilmalar uchun mo‘ljallangan turli hil ilovalar va xizmatlarni o‘z ichiga olgan paket"
  },
  {
    "question": "<pre>\r\nbtn.setOnClickListener(\r\n        new View.OnClickListener() {\r\n            public void OnClick (View v) {\r\n                    btn.setBackgroundTintList(\r\n                            ColorStateList.valueOf(Color.RED)\r\n                    );\r\n            }\r\n        }\r\n);\r\n</pre>\r\nYuqoridagi xatolikni aniqlang",
    "answer": "@Override qolib ketgan va OnClick metodi onClick yoziladi",
    "noAnswer1": "@Override qolib ketgan",
    "noAnswer2": "OnClickListener metodi onClickListener sifatida yozilgan",
    "noAnswer3": "Hech qanday xatolikka yo’l qo’yilmagan"
  },
  {
    "question": "Nechta virtual qurilma (AVD) yaratish mumkin?",
    "answer": "Cheklanmagan",
    "noAnswer1": "5 tadan ko’p bo’lmagan",
    "noAnswer2": "10 tadan ko’p bo’lmagan",
    "noAnswer3": "15 tadan ko’p bo’lmagan"
  },
  {
    "question": "Quyidagi klasslardan qaysi biri mavjud emas?",
    "answer": "TextEdit",
    "noAnswer1": "TextView",
    "noAnswer2": "EditText",
    "noAnswer3": "Button"
  },
  {
    "question": "Rasmlar qaysi katalogda joylashtirilishi kerak?",
    "answer": "drawable",
    "noAnswer1": "res",
    "noAnswer2": "layout",
    "noAnswer3": "value"
  },
  {
    "question": "<pre>android:backgroundTint = \"@android:color/holo_green_light\"</pre> qanday vazifani bajaradi?",
    "answer": "Obyektning orqa fonini o'rnatadi",
    "noAnswer1": "Matn rangini o'rnatadi",
    "noAnswer2": "Matnning orqa fonini o'rnatadi",
    "noAnswer3": "Obyektning soyasini o'rnatadi"
  },
  {
    "question": "AndroidManifest.xml faylida ruxsat haqidagi ma’lumot to’g’ri e’lon qilingan qatorni aniqlang.",
    "answer": "<pre>&lt;uses-permission android:name=&quot;android.permission.POST_NOTIFICATIONS&quot;/&gt;</pre>",
    "noAnswer1": "<pre>&lt;uses-permission android:permission=&quot;android.permission.POST_NOTIFICATIONS&quot;/&gt;</pre>",
    "noAnswer2": "<pre>&lt;uses-permission android:name=&quot;android.POST_NOTIFICATIONS&quot;/&gt;</pre>",
    "noAnswer3": "<pre>&lt;uses-permission android=&quot;android.permission.POST_NOTIFICATIONS&quot;/&gt;</pre>"
  },
  {
    "question": "ListView adapterlari ishlashni yaxshilash uchun ViewHolder shablonidan foydalanishni …",
    "answer": "talab qilmaydi",
    "noAnswer1": "talab qiladi",
    "noAnswer2": "ta’minlaydi",
    "noAnswer3": "qisqartiradi"
  },
  {
    "question": "JSON kalit, qiymat juftligini yozishning to'g'ri formati",
    "answer": "\"name\" : \"value\"",
    "noAnswer1": "'name : value'",
    "noAnswer2": "name = 'value'",
    "noAnswer3": "name = \"value\""
  },
  {
    "question": "Android ning 2 (Eclair) versiyasi qachon ishlab chiqilgan",
    "answer": "Oktabr 26, 2009 yil",
    "noAnswer1": "Fevral 9, 2009 yil",
    "noAnswer2": "Aprel 27, 2009 yil",
    "noAnswer3": "Sentyabr 3, 2008 yil"
  },
  {
    "question": "Android 4.4.x qanday nomlangan",
    "noAnswer1": "Ice Cream Sandwich",
    "noAnswer2": "Jelly Bean",
    "answer": "KitKat",
    "noAnswer3": "Honeycomb"
  },
  {
    "question": "Mobil qurilmalar uchun ilovalar yozishda ishlatiladigan satrli kattaliklar va izohlar qayerda saqlanadi",
    "answer": "res/values papkasining ichida joylashgan strings. xml faylida",
    "noAnswer1": "res papkasining ichida joylashgan colors. xml faylida",
    "noAnswer2": "res papkasining ichida joylashgan strings. xml faylida",
    "noAnswer3": "res/values papkasining ichida joylashgan colors. xml faylida"
  },
  {
    "question": "Yangi ID kiritishni ko‘rsatib bering.",
    "answer": "@+id/XXXX",
    "noAnswer1": "@id/XXXX",
    "noAnswer2": "+@id/XXXX",
    "noAnswer3": "@$id/XXXX"
  },
  {
    "question": "Android ilovalarida ishlatiladigan kattalikni ko‘rsating",
    "answer": "dp",
    "noAnswer1": "px",
    "noAnswer2": "in",
    "noAnswer3": "mm"
  },
  {
    "question": "Android ilovalarida ishlatiladigan kattalikni ko‘rsating",
    "answer": "sp",
    "noAnswer1": "sm",
    "noAnswer2": "dm",
    "noAnswer3": "dpi"
  },
  {
    "question": "200 px o‘lchamli to‘g‘ri chiziqning o‘lchami Android qurilmasida qancha dp bo‘ladi. (ldpi)",
    "answer": "266,7",
    "noAnswer1": "200",
    "noAnswer2": "133,3",
    "noAnswer3": "100"
  },
  {
    "question": "250 px o‘lchamli to‘g‘ri chiziqning o‘lchami Android qurilmasida qancha dp bo‘ladi. (mdpi)",
    "answer": "250",
    "noAnswer1": "333,25",
    "noAnswer2": "166,67",
    "noAnswer3": "125"
  },
  {
    "question": "100 px o‘lchamli to‘g‘ri chiziqning o‘lchami Android qurilmasida qancha dp bo‘ladi. (hdpi)",
    "answer": "66,67",
    "noAnswer1": "100",
    "noAnswer2": "133,33",
    "noAnswer3": "50"
  },
  {
    "question": "100 px o‘lchamli to‘g‘ri chiziqning o‘lchami Android qurilmasida qancha dp bo‘ladi. (xhdpi)",
    "answer": "50",
    "noAnswer1": "100",
    "noAnswer2": "66,67",
    "noAnswer3": "133,33"
  },
  {
    "question": "... - bu metodning vazifasi activity yaratilganida berilgan ketma–ketliklarni bajarishdan iborat va bir marta bajariladi.",
    "answer": "onCreate()",
    "noAnswer1": "onStart()",
    "noAnswer2": "onResume()",
    "noAnswer3": "onPause()"
  },
  {
    "question": "... – bu metod activity mobil qurilmaning oynasida hosil bo‘lganda, ya’ni foydalanuvchiga ko‘ringanida chaqiriladi.",
    "answer": "onStart()",
    "noAnswer1": "onResume()",
    "noAnswer2": "onPause()",
    "noAnswer3": "onCreate ()"
  },
  {
    "question": "... — bu metod foydalanuvchi tomonidan activity bilan ishlayotgan vaqtda chaqiriladi.",
    "answer": "onResume()",
    "noAnswer1": "onPause()",
    "noAnswer2": "onCreate ()",
    "noAnswer3": "onStart()"
  },
  {
    "question": "... – ushbu metod joriy activity faoliyati vaqtinchalik to‘xtatib, boshqa activity faollashtirilganda chaqiriladi.",
    "answer": "onPause()",
    "noAnswer1": "onCreate ()",
    "noAnswer2": "onStart()",
    "noAnswer3": "onResume()"
  },
  {
    "question": "... — ushbu metod activity foydalanuvchiga ko‘rinmay qolganida chaqiriladi",
    "answer": "onStop()",
    "noAnswer1": "onCreate ()",
    "noAnswer2": "onStart()",
    "noAnswer3": "onResume()"
  },
  {
    "question": "... – bu tartib elementi tashkil etuvchi elementlarni bir tomonga, ya’ni vertikal yoki gorizontal tarzda joylashtiradi.",
    "answer": "LinearLayout",
    "noAnswer1": "RelativeLayout",
    "noAnswer2": "TableLayout",
    "noAnswer3": "AbsoluteLayout"
  },
  {
    "question": "Elementlar guruxidan tashkil topgan ro‘yxatni aks ettiruvchi elementlari guruhi bu – ...",
    "answer": "ListView",
    "noAnswer1": "GridView",
    "noAnswer2": "LinearLayout",
    "noAnswer3": "RelativeLayout"
  },
  {
    "question": "... – bu element kengligini ko‘rsatuvchi atribut",
    "answer": "android:layout_width",
    "noAnswer1": "android:layout_height",
    "noAnswer2": "layout_width",
    "noAnswer3": "layout_height"
  },
  {
    "question": "... – bu element balandligini ko‘rsatuvchi atribut.",
    "answer": "android:layout_height",
    "noAnswer1": "android:layout_width",
    "noAnswer2": "layout_width",
    "noAnswer3": "layout_height"
  },
  {
    "question": "… – bu atribut X koordinatasini bildiradi",
    "answer": "android:layout_x",
    "noAnswer1": "android:layout_y",
    "noAnswer2": "layout_x",
    "noAnswer3": "layout_y"
  },
  {
    "question": "… – bu atribut Y koordinatasini bildiradi",
    "answer": "android:layout_y",
    "noAnswer1": "android:layout_x",
    "noAnswer2": "layout_y",
    "noAnswer3": "layout_x"
  },
  {
    "question": "... – yaratilgan element uchun talab qilinadigan eng kichik o‘lchovni bildiradi.",
    "answer": "wrap_content",
    "noAnswer1": "fill_parent",
    "noAnswer2": "match_parent",
    "noAnswer3": "match_content"
  },
  {
    "question": "… – yaratilgan element uchun tartiblash elementining talab qilingan eng katta o‘lchovini bildiradi",
    "noAnswer1": "fil_parent",
    "noAnswer2": "wrap_content",
    "answer": "match_parent",
    "noAnswer3": "match_content"
  },
  {
    "question": "... – bu funksiya aktivitidagi vidjetlarni obyekt sifatida belgilash uchun ishlatiladi.",
    "answer": "findViewById()",
    "noAnswer1": "findViewId()",
    "noAnswer2": "findById()",
    "noAnswer3": "viewById()"
  },
  {
    "question": "Java dasturlash tilida vorislik olish uchun ishlatiladigan xizmatchi so‘zni ko‘rsating",
    "answer": "extends",
    "noAnswer1": "implements",
    "noAnswer2": "override",
    "noAnswer3": "overload"
  },
  {
    "question": "Qayta yozish uchun mo‘ljallangan metodlarning oldida ... buyrug‘i yoziladi.",
    "answer": "override",
    "noAnswer1": "extends",
    "noAnswer2": "implements",
    "noAnswer3": "overload"
  },
  {
    "question": "Qayta yuklash uchun mo‘ljallangan metodlar oldida ... buyrug‘i yoziladi.",
    "answer": "overload",
    "noAnswer1": "override",
    "noAnswer2": "extends",
    "noAnswer3": "implements"
  },
  {
    "question": "JSON da yozilgan ma’lumotlar obyektlar qanday belgilar orasida beriladi.",
    "answer": "{ }",
    "noAnswer1": "[ ]",
    "noAnswer2": "( )",
    "noAnswer3": "&lt; &gt;"
  },
  {
    "question": "JSON da yozilgan ma’lumotlarni bo‘laklashda butun sonli qiymatli ma’lumotlarni qaysi metod yordamida olinadi.",
    "answer": "getInt()",
    "noAnswer1": "GetInteger()",
    "noAnswer2": "get_int()",
    "noAnswer3": "get_integer()"
  },
  {
    "question": "JSON da yozilgan ma’lumotlarni bo‘laklashda satrli qiymatli ma’lumotlarni qaysi metod yordamida olinadi.",
    "answer": "getString()",
    "noAnswer1": "GetString()",
    "noAnswer2": "get_str()",
    "noAnswer3": "get_string()"
  },
  {
    "question": "JSON da yozilgan ma’lumotlarni bo‘laklashda haqiqiy sonli qiymatli ma’lumotlarni qaysi metod yordamida olinadi.",
    "answer": "getDouble()",
    "noAnswer1": "GetDouble()",
    "noAnswer2": "getFloat()",
    "noAnswer3": "getReal()"
  },
  {
    "question": "JSON da yozilgan ma’lumotlarni bo‘laklashda obyekt qiymatli ma’lumotlarni qaysi metod yordamida olinadi.",
    "answer": "getJSONObject()",
    "noAnswer1": "GetJSONObject()",
    "noAnswer2": "getObject()",
    "noAnswer3": "getObjectJSON()"
  },
  {
    "question": "JSON da yozilgan ma’lumotlarni bo‘laklashda massiv qiymatli ma’lumotlarni qaysi metod yordamida olinadi.",
    "answer": "getJSONArray()",
    "noAnswer1": "GetJSONArray()",
    "noAnswer2": "getArray()",
    "noAnswer3": "getArrayJSON()"
  },
  {
    "question": "Ma’lumotlarni mobil qurilmaning xotirasiga yuklashda ishlatiladigan klass nomini ko‘rsating",
    "answer": "AsyncTask",
    "noAnswer1": "TaskAsync",
    "noAnswer2": "InformationLoad",
    "noAnswer3": "LoadInformation"
  },
  {
    "question": "Dialog oynasi qaysi klass yordamida yaratiladi",
    "answer": "AlertDialog",
    "noAnswer1": "ProgressDialog",
    "noAnswer2": "Dialog",
    "noAnswer3": "Fragment"
  },
  {
    "question": "Dialog oynasi uchun sarlavhani o‘rnatuvchi metodni ko‘rsating.",
    "answer": "setTitle()",
    "noAnswer1": "setCaption()",
    "noAnswer2": "setText()",
    "noAnswer3": "setMessage()"
  },
  {
    "question": "Dialog oynasida chiquvchi xabarni o‘rnatuvchi metodni ko‘rsating.",
    "answer": "setMessage()",
    "noAnswer1": "setTitle()",
    "noAnswer2": "setCaption()",
    "noAnswer3": "setText()"
  },
  {
    "question": "Dialog oynasida dasturchi o‘ziga mos ko‘rinishdagi oyna hosil qiluvchi metodni ko‘rsating.",
    "answer": "setView()",
    "noAnswer1": "setViews()",
    "noAnswer2": "setview()",
    "noAnswer3": "set_views()"
  },
  {
    "question": "Dialog oynasidagi tugmalarning qaysi biriga oynadagi ko‘rsatilgan buyruqlarni bajarish uchun dastur yozish tavsiya etiladi.",
    "answer": "setPositiveButton(...)",
    "noAnswer1": "setNegativeButton(...)",
    "noAnswer2": "setNeutralButton(...)",
    "noAnswer3": "setFullButton(...)"
  },
  {
    "question": "Dialog oynasidagi tugmalarning qaysi biriga oynadagi ko‘rsatilgan buyruqlarni bajarmasligi uchun dastur yozish tavsiya etiladi.",
    "answer": "setNegativeButton(...)",
    "noAnswer1": "setNeutralButton(...)",
    "noAnswer2": "setPositiveButton(...)",
    "noAnswer3": "setFullButton(...)"
  },
  {
    "question": "Dialog oynasi uchun bekor qilishni oldini oluvchi metodni ko‘rsating.",
    "answer": "setCancelable()",
    "noAnswer1": "setCancel()",
    "noAnswer2": "isCancelable()",
    "noAnswer3": "isCancel()"
  },
  {
    "question": "Faqat raqamli ma’lumotlarni kiritish uchun EditText vidjetini qaysi atributi o‘zgartiriladi.",
    "answer": "android:inputType",
    "noAnswer1": "inputType",
    "noAnswer2": "ems",
    "noAnswer3": "android:ems"
  },
  {
    "question": "Faqat raqamli ma’lumotlarni kiritish uchun EditText vidjetini qaysi atributi o‘zgartiriladi va uning qiymatini ko‘rsating.",
    "answer": "android:inputType=\"number\"",
    "noAnswer1": "inputType=\"number\"",
    "noAnswer2": "ems=\"number\"",
    "noAnswer3": "android:ems=\"number\""
  },
  {
    "question": "Mobil ilovalarda ma’lumotlar bazasini qaysi MBBT da yaratiladi",
    "answer": "SQLite",
    "noAnswer1": "MySQL",
    "noAnswer2": "MS SQL Server",
    "noAnswer3": "Oracle"
  },
  {
    "question": "SQLite MB dan foydalanishda MBni yaratish qaysi klassdan foydalaniladi",
    "answer": "SQLiteOpenHelper",
    "noAnswer1": "SQLiteOpen",
    "noAnswer2": "SQLiteHelper",
    "noAnswer3": "SQLiteBase"
  },
  {
    "question": "Ma’lumotlar bazasiga yozuvlar qo‘shish uchun foydalaniladigan metodni ko‘rsating.",
    "answer": "insert",
    "noAnswer1": "delete",
    "noAnswer2": "select",
    "noAnswer3": "update"
  },
  {
    "question": "Ma’lumotlar bazasiga yozuvlar o‘chirish uchun foydalaniladigan metodni ko‘rsating.",
    "answer": "delete",
    "noAnswer1": "insert",
    "noAnswer2": "select",
    "noAnswer3": "update"
  },
  {
    "question": "Ma’lumotlar bazasiga yozuvlar taxrirlash uchun foydalaniladigan metodni ko‘rsating.",
    "answer": "update",
    "noAnswer1": "insert",
    "noAnswer2": "select",
    "noAnswer3": "delete"
  },
  {
    "question": "Ma’lumotlarni kiritish uchun ma’lumotlar qaysi klassdan foydalanib MB ga qo‘shiladi yoki taxrirlanadi.",
    "answer": "ContentValues",
    "noAnswer1": "Values",
    "noAnswer2": "Content",
    "noAnswer3": "String"
  },
  {
    "question": "MB da yozuvlarni birma–bir saqlaydigan klass nomini ko‘rsating.",
    "answer": "Cursor",
    "noAnswer1": "Values",
    "noAnswer2": "Content",
    "noAnswer3": "String"
  },
  {
    "question": "MB sini yozish uchun ochish metodini belgilang",
    "answer": "getWritableDatabase",
    "noAnswer1": "getReadableDatabase",
    "noAnswer2": "getWritable",
    "noAnswer3": "getReadable"
  },
  {
    "question": "JSON bilan ishlayotgan vaqtda hatoliklarni boshqaruvchi klassni ko‘rsating",
    "answer": "JSONException",
    "noAnswer1": "Exception",
    "noAnswer2": "IOException",
    "noAnswer3": "NullPointerException"
  },
  {
    "question": "LinearLayout vidjeti yordamida komponentalarni vertikal va gorizontal joylashtirishda vidjetning qaysi atributi o‘zgartiriladi.",
    "answer": "android:orientation",
    "noAnswer1": "orientation",
    "noAnswer2": "text",
    "noAnswer3": "android:text"
  },
  {
    "question": "Button tugmasi chertish xodisasi qaysi atribut orqali aniqlanadi.",
    "answer": "android:onClick",
    "noAnswer1": "onClick",
    "noAnswer2": "android:click",
    "noAnswer3": "Click"
  },
  {
    "question": "Scale-independent pixel ma’nosini bildiruvchi kattalikni ko‘rsating.",
    "answer": "sp",
    "noAnswer1": "dp",
    "noAnswer2": "sip",
    "noAnswer3": "Dip"
  },
  {
    "question": "Density-independent pixel ma’nosini bildiruvchi kattalikni ko‘rsating.",
    "answer": "dp",
    "noAnswer1": "sp",
    "noAnswer2": "sip",
    "noAnswer3": "Dip"
  },
  {
    "question": "Vidjetning joylashuvini ko‘rstuvchi atributni ko‘rsating.",
    "answer": "android:layout_gravity",
    "noAnswer1": "layout_gravity",
    "noAnswer2": "android:layout_weight",
    "noAnswer3": "layout_weight"
  },
  {
    "question": "Android telefonlarida qo‘shimcha xizmatlarni yoqish uchun qaysi fayl o‘zgartiriladi.",
    "answer": "AndroidManifest.xml",
    "noAnswer1": "ActivityManager.xml",
    "noAnswer2": "activity_main.xml",
    "noAnswer3": "ActivityMain.xml"
  },
  {
    "question": "Android telefonlarida internet xizmatini yoqish uchun qaysi buyruq yoziladi.",
    "answer": "&lt;uses-permission android:name=”android.permission.INTERNET”/&gt;",
    "noAnswer1": "&lt;uses android:name=”android.permission.INTERNET”/&gt;",
    "noAnswer2": "&lt;uses-permission android:name=”android.INTERNET”/&gt;",
    "noAnswer3": "&lt;uses-permission name=”android.permission.INTERNET”/&gt;"
  },
  {
    "question": "Ilovani eng kichik android versiyasini ko‘rsatish uchun qaychi buyruq yoziladi.",
    "answer": "&lt;uses-sdk android:minSdkVersion=”X” /&gt;",
    "noAnswer1": "&lt;uses android:minSdkVersion=”X” /&gt;",
    "noAnswer2": "&lt;uses-sdk minSdkVersion=”X” /&gt;",
    "noAnswer3": "&lt;uses-sdk version=”X” /&gt;"
  },
  {
    "question": "Bir aktivitidan boshqa aktivitini natija qaytaruvchi qilib chaqirish uchun qaysi funksiyadan foydalaniladi.",
    "answer": "startActivityForResult",
    "noAnswer1": "startService",
    "noAnswer2": "startActivity",
    "noAnswer3": "stopService"
  },
  {
    "question": "Android telefonlarida SMS habarlarini xizmatini yoqish uchun qaysi buyruq yoziladi.",
    "answer": "&lt;uses-permission android:name=”android.permission.SEND_SMS”/&gt;",
    "noAnswer1": "&lt;uses android:name=”android.permission.SEND_SMS”/&gt;",
    "noAnswer2": "&lt;uses-permission android:name=”android.SEND_SMS”/&gt;",
    "noAnswer3": "&lt;uses-permission name=”android.permission.SEND_SMS”/&gt;"
  },
  {
    "question": "AsuncTask klassi yordamida yaratilayotgan foydalanuvchi klassida qaysi metod ma’lumotlarni o‘qish uchun ishlatiladi.",
    "answer": "doInBackground()",
    "noAnswer1": "onPostExecute()",
    "noAnswer2": "downloadImageTask()",
    "noAnswer3": "onPreExecute()"
  },
  {
    "question": "AsuncTask klassi yordamida yaratilayotgan foydalanuvchi klassida qaysi metod ma’lumotlarni foydalanuvchining obyektiga uzatish uchun ishlatiladi.",
    "answer": "onPostExecute()",
    "noAnswer1": "downloadImageTask()",
    "noAnswer2": "onPreExecute()",
    "noAnswer3": "doInBackground()"
  },
  {
    "question": "Foydalanuvchi tomonidan yaratiladagan xizmatlar (Servis) qaysi klass yordamida yaratiladi",
    "answer": "Service",
    "noAnswer1": "onBind",
    "noAnswer2": "onStartCommand",
    "noAnswer3": "Servis"
  },
  {
    "question": "Foydalanuvchi tomonidan yaratiladagan xizmatlar (Servis) qaysi buyruq orqali ilovaga tanishtiriladi",
    "answer": "&lt;service android:name=”.ServiceName” /&gt;",
    "noAnswer1": "&lt;service name=” .ServiceName” /&gt;",
    "noAnswer2": "&lt;service android=” ServiceName” /&gt;",
    "noAnswer3": "&lt;service name:android=” ServiceName” /&gt;"
  },
  {
    "question": "Ilovada servisni yoqish uchun qaysi funksiya ishlatiladi.",
    "answer": "startService",
    "noAnswer1": "startActivity",
    "noAnswer2": "startActivityForResult",
    "noAnswer3": "stopService"
  },
  {
    "question": "Dastur yordamida komponentalarga rang berish uchun ranglardan qanday foydalaniladi.",
    "answer": "Color.RED",
    "noAnswer1": "Color.Red",
    "noAnswer2": "COLOR.Red",
    "noAnswer3": "COLOR.RED"
  },
  {
    "question": "Dasturda qizil rang qanday ifodalaniladi.",
    "answer": "Color.RED",
    "noAnswer1": "Color.Red",
    "noAnswer2": "COLOR.Red",
    "noAnswer3": "COLOR.RED"
  },
  {
    "question": "Bir aktivitidan boshqa aktivitini chaqirish uchun qaysi funksiyadan foydalaniladi.",
    "answer": "startActivity",
    "noAnswer1": "startService",
    "noAnswer2": "startActivityForResult",
    "noAnswer3": "stopService"
  },
  {
    "question": "ArrayList yordamida yaratilgan obyektlar massivining uzunligini qaytaruvchi metodni ko‘rsating",
    "answer": "size()",
    "noAnswer1": "length()",
    "noAnswer2": "len()",
    "noAnswer3": "count()"
  },
  {
    "question": "ArrayList yordamida yaratilgan obyektlar massiviga yangi obyekt joylashtiruvchi metodni ko‘rsating",
    "answer": "add",
    "noAnswer1": "size",
    "noAnswer2": "insert",
    "noAnswer3": "Delete"
  },
  {
    "question": "Androiddagi ma’lumotlar yoki resurslar nimada saqlanadi.",
    "answer": "Klasslar va xususiyatlarda",
    "noAnswer1": "Klasslarda va xodisalarda",
    "noAnswer2": "Xodisalarda",
    "noAnswer3": "Obyektlada"
  },
  {
    "question": "Javada o‘zgarmaslar qaysi xizmatchi so‘z bilan e’lon qilinadi.",
    "answer": "final",
    "noAnswer1": "const",
    "noAnswer2": "static",
    "noAnswer3": "Var"
  },
  {
    "question": "Javada klass nomi bilan yonma-yon yuradigan xususiyatlar qaysi xizmatchi so‘z bilan e’lon qilinadi.",
    "answer": "static",
    "noAnswer1": "var",
    "noAnswer2": "final",
    "noAnswer3": "Const"
  },
  {
    "question": "AndroidStudio muhitida SDK ko‘rsatish uchun buyruqlar ketma–ketligini ko‘rsating.",
    "answer": "File&gt;Setting&gt;Appearance&Behavor&gt;System Settings&gt;Android SDK",
    "noAnswer1": "File &gt;Appearance&Behavor&gt;System Settings&gt;Android SDK",
    "noAnswer2": "File&gt;Setting &gt;System Settings&gt;Android SDK",
    "noAnswer3": "Setting&gt;Appearance&Behavor&gt;System Settings&gt;Android SDK"
  },
  {
    "question": "AndroidStudio muhitida mp3 fayllari qaysi resurs papkasida joylashadi.",
    "answer": "raw",
    "noAnswer1": "mp3",
    "noAnswer2": "drawable",
    "noAnswer3": "Res"
  },
  {
    "question": "Java dasturlash tilida interfeysdan voris olish uchun ishlatiladigan xizmatchi so‘zni ko‘rsating.",
    "answer": "implements",
    "noAnswer1": "extends",
    "noAnswer2": "override",
    "noAnswer3": "overload"
  },
  {
    "question": "Mobil qurilmalarda xotiralar necha turga bo‘linadi.",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "1",
    "noAnswer3": "4"
  },
  {
    "question": "Mobil qurilmalarda SD Card qanday xotira turi xisoblanadi.",
    "answer": "external",
    "noAnswer1": "internal",
    "noAnswer2": "SD",
    "noAnswer3": "Memory"
  },
  {
    "question": "Mobil qurilmalarda qurilmaning xotirasi qanday xotira turi xisoblanadi.",
    "answer": "internal",
    "noAnswer1": "SD",
    "noAnswer2": "Memory",
    "noAnswer3": "External"
  },
  {
    "question": "Ma’lumotlar bazasidan ma’lumotlar o‘qib olinganda birinchi yozuvga o‘tishni ko‘rsating.",
    "answer": "moveToFirst",
    "noAnswer1": "moveFirst",
    "noAnswer2": "first",
    "noAnswer3": "MoveToFirst"
  },
  {
    "question": "Ma’lumotlar bazasida keyingi yozuvga o‘tishni ko‘rsating.",
    "answer": "moveToNext",
    "noAnswer1": "moveNext",
    "noAnswer2": "next",
    "noAnswer3": "MoveToNext"
  },
  {
    "question": "Ilovada ishlayotgan klassni ko‘rsatish qanday amalga oshiriladi.",
    "answer": "this",
    "noAnswer1": "class",
    "noAnswer2": "this.class",
    "noAnswer3": "class.this"
  },
  {
    "question": "Obyektli ma’lumotlar tiplarining super klassini ko‘rsating",
    "answer": "Number",
    "noAnswer1": "Long",
    "noAnswer2": "Double",
    "noAnswer3": "Type"
  },
  {
    "question": "Ma’lumotlar bazasidan ma’lumotlar o‘qib olinganda oxirgi yozuvga o‘tishni ko‘rsating.",
    "answer": "moveToLast",
    "noAnswer1": "moveLast",
    "noAnswer2": "last",
    "noAnswer3": "MoveToLast"
  },
  {
    "question": "Ma’lumotlar bazasida oldingi yozuvga o‘tishni ko‘rsating.",
    "answer": "moveToPrevious",
    "noAnswer1": "movePrevious",
    "noAnswer2": "previous",
    "noAnswer3": "MoveToPrevious"
  },
  {
    "question": "Java tilida klassning konstruktori qanday nomlanadi",
    "answer": "Klass nomi bilan ustma–ust tushadi",
    "noAnswer1": "Konstruktor mavjud emas",
    "noAnswer2": "construct",
    "noAnswer3": "Construct"
  },
  {
    "question": "Java tilida klassning destruktor qanday nomlanadi",
    "answer": "Destruktor mavjud emas",
    "noAnswer1": "Klass nomi bilan ustma–ust tushadi",
    "noAnswer2": "destruct",
    "noAnswer3": "Destruct"
  },
  {
    "question": "Metodning vazifasini ko‘rsating.public boolean onCreateOptionsMenu(Menu menu){…}",
    "answer": "Menyu yaratish",
    "noAnswer1": "Qalqib chiquvchi menyu yaratish",
    "noAnswer2": "Variant yaratish",
    "noAnswer3": "Menyuni tashlash metodi"
  },
  {
    "question": "Java dasturlash tilida kirituvchi oqim nomini ko‘rsating",
    "answer": "System.in",
    "noAnswer1": "System.out",
    "noAnswer2": "in",
    "noAnswer3": "Scanner"
  },
  {
    "question": "Java dasturlash tilida chiqaruvchi oqim nomini ko‘rsating",
    "answer": "System.out",
    "noAnswer1": "in",
    "noAnswer2": "Scanner",
    "noAnswer3": "System.in"
  },
  {
    "question": "Room ma’lumotlar bazasidagi DAO so‘zining kengaytmasini ko‘rsating",
    "answer": "Data Access Object",
    "noAnswer1": "Database Access Object",
    "noAnswer2": "Development Access Object",
    "noAnswer3": "Drop Access Object"
  },
  {
    "question": "Room ma’lumotlar bazasidagi bilan ishlashda jadval uchun qaysi annotatsiya ishlatiladi?",
    "answer": "Entity",
    "noAnswer1": "Dao",
    "noAnswer2": "Tables",
    "noAnswer3": "Database"
  },
  {
    "question": "Room ma’lumotlar bazasidagi bilan ishlashda jadvalga ma’lumot qo‘shish uchun qaysi annotatsiya ishlatiladi?",
    "answer": "Insert",
    "noAnswer1": "Add",
    "noAnswer2": "Create",
    "noAnswer3": "Alter"
  },
  {
    "question": "Room ma’lumotlar bazasidagi bilan ishlashda jadvaldagi ma’lumotlarni taxrirlash uchun qaysi annotatsiya ishlatiladi?",
    "answer": "Update",
    "noAnswer1": "Edit",
    "noAnswer2": "Research",
    "noAnswer3": "Alter"
  },
  {
    "question": "Room ma’lumotlar bazasidagi bilan ishlashda jadvaldagi ma’lumotlarni o‘chirish uchun qaysi annotatsiya ishlatiladi?",
    "answer": "Delete",
    "noAnswer1": "Remove",
    "noAnswer2": "Trash",
    "noAnswer3": "Del"
  },
  {
    "question": "Room ma’lumotlar bazasidagi bilan ishlashda jadvaldagi ma’lumotlarni olish uchun qaysi annotatsiya ishlatiladi?",
    "answer": "Query",
    "noAnswer1": "Select",
    "noAnswer2": "Get",
    "noAnswer3": "Getter"
  },
  {
    "question": "Android qurilmalari uchun ekran zichligining quyidagi toifalari mavjud:",
    "answer": "LDPI, MDPI, HDPI, XHDPI, XXHDPI va XXXHDPI",
    "noAnswer1": "HDPI, XHDPI, XXHDPI va XXXHDPI",
    "noAnswer2": "to‘g‘ri javob yo‘q",
    "noAnswer3": "LDPI, MDPI, HDPI"
  },
  {
    "question": "Asosiy yorliqlar (FixedTabs) ko'rsatish uchun qulay",
    "answer": "uch yoki undan kam yorliqlardan",
    "noAnswer1": "to'rtta yorliqdan",
    "noAnswer2": "ikkita yorliqdan",
    "noAnswer3": "uch yoki undan ko'p yorliqlardan"
  },
  {
    "question": "Harakatni bajarish uchun jarayonlar panelini o'z ichiga olgan dialog oynasi",
    "answer": "ProgressDialog",
    "noAnswer1": "DatePickerDialog",
    "noAnswer2": "AlertDialog",
    "noAnswer3": "DialogFragment"
  },
  {
    "question": "Qatlamlarning qaysi biri android arxitekturasining eng quyi qatlami hisoblanadi?",
    "answer": "Linux yadrosi",
    "noAnswer1": "Tizim kutubxonalari va Android Runtime",
    "noAnswer2": "Ilovalar",
    "noAnswer3": "Ilovalar ramkasi"
  },
  {
    "question": "Bildirishnomalar qachon foydalanishga arziydi",
    "answer": "xabar muhim, lekin darhol o'qish va javob berishni talab qilmaydi",
    "noAnswer1": "xabar foydalanuvchidan javobni talab qilmaydi, lekin uning davom etishi uchun muhim",
    "noAnswer2": "xabar muhim va darhol o'qish va javob berishni talab qiladi",
    "noAnswer3": "xabar muhim, lekin darhol o'qishni talab qiladi, lekin javob emas"
  },
  {
    "question": "ProgressDialog bu:",
    "answer": "harakatlanish satrini o'z ichiga olgan dialog oynasi",
    "noAnswer1": "o'z muloqot oynalarini yaratish uchun konteyner",
    "noAnswer2": "sana yoki vaqtni tanlash imkonini beruvchi oldindan belgilangan interfeysli dialog oynasi",
    "noAnswer3": "sarlavhani o'z ichiga olishi mumkin bo'lgan dialog oynasi, uchtagacha tugmalar, tanlanadigan qiymatlar ro'yxati"
  },
  {
    "question": "AlertDialog bu:",
    "answer": "a sana yoki vaqtni tanlash imkonini beruvchi oldindan belgilangan interfeysga ega dialog oynasi",
    "noAnswer1": "o'z dialog oynalarini yaratish uchun konteyner",
    "noAnswer2": "harakatning borishi satrini o'z ichiga olgan dialog oynasi",
    "noAnswer3": "sarlavha, uchta tugmacha, tanlangan qiymatlar ro'yxati yoki moslashtirilgan tarkibni o'z ichiga olishi mumkin bo'lgan dialog oynasi"
  },
  {
    "question": "Quyidagilardan qaysi biri src papkasida joylashgan?",
    "answer": "Java manba kodi",
    "noAnswer1": "XML",
    "noAnswer2": "Manifest",
    "noAnswer3": "Yuqoridagilardan hech qaysisi"
  },
  {
    "question": "Quyidagi usullardan qaysi biri tugmani bosgandan keyin sodir bo'lishini boshqarish uchun ishlatiladi?",
    "answer": "onClick",
    "noAnswer1": "onCreate",
    "noAnswer2": "onSelect",
    "noAnswer3": "Yuqoridagilardan hech qaysisi"
  },
  {
    "question": "Quyidagi android komponentlaridan qaysi biri ekranda faoliyat qismini aks ettiradi?",
    "answer": "Fragment",
    "noAnswer1": "Ko'rinish",
    "noAnswer2": "Manifest",
    "noAnswer3": "Niyat"
  },
  {
    "question": "Quyidagilardan qaysi biri android arxitekturasining eng yuqori qatlami hisoblanadi?",
    "answer": "Ilovalar",
    "noAnswer1": "Tizim kutubxonalari va Android Runtime",
    "noAnswer2": "Linux yadrosi",
    "noAnswer3": "Ilovalar ramkasi"
  },
  {
    "question": "Qatlamlarning qaysi biri android arxitekturasining eng yuqori qatlami ostida joylashgan?",
    "answer": "Ilovalar ramkasi",
    "noAnswer1": "Tizim kutubxonalari va Android Runtime",
    "noAnswer2": "Linux yadrosi",
    "noAnswer3": "Ilovalar"
  },
  {
    "question": "Manifest.xml da nima bor?",
    "answer": "Ilova talab qiladigan ruxsat",
    "noAnswer1": "Manba kodi",
    "noAnswer2": "Ilovada ishlatiladigan satrlar ro'yxati",
    "noAnswer3": "Yuqoridagilardan hech qaysisi"
  },
  {
    "question": "Quyidagilardan qaysi biri xizmat muddatining holatiga kirmaydi?",
    "answer": "Pauza qilingan",
    "noAnswer1": "Vayron qilingan",
    "noAnswer2": "Boshlash",
    "noAnswer3": "Yugurish"
  },
  {
    "question": "Android dasturchisi sifatida biz Androidning qaysi versiyasidan minimal rivojlanish maqsadi sifatida foydalanishimiz kerak?",
    "answer": "1.6 yoki 2.0 versiyasi",
    "noAnswer1": "1.2 versiyasi yoki 1.3 versiyasi",
    "noAnswer2": "1.0 versiyasi yoki 1.1 versiyasi",
    "noAnswer3": "2.3 yoki 3.0 versiyasi"
  },
  {
    "question": "Quyidagilardan qaysi biri android versiyasining taxallusi emas?",
    "answer": "Muffin",
    "noAnswer1": "Ponchik",
    "noAnswer2": "Asal uyasi",
    "noAnswer3": "Kek"
  },
  {
    "question": "Quyidagilardan qaysi biri androidda dialog sinfi hisoblanadi?",
    "answer": "AlertDialog",
    "noAnswer1": "DatesPickerDialog",
    "noAnswer2": "ProgressDialogs",
    "noAnswer3": "TimeDialog"
  },
  {
    "question": "Faoliyat fokusda bo'lmasa-da, ekranda ko'rinsa, qaysi holatda bo'ladi?",
    "answer": "Pauza holati",
    "noAnswer1": "To'xtatilgan holat",
    "noAnswer2": "Vayron qilingan davlat",
    "noAnswer3": "Ishlayotgan holat"
  },
  {
    "question": "Quyidagilardan qaysi biri Android-ning o'rnatilgan ma'lumotlar bazasi hisoblanadi?",
    "answer": "SQLite",
    "noAnswer1": "MySQL",
    "noAnswer2": "Oracle",
    "noAnswer3": "Yuqoridagilardan hech qaysisi"
  },
  {
    "question": "Mobil ilovalarni yaratishda activitylar va mobil ilovaga kerakli barcha fayllar qaysi fayllarda saqlanadi?",
    "answer": ".xml",
    "noAnswer1": ".doc",
    "noAnswer2": ".ppt",
    "noAnswer3": ".docx"
  },
  {
    "question": "Java dasturlash tili qachon taqdim etilgan",
    "answer": "1996",
    "noAnswer1": "1994",
    "noAnswer2": "1992",
    "noAnswer3": "1990"
  },
  {
    "question": "Java dasturlash tili birinchi nomi",
    "answer": "Oak",
    "noAnswer1": "Javascript",
    "noAnswer2": "Duke",
    "noAnswer3": "Script"
  },
  {
    "question": "Kirish modifikatorlar public bu –",
    "answer": "klassni a'zolari hamma uchun mavjud",
    "noAnswer1": "klass a'zolariga faqat klass ichida kirish mumkin",
    "noAnswer2": "klass a'zolari paket ichida va avlodlarida mavjud",
    "noAnswer3": "hammasi to'gri"
  },
  {
    "question": "Kirish modifikatorlar private bu –",
    "answer": "klass a'zolariga faqat klass ichida kirish mumkin",
    "noAnswer1": "klass a'zolari paket ichida va avlodlarida mavjud",
    "noAnswer2": "klassni a'zolari hamma uchun mavjud",
    "noAnswer3": "hammasi to'gri"
  },
  {
    "question": "Kirish modifikatorlar protected bu –",
    "answer": "klass a'zolari paket ichida va avlodlarida mavjud",
    "noAnswer1": "klass a'zolariga faqat klass ichida kirish mumkin",
    "noAnswer2": "klassni a'zolari hamma uchun mavjud",
    "noAnswer3": "hammasi to'gri"
  },
  {
    "question": "Qaysi usul yangi faoliyatni boshlaydi?",
    "noAnswer1": "=\r\n#startActivity ()",
    "noAnswer2": "=\r\nstartActiviti()",
    "noAnswer3": "=\r\nintentActivity ()"
  },
  {
    "question": "xhdpi o‘lchamli ekran uchun standart o‘lchamni ko‘rsating",
    "answer": "96 px",
    "noAnswer1": "48 px",
    "noAnswer2": "72 px",
    "noAnswer3": "36 px"
  },
  {
    "question": "mdpi o‘lchamli ekran uchun standart o‘lchamni ko‘rsating",
    "answer": "48 px",
    "noAnswer1": "36 px",
    "noAnswer2": "72 px",
    "noAnswer3": "32 px"
  },
  {
    "question": "Quyidagilardan qaysi biri Android 1.5 versiyasining nomi?",
    "answer": "Kek",
    "noAnswer1": "Ekler",
    "noAnswer2": "Froyo",
    "noAnswer3": "Ponchik"
  },
  {
    "question": "Quyidagilardan qaysi biri Android 1.6 versiyasining nomi?",
    "answer": "Ponchik",
    "noAnswer1": "Ekler",
    "noAnswer2": "Froyo",
    "noAnswer3": "Kek"
  },
  {
    "question": "Java 5 versiyasi nechanchi yilda ishlab chiqarilgan",
    "answer": "2004",
    "noAnswer1": "2000",
    "noAnswer2": "2002",
    "noAnswer3": "2006"
  },
  {
    "question": "Java 6 versiyasi nechanchi yilda ishlab chiqarilgan",
    "answer": "2006",
    "noAnswer1": "2005",
    "noAnswer2": "2004",
    "noAnswer3": "2003"
  },
  {
    "question": "... - bu Android tizimining yadrosi hisoblanadi",
    "answer": "Linux kernel",
    "noAnswer1": "Dalvik",
    "noAnswer2": "Virtual machine",
    "noAnswer3": "SDK"
  },
  {
    "question": "Tarmoqli ilovalar yaratishda manzillarni qaysi klass yordamida yaratiladi.",
    "answer": "Url",
    "noAnswer1": "Uri",
    "noAnswer2": "HttpURLConnection",
    "noAnswer3": "URLConnection"
  },
  {
    "question": "Assorsiativ massiv yaratuvchi klassni ko‘rsating.",
    "answer": "HashMap",
    "noAnswer1": "List",
    "noAnswer2": "ArrayList",
    "noAnswer3": "ArrayMap"
  },
  {
    "question": "Quyidagilardan qaysi biri xizmatning asosiy toifasi hisoblanadi?",
    "answer": "contextWrapper",
    "noAnswer1": "kontekst",
    "noAnswer2": "ob'ekt",
    "noAnswer3": "contextThemeWrapper"
  },
  {
    "question": "Dialog oynasini o‘krsatuvchi metodni ko‘rsating.",
    "answer": "show()",
    "noAnswer1": "create()",
    "noAnswer2": "new()",
    "noAnswer3": "AlertDialog()"
  },
  {
    "question": "SMS larni jo‘natish uchun ishlatiladigan klassni ko‘rsating.",
    "answer": "SmsManager",
    "noAnswer1": "SMS",
    "noAnswer2": "SMSSend",
    "noAnswer3": "SendSMS"
  },
  {
    "question": "Java dasturlash tilini kim yaratgan –",
    "answer": "James Gosling",
    "noAnswer1": "Linus Torwalds",
    "noAnswer2": "Pavel Durov",
    "noAnswer3": "Bill Gates"
  },
  {
    "question": "Java 7 versiyasi nechanchi yilda ishlab chiqarilgan",
    "answer": "2011",
    "noAnswer1": "2010",
    "noAnswer2": "2009",
    "noAnswer3": "2008"
  },
  {
    "question": "Obyektni bo‘sh xolatga keltiruvchi kattalikni ko‘rsating.",
    "answer": "null",
    "noAnswer1": "nil",
    "noAnswer2": "nul",
    "noAnswer3": "Zero"
  },
  {
    "question": "Quyidagilardan qaysi biri Faoliyatning asosiy sinfidir?",
    "answer": "contextThemeWrapper",
    "noAnswer1": "kontekst",
    "noAnswer2": "ob'ekt",
    "noAnswer3": "Yuqoridagilardan hech qaysisi"
  },
  {
    "question": "Dialog oynasini yaratuvchi metodni ko‘rsating.",
    "answer": "create()",
    "noAnswer1": "new()",
    "noAnswer2": "show()",
    "noAnswer3": "AlertDialog()"
  },
  {
    "question": "Quyidagi qaysi varaqda xatolik ko'rsatilgan?",
    "answer": "Logcat",
    "noAnswer1": "Markaziy protsessor",
    "noAnswer2": "Xotira",
    "noAnswer3": "OTB jurnallari"
  },
  {
    "question": "Agar biz bir nechta elementlarni joylashtirmoqchi bo'lsak, ular ustma-ust paydo bo’ladi.",
    "answer": "FrameLayout",
    "noAnswer1": "AbsoluteLayout",
    "noAnswer2": "ConstraintsLayout",
    "noAnswer3": "LinearLayout"
  },
  {
    "question": "Aktivitini to‘xtatish buyrug‘ini ko‘rsating",
    "answer": "finish",
    "noAnswer1": "stopActivity",
    "noAnswer2": "stopService",
    "noAnswer3": "Stop"
  },
  {
    "question": "JSON da yozilgan ma’lumotlar massivlar qanday belgilar orasida beriladi.",
    "answer": "[ ]",
    "noAnswer1": "{ }",
    "noAnswer2": "( )",
    "noAnswer3": "&lt; &gt;"
  },
  {
    "question": "Qaysi yilda OHA (Open Handset Alliance) e'lon qilinadi?",
    "answer": "2007 yil",
    "noAnswer1": "2005 yil",
    "noAnswer2": "2006 yil",
    "noAnswer3": "Yuqoridagilardan hech qaysisi"
  },
  {
    "question": "Quyidagilardan noto’g’risini aniqlang.",
    "answer": "onResume() — ushbu metod activity ish faoliyati to‘xtatib, qayta ishga tushirilganida chiqariladi.",
    "noAnswer1": "Mobil ilovalarda activity bo‘lmasligi ham va bir nechta activity bo‘lishi mumkin",
    "noAnswer2": "Activity mobil qurilmaning ekranida paydo bo‘lganidan faoliyatini yakunlaganga qadar bir nechta bosqichlarni bosib o‘tadi",
    "noAnswer3": "onDestroy() — bu metod activity to‘xtatilgan vaqtda chaqiriladi"
  },
  {
    "question": "onPause() activity metodining vazifasini aniqlang",
    "answer": "Ushbu metod joriy activity faoliyati vaqtinchalik to‘xtatib, boshqa activity faollashtirilganda chaqiriladi",
    "noAnswer1": "Ushbu metod activity foydalanuvchiga ko‘rinmay qolganida chaqiriladi",
    "noAnswer2": "Bu metodning vazifasi activity yaratilganida berilgan ketma–ketliklarni bajarishdan iborat va bir marta bajariladi",
    "noAnswer3": "Bu metod activity mobil qurilmaning oynasida hosil bo‘lganda, ya’ni foydalanuvchiga ko‘ringanida chaqiriladi"
  },
  {
    "question": "Bu murakkabroq tuzilma ro'yxatini ma'lumotlar bilan to'ldirish imkonini beruvchi adapter, masalan, ro'yxatning bir qatoridagi ikkita matn.",
    "answer": "SimpleAdapter",
    "noAnswer1": "BaseAdapter",
    "noAnswer2": "WrapperListAdapter",
    "noAnswer3": "SpinnerAdapter"
  },
  {
    "question": "Agar sizga shaxsiy adapter kerak bo'lsa, Android kengaytirilishi mumkin bo'lgan abstrakt … klassiga ega.",
    "answer": "BaseAdapter",
    "noAnswer1": "SpinnerAdapter",
    "noAnswer2": "ArrayAdapter",
    "noAnswer3": "SimpleAdapter"
  },
  {
    "question": "ArrayAdapter to’g’ri e’lon qilingan qatorni aniqlang.",
    "answer": "<pre>ArrayAdapter adapter = new ArrayAdapter(this,R.layout.ListView,StringArray);</pre>",
    "noAnswer1": "<pre>ArrayAdapter adapter = new ArrayAdapter(this,StringArray, R.layout.ListView);</pre>",
    "noAnswer2": "<pre>ArrayAdapter adapter = new ArrayAdapter(this,StringArray, R.layout.ListView, v.getContext());</pre>",
    "noAnswer3": "<pre>ArrayAdapter adapter = new ListAdapter(this,R.layout.ListView,StringArray);</pre>"
  },
  {
    "question": "Dart dasturlash tilida to’plamga tegishli ta’rifni aniqlang",
    "answer": "Tartibsiz, noyob elementlar to'plamidir",
    "noAnswer1": "Tartibli noyob elementlar to'plamidir",
    "noAnswer2": "Tartibsiz, noyob bo’lmagan elementlar to'plamidir",
    "noAnswer3": "Tartibli, noyob bo’lmagan elementlar to'plamidir"
  },
  {
    "question": "Quyidagilardan noto’g’risini aniqlang.",
    "answer": "SetPrior() tomonidan o'rnatilgan bildirishnoma ustuvorligi. Ustuvorlik Android 8 va undan oldingi versiyalarda bildirishnoma qanchalik ustuvor ekanligini aniqlaydi.",
    "noAnswer1": "Android telefonidagi barcha bildirishnomalar \"kanal\" ga tegishli bo'lishi kerak, shunda foydalanuvchi ilovangizdan ma'lum turdagi bildirishnomalarni qanday ko'rishni xohlashini sozlashi mumkin",
    "noAnswer2": "Kanal - bu Google Android API darajasi 26 da taqdim etgan bildirishnomalarni ko'rsatish sozlamalari to'plami",
    "noAnswer3": "NotificationCompat.Builder konstruktori sizdan kanal identifikatorini taqdim etishingizni talab qiladi"
  },
  {
    "question": "Dart dasturlash tilida bo’sh bo’lgan to’plam e’lon qilingan qatorni aniqlang.",
    "answer": "<pre>var names = {};</pre>",
    "noAnswer1": "<pre>var names = ();</pre>",
    "noAnswer2": "<pre>var names = [];</pre>",
    "noAnswer3": "<pre>var names = [{}];</pre>"
  },
  {
    "question": "Xaritaning ko’rinish turini (sun’iy yo’ldosh, gibrid va h.k) o’zgartirish uchun qaysi metoddan foydalaniladi?",
    "answer": "setMapType",
    "noAnswer1": "getMapType",
    "noAnswer2": "setMapStyle",
    "noAnswer3": "getUiSettings"
  },
  {
    "question": "Xabarnoma yaratish to’g’ri ko’rsatilgan qatorni aniqlang.",
    "answer": "<pre>NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)\r\n        .setSmallIcon(R.drawable.notification_icon)\r\n        .setContentTitle(textTitle)\r\n        .setContentText(textContent)\r\n        .setPriority(NotificationCompat.PRIORITY_DEFAULT);</pre>",
    "noAnswer1": "<pre>NotificationCompat builder = new NotificationCompat.Builder(this, CHANNEL_ID)\r\n        .setSmallIcon(R.drawable.notification_icon)\r\n        .setContentTitle(textTitle)\r\n        .setContentText(textContent)\r\n        .setPriority(NotificationCompat.PRIORITY_DEFAULT);</pre>",
    "noAnswer2": "<pre>NotificationCompat.App builder = new NotificationCompat.App(this, CHANNEL_ID)\r\n        .setSmallIcon(R.drawable.notification_icon)\r\n        .setContentTitle(textTitle)\r\n        .setContentText(textContent)\r\n        .setPriority(NotificationCompat.PRIORITY_DEFAULT);</pre>",
    "noAnswer3": "<pre>NotificationCompat.Notification builder = new NotificationCompat.Notification(this, CHANNEL_ID)\r\n        .setSmallIcon(R.drawable.notification_icon)\r\n        .setContentTitle(textTitle)\r\n        .setContentText(textContent)\r\n        .setPriority(NotificationCompat.PRIORITY_DEFAULT);</pre>"
  },
  {
    "question": "Quyidagilardan noto’g’risini aniqlang.",
    "answer": "SQLite ma’lumotlar bazasi klient-server arxitekturasiga asosan ishlaydi hamda bu uning eng asosiy afzalliklaridan biri hisoblanadi",
    "noAnswer1": "REST xizmatlarining ajoyib tomoni shundak ular HTTP protokolidan maksimal darajada foydalanishadi.",
    "noAnswer2": "REST - bu veb API yaratish uchun qoidalar, standartlar, yo'riqnomalar to'plami.",
    "noAnswer3": "API sizga himoya qilinishi kerak bo'lgan funksiyalarni alohida ilovaga joylashtirish imkonini beradi. Bu boshqa dasturlar tomonidan ushbu funksiyalardan noto'g'ri foydalanish ehtimolini kamaytiradi."
  },
  {
    "question": "<pre>\r\npublic class Main {\r\n  public static void main(String[] args) {\r\n            String $num1 = \"2565\";\r\n            String $num2 = \"6515\";\r\n            String _result = $num1 + $num2;\r\n            System.out.println(_result);\r\n  }\r\n}\r\n</pre>Dastur natijasini aniqlang.",
    "answer": "25656515",
    "noAnswer1": "9080",
    "noAnswer2": "Xatolik",
    "noAnswer3": "Null"
  },
  {
    "question": "Dart dasturlash tilida <pre>var list = [1, 2, 3];</pre> ro’yxatning uzunligi qanday aniqlanadi?",
    "answer": "list.length",
    "noAnswer1": "list.length()",
    "noAnswer2": "length(list)",
    "noAnswer3": "list.len"
  },
  {
    "question": "JSON kengaytmasini aniqlang.",
    "answer": "JavaScript Object Notation",
    "noAnswer1": "Java Source Open Network",
    "noAnswer2": "JavaScript Output Name",
    "noAnswer3": "Java Standard Output Network"
  },
  {
    "question": "Kross platformali dastur - …",
    "answer": "Bir nechta operatsion tizimlarda ishlashi mumkin bo’lgan dastur",
    "noAnswer1": "Bir nechta dasturlash tilidan foydalanib ishlab chiqilgan dastur",
    "noAnswer2": "Bir nechta kompyuterlarda parallel ishlashi mumkin dastur",
    "noAnswer3": "Kotlin dasturlash tilida yaratilgan dastur"
  },
  {
    "question": "Google Maps API kalitlarini qaysi faylda saqlash tavsiya etiladi?",
    "answer": "local.properties",
    "noAnswer1": "AndroidManifest.xml",
    "noAnswer2": "build.gradle.kts",
    "noAnswer3": "activity_main.xml"
  },
  {
    "question": "Android Studiodagi loyihada \"res\" katalogining vazifasi?",
    "answer": "Tasvirlar, satrlar va maketlar kabilarni saqlaydi",
    "noAnswer1": "Klasslar, interfeyslar va boshqa asosiy Java fayllarini o’zida saqlaydi",
    "noAnswer2": "Ilovaning hayot siklini boshqaradi",
    "noAnswer3": "Ilova haqidagi eng asosiy ma’lumotlarni saqlaydi"
  },
  {
    "question": "Java dasturlash tilida butun sonli qiymatga ega bo'lgan o'zgaruvchini e'lon qilish uchun to'g'ri sintaksis qanday?",
    "answer": "<pre>int age = 25025;</pre>",
    "noAnswer1": "<pre>Int age = 56021;</pre>",
    "noAnswer2": "<pre>Int age = \"25174\";</pre>",
    "noAnswer3": "<pre>integer age = 25;</pre>"
  },
  {
    "question": "... - bu nisbiy pozitsiyalarda elementlar ko'rinishlarini ko'rsatadigan ko'rish guruhi",
    "answer": "RelativeLayout",
    "noAnswer1": "FrameLayout",
    "noAnswer2": "AbsoluteLayout",
    "noAnswer3": "ConstraintsLayout"
  },
  {
    "question": "Dialog oynasi bilan ishlashda foydalanuvchi harakatni davom ettirishni xohlamasa, lekin bekor qilishni ham xohlamasa, undan foydalaniladi.",
    "answer": "Neytral tugma",
    "noAnswer1": "Pozitiv tugma",
    "noAnswer2": "Negativ tugma",
    "noAnswer3": "FloatingActionButton"
  },
  {
    "question": "Dialog oynasini yaratish to’g’ri ko’rsatilgan qatorni aniqlang",
    "answer": "<pre>AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());</pre>",
    "noAnswer1": "<pre>AlertDialog builder = new AlertDialog.Builder(getActivity());</pre>",
    "noAnswer2": "<pre>AlertDialog.Builder builder = new AlertDialog(getActivity());</pre>",
    "noAnswer3": "<pre>AlertDialog.Builder builder = new AlertDialog.Builder(builder);</pre>"
  },
  {
    "question": "Asosiy dialog oynasida ro’yxat hosil qilish uchun qaysi metoddan foydalaniladi?",
    "answer": "setItems()",
    "noAnswer1": "setList()",
    "noAnswer2": "arrayList()",
    "noAnswer3": "mergedList()"
  },
  {
    "question": "Quyidagilardan noto’g’risini aniqlang.",
    "answer": "ArrayAdapter - RecyclerView bilan ishlash uchun mo'ljallangan. Ma'lumotlar alohida TextView elementlariga joylashtirilgan massiv sifatida taqdim etiladi",
    "noAnswer1": "HeaderViewListAdapter ListView sarlavhalari bo'lsa, ListAdapterning kengaytirilgan versiyasidir",
    "noAnswer2": "Android 6 versiyada xabarnoma yuborish uchun ruxsat kerak bo’lmaydi",
    "noAnswer3": "ListAdapter - ListView va ma'lumotlar o'rtasidagi adapter. Bu ArrayAdapter va SimpleAdapter va boshqalarda ishlatilishi mumkin bo'lgan interfeys sinfidir"
  },
  {
    "question": "Quyidagilardan to’g’risini aniqlang",
    "answer": "ArrayAdapterdan ma'lumotlar manbangiz massiv bo'lganda foydalansangiz bo’ladi",
    "noAnswer1": "android:entries - bu ajratuvchi balandligini belgilaydi. Bu px, dp, sp, in yoki mm bo'lishi mumkin.",
    "noAnswer2": "android:divider - False bo’lganda, ListView har bir pastki ko'rinishidan oldin bo'luvchini chizmaydi. Standart qiymat True.",
    "noAnswer3": "Android 8 versiyadan boshlab xabarnoma uchun ruxsat kerak bo’ladi"
  },
  {
    "question": "Quyidagilardan noto’g’risini aniqlang",
    "answer": "RecyclerViewda RecyclerView.LayoutManager mavjud emas va buning uning afzalliklaridan biri",
    "noAnswer1": "RecyclerView Android 5.0 Lollipopda ListView orqali yangilanish sifatida taqdim etilgan",
    "noAnswer2": "ListView komponentida elementlarni qo'shish yoki o'chirishni animatsiyalash mumkin bo'lgan maxsus qoidalar mavjud emas",
    "noAnswer3": "ListView faqat vertikal chiziqli tartibdagi elementlarni joylashtirishi mumkin va buni moslashtirib bo'lmaydi"
  },
  {
    "question": "Harakatlarni menyuga ulash uchun faoliyat klassida … metodini bog’lash kerak bo’ladi.",
    "answer": "onOptionsItemSelected",
    "noAnswer1": "MenuInflater",
    "noAnswer2": "getMenuInflater",
    "noAnswer3": "onCreateOptionsMenu"
  },
  {
    "question": "Androidning qaysi API darajasidan boshlab xabarnoma yuborish uchun ruxsat kerak bo’ladi?",
    "answer": "API level 33",
    "noAnswer1": "API level 34",
    "noAnswer2": "API level 30",
    "noAnswer3": "API level 26"
  },
  {
    "question": "Androidda xabarnoma yuborish uchun kerak bo’ladigan ruxsat nomini aniqlang.",
    "answer": "POST_NOTIFICATIONS",
    "noAnswer1": "GET_NOTIFICATIONS",
    "noAnswer2": "PERMISSION_NOTIFICATIONS",
    "noAnswer3": "ALLOW_NOTIFICATIONS"
  },
  {
    "question": "Quyidagilardan qaysi biri Room kutubxonasiga tegishli emas?",
    "answer": "Room MySQL orqali abstraksiya qatlamini ta'minlaydi",
    "noAnswer1": "Kotlin yoki Java yordamida Android qurilmasida mahalliy SQLite ma'lumotlar bazasini osongina yaratish va boshqarish imkonini beradi",
    "noAnswer2": "Room ishlab chiquvchilarga murakkab SQL so'rovlarini yozmasdan ma'lumotlar bazasi bilan o'zaro ishlashni osonlashtiradi",
    "noAnswer3": "“Database Inspector” instrumenti yordamida ma’lumotlar bazasining joriy holatini ko’rish mumkin"
  },
  {
    "question": "Room kutubxonasida ... ma'lumotlarni kiritish, yangilash, o'chirish va olish metodlarini belgilaydi.",
    "answer": "Data Access Object",
    "noAnswer1": "Entity",
    "noAnswer2": "LiveData va ViewModel",
    "noAnswer3": "Android Jetpack"
  },
  {
    "question": "Java dasturlash tilida noto’g’ri e’lon qilingan o’zgaruvchini aniqlang.",
    "answer": "<pre>char myGrade = “91”;</pre>",
    "noAnswer1": "<pre>String myGrade = “Ikki baho”;</pre>",
    "noAnswer2": "<pre>String $myGrade = “Besh baho”;</pre>",
    "noAnswer3": "<pre>int _myGrade = 100;</pre>"
  },
  {
    "question": "Androidda aniq geojoylashuv uchun kerak bo’ladigan ruxsat nomini aniqlang",
    "answer": "ACCESS_FINE_LOCATION",
    "noAnswer1": "ACCESS_COARSE_LOCATION",
    "noAnswer2": "ACCESS_ACCURATE_LOCATION",
    "noAnswer3": "ACCESS_CURRENT_LOCATION"
  },
  {
    "question": "Dart dasturlash tilida <pre>var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};</pre> berilgan to’plamdagi uchinchi elementga qanday murojaat qilinadi?",
    "answer": "Murojaat qilish mumkin emas",
    "noAnswer1": "halogens[3]",
    "noAnswer2": "halogens(3)",
    "noAnswer3": "halogens{3}"
  },
  {
    "question": "Dart dasturlash tilida <pre>var list = [132, 22342, 33424, 456484];</pre> berilgan ro’yxatdagii uchinchi elementga qanday murojaat qilinadi?",
    "answer": "list[3]",
    "noAnswer1": "list{3}",
    "noAnswer2": "list(3)",
    "noAnswer3": "Murojaat qilish mumkin emas"
  },
  {
    "question": "Android qurilmalar uchun ilovalar yozish muhitini ko‘rsating",
    "answer": "Android Development Tools",
    "noAnswer1": "Android Virtual Device",
    "noAnswer2": "Android SDK",
    "noAnswer3": "JDK"
  },
  {
    "question": "AndroidStudio da xarita (Karta)lar bilan ishlovchi komponentani ko‘rsating",
    "answer": "MapView",
    "noAnswer1": "CardView",
    "noAnswer2": "MapCard",
    "noAnswer3": "CardMap"
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