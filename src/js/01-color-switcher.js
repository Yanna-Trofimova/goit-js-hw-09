
const btnStartEl = document.querySelector('.btn-start');
const btnStopEl = document.querySelector('.btn-stop');
const body = document.querySelector('body');

let timerId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


btnStartEl.addEventListener("click", () => {
    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    btnStartEl.classList.add("disable");

    btnStopEl.classList.remove("disable");
});


btnStopEl.addEventListener("click", () => {
    clearInterval(timerId);
    btnStartEl.classList.remove("disable");
    btnStopEl.classList.add("disable");
});