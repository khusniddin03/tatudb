const data = [
  {
    "question": "1.O'zbek tilshunosligida esa ilmiy uslubga oid masalalar o'tgan asrning qaysi yillaridan boshlab o'rganilgan?",
    "answer": "80-yillaridan"
  },
  {
    "question": "2.Ilmiy stil tadqiqida va uning funksional uslub sifatida o'zining mustahkam o'rniga ega  bo'lishida qaysi olimning “Hozirgi o'zbek adabiy tilining ilmiy stili”nomli monografiyasi  katta ahamiyatga ega. ",
    "answer": " M.Mukarramov"
  },
  {
    "question": "3.Ilmiy uslub janrlarini tadqiq qilishdagi “O'zbek ilmiy matnining sintagmatik va pragmatik xususiyatlari” nomzodlik dissertatsiyasining muallifi kim?",
    "answer": "M.Hakimov"
  },
  {
    "question": "4.Ilmiy uslubga xos bo'lgan xususiyatlarni aniqlang.",
    "answer": " barcha javoblar to'g'ri"
  },
  {
    "question": "5.Nutq uslublari soni nechta? ",
    "answer": "5ta"
  },
  {
    "question": "6.Ilmiy uslub o'z ichida yana necha guruhga bo'linadi?",
    "answer": "2 "
  },
  {
    "question": "7.Ilmiy uslub janrlariga oid “O'zbek tilida ilmiy uslubning sintaktik xususiyatlari” nomli monografiya mualliifini aniqlang.",
    "answer": "M.Mamadiyeva"
  },
  {
    "question": "8.Ilmiy uslubga xos bo'lmagan ya'ni mazkur uslubda deyarli ishlatilmaydigan so'z turkumlari qaysilar? ",
    "answer": "taqlid va undov so'zlar"
  },
  {
    "question": "9.Ilmiy uslub va ilmiy nutqda qaysi nisbat qo'shimchasidan keng foydalaniladi?",
    "answer": "majhul nisbat"
  },
  {
    "question": "10.Til birliklarining fan sohasida, ilmiy bayon jarayonida ishlatiladigan, obyektiv borliqni idrok etishda faqatgina dalil va faktlarga tayanadigan matn turi bu....",
    "answer": "Imiy matn"
  },
  {
    "question": "11.Matnlar hajm belgisiga ko'ra necha turga bo'linadi?",
    "answer": "2"
  },
  {
    "question": "12.Matnlar ifoda maqsadi va mazmuniga ko'ra necha guruhga bo'linadi?",
    "answer": "7"
  },
  {
    "question": "13._______________bu ilmiy ish, ya'ni ma'lum bir mavzu bo'yicha tadqiqotlardir. Amalga oshirilishining maqsadi - ma'lum bir mavzu bo'yicha o'rganilgan materialni mustahkamlash va olingan bilimlarni amalda qo'llash maqsadida yoziladigan ilmiy ish turidir.",
    "answer": "kurs ishi"
  },
  {
    "question": "14.Kurs ishining qaysi qismida tanlangan mavzuning dolzarbligi, tadqiqotning maqsad va vazifalari, obyekti va predmeti kabi fikrlarni ajratib ko'rsatish va tahlil qilish muhimdir. ",
    "answer": "Kirish qismida"
  },
  {
    "question": "15.Kurs ishining qaysi qismi mavzuni har tomonlama batafsil ochib berishni o'z ichiga olgan eng katta qism hisoblanadi?",
    "answer": "asosiy qism"
  },
  {
    "question": "16.Kurs ishining qaysi qismida barcha natijalar umumlashtiriladi. Unda barcha kirishqismida berilgan savollarga javoblar, kurs ishining zamonaviy fandagi o'rni yoritiladi, talaba ishining ijobiy va salbiy tomonlari baholanadi.",
    "answer": " xulosa qismida"
  },
  {
    "question": "17.Kurs ishining qaysi qismiga qarab o'qituvchi talabaning berilgan mavzuni va masalani qanchalik yaxshi o'rganganligi to'g'risida xulosa chiqarishi mumkin?",
    "answer": "adabiyotlar ro'yxati"
  },
  {
    "question": "18.Ekspressiv matn bu----",
    "answer": "hissiy ifoda mazmunli matn"
  },
  {
    "question": "19.Matn hosil qiluvchi vositalarga nimalar kiradi?",
    "answer": "barcha javoblar to'g'ri"
  },
  {
    "question": "20.Nemischadan olingan bo'lib, ich tomon orqa tomon yurmoq ma'nosini bildiruvchi atamani toping.",
    "answer": "Abzas"
  },
  {
    "question": "21.Matn hajm va mazmun belgisiga ko'ra nechta turga bo'linadi?",
    "answer": "2"
  },
  {
    "question": "22. Hajim belgisiga ko'ra matn qanday turlarga bo'linadi?",
    "answer": "Minimal, maksimal"
  },
  {
    "question": "23.Makromatinning eng kichik birligi nima?",
    "answer": " Abzas"
  },
  {
    "question": "24.Abzas nima?",
    "answer": "Matnning bir xat boshidan keying xat boshigacha bo'lgan qismi."
  },
  {
    "question": "25.O'zbek tilining izohli lug'atida yozilishicha ―Matn atamasi qaysi tildan olingan?",
    "answer": "Arabcha"
  },
  {
    "question": "26._____ nutq ko'rinishi bo'lib, vazifasi jihatidan tugal nutqiy butunlik ushbu qoida qaysi birlik haqida?",
    "answer": "Matn"
  },
  {
    "question": "27.Poligrafiyadagi yirik shiriflardan birining nomi?",
    "answer": "Matn"
  },
  {
    "question": "28.Kichik mavzuni qamrab oluvchi mazmuniy butunlik nima?",
    "answer": "Mikromatn"
  },
  {
    "question": "29.Minimal matnga nimalar kiradi?",
    "answer": "Maqol, matal, she'r"
  },
  {
    "question": "30.Badiiy uslubda hikoya, qissa, roman, epapeya kabi yirik hajmli asarlar qanday matnni hosil qiladi?",
    "answer": "Maksimal matn"
  },
  {
    "question": "31.Mikromatnlarni o'zaro birikuvidan qanday matn hosil bo'ladi? ",
    "answer": "Maksimal matn"
  },
  {
    "question": "32.Matndagi eng katta butunlik nima?",
    "answer": "Bob"
  },
  {
    "question": "33.Matndagi ―so'ngi so'z atamasi o'rnida yana qaysi termin ishlatiladi?",
    "answer": "Epilog"
  },
  {
    "question": "34.Badiiy matn nechta turga bo'lib o'rganilladi?",
    "answer": "7"
  },
  {
    "question": "35.Insonning ichki kechinmalarini, voqelikka munosabatini , o'ziga hos pafos bilan ifodalash badiiy matnning qaysi turini yuzaga keltiradi? ",
    "answer": "Ekspressiv matn"
  },
  {
    "question": "36.Badiiy matn turlaridan qaysi birida xotiralar,esdaliklar, ertak va rivoyatlardan unumli foydalaniladi?",
    "answer": "Hikoya matn"
  },
  {
    "question": "37.Kimgadir pand-nasihat qilish. Ularni turli hayotiy voqealar vositasida tarbiyalash yoki ulardan to'g'ri xulasalar chiqarishga o'rgatish badiiy matnning qaysi turida uchraydi?",
    "answer": "Didaktik matn"
  },
  {
    "question": "38.Badiiy matnning hikoya maznunli turi yana qanday nom bilan yuritiladi?",
    "answer": "Narrativ matn"
  },
  {
    "question": "39.Ilmiy uslubda bu xususiyat muhim ahamiyatga ega bo'lib, u so'zlarning bir ma'noda qo'llanilishida, terminlardan maqsadli foydalanishda ko'rinadi. Gap imiy uslubning qaysi xususiyati haqida ketmoqda?",
    "answer": " Aniqlik"
  },
  {
    "question": "40.Ilmiy uslubning qaysi bir xususiyatida nutqda izchillikni yuzaga keltiruvchi maxsus o'ziga xos so'z va birikmalarning mavjudligida, abstrakt otlar va terminlarning ko'p qo'llanishida, fikrning bir-biriga mantiqiy bog'llanishida, izchil bayon etilishida, takrorning  ko'p bo'lishida, takrorning ilmiy nutq uchun norma ekanligida aks etadi.",
    "answer": "logik izchillik"
  },
  {
    "question": "41.Ilmiy matnnig qaysi bir xususiyatida borliqdagi narsa-hodisalarni haqqoniy aks ettirish va xolisona baho berish tushuniladi. Ammo bu jarayon nihoyatda qiyin bo'lib, uning reallashuvida faqatgina til birliklariga tayanib ish ko'rish qiyin kechadi?",
    "answer": "obyektivlik"
  },
  {
    "question": "42.Matn hajmiga ko'ra nechta guruhga bo'linadi?",
    "answer": "2"
  },
  {
    "question": "43. Matnni hajm belgisiga ko'ra 2 ga bo'linadi bular qaysi?",
    "answer": "minimal matn va maksimal matn"
  },
  {
    "question": "44.Maksimal matn deyilganda nimalar nazarda tutiladi?",
    "answer": "roman,epopeya,hikoya,qissa"
  },
  {
    "question": "45.Makromatnning eng kichik birligi nima?",
    "answer": "Abzast"
  },
  {
    "question": "46.Hikoya mazmunli matnni yana qanday atash mumkin?",
    "answer": "narrativ matn"
  },
  {
    "question": "47.Ilmiy uslubning qaysi xususiyatida badiiy uslubda bo'lgani kabi narsa va hodisalarni batafsil tasvirlash kerak emas.Bunday holat yuz bersa, o'quvchining diqqati bo'linadi, mavzudan yiroqlashish kuzatiladi",
    "answer": "qisqalik"
  },
  {
    "question": "48.Ilmiy uslubning qaysi xususiyatida fikrlar to'liq gaplar orqali ifodalanadi. So'zlashuv uslubida bo'lgani kabi to'liqsiz gaplardan yoki badiiy uslubdagidek atov gaplardan foydalanish kuzatilmaydi",
    "answer": "to'liqlik"
  },
  {
    "question": "49.Davlat tili to'g'risidagi qonun necha moddadan iborat?",
    "answer": "24"
  },
  {
    "question": "50.Kurs ishining qaysi qismida boblar, paragraflar va ilovalar sahifalar ko'rsatib o'tiladi?",
    "answer": "mundarijada"
  },
  {
    "question": "51.Matn deb nimaga aytiladi?",
    "answer": "Matn-nutq ko'rinishi bo'lib,vazifasi jihatdan tugagan nutqiy butunlikdir"
  },
  {
    "question": "52.Kurs ishini yozish davomida erishmoqchi bo'lgan natijaning tavsifi bu-----",
    "answer": "kurs ishining maqsadi"
  },
  {
    "question": "53.Kurs ishining qaysi qismida mavzu bo'yicha barcha ma'lumotlarni to'liq va izchil taqdim etish, shaxsiy fikringizni bildirish va haqiqiy misollar va dalillarni keltirish muhimdir.",
    "answer": "kirish "
  },
  {
    "question": "54.Kurs ishining qaysi qismida barcha natijalar umumlashtiriladi. Unda barcha xulosalar, kirish qismida berilgan savollarga javoblar, kurs ishining zamonaviy fandagi o'rni yoritiladi, talaba ishining ijobiy va salbiy tomonlari baholanadi",
    "answer": "xulosa"
  },
  {
    "question": "55. Ovozli grafikalar, jadvallar, diagrammalar, fotosuratlar kurs ishining qaysi qismida beriladi.",
    "answer": "ilovalar"
  },
  {
    "question": "56.Kurs ishining qaysi qismida asosiy ma'lumotlar: mavzu, mutaxassislik, muallifning ismi, rahbarning familiyasi va bosh harflari, shuningdek yil va shahar kabilar ko'rsatiladi?",
    "answer": "Sarlavha satrida"
  },
  {
    "question": "57.Kurs ishi yozishda qo'yiladigan talablarni aniqlang.",
    "answer": "14punktli, Times new roman shrift, 1,5 interval"
  },
  {
    "question": "58.Doklad qadimgi rum tilida qanday ma'noni anglatadi?",
    "answer": "taxlash"
  },
  {
    "question": "59.Doklad so'zi ingliz tilidan olinganda qanday ma'noni ifodalaydi?",
    "answer": "hisobot"
  },
  {
    "question": "60. Doklad so'zi lotin tilidan olinganda qanday ma'noni bildiradi?",
    "answer": "o'qish"
  },
  {
    "question": "61.Biror bir mavzu yuzasidan og'zaki yoki yozma taqdimot qilish bu--------",
    "answer": "doklad"
  },
  {
    "question": "62.Matn bo'lishi uchun komponentlar orasida qanday bog'lanishlar bo'lishi shart?",
    "answer": " mazmuniy va sintaktik"
  },
  {
    "question": "63.O'zidan yuqori lavozimli shaxsga, rahbarga og'zaki yoxud yozma berilgan axborot bu---",
    "answer": "doklad"
  },
  {
    "question": "64.Dokladga qo'yiladigan talablarni aniqlang.",
    "answer": "barcha javoblar to'g'ri"
  },
  {
    "question": "65.Sintaksisning o'rganuvchi obyektlari sifatida matn nechinchi planda turadi?",
    "answer": "1-plan"
  },
  {
    "question": "66.Ma'ruza necha xil bo'ladi?",
    "answer": "2"
  },
  {
    "question": "67.Ma'ruzaning qanday ko'rinishlari mavjud?",
    "answer": "monolog, dialog"
  },
  {
    "question": "68.Makromatnning eng kichik birligi nima?",
    "answer": "Abzats"
  },
  {
    "question": "69.Tezis so'zi qanday ma'noni anglatadi?",
    "answer": " yunoncha isbot, qoida"
  },
  {
    "question": "70.Sharh so'zi qanday ma'noni anglatadi?",
    "answer": "arabcha tushuntirish, izohlash"
  },
  {
    "question": "71.Dokladning qanday turlari mavjud?",
    "answer": "barcha javoblar to'g'ri"
  },
  {
    "question": "72. ______fransuzcha so'z bo'lib, yozilgan, aytilgan yoki o'qilgan narsaning qisqa holatda aks ettirish, qisqacha xulosa, biror narsaning yakuniy natijasidir.",
    "answer": "rezyume"
  },
  {
    "question": "73.Annotatsiya so'zi qaysi tildan olingan va qanday ma'noni bildiradi?",
    "answer": "lotincha qayd, eslatma"
  },
  {
    "question": "74.Paragraph so'zi qaysi tildan olingan va qanday ma'noni bildiradi?",
    "answer": " yunoncha yonma yon yozilgan"
  },
  {
    "question": "75.Referat so'zi qaysi tildan olingan va qanday ma'noni bildiradi?",
    "answer": "lotincha xabar qilmoq"
  },
  {
    "question": "76.Esse so'zi ingliz tilidan olinganda qanday ma'noni ifodalaydi?",
    "answer": "intilish, ijodiy sinov"
  },
  {
    "question": "77.Esse so'zi lotinchadan olinganda qanday ma'noni bildiradi?",
    "answer": "o'ylash"
  },
  {
    "question": "78.Esse so'zi fransuz tilidan olinganda qanday ma'noni ifodalaydi?",
    "answer": " tajriba, sinov"
  },
  {
    "question": "79. ____bu fikr, g'oya, niyat yoki biror narsa qilishning maqsadi. Umumiy ma'noda, biror narsa qilish uchun ishlab chiqilgan rejadir.",
    "answer": "loyiha"
  },
  {
    "question": "80.Loyiha so'zi lotin tilidan olinganda qanday ma'noni anglatadi?",
    "answer": "oldinga o'tish"
  },
  {
    "question": "81.Badiiy uslubga xos xususiyat qaysi javobda berilgan ?",
    "answer": "Obrazlilik , estetik ta'sir etish vazifasi"
  },
  {
    "question": "82.Qonun matnlari, farmonlar, buyruqlar, ariza… kabi hujjatlar qaysi uslubda yoziladi ?",
    "answer": "Rasmiy uslubda"
  },
  {
    "question": "83.Hujjat matni qanday talablar asosida ko'riladi ?",
    "answer": "Barcha javoblar to'g'ri"
  },
  {
    "question": "84.Ilmiy uslubga xos xususiyat ?",
    "answer": " Atamalarni ko'proq qo'llash"
  },
  {
    "question": "85.So'zlashuv uslubi nechaga bo'linadi va qaysilar? ",
    "answer": "2 ga oddiy va adabiy so'zlashuv uslubi"
  },
  {
    "question": "86.Publitsistika so'zi qaysi tildan olingan va qanday ma'noni bildiradi?",
    "answer": "lotincha xalq,omma"
  },
  {
    "question": " 87.Publitsistik uslub o'z ichida nechaga bo'linadi va ular qaysilar?",
    "answer": "2ga og'zaki va yozma"
  },
  {
    "question": "88.Nutq uslublarini o'rganuvchi tilshunoslik bo'limiga nima deyiladi?",
    "answer": "Stilistika"
  },
  {
    "question": "89.Nechta nutq uslubi bor?",
    "answer": "5ta "
  },
  {
    "question": "90.Oilada, ko`cha-ko`yda kishilarning fikr almashish jarayonida qo`llanadigan nutq uslubi qanday uslub sanaladi.",
    "answer": "So'zlashuv"
  },
  {
    "question": "91.Qaysi uslubning eng muhim jihati ta'sir ko'rsatish ya'ni ekspressivlikdir?",
    "answer": "Badiiy"
  },
  {
    "question": " 92,Qaysi uslubning eng muhim jihati atamalardan keng foydalanish va aniqlik hisoblanadi? ",
    "answer": "Ilmiy"
  },
  {
    "question": "93.Qaysi uslubning eng muhim jihati erkinligi, shevalardan keng foydalanish hisoblanadi? ",
    "answer": "So'zlashuv"
  },
  {
    "question": "94.Qaysi uslubda tavsiya qilinsin, ozod etilsin, tadbiq etilsin kabi bir xil qolipligaplardan foydalaniladi?",
    "answer": "Rasmiy"
  },
  {
    "question": "95.Qaysi usubda badiiy adabiyot, ya'ni badiiy asarlarga xos bo`lib, unda badiiylik, ifodaviylik, ta'sirchanlik kuchli bo'ladi?",
    "answer": "Badiiy"
  },
  {
    "question": "96.Qaysi uslub davrning eng muhim, dolzarb masalalarini o`quvchilarga, tinglovchilarga,tomoshabinlarga gazeta-jurnal, radio, televideniye orqali yetkazish, ommani jonlantirish kishilarning ongiga atrofda sodir bo`layotgan voqealarni singdirish, va ularning ijtimoiy qarashlarini shakllantirish uchun xizmat qiladi.",
    "answer": "Publitsistik"
  },
  {
    "question": "97.Ijtimoiy-siyosiy masalalarga bag`ishlangan bosh maqolalar, felyeton va pamfletlar,murojaatnomalar, chaqiriqlar, deklaratsiyalar publitsistik uslubning qaysi shakliga mansubdir?",
    "answer": "Yozma"
  },
  {
    "question": "98.So'zlashuv uslubidagi nutq ko'pincha qanday shaklda bo'ladi? ",
    "answer": " Dialogik"
  },
  {
    "question": "99. …….. uslub fan, texnika va ishlab chiqarish bilan bog`liq vazifaviy uslubdir.",
    "answer": " Ilmiy"
  },
  {
    "question": "100.Quyidagi xususiyatlar qaysi uslubga xos?  1) axborotning obyektivligi, aniqligi; 2) fikrning lo`nda, qisqa ifodalanishi; 3)emotsionallik, obrazlilikning bo`lmasligi; 4) atama, chizma, ramz va jadvallarning bo`lishi;",
    "answer": "Ilmiy uslubga"
  },
  {
    "question": "101.Loyiha so'zi arab tilidan olingada qanday ma'noni anglatadi?",
    "answer": "qoida, nizom, dastur"
  },
  {
    "question": "102._______biror bino, inshootni barpo etish maqsadida yoki muayyan bir buyumni yaratishga doir tayyorlangan hujjatlar (hisob-kitoblar, chizma, maketlar) majmui.",
    "answer": "loyiha"
  },
  {
    "question": "103.O'zbek adabiyotida esselar qachondan yaratila boshlandi?",
    "answer": "XX asrning 70-80 –yillarida"
  },
  {
    "question": "104.Har qanday loyiha necha bosqichda amlag oshadi?",
    "answer": "4"
  },
  {
    "question": "105.Esse mustaqil janr sifatida qaysi g'arblik ijodkorning ijodida keltiriladi?",
    "answer": "Montel"
  },
  {
    "question": "106.Mazmuni muayyan sabab yoki masalaga oid tugal tafsilotni yoki aniqlikni talab qilmaydigan individual taassurot va mulohazalardan tarkib topadigan janrni belgilang.",
    "answer": "Esse"
  },
  {
    "question": "107.Ko'pchilikka mo'ljallangan ma'ruzalar, risolalar va darsliklar qanday uslubda yaratiladi?",
    "answer": "Ilmiy uslub"
  },
  {
    "question": "108.Fan sohalariga tegishli atamalar, muayyan shartli belgilar,formulalar, bayon qilish materiali bilan ajralib turadigan uslub qanday nomlanadi?",
    "answer": "Sof ilmiy uslub"
  },
  {
    "question": "109.Maxsus atamalar kam ishlatilib, fikrlarni obrazli va qiziqarli qilib tasvirlash qaysi uslubga xos?",
    "answer": "Ilmiy- ommabop"
  },
  {
    "question": "110.Qaysi uslub tabiat va ijtimoiy hayotdagi barcha narsa va hodisalar haqida aniq, izchil ma'lumot berishda qo'llaniladi?",
    "answer": "Ilmiy uslub "
  },
  {
    "question": "111.Loyihaning qaysi davrida, loyihaning batafsil ish rejasi, moliyaviy rejasi, tadbirlar jadvali va boshqa tafsilotlari ishlab chiqiladi. Loyiha jamoasi tuziladi.",
    "answer": "rejalashtirish"
  },
  {
    "question": "112.Loyihadagi qaysi bosqich davri eng uzun davr bo'lib, barcha tadbirlar shu davrda amalga oshiriladi.",
    "answer": " ijro etish"
  },
  {
    "question": "113.Erkin kompozitsiyali, uncha katta boʻlmagan nasriy asar qanday nomlanadi?",
    "answer": "Esse"
  },
  {
    "question": "114. …badiiy to'qima va fantaziya bo'lmaydi. Unda adabiy til uslublaridan to'g'ri va o'rinli, - ushbu ta'rif qaysi janrga mos tushadi?",
    "answer": "Esse"
  },
  {
    "question": "115.Muallif ma'lum bir nuqtayi nazarni egallaydi va uni himoya qiladi, bunda o'zining nuqtai nazarini qo'llab-quvvatlash uchun bir qancha asoslangan isbotlarni keltiradi. Maqsad – muallif lozim topadigan qarashlarni boshqalarning ham qabul qilishiga ishontirish,- ushbu ta'rifda qaysi atama haqida so'z yuritilyapti?",
    "answer": "Esse"
  },
  {
    "question": "116.“ Yotoqxonada yashovchi talaba yotoqxona nizomida belgilangan tartib- qoidaga rioya qilmagan taqdirda yotoqxonadan chiqariladi”,- ushbu gap nutq uslublarining  qaysi biri uchun xos?",
    "answer": "rasmiy-idoraviy"
  },
  {
    "question": "117.Adabiy tilning ijtimoiy hayotning ma'lum bir doirasida, ma'lim bir nutqiy vaziyatga xoslangan shakli qanday nomlanadi?",
    "answer": "nutq uslublari"
  },
  {
    "question": "118.Quyidagi qaysi gap badiiy uslubga xos?",
    "answer": "Butun osmonni bulutlarning og'ir, qalin namati qoplab olgan."
  },
  {
    "question": "119.Quyidagi qaysi gap ilmiy uslubga xos?",
    "answer": "Stakanning ikkovida ham rangli eritma bor."
  },
  {
    "question": "120.Quyidagi qaysi gap rasmiy-idoraviy uslubga xos?",
    "answer": "Ma'lumotnoma tuman hokimiyatiga ko'rsatilsin."
  },
  {
    "question": "121.Quyidagi qaysi gap so'zlashuv uslubiga xos?",
    "answer": " Hoy, ikkoving qayerga ketyapsan?"
  },
  {
    "question": "122.Badiiy uslubning asosiy vazifasi deganda nima tushuniladi?",
    "answer": "o'quvchiga emotsional ta'sir qilish"
  },
  {
    "question": "123.Publitsistik uslubning asosiy vazifasi deganda nima tushuniladi?",
    "answer": "ma'lum ijtimoiy masalalarga faol munosabatda bo'lish"
  },
  {
    "question": "124.Ilmiy uslubning asosiy vazifasi nima?",
    "answer": " ilmiy bilimlar, kashfiyotlar bilan tanishtirish"
  },
  {
    "question": "125.Quyidagi hujjatlarning qaysi birida da'vat etish o'z aksini topgan bo'ladi?",
    "answer": "Buyruq"
  },
  {
    "question": "126.Atamalar faqat o'z ma'nosida qo'llanib, tub mohiyati ochib beriladigan uslub qaysi?",
    "answer": "Ilmiy"
  },
  {
    "question": " 127. Foydalanilgan adabiyotlar ro'yxatini yozish talabiga mos keluvchi qatorni aniqlang.",
    "answer": " N. Jiyanova, O. Mo'ydinova. Nutq madaniyati. – T.: “Ilm ziyo zakovot”, 2019. 221-bet"
  },
  {
    "question": "128. Arab — ijobiy baho ma'nosini anglatuvchi atama berilgan qatorni aniqlang.",
    "answer": " taqriz"
  },
  {
    "question": "129. _____bu o'qish-o'rganish va tadqiqot, tahlil etish bilan erishiladigan bilim, ko'nikma, ma'lumot.",
    "answer": "ilm"
  },
  {
    "question": "130. _____bu tabiat va jamiyatning taraqqiyot qonuniyatlarini ochib beruvchi hamda o'zi erishgan ",
    "answer": " fan"
  },
  {
    "question": "131. _____bu sаylаnmа bаyоnning bir turi. U bаdiiy, ilmiy, mеtоdik vа bоshqа аsаrlаrgа bеrilgаn ",
    "answer": "taqriz"
  },
  {
    "question": "132. Taqriz turlarini aniqlang",
    "answer": "barcha javoblar to'g'ri"
  },
  {
    "question": "133. _______ muallifi o'quvchiga yangi chiqqan kitob, asar haqida batafsil ma'lumot berishi, uni o'quvchiga ishonchli qabul qildira olishi, asar muallifi va ijodiy jamoani o'z ishlariga ob'ektiv baho berganda asarning kamchiliklarini va uni bartaraf etish yo'llarini ko'rsatgan holda qabul qilishga o'rgatishi talab etiladi.",
    "answer": "taqriz"
  },
  {
    "question": "134. O'zbek adabiyotida taqriz nechanchi davrdan rivojlana boshlagan?",
    "answer": "XX asr boshlaridan"
  },
  {
    "question": "135. Taqrizning qaysi bir turida asar haqida bibliografik ma'lumot beriladi.",
    "answer": "kengaytirilgan annotatsiya tipidagi taqrizda "
  },
  {
    "question": "136. Taqrizning qaysi bir ko'rinishida taqrizchi o'z fikr-tuyg'ularini, asarni o'qish jarayonida hosil bo'lgan taasurotlarini lirik tarzda ifodalaydi. ",
    "answer": "Esse xarakteridagi taqrizda "
  },
  {
    "question": "137. Rus tanqidchilari tarixida taqrizning rivojlanish jaraynida qaysi olim taqrizni haqiqiy san'at darajasiga ko'tardi. ",
    "answer": " V.G. Belinskiy"
  },
  {
    "question": " 138. Qaysi janrning vazifasi u yoki bu janrdagi badiiy asarning tahlili orqali uning adabiyjarayon va yozuvchi ijodidagi o'rnini aniqlash , yutuq va kamchiliklarini ko'rsatish, fikrni isbotlash va baholashdan iborat. ",
    "answer": "Taqrizning"
  },
  {
    "question": "139. O'zbek adabiy hayotida chuqur iz qoldirgan taqrizlar yaratgan olimlarni aniqlang.",
    "answer": "barcha javoblar to'g'ri"
  },
  {
    "question": "140. Mirpo'lat Mirzoning “Saylanma”si bosilib chiqishi munosabati bilan yozilgan “Hassos ko'ngil mavjlari” deb nomlangan taqriz muallifi kim?",
    "answer": " E. Ochilov"
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