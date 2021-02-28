
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
async function postData(url = '', data = {}){
  const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers :{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
  });

  return response.json()
}


async function getData(url = ''){
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers :{
      "Content-Type": "application/json",
  }
  });
  return response.json()
}

export { getData as g, postData as p };
//# sourceMappingURL=backendComm-dd574ec8.js.map
