import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const daysInput = document.querySelector('span[data-days]');
const hoursInput = document.querySelector('span[data-hours]');
const minutesInput = document.querySelector('span[data-minutes]');
const secondsInput = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    let counterTime = selectedDates[0] - Date.now();
    if (counterTime <= 0) {
      alert('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
    timer.selectedTime = selectedDates[0].getTime();
  },
};

flatpickr(dateInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const timer = {
  timerId: null,
  selectedTime: 0,
  onStartCounter() {
    startBtn.disabled = true;
    this.timerId = setInterval(() => {
      const restTime = this.selectedTime - Date.now();
      if (restTime <= 0) {
        clearInterval(this.timerId);
        startBtn.disabled = false;
        return;
      }

      const time = convertMs(restTime);
      updateClockFace(time);
    }, 1000);
  },
};

function updateClockFace({ days, hours, minutes, seconds }) {
  daysInput.textContent = days;
  hoursInput.textContent = hours;
  minutesInput.textContent = minutes;
  secondsInput.textContent = seconds;
}

startBtn.addEventListener('click', timer.onStartCounter.bind(timer));

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
