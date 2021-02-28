
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { g as getData } from './backendComm-58342082.js';

function createGymCodes() {

  return {
    getFacilityCodes: () => getData('http://localhost/api/public/codes/facility').then((result) => {
      return result;
    })
  }
}


const gymCodes = createGymCodes();

export { gymCodes as g };
//# sourceMappingURL=gymCodes-92324335.js.map
