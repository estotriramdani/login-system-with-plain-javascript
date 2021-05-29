import getQuotes from '../data/getQuotes.js';
import {
  alertNotif,
  loginButton,
  loginForm,
  messageNotif,
  passwordLogin,
  usernameLogin,
  content,
  authPage,
  homePage,
  homePageSkeleton,
  userLoggedin,
} from '../dom-elements.js';
import { homeSkeleton } from '../pages/home.js';
import {
  closeNotification,
  showNotification,
} from '../tools/showCloseNotif.js';

let usernameLoginInput = '';
let passwordLoginInput = '';

usernameLogin.addEventListener('change', (e) => {
  usernameLoginInput = e.target.value;
});
passwordLogin.addEventListener('change', (e) => {
  passwordLoginInput = e.target.value;
});

// for (let index = 0; index < loginForm.length; index++) {
//   loginForm[index].addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') login();
//   });
// }

const login = () => {
  if (usernameLogin.value.length <= 0 || passwordLogin.value.length <= 0) {
    messageNotif.innerHTML = 'Fill all the forms!';
    showNotification('failed');
    setTimeout(() => {
      closeNotification('failed');
    }, 3000);
    return false;
  }
  loginButton.innerHTML = 'Please Wait ...';
  let usersData = JSON.parse(window.localStorage.getItem('users'));
  const searchData = usersData.filter(function (user) {
    return user.username == usernameLoginInput;
  });
  if (searchData.length == 1) {
    if (searchData[0].password == passwordLoginInput) {
      window.sessionStorage.setItem('userLoggedIn', usernameLoginInput);
      setTimeout(() => {
        showNotification('success');
        messageNotif.innerHTML = 'Login success!';
      }, 1000);
      setTimeout(() => {
        authPage.style.display = 'none';
        homePageSkeleton.style.display = 'block';
        getQuotes();
      }, 2000);
      setTimeout(() => {
        loginButton.innerHTML = 'Login';
        homePage.style.display = 'block';
        homePageSkeleton.style.display = 'none';
        closeNotification('success');
        usernameLogin.value = '';
        passwordLogin.value = '';
      }, 3000);
    } else {
      setTimeout(() => {
        showNotification('failed');
        messageNotif.innerHTML = 'Password is wrong!';
      }, 1000);
      setTimeout(() => {
        loginButton.innerHTML = 'Login';
        closeNotification('failed');
      }, 3000);
    }
  } else {
    setTimeout(() => {
      showNotification('failed');
      messageNotif.innerHTML = 'Username not found!';
    }, 1000);
    setTimeout(() => {
      loginButton.innerHTML = 'Login';
      closeNotification('failed');
    }, 3000);
  }
};

export default login;
