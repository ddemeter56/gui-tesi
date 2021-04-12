import { postData } from '../utils/backendComm.js';
import { writable } from 'svelte/store';
import { notifyStore } from './notifyStore.js';




function createGymStore() {
  const { subscribe } = writable(null);

  return {
    subscribe,
    submitForm: (oldForm) => postData('http://localhost/api/register/pt', convertForm(oldForm)).then((result) => {
      console.log(result);
      notifyStore.showNotify(result.error ? 'danger' : 'success', result.message)
    })
  };
}

export const ptRegisterStore = createGymStore();

function convertForm(form) {
  let newForm = {};
  console.log(form);
  newForm.personalTrainer = form.personalTrainer;
  newForm.gymId = form.gymId;
  newForm.certifications = form.certifications;

  newForm.specializations = form.specializations.map(item => {

    let specPriceArray = [];
    form.ptPricing.map(price => {
      if ((item.name || item.customName) === price.selectedSpecialization) {
        specPriceArray.push(price);
      }
    })

    if (specPriceArray.length > 0) {
      return { specialization: item, pricing: specPriceArray };
    }

    return { specialization: item };
  });

  newForm.ptPricing = form.ptPricing.filter((i) => {
    if (i.selectedSpecialization === 'generalPricing') {
      console.log(i);
      return i;
    }
  })


  console.log(newForm);
  return newForm;
}