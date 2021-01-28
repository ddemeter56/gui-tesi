import { getData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';

function createGymCodes() {
  const { subscribe, set } = writable(null);

  return {
    getFacilityCodes: () => getData('http://localhost/api/public/codes/facility').then((result) => {
      return result;
    })
  }
}



export const gymCodes = createGymCodes();
