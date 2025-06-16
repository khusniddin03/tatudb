const data = [
  {
    "question": "1. Choose the right answer. My mother’s sister is my_________________.",
    "noAnswer1": "uncle",
    "noAnswer2": "cousin",
    "answer": "aunt",
    "noAnswer3": "sister-in- law"
  },
  {
    "question": "2. Choose the right answer. My brother’s daughter is my_________________.",
    "noAnswer1": "nephew",
    "noAnswer2": "cousin",
    "noAnswer3": "sister",
    "answer": "niece"
  },
  {
    "question": "3. Choose the right answer. My uncle’s daughter is my______________.",
    "noAnswer1": "nephew",
    "noAnswer2": "sister",
    "answer": "cousin",
    "noAnswer3": "niece"
  },
  {
    "question": "4. Choose the correct answer. My brother’s wife is my______________.",
    "noAnswer1": "brother-in-law",
    "answer": "sister-in-law",
    "noAnswer2": "cousin",
    "noAnswer3": "sister"
  },
  {
    "question": "5. Choose the correct answer. Lisa is _______ grandmother.",
    "noAnswer1": "Mia",
    "noAnswer2": "Mias",
    "answer": "Mia’s",
    "noAnswer3": "–"
  },
  {
    "question": "6. Choose the correct answer. She __________ at a university in California and _________ stars and black holes.",
    "noAnswer1": "work/ studies",
    "answer": "works/ studies",
    "noAnswer2": "works/ study",
    "noAnswer3": "working/ studying"
  },
  {
    "question": "7. Choose the correct answer. The plain ___________at 5 am tomorrow.",
    "noAnswer1": "leave",
    "answer": "will leave",
    "noAnswer2": "leaving",
    "noAnswer3": "leaves"
  },
  {
    "question": "8. Choose the right answer. My cousins Lola and Nargiza _____ ______English.",
    "noAnswer1": "didn’t/ speak",
    "noAnswer2": "will /speak",
    "noAnswer3": "doesn’t/ speak",
    "answer": "don’t speak"
  },
  {
    "question": "9. Choose the right answer. __________ you live near the university?",
    "answer": "Do",
    "noAnswer1": "Have",
    "noAnswer2": "Does",
    "noAnswer3": "Will"
  },
  {
    "question": "10. Find the proper word. Raj and Howard _________Sheldon and Leonard regularly.",
    "noAnswer1": "visits",
    "noAnswer2": "visiting",
    "answer": "visited",
    "noAnswer3": "will visit"
  },
  {
    "question": "11. Find the proper word.  A solar eclipse ____________very often.",
    "noAnswer1": "not happening",
    "answer": "doesn’t happen",
    "noAnswer2": "has happened",
    "noAnswer3": "don’t happen"
  },
  {
    "question": "12. Choose the correct noun. Put the __________and forks on the table.",
    "noAnswer1": "knife",
    "answer": "knives",
    "noAnswer2": "knifes",
    "noAnswer3": "knive"
  },
  {
    "question": "13. Choose the correct noun. Can I see some ________ of your family?",
    "noAnswer1": "photo",
    "noAnswer2": "photoes",
    "answer": "photos",
    "noAnswer3": "potos"
  },
  {
    "question": "14. Choose the correct noun.  There are two_________ on the table.",
    "answer": "scissors",
    "noAnswer1": "scissor",
    "noAnswer2": "scissores",
    "noAnswer3": "scissored"
  },
  {
    "question": "15. Choose the correct word. __________ computers it would be impossible for engineers to perform the enormous number of calculations.",
    "noAnswer1": "with",
    "answer": "without",
    "noAnswer2": "help",
    "noAnswer3": "support"
  },
  {
    "question": "16. Choose the correct word. The concept of smart classes and e-books are only possible because of _______.",
    "answer": "computer",
    "noAnswer1": "books",
    "noAnswer2": "newspaper",
    "noAnswer3": "magazines"
  },
  {
    "question": "17. Choose the right answer. _________ they go to supermarkets on Saturdays?",
    "noAnswer1": "Does",
    "noAnswer2": "Are",
    "answer": "Do",
    "noAnswer3": "Have"
  },
  {
    "question": "18. Choose the right answer. What’s the capital of Peru? – “Sorry, I __________.",
    "answer": "don’t know",
    "noAnswer1": "know",
    "noAnswer2": "doesn’t know",
    "noAnswer3": "won’t know"
  },
  {
    "question": "19. Choose the right word I have got a brother and three______________.",
    "noAnswer1": "sister",
    "answer": "sisters",
    "noAnswer2": "nephew",
    "noAnswer3": "uncle"
  },
  {
    "question": "20. Choose the right answer. David Beckham ________ a hero to many English football fans.",
    "noAnswer1": "are",
    "noAnswer2": "were",
    "noAnswer3": "had",
    "answer": "is"
  },
  {
    "question": "21. Choose the right answer.  I’ve got lots of ____________this evening.",
    "noAnswer1": "homeworks",
    "answer": "homework",
    "noAnswer2": "informations",
    "noAnswer3": "book"
  },
  {
    "question": "22. Choose the most suitable adjective.  A _____________child never forgets to say “please” and “thank you.”",
    "noAnswer1": "rude",
    "noAnswer2": "big",
    "answer": "polite",
    "noAnswer3": "stupid"
  },
  {
    "question": "23. Choose the most suitable adjective. You never pay for anything. Why are you so _________?",
    "answer": "stingy",
    "noAnswer1": "kind",
    "noAnswer2": "polite",
    "noAnswer3": "frank"
  },
  {
    "question": "24. Find the adjective to the definition. A person who waits and doesn’t get angry.",
    "noAnswer1": "creative",
    "answer": "patient",
    "noAnswer2": "polite",
    "noAnswer3": "friendly"
  },
  {
    "question": "25. Find the adjective to the definition. A person who is good at making things.",
    "noAnswer1": "sensible",
    "noAnswer2": "rude",
    "answer": "creative",
    "noAnswer3": "good"
  },
  {
    "question": "26. Choose the synonym to the adjective. CLEVER",
    "noAnswer1": "stubborn",
    "noAnswer2": "unhappy",
    "noAnswer3": "clumsy",
    "answer": "smart"
  },
  {
    "question": "27. Choose the synonym to the adjective. OUTGOING",
    "noAnswer1": "shy",
    "noAnswer2": "funny",
    "answer": "sociable",
    "noAnswer3": "tidy"
  },
  {
    "question": "28. Choose the synonym to the adjective. STINGY",
    "answer": "mean",
    "noAnswer1": "polite",
    "noAnswer2": "sociable",
    "noAnswer3": "arrogant"
  },
  {
    "question": "29. Choose the antonym to the adjective.  Yesterday, I felt really happy. But today, I’m really __________.",
    "noAnswer1": "kind",
    "answer": "unhappy",
    "noAnswer2": "hardworking",
    "noAnswer3": "jealous"
  },
  {
    "question": "30. Choose the antonym to the adjective.  A: Are you a lazy person? B: No, in fact, I’m very ___________.",
    "noAnswer1": "kind",
    "noAnswer2": "strong",
    "answer": "hardworking",
    "noAnswer3": "smart"
  },
  {
    "question": "31. Choose the correct adjective. Her hair is long and _________.",
    "answer": "curly",
    "noAnswer1": "slim",
    "noAnswer2": "happy",
    "noAnswer3": "late"
  },
  {
    "question": "32. Choose the correct answer. She’s good looking with long dark __________ hair.",
    "answer": "wavy",
    "noAnswer1": "slim",
    "noAnswer2": "black",
    "noAnswer3": "short"
  },
  {
    "question": "33. Choose the correct answer. I always have a party _______ my birthday.",
    "noAnswer1": "in",
    "noAnswer2": "after",
    "noAnswer3": "to",
    "answer": "on"
  },
  {
    "question": "34. Choose the correct answer. We have exams ____________ the summer term.",
    "noAnswer1": "on",
    "answer": "during",
    "noAnswer2": "by",
    "noAnswer3": "at"
  },
  {
    "question": "35. Choose the correct answer. Joe always goes to bed ________ midnight.",
    "noAnswer1": "in",
    "noAnswer2": "during",
    "noAnswer3": "on",
    "answer": "at"
  },
  {
    "question": "36. Choose the correct preposition. Don’t speak _________ the meal.",
    "noAnswer1": "in",
    "noAnswer2": "on",
    "answer": "during",
    "noAnswer3": "at"
  },
  {
    "question": "37. Choose the correct preposition.  Don’t forget to close the window _______ you go out.",
    "noAnswer1": "in",
    "answer": "before",
    "noAnswer2": "during",
    "noAnswer3": "at"
  },
  {
    "question": "38. Choose the correct preposition. He's coming back next _____ Tuesday.",
    "noAnswer1": "in",
    "noAnswer2": "to",
    "answer": "-",
    "noAnswer3": "on"
  },
  {
    "question": "39. Choose the correct preposition. I don't usually work ______ the weekend.",
    "noAnswer1": "in",
    "noAnswer2": "to",
    "answer": "at",
    "noAnswer3": "on"
  },
  {
    "question": "40. Choose the correct preposition. Do you think we will go to Jupiter _______ the future?",
    "noAnswer1": "on",
    "noAnswer2": "by",
    "noAnswer3": "at",
    "answer": "in"
  },
  {
    "question": "41. Choose the correct answer. Harry_______ goes dancing.",
    "noAnswer1": "every",
    "noAnswer2": "ever",
    "noAnswer3": "just",
    "answer": "never"
  },
  {
    "question": "42. Choose the correct adverb. Harry_______ goes dancing.",
    "noAnswer1": "every",
    "noAnswer2": "ever",
    "noAnswer3": "just",
    "answer": "never"
  },
  {
    "question": "43. Choose the correct adverb.  I ______ go to photography club. It’s   _______good fun. And I ________go to music club.",
    "noAnswer1": "never/always/ usually",
    "noAnswer2": "ever/ always/ sometimes",
    "noAnswer3": "just /often/sometimes",
    "answer": "often/always/sometimes"
  },
  {
    "question": "44. Choose the correct answer for the definitions.  To connect wires from machines to a power source or other machines.",
    "answer": "hook up",
    "noAnswer1": "click on",
    "noAnswer2": "scroll up",
    "noAnswer3": "log in"
  },
  {
    "question": "45. Choose the correct answer for the definitions. To move slowly to the top of a text.",
    "noAnswer1": "hook up",
    "noAnswer2": "click on",
    "answer": "scroll up",
    "noAnswer3": "log in"
  },
  {
    "question": "46. Choose the correct answer for the definitions. Type or enter characters using a keyboard.",
    "answer": "key in",
    "noAnswer1": "click on",
    "noAnswer2": "scroll up",
    "noAnswer3": "scroll down"
  },
  {
    "question": "47. Choose the correct answer for the definitions. Make an extra copy of a file.",
    "answer": "print out",
    "noAnswer1": "hack into",
    "noAnswer2": "plug in",
    "noAnswer3": "back up"
  },
  {
    "question": "48. Choose the correct answer for the definitions.  Enter a computer or network illegally.",
    "noAnswer1": "print out",
    "answer": "hack into",
    "noAnswer2": "plug in",
    "noAnswer3": "back up"
  },
  {
    "question": "49. Choose the word which fits the gap correctly. The music was very loud, so I ________ the volume.",
    "answer": "turn down",
    "noAnswer1": "plug in",
    "noAnswer2": "turn up",
    "noAnswer3": "shut down"
  },
  {
    "question": "50. Choose the word which fits the gap correctly. I couldn’t _________because I forgot my surname and password.",
    "noAnswer1": "power on",
    "noAnswer2": "plug in",
    "noAnswer3": "hack into",
    "answer": "log in"
  },
  {
    "question": "51. Choose the word which fits the gap correctly. Sally __________ her username and password, then pressed enter.",
    "answer": "typed in",
    "noAnswer1": "logged out",
    "noAnswer2": "hacked into",
    "noAnswer3": "hooked up"
  },
  {
    "question": "52. Choose the word which fits the gap correctly. Yesterday evening, I ________ all my important documents to hard drive.",
    "noAnswer1": "typed in",
    "answer": "backed up",
    "noAnswer2": "hacked into",
    "noAnswer3": "logged in"
  },
  {
    "question": "53. Choose the word which fits the gap correctly. Dan closed all the applications and then _________his computer.",
    "noAnswer1": "power on",
    "noAnswer2": "plug in",
    "answer": "shut down",
    "noAnswer3": "plug out"
  },
  {
    "question": "54. Choose the word which fits the gap correctly. It is recommended to _________your computer before proceeding.",
    "noAnswer1": "log out",
    "noAnswer2": "run out",
    "noAnswer3": "log in",
    "answer": "plug in"
  },
  {
    "question": "55. Choose the word which fits the gap correctly. I could _________a modified laser scanner to a plasma inverter.",
    "noAnswer1": "log out",
    "noAnswer2": "hack into",
    "noAnswer3": "log in",
    "answer": "hook up"
  },
  {
    "question": "56. Choose the word which fits the gap correctly. Click the main scroll bar to _________ and down to display all the information.",
    "answer": "scroll up",
    "noAnswer1": "power off",
    "noAnswer2": "scroll down",
    "noAnswer3": "plug in"
  },
  {
    "question": "57. Choose the word which fits the gap correctly. Teachers can __________ this page as reference material.",
    "noAnswer1": "hook up",
    "answer": "print out",
    "noAnswer2": "scroll down",
    "noAnswer3": "plug in"
  },
  {
    "question": "58. Choose the correct answer for the questions. How often do the Olympic Games happen?",
    "noAnswer1": "every 2 years",
    "noAnswer2": "every 3 years",
    "answer": "every 4 years",
    "noAnswer3": "every 5 years"
  },
  {
    "question": "59. Choose the correct answer for the questions. When do the Winter Olympics happen?",
    "answer": "the same year as the summer games",
    "noAnswer1": "the year after the summer games",
    "noAnswer2": "two years after the summer games",
    "noAnswer3": "three years after the summer games"
  },
  {
    "question": "60. Choose the correct answer for the questions.\r\nWhich of these is NOT an Olympic sport?",
    "noAnswer1": "handball",
    "noAnswer2": "aerobics",
    "answer": "table tennis",
    "noAnswer3": "-"
  },
  {
    "question": "61. Choose the correct answer for the questions.\r\n I _____________ my homework this weekend.",
    "noAnswer1": "am not do",
    "noAnswer2": "will doing",
    "answer": "am not going to do",
    "noAnswer3": "will be"
  },
  {
    "question": "62. Choose the correct answer for the questions.\r\nMy friend___________(buy) some new trainers.",
    "noAnswer1": "will be sell",
    "noAnswer2": "will selling",
    "answer": "is going to buy",
    "noAnswer3": "is not going to"
  },
  {
    "question": "63. Choose the correct answer for the questions.\r\nI ____________ you at nine o’clock at the cinema. Don’t be late.",
    "noAnswer1": "will be meet",
    "answer": "will meet",
    "noAnswer2": "is going to wait",
    "noAnswer3": "am not going wait"
  },
  {
    "question": "64. Choose the correct answer for the questions.\r\nJoe is ill. He __________ at school tomorrow.",
    "noAnswer1": "will be",
    "answer": "will not be",
    "noAnswer2": "is going to",
    "noAnswer3": "will not"
  },
  {
    "question": "65. Choose the word which fits the gap correctly.  You need to put your _______ at the bottom of every page.",
    "answer": "signature",
    "noAnswer1": "help",
    "noAnswer2": "crowded",
    "noAnswer3": "responsible"
  },
  {
    "question": "66. Choose the word which fits the gap correctly. I couldn’t get on the bus because it was very ______.",
    "noAnswer1": "signature",
    "noAnswer2": "helpful",
    "answer": "crowded",
    "noAnswer3": "responsible"
  },
  {
    "question": "67. Choose the word which fits the gap correctly. The lesson is full of mistake, we will have to __________ it.",
    "noAnswer1": "sign",
    "noAnswer2": "write",
    "answer": "rewrite",
    "noAnswer3": "read"
  },
  {
    "question": "68. Choose the word which fits the gap correctly. My son is much more _________ than my daughter. He always does his homework.",
    "answer": "punctual",
    "noAnswer1": "helpful",
    "noAnswer2": "absent-minded",
    "noAnswer3": "lazy"
  },
  {
    "question": "69. Complete the sentences with the nouns. Can you give me some _______ about trains?",
    "answer": "information",
    "noAnswer1": "discussion",
    "noAnswer2": "advertisement",
    "noAnswer3": "argument"
  },
  {
    "question": "70. Complete the sentences with the nouns. I saw a TV __________ for some great football boots. I think I’ll buy some.",
    "noAnswer1": "information",
    "noAnswer2": "discussion",
    "answer": "advertisement",
    "noAnswer3": "argument"
  },
  {
    "question": "71. Complete the sentences with the nouns. __________ and diet are more important if you want to stay healthy.",
    "noAnswer1": "suggestion",
    "noAnswer2": "discussion",
    "noAnswer3": "advertisement",
    "answer": "fitness"
  },
  {
    "question": "72. Our math teacher told us how to do the calculation, but I didn't understand her_________.",
    "noAnswer1": "suggestion",
    "noAnswer2": "discussion",
    "answer": "explanation",
    "noAnswer3": "argument"
  },
  {
    "question": "73. Complete the sentences with the nouns. In class today, we had a ___________ about the dangers of alcohol and drugs.",
    "noAnswer1": "suggestion",
    "noAnswer2": "colculation",
    "noAnswer3": "explanation",
    "answer": "argument"
  },
  {
    "question": "74. Complete the sentences with the nouns. Can I make a _________? Let's go out for dinner tonight.",
    "answer": "suggestion",
    "noAnswer1": "discussion",
    "noAnswer2": "explanation",
    "noAnswer3": "argument"
  },
  {
    "question": "75. In which places can you see different kinds of animals?",
    "answer": "zoo",
    "noAnswer1": "shopping center",
    "noAnswer2": "library",
    "noAnswer3": "train station"
  },
  {
    "question": "76. Choose where the person is? “I’m going to buy some groceries.”",
    "answer": "supermarket",
    "noAnswer1": "church",
    "noAnswer2": "town hall",
    "noAnswer3": "cinema"
  },
  {
    "question": "77. Complete the sentences with proper preposition.\r\n- Where did you see that announcement?\r\n- ____   the top of the front page.",
    "noAnswer1": "at",
    "noAnswer2": "in",
    "answer": "on",
    "noAnswer3": "between"
  },
  {
    "question": "78. Where do usually people report a crime?",
    "answer": "police station",
    "noAnswer1": "church",
    "noAnswer2": "shopping center",
    "noAnswer3": "train station"
  },
  {
    "question": "79. Choose the correct preposition for the sentence. It makes us feel quite _____ home.",
    "answer": "at",
    "noAnswer1": "in",
    "noAnswer2": "on",
    "noAnswer3": "near"
  },
  {
    "question": "80. Choose the correct preposition for the sentence. He had been five hours _____ the water.",
    "answer": "in",
    "noAnswer1": "behind",
    "noAnswer2": "at",
    "noAnswer3": "from"
  },
  {
    "question": "81. Choose the correct preposition for the sentence. My office is located \r\n____ Albert Street.",
    "answer": "in",
    "noAnswer1": "at",
    "noAnswer2": "near",
    "noAnswer3": "on"
  },
  {
    "question": "82. Choose the correct preposition for the sentence. We will meet your delegation _____ the airport at 8:00 pm.",
    "answer": "at",
    "noAnswer1": "on",
    "noAnswer2": "near",
    "noAnswer3": "in"
  },
  {
    "question": "83. Choose the correct preposition for the sentence. I'm taking several courses ____ the university this summer.",
    "answer": "at",
    "noAnswer1": "from",
    "noAnswer2": "near",
    "noAnswer3": "on"
  },
  {
    "question": "84. Choose the correct preposition for the sentence. Write your name ____ the top of the page.",
    "answer": "at",
    "noAnswer1": "in",
    "noAnswer2": "in",
    "noAnswer3": "near"
  },
  {
    "question": "85. Choose the correct preposition for the sentence. I installed new software ____ my computer but I do not know how to use it properly.",
    "noAnswer1": "in",
    "noAnswer2": "at",
    "noAnswer3": "near",
    "answer": "on"
  },
  {
    "question": "86. Choose the correct preposition for the sentence. You can find this e-book ____ Internet.",
    "noAnswer1": "by",
    "noAnswer2": "at",
    "noAnswer3": "near",
    "answer": "in"
  },
  {
    "question": "87. Choose the correct preposition for the sentence. I read the paper ___  a taxi ____ the way.",
    "answer": "in/on",
    "noAnswer1": "in/at",
    "noAnswer2": "near /on",
    "noAnswer3": "on/in"
  },
  {
    "question": "88. Choose the correct preposition for the sentence. I can't sleep ____ the bus.",
    "answer": "on",
    "noAnswer1": "in",
    "noAnswer2": "near",
    "noAnswer3": "at"
  },
  {
    "question": "89. Where do people leave their cars?",
    "answer": "car park",
    "noAnswer1": "bus stop",
    "noAnswer2": "train station",
    "noAnswer3": "gas station"
  },
  {
    "question": "90. Choose the best answer.  What's _______________ sport?",
    "answer": "the most dangerous",
    "noAnswer1": "more dangerous",
    "noAnswer2": "the more dangerous",
    "noAnswer3": "dangerous than"
  },
  {
    "question": "91. Choose the best answer.   I have got two computers. One of them is __________ than other.",
    "noAnswer1": "the most expensive",
    "answer": "more expensive",
    "noAnswer2": "expensive",
    "noAnswer3": "little expensive"
  },
  {
    "question": "92. Which sentence correctly uses a comparative adjective?",
    "answer": "This book is more exciting than that one.",
    "noAnswer1": "This book is excitinger than that one.",
    "noAnswer2": "This book is most exciting than that one.",
    "noAnswer3": "This book is exciting than that one."
  },
  {
    "question": "93. Choose the best answer.  The Nile is ___________ river in Africa.",
    "noAnswer1": "longer",
    "answer": "the longest",
    "noAnswer2": "longer than",
    "noAnswer3": "longest"
  },
  {
    "question": "94. Choose the best answer.  I was ill yesterday but I am _________ today.",
    "noAnswer1": "gooder",
    "noAnswer2": "the worst",
    "noAnswer3": "best",
    "answer": "better"
  },
  {
    "question": "95. Choose the best answer.  Lola is _________________ student in the class.",
    "noAnswer1": "the taller",
    "noAnswer2": "tall",
    "answer": "the tallest",
    "noAnswer3": "smallest"
  },
  {
    "question": "96. What is the main purpose of a museum?",
    "answer": "To preserve art and historical artifacts   `",
    "noAnswer1": "To serve as a residential area",
    "noAnswer2": "To provide a place for sports events",
    "noAnswer3": "To host concerts and performances"
  },
  {
    "question": "97. There _____ a cat in the garden.",
    "answer": "is",
    "noAnswer1": "am",
    "noAnswer2": "are",
    "noAnswer3": "be"
  },
  {
    "question": "98. There ________ many students in the classroom.",
    "noAnswer1": "is",
    "noAnswer2": "be",
    "answer": "are",
    "noAnswer3": "am"
  },
  {
    "question": "99. There _____ a book on the table.",
    "answer": "is",
    "noAnswer1": "am",
    "noAnswer2": "are",
    "noAnswer3": "be"
  },
  {
    "question": "100. There _____ three apples in the basket.",
    "noAnswer1": "is",
    "noAnswer2": "be",
    "answer": "are",
    "noAnswer3": "am"
  },
  {
    "question": "101. There _______ a problem with your order.",
    "answer": "is",
    "noAnswer1": "am",
    "noAnswer2": "are",
    "noAnswer3": "be"
  },
  {
    "question": "102. There _______ no milk left in the fridge.",
    "answer": "is",
    "noAnswer1": "am",
    "noAnswer2": "are",
    "noAnswer3": "be"
  },
  {
    "question": "103. There _______ two parks in this neighborhood",
    "noAnswer1": "is",
    "noAnswer2": "am",
    "answer": "are",
    "noAnswer3": "be"
  },
  {
    "question": "104. There _____ a lot of traffic today.",
    "answer": "is",
    "noAnswer1": "am",
    "noAnswer2": "are",
    "noAnswer3": "be"
  },
  {
    "question": "105. There _______ a new restaurant in town.",
    "answer": "is",
    "noAnswer1": "am",
    "noAnswer2": "are",
    "noAnswer3": "be"
  },
  {
    "question": "106. There _______ several ways to solve this problem.",
    "noAnswer1": "is",
    "noAnswer2": "am",
    "answer": "are",
    "noAnswer3": "be"
  },
  {
    "question": "107. Which ingredient is used to make bread?",
    "noAnswer1": "Meat",
    "noAnswer2": "Jam",
    "answer": "Flour",
    "noAnswer3": "Apple"
  },
  {
    "question": "108. What ingredient is commonly used in soup?",
    "noAnswer1": "Flour",
    "noAnswer2": "Grape",
    "answer": "Meat",
    "noAnswer3": "Mango"
  },
  {
    "question": "109. Which fruit is typically red or green and grows on vines?",
    "noAnswer1": "Banana",
    "noAnswer2": "Kiwi",
    "answer": "Grape",
    "noAnswer3": "Mango"
  },
  {
    "question": "110. Which one is fruit?",
    "noAnswer1": "Flour",
    "noAnswer2": "Potato",
    "answer": "Pineapple",
    "noAnswer3": "Onion"
  },
  {
    "question": "111. Which product is used in cheese-making?",
    "noAnswer1": "Potato",
    "answer": "Milk",
    "noAnswer2": "Crisps",
    "noAnswer3": "Prawns"
  },
  {
    "question": "112. Which one is seafood?",
    "answer": "Prawn",
    "noAnswer1": "Beef",
    "noAnswer2": "Chicken",
    "noAnswer3": "Rice"
  },
  {
    "question": "113. What is healthy food?",
    "noAnswer1": "Crisps",
    "noAnswer2": "Hamburger",
    "answer": "Fruit and vegetables",
    "noAnswer3": "Hot-dog"
  },
  {
    "question": "114. Which one is fish?",
    "noAnswer1": "Almond",
    "answer": "Salmon",
    "noAnswer2": "Spinach",
    "noAnswer3": "Crisps"
  },
  {
    "question": "115. What is the primary ingredient in Pilaf?",
    "noAnswer1": "Tomato",
    "noAnswer2": "Potato",
    "noAnswer3": "Avocado",
    "answer": "Rice"
  },
  {
    "question": "116. Which ingredients are used to make fruit salad?",
    "noAnswer1": "Rice, spinach, mushrooms, sausages",
    "answer": "Apple, pineapple, melon, pear",
    "noAnswer2": "Onion, apple, tuna, lettuce",
    "noAnswer3": "Corn, crisps, peas, sugar"
  },
  {
    "question": "117. Which of the following is a countable noun?",
    "noAnswer1": "Rice",
    "answer": "Apple",
    "noAnswer2": "Bread",
    "noAnswer3": "Sugar"
  },
  {
    "question": "118. Which of these is uncountable?",
    "noAnswer1": "Banana",
    "noAnswer2": "Orange",
    "answer": "Chocolate",
    "noAnswer3": "Grape"
  },
  {
    "question": "119. Which item is uncountable?",
    "noAnswer1": "Carrot",
    "noAnswer2": "Tomato",
    "answer": "Milk",
    "noAnswer3": "Potato"
  },
  {
    "question": "120. Which of the following is countable?",
    "noAnswer1": "Butter",
    "noAnswer2": "Lettuce",
    "noAnswer3": "Meat",
    "answer": "Melon"
  },
  {
    "question": "121. Which of these is uncountable?",
    "noAnswer1": "Pear",
    "noAnswer2": "Pineapple",
    "noAnswer3": "Water"
  },
  {
    "question": "122. Which is countable?",
    "noAnswer1": "Honey",
    "answer": "Onion",
    "noAnswer2": "Cereal",
    "noAnswer3": "Flour"
  },
  {
    "question": "123. There are several _______ in the garden.",
    "noAnswer1": "rice",
    "noAnswer2": "juice",
    "answer": "apples",
    "noAnswer3": "flour"
  },
  {
    "question": "124. Which is uncountable?",
    "noAnswer1": "Cookie",
    "noAnswer2": "Grape",
    "answer": "Bread",
    "noAnswer3": "Tomato"
  },
  {
    "question": "125. How many _________ are there in the basket?",
    "noAnswer1": "rice",
    "noAnswer2": "milk",
    "noAnswer3": "sugar",
    "answer": "apples"
  },
  {
    "question": "126. How much _______ would you like?",
    "noAnswer1": "oranges",
    "noAnswer2": "grape",
    "answer": "sugar",
    "noAnswer3": "apples"
  },
  {
    "question": "127. Choose the best answer. An integrated input device that functions as a mouse is a feature of laptops. On a laptop, the cursor can be moved by dragging your fingers across it.  What device is it?",
    "answer": "Touchpad",
    "noAnswer1": "Keyboard",
    "noAnswer2": "Webcam",
    "noAnswer3": "Monitor"
  },
  {
    "question": "128. Choose the best answer. This device doubles as a pointing device, much like a mouse, which is frequently used for computer gaming. They consist of a stick with a spherical base that fits into a socket to allow the stick to move freely. Stick movements are used to control the pointer, or cursor, on the screen.",
    "noAnswer1": "Touchpad",
    "noAnswer2": "Keyboard",
    "answer": "Joystick",
    "noAnswer3": "Mouse"
  },
  {
    "question": "129. Choose the best answer. This input device has a different set of keys for letters, numbers, functions, and characters. What device is it?",
    "noAnswer1": "Touchpad",
    "answer": "Keyboard",
    "noAnswer2": "Joystick",
    "noAnswer3": "Mouse"
  },
  {
    "question": "130. Choose the best answer. One more device is a commonly used input device that helps the user to interact with the computer system through a process called “point and click”.  This hand-held input device is used to move the cursor or pointer across the screen. It works on a flat surface and has a left and right button with a wheel in between to perform the tasks. What device is it?",
    "noAnswer1": "Touchpad",
    "noAnswer2": "Keyboard",
    "noAnswer3": "Joystick",
    "answer": "Mouse"
  },
  {
    "question": "131. Choose the best answer. It's an input device for computers that resembles a pen. It features a tiny tube with an optical system and a photocell, and it is incredibly sensitive. Users can point to or select objects on the computer screen with the help of the unique detector built into the tip of the device. What device is it?",
    "answer": "Light pen",
    "noAnswer1": "Webcam",
    "noAnswer2": "Scanner",
    "noAnswer3": "Digital camera"
  },
  {
    "question": "132. Choose the best answer. This device is a type of an input device that helps the user to input voice in a computer system. They read sounds from the surroundings and then convert the analog sound waves into electrical signals. It receives the sound vibrations and converts them into audio signals or sends to a recording medium. What device is it?",
    "noAnswer1": "Light pen",
    "answer": "Speakers/microphon",
    "noAnswer2": "Scanner",
    "noAnswer3": "Digital camera"
  },
  {
    "question": "133. Choose the best answer. It's a crucial tool for converting paper documents into digital files (jpeg, png, pdf, etc.) from hard copies. Optical technology, which powers this gadget, essentially reads text or images off paper and sends them to a computer drive for additional processing. What device is it?",
    "noAnswer1": "Light pen",
    "noAnswer2": "Speakers",
    "answer": "Scanner",
    "noAnswer3": "Digital camera"
  },
  {
    "question": "134. Choose the best answer. With this device, users may interact with a computer or other electronic device directly by touching the screen, making it a versatile input method) The software on the device processes the touch input to carry out operations like scrolling, zooming, and item selection. What device is it?",
    "noAnswer1": "Light pen",
    "noAnswer2": "Speakers",
    "noAnswer3": "Webcam",
    "answer": "Touchscreen"
  },
  {
    "question": "135. Choose the best answer. These are input devices that digitally record photos and occasionally videos. They take pictures using an image sensor chip rather than film. Connecting the device to the computer is the first step in using it as an input device. This can be done via a wireless connection, a memory card reader, or a USB cable. What device is it?",
    "noAnswer1": "Light pen",
    "noAnswer2": "Speakers",
    "answer": "Digital camera",
    "noAnswer3": "Touchscreen"
  },
  {
    "question": "136. Choose the best answer. This device is a type of video camera intended exclusively for recording or live streaming onto a computer or computer network. Its main uses are for social media, live streaming, video conferencing, and video telephony. Computers have two different kinds of these device: internal (built-in) and external. What device is it?",
    "noAnswer1": "Light pen",
    "noAnswer2": "Speakers",
    "answer": "Webcam",
    "noAnswer3": "Touchscreen"
  },
  {
    "question": "137. What is commonly referred to as the Digital Age?",
    "noAnswer1": "The Stone Age",
    "answer": "The period marked by the widespread use of digital technology",
    "noAnswer2": "The time before the Industrial Revolution",
    "noAnswer3": "The era of print books only"
  },
  {
    "question": "138. Which invention is considered a cornerstone of the Digital Age?",
    "noAnswer1": "The steam engine",
    "answer": "The microprocessor",
    "noAnswer2": "The printing press",
    "noAnswer3": "The compass"
  },
  {
    "question": "139. Which of the following is an example of a digital platform?",
    "noAnswer1": "A public library",
    "noAnswer2": "A printed newspaper",
    "answer": "YouTube",
    "noAnswer3": "A typewriter"
  },
  {
    "question": "140. What is the Digital Age?",
    "noAnswer1": "A time of dinosaurs",
    "noAnswer2": "A time with no technology",
    "answer": "A time of using computers and the internet",
    "noAnswer3": "A time of farming"
  },
  {
    "question": "141. Which is a digital tool?",
    "noAnswer1": "Hammer",
    "noAnswer2": "Bicycle",
    "answer": "Smartphone",
    "noAnswer3": "Backpack"
  },
  {
    "question": "142. What do people use social media for?",
    "noAnswer1": "Cooking food",
    "noAnswer2": "Driving cars",
    "answer": "Talking and sharing pictures online",
    "noAnswer3": "Writing books"
  },
  {
    "question": "143. What is online shopping?",
    "noAnswer1": "Shopping on the street",
    "noAnswer2": "Selling items at a market",
    "answer": "Buying things using the internet",
    "noAnswer3": "Using cash to shop in stores"
  },
  {
    "question": "144. He _______ play the piano for hours without getting tired when he was a child.",
    "answer": "could",
    "noAnswer1": "might",
    "noAnswer2": "had to",
    "noAnswer3": "can"
  },
  {
    "question": "145. When he was a teenager, he _______ drive a car without a license.",
    "answer": "could",
    "noAnswer1": "must",
    "noAnswer2": "have to",
    "noAnswer3": "can"
  },
  {
    "question": "146. She _______ speak French fluently when she lived in Paris.",
    "answer": "could",
    "noAnswer1": "should",
    "noAnswer2": "has to",
    "noAnswer3": "can"
  },
  {
    "question": "147. Which of the following is the correct Past Simple form of the verb \"play\"?",
    "noAnswer1": "plays",
    "noAnswer2": "playing",
    "answer": "played",
    "noAnswer3": "play"
  },
  {
    "question": "148. How do you form the negative of “She visited her grandmother”?",
    "answer": "She didn’t visit her grandmother.",
    "noAnswer1": "She not visited her grandmother.",
    "noAnswer2": "She don’t visit her grandmother.",
    "noAnswer3": "She doesn’t visit her grandmother."
  },
  {
    "question": "149. What is the Past Simple form of the verb “go”?",
    "noAnswer1": "go",
    "answer": "went",
    "noAnswer2": "goes",
    "noAnswer3": "going"
  },
  {
    "question": "150. Which is the correct Past Simple question?",
    "noAnswer1": "Did he helped you?",
    "noAnswer2": "Does he help you?",
    "answer": "Did he help you?",
    "noAnswer3": "Did he helps you?"
  },
  {
    "question": "150. Which is the correct Past Simple question?",
    "noAnswer1": "Did he helped you?",
    "noAnswer2": "Does he help you?",
    "answer": "Did he help you?",
    "noAnswer3": "Did he helps you?"
  },
  {
    "question": "151. Which time expression is commonly used with the Past Simple?",
    "noAnswer1": "tomorrow",
    "answer": "yesterday",
    "noAnswer2": "now",
    "noAnswer3": "next week"
  },
  {
    "question": "152. Complete the sentence: “I ___ a new book last month.”",
    "noAnswer1": "buy",
    "noAnswer2": "buying",
    "answer": "bought",
    "noAnswer3": "buys"
  },
  {
    "question": "153. Which of these sentences uses the past simple tense correctly?",
    "noAnswer1": "She run to the park last Friday.",
    "answer": "She ran to the park last Friday.",
    "noAnswer2": "She running to the park last Friday.",
    "noAnswer3": "She runs to the park last Friday."
  },
  {
    "question": "154. What is the past simple form of the verb “see”?",
    "answer": "Saw",
    "noAnswer1": "Sees",
    "noAnswer2": "Seen",
    "noAnswer3": "Seeing"
  },
  {
    "question": "155. Complete the sentence: “We ___ a movie last night.”",
    "noAnswer1": "watch",
    "noAnswer2": "watching",
    "answer": "watched",
    "noAnswer3": "watches"
  },
  {
    "question": "156. Which sentence is in the past simple tense?",
    "noAnswer1": "He plays soccer every weekend.",
    "answer": "He played soccer last weekend.",
    "noAnswer2": "He playing soccer last weekend.",
    "noAnswer3": "He play soccer last weekend."
  },
  {
    "question": "157. Which sentence uses “because” correctly?",
    "noAnswer1": "I was tired because I go to bed early.",
    "answer": "I went to bed early because I was tired.",
    "noAnswer2": "I went to bed because early I was tired.",
    "noAnswer3": "Because I was tire I went early bed."
  },
  {
    "question": "158. Which sentence uses “so” correctly?",
    "answer": "I was late so I missed the bus.",
    "noAnswer1": "I so was late missed the bus.",
    "noAnswer2": "I was so late I misses the bus.",
    "noAnswer3": "I was late missed the bus so."
  },
  {
    "question": "159. sentence uses “therefore” correctly?",
    "answer": "I forgot my umbrella, therefore, I got wet.",
    "noAnswer1": "I forgot my umbrella therefore I get wet.",
    "noAnswer2": "Therefore I forgot my umbrella, I got wet.",
    "noAnswer3": "I forgot therefore my umbrella I got wet."
  },
  {
    "question": "160. Which sentence uses “but” correctly?",
    "answer": "I like pizza, but I don’t like cheese.",
    "noAnswer1": "I like pizza but, I doesn’t like cheese.",
    "noAnswer2": "I like pizza but I like cheese.",
    "noAnswer3": "I like pizza I don’t like cheese but."
  },
  {
    "question": "161. Which sentence uses “however” correctly?",
    "noAnswer1": "I studied hard: however; I failed the test.",
    "noAnswer2": "I studied hard however, I failed the test.",
    "answer": "However, I studied hard I failed the test.",
    "noAnswer3": "I studied however hard I failed the test."
  },
  {
    "question": "162. Which word fits best? “I wanted to go out, ___ it was raining.”",
    "noAnswer1": "because",
    "answer": "but",
    "noAnswer2": "so",
    "noAnswer3": "therefore"
  },
  {
    "question": "163. Which word fits best? “It was raining, ___ we decided to stay inside.”",
    "noAnswer1": "because",
    "noAnswer2": "but",
    "answer": "so",
    "noAnswer3": "however"
  },
  {
    "question": "164. Which word fits best? “I wanted to go to the party, ___ I had too much work.”",
    "noAnswer1": "because",
    "answer": "but",
    "noAnswer2": "so",
    "noAnswer3": "therefore"
  },
  {
    "question": "165. Which word fits best? “She was feeling ill, ___ she didn’t go to school.”",
    "noAnswer1": "because",
    "noAnswer2": "however",
    "answer": "so",
    "noAnswer3": "but"
  },
  {
    "question": "166. Which word fits best? “The movie was long, ___ I enjoyed it a lot.”",
    "noAnswer1": "however",
    "noAnswer2": "so",
    "noAnswer3": "because",
    "answer": "but"
  },
  {
    "question": "167. Choose the correct past participle form to complete the sentence.\r\nThe letter was ________ yesterday.",
    "noAnswer1": "wrote",
    "noAnswer2": "writing",
    "answer": "written",
    "noAnswer3": "write"
  },
  {
    "question": "168. Choose the correct past participle form to complete the sentence.\r\nThe book is ________ by a famous author.",
    "noAnswer1": "write",
    "answer": "written",
    "noAnswer2": "wrote",
    "noAnswer3": "writing"
  },
  {
    "question": "169. Choose the correct past participle form to complete the sentence.\r\nHave you ever ________ a foreign language?",
    "noAnswer1": "learn",
    "noAnswer2": "learning",
    "answer": "learned",
    "noAnswer3": "learns"
  },
  {
    "question": "170. Choose the correct past participle form to complete the sentence.\r\nThe dinner was ________ by my mother.",
    "noAnswer1": "cook",
    "noAnswer2": "cooking",
    "answer": "cooked",
    "noAnswer3": "cooks"
  },
  {
    "question": "171. Choose the correct past participle form to complete the sentence.\r\nThe car has been ________.",
    "noAnswer1": "steal",
    "noAnswer2": "stealing",
    "noAnswer3": "stole",
    "answer": "stolen"
  },
  {
    "question": "172. Choose the correct past participle form to complete the sentence.\r\nThe movie was very ________.",
    "noAnswer1": "bored",
    "noAnswer2": "bore",
    "answer": "boring",
    "noAnswer3": "boringly"
  },
  {
    "question": "173. Choose the correct past participle form to complete the sentence.\r\nI've never felt so ________ in my life.",
    "answer": "happy",
    "noAnswer1": "happier",
    "noAnswer2": "happily",
    "noAnswer3": "happiest"
  },
  {
    "question": "174. Choose the correct past participle form to complete the sentence.\r\nThe broken window was ________ by a stone.",
    "noAnswer1": "break",
    "answer": "broken",
    "noAnswer2": "broke",
    "noAnswer3": "breaking"
  },
  {
    "question": "175. Choose the correct past participle form to complete the sentence.\r\nThe ________ letter was delivered to the wrong address.",
    "noAnswer1": "address",
    "noAnswer2": "addressing",
    "answer": "addressed",
    "noAnswer3": "addresses"
  },
  {
    "question": "176. Choose the correct past participle form to complete the sentence.\r\nThe ________ child was crying loudly.",
    "noAnswer1": "frighten",
    "noAnswer2": "frightening",
    "answer": "frightened",
    "noAnswer3": "frightens"
  },
  {
    "question": "177. Choose the correct past participle form to complete the sentence.\r\nThe ________ news shocked everyone.",
    "noAnswer1": "shock",
    "answer": "shocking",
    "noAnswer2": "shocked",
    "noAnswer3": "shocks"
  },
  {
    "question": "178. Choose the correct past participle form to complete the sentence.\r\nThe ________ man was arrested by the police.",
    "noAnswer1": "suspect",
    "noAnswer2": "suspecting",
    "answer": "suspected",
    "noAnswer3": "suspects"
  },
  {
    "question": "179. Choose the correct past participle form to complete the sentence.\r\nThe ________ problem was solved quickly.",
    "noAnswer1": "confuse",
    "answer": "confusing",
    "noAnswer2": "confused",
    "noAnswer3": "confuses"
  },
  {
    "question": "180. Choose the correct past participle form to complete the sentence.\r\nThe ________ painting was worth millions of dollars.",
    "noAnswer1": "steal",
    "answer": "stolen",
    "noAnswer2": "stole",
    "noAnswer3": "stealing"
  },
  {
    "question": "181. Choose the correct past participle form to complete the sentence.\r\nThe ________ girl was very shy.",
    "noAnswer1": "embarrass",
    "noAnswer2": "embarrassing",
    "answer": "embarrassed",
    "noAnswer3": "embarrasses"
  },
  {
    "question": "182. Choose the correct past participle form to complete the sentence.\r\nThe ________ book was very interesting.",
    "noAnswer1": "recommend",
    "noAnswer2": "recommending",
    "answer": "recommended",
    "noAnswer3": "recommends"
  },
  {
    "question": "183. Choose the correct past participle form to complete the sentence.\r\nThe ________ food was delicious.",
    "noAnswer1": "cook",
    "noAnswer2": "cooking",
    "answer": "cooked",
    "noAnswer3": "cooks"
  },
  {
    "question": "184. Choose the correct past participle form to complete the sentence.\r\nThe ________ movie was a huge success.",
    "noAnswer1": "expect",
    "noAnswer2": "expecting",
    "answer": "expected",
    "noAnswer3": "expects"
  },
  {
    "question": "185. Choose the correct past participle form to complete the sentence.\r\nThe ________ children were playing in the park.",
    "noAnswer1": "excite",
    "noAnswer2": "exciting",
    "answer": "excited",
    "noAnswer3": "excites"
  },
  {
    "question": "186. Choose the correct past participle form to complete the sentence.\r\nThe ________ letter was written in a hurry.",
    "noAnswer1": "haste",
    "answer": "hasting",
    "noAnswer2": "hasted",
    "noAnswer3": "hasty"
  },
  {
    "question": "187. Choose the correct comparative adjective to complete the sentence.\r\nCats are ________ than dogs.",
    "answer": "quieter",
    "noAnswer1": "more quieter",
    "noAnswer2": "more quiet",
    "noAnswer3": "quietest"
  },
  {
    "question": "188. Choose the correct comparative adjective to complete the sentence.\r\nThis book is ________ than that one.",
    "noAnswer1": "interesting",
    "noAnswer2": "more interestingest",
    "answer": "more interesting",
    "noAnswer3": "interestinger"
  },
  {
    "question": "189. Choose the correct comparative adjective to complete the sentence.\r\nMountains are ________ than hills.",
    "noAnswer1": "high",
    "noAnswer2": "more high",
    "answer": "higher",
    "noAnswer3": "highest"
  },
  {
    "question": "190. Choose the correct comparative adjective to complete the sentence.\r\nGold is ________ than silver.",
    "noAnswer1": "expensive",
    "noAnswer2": "expensiver",
    "answer": "more expensive",
    "noAnswer3": "most expensive"
  },
  {
    "question": "191. Choose the correct comparative adjective to complete the sentence.\r\nWinter is ________ than summer.",
    "noAnswer1": "cold",
    "noAnswer2": "more cold",
    "answer": "colder",
    "noAnswer3": "coldest"
  },
  {
    "question": "192. Choose the correct comparative adjective to complete the sentence.\r\nThis exercise is ________ than the last one.",
    "noAnswer1": "difficult",
    "noAnswer2": "difficulter",
    "answer": "more difficult",
    "noAnswer3": "most difficult"
  },
  {
    "question": "193. Choose the correct comparative adjective to complete the sentence.\r\nMy new job is ________ than my old one.",
    "noAnswer1": "stressful",
    "noAnswer2": "stressfuller",
    "answer": "more stressful",
    "noAnswer3": "most stressful"
  },
  {
    "question": "194. Choose the correct comparative adjective to complete the sentence.\r\nThis city is ________ than that one.",
    "noAnswer1": "big",
    "noAnswer2": "more big",
    "answer": "bigger",
    "noAnswer3": "biggest"
  },
  {
    "question": "195. Choose the correct comparative adjective to complete the sentence.\r\nMy sister is ________ than me.",
    "noAnswer1": "tall",
    "noAnswer2": "more tall",
    "answer": "taller",
    "noAnswer3": "tallest"
  },
  {
    "question": "196. Choose the correct comparative adjective to complete the sentence.\r\nThis movie is ________ than that one.",
    "noAnswer1": "funny",
    "noAnswer2": "more funny",
    "answer": "funnier",
    "noAnswer3": "funniest"
  },
  {
    "question": "197. Choose the correct comparative adjective to complete the sentence.\r\nThis restaurant is ________ than that one.",
    "noAnswer1": "good",
    "noAnswer2": "gooder",
    "answer": "better",
    "noAnswer3": "best"
  },
  {
    "question": "198. Choose the correct comparative adjective to complete the sentence.\r\nThis car is ________ than that one.",
    "noAnswer1": "fast",
    "noAnswer2": "more fast",
    "answer": "faster",
    "noAnswer3": "fastest"
  },
  {
    "question": "199. Choose the correct comparative adjective to complete the sentence.\r\nThis book is ________ than that one.",
    "noAnswer1": "long",
    "noAnswer2": "more long",
    "answer": "longer",
    "noAnswer3": "longest"
  },
  {
    "question": "200. Choose the correct comparative adjective to complete the sentence.\r\nThis coffee is ________ than that one.",
    "noAnswer1": "hot",
    "noAnswer2": "more hot",
    "answer": "hotter",
    "noAnswer3": "hottest"
  },
  {
    "question": "201. Choose the correct comparative adjective to complete the sentence.\r\nThis test is ________ than the last one.",
    "noAnswer1": "easy",
    "noAnswer2": "more easy",
    "answer": "easier",
    "noAnswer3": "easiest"
  },
  {
    "question": "202. Choose the correct comparative adjective to complete the sentence.\r\nThis problem is ________ than that one.",
    "noAnswer1": "complex",
    "noAnswer2": "complexer",
    "answer": "more complex",
    "noAnswer3": "most complex"
  },
  {
    "question": "203. Choose the correct comparative adjective to complete the sentence.\r\nThis cake is ________ than that one.",
    "noAnswer1": "tasty",
    "noAnswer2": "more tasty",
    "answer": "tastier",
    "noAnswer3": "tastiest"
  },
  {
    "question": "204. Choose the correct comparative adjective to complete the sentence.\r\nThis city is ________ than that one.",
    "noAnswer1": "crowded",
    "noAnswer2": "crowdeder",
    "answer": "more crowded",
    "noAnswer3": "most crowded"
  },
  {
    "question": "205. Choose the correct comparative adjective to complete the sentence.\r\nThis job is ________ than that one.",
    "noAnswer1": "boring",
    "noAnswer2": "boringer",
    "answer": "more boring",
    "noAnswer3": "most boring"
  },
  {
    "question": "206. Choose the correct comparative adjective to complete the sentence.\r\nThis exercise is ________ than the last one.",
    "noAnswer1": "short",
    "noAnswer2": "more short",
    "answer": "shorter",
    "noAnswer3": "shortest"
  },
  {
    "question": "207. Fill in the blanks with the correct pronouns of quantity. \r\nHow _____________ time do you spend studying each day?",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "208. Fill in the blanks with the correct pronouns of quantity.\r\nThere aren’t _____________ good movies on TV tonight.",
    "noAnswer1": "much",
    "noAnswer2": "some",
    "answer": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "209. Fill in the blanks with the correct pronouns of quantity.\r\nI don’t have _____________ money to buy a new car.",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "some"
  },
  {
    "question": "210. Fill in the blanks with the correct pronouns of quantity.\r\nWe need to buy _____________ eggs for the cake.",
    "noAnswer1": "much",
    "noAnswer2": "a few",
    "answer": "a lot of",
    "noAnswer3": "a little"
  },
  {
    "question": "211. Fill in the blanks with the correct pronouns of quantity.\r\nHow _____________ sugar do you put in your coffee?",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "212. Fill in the blanks with the correct pronouns of quantity.\r\nThere isn’t _____________ hope left.",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "213. Fill in the blanks with the correct pronouns of quantity.\r\nI ate _____________ burgers for lunch. I’m feeling full.",
    "noAnswer1": "much",
    "noAnswer2": "a few",
    "answer": "a lot of",
    "noAnswer3": "a little"
  },
  {
    "question": "214. Fill in the blanks with the correct pronouns of quantity.\r\nWe don’t have _____________ time to finish this project.",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "215. Fill in the blanks with the correct pronouns of quantity.\r\nHow _____________ people were at the party last night?",
    "noAnswer1": "much",
    "noAnswer2": "a few",
    "answer": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "216. Fill in the blanks with the correct pronouns of quantity.\r\nThere isn’t _____________ milk left in the fridge.",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "217. Choose the correct pronoun of quantity to complete the sentences.\r\nA: How _____________ coffee do you drink a day? B: Not ______________. Just one cup.",
    "noAnswer1": "much/many",
    "answer": "much/much",
    "noAnswer2": "many/much",
    "noAnswer3": "many/many"
  },
  {
    "question": "218. Choose the correct pronoun of quantity to complete the sentences.\r\nThere aren’t _____________ good restaurants in this town.",
    "noAnswer1": "much",
    "noAnswer2": "a few",
    "answer": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "219. Choose the correct pronoun of quantity to complete the sentences.\r\nWe need to buy _____________ food for the picnic.",
    "noAnswer1": "any",
    "noAnswer2": "a few",
    "noAnswer3": "many",
    "answer": "a little"
  },
  {
    "question": "220. Choose the correct pronoun of quantity to complete the sentences.\r\nHow _____________ does it cost to rent a car?",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "221. Choose the correct pronoun of quantity to complete the sentences.\r\nI don’t have _____________ patience to deal with this.",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "222. Choose the correct pronoun of quantity to complete the sentences.\r\nThere are _____________ people waiting in line.",
    "noAnswer1": "much",
    "noAnswer2": "any",
    "answer": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "223. Choose the correct pronoun of quantity to complete the sentences.\r\nHow _____________ time do you spend on your phone?",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "224. Choose the correct pronoun of quantity to complete the sentences.\r\nWe don’t have _____________ information about the accident.",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "a little"
  },
  {
    "question": "225. Choose the correct pronoun of quantity to complete the sentences.\r\nI ate _____________ ice cream last night.",
    "noAnswer1": "much",
    "answer": "a little",
    "noAnswer2": "many",
    "noAnswer3": "lots"
  },
  {
    "question": "226. Choose the correct pronoun of quantity to complete the sentences.\r\nHow _____________ homework do you have tonight?",
    "answer": "much",
    "noAnswer1": "a few",
    "noAnswer2": "many",
    "noAnswer3": "lots"
  },
  {
    "question": "227. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nI only have _____________ time to talk.",
    "answer": "a little",
    "noAnswer1": "many",
    "noAnswer2": "a few",
    "noAnswer3": "few"
  },
  {
    "question": "228. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nThere are _____________ people at the meeting.",
    "noAnswer1": "a little",
    "noAnswer2": "much",
    "answer": "a few",
    "noAnswer3": "little"
  },
  {
    "question": "229. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nShe has _____________ friends in this new city.",
    "noAnswer1": "a little",
    "noAnswer2": "little",
    "answer": "a few",
    "noAnswer3": "much"
  },
  {
    "question": "230. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nI need _____________ more milk for my cereal.",
    "answer": "a little",
    "noAnswer1": "any",
    "noAnswer2": "a few",
    "noAnswer3": "few"
  },
  {
    "question": "231. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nThere is _____________ hope that we will find a solution.",
    "noAnswer1": "a little",
    "answer": "little",
    "noAnswer2": "a few",
    "noAnswer3": "few"
  },
  {
    "question": "232. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nI only eat _____________ meat.",
    "noAnswer1": "many",
    "answer": "little",
    "noAnswer2": "a few",
    "noAnswer3": "few"
  },
  {
    "question": "233. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nWe have _____________ problems with the new software.",
    "noAnswer1": "a little",
    "noAnswer2": "little",
    "answer": "a few",
    "noAnswer3": "much"
  },
  {
    "question": "234. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nI only need _____________ sugar in my tea.",
    "answer": "a little",
    "noAnswer1": "many",
    "noAnswer2": "a few",
    "noAnswer3": "few"
  },
  {
    "question": "235. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nThere are _____________ days left in the year.",
    "noAnswer1": "a little",
    "noAnswer2": "little",
    "answer": "a few",
    "noAnswer3": "much"
  },
  {
    "question": "236. Complete the sentences with “a little,” “a few,” “little,” or “few.”\r\nI have _____________ money left in my wallet. I can’t buy anything.",
    "noAnswer1": "a little",
    "answer": "little",
    "noAnswer2": "a few",
    "noAnswer3": "few"
  },
  {
    "question": "237. Choose the correct option to complete the sentences.\r\nI don’t have _____________ time to relax.",
    "noAnswer1": "many",
    "noAnswer2": "a few",
    "answer": "much",
    "noAnswer3": "a little"
  },
  {
    "question": "238. Choose the correct option to complete the sentences. \r\nThere are _____________ students in the class.",
    "noAnswer1": "little",
    "answer": "a few",
    "noAnswer2": "much",
    "noAnswer3": "a little"
  },
  {
    "question": "239. Choose the correct option to complete the sentences. \r\nWe need to buy _____________ vegetables for the salad.",
    "noAnswer1": "many",
    "answer": "a few",
    "noAnswer2": "much",
    "noAnswer3": "a little"
  },
  {
    "question": "240. Choose the correct option to complete the sentences. \r\nHow _____________ does this book cost?",
    "noAnswer1": "many",
    "noAnswer2": "a few",
    "answer": "much",
    "noAnswer3": "a little"
  },
  {
    "question": "241. Choose the correct option to complete the sentences. \r\nI only drink _____________ coffee in the morning.",
    "noAnswer1": "many",
    "noAnswer2": "a few",
    "noAnswer3": "much",
    "answer": "a little"
  },
  {
    "question": "242. Choose the correct option to complete the sentences. \r\nThere are _____________ people at the beach today.",
    "noAnswer1": "many",
    "answer": "a few",
    "noAnswer2": "much",
    "noAnswer3": "a little"
  },
  {
    "question": "243. Choose the correct option to complete the sentences. \r\nI have _____________ homework to do tonight.",
    "noAnswer1": "many",
    "noAnswer2": "a few",
    "noAnswer3": "much",
    "answer": "a little"
  },
  {
    "question": "244. Choose the correct option to complete the sentences. \r\nHow _____________ sugar do you put in your tea?",
    "noAnswer1": "many",
    "noAnswer2": "a few",
    "answer": "much",
    "noAnswer3": "a little"
  },
  {
    "question": "245. Choose the correct option to complete the sentences. \r\nThere is _____________ milk left in the fridge.",
    "noAnswer1": "many",
    "noAnswer2": "a few",
    "noAnswer3": "much",
    "answer": "a little"
  },
  {
    "question": "246. Choose the correct option to complete the sentences. \r\nI only know _____________ people in this town.",
    "noAnswer1": "many",
    "answer": "a few",
    "noAnswer2": "much",
    "noAnswer3": "a little"
  },
  {
    "question": "247. The cat is ___ the table.",
    "answer": "under",
    "noAnswer1": "in",
    "noAnswer2": "over",
    "noAnswer3": "next"
  },
  {
    "question": "248. The picture is ___ the wall.",
    "noAnswer1": "in",
    "answer": "on",
    "noAnswer2": "under",
    "noAnswer3": "over"
  },
  {
    "question": "249. The dog is ___ the sofa.",
    "answer": "behind",
    "noAnswer1": "front",
    "noAnswer2": "above",
    "noAnswer3": "below"
  },
  {
    "question": "250. The books are ___ the shelf.",
    "noAnswer1": "along",
    "answer": "on",
    "noAnswer2": "between",
    "noAnswer3": "beside"
  },
  {
    "question": "251. She sits ___ her desk.",
    "noAnswer1": "in",
    "answer": "on",
    "noAnswer2": "below",
    "noAnswer3": "above"
  },
  {
    "question": "252. The car is parked ___ the garage.",
    "answer": "in",
    "noAnswer1": "on",
    "noAnswer2": "under",
    "noAnswer3": "above"
  },
  {
    "question": "253. The bank is ___ the supermarket.",
    "answer": "next to",
    "noAnswer1": "over",
    "noAnswer2": "between",
    "noAnswer3": "among"
  },
  {
    "question": "254. The children are ___ the room.",
    "answer": "in",
    "noAnswer1": "under",
    "noAnswer2": "on",
    "noAnswer3": "above"
  },
  {
    "question": "255. The park is ___ the school.",
    "noAnswer1": "between",
    "answer": "in front of",
    "noAnswer2": "among",
    "noAnswer3": "over"
  },
  {
    "question": "256. There is a tree ___ the house.",
    "answer": "in front of",
    "noAnswer1": "above",
    "noAnswer2": "under",
    "noAnswer3": "among"
  },
  {
    "question": "257. She is standing ___ her friends.",
    "noAnswer1": "between",
    "noAnswer2": "along",
    "noAnswer3": "above",
    "answer": "among"
  },
  {
    "question": "258. The flowers are ___ the vase.",
    "answer": "in",
    "noAnswer1": "under",
    "noAnswer2": "on",
    "noAnswer3": "beside"
  },
  {
    "question": "259. Choose the best answer to the given definition.  ______ is to get to the school building. It's the moment when you reach your destination after travelling from home or another location.",
    "answer": "Arrive at school",
    "noAnswer1": "Go to bed",
    "noAnswer2": "Get dressed",
    "noAnswer3": "Leave school"
  },
  {
    "question": "260. Choose the best answer to the given definition. \r\n______ is to put on your clothes. It's the action of covering your body with clothing.",
    "noAnswer1": "Arrive at school",
    "noAnswer2": "Go to bed",
    "answer": "Get dressed",
    "noAnswer3": "Leave school"
  },
  {
    "question": "261. Choose the best answer to the given definition. \r\n______ is to lie down in your bed to sleep. It's the action of preparing for rest and getting ready for the night.",
    "noAnswer1": "Arrive at school",
    "answer": "Go to bed",
    "noAnswer2": "Get dressed",
    "noAnswer3": "Leave school"
  },
  {
    "question": "262. Choose the best answer to the given definition. \r\n______ is to go home or somewhere else after finishing school for the day. It's the act of ending your school day and departing from the school building.",
    "noAnswer1": "Arrive at school",
    "noAnswer2": "Go to bed",
    "noAnswer3": "Get dressed",
    "answer": "Leave school"
  },
  {
    "question": "263. Choose the best answer to the given definition. \r\n______ is to stop sleeping and become conscious. It's the act of transitioning from a state of sleep to being awake.",
    "answer": "Wake up",
    "noAnswer1": "Have lunch",
    "noAnswer2": "Daily routine",
    "noAnswer3": "Leave school"
  },
  {
    "question": "264. Choose the best answer to the given definition. \r\n______ is a structured pattern of activities you do each day, like waking up, eating, working, and going to sleep.",
    "noAnswer1": "Wake up",
    "noAnswer2": "Have lunch",
    "answer": "Daily routine",
    "noAnswer3": "Leave school"
  },
  {
    "question": "265. Choose the best answer to the given definition. \r\n______ is to eat a meal in the middle of the day. It's typically eaten between \r\nbreakfast and dinner, often around midday.",
    "noAnswer1": "Wake up",
    "answer": "Have lunch",
    "noAnswer2": "Daily routine",
    "noAnswer3": "Leave school"
  },
  {
    "question": "266. Choose the best answer to the given definition. ______ means to eat a meal in the morning. It's the first meal of the day, usually eaten after waking up.",
    "noAnswer1": "Have dinner",
    "noAnswer2": "Have lunch",
    "noAnswer3": "Daily routine",
    "answer": "Have breakfast"
  },
  {
    "question": "267. Choose the best answer to the given definition. ______ means to eat a meal in the evening. It's the main meal of the day for many people, often eaten around sunset.",
    "answer": "Have dinner",
    "noAnswer1": "Have lunch",
    "noAnswer2": "Daily routine",
    "noAnswer3": "Have breakfast"
  },
  {
    "question": "268. What is the opposite of “hot”?",
    "noAnswer1": "Warm",
    "answer": "Cold",
    "noAnswer2": "Dry",
    "noAnswer3": "Wet"
  },
  {
    "question": "269. What is the opposite of “big”?",
    "noAnswer1": "Tall",
    "answer": "Small",
    "noAnswer2": "Short",
    "noAnswer3": "Heavy"
  },
  {
    "question": "270. What is the opposite of “happy”?",
    "answer": "Sad",
    "noAnswer1": "Angry",
    "noAnswer2": "Excited",
    "noAnswer3": "Calm"
  },
  {
    "question": "271. What is the opposite of “fast”?",
    "answer": "Slow",
    "noAnswer1": "Short",
    "noAnswer2": "Low",
    "noAnswer3": "Hard"
  },
  {
    "question": "272. What is the opposite of “clean”?",
    "answer": "Dirty",
    "noAnswer1": "Messy",
    "noAnswer2": "Wet",
    "noAnswer3": "Smooth"
  },
  {
    "question": "273. What is the opposite of “tall”?",
    "noAnswer1": "Big",
    "answer": "Short",
    "noAnswer2": "High",
    "noAnswer3": "Wide"
  },
  {
    "question": "274. What is the opposite of “cold”?",
    "noAnswer1": "Wet",
    "noAnswer2": "Warm",
    "answer": "Hot",
    "noAnswer3": "Dry"
  },
  {
    "question": "275. What is the opposite of “heavy”?",
    "answer": "Light",
    "noAnswer1": "Easy",
    "noAnswer2": "Small",
    "noAnswer3": "Slow"
  },
  {
    "question": "276. What is the opposite of “happy”?",
    "noAnswer1": "Angry",
    "answer": "Sad",
    "noAnswer2": "Excited",
    "noAnswer3": "Bored"
  },
  {
    "question": "277. What is the opposite of “old”?",
    "answer": "New",
    "noAnswer1": "little",
    "noAnswer2": "Small",
    "noAnswer3": "Fresh"
  },
  {
    "question": "278. Which helping verb is used to form the Future Simple tense?",
    "noAnswer1": "Can",
    "answer": "Will",
    "noAnswer2": "Is",
    "noAnswer3": "Do"
  },
  {
    "question": "279. Choose the correct sentence in the Future Simple tense.",
    "answer": "She will go to school tomorrow.",
    "noAnswer1": "She go to school tomorrow.",
    "noAnswer2": "She is go to school tomorrow.",
    "noAnswer3": "She going to school tomorrow."
  },
  {
    "question": "280. What is the correct negative form of this sentence: “He will play football”?",
    "answer": "He will not play football.",
    "noAnswer1": "He not will play football.",
    "noAnswer2": "He don’t will play football.",
    "noAnswer3": "He will no play football."
  },
  {
    "question": "281. How do you form a question in the Future Simple tense?",
    "noAnswer1": "Does she go to the park?",
    "noAnswer2": "Is she going to the park?",
    "answer": "Will she go to the park?",
    "noAnswer3": "She will go to the park?"
  },
  {
    "question": "282. Which time expression is commonly used with Future Simple?",
    "noAnswer1": "Yesterday",
    "noAnswer2": "Now",
    "noAnswer3": "Last week",
    "answer": "Tomorrow"
  },
  {
    "question": "283. Choose the correct sentence.",
    "answer": "They will visit their grandma next week.",
    "noAnswer1": "They visits their grandma next week.",
    "noAnswer2": "They will visiting their grandma next week.",
    "noAnswer3": "They visited their grandma next week."
  },
  {
    "question": "284. Which sentence shows a Future Simple action?",
    "answer": "I will call you later.",
    "noAnswer1": "I am calling you now.",
    "noAnswer2": "I called you yesterday.",
    "noAnswer3": "I am going to call you."
  },
  {
    "question": "285. How do you answer this question: “Will they come to the party?”",
    "answer": "Yes, they will.",
    "noAnswer1": "Yes, they come.",
    "noAnswer2": "Yes, they are.",
    "noAnswer3": "Yes, they do."
  },
  {
    "question": "286. What is the correct negative sentence?",
    "noAnswer1": "We will no go to the park.",
    "answer": "We will not go to the park.",
    "noAnswer2": "We not will go to the park.",
    "noAnswer3": "We don’t will go to the park."
  },
  {
    "question": "287. Which sentence shows a prediction?",
    "answer": "It will rain tomorrow.",
    "noAnswer1": "It rains every day.",
    "noAnswer2": "It rained yesterday.",
    "noAnswer3": "It is raining now."
  },
  {
    "question": "288. Choose the best answer. An index ______ a data structure that helps speed database queries for data.",
    "noAnswer1": "are",
    "answer": "is",
    "noAnswer2": "having",
    "noAnswer3": "being"
  },
  {
    "question": "289. Choose the best answer. He_____________ a delicious meal at the restaurant last night.",
    "answer": "ate",
    "noAnswer1": "eats",
    "noAnswer2": "eating",
    "noAnswer3": "to eat"
  },
  {
    "question": "290. Choose the best answer. I____________ five miles this morning last year.",
    "answer": "ran",
    "noAnswer1": "runs",
    "noAnswer2": "running",
    "noAnswer3": "to run"
  },
  {
    "question": "291. Choose the best answer. She____________ a new car yesterday.",
    "answer": "bought",
    "noAnswer1": "buy",
    "noAnswer2": "buying",
    "noAnswer3": "to buy"
  },
  {
    "question": "292. Choose the best answer. She____________ the text yesterday.",
    "answer": "translated",
    "noAnswer1": "translates",
    "noAnswer2": "translating",
    "noAnswer3": "to translate"
  },
  {
    "question": "293. Choose the best answer. He____________ his keys at home.",
    "answer": "forgot",
    "noAnswer1": "forget",
    "noAnswer2": "forgotten",
    "noAnswer3": "to forget"
  },
  {
    "question": "294. Choose the best answer. They____________ us much.",
    "answer": "helped",
    "noAnswer1": "helps",
    "noAnswer2": "helping",
    "noAnswer3": "to help"
  },
  {
    "question": "295. Choose the best answer. The manager ____________ instructions to the employees.",
    "answer": "gave",
    "noAnswer1": "giving",
    "noAnswer2": "given",
    "noAnswer3": "to give"
  },
  {
    "question": "296. Choose the best answer. Some websites want to _______ a service.",
    "noAnswer1": "read",
    "answer": "promote",
    "noAnswer2": "practice",
    "noAnswer3": "learn"
  },
  {
    "question": "297. Choose the best answer. The new security system ________ our customer’s better.",
    "noAnswer1": "protect",
    "answer": "will protect",
    "noAnswer2": "protected",
    "noAnswer3": "shall protect"
  },
  {
    "question": "298. Choose the best answer. Hackers ___________get into network.",
    "answer": "won’t",
    "noAnswer1": "shan’t",
    "noAnswer2": "didn’t",
    "noAnswer3": "aren’t"
  },
  {
    "question": "299. Choose the best answer. __________ the new system have a firewall?",
    "noAnswer1": "Is",
    "noAnswer2": "Would",
    "answer": "Does",
    "noAnswer3": "Will"
  },
  {
    "question": "300. Choose the best answer. __________ the new system have a firewall?",
    "answer": "Will",
    "noAnswer1": "Would",
    "noAnswer2": "Does",
    "noAnswer3": "Is"
  },
  {
    "question": "1. Choose the best answer. What is a hacker?\n\n",
    "answer": "a person who enters a building, grounds, etc, without permission\n"
  },
  {
    "question": "\n2. Choose the best answer. What is ergonomics?\n",
    "answer": " Human engineering\n\n"
  },
  {
    "question": "\n3. Choose the best answer. What is Protocol?\n",
    "answer": "an original draft, minute, or record from which a document, especially a treaty, is prepared.\n"
  },
  {
    "question": "\n4. Choose the best answer. What is intruder?\n",
    "answer": "a person who enters a building, grounds, etc, without permission\n"
  },
  {
    "question": "\n5. Choose the best answer. What is encryption?\n",
    "answer": "The process of encoding a message so that it can be read only by the sender and the intended recipient\n"
  },
  {
    "question": "\n6. Choose the best answer. What is freeware?\n",
    "answer": "computer software distributed without charge\n"
  },
  {
    "question": "\n7. Choose the best answer. Securuty_______ crucial when you send confidential information online.\n",
    "answer": "is\n"
  },
  {
    "question": "\n8. Choose the best answer. Enscrytion ________ data into a secret code so that only someone with a key can read it.\n",
    "answer": "changes\n"
  },
  {
    "question": "\n9. Choose the best answer. Descryption __________enscrypted data back into its original form.\n",
    "answer": "converts\n"
  },
  {
    "question": "\n10. Choose the best answer. Malware ( malicious software) ________ programs designed to infiltrate or damage your computer.\n",
    "answer": "are\n"
  },
  {
    "question": "\n11. Choose the best answer. VIruses, worms, Trojans and spyware ________ malicious software.\n",
    "answer": "are\n"
  },
  {
    "question": "\n12. Choose the best answer. A virus ______ enter a PC via a disc drive\n",
    "answer": "can\n"
  },
  {
    "question": "\n13. Choose the best answer. Spyware ________ information fromyour PC without your consent.\n",
    "answer": "collects\n"
  },
  {
    "question": "\n14. Choose the best answer. A Trojan horce is disguised as a useful ________\n",
    "answer": "program\n"
  },
  {
    "question": "\n15. Choose the best answer. Remember ____________your anti- virus software as often as possible.\n",
    "answer": "to update\n"
  },
  {
    "question": "\n16. Choose the best answer. Originally, all skilled ___________were known as hackers, but during the 1990s.\n",
    "answer": "programmers\n"
  },
  {
    "question": "\n17. Choose the best synonym to the given word. Entrepreneur\n",
    "answer": "businessman\n"
  },
  {
    "question": "\n18. Choose the best synonym to the given word. beginning\n",
    "answer": "start\n"
  },
  {
    "question": "\n19. Choose the best synonym to the given word. potential\n",
    "answer": "ability\n"
  },
  {
    "question": "\n20. Choose the best synonym to the given word. primary \n",
    "answer": "key\n"
  },
  {
    "question": "\n21. Choose the best answer. Crackers or black-hat hackers ________ computer criminals who use technology to perform a variety of crimes\n",
    "answer": "are\n"
  },
  {
    "question": "\n22. Choose the best answer. Piracy, ____________and distribution of copyrighted software, information music and video files is widespread.\n",
    "answer": "the illegal copying\n"
  },
  {
    "question": "\n23. Choose the best answer. Worms are ___________programs that have capacity to move from one computer to another\n",
    "answer": "self-copying\n"
  },
  {
    "question": "\n24. Choose the best answer. Mario remembered __________ his assignment to his tutor because he had spoken to her about its length, but she insisted that she had never received it.\n",
    "answer": "giving\n"
  },
  {
    "question": "\n25. Choose the best answer. If you can't find information at the library, try ___________on the Internet.\n",
    "answer": "to look\n"
  },
  {
    "question": "\n26. Choose the best answer. She studied medicine at university and went on _________a surgeon.\n",
    "answer": "to become\n"
  },
  {
    "question": "\n27. Choose the best answer. Look at Mum's car! It definitely needs________!\n",
    "answer": "cleaning\n"
  },
  {
    "question": "\n28. Choose the best answer. I'll never forget ________of that swing when I was a child.\n",
    "answer": "falling\n"
  },
  {
    "question": "\n29. Choose the best answer. The government needs ________notice of the opinions of the people.\n",
    "answer": "to take\n"
  },
  {
    "question": "\n30. Choose the best answer. Economists predict that house prices will go on ________ for at least another year.\n",
    "answer": "to rise\n"
  },
  {
    "question": "\n31. Choose the best answer. We weren't able to see the concert because Tamsin forgot ______ the tickets.\n",
    "answer": "bringing\n"
  },
  {
    "question": "\n32. Choose the best answer. Antivirus is a _________________ which detects, removes viruses and protect the system from further attacks.\n",
    "answer": "software\n"
  },
  {
    "question": "\n33. Choose the best answer. Cyber security ______________ protection of devices and information on them from theft or damage.\n",
    "answer": "is\n"
  },
  {
    "question": "\n34. Choose the best answer. ______________ is someone whose job is to plan a piece of work or activity and organize the work of all the people involved in it.\n",
    "answer": "Project manager\n"
  },
  {
    "question": "\n35. Choose the best answer. _____________ is a person who examines complicated industrial and business operations in order to find ways of improving them, especially by the introduction of computer programs and equipment\n",
    "answer": "Database administrator\n"
  },
  {
    "question": "\n36. Choose the best answer. _____________ is someone whose job is to write software for a company's computers \n",
    "answer": "Database administrator\n"
  },
  {
    "question": "\n37. Choose the best answer. _____________ is someone whose job is to design, develop and maintain databases. \n",
    "answer": " Project manager\n"
  },
  {
    "question": "\n38. Choose the best answer. Have you done your homework _____________?\n",
    "answer": " Yet\n"
  },
  {
    "question": "\n39. Choose the best answer. Find the Components of Data Communication\n",
    "answer": " Message, sender, receiver\n"
  },
  {
    "question": "\n40. Choose the best answer. _______________ is a piece of information that is to be transmitted from one person to another. It could be a text file, an audio file, a video file, etc.\n",
    "answer": " A message\n"
  },
  {
    "question": "\n41. Choose the best answer. ______________ is simply a device that sends data messages. It can be a computer, mobile, telephone, laptop, video camera, or workstation, etc.\n",
    "answer": " A sender\n"
  },
  {
    "question": "\n42. Choose the best answer. _______________ is a device that receives messages. It can be a computer, telephone mobile, workstation, etc.\n",
    "answer": " A receiver\n"
  },
  {
    "question": "\n43. Choose the best answer. ______________ is set of rules\n",
    "answer": " Protocol\n"
  },
  {
    "question": "\n44. Choose the best answer. Please close the window ___________ you go out.\n",
    "answer": " before\n"
  },
  {
    "question": "\n45. Choose the best answer. Please turn off the lights _________ you go to bed.\n",
    "answer": " when\n"
  },
  {
    "question": "\n46. Choose the best answer. I like to relax ____________ I'm on holiday.\n",
    "answer": " while\n"
  },
  {
    "question": "\n47. Choose the best answer. I'm so worried about Max. _________ you hear any news, please phone me.\n",
    "answer": " As soon as\n"
  },
  {
    "question": "\n48. Choose the best answer. _________ you've read the newspaper, can I have it?\n",
    "answer": " After\n"
  },
  {
    "question": "\n49. Choose the best answer. I'm going to keep asking you to marry me _________ you say yes!\n",
    "answer": " until\n"
  },
  {
    "question": "\n50. Choose the best answer. ____________ you are the first person up in the morning, make me a cup of coffee.\n",
    "answer": " If\n"
  },
  {
    "question": "\n51. Choose the best answer. ____________ you are having your hair cut, I am going to pick up Granddad and take him home.\n",
    "answer": " While\n"
  },
  {
    "question": "\n52. Choose the best answer. Companies want to reach more customers, ________ they go online.\n",
    "answer": " so\n"
  },
  {
    "question": "\n53. Choose the best answer. It is easy to set up an online business __________ it is difficult to design and develop a website that attracts a lot of customers.\n",
    "answer": " but\n"
  },
  {
    "question": "\n54. Choose the best answer. Hardware _____ software provide basic infrastructure for E-commerce.\n",
    "answer": " and\n"
  },
  {
    "question": "\n55. Choose the best answer. Customers expect a fast and reliable service _______ they will go somewhere else to buy things.\n",
    "answer": " or\n"
  },
  {
    "question": "\n56. Choose the best answer. I have a PC __________ a laptop at home.\n",
    "answer": " and\n"
  },
  {
    "question": "\n57. Choose the best answer. I use OLX _________ I don't use Amazon.\n",
    "answer": " but\n"
  },
  {
    "question": "\n58. Choose the best answer. Would you like tea __________ coffee?\n",
    "answer": " or\n"
  },
  {
    "question": "\n59. Choose the best answer. She's got a smart phone, __________ she doesn't use her desktop computer much.\n",
    "answer": " so\n"
  },
  {
    "question": "\n60. Choose the best answer. Wired means _____________________________\n",
    "answer": " connected to a computer or other device by a wire\n"
  },
  {
    "question": "\n61. Choose the best answer. Wireless means _____________________________\n",
    "answer": " using a system of radio signals rather than wires to connect computers, mobile phones, a system of radio signals etc. to each other\n"
  },
  {
    "question": "\n62. Choose the best answer. Meaningless is _____________________________\n",
    "answer": " having no meaning\n"
  },
  {
    "question": "\n63. Choose the best answer. Solution is _________________________________\n",
    "answer": " a way to solve a problem or deal with a difficult situation. \n"
  },
  {
    "question": "\n64. Choose the best answer. ______________ (*) means to increase something, very much in number\n",
    "answer": " Multiply\n"
  },
  {
    "question": "\n65. Choose the best answer. _________________ (-) means to take a number or amount away from another number or amount\n",
    "answer": " Subtract\n"
  },
  {
    "question": "\n66. Choose the best answer. ___________ (/) means to split a specific amount into equal parts.\n",
    "answer": " Divide \n"
  },
  {
    "question": "\n67. Choose the best answer. ______________ (+) means to bring or combine two or more numbers together to make a new total.\n",
    "answer": " Add\n"
  },
  {
    "question": "\n68. Choose the best answer. Equal (=) is _______________.\n",
    "answer": " the same in amount, number, or size\n"
  },
  {
    "question": "\n69. Choose the best answer. A row is _______________.\n",
    "answer": " a line of things, people, animals, etc. arranged next to each other\n"
  },
  {
    "question": "\n70. Choose the best answer. A column is __________________.\n",
    "answer": " one of several vertical blocks of print into which a page of a newspaper or magazine is divided\n"
  },
  {
    "question": "\n71. Choose the best answer. A value is _______________.\n",
    "answer": " a number or symbol that represents an amount\n"
  },
  {
    "question": "\n72. Choose the best answer. We _________ to the cinema yesterday.\n",
    "answer": " went\n"
  },
  {
    "question": "\n73. Choose the best answer. I ________ my homework for the whole evening yesterday. \n",
    "answer": " was doing\n"
  },
  {
    "question": "\n74. Choose the best answer. Emily ________ the piano at 4 pm yesterday.\n",
    "answer": " was playing\n"
  },
  {
    "question": "\n75. Choose the best answer. When John came home, his little brother ____TV.\n",
    "answer": " was watching\n"
  },
  {
    "question": "\n76. Choose the best answer. They _____________ a new house last month.\n",
    "answer": " bought\n"
  },
  {
    "question": "\n77. Choose the best answer. We _____________ our relatives in the USA two years ago.\n",
    "answer": " visited\n"
  },
  {
    "question": "\n78. Choose the best answer. I ______________ for the test from 10 am till 5 pm yesterday.\n",
    "answer": " was preparing\n"
  },
  {
    "question": "\n79. Choose the best answer. Olivia ___________ Mike last week.\n",
    "answer": " saw\n"
  },
  {
    "question": " \n80. Choose the best answer. What_____ he _________the whole evening yesterday?\n",
    "answer": " was/ fixing\n"
  },
  {
    "question": "\n81. Choose the best answer. At half past six yesterday, we _________ dinner.\n",
    "answer": " were having\n"
  },
  {
    "question": "\n82. Choose the best answer. _____________ is the activity of talking to people in different places using phone or computer systems.\n",
    "answer": " Conferencing\n"
  },
  {
    "question": "\n83. Choose the best answer. ______________ means to talk about a subject with someone and tell each other your ideas or opinions.\n",
    "answer": " Discuss\n"
  },
  {
    "question": "\n84. Choose the best answer. ______________ means meeting and talking to another person directly without using phone or computer systems. \n",
    "answer": " Face-to-face\n"
  },
  {
    "question": "\n85. Choose the best answer. ________________ is a person who takes part in or becomes involved in a particular activity.\n",
    "answer": " Participant\n"
  },
  {
    "question": "\n86. Choose the best answer. _____________ means to like, choose, or want one thing rather than another\n",
    "answer": " Prefer\n"
  },
  {
    "question": "\n87. Choose the best answer. ________________ means to formally establish a new company, organization, system, way of working, etc.\n",
    "answer": " Set up \n"
  },
  {
    "question": "\n88. Choose the best answer. ___________ is someone who is unable to hear, either completely or partly\n",
    "answer": " Deaf\n"
  },
  {
    "question": "\n89. Choose the best answer. ______________ computer systems are available to users in another part of a building or in another place, for example through a network\n",
    "answer": " Remote\n"
  },
  {
    "question": "\n90. Choose the best answer. (Data) Compression is _______________________\n",
    "answer": " a way to fit audio or video into a smaller space and use less bandwidth\n"
  },
  {
    "question": "\n91. Choose the best answer. Dedicated system is _________________________\n",
    "answer": " a system that is used for only one purpose, e.g. for video conferencing only, nothing else\n"
  },
  {
    "question": "\n92. Choose the best answer. MCI-J is __________________________________\n",
    "answer": " a device that allows video conferencing systems to use more than two locations\n"
  },
  {
    "question": "\n93. Choose the best answer. Remote control is ___________________________\n",
    "answer": " a device that can control the video conferencing system from a distance, without wires. It can be passed from person to person easily.\n"
  },
  {
    "question": "\n94. Choose the best answer. If I ___________, I would be healthy. \n",
    "answer": " didn't smoke \n"
  },
  {
    "question": "\n95. Choose the best answer. If he had enough experience for the job, the boss ____________him.\n",
    "answer": " could hire \n"
  },
  {
    "question": "\n96. Choose the best answer. If I had your phone number, I ___________ you. \n",
    "answer": " would call\n"
  },
  {
    "question": "\n97. Choose the best answer. If you ______ to the party, we would have a lot of fun.\n",
    "answer": " came \n"
  },
  {
    "question": "\n98. Choose the best answer. If I _____ a rich man, I would buy a home like palace.\n",
    "answer": " were\n"
  },
  {
    "question": "\n99. Choose the best answer. If I _____________ English very well, I would look for a job in foreign companies. \n",
    "answer": " could speak\n"
  },
  {
    "question": "\n100. Choose the best answer. If he had time, he ____________ well for his exam.\n",
    "answer": " would study"
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