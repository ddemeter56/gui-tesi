import { writable } from 'svelte/store';
import * as notifier from '../components/Notifier/notifier';

function createCount() {
	const { subscribe } = writable(null);

	return {
		subscribe,
		showNotify: function(type,message){
			notifier.show(type,message,6000)
		}
	};
}

export const notifyStore = createCount();