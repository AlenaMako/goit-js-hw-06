const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
   const inputValue = input.value.trim();
    const inputLength = input.dataset.length;
    
    if (inputValue.length === +inputLength) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    
  }
}
