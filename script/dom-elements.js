const label = document.querySelectorAll('.label');
const input = document.querySelectorAll('.input');
const btn = document.querySelector('.btn');
const swipeToRegister = document.querySelector('.swipeToRegister');
const swipeToLogin = document.querySelector('.swipeToLogin');

const messageNotif = document.querySelector('.messageNotif');
const alertNotif = document.querySelector('.alert');
const closeNotif = document.querySelector('.closeNotif');
const closedNotif = document.querySelector('.closedNotif');

const registerAccount = document.querySelector('.registerAccount');
const loginAccount = document.querySelector('.loginAccount');
const usernameRegister = document.querySelector('#usernameRegister');
const passwordRegister = document.querySelector('#passwordRegister');
const passwordRegisterVerify = document.querySelector(
  '#passwordRegisterVerify'
);
const registerButton = document.querySelector('#register');

const loginButton = document.querySelector('#login');
const usernameLogin = document.querySelector('#usernameLogin');
const passwordLogin = document.querySelector('#passwordLogin');

const loginForm = document.getElementsByClassName('loginForm');
const registerForm = document.getElementsByClassName('registerForm');

export {
  label,
  input,
  btn,
  swipeToRegister,
  swipeToLogin,
  registerAccount,
  loginAccount,
  usernameRegister,
  passwordRegister,
  passwordRegisterVerify,
  messageNotif,
  alertNotif,
  closeNotif,
  closedNotif,
  registerButton,
  loginButton,
  usernameLogin,
  passwordLogin,
  loginForm,
  registerForm,
};
