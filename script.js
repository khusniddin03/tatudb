const data = [
  {
    "question": "Olti sathli kompyuterlarning nolinchi sathi qanday nomlanadi?",
    "answer": "raqamli mantiqiy sath"
  },
  {
    "question": "Olti sathli kompyuterlarning birinchi sathi qanday nomlanadi?",
    "answer": "mikroarxitektura sathi"
  },
  {
    "question": "Olti sathli kompyuterlarning ikkinchi sathi qanday nomlanadi?",
    "answer": "buyruqlar to‘plami arxitekturasi sathi"
  },
  {
    "question": "Olti sathli kompyuterlarning uchinchi sathi qanday nomlanadi?",
    "answer": "operatsion tizim sathi"
  },
  {
    "question": "Olti sathli kompyuterlarning to‘rtinchi sathi qanday nomlanadi?",
    "answer": "assembler sathi"
  },
  {
    "question": "Olti sathli kompyuterlarning beshinchi sathi qanday nomlanadi?",
    "answer": "amaliy tillar dasturchilari sathi"
  },
  {
    "question": "Bir bitli xotira elementi deganda nima tushuniladi?",
    "answer": "trigger"
  },
  {
    "question": "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning eng yuqori qismida joylashgan xotirani ko‘rsating.",
    "answer": "ichki registrlar"
  },
  {
    "question": "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning ikkinchi qatorida joylashgan xotirani ko‘rsating.",
    "answer": "kesh xotira "
  },
  {
    "question": "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning uchinchi qatorida joylashgan xotirani ko‘rsating.",
    "answer": "asosiy xotira "
  },
  {
    "question": "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning to‘rtinchi qatorida joylashgan xotirani ko‘rsating.",
    "answer": "magnitli disk "
  },
  {
    "question": "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning beshinchi qatorida joylashgan xotirani ko‘rsating.",
    "answer": "optik disk "
  },
  {
    "question": "Ma’lumotlarni ketma-ket uzatuvchi universal shinani ko‘rsating.",
    "answer": "USB "
  },
  {
    "question": "Protsessorning IP yoki EIP registri deganda qanday registr tushuniladi?",
    "answer": "buyruqlarni ko‘rsatuvchi registr"
  },
  {
    "question": "SF yoki EFLAGS registri deganda qaysi registr tushuniladi?",
    "answer": "bayroqlar registri"
  },
  {
    "question": "CS registri deganda qaysi registr tushuniladi?",
    "answer": "kodlar yoziladigan segment registri"
  },
  {
    "question": "Umumiy maqsadlar uchun mo‘ljallangan registrlarni ko‘rsating.",
    "answer": "AX, EAX"
  },
  {
    "question": "Pentium 4 protsessori tarkibida nechta tranzistor bor?",
    "answer": 42000000
  },
  {
    "question": "Pentium 4 protsessori mikroarxitekturasi qanday nomlanadi?",
    "answer": "NetBurst"
  },
  {
    "question": "Pentium 4 protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?",
    "answer": 478
  },
  {
    "question": "UltraSPARC III protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?",
    "answer": 1368
  },
  {
    "question": "To‘liq buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?",
    "answer": "CISC"
  },
  {
    "question": "Qisqartirilgan buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?",
    "answer": "RISC"
  },
  {
    "question": "Protsessor siklining birinchi bosqichida nima amalga oshiriladi?",
    "answer": "RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi "
  },
  {
    "question": "Protsessor siklining ikkinchi bosqichida nima amalga oshiriladi?",
    "answer": "RS-ning qiymati orttiriladi"
  },
  {
    "question": "Protsessor siklining uchinchi bosqichida nima amalga oshiriladi?",
    "answer": "buyruq dekodlanadi"
  },
  {
    "question": "Protsessor siklining to‘rtinchi bosqichida nima amalga oshiriladi?",
    "answer": "buyruqni bajarish uchun kerak bo‘ladigan ma’lumotlar xotiradan yoki registrlardan tanlab olinadi"
  },
  {
    "question": "Protsessor siklining beshinchi bosqichida nima amalga oshiriladi?",
    "answer": "buyruq bajariladi"
  },
  {
    "question": "Protsessor siklining oltinchi bosqichida nima amalga oshiriladi?",
    "answer": "natijalarni xotiraga yoki registrlarga yozish"
  },
  {
    "question": "Protsessor siklining yettinchi bosqichida nima amalga oshiriladi?",
    "answer": "keyingi buyruqni bajarish tsikliga o‘tish"
  },
  {
    "question": "Protsessor sikli nechta bosqichidan iborat?",
    "answer": 7
  },
  {
    "question": "Protsessor siklining qaysi bosqichida buyruqni bajarish amalga oshiriladi?",
    "answer": 5
  },
  {
    "question": "Protsessor siklining qaysi bosqichida buyruqni tanlab olish amalga oshiriladi?",
    "answer": 1
  },
  {
    "question": "Protsessor siklining qaysi bosqichida buyruqni dekodlash amalga oshiriladi?",
    "answer": 3
  },
  {
    "question": "Protsessor siklining qaysi bosqichida natijalarini xotiraga yoki registrlarga yozish amalga oshiriladi?",
    "answer": 6
  },
  {
    "question": "Core i7 protsessorida necha sathli kesh qo‘llaniladi?",
    "answer": "3 sathli kesh"
  },
  {
    "question": "Core i7 protsessorlaridagi yadrolar sonini ko‘rsating",
    "answer": "ko‘p"
  },
  {
    "question": "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
    "answer": "ikkilik sanoq sistemasini qo‘llash"
  },
  {
    "question": "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
    "answer": "dastur yordamida boshqarish"
  },
  {
    "question": "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
    "answer": "hotirani ham ma’lumotlarni, ham dasturlarni saqlashda qo‘llash "
  },
  {
    "question": "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
    "answer": "hotira yacheykalari ketma-ket keluvchi adreslarga ega”"
  },
  {
    "question": "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
    "answer": "dasturni bajarishda shartli o‘tish imkoniyati"
  },
  {
    "question": "RISC qisqartmasi nimani anglatadi?",
    "answer": " Qisqartirilgan buyruqlar to‘plamiga ega kompyuter"
  },
  {
    "question": "CISC qisqartmasi nimani anglatadi?",
    "answer": " To‘lik buyruqlar to‘plamiga ega kompyuter"
  },
  {
    "question": "Kompyuterning minimal tarkibiga nimalar kiradi?",
    "answer": " monitor, tizimli blok, klaviatura "
  },
  {
    "question": "Boshqarish shinasi nima uchun mo‘ljallangan?",
    "answer": " boshqarish signallarini uzatish uchun"
  },
  {
    "question": "Ma’lumotlar shinasi nima uchun mo‘ljallangan?",
    "answer": " ishlanayotgan axborotni uzatish uchun"
  },
  {
    "question": "Videoadapterning ko‘rsata olish imkoniyati deganda nima tushiniladi?",
    "answer": " gorizantal va vertikal bo‘ylab chiqarib bera olishi mumkin bo‘lgan nuqtalarining soni"
  },
  {
    "question": "Vinchester nima uchun mo‘ljallangan?",
    "answer": " Ma’lumotlarni doimiy saqlash uchun"
  },
  {
    "question": "Modem qanday vazifani bajaradi?",
    "answer": " Analogli signalni raqamli signalga va raqamli signalni analogli signalga  aylantirish uchunuzgartiradi."
  },
  {
    "question": "Kompyuterning ish samaradorligi nimaga bog‘liq? ",
    "answer": " Protsessor chastotasiga"
  },
  {
    "question": "Takt chastotasining o‘lchov birligi nima? ",
    "answer": " MGts"
  },
  {
    "question": "XX asrning 40 yillarida hisoblash mashinalarining ishlash printsiplari kim tomonidan tavsiflangan?",
    "answer": " Jon Fon Neyman tomonidan"
  },
  {
    "question": "CISC qanday arxitektura turi hisoblanadi?",
    "answer": "To'liq buyruqlar to'plami bilan"
  },
  {
    "question": "RISC arxitekturasining qanday turi?",
    "answer": "Qisqartirilgan ko'rsatmalar to'plami"
  },
  {
    "question": "Ko'p protsessorli tizimlarda xotira qanday tashkil etilgan?",
    "answer": "Taqsimlangan va umumiy xotira"
  },
  {
    "question": "Umumiy xotiraga ega UMA multiprotsessorli tizimlarining turlarini belgilang",
    "answer": "SMP, PVP"
  },
  {
    "question": "SMP xotira va PVP bilan ko'p protsessorli tizim qanday?",
    "answer": "umumiy xotira bilan"
  },
  {
    "question": "Taqsimlangan xotira NUMA multiprotsessorli tizim turlarini belgilang",
    "answer": "NCC-NUMA, CC-NUMA, COMA"
  },
  {
    "question": "Ko'p kompyuterli tizimlarning turlarini ko'rsating",
    "answer": "Klasterlar, MPPlar"
  },
  {
    "question": "Klasterlar va MPPlar qanday turdagi tizimlardir?",
    "answer": "Ko'p kompyuter"
  },
  {
    "question": "Buyruqlar darajasidagi parallelizm nima?",
    "answer": "Bir nechta buyruqlarning bir qismini bir vaqtning o'zida bajarishning potentsial imkoniyati"
  },
  {
    "question": "Buyruqlar bajarilishining potentsial o'zaro kelishishi nima deb ataladi?",
    "answer": "buyruq darajasidagi parallellik"
  },
  {
    "question": "Buyruqlar darajasidagi parallelizmning g'oyasi nima?",
    "answer": "konveyer g'oyasi bo'yicha"
  },
  {
    "question": "Superskalar protsessor nechta funktsiya blokiga ega",
    "answer": 5
  },
  {
    "question": "Qaysi protsessorlar NetBurst mikroarxitekturasidan foydalanadi?",
    "answer": "Pentium 4"
  },
  {
    "question": "Dekompozitsiya nima?",
    "answer": "Bu vazifani segmentlarga bo'lish uchun ishlov berishni anglatadi"
  },
  {
    "question": "Core i7 protsessorida nechta kesh darajasi mavjud?",
    "answer": 3
  },
  {
    "question": "Qanday turdagi xotira operativ xotira deb ataladi?",
    "answer": "tasodifiy kirish xotira qurilmasi (RAM)"
  },
  {
    "question": "Intel Core Duo protsessorining vazifasi nima?",
    "answer": "Bitta chipga joylashtirilgan ikkita yadroli protsessor"
  },
  {
    "question": "Pentium II, Pentium Pro va Pentium III protsessorlari qanday mikroarxitekturaga asoslangan?",
    "answer": "Mikroarxitektura P6"
  },
  {
    "question": "Nahalem mikroarxitekturasi qaysi protsessorga tegishli?",
    "answer": "Intel Core i7"
  },
  {
    "question": "2011-yilda Intel Core i7 protsessorida qanday arxitektura ishlatilgan?",
    "answer": "Sandy-Bridge   "
  },
  {
    "question": "Intel Core i7 protsessorida nechta bit bor?",
    "answer": 64
  },
  {
    "question": "UltraSPARC III protsessorini qaysi kompaniya ishlab chiqaradi?",
    "answer": "SUN"
  },
  {
    "question": "UltraSPARC III protsessorida nechta quvur liniyasi mavjud?",
    "answer": 6
  },
  {
    "question": "Shinalar kengligi deganda nima tushuniladi?",
    "answer": "Bir soatda o'tadigan bitlar soni"
  },
  {
    "question": "Pentium asosidagi kompyuterlarning asosiy xotirasidagi baytlar qanday tartibda joylashgan?",
    "answer": "teskari tartibda"
  },
  {
    "question": "SPARC protsessorlari oilasiga asoslangan kompyuterlarning asosiy xotirasida baytlar qanday tartiblangan?",
    "answer": "to'g'ri tartibda"
  },
  {
    "question": "Asosiy xotirada to'g'ri tartibda baytlarga ega bo'lgan kompyuter protsessorini ko'rsating.",
    "answer": "UltraSPARC III"
  },
  {
    "question": "Asosiy xotirada teskari tartibda baytlarga ega bo'lgan kompyuter protsessoriga ishora qiling.",
    "answer": "Pentium 4"
  },
  {
    "question": "Xuddi shu xotira panelida joylashgan xotira modullarining nomlari qanday?",
    "answer": "SIMM"
  },
  {
    "question": "Xotira panelining ikkala tomonida joylashgan xotira modullari qanday nomlanadi?",
    "answer": "DIMM"
  },
  {
    "question": "D-flip-floplar asosida RAM qurilmasini belgilang.",
    "answer": "Statik xotira (SRAM)"
  },
  {
    "question": "Ma'lumotni o'chirish va qayta yozish mumkin bo'lgan dasturlashtiriladigan faqat o'qish uchun xotira qurilmasini belgilang.",
    "answer": "EPROM"
  },
  {
    "question": "Kompyuter tashqi komponentlar bilan bog'lanishi mumkin bo'lgan shinani belgilang.",
    "answer": "PCI"
  },
  {
    "question": "Ma'lumotlarni ketma-ket uzatuvchi universal shinani belgilang.",
    "answer": "USB"
  },
  {
    "question": "Monitorda rang yaratish uchun qanday ranglar ishlatiladi?",
    "answer": "qizil, ko'k, yashil"
  },
  {
    "question": "USB qisqartmasi nimani anglatadi?",
    "answer": "universal seriyal bus"
  },
  {
    "question": "Dasturning har bir satrini tahlil qiladigan va darhol ishga tushadigan tizim dasturi nima?",
    "answer": "Tarjimon"
  },
  {
    "question": "Butun dasturni tahlil qilib, keyin uni bajarish uchun kompyuter xotirasiga yozuvchi tizimli dastur qanday nomlanadi?",
    "answer": "Kompilyator"
  },
  {
    "question": "Qaysi qurilma tashqi qurilma va shina o'rtasidagi aloqani o'rnatadi?",
    "answer": "boshqaruvchi"
  },
  {
    "question": "Vinchester nima uchun?",
    "answer": "Ma'lumotlar va dasturlarni doimiy saqlash uchun"
  },
  {
    "question": "Modem nima qiladi?",
    "answer": "Signalni qabul qilish va uzatish uchun aylantiring."
  },
  {
    "question": "Shaxsiy kompyuterlar uchun shinalarning maqsadi nima?",
    "answer": "Kompyuter komponentlari va qurilmalarini ulash"
  },
  {
    "question": "Kompyuter yoqilganda dastlabki sinov dasturi qayerda?",
    "answer": "BIOS chipida"
  },
  {
    "question": "Kompyuterda ma'lumotlar qanday ko'rinadi?",
    "answer": "ikkilik shaklda"
  },
  {
    "question": "OpenMP texnologiyasi bilan qanday tizimlar dasturlashtirilgan?",
    "answer": "Umumiy xotiraga ega tizimlar uchun"
  },
  {
    "question": "Umumiy xotira tizimlari uchun mo'ljallangan parallelizatsiya kutubxonasini belgilang.",
    "answer": "OpenMp"
  },
  {
    "question": "Protsessor yadrosiga eng yaqin keshga ishora qiling",
    "answer": "L1"
  },
  {
    "question": "L1 keshining nechta turi mavjud?",
    "answer": 2
  },
  {
    "question": "L1 keshining 2 turini tanlang",
    "answer": "Ma'lumotlar va buyruqlar"
  },
  {
    "question": "Virtual yadroli protsessorlarda ishlatiladigan texnologiyani belgilang.",
    "answer": "Hyper Threading"
  },
  {
    "question": "Hisoblash tezligiga ijobiy ta'sir ko'rsatadigan arxitekturani ko'rsating.",
    "answer": "Konveyer"
  },
  {
    "question": "Amdal qonunining talqini qayerda?",
    "answer": "Tezlik (samaradorlik) yadrolar soniga bog'liq"
  },
  {
    "question": "Tezlik (samaradorlik) yadrolar soniga bog'liq degan qonunni aniqlagan olimning ismini toping.",
    "answer": "Amdal"
  },
  {
    "question": "Ish samaradorligini oshirish uchun ultra tez xotirani belgilang",
    "answer": "Kesh xotirasi"
  },
  {
    "question": "Parallel ishlov berish arxitekturasini tanlang",
    "answer": "MIMD"
  },
  {
    "question": "Seriyali ma'lumotlarni qayta ishlash uchun to'g'ri arxitekturani tanlang",
    "answer": "SISD"
  },
  {
    "question": "Buyruqlarni parallel qayta ishlash uchun mos arxitekturani tanlang.",
    "answer": "MIMD"
  },
  {
    "question": "AMD protsessorlarining kamchiliklarini to'g'ri ko'rsatadigan javobni tanlang",
    "answer": "Juda yuqori qizib ketish"
  },
  {
    "question": "OpenMP kutubxonasi bilan bog'liq buyruqlarni qanday ishlatish kerak?",
    "answer": " #pragma"
  },
  {
    "question": "Hisoblash oqimida necha bosqich amalga oshiriladi?",
    "answer": 5
  },
  {
    "question": "Simmetrik multiprosessing nima?",
    "answer": "bir xil turdagi protsessorlarning integratsiyalashgan tizimi"
  },
  {
    "question": "Bir turdagi protsessorlarning birlashtirilgan tizimi qanday nomlanadi?",
    "answer": "Simmetrik ko'p ishlov berish"
  },
  {
    "question": "Hyper Threading texnologiyasidan maqsad nima?",
    "answer": "bir nechta iplarni yaratish uchun"
  },
  {
    "question": "Intel protsessorlarida qanday hisoblash texnologiyalari keng qo'llaniladi?",
    "answer": "Hyper Threading"
  },
  {
    "question": "VLIW arxitekturasining asosiy vazifasi nimadan iborat?",
    "answer": "Uzoq buyruq so'zi uzunligi"
  },
  {
    "question": "VLIW arxitekturasida vazifa qaysi bosqichda shakllanadi?",
    "answer": "Kompilyatsiya vaqtida"
  },
  {
    "question": "OpenMP kutubxonasida sikllarni parallel taqsimlash qaysi buyruq asosida amalga oshiriladi?",
    "answer": "#pragma omp parallel uchun"
  },
  {
    "question": "Superkompyuterlarning hisoblash tezligi uchun o'lchov birligi?",
    "answer": "FLOPS"
  },
  {
    "question": "TOP - 500 tizimi nima?",
    "answer": "Kompyuter tizimining tezligini baholaydi"
  },
  {
    "question": "Vektorli quvurli kompyuter qaysi arxitekturaga tegishli?",
    "answer": "SIMD"
  },
  {
    "question": "Ko'p protsessorli tizimlar qanday arxitekturaga tegishli?",
    "answer": "MIMD"
  },
  {
    "question": "L1 keshi qayerda joylashgan?",
    "answer": "protsessor ichida"
  },
  {
    "question": "Protsessor ichida joylashgan kesh xotirasini belgilang",
    "answer": "L1, L2, L3"
  },
  {
    "question": "L 2 kesh xotirasi qayerda ?",
    "answer": "protsessor ichida"
  },
  {
    "question": "L 3 keshi qayerda ?",
    "answer": "protsessor ichida"
  },
  {
    "question": "Protsessorlardagi vazifalarni parallellashtirish texnologiyasini ko'rsating?",
    "answer": "Ko'p vazifalarni bajarish"
  },
  {
    "question": "Protsessorlarning “tezlashtirish qobiliyati” deganda qanday texnologiya tushuniladi?",
    "answer": "turbo kuchaytirgich"
  },
  {
    "question": "Nvidia -ning parallel texnologiyasini tanlang",
    "answer": "CUDA"
  },
  {
    "question": "CUDA - bu qaysi kompaniya tomonidan ishlab chiqilgan texnologiya?",
    "answer": "Nvidia"
  },
  {
    "question": "Qaysi arxitektura matritsalarni ko'paytirish jarayonlaridan keng foydalanadi?",
    "answer": "MIMD"
  },
  {
    "question": "GPU ishlab chiqishda qaysi kompaniyalar yetakchi?",
    "answer": "AMD, Nvidia"
  },
  {
    "question": "Taqsimlangan tizimlarda keng ko'lamli muammoni hal qilish uchun nima qilinmoqda?",
    "answer": "vazifa kompyuterlar o'rtasida taqsimlanadi."
  },
  {
    "question": "Qaysi turdagi kompyuter Core i7 protsessoridan foydalanadi?",
    "answer": "shaxsiy kompyuterlar"
  },
  {
    "question": "Anakartdagi shimoliy ko'prik quyidagilarni qo'llab-quvvatlaydi:",
    "answer": "Tizim avtobusi, xotira, video adapter"
  },
  {
    "question": "Qaysi kesh darajasi eng tez?",
    "answer": "Birinchi"
  },
  {
    "question": "Protsessor boshqaruv blokining vazifasi nimadan iborat?",
    "answer": "xotiradan buyruqni yuklaydi va uning shifrini ochadi"
  },
  {
    "question": "Protsessorning arifmetik mantiq birligi qanday vazifani bajaradi?",
    "answer": "arifmetik-mantiqiy amallarni bajaradi"
  },
  {
    "question": "Umumiy maqsadli registrlar qanday vazifani bajaradi?",
    "answer": "operandlarning o'zini yoki natijani yoki ushbu operandlar yoki natijalarga ko'rsatgichlarni saqlang"
  },
  {
    "question": "OMAP4430 protsessori qanday kompyuter turi uchun ishlatiladi ?",
    "answer": "mobil kompyuterlar"
  },
  {
    "question": "Pentium protsessorini yaratish uchun qanday turdagi kompyuterlardan foydalaniladi?",
    "answer": "shaxsiy kompyuterlar"
  },
  {
    "question": "Quyidagilardan qaysi biri fon Neyman tamoyillariga mos keladi?",
    "answer": "Ikkilik sanoq tizimining qo'llanilishi"
  },
  {
    "question": "Quyidagilardan qaysi biri fon Neyman tamoyillariga mos keladi?",
    "answer": "dasturiy ta'minotni boshqarish"
  },
  {
    "question": "\"Uskuna\" nima?",
    "answer": "kompyuter texnikasi"
  },
  {
    "question": "\"Dasturiy ta'minot \" Nima ?",
    "answer": "kompyuter dasturi"
  },
  {
    "question": "Quyidagilardan qaysi biri dasturiy vosita emas?",
    "answer": "Markaziy protsessor"
  },
  {
    "question": "Qaysi qurilma tashqi qurilma va shina o'rtasidagi aloqani o'rnatadi?",
    "answer": "boshqaruvchi"
  },
  {
    "question": "Dastlabki kompyuter test dasturi qayerda yozilgan?",
    "answer": "BIOS chipida"
  },
  {
    "question": "Shaxsiy kompyuterda ma'lumotlarni qayta ishlash uchun qanday qurilma ishlatiladi?",
    "answer": "protsessorda"
  },
  {
    "question": "1940-yillarda kompyuterlar qanday ishlashini kim tasvirlab bergan?",
    "answer": "Jon fon Neyman"
  },
  {
    "question": "Kompyuter o'chirilganda kompyuterdagi ma'lumotlar qaysi xotiradan yo'q qilinadi?",
    "answer": "RAMda"
  },
  {
    "question": "Dastur...?",
    "answer": "Ma'lumotlarni qayta ishlash jarayonida kompyuter bajaradigan buyruqlar ketma-ketligi."
  },
  {
    "question": "Bu ushbu dastur uchun ma'lumotlarni qayta ishlash qurilmasimi?",
    "answer": "Markaziy protsessor"
  },
  {
    "question": "Qayta ishlash jarayonida dasturiy ta'minot va ma'lumotlar qayerda joylashgan?",
    "answer": "RAM"
  },
  {
    "question": "Bir soniyadagi tebranishlar soni qanday nomlanadi?",
    "answer": "Soat chastotasi"
  },
  {
    "question": "Vektorli va matritsali ishlov berish tuzilmalariga ega hisoblash tizimlari sinfini aniqlang.",
    "answer": "SIMD"
  },
  {
    "question": "Ko'p protsessorli tizimlar qaysi sinfga tegishli ekanligini aniqlang",
    "answer": "MIMD"
  },
  {
    "question": "Bir nechta buyruqlar va bitta ma'lumotlar oqimiga ega sinfni belgilang",
    "answer": "MISD"
  },
  {
    "question": "Bir nechta buyruqlar va bir nechta ma'lumotlar oqimi bilan sinfni aniqlang",
    "answer": " MIMD"
  },
  {
    "question": "Bitta buyruq va bitta ma'lumot oqimiga ega sinfni belgilang",
    "answer": "SISD"
  },
  {
    "question": "Bitta buyruq va bir nechta ma'lumotlar oqimiga ega sinfni belgilang",
    "answer": "SIMD"
  },
  {
    "question": "Ko'p kompyuter tizimlari qaysi sinfga tegishli ekanligini aniqlang",
    "answer": "MIMD"
  },
  {
    "question": "Ko'p protsessorli hisoblash tizimlarini aniqlang",
    "answer": "UMA, COMA, NUMA"
  },
  {
    "question": "Kompyuter nima?",
    "answer": "Ma'lumotlarni qayta ishlash va kerakli natijani olish imkonini beruvchi texnik vositalar to'plami"
  },
  {
    "question": "EHMlarning birinchi avlodi (1-avlod) qaysi davrga tegishli?",
    "answer": "1950-1960 yillar"
  },
  {
    "question": "EHMlarning ikkinchi avlodi qanday davrga to‘g‘ri keladi?",
    "answer": "1960-1970 yillar"
  },
  {
    "question": "Kompyuterlarning uchinchi avlodi qaysi davrga tegishli?",
    "answer": "1970-1980 yillar"
  },
  {
    "question": "EHMlarning to‘rtinchi avlodi qaysi davrga tegishli?",
    "answer": "1980–1990 yillar"
  },
  {
    "question": "Birinchi kompyuter arxitekturasini yaratgan olimning ismini ayting",
    "answer": "fon Neumann"
  },
  {
    "question": "Fon Neyman kompyuter arxitekturasining asosiy qismlari nimalardan iborat?",
    "answer": "5 bu"
  },
  {
    "question": "Parallel hisoblash tizimlarining to'g'ri ta'rifini ko'rsating?",
    "answer": "Parallel ravishda ma'lumotlarni qayta ishlaydigan hisoblash asboblari to'plami"
  },
  {
    "question": "Sinfdagi ko'rsatmalarga va parallel ishlov berish ma'lumotlariga mos keladigan Flynn tasnifi?",
    "answer": "MIMD"
  },
  {
    "question": "Tarqalgan ruxsatga ega xotira arxitekturasini ko'rsating?",
    "answer": "NUMA"
  },
  {
    "question": "Parallel dasturlash uchun maxsus texnologiyalarni belgilang.",
    "answer": "CUDA"
  },
  {
    "question": "Tarqalgan xotira hisoblash tizimlari uchun mo'ljallangan parallel dasturlash kutubxonasini tanlang.",
    "answer": "MPI"
  },
  {
    "question": "MPI texnologiyasi qaysi tizimlar uchun mo'ljallangan?",
    "answer": "Tarqalgan xotira tizimlari"
  },
  {
    "question": "Grafik axborotni parallel qayta ishlash texnologiyasi ...",
    "answer": " CUDA"
  },
  {
    "question": "Kesh xotira nima?",
    "answer": "ma'lumotlar va dasturlarni vaqtincha saqlash uchun protsessor ichidagi o'ta tezkor xotira"
  },
  {
    "question": "SISD ga mos keltirilgan ta’rifni ko’rsating.",
    "answer": "SISDan’anaviymonoprotsessorga(FonNeymanarxitekturasi)moskeladi. Bitta ma’lumot oqimi bitta buyruq oqimi bilan qayta ishlanadi yoki bir protsessorli kompyuter , qaysiki dasturdan bitta buyruq oqimi tashkil qilinadigan."
  },
  {
    "question": "SIMD ga mos keltirilgan ta’rifni ko’rsating.",
    "answer": "Har bir buyruq turli xil protsessorlar tomonidan turli xil ma'lumotlarda amalga oshiriladi, ya'ni bir xil ma'lumotlarga ega bo'lgan bir xil turdagi protsessual oqimlarning bir nechta ishlov berish birliklarida bajariladi. Ushbu guruh qatorlarni (massivlar) qayta ishlash mashinalariga bag'ishlangan. Ba'zan vektor protsessorlari ham ushbu guruhning bir qismi sifatida ko'rib chiqilishi mumkin."
  },
  {
    "question": "MISD ga mos keltirilgan ta’rifni ko’rsating.",
    "answer": "Har bir protsessor turli xil ko'rsatmalar ketma-ketligini bajaradi. ____ kompyuterlarida bitta ma'lumotlar oqimida bir nechta protsessor birliklari ishlaydi."
  },
  {
    "question": "MIMD ga mos keltirilgan ta’rifni ko’rsating",
    "answer": "Har bir protsessorda alohida dastur mavjud. Har bir dasturdan buyruq oqimi yaratiladi. Har bir buyruq turli xil ma'lumotlar asosida ishlaydi. Ushbu so'nggi mashina turi an'anaviy ko'p protsessorlar guruhini yaratadi. Bir nechta ma'lumot uzatish oqimlarida birnechta protsessor birliklari ishlaydi."
  },
  {
    "question": "Parallel ishlov berishga berilgan qaysi ta'rif to'g'ri?",
    "answer": "umumiy vazifani alohida qismlarini bajarish uchun ikki yoki undan ko’p protsessor bilan ishlashni usuli. Bunda ko’p protsessorlar orasida bitta vazifani turli qismlarga bo’lish orqali dasturni ishga tushirish vaqtini kamaytiradi."
  },
  {
    "question": "Assotsiativ ishlov berishga berilgan qaysi ta'rif to'g'ri?",
    "answer": "ham parallel hisoblash modeli ham dasturlash modeli bo’lib, xotira adresiga qaraganda ma'lumotlar uchun parallel dasturlashdan foydalanishni va xotirada ma'lumotlarni tarkibini qidirish qobiliyatini o'z ichiga oladi."
  },
  {
    "question": "Oqimli ishlov berish/hisoblashga berilgan qaysi ta'rif to'g'ri?",
    "answer": "real vaqt rejimida ko’plab manbalardan keladigan birnechta ma’lumotlar oqimini tahlil qilish uchun yuqori ko’rsatgichli kompyuter tizimlarda foydalaniladi."
  },
  {
    "question": "Компьютера архитектураси деб nimaga aytiladi?",
    "answer": "ахборотни қайта ишлашга мўлжалланган, маълумотларга ишлов бериш усулларини ўз ичига олган, аппарат ва дастурий таъминотнинг ўртасидаги ўзаро боғлиқликни таминловчи консептуаль тузилишига айтилади. "
  },
  {
    "question": "Микроархитектура деб nimaga aytiladi?",
    "answer": "процессорнинг буйруқлар тўплами архитектурасини яратиш усулига айтилади  (SPARC, x86, ... ва ҳоказо)."
  },
  {
    "question": "Буйруқлар тўплами архитектураси деб nimaga aytiladi?",
    "answer": "компютер архитектурасининг дастурлашга жавоб берувчи микропроцессор ядроси қисмига айтилади."
  },
  {
    "question": "Процессор архитектураси nimaga aytiladi?",
    "answer": "ҳисоблаш машинасининг  асосий таркибий қисми бўлиб унинг кейинги архитектурасини аниқлайди ва  IT- мутахассислар учун амалий қўлланиш йўланишини аниқлайди."
  },
  {
    "question": "Napier suyiklari hisoblash moslamasini qachon ixtiro qilingan?",
    "answer": "Shotlandiyalik olim 1617 yilda "
  },
  {
    "question": "Paskal kalkulyatori hisoblash moslamasini qachon ixtiro qilingan?",
    "answer": "1642-yilda fransuz olimi "
  },
  {
    "question": "Leibnz kalkulyatori hisoblash moslamasini qachon ixtiro qilingan?",
    "answer": "1671 yilda nemis matematigi"
  },
  {
    "question": "Analitik dvigatel hisoblash moslamasini qachon ixtiro qilingan?",
    "answer": "1833 yilda Angliyalik olim "
  },
  {
    "question": "Kompyuterlarning birinchi avlodi nechanchi yillarga to’g’ri keladi va u nimalardan tashkil topgan?",
    "answer": "1940-1950 yillar: (Vakuumli quvurlar va plaginlar)"
  },
  {
    "question": "Kompyuterlarning ikkinchi avlodi nechanchi yillarga to’g’ri keladi va u nimalardan tashkil topgan?",
    "answer": "1950-1960 yillar: (Tranzistorlar va partiyalarni topshirish)"
  },
  {
    "question": "Savol",
    "answer": "To'g'ri javob"
  },
  {
    "question": "Olti sathli kompyuterlarning nolinchi sathi qanday nomlanadi?",
    "answer": "raqamli mantiqiy sath"
  },
  {
    "question": "Olti sathli kompyuterlarning birinchi sathi qanday nomlanadi?",
    "answer": "mikroarxitektura sathi"
  },
  {
    "question": "Olti sathli kompyuterlarning ikkinchi sathi qanday nomlanadi?",
    "answer": "buyruqlar to‘plami arxitekturasi sathi"
  },
  {
    "question": "Olti sathli kompyuterlarning uchinchi sathi qanday nomlanadi?",
    "answer": "operatsion tizim sathi"
  },
  {
    "question": "Olti sathli kompyuterlarning to‘rtinchi sathi qanday nomlanadi?",
    "answer": "assembler sathi"
  },
  {
    "question": "Olti sathli kompyuterlarning beshinchi sathi qanday nomlanadi?",
    "answer": "amaliy tillar dasturchilari sathi"
  },
  {
    "question": "Open System Interconnection (OSI) modeli nechta pog'onadan iborat?",
    "answer": "7",
    "noAnswer1": "6",
    "noAnswer2": "5",
    "noAnswer3": "4"
  },
  {
    "question": "+\r\nOSI modeli etalon model asosida hozirgi kunda qaysi tarmoq ishlaydi?",
    "answer": "TCP/IP",
    "noAnswer1": "HTTP",
    "noAnswer2": "FTP",
    "noAnswer3": "UDP"
  },
  {
    "question": "…..bu – mantiqiy bog'lanish tuguni hisoblanib, ular yordamida mantiqiy kerakli protokolga bog'lanish hosil qilinadi",
    "answer": "port",
    "noAnswer1": "transport",
    "noAnswer2": "tarmoq",
    "noAnswer3": "kanal"
  },
  {
    "question": "WAN tarmog'ining to'liq nomi to'g'ri ko'rsatilgan javobni aniqlang.",
    "answer": "Wide Area Network",
    "noAnswer1": "Worl Area Network",
    "noAnswer2": "Wide ARP Network",
    "noAnswer3": "World And Network"
  },
  {
    "question": "UDP protokolida malumotlar qanday nomlanadi?",
    "answer": "datagram",
    "noAnswer1": "kadr",
    "noAnswer2": "segment",
    "noAnswer3": "frame"
  },
  {
    "question": "TCP protokolida malumotlar qanday nomlanadi?",
    "answer": "segment",
    "noAnswer1": "frame",
    "noAnswer2": "datagram",
    "noAnswer3": "kadr"
  },
  {
    "question": "Bu protokol baland tezlikda ishlaydigan jarayonlarda, masalan, videokonferensialarda va tarmoqning maxsus xizmatlari uchun qo'llaniladi?",
    "answer": "UDP",
    "noAnswer1": "HTTP",
    "noAnswer2": "TCP",
    "noAnswer3": "FTP"
  },
  {
    "question": "Paketni xatosiz va yo’qotmasdan, kerakli ketma-ketlikda yetkazib berishni protokoli?",
    "answer": "TCP",
    "noAnswer1": "UDP",
    "noAnswer2": "HTTP",
    "noAnswer3": "FTP"
  },
  {
    "question": "Tarmoq standartlarini tartibga soluvchi qo’mitaning qisqartmasi qaysi javobda berilgan?",
    "answer": "IEEE",
    "noAnswer1": "EEEI",
    "noAnswer2": "ISO",
    "noAnswer3": "WANNET"
  },
  {
    "question": "Ethernet tarmog'iga qaysi kompaniya va qachon asos solgan?",
    "answer": "Xerox (1972)",
    "noAnswer1": "Hewlett Packard(1973)",
    "noAnswer2": "Ethernet DIX(1972)",
    "noAnswer3": "HubNet (1973)"
  },
  {
    "question": "Biror korxona yoki tashkilotning ichida joylashgan kompyuter tarmog'i",
    "answer": "LAN",
    "noAnswer1": "MAN",
    "noAnswer2": "WAN",
    "noAnswer3": "PAN"
  },
  {
    "question": "Simsiz lokal tarmoq bu-",
    "answer": "WLAN",
    "noAnswer1": "VLAN",
    "noAnswer2": "SLAN",
    "noAnswer3": "VPN"
  },
  {
    "question": "Egallagan hududi bo'yicha ko'plab kompyuter tarmoqlarini o'z ichiga olgan tarmoq",
    "answer": "WAN",
    "noAnswer1": "PAN",
    "noAnswer2": "LAN",
    "noAnswer3": "MAN"
  },
  {
    "question": "Uncha katta bo‘lmagan mamlakat shaharlari va viloyatlari foydalanuvchi kompyutеrlarini va lokal tarmoqlarni maxsus aloqa yoki tеlеfon aloqa kanallari orqali birlashtiradigan tarmoq",
    "answer": "MAN",
    "noAnswer1": "WAN",
    "noAnswer2": "PAN",
    "noAnswer3": "LAN"
  },
  {
    "question": "ARPANET tarmog'i qachon tashkil qilingan?",
    "answer": "1969",
    "noAnswer1": "1970",
    "noAnswer2": "1971",
    "noAnswer3": "1973"
  },
  {
    "question": "Tarmoq arxitekturasi nechaga ajraladi?",
    "answer": "2",
    "noAnswer1": "3",
    "noAnswer2": "4",
    "noAnswer3": "5"
  },
  {
    "question": "OSI ning nechanchi bosqichida paketni xatosiz va yo’qotmasdan, kerakli ketma-ketlikda yetkazib berishni amalga oshiradi?",
    "answer": "4",
    "noAnswer1": "5",
    "noAnswer2": "3",
    "noAnswer3": "7"
  },
  {
    "question": "OSI ning nechanchi bosqichida aloqa o’tkazish vaqtini boshqaradi (ya’ni aloqani o’rnatadi, tasdiqlaydi va tamomlaydi) va abonentlarni mantiqiy nomlarini tanish, ularga ega bo’lish huquqini nazorat qilishvazifalari ham bajariladi?",
    "answer": "5",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "7"
  },
  {
    "question": "OSI ning nechanchi bosqichi paketlarni manzillash, mantiqiy nomlarni jismoniy tarmoq manziliga o’zgartirish, teskariga ham va shuningdek paketni kerakli abonentga jo’natish yo’nalishini tanlashga javobgar?",
    "answer": "3",
    "noAnswer1": "4",
    "noAnswer2": "2",
    "noAnswer3": "7"
  },
  {
    "question": "OSI ning nechanchi bosqichi standard ko’rishdagi paket tuzishga va boshlash hamda tamom bo’lishni boshqarish maydonini paket tarkibiga joylashishiga javobgar?",
    "answer": "2",
    "noAnswer1": "4",
    "noAnswer2": "3",
    "noAnswer3": "7"
  },
  {
    "question": "OSI ning nechanchi bosqichi uzatilayotgan axborotni signal kattaligiga kodlashtiradi, uzatish muhitiga qabul qilishni va teskari kodlashni amalga oshirishga javob beradi?",
    "answer": "1",
    "noAnswer1": "2",
    "noAnswer2": "4",
    "noAnswer3": "3"
  },
  {
    "question": "OSI ning nechanchi bosqichi foydalanuvchining ilovasini shaxsan tasdiqlaydi, fayllar uzatishning dasturiy vositalari axborot bazasiga ega bo’lish, elektron pochta vositalari, serverda qayd qilish xizmati uchun mo'ljallangan?",
    "answer": "7",
    "noAnswer1": "5",
    "noAnswer2": "3",
    "noAnswer3": "1"
  },
  {
    "question": "Token ring va Arcnet tarmoqlarida foydalanilgan kabel kategoriyasini aniqlang",
    "answer": "CAT2",
    "noAnswer1": "CAT3",
    "noAnswer2": "CAT4",
    "noAnswer3": "CAT5"
  },
  {
    "question": "Lokal tarmoq 10BASE-T va token ring tarmoqlarida foydalanilgan kabel kategoriyasini aniqlang",
    "answer": "CAT3",
    "noAnswer1": "CAT4",
    "noAnswer2": "CAT5",
    "noAnswer3": "CAT6"
  },
  {
    "question": "Lokal tarmoq 10BASE-T, 100BASE-T4 tarmoqlarida foydalanilgan kabel kategoriyasini aniqlang",
    "answer": "CAT4",
    "noAnswer1": "CAT5",
    "noAnswer2": "CAT6",
    "noAnswer3": "CAT7"
  },
  {
    "question": "Lokal tarmoq 1000BASE-TX tarmog'ida foydalanilgan kabel kategoriyasini aniqlang",
    "answer": "CAT5e",
    "noAnswer1": "CAT6",
    "noAnswer2": "CAT5",
    "noAnswer3": "CAT4"
  },
  {
    "question": "Lokal tarmoq Fast Ethernet va Gigabit Ethernet tarmoqlarida foydalanilgan kabel kategoriyasini aniqlang",
    "answer": "CAT6",
    "noAnswer1": "CAT7",
    "noAnswer2": "CAT4",
    "noAnswer3": "CAT5"
  },
  {
    "question": "Halqaro standart ISO 11801 sertifikatiga ega va ma'lumot uzatish tezligi 10 Gigabit sekundgacha bo'lgan kabel kategoriyasini aniqlang",
    "answer": "CAT7",
    "noAnswer1": "CAT4",
    "noAnswer2": "CAT5",
    "noAnswer3": "CAT8"
  },
  {
    "question": "IPv4 marshrutlangan tarmoq uzunligi necha razryaddan tashkil topgan?",
    "answer": "32",
    "noAnswer1": "64",
    "noAnswer2": "128",
    "noAnswer3": "256"
  },
  {
    "question": "IPv6 marshrutlangan tarmoq uzunligi necha razryaddan tashkil topgan?",
    "answer": "128",
    "noAnswer1": "32",
    "noAnswer2": "64",
    "noAnswer3": "256"
  },
  {
    "question": "Internet tarmog'ini hosil bo'lishiga sababchi bo'lgan tarmoq nomi qaysi javobda berilgan?",
    "answer": "ARPANET",
    "noAnswer1": "INTRANET",
    "noAnswer2": "LOCALNET",
    "noAnswer3": "WORLD ARE NETWORK"
  },
  {
    "question": "Lokal hisoblash tarmog`idagi kompyuterlarning joylashishini ifodalovchi termin qanday nomlanadi?",
    "answer": "Topologiya",
    "noAnswer1": "Tarmoq",
    "noAnswer2": "Qurilma",
    "noAnswer3": "Ma’lumot"
  },
  {
    "question": "Lokal xisoblash tarmoqlarining ma’lumotlar almashinish muxiti qanday turlarga bo`linadi?",
    "answer": "A,B,C javoblar to`g`ri",
    "noAnswer1": "Koaksial va optik tolali kabellar",
    "noAnswer2": "Ikkita simni bir-bir atrofida o`rash natijasida xosil qilingan kabel (Vitaya para)",
    "noAnswer3": "Simsiz aloqa kanali"
  },
  {
    "question": "Kompyuter tarmoqlarida ma’lumotlar dasturlar yordamida kichik bloklarga bo`linadi va bir kompyuterdan ikkinchisiga uzatiladi. Bunday bloklar nima deb ataladi?",
    "answer": "Paket",
    "noAnswer1": "Ma’lumot",
    "noAnswer2": "Axborot",
    "noAnswer3": "segment"
  },
  {
    "question": "Kabelning qaysi turi yorug`lik oqimini uzatishga mo`ljallangandir?",
    "answer": "opriktolali",
    "noAnswer1": "Koaksial kabellar",
    "noAnswer2": "simsiz",
    "noAnswer3": "simli"
  },
  {
    "question": "IEEE 802.03 stardanti asosida tashkil qilingan tarmoq bir qismidagi abonentlarning maksimal soni",
    "answer": "100 tagacha",
    "noAnswer1": "cheksiz",
    "noAnswer2": "200 tagacha",
    "noAnswer3": "200-300 ta"
  },
  {
    "question": "IEEE 802.03 stardanti asosida tashkil qilingan tarmoq abonentlarining maksimal soni",
    "answer": "1024 tagacha",
    "noAnswer1": "cheksiz",
    "noAnswer2": "201 tagacha",
    "noAnswer3": "200-300 ta"
  },
  {
    "question": "Ethernet tarmoq paketida qabul qiluvchi va jo'natuvchi manzili necha baytdan tashkil topgan?",
    "answer": "6",
    "noAnswer1": "8",
    "noAnswer2": "2",
    "noAnswer3": "4"
  },
  {
    "question": "Ethernet tarmoq paketidagi axborot maydoniga qancha axborot kirishi mumkin?",
    "answer": "46 baytdan 1500 baytgacha",
    "noAnswer1": "0 baytdan 1024 baytgacha",
    "noAnswer2": "1501 baytdan 2000 baytgacha",
    "noAnswer3": "2001 baytdan 3000 baytgacha"
  },
  {
    "question": "OSI modeli nechta pog'onadan tashkil topgan?",
    "answer": "7",
    "noAnswer1": "5",
    "noAnswer2": "6",
    "noAnswer3": "3"
  },
  {
    "question": "OSI modeli 1-pog'onasi nomi?",
    "answer": "fizik",
    "noAnswer1": "kanal",
    "noAnswer2": "tarmoq",
    "noAnswer3": "transport"
  },
  {
    "question": "OSI modeli 2-pog'onasi nomi?",
    "answer": "kanal",
    "noAnswer1": "tarmoq",
    "noAnswer2": "transport",
    "noAnswer3": "taqdim etish"
  },
  {
    "question": "OSI modeli 3-pog'onasi nomi?",
    "answer": "tarmoq",
    "noAnswer1": "transport",
    "noAnswer2": "amaliy",
    "noAnswer3": "kanal"
  },
  {
    "question": "OSI modeli 4-pog'onasi nomi?",
    "answer": "transport",
    "noAnswer1": "seans",
    "noAnswer2": "kanal",
    "noAnswer3": "amaliy"
  },
  {
    "question": "OSI modeli 5-pog'onasi nomi?",
    "answer": "seans",
    "noAnswer1": "kanal",
    "noAnswer2": "tarmoq",
    "noAnswer3": "taqdim etish"
  },
  {
    "question": "OSI modeli 6-pog'onasi nomi?",
    "answer": "taqdim etish",
    "noAnswer1": "seans",
    "noAnswer2": "amaliy",
    "noAnswer3": "kanal"
  },
  {
    "question": "OSI modeli 7-pog'onasi nomi?",
    "answer": "amaliy",
    "noAnswer1": "kanal",
    "noAnswer2": "tarmoq",
    "noAnswer3": "transport"
  },
  {
    "question": "OSI modelining transport pog'onasida qaysi protokollar ishlatiladi?",
    "answer": "TCP, UDP",
    "noAnswer1": "IPv4 va IPv6",
    "noAnswer2": "HTTP, FTP, SMTP",
    "noAnswer3": "PPP, IEEE 802.22, Ethernet, DSL, ARP"
  },
  {
    "question": "OSI modelining kanal pog'onasida qaysi protokollar ishlatiladi?",
    "answer": "PPP, IEEE 802.22, Ethernet, DSL, ARP",
    "noAnswer1": "TCP, UDP",
    "noAnswer2": "IPv4 va IPv6",
    "noAnswer3": "HTTP, FTP, SMTP"
  },
  {
    "question": "OSI modelining amaliy pog'onasida qaysi protokollar ishlatiladi?",
    "answer": "HTTP, FTP, SMTP",
    "noAnswer1": "PPP, IEEE 802.22, Ethernet, DSL, ARP",
    "noAnswer2": "TCP, UDP",
    "noAnswer3": "IPv4 va IPv6"
  },
  {
    "question": "OSI modelining tarmoq pog'onasida qaysi protokollar ishlatiladi?",
    "answer": "IPv4 va IPv6",
    "noAnswer1": "HTTP, FTP, SMTP",
    "noAnswer2": "PPP, IEEE 802.22, Ethernet, DSL, ARP",
    "noAnswer3": "TCP, UDP"
  },
  {
    "question": "TCP/IP stek nechta pogonadan tashkil topgan?",
    "answer": "4",
    "noAnswer1": "7",
    "noAnswer2": "2",
    "noAnswer3": "2"
  },
  {
    "question": "Tarmoqlarda ma'lumotlarni uzatishda kard to'qnashuvi bu-",
    "answer": "kolliziya",
    "noAnswer1": "xatolik",
    "noAnswer2": "to'qnashuv",
    "noAnswer3": "avariya"
  },
  {
    "question": "L3 kommutatori OSI modelining qaysi pog'onasida ishlaydi?",
    "answer": "tarmoq",
    "noAnswer1": "kanal",
    "noAnswer2": "fizik",
    "noAnswer3": "transport"
  },
  {
    "question": "L2 kommutatori OSI modelining qaysi pog'onasida ishlaydi?",
    "answer": "kanal",
    "noAnswer1": "fizik",
    "noAnswer2": "transport",
    "noAnswer3": "tarmoq"
  },
  {
    "question": "Hub OSI modelining qaysi pog'onasida ishlaydi?",
    "answer": "fizik",
    "noAnswer1": "transport",
    "noAnswer2": "tarmoq",
    "noAnswer3": "kanal"
  },
  {
    "question": "IEEE 802.11 standarti",
    "answer": "wi-fi",
    "noAnswer1": "wimax",
    "noAnswer2": "Bluetooth",
    "noAnswer3": "ethernet"
  },
  {
    "question": "IEEE 802.15 standarti",
    "answer": "Bluetooth",
    "noAnswer1": "ethernet",
    "noAnswer2": "wi-fi",
    "noAnswer3": "wimax"
  },
  {
    "question": "Lokal tarmoq?",
    "answer": "LAN",
    "noAnswer1": "MAN",
    "noAnswer2": "WAN",
    "noAnswer3": "PAN"
  },
  {
    "question": "Global tarmoq?",
    "answer": "WAN",
    "noAnswer1": "PAN",
    "noAnswer2": "LAN",
    "noAnswer3": "MAN"
  },
  {
    "question": "Klaster uchun eng tezkor tarmoqni ko'rsating.",
    "answer": "Infinyband",
    "noAnswer1": "Myrinet",
    "noAnswer2": "Gigabit Ethernet",
    "noAnswer3": "Ethernet"
  },
  {
    "question": "+\r\n\r\nAmdal qonuni … hisoblab chiqadi:",
    "answer": "bir nechta protsessorlarda hisob-kitoblarni tezlashtirishini",
    "noAnswer1": "o'rnatilgan operatsiyalar sonini",
    "noAnswer2": "konveyer chuqurligini",
    "noAnswer3": "hisoblash uchun sarflangan vaqtni"
  },
  {
    "question": "+\r\n\r\nKommunikator - bu ...",
    "answer": "jarayon guruhi identifikatori",
    "noAnswer1": "parallel tizimda intercom",
    "noAnswer2": "kalit bilan bir xil",
    "noAnswer3": "Klaster aloqa simulyatori"
  },
  {
    "question": "+\r\n\r\nMPI xotiradan foydalanishning qanday strategiyasini taklif qiladi?",
    "answer": "Tarqalgan",
    "noAnswer1": "Ulashgan",
    "noAnswer2": "Masofadan",
    "noAnswer3": "Mahalliy"
  },
  {
    "question": "+\r\n\r\nParallel dastur bu ...",
    "answer": "birgalikda ishlaydigan bir nechta jarayonlarni o'z ichiga olgan dastur",
    "noAnswer1": "katta hajmdagi ma'lumotlar dasturi",
    "noAnswer2": "tarmoq xabar almashish dasturi",
    "noAnswer3": "bir vaqtning o'zida bir nechta kompyuterlarda ishlaydigan dastur"
  },
  {
    "question": "+\r\n\r\nAsinxron parallel hisoblash modeli quyidagi xususiyatlarga ega:",
    "answer": "turli jarayonlar turli masalalarni hal qiladi",
    "noAnswer1": "barcha jarayonlar o'z ma'lumotlari bilan bir xil harakatlarni bajaradi",
    "noAnswer2": "barcha jarayonlar umumiy xotiradan foydalanadi",
    "noAnswer3": "barcha jarayonlar o'zlarining muhim bo'limlarida ishlaydi"
  },
  {
    "question": "+\r\n\r\nSinxron parallel hisoblash modeli quyidagi xususiyatlarga ega:",
    "answer": "barcha jarayonlar o'z ma'lumotlari bilan bir xil harakatlarni bajaradi",
    "noAnswer1": "turli jarayonlar turli muammolarni hal qiladi",
    "noAnswer2": "barcha jarayonlar umumiy xotiradan foydalanadi",
    "noAnswer3": "barcha jarayonlar o'zlarining muhim bo'limlarida ishlaydi"
  },
  {
    "question": "+\r\n\r\nQanday amallarni parallel bajarish mumkin?",
    "answer": "mustaqil",
    "noAnswer1": "mustaqil bo`lmagan",
    "noAnswer2": "Oddiy",
    "noAnswer3": "bo'linmas"
  },
  {
    "question": "+\r\n\r\nQanday jarayon iste'molchi deb ataladi?",
    "answer": "Ma'lumotlarni qabul qiluvchi jarayon",
    "noAnswer1": "Ma'lumotlarni uzatishni qayta ishlash",
    "noAnswer2": "Ma'lumotlarni kiritish jarayoni",
    "noAnswer3": "Ma'lumotlarni chiqaradigan jarayon"
  },
  {
    "question": "+\r\n\r\nIshlab chiqaruvchi deb qanday jarayonga aytiladi?",
    "answer": "Ma'lumotlarni uzatuvchi jarayon",
    "noAnswer1": "Ma'lumotlarni qabul qiluvchi jarayon",
    "noAnswer2": "Ma'lumotlarni kiritish jarayoni",
    "noAnswer3": "Ma'lumotlarni chiqaradigan jarayon"
  },
  {
    "question": "+\r\n\r\nZamonaviy protsessorlarda unimdorligini oshirish uchun qanday texnologiyalar qo'llanilmaydi?",
    "answer": "Ko'p oqimlilik",
    "noAnswer1": "Superskalarlik",
    "noAnswer2": "quvurlarni o'tkazish",
    "noAnswer3": "Vektorli ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nKonveyyerlashtirish nima?",
    "answer": "Buyruqlarning turli qismlarini parallel bajarish",
    "noAnswer1": "Bir vaqtning o'zida bir nechta buyruqlarni bajarish",
    "noAnswer2": "Ultra tez xotirada ma'lumotlarni saqlash",
    "noAnswer3": "Katta hajmdagi ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nSuperskalarlik nima?",
    "answer": "Bir vaqtning o'zida bir nechta buyruqlarni bajarish",
    "noAnswer1": "Buyruqlarning turli qismlarini parallel bajarish",
    "noAnswer2": "Ultra tez xotirada ma'lumotlarni saqlash",
    "noAnswer3": "Katta hajmdagi ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nMIMD texnologiyasiga qanday tizimlar tegishli?",
    "answer": "Vektorli protsessorlar",
    "noAnswer1": "Matritsali protsessorlar",
    "noAnswer2": "Klasterlar, Simmetrik multiprotsessor",
    "noAnswer3": "Vektorli protsessorlar, matritsali protsessorlar"
  },
  {
    "question": "+\r\n\r\nKo'p yadroli tizimlar qaysi sinfga kiradi?",
    "answer": "Umumiy xotiraga ega tizimlar",
    "noAnswer1": "taqsimlangan tizimlar",
    "noAnswer2": "Klasterlar",
    "noAnswer3": "Matritsali protsessorlar"
  },
  {
    "question": "+\r\n\r\nKlaster tizimlari qaysi sinfga kiradi?",
    "answer": "Taqsimlangan tizimlar",
    "noAnswer1": "Matritsali protsessorlar",
    "noAnswer2": "Simmetrik multiprotsessorlar",
    "noAnswer3": "Umumiy xotiraga ega tizimlar"
  },
  {
    "question": "+\r\n\r\nQanday ob'ektlar umumiy xotiraga ega?",
    "answer": "Ikki oqimli",
    "noAnswer1": "Ikki jarayonli",
    "noAnswer2": "Oqim va jarayonli",
    "noAnswer3": "Klaster tugunlarini hisoblash"
  },
  {
    "question": "+\r\n\r\nNima ma'lumotlar uchun xususiy xotiraga ega?",
    "answer": "Jarayon",
    "noAnswer1": "Oqim",
    "noAnswer2": "Ham jarayon, ham oqim",
    "noAnswer3": "Hech narsa"
  },
  {
    "question": "+\r\n\r\nJarayonlarning o'zaro ta'siri qanday tashkil etilgan?",
    "answer": "Xabarlarni almashish orqali, aayl tizimi orqali",
    "noAnswer1": "Umumiy xotira orqali, tezkor orqali",
    "noAnswer2": "Kesh xotirasi orqali",
    "noAnswer3": "Protsessor registrlari orqali"
  },
  {
    "question": "+\r\n\r\nParallel dasturning tezlanishi nima?",
    "answer": "Ketma-ket dasturning ishlash vaqtining parallel dasturning ishlash vaqtiga nisbati",
    "noAnswer1": "Parallel dasturning ishlash vaqtining ketma-ket dasturning ishlash vaqtiga nisbati",
    "noAnswer2": "Eng sekin jarayonning ishlash vaqtining eng tez ish vaqtiga nisbati",
    "noAnswer3": "Eng tez jarayonning ishlash vaqtining eng sekin ish vaqtiga nisbati"
  },
  {
    "question": "+\r\n\r\nParallel dasturning samaradorligi qanday?",
    "answer": "Parallel dastur tezlashuvining protsessorlar soniga nisbati",
    "noAnswer1": "Ketma-ket dasturning ishlash vaqtining parallel dasturning ishlash vaqtiga nisbati",
    "noAnswer2": "Protsessorlar sonining dastur tezlashishiga nisbati",
    "noAnswer3": "Parallel dasturning ishlash vaqtining ketma-ket dasturning ishlash vaqtiga nisbati"
  },
  {
    "question": "+\r\n\r\nParallel dasturda hisoblashning narxi nima?",
    "answer": "Barcha parallel jarayonlarning umumiy bajarilish vaqti",
    "noAnswer1": "Parallel jarayonlarning eng kichik bajarilish vaqti",
    "noAnswer2": "Parallel jarayonlarning eng uzun bajarilish vaqti",
    "noAnswer3": "Protsessorlar soniga ko'paytirilgan samaradorlik"
  },
  {
    "question": "+\r\n\r\nSuperchiziqli tezlanish nima?",
    "answer": "Samaradorlik birdan katta bo'lganda",
    "noAnswer1": "Tezlashtirish protsessorlar sonidan kam bo'lganda",
    "noAnswer2": "Tezlashtirish protsessorlar soniga teng bo'lganda",
    "noAnswer3": "Samaradorlik birdan kam bo'lsa"
  },
  {
    "question": "+\r\n\r\nSamaradorlikni saqlash odatda talab qiladi",
    "answer": "Qayta ishlangan axborot hajmini oshirish.",
    "noAnswer1": "Qayta ishlangan ma'lumotlar miqdorini kamaytiring.",
    "noAnswer2": "Protsessorlar sonini ko'paytirish",
    "noAnswer3": "Protsessorlar sonini kamaytiring"
  },
  {
    "question": "+\r\n\r\nAsosiy mantiqiy sxemalarning qanday xillari mavjud?",
    "answer": " arifmetik va kombinator",
    "noAnswer1": "kombinator va algoritmik",
    "noAnswer2": "algoritmik va komparator",
    "noAnswer3": "Komparator"
  },
  {
    "question": "+\r\n\r\n Asosiy menyu ochilad",
    "answer": "Pusk tugmasi orqali;",
    "noAnswer1": "Mening kompyuterim belgisini bosish orqali;",
    "noAnswer2": "kontekst menyusi orqali;",
    "noAnswer3": "Vazifalar panelini bosish orqali."
  },
  {
    "question": "+\r\n\r\n BIOS nima uchun mo’ljallangan:",
    "answer": "Ona plata va unga ulangan qurilmalarni diagnostikadan va testdan o’tkazish uchun",
    "noAnswer1": "Klaviatura va printerlarni diagnostikadan va testdan o’tkazish uchun",
    "noAnswer2": "Monitorlarning diagnostikadan va testdan o’tkazish uchun",
    "noAnswer3": "Plotterlar, risograflar va nusxa ko’chirish moslamalarini diagnostikadan va testdan o’tkazish uchun"
  },
  {
    "question": "+\r\n\r\n Bir nechta ventillar yordamida 0 va 1 raqamlarini saqlay oladigan 1 bitli xotira elementlari, yani …….. Hosil qilinadi",
    "answer": "triggerlar",
    "noAnswer1": "Interpretorlar",
    "noAnswer2": "Registrlar",
    "noAnswer3": "Elementlar"
  },
  {
    "question": "+\r\n\r\n Birinchi ommaviy mikroprotsessor qaysi yilda chiqarildi?",
    "answer": "1971 yil",
    "noAnswer1": "1968 yil",
    "noAnswer2": "1945 yil",
    "noAnswer3": "1956 yil"
  },
  {
    "question": "+\r\n\r\n Bitta chipli DLP proektorlarning kamchiliklar",
    "answer": "Kamalak effekti",
    "noAnswer1": "Past kontrastligi",
    "noAnswer2": "Yuqori narx",
    "noAnswer3": "Mikrooynalarning kuchli isishi"
  },
  {
    "question": "+\r\n\r\n Bul funktsiyasiga ta’rif bering.",
    "answer": "O’zgaruvchilari va qiymati ikkita mantiqiy qiymatdan birini   qabul qilishi mumkin bo’lgan funktsiya",
    "noAnswer1": "Ushbu sxemalarning kirishiga  0 yoki 1 ga teng bo’lgan mantiqiy o’zgaruvchilar berilmaydi",
    "noAnswer2": "Mantiqiy qiymatlar ma’lum bir kattalikdagi funktsiya",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "+\r\n\r\n Butun bo‘lmagan sonlarni ifodalash uchun qanday sonlar ishlatiladi?",
    "answer": "suriluvchi nuqtali  sonlar",
    "noAnswer1": "rim raqamlari",
    "noAnswer2": "kasr sonlar",
    "noAnswer3": "ratsional sonlar"
  },
  {
    "question": "+\r\n\r\n Buyruqlarda  … har doim bo'ladi, ammo …. bo'lmasligi ham mumkin",
    "answer": "amal kodi, adreslar",
    "noAnswer1": "adreslar, amal kodi",
    "noAnswer2": "adreslar, kod",
    "noAnswer3": "kodlar, adreslar"
  },
  {
    "question": "+\r\n\r\n Core I7 protssesori nechta tranzistorlardan iborat?",
    "answer": "1 160 000 000",
    "noAnswer1": "11 600 000",
    "noAnswer2": "160 000 000",
    "noAnswer3": "1 000 000 000"
  },
  {
    "question": "+\r\n\r\n Core i7 protssesori qachon yaratilgan?",
    "answer": "2011",
    "noAnswer1": "2012",
    "noAnswer2": "2013",
    "noAnswer3": "2015"
  },
  {
    "question": "+\r\n\r\n Elektron nurli trubkaga asoslangan monitorning asosiy element",
    "answer": "Kineskop va elektron pushka",
    "noAnswer1": "G’lof",
    "noAnswer2": "Lyuminofor",
    "noAnswer3": "Elektr ta’minoti"
  },
  {
    "question": "+\r\n\r\n Fayl yoki papkani faollashtirishingiz yoki tanlashingiz uchun:",
    "answer": "sichqonchani bir marta bosish orqali;",
    "noAnswer1": "sichqonchani ikki marta bosish orqali;",
    "noAnswer2": "tortib olish;",
    "noAnswer3": "Fayl yoki papkani sichqoncha bilan ko’rsatish orqali."
  },
  {
    "question": "+\r\n\r\n Floppi qanday form faktor mavjud emas?",
    "answer": "10 dyuym",
    "noAnswer1": "5,25 dyuym",
    "noAnswer2": "3.5 dyuym",
    "noAnswer3": "8 dyuym"
  },
  {
    "question": "+\r\n\r\n Front Side Bus  (FSB) quyidagilar o’rtasida aloqani ta’minlaydi",
    "answer": "Protsessor va boshqa qurilmalar o’rtasida",
    "noAnswer1": "Qattiq disklar o’rtasida",
    "noAnswer2": "Ona platadagi shimoliy va janubiy ko’priklar",
    "noAnswer3": "Ma’lumotlar shinasi va manzil shinasi o’rtasida"
  },
  {
    "question": "+\r\n\r\n hozirda ishlab chiqarilayotgan kompyuterlarni qurilishi asoslarini ozida mujassam etgan dastlabki kompyuterlardan biri kim tomonidan ishlab chiqilgan?",
    "answer": "Djon Fon Heyman",
    "noAnswer1": "Cray Research",
    "noAnswer2": "Bebbidj",
    "noAnswer3": "Leybnits"
  },
  {
    "question": "+\r\n\r\n hozirda ishlab chiqarilayotgan kompyuterlarni qurilishi asoslarini ozida mujassam etgan dastlabki kompyuterlardan biri nechanchi yilda ishlab chiqilgan?",
    "answer": "1952",
    "noAnswer1": "1950",
    "noAnswer2": "1955",
    "noAnswer3": "1960"
  },
  {
    "question": "+\r\n\r\n IA-32 arxitekturasiga ega bo’lgan MP selektorining quvvati qanday?",
    "answer": "16",
    "noAnswer1": "64",
    "noAnswer2": "8",
    "noAnswer3": "32"
  },
  {
    "question": "+\r\n\r\n IA-32 arxitekturasiga ega MP-ning IDTR registrining kengligi qancha?",
    "answer": "48",
    "noAnswer1": "32",
    "noAnswer2": "64",
    "noAnswer3": "16"
  },
  {
    "question": "+\r\n\r\n IA-32 MP umumiy foydalanish registrlarida nechta 32 bitli registrlar mavjud?",
    "answer": "8",
    "noAnswer1": "4",
    "noAnswer2": "16",
    "noAnswer3": "64"
  },
  {
    "question": "+\r\n\r\n Ikki kanalli rejimda tezkor xotiraning ishlashi unumdorlikni necha foiz oshiradi",
    "answer": "10-15%",
    "noAnswer1": "2-3%",
    "noAnswer2": "40-60%",
    "noAnswer3": "90-95%"
  },
  {
    "question": "+\r\n\r\n Ikkilik sanoq tizimidagi raqamlarni o‘nlik sanoq tizimidagi kodga  o‘zgartiruvchi kombinatsion mantiqiy qurilma",
    "answer": "Dekoderlar",
    "noAnswer1": "Komparatorlar",
    "noAnswer2": "Jamlagich",
    "noAnswer3": "Mutipleksor"
  },
  {
    "question": "+\r\n\r\n Integral sxema o‘lchamlari tahminan qancha bo'ladi? (mm)",
    "answer": "5x5 kvadrat shaklida",
    "noAnswer1": "5x4 to'g'ri to'rtburchak shaklida",
    "noAnswer2": "4x4 doira shaklida",
    "noAnswer3": "6x4 ko'pburchak shaklida"
  },
  {
    "question": "+\r\n\r\n Intelning birinchi 64-bitli mikroprotsessori qanday nomlangan?",
    "answer": " Itanium",
    "noAnswer1": "Pentium 4",
    "noAnswer2": "Pentium MMX",
    "noAnswer3": "Pentium"
  },
  {
    "question": "+\r\n\r\n Janubiy ko’prik protsessor va ...  ni bog’laydi",
    "answer": " Qattiq disklar",
    "noAnswer1": "RAM",
    "noAnswer2": "Video kartalar",
    "noAnswer3": "Tizim shinasi"
  },
  {
    "question": "+\r\n\r\n Katta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "100 tadan 100 000 tagacha",
    "noAnswer1": "10 tadan 100 tagacha",
    "noAnswer2": "10 tadan 1000 tagacha",
    "noAnswer3": "100 tadan 10 000 tagacha"
  },
  {
    "question": "+\r\n\r\n Kesh xotirasining qaysi darajasi eng tezkor?",
    "answer": "Birinchi",
    "noAnswer1": "Ikkinchi",
    "noAnswer2": "Uchinchidan",
    "noAnswer3": "To’rtinchi"
  },
  {
    "question": "+\r\n\r\n Kichik integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "1 tadan 10 tagacha",
    "noAnswer1": "10 tadan 15 tagacha",
    "noAnswer2": "cheksiz bo'lishi mumkin",
    "noAnswer3": "5 tadan 35 tagacha"
  },
  {
    "question": "+\r\n\r\n Kichik integral sxemalarning kengligi qanchani tashkil qiladi?",
    "answer": " 5-15 mm",
    "noAnswer1": "5-10 mm",
    "noAnswer2": "3-5 mm",
    "noAnswer3": "5-15 sm"
  },
  {
    "question": "+\r\n\r\n Kompyuter nima?",
    "answer": "Ma’lumotlar ustida turli amallar bajaruvchi kichik hajmdagi elektron hisoblash mashinasi.",
    "noAnswer1": "Faqat yozishga mo’ljallangan elektron hisoblash mashinasi.",
    "noAnswer2": "Faqat o’qish uchun mo’ljallangan elektron hisoblash mashinasi.",
    "noAnswer3": "Ma'lumotlarni ekranga chiqaruvchi qurilma"
  },
  {
    "question": "+\r\n\r\n Kompyuter quvvat manbai quyidagilarni bajarmaydi",
    "answer": " Elektr uzilib qolganda uzluksiz ishlashni ta’minlash",
    "noAnswer1": "Barcha qurilmalarni elektr energiyasi bilan ta’minlash",
    "noAnswer2": "Kuchlanishni belgilangan qiymatlarga o’tkazish",
    "noAnswer3": "Kichik elektr shovqinlarini filtrlash"
  },
  {
    "question": "+\r\n\r\n Kompyuter tarmog’ining topologiyasi",
    "answer": "Tarmoq kompyuterlarining bir-biriga nisbatan jismoniy joylashuvi va ularni chiziqlar bilan bog’lash usuli",
    "noAnswer1": "Tarmoq uchun ishlatiladigan kabel turi",
    "noAnswer2": "Tarmoq simini siqish usuli",
    "noAnswer3": "Butun tarmoqning o’tkazuvchanligi"
  },
  {
    "question": "+\r\n\r\n Kompyuter yoqsangiz , protsessor quyidagilarga murojat qiladi",
    "answer": "doimiy hotiraga;",
    "noAnswer1": "tezkor xotiraga;",
    "noAnswer2": "qattiq diskga;",
    "noAnswer3": "diskga."
  },
  {
    "question": "+\r\n\r\n Kompyuterda ifodalanishi mumkin bolgan malumotlar hillarini necha turkumga ajratish mumkin?",
    "answer": "2",
    "noAnswer1": "1",
    "noAnswer2": "3",
    "noAnswer3": "4"
  },
  {
    "question": "+\r\n\r\n Kompyuterdagi eng tezkor xotira qaysi?",
    "answer": "Protsessor registrining xotirasi",
    "noAnswer1": "Kesh xotirasi",
    "noAnswer2": "RAM",
    "noAnswer3": "Qattiq disklar"
  },
  {
    "question": "+\r\n\r\n Kompyuterlarda ifodalanishi mumkin bo‘lgan ma’lumotlar necha xil bo'ladi?",
    "answer": "2 xil",
    "noAnswer1": "3 xil",
    "noAnswer2": "1 xil",
    "noAnswer3": "4 xil"
  },
  {
    "question": "+\r\n\r\n Kompyuterlarda ifodalanishi mumkin bo‘lgan ma’lumotlar turini ko'rsating",
    "answer": " raqamli va raqamli bo'lmagan ma'lumotlar",
    "noAnswer1": "Mantiqiy  va belgili ma’lumotlar",
    "noAnswer2": "Simvolli va mantiqiy ma'lumotlar",
    "noAnswer3": "Mantiqiy , raqamli, raqamli bo'lmagan va  simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Kompyuterni elektr bilan ta’minlash blokining asosiy xususiyatlari",
    "answer": "Printerlar va skanerlar",
    "noAnswer1": "O’lchamlari",
    "noAnswer2": "Narx",
    "noAnswer3": "Unga ulangan turli xil qurilmalarni elektr ta’minoti uchun ulagichlar soni"
  },
  {
    "question": "+\r\n\r\n Magneto-optik disklarning kamchiligi",
    "answer": "Magnit maydonlarga nisbatan sezgirligi past",
    "noAnswer1": "Himoyalavchi plastik sumkasi",
    "noAnswer2": "Yozish tezligining pastligi",
    "noAnswer3": "Ma’lumotlarni saqlash davri"
  },
  {
    "question": "+\r\n\r\n Mantiqiy manzilni jismoniy manzilga tarjima qilish mantiqiy manzil maydonini segment-sahifali tashkiloti bilan qanday tashkil etilgan?",
    "answer": "birinchi navbatda disk xotira birligi tomonidan, keyin esa mikroprotsessor MMU-ga murojaat qilish orqali.",
    "noAnswer1": "manzil tarjimasi talab qilinmaydi.",
    "noAnswer2": "mikroprotsessorning MMU sahifa adreslash birligi.",
    "noAnswer3": "mikroprotsessorning MMU segmentining adreslash birligi."
  },
  {
    "question": "+\r\n\r\nOLED monitorlarida LCD monitorlardan farqli o’laroq, qanday tarkibiy element etishmayapti?",
    "answer": "Orqa yorug’lik chiroqlari",
    "noAnswer1": "Ilovalar",
    "noAnswer2": "Tasviriy naycha",
    "noAnswer3": "Katod nurlari trubkasi"
  },
  {
    "question": "+\r\n\r\n Ona platadagi chipset ... ni o’zida aks ettiradi",
    "answer": "Shimoliy va janubiy ko’prik mikrosxemalari to’plami",
    "noAnswer1": "Tizim shinasi va operativ xotira hajmi",
    "noAnswer2": "Ona platada joylashgan barcha qurilmalarning to’plami",
    "noAnswer3": "Ona platadagi barcha portlar va ulagichlarning to’plami"
  },
  {
    "question": "+\r\n\r\n Ona platadagi shimoliy ko’prik quyidagilarni qo’llab-quvvatlaydi",
    "answer": "Tizim shinasi, operativ xotira, videoadapter",
    "noAnswer1": "Qattiq disklar va optik disklar",
    "noAnswer2": "Ovoz kartasi va modem",
    "noAnswer3": "Klaviatura, sichqonlar, printerlar, skanerlar"
  },
  {
    "question": "+\r\n\r\n Ona platadan elektr manbasi elementlarini olib tashlab, qayta o’rnatgandan so’ng nima bo’ladi",
    "answer": " Barcha BIOS sozlamalarini sukut bo’yicha (po umolchaniyu)  sozlash",
    "noAnswer1": "BIOS parolini tiklash",
    "noAnswer2": "BIOS mikodasturini o’chirish",
    "noAnswer3": "Hech narsa bo’lmaydi"
  },
  {
    "question": "+\r\n\r\n Operativ xotira xossasiga nima xos emas?",
    "answer": "Narx",
    "noAnswer1": "O’tkazish qobiliyati",
    "noAnswer2": "Vaqt (Tayming)",
    "noAnswer3": "Xotira turi"
  },
  {
    "question": "+"
  },
  {
    "question": "+\r\n\r\n Optik disklarning birinchi avlodi quyidagilarni o’z ichiga oladi",
    "answer": "CD disklar",
    "noAnswer1": "Blu-ray disklari",
    "noAnswer2": "DVD disklar",
    "noAnswer3": "Golografik disklar"
  },
  {
    "question": "+\r\n\r\n O'rta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "10 tadan 100 tagacha",
    "noAnswer1": "1 tadan 10 tagacha",
    "noAnswer2": "100 tadan 1000 tagacha",
    "noAnswer3": "10 tadan 50 tagacha"
  },
  {
    "question": "+\r\n\r\n O'ta katta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "100 000 tadan ortiq",
    "noAnswer1": "1000 tadan 100 000 tagacha",
    "noAnswer2": "100 tadan 10 000 tagacha",
    "noAnswer3": "100 tadan 100 000 tagacha"
  },
  {
    "question": "+\r\n\r\n Oxirida maxsus belgi yoki qatorning  uzunligini ko‘rsatuvchi qismi mavjud bo'lgan ma'lumot - bu …",
    "answer": "Qatorlar ko‘rinishidagi ma’lumotlar",
    "noAnswer1": "Mantiqiy ma’lumotlar",
    "noAnswer2": "Simvolli ma'lumotlar",
    "noAnswer3": "Mantiqiy va simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Oyna bu:",
    "answer": "Windows bilan aloqa qilishning asosiy vositasi;",
    "noAnswer1": "ish maydoni;",
    "noAnswer2": "Windows ilovasi;",
    "noAnswer3": "Windows hodisasi."
  },
  {
    "question": "+\r\n\r\n Oyna kengligi va balandligi bo’yicha bir tekis o’zgartirish uchun quyidagilar kerak:",
    "answer": "burchakni torting;",
    "noAnswer1": "gorizontal ramkani torting;",
    "noAnswer2": "vertikal ramkani torting;",
    "noAnswer3": "sarlavhani torting."
  },
  {
    "question": "+\r\n\r\n Oyna menyusi satri qaerda joylashgan:",
    "answer": "yuqorida;",
    "noAnswer1": "pastdanda;",
    "noAnswer2": "chapda;",
    "noAnswer3": "o’ng tomonda."
  },
  {
    "question": "+\r\n\r\n PCI ( Periferik Component Interconnect ) shinasi  ... ni ulanishga imkon beradi",
    "answer": "Ovoz va video adapterlari",
    "noAnswer1": "Protsessor",
    "noAnswer2": "Qattiq disklar",
    "noAnswer3": "Mikrofonlar va karnay tizimi"
  },
  {
    "question": "+\r\n\r\n Pentium 4 protsessorida buyruq formatlari nechi  xil bo'ladi?",
    "answer": "4 xil",
    "noAnswer1": "5 xil",
    "noAnswer2": "3 xil",
    "noAnswer3": "2 xil"
  },
  {
    "question": "+\r\n\r\n Pentium 4 protssesori qachon yaratilgan?",
    "answer": "2000",
    "noAnswer1": "1997",
    "noAnswer2": "2001",
    "noAnswer3": "1999"
  },
  {
    "question": "+\r\n\r\n Printerni shaxsiy kompyuterga ulash uchun odatda qaysi portlardan foydalaniladi?",
    "answer": "LPT va USB",
    "noAnswer1": "PS / 2 va FireWire",
    "noAnswer2": "MAQOMOTI va LAN",
    "noAnswer3": "USB va VGA"
  },
  {
    "question": "+\r\n\r\n Protsessorning tezkorligi nima?",
    "answer": "Vaqt birligida protsessor tomonidan bajariladigan elementar operatsiyalar soni",
    "noAnswer1": "Ikki qo’shni takt impulslarining boshlanishi orasidagi vaqt oralig’i",
    "noAnswer2": "Bu bir vaqtning o’zida ishlov berilishi yoki uzatilishi mumkin bo’lgan ikkilik kodlarning maksimal sonidir",
    "noAnswer3": "Generator tomonidan bir soniyada hosil qilingan impulslar soni"
  },
  {
    "question": "+\r\n\r\n PS / 2 porti unga ...ni ulanish uchun mo’ljallangan:",
    "answer": "Klaviatura va sichqonlar",
    "noAnswer1": "Qattiq disklar",
    "noAnswer2": "Videokameralar",
    "noAnswer3": "Printerlar va skanerlar"
  },
  {
    "question": "+\r\n\r\n Qaysi funktsional birlik kompyuter protsessorini o’z ichiga olmaydi?",
    "answer": "Flesh – xotira",
    "noAnswer1": "Arifmetik – mantiqiy qurilma",
    "noAnswer2": "Kesh – xotirasi",
    "noAnswer3": "Boshqarish qurilmasi"
  },
  {
    "question": "+\r\n\r\n Qaysi tugmachalar kompyuterni yoqganda BIOS- ga kirishga imkon beradi :",
    "answer": "Del, F2",
    "noAnswer1": "Alt, Enter",
    "noAnswer2": "Home, Insert",
    "noAnswer3": "Tab, Shift"
  },
  {
    "question": "+\r\n\r\n Qaysi xotira o’zgaruvchan emas?",
    "answer": " Barcha javoblar to’g’ri",
    "noAnswer1": "Disket",
    "noAnswer2": "Qattiq disk",
    "noAnswer3": "Fleshli xotira"
  },
  {
    "question": "+\r\n\r\n Qog’oz maydalagichlarda qanday hujjatlarni maydalash usuli qo’llanilmaydi?",
    "answer": "Termal",
    "noAnswer1": "Ovoz",
    "noAnswer2": "Kimyoviy",
    "noAnswer3": "Mexanik"
  },
  {
    "question": "+\r\n\r\n Quyidagi dasturlarning qaysi biri optik belgilarni aniqlash uchun mo’ljallangan?",
    "answer": "Fine Reader",
    "noAnswer1": "Windows Movie Maker",
    "noAnswer2": "Acrobat Reader",
    "noAnswer3": "Partition Magic"
  },
  {
    "question": "+\r\n\r\n Quyidagi suyuq kristalli monitorlar (LCD) matritsalarining qaysi biri fotografik tasvirlarning ranglari va ohanglarini yaxshi aks ettiradi?",
    "answer": " IPS",
    "noAnswer1": "PVA",
    "noAnswer2": "MVA",
    "noAnswer3": "TN + Film"
  },
  {
    "question": "+\r\n\r\n Core I7 protssesori nechta tranzistorlardan iborat?",
    "answer": " CMYK",
    "noAnswer1": "HSB",
    "noAnswer2": "RGB",
    "noAnswer3": "HSV"
  },
  {
    "question": "+\r\n\r\n Raqaamli tizimlarning zamonaviy element bazasi bo'lib turli mikroprosesorli majmualari MPM tarkibiga kiruvchi qanday sxemalar hisoblanadi",
    "answer": " Integral (KIS)",
    "noAnswer1": "Kolektor",
    "noAnswer2": "Integral (MPI)",
    "noAnswer3": "Mantiqiy"
  },
  {
    "question": "+\r\n\r\n Raqamli bo‘lmagan ma’lumotlar turini ko'rsating",
    "answer": " Simvolli, Qator  ko'rinishidagi, Mantiqiy ma'lumotlar",
    "noAnswer1": "Butun sonlar va rim raqamlari",
    "noAnswer2": "Belgili ma'lumotlar",
    "noAnswer3": "Mantiqiy va simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Raqamli ma'lumotlar - bu …",
    "answer": " sonlar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer1": "simvollar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer2": "belgilar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer3": "shifrlangan  ma’lumotlar"
  },
  {
    "question": "+\r\n\r\n Sahifalar jadvalidagi yozuvdagi A biti qanday sharoitlarda 1 ga o’rnatiladi?",
    "answer": " o’qish uchun sahifaga kirishda",
    "noAnswer1": "operatsion tizim ma’lum vaqt bo’lagidan keyin",
    "noAnswer2": "Ushbu sahifaga murojaat qilganingizda",
    "noAnswer3": "yozuv uchun sahifaga kirishda"
  },
  {
    "question": "+\r\n\r\n Segment tavsiflovchisidagi chegara maydonining uzunligi qancha?",
    "answer": " 20",
    "noAnswer1": "8",
    "noAnswer2": "16",
    "noAnswer3": "64"
  },
  {
    "question": "+\r\n\r\n Shahsiy kompyuterlar necha hil boladi?",
    "answer": "2",
    "noAnswer1": "4",
    "noAnswer2": "1",
    "noAnswer3": "3"
  },
  {
    "question": "+\r\n\r\n SHaxsiy kompyuterning корпуси нима uchun mo’ljallangan:",
    "answer": "Kompyuterning ichki qismidagi mexanik shikastlanishlardan himoya qilish",
    "noAnswer1": "Kompyuterning ishonchliligini oshirish",
    "noAnswer2": "Kompyuteringizni tezligini oshiring",
    "noAnswer3": "Kompyuter elektr energiyasini tejash"
  },
  {
    "question": "+\r\n\r\n SHina ISA ( Industry Standard Architecture ) quyidagicha maksimal o’tkazuvchanlikni ta’minlaydi",
    "answer": " 2 MB / sek",
    "noAnswer1": "33 MB / sek",
    "noAnswer2": "4,5 MB / sek",
    "noAnswer3": "5,5 MB / sek"
  },
  {
    "question": "+\r\n\r\n SHina PCI-Express x1 versiyasi odatda ...ni ulanish uchun ishlatilad",
    "answer": "Ovoz kartalari",
    "noAnswer1": "Qattiq disklar",
    "noAnswer2": "Protsessorlar",
    "noAnswer3": "Video adapterlar"
  },
  {
    "question": "+\r\n\r\n Sichqonchani kompyuterga ulash uchun qanday interfeys mavjud emas",
    "answer": " LPT",
    "noAnswer1": "COM",
    "noAnswer2": "USB",
    "noAnswer3": "PS/2"
  },
  {
    "question": "+\r\n\r\n Simvolli ma’lumotlar kodini  ko'rsating",
    "answer": "ASCII, UNICODE",
    "noAnswer1": "ASCII",
    "noAnswer2": "ASCII, UNICODE, MySQL",
    "noAnswer3": "ASCII, NortonCMD, MySQL"
  },
  {
    "question": "+\r\n\r\n Simvolli ma’lumotlarning uzunliklari necha razryadli bo'lishi mumkin?",
    "answer": " 7 (8) va 16 razryadli",
    "noAnswer1": "16 va 32 razryadli",
    "noAnswer2": "64 va 80 razryadli",
    "noAnswer3": "32 va 64 razryadli"
  },
  {
    "question": "+\r\n\r\n Skanerning eng muhim xususiyati qaysi?",
    "answer": " Optik o’lchamlari",
    "noAnswer1": "Interpolatsiyalangan rezolyutsiya",
    "noAnswer2": "Ish tezligi",
    "noAnswer3": "Rang chuqurligi"
  },
  {
    "question": "+\r\n\r\n Suriluvchi nuqtali sonlarning uzunliklari qancha bo'ladi?",
    "answer": "32, 64 yoki 128 bitgacha",
    "noAnswer1": "32, 64 yoki 128 baytgacha",
    "noAnswer2": "32, 64 yoki 128 mb gacha",
    "noAnswer3": "32, 64 yoki 128 kb gacha"
  },
  {
    "question": "+\r\n\r\n Sxemalarda mantiqiy qiymatlar ma’lum bir kattalikdagi kuchlanishlar bilan ifodalanadi. Mantiqiy 0 uchun kuchlanish qiymati qancha?",
    "answer": " 3V gacha",
    "noAnswer1": "2V gacha",
    "noAnswer2": "4V gacha",
    "noAnswer3": "5V gacha"
  },
  {
    "question": "+\r\n\r\n Tashqi qismida ikki qatorli chiqish oyoqchalariga ega bo‘lgan integral sxemalar qanday ataladi?",
    "answer": "Dual Inline Package (DIP) yoki mikrosxema",
    "noAnswer1": "Source Inline Package (SIP) yoki Ikki tomonli sxema",
    "noAnswer2": "Oyoqchali integral sxema",
    "noAnswer3": "Katta integral sxema"
  },
  {
    "question": "+\r\n\r\n Tezkor xotira nima uchun mo’ljallangan:",
    "answer": " Unga bajariladigan dasturlar va ma’lumotlarni kiritish",
    "noAnswer1": "Ma’lumotlarni kompyuterda uzoq muddatli saqlash",
    "noAnswer2": "Sonlar ustida arifmetik amallarni bajarish",
    "noAnswer3": "CHipset va K / CH portlari o’rtasida ma’lumotlar almashinuvini amalga oshiradi"
  },
  {
    "question": "+\r\n\r\n Tizim va yordamchi dasturlarining kompleksi nima deyiladi",
    "answer": " operatsion tizim;",
    "noAnswer1": "matn muharriri;",
    "noAnswer2": "grafik muharriri;",
    "noAnswer3": "drayver."
  },
  {
    "question": "+\r\n\r\n Tonerni bo’yoq sifatida qanday printerlar ishlatadi?",
    "answer": "Lazerda",
    "noAnswer1": "Matritsada",
    "noAnswer2": "Inkjet ichida",
    "noAnswer3": "Sublimatsiyada"
  },
  {
    "question": "+\r\n\r\n Tortinchi avlod kompyuterlari qanday kompyuterlar?",
    "answer": "katta integral sxemali kompyuterlar",
    "noAnswer1": "integral sxemali kompyuterlar",
    "noAnswer2": "mehanik kompyuterlar",
    "noAnswer3": "elektron lampali kompyuterlar"
  },
  {
    "question": "+\r\n\r\n Trekbolning sichqoncha tipidagi manipulyatorlardan afzalligi nimada?",
    "answer": "Bilaklarning kamroq charchashi",
    "noAnswer1": "Arzonroq narx",
    "noAnswer2": "Ko’proq tutish joylari",
    "noAnswer3": "Xotira resurslarini kamroq iste’mol qilish"
  },
  {
    "question": "+\r\n\r\nMonitorni boshqaradi:",
    "answer": "RAM;",
    "noAnswer1": "ovoz kartasi;",
    "noAnswer2": "video kartalar;",
    "noAnswer3": "ROM"
  },
  {
    "question": "+\r\n\r\n Dinamik xotira statik xotiradan quyidagi afzalliklarga ega:",
    "answer": "Arzonroq narx",
    "noAnswer1": "Unga kirishning yuqori tezligi",
    "noAnswer2": "Ishonchlilik",
    "noAnswer3": "Ikki kanalli rejimda ishlash qobiliyati"
  },
  {
    "question": "+\r\n\r\n Drayver bu:",
    "answer": "kompyuter qurilmalari bilan ishlash dasturi;",
    "noAnswer1": "kompyuter qurilmasi;",
    "noAnswer2": "amaliy dastur;",
    "noAnswer3": "dasturlash tili."
  },
  {
    "question": "+\r\nMarkaziy protsessorni o’rnatish uchun ulagich qanday nomlanadi?",
    "answer": "Soket",
    "noAnswer1": "Port",
    "noAnswer2": "Chipset",
    "noAnswer3": "Shima"
  },
  {
    "question": "+\r\n\r\n Eksponentalar nima?",
    "answer": "darajalar, tartiblar",
    "noAnswer1": "butun son",
    "noAnswer2": "kasr son",
    "noAnswer3": "kasrning butun qismi"
  },
  {
    "question": "+\r\n\r\n Markaziy protsessorni o’rnatish uchun ulagich (raz’em) nomi?",
    "answer": " Soket",
    "noAnswer1": "Port",
    "noAnswer2": "Chipset",
    "noAnswer3": "SHina"
  },
  {
    "question": "+\r\n\r\n Matritsali printerlarda bosib chiqarish elementi",
    "answer": "Baraban",
    "noAnswer1": "Lazer nurlari",
    "noAnswer2": "Igna",
    "noAnswer3": "Nozul"
  },
  {
    "question": "+\r\n\r\n MOP texnalogiyasida 1-ga to'g'ri keladigon kuchlanish qancha bo'lishi mumkin",
    "answer": " 3.3 V",
    "noAnswer1": "2.2 V",
    "noAnswer2": "5 V",
    "noAnswer3": "4 V"
  },
  {
    "question": "+\r\n\r\n Sahifa jadvali katalogi elementidagi manzil maydonining uzunligi qancha?",
    "answer": "Infinyband",
    "noAnswer1": "16",
    "noAnswer2": "10",
    "noAnswer3": "13 \r\n\r\nKlaster uchun eng tezkor tarmoqni ko'rsating."
  },
  {
    "question": "+\r\n\r\nAmdal qonuni … hisoblab chiqadi:",
    "answer": "bir nechta protsessorlarda hisob-kitoblarni tezlashtirishini",
    "noAnswer1": "o'rnatilgan operatsiyalar sonini",
    "noAnswer2": "konveyer chuqurligini",
    "noAnswer3": "hisoblash uchun sarflangan vaqtni"
  },
  {
    "question": "+\r\n\r\nKommunikator - bu ...",
    "answer": "jarayon guruhi identifikatori",
    "noAnswer1": "parallel tizimda intercom",
    "noAnswer2": "kalit bilan bir xil",
    "noAnswer3": "Klaster aloqa simulyatori"
  },
  {
    "question": "+\r\n\r\nMPI xotiradan foydalanishning qanday strategiyasini taklif qiladi?",
    "answer": "Tarqalgan",
    "noAnswer1": "Ulashgan",
    "noAnswer2": "Masofadan",
    "noAnswer3": "Mahalliy"
  },
  {
    "question": "+\r\n\r\nParallel dastur bu ...",
    "answer": "birgalikda ishlaydigan bir nechta jarayonlarni o'z ichiga olgan dastur",
    "noAnswer1": "katta hajmdagi ma'lumotlar dasturi",
    "noAnswer2": "tarmoq xabar almashish dasturi",
    "noAnswer3": "bir vaqtning o'zida bir nechta kompyuterlarda ishlaydigan dastur"
  },
  {
    "question": "+\r\n\r\nAsinxron parallel hisoblash modeli quyidagi xususiyatlarga ega:",
    "answer": "turli jarayonlar turli masalalarni hal qiladi",
    "noAnswer1": "barcha jarayonlar o'z ma'lumotlari bilan bir xil harakatlarni bajaradi",
    "noAnswer2": "barcha jarayonlar umumiy xotiradan foydalanadi",
    "noAnswer3": "barcha jarayonlar o'zlarining muhim bo'limlarida ishlaydi"
  },
  {
    "question": "+\r\n\r\nSinxron parallel hisoblash modeli quyidagi xususiyatlarga ega:",
    "answer": "barcha jarayonlar o'z ma'lumotlari bilan bir xil harakatlarni bajaradi",
    "noAnswer1": "turli jarayonlar turli muammolarni hal qiladi",
    "noAnswer2": "barcha jarayonlar umumiy xotiradan foydalanadi",
    "noAnswer3": "barcha jarayonlar o'zlarining muhim bo'limlarida ishlaydi"
  },
  {
    "question": "+\r\n\r\nQanday amallarni parallel bajarish mumkin?",
    "answer": "mustaqil",
    "noAnswer1": "mustaqil bo`lmagan",
    "noAnswer2": "Oddiy",
    "noAnswer3": "bo'linmas"
  },
  {
    "question": "+\r\n\r\nQanday jarayon iste'molchi deb ataladi?",
    "answer": "Ma'lumotlarni qabul qiluvchi jarayon",
    "noAnswer1": "Ma'lumotlarni uzatishni qayta ishlash",
    "noAnswer2": "Ma'lumotlarni kiritish jarayoni",
    "noAnswer3": "Ma'lumotlarni chiqaradigan jarayon"
  },
  {
    "question": "+\r\n\r\nIshlab chiqaruvchi deb qanday jarayonga aytiladi?",
    "answer": "Ma'lumotlarni uzatuvchi jarayon",
    "noAnswer1": "Ma'lumotlarni qabul qiluvchi jarayon",
    "noAnswer2": "Ma'lumotlarni kiritish jarayoni",
    "noAnswer3": "Ma'lumotlarni chiqaradigan jarayon"
  },
  {
    "question": "+\r\n\r\nZamonaviy protsessorlarda unimdorligini oshirish uchun qanday texnologiyalar qo'llanilmaydi?",
    "answer": "Ko'p oqimlilik",
    "noAnswer1": "Superskalarlik",
    "noAnswer2": "quvurlarni o'tkazish",
    "noAnswer3": "Vektorli ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nKonveyyerlashtirish nima?",
    "answer": "Buyruqlarning turli qismlarini parallel bajarish",
    "noAnswer1": "Bir vaqtning o'zida bir nechta buyruqlarni bajarish",
    "noAnswer2": "Ultra tez xotirada ma'lumotlarni saqlash",
    "noAnswer3": "Katta hajmdagi ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nSuperskalarlik nima?",
    "answer": "Bir vaqtning o'zida bir nechta buyruqlarni bajarish",
    "noAnswer1": "Buyruqlarning turli qismlarini parallel bajarish",
    "noAnswer2": "Ultra tez xotirada ma'lumotlarni saqlash",
    "noAnswer3": "Katta hajmdagi ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nMIMD texnologiyasiga qanday tizimlar tegishli?",
    "answer": "Vektorli protsessorlar",
    "noAnswer1": "Matritsali protsessorlar",
    "noAnswer2": "Klasterlar, Simmetrik multiprotsessor",
    "noAnswer3": "Vektorli protsessorlar, matritsali protsessorlar"
  },
  {
    "question": "+\r\n\r\nKo'p yadroli tizimlar qaysi sinfga kiradi?",
    "answer": "Umumiy xotiraga ega tizimlar",
    "noAnswer1": "taqsimlangan tizimlar",
    "noAnswer2": "Klasterlar",
    "noAnswer3": "Matritsali protsessorlar"
  },
  {
    "question": "+\r\n\r\nKlaster tizimlari qaysi sinfga kiradi?",
    "answer": "Taqsimlangan tizimlar",
    "noAnswer1": "Matritsali protsessorlar",
    "noAnswer2": "Simmetrik multiprotsessorlar",
    "noAnswer3": "Umumiy xotiraga ega tizimlar"
  },
  {
    "question": "+\r\n\r\nQanday ob'ektlar umumiy xotiraga ega?",
    "answer": "Ikki oqimli",
    "noAnswer1": "Ikki jarayonli",
    "noAnswer2": "Oqim va jarayonli",
    "noAnswer3": "Klaster tugunlarini hisoblash"
  },
  {
    "question": "+\r\n\r\nNima ma'lumotlar uchun xususiy xotiraga ega?",
    "answer": "Jarayon",
    "noAnswer1": "Oqim",
    "noAnswer2": "Ham jarayon, ham oqim",
    "noAnswer3": "Hech narsa"
  },
  {
    "question": "+\r\n\r\nJarayonlarning o'zaro ta'siri qanday tashkil etilgan?",
    "answer": "Xabarlarni almashish orqali, aayl tizimi orqali",
    "noAnswer1": "Umumiy xotira orqali, tezkor orqali",
    "noAnswer2": "Kesh xotirasi orqali",
    "noAnswer3": "Protsessor registrlari orqali"
  },
  {
    "question": "+\r\n\r\nParallel dasturning tezlanishi nima?",
    "answer": "Ketma-ket dasturning ishlash vaqtining parallel dasturning ishlash vaqtiga nisbati",
    "noAnswer1": "Parallel dasturning ishlash vaqtining ketma-ket dasturning ishlash vaqtiga nisbati",
    "noAnswer2": "Eng sekin jarayonning ishlash vaqtining eng tez ish vaqtiga nisbati",
    "noAnswer3": "Eng tez jarayonning ishlash vaqtining eng sekin ish vaqtiga nisbati"
  },
  {
    "question": "+\r\n\r\nParallel dasturning samaradorligi qanday?",
    "answer": "Parallel dastur tezlashuvining protsessorlar soniga nisbati",
    "noAnswer1": "Ketma-ket dasturning ishlash vaqtining parallel dasturning ishlash vaqtiga nisbati",
    "noAnswer2": "Protsessorlar sonining dastur tezlashishiga nisbati",
    "noAnswer3": "Parallel dasturning ishlash vaqtining ketma-ket dasturning ishlash vaqtiga nisbati"
  },
  {
    "question": "+\r\n\r\nParallel dasturda hisoblashning narxi nima?",
    "answer": "Barcha parallel jarayonlarning umumiy bajarilish vaqti",
    "noAnswer1": "Parallel jarayonlarning eng kichik bajarilish vaqti",
    "noAnswer2": "Parallel jarayonlarning eng uzun bajarilish vaqti",
    "noAnswer3": "Protsessorlar soniga ko'paytirilgan samaradorlik"
  },
  {
    "question": "+\r\n\r\nSuperchiziqli tezlanish nima?",
    "answer": "Samaradorlik birdan katta bo'lganda",
    "noAnswer1": "Tezlashtirish protsessorlar sonidan kam bo'lganda",
    "noAnswer2": "Tezlashtirish protsessorlar soniga teng bo'lganda",
    "noAnswer3": "Samaradorlik birdan kam bo'lsa"
  },
  {
    "question": "+\r\n\r\nSamaradorlikni saqlash odatda talab qiladi",
    "answer": "Qayta ishlangan axborot hajmini oshirish.",
    "noAnswer1": "Qayta ishlangan ma'lumotlar miqdorini kamaytiring.",
    "noAnswer2": "Protsessorlar sonini ko'paytirish",
    "noAnswer3": "Protsessorlar sonini kamaytiring"
  },
  {
    "question": "+\r\n\r\nAsosiy mantiqiy sxemalarning qanday xillari mavjud?",
    "answer": " arifmetik va kombinator",
    "noAnswer1": "kombinator va algoritmik",
    "noAnswer2": "algoritmik va komparator",
    "noAnswer3": "Komparator"
  },
  {
    "question": "+\r\n\r\n Asosiy menyu ochilad",
    "answer": "Pusk tugmasi orqali;",
    "noAnswer1": "Mening kompyuterim belgisini bosish orqali;",
    "noAnswer2": "kontekst menyusi orqali;",
    "noAnswer3": "Vazifalar panelini bosish orqali."
  },
  {
    "question": "+\r\n\r\n BIOS nima uchun mo’ljallangan:",
    "answer": "Ona plata va unga ulangan qurilmalarni diagnostikadan va testdan o’tkazish uchun",
    "noAnswer1": "Klaviatura va printerlarni diagnostikadan va testdan o’tkazish uchun",
    "noAnswer2": "Monitorlarning diagnostikadan va testdan o’tkazish uchun",
    "noAnswer3": "Plotterlar, risograflar va nusxa ko’chirish moslamalarini diagnostikadan va testdan o’tkazish uchun"
  },
  {
    "question": "+\r\n\r\n Bir nechta ventillar yordamida 0 va 1 raqamlarini saqlay oladigan 1 bitli xotira elementlari, yani …….. Hosil qilinadi",
    "answer": "triggerlar",
    "noAnswer1": "Interpretorlar",
    "noAnswer2": "Registrlar",
    "noAnswer3": "Elementlar"
  },
  {
    "question": "+\r\n\r\n Birinchi ommaviy mikroprotsessor qaysi yilda chiqarildi?",
    "answer": "1971 yil",
    "noAnswer1": "1968 yil",
    "noAnswer2": "1945 yil",
    "noAnswer3": "1956 yil"
  },
  {
    "question": "+\r\n\r\n Bitta chipli DLP proektorlarning kamchiliklar",
    "answer": "Kamalak effekti",
    "noAnswer1": "Past kontrastligi",
    "noAnswer2": "Yuqori narx",
    "noAnswer3": "Mikrooynalarning kuchli isishi"
  },
  {
    "question": "+\r\n\r\n Bul funktsiyasiga ta’rif bering.",
    "answer": "O’zgaruvchilari va qiymati ikkita mantiqiy qiymatdan birini   qabul qilishi mumkin bo’lgan funktsiya",
    "noAnswer1": "Ushbu sxemalarning kirishiga  0 yoki 1 ga teng bo’lgan mantiqiy o’zgaruvchilar berilmaydi",
    "noAnswer2": "Mantiqiy qiymatlar ma’lum bir kattalikdagi funktsiya",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "+\r\n\r\n Butun bo‘lmagan sonlarni ifodalash uchun qanday sonlar ishlatiladi?",
    "answer": "suriluvchi nuqtali  sonlar",
    "noAnswer1": "rim raqamlari",
    "noAnswer2": "kasr sonlar",
    "noAnswer3": "ratsional sonlar"
  },
  {
    "question": "+\r\n\r\n Buyruqlarda  … har doim bo'ladi, ammo …. bo'lmasligi ham mumkin",
    "answer": "amal kodi, adreslar",
    "noAnswer1": "adreslar, amal kodi",
    "noAnswer2": "adreslar, kod",
    "noAnswer3": "kodlar, adreslar"
  },
  {
    "question": "+\r\n\r\n Core I7 protssesori nechta tranzistorlardan iborat?",
    "answer": "1 160 000 000",
    "noAnswer1": "11 600 000",
    "noAnswer2": "160 000 000",
    "noAnswer3": "1 000 000 000"
  },
  {
    "question": "+\r\n\r\n Core i7 protssesori qachon yaratilgan?",
    "answer": "2011",
    "noAnswer1": "2012",
    "noAnswer2": "2013",
    "noAnswer3": "2015"
  },
  {
    "question": "+\r\n\r\n Elektron nurli trubkaga asoslangan monitorning asosiy element",
    "answer": "Kineskop va elektron pushka",
    "noAnswer1": "G’lof",
    "noAnswer2": "Lyuminofor",
    "noAnswer3": "Elektr ta’minoti"
  },
  {
    "question": "+\r\n\r\n Fayl yoki papkani faollashtirishingiz yoki tanlashingiz uchun:",
    "answer": "sichqonchani bir marta bosish orqali;",
    "noAnswer1": "sichqonchani ikki marta bosish orqali;",
    "noAnswer2": "tortib olish;",
    "noAnswer3": "Fayl yoki papkani sichqoncha bilan ko’rsatish orqali."
  },
  {
    "question": "+\r\n\r\n Floppi qanday form faktor mavjud emas?",
    "answer": "10 dyuym",
    "noAnswer1": "5,25 dyuym",
    "noAnswer2": "3.5 dyuym",
    "noAnswer3": "8 dyuym"
  },
  {
    "question": "+\r\n\r\n Front Side Bus  (FSB) quyidagilar o’rtasida aloqani ta’minlaydi",
    "answer": "Protsessor va boshqa qurilmalar o’rtasida",
    "noAnswer1": "Qattiq disklar o’rtasida",
    "noAnswer2": "Ona platadagi shimoliy va janubiy ko’priklar",
    "noAnswer3": "Ma’lumotlar shinasi va manzil shinasi o’rtasida"
  },
  {
    "question": "+\r\n\r\n hozirda ishlab chiqarilayotgan kompyuterlarni qurilishi asoslarini ozida mujassam etgan dastlabki kompyuterlardan biri kim tomonidan ishlab chiqilgan?",
    "answer": "Djon Fon Heyman",
    "noAnswer1": "Cray Research",
    "noAnswer2": "Bebbidj",
    "noAnswer3": "Leybnits"
  },
  {
    "question": "+\r\n\r\n hozirda ishlab chiqarilayotgan kompyuterlarni qurilishi asoslarini ozida mujassam etgan dastlabki kompyuterlardan biri nechanchi yilda ishlab chiqilgan?",
    "answer": "1952",
    "noAnswer1": "1950",
    "noAnswer2": "1955",
    "noAnswer3": "1960"
  },
  {
    "question": "+\r\n\r\n IA-32 arxitekturasiga ega bo’lgan MP selektorining quvvati qanday?",
    "answer": "16",
    "noAnswer1": "64",
    "noAnswer2": "8",
    "noAnswer3": "32"
  },
  {
    "question": "+\r\n\r\n IA-32 arxitekturasiga ega MP-ning IDTR registrining kengligi qancha?",
    "answer": "48",
    "noAnswer1": "32",
    "noAnswer2": "64",
    "noAnswer3": "16"
  },
  {
    "question": "+\r\n\r\n IA-32 MP umumiy foydalanish registrlarida nechta 32 bitli registrlar mavjud?",
    "answer": "8",
    "noAnswer1": "4",
    "noAnswer2": "16",
    "noAnswer3": "64"
  },
  {
    "question": "+\r\n\r\n Ikki kanalli rejimda tezkor xotiraning ishlashi unumdorlikni necha foiz oshiradi",
    "answer": "10-15%",
    "noAnswer1": "2-3%",
    "noAnswer2": "40-60%",
    "noAnswer3": "90-95%"
  },
  {
    "question": "+\r\n\r\n Ikkilik sanoq tizimidagi raqamlarni o‘nlik sanoq tizimidagi kodga  o‘zgartiruvchi kombinatsion mantiqiy qurilma",
    "answer": "Dekoderlar",
    "noAnswer1": "Komparatorlar",
    "noAnswer2": "Jamlagich",
    "noAnswer3": "Mutipleksor"
  },
  {
    "question": "+\r\n\r\n Integral sxema o‘lchamlari tahminan qancha bo'ladi? (mm)",
    "answer": "5x5 kvadrat shaklida",
    "noAnswer1": "5x4 to'g'ri to'rtburchak shaklida",
    "noAnswer2": "4x4 doira shaklida",
    "noAnswer3": "6x4 ko'pburchak shaklida"
  },
  {
    "question": "+\r\n\r\n Intelning birinchi 64-bitli mikroprotsessori qanday nomlangan?",
    "answer": " Itanium",
    "noAnswer1": "Pentium 4",
    "noAnswer2": "Pentium MMX",
    "noAnswer3": "Pentium"
  },
  {
    "question": "+\r\n\r\n Janubiy ko’prik protsessor va ...  ni bog’laydi",
    "answer": " Qattiq disklar",
    "noAnswer1": "RAM",
    "noAnswer2": "Video kartalar",
    "noAnswer3": "Tizim shinasi"
  },
  {
    "question": "+\r\n\r\n Katta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "100 tadan 100 000 tagacha",
    "noAnswer1": "10 tadan 100 tagacha",
    "noAnswer2": "10 tadan 1000 tagacha",
    "noAnswer3": "100 tadan 10 000 tagacha"
  },
  {
    "question": "+\r\n\r\n Kesh xotirasining qaysi darajasi eng tezkor?",
    "answer": "Birinchi",
    "noAnswer1": "Ikkinchi",
    "noAnswer2": "Uchinchidan",
    "noAnswer3": "To’rtinchi"
  },
  {
    "question": "+\r\n\r\n Kichik integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "1 tadan 10 tagacha",
    "noAnswer1": "10 tadan 15 tagacha",
    "noAnswer2": "cheksiz bo'lishi mumkin",
    "noAnswer3": "5 tadan 35 tagacha"
  },
  {
    "question": "+\r\n\r\n Kichik integral sxemalarning kengligi qanchani tashkil qiladi?",
    "answer": " 5-15 mm",
    "noAnswer1": "5-10 mm",
    "noAnswer2": "3-5 mm",
    "noAnswer3": "5-15 sm"
  },
  {
    "question": "+\r\n\r\n Kompyuter nima?",
    "answer": "Ma’lumotlar ustida turli amallar bajaruvchi kichik hajmdagi elektron hisoblash mashinasi.",
    "noAnswer1": "Faqat yozishga mo’ljallangan elektron hisoblash mashinasi.",
    "noAnswer2": "Faqat o’qish uchun mo’ljallangan elektron hisoblash mashinasi.",
    "noAnswer3": "Ma'lumotlarni ekranga chiqaruvchi qurilma"
  },
  {
    "question": "+\r\n\r\n Kompyuter quvvat manbai quyidagilarni bajarmaydi",
    "answer": " Elektr uzilib qolganda uzluksiz ishlashni ta’minlash",
    "noAnswer1": "Barcha qurilmalarni elektr energiyasi bilan ta’minlash",
    "noAnswer2": "Kuchlanishni belgilangan qiymatlarga o’tkazish",
    "noAnswer3": "Kichik elektr shovqinlarini filtrlash"
  },
  {
    "question": "+\r\n\r\n Kompyuter tarmog’ining topologiyasi",
    "answer": "Tarmoq kompyuterlarining bir-biriga nisbatan jismoniy joylashuvi va ularni chiziqlar bilan bog’lash usuli",
    "noAnswer1": "Tarmoq uchun ishlatiladigan kabel turi",
    "noAnswer2": "Tarmoq simini siqish usuli",
    "noAnswer3": "Butun tarmoqning o’tkazuvchanligi"
  },
  {
    "question": "+\r\n\r\n Kompyuter yoqsangiz , protsessor quyidagilarga murojat qiladi",
    "answer": "doimiy hotiraga;",
    "noAnswer1": "tezkor xotiraga;",
    "noAnswer2": "qattiq diskga;",
    "noAnswer3": "diskga."
  },
  {
    "question": "+\r\n\r\n Kompyuterda ifodalanishi mumkin bolgan malumotlar hillarini necha turkumga ajratish mumkin?",
    "answer": "2",
    "noAnswer1": "1",
    "noAnswer2": "3",
    "noAnswer3": "4"
  },
  {
    "question": "+\r\n\r\n Kompyuterdagi eng tezkor xotira qaysi?",
    "answer": "Protsessor registrining xotirasi",
    "noAnswer1": "Kesh xotirasi",
    "noAnswer2": "RAM",
    "noAnswer3": "Qattiq disklar"
  },
  {
    "question": "+\r\n\r\n Kompyuterlarda ifodalanishi mumkin bo‘lgan ma’lumotlar necha xil bo'ladi?",
    "answer": "2 xil",
    "noAnswer1": "3 xil",
    "noAnswer2": "1 xil",
    "noAnswer3": "4 xil"
  },
  {
    "question": "+\r\n\r\n Kompyuterlarda ifodalanishi mumkin bo‘lgan ma’lumotlar turini ko'rsating",
    "answer": " raqamli va raqamli bo'lmagan ma'lumotlar",
    "noAnswer1": "Mantiqiy  va belgili ma’lumotlar",
    "noAnswer2": "Simvolli va mantiqiy ma'lumotlar",
    "noAnswer3": "Mantiqiy , raqamli, raqamli bo'lmagan va  simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Kompyuterni elektr bilan ta’minlash blokining asosiy xususiyatlari",
    "answer": "Printerlar va skanerlar",
    "noAnswer1": "O’lchamlari",
    "noAnswer2": "Narx",
    "noAnswer3": "Unga ulangan turli xil qurilmalarni elektr ta’minoti uchun ulagichlar soni"
  },
  {
    "question": "+\r\n\r\n Magneto-optik disklarning kamchiligi",
    "answer": "Magnit maydonlarga nisbatan sezgirligi past",
    "noAnswer1": "Himoyalavchi plastik sumkasi",
    "noAnswer2": "Yozish tezligining pastligi",
    "noAnswer3": "Ma’lumotlarni saqlash davri"
  },
  {
    "question": "+\r\n\r\n Mantiqiy manzilni jismoniy manzilga tarjima qilish mantiqiy manzil maydonini segment-sahifali tashkiloti bilan qanday tashkil etilgan?",
    "answer": "birinchi navbatda disk xotira birligi tomonidan, keyin esa mikroprotsessor MMU-ga murojaat qilish orqali.",
    "noAnswer1": "manzil tarjimasi talab qilinmaydi.",
    "noAnswer2": "mikroprotsessorning MMU sahifa adreslash birligi.",
    "noAnswer3": "mikroprotsessorning MMU segmentining adreslash birligi."
  },
  {
    "question": "+\r\n\r\nOLED monitorlarida LCD monitorlardan farqli o’laroq, qanday tarkibiy element etishmayapti?",
    "answer": "Orqa yorug’lik chiroqlari",
    "noAnswer1": "Ilovalar",
    "noAnswer2": "Tasviriy naycha",
    "noAnswer3": "Katod nurlari trubkasi"
  },
  {
    "question": "+\r\n\r\n Ona platadagi chipset ... ni o’zida aks ettiradi",
    "answer": "Shimoliy va janubiy ko’prik mikrosxemalari to’plami",
    "noAnswer1": "Tizim shinasi va operativ xotira hajmi",
    "noAnswer2": "Ona platada joylashgan barcha qurilmalarning to’plami",
    "noAnswer3": "Ona platadagi barcha portlar va ulagichlarning to’plami"
  },
  {
    "question": "+\r\n\r\n Ona platadagi shimoliy ko’prik quyidagilarni qo’llab-quvvatlaydi",
    "answer": "Tizim shinasi, operativ xotira, videoadapter",
    "noAnswer1": "Qattiq disklar va optik disklar",
    "noAnswer2": "Ovoz kartasi va modem",
    "noAnswer3": "Klaviatura, sichqonlar, printerlar, skanerlar"
  },
  {
    "question": "+\r\n\r\n Ona platadan elektr manbasi elementlarini olib tashlab, qayta o’rnatgandan so’ng nima bo’ladi",
    "answer": " Barcha BIOS sozlamalarini sukut bo’yicha (po umolchaniyu)  sozlash",
    "noAnswer1": "BIOS parolini tiklash",
    "noAnswer2": "BIOS mikodasturini o’chirish",
    "noAnswer3": "Hech narsa bo’lmaydi"
  },
  {
    "question": "+\r\n\r\n Operativ xotira xossasiga nima xos emas?",
    "answer": "Narx",
    "noAnswer1": "O’tkazish qobiliyati",
    "noAnswer2": "Vaqt (Tayming)",
    "noAnswer3": "Xotira turi"
  },
  {
    "question": "+\r\n\r\n Operatsion tizim bu:",
    "answer": "tizim dasturi;",
    "noAnswer1": "amaliy dastur;",
    "noAnswer2": "dasturlash tizimi;",
    "noAnswer3": "matn muharriri."
  },
  {
    "question": "+\r\n\r\n Optik disklarning birinchi avlodi quyidagilarni o’z ichiga oladi",
    "answer": "CD disklar",
    "noAnswer1": "Blu-ray disklari",
    "noAnswer2": "DVD disklar",
    "noAnswer3": "Golografik disklar"
  },
  {
    "question": "+\r\n\r\n O'rta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "10 tadan 100 tagacha",
    "noAnswer1": "1 tadan 10 tagacha",
    "noAnswer2": "100 tadan 1000 tagacha",
    "noAnswer3": "10 tadan 50 tagacha"
  },
  {
    "question": "+\r\n\r\n O'ta katta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "100 000 tadan ortiq",
    "noAnswer1": "1000 tadan 100 000 tagacha",
    "noAnswer2": "100 tadan 10 000 tagacha",
    "noAnswer3": "100 tadan 100 000 tagacha"
  },
  {
    "question": "+\r\n\r\n Oxirida maxsus belgi yoki qatorning  uzunligini ko‘rsatuvchi qismi mavjud bo'lgan ma'lumot - bu …",
    "answer": "Qatorlar ko‘rinishidagi ma’lumotlar",
    "noAnswer1": "Mantiqiy ma’lumotlar",
    "noAnswer2": "Simvolli ma'lumotlar",
    "noAnswer3": "Mantiqiy va simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Oyna bu:",
    "answer": "Windows bilan aloqa qilishning asosiy vositasi;",
    "noAnswer1": "ish maydoni;",
    "noAnswer2": "Windows ilovasi;",
    "noAnswer3": "Windows hodisasi."
  },
  {
    "question": "+\r\n\r\n Oyna kengligi va balandligi bo’yicha bir tekis o’zgartirish uchun quyidagilar kerak:",
    "answer": "burchakni torting;",
    "noAnswer1": "gorizontal ramkani torting;",
    "noAnswer2": "vertikal ramkani torting;",
    "noAnswer3": "sarlavhani torting."
  },
  {
    "question": "+\r\n\r\n Oyna menyusi satri qaerda joylashgan:",
    "answer": "yuqorida;",
    "noAnswer1": "pastdanda;",
    "noAnswer2": "chapda;",
    "noAnswer3": "o’ng tomonda."
  },
  {
    "question": "+\r\n\r\n PCI ( Periferik Component Interconnect ) shinasi  ... ni ulanishga imkon beradi",
    "answer": "Ovoz va video adapterlari",
    "noAnswer1": "Protsessor",
    "noAnswer2": "Qattiq disklar",
    "noAnswer3": "Mikrofonlar va karnay tizimi"
  },
  {
    "question": "+\r\n\r\n Pentium 4 protsessorida buyruq formatlari nechi  xil bo'ladi?",
    "answer": "4 xil",
    "noAnswer1": "5 xil",
    "noAnswer2": "3 xil",
    "noAnswer3": "2 xil"
  },
  {
    "question": "+\r\n\r\n Pentium 4 protssesori qachon yaratilgan?",
    "answer": "2000",
    "noAnswer1": "1997",
    "noAnswer2": "2001",
    "noAnswer3": "1999"
  },
  {
    "question": "+\r\n\r\n Printerni shaxsiy kompyuterga ulash uchun odatda qaysi portlardan foydalaniladi?",
    "answer": "LPT va USB",
    "noAnswer1": "PS / 2 va FireWire",
    "noAnswer2": "MAQOMOTI va LAN",
    "noAnswer3": "USB va VGA"
  },
  {
    "question": "+\r\n\r\n Protsessorning tezkorligi nima?",
    "answer": "Vaqt birligida protsessor tomonidan bajariladigan elementar operatsiyalar soni",
    "noAnswer1": "Ikki qo’shni takt impulslarining boshlanishi orasidagi vaqt oralig’i",
    "noAnswer2": "Bu bir vaqtning o’zida ishlov berilishi yoki uzatilishi mumkin bo’lgan ikkilik kodlarning maksimal sonidir",
    "noAnswer3": "Generator tomonidan bir soniyada hosil qilingan impulslar soni"
  },
  {
    "question": "+\r\n\r\n PS / 2 porti unga ...ni ulanish uchun mo’ljallangan:",
    "answer": "Klaviatura va sichqonlar",
    "noAnswer1": "Qattiq disklar",
    "noAnswer2": "Videokameralar",
    "noAnswer3": "Printerlar va skanerlar"
  },
  {
    "question": "+\r\n\r\n Qaysi funktsional birlik kompyuter protsessorini o’z ichiga olmaydi?",
    "answer": "Flesh – xotira",
    "noAnswer1": "Arifmetik – mantiqiy qurilma",
    "noAnswer2": "Kesh – xotirasi",
    "noAnswer3": "Boshqarish qurilmasi"
  },
  {
    "question": "+\r\n\r\n Qaysi tugmachalar kompyuterni yoqganda BIOS- ga kirishga imkon beradi :",
    "answer": "Del, F2",
    "noAnswer1": "Alt, Enter",
    "noAnswer2": "Home, Insert",
    "noAnswer3": "Tab, Shift"
  },
  {
    "question": "+\r\n\r\n Qaysi xotira o’zgaruvchan emas?",
    "answer": " Barcha javoblar to’g’ri",
    "noAnswer1": "Disket",
    "noAnswer2": "Qattiq disk",
    "noAnswer3": "Fleshli xotira"
  },
  {
    "question": "+\r\n\r\n Qog’oz maydalagichlarda qanday hujjatlarni maydalash usuli qo’llanilmaydi?",
    "answer": "Termal",
    "noAnswer1": "Ovoz",
    "noAnswer2": "Kimyoviy",
    "noAnswer3": "Mexanik"
  },
  {
    "question": "+\r\n\r\n Quyidagi dasturlarning qaysi biri optik belgilarni aniqlash uchun mo’ljallangan?",
    "answer": "Fine Reader",
    "noAnswer1": "Windows Movie Maker",
    "noAnswer2": "Acrobat Reader",
    "noAnswer3": "Partition Magic"
  },
  {
    "question": "+\r\n\r\n Quyidagi suyuq kristalli monitorlar (LCD) matritsalarining qaysi biri fotografik tasvirlarning ranglari va ohanglarini yaxshi aks ettiradi?",
    "answer": " IPS",
    "noAnswer1": "PVA",
    "noAnswer2": "MVA",
    "noAnswer3": "TN + Film"
  },
  {
    "question": "+\r\n\r\n Rangli tasvirlarni bosib chiqarish uchun siyohli printerlar qanday rang modelidan foydalanadilar?",
    "answer": " CMYK",
    "noAnswer1": "HSB",
    "noAnswer2": "RGB",
    "noAnswer3": "HSV"
  },
  {
    "question": "+\r\n\r\n Raqaamli tizimlarning zamonaviy element bazasi bo'lib turli mikroprosesorli majmualari MPM tarkibiga kiruvchi qanday sxemalar hisoblanadi",
    "answer": " Integral (KIS)",
    "noAnswer1": "Kolektor",
    "noAnswer2": "Integral (MPI)",
    "noAnswer3": "Mantiqiy"
  },
  {
    "question": "+\r\n\r\n Raqamli bo‘lmagan ma’lumotlar turini ko'rsating",
    "answer": " Simvolli, Qator  ko'rinishidagi, Mantiqiy ma'lumotlar",
    "noAnswer1": "Butun sonlar va rim raqamlari",
    "noAnswer2": "Belgili ma'lumotlar",
    "noAnswer3": "Mantiqiy va simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Raqamli ma'lumotlar - bu …",
    "answer": " sonlar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer1": "simvollar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer2": "belgilar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer3": "shifrlangan  ma’lumotlar"
  },
  {
    "question": "+\r\n\r\n Sahifalar jadvalidagi yozuvdagi A biti qanday sharoitlarda 1 ga o’rnatiladi?",
    "answer": " o’qish uchun sahifaga kirishda",
    "noAnswer1": "operatsion tizim ma’lum vaqt bo’lagidan keyin",
    "noAnswer2": "Ushbu sahifaga murojaat qilganingizda",
    "noAnswer3": "yozuv uchun sahifaga kirishda"
  },
  {
    "question": "+\r\n\r\n Segment tavsiflovchisidagi chegara maydonining uzunligi qancha?",
    "answer": " 20",
    "noAnswer1": "8",
    "noAnswer2": "16",
    "noAnswer3": "64"
  },
  {
    "question": "+\r\n\r\n Shahsiy kompyuterlar necha hil boladi?",
    "answer": "2",
    "noAnswer1": "4",
    "noAnswer2": "1",
    "noAnswer3": "3"
  },
  {
    "question": "+\r\n\r\n SHaxsiy kompyuterning корпуси нима uchun mo’ljallangan:",
    "answer": "Kompyuterning ichki qismidagi mexanik shikastlanishlardan himoya qilish",
    "noAnswer1": "Kompyuterning ishonchliligini oshirish",
    "noAnswer2": "Kompyuteringizni tezligini oshiring",
    "noAnswer3": "Kompyuter elektr energiyasini tejash"
  },
  {
    "question": "+\r\n\r\n SHina ISA ( Industry Standard Architecture ) quyidagicha maksimal o’tkazuvchanlikni ta’minlaydi",
    "answer": " 2 MB / sek",
    "noAnswer1": "33 MB / sek",
    "noAnswer2": "4,5 MB / sek",
    "noAnswer3": "5,5 MB / sek"
  },
  {
    "question": "+\r\n\r\n SHina PCI-Express x1 versiyasi odatda ...ni ulanish uchun ishlatilad",
    "answer": "Ovoz kartalari",
    "noAnswer1": "Qattiq disklar",
    "noAnswer2": "Protsessorlar",
    "noAnswer3": "Video adapterlar"
  },
  {
    "question": "+\r\n\r\n Sichqonchani kompyuterga ulash uchun qanday interfeys mavjud emas",
    "answer": " LPT",
    "noAnswer1": "COM",
    "noAnswer2": "USB",
    "noAnswer3": "PS/2"
  },
  {
    "question": "+\r\n\r\n Simvolli ma’lumotlar kodini  ko'rsating",
    "answer": "ASCII, UNICODE",
    "noAnswer1": "ASCII",
    "noAnswer2": "ASCII, UNICODE, MySQL",
    "noAnswer3": "ASCII, NortonCMD, MySQL"
  },
  {
    "question": "+\r\n\r\n Simvolli ma’lumotlarning uzunliklari necha razryadli bo'lishi mumkin?",
    "answer": " 7 (8) va 16 razryadli",
    "noAnswer1": "16 va 32 razryadli",
    "noAnswer2": "64 va 80 razryadli",
    "noAnswer3": "32 va 64 razryadli"
  },
  {
    "question": "+\r\n\r\n Skanerning eng muhim xususiyati qaysi?",
    "answer": " Optik o’lchamlari",
    "noAnswer1": "Interpolatsiyalangan rezolyutsiya",
    "noAnswer2": "Ish tezligi",
    "noAnswer3": "Rang chuqurligi"
  },
  {
    "question": "+\r\n\r\n Suriluvchi nuqtali sonlarning uzunliklari qancha bo'ladi?",
    "answer": "32, 64 yoki 128 bitgacha",
    "noAnswer1": "32, 64 yoki 128 baytgacha",
    "noAnswer2": "32, 64 yoki 128 mb gacha",
    "noAnswer3": "32, 64 yoki 128 kb gacha"
  },
  {
    "question": "+\r\n\r\n Sxemalarda mantiqiy qiymatlar ma’lum bir kattalikdagi kuchlanishlar bilan ifodalanadi. Mantiqiy 0 uchun kuchlanish qiymati qancha?",
    "answer": " 3V gacha",
    "noAnswer1": "2V gacha",
    "noAnswer2": "4V gacha",
    "noAnswer3": "5V gacha"
  },
  {
    "question": "+\r\n\r\n Tashqi qismida ikki qatorli chiqish oyoqchalariga ega bo‘lgan integral sxemalar qanday ataladi?",
    "answer": "Dual Inline Package (DIP) yoki mikrosxema",
    "noAnswer1": "Source Inline Package (SIP) yoki Ikki tomonli sxema",
    "noAnswer2": "Oyoqchali integral sxema",
    "noAnswer3": "Katta integral sxema"
  },
  {
    "question": "+\r\n\r\n Tezkor xotira nima uchun mo’ljallangan:",
    "answer": " Unga bajariladigan dasturlar va ma’lumotlarni kiritish",
    "noAnswer1": "Ma’lumotlarni kompyuterda uzoq muddatli saqlash",
    "noAnswer2": "Sonlar ustida arifmetik amallarni bajarish",
    "noAnswer3": "CHipset va K / CH portlari o’rtasida ma’lumotlar almashinuvini amalga oshiradi"
  },
  {
    "question": "+\r\n\r\n Tizim va yordamchi dasturlarining kompleksi nima deyiladi",
    "answer": " operatsion tizim;",
    "noAnswer1": "matn muharriri;",
    "noAnswer2": "grafik muharriri;",
    "noAnswer3": "drayver."
  },
  {
    "question": "+\r\n\r\n Tonerni bo’yoq sifatida qanday printerlar ishlatadi?",
    "answer": "Lazerda",
    "noAnswer1": "Matritsada",
    "noAnswer2": "Inkjet ichida",
    "noAnswer3": "Sublimatsiyada"
  },
  {
    "question": "+\r\n\r\n Tortinchi avlod kompyuterlari qanday kompyuterlar?",
    "answer": "katta integral sxemali kompyuterlar",
    "noAnswer1": "integral sxemali kompyuterlar",
    "noAnswer2": "mehanik kompyuterlar",
    "noAnswer3": "elektron lampali kompyuterlar"
  },
  {
    "question": "+\r\n\r\n Trekbolning sichqoncha tipidagi manipulyatorlardan afzalligi nimada?",
    "answer": "Bilaklarning kamroq charchashi",
    "noAnswer1": "Arzonroq narx",
    "noAnswer2": "Ko’proq tutish joylari",
    "noAnswer3": "Xotira resurslarini kamroq iste’mol qilish"
  },
  {
    "question": "+\r\n\r\nMonitorni boshqaradi:",
    "answer": "RAM;",
    "noAnswer1": "ovoz kartasi;",
    "noAnswer2": "video kartalar;",
    "noAnswer3": "ROM"
  },
  {
    "question": "+\r\n\r\n Dinamik xotira statik xotiradan quyidagi afzalliklarga ega:",
    "answer": "Arzonroq narx",
    "noAnswer1": "Unga kirishning yuqori tezligi",
    "noAnswer2": "Ishonchlilik",
    "noAnswer3": "Ikki kanalli rejimda ishlash qobiliyati"
  },
  {
    "question": "+\r\n\r\n Drayver bu:",
    "answer": "kompyuter qurilmalari bilan ishlash dasturi;",
    "noAnswer1": "kompyuter qurilmasi;",
    "noAnswer2": "amaliy dastur;",
    "noAnswer3": "dasturlash tili."
  },
  {
    "question": "+\r\nMarkaziy protsessorni o’rnatish uchun ulagich qanday nomlanadi?",
    "answer": "Soket",
    "noAnswer1": "Port",
    "noAnswer2": "Chipset",
    "noAnswer3": "Shima"
  },
  {
    "question": "+\r\n\r\n Eksponentalar nima?",
    "answer": "darajalar, tartiblar",
    "noAnswer1": "butun son",
    "noAnswer2": "kasr son",
    "noAnswer3": "kasrning butun qismi"
  },
  {
    "question": "+\r\n\r\n Markaziy protsessorni o’rnatish uchun ulagich (raz’em) nomi?",
    "answer": " Soket",
    "noAnswer1": "Port",
    "noAnswer2": "Chipset",
    "noAnswer3": "SHina"
  },
  {
    "question": "+\r\n\r\n Matritsali printerlarda bosib chiqarish elementi",
    "answer": "Baraban",
    "noAnswer1": "Lazer nurlari",
    "noAnswer2": "Igna",
    "noAnswer3": "Nozul"
  },
  {
    "question": "+\r\n\r\n MOP texnalogiyasida 1-ga to'g'ri keladigon kuchlanish qancha bo'lishi mumkin",
    "answer": " 3.3 V",
    "noAnswer1": "2.2 V",
    "noAnswer2": "5 V",
    "noAnswer3": "4 V"
  },
  {
    "question": "+\r\n\r\n Sahifa jadvali katalogi elementidagi manzil maydonining uzunligi qancha?",
    "answer": "Soket",
    "noAnswer1": "16",
    "noAnswer2": "10",
    "noAnswer3": "13\r\n\r\nMarkaziy protsessorni o’rnatish uchun ulagich qanday nomlanadi?"
  },
  {
    "question": "Asosiy platadagi shimoliy ko'prik quyidagilarni qo'llab-quvvatlaydi:",
    "answer": "Tizimli shina, operativ xotira, videoadapter",
    "noAnswer1": "Qattiq disklar va optik disklar",
    "noAnswer2": "Ovoz kartasi va modem",
    "noAnswer3": "Klaviaturalar, sichqonlar, printerlar, skanerlar"
  },
  {
    "question": "Janubiy ko'prik protsessorni va ... ni bog'laydi:",
    "answer": "Qattiq disklar",
    "noAnswer1": "RAM",
    "noAnswer2": "Video kartalar",
    "noAnswer3": "Tizim shinasi"
  },
  {
    "question": "Asosiy  platadagi chipset bu…:",
    "answer": "Shimoliy va janubiy ko'prikning mikrosxemalari to'plami",
    "noAnswer1": "Tizim shinasi va operativ xotiraning umumiyligi",
    "noAnswer2": "Asosiy platada joylashgan barcha qurilmalar to'plami",
    "noAnswer3": "Asosiy platadagi barcha portlar va ulagichlar to'plami"
  },
  {
    "question": "Shaxsiy kompyuterning korpusi quyidagilar uchun mo'ljallangan:",
    "answer": "Kompyuterning ichki qismlarini mexanik shikastlanishdan himoya qilish",
    "noAnswer1": "Kompyuterning ishonchliligini oshirish",
    "noAnswer2": "Kompyuteringizni tezlashtiring",
    "noAnswer3": "Kompyuteringizning elektr energiyasini tejash"
  },
  {
    "question": "Kompyuter quvvat manbai qaysi vazifani bajarmaydi:",
    "answer": "Elektr ta'minoti uzilib qolganda uzluksiz ishlashni ta'minlash",
    "noAnswer1": "Barcha qurilmalarni elektr energiyasi bilan ta'minlash",
    "noAnswer2": "Kuchlanishni belgilangan qiymatlarga aylantirish",
    "noAnswer3": "Kichik elektr shovqinlarini filtrlash"
  },
  {
    "question": "Kompyuter quvvat manbaining asosiy xarakteristikalari quyidagilardir:",
    "answer": "Quvvat",
    "noAnswer1": "O‘lchamlar",
    "noAnswer2": "Narxi",
    "noAnswer3": "Unga ulangan turli qurilmalarni elektr ta'minoti uchun ulagichlar soni"
  },
  {
    "question": "Kompyuter protsessoriga qaysi funksional birlik kirmaydi?",
    "answer": "Flash xotira",
    "noAnswer1": "Arifmetik mantiq birligi",
    "noAnswer2": "Kesh xotirasi",
    "noAnswer3": "Boshqarish moslamasi"
  },
  {
    "question": "Qaysi darajadagi kesh eng tezkor?",
    "answer": "Birinchi",
    "noAnswer1": "Ikkinchi",
    "noAnswer2": "Uchinchi",
    "noAnswer3": "To`rtinchi"
  },
  {
    "question": "Kompyuterning eng tez xotirasi nima?",
    "answer": "Protsessor registr xotirasi",
    "noAnswer1": "Kesh xotirasi",
    "noAnswer2": "RAM",
    "noAnswer3": "Qattiq disklar"
  },
  {
    "question": "Protsessor tezligi nima?",
    "answer": "Protsessor tomonidan vaqt birligida bajariladigan elementar amallar soni",
    "noAnswer1": "Ikki qo'shni soat pulslarining boshlanishi o'rtasidagi vaqt oralig'i",
    "noAnswer2": "Bu bir vaqtning o'zida qayta ishlanishi yoki uzatilishi mumkin bo'lgan ikkilik kod bitlarining maksimal soni",
    "noAnswer3": "Generator tomonidan bir soniyada hosil bo'lgan impulslar soni"
  },
  {
    "question": "Tasodifiy xotiraning xarakteristikasi nima emas?",
    "answer": "Narx",
    "noAnswer1": "Tarmoq kengligi",
    "noAnswer2": "Taymingi",
    "noAnswer3": "Xotira turi"
  },
  {
    "question": "Tasodifiy kirish xotirasi quyidagilar uchun mo'ljallangan:",
    "answer": "Unda bajarilayotgan dasturlar va ma'lumotlarni joylashtirish",
    "noAnswer1": "Kompyuterda ma'lumotlarni uzoq muddatli saqlash",
    "noAnswer2": "Sonlar ustida arifmetik amallarni bajarish",
    "noAnswer3": "Chipset va kiritish-chiqarish portlari o'rtasida ma'lumotlar almashinuvini amalga oshiradi"
  },
  {
    "question": "Dinamik tasodifiy xotira statik xotiraga nisbatan quyidagi afzalliklarga ega:",
    "answer": "Pastroq narx",
    "noAnswer1": "Unga kirishning yuqori tezligi",
    "noAnswer2": "Ishonchlilik",
    "noAnswer3": "Ikki kanalli rejimda ishlash imkoniyati"
  },
  {
    "question": "Statik xotira quyidagi qurilma sifatida ishlatiladi:",
    "answer": "Kesh xotirasi",
    "noAnswer1": "Video xotira",
    "noAnswer2": "Qattiq disklardagi xotira",
    "noAnswer3": "Flash xotira"
  },
  {
    "question": "Operativ xotiraning ikki kanalli ishlash rejimi unumdorlikni taxminan ...  ga oshirish imkonini beradi:",
    "answer": "10-15%",
    "noAnswer1": "2-3%",
    "noAnswer2": "40-60%",
    "noAnswer3": "90-95%"
  },
  {
    "question": "Front Side Bus (FSB) shinasi qaysi qurilmalar o'rtasidagi aloqani ta'minlaydi:",
    "answer": "Protsessor va boshqa qurilmalar o'rtasida",
    "noAnswer1": "Qattiq disklar o'rtasida",
    "noAnswer2": "Asosiy platadagi Shimoliy va Janubiy ko'priklar",
    "noAnswer3": "Ma'lumotlar shinasi va manzil shinasi o'rtasida"
  },
  {
    "question": "Kompyuter bu:",
    "answer": "axborot bilan ishlash uchun ko'p funksiyali elektron qurilma;",
    "noAnswer1": "raqamlarni qayta ishlash uchun elektron hisoblash qurilmasi;",
    "noAnswer2": "har qanday turdagi ma'lumotlarni saqlash uchun qurilma;",
    "noAnswer3": "matnlar bilan ishlash uchun qurilma;"
  },
  {
    "question": "Axborotni qayta ishlash uchun kompyuterning qaysi qurilmasidan foydalaniladi?",
    "answer": "Protsessor",
    "noAnswer1": "sichqonchani manipulyatori",
    "noAnswer2": "Klaviatura",
    "noAnswer3": "RAM"
  },
  {
    "question": "Kompyuterning tezligi quyidagilarga bog'liq:",
    "answer": "protsessorda axborotni qayta ishlashning taktli chastotasi;",
    "noAnswer1": "ulangan printerning mavjudligi yoki yo'qligi;",
    "noAnswer2": "tashqi xotira qurilmasining hajmi;",
    "noAnswer3": "qayta ishlangan axborot hajmi."
  },
  {
    "question": "Protsessorning takt chastotasi:",
    "answer": "kompyuter tugunlarining ishini sinxronlashtiruvchi bir soniyada hosil bo'ladigan impulslar soni;",
    "noAnswer1": "protsessor tomonidan vaqt birligida bajariladigan ikkilik amallar soni;",
    "noAnswer2": "protsessorning tezkor xotiraga vaqt birligiga kirishi mumkin bo'lgan soni;",
    "noAnswer3": "protsessor va ROM o'rtasida axborot almashish tezligi."
  },
  {
    "question": "Tezkor xotira hajmi quyidagilarni belgilaydi:",
    "answer": "qattiq diskga murojat etmasdan qancha ma’lumotni qayta ishlash mumkin",
    "noAnswer1": "qattiq diskda qancha ma’lumot saqlanishi mumkinligi.",
    "noAnswer2": "qancha ma’lumotni chop etish mumkin.",
    "noAnswer3": "protsessor va ROM o`rtasida ma’lumot almashish tezligi"
  },
  {
    "question": "Kompyuterning asosiy qurilmalarning eng toʻliq roʻyxatini belgilang:",
    "answer": "markaziy protsessor, tasodifiy xotira, kiritish/chiqarish qurilmalari;",
    "noAnswer1": "mikroprotsessor, soprotsessor, monitor;",
    "noAnswer2": "monitor, qattiq disk, printer;",
    "noAnswer3": "ALU, UU, soprotsessor;"
  },
  {
    "question": "Zamonaviy shaxsiy kompyuterlar arxitekturasining magistral-modul prinsipi uning apparat komponentlarini shunday mantiqiy tashkil qilishni nazarda tutadi, bunda:",
    "answer": "ularning barchasi ma’lumotlar, manzil va boshqaruv shinalarini o`z ichiga olgan magistral orqali bir-biri bilan aloqa qiladi;",
    "noAnswer1": "har bir qurilma boshqalar bilan bevosita, shuningdek, bitta markaziy magistral orqali aloqa qiladi;",
    "noAnswer2": "har bir qurilma boshqalar bilan bevosita muloqot qiladi;",
    "noAnswer3": "bir-biri bilan ma’lum bir qat’iy ketma-ketlikda (halqa) aloqa qilish;"
  },
  {
    "question": "Protsessorni tashkil etuvchi qurilmalarni ayting:",
    "answer": "arifmetik mantiq qurilma, boshqaruv qurilmasi;",
    "noAnswer1": "tasodifiy xotira, printer;",
    "noAnswer2": "kesh xotira, videoxotira;",
    "noAnswer3": "skaner, ROM;"
  },
  {
    "question": "Protsessor axborotni qaysi sanoq tizimida qayta ishlaydi:",
    "answer": "ikkilik tizimida",
    "noAnswer1": "o`nli tizimida",
    "noAnswer2": "matn shaklida",
    "noAnswer3": "ikkilik-o`nlik tizimida"
  },
  {
    "question": "Doimiy xotira nima uchun ishlatiladi:",
    "answer": "kompyuterni dastlabki yuklash va uning qismlarini sinash uchun dasturlarni saqlash;",
    "noAnswer1": "foydalanuvchi dasturini ishlash vaqtida saqlash;",
    "noAnswer2": "ayniqsa qimmatli amaliy dasturlarning yozuvlarini saqlash;",
    "noAnswer3": "doimiy foydalaniladigan dasturlarni saqlash;"
  },
  {
    "question": "Bajaralish jarayonida dasturlar qayerda saqlanadi:",
    "answer": "tezkor xotirada;",
    "noAnswer1": "protsessorda;",
    "noAnswer2": "videoxotirada;",
    "noAnswer3": "qattiq diskda;"
  },
  {
    "question": "Mashinaning funktsional imkoniyatlarini quyidagilarga bo'lish mumkin:",
    "answer": "asosiy va qo'shimcha.",
    "noAnswer1": "apparat va dasturiy ta'minot",
    "noAnswer2": "samarali va samarasiz",
    "noAnswer3": "diskret va mustaqil"
  },
  {
    "question": "Agar siz quyidagilarni o'chirib qo'ysangiz, shaxsiy kompyuter ishlamaydi:",
    "answer": "tezkor xotirani;",
    "noAnswer1": "diskovodni;",
    "noAnswer2": "sichqonchani;",
    "noAnswer3": "printerni;"
  },
  {
    "question": "Axborotni uzoq muddatli saqlash uchun nima xizmat qiladi:",
    "answer": "tashqi xotira;",
    "noAnswer1": "protsessor;",
    "noAnswer2": "tasodifiy kirish xotirasi;",
    "noAnswer3": "diskovod;"
  },
  {
    "question": "Tashqi xotirada axborotni saqlash jarayoni tezkor xotirada axborotni saqlash jarayonidan qanday farq qiladi:",
    "answer": "kompyuter o`chirilgandan so`ng axborotni tashqi muhitda saqlash mumkinligi;",
    "noAnswer1": "saqlanadigan ma’lumotlarning miqdori;",
    "noAnswer2": "saqlangan ma’lumotlarga kirishning turli tezligi;",
    "noAnswer3": "saqlangan axborotga kirish usullari."
  },
  {
    "question": "Kompyuterni o'chirganingizda ma'lumotlar:",
    "answer": "tezkor xotiradan yo'qoladi;",
    "noAnswer1": "doimiy saqlash joyidan yo'qoladi;",
    "noAnswer2": "\"qattiq diskda\" o'chirilgan;",
    "noAnswer3": "magnit diskda o'chiriladi;"
  },
  {
    "question": "Diskovod quyidagilar uchun qurilmadir:",
    "answer": "disklardan ma'lumotlarni o'qish / yozish;",
    "noAnswer1": "bajariladigan dasturning buyruqlarini qayta ishlash;",
    "noAnswer2": "bajariladigan dastur buyruqlarini saqlash;",
    "noAnswer3": "axborotni uzoq muddatli saqlash;"
  },
  {
    "question": "Qaysi qurilma eng tez aloqa tezligiga ega?",
    "answer": "RAM mikrosxemalari",
    "noAnswer1": "qattiq disk",
    "noAnswer2": "diskovod;",
    "noAnswer3": "CD-ROM drayveri"
  },
  {
    "question": "Qurilmalarning qaysi biri ma’lumotlarni kiritish uchun mo‘ljallangan?",
    "answer": "klaviatura;",
    "noAnswer1": "printer;",
    "noAnswer2": "ROM;",
    "noAnswer3": "protsessor;"
  },
  {
    "question": "\"Sichqoncha\" manipulyatori - bu qurilma:",
    "answer": "ma'lumotlarni kiritish;",
    "noAnswer1": "ma'lumotlarni o'qish;",
    "noAnswer2": "axborotni uzoq muddat saqlash;",
    "noAnswer3": "modulyatsiya va demodulyatsiya;"
  },
  {
    "question": "Kompyuterni telefon tarmog'iga ulash uchun quyidagilardan foydalaning:",
    "answer": "modem;",
    "noAnswer1": "faks;",
    "noAnswer2": "skaner;",
    "noAnswer3": "printer;"
  },
  {
    "question": "Monitorni boshqaradi:",
    "answer": "RAM;",
    "noAnswer1": "ovoz kartasi;",
    "noAnswer2": "video kartalar;",
    "noAnswer3": "ROM"
  },
  {
    "question": "Dastur bu ...",
    "answer": "ma’lumotlarni qayta ishlash uchun berilgan masalani hal qilish uchun kompyuter bajarishi kerak bo`lgan harakatlar ketma-ketligi tavsifi;",
    "noAnswer1": "tashqi qurilmaning ishlashini boshqaruvchi elektron sxema;",
    "noAnswer2": "kompyuter xotirasida maxsus shaklda berilgan qayta ishlangan axborot;",
    "noAnswer3": "tashqi va ichki xotiralarning ishlashini boshqaruvchi elektron sxema."
  },
  {
    "question": "Yangi ma'lumotlarni bir necha marta yozib olish uchun mo'ljallangan kompakt disk ... deyiladi.",
    "answer": "CD-RW;",
    "noAnswer1": "CD-ROM;",
    "noAnswer2": "DVD-ROM;",
    "noAnswer3": "CD-R"
  },
  {
    "question": "Kompyuterning tuzilmasi bu ... :",
    "answer": "uning tarkibiy qismlarining tarkibi, tartibi va munosabatlarining tamoyillarini o'rnatadigan qandaydir model",
    "noAnswer1": "Axborotni qayta ishlash uchun elektron vositalar majmuasi",
    "noAnswer2": "dasturiy va texnik vositalar majmuasi",
    "noAnswer3": "Kompyuterni boshqarish va ma'lumotlarni qayta ishlash majmuasi"
  },
  {
    "question": "Mikroprotsessor quyidagilar uchun mo'ljallangan:",
    "answer": "Kompyuterni boshqarish va ma'lumotlarni qayta ishlash",
    "noAnswer1": "shaxsiy kompyuterga axborot kiritish va uni printerga chiqarish",
    "noAnswer2": "matnli ma'lumotlarni qayta ishlash",
    "noAnswer3": "dasturiy va texnik qayta ishlash"
  },
  {
    "question": "Muayyan boshqaruv signallarini hosil qiladi va barcha bloklarga yuboradi – bu…:",
    "answer": "boshqaruv apparati",
    "noAnswer1": "mikroprotsessor xotirasi",
    "noAnswer2": "arifmetik mantiq birligi",
    "noAnswer3": "RAM"
  },
  {
    "question": "Operatsion tizim qayerda saqlanadi?",
    "answer": "qattiq diskdagi tashqi xotirada.",
    "noAnswer1": "RAMda",
    "noAnswer2": "ROMda",
    "noAnswer3": "Kechda"
  },
  {
    "question": "Birinchi superkompyuter qachon yaratilgan ?",
    "answer": "60-yillarning o'rtalarida",
    "noAnswer1": "70-yillarning o'rtalarida",
    "noAnswer2": "80-yillarning boshlarida",
    "noAnswer3": "80-yillarning boshlarida"
  },
  {
    "question": "Birinchi superkompyuterni kim yaratdi?",
    "answer": "Seymur Krey",
    "noAnswer1": "Jon fon Neyman",
    "noAnswer2": "Tomas Sterling",
    "noAnswer3": "Don Bekker"
  },
  {
    "question": "Noto'g'ri tasdiqni toping.",
    "answer": "SIMD - ko'pgina zamonaviy kompyuterlar ushbu toifaga kiradi",
    "noAnswer1": "SISD-lar oddiy seriyali kompyuterlardir",
    "noAnswer2": "MISD - bu sinfdagi kompyuterlar kam",
    "noAnswer3": "MIMD - bu bir nechta buyruq oqimlari va ma'lumotlar oqimlarining amalga oshirilishi"
  },
  {
    "question": "Konveyerni qayta ishlash uchun u xosdir:",
    "answer": "umumiy jarayonning alohida bosqichlarini ta'kidlash",
    "noAnswer1": "matritsa operatsiyalari",
    "noAnswer2": "operandlarni vektor registrlariga yuklash",
    "noAnswer3": "2 operandni bir vaqtning o'zida barcha ikkilik raqamlarini qo'shish orqali qo'shish"
  },
  {
    "question": "Ustuvorlik - bu ...",
    "answer": "har bir jarayon yoki masala uchun OS tomonidan tayinlangan tartib",
    "noAnswer1": "algoritmning qandaydir rasmiylashtirilgan tilda tavsifi",
    "noAnswer2": "umumiy operatsiyaning alohida bosqichi",
    "noAnswer3": "o'zaro ta'sirning u yoki bu shakli to'g'risida operatsion tizimdan xabarnoma"
  },
  {
    "question": "Klaster (parallel dasturlash kontekstida) bu ...",
    "answer": "Mahalliy tarmoq orqali ulangan 2 yoki undan ortiq tugunlar",
    "noAnswer1": "bir yoki bir nechta kristall nazorat qilish moslamasi",
    "noAnswer2": "RAM maydoni",
    "noAnswer3": "qattiq disk bo'limi"
  },
  {
    "question": "Jarayon bu ...",
    "answer": "bu dasturning dinamik mohiyati, uni bajarish jarayonida uning kodi",
    "noAnswer1": "bu har bir vazifaga operatsion tizim tomonidan tayinlangan raqam",
    "noAnswer2": "blok uzatish boshqaruvchisi tarmoq interfeysi",
    "noAnswer3": "takrorlanuvchi operatsion tizim"
  },
  {
    "question": "Buyruqni bajarish sikliga xos bo'lmagan qadam(lar)ni tanlang:",
    "answer": "keyingi buyruqni keshlash",
    "noAnswer1": "natijani xotiraga yozish",
    "noAnswer2": "buyruqni bajarish",
    "noAnswer3": "buyruqni dekodlash, operandning manzilini hisoblash va uni olish"
  },
  {
    "question": "Resurs - bu ...",
    "answer": "jarayon yoki vazifani bajarishi kerak bo'lgan ob'ekt",
    "noAnswer1": "OT tomonidan jarayonga yetkazilgan xabar",
    "noAnswer2": "kompilyatsiya qilingan kodni dasturga aylantirish jarayoni",
    "noAnswer3": "har bir jarayon va vazifa uchun OS tomonidan tayinlangan raqam"
  },
  {
    "question": "Faol resurslar...by",
    "answer": "xotiradagi ma'lumotlarni o'zgartirishga qodir",
    "noAnswer1": "bir vaqtning o'zida bir nechta jarayonlar tomonidan ishlatilishi mumkin",
    "noAnswer2": "o'zaro istisnolardan foydalanadi",
    "noAnswer3": "resursdan chiqmaguncha faqat bitta protsessor tomonidan foydalaniladi"
  },
  {
    "question": "Jarayon quyidagilarga ega:",
    "answer": "hususiy holatga",
    "noAnswer1": "hususiy protsessorga",
    "noAnswer2": "hususiy tizimga",
    "noAnswer3": "hususiy semafor"
  },
  {
    "question": "MPI bu ...",
    "answer": "Parallel dasturlash uchun funktsiyalar, turlar va konstantalar to'plamini o'z ichiga olgan interfeys",
    "noAnswer1": "parallel dasturlash uchun maxsus OT",
    "noAnswer2": "tizimdagi parallel ishlov berish moduli",
    "noAnswer3": "parallel interfeyslarni ishlab chiqishni muvofiqlashtiruvchi tashkilot"
  },
  {
    "question": "Konveyer texnologiyasi ... o'z ichiga oladi.",
    "answer": "bir vaqtning o'zida bir nechta buyruqlarni qayta ishlashni",
    "noAnswer1": "muayyan mezonlarga javob beradigan buyruqlarni qayta ishlashni",
    "noAnswer2": "ketma-ket buyruqlarni qayta ishlashni",
    "noAnswer3": "xotira buyruqlarini almashishni"
  },
  {
    "question": "Umumiy fizik xotiraga ega va u barcha protsessorlarga taqsimlangan tizim... deyiladi.",
    "answer": "SMP",
    "noAnswer1": "NUMA",
    "noAnswer2": "MPP",
    "noAnswer3": "PVP"
  },
  {
    "question": "NUMA arxitekturasining asosiy xususiyati nimada?",
    "answer": "bir xil bo'lmagan xotiraga kirish",
    "noAnswer1": "ultra yuqori ishlash",
    "noAnswer2": "vektorli konveyyerli protsessorlarning mavjudligi",
    "noAnswer3": "barcha protsessorlar tomonidan umumiy fizik xotira mavjudligi"
  },
  {
    "question": "Qaysi arxitekturaga ega hisoblash mashinalari eng arzon?",
    "answer": "klaster tizimlari",
    "noAnswer1": "vektor protsessorlari bilan parallel arxitektura",
    "noAnswer2": "simmetrik ko'p ishlov berish",
    "noAnswer3": "massiv parallel arxitektura"
  },
  {
    "question": "Tizimning eng yuqori unimdorligi quyidagilarda aniqlanadi:",
    "answer": "MFloplar",
    "noAnswer1": "MIPS",
    "noAnswer2": "Megahertz",
    "noAnswer3": "Mbayt"
  },
  {
    "question": "Tizimning eng yuqori unimdorligi quyidagilar bilan belgilanadi:",
    "answer": "tizimdagi protsessorlar sonini 1-protsessorning ishlashi unumdorligiga ko`paytmasi",
    "noAnswer1": "Real masalalarni bajarish vaqti",
    "noAnswer2": "test topshiriqlarini bajarish vaqti",
    "noAnswer3": "uzatiladigan ma'lumotlar miqdori"
  },
  {
    "question": "Ko'p protsessorli kompyuter tizimining ishlashi quyidagilar bilan tavsiflanadi:",
    "answer": "vaqt birligida bajariladigan operatsiyalar soni",
    "noAnswer1": "vaqt birligida uzatiladigan ma'lumotlarning baytlari soni",
    "noAnswer2": "vaqt birligida hosil bo'ladigan impulslar soni",
    "noAnswer3": "mavjud hisoblash xotirasi"
  },
  {
    "question": "Konfiguratsiyaga yangi tugunlarni qo'shishda ulanishlar murakkabligining oshishi qanday tushuncha bilan tavsiflanadi.",
    "answer": "masshtablilik",
    "noAnswer1": "Tezlashtirish",
    "noAnswer2": "Samaradorlik",
    "noAnswer3": "eng yuqori samaradorlik"
  },
  {
    "question": "Klaster uchun eng tezkor tarmoqni ko'rsating.",
    "answer": "Infinyband",
    "noAnswer1": "Myrinet",
    "noAnswer2": "Gigabit Ethernet",
    "noAnswer3": "Ethernet"
  },
  {
    "question": "Kommunikator - bu ...",
    "answer": "jarayon guruhi identifikatori",
    "noAnswer1": "parallel tizimda intercom",
    "noAnswer2": "kalit bilan bir xil",
    "noAnswer3": "Klaster aloqa simulyatori"
  },
  {
    "question": "Parallel dastur bu ...",
    "answer": "birgalikda ishlaydigan bir nechta jarayonlarni o'z ichiga olgan dastur",
    "noAnswer1": "katta hajmdagi ma'lumotlar dasturi",
    "noAnswer2": "tarmoq xabar almashish dasturi",
    "noAnswer3": "bir vaqtning o'zida bir nechta kompyuterlarda ishlaydigan dastur"
  },
  {
    "question": "Qanday amallarni parallel bajarish mumkin?",
    "answer": "mustaqil",
    "noAnswer1": "mustaqil bo`lmagan",
    "noAnswer2": "Oddiy",
    "noAnswer3": "bo'linmas"
  },
  {
    "question": "Zamonaviy protsessorlarda unimdorligini oshirish uchun qanday texnologiyalar qo'llanilmaydi?",
    "answer": "Ko'p oqimlilik",
    "noAnswer1": "Superskalarlik",
    "noAnswer2": "quvurlarni o'tkazish",
    "noAnswer3": "Vektorli ma'lumotlarni qayta ishlash"
  },
  {
    "question": "Superskalarlik nima?",
    "answer": "Bir vaqtning o'zida bir nechta buyruqlarni bajarish",
    "noAnswer1": "Buyruqlarning turli qismlarini parallel bajarish",
    "noAnswer2": "Ultra tez xotirada ma'lumotlarni saqlash",
    "noAnswer3": "Katta hajmdagi ma'lumotlarni qayta ishlash"
  },
  {
    "question": "MIMD texnologiyasiga qanday tizimlar tegishli?",
    "answer": "Vektorli protsessorlar",
    "noAnswer1": "Matritsali protsessorlar",
    "noAnswer2": "Klasterlar, Simmetrik multiprotsessor",
    "noAnswer3": "Vektorli protsessorlar, matritsali protsessorlar"
  },
  {
    "question": "Ko'p yadroli tizimlar qaysi sinfga kiradi?",
    "answer": "Umumiy xotiraga ega tizimlar",
    "noAnswer1": "taqsimlangan tizimlar",
    "noAnswer2": "Klasterlar",
    "noAnswer3": "Matritsali protsessorlar"
  },
  {
    "question": "Klaster tizimlari qaysi sinfga kiradi?",
    "answer": "Taqsimlangan tizimlar",
    "noAnswer1": "Matritsali protsessorlar",
    "noAnswer2": "Simmetrik multiprotsessorlar",
    "noAnswer3": "Umumiy xotiraga ega tizimlar"
  },
  {
    "question": "Qanday ob'ektlar umumiy xotiraga ega?",
    "answer": "Ikki oqimli",
    "noAnswer1": "Ikki jarayonli",
    "noAnswer2": "Oqim va jarayonli",
    "noAnswer3": "Klaster tugunlarini hisoblash"
  },
  {
    "question": "Nima ma'lumotlar uchun xususiy xotiraga ega?",
    "answer": "Jarayon",
    "noAnswer1": "Oqim",
    "noAnswer2": "Ham jarayon, ham oqim",
    "noAnswer3": "Hech narsa"
  },
  {
    "question": "Jarayonlarning o'zaro ta'siri qanday tashkil etilgan?",
    "answer": "Xabarlarni almashish orqali, aayl tizimi orqali",
    "noAnswer1": "Umumiy xotira orqali, tezkor orqali",
    "noAnswer2": "Kesh xotirasi orqali",
    "noAnswer3": "Protsessor registrlari orqali"
  },
  {
    "question": "Parallel dasturning tezlanishi nima?",
    "answer": "Ketma-ket dasturning ishlash vaqtining parallel dasturning ishlash vaqtiga nisbati",
    "noAnswer1": "Parallel dasturning ishlash vaqtining ketma-ket dasturning ishlash vaqtiga nisbati",
    "noAnswer2": "Eng sekin jarayonning ishlash vaqtining eng tez ish vaqtiga nisbati",
    "noAnswer3": "Eng tez jarayonning ishlash vaqtining eng sekin ish vaqtiga nisbati"
  },
  {
    "question": "Parallel dasturning samaradorligi qanday?",
    "answer": "Parallel dastur tezlashuvining protsessorlar soniga nisbati",
    "noAnswer1": "Ketma-ket dasturning ishlash vaqtining parallel dasturning ishlash vaqtiga nisbati",
    "noAnswer2": "Protsessorlar sonining dastur tezlashishiga nisbati",
    "noAnswer3": "Parallel dasturning ishlash vaqtining ketma-ket dasturning ishlash vaqtiga nisbati"
  },
  {
    "question": "Parallel dasturda hisoblashning narxi nima?",
    "answer": "Barcha parallel jarayonlarning umumiy bajarilish vaqti",
    "noAnswer1": "Parallel jarayonlarning eng kichik bajarilish vaqti",
    "noAnswer2": "Parallel jarayonlarning eng uzun bajarilish vaqti",
    "noAnswer3": "Protsessorlar soniga ko'paytirilgan samaradorlik"
  },
  {
    "question": "Superchiziqli tezlanish nima?",
    "answer": "Samaradorlik birdan katta bo'lganda",
    "noAnswer1": "Tezlashtirish protsessorlar sonidan kam bo'lganda",
    "noAnswer2": "Tezlashtirish protsessorlar soniga teng bo'lganda",
    "noAnswer3": "Samaradorlik birdan kam bo'lsa"
  },
  {
    "question": "Samaradorlikni saqlash odatda talab qiladi",
    "noAnswer1": "Qayta ishlangan axborot hajmini oshirish.",
    "noAnswer2": "Qayta ishlangan ma'lumotlar miqdorini kamaytiring.",
    "noAnswer3": "Protsessorlar sonini ko'paytirish"
  },
  {
    "question": "Asosiy mantiqiy sxemalarning qanday xillari mavjud?",
    "answer": " arifmetik va kombinator",
    "noAnswer1": "kombinator va algoritmik",
    "noAnswer2": "algoritmik va komparator",
    "noAnswer3": "Komparator"
  },
  {
    "question": "Asosiy menyu ochilad",
    "answer": "Pusk tugmasi orqali;",
    "noAnswer1": "Mening kompyuterim belgisini bosish orqali;",
    "noAnswer2": "kontekst menyusi orqali;",
    "noAnswer3": "Vazifalar panelini bosish orqali."
  },
  {
    "question": "BIOS bu:",
    "answer": "kompyuterni yoqgandan so’ng uni sinovdan o’tkazadigan dastur;",
    "noAnswer1": "drayver – dasturi;",
    "noAnswer2": "Utilita – dastur;",
    "noAnswer3": "dastur – ilova."
  },
  {
    "question": "BIOS nima uchun mo’ljallangan:",
    "answer": "Ona plata va unga ulangan qurilmalarni diagnostikadan va testdan o’tkazish uchun",
    "noAnswer1": "Klaviatura va printerlarni diagnostikadan va testdan o’tkazish uchun",
    "noAnswer2": "Monitorlarning diagnostikadan va testdan o’tkazish uchun",
    "noAnswer3": "Plotterlar, risograflar va nusxa ko’chirish moslamalarini diagnostikadan va testdan o’tkazish uchun"
  },
  {
    "question": "Bir nechta ventillar yordamida 0 va 1 raqamlarini saqlay oladigan 1 bitli xotira elementlari, yani …….. Hosil qilinadi",
    "answer": "triggerlar",
    "noAnswer1": "Interpretorlar",
    "noAnswer2": "Registrlar",
    "noAnswer3": "Elementlar"
  },
  {
    "question": "Bul funktsiyasiga ta’rif bering.",
    "answer": "O’zgaruvchilari va qiymati ikkita mantiqiy qiymatdan birini   qabul qilishi mumkin bo’lgan funktsiya",
    "noAnswer1": "Ushbu sxemalarning kirishiga  0 yoki 1 ga teng bo’lgan mantiqiy o’zgaruvchilar berilmaydi",
    "noAnswer2": "Mantiqiy qiymatlar ma’lum bir kattalikdagi funktsiya",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "Butun bo‘lmagan sonlarni ifodalash uchun qanday sonlar ishlatiladi?",
    "answer": "suriluvchi nuqtali  sonlar",
    "noAnswer1": "rim raqamlari",
    "noAnswer2": "kasr sonlar",
    "noAnswer3": "ratsional sonlar"
  },
  {
    "question": "Buyruqlarda  … har doim bo'ladi, ammo …. bo'lmasligi ham mumkin",
    "answer": "amal kodi, adreslar",
    "noAnswer1": "adreslar, amal kodi",
    "noAnswer2": "adreslar, kod",
    "noAnswer3": "kodlar, adreslar"
  },
  {
    "question": "Dinamik xotira statik xotiradan quyidagi afzalliklarga ega:",
    "answer": "Arzonroq narx",
    "noAnswer1": "Unga kirishning yuqori tezligi",
    "noAnswer2": "Ishonchlilik",
    "noAnswer3": "Ikki kanalli rejimda ishlash qobiliyati"
  },
  {
    "question": "Drayver bu:",
    "answer": "kompyuter qurilmalari bilan ishlash dasturi;",
    "noAnswer1": "kompyuter qurilmasi;",
    "noAnswer2": "amaliy dastur;",
    "noAnswer3": "dasturlash tili."
  },
  {
    "question": "Fayl yoki papkani faollashtirishingiz yoki tanlashingiz uchun:",
    "answer": "sichqonchani bir marta bosish orqali;",
    "noAnswer1": "sichqonchani ikki marta bosish orqali;",
    "noAnswer2": "tortib olish;",
    "noAnswer3": "Fayl yoki papkani sichqoncha bilan ko’rsatish orqali."
  },
  {
    "question": "Floppi qanday form faktor mavjud emas?",
    "answer": "10 dyuym",
    "noAnswer1": "5,25 dyuym",
    "noAnswer2": "3.5 dyuym",
    "noAnswer3": "8 dyuym"
  },
  {
    "question": "hozirda ishlab chiqarilayotgan kompyuterlarni qurilishi asoslarini ozida mujassam etgan dastlabki kompyuterlardan biri kim tomonidan ishlab chiqilgan?",
    "answer": "Djon Fon Heyman",
    "noAnswer1": "Cray Research",
    "noAnswer2": "Bebbidj",
    "noAnswer3": "Leybnits"
  },
  {
    "question": "Kesh xotirasining qaysi darajasi eng tezkor?",
    "answer": "Birinchi",
    "noAnswer1": "Ikkinchi",
    "noAnswer2": "Uchinchidan",
    "noAnswer3": "To’rtinchi"
  },
  {
    "question": "Kichik integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "1 tadan 10 tagacha",
    "noAnswer1": "10 tadan 15 tagacha",
    "noAnswer2": "cheksiz bo'lishi mumkin",
    "noAnswer3": "5 tadan 35 tagacha"
  },
  {
    "question": "Kichik integral sxemalarning kengligi qanchani tashkil qiladi?",
    "answer": " 5-15 mm",
    "noAnswer1": "5-10 mm",
    "noAnswer2": "3-5 mm",
    "noAnswer3": "5-15 sm"
  },
  {
    "question": "Kompyuter nima?",
    "answer": "Ma’lumotlar ustida turli amallar bajaruvchi kichik hajmdagi elektron hisoblash mashinasi.",
    "noAnswer1": "Faqat yozishga mo’ljallangan elektron hisoblash mashinasi.",
    "noAnswer2": "Faqat o’qish uchun mo’ljallangan elektron hisoblash mashinasi.",
    "noAnswer3": "Ma'lumotlarni ekranga chiqaruvchi qurilma"
  },
  {
    "question": "Kompyuter quvvat manbai quyidagilarni bajarmaydi",
    "answer": " Elektr uzilib qolganda uzluksiz ishlashni ta’minlash",
    "noAnswer1": "Barcha qurilmalarni elektr energiyasi bilan ta’minlash",
    "noAnswer2": "Kuchlanishni belgilangan qiymatlarga o’tkazish",
    "noAnswer3": "Kichik elektr shovqinlarini filtrlash"
  },
  {
    "question": "Kompyuter tarmog’ining topologiyasi",
    "answer": "Tarmoq kompyuterlarining bir-biriga nisbatan jismoniy joylashuvi va ularni chiziqlar bilan bog’lash usuli",
    "noAnswer1": "Tarmoq uchun ishlatiladigan kabel turi",
    "noAnswer2": "Tarmoq simini siqish usuli",
    "noAnswer3": "Butun tarmoqning o’tkazuvchanligi"
  },
  {
    "question": "Kompyuter yoqsangiz , protsessor quyidagilarga murojat qiladi",
    "answer": "doimiy hotiraga;",
    "noAnswer1": "tezkor xotiraga;",
    "noAnswer2": "qattiq diskga;",
    "noAnswer3": "diskga."
  },
  {
    "question": "Kompyuterda ifodalanishi mumkin bolgan malumotlar hillarini necha turkumga ajratish mumkin?",
    "answer": "2",
    "noAnswer1": "1",
    "noAnswer2": "3",
    "noAnswer3": "4"
  },
  {
    "question": "Kompyuterdagi eng tezkor xotira qaysi?",
    "answer": "Protsessor registrining xotirasi",
    "noAnswer1": "Kesh xotirasi",
    "noAnswer2": "RAM",
    "noAnswer3": "Qattiq disklar"
  },
  {
    "question": "Kompyuterlarda ifodalanishi mumkin bo‘lgan ma’lumotlar necha xil bo'ladi?",
    "answer": "2 xil",
    "noAnswer1": "3 xil",
    "noAnswer2": "1 xil",
    "noAnswer3": "4 xil"
  },
  {
    "question": "Kompyuterlarda ifodalanishi mumkin bo‘lgan ma’lumotlar turini ko'rsating",
    "answer": " raqamli va raqamli bo'lmagan ma'lumotlar",
    "noAnswer1": "Mantiqiy  va belgili ma’lumotlar",
    "noAnswer2": "Simvolli va mantiqiy ma'lumotlar",
    "noAnswer3": "Mantiqiy , raqamli, raqamli bo'lmagan va  simvolli ma'lumotlar"
  },
  {
    "question": "Kompyuterni elektr bilan ta’minlash blokining asosiy xususiyatlari",
    "answer": "Quvvat",
    "noAnswer1": "O’lchamlari",
    "noAnswer2": "Narx",
    "noAnswer3": "Unga ulangan turli xil qurilmalarni elektr ta’minoti uchun ulagichlar soni"
  },
  {
    "question": "LPT porti unga ... ni ulanish uchun mo’ljallangan:",
    "answer": "Printerlar va skanerlar",
    "noAnswer1": "Ovoz va video adapterlari",
    "noAnswer2": "Klaviatura va sichqoncha manipulyatorlari",
    "noAnswer3": "Modemlar"
  },
  {
    "question": "Magneto-optik disklarning kamchiligi",
    "answer": "Magnit maydonlarga nisbatan sezgirligi past",
    "noAnswer1": "Himoyalavchi plastik sumkasi",
    "noAnswer2": "Yozish tezligining pastligi",
    "noAnswer3": "Ma’lumotlarni saqlash davri"
  },
  {
    "question": "Klaster uchun eng tezkor tarmoqni ko'rsating.",
    "answer": "Infinyband",
    "noAnswer1": "Myrinet",
    "noAnswer2": "Gigabit Ethernet",
    "noAnswer3": "Ethernet"
  },
  {
    "question": "+\r\n\r\nAmdal qonuni … hisoblab chiqadi:",
    "answer": "bir nechta protsessorlarda hisob-kitoblarni tezlashtirishini",
    "noAnswer1": "o'rnatilgan operatsiyalar sonini",
    "noAnswer2": "konveyer chuqurligini",
    "noAnswer3": "hisoblash uchun sarflangan vaqtni"
  },
  {
    "question": "+\r\n\r\nKommunikator - bu ...",
    "answer": "jarayon guruhi identifikatori",
    "noAnswer1": "parallel tizimda intercom",
    "noAnswer2": "kalit bilan bir xil",
    "noAnswer3": "Klaster aloqa simulyatori"
  },
  {
    "question": "+\r\n\r\nMPI xotiradan foydalanishning qanday strategiyasini taklif qiladi?",
    "answer": "Tarqalgan",
    "noAnswer1": "Ulashgan",
    "noAnswer2": "Masofadan",
    "noAnswer3": "Mahalliy"
  },
  {
    "question": "+\r\n\r\nParallel dastur bu ...",
    "answer": "birgalikda ishlaydigan bir nechta jarayonlarni o'z ichiga olgan dastur",
    "noAnswer1": "katta hajmdagi ma'lumotlar dasturi",
    "noAnswer2": "tarmoq xabar almashish dasturi",
    "noAnswer3": "bir vaqtning o'zida bir nechta kompyuterlarda ishlaydigan dastur"
  },
  {
    "question": "+\r\n\r\nAsinxron parallel hisoblash modeli quyidagi xususiyatlarga ega:",
    "answer": "turli jarayonlar turli masalalarni hal qiladi",
    "noAnswer1": "barcha jarayonlar o'z ma'lumotlari bilan bir xil harakatlarni bajaradi",
    "noAnswer2": "barcha jarayonlar umumiy xotiradan foydalanadi",
    "noAnswer3": "barcha jarayonlar o'zlarining muhim bo'limlarida ishlaydi"
  },
  {
    "question": "+\r\n\r\nSinxron parallel hisoblash modeli quyidagi xususiyatlarga ega:",
    "answer": "barcha jarayonlar o'z ma'lumotlari bilan bir xil harakatlarni bajaradi",
    "noAnswer1": "turli jarayonlar turli muammolarni hal qiladi",
    "noAnswer2": "barcha jarayonlar umumiy xotiradan foydalanadi",
    "noAnswer3": "barcha jarayonlar o'zlarining muhim bo'limlarida ishlaydi"
  },
  {
    "question": "+\r\n\r\nQanday amallarni parallel bajarish mumkin?",
    "answer": "mustaqil",
    "noAnswer1": "mustaqil bo`lmagan",
    "noAnswer2": "Oddiy",
    "noAnswer3": "bo'linmas"
  },
  {
    "question": "+\r\n\r\nQanday jarayon iste'molchi deb ataladi?",
    "answer": "Ma'lumotlarni qabul qiluvchi jarayon",
    "noAnswer1": "Ma'lumotlarni uzatishni qayta ishlash",
    "noAnswer2": "Ma'lumotlarni kiritish jarayoni",
    "noAnswer3": "Ma'lumotlarni chiqaradigan jarayon"
  },
  {
    "question": "+\r\n\r\nIshlab chiqaruvchi deb qanday jarayonga aytiladi?",
    "answer": "Ma'lumotlarni uzatuvchi jarayon",
    "noAnswer1": "Ma'lumotlarni qabul qiluvchi jarayon",
    "noAnswer2": "Ma'lumotlarni kiritish jarayoni",
    "noAnswer3": "Ma'lumotlarni chiqaradigan jarayon"
  },
  {
    "question": "+\r\n\r\nZamonaviy protsessorlarda unimdorligini oshirish uchun qanday texnologiyalar qo'llanilmaydi?",
    "answer": "Ko'p oqimlilik",
    "noAnswer1": "Superskalarlik",
    "noAnswer2": "quvurlarni o'tkazish",
    "noAnswer3": "Vektorli ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nKonveyyerlashtirish nima?",
    "answer": "Buyruqlarning turli qismlarini parallel bajarish",
    "noAnswer1": "Bir vaqtning o'zida bir nechta buyruqlarni bajarish",
    "noAnswer2": "Ultra tez xotirada ma'lumotlarni saqlash",
    "noAnswer3": "Katta hajmdagi ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nSuperskalarlik nima?",
    "answer": "Bir vaqtning o'zida bir nechta buyruqlarni bajarish",
    "noAnswer1": "Buyruqlarning turli qismlarini parallel bajarish",
    "noAnswer2": "Ultra tez xotirada ma'lumotlarni saqlash",
    "noAnswer3": "Katta hajmdagi ma'lumotlarni qayta ishlash"
  },
  {
    "question": "+\r\n\r\nMIMD texnologiyasiga qanday tizimlar tegishli?",
    "answer": "Vektorli protsessorlar",
    "noAnswer1": "Matritsali protsessorlar",
    "noAnswer2": "Klasterlar, Simmetrik multiprotsessor",
    "noAnswer3": "Vektorli protsessorlar, matritsali protsessorlar"
  },
  {
    "question": "+\r\n\r\nKo'p yadroli tizimlar qaysi sinfga kiradi?",
    "answer": "Umumiy xotiraga ega tizimlar",
    "noAnswer1": "taqsimlangan tizimlar",
    "noAnswer2": "Klasterlar",
    "noAnswer3": "Matritsali protsessorlar"
  },
  {
    "question": "+\r\n\r\nKlaster tizimlari qaysi sinfga kiradi?",
    "answer": "Taqsimlangan tizimlar",
    "noAnswer1": "Matritsali protsessorlar",
    "noAnswer2": "Simmetrik multiprotsessorlar",
    "noAnswer3": "Umumiy xotiraga ega tizimlar"
  },
  {
    "question": "+\r\n\r\nQanday ob'ektlar umumiy xotiraga ega?",
    "answer": "Ikki oqimli",
    "noAnswer1": "Ikki jarayonli",
    "noAnswer2": "Oqim va jarayonli",
    "noAnswer3": "Klaster tugunlarini hisoblash"
  },
  {
    "question": "+\r\n\r\nNima ma'lumotlar uchun xususiy xotiraga ega?",
    "answer": "Jarayon",
    "noAnswer1": "Oqim",
    "noAnswer2": "Ham jarayon, ham oqim",
    "noAnswer3": "Hech narsa"
  },
  {
    "question": "+\r\n\r\nJarayonlarning o'zaro ta'siri qanday tashkil etilgan?",
    "answer": "Xabarlarni almashish orqali, aayl tizimi orqali",
    "noAnswer1": "Umumiy xotira orqali, tezkor orqali",
    "noAnswer2": "Kesh xotirasi orqali",
    "noAnswer3": "Protsessor registrlari orqali"
  },
  {
    "question": "+\r\n\r\nParallel dasturning tezlanishi nima?",
    "answer": "Ketma-ket dasturning ishlash vaqtining parallel dasturning ishlash vaqtiga nisbati",
    "noAnswer1": "Parallel dasturning ishlash vaqtining ketma-ket dasturning ishlash vaqtiga nisbati",
    "noAnswer2": "Eng sekin jarayonning ishlash vaqtining eng tez ish vaqtiga nisbati",
    "noAnswer3": "Eng tez jarayonning ishlash vaqtining eng sekin ish vaqtiga nisbati"
  },
  {
    "question": "+\r\n\r\nParallel dasturning samaradorligi qanday?",
    "answer": "Parallel dastur tezlashuvining protsessorlar soniga nisbati",
    "noAnswer1": "Ketma-ket dasturning ishlash vaqtining parallel dasturning ishlash vaqtiga nisbati",
    "noAnswer2": "Protsessorlar sonining dastur tezlashishiga nisbati",
    "noAnswer3": "Parallel dasturning ishlash vaqtining ketma-ket dasturning ishlash vaqtiga nisbati"
  },
  {
    "question": "+\r\n\r\nParallel dasturda hisoblashning narxi nima?",
    "answer": "Barcha parallel jarayonlarning umumiy bajarilish vaqti",
    "noAnswer1": "Parallel jarayonlarning eng kichik bajarilish vaqti",
    "noAnswer2": "Parallel jarayonlarning eng uzun bajarilish vaqti",
    "noAnswer3": "Protsessorlar soniga ko'paytirilgan samaradorlik"
  },
  {
    "question": "+\r\n\r\nSuperchiziqli tezlanish nima?",
    "answer": "Samaradorlik birdan katta bo'lganda",
    "noAnswer1": "Tezlashtirish protsessorlar sonidan kam bo'lganda",
    "noAnswer2": "Tezlashtirish protsessorlar soniga teng bo'lganda",
    "noAnswer3": "Samaradorlik birdan kam bo'lsa"
  },
  {
    "question": "+\r\n\r\nSamaradorlikni saqlash odatda talab qiladi",
    "answer": "Qayta ishlangan axborot hajmini oshirish.",
    "noAnswer1": "Qayta ishlangan ma'lumotlar miqdorini kamaytiring.",
    "noAnswer2": "Protsessorlar sonini ko'paytirish",
    "noAnswer3": "Protsessorlar sonini kamaytiring"
  },
  {
    "question": "+\r\n\r\nAsosiy mantiqiy sxemalarning qanday xillari mavjud?",
    "answer": " arifmetik va kombinator",
    "noAnswer1": "kombinator va algoritmik",
    "noAnswer2": "algoritmik va komparator",
    "noAnswer3": "Komparator"
  },
  {
    "question": "+\r\n\r\n Asosiy menyu ochilad",
    "answer": "Pusk tugmasi orqali;",
    "noAnswer1": "Mening kompyuterim belgisini bosish orqali;",
    "noAnswer2": "kontekst menyusi orqali;",
    "noAnswer3": "Vazifalar panelini bosish orqali."
  },
  {
    "question": "+\r\n\r\n BIOS nima uchun mo’ljallangan:",
    "answer": "Ona plata va unga ulangan qurilmalarni diagnostikadan va testdan o’tkazish uchun",
    "noAnswer1": "Klaviatura va printerlarni diagnostikadan va testdan o’tkazish uchun",
    "noAnswer2": "Monitorlarning diagnostikadan va testdan o’tkazish uchun",
    "noAnswer3": "Plotterlar, risograflar va nusxa ko’chirish moslamalarini diagnostikadan va testdan o’tkazish uchun"
  },
  {
    "question": "+\r\n\r\n Bir nechta ventillar yordamida 0 va 1 raqamlarini saqlay oladigan 1 bitli xotira elementlari, yani …….. Hosil qilinadi",
    "answer": "triggerlar",
    "noAnswer1": "Interpretorlar",
    "noAnswer2": "Registrlar",
    "noAnswer3": "Elementlar"
  },
  {
    "question": "+\r\n\r\n Birinchi ommaviy mikroprotsessor qaysi yilda chiqarildi?",
    "answer": "1971 yil",
    "noAnswer1": "1968 yil",
    "noAnswer2": "1945 yil",
    "noAnswer3": "1956 yil"
  },
  {
    "question": "+\r\n\r\n Bitta chipli DLP proektorlarning kamchiliklar",
    "answer": "Kamalak effekti",
    "noAnswer1": "Past kontrastligi",
    "noAnswer2": "Yuqori narx",
    "noAnswer3": "Mikrooynalarning kuchli isishi"
  },
  {
    "question": "+\r\n\r\n Bul funktsiyasiga ta’rif bering.",
    "answer": "O’zgaruvchilari va qiymati ikkita mantiqiy qiymatdan birini   qabul qilishi mumkin bo’lgan funktsiya",
    "noAnswer1": "Ushbu sxemalarning kirishiga  0 yoki 1 ga teng bo’lgan mantiqiy o’zgaruvchilar berilmaydi",
    "noAnswer2": "Mantiqiy qiymatlar ma’lum bir kattalikdagi funktsiya",
    "noAnswer3": "To’g’ri javob yo’q"
  },
  {
    "question": "+\r\n\r\n Butun bo‘lmagan sonlarni ifodalash uchun qanday sonlar ishlatiladi?",
    "answer": "suriluvchi nuqtali  sonlar",
    "noAnswer1": "rim raqamlari",
    "noAnswer2": "kasr sonlar",
    "noAnswer3": "ratsional sonlar"
  },
  {
    "question": "+\r\n\r\n Buyruqlarda  … har doim bo'ladi, ammo …. bo'lmasligi ham mumkin",
    "answer": "amal kodi, adreslar",
    "noAnswer1": "adreslar, amal kodi",
    "noAnswer2": "adreslar, kod",
    "noAnswer3": "kodlar, adreslar"
  },
  {
    "question": "+\r\n\r\n Core I7 protssesori nechta tranzistorlardan iborat?",
    "answer": "1 160 000 000",
    "noAnswer1": "11 600 000",
    "noAnswer2": "160 000 000",
    "noAnswer3": "1 000 000 000"
  },
  {
    "question": "+\r\n\r\n Core i7 protssesori qachon yaratilgan?",
    "answer": "2011",
    "noAnswer1": "2012",
    "noAnswer2": "2013",
    "noAnswer3": "2015"
  },
  {
    "question": "+\r\n\r\n Elektron nurli trubkaga asoslangan monitorning asosiy element",
    "answer": "Kineskop va elektron pushka",
    "noAnswer1": "G’lof",
    "noAnswer2": "Lyuminofor",
    "noAnswer3": "Elektr ta’minoti"
  },
  {
    "question": "+\r\n\r\n Fayl yoki papkani faollashtirishingiz yoki tanlashingiz uchun:",
    "answer": "sichqonchani bir marta bosish orqali;",
    "noAnswer1": "sichqonchani ikki marta bosish orqali;",
    "noAnswer2": "tortib olish;",
    "noAnswer3": "Fayl yoki papkani sichqoncha bilan ko’rsatish orqali."
  },
  {
    "question": "+\r\n\r\n Floppi qanday form faktor mavjud emas?",
    "answer": "10 dyuym",
    "noAnswer1": "5,25 dyuym",
    "noAnswer2": "3.5 dyuym",
    "noAnswer3": "8 dyuym"
  },
  {
    "question": "+\r\n\r\n Front Side Bus  (FSB) quyidagilar o’rtasida aloqani ta’minlaydi",
    "answer": "Protsessor va boshqa qurilmalar o’rtasida",
    "noAnswer1": "Qattiq disklar o’rtasida",
    "noAnswer2": "Ona platadagi shimoliy va janubiy ko’priklar",
    "noAnswer3": "Ma’lumotlar shinasi va manzil shinasi o’rtasida"
  },
  {
    "question": "+\r\n\r\n hozirda ishlab chiqarilayotgan kompyuterlarni qurilishi asoslarini ozida mujassam etgan dastlabki kompyuterlardan biri kim tomonidan ishlab chiqilgan?",
    "answer": "Djon Fon Heyman",
    "noAnswer1": "Cray Research",
    "noAnswer2": "Bebbidj",
    "noAnswer3": "Leybnits"
  },
  {
    "question": "+\r\n\r\n hozirda ishlab chiqarilayotgan kompyuterlarni qurilishi asoslarini ozida mujassam etgan dastlabki kompyuterlardan biri nechanchi yilda ishlab chiqilgan?",
    "answer": "1952",
    "noAnswer1": "1950",
    "noAnswer2": "1955",
    "noAnswer3": "1960"
  },
  {
    "question": "+\r\n\r\n IA-32 arxitekturasiga ega bo’lgan MP selektorining quvvati qanday?",
    "answer": "16",
    "noAnswer1": "64",
    "noAnswer2": "8",
    "noAnswer3": "32"
  },
  {
    "question": "+\r\n\r\n IA-32 arxitekturasiga ega MP-ning IDTR registrining kengligi qancha?",
    "answer": "48",
    "noAnswer1": "32",
    "noAnswer2": "64",
    "noAnswer3": "16"
  },
  {
    "question": "+\r\n\r\n IA-32 MP umumiy foydalanish registrlarida nechta 32 bitli registrlar mavjud?",
    "answer": "8",
    "noAnswer1": "4",
    "noAnswer2": "16",
    "noAnswer3": "64"
  },
  {
    "question": "+\r\n\r\n Ikki kanalli rejimda tezkor xotiraning ishlashi unumdorlikni necha foiz oshiradi",
    "answer": "10-15%",
    "noAnswer1": "2-3%",
    "noAnswer2": "40-60%",
    "noAnswer3": "90-95%"
  },
  {
    "question": "+\r\n\r\n Ikkilik sanoq tizimidagi raqamlarni o‘nlik sanoq tizimidagi kodga  o‘zgartiruvchi kombinatsion mantiqiy qurilma",
    "answer": "Dekoderlar",
    "noAnswer1": "Komparatorlar",
    "noAnswer2": "Jamlagich",
    "noAnswer3": "Mutipleksor"
  },
  {
    "question": "+\r\n\r\n Integral sxema o‘lchamlari tahminan qancha bo'ladi? (mm)",
    "answer": "5x5 kvadrat shaklida",
    "noAnswer1": "5x4 to'g'ri to'rtburchak shaklida",
    "noAnswer2": "4x4 doira shaklida",
    "noAnswer3": "6x4 ko'pburchak shaklida"
  },
  {
    "question": "+\r\n\r\n Intelning birinchi 64-bitli mikroprotsessori qanday nomlangan?",
    "answer": " Itanium",
    "noAnswer1": "Pentium 4",
    "noAnswer2": "Pentium MMX",
    "noAnswer3": "Pentium"
  },
  {
    "question": "+\r\n\r\n Janubiy ko’prik protsessor va ...  ni bog’laydi",
    "answer": " Qattiq disklar",
    "noAnswer1": "RAM",
    "noAnswer2": "Video kartalar",
    "noAnswer3": "Tizim shinasi"
  },
  {
    "question": "+\r\n\r\n Katta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "100 tadan 100 000 tagacha",
    "noAnswer1": "10 tadan 100 tagacha",
    "noAnswer2": "10 tadan 1000 tagacha",
    "noAnswer3": "100 tadan 10 000 tagacha"
  },
  {
    "question": "+\r\n\r\n Kesh xotirasining qaysi darajasi eng tezkor?",
    "answer": "Birinchi",
    "noAnswer1": "Ikkinchi",
    "noAnswer2": "Uchinchidan",
    "noAnswer3": "To’rtinchi"
  },
  {
    "question": "+\r\n\r\n Kichik integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "1 tadan 10 tagacha",
    "noAnswer1": "10 tadan 15 tagacha",
    "noAnswer2": "cheksiz bo'lishi mumkin",
    "noAnswer3": "5 tadan 35 tagacha"
  },
  {
    "question": "+\r\n\r\n Kichik integral sxemalarning kengligi qanchani tashkil qiladi?",
    "answer": " 5-15 mm",
    "noAnswer1": "5-10 mm",
    "noAnswer2": "3-5 mm",
    "noAnswer3": "5-15 sm"
  },
  {
    "question": "+\r\n\r\n Kompyuter nima?",
    "answer": "Ma’lumotlar ustida turli amallar bajaruvchi kichik hajmdagi elektron hisoblash mashinasi.",
    "noAnswer1": "Faqat yozishga mo’ljallangan elektron hisoblash mashinasi.",
    "noAnswer2": "Faqat o’qish uchun mo’ljallangan elektron hisoblash mashinasi.",
    "noAnswer3": "Ma'lumotlarni ekranga chiqaruvchi qurilma"
  },
  {
    "question": "+\r\n\r\n Kompyuter quvvat manbai quyidagilarni bajarmaydi",
    "answer": " Elektr uzilib qolganda uzluksiz ishlashni ta’minlash",
    "noAnswer1": "Barcha qurilmalarni elektr energiyasi bilan ta’minlash",
    "noAnswer2": "Kuchlanishni belgilangan qiymatlarga o’tkazish",
    "noAnswer3": "Kichik elektr shovqinlarini filtrlash"
  },
  {
    "question": "+\r\n\r\n Kompyuter tarmog’ining topologiyasi",
    "answer": "Tarmoq kompyuterlarining bir-biriga nisbatan jismoniy joylashuvi va ularni chiziqlar bilan bog’lash usuli",
    "noAnswer1": "Tarmoq uchun ishlatiladigan kabel turi",
    "noAnswer2": "Tarmoq simini siqish usuli",
    "noAnswer3": "Butun tarmoqning o’tkazuvchanligi"
  },
  {
    "question": "+\r\n\r\n Kompyuter yoqsangiz , protsessor quyidagilarga murojat qiladi",
    "answer": "doimiy hotiraga;",
    "noAnswer1": "tezkor xotiraga;",
    "noAnswer2": "qattiq diskga;",
    "noAnswer3": "diskga."
  },
  {
    "question": "+\r\n\r\n Kompyuterda ifodalanishi mumkin bolgan malumotlar hillarini necha turkumga ajratish mumkin?",
    "answer": "2",
    "noAnswer1": "1",
    "noAnswer2": "3",
    "noAnswer3": "4"
  },
  {
    "question": "+\r\n\r\n Kompyuterdagi eng tezkor xotira qaysi?",
    "answer": "Protsessor registrining xotirasi",
    "noAnswer1": "Kesh xotirasi",
    "noAnswer2": "RAM",
    "noAnswer3": "Qattiq disklar"
  },
  {
    "question": "+\r\n\r\n Kompyuterlarda ifodalanishi mumkin bo‘lgan ma’lumotlar necha xil bo'ladi?",
    "answer": "2 xil",
    "noAnswer1": "3 xil",
    "noAnswer2": "1 xil",
    "noAnswer3": "4 xil"
  },
  {
    "question": "+\r\n\r\n Kompyuterlarda ifodalanishi mumkin bo‘lgan ma’lumotlar turini ko'rsating",
    "answer": " raqamli va raqamli bo'lmagan ma'lumotlar",
    "noAnswer1": "Mantiqiy  va belgili ma’lumotlar",
    "noAnswer2": "Simvolli va mantiqiy ma'lumotlar",
    "noAnswer3": "Mantiqiy , raqamli, raqamli bo'lmagan va  simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Kompyuterni elektr bilan ta’minlash blokining asosiy xususiyatlari",
    "answer": "Printerlar va skanerlar",
    "noAnswer1": "O’lchamlari",
    "noAnswer2": "Narx",
    "noAnswer3": "Unga ulangan turli xil qurilmalarni elektr ta’minoti uchun ulagichlar soni"
  },
  {
    "question": "+\r\n\r\n Magneto-optik disklarning kamchiligi",
    "answer": "Magnit maydonlarga nisbatan sezgirligi past",
    "noAnswer1": "Himoyalavchi plastik sumkasi",
    "noAnswer2": "Yozish tezligining pastligi",
    "noAnswer3": "Ma’lumotlarni saqlash davri"
  },
  {
    "question": "+\r\n\r\n Mantiqiy manzilni jismoniy manzilga tarjima qilish mantiqiy manzil maydonini segment-sahifali tashkiloti bilan qanday tashkil etilgan?",
    "answer": "birinchi navbatda disk xotira birligi tomonidan, keyin esa mikroprotsessor MMU-ga murojaat qilish orqali.",
    "noAnswer1": "manzil tarjimasi talab qilinmaydi.",
    "noAnswer2": "mikroprotsessorning MMU sahifa adreslash birligi.",
    "noAnswer3": "mikroprotsessorning MMU segmentining adreslash birligi."
  },
  {
    "question": "+\r\n\r\nOLED monitorlarida LCD monitorlardan farqli o’laroq, qanday tarkibiy element etishmayapti?",
    "answer": "Orqa yorug’lik chiroqlari",
    "noAnswer1": "Ilovalar",
    "noAnswer2": "Tasviriy naycha",
    "noAnswer3": "Katod nurlari trubkasi"
  },
  {
    "question": "+\r\n\r\n Ona platadagi chipset ... ni o’zida aks ettiradi",
    "answer": "Shimoliy va janubiy ko’prik mikrosxemalari to’plami",
    "noAnswer1": "Tizim shinasi va operativ xotira hajmi",
    "noAnswer2": "Ona platada joylashgan barcha qurilmalarning to’plami",
    "noAnswer3": "Ona platadagi barcha portlar va ulagichlarning to’plami"
  },
  {
    "question": "+\r\n\r\n Ona platadagi shimoliy ko’prik quyidagilarni qo’llab-quvvatlaydi",
    "answer": "Tizim shinasi, operativ xotira, videoadapter",
    "noAnswer1": "Qattiq disklar va optik disklar",
    "noAnswer2": "Ovoz kartasi va modem",
    "noAnswer3": "Klaviatura, sichqonlar, printerlar, skanerlar"
  },
  {
    "question": "+\r\n\r\n Ona platadan elektr manbasi elementlarini olib tashlab, qayta o’rnatgandan so’ng nima bo’ladi",
    "answer": " Barcha BIOS sozlamalarini sukut bo’yicha (po umolchaniyu)  sozlash",
    "noAnswer1": "BIOS parolini tiklash",
    "noAnswer2": "BIOS mikodasturini o’chirish",
    "noAnswer3": "Hech narsa bo’lmaydi"
  },
  {
    "question": "+\r\n\r\n Operativ xotira xossasiga nima xos emas?",
    "answer": "Narx",
    "noAnswer1": "O’tkazish qobiliyati",
    "noAnswer2": "Vaqt (Tayming)",
    "noAnswer3": "Xotira turi"
  },
  {
    "question": "+\r\n\r\n Operatsion tizim bu:",
    "answer": "tizim dasturi;",
    "noAnswer1": "amaliy dastur;",
    "noAnswer2": "dasturlash tizimi;",
    "noAnswer3": "matn muharriri."
  },
  {
    "question": "+\r\n\r\n Optik disklarning birinchi avlodi quyidagilarni o’z ichiga oladi",
    "answer": "CD disklar",
    "noAnswer1": "Blu-ray disklari",
    "noAnswer2": "DVD disklar",
    "noAnswer3": "Golografik disklar"
  },
  {
    "question": "+\r\n\r\n O'rta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "10 tadan 100 tagacha",
    "noAnswer1": "1 tadan 10 tagacha",
    "noAnswer2": "100 tadan 1000 tagacha",
    "noAnswer3": "10 tadan 50 tagacha"
  },
  {
    "question": "+\r\n\r\n O'ta katta integral sxemalarda ventillar soni qanchani tashkil qiladi?",
    "answer": "100 000 tadan ortiq",
    "noAnswer1": "1000 tadan 100 000 tagacha",
    "noAnswer2": "100 tadan 10 000 tagacha",
    "noAnswer3": "100 tadan 100 000 tagacha"
  },
  {
    "question": "+\r\n\r\n Oxirida maxsus belgi yoki qatorning  uzunligini ko‘rsatuvchi qismi mavjud bo'lgan ma'lumot - bu …",
    "answer": "Qatorlar ko‘rinishidagi ma’lumotlar",
    "noAnswer1": "Mantiqiy ma’lumotlar",
    "noAnswer2": "Simvolli ma'lumotlar",
    "noAnswer3": "Mantiqiy va simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Oyna bu:",
    "answer": "Windows bilan aloqa qilishning asosiy vositasi;",
    "noAnswer1": "ish maydoni;",
    "noAnswer2": "Windows ilovasi;",
    "noAnswer3": "Windows hodisasi."
  },
  {
    "question": "+\r\n\r\n Oyna kengligi va balandligi bo’yicha bir tekis o’zgartirish uchun quyidagilar kerak:",
    "answer": "burchakni torting;",
    "noAnswer1": "gorizontal ramkani torting;",
    "noAnswer2": "vertikal ramkani torting;",
    "noAnswer3": "sarlavhani torting."
  },
  {
    "question": "+\r\n\r\n Oyna menyusi satri qaerda joylashgan:",
    "answer": "yuqorida;",
    "noAnswer1": "pastdanda;",
    "noAnswer2": "chapda;",
    "noAnswer3": "o’ng tomonda."
  },
  {
    "question": "+\r\n\r\n PCI ( Periferik Component Interconnect ) shinasi  ... ni ulanishga imkon beradi",
    "answer": "Ovoz va video adapterlari",
    "noAnswer1": "Protsessor",
    "noAnswer2": "Qattiq disklar",
    "noAnswer3": "Mikrofonlar va karnay tizimi"
  },
  {
    "question": "+\r\n\r\n Pentium 4 protsessorida buyruq formatlari nechi  xil bo'ladi?",
    "answer": "4 xil",
    "noAnswer1": "5 xil",
    "noAnswer2": "3 xil",
    "noAnswer3": "2 xil"
  },
  {
    "question": "+\r\n\r\n Pentium 4 protssesori qachon yaratilgan?",
    "answer": "2000",
    "noAnswer1": "1997",
    "noAnswer2": "2001",
    "noAnswer3": "1999"
  },
  {
    "question": "+\r\n\r\n Printerni shaxsiy kompyuterga ulash uchun odatda qaysi portlardan foydalaniladi?",
    "answer": "LPT va USB",
    "noAnswer1": "PS / 2 va FireWire",
    "noAnswer2": "MAQOMOTI va LAN",
    "noAnswer3": "USB va VGA"
  },
  {
    "question": "+\r\n\r\n Protsessorning tezkorligi nima?",
    "answer": "Vaqt birligida protsessor tomonidan bajariladigan elementar operatsiyalar soni",
    "noAnswer1": "Ikki qo’shni takt impulslarining boshlanishi orasidagi vaqt oralig’i",
    "noAnswer2": "Bu bir vaqtning o’zida ishlov berilishi yoki uzatilishi mumkin bo’lgan ikkilik kodlarning maksimal sonidir",
    "noAnswer3": "Generator tomonidan bir soniyada hosil qilingan impulslar soni"
  },
  {
    "question": "+\r\n\r\n PS / 2 porti unga ...ni ulanish uchun mo’ljallangan:",
    "answer": "Klaviatura va sichqonlar",
    "noAnswer1": "Qattiq disklar",
    "noAnswer2": "Videokameralar",
    "noAnswer3": "Printerlar va skanerlar"
  },
  {
    "question": "+\r\n\r\n Qaysi funktsional birlik kompyuter protsessorini o’z ichiga olmaydi?",
    "answer": "Flesh – xotira",
    "noAnswer1": "Arifmetik – mantiqiy qurilma",
    "noAnswer2": "Kesh – xotirasi",
    "noAnswer3": "Boshqarish qurilmasi"
  },
  {
    "question": "+\r\n\r\n Qaysi tugmachalar kompyuterni yoqganda BIOS- ga kirishga imkon beradi :",
    "answer": "Del, F2",
    "noAnswer1": "Alt, Enter",
    "noAnswer2": "Home, Insert",
    "noAnswer3": "Tab, Shift"
  },
  {
    "question": "+\r\n\r\n Qaysi xotira o’zgaruvchan emas?",
    "answer": " Barcha javoblar to’g’ri",
    "noAnswer1": "Disket",
    "noAnswer2": "Qattiq disk",
    "noAnswer3": "Fleshli xotira"
  },
  {
    "question": "+\r\n\r\n Qog’oz maydalagichlarda qanday hujjatlarni maydalash usuli qo’llanilmaydi?",
    "answer": "Termal",
    "noAnswer1": "Ovoz",
    "noAnswer2": "Kimyoviy",
    "noAnswer3": "Mexanik"
  },
  {
    "question": "+\r\n\r\n Quyidagi dasturlarning qaysi biri optik belgilarni aniqlash uchun mo’ljallangan?",
    "answer": "Fine Reader",
    "noAnswer1": "Windows Movie Maker",
    "noAnswer2": "Acrobat Reader",
    "noAnswer3": "Partition Magic"
  },
  {
    "question": "+\r\n\r\n Quyidagi suyuq kristalli monitorlar (LCD) matritsalarining qaysi biri fotografik tasvirlarning ranglari va ohanglarini yaxshi aks ettiradi?",
    "answer": " IPS",
    "noAnswer1": "PVA",
    "noAnswer2": "MVA",
    "noAnswer3": "TN + Film"
  },
  {
    "question": "+\r\n\r\n Rangli tasvirlarni bosib chiqarish uchun siyohli printerlar qanday rang modelidan foydalanadilar?",
    "answer": " CMYK",
    "noAnswer1": "HSB",
    "noAnswer2": "RGB",
    "noAnswer3": "HSV"
  },
  {
    "question": "+\r\n\r\n Raqaamli tizimlarning zamonaviy element bazasi bo'lib turli mikroprosesorli majmualari MPM tarkibiga kiruvchi qanday sxemalar hisoblanadi",
    "answer": " Integral (KIS)",
    "noAnswer1": "Kolektor",
    "noAnswer2": "Integral (MPI)",
    "noAnswer3": "Mantiqiy"
  },
  {
    "question": "+\r\n\r\n Raqamli bo‘lmagan ma’lumotlar turini ko'rsating",
    "answer": " Simvolli, Qator  ko'rinishidagi, Mantiqiy ma'lumotlar",
    "noAnswer1": "Butun sonlar va rim raqamlari",
    "noAnswer2": "Belgili ma'lumotlar",
    "noAnswer3": "Mantiqiy va simvolli ma'lumotlar"
  },
  {
    "question": "+\r\n\r\n Raqamli ma'lumotlar - bu …",
    "answer": " sonlar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer1": "simvollar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer2": "belgilar bilan ifodalanuvchi ma’lumotlar",
    "noAnswer3": "shifrlangan  ma’lumotlar"
  },
  {
    "question": "+\r\n\r\n Sahifalar jadvalidagi yozuvdagi A biti qanday sharoitlarda 1 ga o’rnatiladi?",
    "answer": " o’qish uchun sahifaga kirishda",
    "noAnswer1": "operatsion tizim ma’lum vaqt bo’lagidan keyin",
    "noAnswer2": "Ushbu sahifaga murojaat qilganingizda",
    "noAnswer3": "yozuv uchun sahifaga kirishda"
  },
  {
    "question": "+\r\n\r\n Segment tavsiflovchisidagi chegara maydonining uzunligi qancha?",
    "answer": " 20",
    "noAnswer1": "8",
    "noAnswer2": "16",
    "noAnswer3": "64"
  },
  {
    "question": "+\r\n\r\n Shahsiy kompyuterlar necha hil boladi?",
    "answer": "2",
    "noAnswer1": "4",
    "noAnswer2": "1",
    "noAnswer3": "3"
  },
  {
    "question": "+\r\n\r\n SHaxsiy kompyuterning корпуси нима uchun mo’ljallangan:",
    "answer": "Kompyuterning ichki qismidagi mexanik shikastlanishlardan himoya qilish",
    "noAnswer1": "Kompyuterning ishonchliligini oshirish",
    "noAnswer2": "Kompyuteringizni tezligini oshiring",
    "noAnswer3": "Kompyuter elektr energiyasini tejash"
  },
  {
    "question": "+\r\n\r\n SHina ISA ( Industry Standard Architecture ) quyidagicha maksimal o’tkazuvchanlikni ta’minlaydi",
    "answer": " 2 MB / sek",
    "noAnswer1": "33 MB / sek",
    "noAnswer2": "4,5 MB / sek",
    "noAnswer3": "5,5 MB / sek"
  },
  {
    "question": "+\r\n\r\n SHina PCI-Express x1 versiyasi odatda ...ni ulanish uchun ishlatilad",
    "answer": "Ovoz kartalari",
    "noAnswer1": "Qattiq disklar",
    "noAnswer2": "Protsessorlar",
    "noAnswer3": "Video adapterlar"
  },
  {
    "question": "+\r\n\r\n Sichqonchani kompyuterga ulash uchun qanday interfeys mavjud emas",
    "answer": " LPT",
    "noAnswer1": "COM",
    "noAnswer2": "USB",
    "noAnswer3": "PS/2"
  },
  {
    "question": "+\r\n\r\n Simvolli ma’lumotlar kodini  ko'rsating",
    "answer": "ASCII, UNICODE",
    "noAnswer1": "ASCII",
    "noAnswer2": "ASCII, UNICODE, MySQL",
    "noAnswer3": "ASCII, NortonCMD, MySQL"
  },
  {
    "question": "+\r\n\r\n Simvolli ma’lumotlarning uzunliklari necha razryadli bo'lishi mumkin?",
    "answer": " 7 (8) va 16 razryadli",
    "noAnswer1": "16 va 32 razryadli",
    "noAnswer2": "64 va 80 razryadli",
    "noAnswer3": "32 va 64 razryadli"
  },
  {
    "question": "+\r\n\r\n Skanerning eng muhim xususiyati qaysi?",
    "answer": " Optik o’lchamlari",
    "noAnswer1": "Interpolatsiyalangan rezolyutsiya",
    "noAnswer2": "Ish tezligi",
    "noAnswer3": "Rang chuqurligi"
  },
  {
    "question": "+\r\n\r\n Suriluvchi nuqtali sonlarning uzunliklari qancha bo'ladi?",
    "answer": "32, 64 yoki 128 bitgacha",
    "noAnswer1": "32, 64 yoki 128 baytgacha",
    "noAnswer2": "32, 64 yoki 128 mb gacha",
    "noAnswer3": "32, 64 yoki 128 kb gacha"
  },
  {
    "question": "+\r\n\r\n Sxemalarda mantiqiy qiymatlar ma’lum bir kattalikdagi kuchlanishlar bilan ifodalanadi. Mantiqiy 0 uchun kuchlanish qiymati qancha?",
    "answer": " 3V gacha",
    "noAnswer1": "2V gacha",
    "noAnswer2": "4V gacha",
    "noAnswer3": "5V gacha"
  },
  {
    "question": "+\r\n\r\n Tashqi qismida ikki qatorli chiqish oyoqchalariga ega bo‘lgan integral sxemalar qanday ataladi?",
    "answer": "Dual Inline Package (DIP) yoki mikrosxema",
    "noAnswer1": "Source Inline Package (SIP) yoki Ikki tomonli sxema",
    "noAnswer2": "Oyoqchali integral sxema",
    "noAnswer3": "Katta integral sxema"
  },
  {
    "question": "+\r\n\r\n Tezkor xotira nima uchun mo’ljallangan:",
    "answer": " Unga bajariladigan dasturlar va ma’lumotlarni kiritish",
    "noAnswer1": "Ma’lumotlarni kompyuterda uzoq muddatli saqlash",
    "noAnswer2": "Sonlar ustida arifmetik amallarni bajarish",
    "noAnswer3": "CHipset va K / CH portlari o’rtasida ma’lumotlar almashinuvini amalga oshiradi"
  },
  {
    "question": "+\r\n\r\n Tizim va yordamchi dasturlarining kompleksi nima deyiladi",
    "answer": " operatsion tizim;",
    "noAnswer1": "matn muharriri;",
    "noAnswer2": "grafik muharriri;",
    "noAnswer3": "drayver."
  },
  {
    "question": "+\r\n\r\n Tonerni bo’yoq sifatida qanday printerlar ishlatadi?",
    "answer": "Lazerda",
    "noAnswer1": "Matritsada",
    "noAnswer2": "Inkjet ichida",
    "noAnswer3": "Sublimatsiyada"
  },
  {
    "question": "+\r\n\r\n Tortinchi avlod kompyuterlari qanday kompyuterlar?",
    "answer": "katta integral sxemali kompyuterlar",
    "noAnswer1": "integral sxemali kompyuterlar",
    "noAnswer2": "mehanik kompyuterlar",
    "noAnswer3": "elektron lampali kompyuterlar"
  },
  {
    "question": "+\r\n\r\n Trekbolning sichqoncha tipidagi manipulyatorlardan afzalligi nimada?",
    "answer": "Bilaklarning kamroq charchashi",
    "noAnswer1": "Arzonroq narx",
    "noAnswer2": "Ko’proq tutish joylari",
    "noAnswer3": "Xotira resurslarini kamroq iste’mol qilish"
  },
  {
    "question": "+\r\n\r\nMonitorni boshqaradi:",
    "answer": "RAM;",
    "noAnswer1": "ovoz kartasi;",
    "noAnswer2": "video kartalar;",
    "noAnswer3": "ROM"
  },
  {
    "question": "+\r\n\r\n Dinamik xotira statik xotiradan quyidagi afzalliklarga ega:",
    "answer": "Arzonroq narx",
    "noAnswer1": "Unga kirishning yuqori tezligi",
    "noAnswer2": "Ishonchlilik",
    "noAnswer3": "Ikki kanalli rejimda ishlash qobiliyati"
  },
  {
    "question": "+\r\n\r\n Drayver bu:",
    "answer": "kompyuter qurilmalari bilan ishlash dasturi;",
    "noAnswer1": "kompyuter qurilmasi;",
    "noAnswer2": "amaliy dastur;",
    "noAnswer3": "dasturlash tili."
  },
  {
    "question": "+\r\nMarkaziy protsessorni o’rnatish uchun ulagich qanday nomlanadi?",
    "answer": "Soket",
    "noAnswer1": "Port",
    "noAnswer2": "Chipset",
    "noAnswer3": "Shima"
  },
  {
    "question": "+\r\n\r\n Eksponentalar nima?",
    "answer": "darajalar, tartiblar",
    "noAnswer1": "butun son",
    "noAnswer2": "kasr son",
    "noAnswer3": "kasrning butun qismi"
  },
  {
    "question": "+\r\n\r\n Markaziy protsessorni o’rnatish uchun ulagich (raz’em) nomi?",
    "answer": " Soket",
    "noAnswer1": "Port",
    "noAnswer2": "Chipset",
    "noAnswer3": "SHina"
  },
  {
    "question": "+\r\n\r\n Matritsali printerlarda bosib chiqarish elementi",
    "answer": "Baraban",
    "noAnswer1": "Lazer nurlari",
    "noAnswer2": "Igna",
    "noAnswer3": "Nozul"
  },
  {
    "question": "+\r\n\r\n MOP texnalogiyasida 1-ga to'g'ri keladigon kuchlanish qancha bo'lishi mumkin",
    "answer": " 3.3 V",
    "noAnswer1": "2.2 V",
    "noAnswer2": "5 V",
    "noAnswer3": "4 V"
  },
  {
    "question": "+\r\n\r\n Sahifa jadvali katalogi elementidagi manzil maydonining uzunligi qancha?",
    "answer": " 20",
    "noAnswer1": "16",
    "noAnswer2": "10",
    "noAnswer3": "13"
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