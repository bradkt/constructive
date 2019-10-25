import * as googleData from '../assets/example.json'
import * as googleDataLite from '../assets/examplelite.json'
import firebase from '../api/firebase.js'
const fetch = window.fetch
const MAP_KEY = process.env.GATSBY_GOOGLE_MAP_KEY
// place_id only if we want reviews.... so prbaly
// const coords = `39.98590952,-82.985029`
// RADIUS: 5000 meters is about 3.1 miles // 8046.72 is 5 miles // 16093.4 is 10 miles // 32186.9 is 20 miles
// to follow up with reviews
const placeFields = 'review'

const baseURL = `https://maps.googleapis.com/maps/api/place`

// get info by placeid
// pay -> https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJwQ4izM3tOIgRcwQ6-ykRwjU&key=AIzaSyDsvV8-dKBAmibELk7VKGKCPDJFc1o1OG0
// address_component, adr_address, formatted_address, geometry, icon, name, permanently_closed, photo, place_id, plus_code, type, url, utc_offset, vicinity
// free -> https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJwQ4izM3tOIgRcwQ6-ykRwjU&fields=address_component,adr_address,formatted_address,geometry,icon,name,permanently_closed,photo,place_id,plus_code,type,url,utc_offset,vicinity&key=AIzaSyDsvV8-dKBAmibELk7VKGKCPDJFc1o1OG0
// get photo from photo_reference
// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

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
  getFakeData: function (url) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(example)
      }, 190)
    })
  },
  getFakeGoogleData: function (url) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(googleDataLite)
      }, 190)
    })
  },
}

export let googleAPI = {
  searchNearByResults: (coords, searchType = 'park', radius = 8046) => {
    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.30326899848464,-83.0740846111958&radius=8046.72&type=park&key=AIzaSyDsvV8-dKBAmibELk7VKGKCPDJFc1o1OG0
    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
    let mapQuery = `${baseURL}/nearbysearch/json?location=${coords.lat},${coords.lng}&radius=${radius}&type=${searchType}&key=${encodeURIComponent(MAP_KEY)}`

    console.log(mapQuery)
    return fetch(mapQuery, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
  searchNearByResultsWithKeywords: (coords, searchType = 'park', radius = 8046.72, keyword = '') => {
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
}

export let constructiveAPI = {
  getParks: (uuid) => {
    console.log('firebase')
    return dispatch => {
      firebase.database.ref().once('value').then(function (snapshot) {
        console.log(snapshot)
      }).catch(error => console.log(error))
    }
  },

}

let example = {
  'geometry': {
    'location': {
      'lat': 40.1541349,
      'lng': -83.0271836,
    },
    'viewport': {
      'northeast': {
        'lat': 40.15542139999999,
        'lng': -83.02347350000001,
      },
      'southwest': {
        'lat': 40.1502754,
        'lng': -83.02842030000001,
      },
    },
  },
  'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
  'id': '20de7b51b7fb4109e065ec8cc75b6e8df9c0ac27',
  'name': 'Highbanks Metro Park',
  'opening_hours': {
    'open_now': true,
  },
  'photos': [
    {
      'height': 1280,
      'html_attributions': [
        '\u003ca href="https://maps.google.com/maps/contrib/117156865495036294979/photos"\u003eHussein Abed\u003c/a\u003e',
      ],
      'photo_reference': 'CmRaAAAALBOpfJeuql_G_585vA0yurkEKQDhfsObrrZ_WjJm46Jq02SquMPvJwxFvvMFdAM6PbT0OLWv73sP4D7S2Ficg9Hw1T55aZFUsMiGgnonluF-M9InZbeZwLjNSB_hct_qEhBj0R78DHW7K82B-UOarxGaGhRr-b6vjAvZgAu1-jpWC6i0dD0hTg',
      'width': 960,
    },
  ],
  'place_id': 'ChIJm5B8yQDzOIgRrJrXoFIXamc',
  'plus_code': {
    'compound_code': '5X3F+M4 Lewis Center, Orange Township, OH, United States',
    'global_code': '86GR5X3F+M4',
  },
  'rating': 4.8,
  'reference': 'ChIJm5B8yQDzOIgRrJrXoFIXamc',
  'scope': 'GOOGLE',
  'types': [ 'park', 'point_of_interest', 'establishment' ],
  'user_ratings_total': 2043,
  'vicinity': '9466 Columbus Pike, Lewis Center',
}
