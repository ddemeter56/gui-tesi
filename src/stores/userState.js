import { writable } from 'svelte/store';
import { getData } from '../utils/backendComm.js';

// Ami aut azt a backend csinálja, ha lejár akkor 401-et dob aztán újra be kell jelentkezni
function createUserState() {
  const { subscribe, set } = writable({ isLoggedIn: false, roles: [] });

  return {
    subscribe,
    checkUserState: function() {
      if(window.localStorage.getItem('access_token')) {
        // Probáljuk itt ki a access_tokent
        let validTo = new Date(parseInt(window.localStorage.getItem('token_requested_at')));
        validTo.setSeconds(validTo.getSeconds() + parseInt(window.localStorage.getItem('expires_in')))
        getData('user-management/role-check', window.localStorage.getItem('access_token')).then((result) => {
          set({ isLoggedIn: validTo > new Date() ? true : false, roles: result.roles}); 
        })
      } else {
        set({ isLoggedIn: false});
      }
    }
  }
}

export const userState = createUserState();
