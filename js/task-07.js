

// const fontSizeControl = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// fontSizeControl.addEventListener('input', () => {
//   text.style.fontSize = `${fontSizeControl.value}px`;
// });


const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

function changeFontSize() {
  text.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControl.addEventListener('input', changeFontSize);


