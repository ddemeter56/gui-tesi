import { getData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';

function createPtCodes() {
  const { subscribe, set, update } = writable({langCodes: null, specs: null, certies: null});

  return {
    subscribe,
    getLangCodes: () => getData('public/codes/language').then((result) => {
      console.log(result);
      update((_oldValue) => ({..._oldValue, langCodes: result.languages}))
      return result;
    }),
    getSpecs: () => getData('public/codes/specialization').then((result) => {
      console.log(result);
      update((_oldValue) => ({..._oldValue, specs: result.specializations }))
      return result;
    }),
    getCertiGroups: () => getData('public/codes/certification/grouped').then((result) => {
      console.log(result);
      update((_oldValue) => ({..._oldValue, certies: result}))
      return result;
    })
  }
}

export const ptCodes = createPtCodes();