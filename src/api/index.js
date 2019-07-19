import FlagIcon from '../assets/img/flag.png'
const fetch = window.fetch
const MAP_KEY = process.env.GATSBY_MAP_KEY
// place_id only if we want reviews.... so prbaly
const coords = `39.98590952,-82.985029`
// RADIUS: 5000 meters is about 3.1 miles // 8046.72 is 5 miles // 16093.4 is 10 miles // 32186.9 is 20 miles
// to follow up with reviews
const placeFields = 'review'

const baseURL = `https://maps.googleapis.com/maps/api/place`

export default {
  GET: function (url) {
    return fetch(url)
      .then(request => {
        if (request.ok) {
          return request.json()
        }
        throw new Error('Network response was not ok.')
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  searchNearByResults: (searchType = 'park', radius = 8046.72) => {
    let mapQuery = `${baseURL}/nearbysearch/json?location=${coords}&radius=${radius}&type=${searchType}&key=${MAP_KEY}`
    return fetch(mapQuery)
      .then(request => {
        if (request.ok) {
          return request.json()
        }
        throw new Error('Network response was not ok.')
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  searchNearByResultsWithKeywords: (searchType = 'park', radius = 8046.72, keyword = '') => {
    let mapQuery = `${baseURL}/nearbysearch/json?location=${coords}&radius=${radius}&type=${searchType}&keyword=${keyword}&key=${MAP_KEY}`
    return fetch(mapQuery)
      .then(request => {
        if (request.ok) {
          return request.json()
        }
        throw new Error('Network response was not ok.')
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getPlaceDetails: (placeID) => {
    let placeDetails = `${baseURL}/details/json?placeid=${placeID}4&fields=${placeFields}&key=${MAP_KEY}`
    return fetch(placeDetails)
      .then(request => {
        if (request.ok) {
          return request.json()
        }
        throw new Error('Network response was not ok.')
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getFakeData: function (url) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(testmarkers)
      }, 190)
    })
  },
  getFakeGoogleData: function (url) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(testmarkers)
      }, 190)
    })
  },
}

let testmarkers = {
  data: [
    {
      title: 'Kenyatta International',
      latlng: {
        lat: 39.98,
        lng: -82.78,
      },
      icon: { url: FlagIcon },
      info: {
        name: 'Kenyatta International Convention Centre',
        images: [],
        ratings: [{ name: 'bathrooms', rating: 7 }],
        tags: ['field', 'paved trail'],
      },
    },
    {
      title: 'Columbus Ohio',
      latlng: {
        lat: 39.98,
        lng: -82.48,
      },
      icon: { url: FlagIcon },
      info: {
        name: 'Columbus Ohio parks and rec downtown',
        images: [],
        ratings: [{ name: 'shade', rating: 8 }],
        tags: ['grills', 'covered picnicing'],
      },
    },
    {
      title: 'Pickerionton Ohio',
      latlng: {
        lat: 39.98,
        lng: -82.08,
      },
      icon: { url: FlagIcon },
      info: {
        name: 'Pickerington center for kids who can read good',
        images: [],
        ratings: [{ name: 'sitting', rating: 9 }],
        tags: ['climbing wall', 'non-paved trail'],
      },
    },
  ],
}

