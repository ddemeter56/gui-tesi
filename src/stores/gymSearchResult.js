import { getData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';
import { notifyStore } from './notifyStore.js';

const limit = 10;

function createResultStore() {
	const { subscribe, set } = writable({ gyms: [] });

	return {
    subscribe,
		searchGyms: (params) => getData(`http://localhost/api/public/list/gym?${params}`).then((result) => {
			set(result);
		})
	};
}

export const gymSearchResult = createResultStore();

export let queryOptions = {
	page: 1,
	sortByProperty: 'averagePrice',
	sortByMethod: 'ASC'
}

export let searchForm = {};


export function createQuery(obj) {
	let str = '';
	searchForm = obj;
	obj = { ...obj, ...queryOptions, limit };
	for (let key in obj) {
		if(obj[key]) {
			if (str !== '') {
					str += '&';
			}

			str += key + '=' + encodeURIComponent(obj[key]); // encodeURI(obj[key])????
		}
	}
	return str;
}