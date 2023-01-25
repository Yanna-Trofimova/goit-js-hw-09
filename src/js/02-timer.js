import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";


const buttonStart = document.querySelector('[data-start]');
const dateInput = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');



// buttonStart.setAttribute('disabled', 'disabled');
buttonStart.disabled = true;


// function disableBtn() {
//     buttonStart.disabled = true;
// }
// disableBtn();

const options = {
  enableTime: true,
  time_24hr: true,
    defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
        window.alert('Please choose a date in the future');
      } else {
          options.defaultDate = selectedDates[0];
        // buttonStart.removeAttribute('disabled');
        buttonStart.disabled = false;
    }
  },
};

const calendar = flatpickr(dateInput, options);





buttonStart.addEventListener('click', startTimer);

 

function startTimer() {
 setInterval(convertMs, 1000);
  
    // buttonStart.setAttribute('disabled', 'disabled');
    buttonStart.disabled = true;

}



function convertMs() {
  const ms = new Date(dateInput.value) - Date.now();
  if (ms <= 0) {
    stopInterval();
  }
  
   
    const days = (Math.floor(ms / (1000 * 60 * 60 * 24)));
    const hours = (Math.floor((ms/ (1000 * 60 * 60)) % 24));
    const minutes = (Math.floor((ms / (1000 * 60)) % 60));
    const seconds = (Math.floor((ms / 1000) % 60));
    
    
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
  
  
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};
