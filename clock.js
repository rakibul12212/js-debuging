let number = 0;
const appendNumber = document.getElementById('number');
const buttonStart = document.getElementById('btn-start');
const buttonStop = document.getElementById('btn-stop');
const buttonReset = document.getElementById('btn-reset');

function startTimer() {
    number++;
    if (number < 9) {
        appendNumber.innerHTML = "0" + number;

    }
    if (number > 9) {
        appendNumber.innerHTML = number;
    }

}


buttonStart.onclick = function() {
    interval = setInterval(startTimer);
}
buttonStop.onclick = function() {
    clearInterval(interval);
}
buttonReset.onclick = function() {
    clearInterval(interval);
    number = "00";
    appendNumber.innerHTML = number;

};