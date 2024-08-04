function startCountdown(endTime, display) {
    function updateTimer() {
        var now = new Date().getTime();
        var timeRemaining = endTime - now;

        if (timeRemaining >= 0) {
            var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            var formattedDays = days < 10 ? "0" + days : days;
            var formattedHours = hours < 10 ? "0" + hours : hours;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = formattedDays + ":" + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
        } else {
            display.textContent = "00:00:00:00";
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000); 
}

window.onload = function () {
    var targetDate = new Date("August 14, 2024 23:59:59").getTime(); 
    var display = document.querySelector('#time');
    startCountdown(targetDate, display);
};
