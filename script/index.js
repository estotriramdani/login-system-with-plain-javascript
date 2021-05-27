import {
  btn,
  input,
  loginAccount,
  registerAccount,
  swipeToRegister,
  swipeToLogin,
  label,
  usernameRegister,
  passwordRegister,
  passwordRegisterVerify,
  alertNotif,
  messageNotif,
  closeNotif,
  closedNotif,
  registerButton,
} from './dom-elements.js';

for (let index = 0; index < input.length; index++) {
  input[index].addEventListener('keyup', (e) => {
    if (e.key === 'Enter') login();
  });

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

btn.addEventListener('click', () => {
  login();
});

const login = () => {
  btn.innerHTML = 'Please Wait ...';
  setTimeout(() => {
    btn.innerHTML = 'Login';
  }, 1000);
};

swipeToRegister.addEventListener('click', () => {
  loginAccount.style.transform = 'translateY(-100%)';
  registerAccount.style.transform = 'translateY(-105%)';
});

swipeToLogin.addEventListener('click', () => {
  loginAccount.style.transform = 'translateY(0%)';
  registerAccount.style.transform = 'translateY(0%)';
});

let usernameRegisterInput;
let passwordRegisterInput;
let passwordRegisterVerifyInput;

usernameRegister.addEventListener('change', (e) => {
  usernameRegisterInput = e.target.value;
});

passwordRegister.addEventListener('change', (e) => {
  passwordRegisterInput = e.target.value;
});

passwordRegisterVerify.addEventListener('change', (e) => {
  passwordRegisterVerifyInput = e.target.value;
});

passwordRegisterVerify.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') register();
});

registerButton.addEventListener('click', () => {
  register();
});

const register = () => {
  if (
    passwordRegister.value.length <= 0 ||
    passwordRegisterVerify.value <= 0 ||
    usernameRegister.value <= 0
  ) {
    alertNotif.classList.add('showNotif');
    alertNotif.classList.add('alert-failed');
    registerButton.innerHTML = 'Register';
    messageNotif.innerHTML = 'The forms should be filled';
    setTimeout(() => {
      alertNotif.classList.remove('showNotif');
      alertNotif.classList.remove('alert-failed');
    }, 3000);
    return false;
  }
  registerButton.innerHTML = 'Please wait...';

  if (passwordRegisterInput == passwordRegisterVerifyInput) {
    messageNotif.innerHTML = 'Register success!';
    registerButton.innerHTML = 'Processing ...';
    setTimeout(() => {
      alertNotif.classList.add('showNotif');
      alertNotif.classList.add('alert-success');
      registerButton.innerHTML = 'Register';
      passwordRegister.value = '';
      passwordRegisterVerify.value = '';
    }, 1500);
    setTimeout(() => {
      alertNotif.classList.remove('showNotif');
      alertNotif.classList.remove('alert-success');
    }, 3500);
  } else {
    messageNotif.innerHTML = 'Password not match!';
    registerButton.innerHTML = 'Processing ...';
    setTimeout(() => {
      alertNotif.classList.add('showNotif');
      alertNotif.classList.add('alert-failed');
    }, 1500);
    setTimeout(() => {
      alertNotif.classList.remove('showNotif');
      alertNotif.classList.remove('alert-failed');
      registerButton.innerHTML = 'Register';
    }, 3500);
  }
};
