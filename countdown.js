document.addEventListener("DOMContentLoaded", function () {
  // Set the Kumbh Mela First Shahi Snan date in IST
  const eventDateIST = new Date("2027-08-02T00:00:00+05:30").getTime(); // IST timezone

  const timer = document.getElementById("countdown");

  function updateCountdown() {
    // Get current UTC time
    const nowUTC = new Date().getTime();

    // Adjust UTC to IST (+5 hours 30 minutes)
    const nowIST = nowUTC + (5.5 * 60 * 60 * 1000);

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
