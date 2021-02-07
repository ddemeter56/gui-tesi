import { writable } from 'svelte/store';
import { notifyStore } from './notifyStore.js';


function createResultStore() {
	const { subscribe } = writable(null);

	return {
    subscribe,
	};
}

export const gymRegisterStore = createResultStore();
