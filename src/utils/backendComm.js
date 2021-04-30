export async function postData(service = '', data = {}, authorization){
  let headers = { "Content-Type": "application/json" };
  if (authorization) {
    headers.Authorization = `Bearer ${authorization}`;
  }
  const response = await fetch(`${API_URL}/api/${service}`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers,
          body: JSON.stringify(data)
  })
  return response.json()
}


export async function getData(service = '', authorization){
  let headers = { "Content-Type": "application/json" };
  if (authorization) {
    headers.Authorization = `Bearer ${authorization}`;
  }
  console.log(API_URL);
  const response = await fetch(`${API_URL}/api/${service}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers,
  })
  return response.json()
}