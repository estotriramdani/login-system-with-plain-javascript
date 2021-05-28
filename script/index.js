import login from './auth/login.js';
import register from './auth/register.js';
import {
  input,
  loginAccount,
  registerAccount,
  swipeToRegister,
  swipeToLogin,
  label,
  registerButton,
  loginButton,
} from './dom-elements.js';

if (window.localStorage.getItem('users') === null) {
  window.localStorage.setItem(
    'users',
    '[{"username": "Esto", "password": "qwe123"}]'
  );
}

for (let index = 0; index < input.length; index++) {
  input[index].addEventListener('focus', () => {
    label[index].classList.add('label-up');
  });
}

for (let index = 0; index < input.length; index++) {
  input[index].addEventListener('blur', () => {
    if (input[index].value.length <= 0)
      label[index].classList.remove('label-up');
  });
}

swipeToRegister.addEventListener('click', () => {
  loginAccount.style.transform = 'translateY(-100%)';
  registerAccount.style.transform = 'translateY(-105%)';
});

swipeToLogin.addEventListener('click', () => {
  loginAccount.style.transform = 'translateY(0%)';
  registerAccount.style.transform = 'translateY(0%)';
});

loginButton.addEventListener('click', () => {
  login();
});

registerButton.addEventListener('click', () => {
  register();
});
