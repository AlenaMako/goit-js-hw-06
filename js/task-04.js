


/* <div id="counter">
<button type="button" data-action="decrement">-1</button>
<span id="value">0</span>
<button type="button" data-action="increment">+1</button>
</div> */



const counterValue = document.querySelector('#value');
let currentValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});

decrementBtn.addEventListener('click', () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});
