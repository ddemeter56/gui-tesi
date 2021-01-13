import { getData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';
import { notifyStore } from './notifyStore.js';


function createPtCodes() {
  const { subscribe, set } = writable(null);

  return {
    getLangCodes: () => getData('http://localhost/api/public/codes/language').then((result) => {
      return result;
    }),
    getSpecs: () => getData('http://localhost/api/public/codes/specialization').then((result) => {
      return result;
    })
  }
}



export const ptCodes = createPtCodes();
