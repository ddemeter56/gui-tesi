import { getData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';

function createPtCodes() {
  const { subscribe, set } = writable(null);

  return {
    getLangCodes: () => getData('http://localhost/api/public/codes/language').then((result) => {
      return result;
    }),
    getSpecs: () => getData('http://localhost/api/public/codes/specialization').then((result) => {
      return result;
    }),
    getCertiGroups: () =>  getData('http://localhost/api/public/codes/certification/grouped').then((result) => {
      return result;
    })
  }
}



export const ptCodes = createPtCodes();