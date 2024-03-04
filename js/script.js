const mainText = document.getElementById('main-text');
const body = document.body;

function toggleGlitchEffect() {
    mainText.classList.toggle('glitch');
}

setInterval(toggleGlitchEffect, 2000);

document.getElementById('rsvp-button').addEventListener('click', function() {
    alert('RSVP form coming soon!');
});
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('March 23, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(updateInterval);
        countdownElement.innerHTML = "EVENT STARTED";
    }
}

// Update the countdown every second
const updateInterval = setInterval(updateCountdown, 1000);
