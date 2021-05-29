import {
  authPage,
  homePage,
  logoutButton,
  messageNotif,
  inputElements,
} from '../dom-elements.js';
import {
  closeNotification,
  showNotification,
} from '../tools/showCloseNotif.js';

const logout = () => {
  window.sessionStorage.removeItem('userLoggedIn');
  messageNotif.innerHTML = 'Logout success';

  logoutButton.innerHTML = 'Processing ...';

  for (let index = 0; index < inputElements.length; index++) {
    inputElements[index].classList.remove('label-up');
  }
  setTimeout(() => {
    showNotification('success');
  }, 1000);
  setTimeout(() => {
    closeNotification('success');
    logoutButton.innerHTML = 'Logout';
    homePage.style.display = 'none';
    authPage.style.display = 'block';
  }, 2000);
};

export default logout;
