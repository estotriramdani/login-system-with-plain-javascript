import {
  alertNotif,
  loginAccount,
  messageNotif,
  passwordRegister,
  passwordRegisterVerify,
  registerAccount,
  registerButton,
  registerForm,
  usernameRegister,
} from '../dom-elements.js';
import {
  closeNotification,
  showNotification,
} from '../tools/showCloseNotif.js';

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

for (let index = 0; index < registerForm.length; index++) {
  registerForm[index].addEventListener('keyup', (e) => {
    if (e.key === 'Enter') register();
  });
}

const register = () => {
  if (
    passwordRegister.value.length <= 0 ||
    passwordRegisterVerify.value <= 0 ||
    usernameRegister.value <= 0
  ) {
    showNotification('failed');
    registerButton.innerHTML = 'Register';
    messageNotif.innerHTML = 'The forms should be filled';
    setTimeout(() => {
      closeNotification('failed');
    }, 3000);
    return false;
  }
  registerButton.innerHTML = 'Please wait...';

  if (passwordRegisterInput == passwordRegisterVerifyInput) {
    let usersData = JSON.parse(window.localStorage.getItem('users'));
    const searchData = usersData.filter(function (user) {
      return user.username == usernameRegisterInput;
    });
    if (searchData.length > 0) {
      setTimeout(() => {
        showNotification('failed');
        messageNotif.innerHTML = 'Username is already registered!';
      }, 1500);
      setTimeout(() => {
        closeNotification('failed');
        registerButton.innerHTML = 'Register';
      }, 3500);
    } else {
      usersData.push({
        username: usernameRegisterInput,
        password: passwordRegisterInput,
      });
      window.localStorage.setItem('users', JSON.stringify(usersData));
      messageNotif.innerHTML = 'Register success!';
      registerButton.innerHTML = 'Processing ...';
      setTimeout(() => {
        showNotification('success');
        registerButton.innerHTML = 'Register';
        loginAccount.style.transform = 'translateY(0%)';
        registerAccount.style.transform = 'translateY(0%)';
      }, 1500);
      setTimeout(() => {
        closeNotification('success');
      }, 3500);
    }
  } else {
    messageNotif.innerHTML = 'Password not match!';
    registerButton.innerHTML = 'Processing ...';
    setTimeout(() => {
      showNotification('failed');
    }, 1500);
    setTimeout(() => {
      closeNotification('failed');
      registerButton.innerHTML = 'Register';
    }, 3500);
  }
};

export default register;
