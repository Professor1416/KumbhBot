document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      heading: "🕒 Countdown to First Shahi Snan – 2 August 2027",
      countdownEnd: "🙏 The First Shahi Snan has begun!",
    },
    hi: {
      heading: "🕒 पहला शाही स्नान – 2 अगस्त 2027 तक की उलटी गिनती",
      countdownEnd: "🙏 पहला शाही स्नान शुरू हो चुका है!",
    },
    mr: {
      heading: "🕒 पहिल्या शाही स्नानसाठी उलट गणना – २ ऑगस्ट २०२७",
      countdownEnd: "🙏 पहिले शाही स्नान सुरू झाले आहे!",
    },
  };

  // Store default language
  let currentLang = "en";

  window.switchLang = function (lang) {
    if (!translations[lang]) return;

    currentLang = lang;

    // Update countdown heading
    const heading = document.querySelector("#countdown h2");
    heading.textContent = translations[lang].heading;

    // If Shahi Snan has already started
    const timerText = document.getElementById("timer").textContent;
    if (timerText.includes("🙏")) {
      document.getElementById("timer").textContent = translations[lang].countdownEnd;
    }
  };
});
