// This is for interacting with the APIs
const key = 'ph7UL0bjPujd5BR30Kl4BNIm4tCoj0NS';

//  Get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query =  `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// Now when we're requesting data from the end points to this API we're going to have to do two
// different things. 1) We need to make a requenst to a certain end point to get city info. and 
// in that city info there going to be a city code. 2)Then we're going to use that city code to 
// make a second request to a weather conditions API endpoints. We're going to send that city 
// code to it so it can identify where we wnat to get the weather and it will send us the weather
// conditions back for that area

// Get city information
// async because we're going to make requests in here and we want this to return a promise
const getCity = async(city) => {


    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// getCity('manchester').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err)); 


