import { getData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';

export const pageSize = 50;

function createResultStore() {
	const { subscribe, set } = writable({ gyms: [] });

	return {
    subscribe,
		searchGyms: (params) => getData(`public/list/gym?${params}`).then((result) => {
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
	obj = { ...obj, ...queryOptions, pageSize };
	for (let key in obj) {
		if(obj[key]) {
			if (str !== '') {
					str += '&';
			}

			str += key + '=' + encodeURIComponent(obj[key]);
		}
	}
	return str;
}