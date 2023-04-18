const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1.створити змінну, щоб достукатись до ul
// 2.перебрати елементи масиву через map
// 3.Для створення розмітки використати шаблонні рядки і метод insertAdjacentHTML()
// 4.Додати мінімальне оформлення галереї флексбоксами або грідами через CSS класи

const galleryEls = document.querySelector('.gallery');

const galleryItems = images.map(({ url, alt }) => `
  <li class="gallery-item">
    <img src="${url}" alt="${alt}" class="gallery-img">
  </li>
`).join('');

galleryEls.insertAdjacentHTML('beforeend', galleryItems);
