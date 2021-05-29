import login from './auth/login.js';
import logout from './auth/logout.js';
import register from './auth/register.js';
import getQuotes from './data/getQuotes.js';
import {
  input,
  loginAccount,
  registerAccount,
  swipeToRegister,
  swipeToLogin,
  label,
  registerButton,
  loginButton,
  homePageSkeleton,
  authPage,
  homePage,
  logoutButton,
  passwordRegisterVerify,
} from './dom-elements.js';

if (window.localStorage.getItem('users') === null) {
  window.localStorage.setItem(
    'users',
    '[{"username": "Esto", "password": "qwe123"}]'
  );
}

if (
  window.sessionStorage.getItem('userLoggedIn') != null &&
  window.sessionStorage.getItem('userLoggedIn') != 'loggedOut'
) {
  authPage.style.display = 'none';
  homePageSkeleton.style.display = 'block';
  setTimeout(() => {
    homePageSkeleton.style.display = 'none';
    homePage.style.display = 'block';
  }, 1500);
} else {
  authPage.style.display = 'block';
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

registerButton.addEventListener('click', () => {
  register();
});

loginButton.addEventListener('click', () => {
  login();
});

logoutButton.addEventListener('click', () => {
  logout();
});

getQuotes();
