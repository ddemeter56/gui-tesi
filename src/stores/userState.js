import { writable } from 'svelte/store';

// Ami aut azt a backend csinálja, ha lejár akkor 401-et dob aztán újra be kell jelentkezni
function createUserState() {
  const { subscribe, set } = writable({ isLoggedIn: false });

  return {
    subscribe,
    checkUserState: function() {
      console.log('check user state has been called');
      if(window.localStorage.getItem('access_token')) {
        console.log('access token found!');
        let validTo = new Date(parseInt(window.localStorage.getItem('token_requested_at')));
        validTo.setSeconds(validTo.getSeconds() + parseInt(window.localStorage.getItem('expires_in')))
        console.log(validTo);
        set({ isLoggedIn: validTo > new Date() ? true : false}); 
      } else {
        set({ isLoggedIn: false});
      }
    }
  }
}

export const userState = createUserState();
