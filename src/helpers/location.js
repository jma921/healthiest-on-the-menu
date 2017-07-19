// @flow
/**
 * Gets the closest restaurant at location (lat, long)
 * 
 * @param {Number} lat 
 * @param {Number} long 
 * @returns {Object} {status: String, result: Object}
 */

const key: string = process.env.REACT_APP_GOOGLE_KEY || 'empty';
async function getRestaurantAtLocation(lat: number, long: number): Object {
  // const key: string = process.env.REACT_APP_GOOGLE_KEY || 'empty';
  // const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&rankby=distance&type=restaurant&key=${key}`;

  // Use for testing locations
  const key: string = process.env.REACT_APP_GOOGLE_KEY || 'empty';
  const hardees = '33.100291,-86.752584';
  const burgerKing = '33.148293,-86.748549';
  const pandaExpress = '33.224799,-86.802137';
  const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${burgerKing}&rankby=distance&type=restaurant&key=${key}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const locationInfo = {
      status: data.status,
      result: data.results[0],
      photoReference: data.results[0].photos[0].photo_reference
    };
    return locationInfo;
  } catch (e) {
    console.log(e);
  }
}

async function getRestaurantDetails(placeId) {
  const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${key}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
  } catch (e) {
    console.log(e);
  }
}

async function getRestaurantImage(reference: string): Promise<any> {
  const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${reference}&key=${key}`;
  try {
    const response = await fetch(url);
    const data = await response;
    const imgUrl = data.url.replace('https://cors-anywhere.herokuapp.com/', '');
    return imgUrl;
  } catch (e) {
    console.log(e);
  }
}

export { getRestaurantAtLocation, getRestaurantImage, getRestaurantDetails };
