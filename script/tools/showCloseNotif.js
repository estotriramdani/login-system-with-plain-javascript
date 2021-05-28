import { alertNotif, messageNotif } from '../dom-elements.js';

const showNotification = (type) => {
  switch (type) {
    case 'success':
      alertNotif.classList.add('showNotif');
      alertNotif.classList.add('alert-success');
      break;
    case 'failed':
      alertNotif.classList.add('showNotif');
      alertNotif.classList.add('alert-failed');
    default:
      break;
  }
};

const closeNotification = (type) => {
  switch (type) {
    case 'success':
      alertNotif.classList.remove('showNotif');
      alertNotif.classList.remove('alert-success');
      break;
    case 'failed':
      alertNotif.classList.remove('showNotif');
      alertNotif.classList.remove('alert-failed');
    default:
      break;
  }
  messageNotif.innerHTML = '';
};

export { showNotification, closeNotification };
