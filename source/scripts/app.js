import '@babel/polyfill';
import { Header } from './header';
import properties from './properties';

require('styles/pages/index.css');

document.addEventListener('DOMContentLoaded', () => {
  // properties();

  Header();
});
