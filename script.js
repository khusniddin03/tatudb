const data = [
  {
    "question": "CIFAR10 datasetda necha tanlama bor",
    "answer": "60000",
    "noAnswer1": "70000",
    "noAnswer2": "50000",
    "noAnswer3": "10000"
  },
  {
    "question": "O’ratuvchi tanlamadagi test to’plam bu?",
    "answer": "modelni testlash uchun ishlatiladi",
    "noAnswer1": "modelni o’qitish uchun ishlatiladi",
    "noAnswer2": "Modelni o’qitish davomida model parametrlarini sozlash uchun ishlatiladi",
    "noAnswer3": "Bu turdagi o’rgatuvchi tanlamadan foydalanilmaydi"
  },
  {
    "question": "Owerfitting bu - …",
    "answer": "Model juda muarkkab. Shuning evaziga model train to’plamda past, test to’plamda yuqori\r\nxatolik bo’lishiga olib keladi",
    "noAnswer1": "Model juda soda. Shuning evaziga model train to’plamda ham, test to’plamda katta xatolikbo’lishiga olib keladi",
    "noAnswer2": "Model juda muakkab. Shuning evaziga model train to’plamda ham, test to’plamda kattaxatolik bo’lishiga olib keladi",
    "noAnswer3": "Model juda soda. Shuning evaziga model train to’plamda yuqori, test to’plamda past xatolikbo’lishiga olib keladi"
  },
  {
    "question": "Logistik regressiya masalasida asosan qaysi aktivlashtirish funksiyasidan foydalaniladi?",
    "answer": "Sigmoid",
    "noAnswer1": "Tanh",
    "noAnswer2": "ReLU",
    "noAnswer3": "Sigmoid va ReLU"
  },
  {
    "question": "Model qurishda bo’ladigan Underfitting muammosi qanday hal qilsa bo’ladi?",
    "answer": "Modelni murakkabligini oshirib ko’rish kerak",
    "noAnswer1": "Modelni murakkabligini pasaytirib ko’rish kerak",
    "noAnswer2": "Bu muammoni hal qilishning imkoni yoq",
    "noAnswer3": "Datasetni hajmini kamaytirib ko’rish kerak"
  },
  {
    "question": "Model qurishda bo’ladigan Owerfitting muammosi qanday hal qilsa bo’ladi?",
    "answer": "Modelni murakkabligini pasaytirib ko’rish kerak",
    "noAnswer1": "Modelni murakkabligini oshirib ko’rish kerak",
    "noAnswer2": "Bu muammoni hal qilishning imkoni yoq",
    "noAnswer3": "Datasetni hajmini kamaytirib ko’rish kerak"
  },
  {
    "question": "O’rgatuvchi tanlama nima?",
    "answer": "bu o’qitish uchun kerakli bo’lgan ma'lumotlar to'plamidir",
    "noAnswer1": "bu o’qitish uchun kerakli bo’lgan neyronlar to'plamidir",
    "noAnswer2": "bu o’qitish uchun kerakli bo’lgan og’irliklar to'plamidir",
    "noAnswer3": "bu o’qitish uchun kerakli bo’lgan neyron tarmoq qatlamlar to'plamidir"
  },
  {
    "question": "O’ratuvchi tanlamadagi train to’plam …",
    "answer": "modelni o’qitish uchun ishlatiladi",
    "noAnswer1": "modelni testlash uchun ishlatiladi",
    "noAnswer2": "Modelni o’qitish davomida model parametrlarini sozlash uchun ishlatiladi",
    "noAnswer3": "Bu turdagi o’rgatuvchi tanlamadan foydalanilmaydi"
  },
  {
    "question": "O’ratuvchi tanlamadagi val (validation) to’plam bu?",
    "answer": "Modelni o’qitish davomida model parametrlarini sozlash uchun ishlatiladi",
    "noAnswer1": "modelni o’qitish uchun ishlatiladi",
    "noAnswer2": "modelni testlash uchun ishlatiladi",
    "noAnswer3": "Bu turdagi o’rgatuvchi tanlamadan foydalanilmaydi"
  },
  {
    "question": "Neyron tarmoqlarida sinflashtirish masalasini yechishda chiquvchi qatlamda qaysi turdagi\r\naktivlash funksiyasidan foydalaniladi",
    "answer": "Softmax",
    "noAnswer1": "Sigmoid",
    "noAnswer2": "ReLu",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Nima uchun logistik regressiyada sigmoid funksiyadan foydalaniladi?",
    "answer": "qiymatlarni (0,1) oraliqda keltirish",
    "noAnswer1": "qiymatlarni [-1,1] oraliqda keltirish",
    "noAnswer2": "qiymatlarni [0,1] oraliqda keltirish",
    "noAnswer3": "qiymatlarni (-1,1) oraliqda keltirish"
  },
  {
    "question": "Logistik regressiyada qaror chegrasi uchun topilgan modeldan olingan qiymat qaysi\r\nbo’sag’a qiymati orqali solishtiriladi va qaror qabul qilinadi?",
    "answer": "0",
    "noAnswer1": "1",
    "noAnswer2": "0.5",
    "noAnswer3": "-1 va 1"
  },
  {
    "question": "SVM algoritmida suppor vectors bu?",
    "answer": "Sinflashtirishnig chegara sohasi bo’lib, eng yaqin tanlanmalar uni xarakterlaydi",
    "noAnswer1": "Sinflashtirishnig chegara sohasi bo’lib, eng uzoq tanlanmalar uni xarakterlaydi",
    "noAnswer2": "Sinflashtirishnig chegara sohasi bo’lib, eng yaqin tanlanmalar uni xarakterlamaydi",
    "noAnswer3": "Sinflashtirishnig chegara sohasi bo’lib, eng uzoq tanlanmalar uni xarakterlamaydi"
  },
  {
    "question": "SVM algoritmidagi hisoblaanadigan orqaliq (margin) qanday bo’lsa model ishonchli debtopiladi?",
    "answer": "Oraliq eng kattta bo’lsa",
    "noAnswer1": "Oraliq eng kichik bo’lsa",
    "noAnswer2": "Oraliq hech narsani anglatmaydi",
    "noAnswer3": "To’gri javob yo’q"
  },
  {
    "question": "SVM algoritmida yadro(kernel) funksiyalari nima uchun xizmat qiladi?",
    "answer": "Kiruvchi xususiyatlarni ma’lum o’lchov sohasidan boshqasiga o’zgartirish uchun xizmat qiladi. Misol uchun 1D -&gt; 2D",
    "noAnswer1": "Kiruvchi xususiyatlarni 1D o’lchov sohasidan 2D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi",
    "noAnswer2": "Kiruvchi xususiyatlarni 2D o’lchov sohasidan 1D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi",
    "noAnswer3": "Kiruvchi xususiyatlarni 2D o’lchov sohasidan 3D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi"
  },
  {
    "question": "SVM orqali ..",
    "answer": "Faqat bir nechta sinfga tegishli bo’lgan obyektlar sinflanadi",
    "noAnswer1": "Faqat ikkita sinfga tegishli bo’lgan obyektlar sinflanadi",
    "noAnswer2": "Faqat regressiya masalasini yechish mumkin",
    "noAnswer3": "Ham sinflashrish, ham regressiya masalasini ishlash mumkin."
  },
  {
    "question": "Qidiruv tizimlarida sun’iy intellektdan foydalanish mumkinmi",
    "answer": "ha, mumkin va hozirda keng qo‘llanilmoqda (misol uchun Google, Yandex qidiruv tizimlari)",
    "noAnswer1": "qisman amaliy natijalari bor lekin yetarlicha nazariy jihatdan formallashtirilmagan",
    "noAnswer2": "nazariy jihatdan mumkin, lekin hozircha amaliy jihatdan natijalarga erishilmagan",
    "noAnswer3": "qidiruv tizimlarida sun’iy intellektdan foydalanish qidiruv vaqtini oshiradi"
  },
  {
    "question": "Logistik regression model nima uchun ishlatiladi",
    "answer": "Sinflashtirsh masalasini yechish uchun",
    "noAnswer1": "Klasterlash masalasini ishlash uchun",
    "noAnswer2": "Neyron tarmoqni qurish uchun",
    "noAnswer3": "Qiymatni bashoratlash uchun"
  },
  {
    "question": "Numpy kutubxonasidagi polyfit() funksiyasi nima uchun ishlatiladi?",
    "answer": "Chiziqli regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer1": "Loginstik regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer2": "Chiziqli va logistik regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer3": "Polynom funksiya yaratish uchun"
  },
  {
    "question": "Numpy kutubxonasidagi poly1d() funksiyasi nima uchun ishlatiladi?",
    "answer": "Berilgan parametrlar asosida polinomal funksiya hosil qilish",
    "noAnswer1": "Berilgan parametrlar asosida polinomal Class hosil qilish",
    "noAnswer2": "Berilgan parametrlar asosida logistik regressiya modelini qurish",
    "noAnswer3": "Berilgan parametrlar asosida giperbolik regressiya modelini qurish"
  },
  {
    "question": "Neyron tarmoqlarini qurishga mo’ljallangan python kutubxonalarini ko'rsating.",
    "answer": "Numpy, keras, tensorflow",
    "noAnswer1": "Numpy, pandas, keras",
    "noAnswer2": "Tensorflow, numpy, pandas",
    "noAnswer3": "Python, Matlab, Octave"
  },
  {
    "question": "Neyron tarmoq asosida sinflashtirish masalasini yechish mumkinmi?",
    "answer": "Ha",
    "noAnswer1": "Yoq, faqat regressiya masalasini yechadi.",
    "noAnswer2": "Faqat ikkilik sinflashtirganda",
    "noAnswer3": "Yoq, klasterlash masalasini yechadi."
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati -5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o‟zgaradi",
    "answer": "0",
    "noAnswer1": "44682",
    "noAnswer2": "5",
    "noAnswer3": "-5"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati 0 ga teng. Ushbu tugun sigmoid funksiyasi yordamidafaollashtirilsa qanday qiymatga o’zgaradi",
    "answer": "0.5",
    "noAnswer1": "0",
    "noAnswer2": "1",
    "noAnswer3": "2.785661"
  },
  {
    "question": "Hozirgi kunda butun dunyoda rivojlanib borayotgan mashinali o’qitish (machine learning), chuqur o’qitish (deep learning) kabi usullar sun’iy intellekt bilan qanday bog’liq",
    "answer": "hozirda tasvirlardan ob’ektlarni tanib olish, video nazorat, ovozni tanib olish kabi sohalardakeng foydalaniladi va sun’iy intellekt tizimini yaratishda katta ahamiyat kasb etadi",
    "noAnswer1": "faqat ovozni tanib olishda ishlatiladi va sun’iy intellekt tizimini yaratishda deyarli\r\nfodalanilmaydi",
    "noAnswer2": "tasvirlarni tanib olishda ishlatiladi va sun’iy intellekt tizimini yaratishda foydalaniladi",
    "noAnswer3": "faqatgina ma’lumotlarning intellektual tahliliga oid"
  },
  {
    "question": "Chuqur o’qitish qanday tarmoqlari asosida amalga oshiriladi?",
    "answer": "neyron tarmoqlar asosida",
    "noAnswer1": "lokal tarmoqlar asosida",
    "noAnswer2": "global tarmoqlar asosida",
    "noAnswer3": "internet tarmoqlar asosida"
  },
  {
    "question": "Chuqur o’qitish necha asosiy bosqichlardan tashkil topgan?",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "6"
  },
  {
    "question": "Chuqur o’qitishning birinchi bosqichi qanday jarayondan iborat?",
    "answer": "Muammoni tushunib olish.",
    "noAnswer1": "Ma’lumotlarni aniqlash.",
    "noAnswer2": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer3": "Modelni o’qitish."
  },
  {
    "question": "Chuqur o’qitishning ikkinchi bosqichi qanday jarayondan iborat?",
    "answer": "Ma’lumotlarni aniqlash.",
    "noAnswer1": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer2": "Modelni o’qitish.",
    "noAnswer3": "Modelni testlash."
  },
  {
    "question": "Chuqur o’qitishning turtinchi bosqichi qanday jarayondan iborat?",
    "answer": "Modelni o’qitish.",
    "noAnswer1": "Modelni testlash.",
    "noAnswer2": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer3": "Muammoni tushunib olish."
  },
  {
    "question": "Chuqur o’qitishning oxirgi bosqichi qanday jarayondan iborat?",
    "answer": "Modelni testlash.",
    "noAnswer1": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer2": "Modelni o’qitish.",
    "noAnswer3": "Ma’lumotlarni aniqlash."
  },
  {
    "question": "MNIST dataset da nechta sinfga tegishli obyektlarni ma’lumotlari bor",
    "answer": "10",
    "noAnswer1": "9",
    "noAnswer2": "100",
    "noAnswer3": "3"
  },
  {
    "question": "CIFAR10 dataset da nechta sinfga tegishli obyektlarini ma’lumotlari bor",
    "answer": "10",
    "noAnswer1": "9",
    "noAnswer2": "100",
    "noAnswer3": "3"
  },
  {
    "question": "CIFAR10 datasetda tasvirlarning o’lchami qaysi o’lchamda",
    "answer": "To’g’ri javob yo’q",
    "noAnswer1": "28x28",
    "noAnswer2": "128x128",
    "noAnswer3": "64x64"
  },
  {
    "question": "CIFAR10 datasetda necha tanlama bor",
    "answer": "60000",
    "noAnswer1": "70000",
    "noAnswer2": "50000",
    "noAnswer3": "10000"
  },
  {
    "question": "CIFAR100 dataset da nechta sinfga tegishli obyektlarni ma’lumotlari bor",
    "answer": "100",
    "noAnswer1": "99",
    "noAnswer2": "10",
    "noAnswer3": "2"
  },
  {
    "question": "IRIS dataset da nechta sinfga tegishli obyektlarni ma’lumotlari bor",
    "answer": "3",
    "noAnswer1": "2",
    "noAnswer2": "10",
    "noAnswer3": "2"
  },
  {
    "question": "IRIS dataset da obyektni xarakterlovchi xususiyatlari nechta",
    "answer": "4",
    "noAnswer1": "2",
    "noAnswer2": "3",
    "noAnswer3": "8"
  },
  {
    "question": "pip install tensorflow buyrug’i asosida nima sodir bo’ladi?",
    "answer": "tensorflow kutubxonasi o’rnatiladi",
    "noAnswer1": "keras va tensorflow kutubxonasi o’rnatiladi",
    "noAnswer2": "tensorflow kutubxonasi chaqiriladi",
    "noAnswer3": "keras va tensorflow kutubxonasi chaqiriladi"
  },
  {
    "question": "Chiziqli regression modelni qurib bo’lganimizdan so’ng modelni train dataset bilantestlanganda 95% aniqliq va test dataset bilan testlaganimizda 92% aniqlik bersa, qaysi\r\nturdagi mauammo sodir bo’lmoqda.",
    "answer": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Owerfitting",
    "noAnswer3": "Everfitting"
  },
  {
    "question": "Pandas kutubxonasida head() funksiyasi nima vazifa bajaradi?",
    "answer": "To’plamning dastlabgi bir nechta(5ta) satrini olib beradi.",
    "noAnswer1": "To’plamning ustunlar nomini olib beradi.",
    "noAnswer2": "To’plamning ustunlar nomisiz bir nechta satrini olib beradi.",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Pythonda funksiya e’lon qilish uchun qaysi kalit so’zidan foydalaniladi?",
    "answer": "def",
    "noAnswer1": "function",
    "noAnswer2": "void",
    "noAnswer3": "define"
  },
  {
    "question": "Neyron tarmoqlarida dastlab vazn koeffitsentlari qanday bo’ladi?",
    "answer": "random() funksiyasi orqali taxminiy beriladi.",
    "noAnswer1": "musbat qiymatlar bilan to’ldiriladi.",
    "noAnswer2": "To’ldirish shart emas.",
    "noAnswer3": "manfiy qiymatlar bilan to’ldiriladi."
  },
  {
    "question": "Neyron tarmoqlarida topilgan vazn koeffitsentlari qanday bo’ladi?",
    "answer": "Musbat va manfiy bo’lishi mumkin",
    "noAnswer1": "Faqat musbat bo’ladi",
    "noAnswer2": "Faqat manfiy bo’ladi",
    "noAnswer3": "Qiymatlar [0,1] oraliqda bo’ladi."
  },
  {
    "question": "KMaens algoritmida qo’llaniladigan ikki nuqta orasidagi masofa … deb yuritiladi.Nutqlar\r\no’rniga mos variantni qo’ying.",
    "answer": "Euclidean masofasi",
    "noAnswer1": "Chebyshev masofasi",
    "noAnswer2": "Manhattan masofasi",
    "noAnswer3": "Minkowski masofasi"
  },
  {
    "question": "Gradient tushish algoritmidagi ‘learning rate’ parameter nimani xarakterlaydi?",
    "answer": "O’qish qadamini",
    "noAnswer1": "O’qishitda takrorlanishlar sonini",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Model aniqligini"
  },
  {
    "question": "UCI Machine Learning Repository nima ?",
    "answer": "Mashinili o’qitishning ochiq manbali datasetlarini qidirishga mo’ljallangan tizim",
    "noAnswer1": "GitHub Repository",
    "noAnswer2": "Gitlab Repository",
    "noAnswer3": "Kaggle Repository"
  },
  {
    "question": "Google Dataset Search qancha ma’lumotni qamrab oladi?",
    "answer": "25 mln",
    "noAnswer1": "250mln",
    "noAnswer2": "15mln",
    "noAnswer3": "6mln"
  },
  {
    "question": "Python array bu -",
    "answer": "bir tipdagi (bir xil ma’lumotlar toifasiga tegishli) elementlar to’plamidan",
    "noAnswer1": "turli tipdagi elementlar to’plamidan iborat dinamik massiv",
    "noAnswer2": "turli tipdagi elementlar to’plamidan iborat statik massiv",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "O’qituvchili o’qitish (supervised learning) nima?",
    "answer": "modelni o’qitish uchun ma’lumotlar bilan birgalikda ularning belgisini (data+label) hamishlatish",
    "noAnswer1": "modelni o’qitish uchun ma’lumotlarni belgisisiz (data without label) ishlatish",
    "noAnswer2": "modelni o’qitish uchun tasvir ma’lumotlaridan (image) foydalanish",
    "noAnswer3": "modelni o’qitish uchun faqat ma’lumotlar belgisini (label) ishlatish"
  },
  {
    "question": "Keras muhitida qurilgan neyron tarmoqda joriy qatlam uchun faollashtirish funksiyasini\r\nqo’shishda quyidagilarning qaysi biridan foydalaniladi?",
    "answer": "model.add(Activation(‘relu’))",
    "noAnswer1": "model.insert(Activation(‘relu’))",
    "noAnswer2": "model.function(Activate(‘relu’))",
    "noAnswer3": "model.add(ActiveFunction(‘relu’))"
  },
  {
    "question": "O’qituvchisiz (unsupervised) o’qitish algortimlari to’g’ri ko’rsatilgan javobni ko’rsating?",
    "answer": "k-means clustering, hierarchical clustering, independent component analysis",
    "noAnswer1": "linear regression, nearest neighbor, random forest, decision tree",
    "noAnswer2": "k-means clustering, deep learning, logistic regression, random forest",
    "noAnswer3": "k-nn, decision tree, linear regression, k-means clustering"
  },
  {
    "question": "O’qituvchisiz o’qitish (unsupervised learning) nima?",
    "answer": "modelni o’qitish uchun ma’lumotlarni belgisisiz (data without label) ishlatish",
    "noAnswer1": "modelni o’qitish uchun faqat ma’lumotlar belgisini (label) ishlatish",
    "noAnswer2": "modelni o’qitish uchun ma’lumotlar bilan birgalikda ularning belgisini (data+label) hamishlatish",
    "noAnswer3": "modelni o’qitish uchun tasvir ma’lumotlari va ularning belgilaridan (image+label) foydalanish"
  },
  {
    "question": "Sigmoid funksiyasini hisoblash formulasini ko’rsating?",
    "answer": "sig(x)=1/(1+exp(-x))",
    "noAnswer1": "sig(x)=1/(1-exp(x))",
    "noAnswer2": "sig(x)=1/exp(-x)",
    "noAnswer3": "sig(x)=1/exp(x)"
  },
  {
    "question": "Mashinali o’qitish nima?",
    "answer": "kompyuter dasturining ma’lumotlarni o’qib olish asosida xususiyatlarni o’rganish qobiliyatidir",
    "noAnswer1": "faqat kompyuter o’yinlarini yaratish uchun dastur xususiyatlarni o’rganish qobiliyatidir",
    "noAnswer2": "bu robotni o’rgatishning an’anaviy usuli",
    "noAnswer3": "kompyuter dasturlarini lug’at yordamida o’qitish usuli"
  },
  {
    "question": "Pythonda massivni e’lon qilish uchun qanday toifalardan foydalaniladi?",
    "answer": "array, matrix",
    "noAnswer1": "tuple, arr",
    "noAnswer2": "list, tuple",
    "noAnswer3": "arr, list"
  },
  {
    "question": "Sun'iy intellekt bu …?",
    "answer": "bu kompyuterda insonning aqlli xatti harakatlarini qanday amalga oshirishni o'rganadigantadqiqot sohasi",
    "noAnswer1": "bu kompyuterda insonning jismoniy xatti harakatlarini qanday amalga oshirishni o'rganadigantadqiqot sohasi",
    "noAnswer2": "bu kompyuterda insonning bialogik xatti harakatlarini qanday amalga oshirishni o'rganadigantadqiqot sohasi",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Keras kutubxonasidagi Sequential() nima vazifani bajaradi?",
    "answer": "neyron tarmoq modelini qurish uchun dastlabki obyektni yaratadi",
    "noAnswer1": "ketma-ket kamida 2 qatlamdan iborat neyron tarmoq quradi",
    "noAnswer2": "neyron tarmoq modelini o’qitish uchun ishlatiladi",
    "noAnswer3": "qurilgan neyron tarmoqni ketma-ket ko’rinishga keltiradi"
  },
  {
    "question": "Python muhitida for sikl operatorida ishlatiladigan for i in range(10) ifodasida i indekso’zgaruvchisiga qanday qiymatlar keladi?",
    "answer": "0 1 2 3 4 5 6 7 8 9",
    "noAnswer1": "0 1 2 3 4 5 6 7 8 9 10",
    "noAnswer2": "0 9",
    "noAnswer3": "1 2 3 4 5 6 7 8 9 10"
  },
  {
    "question": "Qanday turdagi faollashtirish funksiyalari mavud?",
    "answer": "ReLU, sigmoid, softmax",
    "noAnswer1": "loss, sigmoid, ReLU",
    "noAnswer2": "ReLU, cost, softmax",
    "noAnswer3": "cost, loss, sigmoid"
  },
  {
    "question": "Chuqur o’qitish – bu?",
    "answer": "bu ko'p qatlamli neyron tarmoqlar asosida obyekt xususiyatlarini tushunishga qaratilganjarayondir",
    "noAnswer1": "bu bir qatlamli neyron tarmoqlar asosida obyekt xususiyatlarini tushunishga qaratilganjarayondir",
    "noAnswer2": "bu bu modelni qurib olish uchun amalga oshiriladigan o’qitish jarayonidir",
    "noAnswer3": "bu modelni tezroq va aniqroq qurib olish uchun amalga oshiriladigan jarayon"
  },
  {
    "question": "Python muhitida turli xil matematik funksiya grafiklarini va tasvirlarni vizuallashtirish uchunishlatiladigan paket qaysi?",
    "answer": "matplotlib",
    "noAnswer1": "keras",
    "noAnswer2": "pandas",
    "noAnswer3": "numpy"
  },
  {
    "question": "Sun’iy neyron tarmoq tashkil etuvchilarini ko’rsating?",
    "answer": "node, input, weights, output",
    "noAnswer1": "cell body, dendrites, synapse, axon",
    "noAnswer2": "input, dendrites, synapse, output",
    "noAnswer3": "synapse, axon, weights, node"
  },
  {
    "question": "Python muhitida scatter() funksiyasi qanday vazifani bajaradi?",
    "answer": "berilgan x,y to'plam bo’yicha 2 o’lchovli grafigini chizish uchun ishlatiladi",
    "noAnswer1": "chiziqli regression model koeffitsentlarini (ko’pi bilan 3 ta) hisoblaydi",
    "noAnswer2": "polinomial regression model koeffitsentlarini hisoblaydi",
    "noAnswer3": "qurilgan model koeffitsentlari bo’yicha bashorat qilinadigan qiymatlarni hisoblaydi"
  },
  {
    "question": "KNN bu…?",
    "answer": "K ta yaqin qo’shnilar agoritmi",
    "noAnswer1": "Svyortkali neyron tarmoq",
    "noAnswer2": "Adamar almashtririshli Neyron tarmoq",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Sun’iy intellektda mashinani o'qitish uchun to’g’ri ta’rif berilgan qatorni tanlang",
    "answer": "Sun’iy intellekt - bu inson ongiga taqlid qila oladigan dasturiy ta'minot va uni mashinali\r\no’qitishda aqlli mashinalarga dasturlashning muqobil usulidir.",
    "noAnswer1": "Mashinali o’qitish - bu aqlli mashinalarni dasturlashning muqobil usuli.",
    "noAnswer2": "Mashinali o’qitish va suniy intellektning maqsadlari juda boshqacha.",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Mashinali o’qitish turlari qaysi qatorda to’g’ri berilgan",
    "answer": "O’qtuvchili va O’qituvchisiz",
    "noAnswer1": "Tanlanma",
    "noAnswer2": "Ma’lumotlar bazasi",
    "noAnswer3": "Chiziqli va logistik"
  },
  {
    "question": "O’qituvchili o’qitish (Supervised learning) – bu .. ?",
    "answer": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish .",
    "noAnswer1": "Bu – modelning aniqligini aniqlash algoritmi",
    "noAnswer2": "Ma’lumotlarga ishlov berish dasturi",
    "noAnswer3": "Oddiy algoritm"
  },
  {
    "question": "O’qituvchisiz o’qitish (unsupervised learning) – bu … ?",
    "answer": "mashinani o’qitish usulidan biri bo’lib, bunda modelni oldindan aniq bo’lgan ma’lumotlar bilano’qitish amalga oshirilmaydi, aksincha obyekt parametrlarini (ma'lumotlarni) topish uchunmodelga o'z ustida ishlashga imkon yaratib beriladi",
    "noAnswer1": "Ma’lumot qidirish algoritmlaridan tashkil topgan tizim",
    "noAnswer2": "Bunday o’qitish mavjud emas",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Unsupervised learning usulida asosan qanday masala yechiladi?",
    "answer": "klasterlash",
    "noAnswer1": "normallashtirish",
    "noAnswer2": "sinflashtirish",
    "noAnswer3": "Signallarga ishlov berish"
  },
  {
    "question": "O’qituvchisiz o’qitish algoritmlari qaysi?",
    "answer": "Hierarchical clustering va K-means clustering",
    "noAnswer1": "SVM va CNN",
    "noAnswer2": "RNN va GMM",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Ma’lumotlarni tozalashga to'liq ta'rif berilgan qatorini toping?",
    "answer": "Ushbu bosqichda ma’lumotlar orasidan ortiqcha yoki ahamiyati past bo’lgan model\r\nturg’unligiga ta’sir qiluvchi ma’lumotlar olib tashlanadi.",
    "noAnswer1": "Dataset ma’lumotlarini testlash",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Qaror daraxtidan ma’lumotlarni olib tashlash"
  },
  {
    "question": "Unsupervised learning usulida asosan qanday masala yechiladi?",
    "answer": "klasterlash",
    "noAnswer1": "normallashtirish",
    "noAnswer2": "sinflashtirish",
    "noAnswer3": "Signallarga ishlov berish"
  },
  {
    "question": "O’qituvchisiz o’qitish algoritmlari qaysi?",
    "answer": "Hierarchical clustering va K-means clustering",
    "noAnswer1": "SVM va CNN",
    "noAnswer2": "RNN va GMM",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Hozirgi kunda butun dunyoda rivojlanib borayotgan mashinali o’qitish (machine learning), chuqur o’qitish (deep learning) kabi usullar sun’iy intellekt bilan qanday bog’liq",
    "answer": "hozirda tasvirlardan ob’ektlarni tanib olish, video nazorat, ovozni tanib olish kabi sohalardakeng foydalaniladi va sun’iy intellekt tizimini yaratishda katta ahamiyat kasb etadi",
    "noAnswer1": "faqat ovozni tanib olishda ishlatiladi va sun’iy intellekt tizimini yaratishda deyarli\r\nfodalanilmaydi",
    "noAnswer2": "tasvirlarni tanib olishda ishlatiladi va sun’iy intellekt tizimini yaratishda foydalaniladi",
    "noAnswer3": "faqatgina ma’lumotlarning intellektual tahliliga oid"
  },
  {
    "question": "Mashinani o’qitish jarayonida ma’lumotlarga qanday dastlabki ishlov beriladi?",
    "answer": "Format, Data Cleaning, Feature Extraction",
    "noAnswer1": "Data Cleaning, Resizing, , Feature Extraction",
    "noAnswer2": "Resizing, Feature Extraction, Format",
    "noAnswer3": "Format, Resizing, Data Cleaning"
  },
  {
    "question": "Regression tahlilni qanday usullar asosida amalga oshiriladi.",
    "answer": "chiziqli, nochiziqli va logistik regressiya usullari asosida",
    "noAnswer1": "sintaktik usullar asosida",
    "noAnswer2": "dinamik usillar asosida",
    "noAnswer3": "semantik usullari asosida"
  },
  {
    "question": "Muammoni aniqlash, ma’lumotlarni tayyorlash, algoritmni ishlab chiqish va baholash, natijaviyma’lumotlar aniqligini oshirish va yakuniy natijani taqdim qilish – bular qanday jarayonningbosqichlari hisoblanadi",
    "answer": "Mashinali o’qitish",
    "noAnswer1": "Chuqur o’qitish",
    "noAnswer2": "Regression tahlil",
    "noAnswer3": "Statistik tahlil"
  },
  {
    "question": "Keras bu – ...",
    "answer": "tensorflow asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona",
    "noAnswer1": "numpy asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona",
    "noAnswer2": "ochiq kodli neyron tarmoq uchun mo’ljallangan dasturiy vosita",
    "noAnswer3": "matplotlib asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona"
  },
  {
    "question": "Gradient tushish bu?",
    "answer": "Model parametrlarini sozlash uchun ishlatiladigan algoritm",
    "noAnswer1": "Xatolik funksiyasi",
    "noAnswer2": "Kiruvchi ma’lumotlarni narmallashtirish uchun qiymatlarni 0,1oraliqqa tushirish",
    "noAnswer3": "Mashinali o’qitish turi"
  },
  {
    "question": "Tensorflow bu – ...",
    "answer": "Python kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer1": "Matlab kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer2": "Ocatev kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer3": "Python kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallanmagan."
  },
  {
    "question": "Sklearn bu - …",
    "answer": "Python dasturlash tilidagi maxsus kutubxona bo’lib, mashinali o’qitish algoritmlarini amalgaoshirishga mo’ljallangan maxsus paket",
    "noAnswer1": "Matlabning maxsus paketi bo’lib, mashinali o’qitish algoritmlarini amalga oshirishgamo’ljallangan hisoblanadi",
    "noAnswer2": "Python dasturlash tilidagi maxsus kutubxona bo’lib, o’zini o’zi o’qitadigan mashinali o’qitishalgortimlarini ishlab chiqishga mo’ljallangan",
    "noAnswer3": "Python dasturlash tilidagi maxsus kutubxona bo’lib, mashinali o’qitishning o’qituvchili\r\nalgoritmlarini amalga oshirishga mo’ljallangan maxsus paket"
  },
  {
    "question": "Chuqur o’qitish qanday tarmoqlari asosida amalga oshiriladi?",
    "answer": "neyron tarmoqlar asosida",
    "noAnswer1": "lokal tarmoqlar asosida",
    "noAnswer2": "global tarmoqlar asosida",
    "noAnswer3": "internet tarmoqlar asosida"
  },
  {
    "question": "Chuqur o’qitish necha asosiy bosqichlardan tashkil topgan?",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "6"
  },
  {
    "question": "IRIS dataset da obyektni xarakterlovchi xususiyatlari nechta",
    "answer": "4",
    "noAnswer1": "2",
    "noAnswer2": "3",
    "noAnswer3": "8"
  },
  {
    "question": "Supervised learning ?",
    "answer": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish",
    "noAnswer1": "bu modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "noAnswer2": "bu modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "noAnswer3": "bu o’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish vanatijalarni yaxshilash imkoniyatiga ega bo’ladi."
  },
  {
    "question": "Mashinali o’qitishning o’qituvchili sinflashtirish algoritmini ko’rsating",
    "answer": "KNN,SVM,Logistik regresiya",
    "noAnswer1": "Kmaens",
    "noAnswer2": "Chiziqli regressiya",
    "noAnswer3": "Kmaens,KNN"
  },
  {
    "question": "Sun’iy intellekti bo’lmagan elementni ko’rsating",
    "answer": "Hub",
    "noAnswer1": "Kalkulyator",
    "noAnswer2": "Telefon",
    "noAnswer3": "Foto Radar"
  },
  {
    "question": "Logistik regressiyada qaror chegrasi uchun topilgan modeldan olingan qiymat qaysi\r\nbo’sag’a qiymati orqali solishtiriladi va qaror qabul qilinadi?",
    "answer": "0",
    "noAnswer1": "1",
    "noAnswer2": "0.5",
    "noAnswer3": "-1 va 1"
  },
  {
    "question": "Mashinali o’qitish va suniy intellekt",
    "answer": "Mashinali o’qitish sun’iy intellekt tizimlarini ishlab chiqishga xizmat qiladi",
    "noAnswer1": "Bir tushunchani ifodalaydi",
    "noAnswer2": "Sun’iy intellekt mashinali o’qitish tizimlarini ishlab chiqishga xizmat qiladi",
    "noAnswer3": "Turli tushunchalarni ifodalaydi"
  },
  {
    "question": "Mashinali o’qitishning asosiy turlari qaysilar",
    "answer": "O’qituvchili,O’qituvchisiz",
    "noAnswer1": "Regressiya,Sinflashtirish",
    "noAnswer2": "KNN,SVM,Kmaens",
    "noAnswer3": "Logistik va chiziqli regressiya"
  },
  {
    "question": "Chiziqli va logistic regressiyaning asosiy farqi",
    "answer": "Bu ikkalasi ikki turdagi masalani ishlaydi. chiziqli regressiya basharotlash, logisticregressiya sinflashtirish",
    "noAnswer1": "Bu ikkalasi ikki turdagi masalani ishlaydi. chiziqli sinflashtirish basharotlash, logisticregressiya regressiya",
    "noAnswer2": "Ikkalasi ham bir turdagi masalani ishlash uchun mo’ljallangan",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Python dasturlash tilida ma’lumotlarni visuallashtirish uchun ishlatiladigan kutubxona",
    "answer": "Matplotlib",
    "noAnswer1": "plotData",
    "noAnswer2": "Pillow",
    "noAnswer3": "PyPlot"
  },
  {
    "question": "Numpy kutubxonasida ikkita vektorni vektor ko’paytirish amali qanaqa?",
    "answer": "A@B",
    "noAnswer1": "A*B",
    "noAnswer2": "np.dot([A,B])",
    "noAnswer3": "np.multiply([A,B])"
  },
  {
    "question": "Pythonda ikkita vektorni birlashtirishda xatolik sodir bo’ladigan javobni tanlang",
    "answer": "a=append(a,b)",
    "noAnswer1": "a=np.append(a,b)",
    "noAnswer2": "a=np.append(b,a)",
    "noAnswer3": "Varinatlarning barchasida vektorlar birlashtiriladi"
  },
  {
    "question": "Cost funksiya bu?",
    "answer": "Modelni o’qitish davrida model tomonidan topilgan qiymat bilan o’rgatuvchi tanlamadaberilgan qiymat oralidagi farqlarni hisoblash funksiyasi",
    "noAnswer1": "Cosinius funksiyasini qisqartma ko’rinishi?",
    "noAnswer2": "Bunday nomdagi funksiya yo’q.",
    "noAnswer3": "Modelni testlash davrida model tomonidan topilgan qiymat bilan o’rgatuvchi tanlamadaberilgan qiymat oralidagi farqlarni hisoblash funksiyasi"
  },
  {
    "question": "Chiziqli regression model nechta qiymat qaytaradi",
    "answer": "Har doim bitta",
    "noAnswer1": "Ixtiyoriy ravishdagi sonda qiymat qaytarishi mumkin",
    "noAnswer2": "Har doim bittadan ko’p",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "QR code mashinali o’qitilish algoritmi asosida ishlab chiqilgan ?",
    "answer": "Noto’g’ri,",
    "noAnswer1": "To’g’ri",
    "noAnswer2": "Bo’lishi mumkin",
    "noAnswer3": "Bilmayman"
  },
  {
    "question": "Bias va Variance tushunchalarining farqi nimada?",
    "answer": "Bias modelni train to’plam bilan testlagandagi xatolik, Variance esa test to’plambilantestlagandagi xatolik",
    "noAnswer1": "Bias modelni test to’plam bilan testlagandagi xatolik, Variance esa train to’plambilantestlagandagi xatolik",
    "noAnswer2": "Bias modelni train +test to’plam bilan testlagandagi umumiy xatolik, Variance esa faqat test\r\nto’plam bilan testlagandagi xatolik",
    "noAnswer3": "Bias modelni train +test to’plam bilan testlagandagi umumiy xatolik, Variance esa faqat trainto’plam bilan testlagandagi xatolik"
  },
  {
    "question": "Agar bias yuqori bo’lsa qaysi turdagi muammo sodir bo’lmoqda?",
    "answer": "Underfitting",
    "noAnswer1": "Owerfitting",
    "noAnswer2": "Bias ni yuqoriligi mumamo hisoblanmaydi",
    "noAnswer3": "Model juda murakkab"
  },
  {
    "question": "Agar Variance yuqori bo’lsa qanday turdagi muammo sodir bo’lmoqda?",
    "answer": "Owerfitting",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Variance ni yuqoriligi mumamo hisoblanmaydi",
    "noAnswer3": "Model juda sodda"
  },
  {
    "question": "Agar biass quyi va variance yuqori bo’lsa qanday turdagi muammo sodir bo’lmoqda?",
    "answer": "Owerfitting",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Bias ni quyi variance ni yuqoriligi mumamo hisoblanmaydi",
    "noAnswer3": "Model juda sodda"
  },
  {
    "question": "Model murakkab bo’lsa bias qanday bo’ladi?",
    "answer": "Quyi, model o’rgatuvchi tanlamaga mostlashib qoladi va train to’plamda xatoligi past bo’ladi",
    "noAnswer1": "To’g’ri javob yo’q",
    "noAnswer2": "Bias ning quyi yoki yuqori bo’lishi model murakkabligiga bog’liq emas.",
    "noAnswer3": "Yuqori, model o’rgatuvchi tanlamaga mostlashib qoladi va train to’plamda xatoligi yuqori\r\nbo’ladi"
  },
  {
    "question": "Model murakkab bo’lsa variance qanday bo’ladi?",
    "answer": "Yuqori, model o’rgatuvchi tanlamaga mostlashib qoladi va test to’plamda xatoligi yuqori\r\nbo’ladi",
    "noAnswer1": "Quyi, model o’rgatuvchi tanlamaga mostlashib qoladi va test to’plamda xatoligi past bo’ladi",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Variance ning quyi yoki yuqori bo’lishi model murakkabligiga bog’liq emas."
  },
  {
    "question": "Uy narxini bashorat qilish uchun mashinali o’qitishning qaysi algoritmidan foydalanadi",
    "answer": "Chiziqli regressiya",
    "noAnswer1": "Logistik regressiya",
    "noAnswer2": "Kmeans",
    "noAnswer3": "SVM"
  },
  {
    "question": "O’ratuvchi tanlamadagi test to’plam bu?",
    "answer": "modelni testlash uchun ishlatiladi",
    "noAnswer1": "modelni o’qitish uchun ishlatiladi",
    "noAnswer2": "Modelni o’qitish davomida model parametrlarini sozlash uchun ishlatiladi",
    "noAnswer3": "Bu turdagi o’rgatuvchi tanlamadan foydalanilmaydi"
  },
  {
    "question": "O’rgatuvchi tanlamada normallashtirish tushunchasi bu?",
    "answer": "O’ratuvchi tanlamdagi qiymatlarni bir xil shkalaga o’tkazish",
    "noAnswer1": "O’ratuvchi tanlamdagi qiymatlarni turli xil shkalaga o’tkazish",
    "noAnswer2": "O’ratuvchi tanlamdagi qiymatlarni faqat [0,1] shkalaga o’tkazish",
    "noAnswer3": "O’ratuvchi tanlamdagi qiymatlarni faqat [-1,1] shkalaga o’tkazish"
  },
  {
    "question": "Logistik regressiya masalasida asosan qaysi aktivlashtirish funksiyasidan foydalaniladi?",
    "answer": "Sigmoid",
    "noAnswer1": "Tanh",
    "noAnswer2": "ReLU",
    "noAnswer3": "Sigmoid va ReLU"
  },
  {
    "question": "Nima uchun o’rgatuvchi tanlama normallashtiriladi?",
    "answer": "Obyektni xarakterlovchi xususiyatlari bir xil shkalaga olib kelish orqali ularning ta’sir kuchini\r\nbarobarlashtirish",
    "noAnswer1": "Obyektni xarakterlovchi xususiyatlari faqat [0,1] shkalaga olib kelish orqali ularning ta’sir\r\nkuchini barobarlashtirish",
    "noAnswer2": "Obyektni xarakterlovchi xususiyatlari faqat [-1,1] shkalaga olib kelish orqali ularning ta’sir\r\nkuchini barobarlashtirish",
    "noAnswer3": "Obyektni xarakterlovchi xususiyatlari turli xil shkalaga olib kelish orqali ularning ta’sir kuchini\r\nbarobarlashtirish"
  },
  {
    "question": "Validation dataset qayerda ishlatiladi?",
    "answer": "Modelni qurish davomida paramertlarni sozlashda",
    "noAnswer1": "Model qurib bo’linganidan so’ng aniqlikni baholashda",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Validation datasetdan foydalanilmaydi"
  },
  {
    "question": "Klasterlash bu ?",
    "answer": "O’qituvchisiz o’qitish algoritmi asosida obyektlarni xarakterlovchi o’xshash xususiyatlari\r\nasosida guruhlash",
    "noAnswer1": "O’qituvchili o’qitish algoritmi asosida obyektlarni xarakterlovchi o’xshash xususiyatlari\r\nasosida guruhlash",
    "noAnswer2": "Mashinali o’qitishda buday tushuncha yo’q.",
    "noAnswer3": "Logistik regressiya asosida amalga oshiriladigan mashinali o’qitish algoritmi"
  },
  {
    "question": "KNN algoritmida k qiymat nimani xaratterlaydi?",
    "answer": "k ta eng yaqin qo’shnini",
    "noAnswer1": "k ta eng uzoq qo’shnini",
    "noAnswer2": "O’qitish qadami",
    "noAnswer3": "O’qitishlar sonini"
  },
  {
    "question": "Logistik regressiyada qaror qabul qilishimiz uchun modeldan olingan qiymat qaysi bo’sag’aqiymati orqali solishtiriladi?",
    "answer": "0.5",
    "noAnswer1": "0",
    "noAnswer2": "1",
    "noAnswer3": "-1 va 1"
  },
  {
    "question": "Nima uchun logistik regressiyada sigmoid funksiyadan foydalaniladi?",
    "answer": "qiymatlarni (0,1) oraliqda keltirish",
    "noAnswer1": "qiymatlarni [-1,1] oraliqda keltirish",
    "noAnswer2": "qiymatlarni [0,1] oraliqda keltirish",
    "noAnswer3": "qiymatlarni (-1,1) oraliqda keltirish"
  },
  {
    "question": "SVM algoritmida suppor vectors bu?",
    "answer": "Sinflashtirishnig chegara sohasi bo’lib, eng yaqin tanlanmalar uni xarakterlaydi",
    "noAnswer1": "Sinflashtirishnig chegara sohasi bo’lib, eng uzoq tanlanmalar uni xarakterlaydi",
    "noAnswer2": "Sinflashtirishnig chegara sohasi bo’lib, eng yaqin tanlanmalar uni xarakterlamaydi",
    "noAnswer3": "Sinflashtirishnig chegara sohasi bo’lib, eng uzoq tanlanmalar uni xarakterlamaydi"
  },
  {
    "question": "SVM algoritmidagi hisoblaanadigan orqaliq (margin) qanday bo’lsa model ishonchli debtopiladi?",
    "answer": "Oraliq eng kattta bo’lsa",
    "noAnswer1": "Oraliq eng kichik bo’lsa",
    "noAnswer2": "Oraliq hech narsani anglatmaydi",
    "noAnswer3": "To’gri javob yo’q"
  },
  {
    "question": "SVM algoritmida yadro(kernel) funksiyalari nima uchun xizmat qiladi?",
    "answer": "Kiruvchi xususiyatlarni ma’lum o’lchov sohasidan boshqasiga o’zgartirish uchun xizmat qiladi. Misol uchun 1D -&gt; 2D",
    "noAnswer1": "Kiruvchi xususiyatlarni 1D o’lchov sohasidan 2D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi",
    "noAnswer2": "Kiruvchi xususiyatlarni 2D o’lchov sohasidan 1D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi",
    "noAnswer3": "Kiruvchi xususiyatlarni 2D o’lchov sohasidan 3D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi"
  },
  {
    "question": "SVM orqali ..",
    "answer": "Faqat bir nechta sinfga tegishli bo’lgan obyektlar sinflanadi",
    "noAnswer1": "Faqat ikkita sinfga tegishli bo’lgan obyektlar sinflanadi",
    "noAnswer2": "Faqat regressiya masalasini yechish mumkin",
    "noAnswer3": "Ham sinflashrish, ham regressiya masalasini ishlash mumkin."
  },
  {
    "question": "Modelni o’qitish uchun o’quv tanlanma (dataset) qanday turlarga bo’lindi",
    "answer": "training, validation, testing",
    "noAnswer1": "testing, value-x, training",
    "noAnswer2": "validation, labels, training",
    "noAnswer3": "labels, validation, testing"
  },
  {
    "question": "O’qitish uchun ma’lumotlar orasidan ortiqcha yoki ahamiyati past bo’lgan, model turg’unligigata’sir qiluvchi ma’lumotlarni olib tashlash jarayoni nima deb ataladi",
    "answer": "Ma’lumotlarni tozalash (Data cleaning)",
    "noAnswer1": "Xususiyatlarni aniqlash (Feature detection)",
    "noAnswer2": "Ma’lumotlarni o’chirish (Data deletion)",
    "noAnswer3": "Ma’lumotlar turini aniqlash (Data formatting)"
  },
  {
    "question": "Neyron tarmoqlarida sinflashtirish masalasini yechishda chiquvchi qatlamda qaysi turdagi\r\naktivlash funksiyasidan foydalaniladi",
    "answer": "Softmax",
    "noAnswer1": "Sigmoid",
    "noAnswer2": "ReLu",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Logistik regression model nima uchun ishlatiladi",
    "answer": "Sinflashtirsh masalasini yechish uchun",
    "noAnswer1": "Klasterlash masalasini ishlash uchun",
    "noAnswer2": "Neyron tarmoqni qurish uchun",
    "noAnswer3": "Qiymatni bashoratlash uchun"
  },
  {
    "question": "Numpy kutubxonasidagi polyfit() funksiyasi nima uchun ishlatiladi?",
    "answer": "Chiziqli regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer1": "Loginstik regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer2": "Chiziqli va logistik regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer3": "Polynom funksiya yaratish uchun"
  },
  {
    "question": "Numpy kutubxonasidagi poly1d() funksiyasi nima uchun ishlatiladi?",
    "answer": "Berilgan parametrlar asosida polinomal funksiya hosil qilish",
    "noAnswer1": "Berilgan parametrlar asosida polinomal Class hosil qilish",
    "noAnswer2": "Berilgan parametrlar asosida logistik regressiya modelini qurish",
    "noAnswer3": "Berilgan parametrlar asosida giperbolik regressiya modelini qurish"
  },
  {
    "question": "Neyron tarmoqlarini qurishga mo’ljallangan python kutubxonalarini ko'rsating.",
    "answer": "Numpy, keras, tensorflow",
    "noAnswer1": "Numpy, pandas, keras",
    "noAnswer2": "Tensorflow, numpy, pandas",
    "noAnswer3": "Python, Matlab, Octave"
  },
  {
    "question": "Mashinani o’qitish jarayonida ma’lumotlarga qanday dastlabki ishlov beriladi?",
    "answer": "Format, Data Cleaning, Feature Extraction",
    "noAnswer1": "Data Cleaning, Resizing, , Feature Extraction",
    "noAnswer2": "Resizing, Feature Extraction, Format",
    "noAnswer3": "Format, Resizing, Data Cleaning"
  },
  {
    "question": "Regression tahlilni qanday usullar asosida amalga oshiriladi.",
    "answer": "chiziqli, nochiziqli va logistik regressiya usullari asosida",
    "noAnswer1": "sintaktik usullar asosida",
    "noAnswer2": "dinamik usillar asosida",
    "noAnswer3": "semantik usullari asosida"
  },
  {
    "question": "Muammoni aniqlash, ma’lumotlarni tayyorlash, algoritmni ishlab chiqish va baholash, natijaviyma’lumotlar aniqligini oshirish va yakuniy natijani taqdim qilish – bular qanday jarayonningbosqichlari hisoblanadi",
    "answer": "Mashinali o’qitish",
    "noAnswer1": "Chuqur o’qitish",
    "noAnswer2": "Regression tahlil",
    "noAnswer3": "Statistik tahlil"
  },
  {
    "question": "Keras bu – ...",
    "answer": "tensorflow asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona",
    "noAnswer1": "numpy asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona",
    "noAnswer2": "ochiq kodli neyron tarmoq uchun mo’ljallangan dasturiy vosita",
    "noAnswer3": "matplotlib asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona"
  },
  {
    "question": "Tensorflow bu – ...",
    "answer": "Python kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer1": "Matlab kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer2": "Ocatev kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer3": "Python kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallanmagan."
  },
  {
    "question": "Sklearn bu - …",
    "answer": "Python dasturlash tilidagi maxsus kutubxona bo’lib, mashinali o’qitish algoritmlarini amalgaoshirishga mo’ljallangan maxsus paket",
    "noAnswer1": "Matlabning maxsus paketi bo’lib, mashinali o’qitish algoritmlarini amalga oshirishgamo’ljallangan hisoblanadi",
    "noAnswer2": "Python dasturlash tilidagi maxsus kutubxona bo’lib, o’zini o’zi o’qitadigan mashinali o’qitishalgortimlarini ishlab chiqishga mo’ljallangan",
    "noAnswer3": "Python dasturlash tilidagi maxsus kutubxona bo’lib, mashinali o’qitishning o’qituvchili\r\nalgoritmlarini amalga oshirishga mo’ljallangan maxsus paket"
  },
  {
    "question": "Chiziqli va logistik regression model qurilayotganda bitta o’rgatuvchi tanlamadan foydalansabo’ladimi?",
    "answer": "Ha, faqat yorliqlari uchun ikkita qiymat saqlangan bo’lsa",
    "noAnswer1": "Ha, regression model uchun hamma vaqt dataset bir xilda bo’ladi.",
    "noAnswer2": "Buning imkoni yo’q",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Chiziqli regresiya va Logistik regresiya uchun Cost funksiyasi bir xilda bo’ladimi?",
    "answer": "Yoq",
    "noAnswer1": "Ha",
    "noAnswer2": "Logistik regressiyada cost funksiyasi bo’lmaydi",
    "noAnswer3": "Chiziqli regressiyada cost funksiyasi bo’lmaydi"
  },
  {
    "question": "Python ning scipy kutubxonasidan qaysi Classs chiziqli regressiya modelini qurishdaishlatiladi",
    "answer": "stats",
    "noAnswer1": "sklearn",
    "noAnswer2": "numpy",
    "noAnswer3": "ployfit"
  },
  {
    "question": "Python sklearn kutubxonasidagi qaysi Classs chiziqli regressiya modelini qurishda ishlatiladi",
    "answer": "LinearRegression",
    "noAnswer1": "Polyfit",
    "noAnswer2": "poly1d",
    "noAnswer3": "Linear_model"
  },
  {
    "question": "Chiziqli regressiyada modelni murakkab tanlansa qaysi turdagi muammo yuzaga keladi",
    "answer": "Owerfitting",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Model aniq ishlaydigan bo’lib, shakllanadi.",
    "noAnswer3": "Muammo sodir bo’lmaydi"
  },
  {
    "question": "Chiziqli regressiyada modelni sodda tanlansa qaysi turdagi muammo yuzaga keladi",
    "answer": "Underfitting",
    "noAnswer1": "Owerfitting",
    "noAnswer2": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer3": "Muammo sodir bo’lmaydi"
  },
  {
    "question": "Chiziqli regression modelni qurib bo’lganimizdan so’ng modelni train dataset bilantestlanganda 65% aniqliq va test dataset bilan testlaganimizda 55% aniqlik bersa, qaysi\r\nturdagi mauammo sodir bo’lmoqda",
    "answer": "Underfitting",
    "noAnswer1": "Owerfitting",
    "noAnswer2": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer3": "Everfitting"
  },
  {
    "question": "Chiziqli regression modelni qurib bo’lganimizdan so’ng modelni train dataset bilantestlanganda 25% aniqliq va test dataset bilan testlaganimizda 95% aniqlik bersa, qaysi\r\nturdagi mauammo sodir bo’lmoqda",
    "answer": "Underfitting",
    "noAnswer1": "Owerfitting",
    "noAnswer2": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer3": "Everfitting"
  },
  {
    "question": "KMaens algoritmida qo’llaniladigan ikki nuqta orasidagi masofa … deb yuritiladi.Nutqlar\r\no’rniga mos variantni qo’ying.",
    "answer": "Euclidean masofasi",
    "noAnswer1": "Chebyshev masofasi",
    "noAnswer2": "Manhattan masofasi",
    "noAnswer3": "Minkowski masofasi"
  },
  {
    "question": "Gradient tushish algoritmidagi ‘learning rate’ parameter nimani xarakterlaydi?",
    "answer": "O’qish qadamini",
    "noAnswer1": "O’qishitda takrorlanishlar sonini",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Model aniqligini"
  },
  {
    "question": "UCI Machine Learning Repository nima ?",
    "answer": "Mashinili o’qitishning ochiq manbali datasetlarini qidirishga mo’ljallangan tizim",
    "noAnswer1": "GitHub Repository",
    "noAnswer2": "Gitlab Repository",
    "noAnswer3": "Kaggle Repository"
  },
  {
    "question": "Google Dataset Search qancha ma’lumotni qamrab oladi?",
    "answer": "25 mln",
    "noAnswer1": "250mln",
    "noAnswer2": "15mln",
    "noAnswer3": "6mln"
  },
  {
    "question": "Python array bu -",
    "answer": "bir tipdagi (bir xil ma’lumotlar toifasiga tegishli) elementlar to’plamidan",
    "noAnswer1": "turli tipdagi elementlar to’plamidan iborat dinamik massiv",
    "noAnswer2": "turli tipdagi elementlar to’plamidan iborat statik massiv",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Python list bu -",
    "answer": "turli tipdagi elementlar to’plamidan iborat dinamik massiv",
    "noAnswer1": "bir tipdagi (bir xil ma’lumotlar toifasiga tegishli) elementlar to’plamidan iborat dinamik massiv",
    "noAnswer2": "turli tipdagi elementlar to’plamidan iborat statik massiv",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Python tuple bu -",
    "answer": "turli tipdagi elementlar to’plamidan iborat statik massiv",
    "noAnswer1": "bir tipdagi (bir xil ma’lumotlar toifasiga tegishli) elementlar to’plamidan iborat dinamik massiv",
    "noAnswer2": "turli tipdagi elementlar to’plamidan iborat statik massiv",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Mashinali o’qitishda samaradorlikni baholash uchun qanday matritsadan foydalaniladi?",
    "answer": "Tartibsizlik matritsasi (confusion matrix)",
    "noAnswer1": "Aniqliq matritsasi (accuracy matrix)",
    "noAnswer2": "Xatolik matritsasi (loss matrix)",
    "noAnswer3": "Barchasi to’g’ri"
  },
  {
    "question": "pip freeze",
    "answer": "Environment o’rnatilgan barcha paketlar ro’yxatini chop qiladi",
    "noAnswer1": "Environment o’rnatilgan eng oxirgi paketlar ro’yxatini chop qiladi",
    "noAnswer2": "Environment o’rnatilgan eng oxirgi 10 ta paket ro’yxatini chop qiladi",
    "noAnswer3": "Environment o’rnatilgan mashinali o’qitishga xizmat qiladigan paketlar ro’yxatini chop qilish"
  },
  {
    "question": "pip install numpy as np",
    "answer": "Xatolik sodir bo’ladi",
    "noAnswer1": "Numpy kutubxonasi o’rnatiladi",
    "noAnswer2": "Numpy kutubxonasi yuklash va quyida uni np deb yuritish mumkin",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "import numpy as nb",
    "answer": "Numpy kutubxonasi yuklash va quyida uni nb deb yuritish mumkin",
    "noAnswer1": "Xatolik sodir bo’ladi",
    "noAnswer2": "Numpy kutubxonasi o’rnatiladi",
    "noAnswer3": "Numpy kutubxonasi yuklash va quyida uni np deb yuritish mumkin"
  },
  {
    "question": "Agar mashinali o’qitish qo’llaniladigan sklearn kutubxonasi o’rnatilmagan bo’lsa uni\r\nqanday o’rnatish mumkin.",
    "answer": "Barchasi to’g’ri",
    "noAnswer1": "pip install sklearn",
    "noAnswer2": "conda install scikit-learn",
    "noAnswer3": "pip install scikit-learn"
  },
  {
    "question": "O’rgatuvchi tanlamasiz(dataset siz) mashinali o’qitish algoritmlarini ishlata olamizmi",
    "answer": "Imkoni yoq",
    "noAnswer1": "Ha, albatta",
    "noAnswer2": "Ba’zan",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Python muhitida neyron tarmoq qurish uchun qaysi paketlardan foydalaniladi?",
    "answer": "keras, tensorflow",
    "noAnswer1": "tensorflow, pandas",
    "noAnswer2": "numpy, matplotlib",
    "noAnswer3": "pandas, opencv"
  },
  {
    "question": "Keras muhitida modelni testlash uchun mavjud funksiyalardan qaysi biri ishlatiladi?",
    "answer": "fit()",
    "noAnswer1": "compile()",
    "noAnswer2": "evaluate()",
    "noAnswer3": "test()"
  },
  {
    "question": "O’qituvchili o’qitish (supervised learning) nima?",
    "answer": "modelni o’qitish uchun ma’lumotlar bilan birgalikda ularning belgisini (data+label) hamishlatish",
    "noAnswer1": "modelni o’qitish uchun ma’lumotlarni belgisisiz (data without label) ishlatish",
    "noAnswer2": "modelni o’qitish uchun tasvir ma’lumotlaridan (image) foydalanish",
    "noAnswer3": "modelni o’qitish uchun faqat ma’lumotlar belgisini (label) ishlatish"
  },
  {
    "question": "Keras muhitida qurilgan neyron tarmoqda joriy qatlam uchun faollashtirish funksiyasini\r\nqo’shishda quyidagilarning qaysi biridan foydalaniladi?",
    "answer": "model.add(Activation(‘relu’))",
    "noAnswer1": "model.insert(Activation(‘relu’))",
    "noAnswer2": "model.function(Activate(‘relu’))",
    "noAnswer3": "model.add(ActiveFunction(‘relu’))"
  },
  {
    "question": "O’qituvchisiz (unsupervised) o’qitish algortimlari to’g’ri ko’rsatilgan javobni ko’rsating?",
    "answer": "k-means clustering, hierarchical clustering, independent component analysis",
    "noAnswer1": "linear regression, nearest neighbor, random forest, decision tree",
    "noAnswer2": "k-means clustering, deep learning, logistic regression, random forest",
    "noAnswer3": "k-nn, decision tree, linear regression, k-means clustering"
  },
  {
    "question": "O’qituvchisiz o’qitish (unsupervised learning) nima?",
    "answer": "modelni o’qitish uchun ma’lumotlarni belgisisiz (data without label) ishlatish",
    "noAnswer1": "modelni o’qitish uchun faqat ma’lumotlar belgisini (label) ishlatish",
    "noAnswer2": "modelni o’qitish uchun ma’lumotlar bilan birgalikda ularning belgisini (data+label) hamishlatish",
    "noAnswer3": "modelni o’qitish uchun tasvir ma’lumotlari va ularning belgilaridan (image+label) foydalanish"
  },
  {
    "question": "Sigmoid funksiyasini hisoblash formulasini ko’rsating?",
    "answer": "sig(x)=1/(1+exp(-x))",
    "noAnswer1": "sig(x)=1/(1-exp(x))",
    "noAnswer2": "sig(x)=1/exp(-x)",
    "noAnswer3": "sig(x)=1/exp(x)"
  },
  {
    "question": "Mashinali o’qitish nima?",
    "answer": "kompyuter dasturining ma’lumotlarni o’qib olish asosida xususiyatlarni o’rganish qobiliyatidir",
    "noAnswer1": "faqat kompyuter o’yinlarini yaratish uchun dastur xususiyatlarni o’rganish qobiliyatidir",
    "noAnswer2": "bu robotni o’rgatishning an’anaviy usuli",
    "noAnswer3": "kompyuter dasturlarini lug’at yordamida o’qitish usuli"
  },
  {
    "question": "Pythonda massivni e’lon qilish uchun qanday toifalardan foydalaniladi?",
    "answer": "array, matrix",
    "noAnswer1": "tuple, arr",
    "noAnswer2": "list, tuple",
    "noAnswer3": "arr, list"
  },
  {
    "question": "O’qituvchili o’qitish (Supervised learning) – bu .. ?",
    "answer": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish .",
    "noAnswer1": "Bu – modelning aniqligini aniqlash algoritmi",
    "noAnswer2": "Ma’lumotlarga ishlov berish dasturi",
    "noAnswer3": "Oddiy algoritm"
  },
  {
    "question": "…… bu ikkita qatlamdan iborat ya’ni kiruvchi va chiquvchi qatlamdan iborat bo’lgan neyronni\r\nhisoblash tugunidir. Nuqtalar o’rniga quyidagilardan mos keldiganini qo’ying?",
    "answer": "perceptron",
    "noAnswer1": "sigmoid funksiyasi",
    "noAnswer2": "neyron",
    "noAnswer3": "ReLU funksiyasi"
  },
  {
    "question": "Regressiya nima?",
    "answer": "ma’lumotlarni intellektual tahlil qilish usullaridan biri",
    "noAnswer1": "ma’lumotlarni ustida arifmetik usullaridan biri",
    "noAnswer2": "ma’lumotlarni raqamli ishlov berish usullaridan biri",
    "noAnswer3": "ma’lumotlarni jamlash usullaridan biri"
  },
  {
    "question": "Python muhitida for sikl operatorida ishlatiladigan for i in range(0,10,2) ifodasida i indekso’zgaruvchisiga qanday qiymatlar keladi?",
    "answer": "0 2 4 6 8",
    "noAnswer1": "0 2 10",
    "noAnswer2": "0 10",
    "noAnswer3": "2 4 6 8 10"
  },
  {
    "question": "Supervised o’qitish algoritmlari asosan qanday masalani yechishga qaratilgan?",
    "answer": "regressiya va sinflashtirish masalasiga",
    "noAnswer1": "statistik usullar yordamida ma’lumotlarni ajratish masalasiga",
    "noAnswer2": "statistik usullar yordamida ma’lumotlarni sinflashtirish masalasiga",
    "noAnswer3": "sinflashtirish va segmentlash masalasiga"
  },
  {
    "question": "Neyron tarmoqda qanday turdagi qatlamlar (layers) bo’lishi mumkin?",
    "answer": "kiruvchi, chiquvchi, yashirin",
    "noAnswer1": "kiruvchi, yashirin, oraliq",
    "noAnswer2": "qabul qiluvchi, hisoblovchi, chiquvchi",
    "noAnswer3": "kiruvchi, qabul qiluvchi, chiquvchi"
  },
  {
    "question": "Chiziqli regression model nima uchun ishlatiladi?",
    "answer": "bashorat qilish uchun",
    "noAnswer1": "mantiqiy model qurish uchun",
    "noAnswer2": "sinflashtirish masalasini yechish uchun",
    "noAnswer3": "segmentlash masalasini yechish uchun"
  },
  {
    "question": "Neyron tarmoq nima?",
    "answer": "bu inson miyasining ishlash faoliyatini qisman aks ettiruvchi tuzilma",
    "noAnswer1": "bu inson miyasining ishlash faoliyatini qisman aks ettiruvchi dataset",
    "noAnswer2": "bu inson miyasining ishlash faoliyatini butunlay aks ettiruvchi dataset",
    "noAnswer3": "bu inson miyasining ishlash faoliyatini butunlay aks ettiruvchi tuzilma"
  },
  {
    "question": "Sun’iy intellekt deganda nimani tushunasiz?",
    "answer": "insonning onggi kabi fikrlovchi dastur",
    "noAnswer1": "oddiy kompyuter dasturi",
    "noAnswer2": "qaror qabul qiluvchi ilovalar",
    "noAnswer3": "bunday termin fanda mavjud emas"
  },
  {
    "question": "Sun'iy intellekt bu …?",
    "answer": "bu kompyuterda insonning aqlli xatti harakatlarini qanday amalga oshirishni o'rganadigantadqiqot sohasi",
    "noAnswer1": "bu kompyuterda insonning jismoniy xatti harakatlarini qanday amalga oshirishni o'rganadigantadqiqot sohasi",
    "noAnswer2": "bu kompyuterda insonning bialogik xatti harakatlarini qanday amalga oshirishni o'rganadigantadqiqot sohasi",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Keras kutubxonasidagi Sequential() nima vazifani bajaradi?",
    "answer": "neyron tarmoq modelini qurish uchun dastlabki obyektni yaratadi",
    "noAnswer1": "ketma-ket kamida 2 qatlamdan iborat neyron tarmoq quradi",
    "noAnswer2": "neyron tarmoq modelini o’qitish uchun ishlatiladi",
    "noAnswer3": "qurilgan neyron tarmoqni ketma-ket ko’rinishga keltiradi"
  },
  {
    "question": "Python muhitida for sikl operatorida ishlatiladigan for i in range(10) ifodasida i indekso’zgaruvchisiga qanday qiymatlar keladi?",
    "answer": "0 1 2 3 4 5 6 7 8 9",
    "noAnswer1": "0 1 2 3 4 5 6 7 8 9 10",
    "noAnswer2": "0 9",
    "noAnswer3": "1 2 3 4 5 6 7 8 9 10"
  },
  {
    "question": "Qanday turdagi faollashtirish funksiyalari mavud?",
    "answer": "ReLU, sigmoid, softmax",
    "noAnswer1": "loss, sigmoid, ReLU",
    "noAnswer2": "ReLU, cost, softmax",
    "noAnswer3": "cost, loss, sigmoid"
  },
  {
    "question": "Chuqur o’qitish – bu?",
    "answer": "bu ko'p qatlamli neyron tarmoqlar asosida obyekt xususiyatlarini tushunishga qaratilganjarayondir",
    "noAnswer1": "bu bir qatlamli neyron tarmoqlar asosida obyekt xususiyatlarini tushunishga qaratilganjarayondir",
    "noAnswer2": "bu bu modelni qurib olish uchun amalga oshiriladigan o’qitish jarayonidir",
    "noAnswer3": "bu modelni tezroq va aniqroq qurib olish uchun amalga oshiriladigan jarayon"
  },
  {
    "question": "Python muhitida turli xil matematik funksiya grafiklarini va tasvirlarni vizuallashtirish uchunishlatiladigan paket qaysi?",
    "answer": "matplotlib",
    "noAnswer1": "keras",
    "noAnswer2": "pandas",
    "noAnswer3": "numpy"
  },
  {
    "question": "Sun’iy neyron tarmoq tashkil etuvchilarini ko’rsating?",
    "answer": "node, input, weights, output",
    "noAnswer1": "cell body, dendrites, synapse, axon",
    "noAnswer2": "input, dendrites, synapse, output",
    "noAnswer3": "synapse, axon, weights, node"
  },
  {
    "question": "Python muhitida scatter() funksiyasi qanday vazifani bajaradi?",
    "answer": "berilgan x,y to'plam bo’yicha 2 o’lchovli grafigini chizish uchun ishlatiladi",
    "noAnswer1": "chiziqli regression model koeffitsentlarini (ko’pi bilan 3 ta) hisoblaydi",
    "noAnswer2": "polinomial regression model koeffitsentlarini hisoblaydi",
    "noAnswer3": "qurilgan model koeffitsentlari bo’yicha bashorat qilinadigan qiymatlarni hisoblaydi"
  },
  {
    "question": "pip install tensorflow buyrug’i asosida nima sodir bo’ladi?",
    "answer": "tensorflow kutubxonasi o’rnatiladi",
    "noAnswer1": "keras va tensorflow kutubxonasi o’rnatiladi",
    "noAnswer2": "tensorflow kutubxonasi chaqiriladi",
    "noAnswer3": "keras va tensorflow kutubxonasi chaqiriladi"
  },
  {
    "question": "Biologik neyron tarmoq tashkil etuvchilarini ko’rsating?",
    "answer": "cell body, dendrites, synapse, axon",
    "noAnswer1": "input, dendrites, synapse, output",
    "noAnswer2": "node, input, weights, output",
    "noAnswer3": "synapse, axon, weights, node"
  },
  {
    "question": "Dataset bu nima?",
    "answer": "bu o’qitish uchun kerakli bo’lgan ma'lumotlar to'plamidir",
    "noAnswer1": "bu o’qitish uchun kerakli bo’lgan neyronlar to'plamidir",
    "noAnswer2": "bu o’qitish uchun kerakli bo’lgan og’irliklar to'plamidir",
    "noAnswer3": "bu o’qitish uchun kerakli bo’lgan neyron tarmoq qatlamlar to'plamidir"
  },
  {
    "question": "Convolutional neural networks (CNN) – bu?",
    "answer": "bu ko'p qatlamli neyron tarmoq asosida qurilgan chuqur o’qitishning maxsus arxitekturasi",
    "noAnswer1": "bu bir qatlamli neyron tarmoq asosida qurilgan chuqur o’qitishning maxsus arxitekturasi",
    "noAnswer2": "bu ko’p qatlamli neyron tarmoq asosida qurilgan chuqur o’qitishning maxsus usuli",
    "noAnswer3": "bu bir qatlamli neyron tarmoq asosida qurilgan chuqur o’qitishning maxsus usuli"
  },
  {
    "question": "Sun’iy intellektga asoslangan dasturlarni ishlab chiqishdan maqsad nima?",
    "answer": "mustaqil fikrlovchi va qaror qabul qiluvchi dasturlarni hayotga tadbiq qilish",
    "noAnswer1": "vaqtni maroqli o‘tkazish",
    "noAnswer2": "insonlarning yashash darajasini yaxshilash",
    "noAnswer3": "ortiqcha sarf-xarajatni kamaytirish"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati -5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o’zgaradi?",
    "answer": "0",
    "noAnswer1": "5",
    "noAnswer2": "-5",
    "noAnswer3": "3,5"
  },
  {
    "question": "Mashinani o’qitish turlari to’g’ri ko’rsatilgan javobni tanlang?",
    "answer": "supervised, unsupervised, Semi-supervised, reinforcement",
    "noAnswer1": "regressiya, Ehtimollar nazariyasi, Supervised, unsupervised",
    "noAnswer2": "supervised, unsupervised, Regressiya, Sinflashtirish",
    "noAnswer3": "regressiya, Sinflashtirish, Semi-supervised, reinforcement"
  },
  {
    "question": "Neyron tarmoqlari bu…?",
    "answer": "Neyron tarmoqlari juda ko’p muhim xususiyatlarga ega, ammo asosiysi bu o’rganishqobiliyatidir.",
    "noAnswer1": "Neyron tarmoqlari ma’lumotlarni bog’lash uchun xizmat qiladi.",
    "noAnswer2": "Bunday tarmoq mavjud emas",
    "noAnswer3": "Ikkilik kod sifatidagi algoritm"
  },
  {
    "question": "Mashinali o’qitishda asosan qaysi instrumental vositalardan foydalaniladi",
    "answer": "Python, Matlab, Octave",
    "noAnswer1": "Python,NLP,Keras",
    "noAnswer2": "Numpy,Pandas",
    "noAnswer3": "Python,Keras,Pandas"
  },
  {
    "question": "KNN bu - …",
    "answer": "Barchasi to’gri",
    "noAnswer1": "Klasterlash algoritmi",
    "noAnswer2": "Regressiya algoritmi",
    "noAnswer3": "Sinflashrirish algoritmi"
  },
  {
    "question": "Chiziqli regressiyaga to’g’ri ta’rifni toping?",
    "answer": "Chiziqli regressiya kuzatilgan ma'lumotlarga chiziqli tenglamani bog’lash orqali ikkitao'zgaruvchi o'rtasidagi munosabatni modellashtirishga aytiladi.",
    "noAnswer1": "Chiziqli regressiya ma’lumotlarni klassifikatsiyalaydi.",
    "noAnswer2": "Chiziqli Regressiya bu tanlangan ma’lumotlar ichidan kerakli ma’lumotni qidirish algoritmi.",
    "noAnswer3": "To’g’ri javob yo’q."
  },
  {
    "question": "Quyidagi usullardan qaysi biri har qanday chiziqli bo'linadigan ma'lumotlar to'plamida nol\r\no'qitish(zero training) xatosiga erishishi mumkin?",
    "answer": "KNN",
    "noAnswer1": "Qaror daraxti",
    "noAnswer2": "SVM(support vector machine)",
    "noAnswer3": "CNN"
  },
  {
    "question": "CNN bu…?",
    "answer": "Svyortkali neyron tarmoq",
    "noAnswer1": "Adamar neyron tarmog’i",
    "noAnswer2": "K ta yaqin qo’shnilar",
    "noAnswer3": "Qayta murojaat neyron tarmog’i"
  },
  {
    "question": "KNN bu…?",
    "answer": "K ta yaqin qo’shnilar agoritmi",
    "noAnswer1": "Svyortkali neyron tarmoq",
    "noAnswer2": "Adamar almashtririshli Neyron tarmoq",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Sun’iy intellektda mashinani o'qitish uchun to’g’ri ta’rif berilgan qatorni tanlang",
    "answer": "Sun’iy intellekt - bu inson ongiga taqlid qila oladigan dasturiy ta'minot va uni mashinali\r\no’qitishda aqlli mashinalarga dasturlashning muqobil usulidir.",
    "noAnswer1": "Mashinali o’qitish - bu aqlli mashinalarni dasturlashning muqobil usuli.",
    "noAnswer2": "Mashinali o’qitish va suniy intellektning maqsadlari juda boshqacha.",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "O’qituvchisiz o’qitish (unsupervised learning) – bu … ?",
    "answer": "mashinani o’qitish usulidan biri bo’lib, bunda modelni oldindan aniq bo’lgan ma’lumotlar bilano’qitish amalga oshirilmaydi, aksincha obyekt parametrlarini (ma'lumotlarni) topish uchunmodelga o'z ustida ishlashga imkon yaratib beriladi",
    "noAnswer1": "Ma’lumot qidirish algoritmlaridan tashkil topgan tizim",
    "noAnswer2": "Bunday o’qitish mavjud emas",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Unsupervised learning usulida asosan qanday masala yechiladi?",
    "answer": "klasterlash",
    "noAnswer1": "normallashtirish",
    "noAnswer2": "sinflashtirish",
    "noAnswer3": "Signallarga ishlov berish"
  },
  {
    "question": "O’qituvchisiz o’qitish algoritmlari qaysi?",
    "answer": "Hierarchical clustering va K-means clustering",
    "noAnswer1": "SVM va CNN",
    "noAnswer2": "RNN va GMM",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Ma’lumotlarni tozalashga to'liq ta'rif berilgan qatorini toping?",
    "answer": "Ushbu bosqichda ma’lumotlar orasidan ortiqcha yoki ahamiyati past bo’lgan model\r\nturg’unligiga ta’sir qiluvchi ma’lumotlar olib tashlanadi.",
    "noAnswer1": "Dataset ma’lumotlarini testlash",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Qaror daraxtidan ma’lumotlarni olib tashlash"
  },
  {
    "question": "Xususiyatlarni ajratib olishga to'liq ta'rif berilgan qatorini toping?",
    "answer": "o’qituvchi to’plamdagi ma’lumotlar xususiyatlari o’rganib chiqiladi va bashoratlash, tashxislash, sinflashtirish, qaror qabul qilish uchun kerakli xususiyatlar ajratib olish",
    "noAnswer1": "Qaror qabul qilish daraxti qiymatlari",
    "noAnswer2": "Sinflashtirish masalasini yechish algoritmi to’plami",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati 0.5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o‟zgaradi",
    "answer": "0.5",
    "noAnswer1": "1",
    "noAnswer2": "0",
    "noAnswer3": "2"
  },
  {
    "question": "Chiziqli regressiya qaysi mashinali o’qitish algoritmlari tarkibiga kiradi?",
    "answer": "O’qituvchili o’qitish",
    "noAnswer1": "O’qituvchisiz o’qitish",
    "noAnswer2": "Reinforcementli o'qitish",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati 2.5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o‟zgaradi",
    "answer": "2,5",
    "noAnswer1": "2",
    "noAnswer2": "0",
    "noAnswer3": "44595"
  },
  {
    "question": "Sun’iy intellektda mashinani o'qitish uchun to’g’ri ta’rif berilgan qatorni tanlang",
    "answer": "Sun’iy intellekt - bu inson ongiga taqlid qila oladigan dasturiy ta'minot va uni mashinali\r\no’qitishda aqlli mashinalarga dasturlashning muqobil usulidir.",
    "noAnswer1": "Mashinali o’qitish - bu aqlli mashinalarni dasturlashning muqobil usuli.",
    "noAnswer2": "Mashinali o’qitish va suniy intellektning maqsadlari juda boshqacha.",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Mashinali o’qitish turlari qaysi qatorda to’g’ri berilgan",
    "answer": "O’qtuvchili va O’qituvchisiz",
    "noAnswer1": "Tanlanma",
    "noAnswer2": "Ma’lumotlar bazasi",
    "noAnswer3": "Chiziqli va logistik"
  },
  {
    "question": "O’qituvchili o’qitish (Supervised learning) – bu .. ?",
    "answer": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish .",
    "noAnswer1": "Bu – modelning aniqligini aniqlash algoritmi",
    "noAnswer2": "Ma’lumotlarga ishlov berish dasturi",
    "noAnswer3": "Oddiy algoritm"
  },
  {
    "question": "O’qituvchisiz o’qitish (unsupervised learning) – bu … ?",
    "answer": "mashinani o’qitish usulidan biri bo’lib, bunda modelni oldindan aniq bo’lgan ma’lumotlar bilano’qitish amalga oshirilmaydi, aksincha obyekt parametrlarini (ma'lumotlarni) topish uchunmodelga o'z ustida ishlashga imkon yaratib beriladi",
    "noAnswer1": "Ma’lumot qidirish algoritmlaridan tashkil topgan tizim",
    "noAnswer2": "Bunday o’qitish mavjud emas",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Unsupervised learning usulida asosan qanday masala yechiladi?",
    "answer": "klasterlash",
    "noAnswer1": "normallashtirish",
    "noAnswer2": "sinflashtirish",
    "noAnswer3": "Signallarga ishlov berish"
  },
  {
    "question": "O’qituvchisiz o’qitish algoritmlari qaysi?",
    "answer": "Hierarchical clustering va K-means clustering",
    "noAnswer1": "SVM va CNN",
    "noAnswer2": "RNN va GMM",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Hozirgi kunda butun dunyoda rivojlanib borayotgan mashinali o’qitish (machine learning), chuqur o’qitish (deep learning) kabi usullar sun’iy intellekt bilan qanday bog’liq",
    "answer": "hozirda tasvirlardan ob’ektlarni tanib olish, video nazorat, ovozni tanib olish kabi sohalardakeng foydalaniladi va sun’iy intellekt tizimini yaratishda katta ahamiyat kasb etadi",
    "noAnswer1": "faqat ovozni tanib olishda ishlatiladi va sun’iy intellekt tizimini yaratishda deyarli\r\nfodalanilmaydi",
    "noAnswer2": "tasvirlarni tanib olishda ishlatiladi va sun’iy intellekt tizimini yaratishda foydalaniladi",
    "noAnswer3": "faqatgina ma’lumotlarning intellektual tahliliga oid"
  },
  {
    "question": "Mashinani o’qitish jarayonida ma’lumotlarga qanday dastlabki ishlov beriladi?",
    "answer": "Format, Data Cleaning, Feature Extraction",
    "noAnswer1": "Data Cleaning, Resizing, , Feature Extraction",
    "noAnswer2": "Resizing, Feature Extraction, Format",
    "noAnswer3": "Format, Resizing, Data Cleaning"
  },
  {
    "question": "Regression tahlilni qanday usullar asosida amalga oshiriladi.",
    "answer": "chiziqli, nochiziqli va logistik regressiya usullari asosida",
    "noAnswer1": "sintaktik usullar asosida",
    "noAnswer2": "dinamik usillar asosida",
    "noAnswer3": "semantik usullari asosida"
  },
  {
    "question": "Muammoni aniqlash, ma’lumotlarni tayyorlash, algoritmni ishlab chiqish va baholash, natijaviyma’lumotlar aniqligini oshirish va yakuniy natijani taqdim qilish – bular qanday jarayonningbosqichlari hisoblanadi",
    "answer": "Mashinali o’qitish",
    "noAnswer1": "Chuqur o’qitish",
    "noAnswer2": "Regression tahlil",
    "noAnswer3": "Statistik tahlil"
  },
  {
    "question": "Keras bu – ...",
    "answer": "tensorflow asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona",
    "noAnswer1": "numpy asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona",
    "noAnswer2": "ochiq kodli neyron tarmoq uchun mo’ljallangan dasturiy vosita",
    "noAnswer3": "matplotlib asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona"
  },
  {
    "question": "Tensorflow bu – ...",
    "answer": "Python kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer1": "Matlab kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer2": "Ocatev kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer3": "Python kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallanmagan."
  },
  {
    "question": "Sklearn bu - …",
    "answer": "Python dasturlash tilidagi maxsus kutubxona bo’lib, mashinali o’qitish algoritmlarini amalgaoshirishga mo’ljallangan maxsus paket",
    "noAnswer1": "Matlabning maxsus paketi bo’lib, mashinali o’qitish algoritmlarini amalga oshirishgamo’ljallangan hisoblanadi",
    "noAnswer2": "Python dasturlash tilidagi maxsus kutubxona bo’lib, o’zini o’zi o’qitadigan mashinali o’qitishalgortimlarini ishlab chiqishga mo’ljallangan",
    "noAnswer3": "Python dasturlash tilidagi maxsus kutubxona bo’lib, mashinali o’qitishning o’qituvchili\r\nalgoritmlarini amalga oshirishga mo’ljallangan maxsus paket"
  },
  {
    "question": "Chuqur o’qitish qanday tarmoqlari asosida amalga oshiriladi?",
    "answer": "neyron tarmoqlar asosida",
    "noAnswer1": "lokal tarmoqlar asosida",
    "noAnswer2": "global tarmoqlar asosida",
    "noAnswer3": "internet tarmoqlar asosida"
  },
  {
    "question": "Chuqur o’qitish necha asosiy bosqichlardan tashkil topgan?",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "6"
  },
  {
    "question": "Mashinali o’qitish turlari qaysi qatorda to’g’ri berilgan",
    "answer": "O’qtuvchili va O’qituvchisiz",
    "noAnswer1": "Tanlanma",
    "noAnswer2": "Ma’lumotlar bazasi",
    "noAnswer3": "Chiziqli va logistik"
  },
  {
    "question": "Modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "answer": "Semi-supervised learning",
    "noAnswer1": "Reinforcement learning",
    "noAnswer2": "Unsupervised learning",
    "noAnswer3": "Supervised learning"
  },
  {
    "question": "Modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "answer": "Unsupervised learning",
    "noAnswer1": "Supervised learning",
    "noAnswer2": "Semi-supervised learning",
    "noAnswer3": "Reinforcement learning"
  },
  {
    "question": "Bir o’zgaruvchili chiziqli regressiya bu - ….",
    "answer": "Bashoratlash uchun obyektni xarakterlovchi bitta xususiyatini olib bashoratlashga xizmat\r\nqiladigan model yaratish",
    "noAnswer1": "Bashoratlash uchun obyektni xarakterlovchi ko’p sondagi xususiyatlarini olib bashoratlashgaxizmat qiladigan model yaratish",
    "noAnswer2": "Siflashtirish uchun obyektni xarakterlovchi bitta xususiyatini olib siflashtirishga xizmat\r\nqiladigan model yaratish",
    "noAnswer3": "Siflashtirish uchun obyektni xarakterlovchi ko’p sondagi xususiyatlarini olib siflashtirishgaxizmat qiladigan model yaratish"
  },
  {
    "question": "Ko’p o’zgaruvchili chiziqli regressiya bu -...",
    "answer": "Bashoratlash uchun obyektni xarakterlovchi ko’p sondagi xususiyatlarini olib bashoratlashgaxizmat qiladigan model yaratish",
    "noAnswer1": "Bashoratlash uchun obyektni xarakterlovchi bitta xususiyatini olib bashoratlashga xizmat\r\nqiladigan model yaratish",
    "noAnswer2": "Siflashtirish uchun obyektni xarakterlovchi bitta xususiyatini olib siflashtirishga xizmat\r\nqiladigan model yaratish",
    "noAnswer3": "Siflashtirish uchun obyektni xarakterlovchi ko’p sondagi xususiyatlarini olib siflashtirishgaxizmat qiladigan model yaratish"
  },
  {
    "question": "Logistik regressiya bu?",
    "answer": "Regression tahlil asosida sinflashtirish masalasini yechish",
    "noAnswer1": "Regression tahlil asosida klasterlash masalasini yechish",
    "noAnswer2": "Regression tahlil asosida bashoratlash masalasini yechish",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "O’ratuvchi tanlamadagi val (validation) to’plam bu?",
    "answer": "Modelni o’qitish davomida model parametrlarini sozlash uchun ishlatiladi",
    "noAnswer1": "modelni o’qitish uchun ishlatiladi",
    "noAnswer2": "modelni testlash uchun ishlatiladi",
    "noAnswer3": "Bu turdagi o’rgatuvchi tanlamadan foydalanilmaydi"
  },
  {
    "question": "O’qitish jarayonida regulyarizatsiyalash bu?",
    "answer": "Modelni o’qitish jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish",
    "noAnswer1": "Barcha javob to’g’ri",
    "noAnswer2": "Modelni testlash jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish",
    "noAnswer3": "Modelni qurish jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish"
  },
  {
    "question": "KNN algoritmida k ni katta tanlasak nima sodir bo’ladi?",
    "answer": "Model qurish vaqti oshib ketadi. Bazan k ning katta tanlanishi sinflashtirishda xatolikka ko’puchrashi mumkin",
    "noAnswer1": "Shovqinga sezgir bo’ladi va sinflashtirishda xatolikka ko’p uchrashi mumkin",
    "noAnswer2": "KNN algoritmida k parametr yo’q.",
    "noAnswer3": "k ni kichik yoki katta tanlash algoritm ishiga ta’sir qilmaydi"
  },
  {
    "question": "Modelni qurishda bo’ladigan Underfitting muammosi bu?",
    "answer": "Model train to’plmada ham, test to’plamda ham yuqori aniqlik bermaydi. Model sodda tuzilgan.",
    "noAnswer1": "Model train to’plmada ham, test to’plamda ham yuqori aniqlik bermaydi. Model murakkabtuzilgan.",
    "noAnswer2": "Model train to’plmada yuqori, test to’plamda esa past aniqlik beradi. Model sodda tuzilgan.",
    "noAnswer3": "Model train to’plmada yuqori, test to’plamda esa past aniqlik beradi. Model murakkab tuzilgan."
  },
  {
    "question": "Model qurishda bo’ladigan Owerfitting muammosi bu?",
    "answer": "Rasmlarni joylashtirish uchun",
    "noAnswer1": "Ma’lumotlarni jadval ko‘rinishida chop etish uchun",
    "noAnswer2": "Audioma’lumotlarni joylashtirish uchun",
    "noAnswer3": "Matnli ma’lumotlarni joylashtirish uchun"
  },
  {
    "question": "Mobil ilovadagi element ustiga sichqoncha chap tugmasi bilan bosilganda qaysi metod ishga\r\ntushadi?",
    "answer": "Model train to’plamda yuqori, test to’plamda esa past aniqlik beradi. Model murakkab tuzilgan.",
    "noAnswer1": "Model train to’plamda ham, test to’plamda ham yuqori aniqlik bermaydi. Model sodda tuzilgan.",
    "noAnswer2": "Model train to’plamda ham, test to’plamda ham yuqori aniqlik bermaydi. Model murakkabtuzilgan.",
    "noAnswer3": "Model train to’plamda yuqori, test to’plamda esa past aniqlik beradi. Model sodda tuzilgan."
  },
  {
    "question": "Bias tushunchasi?",
    "answer": "Modelni train to’plam bilan testlaganda bo’ladigan xatolik",
    "noAnswer1": "Modelni test to’plam bilan testlaganda bo’ladigan xatolik",
    "noAnswer2": "Modelni train + test to’plam bilan testlaganda bo’ladigangadi umumiy xatolik",
    "noAnswer3": "Modelni validation to’plam bilan testlaganda bo’ladigangadi umumiy xatolik"
  },
  {
    "question": "Variance tushunchasi?",
    "answer": "Modelni test to’plam bilan testlaganda bo’ladigan xatolik",
    "noAnswer1": "Modelni train to’plam bilan testlaganda bo’ladigan xatolik",
    "noAnswer2": "Modelni train + test to’plam bilan testlaganda bo’ladigangadi umumiy xatolik",
    "noAnswer3": "Modelni validation to’plam bilan testlaganda bo’ladigangadi umumiy xatolik"
  },
  {
    "question": "Underfitting bu - …",
    "answer": "Model juda soda. Shuning evaziga model train to’plamda ham, test to’plamda katta xatolikbo’lishiga olib keladi",
    "noAnswer1": "Model juda muakkab. Shuning evaziga model train to’plamda ham, test to’plamda kattaxatolik bo’lishiga olib keladi",
    "noAnswer2": "Model juda soda. Shuning evaziga model train to’plamda yuqori, test to’plamda past xatolikbo’lishiga olib keladi",
    "noAnswer3": "Model juda muarkkab. Shuning evaziga model train to’plamda yuqori, test to’plamda past\r\nxatolik bo’lishiga olib keladi"
  },
  {
    "question": "Owerfitting bu - …",
    "answer": "Model juda muarkkab. Shuning evaziga model train to’plamda past, test to’plamda yuqori\r\nxatolik bo’lishiga olib keladi",
    "noAnswer1": "Model juda soda. Shuning evaziga model train to’plamda ham, test to’plamda katta xatolikbo’lishiga olib keladi",
    "noAnswer2": "Model juda muakkab. Shuning evaziga model train to’plamda ham, test to’plamda kattaxatolik bo’lishiga olib keladi",
    "noAnswer3": "Model juda soda. Shuning evaziga model train to’plamda yuqori, test to’plamda past xatolikbo’lishiga olib keladi"
  },
  {
    "question": "Model qurishda bo’ladigan Underfitting muammosi qanday hal qilsa bo’ladi?",
    "answer": "Modelni murakkabligini oshirib ko’rish kerak",
    "noAnswer1": "Modelni murakkabligini pasaytirib ko’rish kerak",
    "noAnswer2": "Bu muammoni hal qilishning imkoni yoq",
    "noAnswer3": "Datasetni hajmini kamaytirib ko’rish kerak"
  },
  {
    "question": "Model qurishda bo’ladigan Owerfitting muammosi qanday hal qilsa bo’ladi?",
    "answer": "Modelni murakkabligini pasaytirib ko’rish kerak",
    "noAnswer1": "Modelni murakkabligini oshirib ko’rish kerak",
    "noAnswer2": "Bu muammoni hal qilishning imkoni yoq",
    "noAnswer3": "Datasetni hajmini kamaytirib ko’rish kerak"
  },
  {
    "question": "O’rgatuvchi tanlama nima?",
    "answer": "bu o’qitish uchun kerakli bo’lgan ma'lumotlar to'plamidir",
    "noAnswer1": "bu o’qitish uchun kerakli bo’lgan neyronlar to'plamidir",
    "noAnswer2": "bu o’qitish uchun kerakli bo’lgan og’irliklar to'plamidir",
    "noAnswer3": "bu o’qitish uchun kerakli bo’lgan neyron tarmoq qatlamlar to'plamidir"
  },
  {
    "question": "O’ratuvchi tanlamadagi train to’plam …",
    "answer": "modelni o’qitish uchun ishlatiladi",
    "noAnswer1": "modelni testlash uchun ishlatiladi",
    "noAnswer2": "Modelni o’qitish davomida model parametrlarini sozlash uchun ishlatiladi",
    "noAnswer3": "Bu turdagi o’rgatuvchi tanlamadan foydalanilmaydi"
  },
  {
    "question": "Uyning xarakterlovchi xususiyatlari asosida ikkita guruhga(klasterga) (biznes, ekanom)\r\najratish uchun qaysi mashinali o’qitish algoritmidan foydalaniladi",
    "answer": "Kmeans",
    "noAnswer1": "SVM",
    "noAnswer2": "Random Forest",
    "noAnswer3": "Logistik regressiya"
  },
  {
    "question": "KNN algoritmida k ni kichik tanlasak nima sodir bo’ladi?",
    "answer": "Shovqinga sezgir bo’ladi va sinflashtirishda xatolikka ko’p uchrashi mumkin",
    "noAnswer1": "Shovqinga sezgir bo’lmaydi va sinflashtirishda xatolikka ko’p uchrashi mumkin",
    "noAnswer2": "KNN algoritmida k parametr yo’q.",
    "noAnswer3": "k ni kichik yoki katta tanlash algoritm ishiga ta’sir qilmaydi"
  },
  {
    "question": "KNN algoritmida k ta eng yaqin qo’shni qanday aniqlanadi?",
    "answer": "To’plamdagi barcha elemetlar orasidagi masofa hisoblanib chiqiladi va eng yaqin k tasi\r\ntanlanadi",
    "noAnswer1": "Taxminiy random() funksiyasi orqali aniqlanadi",
    "noAnswer2": "To’plamdagi k ta elemetlar orasidagi masofa hisoblanib chiqiladi va ular o’sish tartibidasaralanadi.",
    "noAnswer3": "KNN algoritmida k ta eng yaqin qo’shni tushunchasi yo’q."
  },
  {
    "question": "SVM algorimi qaysi masalani yechish uchun xizmat qiladi?",
    "answer": "Sinflashtirsh",
    "noAnswer1": "Chiziqli regressiya",
    "noAnswer2": "Klasterlash",
    "noAnswer3": "Normallashtirish"
  },
  {
    "question": "KNN algoritmi qaysi masalani yechish uchun xizmat qiladi",
    "answer": "Barcha javob to’g’ri",
    "noAnswer1": "Sinflashtirish",
    "noAnswer2": "Regressiya",
    "noAnswer3": "Klasterlash"
  },
  {
    "question": "KMeans bu -",
    "answer": "O’qituvchisiz o’qitish algoritmi",
    "noAnswer1": "O’qituvchili o’qitish algoritmi",
    "noAnswer2": "O’zini o’zi o’qitadigan algoritmi",
    "noAnswer3": "to’g’ri javob yo’q"
  },
  {
    "question": "Kmaens algoritmi qaysi masalani yechish uchun xizmat qiladi",
    "answer": "Klasterlash",
    "noAnswer1": "Barcha javob to’g’ri",
    "noAnswer2": "Sinflashtirish",
    "noAnswer3": "Regressiya"
  },
  {
    "question": "Qidiruv tizimlarida sun’iy intellektdan foydalanish mumkinmi",
    "answer": "ha, mumkin va hozirda keng qo‘llanilmoqda (misol uchun Google, Yandex qidiruv tizimlari)",
    "noAnswer1": "qisman amaliy natijalari bor lekin yetarlicha nazariy jihatdan formallashtirilmagan",
    "noAnswer2": "nazariy jihatdan mumkin, lekin hozircha amaliy jihatdan natijalarga erishilmagan",
    "noAnswer3": "qidiruv tizimlarida sun’iy intellektdan foydalanish qidiruv vaqtini oshiradi"
  },
  {
    "question": "Mashinani o’qitish jarayonida ma’lumotlarga qanday dastlabki ishlov beriladi?",
    "answer": "Ma’lumotlar formatlari bir xillashtiriladi",
    "noAnswer1": "Ma’lumotlarni tozalash",
    "noAnswer2": "Ma’lumotlardan xususiyatlarni ajratish",
    "noAnswer3": "Barchasi to’g’ri"
  },
  {
    "question": "Sun’iy neyron tarmoqlarida perceptron tushunchasi?",
    "answer": "bu ikkita qatlamdan iborat ya’ni kiruvchi va chiquvchi qatlamdan iborat bo’lgan neyronni\r\nhisoblash tugunidir.",
    "noAnswer1": "bu ikkita qatlamdan iborat ya’ni kiruvchi va faollashtish qatlamdan iborat bo’lgan neyronni\r\nhisoblash tugunidir.",
    "noAnswer2": "bu bir qatlamdan iborat bo’lgan neyronni hisoblash tugunidir.",
    "noAnswer3": "bu uch qatlamdan iborat bo’lgan neyronni hisoblash tugunidir."
  },
  {
    "question": "CIFAR10 datasetda tasvirlarning o’lchami qaysi o’lchamda",
    "answer": "To’g’ri javob yo’q",
    "noAnswer1": "28x28",
    "noAnswer2": "128x128",
    "noAnswer3": "64x64"
  },
  {
    "question": "Sun’iy neyron tarmoqlarida yashirin qatlam tushunchasi?",
    "answer": "Kiruvchi va chiquvchi qatlamlar orasida joylashadigan neyron",
    "noAnswer1": "Ko’rinmaydigan qatlam",
    "noAnswer2": "Neyron tarmoqda yashirin qatlam tushunchasi yo’q",
    "noAnswer3": "Kiruvchi qatlamdan kiyin keladigan barcha qatlamalar"
  },
  {
    "question": "Sun’iy neyron tarmoqlarida aktivlashtirish funksiyasi tushunchasi?",
    "answer": "Neyron tugunlaridan chiqqan qiymatni ma’lum bir diapozonga tushirish uchun ishlatiladi",
    "noAnswer1": "Neyron tarmoqda aktivlashtirish funksiyasi tushunchasi yo’q",
    "noAnswer2": "Bu faol bo’lmagan tugunlarni faollashtish uchun ishlatiladi.",
    "noAnswer3": "To’g’ri javob yoq"
  },
  {
    "question": "Chuqur o’qitilish deyiladi, qachonki …",
    "answer": "Nayron tarmog’imizda yashirin qatlamlar soni bittadan ko’p bo’lsa.",
    "noAnswer1": "Nayron tarmog’imizda yashirin qatlamlar soni bitta bo’lsa.",
    "noAnswer2": "Ikkita neyron orasidagi masofa katta bo’lsa",
    "noAnswer3": "Neyronlar soni ikkitadan ko’p bo’lsa"
  },
  {
    "question": "CIFAR100 dataset da nechta sinfga tegishli obyektlarni ma’lumotlari bor",
    "answer": "100",
    "noAnswer1": "99",
    "noAnswer2": "10",
    "noAnswer3": "2"
  },
  {
    "question": "Neyron tarmoq asosida sinflashtirish masalasini yechish mumkinmi?",
    "answer": "Ha",
    "noAnswer1": "Yoq, faqat regressiya masalasini yechadi.",
    "noAnswer2": "Faqat ikkilik sinflashtirganda",
    "noAnswer3": "Yoq, klasterlash masalasini yechadi."
  },
  {
    "question": "Python muhitida chiziqli regression model qurish uchun ishlatiladigan stats.linregress(x,y)\r\nfunksiyasi nechta qiymat qaytaradi",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "2"
  },
  {
    "question": "Neyron tarmoqda tugunlar nimalar bilan bog’lanadi",
    "answer": "og’irlik koeffitsentlari",
    "noAnswer1": "o’zgarmas koeffitsentlar",
    "noAnswer2": "tasodifiy koeffitsentlar",
    "noAnswer3": "ozod had koeffitsentlari"
  },
  {
    "question": "Qanday turdagi faollashtirish funksiyadan neyron tarmoqda foydalaniladi",
    "answer": "Barchasi to’g’ri",
    "noAnswer1": "ReLU",
    "noAnswer2": "softmax",
    "noAnswer3": "Sigmoid"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati 5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o‟zgaradi",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "0",
    "noAnswer3": "44682"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati -5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o‟zgaradi",
    "answer": "0",
    "noAnswer1": "44682",
    "noAnswer2": "5",
    "noAnswer3": "-5"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati 0 ga teng. Ushbu tugun sigmoid funksiyasi yordamidafaollashtirilsa qanday qiymatga o’zgaradi",
    "answer": "0.5",
    "noAnswer1": "0",
    "noAnswer2": "1",
    "noAnswer3": "2.785661"
  },
  {
    "question": "Hozirgi kunda butun dunyoda rivojlanib borayotgan mashinali o’qitish (machine learning), chuqur o’qitish (deep learning) kabi usullar sun’iy intellekt bilan qanday bog’liq",
    "answer": "hozirda tasvirlardan ob’ektlarni tanib olish, video nazorat, ovozni tanib olish kabi sohalardakeng foydalaniladi va sun’iy intellekt tizimini yaratishda katta ahamiyat kasb etadi",
    "noAnswer1": "faqat ovozni tanib olishda ishlatiladi va sun’iy intellekt tizimini yaratishda deyarli\r\nfodalanilmaydi",
    "noAnswer2": "tasvirlarni tanib olishda ishlatiladi va sun’iy intellekt tizimini yaratishda foydalaniladi",
    "noAnswer3": "faqatgina ma’lumotlarning intellektual tahliliga oid"
  },
  {
    "question": "IRIS dataset da nechta sinfga tegishli obyektlarni ma’lumotlari bor",
    "answer": "3",
    "noAnswer1": "2",
    "noAnswer2": "10",
    "noAnswer3": "2"
  },
  {
    "question": "Chuqur o’qitish qanday tarmoqlari asosida amalga oshiriladi?",
    "answer": "neyron tarmoqlar asosida",
    "noAnswer1": "lokal tarmoqlar asosida",
    "noAnswer2": "global tarmoqlar asosida",
    "noAnswer3": "internet tarmoqlar asosida"
  },
  {
    "question": "Chuqur o’qitish necha asosiy bosqichlardan tashkil topgan?",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "6"
  },
  {
    "question": "Chuqur o’qitishning birinchi bosqichi qanday jarayondan iborat?",
    "answer": "Muammoni tushunib olish.",
    "noAnswer1": "Ma’lumotlarni aniqlash.",
    "noAnswer2": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer3": "Modelni o’qitish."
  },
  {
    "question": "Chuqur o’qitishning ikkinchi bosqichi qanday jarayondan iborat?",
    "answer": "Ma’lumotlarni aniqlash.",
    "noAnswer1": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer2": "Modelni o’qitish.",
    "noAnswer3": "Modelni testlash."
  },
  {
    "question": "Chuqur o’qitishning uchunchi bosqichi qanday jarayondan iborat?",
    "answer": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer1": "Modelni testlash.",
    "noAnswer2": "Muammoni tushunib olish.",
    "noAnswer3": "Modelni o’qitish."
  },
  {
    "question": "Chuqur o’qitishning turtinchi bosqichi qanday jarayondan iborat?",
    "answer": "Modelni o’qitish.",
    "noAnswer1": "Modelni testlash.",
    "noAnswer2": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer3": "Muammoni tushunib olish."
  },
  {
    "question": "Chuqur o’qitishning oxirgi bosqichi qanday jarayondan iborat?",
    "answer": "Modelni testlash.",
    "noAnswer1": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer2": "Modelni o’qitish.",
    "noAnswer3": "Ma’lumotlarni aniqlash."
  },
  {
    "question": "MNIST dataset da nechta sinfga tegishli obyektlarni ma’lumotlari bor",
    "answer": "10",
    "noAnswer1": "9",
    "noAnswer2": "100",
    "noAnswer3": "3"
  },
  {
    "question": "CIFAR10 dataset da nechta sinfga tegishli obyektlarini ma’lumotlari bor",
    "answer": "10",
    "noAnswer1": "9",
    "noAnswer2": "100",
    "noAnswer3": "3"
  },
  {
    "question": "Chiziqli regression modelni qurib bo’lganimizdan so’ng modelni train dataset bilantestlanganda 95% aniqliq va test dataset bilan testlaganimizda 55% aniqlik bersa, qaysi\r\nturdagi mauammo sodir bo’lmoqda",
    "answer": "Owerfitting",
    "noAnswer1": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer2": "Underfitting",
    "noAnswer3": "Everfitting"
  },
  {
    "question": "Chiziqli regression modelni qurib bo’lganimizdan so’ng modelni train dataset bilantestlanganda 95% aniqliq va test dataset bilan testlaganimizda 92% aniqlik bersa, qaysi\r\nturdagi mauammo sodir bo’lmoqda.",
    "answer": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Owerfitting",
    "noAnswer3": "Everfitting"
  },
  {
    "question": "Python ning qaysi kutubxona oraqli vector va matritsalar ustida amalar bajarish mumkin",
    "answer": "Numpy",
    "noAnswer1": "Math",
    "noAnswer2": "Pandas",
    "noAnswer3": "VecMat"
  },
  {
    "question": "Ochiq datasetlarni qidirishga mo’ljallangan tizim qaysi?",
    "answer": "Barchasi to’g’ri",
    "noAnswer1": "UCI Machine Learning Repository",
    "noAnswer2": "VisualData",
    "noAnswer3": "Google Dataset Search"
  },
  {
    "question": "Pandas kutubxonasida head() funksiyasi nima vazifa bajaradi?",
    "answer": "To’plamning dastlabgi bir nechta(5ta) satrini olib beradi.",
    "noAnswer1": "To’plamning ustunlar nomini olib beradi.",
    "noAnswer2": "To’plamning ustunlar nomisiz bir nechta satrini olib beradi.",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Pythonda funksiya e’lon qilish uchun qaysi kalit so’zidan foydalaniladi?",
    "answer": "def",
    "noAnswer1": "function",
    "noAnswer2": "void",
    "noAnswer3": "define"
  },
  {
    "question": "Neyron tarmoqlarida dastlab vazn koeffitsentlari qanday bo’ladi?",
    "answer": "random() funksiyasi orqali taxminiy beriladi.",
    "noAnswer1": "musbat qiymatlar bilan to’ldiriladi.",
    "noAnswer2": "To’ldirish shart emas.",
    "noAnswer3": "manfiy qiymatlar bilan to’ldiriladi."
  },
  {
    "question": "Neyron tarmoqlarida topilgan vazn koeffitsentlari qanday bo’ladi?",
    "answer": "Musbat va manfiy bo’lishi mumkin",
    "noAnswer1": "Faqat musbat bo’ladi",
    "noAnswer2": "Faqat manfiy bo’ladi",
    "noAnswer3": "Qiymatlar [0,1] oraliqda bo’ladi."
  },
  {
    "question": "Unsupervised learning ?",
    "answer": "bu modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "noAnswer1": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish",
    "noAnswer2": "bu modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "noAnswer3": "bu o’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish vanatijalarni yaxshilash imkoniyatiga ega bo’ladi."
  },
  {
    "question": "Semi- supervised learning",
    "answer": "bu modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "noAnswer1": "bu modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "noAnswer2": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish",
    "noAnswer3": "bu o’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish vanatijalarni yaxshilash imkoniyatiga ega bo’ladi."
  },
  {
    "question": "Reinforcement learning ?",
    "answer": "bu o’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish vanatijalarni yaxshilash imkoniyatiga ega bo’ladi.",
    "noAnswer1": "bu modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "noAnswer2": "bu modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "noAnswer3": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish"
  },
  {
    "question": "O’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish va natijalarni\r\nyaxshilash imkoniyatiga ega bo’ladi.",
    "answer": "Reinforcement learning",
    "noAnswer1": "Semi-supervised learning",
    "noAnswer2": "Supervised learning",
    "noAnswer3": "Unsupervised learning"
  },
  {
    "question": "Modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish",
    "answer": "Supervised learning",
    "noAnswer1": "Semi-supervised learning",
    "noAnswer2": "Reinforcement learning",
    "noAnswer3": "Unsupervised learning"
  },
  {
    "question": "IRIS dataset da nechta sinfga tegishli obyektlarni ma’lumotlari bor",
    "answer": "3",
    "noAnswer1": "2",
    "noAnswer2": "10",
    "noAnswer3": "2"
  },
  {
    "question": "CIFAR10 datasetda tasvirlarning o’lchami qaysi o’lchamda",
    "answer": "To’g’ri javob yo’q",
    "noAnswer1": "28x28",
    "noAnswer2": "128x128",
    "noAnswer3": "64x64"
  },
  {
    "question": "CIFAR10 datasetda necha tanlama bor",
    "answer": "60000",
    "noAnswer1": "70000",
    "noAnswer2": "50000",
    "noAnswer3": "10000"
  },
  {
    "question": "CIFAR100 dataset da nechta sinfga tegishli obyektlarni ma’lumotlari bor",
    "answer": "100",
    "noAnswer1": "99",
    "noAnswer2": "10",
    "noAnswer3": "2"
  },
  {
    "question": "Modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "answer": "Semi-supervised learning",
    "noAnswer1": "Reinforcement learning",
    "noAnswer2": "Unsupervised learning",
    "noAnswer3": "Supervised learning"
  },
  {
    "question": "IRIS dataset da obyektni xarakterlovchi xususiyatlari nechta",
    "answer": "4",
    "noAnswer1": "2",
    "noAnswer2": "3",
    "noAnswer3": "8"
  },
  {
    "question": "Pythonda massivni e’lon qilish uchun qanday toifalardan foydalaniladi?",
    "answer": "array, matrix",
    "noAnswer1": "tuple, arr",
    "noAnswer2": "list, tuple",
    "noAnswer3": "arr, list"
  },
  {
    "question": "Supervised learning ?",
    "answer": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish",
    "noAnswer1": "bu modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "noAnswer2": "bu modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "noAnswer3": "bu o’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish va\r\nnatijalarni yaxshilash imkoniyatiga ega bo’ladi."
  },
  {
    "question": "Unsupervised learning ?",
    "answer": "bu modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "noAnswer1": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish",
    "noAnswer2": "bu modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "noAnswer3": "bu o’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish vanatijalarni yaxshilash imkoniyatiga ega bo’ladi."
  },
  {
    "question": "Semi- supervised learning",
    "answer": "bu modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "noAnswer1": "bu modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "noAnswer2": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish",
    "noAnswer3": "bu o’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish vanatijalarni yaxshilash imkoniyatiga ega bo’ladi."
  },
  {
    "question": "Reinforcement learning ?",
    "answer": "bu o’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish vanatijalarni yaxshilash imkoniyatiga ega bo’ladi.",
    "noAnswer1": "bu modelni xususiyatlari aniq bo’lmagan ma’lumotlar bilan o’qitish",
    "noAnswer2": "bu modelni ham aniq ham aniq bo’lmagan xususiyatli ma’lumotlar bilan o’qitishdir.",
    "noAnswer3": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish"
  },
  {
    "question": "O’qitishning mukammal usuli bo’lib, bunda model o’zini-o’zi qayta o’qitish va natijalarni\r\nyaxshilash imkoniyatiga ega bo’ladi.",
    "answer": "Reinforcement learning",
    "noAnswer1": "Semi-supervised learning",
    "noAnswer2": "Supervised learning",
    "noAnswer3": "Unsupervised learning"
  },
  {
    "question": "Logistik regressiyada qaror qabul qilishimiz uchun modeldan olingan qiymat qaysi bo’sag’aqiymati orqali solishtiriladi?",
    "answer": "0.5",
    "noAnswer1": "0",
    "noAnswer2": "1",
    "noAnswer3": "-1 va 1"
  },
  {
    "question": "Pythonda ikkita vektorni birlashtirishda xatolik sodir bo’ladigan javobni tanlang",
    "answer": "a=append(a,b)",
    "noAnswer1": "a=np.append(a,b)",
    "noAnswer2": "a=np.append(b,a)",
    "noAnswer3": "Varinatlarning barchasida vektorlar birlashtiriladi"
  },
  {
    "question": "&gt;&gt;a=[1,5,’ML’,False]<br> &gt;&gt;print(type(a))",
    "answer": "class 'list'",
    "noAnswer1": "class ‘tuple’",
    "noAnswer2": "class ‘array’",
    "noAnswer3": "class 'dec'"
  },
  {
    "question": "Cost funksiya bu?",
    "answer": "Modelni o’qitish davrida model tomonidan topilgan qiymat bilan o’rgatuvchi tanlamadaberilgan qiymat oralidagi farqlarni hisoblash funksiyasi",
    "noAnswer1": "Cosinius funksiyasini qisqartma ko’rinishi?",
    "noAnswer2": "Bunday nomdagi funksiya yo’q.",
    "noAnswer3": "Modelni testlash davrida model tomonidan topilgan qiymat bilan o’rgatuvchi tanlamadaberilgan qiymat oralidagi farqlarni hisoblash funksiyasi"
  },
  {
    "question": "Chiziqli regression model nechta qiymat qaytaradi",
    "answer": "Har doim bitta",
    "noAnswer1": "Ixtiyoriy ravishdagi sonda qiymat qaytarishi mumkin",
    "noAnswer2": "Har doim bittadan ko’p",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "QR code mashinali o’qitilish algoritmi asosida ishlab chiqilgan ?",
    "answer": "Noto’g’ri,",
    "noAnswer1": "To’g’ri",
    "noAnswer2": "Bo’lishi mumkin",
    "noAnswer3": "Bilmayman"
  },
  {
    "question": "Gradient tushish bu?",
    "answer": "Model parametrlarini sozlash uchun ishlatiladigan algoritm",
    "noAnswer1": "Xatolik funksiyasi",
    "noAnswer2": "Kiruvchi ma’lumotlarni narmallashtirish uchun qiymatlarni 0,1oraliqqa tushirish",
    "noAnswer3": "Mashinali o’qitish turi"
  },
  {
    "question": "O’qitish jarayonida regulyarizatsiyalash bu?",
    "answer": "Modelni o’qitish jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish",
    "noAnswer1": "Barcha javob to’g’ri",
    "noAnswer2": "Modelni testlash jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish",
    "noAnswer3": "Modelni qurish jarayonida ortiqcha paramertlardan ozod qilish, qisqartirish"
  },
  {
    "question": "O’ratuvchi tanlamadagi val (validation) to’plam bu?",
    "answer": "Modelni o’qitish davomida model parametrlarini sozlash uchun ishlatiladi",
    "noAnswer1": "modelni o’qitish uchun ishlatiladi",
    "noAnswer2": "modelni testlash uchun ishlatiladi",
    "noAnswer3": "Bu turdagi o’rgatuvchi tanlamadan foydalanilmaydi"
  },
  {
    "question": "Logistik regression model nima uchun ishlatiladi",
    "answer": "Sinflashtirsh masalasini yechish uchun",
    "noAnswer1": "Klasterlash masalasini ishlash uchun",
    "noAnswer2": "Neyron tarmoqni qurish uchun",
    "noAnswer3": "Qiymatni bashoratlash uchun"
  },
  {
    "question": "Bias va Variance tushunchalarining farqi nimada?",
    "answer": "Bias modelni train to’plam bilan testlagandagi xatolik, Variance esa test to’plambilantestlagandagi xatolik",
    "noAnswer1": "Bias modelni test to’plam bilan testlagandagi xatolik, Variance esa train to’plambilantestlagandagi xatolik",
    "noAnswer2": "Bias modelni train +test to’plam bilan testlagandagi umumiy xatolik, Variance esa faqat test\r\nto’plam bilan testlagandagi xatolik",
    "noAnswer3": "Bias modelni train +test to’plam bilan testlagandagi umumiy xatolik, Variance esa faqat trainto’plam bilan testlagandagi xatolik"
  },
  {
    "question": "Agar bias yuqori bo’lsa qaysi turdagi muammo sodir bo’lmoqda?",
    "answer": "Underfitting",
    "noAnswer1": "Owerfitting",
    "noAnswer2": "Bias ni yuqoriligi mumamo hisoblanmaydi",
    "noAnswer3": "Model juda murakkab"
  },
  {
    "question": "Agar Variance yuqori bo’lsa qanday turdagi muammo sodir bo’lmoqda?",
    "answer": "Owerfitting",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Variance ni yuqoriligi mumamo hisoblanmaydi",
    "noAnswer3": "Model juda sodda"
  },
  {
    "question": "Agar biass quyi va variance yuqori bo’lsa qanday turdagi muammo sodir bo’lmoqda?",
    "answer": "Owerfitting",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Bias ni quyi variance ni yuqoriligi mumamo hisoblanmaydi",
    "noAnswer3": "Model juda sodda"
  },
  {
    "question": "Model murakkab bo’lsa bias qanday bo’ladi?",
    "answer": "Quyi, model o’rgatuvchi tanlamaga mostlashib qoladi va train to’plamda xatoligi past bo’ladi",
    "noAnswer1": "To’g’ri javob yo’q",
    "noAnswer2": "Bias ning quyi yoki yuqori bo’lishi model murakkabligiga bog’liq emas.",
    "noAnswer3": "Yuqori, model o’rgatuvchi tanlamaga mostlashib qoladi va train to’plamda xatoligi yuqori\r\nbo’ladi"
  },
  {
    "question": "Model murakkab bo’lsa variance qanday bo’ladi?",
    "answer": "Yuqori, model o’rgatuvchi tanlamaga mostlashib qoladi va test to’plamda xatoligi yuqori\r\nbo’ladi",
    "noAnswer1": "Quyi, model o’rgatuvchi tanlamaga mostlashib qoladi va test to’plamda xatoligi past bo’ladi",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Variance ning quyi yoki yuqori bo’lishi model murakkabligiga bog’liq emas."
  },
  {
    "question": "KNN algoritmida k qiymat nimani xaratterlaydi?",
    "answer": "k ta eng yaqin qo’shnini",
    "noAnswer1": "k ta eng uzoq qo’shnini",
    "noAnswer2": "O’qitish qadami",
    "noAnswer3": "O’qitishlar sonini"
  },
  {
    "question": "Model qurish uchun o’rgatuvchi tanalaga qaysi nisbatda bo’linsa maqsadga muoffiq bo’ladi?",
    "answer": "Train - 75%\r\nVal - 15 %\r\nTest - 10%",
    "noAnswer1": "Train - 50%\r\nTest - 50%",
    "noAnswer2": "Train - 50%\r\nVal - 25 %\r\nTest - 25%",
    "noAnswer3": "Train - 75%\r\nVal - 25 %"
  },
  {
    "question": "O’rgatuvchi tanlamada normallashtirish tushunchasi bu?",
    "answer": "O’ratuvchi tanlamdagi qiymatlarni bir xil shkalaga o’tkazish",
    "noAnswer1": "O’ratuvchi tanlamdagi qiymatlarni turli xil shkalaga o’tkazish",
    "noAnswer2": "O’ratuvchi tanlamdagi qiymatlarni faqat [0,1] shkalaga o’tkazish",
    "noAnswer3": "O’ratuvchi tanlamdagi qiymatlarni faqat [-1,1] shkalaga o’tkazish"
  },
  {
    "question": "Logistik regressiya masalasida asosan qaysi aktivlashtirish funksiyasidan foydalaniladi?",
    "answer": "Sigmoid",
    "noAnswer1": "Tanh",
    "noAnswer2": "ReLU",
    "noAnswer3": "Sigmoid va ReLU"
  },
  {
    "question": "Nima uchun o’rgatuvchi tanlama normallashtiriladi?",
    "answer": "Obyektni xarakterlovchi xususiyatlari bir xil shkalaga olib kelish orqali ularning ta’sir kuchini\r\nbarobarlashtirish",
    "noAnswer1": "Obyektni xarakterlovchi xususiyatlari faqat [0,1] shkalaga olib kelish orqali ularning ta’sir\r\nkuchini barobarlashtirish",
    "noAnswer2": "Obyektni xarakterlovchi xususiyatlari faqat [-1,1] shkalaga olib kelish orqali ularning ta’sir\r\nkuchini barobarlashtirish",
    "noAnswer3": "Obyektni xarakterlovchi xususiyatlari turli xil shkalaga olib kelish orqali ularning ta’sir kuchini\r\nbarobarlashtirish"
  },
  {
    "question": "Validation dataset qayerda ishlatiladi?",
    "answer": "Modelni qurish davomida paramertlarni sozlashda",
    "noAnswer1": "Model qurib bo’linganidan so’ng aniqlikni baholashda",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Validation datasetdan foydalanilmaydi"
  },
  {
    "question": "Klasterlash bu ?",
    "answer": "O’qituvchisiz o’qitish algoritmi asosida obyektlarni xarakterlovchi o’xshash xususiyatlari\r\nasosida guruhlash",
    "noAnswer1": "O’qituvchili o’qitish algoritmi asosida obyektlarni xarakterlovchi o’xshash xususiyatlari\r\nasosida guruhlash",
    "noAnswer2": "Mashinali o’qitishda buday tushuncha yo’q.",
    "noAnswer3": "Logistik regressiya asosida amalga oshiriladigan mashinali o’qitish algoritmi"
  },
  {
    "question": "O’qituvchisiz o’qitish algoritmiga qaysi algoritim kiradi?",
    "answer": "Kmaens\r\nSingular Value Decomposition",
    "noAnswer1": "KNN\r\nSVM",
    "noAnswer2": "SVM\r\nKmaens",
    "noAnswer3": "Random Forest"
  },
  {
    "question": "Nima uchun logistik regressiyada sigmoid funksiyadan foydalaniladi?",
    "answer": "qiymatlarni (0,1) oraliqda keltirish",
    "noAnswer1": "qiymatlarni [-1,1] oraliqda keltirish",
    "noAnswer2": "qiymatlarni [0,1] oraliqda keltirish",
    "noAnswer3": "qiymatlarni (-1,1) oraliqda keltirish"
  },
  {
    "question": "Logistik regressiyada qaror chegrasi uchun topilgan modeldan olingan qiymat qaysi\r\nbo’sag’a qiymati orqali solishtiriladi va qaror qabul qilinadi?",
    "answer": "0",
    "noAnswer1": "1",
    "noAnswer2": "0.5",
    "noAnswer3": "-1 va 1"
  },
  {
    "question": "SVM algoritmida suppor vectors bu?",
    "answer": "Sinflashtirishnig chegara sohasi bo’lib, eng yaqin tanlanmalar uni xarakterlaydi",
    "noAnswer1": "Sinflashtirishnig chegara sohasi bo’lib, eng uzoq tanlanmalar uni xarakterlaydi",
    "noAnswer2": "Sinflashtirishnig chegara sohasi bo’lib, eng yaqin tanlanmalar uni xarakterlamaydi",
    "noAnswer3": "Sinflashtirishnig chegara sohasi bo’lib, eng uzoq tanlanmalar uni xarakterlamaydi"
  },
  {
    "question": "SVM algoritmidagi hisoblaanadigan orqaliq (margin) qanday bo’lsa model ishonchli debtopiladi?",
    "answer": "Oraliq eng kattta bo’lsa",
    "noAnswer1": "Oraliq eng kichik bo’lsa",
    "noAnswer2": "Oraliq hech narsani anglatmaydi",
    "noAnswer3": "To’gri javob yo’q"
  },
  {
    "question": "SVM algoritmida yadro(kernel) funksiyalari nima uchun xizmat qiladi?",
    "answer": "Kiruvchi xususiyatlarni ma’lum o’lchov sohasidan boshqasiga o’zgartirish uchun xizmat qiladi. Misol uchun 1D -&gt; 2D",
    "noAnswer1": "Kiruvchi xususiyatlarni 1D o’lchov sohasidan 2D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi",
    "noAnswer2": "Kiruvchi xususiyatlarni 2D o’lchov sohasidan 1D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi",
    "noAnswer3": "Kiruvchi xususiyatlarni 2D o’lchov sohasidan 3D o’lchov sohasiga o’tkazish uchun xizmat\r\nqiladi"
  },
  {
    "question": "SVM orqali ..",
    "answer": "Faqat bir nechta sinfga tegishli bo’lgan obyektlar sinflanadi",
    "noAnswer1": "Faqat ikkita sinfga tegishli bo’lgan obyektlar sinflanadi",
    "noAnswer2": "Faqat regressiya masalasini yechish mumkin",
    "noAnswer3": "Ham sinflashrish, ham regressiya masalasini ishlash mumkin."
  },
  {
    "question": "Modelni o’qitish uchun o’quv tanlanma (dataset) qanday turlarga bo’lindi",
    "answer": "training, validation, testing",
    "noAnswer1": "testing, value-x, training",
    "noAnswer2": "validation, labels, training",
    "noAnswer3": "labels, validation, testing"
  },
  {
    "question": "O’qitish uchun ma’lumotlar orasidan ortiqcha yoki ahamiyati past bo’lgan, model turg’unligigata’sir qiluvchi ma’lumotlarni olib tashlash jarayoni nima deb ataladi",
    "answer": "Ma’lumotlarni tozalash (Data cleaning)",
    "noAnswer1": "Xususiyatlarni aniqlash (Feature detection)",
    "noAnswer2": "Ma’lumotlarni o’chirish (Data deletion)",
    "noAnswer3": "Ma’lumotlar turini aniqlash (Data formatting)"
  },
  {
    "question": "Neyron tarmoqlarida sinflashtirish masalasini yechishda chiquvchi qatlamda qaysi turdagi\r\naktivlash funksiyasidan foydalaniladi",
    "answer": "Softmax",
    "noAnswer1": "Sigmoid",
    "noAnswer2": "ReLu",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Numpy kutubxonasidagi polyfit() funksiyasi nima uchun ishlatiladi?",
    "answer": "Chiziqli regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer1": "Loginstik regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer2": "Chiziqli va logistik regressiya uchun model paramertlarini aniqlash uchun",
    "noAnswer3": "Polynom funksiya yaratish uchun"
  },
  {
    "question": "Numpy kutubxonasidagi poly1d() funksiyasi nima uchun ishlatiladi?",
    "answer": "Berilgan parametrlar asosida polinomal funksiya hosil qilish",
    "noAnswer1": "Berilgan parametrlar asosida polinomal Class hosil qilish",
    "noAnswer2": "Berilgan parametrlar asosida logistik regressiya modelini qurish",
    "noAnswer3": "Berilgan parametrlar asosida giperbolik regressiya modelini qurish"
  },
  {
    "question": "Neyron tarmoqlarini qurishga mo’ljallangan python kutubxonalarini ko'rsating.",
    "answer": "Numpy, keras, tensorflow",
    "noAnswer1": "Numpy, pandas, keras",
    "noAnswer2": "Tensorflow, numpy, pandas",
    "noAnswer3": "Python, Matlab, Octave"
  },
  {
    "question": "Agar biass quyi va variance yuqori bo’lsa qanday turdagi muammo sodir bo’lmoqda?",
    "answer": "Owerfitting",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Bias ni quyi variance ni yuqoriligi mumamo hisoblanmaydi",
    "noAnswer3": "Model juda sodda"
  },
  {
    "question": "Model murakkab bo’lsa bias qanday bo’ladi?",
    "answer": "Quyi, model o’rgatuvchi tanlamaga mostlashib qoladi va train to’plamda xatoligi past bo’ladi",
    "noAnswer1": "To’g’ri javob yo’q",
    "noAnswer2": "Bias ning quyi yoki yuqori bo’lishi model murakkabligiga bog’liq emas.",
    "noAnswer3": "Yuqori, model o’rgatuvchi tanlamaga mostlashib qoladi va train to’plamda xatoligi yuqori\r\nbo’ladi"
  },
  {
    "question": "Model murakkab bo’lsa variance qanday bo’ladi?",
    "answer": "Yuqori, model o’rgatuvchi tanlamaga mostlashib qoladi va test to’plamda xatoligi yuqori\r\nbo’ladi",
    "noAnswer1": "Quyi, model o’rgatuvchi tanlamaga mostlashib qoladi va test to’plamda xatoligi past bo’ladi",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Variance ning quyi yoki yuqori bo’lishi model murakkabligiga bog’liq emas."
  },
  {
    "question": "Underfitting bu - …",
    "answer": "Model juda soda. Shuning evaziga model train to’plamda ham, test to’plamda katta xatolikbo’lishiga olib keladi",
    "noAnswer1": "Model juda muakkab. Shuning evaziga model train to’plamda ham, test to’plamda kattaxatolik bo’lishiga olib keladi",
    "noAnswer2": "Model juda soda. Shuning evaziga model train to’plamda yuqori, test to’plamda past xatolikbo’lishiga olib keladi",
    "noAnswer3": "Model juda muarkkab. Shuning evaziga model train to’plamda yuqori, test to’plamda past\r\nxatolik bo’lishiga olib keladi"
  },
  {
    "question": "Uyning xarakterlovchi xususiyatlari asosida ikkita guruhga(klasterga) (biznes, ekanom)\r\najratish uchun qaysi mashinali o’qitish algoritmidan foydalaniladi",
    "answer": "Kmeans",
    "noAnswer1": "SVM",
    "noAnswer2": "Random Forest",
    "noAnswer3": "Logistik regressiya"
  },
  {
    "question": "KNN algoritmida k ni kichik tanlasak nima sodir bo’ladi?",
    "answer": "Shovqinga sezgir bo’ladi va sinflashtirishda xatolikka ko’p uchrashi mumkin",
    "noAnswer1": "Shovqinga sezgir bo’lmaydi va sinflashtirishda xatolikka ko’p uchrashi mumkin",
    "noAnswer2": "KNN algoritmida k parametr yo’q.",
    "noAnswer3": "k ni kichik yoki katta tanlash algoritm ishiga ta’sir qilmaydi"
  },
  {
    "question": "KNN algoritmida k ni katta tanlasak nima sodir bo’ladi?",
    "answer": "Model qurish vaqti oshib ketadi. Bazan k ning katta tanlanishi sinflashtirishda xatolikka ko’puchrashi mumkin",
    "noAnswer1": "Shovqinga sezgir bo’ladi va sinflashtirishda xatolikka ko’p uchrashi mumkin",
    "noAnswer2": "KNN algoritmida k parametr yo’q.",
    "noAnswer3": "k ni kichik yoki katta tanlash algoritm ishiga ta’sir qilmaydi"
  },
  {
    "question": "KNN algoritmida k ta eng yaqin qo’shni qanday aniqlanadi?",
    "answer": "To’plamdagi barcha elemetlar orasidagi masofa hisoblanib chiqiladi va eng yaqin k tasi\r\ntanlanadi",
    "noAnswer1": "Taxminiy random() funksiyasi orqali aniqlanadi",
    "noAnswer2": "To’plamdagi k ta elemetlar orasidagi masofa hisoblanib chiqiladi va ular o’sish tartibidasaralanadi.",
    "noAnswer3": "KNN algoritmida k ta eng yaqin qo’shni tushunchasi yo’q."
  },
  {
    "question": "SVM algorimi qaysi masalani yechish uchun xizmat qiladi?",
    "answer": "Sinflashtirsh",
    "noAnswer1": "Chiziqli regressiya",
    "noAnswer2": "Klasterlash",
    "noAnswer3": "Normallashtirish"
  },
  {
    "question": "KNN algoritmi qaysi masalani yechish uchun xizmat qiladi",
    "answer": "Barcha javob to’g’ri",
    "noAnswer1": "Sinflashtirish",
    "noAnswer2": "Regressiya",
    "noAnswer3": "Klasterlash"
  },
  {
    "question": "KMeans bu -",
    "answer": "O’qituvchisiz o’qitish algoritmi",
    "noAnswer1": "O’qituvchili o’qitish algoritmi",
    "noAnswer2": "O’zini o’zi o’qitadigan algoritmi",
    "noAnswer3": "to’g’ri javob yo’q"
  },
  {
    "question": "Kmaens algoritmi qaysi masalani yechish uchun xizmat qiladi",
    "answer": "Klasterlash",
    "noAnswer1": "Barcha javob to’g’ri",
    "noAnswer2": "Sinflashtirish",
    "noAnswer3": "Regressiya"
  },
  {
    "question": "Logistik regressiyada qaror qabul qilishimiz uchun modeldan olingan qiymat qaysi bo’sag’aqiymati orqali solishtiriladi?",
    "answer": "0.5",
    "noAnswer1": "0",
    "noAnswer2": "1",
    "noAnswer3": "-1 va 1"
  },
  {
    "question": "Mashinani o’qitish jarayonida ma’lumotlarga qanday dastlabki ishlov beriladi?",
    "answer": "Ma’lumotlar formatlari bir xillashtiriladi",
    "noAnswer1": "Ma’lumotlarni tozalash",
    "noAnswer2": "Ma’lumotlardan xususiyatlarni ajratish",
    "noAnswer3": "Barchasi to’g’ri"
  },
  {
    "question": "Sun’iy neyron tarmoqlarida perceptron tushunchasi?",
    "answer": "bu ikkita qatlamdan iborat ya’ni kiruvchi va chiquvchi qatlamdan iborat bo’lgan neyronni\r\nhisoblash tugunidir.",
    "noAnswer1": "bu ikkita qatlamdan iborat ya’ni kiruvchi va faollashtish qatlamdan iborat bo’lgan neyronni\r\nhisoblash tugunidir.",
    "noAnswer2": "bu bir qatlamdan iborat bo’lgan neyronni hisoblash tugunidir.",
    "noAnswer3": "bu uch qatlamdan iborat bo’lgan neyronni hisoblash tugunidir."
  },
  {
    "question": "Sun’iy neyron tarmoqlarida yashirin qatlam tushunchasi?",
    "answer": "Kiruvchi va chiquvchi qatlamlar orasida joylashadigan neyron",
    "noAnswer1": "Ko’rinmaydigan qatlam",
    "noAnswer2": "Neyron tarmoqda yashirin qatlam tushunchasi yo’q",
    "noAnswer3": "Kiruvchi qatlamdan kiyin keladigan barcha qatlamalar"
  },
  {
    "question": "Sun’iy neyron tarmoqlarida aktivlashtirish funksiyasi tushunchasi?",
    "answer": "Neyron tugunlaridan chiqqan qiymatni ma’lum bir diapozonga tushirish uchun ishlatiladi",
    "noAnswer1": "Neyron tarmoqda aktivlashtirish funksiyasi tushunchasi yo’q",
    "noAnswer2": "Bu faol bo’lmagan tugunlarni faollashtish uchun ishlatiladi.",
    "noAnswer3": "To’g’ri javob yoq"
  },
  {
    "question": "Chuqur o’qitilish deyiladi, qachonki …",
    "answer": "Nayron tarmog’imizda yashirin qatlamlar soni bittadan ko’p bo’lsa.",
    "noAnswer1": "Nayron tarmog’imizda yashirin qatlamlar soni bitta bo’lsa.",
    "noAnswer2": "Ikkita neyron orasidagi masofa katta bo’lsa",
    "noAnswer3": "Neyronlar soni ikkitadan ko’p bo’lsa"
  },
  {
    "question": "Modelni o’qitish uchun o’quv tanlanma (dataset) qanday turlarga bo’lindi",
    "answer": "training, validation, testing",
    "noAnswer1": "testing, value-x, training",
    "noAnswer2": "validation, labels, training",
    "noAnswer3": "labels, validation, testing"
  },
  {
    "question": "Python muhitida chiziqli regression model qurish uchun ishlatiladigan stats.linregress(x,y)\r\nfunksiyasi nechta qiymat qaytaradi",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "2"
  },
  {
    "question": "O’qitish uchun ma’lumotlar orasidan ortiqcha yoki ahamiyati past bo’lgan, model turg’unligigata’sir qiluvchi ma’lumotlarni olib tashlash jarayoni nima deb ataladi",
    "answer": "Ma’lumotlarni tozalash (Data cleaning)",
    "noAnswer1": "Xususiyatlarni aniqlash (Feature detection)",
    "noAnswer2": "Ma’lumotlarni o’chirish (Data deletion)",
    "noAnswer3": "Ma’lumotlar turini aniqlash (Data formatting)"
  },
  {
    "question": "Mashinani o’qitish jarayonida ma’lumotlarga qanday dastlabki ishlov beriladi?",
    "answer": "Format, Data Cleaning, Feature Extraction",
    "noAnswer1": "Data Cleaning, Resizing, , Feature Extraction",
    "noAnswer2": "Resizing, Feature Extraction, Format",
    "noAnswer3": "Format, Resizing, Data Cleaning"
  },
  {
    "question": "Regression tahlilni qanday usullar asosida amalga oshiriladi.",
    "answer": "chiziqli, nochiziqli va logistik regressiya usullari asosida",
    "noAnswer1": "sintaktik usullar asosida",
    "noAnswer2": "dinamik usillar asosida",
    "noAnswer3": "semantik usullari asosida"
  },
  {
    "question": "Muammoni aniqlash, ma’lumotlarni tayyorlash, algoritmni ishlab chiqish va baholash, natijaviyma’lumotlar aniqligini oshirish va yakuniy natijani taqdim qilish – bular qanday jarayonningbosqichlari hisoblanadi",
    "answer": "Mashinali o’qitish",
    "noAnswer1": "Chuqur o’qitish",
    "noAnswer2": "Regression tahlil",
    "noAnswer3": "Statistik tahlil"
  },
  {
    "question": "Chuqur o’qitishning uchunchi bosqichi qanday jarayondan iborat?",
    "answer": "Chuqur o’qitish algoritmini belgilash.",
    "noAnswer1": "Modelni testlash.",
    "noAnswer2": "Muammoni tushunib olish.",
    "noAnswer3": "Modelni o’qitish."
  },
  {
    "question": "Keras bu – ...",
    "answer": "tensorflow asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona",
    "noAnswer1": "numpy asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona",
    "noAnswer2": "ochiq kodli neyron tarmoq uchun mo’ljallangan dasturiy vosita",
    "noAnswer3": "matplotlib asosiga qurilgan ochiq kodli neyron tarmoq uchun mo’ljallangan kutubxona"
  },
  {
    "question": "Tensorflow bu – ...",
    "answer": "Python kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer1": "Matlab kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer2": "Ocatev kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallangan.",
    "noAnswer3": "Python kutubxonasi bo’lib, neyron tarmoqlarini hosil qilishga mo’ljallanmagan."
  },
  {
    "question": "Sklearn bu - …",
    "answer": "Python dasturlash tilidagi maxsus kutubxona bo’lib, mashinali o’qitish algoritmlarini amalgaoshirishga mo’ljallangan maxsus paket",
    "noAnswer1": "Matlabning maxsus paketi bo’lib, mashinali o’qitish algoritmlarini amalga oshirishgamo’ljallangan hisoblanadi",
    "noAnswer2": "Python dasturlash tilidagi maxsus kutubxona bo’lib, o’zini o’zi o’qitadigan mashinali o’qitishalgortimlarini ishlab chiqishga mo’ljallangan",
    "noAnswer3": "Python dasturlash tilidagi maxsus kutubxona bo’lib, mashinali o’qitishning o’qituvchili\r\nalgoritmlarini amalga oshirishga mo’ljallangan maxsus paket"
  },
  {
    "question": "Chiziqli va logistik regression model qurilayotganda bitta o’rgatuvchi tanlamadan foydalansabo’ladimi?",
    "answer": "Ha, faqat yorliqlari uchun ikkita qiymat saqlangan bo’lsa",
    "noAnswer1": "Ha, regression model uchun hamma vaqt dataset bir xilda bo’ladi.",
    "noAnswer2": "Buning imkoni yo’q",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Chiziqli regresiya va Logistik regresiya uchun Cost funksiyasi bir xilda bo’ladimi?",
    "answer": "Yoq",
    "noAnswer1": "Ha",
    "noAnswer2": "Logistik regressiyada cost funksiyasi bo’lmaydi",
    "noAnswer3": "Chiziqli regressiyada cost funksiyasi bo’lmaydi"
  },
  {
    "question": "Python sklearn kutubxonasidagi qaysi Classs chiziqli regressiya modelini qurishda ishlatiladi",
    "answer": "LinearRegression",
    "noAnswer1": "Polyfit",
    "noAnswer2": "poly1d",
    "noAnswer3": "Linear_model"
  },
  {
    "question": "Chiziqli regressiyada modelni murakkab tanlansa qaysi turdagi muammo yuzaga keladi",
    "answer": "Owerfitting",
    "noAnswer1": "Underfitting",
    "noAnswer2": "Model aniq ishlaydigan bo’lib, shakllanadi.",
    "noAnswer3": "Muammo sodir bo’lmaydi"
  },
  {
    "question": "Chiziqli regressiyada modelni sodda tanlansa qaysi turdagi muammo yuzaga keladi",
    "answer": "Underfitting",
    "noAnswer1": "Owerfitting",
    "noAnswer2": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer3": "Muammo sodir bo’lmaydi"
  },
  {
    "question": "Chiziqli regression modelni qurib bo’lganimizdan so’ng modelni train dataset bilantestlanganda 65% aniqliq va test dataset bilan testlaganimizda 55% aniqlik bersa, qaysi\r\nturdagi mauammo sodir bo’lmoqda",
    "answer": "Underfitting",
    "noAnswer1": "Owerfitting",
    "noAnswer2": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer3": "Everfitting"
  },
  {
    "question": "Chiziqli regression modelni qurib bo’lganimizdan so’ng modelni train dataset bilantestlanganda 25% aniqliq va test dataset bilan testlaganimizda 95% aniqlik bersa, qaysi\r\nturdagi mauammo sodir bo’lmoqda",
    "answer": "Underfitting",
    "noAnswer1": "Owerfitting",
    "noAnswer2": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer3": "Everfitting"
  },
  {
    "question": "Chiziqli regression modelni qurib bo’lganimizdan so’ng modelni train dataset bilantestlanganda 95% aniqliq va test dataset bilan testlaganimizda 55% aniqlik bersa, qaysi\r\nturdagi mauammo sodir bo’lmoqda",
    "answer": "Owerfitting",
    "noAnswer1": "Model ishonchli, hech qanaday muammo yo’q",
    "noAnswer2": "Underfitting",
    "noAnswer3": "Everfitting"
  },
  {
    "question": "Biologik neyron tarmoq tashkil etuvchilarini ko’rsating?",
    "answer": "cell body, dendrites, synapse, axon",
    "noAnswer1": "input, dendrites, synapse, output",
    "noAnswer2": "node, input, weights, output",
    "noAnswer3": "synapse, axon, weights, node"
  },
  {
    "question": "Python list bu -",
    "answer": "turli tipdagi elementlar to’plamidan iborat dinamik massiv",
    "noAnswer1": "bir tipdagi (bir xil ma’lumotlar toifasiga tegishli) elementlar to’plamidan iborat dinamik massiv",
    "noAnswer2": "turli tipdagi elementlar to’plamidan iborat statik massiv",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Python tuple bu -",
    "answer": "turli tipdagi elementlar to’plamidan iborat statik massiv",
    "noAnswer1": "bir tipdagi (bir xil ma’lumotlar toifasiga tegishli) elementlar to’plamidan iborat dinamik massiv",
    "noAnswer2": "turli tipdagi elementlar to’plamidan iborat statik massiv",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Mashinali o’qitishda samaradorlikni baholash uchun qanday matritsadan foydalaniladi?",
    "answer": "Tartibsizlik matritsasi (confusion matrix)",
    "noAnswer1": "Aniqliq matritsasi (accuracy matrix)",
    "noAnswer2": "Xatolik matritsasi (loss matrix)",
    "noAnswer3": "Barchasi to’g’ri"
  },
  {
    "question": "pip freeze",
    "answer": "Environment o’rnatilgan barcha paketlar ro’yxatini chop qiladi",
    "noAnswer1": "Environment o’rnatilgan eng oxirgi paketlar ro’yxatini chop qiladi",
    "noAnswer2": "Environment o’rnatilgan eng oxirgi 10 ta paket ro’yxatini chop qiladi",
    "noAnswer3": "Environment o’rnatilgan mashinali o’qitishga xizmat qiladigan paketlar ro’yxatini chop qilish"
  },
  {
    "question": "pip install numpy as np",
    "answer": "Xatolik sodir bo’ladi",
    "noAnswer1": "Numpy kutubxonasi o’rnatiladi",
    "noAnswer2": "Numpy kutubxonasi yuklash va quyida uni np deb yuritish mumkin",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "import numpy as nb",
    "answer": "Numpy kutubxonasi yuklash va quyida uni nb deb yuritish mumkin",
    "noAnswer1": "Xatolik sodir bo’ladi",
    "noAnswer2": "Numpy kutubxonasi o’rnatiladi",
    "noAnswer3": "Numpy kutubxonasi yuklash va quyida uni np deb yuritish mumkin"
  },
  {
    "question": "Agar mashinali o’qitish qo’llaniladigan sklearn kutubxonasi o’rnatilmagan bo’lsa uni\r\nqanday o’rnatish mumkin.",
    "answer": "Barchasi to’g’ri",
    "noAnswer1": "pip install sklearn",
    "noAnswer2": "conda install scikit-learn",
    "noAnswer3": "pip install scikit-learn"
  },
  {
    "question": "O’rgatuvchi tanlamasiz(dataset siz) mashinali o’qitish algoritmlarini ishlata olamizmi",
    "answer": "Imkoni yoq",
    "noAnswer1": "Ha, albatta",
    "noAnswer2": "Ba’zan",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Python muhitida neyron tarmoq qurish uchun qaysi paketlardan foydalaniladi?",
    "answer": "keras, tensorflow",
    "noAnswer1": "tensorflow, pandas",
    "noAnswer2": "numpy, matplotlib",
    "noAnswer3": "pandas, opencv"
  },
  {
    "question": "…… bu ikkita qatlamdan iborat ya’ni kiruvchi va chiquvchi qatlamdan iborat bo’lgan neyronni\r\nhisoblash tugunidir. Nuqtalar o’rniga quyidagilardan mos keldiganini qo’ying?",
    "answer": "perceptron",
    "noAnswer1": "sigmoid funksiyasi",
    "noAnswer2": "neyron",
    "noAnswer3": "ReLU funksiyasi"
  },
  {
    "question": "Regressiya nima?",
    "answer": "ma’lumotlarni intellektual tahlil qilish usullaridan biri",
    "noAnswer1": "ma’lumotlarni ustida arifmetik usullaridan biri",
    "noAnswer2": "ma’lumotlarni raqamli ishlov berish usullaridan biri",
    "noAnswer3": "ma’lumotlarni jamlash usullaridan biri"
  },
  {
    "question": "Python muhitida for sikl operatorida ishlatiladigan for i in range(0,10,2) ifodasida i indekso’zgaruvchisiga qanday qiymatlar keladi?",
    "answer": "0 2 4 6 8",
    "noAnswer1": "0 2 10",
    "noAnswer2": "0 10",
    "noAnswer3": "2 4 6 8 10"
  },
  {
    "question": "Supervised o’qitish algoritmlari asosan qanday masalani yechishga qaratilgan?",
    "answer": "regressiya va sinflashtirish masalasiga",
    "noAnswer1": "statistik usullar yordamida ma’lumotlarni ajratish masalasiga",
    "noAnswer2": "statistik usullar yordamida ma’lumotlarni sinflashtirish masalasiga",
    "noAnswer3": "sinflashtirish va segmentlash masalasiga"
  },
  {
    "question": "Neyron tarmoqda qanday turdagi qatlamlar (layers) bo’lishi mumkin?",
    "answer": "kiruvchi, chiquvchi, yashirin",
    "noAnswer1": "kiruvchi, yashirin, oraliq",
    "noAnswer2": "qabul qiluvchi, hisoblovchi, chiquvchi",
    "noAnswer3": "kiruvchi, qabul qiluvchi, chiquvchi"
  },
  {
    "question": "Chiziqli regression model nima uchun ishlatiladi?",
    "answer": "bashorat qilish uchun",
    "noAnswer1": "mantiqiy model qurish uchun",
    "noAnswer2": "sinflashtirish masalasini yechish uchun",
    "noAnswer3": "segmentlash masalasini yechish uchun"
  },
  {
    "question": "Neyron tarmoq nima?",
    "answer": "bu inson miyasining ishlash faoliyatini qisman aks ettiruvchi tuzilma",
    "noAnswer1": "bu inson miyasining ishlash faoliyatini qisman aks ettiruvchi dataset",
    "noAnswer2": "bu inson miyasining ishlash faoliyatini butunlay aks ettiruvchi dataset",
    "noAnswer3": "bu inson miyasining ishlash faoliyatini butunlay aks ettiruvchi tuzilma"
  },
  {
    "question": "Sun’iy intellekt deganda nimani tushunasiz?",
    "answer": "insonning onggi kabi fikrlovchi dastur",
    "noAnswer1": "oddiy kompyuter dasturi",
    "noAnswer2": "qaror qabul qiluvchi ilovalar",
    "noAnswer3": "bunday termin fanda mavjud emas"
  },
  {
    "question": "Dataset bu nima?",
    "answer": "bu o’qitish uchun kerakli bo’lgan ma'lumotlar to'plamidir",
    "noAnswer1": "bu o’qitish uchun kerakli bo’lgan neyronlar to'plamidir",
    "noAnswer2": "bu o’qitish uchun kerakli bo’lgan og’irliklar to'plamidir",
    "noAnswer3": "bu o’qitish uchun kerakli bo’lgan neyron tarmoq qatlamlar to'plamidir"
  },
  {
    "question": "Convolutional neural networks (CNN) – bu?",
    "answer": "bu ko'p qatlamli neyron tarmoq asosida qurilgan chuqur o’qitishning maxsus arxitekturasi",
    "noAnswer1": "bu bir qatlamli neyron tarmoq asosida qurilgan chuqur o’qitishning maxsus arxitekturasi",
    "noAnswer2": "bu ko’p qatlamli neyron tarmoq asosida qurilgan chuqur o’qitishning maxsus usuli",
    "noAnswer3": "bu bir qatlamli neyron tarmoq asosida qurilgan chuqur o’qitishning maxsus usuli"
  },
  {
    "question": "Sun’iy intellektga asoslangan dasturlarni ishlab chiqishdan maqsad nima?",
    "answer": "mustaqil fikrlovchi va qaror qabul qiluvchi dasturlarni hayotga tadbiq qilish",
    "noAnswer1": "vaqtni maroqli o‘tkazish",
    "noAnswer2": "insonlarning yashash darajasini yaxshilash",
    "noAnswer3": "ortiqcha sarf-xarajatni kamaytirish"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati -5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o’zgaradi?",
    "answer": "0",
    "noAnswer1": "5",
    "noAnswer2": "-5",
    "noAnswer3": "3,5"
  },
  {
    "question": "Mashinani o’qitish turlari to’g’ri ko’rsatilgan javobni tanlang?",
    "answer": "supervised, unsupervised, Semi-supervised, reinforcement",
    "noAnswer1": "regressiya, Ehtimollar nazariyasi, Supervised, unsupervised",
    "noAnswer2": "supervised, unsupervised, Regressiya, Sinflashtirish",
    "noAnswer3": "regressiya, Sinflashtirish, Semi-supervised, reinforcement"
  },
  {
    "question": "Neyron tarmoqlari bu…?",
    "answer": "Neyron tarmoqlari juda ko’p muhim xususiyatlarga ega, ammo asosiysi bu o’rganishqobiliyatidir.",
    "noAnswer1": "Neyron tarmoqlari ma’lumotlarni bog’lash uchun xizmat qiladi.",
    "noAnswer2": "Bunday tarmoq mavjud emas",
    "noAnswer3": "Ikkilik kod sifatidagi algoritm"
  },
  {
    "question": "Chiziqli regressiyaga to’g’ri ta’rifni toping?",
    "answer": "Chiziqli regressiya kuzatilgan ma'lumotlarga chiziqli tenglamani bog’lash orqali ikkitao'zgaruvchi o'rtasidagi munosabatni modellashtirishga aytiladi.",
    "noAnswer1": "Chiziqli regressiya ma’lumotlarni klassifikatsiyalaydi.",
    "noAnswer2": "Chiziqli Regressiya bu tanlangan ma’lumotlar ichidan kerakli ma’lumotni qidirish algoritmi.",
    "noAnswer3": "To’g’ri javob yo’q."
  },
  {
    "question": "Quyidagi usullardan qaysi biri har qanday chiziqli bo'linadigan ma'lumotlar to'plamida nol\r\no'qitish(zero training) xatosiga erishishi mumkin?",
    "answer": "KNN",
    "noAnswer1": "Qaror daraxti",
    "noAnswer2": "SVM(support vector machine)",
    "noAnswer3": "CNN"
  },
  {
    "question": "CNN bu…?",
    "answer": "Svyortkali neyron tarmoq",
    "noAnswer1": "Adamar neyron tarmog’i",
    "noAnswer2": "K ta yaqin qo’shnilar",
    "noAnswer3": "Qayta murojaat neyron tarmog’i"
  },
  {
    "question": "Xususiyatlarni ajratib olishga to'liq ta'rif berilgan qatorini toping?",
    "answer": "o’qituvchi to’plamdagi ma’lumotlar xususiyatlari o’rganib chiqiladi va bashoratlash, tashxislash, sinflashtirish, qaror qabul qilish uchun kerakli xususiyatlar ajratib olish",
    "noAnswer1": "Qaror qabul qilish daraxti qiymatlari",
    "noAnswer2": "Sinflashtirish masalasini yechish algoritmi to’plami",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati 0.5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o‟zgaradi",
    "answer": "0.5",
    "noAnswer1": "1",
    "noAnswer2": "0",
    "noAnswer3": "2"
  },
  {
    "question": "Chiziqli regressiya qaysi mashinali o’qitish algoritmlari tarkibiga kiradi?",
    "answer": "O’qituvchili o’qitish",
    "noAnswer1": "O’qituvchisiz o’qitish",
    "noAnswer2": "Reinforcementli o'qitish",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Neyron tarmoqdagi tugun qiymati 2.5 ga teng. Ushbu tugun ReLU funksiyasi yordamidafaollashtirilsa qanday qiymatga o‟zgaradi",
    "answer": "2,5",
    "noAnswer1": "2",
    "noAnswer2": "0",
    "noAnswer3": "44595"
  },
  {
    "question": "Sun’iy intellektda mashinani o'qitish uchun to’g’ri ta’rif berilgan qatorni tanlang",
    "answer": "Sun’iy intellekt - bu inson ongiga taqlid qila oladigan dasturiy ta'minot va uni mashinali\r\no’qitishda aqlli mashinalarga dasturlashning muqobil usulidir.",
    "noAnswer1": "Mashinali o’qitish - bu aqlli mashinalarni dasturlashning muqobil usuli.",
    "noAnswer2": "Mashinali o’qitish va suniy intellektning maqsadlari juda boshqacha.",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Mashinali o’qitish turlari qaysi qatorda to’g’ri berilgan",
    "answer": "O’qtuvchili va O’qituvchisiz",
    "noAnswer1": "Tanlanma",
    "noAnswer2": "Ma’lumotlar bazasi",
    "noAnswer3": "Chiziqli va logistik"
  },
  {
    "question": "O’qituvchili o’qitish (Supervised learning) – bu .. ?",
    "answer": "bu modelni xususiyatlari aniq bo’lgan ma’lumotlar bilan o’qitish .",
    "noAnswer1": "Bu – modelning aniqligini aniqlash algoritmi",
    "noAnswer2": "Ma’lumotlarga ishlov berish dasturi",
    "noAnswer3": "Oddiy algoritm"
  },
  {
    "question": "O’qituvchisiz o’qitish (unsupervised learning) – bu … ?",
    "answer": "mashinani o’qitish usulidan biri bo’lib, bunda modelni oldindan aniq bo’lgan ma’lumotlar bilano’qitish amalga oshirilmaydi, aksincha obyekt parametrlarini (ma'lumotlarni) topish uchunmodelga o'z ustida ishlashga imkon yaratib beriladi",
    "noAnswer1": "Ma’lumot qidirish algoritmlaridan tashkil topgan tizim",
    "noAnswer2": "Bunday o’qitish mavjud emas",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "O’rgatuvchi tanlamada normallashtirish tushunchasi bu?",
    "answer": "O’ratuvchi tanlamdagi qiymatlarni bir xil shkalaga o’tkazish",
    "noAnswer1": "O’ratuvchi tanlamdagi qiymatlarni turli xil shkalaga o’tkazish",
    "noAnswer2": "O’ratuvchi tanlamdagi qiymatlarni faqat [0,1] shkalaga o’tkazish",
    "noAnswer3": "O’ratuvchi tanlamdagi qiymatlarni faqat [-1,1] shkalaga o’tkazish"
  },
  {
    "question": "Nima uchun o’rgatuvchi tanlama normallashtiriladi?",
    "answer": "Obyektni xarakterlovchi xususiyatlari bir xil shkalaga olib kelish orqali ularning ta’sir kuchini\r\nbarobarlashtirish",
    "noAnswer1": "Obyektni xarakterlovchi xususiyatlari faqat [0,1] shkalaga olib kelish orqali ularning ta’sir\r\nkuchini barobarlashtirish",
    "noAnswer2": "Obyektni xarakterlovchi xususiyatlari faqat [-1,1] shkalaga olib kelish orqali ularning ta’sir\r\nkuchini barobarlashtirish",
    "noAnswer3": "Obyektni xarakterlovchi xususiyatlari turli xil shkalaga olib kelish orqali ularning ta’sir kuchini\r\nbarobarlashtirish"
  },
  {
    "question": "Validation dataset qayerda ishlatiladi?",
    "answer": "Modelni qurish davomida paramertlarni sozlashda",
    "noAnswer1": "Model qurib bo’linganidan so’ng aniqlikni baholashda",
    "noAnswer2": "To’g’ri javob yo’q",
    "noAnswer3": "Validation datasetdan foydalanilmaydi"
  },
  {
    "question": "Klasterlash bu ?",
    "answer": "O’qituvchisiz o’qitish algoritmi asosida obyektlarni xarakterlovchi o’xshash xususiyatlari\r\nasosida guruhlash",
    "noAnswer1": "O’qituvchili o’qitish algoritmi asosida obyektlarni xarakterlovchi o’xshash xususiyatlari\r\nasosida guruhlash",
    "noAnswer2": "Mashinali o’qitishda buday tushuncha yo’q.",
    "noAnswer3": "Logistik regressiya asosida amalga oshiriladigan mashinali o’qitish algoritmi"
  },
  {
    "question": "KNN algoritmida k qiymat nimani xaratterlaydi?",
    "answer": "k ta eng yaqin qo’shnini",
    "noAnswer1": "k ta eng uzoq qo’shnini",
    "noAnswer2": "O’qitish qadami",
    "noAnswer3": "O’qitishlar sonini"
  },
  {
    "question": "Uy narxini bashorat qilish uchun mashinali o’qitishning qaysi algoritmidan foydalanadi",
    "answer": "Chiziqli regressiya",
    "noAnswer1": "Logistik regressiya",
    "noAnswer2": "Kmeans",
    "noAnswer3": "SVM"
  },
  {
    "question": "Keras muhitida modelni testlash uchun mavjud funksiyalardan qaysi biri ishlatiladi?",
    "answer": "fit()",
    "noAnswer1": "compile()",
    "noAnswer2": "evaluate()",
    "noAnswer3": "test()"
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