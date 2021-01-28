import { postData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';
import { notifyStore } from './notifyStore.js';




function createGymStore() {
	const { subscribe } = writable(null);

	return {
    subscribe,
    submitForm : (oldForm) => postData('http://localhost/api/public/register/gym',convertForm(oldForm)).then((result) => {
      console.log(result);
      notifyStore.showNotify(result.error ? 'danger' : 'success',result.message)
    })
	};
}

export const gymRegisterStore = createGymStore();

function convertForm(form){
  
  let newForm = {};
  let {facilityName,...rest} = form.openings[0];
  newForm.gym = form.gym;
  newForm.gymOpening = rest;
  newForm.gymPricing = form.pricing.filter(price => price.selectedFacility === 'generalPricing')
  
  newForm.facilities = form.facilities.map(item => {
      let {code,...rest} = item;
      let newItem = rest;
      newItem.code = code;
      return {facility : newItem};
  });

  
  newForm.facilities.map(item => { 

      item.ticketPricing = [];
      form.openings.map(open => {
          if((item.facility.name || item.facility.customName) === open.facilityName){
              let {facilityName,...rest} = open;
              item.opening = rest;
          }
      }) 
      form.pricing.map(price => {
          if((item.facility.name || item.facility.customName) === price.selectedFacility){
              let {selectedFacility,...rest} = price;
              item.ticketPricing.push(rest);
          }
      })
  })
  console.log(newForm)
  
  return newForm;
}