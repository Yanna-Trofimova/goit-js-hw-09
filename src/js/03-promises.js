import Notiflix from 'notiflix';

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });



  function onSubmit(e) {
  e.preventDefault();
  let delayInput = +delay.value;
  let stepInput = +step.value;
  let amountInput = +amount.value;
  for (let position = 1; position <= amountInput; position += 1) {
    createPromise(position, delayInput)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayInput += stepInput;
  }
};