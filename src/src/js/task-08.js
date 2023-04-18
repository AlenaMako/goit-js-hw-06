const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault(); // запобігли перезавантаженню сторінки

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert('All fields must be filled!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    console.log(formData);
    loginForm.reset();
  }
});
