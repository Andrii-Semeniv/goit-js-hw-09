const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalID = null;

startBtn.addEventListener('click', startEvent);
stopBtn.addEventListener('click', stopEvent);

stopBtn.setAttribute('disabled', 'true');

function startEvent() {
  intervalID = setInterval(() => {
    window.document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopEvent() {
  clearInterval(intervalID);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
}
