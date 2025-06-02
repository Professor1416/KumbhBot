document.addEventListener("DOMContentLoaded", function () {
  // 🛁 First Shahi Snan Date – 2 August 2027 at 00:00 IST
  const eventDateIST = new Date("2027-08-02T00:00:00+05:30").getTime();

  const timer = document.getElementById("timer");

  function updateCountdown() {
    const nowUTC = new Date().getTime(); // Get current UTC time
    const nowIST = nowUTC + (5.5 * 60 * 60 * 1000); // Adjust to IST

    const distance = eventDateIST - nowIST;

    if (distance <= 0) {
      timer.innerHTML = "🙏 The First Shahi Snan has begun!";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
});
