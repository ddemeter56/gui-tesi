export async function postData(url = '', data = {}, authorization){
  let headers = { "Content-Type": "application/json" };
  if (authorization) {
    headers.Authorization = `Bearer ${authorization}`;
  }
  const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers,
          body: JSON.stringify(data)
  })

  return response.json()
}


export async function getData(url = '', authorization){
  let headers = { "Content-Type": "application/json" };
  if (authorization) {
    headers.Authorization = `Bearer ${authorization}`;
  }
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers,
  })
  return response.json()
}