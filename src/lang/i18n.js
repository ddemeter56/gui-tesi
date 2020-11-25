import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from './en.json';
import hu from './hu.json';

const supportedLocales = { en, hu };

addMessages('en', en);
addMessages('hu', hu);
addMessages('default', browserLocaleSupported() ? supportedLocales[getBrowserLocale()] : en);

function getBrowserLocale() {
  return getLocaleFromNavigator().split('-')[0];
}

function browserLocaleSupported() {
  return Object.prototype.hasOwnProperty.call(supportedLocales, getBrowserLocale());
}

export function i18n() {
  init({
    initialLocale: localStorage.getItem('lang'),
    fallbackLocale: 'default',
  });
}
