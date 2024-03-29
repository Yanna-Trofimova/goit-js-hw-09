// import Notiflix from 'notiflix';


const btnCreatePromise = document.querySelector('.btn-create');
const delayEl = document.querySelector('.delay');
const step = document.querySelector('.step');
const amount = document.querySelector('.amount');



btnCreatePromise.addEventListener('click', onBtn);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

  
function onBtn(e) {
  e.preventDefault();
  let delay = delayEl.value;
  
  for (let position = 1; position <= amount.value; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delay += step.value;
  }
};







