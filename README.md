# 🕉️ KumbhBot – Your AI-Powered Guide to Nashik Kumbh Mela 2027

**KumbhBot** is an AI-powered, multilingual web guide built to support pilgrims, spiritual travelers, and tourists attending the **Nashik Kumbh Mela 2027**. It offers vital information including dates, rituals, travel, food, accommodations, safety tips, and emergency support—all in a clean, responsive, and interactive interface.

🌐 **Live Site**: [https://professor1416.github.io/KumbhBot/](https://professor1416.github.io/KumbhBot/)

---

## 📌 Key Features

- 📅 **Event Calendar** – View & download major Kumbh dates (.ics support)
- 🛕 **Rituals & Traditions** – Learn about Shahi Snan, Peshwai, and more
- 🛣️ **Travel Guidance** – How to reach Nashik via road, rail, air
- 🏨 **Accommodation Info** – Hotels, tent cities, dharamshalas
- 🆘 **Emergency Assistance** – Police, hospitals, helplines, and alerts
- 🍛 **Local Food & Prasad** – Nearby places, special dishes, and offerings
- 🌍 **Multilingual Interface** – English, Hindi, Marathi (more coming soon)
- 💬 **AI-Powered Chatbot** – Integrated Tawk.to support for live Q&A
- ♻️ **Eco Travel Tips** – Travel responsibly with our sustainability guide

---

## 📁 Project Structure

KumbhBot/
│
├── index.html # Home page

├── accommodation.html # Stay options & booking tips

├── event-schedule.html # Official dates, Snan, rituals

├── how-to-reach.html # Travel routes & directions

├── emergency.html # Key emergency contact info

├── dos-donts.html # Safety rules & prohibited actions

├── eco-tips.html # Sustainable travel practices

├── food-prasad.html # Local food, prasad & offerings

│

├── assets/

│ ├── css/style.css # Stylesheet for UI

│ ├── js/lang.js # Language toggle script

│ ├── js/countdown.js # Snan countdown timer

│ ├── images/ # Icons, logos, festival images

│ └── ics/ # Downloadable calendar events (.ics)

│

├── script.js # Optional interactivity scripts

├── sitemap.xml # SEO sitemap

├── robots.txt # Bot crawler rules

└── README.md # You’re reading it now!


---

## 🧑‍💻 Tech Stack

- HTML5 / CSS3 / JavaScript
- Google Fonts (Mukta)
- Tawk.to for live chatbot integration
- Responsive design (mobile & desktop friendly)

---


## ⚙️ DevOps & Deployment (CI/CD Pipeline)

* **Source Control**: Hosted on GitHub
* **CI/CD Tool**: Jenkins pipeline automating build & deployment
* **Containerization**: Dockerized using Nginx as a static web server
* **Image Registry**: DockerHub for versioned images
* **Cloud Hosting**: AWS EC2 (Ubuntu) instance running containerized KumbhBot
* **Monitoring (Optional)**: Can be integrated with Prometheus & Grafana

### 🔄 Workflow Architecture

```text
GitHub → Jenkins → Docker → DockerHub → AWS EC2 → KumbhBot App
```

<img width="1589" height="1010" alt="95c7c1e9-1d0d-44ec-a6e7-990d3890b8b7" src="https://github.com/user-attachments/assets/9fe318cb-d99e-4c4a-999d-87b2cfc60c72" />

*(Architecture diagram showing CI/CD flow)*

### 🐳 Dockerfile (Nginx-based for static site)

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

### 📜 Jenkinsfile (Pipeline Example)

```
pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_NAME = "your-dockerhub-username/kumbhbot"
    }
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/professor1416/KumbhBot.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER .'
            }
        }
        stage('Push to DockerHub') {
            steps {
                sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
                sh 'docker push $IMAGE_NAME:$BUILD_NUMBER'
            }
        }
        stage('Deploy on EC2') {
            steps {
                sh 'docker stop kumbhbot || true && docker rm kumbhbot || true'
                sh 'docker run -d -p 8051:80 --name kumbhbot $IMAGE_NAME:$BUILD_NUMBER'
            }
        }
    }
}
```

----

## 🚀 How to Use / Contribute

1. Visit the [Live Site](https://professor1416.github.io/KumbhBot/)
2. Toggle languages from the top bar
3. Explore different sections (Event schedule, Travel, Emergency, Food, etc.)
4. Use the chatbot for help
5. You can fork and enhance this project—pull requests welcome!

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use, modify, and share!
