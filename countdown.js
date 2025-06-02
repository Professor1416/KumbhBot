document.addEventListener("DOMContentLoaded", function () {
  // Set the Kumbh Mela start date
  const eventDate = new Date("2027-02-12T00:00:00").getTime(); // Update the date if needed

  const timer = document.getElementById("timer");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      timer.innerHTML = "🙏 The Kumbh Mela has begun!";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
});
