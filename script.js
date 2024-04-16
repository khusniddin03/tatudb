const data = [
  {
    "question": "OSI modelidagi qaysi sath MAC manzillari bilan ishlaydi?  ",
    "noAnswer1": "1 ",
    "noAnswer2": "3 ",
    "noAnswer3": "4",
    "answer": "#2 "
  },
  {
    "question": "OSI modelida 1-sathni ko’rsating? ",
    "noAnswer1": "Tarmoq sathi ",
    "noAnswer2": "Transport sathi ",
    "noAnswer3": "Taqdimot sathi",
    "answer": "#Fizik sath "
  },
  {
    "question": "IP manzillari qaysi sinfi faqat tadqiqot maqsadlarida (laboratoriyalarda) qo'llaniladi?  ",
    "noAnswer1": "A ",
    "noAnswer2": "B ",
    "noAnswer3": "C ",
    "answer": "#D"
  },
  {
    "question": "Kompyuterda MAC manzil qaysi sanoq sistemasida ifodalanadi?  ",
    "noAnswer1": "2 ",
    "noAnswer2": "8 ",
    "noAnswer3": "10 ",
    "answer": "#16"
  },
  {
    "question": "OSI modelida 3-sathni ko’rsating?  ",
    "noAnswer1": "Ilova sathi ",
    "noAnswer2": "Transport sathi ",
    "noAnswer3": "Taqdimot sathi ",
    "answer": "#Tarmoq sathi"
  },
  {
    "question": "Tarmoq ma'lumotlari almashinuvining asosiy (bo'linmas) birligi nima?  ",
    "noAnswer1": "Axborot ",
    "noAnswer2": "Bit ",
    "noAnswer3": "Kadr ",
    "answer": "#Paket"
  },
  {
    "question": "OSI modelida 2-sathni ko‘rsating?  ",
    "noAnswer1": "Transport sathi ",
    "noAnswer2": "Tarmoq sathi ",
    "noAnswer3": "Taqdimot sathi",
    "answer": "#Kanal sathi "
  },
  {
    "question": "Tarmoqlarni hududuy jihatdan o'sish tartibida joylashtiring?  ",
    "noAnswer1": "WAN-LAN-MAN ",
    "noAnswer2": "WAN -LAN- GAN ",
    "noAnswer3": "MAN-LAN-WAN",
    "answer": "#LAN-MAN-WAN "
  },
  {
    "question": "OSI modelida 7-sathni ko’rsating?  ",
    "noAnswer1": "Kanal sathi ",
    "noAnswer2": "Seans sathi  ",
    "noAnswer3": "Taqdimot sathi ",
    "answer": "#Ilova sathi"
  },
  {
    "question": "OSI modelida 6-sathni ko’rsating?  ",
    "noAnswer1": "Ilova sathi ",
    "noAnswer2": "Seans sathi ",
    "noAnswer3": "Kanal sathi",
    "answer": "#Taqdimot sathi "
  },
  {
    "question": "OSI modelida 5-sathni ko’rsating?  ",
    "noAnswer1": "Ilova sathi ",
    "noAnswer2": "Taqdimot sathi ",
    "noAnswer3": "Kanal sathi",
    "answer": "#Seans sathi "
  },
  {
    "question": "OSI modelida 4-sathni ko’rsating?  ",
    "noAnswer1": "Kanal sathi ",
    "noAnswer2": "Taqdimot sathi ",
    "noAnswer3": "Ilova sathi ",
    "answer": "#Transport sathi"
  },
  {
    "question": "Tarmoqdagi barcha kompyuterlar markaziy tugunga ulangan kompyuter tarmog‘ining topologiyasi qanday nomlanadi?  ",
    "noAnswer1": "Shina ",
    "noAnswer2": "Halqa ",
    "noAnswer3": "Daraxt",
    "answer": "#Yulduz "
  },
  {
    "question": "Switch(Kommutator) qurilmasi OSI modelining nechanchi sathida ishlaydi?  ",
    "noAnswer1": "1 ",
    "noAnswer2": "3 ",
    "noAnswer3": "4",
    "answer": "#2 "
  },
  {
    "question": "Konsentrator (Hub) OSI modelining nechchi sathida ishlaydi?  ",
    "noAnswer1": "2 ",
    "noAnswer2": "3 ",
    "noAnswer3": "4",
    "answer": "#1 "
  },
  {
    "question": "Marshrutlashning nechta turi mavjud?  ",
    "noAnswer1": "2 ta (ichki va tashqi)  ",
    "noAnswer2": "3 ta (global, korporativ, lokal)  ",
    "noAnswer3": "3 ta (xalqaro, shaharlararo, mahalliy)",
    "answer": "#2 ta (statik va dinamik)  "
  },
  {
    "question": "Veb-sahifalar qanday format (kengaytma)da saqlanadi?  ",
    "noAnswer1": ".DOC ",
    "noAnswer2": ".ЕХЕ ",
    "noAnswer3": ".ТХТ",
    "answer": "#.HTML "
  },
  {
    "question": "Elektron pochtalarni uzatuvchi-qabul qiluvchi server qanday nomlanadi? ",
    "noAnswer1": "Fayl serveri ",
    "noAnswer2": "Uzatuvchi-qabul qiluvchi server ",
    "noAnswer3": "Proksi server",
    "answer": "#Pochta serveri "
  },
  {
    "question": "Internet tarmog’ida quyidagi pochta manzili derilgan:  networksecurity@tuit.uz. Pochta server nomini toping?  ",
    "noAnswer1": "tuit ",
    "noAnswer2": "networksecurity@tuit.uz ",
    "noAnswer3": "networksecurity",
    "answer": "#tuit.uz "
  },
  {
    "question": "Quyidagi kompyuterlarni ulash sxemalaridan qaysi biri yopiq sxema hisoblanadi?  ",
    "noAnswer1": "Shina ",
    "noAnswer2": "Yulduz ",
    "noAnswer3": "Daraxt",
    "answer": "#Halqa "
  },
  {
    "question": "Port security qaysi tarmoq qurilmalarida sozlanadi?  ",
    "noAnswer1": "Hub  ",
    "noAnswer2": "Server ",
    "noAnswer3": "Marshrutizator",
    "answer": "#Komutator "
  },
  {
    "question": "E-mail- bu:  ",
    "noAnswer1": "Qidiruv dasturi ",
    "noAnswer2": "Pochta server nomi ",
    "noAnswer3": "Pochta dasturi",
    "answer": "#Kompyuter tarmoqlarida xat almashish (elektron pochta)  "
  },
  {
    "question": "МАС manzil berilgan qatorni ko`rsating ?  ",
    "noAnswer1": "192.168. 10.10 ",
    "noAnswer2": "192.168. 000B.BE9B ",
    "noAnswer3": "fe80::1909:8b5c:1d1f:c049%15",
    "answer": "#000B.BE9B.EE4A "
  },
  {
    "question": "Tarmoqlarlararo ekran(FireWall) ning vazifasi nima?  ",
    "noAnswer1": "Kompyuterlar tizimi xavfsizligini ta’minlaydi ",
    "noAnswer2": "Ikkita kompyuter o‘rtasida aloqa o‘rnatish jarayonida Internet tarmog‘i orasida xavfsizlikni ta’minlaydi ",
    "noAnswer3": "Uy tarmog‘i orasida aloqa o‘rnatish jarayonida tashkilot va Internet tarmog‘i orasida xavfsizlikni ta’minlaydi ",
    "answer": "#Tarmoqlar orasida aloqa o‘rnatish jarayonida tashkilot va Internet tarmog‘i orasida xavfsizlikni ta’minlaydi"
  },
  {
    "question": "Quyidagi tarmoq kabelining axborot uzatish tezligi yuqori hisoblanadi:  ",
    "noAnswer1": "Koaksial  ",
    "noAnswer2": "O‘rama juft ",
    "noAnswer3": "Telefon kabeli",
    "answer": "#Optik tolali "
  },
  {
    "question": "Wi-Fi simsiz tarmog’i necha Hs(gerts) chastotali to'lqinda ishlaydi?  ",
    "noAnswer1": "2.4-2.485 Gs ",
    "noAnswer2": "1.5-11 Gs ",
    "noAnswer3": "2.3-13.6 Gs",
    "answer": "#2.4-5 Gs "
  },
  {
    "question": "Quyidagi parollarning qaysi biri “bardoshli parol”ga kiradi?  ",
    "noAnswer1": "Start123 ",
    "noAnswer2": "salomDunyo ",
    "noAnswer3": "tatuff2022",
    "answer": "#Onx458&hdsh)  "
  },
  {
    "question": "Global simsiz tarmoqda qaysi standartlar ishlaydi?  ",
    "noAnswer1": "Wi-Fi, 3G ",
    "noAnswer2": "WIMAX, 2G ",
    "noAnswer3": "Wi-Fi, IRDA ",
    "answer": "#CDPD, 4G"
  },
  {
    "question": "Lokal tarmoqdagi kompyuterlarni ulash uchun asosan qanday kabel ishlatiladi? ",
    "noAnswer1": "Koaksial kabel ",
    "noAnswer2": "Optik tola ",
    "noAnswer3": "Telefon kabel",
    "answer": "#O'ralgan juftlik (utp)  "
  },
  {
    "question": "Elektron pochta foydalanuvchiga…. yuborish imkonini beradi.  ",
    "noAnswer1": "Faqat xabarlarni ",
    "noAnswer2": "Faqat fayllarni ",
    "noAnswer3": "Videoma’lumotlarni",
    "answer": "#Xabarlar va unga biriktirilgan fayllarni "
  },
  {
    "question": "Amaliy sathda gipermatnni uzatish protokoli-bu...  ",
    "noAnswer1": "Telnet ",
    "noAnswer2": "FTP ",
    "noAnswer3": "POP3 ",
    "answer": "#HTTP"
  },
  {
    "question": "TCP/IP steki nechta sathdan iborat?  ",
    "noAnswer1": "5 ",
    "noAnswer2": "6 ",
    "noAnswer3": "7",
    "answer": "#4 "
  },
  {
    "question": "TCP/IP protokollar stekini birinchi sathi keltirilgan variantni tanlang.  ",
    "noAnswer1": "Kanalli ",
    "noAnswer2": "Tarmoq ",
    "noAnswer3": "Transport",
    "answer": "#Fizik "
  },
  {
    "question": "OSI modelidagi qaysi sath IP manzillar bilan ishlaydi?  ",
    "noAnswer1": "1 ",
    "noAnswer2": "2 ",
    "noAnswer3": "4",
    "answer": "#3 "
  },
  {
    "question": "...- tugunlar kommunikatsiyaning OSI modelidagi 2 qatlamda ishlovchi tarmoq qurilmalaridir.  «aqlli hub» deb ham yuritiladi.  ",
    "noAnswer1": "Hub ",
    "noAnswer2": "Bridg ",
    "noAnswer3": "Router",
    "answer": "#Switch "
  },
  {
    "question": "...- OSI modelining 3-qatlamida ishlovchi qurilma boʼlib, bir- biridan mustaqil boʼlgan 2 yoki undan ortiq tarmoqlar oʼrtasidagi aloqani tashkil etadi. ",
    "noAnswer1": "Hub  ",
    "noAnswer2": "Switch ",
    "noAnswer3": "Repiter",
    "answer": "#Router "
  },
  {
    "question": "Global kompyuter tarmog’i:  ",
    "noAnswer1": "MAN ",
    "noAnswer2": "LAN ",
    "noAnswer3": "PAN",
    "answer": "#WAN "
  },
  {
    "question": "Tarmoq sathi protokollari qaysi qatorda keltirilgan?  ",
    "noAnswer1": "TCP, ARP, UDP ",
    "noAnswer2": "UDP, ARP ",
    "noAnswer3": "IP, ARP",
    "answer": "#IP, ARP, IPSec "
  },
  {
    "question": "192.168.100.13 IP manzil turi va sinfini toping?  ",
    "noAnswer1": "C sinf, oq ",
    "noAnswer2": "B sinf, kulrang ",
    "noAnswer3": "B sinf, oq",
    "answer": "#C sinf, kulrang "
  },
  {
    "question": "Lokal kompyuter tarmog‘i:  ",
    "noAnswer1": "MAN ",
    "noAnswer2": "WAN ",
    "noAnswer3": "PAN",
    "answer": "#LAN "
  },
  {
    "question": "Yong'in, toshqin yoki zilzila ma'lumotlarni yo'q qilishiga sabab bo'ladi. Bu qanday tahdid turi?  ",
    "noAnswer1": "Sabotaj ",
    "noAnswer2": "Shpionaj ",
    "noAnswer3": "Inson xatoliklari ",
    "answer": "#Tabiiy ofatlar"
  },
  {
    "question": "Tarmoqlararo ekranlarning komponenti sifatida quyigalarni keltirish mumkin: ",
    "noAnswer1": "Filtrlovchi-yo’llovchi; tarmoq darajasidagi shlyuzlar. ",
    "noAnswer2": "Tarmoq darajasidagi shlyuzlar; amaliy darajadagi shlyuzlar. ",
    "noAnswer3": "Filtrlovchi; tizim darajasidagi shlyuzlar; amaliy darajadagi shlyuzlar.",
    "answer": "#Filtrlovchi-yo’llovchi; tarmoq darajasidagi shlyuzlar; amaliy darajadagi shlyuzlar. "
  },
  {
    "question": "Axborot tarmoq trafigini kuzatish va tahlil qilish uchun ishlatiladigan qurilma yoki dasturiy ta’minot-bu: ",
    "noAnswer1": "Tarmoq monitoring ",
    "noAnswer2": "Tarmoq xavfsizligi ",
    "noAnswer3": "Xavfsizlik domeni",
    "answer": "#Tarmoq analizatori "
  },
  {
    "question": "Tashkilotning tarmoq resurslaridan foydalanishga yondashuvini belgilaydigan va uning tarmoq infratuzilmasi va xizmatlarini qanday himoya qilish kerakligini belgilaydigan qoidalar, amaliy texnikalar to’plami-bu: ",
    "noAnswer1": "Tarmoq analizatori ",
    "noAnswer2": "Tarmoq monitoring ",
    "noAnswer3": "Xavfsizlik domeni",
    "answer": "#Tarmoq xavfsizligi siyosati "
  },
  {
    "question": "Axborot tizimiga ta’sir darajasiga ko‘ra tahdidlar necha turga bo‘linadi? ",
    "noAnswer1": "2 ta( yuqori va quyi) ",
    "noAnswer2": "3 ta (ruxsat etilgan, rad etilgan, qayd etilgan) ",
    "noAnswer3": "2 ta (bardoshli va bardoshsiz tahdidlar)",
    "answer": "#2 ta (passiv, aktiv tahdidlar) "
  },
  {
    "question": "WWW xizmatlaridan foydalanishdagi asosiy protokoli nomi: ",
    "noAnswer1": "FTP ",
    "noAnswer2": "TELNET ",
    "noAnswer3": "SMTP",
    "answer": "#HTTP "
  },
  {
    "question": "Ochiq tizimlarning o'zaro ta'sirining 7 sathli modeli nomini belgilang. ",
    "noAnswer1": "TCP ",
    "noAnswer2": "IP ",
    "noAnswer3": "MAC",
    "answer": "#OSI "
  },
  {
    "question": "Qaysi protokol tarmoqda fayl uzatish protokoli hisoblanadi? ",
    "noAnswer1": "SMTP ",
    "noAnswer2": "HTTP ",
    "noAnswer3": "TELNET",
    "answer": "#FTP "
  },
  {
    "question": "Internetdagi elektron pochta manzili belgilangan: user_name@gmail.com. Yuqori darajadagi domen nomini ko‘rsating.  ",
    "noAnswer1": "gmail.uz ",
    "noAnswer2": "user_name@gmail.com ",
    "noAnswer3": "user_name",
    "answer": "#.com "
  },
  {
    "question": "Quyidagi elektron pochta manzilidan ikkinchi darajali domen nomini belgilang: tatuff@tuit.uz.   ",
    "noAnswer1": "tatuff@gmail.com ",
    "noAnswer2": "uz ",
    "noAnswer3": "@",
    "answer": "#tuit "
  },
  {
    "question": "Router qanday qurilma?  ",
    "noAnswer1": "Tarmoq qurilmasi bo‘lib, ko‘plab tarmoqlarni ulash uchun yoki LAN segmentlarini bog‘lash uchun xizmat qiladi  ",
    "noAnswer2": "Ko‘plab tarmoqlarni ulash uchun yoki LAN segmentlarini bog‘lash uchun xizmat qiladi.  ",
    "noAnswer3": "Qabul qilingan signalni barcha chiquvchi portlarga emas balki paketda manzili keltirilgan portga uzatadi ",
    "answer": "#Qabul qilingan ma’lumotlarni tarmoq sathiga tegishli manzillarga ko‘ra (IP manzil) uzatadi."
  },
  {
    "question": "Wi-Fi tarmoqlarida qaysi shifrlash protokollaridan foydalaniladi? ",
    "noAnswer1": "WEB, SSL, WPA2 ",
    "noAnswer2": "WPA, TLS ",
    "noAnswer3": "WPA, FTP, HTTP",
    "answer": "#WEP, WPA, WPA2 "
  },
  {
    "question": "Kompyuter tarmog'i protokoli - ...  ",
    "noAnswer1": "tarmoq trafigining texnik tavsiflari  ",
    "noAnswer2": "tarmoq foydalanuvchilari harakatlarini qayd qilish uchun elektron jurnallar ",
    "noAnswer3": "audit uchun jurnallar",
    "answer": "#tarmoqdagi ma'lumotlarni qabul qilish va uzatishni, faollashtirishni tartibga soluvchi qoidalar "
  },
  {
    "question": "Mijozlarning fayllarga kirishini boshqaruvchi server qanday nomlanadi?   ",
    "noAnswer1": "Proksi-server  ",
    "noAnswer2": "Pochta serveri ",
    "noAnswer3": "Vositachilik serveri",
    "answer": "#Fayl serveri "
  },
  {
    "question": "MAC(Media Access Control) manzilining uzunligi necha baytga teng?  ",
    "noAnswer1": "3 bayt ",
    "noAnswer2": "5 bayt ",
    "noAnswer3": "8 bayt",
    "answer": "#6 bayt "
  },
  {
    "question": "IPv4 manzilining uzunligi necha bitga teng?  ",
    "noAnswer1": "16 ",
    "noAnswer2": "28 ",
    "noAnswer3": "64",
    "answer": "#32 "
  },
  {
    "question": "IPv6 manzili uzunligida nechta bitdan iborat?  ",
    "noAnswer1": "16 ",
    "noAnswer2": "32 ",
    "noAnswer3": "64 ",
    "answer": "#128"
  },
  {
    "question": "TCP/IP protokoli stekining birinchi qatlamini ko'rsatadigan variantni tanlang.  ",
    "noAnswer1": "Tarmoq ",
    "noAnswer2": "Transport ",
    "noAnswer3": "Ilova",
    "answer": "#Fizik "
  },
  {
    "question": "OSI modelining qaysi qatlamida ma'lumotlar kadr sifatida ifodalanadi?  ",
    "noAnswer1": "Fizik ",
    "noAnswer2": "Tarmoq ",
    "noAnswer3": "Taqdimot",
    "answer": "#Kanal  "
  },
  {
    "question": "DHCP ning asosiy vazifasi nima?  ",
    "noAnswer1": "Mijoz-server ishini boshqaradi ",
    "noAnswer2": "Internetga kirishni boshqaradi ",
    "noAnswer3": "IPv4 ni IPv6 ga o'zgartiradi",
    "answer": "#Avtomatik ravishda qurilmalarga IP manzillarni ajratadi "
  },
  {
    "question": "Tarmoqning tarmoq ichida taqsimlanishi nima deb ataladi?  ",
    "noAnswer1": "Proksi ",
    "noAnswer2": "Asosiy tarmoq (Fullnet)  ",
    "noAnswer3": "Tashqi tarmoq",
    "answer": "#Qism tarmoq(Subnet)  "
  },
  {
    "question": "Ma’lumotlarni  ishonchli yetkazib berilishini ta’minlaydigan transport qatlami protokolini belgilang.  ",
    "noAnswer1": "UDP ",
    "noAnswer2": "FTP ",
    "noAnswer3": "TFTP",
    "answer": "#TCP "
  },
  {
    "question": "… - bir ofis, bino ichidagi axborot almashinish tarmogʼi… ",
    "noAnswer1": "CAN ",
    "noAnswer2": "PAN ",
    "noAnswer3": "GAN ",
    "answer": "#LAN"
  },
  {
    "question": "OSI modelining 1-sathida (ya'ni, fizik sathda) ishlaydigan, aloqa uchun tarmoqdagi qurilmalarni birlashtiruvchi tarmoq qurilmasi ko‘rsating.  ",
    "noAnswer1": "Switch ",
    "noAnswer2": "Router ",
    "noAnswer3": "Bridg",
    "answer": "#Hub "
  },
  {
    "question": "Oxirgi tizimlar o'rtasidagi fizik kanal orqali strukturalanmagan bitlar potokini uzatadi. Bu qaysi sathning vazifasi?  ",
    "noAnswer1": "Tarmoq sathi ",
    "noAnswer2": "Kanal sathi ",
    "noAnswer3": "Seans sathi",
    "answer": "#Fizik sath "
  },
  {
    "question": "Tarmoqlararo ekran(firewall) – bu:  ",
    "noAnswer1": "vazifasi trafikni imkon qadar tezroq manzilga yetkazish bo'lgan qurilma ",
    "noAnswer2": "tarmoq trafigini keshlash qurilmasi ",
    "noAnswer3": "Tarmoq trafigini shifrlash qurilmasi",
    "answer": "#avtorizatsiya qilingan ma'lumotlardan tashqari barcha trafikni blokirovka qilish uchun mo'ljallangan tarmoqqa kirishni boshqarish qurilmasi "
  },
  {
    "question": "Tizim sozlanmalariga masofadn ulanish protokkollarini ko'rsating?  ",
    "noAnswer1": "FTP, LDP ",
    "noAnswer2": "SSH, RTP ",
    "noAnswer3": "POP3, LDP",
    "answer": "#SSH, Telnet "
  },
  {
    "question": "HTTP protokolini kengaytmasi qaysi javobda to'g'ri keltirilgan?  ",
    "noAnswer1": "High Terminal Transfer Protocol ",
    "noAnswer2": "High Text Tranzit Protocol ",
    "noAnswer3": "Hyper Terminal Tranzit Protocol",
    "answer": "#Hyper Text Transfer Protocol "
  },
  {
    "question": "\"Xizmat ko'rsatishdan voz kechish\" hujumini toping?  ",
    "noAnswer1": "MiTM ",
    "noAnswer2": "DHCP poisoning ",
    "noAnswer3": "Resource Attack ",
    "answer": "#DoS"
  },
  {
    "question": "Kompyuter tarmoqlarining asosiy turlari...  ",
    "noAnswer1": "mijoz, server, xalqaro  ",
    "noAnswer2": "lokal, ichki, tashqi ",
    "noAnswer3": "mintaqaviy, korporativ, shaxsiy",
    "answer": "#lokal(mahalliy), mintaqaviy , global "
  },
  {
    "question": "192.168.5.10/24 manzilining qaysi qismi tarmoqning identifikatori (manzili) hisoblanadi? ",
    "noAnswer1": "192 ",
    "noAnswer2": "192.168 ",
    "noAnswer3": "192.168.5.10",
    "answer": "#192.168.5 "
  },
  {
    "question": "Brauzer (masalan, Internet Explorer) bu:  ",
    "noAnswer1": "antivirus dasturlari  ",
    "noAnswer2": "fayl arxivlari bilan ishlash dasturlari ",
    "noAnswer3": "Internet-serverlar",
    "answer": "#veb-sahifani ko'ruvchi dastur "
  },
  {
    "question": "Kompyuter tarmog'ining umumlashtirilgan geometrik tavsifi....  ",
    "noAnswer1": "tarmoq qurilmalari ",
    "noAnswer2": "tarmoq serveri ",
    "noAnswer3": "tarmoq foydalanuvchilari",
    "answer": "#tarmoq topologiyasi "
  },
  {
    "question": "Jahon miqyosidagi global kompyuter tarmog'i qanday nomlanadi?  ",
    "noAnswer1": "4G ",
    "noAnswer2": "Intranet ",
    "noAnswer3": "WEP",
    "answer": "#WWW "
  },
  {
    "question": "IPv4 manzillar nechta sinfga ajratilgan? ",
    "noAnswer1": "4 ta (I,II,III,IV) ",
    "noAnswer2": "2 ta (Ichki va tashqi) ",
    "noAnswer3": "3 ta (Yuqori, o’rta, quyi)",
    "answer": "#5 ta (A,B,C,D,E  "
  },
  {
    "question": "Wi-Fi simsiz tarmoq standartini belgilang?  ",
    "noAnswer1": "802.2  ",
    "noAnswer2": "802.3  ",
    "noAnswer3": "802.15",
    "answer": "#802.11n "
  },
  {
    "question": "Axborotni eng kichik o‘lchov birligi nima deb ataladi?  ",
    "noAnswer1": "bayt ",
    "noAnswer2": "megabayt ",
    "noAnswer3": "gigabayt",
    "answer": "#bit "
  },
  {
    "question": "Amaliy sathda deyarli barcha xizmatlar qaysi sxema bo'yicha ishlaydi?  ",
    "noAnswer1": "kompyuter-foydalanuvchi ",
    "noAnswer2": "server-kompyuter ",
    "noAnswer3": "mijoz-internet",
    "answer": "#mijoz-server "
  },
  {
    "question": "Asosiy maqsadi fayllarni bitta kompyuterdan boshqasiga o'tkazish yoki fayllarni serverlardan mijozlarga va mijozlardan serverlarga ko'chirish bo’lgan protokol qaysi?  ",
    "noAnswer1": "SMTP  ",
    "noAnswer2": "TFTP ",
    "noAnswer3": "HTTP ",
    "answer": "#FTP"
  },
  {
    "question": "Tarmoq sathida xabarlar nima deb nomaladi?  ",
    "noAnswer1": "kadr ",
    "noAnswer2": "trafik ",
    "noAnswer3": "protokol ",
    "answer": "#paket"
  },
  {
    "question": "Kompyuter internetga ulanishi uchun albatta …… bo’lishi kerak? Nuqtalar o’rniga berilgan so’zni toping?  ",
    "noAnswer1": "Brauzer  ",
    "noAnswer2": "Bosh veb-sahifa ",
    "noAnswer3": "Domen nomi",
    "answer": "# IP manzil "
  },
  {
    "question": "Xatolik dastur yuklanishiga to'sqinlik qiladi. Bu qanday tahdid turi?  ",
    "noAnswer1": "Sabotaj ",
    "noAnswer2": "Tabiiy ofatlar ",
    "noAnswer3": "Shpionaj",
    "answer": "#Dasturning buzilishi yoki undagi xatoliklar "
  },
  {
    "question": "Dastur operatsion tizimning yangi versiyasi bilan ishlay olmaydi. Bu qanday tahdid turi?  ",
    "noAnswer1": "Dasturning buzilishi yoki undagi xatoliklar ",
    "noAnswer2": "Tabiiy ofatlar ",
    "noAnswer3": "Shpionaj",
    "answer": "#Texnik talablar jihatidan eskirish "
  },
  {
    "question": "Qaysi sath ma'lumotlar patokidagi ma'lumotlarni segmentlash va qayta yig'ish vazifasini bajaradi?  ",
    "noAnswer1": "Ilova sathi ",
    "noAnswer2": "Tarmoq sathi ",
    "noAnswer3": "Seans sathi",
    "answer": "#Transport sathi "
  },
  {
    "question": "Qaysi sath paketning mantiqiy manzili asosida uning marshrutizatsiyasiga javob beradi?  ",
    "noAnswer1": "Transport sathi  ",
    "noAnswer2": "Ilova sathi ",
    "noAnswer3": "Seans sathi",
    "answer": "#Tarmoq sathi "
  },
  {
    "question": "Pog‘onalarning qaysi tartibi to‘g‘ri hisoblanadi?  ",
    "noAnswer1": "1 - fizik, 2 - kanal, 3 - transport, 4 - tarmoq, 5 –taqdimot, 6 - seans, 7 – ilova  ",
    "noAnswer2": "1 - fizik, 2 - kanal, 3 - tarmoq, 4 - seans, 5 -transport, 6 - taqdimot, 7 – ilova  ",
    "noAnswer3": "1 - fizik, 2 - tarmoq, 3 - seans, 4 - kanal, 5 -transport, 6 - ilova , 7 - taqdimot",
    "answer": "#1 - fizik, 2 - kanal, 3 - tarmoq, 4 - transport, 5 -seans, 6 -taqdimot, 7 - ilova  "
  },
  {
    "question": "1 Gbit/s nimaga teng ?  ",
    "noAnswer1": "1024  Mbayt/s  ",
    "noAnswer2": "1024 Kbit/s ",
    "noAnswer3": "1024 bayt/s",
    "answer": "#1024 Mbit/s "
  },
  {
    "question": "1 Mbayt nimaga teng?  ",
    "noAnswer1": "0.1 Gbayt ",
    "noAnswer2": "1024 Kbit ",
    "noAnswer3": "1000 Kbayt",
    "answer": "#1024 Kbayt "
  },
  {
    "question": "IPSec protokollarining asosiy vazifasi nima? ",
    "noAnswer1": "Ma’lumotlar paketlarining konfidensialligi, autentligi, butunligi va takrorlardan himoyalanganligini ta’minlaydi.  ",
    "noAnswer2": "Himoyalangan ma’lumot almashinuvini tashkil etish ",
    "noAnswer3": "Ma’lumotlarni shifrlash algoritmini ishlab chiqish",
    "answer": "#IP tarmoqlar bo’yicha xavfsiz ma’lumot almashinuvini ta’minlash.  "
  },
  {
    "question": "Axborot yaxlitligini buzilishiga misol - … ",
    "noAnswer1": "Ishonchsizlik va soxtalashtirish ",
    "noAnswer2": "Soxtalashtirish ",
    "noAnswer3": "Butunmaslik va yaxlitlanmaganlik ",
    "answer": "#Soxtalashtirish va o‘zgartirish"
  },
  {
    "question": "Autentifikatsiya-bu…  ",
    "noAnswer1": "Tizim me’yoriy va g‘ayritabiiy hollarda rejalashtirilgandek o‘zini tutishligi holati ",
    "noAnswer2": "Istalgan vaqtda dastur majmuasining mumkinligini kafolati ",
    "noAnswer3": "Tizim noodatiy va tabiiy hollarda qurilmaning haqiqiy ekanligini tekshirish muolajasi",
    "answer": "#Ma’lum qilingan foydalanuvchi, jarayon yoki qurilmaning haqiqiy ekanligini tekshirish muolajasi "
  },
  {
    "question": "Identifikatsiya bu- … ",
    "noAnswer1": "Axborot boshlang‘ich ko‘rinishda ekanligi uni saqlash, uzatishda ruxsat etilmagan o‘zgarishlar ",
    "noAnswer2": "Axborotni butunligini saqlab qolgan holda uni elementlarini o‘zgartirishga yo‘l qo‘ymaslik ",
    "noAnswer3": "Ishonchliligini tarqalishi mumkin emasligi kafolati",
    "answer": "#Foydalanuvchini uning identifikatori (nomi) bo‘yicha aniqlash jarayoni "
  },
  {
    "question": "Lokal IP manzilini global IP manziliga almashtiruvchi texnologiya qaysi?  ",
    "noAnswer1": "OSI  ",
    "noAnswer2": "TCP/IP ",
    "noAnswer3": "RIP",
    "answer": "#NAT "
  },
  {
    "question": "DNS xizmatining maqsadi nima? ",
    "noAnswer1": "tarmoq ishlashini texnik qo'llab-quvvatlash ",
    "noAnswer2": "vaqtni boshqarish ",
    "noAnswer3": "Paketlarni yo‘naltirish",
    "answer": "#tizim nomlarini aniqlash va ularni IP manzillarga aylantirish "
  },
  {
    "question": "Shaxsning, axborot kommunikatsiya tizimidan foydalanish huquqiga ega bo‘lish uchun foydalaniluvchining maxfiy bo‘lmagan qayd yozuvi – bu… ",
    "noAnswer1": "parol ",
    "noAnswer2": "identifikatsiya ",
    "noAnswer3": "token",
    "answer": "#login "
  },
  {
    "question": "Uning egasi haqiqiyligini aniqlash jarayonida tekshiruv axboroti sifatida ishlatiladigan belgilar ketma-ketligi (maxfiy so‘z) – nima?  ",
    "noAnswer1": "login ",
    "noAnswer2": "identifikatsiya ",
    "noAnswer3": "electron pochta",
    "answer": "#parol "
  },
  {
    "question": "Lokal tarmoqlarda keng tarqalgan topologiya turini belgilang.  ",
    "noAnswer1": "Xalqa topoligiya ",
    "noAnswer2": "To‘liq bog‘langan topoligiya  ",
    "noAnswer3": "Umumiy shina topoligiya  ",
    "answer": "#Yulduz topoligiya"
  },
  {
    "question": "Ethernet kontsentratori(hub) vazifani nimadan iborat? ",
    "noAnswer1": "kompyuterdan kelayotgan axborotni boshqa bir kompyuterga yo‘naltirib beradi ",
    "noAnswer2": "kompyuterdan kelayotgan axborotni xalqa bo‘ylab joylashgan keyingi kompyuterga ",
    "noAnswer3": "tarmoqning ikki segmentini bir biriga ulaydi",
    "answer": "#kompyuterdan kelayotgan axborotni qolgan barcha kompyuterga yo‘naltirib beradi "
  },
  {
    "question": "OSI modelida nechta sath mavjud?  ",
    "noAnswer1": "4 ta ",
    "noAnswer2": "5 ta ",
    "noAnswer3": "3 ta",
    "answer": "#7 ta "
  },
  {
    "question": "Optik kabelda ma'lumot qanday ko'rinishda uzatiladi?  ",
    "noAnswer1": "Elektr signal ",
    "noAnswer2": "Chastota ",
    "noAnswer3": "Elektromagnit to’lqin",
    "answer": "#Nur "
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