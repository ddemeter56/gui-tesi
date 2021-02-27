
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { g as getData } from './backendComm-94668a92.js';

function createGymCodes() {

  return {
    getFacilityCodes: () => getData('http://localhost/api/public/codes/facility').then((result) => {
      return result;
    })
  }
}


const gymCodes = createGymCodes();

export { gymCodes as g };
//# sourceMappingURL=gymCodes-387e80a6.js.map
