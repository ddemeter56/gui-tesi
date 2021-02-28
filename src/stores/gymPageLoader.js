import { writable } from 'svelte/store';
import { getData } from '../utils/backendComm.js';

function createGymPageLoader() {
	const { subscribe, set } = writable(null);

	return {
		subscribe,
		loadGym: (id) => getData(`http://localhost/api/public/list/gym/${id}`).then((result) => {
      set(result);
      return result;
    })
  }
}

export const gymPageLoader = createGymPageLoader();