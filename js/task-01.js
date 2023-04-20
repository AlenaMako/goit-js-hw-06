const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const subItems = item.lastElementChild.children;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${subItems.length}`);

});



