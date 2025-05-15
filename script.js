document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const chatBotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotIcon = document.getElementById("chatbot-icon");

  let selectedLanguage = null;
  let languageSelected = false;

  chatbotIcon.addEventListener("click", () => {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none";
    initializeChat();
  });

  closeBtn.addEventListener("click", () => {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex";
  });

  sendBtn.addEventListener("click", sendMessage);

  chatBotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function initializeChat() {
    if (!languageSelected) {
      chatbotMessages.innerHTML = `
        <div class="message bot">🙏 Welcome to KumbhBot! Please select a language:</div>
        <div class="message bot">
          <button onclick="setLanguage('English')">English</button>
          <button onclick="setLanguage('Hindi')">हिंदी</button>
          <button onclick="setLanguage('Marathi')">मराठी</button>
        </div>
      `;
      chatBotInput.disabled = true;
      sendBtn.disabled = true;
    }
  }

  window.setLanguage = function(lang) {
    selectedLanguage = lang;
    languageSelected = true;
    appendMessage("user", lang);
    appendMessage("bot", `You have selected ${lang}. Please type your message below.`);
    chatBotInput.disabled = false;
    sendBtn.disabled = false;
  };
});

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-IN';
recognition.onresult = function(event) {
  document.getElementById('chatbot-input').value = event.results[0][0].transcript;
};

function startVoice() {
  recognition.start();
}

function sendMessage() {
  const inputElement = document.getElementById("chatbot-input");
  const userMessage = inputElement.value.trim();
  if (!userMessage || !selectedLanguage) return;

  appendMessage("user", userMessage);
  inputElement.value = '';
  getBotResponse(userMessage);
}

function appendMessage(sender, message) {
  const messageContainer = document.getElementById("chatbot-messages");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

async function getBotResponse(userMessage) {
  const API_KEY = "AIzaSyAoF8rYhEPRPHoQXQVXgOpoQov-2LQsLAo";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  try {
    const prompt = `You are KumbhBot, a multilingual assistant. Reply in ${selectedLanguage}. Answer questions about Nashik-Trimbakeshwar Kumbh Mela 2027.

User: ${userMessage}
KumbhBot:`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    const data = await response.json();
    if (!data.candidates || !data.candidates.length) {
      throw new Error("No response from Gemini API");
    }
    const botMessage = data.candidates[0].content.parts[0].text;
    appendMessage("bot", botMessage);
  } catch (error) {
    console.error("Error:", error);
    appendMessage("bot", "Sorry, I'm having trouble responding. Please try again.");
  }
}
