const data = [
  {
    "question": "Tanga 5 marta tashlanadi. «Gerbli» tomon ikki marta tushish ehtimolini toping.",
    "noAnswer1": "5/36.",
    "answer": "5/16.",
    "noAnswer2": "1/36.",
    "noAnswer3": "9/16."
  },
  {
    "question": "Qaysi munosabat ikkita bog’liq bo‘lmagan hodisalar ehtimollarini ko‘paytirish teoremasini ifodalaydi?",
    "noAnswer1": "P(A)=P(A)*P(B),",
    "noAnswer2": "P(B)=P(A)*P(B),",
    "noAnswer3": "P(C)=P(A)*P(B),",
    "answer": "P(AB)=P(A)*P(B),"
  },
  {
    "question": "Qaysi munosabat ikkita bog’liq bo‘lgan hodisalar ehtimollarini ko‘paytirish teoremasini ifodalaydi?",
    "noAnswer1": "P(A)=P(A)*P(B),",
    "noAnswer2": "P(B)=P(A)*P(B),",
    "noAnswer3": "P(C)=P(A)*P(B),",
    "answer": "P(AB)=P(A)*P(B/A),"
  },
  {
    "question": "Ehtimollar nazariyasi fan sifatida qachon paydo bo‘lgan?",
    "answer": "XX asrning boshlarida.",
    "noAnswer1": "XXI asrda.",
    "noAnswer2": "XVI asrda.",
    "noAnswer3": "XVIII asrda."
  },
  {
    "question": "Ehtimollar nazariyasiga kim tomondan  asos solingan?",
    "noAnswer1": "Akademik Lebedev.",
    "answer": "Rus matematiga Kolmogorov.",
    "noAnswer2": "Gruzin matematigi Bicadze.",
    "noAnswer3": "Rus matematigi Chebishev."
  },
  {
    "question": "O‘zbekistonda Ehtimollar nazariyasiga solmoqli ulushlarini qo‘shgan matematiklar kimlar?",
    "noAnswer1": "M. Sobirov.",
    "noAnswer2": "Qori-Niyoziy.",
    "answer": "M. Sarimsoqov va S. Sirojiddinovlar.",
    "noAnswer3": "V.Qobulov."
  },
  {
    "question": "Agar ekilgan urug’ning unib chiqish ehtimoli 50% bo‘lsa, 3 ta urug’dan 1 tasini unib chiqish ehtimolini toping.",
    "noAnswer1": "0,125",
    "noAnswer2": "0,124,",
    "answer": "0,375,",
    "noAnswer3": "0,575"
  },
  {
    "question": "n faktorial deganda nimani tushunasiz?",
    "noAnswer1": "ifodani,",
    "noAnswer2": "butun sonni,",
    "noAnswer3": "undov belgisi,",
    "answer": "1 dan n gacha bo‘lgan natural sonlarning ketma-ket o‘zaro ko‘paytmasini,"
  },
  {
    "question": "Kombinatorika nima?",
    "answer": "Matematikaning biror qoida bo‘yicha chekli sondagi elementlardan tuzilgan mumkin bo‘lgan barcha kombinaciyalarni hisoblashga doir  bo‘limi kombinatorika deyiladi.",
    "noAnswer1": "Kombinatorika – bu oddiy hisob.",
    "noAnswer2": "Kombinatorika – bu sodda bir bo‘lim.",
    "noAnswer3": "Kombinatorika bu amaliy hisob ishlar."
  },
  {
    "question": "Yashikda 1 dan 10 gacha nomerlangan sharlar mavjud. Yashikdan tavakkaliga olingan sharning 15 nomerli bo‘lish ehtimoli qanday qiymatga ega bo‘ladi?",
    "answer": "0.",
    "noAnswer1": "0,5.",
    "noAnswer2": "2.",
    "noAnswer3": "1."
  },
  {
    "question": "Quyidagi hodisalarning qaysi biri mumkin bo’lmagan hodisaga misol bo’la oladi?",
    "answer": "1 dan 6 gacha raqamlangan o’yin kubi tashlanganda 9,11,12 raqamlar chiqadi.",
    "noAnswer1": "1 dan 6 gacha raqamlangan o’yin kubi tashlanganda 1 dan 6 gacha bo’lgan raqamlar chiqadi.",
    "noAnswer2": "Quyosh sharqdan chiqadi."
  },
  {
    "question": "Quyidagi hodisalarning qaysi biri mumkin bo’lmagan hodisaga misol bo’la oladi?",
    "answer": "1 dan 6 gacha raqamlangan o’yin kubi tashlanganda 5,12,14 raqamlar chiqadi.",
    "noAnswer1": "1 dan 6 gacha raqamlangan o’yin kubi tashlanganda 1 dan 6 gacha bo’lgan raqamlar chiqadi.",
    "noAnswer2": "Quyosh sharqdan chiqadi.",
    "noAnswer3": "2 katta 1 dan katta."
  },
  {
    "question": "Tanga 4 marta tashlanganda barcha variantlar soni nechta bo’ladi?",
    "noAnswer1": "12.",
    "answer": "16.",
    "noAnswer2": "20.",
    "noAnswer3": "8."
  },
  {
    "question": "Idishda 25 ta shar bor, ularga 1 dan 25 gacha bo’lgan sonlar yozilgan. Tasodifiy ravishda idishdan bitta shar olindi. Olingan sharning 3 ga bo’linish ehtimolligini toping?",
    "noAnswer1": "14/25.",
    "answer": "8/25.",
    "noAnswer2": "7/25.",
    "noAnswer3": "6/25."
  },
  {
    "question": "Ikkita o’yin soqqasi tashlanganda tushgan ochkolar yig’indisi 12 ga bo’linish ehtimolligini toping?",
    "answer": "1/36.",
    "noAnswer1": "1/18.",
    "noAnswer2": "1/6.",
    "noAnswer3": "1/9."
  },
  {
    "question": "Ikkita o’yin soqqasi tashlanganda tushgan ochkolar yig’indisi 6 ga bo’linish ehtimolligini toping?",
    "noAnswer1": "5/36.",
    "noAnswer2": "1/36.",
    "answer": "1/6.",
    "noAnswer3": "1/9."
  },
  {
    "question": "Ikkita o’yin soqqasi tashlanganda tushgan ochkolar yig’indisi 8 ga bo’linish ehtimolligini toping?",
    "answer": "5/36.",
    "noAnswer1": "1/18.",
    "noAnswer2": "1/6.",
    "noAnswer3": "1/9."
  },
  {
    "question": "Savatda 30 ta olma va 20ta nok bor. Savatdan tavakkaliga bitta meva olinganda uning nok bo’lish ehtimolligini toping?",
    "answer": "2/5.",
    "noAnswer1": "1/20.",
    "noAnswer2": "1/30.",
    "noAnswer3": "1/50."
  },
  {
    "question": "Savatda 30 ta olma va 20ta nok bor. Savatdan tavakkaliga bitta meva olinganda uning olma bo’lish ehtimolligini toping?",
    "noAnswer1": "1/20.",
    "noAnswer2": "1/30.",
    "noAnswer3": "3/50.",
    "answer": "3/5."
  },
  {
    "question": "Bitta o‘yin kubigi bir marta tashlanadi. Agar tushgan raqam toq ekanligi ma’lum bo‘lsa, bu raqamning tub ekanligi ehtimolligini toping?",
    "answer": "2/3.",
    "noAnswer1": "3/5.",
    "noAnswer2": "0,9.",
    "noAnswer3": "2/5."
  },
  {
    "question": "Uch olim bir-biriga bog‘liq bo‘lmagan holda ma’lum bir fizik kattalikni tekshirib, o‘lchov natijalarni yozib bormoqdalar. Birinchi olimning o‘lchov natijasida хatoga yo‘l qo‘yish ehtimolligi 0,1 ga, ikkinchisi uchun 0,15 ga, uchinchisi uchun esa 0,2 ga teng. Bir martadan o‘lchaganda hech bo‘lmaganda bitta olimning хatoga yo‘l qo‘yish ehtimolligini toping?",
    "answer": "0,388.",
    "noAnswer1": "0,883.",
    "noAnswer2": "0,9.",
    "noAnswer3": "2/5."
  },
  {
    "question": "Strategik ahamiyatga ega ko‘prikning buzilishi uchun unga bitta bomba tushishi kifoya. Agar qo‘prikka unga tegish ehtimolligi mos ravishda 0,3; 0,4; 0,6; 0,7 bo‘lgan to‘rtta bomba tashlangan bo‘lsa, ko‘prikning buzilish ehtimolligini toping?",
    "noAnswer1": "0,9694.",
    "answer": "0,9496.",
    "noAnswer2": "0,94.",
    "noAnswer3": "2/5."
  },
  {
    "question": "Bitta o‘yin soqqasi tashlanganda, tushgan ochko juft son bo‘lish ehtimolligini toping?",
    "answer": "1/2.",
    "noAnswer1": "1/3.",
    "noAnswer2": "2/3.",
    "noAnswer3": "2/5."
  },
  {
    "question": "Bitta o‘yin soqqasi tashlanganda, tushgan ochko toq son bo‘lish ehtimolligini toping?",
    "answer": "1/2.",
    "noAnswer1": "1/3.",
    "noAnswer2": "2/3.",
    "noAnswer3": "2/5."
  },
  {
    "question": "Ikkita o‘yin soqqasi tashlanganda tushgan ochkolar yig’indisi 6 ga teng bo‘lishi ehtimolligini toping?",
    "answer": "5/36.",
    "noAnswer1": "1/36.",
    "noAnswer2": "1/18.",
    "noAnswer3": "1/6."
  },
  {
    "question": "Тanga bir marta tashlanganda, “Gerb”li tomon tushish ehtimolligini toping?",
    "answer": "0,5.",
    "noAnswer1": "1/3.",
    "noAnswer2": "1.",
    "noAnswer3": "2."
  },
  {
    "question": "Ikkita o‘yin soqqasi tashlanganda tushgan ochkolar yig’indisi 7 ga teng bo‘lishi ehtimolligini toping?",
    "answer": "1/6.",
    "noAnswer1": "1/36.",
    "noAnswer2": "1/18.",
    "noAnswer3": "1/9."
  },
  {
    "question": "Idishda 20 dan 99 gacha (99 ham kiradi) natural sonlar yozilgan bir xil qog’ozchalar bor. Tavakkaliga bitta qog’ozcha olindi. Undagi sonning 11 ga bo’linish ehtimolligini toping?",
    "noAnswer1": "1/3.",
    "noAnswer2": "1/4.",
    "answer": "1/8.",
    "noAnswer3": "2/5."
  },
  {
    "question": "4 ta matematika va 4 ta fizika kitobi orasidan ixtiyoriy olingan 3 kitobning, eng kamida ikkitasi matematika kitobi bo’lishi ehtimolligini toping?",
    "answer": "1/2.",
    "noAnswer1": "1/3.",
    "noAnswer2": "1/4.",
    "noAnswer3": "2/3."
  },
  {
    "question": "7 kishidan 3 kishilik bir guruh ixtiyoriy tanlansa, aniq ikki kishining bir guruhda bo’lmaslik ehtimolini toping?",
    "answer": "23/35.",
    "noAnswer1": "1/35.",
    "noAnswer2": "1/36.",
    "noAnswer3": "23/37."
  },
  {
    "question": "Tanga 3 marta tashlanganda, 3 marta gerb chiqish ehtimolligini toping?",
    "answer": "1/8.",
    "noAnswer1": "1/3.",
    "noAnswer2": "1/4.",
    "noAnswer3": "2/5."
  },
  {
    "question": "Maktabda 800 ta bola o’qiydi. Shulardan 80 tasi a’lochi. Tasodifiy ravishda bir o’quvchi tanlandi. Uning a’lochi ekanligi ehtimolligini prosentda toping?",
    "answer": "10%.",
    "noAnswer1": "15%.",
    "noAnswer2": "1%.",
    "noAnswer3": "20%."
  },
  {
    "question": "Turli 2 ta matematika, 2 ta fizika va 2 ta kimyo kitobi shkafning bir tokchasiga qo’yilmoqda. Kimyo kitoblarining yonma-yon kelish ehtimoli qancha?",
    "answer": "1/30.",
    "noAnswer1": "2/30.",
    "noAnswer2": "1/20.",
    "noAnswer3": "2/50."
  },
  {
    "question": "A haltada 2 ta ko’k, 3 ta yashil, B haltada 4 ko’k , 5 ta yashil shar bor. A dan ixtiyoriy ravishda olingan sharning rangiga qaramasdan, B haltaga solindi. B dan olingan bir sharning yashil bo’lish ehtimolligini toping?",
    "answer": "14/25.",
    "noAnswer1": "1/25.",
    "noAnswer2": "1/5.",
    "noAnswer3": "2/3."
  },
  {
    "question": "A haltada 2 ta ko’k, 3 ta yashil, B haltada 4 ko’k , 5 ta yashil shar bor. A dan ixtiyoriy ravishda olingan sharning rangiga qaramasdan, B haltaga solindi. B dan olingan bir sharning ko’k bo’lish ehtimolligini toping?",
    "answer": "11/25.",
    "noAnswer1": "14/25.",
    "noAnswer2": "1/5.",
    "noAnswer3": "2/3."
  },
  {
    "question": "Qurilma 5 ta elementdan iborat bo‘lib, ularning 2 tasi eskirgan. Qurilma ishga tushirilganda tasodifiy ravishda 2 ta element ulanadi. Ishga tushirishda eskirmagan elemetlar ulangan bo‘lishi ehtimolini toping?",
    "noAnswer1": "0,7",
    "answer": "0,3",
    "noAnswer2": "0,6",
    "noAnswer3": "0,73"
  },
  {
    "question": "Tehnik nazorat bo‘limi tasodifiyravishda ajratib olingan 100 ta kitobdan iborat partiyada 5 ta yaroqsiz kitob topdi (A hodisa). Yaroqsiz kitoblar sonining nisbiy chastotasini toping?",
    "answer": "0,05",
    "noAnswer1": "0,03",
    "noAnswer2": "0,06",
    "noAnswer3": "0,73"
  },
  {
    "question": "Nishonga 20 ta o‘q uzilgan bo‘lib, ulardan 18 ta o‘q nishonga tekkanligi qayd qilingan (A hodisa). Nishonga tegishlar nisbiy chastotasini toping?",
    "answer": "0,9",
    "noAnswer1": "0,3",
    "noAnswer2": "0,6",
    "noAnswer3": "0,7"
  },
  {
    "question": "Sexda bir necha stanok ishlaydi. Smena davomida bitta stanokni ta’mirlash talab etilishi ehtimoli 0,2 ga teng, ikkita staokni ta’mirlash talab etilishi ehtimoli 0,13 ga teng.  Smena davomida ikkitadan ortiq stanokni ta’mirlash talab etilishi ehtimoli esa 0,07 ga teng. Smena davomida stanoklarni ta’mirlash talab etilishi ehtimolini toping?",
    "answer": "0,4",
    "noAnswer1": "0,3",
    "noAnswer2": "0,5",
    "noAnswer3": "0,9"
  },
  {
    "question": "Ikki ovchi bo‘riga qarata bittadan o‘q uzishdi.  Birinchi ovchining bo‘riga tegizish ehtimoli 0,7 ga, ikkinchisiniki esa 0,8 ga teng.  Hech bo‘lmaganda bitta o‘qning bo‘riga tegishi ehtimolini toping?",
    "answer": "0,94",
    "noAnswer1": "0,93",
    "noAnswer2": "0,56",
    "noAnswer3": "0,92"
  },
  {
    "question": "Tasodifiy tanlangan 80 ta bir xil detaldan 3 tasi yaroqsiz ekanligi aniqlandi. Yaroqsiz detallarning nisbiy chastotasi nechaga teng?",
    "noAnswer1": "7/80",
    "answer": "3/80",
    "noAnswer2": "10/80",
    "noAnswer3": "92/100"
  },
  {
    "question": "Bir yil davomida ob’ektlarning birida 24 ta tek-shiruv o’tkazildi, bunda 19 marta qonunchilikning buzilishlari qayd etildi. Qonunchilik buzilishlarining nisbiy chastotasi nechaga teng?",
    "answer": "19/24",
    "noAnswer1": "3/100",
    "noAnswer2": "13/80",
    "noAnswer3": "13/100"
  },
  {
    "question": "Qutida 12 ta oq va 8 ta qizil shar bor. Tavakkaliga ikkita shar olinganda ularning oq bo’lishi ehtimolligini toping?",
    "answer": "33/95",
    "noAnswer1": "32/95",
    "noAnswer2": "4/95",
    "noAnswer3": "74/95"
  },
  {
    "question": "Qutida 12 ta oq va 8 ta qizil shar bor. Tavakkaliga bitta shar olinganda uning qizil bo’lishi ehtimolligini toping?",
    "answer": "8/20",
    "noAnswer1": "32/95",
    "noAnswer2": "4/95",
    "noAnswer3": "74/95"
  },
  {
    "question": "Qutida 12 ta oq va 8 ta qizil shar bor. Tavakkaliga 2 ta shar olinganda ularning turli rangda bo’lishi ehtimolligini toping?",
    "answer": "48/95",
    "noAnswer1": "5/95",
    "noAnswer2": "0,84",
    "noAnswer3": "0,75"
  },
  {
    "question": "Ikkita o’yin soqqasi baravar tashlanganda tushgan ochkolar yig’indisi 8 ga teng bo’lish hodisasining ro’y berish ehtimolligini toping?",
    "answer": "5/36",
    "noAnswer1": "3/5",
    "noAnswer2": "4/19",
    "noAnswer3": "0,7117"
  },
  {
    "question": "Ikkita o’yin soqqasi baravar tashlanganda tushgan ochkolar ko’paytmasi 8 ga teng bo’lish hodisasining ro’y berish ehtimolligini toping?",
    "answer": "1/18",
    "noAnswer1": "5/19",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Ikkita o’yin soqqasi baravar tashlanganda tushgan ochkolar yig’indisi ularning ko’paytmasidan katta bo’lish hodisasining ro’y berish ehtimolligini toping?",
    "answer": "11/36",
    "noAnswer1": "5/36",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Tanga 2 marta tashlaganda aqalli bir marta gerbli tomon tushishi ehtimolligini toping?",
    "answer": "3/4",
    "noAnswer1": "5/9",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Qutichada 6 ta bir xil (nomerlangan) kubik bor. Tavakkaliga bitta-bitadan barcha kubiklar olinganda kubiklarning nomerlari o’sib borish tartibida chiqishi ehtimolligini toping?",
    "answer": "1/720",
    "noAnswer1": "5/721",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Qutida 5 ta bir xil buyum bo’lib, ularni uchtasi bo’yalgan. Tavakkaliga ikkita buyum olinganda ular orasida bitta bo’yalgani bo’lishi  hodisasining ehtimolligini toping?",
    "noAnswer1": "0,66",
    "noAnswer2": "5/9",
    "answer": "0,6",
    "noAnswer3": "0,7"
  },
  {
    "question": "Qirqma alifboning 6 ta harfidan iborat “MATEMATIKA” so’zi tuzilgan. Bu harflar tasodifan sochilib ketgan va qaytadan ixtiyoriy tartibda yig’ilgan. Yana “MATEMATIKA” so’zi hosil bo’lish ehtimolini toping.",
    "answer": "1/151200",
    "noAnswer1": "6/151200",
    "noAnswer2": "11/151200",
    "noAnswer3": "16/151200"
  },
  {
    "question": "Qirqma alifboning 6 ta harfidan iborat “DASTUR” so’zi tuzilgan. Bu harflar tasodifan sochilib ketgan va qaytadan ixtiyoriy tartibda yig’ilgan. Yana “DASTUR” so’zi hosil bo’lish ehtimolini toping.",
    "answer": "1/720",
    "noAnswer1": "1/620",
    "noAnswer2": "1/520",
    "noAnswer3": "1/420"
  },
  {
    "question": "Qutida 5 ta oq, 17 ta qora shar bor. Undan tavakkaliga olingan sharning oq shar bo’lish ehtimolini toping.",
    "answer": "5/22",
    "noAnswer1": "4/22",
    "noAnswer2": "17/22",
    "noAnswer3": "1"
  },
  {
    "question": "Qutida 5 ta oq, 17 ta qora shar bor. Undan tavakkaliga olingan sharning qora shar bo’lish ehtimolini toping.",
    "noAnswer1": "5/22",
    "noAnswer2": "1/22",
    "noAnswer3": "1",
    "answer": "17/22"
  },
  {
    "question": "Guruhda 12 ta talaba bo’lib, ularning 6 nafari a’lochi. Ro’yxat bo’yicha tavakkaliga 9 ta talaba tanlab olindi. Tanlab olingan talabalar ichida 5 ta talaba a’lochi bo’lish ehtimolini toping.",
    "answer": "9/22",
    "noAnswer1": "8/22",
    "noAnswer2": "7/22",
    "noAnswer3": "6/22"
  },
  {
    "question": "Qutida 12 ta oq, 8 ta qora shar bor. Undan tavakkaliga 8 ta shar olinganda 3 tasi qora rangda bo’lish ehtimolini toping.",
    "answer": "7392/20995",
    "noAnswer1": "6392/20995",
    "noAnswer2": "5392/20995",
    "noAnswer3": "4392/20995"
  },
  {
    "question": "Qutida 12 ta oq, 8 ta qora shar bor. Undan tavakkaliga 8 ta shar olinganda 3 tasi oq rangda bo’lish ehtimolini toping.",
    "answer": "1232/12597",
    "noAnswer1": "2232/12597",
    "noAnswer2": "3232/12597",
    "noAnswer3": "4232/12597"
  },
  {
    "question": "Qutida 12 ta oq, 8 ta qora shar bor. Undan tavakkaliga 8 ta shar olinganda 5 tasi qora rangda bo’lish ehtimolini toping.",
    "answer": "1232/12597",
    "noAnswer1": "2232/12597",
    "noAnswer2": "3232/12597",
    "noAnswer3": "4232/12597"
  },
  {
    "question": "Qarama-qarshi hodisalar ehtimollari yig’indisi qaysi raqamni qabul qiladi?",
    "noAnswer1": "4 ni,",
    "noAnswer2": "3 ni,",
    "noAnswer3": "0 ni,",
    "answer": "1 ni."
  },
  {
    "question": "Diskret tasodifiy miqdor   qanday  qiymatlarni qabul qilishi mumkin?",
    "noAnswer1": "Ixtiyoriy.",
    "answer": "Sanoqli.",
    "noAnswer2": "Cheksiz oraliqdagi barcha qiymatlarni.",
    "noAnswer3": "Chekli oraliqdagi barcha qiymatlarni."
  },
  {
    "question": "Uzluksiz tasodifiy miqdor qanday qiymatlarni  qabul qilishi mumkin?",
    "noAnswer1": "Ixtiyoriy.",
    "noAnswer2": "Sanoqli.",
    "noAnswer3": "Cheksiz ko‘p.",
    "answer": "Chekli yoki cheksiz oraliqdagi barcha qiymatlarni."
  },
  {
    "question": "Hodisa deganda nima tushuniladi?",
    "noAnswer1": "Hodisa – bu boshlang’ich bir holat.",
    "noAnswer2": "Hodisa deganda tasodifiy bir holat tushuniladi.",
    "answer": "Hodisa deganda tajriba natijasida ro‘y berish yoki ro‘y bermasligi mumkin bo‘lgan bir holat tushuniladi.",
    "noAnswer3": "Hodisa deganda barcha vaziyatlar tushuniladi."
  },
  {
    "question": "Hodisa qanday tushuncha?",
    "noAnswer1": "Hodisa bu ikkilamchi tushuncha.",
    "answer": "Hodisa – ehtimollar nazariyasining boshlang’ich tushunchasi bo‘lib, u ta’rifsiz qabul qilinadi.",
    "noAnswer2": "Hodisa bu birlamchi tushuncha.",
    "noAnswer3": "Hodisa asosiy tushuncha."
  },
  {
    "question": "Hodisalar neyecha turga bo‘linadi?",
    "noAnswer1": "Hodisalar asosan 5 turga bo‘linadi.",
    "noAnswer2": "Hodisalar asosan 7 turga bo‘linadi.",
    "noAnswer3": "Hodisalar asosan 9 turga bo‘linadi.",
    "answer": "Hodisalar asosan 3 turga bo‘linadi."
  },
  {
    "question": "Mumkin bo‘lmagan hodisa ro‘y berganda uning ehtimoli qaysi raqamni qabul qiladi?",
    "noAnswer1": "1 ni,",
    "answer": "0 ni,",
    "noAnswer2": "2 ni,",
    "noAnswer3": "8 ni,"
  },
  {
    "question": "Quyidagi munosabatlardan qaysi biri ikkita birgalikda bo‘lmagan hodisalar ehtimollarini qo‘shish teoremasini ifodalaydi?",
    "noAnswer1": "P(A+B)=P(A)-P(B),",
    "noAnswer2": "P(A+B)=P(A)*P(B),",
    "answer": "P(A+B)=P(A)+P(B),",
    "noAnswer3": "P(AB)=P(A)-P(B),"
  },
  {
    "question": "Quyidagi munosabatlardan qaysi biri ikkita birgalikda bo‘lgan hodisalar ehtimollarini qo‘shish teoremasini ifodalaydi?",
    "noAnswer1": "P(A+B)=P(A)-P(B),",
    "noAnswer2": "P(A+B)=P(A)*P(B),",
    "answer": "P(A+B)=P(A)+P(B)-P(A)*P(B),",
    "noAnswer3": "P(AB)=P(A)-P(B),"
  },
  {
    "question": "Muqarrar hodisa ro‘y berganda uning ehtimoli qaysi raqamni qabul qiladi?",
    "noAnswer1": "2 ni,",
    "noAnswer2": "0 ni,",
    "noAnswer3": "5 ni,",
    "answer": "1 ni,"
  },
  {
    "question": "Yashikka 4 tasi standart bo‘lgan 10 ta detal tartibsiz joylashtirilgan. Kontrolyor tavakkaliga 3 ta detalni oldi. Olingan detallarning barchasi standart bo‘lish ehtimolini toping.",
    "answer": "1/30.",
    "noAnswer1": "5/30.",
    "noAnswer2": "3/30.",
    "noAnswer3": "4/15."
  },
  {
    "question": "Tavakkaliga olingan ikki xonali son yo 3 ga, yo 5 ga, karrali bo‘lish ehtimolini toping.",
    "noAnswer1": "P(A+B)=1/6.",
    "answer": "P(A+B)=7/15.",
    "noAnswer2": "P(A+B)=1/8.",
    "noAnswer3": "P(A+B)=2/3."
  },
  {
    "question": "Yashikda 6 ta shar bo‘lib, ularning 3 tasi oq. Tavakkaliga ikkita shar olinadi. Olingan ikkala sharning ham oq shar bo‘lish ehtimolini toping.",
    "noAnswer1": "0,5.",
    "noAnswer2": "0,9.",
    "answer": "0,2.",
    "noAnswer3": "0,1."
  },
  {
    "question": "Tanga 2 marta tashlanadi. «Gerb» tomon tushishining 1 dan 2 martagacha oraliqlarda bo‘lishi ehtimolini toping.",
    "answer": "3/4.",
    "noAnswer1": "5/8.",
    "noAnswer2": "3/8.",
    "noAnswer3": "4/15."
  },
  {
    "question": "O‘yin soqqasi 2 marta tashlandi. Qancha turli holatlar bo‘lishi mumkin?",
    "noAnswer1": "2",
    "noAnswer2": "12",
    "noAnswer3": "14",
    "answer": "36"
  },
  {
    "question": "Tanga 2 marta tashlandi. Gerbli tomonini kamida bir marta tushish hodisasi ehtimoli topilsin.",
    "noAnswer1": "1/3",
    "noAnswer2": "1/2",
    "noAnswer3": "1/4",
    "answer": "3/4"
  },
  {
    "question": "Ikkita tanga tashlanayotganda bittasida gerb va boshqasida raqam chiqish hodisasi ehtimoli topilsin",
    "answer": "0,5",
    "noAnswer1": "2",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "Quyidagi P(A+B)=P(A)+P(B)-P(A)P(B) munosabat qanday hodisalar uchun o‘rinli?",
    "noAnswer1": "Bog’liq.",
    "noAnswer2": "Birgalikda bo‘lmagan.",
    "noAnswer3": "Bog’liq bo‘lmagan.",
    "answer": "Birgalikda bo‘lgan."
  },
  {
    "question": "Byuffon 4040 marta tanga tashlab, 2048 martasida gerb tomon tushishini kuzatdi. Qanday ehtimollik bilan bu natijani kutish mumkin?",
    "noAnswer1": "0,0085",
    "answer": "0,5",
    "noAnswer2": "0,75",
    "noAnswer3": "0,25"
  },
  {
    "question": "Agar D(X)=5,bo’lsa, D(-2X+3) ni toping.",
    "answer": "20",
    "noAnswer1": "18",
    "noAnswer2": "21",
    "noAnswer3": "16"
  },
  {
    "question": "Idishdagi sharlarning 40% oq, 1/3 qismi qora, qolganlari esa qizil rangda. Idishdan tavakkaliga bitta shar olindi. Olingan sharning qaysi rangda bo’lish ehtimolligi ko’proq?",
    "answer": "oq shar.",
    "noAnswer1": "qizil shar.",
    "noAnswer2": "qora shar.",
    "noAnswer3": "barcha sharlar chiqish imkoniyati teng."
  },
  {
    "question": "6,7,8 raqamlaridan, ularni takrorlanmasdan 3 xonali sonlar tuzilgan. Shu tuzilgan uch xonali sonlarning juft raqamlari  yonma-yon joylashishi ehtimolligini toping?",
    "answer": "2/3.",
    "noAnswer1": "1/2.",
    "noAnswer2": "1/3.",
    "noAnswer3": "1/5."
  },
  {
    "question": "Talaba matematika fanidan 50 ta savoldan 5 tasini bilmasligi ma’lum bo’lsa. Yozma ish vaqtida talabaga 50 ta savoldan ihtiyoriy bittasi berilsa, shu savolni bilish ehtimolligini toping?",
    "answer": "9/10.",
    "noAnswer1": "1/5.",
    "noAnswer2": "1/10.",
    "noAnswer3": "1/50."
  },
  {
    "question": "Talaba matematika fanidan 50 ta savoldan 5 tasini bilmasligi ma’lum bo’lsa. Yozma ish vaqtida talabaga 50 ta savoldan ihtiyoriy bittasi berilsa, shu savolni bilmaslik ehtimolligini toping?",
    "answer": "1/10.",
    "noAnswer1": "1/5.",
    "noAnswer2": "9/10.",
    "noAnswer3": "1/50."
  },
  {
    "question": "Idishda 3 ta oq va 2 ta qora shar bor. Тavakkaliga 2 ta shar olindi. Bu sharlar har хil rangda bo‘lish ehtimolligini toping?",
    "noAnswer1": "1/5.",
    "noAnswer2": "5/8.",
    "noAnswer3": "9/10.",
    "answer": "3/5."
  },
  {
    "question": "Idishda 4 ta oq va 6 ta qora shar bor. Idishdan tavakkaliga bitta shar olinib, keyin u idishga qaytariladi. So‘ng idishdan tasodifan yana bitta shar olinadi. Olingan sharlar: har хil rangda bo‘lish ehtimolligini toping?",
    "answer": "0,48.",
    "noAnswer1": "0,24.",
    "noAnswer2": "0,9.",
    "noAnswer3": "2/5."
  },
  {
    "question": "Idishda 4 ta oq va 6 ta qora shar bor. Idishdan tavakkaliga bitta shar olinib, keyin u idishga qaytariladi. So‘ng idishdan tasodifan yana bitta shar olinadi. Olingan sharlar: bir хil rangda bo‘lish ehtimolligini toping?",
    "noAnswer1": "0,48.",
    "noAnswer2": "0,9.",
    "noAnswer3": "2/5.",
    "answer": "0,52."
  },
  {
    "question": "Тanga ikki marta tashlanganda, hech bo‘lmaganda bir marta “Raqam”li tomon tushish ehtimolligini toping?",
    "noAnswer1": "1/4.",
    "answer": "3/4.",
    "noAnswer2": "1/16.",
    "noAnswer3": "2/9."
  },
  {
    "question": "Тanga ikki marta tashlanganda, hech bo‘lmaganda bir marta “Gerb”li tomon tushish ehtimolligini toping?",
    "answer": "3/4.",
    "noAnswer1": "1/4.",
    "noAnswer2": "1/16.",
    "noAnswer3": "2/9."
  },
  {
    "question": "Beshta bir xil qog’ozchaning har biriga quyidagi harflardan biri takrorlanmasdan yozilgan: A, T, N, S, O. Qog’ozchalar qutiga solingan va yaxshilab aralashtirilgan. Qutiga qaramasdan bittalab olingan va olingan tartibda o’qilganda SON so’zi hosil bo’lish ehtimolligini toping?",
    "noAnswer1": "1/30.",
    "noAnswer2": "1/20.",
    "answer": "1/60.",
    "noAnswer3": "2/45."
  },
  {
    "question": "Qutida 4 ta qora va 5 ta oq shar bor. Qutidan tavakkaliga olingan ikkita sharning ikkalasi ham oq shar bo’lishi ehtimolligini toping?",
    "answer": "5/18.",
    "noAnswer1": "1/18.",
    "noAnswer2": "1/9.",
    "noAnswer3": "2/21."
  },
  {
    "question": "Idishda 4 ta oq, 3 ta ko‘k va 2 ta qora shar bor. Tavakkaliga, ketma-ket, bittadan 3 ta shar olindi. Birinchi shar oq, ikkinchisi ko‘k va uchinchisi qora rangda bo‘lishi ehtimolligini toping?",
    "answer": "1/21.",
    "noAnswer1": "1/3.",
    "noAnswer2": "1/20.",
    "noAnswer3": "2/9."
  },
  {
    "question": "Idishda o‘lchamlari bir xil 10 ta ko‘k, 25 ta yashil, 15 ta qora rangli qalamlar bor. Ko‘k rangli qalam albatta chiqishi uchun eng kam deganda idishdan bir yo‘la nechta qalam olish kerak?",
    "answer": "41.",
    "noAnswer1": "42.",
    "noAnswer2": "31.",
    "noAnswer3": "21."
  },
  {
    "question": "Tanga 3 marta tashlanganda 2 marta gerb va 1 marta raqam tushish ehtimolligini toping?",
    "answer": "3/8.",
    "noAnswer1": "1/3.",
    "noAnswer2": "1/8.",
    "noAnswer3": "2/9."
  },
  {
    "question": "Alida 3 ta fizika va 2 ta matematika kitoblari bor. Ali bu 5 kitobni javonga qo’yganda matematika kitoblari yonma-yon bo’lib qolish ehtimolligini toping?",
    "noAnswer1": "1/3.",
    "noAnswer2": "1/2.",
    "noAnswer3": "2/3.",
    "answer": "2/5."
  },
  {
    "question": "Bir juft shoshqol tashlanyapdi. Bulardan birida 2 tushgani ma’lum bo’lsa, tushgan sonlar yig’indisi tub son bo’lish ehtimolligi qancha?",
    "answer": "0,5.",
    "noAnswer1": "1/3.",
    "noAnswer2": "1.",
    "noAnswer3": "2."
  },
  {
    "question": "Besh juft er-xotin aralash suhbatlashmoqda. Ular orasidan ixtiyoriy tanlangan ikki kishi er-xotin bo’lish ehtimolligini toping?",
    "noAnswer1": "1/3.",
    "answer": "1/9.",
    "noAnswer2": "1/10.",
    "noAnswer3": "2/3."
  },
  {
    "question": "5 yo’lovchidan 2 tasining haydovchilik guvohnomasi bor. 2 kishi oldinga, 3 kishi orqaga o’tirganda, oldinga o’tirgan 2 kishining haydovchilik guvohnomasi bo’lish ehtimolligini toping?",
    "noAnswer1": "0,11.",
    "noAnswer2": "1/3.",
    "answer": "0,1.",
    "noAnswer3": "0,2."
  },
  {
    "question": "Bir tanga 4 marta tashlanyapdi. Birinchi marta tashlanganda raqam tushganligi ma’lum bo’lsa, qolgan uch tashlashda kamida 1 marta gerb tushish ehtimolligini toping?",
    "noAnswer1": "3/8.",
    "noAnswer2": "1/3.",
    "answer": "7/8.",
    "noAnswer3": "2/3."
  },
  {
    "question": "Tanga uch marta tashlanganda raqam tomoni tushmaslik hodisasining ehtimolini toping?",
    "answer": "1/8.",
    "noAnswer1": "1/3.",
    "noAnswer2": "1/4.",
    "noAnswer3": "1/2."
  },
  {
    "question": "1, 2, 3, 4, 5, 6 raqamlari bilan nomerlargan kub ikki marta tashlandi. Kamida bir marta “1” raqami tushish ehtimoli qancha?",
    "answer": "11/36.",
    "noAnswer1": "1/36.",
    "noAnswer2": "1/9.",
    "noAnswer3": "1/18."
  },
  {
    "question": "Qutida 7 ta oq, 3 ta qora shar bor. Undan tavakkaliga olingan 2 ta sharning oq bo‘lishi ehtimolini toping?",
    "noAnswer1": "2/15",
    "answer": "7/15",
    "noAnswer2": "6/15",
    "noAnswer3": "3/15"
  },
  {
    "question": "Telefonda raqamini terayotgan abonent ohirgi ikki raqamni unutib qo‘yadi va faqat bu raqamlar turlicha ekanligini eslab qolgan holda ularni tavakkaliga teradi. Kerakli raqamlar terilgan bo‘lish  ehtimolini toping?",
    "answer": "1/90",
    "noAnswer1": "1/100",
    "noAnswer2": "1/10",
    "noAnswer3": "1/9"
  },
  {
    "question": "Qutida 7 ta oq, 3 ta qora shar bor. Undan tavakkaliga olingan 2 ta sharning qora bo‘lishi ehtimolini toping?",
    "answer": "1/15",
    "noAnswer1": "7/15",
    "noAnswer2": "6/15",
    "noAnswer3": "3/15"
  },
  {
    "question": "Kun davomida yog’ingarchilik bo’lishining ehtimolligi 0.3 ga teng. Kun yog’ingarchilik bo’lmaslik hodisasining ehtimolligi topilsin?",
    "answer": "0,7",
    "noAnswer1": "0,3",
    "noAnswer2": "0,5",
    "noAnswer3": "0,21"
  },
  {
    "question": "Yig’uvchida 3 ta konussimon va 7 ta ellipssimon valik bor. Yig’uvchi tavakkaliga avval bitta valikni, so’ngra esa ikkinchi valikni oldi. Birinchi valik konussimon, ikkinchisi esa ellipssimon ekanligining ehtimolligi topilsin?",
    "answer": "7/30",
    "noAnswer1": "0,3",
    "noAnswer2": "5/30",
    "noAnswer3": "0,21"
  },
  {
    "question": "Birinchi va ikkinchi zambarakdan o’q uzishda nishonga tegish ehtimolliklari mos ravishda 0.7 va 0.8 ga teng. Ikkala zambarakdan bir vaqtning o’zida o’q uzishda hech bo’lmaganda bitta zambarakning o’qi nishonga tegishi ehtimolligi topilsin?",
    "answer": "0.94",
    "noAnswer1": "0.56",
    "noAnswer2": "0.3",
    "noAnswer3": "0.15"
  },
  {
    "question": "Detallarning 2 ta to’plami bor. 1-to’plamdan tavakkaliga olingan detal standart bo’lishining ehtimolligi 0,8 ga, ikkinchisidan olinganniki esa 0,9 ga teng. Tavakkaliga olingan to’plamdan tavakkaliga olingan detalning standart bo’lishi ehtimollligi topilsin?",
    "noAnswer1": "0,80",
    "answer": "0,85",
    "noAnswer2": "0,72",
    "noAnswer3": "0,17"
  },
  {
    "question": "Tavakkaliga 20 dan katta bo’lmagan natural son tanlanganida, uning 5 ta karrali bo’lish ehtimolligini toping?",
    "answer": "0,2",
    "noAnswer1": "0,5",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Kartochkalarga 1,2,3,4,5,6,7,8,9 raqamlari yozilgan. Tavakkaliga ketma-ket to’rtta kartochka olinib, ularni qator qilib terilganda toq son hosil bo’lishi ehtimolligini toping?",
    "answer": "5/9",
    "noAnswer1": "1/9",
    "noAnswer2": "0.4",
    "noAnswer3": "0.7"
  },
  {
    "question": "Kartochkalarga 1,2,3,4,5,6,7,8,9 raqamlari yozilgan. Tavakkaliga ketma-ket to’rtta kartochka olinib, ularni qator qilib terilganda juft son hosil bo’lishi ehtimolligini toping?",
    "answer": "4/9",
    "noAnswer1": "5/9",
    "noAnswer2": "0.4",
    "noAnswer3": "0.7"
  },
  {
    "question": "Qutida 5 ta bir xil buyum bo’lib, ularni uchtasi bo’yalgan. Tavakkaliga ikkita buyum olinganda ular orasida ikkita bo’yalgani bo’lishi  hodisasining ehtimolligini toping?",
    "answer": "0,3",
    "noAnswer1": "5/9",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Qutida 5 ta bir xil buyum bo’lib, ularni uchtasi bo’yalgan. Tavakkaliga ikkita buyum olinganda ular orasida xech bo’lmaganda bitta bo’yalgani bo’lishi  hodisasining ehtimolligini toping?",
    "answer": "0,9",
    "noAnswer1": "0,5",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Tavakkaliga 20 dan katta bo’lmagan natural son 20 ning bo’luvchisi bo’lishi ehtimolligini toping?",
    "answer": "0,3",
    "noAnswer1": "5/9",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Raqamlari har xil ikki xonali son o’ylangan. O’ylangan son raqamlari xar xil ikki xonali son bo’lishi hodisasining ehtimolligini toping?",
    "answer": "9/10",
    "noAnswer1": "5/81",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Raqamlari bir xil ikki xonali son o’ylangan. O’ylangan son raqamlari bir xil bo’lgan tasodifan ikki xonali son bo’lishi hodisasining ehtimolligini toping?",
    "answer": "1/10",
    "noAnswer1": "5/81",
    "noAnswer2": "0,4",
    "noAnswer3": "0,7"
  },
  {
    "question": "Guruhda 12 ta talaba bo’lib, ularning 8 nafari a’lochi. Ro’yxat bo’yicha tavakkaliga 9 ta talaba tanlab olindi. Tanlab olingan talabalar ichida 5 ta talaba a’lochi bo’lish ehtimolini toping.",
    "answer": "14/55",
    "noAnswer1": "8/12",
    "noAnswer2": "9/12",
    "noAnswer3": "12/17"
  },
  {
    "question": "Qirqma alifboning 6 ta harfidan iborat “ANANAS” so’zi tuzilgan. Bu harflar tasodifan sochilib ketgan va qaytadan ixtiyoriy tartibda yig’ilgan. Yana “ANANAS” so’zi hosil bo’lish ehtimolini toping.",
    "answer": "1/60",
    "noAnswer1": "6/60",
    "noAnswer2": "11/60",
    "noAnswer3": "16/60"
  },
  {
    "question": "Qutida 12 ta oq, 8 ta qora shar bor. Undan tavakkaliga 8 ta shar olinganda 5 tasi oq rangda bo’lish ehtimolini toping.",
    "answer": "7392/20995",
    "noAnswer1": "6392/20995",
    "noAnswer2": "5392/20995",
    "noAnswer3": "4392/20995"
  },
  {
    "question": "Qutida 5 ta bir xil, raqamlan(1dan 5gacha)gan kubik bor. Tavakkaliga bitta-bittadan barcha kubiklar olinganda kubiklarning raqamlari o’sib borish tartibida chiqishi ehtimolligini toping.",
    "answer": "1/120",
    "noAnswer1": "2/120",
    "noAnswer2": "3/120",
    "noAnswer3": "4/120"
  },
  {
    "question": "Qutida 7 ta bir xil, raqamlan(1dan 7gacha)gan kubik bor. Tavakkaliga bitta-bittadan barcha kubiklar olinganda kubiklarning raqamlari o’sib borish tartibida chiqishi ehtimolligini toping.",
    "answer": "1/5040",
    "noAnswer1": "2/5040",
    "noAnswer2": "3/5040",
    "noAnswer3": "4/5040"
  },
  {
    "question": "Qutida 5 ta bir xil buyum bo’lib, ularning 3 tasi bo’yalgan. Tavakkaliga 2 ta buyum olinganda ular orasida 1 ta bo’yalgan bo’lishi ehtimolligini toping.",
    "answer": "6/10",
    "noAnswer1": "7/10",
    "noAnswer2": "8/10",
    "noAnswer3": "9/10"
  },
  {
    "question": "Qutida 5 ta bir xil buyum bo’lib, ularning 3 tasi bo’yalgan. Tavakkaliga 2 ta buyum olinganda ular orasida 2 ta bo’yalgan bo’lishi ehtimolligini toping.",
    "answer": "3/10",
    "noAnswer1": "4/10",
    "noAnswer2": "5/10",
    "noAnswer3": "6/10"
  },
  {
    "question": "Qutida 5 ta bir xil buyum bo’lib, ularning 3 tasi bo’yalgan. Tavakkaliga 2 ta buyum olinganda ular orasida xech bo’lmaganda 1 ta bo’yalgan bo’lishi ehtimolligini toping.",
    "answer": "9/10",
    "noAnswer1": "8/10",
    "noAnswer2": "7/10",
    "noAnswer3": "6/10"
  },
  {
    "question": "Oilada 5 farzand bor. Bu bolalar orasidagi ikki o‘g’il bolalar bo‘lish ehtimolini toping. O‘g’il bolalar tug’ilish ehtimolini 0,5 ga teng deb oling.",
    "noAnswer1": "5/36.",
    "answer": "5/16.",
    "noAnswer2": "1/36.",
    "noAnswer3": "9/16."
  },
  {
    "question": "Agar har bir sinovda A hodisaning ro‘y berish ehtimoli 0,25 ga teng bo‘lsa, bu hodisaning 3 ta sinovda rosa 1 marta ro‘y berish ehtimolini toping.",
    "noAnswer1": "25/64.",
    "answer": "27/64.",
    "noAnswer2": "16/64.",
    "noAnswer3": "9/64."
  },
  {
    "question": "Bitta o‘q urishda nishonga tegish ehtimolini 0,8 ga teng 2 ta o‘q uzilganda rosa 1 ta o‘qning nishonga tegish ehtimolini toping.",
    "answer": "0,32.",
    "noAnswer1": "0,78.",
    "noAnswer2": "0,42.",
    "noAnswer3": "0,68."
  },
  {
    "question": "O‘g’il bola tug’ilish ehtimoli 0,5 ga teng. Tug’ilgan 4 chaqaloqning 4 tasi o‘g’il bola bo‘lish ehtimolini toping.",
    "noAnswer1": "5/16.",
    "answer": "1/16.",
    "noAnswer2": "3/16.",
    "noAnswer3": "9/16."
  },
  {
    "question": "Qaysi munosabat Binomial taqsimotning matematik kutilmasini ifodalaydi?",
    "noAnswer1": "M(X)=pq.",
    "noAnswer2": "M(X)=nq.",
    "noAnswer3": "M(X)=pk.",
    "answer": "M(X)=np."
  },
  {
    "question": "Qaysi munosabat Binomial taqsimotning dispersiyasini ifodalaydi?",
    "noAnswer1": "D(x)=np.",
    "noAnswer2": "D(x)=pq.",
    "answer": "D(x)=npq.",
    "noAnswer3": "D(x)=nk."
  },
  {
    "question": "Agar X va Y ning matematik kutilmasi M(X)=6, M(Y)=9 bo‘lsa, Z=2X-Y tasodifiy miqdorning matematik kutilmasini toping.",
    "noAnswer1": "9.",
    "noAnswer2": "17.",
    "noAnswer3": "16.",
    "answer": "3."
  },
  {
    "question": "X va Y tasodifiy miqdorlar erkli. Agar D(X)=5, D(Y)=6 ekani ma’lum bo‘lsa, Z=3X+2Y tasodifiy miqdorning dispersiyasini toping.",
    "answer": "69.",
    "noAnswer1": "76.",
    "noAnswer2": "107.",
    "noAnswer3": "403."
  },
  {
    "question": "Bitta o‘q uzishda nishonga tegish ehtimoli 0,8 ga teng. To‘rtta o‘q uzishda nishonga 2 marta tegishi ehtimolini toping.",
    "noAnswer1": "0,2487.",
    "noAnswer2": "0,1296.",
    "noAnswer3": "0,3624.",
    "answer": "0,1536."
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