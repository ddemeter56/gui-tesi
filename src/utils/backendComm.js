export async function postData(url = '', data = {}){
  const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers :{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
  })

  return response.json()
}


export async function getData(url = ''){
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers :{
      "Content-Type": "application/json",
  }
  })
  return response.json()
}