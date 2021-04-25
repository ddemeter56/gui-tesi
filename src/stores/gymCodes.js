import { getData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';

function createGymCodes() {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    getFacilityCodes: () => getData('public/codes/facility').then((result) => {
      set(result)
      return result;
    })
  }
}


export const gymCodes = createGymCodes();
