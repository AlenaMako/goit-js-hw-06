const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1.створити змінну, щоб достукатись до ul
// 2.перебрати елементи масиву
//   2.1.створити li
//   2.2.записати текст у свторений елемент li
//   2.3.додати клас item до створеного li
//   2.4.помістити створені li в ul
// 3.розмістити усі li за одну операцію у список ul#ingredients

const ulEl = document.querySelector("#ingredients");

for (const ingredient of ingredients){
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  ulEl.appendChild(liEl);
}

console.log(ulEl);