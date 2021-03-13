export async function convertLocationToGeoCode(search_text, access_token) {
  const converted = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?` + new URLSearchParams({
    access_token
  }));
  return converted;
}