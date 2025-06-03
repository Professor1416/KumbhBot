document.addEventListener("DOMContentLoaded", function () 
{
  const translations = 
  {
    en: 
    {
      title: "KumbhBot – Your 24×7 AI Guide to Nashik Kumbh Mela 2027",
      tagline: "Your 24×7 AI Guide to Nashik Kumbh Mela 2027",
      countdownHeading: "🕒 Countdown to First Shahi Snan – 2 August 2027",
      countdownEnd: "🙏 The First Shahi Snan has begun!",
      aboutTitle: "🔉 About Kumbh Mela",
      aboutParagraphs: [
        "Kumbh Mela is the world’s largest spiritual gathering, held every 12 years in rotation at four sacred river-bank locations in India: Prayagraj (Triveni Sangam), Haridwar (Ganga), Ujjain (Shipra), and Nashik (Godavari).",
        "This ancient festival is rooted in the Hindu legend of the churning of the ocean (Samudra Manthan), where drops of Amrit (nectar of immortality) fell at these four places. Kumbh Mela commemorates that divine event and is marked by ritual bathing, religious discourse, and spiritual awakening.",
        "Millions of pilgrims, including saints, sadhus, and devotees, participate in the Shahi Snan (Royal Bath), believing that a dip in the holy river during Kumbh Mela cleanses sins and grants moksha (liberation).",
        "The event symbolizes unity in faith and spiritual diversity, celebrated with grand processions, camps, devotional chants, and timeless traditions passed down over millennia.",
        "In 2027, Nashik will host the next Kumbh Mela, attracting millions from across the globe for a unique experience of faith and culture.",
        "The festival also promotes social harmony and environmental awareness, with ongoing efforts to keep the sacred rivers clean during the celebrations."
      ],
      calendarTitle:"📅 Kumbh Mela 2027 – Official Dates & Add to Calendar",
      calendarEvents: 
      [
        {
          date: "31 Oct 2026 (Saturday)",
          event:"Opening Ceremony – Flag Hoisting",
          details:"Flag Hoisting at Ramkund: The festival begins with a sacred flag hoisting at Ramkund ghat,<br> marking the start of Kumbh Mela with prayers and cultural rituals."
        },
        {
          date: "24 July 2027 (Saturday)",
          event:"Flag Hoisting at Sadhugram by Akhadas",
          details:"The Akhadas ceremonially hoist their flags at Sadhugram, symbolizing the start of their participation in Kumbh Mela with traditional rituals and blessings."
        },
        {
          date: "2 Aug 2027 (Monday)",
          event:"First Shahi Snan",
          details: "🌑 Somvati Amavasya – Holy royal bath at Ramkund and Trimbakeshwar, believed to cleanse sins<br> and grant spiritual merit."
        },
        {
          date: "31 Aug 2027 (Tuesday)",
          event:"Second Shahi Snan",
          details:"🌑 Amavasya – One of the most important spiritual bathing days, attracting thousands of pilgrims<br> for ritual cleansing in the holy rivers."
        },
        {
          date: "11 Sept 2027 (Saturday)",
          event:"Third Shahi Snan",
          details:"🌕 Ekadashi – The final royal bath of Kumbh Mela, marking the culmination of the sacred bathing rituals."
        },
        {
          date: "12 Sept 2027 (Sunday)",
          event:"Alternate Snan",
          details:"Scheduled bathing days for general devotees to participate in the holy ritual outside the Shahi Snan dates.",
        },
        {
          date: "24 July 2028 (Monday)",
          event:"Closing Ceremony – Flag Lowering",
          details:"The sacred flag is ceremonially lowered, marking the official end of Kumbh Mela and bidding farewell to the pilgrims."
        }
      ],
      ritualsTitle: "🕉️ Rituals",
      ritualsList: 
      [
        "<strong>Shahi Snan:</strong> The royal holy bath taken by Akhadas and saints in the sacred river, believed to cleanse sins and bring spiritual merit.",
        "<strong>Peshwai:</strong> Grand welcoming processions of Akhadas with music, flag bearers, and devotional chants.",
        "<strong>Darshan of Naga Sadhus:</strong> Opportunity to witness the revered naked ascetics, known for their austerity and spiritual power.",
        "<strong>Spiritual Talks:</strong> Discourses by saints and scholars on scriptures, philosophy, and the path to liberation."
      ],
      attractionsTitle: "🗽️ Nearby Attractions",
      attractionsList: 
      [
        "Trimbakeshwar Temple – One of the twelve Jyotirlingas, a sacred pilgrimage site.",
        "Panchavati – Historic holy site associated with Lord Ram's exile.",
       "Muktidham – A marble temple complex symbolizing liberation.",
        "Anjneri – Birthplace of Lord Hanuman, ideal for trekking and spiritual visits.",
       "Ramkund – The main bathing ghat for Kumbh Mela pilgrims.",
       "Kalaram Temple – Famous ancient temple dedicated to Lord Rama.",
       "Godavari Riverfront – Scenic and spiritual riverbank area hosting many festival activities.",
        "Government AR/VR Experience Centers – Planned interactive setups to offer virtual tours and immersive experiences of Kumbh Mela’s rituals and history."
      ],
      faqsTitle: "❓ FAQs",
      faqs: 
      [
        {
          question:"📅 What are the most important dates of Kumbh Mela 2027?",
          answer:"The key dates include the three Shahi Snan days: 2 Aug, 31 Aug, and 11 Sept 2027. Flag hoisting and closing ceremonies are also significant."
        },
        {
          question:"🧭 How can I travel to Nashik for Kumbh Mela?",
          answer:"Reach Nashik by train, bus, or flight. Nearest airports: Mumbai and Pune. Nashik is well connected by road and rail."
        },
        {
          question:"🏕️ What are the accommodation options available?",
          answer:"Choose from hotels, dharamshalas, tent cities, or private camps. Book early due to high demand."
        },
        {
          question:"📜 How do I know the timings of key rituals and processions?",
          answer:"Check KumbhBot website or app for updated event schedules like Shahi Snan and Peshwai."
        },
        {
          question:"📝 How do I register or book services like camps and tours?",
          answer:"Register through the Kumbh Mela 2027 website, Maharashtra Tourism portal, or authorized partners."
        }
      ]

    },
    hi: 
    {
      title: "KumbhBot – आपका 24×7 कुंभ मेला 2027 गाइड",
      tagline: "आपका 24×7 कुंभ मेला 2027 गाइड",
      countdownHeading: "🕒 पहला शाही स्नान – 2 अगस्त 2027 तक की उलटी गिनती",
      countdownEnd: "🙏 पहला शाही स्नान शुरू हो चुका है!",
      aboutTitle: "🔉 कुंभ मेला के बारे में",
      aboutParagraphs: [
        "कुंभ मेला दुनिया का सबसे बड़ा आध्यात्मिक आयोजन है, जो हर 12 साल में भारत के चार पवित्र नदी तटों पर होता है: प्रयागराज, हरिद्वार, उज्जैन और नासिक।",
        "यह प्राचीन पर्व समुद्र मंथन की हिंदू कथा से जुड़ा है, जिसमें अमृत की कुछ बूंदें इन चार स्थानों पर गिरी थीं। इसी घटना की स्मृति में कुंभ मेला मनाया जाता है।",
        "लाखों श्रद्धालु, संत और साधु शाही स्नान में भाग लेते हैं, यह मानते हुए कि इस स्नान से पापों का नाश होता है और मोक्ष की प्राप्ति होती है।",
        "यह आयोजन श्रद्धा में एकता और आध्यात्मिक विविधता का प्रतीक है, जिसमें भव्य शोभायात्राएं, शिविर, भजन और सदियों पुरानी परंपराएं शामिल होती हैं।",
        "2027 में कुंभ मेला नासिक में आयोजित होगा, जो विश्वभर से लाखों श्रद्धालुओं को आकर्षित करेगा।",
        "यह मेला सामाजिक समरसता और पर्यावरण संरक्षण को भी बढ़ावा देता है।"
      ],
      calendarTitle: "📅 कुंभ मेला 2027 – आधिकारिक तिथियाँ और कैलेंडर में जोड़ें",

      calendarEvents: 
      [
        {
          date: "31 Oct 2026 (Saturday)",
          event:"उद्घाटन समारोह – ध्वजारोहण",
          details: "रामकुंड पर ध्वजारोहण: यह समारोह कुंभ मेले की शुरुआत का प्रतीक है जिसमें प्रार्थना और सांस्कृतिक अनुष्ठान होते हैं।",
        },
        {
          date: "24 July 2027 (Saturday)",
          event:"साधुग्राम में अखाड़ों द्वारा ध्वजारोहण",
          details:"अखाड़े साधुग्राम में अपने झंडे फहराते हैं, जो कुंभ मेले में उनकी भागीदारी की शुरुआत का प्रतीक है।"
        },
        {
          date: "2 Aug 2027 (Monday)",
          event: "पहला शाही स्नान",
          details: "🌑 सोमवती अमावस्या – रामकुंड और त्र्यंबकेश्वर में पवित्र शाही स्नान।"
        },
        {
          date: "31 Aug 2027 (Tuesday)",
          event:"दूसरा शाही स्नान",
          details:"🌑 अमावस्या – प्रमुख स्नान दिवस, जिसमें हज़ारों श्रद्धालु पवित्र नदियों में स्नान करते हैं।"
        },
        {
          date: "11 Sept 2027 (Saturday)",
          event:"तीसरा शाही स्नान",
          details:"🌕 एकादशी – कुंभ मेले का अंतिम शाही स्नान।"
        },
        {
          date: "12 Sept 2027 (Sunday)",
          event:"वैकल्पिक स्नान",
          details:"सामान्य श्रद्धालुओं के लिए नियोजित स्नान दिवस, जो शाही स्नान की तिथियों के अलावा होते हैं।"
        },
        {
          date: "24 July 2028 (Monday)",
          event:"समापन समारोह – ध्वज अवतरण",
          details:"पवित्र ध्वज को विधिपूर्वक उतारा जाता है, जो कुंभ मेले की समाप्ति का प्रतीक है।"
        }
      ],
      ritualsTitle: "🕉️ अनुष्ठान",
      ritualsList: 
      [
        "<strong>शाही स्नान:</strong> अखाड़ों और संतों द्वारा लिया गया पवित्र स्नान, जिससे पापों का शुद्धिकरण और आध्यात्मिक लाभ माना जाता है।",
        "<strong>पेशवाई:</strong> अखाड़ों की भव्य स्वागत शोभायात्राएं, संगीत, ध्वज और भजन के साथ।",
        "<strong>नागा साधुओं का दर्शन:</strong> प्रतिष्ठित नग्न साधुओं के दर्शन का अवसर, जो तपस्या और शक्ति के लिए जाने जाते हैं।",
        "<strong>धार्मिक प्रवचन:</strong> संतों और विद्वानों द्वारा शास्त्रों और मोक्ष की बातों पर संवाद।"
      ],
      attractionsTitle: "🗽️ पास के दर्शनीय स्थल",
      attractionsList: 
      [
        "त्र्यंबकेश्वर मंदिर – बारह ज्योतिर्लिंगों में से एक, एक पवित्र तीर्थस्थल।",
        "पंचवटी – भगवान राम के वनवास से जुड़ा ऐतिहासिक धार्मिक स्थल।",
        "मुक्तिधाम – मुक्ति का प्रतीक संगमरमर का मंदिर परिसर।",
        "अंजनेरी – भगवान हनुमान का जन्मस्थान, ट्रेकिंग और आध्यात्मिक भ्रमण के लिए प्रसिद्ध।",
        "रामकुंड – कुंभ मेले के दौरान प्रमुख स्नान घाट।",
        "कालाराम मंदिर – भगवान राम को समर्पित प्रसिद्ध प्राचीन मंदिर।",
        "गोदावरी रिवरफ्रंट – त्योहारों की गतिविधियों के लिए एक सुंदर और आध्यात्मिक तट।",
        "सरकारी AR/VR अनुभव केंद्र – कुंभ मेले की विधियों और इतिहास का आभासी अनुभव देने के लिए योजनाबद्ध केंद्र।"
      ],
      faqsTitle: "❓ सामान्य प्रश्न (FAQs)",
      faqs: 
      [
        {
          question: "📅 कुंभ मेला 2027 की सबसे महत्वपूर्ण तिथियाँ कौन-कौन सी हैं?",
          answer: "मुख्य तिथियों में तीन शाही स्नान के दिन शामिल हैं: 2 अगस्त, 31 अगस्त, और 11 सितंबर 2027। झंडी फहराने और समापन समारोह भी महत्वपूर्ण हैं।"
        },
        {
          question: "🧭 मैं कुंभ मेले के लिए नाशिक कैसे पहुंच सकता हूँ?",
          answer: "नाशिक ट्रेन, बस या विमान द्वारा पहुंचा जा सकता है। निकटतम हवाई अड्डे: मुंबई और पुणे। नाशिक सड़क और रेल मार्ग से अच्छी तरह जुड़ा हुआ है।"
        },
        {
          question: "🏕️ उपलब्ध आवास विकल्प क्या-क्या हैं?",
          answer: "होटल, धर्मशाला, तंबू नगर या निजी कैंप से चुनें। उच्च मांग के कारण जल्दी बुक करें।"
        },
        {
          question: "📜 मुख्य अनुष्ठानों और शोभायात्राओं का समय कैसे जानें?",
          answer: "शाही स्नान और पेशवाई जैसी घटनाओं के अपडेटेड कार्यक्रम के लिए कुंभबॉट वेबसाइट या ऐप देखें।"
        },
        {
          question: "📝 मैं कैंप और टूर जैसी सेवाओं के लिए कैसे पंजीकरण या बुकिंग कर सकता हूँ?",
          answer: "कुंभ मेला 2027 की वेबसाइट, महाराष्ट्र पर्यटन पोर्टल, या अधिकृत साझेदारों के माध्यम से पंजीकरण करें।"
        }
      ]

    },
    mr: 
    {
      title: "KumbhBot – तुमचा 24×7 कुंभमेळा 2027 मार्गदर्शक",
      tagline: "तुमचा 24×7 कुंभमेळा 2027 मार्गदर्शक",
      countdownHeading: "🕒 पहिल्या शाही स्नानसाठी उलट गणना – २ ऑगस्ट २०२७",
      countdownEnd: "🙏 पहिले शाही स्नान सुरू झाले आहे!",
      aboutTitle: "🔉 कुंभमेळ्याबद्दल माहिती",
      aboutParagraphs: [
        "कुंभमेळा ही जगातील सर्वात मोठी आध्यात्मिक सभा आहे, जी दर १२ वर्षांनी भारतातील चार पवित्र नद्यांच्या काठी भरते: प्रयागराज, हरिद्वार, उज्जैन आणि नाशिक।",
        "या प्राचीन महोत्सवाची मुळे समुद्रमंथनाच्या हिंदू कथेत आहे, ज्यात अमृताचे काही थेंब या चार ठिकाणी पडले होते।",
        "शाही स्नानामध्ये लाखो भक्त, संत आणि साधू सहभागी होतात आणि असे मानले जाते की पवित्र नदीमध्ये स्नान केल्याने पाप मुक्ती व मोक्ष प्राप्त होतो।",
        "हा महोत्सव श्रद्धा व आध्यात्मिक विविधतेचे प्रतीक आहे, ज्यात शोभायात्रा, तंबू, भक्तिगीते व पारंपरिक विधी यांचा समावेश होतो।",
        "2027 मध्ये नाशिक येथे कुंभमेळा आयोजित होणार असून जगभरातून लाखो भाविक येथे येतील।",
        "हा महोत्सव सामाजिक ऐक्य व पर्यावरणीय जनजागृतीलाही चालना देतो।"
      ],
      calendarTitle: "📅 कुंभमेळा 2027 – अधिकृत तारखा आणि कॅलेंडरमध्ये जोडा",

      calendarEvents: 
      [
        {
          date: "31 Oct 2026 (Saturday)",
          event:"उद्घाटन सोहळा – ध्वजारोहण",
          details: "रामकुंड येथे ध्वजारोहण: प्रार्थना आणि सांस्कृतिक विधींनी कुंभमेळ्याची सुरुवात होते."
        },
        {
          date: "24 July 2027 (Saturday)",
          event:"साधुग्राममध्ये अखाड्यांकडून ध्वजारोहण",
          details:"अखाडे साधुग्राममध्ये आपले ध्वज फडकवतात, जे त्यांच्या कुंभमेळ्यातील सहभागाची सुरुवात दर्शवते."
        },
        {
          date: "2 Aug 2027 (Monday)",
          event:"पहिलं शाही स्नान",
          details:"🌑 सोमवती अमावस्या – रामकुंड आणि त्र्यंबकेश्वर येथे पवित्र शाही स्नान."
        },  
        {
          date: "31 Aug 2027 (Tuesday)",
          event:"दुसरं शाही स्नान",
          details:"🌑 अमावस्या – अत्यंत महत्त्वाचा स्नान दिवस, हजारो भाविक पवित्र नद्यांमध्ये स्नान करतात."
        },
        {
          date: "11 Sept 2027 (Saturday)",
          event:"तिसरं शाही स्नान",
          details:"🌕 एकादशी – कुंभमेळ्याचं अंतिम शाही स्नान."
        },
        {
          date: "12 Sept 2027 (Sunday)",
          event:"पर्यायी स्नान",
          details:"सामान्य भाविकांसाठी नियोजित स्नान दिवस, जे शाही स्नानाच्या तारखांव्यतिरिक्त असतात."
        },
        {
          date: "24 July 2028 (Monday)",
          event:"समारोप सोहळा – ध्वज उतरवणे",
          details:"पवित्र ध्वज विधीपूर्वक उतरवला जातो, जो कुंभमेळ्याच्या समाप्तीचं प्रतीक आहे."
        }
      ],
      ritualsTitle: "🕉️ विधी",
      ritualsList: 
      [
        "<strong>शाही स्नान:</strong> अखाड्यांकडून आणि साधू-संतांकडून घेतले जाणारे पवित्र स्नान, जे पापांचा नाश करतं आणि आध्यात्मिक पुण्य मिळवतं असे मानले जाते.",
        "<strong>पेशवाई:</strong> अखाड्यांच्या पारंपरिक स्वागत मिरवणुका, ज्यात संगीत, ध्वजवाहक आणि भक्तिगीते असतात.",
        "<strong>नागा साधूंचं दर्शन:</strong> नग्न पण अत्यंत साधना केलेल्या साधूंचं दर्शन घेण्याची संधी.",
        "<strong>आध्यात्मिक प्रवचने:</strong> संत आणि पंडितांकडून धार्मिक ग्रंथांवर आधारित प्रवचनं व मोक्षमार्गाचे विवेचन."
      ],
      attractionsTitle: "🗽️ जवळची आकर्षणस्थळे",
      attractionsList: 
      [
        "त्र्यंबकेश्वर मंदिर – बारा ज्योतिर्लिंगांपैकी एक पवित्र तीर्थस्थान.",
        "पंचवटी – प्रभू रामाच्या वनवासाशी संबंधित ऐतिहासिक धार्मिक स्थळ.",
        "मुक्तिधाम – मुक्तीचे प्रतीक असलेला संगमरवरी मंदिर समूह.",
        "अंजनेरी – प्रभू हनुमानांचे जन्मस्थळ, ट्रेकिंग आणि अध्यात्मासाठी प्रसिद्ध.",
        "रामकुंड – कुंभमेळ्यातील प्रमुख स्नान घाट.",
        "कालाराम मंदिर – प्रभू रामांना समर्पित प्रसिद्ध प्राचीन मंदिर.",
        "गोदावरी रिव्हरफ्रंट – उत्सवांच्या अनेक उपक्रमांसाठी सुंदर आणि धार्मिक किनारा.",
        "शासकीय AR/VR अनुभव केंद्र – कुंभमेळ्याच्या विधी व इतिहासाचा आभासी अनुभव देणारे केंद्र."
      ],
      faqsTitle: "❓ वारंवार विचारले जाणारे प्रश्न (FAQs)",
      faqs: 
      [
        {
          question: "📅 कुंभमेळा 2027 च्या महत्त्वाच्या तारखा कोणत्या आहेत?",
          answer: "मुख्य तारखांमध्ये तीन शाही स्नानाचे दिवस आहेत: 2 ऑगस्ट, 31 ऑगस्ट, आणि 11 सप्टेंबर 2027. झेंडी फडकवणे आणि समारोप समारंभ देखील महत्त्वाचे आहेत."
        },
        {
          question: "🧭 मी कुंभमेळ्यासाठी नाशिक कसे पोहोचू शकतो?",
          answer: "नाशिकला ट्रेन, बस किंवा विमानाने पोहोचता येते. जवळचे विमानतळ: मुंबई आणि पुणे. नाशिक रोड आणि रेल्वे मार्गाने चांगल्या प्रकारे जोडलेले आहे."
        },
        {
          question: "🏕️ उपलब्ध निवास पर्याय कोणते आहेत?",
          answer: "हॉटेल, धर्मशाळा, तंबू शहर किंवा खासगी शिबिरे यापैकी निवडा. जास्त मागणीमुळे लवकर बुक करा."
        },
        {
          question: "📜 मुख्य विधी आणि मिरवणुकांच्या वेळा कशा जाणून घ्याव्यात?",
          answer: "शाही स्नान आणि पेशवाई सारख्या कार्यक्रमांसाठी अद्ययावत वेळापत्रक कुंभबॉट वेबसाइट किंवा अॅपवर पहा."
        },
        {
          question: "📝 मी कसे नोंदणी किंवा बुकिंग करू शकतो जसे की शिबिरे आणि पर्यटनासाठी?",
          answer: "कुंभ मेळा 2027 ची वेबसाइट, महाराष्ट्र पर्यटन पोर्टल किंवा अधिकृत भागीदारांद्वारे नोंदणी करा."
        }
      ]

    }

  };


  let currentLang = "en";

window.switchLang = function (lang) {
  if (!translations[lang]) return;
  const t = translations[lang];

  document.title = t.title;
  document.querySelector("header p").textContent = t.tagline;
  document.querySelector("#countdown h2").textContent = t.countdownHeading;

  const timerText = document.getElementById("timer").textContent;
  if (timerText.includes("🙏")) {
    document.getElementById("timer").textContent = t.countdownEnd;
  }

  document.querySelector("#about h2").textContent = t.aboutTitle;
  const aboutParas = document.querySelectorAll("#about div:last-child p");
  t.aboutParagraphs.forEach((p, i) => {
    if (aboutParas[i]) aboutParas[i].textContent = p;
  });

  document.querySelector(".calendar-links h2").textContent = t.calendarTitle;
  const rows = document.querySelectorAll(".calendar-table tbody tr");
  if (rows.length && t.calendarEvents) {
    rows.forEach((row, i) => {
      const cells = row.querySelectorAll("td");
      if (t.calendarEvents[i]) {
        cells[1].textContent = t.calendarEvents[i].event;
        cells[2].innerHTML = t.calendarEvents[i].details;
      }
    });
  }

  document.querySelector("#rituals h2").textContent = t.ritualsTitle;
  const ritualItems = document.querySelectorAll("#rituals ul li");
  t.ritualsList.forEach((item, i) => 
  {
    if (ritualItems[i]) ritualItems[i].innerHTML = item;
  });

  // Attractions section
  document.querySelector("#attractions h2").textContent = t.attractionsTitle;
  const attractionItems = document.querySelectorAll("#attractions ul li");
  t.attractionsList.forEach((item, i) => 
  {
    if (attractionItems[i]) attractionItems[i].textContent = item;
  });
/*
    // FAQ rendering logic
const faqContainer = document.querySelector("#faqs");
document.querySelector("#faqs h2").textContent = t.faqsTitle[lang] || t.faqsTitle.en;

// Remove existing FAQ items
faqContainer.querySelectorAll(".faq").forEach(e => e.remove());

// Loop through FAQs and create elements for current language or fallback to English
t.faqs.forEach(faq => {
  const div = document.createElement("div");
  div.className = "faq";

  // Use question and answer according to selected lang, fallback to English
  const q = document.createElement("h3");
  q.textContent = faq.question[lang] || faq.question.en;

  const a = document.createElement("p");
  a.innerHTML = faq.answer[lang] || faq.answer.en;

  div.appendChild(q);
  div.appendChild(a);
  faqContainer.appendChild(div);
});
*/


};//End of switchLang

}); //END of function


document.addEventListener("DOMContentLoaded", () => {
  switchLang(currentLang); // Initialize language on page load
});

