import axios from 'axios';

export const geocodeService = {
    getGeoLocation
}

async function getGeoLocation(address) {
    const API_KEY = 'AIzaSyBj6uH299fNka4OlOEA05hitpszMFv3b1g'
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`

    return await axios.get(url)
        .then(res => {
            return res.data.status === 'OK' ? res.data.results[0].geometry.location : null;
        })

}