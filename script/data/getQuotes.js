import { authorQuotes, quotes, userLoggedin } from '../dom-elements.js';
import quotesData from './quotes.js';
const timestamp = new Date().getTime().toString();

const getQuotes = () => {
  const index = timestamp[timestamp.length - 3];
  quotes.innerHTML = quotesData[index].quotes;
  authorQuotes.innerHTML = quotesData[index].author;

  userLoggedin.innerHTML = sessionStorage.getItem('userLoggedIn');
};

export default getQuotes;
