const categoriesListEl = document.querySelector('#categories');
const categoriesItemsEl = categoriesListEl.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});