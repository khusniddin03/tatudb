const data = [
  {
    "question": "Ranglarni (color balance) o'zgartirish uchun qaysi panelni (panel) ishlatasiz?",
    "answer": "Adjustments",
    "noAnswer1": "blurs",
    "noAnswer2": "Layers",
    "noAnswer3": "Tools"
  },
  {
    "question": "Bir faylni ko'chirish va yotish uchun qaysi asbobdan (tool) foydalanasiz?",
    "answer": "Move tool",
    "noAnswer1": "Brush tool",
    "noAnswer2": "Text tool",
    "noAnswer3": "pen"
  },
  {
    "question": "Qanday qilib pixelarni oʻchirish (erase) mumkin?",
    "answer": "Eraser tool\n",
    "noAnswer1": "Brush tool",
    "noAnswer2": "Pen tool",
    "noAnswer3": "Clone stamp tool"
  },
  {
    "question": "Photoshopda Faylni saqlash uchun qaysi kengaytma (file format) ko'rsatilgan?",
    "answer": ".jpg",
    "noAnswer1": ".docx",
    "noAnswer2": ".mp3",
    "noAnswer3": "gif"
  },
  {
    "question": "Qanday qilib faylni (background)ga o'zgartirish mumkin?",
    "answer": "Layer > New > Background from Layer",
    "noAnswer1": "Image > Adjustments > Brightness/Contrast",
    "noAnswer2": "Edit > Transform > Rotate",
    "noAnswer3": "Image > Canvas Size"
  },
  {
    "question": "Sweet Home 3D qanday tili orqali qo'llaniladi?",
    "answer": "Fransuz tili",
    "noAnswer1": "Ingliz tili",
    "noAnswer2": "Ispan tili",
    "noAnswer3": "Rus tili"
  },
  {
    "question": "Dasturda ichki dizayn qilingan joyning ikkala o'lchami o'lchamlar qanday ifodalangan?",
    "answer": "O'lcham va balandlik",
    "noAnswer1": "Radius va diametr",
    "noAnswer2": "Perimetr va maydon",
    "noAnswer3": "Perimetr va maydon"
  },
  {
    "question": "Sweet Home 3D da qaysi formatlarda saqlash mumkin?",
    "answer": "OBJ",
    "noAnswer1": "MP3",
    "noAnswer2": "PDF",
    "noAnswer3": "SVG"
  },
  {
    "question": "Adobening vektor grafikalar yaratish va tahrirlash uchun mo‘ljallangan dasturi qaysi?",
    "answer": "Adobe Illustrator",
    "noAnswer1": "Adobe Photoshop",
    "noAnswer2": "Adobe InDesign",
    "noAnswer3": "Adobe XD"
  },
  {
    "question": "Qanday qilib dasturda yangi xona yaratish mumkin?",
    "answer": "\"New Room\" tugmasini bosish",
    "noAnswer1": "\"Delete Room\" tugmasini bosish",
    "noAnswer2": "\"Undo\" tugmasini bosish",
    "noAnswer3": "\"Save\" tugmasini bosish"
  },
  {
    "question": "Sweet Home 3D dasturi qaysi tizimlari uchun mavjud?",
    "answer": "Windows, macOS, va Linux",
    "noAnswer1": "Windows va macOS",
    "noAnswer2": "Faqat macOS",
    "noAnswer3": "Faqat Windows"
  },
  {
    "question": "Sweet Home 3D dasturini o'rnatish jarayonida kerakli sozlamalarni qanday tanlash mumkin?",
    "answer": "O'rnatilgan sozlamalar bilan",
    "noAnswer1": "Sozlamalarni tanlash imkoniyati yo'q",
    "noAnswer2": "O'rnatish davriy sozlamalari ichida",
    "noAnswer3": "Sozlamalar nomini o'zgartirish orqali"
  },
  {
    "question": "Mebellar kutubxonasi qanday o'rnatiladi?",
    "answer": "\"Furniture Library Editor\" dan",
    "noAnswer1": "\"Help\" (Yordam) menyusidan",
    "noAnswer2": "\"Settings\" (Sozlamalar) bo'limidan",
    "noAnswer3": "Dastur o'rnatilgandan so'ng avtomatik ravishda"
  },
  {
    "question": "Sweet Home 3D dasturida mebel qo'shish jarayonida nima qilinishi kerak?",
    "answer": "\"Furniture\" (Mebele) ikonini tanlang va oynaga surish",
    "noAnswer1": "\"Edit\" (Tahrirlash) menyusidan \"Add Furniture\" (Mebel qo'shish) ni tanlang",
    "noAnswer2": "\"3D View\" (3D Ko'rinish) oynasidan \"Add Furniture\" (Mebel qo'shish) ni tanlang",
    "noAnswer3": "\"File\" (Fayl) tugmasini bosing va \"Add Furniture\" (Mebel qo'shish) ni tanlang"
  },
  {
    "question": "Rasmga suzish qo'shish uchun qaysi vosita ishlatiladi?",
    "answer": "Clone Stamp Tool",
    "noAnswer1": "brushTool",
    "noAnswer2": "Pen Tool",
    "noAnswer3": "Eraser Tool"
  },
  {
    "question": "Photoshopda ranglarni belgilash uchun qaysi vosita ishlatiladi?",
    "answer": "Eyedropper Tool",
    "noAnswer1": "Brush Tool",
    "noAnswer2": "Crop Tool",
    "noAnswer3": "Text Tool"
  },
  {
    "question": "Rasmni saqlash vaqtida qanday formatda saqlash mumkin?",
    "answer": "JPG",
    "noAnswer1": "MP3",
    "noAnswer2": "DOCX",
    "noAnswer3": "GIF"
  },
  {
    "question": "Photoshopda filtrlarni qanday qo'shish mumkin?",
    "answer": "Filter > Sharpen",
    "noAnswer1": "Edit > Transform",
    "noAnswer2": "pen tool",
    "noAnswer3": "Layer > New Adjustment Layer"
  },
  {
    "question": "Matnga gradient qo'shish uchun qaysi vosita ishlatiladi?",
    "answer": "Gradient Tool",
    "noAnswer1": "Brush Tool",
    "noAnswer2": "Text Tool",
    "noAnswer3": "Pen Tool"
  },
  {
    "question": "Photoshopda rasmni qanday zoom qilish mumkin?",
    "answer": "Ctrl + +",
    "noAnswer1": "Alt + F4",
    "noAnswer2": "Ctrl + Z",
    "noAnswer3": "Ctrl + C"
  },
  {
    "question": "Rasmni qanday rotate qilish mumkin?",
    "answer": "Image > Rotate Canvas",
    "noAnswer1": "Edit > filter",
    "noAnswer2": "Layer > Blending options",
    "noAnswer3": "Text Tool"
  },
  {
    "question": "Qanday vosita orqali matnni yozish mumkin?",
    "answer": "Text Tool",
    "noAnswer1": "Crop Tool",
    "noAnswer2": "Pen Tool",
    "noAnswer3": "Lasso Tool"
  },
  {
    "question": "Photoshopda retushlash qo'shish uchun qaysi vosita ishlatiladi?",
    "answer": "Clone Stamp Tool",
    "noAnswer1": "Brush Tool",
    "noAnswer2": "Eyedropper Tool",
    "noAnswer3": "Pen Tool"
  },
  {
    "question": "Qanday vosita orqali rasmga filter qo'shish mumkin?",
    "answer": "Edit > Filter",
    "noAnswer1": "hue > Add",
    "noAnswer2": "pen tool",
    "noAnswer3": "Image > properties"
  },
  {
    "question": "Photoshopda matnni qanday qoʻshish mumkin?",
    "answer": "File > New > Text",
    "noAnswer1": "Layer > New Adjustment Layer > Text",
    "noAnswer2": "Image > Adjustments > Text",
    "noAnswer3": "Window > Text"
  },
  {
    "question": "Photoshopda qanday layerlarni guruhlash mumkin?",
    "answer": "Layer > Group Layers",
    "noAnswer1": "Group > New Group",
    "noAnswer2": "File > Group",
    "noAnswer3": "Window > Group"
  },
  {
    "question": "Qanday vosita orqali rasmni o'lchash mumkin?",
    "answer": "Edit > Transform",
    "noAnswer1": "File > Resize",
    "noAnswer2": "Image > Resize",
    "noAnswer3": "Layer > Resize Layer"
  },
  {
    "question": "Photoshopda qanday vosita yoritish qo'shish mumkin?",
    "answer": "Layer > New Adjustment Layer > Brightness/Contrast",
    "noAnswer1": "Image > Adjustments > Exposure",
    "noAnswer2": "Filter > blur",
    "noAnswer3": "Edit > Contrast"
  },
  {
    "question": "Rasmga border qo'shish uchun qaysi vosita ishlatiladi?",
    "answer": "Rectangle Tool",
    "noAnswer1": "Marquee Tool",
    "noAnswer2": "Text Tool",
    "noAnswer3": "Brush Tool"
  },
  {
    "question": "Photoshopda qaysi vosita orqali qanday rasmni crop qilish mumkin?",
    "answer": "Crop Tool",
    "noAnswer1": "Image > Crop",
    "noAnswer2": "Layer > Crop Layer",
    "noAnswer3": "Edit > Crop"
  },
  {
    "question": "Qanday vosita orqali rasmga texturing qo'shish mumkin?",
    "answer": "Filter > Texture",
    "noAnswer1": "Layer > New Layer > Texture",
    "noAnswer2": "Image > Texture",
    "noAnswer3": "Edit > Texture"
  },
  {
    "question": "Photoshopda layerlarni qanday o'chirish mumkin?",
    "answer": "Edit > Delete",
    "noAnswer1": "Layer > Add Layer",
    "noAnswer2": "File > Blending options",
    "noAnswer3": "Ctrl + A"
  },
  {
    "question": "Photoshopda qanday vosita ranglarni saqlash mumkin?",
    "answer": "File > Save for Web",
    "noAnswer1": "File > Save As",
    "noAnswer2": "Image > Save",
    "noAnswer3": "Edit > Save"
  },
  {
    "question": "Photoshopda rasmga qanday gradient qo'shish mumkin?",
    "answer": "Edit > Gradient Fill",
    "noAnswer1": "Filter > blur",
    "noAnswer2": "Hech qanday",
    "noAnswer3": "Image > Add"
  },
  {
    "question": "Cinema 4D qanday dastur?",
    "answer": "Bu maxsus 3D grafik va animatsiya tuzatish dasturi",
    "noAnswer1": "animatsiya tuzish uchun",
    "noAnswer2": "3D model yaratish uchun",
    "noAnswer3": "3D grafik yaratish"
  },
  {
    "question": "Adobe Dimension CC qanday dastur?",
    "answer": "3D model yaratish va 3D dizayn tuzatish uchun",
    "noAnswer1": "3D model yaratish uchun",
    "noAnswer2": "3D grafik yaratish",
    "noAnswer3": "animatsiya tuzish uchun"
  },
  {
    "question": "Adobe After Effects CC qanday dastur?",
    "answer": "animatsiya yaratish, kinematografik effektlarni qo'shish va 3D objektlarni tuzatish uchun",
    "noAnswer1": "3D objektlarni tuzatish uchun",
    "noAnswer2": "3D model yaratish uchun",
    "noAnswer3": "kinematografik effektlarni qo'shish"
  },
  {
    "question": "Blender qanday dastur?",
    "answer": "bepul, ochiq manba 3D model yaratish va animatsiya tuzatish",
    "noAnswer1": "animatsiya tuzish uchun",
    "noAnswer2": "3D grafik yaratish",
    "noAnswer3": "kinematografik effektlarni qo'shish"
  },
  {
    "question": "Autodesk 3ds Max qanday dastur?",
    "answer": "3D model yaratish va animatsiya tuzatish uchun",
    "noAnswer1": "hamma javob togri",
    "noAnswer2": "kinematografik effektlarni qo'shish",
    "noAnswer3": "animatsiya tuzish uchun"
  },
  {
    "question": "Adobe Photoshop dasturi qancha formatdagi fayllar bilan ishlash imkoniga ega?",
    "answer": "20dan ortiq",
    "noAnswer1": "5 dan ortiq",
    "noAnswer2": "10 dan ortiq",
    "noAnswer3": "15 dan ortriq"
  },
  {
    "question": "Прямоугольная область- bu Adobe Photoshop dasturida ishlash jarayonida keng qo‘llaniladigan uskuna. Uning qisqacha tavsifini ayting.",
    "answer": "To‘g‘ri to‘rtburchak shaklidagi maydonni belgilab olish uchun qo‘llaniladi",
    "noAnswer1": "Doira shaklidagi maydonni belgilab olish uchun qo‘llanilad",
    "noAnswer2": "Ushbu oyna tasvirdagi belgilangan maydonni ѐki qatlamni siljitish",
    "noAnswer3": "togri javob yoq"
  },
  {
    "question": "Adobe Photoshop dasturining bir yilligi qachon nishonlangan?",
    "answer": 2005,
    "noAnswer1": 2010,
    "noAnswer2": 2011,
    "noAnswer3": 2007
  },
  {
    "question": "Adobe Photoshop qaysi firma tomonidan ishlab chiqilgan?",
    "answer": "Adobe Inc",
    "noAnswer1": "adobe CC",
    "noAnswer2": "a va b javob togri",
    "noAnswer3": "Adobe In"
  },
  {
    "question": "Photoshopni dastlab versiyasi nechanchi yilda yaratilgan?",
    "answer": "1992 yil",
    "noAnswer1": "1997 yil",
    "noAnswer2": "1996 yil",
    "noAnswer3": "1999 yil"
  },
  {
    "question": "Premiere pro dasturida qanday ishlar olib boriladi",
    "answer": "Video tasvirlar bilan ishlash",
    "noAnswer1": "Tasvirlar bilan ishlash",
    "noAnswer2": "Effeketlar bilan ishlash",
    "noAnswer3": "Matn bilan ishlash"
  },
  {
    "question": "Sweet home dasturi qanday dizaynlar bilan ishlaydi?",
    "answer": "Interyer va Exteryer diazayn",
    "noAnswer1": "Garfik dizayn",
    "noAnswer2": "Machine dizayn",
    "noAnswer3": "Video dizayn"
  },
  {
    "question": "Adobe komponiyasi asoschisi kim?",
    "answer": "John Warnock va Charles Geschke",
    "noAnswer1": "Charles Geschke",
    "noAnswer2": "Warnock Charles",
    "noAnswer3": "John Johnseanilesto"
  },
  {
    "question": "Figma qanday dastur?",
    "answer": "Ux/Ui dizaynerlar uchun dastur",
    "noAnswer1": "3D dizaynerlar uchun",
    "noAnswer2": "Interior Dizaynerlar uchun",
    "noAnswer3": "Exterior Dizaynerlar uchun"
  },
  {
    "question": "Figma dasturida \"Frame\" nima?",
    "answer": "Sahifa o'lchami",
    "noAnswer1": "Elementlar o'lchami",
    "noAnswer2": "To'rtburchak",
    "noAnswer3": "Grafik belgilar"
  },
  {
    "question": "Figma dasturida Boolean operations\" nima uchun ishlatiladi?",
    "answer": "Elementlarni birlashtirish va ajatish uchun",
    "noAnswer1": "Elemetlarni o'chrish uchun",
    "noAnswer2": "Elemetlarni berkitish uchun",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "FIgma dasturida \"Pen tool\" qanday asosiy vazifalarni bajaradi?",
    "answer": "grafik elementlar chizadi",
    "noAnswer1": "Ellips chizadi",
    "noAnswer2": "Uchburchak chizadi",
    "noAnswer3": "To'rburchak chizadi"
  },
  {
    "question": "Figma dasturida \"Export\" amali qanday vazifaga ega?",
    "answer": "Fayllarni export qilishga",
    "noAnswer1": "Tashqi fayllarni yuklab olishga",
    "noAnswer2": "Prototiplashga",
    "noAnswer3": "Hech nima qilmaydi"
  },
  {
    "question": "Figma dasturida Avto Loyaut qanday ishlaydi?",
    "answer": "Elementlari avtomatik tartiblaydi",
    "noAnswer1": "Elementlarni avtomatik qo'yadi",
    "noAnswer2": "Elementlarni avtomatik o'chiradi",
    "noAnswer3": "Elementlarni avtomatik guruhlaydi"
  },
  {
    "question": "Figma dasturida elementlarni guruhlash....... orqali bajariladi",
    "answer": "Ctrl+g",
    "noAnswer1": "Ctrl+d",
    "noAnswer2": "Ctrl+t",
    "noAnswer3": "Ctrl+a"
  },
  {
    "question": "Figma dasturining qulayligi nimada?",
    "answer": "Bir loyihada bir vaqtda bir necha kishi ishlay oladi",
    "noAnswer1": "Resurslarga boy",
    "noAnswer2": "Ofline dasturligida",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Figma dasturida loyihaga qanday \"frame\" qo'shiladi?",
    "answer": "F",
    "noAnswer1": "P",
    "noAnswer2": "T",
    "noAnswer3": "A"
  },
  {
    "question": "Figma dasturida Companent qanday hosil qilinadi?",
    "answer": "Ctrl+Alt+k",
    "noAnswer1": "Ctrl+C",
    "noAnswer2": "Ctrl+V",
    "noAnswer3": "Ctrl+A"
  },
  {
    "question": "Tinkercad bu?",
    "answer": "Veb-brauzerda ishlaydigan bepul, onlayn 3D modellashtirish dasturi",
    "noAnswer1": "Rasmlarni taxrirlovchi dastur",
    "noAnswer2": "Onlayn video taxrirlovchi dastur",
    "noAnswer3": "Musiqa fayllarni taxrirlovchi dastru"
  },
  {
    "question": "Nechinchi yilda Tincerkad sotuvga chiqqanidan beri u 3D bosib chiqarish uchun modellar yaratish hamda maktablarda konstruktiv qattiq geometriyaga kirish darajasidagi kirish uchun mashhur platformaga aylandi?",
    "answer": "2011-yilda",
    "noAnswer1": "2015-yilda",
    "noAnswer2": "2013-yilda",
    "noAnswer3": "2017-yilda"
  },
  {
    "question": "Nechinchi yilda Autodesk Maker yarmarkasida Tinkercad-ni sotib olishini e'lon qildi?",
    "answer": "2013-yilda",
    "noAnswer1": "2015-yilda",
    "noAnswer2": "2012-yilda",
    "noAnswer3": "2014-yilda"
  },
  {
    "question": "Tincerkadda shakllarni nechta formatda import qilish mumkin?",
    "answer": "3 ta",
    "noAnswer1": "2 ta",
    "noAnswer2": "4 ta",
    "noAnswer3": "5 ta"
  },
  {
    "question": "Tinkercad 3D chop etishga tayyor qanday formatlarida modellarni eksport qiladi.",
    "answer": "STL yoki OBJ",
    "noAnswer1": "OBJ yoki"
  },
  {
    "question": "Rastrli grafik muharririda tasvirlami yaratish, boshqarish turli ranglar holatlarida ishlash, tasvirlami bog'lash, matnlami tahrirlash, palitralami birlashtirish imkoniyatlari bilan tanishasiz",
    "answer": "Photoshop",
    "noAnswer1": "word",
    "noAnswer2": "excel",
    "noAnswer3": "paint"
  },
  {
    "question": "Adobe Photoshop dasturida asosiy ranglar qaysilar?",
    "answer": "barcha javoblar to’g’ri",
    "noAnswer1": "yashil",
    "noAnswer2": "ko’k",
    "noAnswer3": "qizil"
  },
  {
    "question": "Adobe Photoshop dasturida yangi tasvirni qanday yaratiladi?",
    "answer": "Ctrl+N",
    "noAnswer1": "Ctrl+X",
    "noAnswer2": "Ctrl+A",
    "noAnswer3": "Ctrl+S"
  },
  {
    "question": "Adobe Photoshop dasturi menyusi necha qismdan iborat?",
    "answer": 9,
    "noAnswer1": 10,
    "noAnswer2": 12,
    "noAnswer3": 7
  },
  {
    "question": "Adobe Photoshop dasturida History paneli nima vazifani bajaradi?",
    "answer": "bajarilgan ishlar ketma-ketligini ko’rsatib, biror-bir bosqichga qaytish imkonini beradi",
    "noAnswer1": "chizilgan ob’ektlar uchun tayyor stillardan foydalanib rang berish imkonini yaratadi",
    "noAnswer2": "bazada mavjud shakllarni ko’rsatadi",
    "noAnswer3": "ko’rish kattaligi (masshtab)ni belgilaydi, varoqning bir qismidan ikkinchi qismiga tez o’tish imkonini beradi"
  },
  {
    "question": "Adobe Photoshop dasturida Opacity nima?",
    "answer": "ob’ekt shaffoflik darajasini o’rnatish buyrug’i",
    "noAnswer1": "rang bo’yicha belgilash buyrug’i",
    "noAnswer2": "rang chegarasi bo’yicha belgilash buyrug’i",
    "noAnswer3": "tanlangan ob’ektning biror bir soxasini to’rtburchak yoki oval shaklida belgilash buyrug’i"
  },
  {
    "question": "Adobe Photoshop dasturida Internet bilan bog’lanishda qaysi buyruq ishlatiladi?",
    "answer": "Adobe online",
    "noAnswer1": "Eksport",
    "noAnswer2": "Import",
    "noAnswer3": "Adobe line"
  },
  {
    "question": "Adobe Photoshop dasturida Styles paneli nima vazifani bajaradi?",
    "answer": "chizilgan ob’ektlar uchun tayyor stillardan foydalanib rang berish",
    "noAnswer1": "bir qismidan ikkinchi qismiga tez o’tish imkonini beradi",
    "noAnswer2": "ko’rish kattaligi (masshtab)ni belgilaydi",
    "noAnswer3": "bazada mavjud shakllarni ko’rsatadi"
  },
  {
    "question": "Adobe Photoshop dasturida qaysi formatlarda hujjatni eksport qilish mumkin?",
    "answer": "Hamma variantlar",
    "noAnswer1": "JPEG (Joint Photographic Experts Group)",
    "noAnswer2": "PSD (Photoshop Document)",
    "noAnswer3": "GIF (Graphics Interchange Format)"
  },
  {
    "question": "Adobe Photoshop dasturida Gaussian Blur effektini qanday yo'l bilan qo'shish mumkin?\n",
    "answer": "Filter > Blur > Gaussian Blur",
    "noAnswer1": "Effects > Blur > Gaussian",
    "noAnswer2": "Image > Blur > Gaussian",
    "noAnswer3": "Blur > Gaussian > Apply"
  },
  {
    "question": "Adobe Illustrator dasturida hujjat yaratish uchun qanday yo'l tanlanadi?",
    "answer": "File > New",
    "noAnswer1": "File > Save",
    "noAnswer2": "Edit > Create",
    "noAnswer3": "View > Document"
  },
  {
    "question": "Adobe Illustrator dasturida \"Ellipse Tool\" ishlatib, qaysi shaklni yaratishingiz mumkin?",
    "answer": "Aylanma",
    "noAnswer1": "To'g'ri burchak",
    "noAnswer2": "Uchburchak",
    "noAnswer3": "Yulduz"
  },
  {
    "question": "Adobe Illustrator dasturida qalam orqali chiziq chizish uchun qanday vosita ishlatiladi?",
    "answer": "Pen Tool",
    "noAnswer1": "Line Tool",
    "noAnswer2": "Pencil Tool",
    "noAnswer3": "Brush Tool"
  },
  {
    "question": "Adobe Illustrator dasturida yangi matn qo'shish uchun qanday vosita ishlatiladi?",
    "answer": "Text Tool",
    "noAnswer1": "Font Tool",
    "noAnswer2": "Write Tool",
    "noAnswer3": "Type Tool"
  },
  {
    "question": "Adobe Illustrator dasturida matnning shriftini o'zgartirish uchun qaysi menyudan foydalanish kerak?",
    "answer": "Type > Font",
    "noAnswer1": "Edit > Typeface",
    "noAnswer2": "Text > Font",
    "noAnswer3": "Format > Text"
  },
  {
    "question": "Adobe Illustrator dasturida obyekt ma'lumotlarini ko'rish uchun qaysi panelni ochish kerak?",
    "answer": "Object Panel",
    "noAnswer1": "Data Panel",
    "noAnswer2": "Details Panel",
    "noAnswer3": "Information Panel"
  },
  {
    "question": "Adobe Illustrator dasturida obyektga rang qo'shish uchun qaysi panel ishlatiladi?",
    "answer": "Color Panel",
    "noAnswer1": "Shape Panel",
    "noAnswer2": "Stroke Panel",
    "noAnswer3": "Layers Panel"
  },
  {
    "question": "Adobe Illustrator dasturida yordam olish uchun qaysi yo'lda yordam kerak?",
    "answer": "Help > Tutorials",
    "noAnswer1": "File > Help",
    "noAnswer2": "View > Support",
    "noAnswer3": "Tools > Assistance"
  },
  {
    "question": "Adobe Illustrator dasturida qaysi formatlarda hujjatni eksport qilish mumkin?",
    "answer": "Hamma variantlar",
    "noAnswer1": "PNG (Portable Network Graphics)",
    "noAnswer2": "PDF (Portable Document Format)",
    "noAnswer3": "AI (Adobe Illustrator)"
  },
  {
    "question": "Adobe Illustrator dasturida \"Rectangle Tool\" ishlatib, qaysi shaklni yaratishingiz mumkin?",
    "answer": "To'g'ri burchak",
    "noAnswer1": "Aylanma",
    "noAnswer2": "Uchburchak",
    "noAnswer3": "Kvadrat"
  },
  {
    "question": "Foxit PDF Reader nima uchun kerak?",
    "answer": "PDF fayllarni ko'rish uchun",
    "noAnswer1": "PDF fayllarni tahrirlash uchun",
    "noAnswer2": "PDF fayllarni yaratish uchun",
    "noAnswer3": "PDF fayllarni himoya qilish uchun"
  },
  {
    "question": "Foxit PDF Reader -da PDF faylni qanday ochish mumkin ?",
    "answer": "Fayl ustiga ikki marta bosing",
    "noAnswer1": "Faylni dastur oynasiga torting",
    "noAnswer2": "\" > \"Ochish\" menyusidan faylni tanlang",
    "noAnswer3": "Faylni dastur olib bormang"
  },
  {
    "question": "Foxit PDF Reader -da PDF-faylni ko'rsatish masshtabini qanday o'zgartirish mumkin ?",
    "answer": "Sichqoncha g'ildiragidan foydalaning",
    "noAnswer1": "Dastur oynasining pastki o'ng burchagidagi slayderni torting",
    "noAnswer2": "\"Scale\" maydoniga masshtab qiymatini kiriting",
    "noAnswer3": "Sichqoncha chap tugmasidan foydalaning"
  },
  {
    "question": "Foxit PDF Reader -da PDF faylidagi matnni qanday topish mumkin ?",
    "answer": "Ctrl+F klaviatura yorliqlarini bosing",
    "noAnswer1": "\" > \"Topish\" menyu bandini tanlang",
    "noAnswer2": "Asboblar panelidagi Topish tugmasini bosing",
    "noAnswer3": "Ctrl+V klaviatura yorliqlarini bosing"
  },
  {
    "question": "Foxit PDF Reader -da PDF faylga xatcho'pni qanday qo'shish mumkin ?",
    "answer": "Ctrl+D klaviatura yorlig'ini bosing",
    "noAnswer1": "Ko‘rish > Xatcho‘p qo‘shish- ni tanlang",
    "noAnswer2": "Asboblar panelidagi \"Xatcho'p qo'shish\" tugmasini bosing",
    "noAnswer3": "Ctrl+A klaviatura yorlig'ini bosing"
  },
  {
    "question": "Foxit PDF Reader -da PDF faylni boshqa formatga qanday eksport qilish mumkin ?",
    "answer": "Menyu bandini tanlang \"Fayl \" > \"Eksport qilish\"",
    "noAnswer1": "Asboblar panelidagi \"Eksport\" tugmasini bosing",
    "noAnswer2": "Eksport muloqot oynasida formatni tanlang",
    "noAnswer3": "Menyu bandini tanlang \"Fayl \" > \"Import qilish\""
  },
  {
    "question": "Foxit PDF Reader -da PDF-faylni qanday parol bilan himoyalash mumkin ?",
    "answer": "Menyu bandini tanlang \"Fayl \" > \"Xususiyatlar\"",
    "noAnswer1": "\"Himoya qilish\" tugmasini bosing",
    "noAnswer2": "PDF-ni himoya qilish muloqot oynasiga parolni kiriting",
    "noAnswer3": "Dastur oynasining pastki o'ng burchagidagi slayderni torting"
  },
  {
    "question": "Foxit PDF Reader -da PDF fayliga moybo'yoqni qanday qo'shish mumkin ?",
    "answer": "Menyu bandini tanlang \"Asboblar \" > \"Filigran qo'shish\"",
    "noAnswer1": "Asboblar panelidagi \"Filigran qo'shish\" tugmasini bosing",
    "noAnswer2": "Suv belgisini qo'shish dialog oynasida moybo'yoqli opsiyalarni tanlang",
    "noAnswer3": "Ctrl+Shift+F klaviatura yorliqlarini bosing"
  },
  {
    "question": "Foxit PDF Reader -da PDF faylidagi shriftni qanday o'zgartirish mumkin ?",
    "answer": "Shriftini o'zgartirmoqchi bo'lgan matnni tanlang",
    "noAnswer1": "Ctrl+Shift+F klaviatura yorliqlarini bosing",
    "noAnswer2": "Shrift xususiyatlari dialog oynasida shriftni tanlang",
    "noAnswer3": "Asboblar panelidagi \"Filigran qo'shish\" tugmasini bosing"
  },
  {
    "question": "Foxit PDF Reader -da PDF faylga qanday izoh qo'shish mumkin ?",
    "answer": "Asboblar panelidagi \"Izoh\" tugmasini bosing",
    "noAnswer1": "Fikr qo'shish uchun vositani tanlang",
    "noAnswer2": "Hujjatga sharh yozing",
    "noAnswer3": "Ctrl+F klaviatura yorliqlarini bosing"
  },
  {
    "question": "Canva Interfeysi va Asosiy Amallar",
    "answer": "Create",
    "noAnswer1": "Start",
    "noAnswer2": "Open",
    "noAnswer3": "Launch"
  },
  {
    "question": "Canva dasturida yangi loyihani boshlash uchun qaysi tugmani bosing?",
    "answer": "Start a Project",
    "noAnswer1": "Open a File",
    "noAnswer2": "Create New",
    "noAnswer3": "Begin Design"
  },
  {
    "question": "Canva dasturida qaysi vosita bilan rangni o'zgartirishingiz mumkin?",
    "answer": "Color Picker",
    "noAnswer1": "Fill Tool",
    "noAnswer2": "Paint Brush",
    "noAnswer3": "Text Tool"
  },
  {
    "question": "Canva dasturida qalin o'lchamini o'zgartirish uchun qaysi asbobdan foydalanishingiz mumkin?",
    "answer": "Stroke Tool",
    "noAnswer1": "Brush Size",
    "noAnswer2": "Width Adjuster",
    "noAnswer3": "Line Thickness"
  },
  {
    "question": "Canva dasturida \"Elements\" paneli orqali qaysi obyektni loyihangizga qo'shishingiz mumkin?",
    "answer": "Images",
    "noAnswer1": "Icons",
    "noAnswer2": "Text",
    "noAnswer3": "Shapes"
  },
  {
    "question": "Canva dasturida maskalash qilish uchun qaysi funksiyani ishlatishingiz mumkin?",
    "answer": "Mask",
    "noAnswer1": "Group",
    "noAnswer2": "Lock",
    "noAnswer3": "Merge"
  },
  {
    "question": "Canva dasturida yangi matn qo'shish uchun qaysi funksiyani tanlashingiz mumkin?",
    "answer": "Add Text",
    "noAnswer1": "Insert Text",
    "noAnswer2": "Type Here",
    "noAnswer3": "Text Box"
  },
  {
    "question": "Canva dasturida matnning shriftini o'zgartirish uchun qaysi panelni ishlatishingiz kerak?",
    "answer": "Font Panel",
    "noAnswer1": "Text Panel",
    "noAnswer2": "Style Panel",
    "noAnswer3": "Format Panel"
  },
  {
    "question": "Canva dasturida yordam olish uchun qaysi yo'lda yordam kerak?",
    "answer": "Help > Tutorials",
    "noAnswer1": "File > Help",
    "noAnswer2": "View > Support",
    "noAnswer3": "Tools > Assistance"
  },
  {
    "question": "Canva dasturida qaysi menyudan loyihangizni ko'rish va eksport qilish mumkin?",
    "answer": "File",
    "noAnswer1": "View",
    "noAnswer2": "Edit",
    "noAnswer3": "Export"
  },
  {
    "question": "Blender qanday dastur",
    "answer": "ochiq va erkin kodli dastur",
    "noAnswer1": "yopiq kodli dastur",
    "noAnswer2": "animatsion yaratish dasturi",
    "noAnswer3": "viziual effektlar dasturi"
  },
  {
    "question": "Blender dasturi qanday o'lchamdagi modellarga mo'ljallangan",
    "answer": "3D va 2D",
    "noAnswer1": "3D",
    "noAnswer2": "2D",
    "noAnswer3": "4D"
  },
  {
    "question": "\"Blender Windows tizimi\" deb nomlanadigan dasturiy ta'minoti qachon ishlab chiqilgan",
    "answer": "1993-yil oxiri",
    "noAnswer1": "1992 yil",
    "noAnswer2": "1993-yil boshi",
    "noAnswer3": "1999-yil"
  },
  {
    "question": "1998-yil nashr etilgan va Internet va bepul bo'lgan nashr qaysi dasturlar uchun ommabop versiya bo'lgan",
    "answer": "Linux va Free BSD",
    "noAnswer1": "Linux",
    "noAnswer2": "Free BSD",
    "noAnswer3": "NeoGeo"
  },
  {
    "question": "Blender dastlab qaysi kompaniya tomonidan ishlab chiqilgan",
    "answer": "NeoGeo",
    "noAnswer1": "Tan Roosendal",
    "noAnswer2": "Yello",
    "noAnswer3": "SGI"
  },
  {
    "question": "Qachon Blender SGI bepul dasturi sifatida ochiq onlayn tarzda chiqarildi",
    "answer": "1998-yil 1-yanver",
    "noAnswer1": "1998-yil 2-yanver",
    "noAnswer2": "1999-yil",
    "noAnswer3": "2000-yil"
  },
  {
    "question": "Blenderda animatsiya yaratish uchun vaqt shkalasi",
    "answer": "Timeline",
    "noAnswer1": "Outliner",
    "noAnswer2": "Time",
    "noAnswer3": "Liner"
  },
  {
    "question": "Blenderda obyektlarning 3D ko‘rinishdagi transformasiyasi",
    "answer": "3D Viewport",
    "noAnswer1": "Timeliner",
    "noAnswer2": "Outliner",
    "noAnswer3": "Viewport"
  },
  {
    "question": "Blender - bu",
    "answer": "Odamlar noyob va batafsil dizaynlarni yaratish uchun foydalanadigan mashhur SAPR dasturi",
    "noAnswer1": "Odamlar noyob va batafsil dizaynlarni yaratish uchun foydalanadigan dastur",
    "noAnswer2": "Odamlar noyob dizaynlarni yaratish uchun dastur",
    "noAnswer3": "Odamlar noyob va yaratish uchun foydalanadigan SAPR dastur"
  },
  {
    "question": "Blender nima yordamida proyektlarni modellashtiradi",
    "answer": "3D Print Toolbox",
    "noAnswer1": "prin toolbox",
    "noAnswer2": "Toolbox",
    "noAnswer3": "Print box"
  },
  {
    "question": "Rasmga rang qo‘shish, qaytarish, ob'ektlarni kesish, ko‘chirish, o‘zgartirish, rasm effektlari qo‘shish kabi amallar Adobe photoshopning qaysi asosiy xususiyatida amalga oshiriladi.",
    "answer": "Rasm Tahrirlash",
    "noAnswer1": "Tasvir Tarkibi",
    "noAnswer2": "Rasm San'ati",
    "noAnswer3": "3D Grafika"
  },
  {
    "question": "Ranglarni sochish, ranglarni qaytarish, so‘zlarni sozlash kabi amallar Adobe photoshopning qaysi asosiy xususiyatida amalga oshiriladi.",
    "answer": "Ranglar va Rang Tahrirlash",
    "noAnswer1": "Rasm Tahrirlash",
    "noAnswer2": "Tasvir Tarkibi",
    "noAnswer3": "Rasm San'ati"
  },
  {
    "question": "Qalin chizmalar va illlyustratsiyalar yaratishingiz yoki kashfiyotlar va logotiplar ishlab chiqarish kabi amallar Adobe photoshopning qaysi asosiy xususiyatida amalga oshiriladi.",
    "answer": "Rasm San'ati",
    "noAnswer1": "Ranglar va Rang Tahrirlash",
    "noAnswer2": "3D Grafika",
    "noAnswer3": "Tasvir Tarkibi"
  },
  {
    "question": "Adobe photoshop dasturida Vertikal chiziq ........",
    "answer": "piksellar qatorini tanlaydi",
    "noAnswer1": "piksellar ustunini ajratib ko‘rsatadi",
    "noAnswer2": "erkin shaklli maydonlarni tanlash",
    "noAnswer3": "ovalni tanlaydi"
  },
  {
    "question": "Adobe photoshop dasturida Gorizontal Row ........",
    "answer": "piksellar ustunini ajratib ko‘rsatadi",
    "noAnswer1": "ovalni tanlaydi",
    "noAnswer2": "piksellar qatorini tanlaydi",
    "noAnswer3": "erkin shaklli maydonlarni tanlash"
  },
  {
    "question": "Dastur, tasvirning qo‘shimcha qismlarini tahrirlash uchun plaginlar va ko‘rinish, zarralar va o‘q yozma efektlarini qo‘shish imkonini Adobe photoshopning qaysi asosiy xususiyatida amalga oshiriladi.",
    "answer": "Tasvir Tarkibi",
    "noAnswer1": "Rasm Tahrirlash",
    "noAnswer2": "Rasm San'ati",
    "noAnswer3": "Batafsil Rang Sozlash"
  },
  {
    "question": "Adobe photoshop dasturida Lasso (L)....",
    "answer": "erkin shaklli maydonlarni tanlash",
    "noAnswer1": "piksellar ustunini ajratib ko‘rsatadi",
    "noAnswer2": "piksellar qatorini tanlaydi",
    "noAnswer3": "ovalni tanlaydi"
  },
  {
    "question": "Adobe photoshop dasturida Fragment tanlash (K) qanday maqsadda qo'llaniladi",
    "answer": "bo‘lakni tanlaydi va uni tahrir qiladi",
    "noAnswer1": "- HTML hujjatlarida ishlatiladigan rasmli kartalar uchun bo‘lak hosil qiladi",
    "noAnswer2": "rasmdan tanlangan maydonni kesib, keraksiz bo‘laklarni kesib tashlaydi",
    "noAnswer3": "qo‘shni piksellar ranglarining o‘xshashligi asosida joylarni tanlaydi"
  },
  {
    "question": "Adobe photoshop dasturida Nesting (K) qanday maqsadda qo'llaniladi",
    "answer": "HTML hujjatlarida ishlatiladigan rasmli kartalar uchun bo‘lak hosil qiladi",
    "noAnswer1": "bo‘lakni tanlaydi va uni tahrir qiladi",
    "noAnswer2": "rasmdan tanlangan maydonni kesib, keraksiz bo‘laklarni kesib tashlaydi",
    "noAnswer3": "qo‘shni piksellar ranglarining o‘xshashligi asosida joylarni tanlaydi"
  },
  {
    "question": "Adobe photoshop dasturida Shtamp (S) qanday maqsadda qo'llaniladi",
    "answer": "piksellarni bir sohadan ikkinchisiga ko‘chiradi",
    "noAnswer1": "tanlangan maydonni naqsh sifatida ko‘chirad",
    "noAnswer2": "ob'ektlarni oldingi layer rangiga bo‘yaydi",
    "noAnswer3": "tasvir fonini shaffof maydon bilan almashtiradi"
  },
  {
    "question": "Power point dasturi qaysi kampanyaga tegishli ?",
    "answer": "Microsoft office",
    "noAnswer1": "Adobe",
    "noAnswer2": "Microsoft exsel",
    "noAnswer3": "barcha javob hato"
  },
  {
    "question": "Microsoft Power point ingilizchan ma'no jixatidan tarjimasi?",
    "answer": "Ishonarli ma'ruza",
    "noAnswer1": "ma'ruza",
    "noAnswer2": "dastur",
    "noAnswer3": "Ishonchli dastur"
  },
  {
    "question": "Power point birinchi versiyasi nechanchi yil ishlab chiqan?",
    "answer": "1987-yil",
    "noAnswer1": "1988-yil",
    "noAnswer2": "1986-yil",
    "noAnswer3": "1999-yil"
  },
  {
    "question": "Power pointni tashkilotlar uchun nechanchi yili sotuga chiqan",
    "answer": "2006-yil 30-noyabr",
    "noAnswer1": "2006-yil 30-dekabr",
    "noAnswer2": "2007-yil 30-noyabt",
    "noAnswer3": "2007-yil 30-dekabr"
  },
  {
    "question": "Microsoft Power Point da Slayd turini o'zgartirish qanday bajariladi?",
    "answer": "Format - Svetovaya sxema",
    "noAnswer1": "Format - Razmetka slayda",
    "noAnswer2": "Nastroyka prezentasii",
    "noAnswer3": "Nastroyka animasii"
  },
  {
    "question": "Microsoft Power Point da Slaydlarni tayyor shablon rangli jixozlanishiga o’tkazish qaysi buyruq bilan bajariladi?",
    "answer": "Format - Razmetka slayda",
    "noAnswer1": "Format - Svetovaya sxema",
    "noAnswer2": "Vstavka - Fon",
    "noAnswer3": "Format - oformleniya slayda"
  },
  {
    "question": "Microsoft Power Point da Slayd turini o‘zgartirish qanday bajariladi?",
    "answer": "Format razmetka slayita",
    "noAnswer1": "Format - Svetovaya sxema",
    "noAnswer2": "nastroyka animatsiyasi",
    "noAnswer3": "Format - nastroyka prezintatsiya"
  },
  {
    "question": "Microsoft Power Point da Taqdimot tayyor bo’lgandan keyin uni ishga tushirishimiz uchun qaysi amaldan foydalanamiz?",
    "answer": "POKAZ SLAYDOV menyusi ichidagi NAChAT POKAZ yoki F5 tugmasini bosamiz.",
    "noAnswer1": "POKAZ SLAYDOV menyusi ichidagi NASTROYKA DEYSTVIYa yoki F4 tugmasini bosamiz.",
    "noAnswer2": "VID menyusidan NASTROYKA DEYSTVIYa yoki F5 tugmasini bosamiz",
    "noAnswer3": "ormat - Razmetka slayda va F5 tugmasini bosamiz."
  },
  {
    "question": "Power point hususiy foydalanuvchilar uchun nechanchi yil sotuvga chiqan ?",
    "answer": "2007-yil 30-yanvar",
    "noAnswer1": "2008-yil 30-yanvar",
    "noAnswer2": "2009-yil 30-yanvar",
    "noAnswer3": "2010-yil 30-yanvar"
  },
  {
    "question": "Microsoft office qaysi dasturlarni o'z ichiga oladi?",
    "answer": "Barcha javob to'g'ri",
    "noAnswer1": "Excel",
    "noAnswer2": "power-point",
    "noAnswer3": "outolook"
  },
  {
    "question": "Audacity qanday dastur?",
    "answer": "Bepul ochiq manbali kodli audio tahrirlash va montaj qilish dasturi",
    "noAnswer1": "Bepul ochiq manbali kodli vektor grafika tahrirlovchisi",
    "noAnswer2": "Texnik rasmlarni yaratish va tahrirlash uchun dastur",
    "noAnswer3": "fayllarni arxivlash va ajratish uchun datur"
  },
  {
    "question": "\"Automated Layout Generator\" dasturi nima uchun ishlatiladi?",
    "answer": "Adobe stock servisdan tasvirlarni qidirish va yuklash uchun vosita",
    "noAnswer1": "Maqola yozish, joylashtirish va tahrir qilish uchun avtomatlashtirilgan vosita",
    "noAnswer2": "Veb -saytlarni avtomatik ravishda yaratish va boshqarish uchun qo'llanma",
    "noAnswer3": "Matnlar ustida jamoavi ishlash uchun qo'llanma"
  },
  {
    "question": "MATLAB qanday dastur?",
    "answer": "Malumotlarni tahlil qilish ,matematik modellarini yaratish va simulatsiya qilish uchun dastur",
    "noAnswer1": "Bepul ochiq manbali kodli media pleer ko'p formatli audio va video fayllarni o'rnatish",
    "noAnswer2": "Bepul ochiq manba kodli vektor grafika tahrirlovchisi",
    "noAnswer3": "pdf hujjatlarini tahrirlash, birlashtrish uchun moljallangan"
  },
  {
    "question": "Figma qanday dastur?",
    "answer": "Ux/Ui dizaynerlar uchun dastur",
    "noAnswer1": "Interier dizaynerlar uchun dastur",
    "noAnswer2": "Oddiy dastur",
    "noAnswer3": "Murakkab dastur"
  },
  {
    "question": "Adobe Dimension CC qanday dastur?",
    "answer": "3D model yaratish va 3D dizayn tuzatish uchun",
    "noAnswer1": "2D model yaratish va 2D dizayn tuzatish uchun",
    "noAnswer2": "1D model yaratish va 1D dizayn tuzatish uchun",
    "noAnswer3": "1D model yaratish va 2D dizayn tuzatish uchun"
  },
  {
    "question": "Photoshop qaysi amaliydasturiy paketlar oilasiga kiradi?",
    "answer": "Adobe",
    "noAnswer1": "Microsoft",
    "noAnswer2": "Hech qaysi",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Figma dasturi qaysi companiya tomonidan sotib olingan?",
    "answer": "Adobe",
    "noAnswer1": "Microsoft",
    "noAnswer2": "Hech qaysi",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Illustrator qaysi amaliydasturiy paketlar oilasiga kiradi?",
    "answer": "Adobe",
    "noAnswer1": "Microsoft",
    "noAnswer2": "Hech qaysi",
    "noAnswer3": "Barcha javoblar to'g'ri"
  },
  {
    "question": "Photoshop dasturi qanday grafika bilan ishlaydi?",
    "answer": "Raster(jpg,psd,tiff,va b.q)",
    "noAnswer1": "vektor (ai, svg,sv va b.q )",
    "noAnswer2": "3d",
    "noAnswer3": "8 d"
  },
  {
    "question": "Photoshop dasturida yangi ish oynasi qanday tugma bilan ochiladi?",
    "answer": "ctrl+N",
    "noAnswer1": "ctrl+z",
    "noAnswer2": "ctrl+p",
    "noAnswer3": "ctrl+l"
  },
  {
    "question": "Photoshopda yangi proyekt faylini qanday tugma bilan saqlanadi ?",
    "answer": "ctrl+S",
    "noAnswer1": "ctrsl+T",
    "noAnswer2": "ctrl+a",
    "noAnswer3": "ctrl+l"
  },
  {
    "question": "Photoshop asosan qanday grafika bilan ishlay beradi ?",
    "answer": "Raster",
    "noAnswer1": "vektor",
    "noAnswer2": "bilmadim",
    "noAnswer3": "unday grafika yo'q"
  },
  {
    "question": "Adobe Photoshop qaysi kompanyaga tegishli ?",
    "answer": "Adobe",
    "noAnswer1": "Meta",
    "noAnswer2": "Tesla",
    "noAnswer3": "Office"
  },
  {
    "question": "Adobe Illustrator qaysi kompanyaga tegishli ?",
    "answer": "Adobe",
    "noAnswer1": "Meta",
    "noAnswer2": "Tesla",
    "noAnswer3": "Office"
  },
  {
    "question": "Illustrator asosan qanday grafika bilan ishlay beradi ?",
    "answer": "Vektor",
    "noAnswer1": "Raster",
    "noAnswer2": "bilmadim",
    "noAnswer3": "unday grafika yo'q"
  },
  {
    "question": "Adobe Illustrator nima ?",
    "answer": "vektorli grafikalar, chizmalar, plakatlar, logotiplar, shriftlar, taqdimotlar va boshqa san'at asarlarini yaratish uchun mo'ljallangan dizayn dasturi. Ushbu vektorga asoslangan dastur grafik dizaynerlar uchun yaratilgan dastur",
    "noAnswer1": "video va animatsiyalar bilan ishlaydagan maxsus dastur",
    "noAnswer2": "musiqa bilan ishlash uchun yaratilgan maxsus dastur",
    "noAnswer3": "bilmadim"
  },
  {
    "question": "Adobe Illustratorni maxsus fayl kengaytmasi nima?",
    "answer": "ai",
    "noAnswer1": "psd",
    "noAnswer2": "svg",
    "noAnswer3": "dwg"
  },
  {
    "question": "Adobe photoshopning maxsus fayl kengaytmasi nima?",
    "answer": "psd",
    "noAnswer1": "pdf",
    "noAnswer2": "ai",
    "noAnswer3": "dwg"
  },
  {
    "question": "Canva web sayti qaysi domenda",
    "answer": ".com",
    "noAnswer1": ".uz",
    "noAnswer2": ".ru",
    "noAnswer3": ".ai"
  },
  {
    "question": "Canva web sayti yordam bo'limi qaysi sahifada tog'ri keltirilgan?",
    "answer": "www.canva.com/help",
    "noAnswer1": "www.canva.ru/help",
    "noAnswer2": "www.canva.uz/yordam",
    "noAnswer3": "to'g'ri javob yo'q"
  },
  {
    "question": "Canva web saytida obuna turlari nechta?",
    "answer": "3 ta",
    "noAnswer1": "5 ta",
    "noAnswer2": "7 ta",
    "noAnswer3": "9 ta"
  },
  {
    "question": "Canva pro accountini sotib olsangiz qancha hajmga ega xotira beriladi?",
    "answer": "1 TB",
    "noAnswer1": "100 GB",
    "noAnswer2": "200 GB",
    "noAnswer3": "120 GB"
  },
  {
    "question": "Canva web saytidan foydalanish rollari nechta ?",
    "answer": "6 ta",
    "noAnswer1": "2 ta",
    "noAnswer2": "3 ta",
    "noAnswer3": "12 ta"
  },
  {
    "question": "Canva web saytining biznes bo'limining manbalar ustunida nechta bo'limlar bor?",
    "answer": "5 ta",
    "noAnswer1": "10 ta",
    "noAnswer2": "15 ta",
    "noAnswer3": "13 ta"
  },
  {
    "question": "Canva for Business bo'limining birinchi yo'nalishi nima?",
    "answer": "Kontent yaratish",
    "noAnswer1": "Vizual aloqa",
    "noAnswer2": "Brend boshqaruvi",
    "noAnswer3": "Jamoa hamkorligi"
  },
  {
    "question": "Canva web sayti ijtimoiy tarmoqlar bo'limida default nechta ijtimoiy tarmoq ko'rsatilgan?",
    "answer": "3 ta",
    "noAnswer1": "5 ta",
    "noAnswer2": "7 ta",
    "noAnswer3": "10 ta"
  },
  {
    "question": "Canva pro accountini sotib olsangiz sizga nechta premium andoza beriladi?",
    "answer": "610 000+",
    "noAnswer1": "120 000+",
    "noAnswer2": "850 000 +",
    "noAnswer3": "100 000+"
  },
  {
    "question": "\"SweetHome\" dasturida faylni saqlash ketma-ketligi qanday?",
    "answer": "File + Save yoki File + Save As",
    "noAnswer1": "File + Open",
    "noAnswer2": "File + Close",
    "noAnswer3": "File + Print"
  },
  {
    "question": "\"SweetHome\" dasturi qanday formatdagi obeyktlar bilan ishlaydi?",
    "answer": "3D",
    "noAnswer1": "2D",
    "noAnswer2": "7D",
    "noAnswer3": "9D"
  },
  {
    "question": "\"SweetHome\" dasturi interfeysi asosan qaysi til bilan ishlaydi?",
    "answer": "Ingliz tili",
    "noAnswer1": "Fransuz tili",
    "noAnswer2": "Turk tili",
    "noAnswer3": "Rus tili"
  },
  {
    "question": "\"SweetHome\" dasturini qaysi operatsion tizimlarga o'rnatsa bo'ladi?",
    "answer": "Hamma javoblar to'g'ri",
    "noAnswer1": "Windows",
    "noAnswer2": "MacOs",
    "noAnswer3": "Linux"
  },
  {
    "question": "\"SweetHome\" dasturi ichida yaratilgan loyihalarni eksport qilish uchun qanday formatlar qo'llaniladi?",
    "answer": "OBJ, STL",
    "noAnswer1": "STL, DOCX",
    "noAnswer2": "OBJ, PNG",
    "noAnswer3": "DOCX, PNG"
  },
  {
    "question": "\"SweetHome\" dasturining \"Lights\" bo'limida qanday jihozlar mavjud?",
    "answer": "Chiroqlar va lampalar",
    "noAnswer1": "Oshxona jihozlari",
    "noAnswer2": "Yotoqxona jihozlari",
    "noAnswer3": "Eshiklar va oynalar"
  },
  {
    "question": "\"SweetHome\" dasturining \"Kitchen\" bo'limida qanday jihozlar mavjud?",
    "answer": "Oshxona jihozlari",
    "noAnswer1": "Chiroqlar va lampalar",
    "noAnswer2": "Yotoqxona jihozlari",
    "noAnswer3": "Eshiklar va oynalar"
  },
  {
    "question": "\"SweetHome\" dasturining \"Doors and Windows\" bo'limida qanday jihozlar mavjud?",
    "answer": "Eshiklar va oynalar",
    "noAnswer1": "Chiroqlar va lampalar",
    "noAnswer2": "Oshxona jihozlari",
    "noAnswer3": "Yotoqxona jihozlari"
  },
  {
    "question": "\"SweetHome\" dasturining \"Bedroom\" bo'limida qanday jihozlar mavjud?",
    "answer": "Yotoqxona jihozlari",
    "noAnswer1": "Eshiklar va oynalar",
    "noAnswer2": "Chiroqlar va lampalar",
    "noAnswer3": "Oshxona jihozlari"
  },
  {
    "question": "Klip uzunligini kesish uchun ichki ketma-ketlikni ochasiz. Siz kliplarning umumiy davomiyligini uzaytirasiz. \nAsosiy ketma-ketlikda uyaning davomiyligi bilan nima sodir bo'ladi?",
    "answer": "Hech narsa, uyaning davomiyligi asl \nketma-ketlikda bir xil bo'lib qoladi.",
    "noAnswer1": "Uyaning davomiyligi o'zgaradi va \nqayta yozishni tahrirlash qolgan \nkliplarni joy ochishga majbur qiladi.",
    "noAnswer2": "Kliplar uyaning davomiyligiga mos \nkeladigan tezlikni o'zgartiradi.",
    "noAnswer3": "Uyaning davomiyligi o'zgaradi \nva to'lqinli tahrir joy bo'shatish \nuchun qolgan kliplarni itarib \nyuboradi."
  },
  {
    "question": "Ichki ketma-ketlikni ishlatish uchun yaxshi sabab nima?",
    "answer": "Nesting rangni to'g'rilash yoki video \ncheklovchi kabi uy ichidagi hamma \nnarsaga bitta effektni qo'llash imkonini \nberadi.",
    "noAnswer1": "Nesting ijro etish \nsamaradorligini yaxshilaydi.",
    "noAnswer2": "Joylashtirish loyiha panelidagi \ntartibsizliklarni kamaytirishni \nosonlashtiradi, vaqt va loyiha \nbyudjetini tejaydi.",
    "noAnswer3": "Nesting Adobe Premiere \nPro-ni tezroq ko'rsatishga \nyordam beradi."
  },
  {
    "question": "Subklip yaratganingizda qattiq diskingizda nima sodir bo'ladi?",
    "answer": "Hech narsa, chunki pastki klip qattiq \ndiskda yangi media fayl yaratmaydi.",
    "noAnswer1": "Qattiq diskda ko'rsatgich \nfayli yaratiladi.",
    "noAnswer2": "Qattiq diskingizda yangi bosh klip \nyaratiladi va loyihaga qo'shiladi.",
    "noAnswer3": "Asl media yonida yangi media \nfayl yaratiladi."
  },
  {
    "question": "4.Adobe Premiere Pro-dan media eksport qilish bo'yicha qaysi bayonot noto'g'ri?",
    "answer": "Eksport tugmasini bosganingizda Adobe \nPremiere Pro faylni fonda kodlaydi va \ntahrirlashni davom ettirishga imkon beradi.",
    "noAnswer1": "Adobe Premiere fayllarni \nbevosita eksport qilishi mumkin.",
    "noAnswer2": "Adobe Media Encoder yordamida \nketma-ketliklarni bir yoki bir nechta \nformatga kodlashingiz mumkin.",
    "noAnswer3": "Adobe Media Encoder-dan \nfoydalanganda Adobe \nPremiere Pro-da bir xil \nketma-ketlikda ishlashni \ndavom ettirishingiz mumkin."
  },
  {
    "question": "Premiere Pro-da ishlayotganingizda, joriy ketma-ketlikka mos keladigan sozlamalar bilan yangi After Effects kompozitsiyasini \nqanday tezda yaratishingiz mumkin?",
    "answer": "Fayl > Adobe Dynamic Link > Yangi After \nEffects Composition-ni tanlang.",
    "noAnswer1": "Fayl > Adobe Dynamic Link > \nImport After Effects \nComposition-ni tanlang.",
    "noAnswer2": "After Effects-dan loyihani import \nqiling va import qilishda loyiha \nhajmini moslash-ni tanlang.",
    "noAnswer3": "After Effects-ga o'ting va \naniqlik uchun loyihani \nqo'lda sozlang."
  },
  {
    "question": "Qaysi biri Essential Sound panelida mavjud teg EMAS?",
    "answer": "Hikoya",
    "noAnswer1": "SFX",
    "noAnswer2": "Atmosfera",
    "noAnswer3": "Musiqa"
  },
  {
    "question": "7.HSL ikkilamchi rangni to'g'rilash quyidagilardan qaysi birini sozlash imkonini beradi? (Uchta elementni tanlang.) \n\nA. Aniqlik \nB. Kontrast \nC. To'yinganlik \nD. Harorat \nE. Blur",
    "answer": "B, C, D",
    "noAnswer1": "A, B, C",
    "noAnswer2": "B, D, E",
    "noAnswer3": "A, C, E"
  },
  {
    "question": "Rate Stretch vositasi klipni o'zgartirishi mumkin bo'lgan yagona panel qaysi?",
    "answer": "Vaqt jadvali paneli",
    "noAnswer1": "Dastur monitor paneli",
    "noAnswer2": "Manba monitor paneli",
    "noAnswer3": "Media brauzer paneli"
  },
  {
    "question": "Kliplaringiz bir nechta joyda saqlangan media fayllarga bog'langan deylik. Siz media fayllarni joriy formatida bitta joyda \nsaqlashni xohlaysiz. Loyiha menejerida qaysi variantni tanlashingiz kerak?",
    "answer": "Fayllarni to'plang va yangi joyga nusxa \noling.",
    "noAnswer1": "Foydalanilmayotgan kliplarni \nchiqarib tashlang!",
    "noAnswer2": "Birlashtirish va transkod qilish.",
    "noAnswer3": "Yangi kesilgan loyiha yarating."
  },
  {
    "question": "Adobe Premiere Pro-da standart video o'tish nima?",
    "answer": "o'zaro eriydi",
    "noAnswer1": "kino eriydi",
    "noAnswer2": "qo'shimcha eriydi",
    "noAnswer3": "ta'sir eriydi"
  },
  {
    "question": "Taqdimotlarni tuzish va animatsiyalar bilan ishlash uchun mo'ljallangan dasturni ko'rsating",
    "answer": "PowerPoint",
    "noAnswer1": "Photoshop",
    "noAnswer2": "Word",
    "noAnswer3": "Excel"
  },
  {
    "question": "PowerPoint dasturida rasmlarni va grafikalarini qo'shish uchun qanday \nmenyusidan foydalanishingiz mumkin?",
    "answer": "\"Insert\" (Qo'shish)",
    "noAnswer1": "Design\" (Dizayn)",
    "noAnswer2": "\"Format\" (Formatlash)",
    "noAnswer3": "\"Animations\" (Animatsiyalar)"
  },
  {
    "question": "PowerPoint dasturida animatsiyalarni qo'shish uchun panelini oching.",
    "answer": "\"Animations\" (Animatsiyalar)",
    "noAnswer1": "\"Design\" (Dizayn)",
    "noAnswer2": "\"Format\" (Formatlash)",
    "noAnswer3": "\"Insert\" (Qo'shish)"
  },
  {
    "question": "Taqdimotni ........ uchun \"Slide Show\" (Slayd ko'rsatish) tugmasini bosiladi",
    "answer": "Boshqarish",
    "noAnswer1": "O'chirish",
    "noAnswer2": "b javob to'g'ri",
    "noAnswer3": "To'g'ri javob yo'q"
  },
  {
    "question": "PowerPoint dasturi boshqa Microsoft Office dasturlari bilan integratsiya qilish imkoniyatiga ega dartur hisoblanadimi?",
    "answer": "ha imkoniyatga ega",
    "noAnswer1": "yo'q imkoniyatga ega \nemas",
    "noAnswer2": "Foydalanib bo'lmaydi",
    "noAnswer3": "To'g'ri javob yo'q"
  },
  {
    "question": "Power Point qaysi tizimlarida ishlash imkoniyatiga ega?",
    "answer": "Microsoft Windows, macOS",
    "noAnswer1": "Microsoft Windows, Linux",
    "noAnswer2": "Linux, macOS",
    "noAnswer3": "To'g'ri javob yo'q"
  },
  {
    "question": "Qachon PowerPoint 1.0 Apple Macintosh tizimi uchun namoyish etiladi",
    "answer": "1987-yil",
    "noAnswer1": "1990-yil",
    "noAnswer2": "2000-yil",
    "noAnswer3": "2010yil"
  },
  {
    "question": "1987-yil Forethought va PowerPoint qaysi kompaniya tomonidan $ 14 mln.ga sotib olinadi.",
    "answer": "Microsoft",
    "noAnswer1": "Apple",
    "noAnswer2": "Samsung",
    "noAnswer3": "Adobe"
  },
  {
    "question": "PowerPoint yaratish fikri dastlab kimda paydo boʻladi?",
    "answer": "Bob Gaskins (Bob Gaskins)",
    "noAnswer1": "Dennis Ostin (Dennis Austin)",
    "noAnswer2": "Bill Gates",
    "noAnswer3": "James Gosling"
  },
  {
    "question": "PowerPointni qanday imkoniyatlari mavjud?",
    "answer": "Hamma javob to'g'ri",
    "noAnswer1": "ovoz, video kliplar",
    "noAnswer2": "animastiyalardan foydalanib \nsifatli taqdimotlar yaratish",
    "noAnswer3": "grafik axborotlar,\ntaqdimotlar"
  },
  {
    "question": "Dastur fan va texnika yutuqlari Akademiya mukofoti nechanchi yil qo'lga kiritilgan",
    "answer": 2019,
    "noAnswer1": 2018,
    "noAnswer2": 2017,
    "noAnswer3": 2025
  },
  {
    "question": "Devid Xerbstman, Devid Simons, Daniyel Uilk, Devid M. Kotter va Rassell Belfer tomonidan 1993-yil yanvar oyida dastlabki qaysi ikki versiyasi ishlab chiqarilgan?",
    "answer": "1.0 va 1.1",
    "noAnswer1": "0.1 va 1.1",
    "noAnswer2": "1.0 va 0.1",
    "noAnswer3": "100.0 va 0.1100"
  },
  {
    "question": "Dasturning birinchi versiyasi faqat Apple tomonidan ishlab chiqarilgan qaysi kompyuterda ishlab chiqilgan edi?",
    "answer": "Macintosh",
    "noAnswer1": "HP va Apple",
    "noAnswer2": "Acer va Hp",
    "noAnswer3": "Aser va Hd"
  },
  {
    "question": "After Effects kontseptsiyasi paydo bo'lganidan beri Adobe kompaniyasi o'zining media sanoatdagi yetakchi dasturiy ta'minotining nechi xil versiyasi chiqadi?",
    "answer": "50 xil",
    "noAnswer1": "40 xil",
    "noAnswer2": "60 xil",
    "noAnswer3": "58 xil"
  },
  {
    "question": "Spetsial effectlarni qaysi dasturda tuzatish mumkun?",
    "answer": "after effect",
    "noAnswer1": "Premiere Pro",
    "noAnswer2": "Adobe Illustrator",
    "noAnswer3": "Qseobe Illustrator"
  },
  {
    "question": "Adobe Systems tomonidan qaysi dastur yaratilgan dastur?",
    "answer": "Adobe After Effects",
    "noAnswer1": "Adobe Bridge",
    "noAnswer2": "Adobe InCopy",
    "noAnswer3": "Adobe oncCopy"
  },
  {
    "question": "Adobe After Effects bilan animatsiyalarni necha o'lchovli (2D va 3D) muhitlarda yaratish mumkin?",
    "answer": "2 va 3",
    "noAnswer1": "3 va 2",
    "noAnswer2": "1 va 2",
    "noAnswer3": "8 va 2"
  },
  {
    "question": "Qanday kodeklar uchun apparat tezlashuvini yaxshilash orqali Premier Pro CC bilan bog'liq asosiy muammolarni hal qildi?",
    "answer": "HEVC va H.265 p-ramka",
    "noAnswer1": "H.265 p-ramka va HEVC",
    "noAnswer2": "H.265 p-ramka",
    "noAnswer3": "A.265 p-ramka"
  },
  {
    "question": "Qaysi Cinema 4D kabi 3D modellashtirishga mo‘ljallangan dasturlar bilan kompozitsiya qilish imkoniyati ham mavjud?",
    "answer": "3D MAX",
    "noAnswer1": "2D MAX",
    "noAnswer2": "7D MAX",
    "noAnswer3": "8D MAX"
  },
  {
    "question": "After Effectni vazifasi nima?",
    "answer": "animatsiya yaratish",
    "noAnswer1": "matin tuzish",
    "noAnswer2": "Fotografiya tahriri va kataloglash",
    "noAnswer3": "anigat yaratish"
  },
  {
    "question": "Adobe Photoshop 1.0 nechanchi yilda ishlab chiqarilgan?",
    "answer": "1989-yil",
    "noAnswer1": "1998-yil",
    "noAnswer2": "1997-yil",
    "noAnswer3": "1999-yil"
  },
  {
    "question": "Adobe Photoshop  MAC uchun nechanchi yilda ishlab chiqarilgan?",
    "answer": "1990-yil",
    "noAnswer1": "1999-yil",
    "noAnswer2": "1998-yil",
    "noAnswer3": "2000-yil"
  },
  {
    "question": "MAC uchun birinchi ishlab chiqarilgan Adobe Photoshop versiyasi qaysi?",
    "answer": "Adobe Photoshop 1.0",
    "noAnswer1": "Adobe Photoshop 2.0",
    "noAnswer2": "Adobe Photoshop 3.0",
    "noAnswer3": "Adobe Photoshop 4.0"
  },
  {
    "question": "Windows uchun birinchi Adobe Photoshop nechanchi yilda ishlab chiqarilgan?",
    "answer": "1996-yil",
    "noAnswer1": "1999-yil",
    "noAnswer2": "1998-yil",
    "noAnswer3": "2000-yil"
  },
  {
    "question": "Windows uchun birinchi ishlab chiqarilgan Adobe Photoshop versiyasi qaysi?",
    "answer": "Adobe Photoshop 4.0",
    "noAnswer1": "Adobe Photoshop 1.0",
    "noAnswer2": "Adobe Photoshop 2.0",
    "noAnswer3": "Adobe Photoshop 3.0"
  },
  {
    "question": "Adobening vektor grafikalar yaratish va tahrirlash uchun mo‘ljallangan dasturi qaysi?",
    "answer": "Adobe Illustrator",
    "noAnswer1": "Adobe Photoshop",
    "noAnswer2": "Adobe InDesign",
    "noAnswer3": "Adobe XD"
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

window.addEventListener('keydown', (event) => {
  if (event.altKey && event.key === ';') {
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