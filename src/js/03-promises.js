const form = document.querySelector('.form');
const firstDelay = form.elements.delay;
const stepDelay = form.elements.step;
const amount = form.elements.amount;

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  for (let position = 1; position <= Number(amount.value); position++) {
    let delay =
      Number(firstDelay.value) + Number(stepDelay.value) * (position - 1);

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

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
