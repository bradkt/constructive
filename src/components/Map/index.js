import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon, Marker as LeafletMarker } from 'leaflet'
import request from '../../api'
import FlagIcon from '../../assets/img/flag.png'

const mapStyles = {
  width: '95%',
  height: '600px',
  margin: '10px auto',
}

export class ParkMap extends Component {
  constructor (props) {
    super(props)
    this.mapRef = createRef()
  }

  state = {
    loading: true,
    error: false,
    data: [],
    latlng: {
      lat: 39.9859095,
      lng: -82.985029,
    },
    zoom: 9,
    hasLocation: false,
    currentLocation: { },
  };

  componentDidMount () {
    this.getCurrentLocation()
  }

  getCurrentLocation = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = (e) => {
    e = {...e, info: {name: 'You are here'}}
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
      currentLocation: e,
    })

    request.getFakeData('fakeurl').then(res => {
      this.setState({ data: res.data })
    })
  }

  createMarker = (data, key) => {
    return (
      <Marker
        key={key}
        position={[data.latlng.lat, data.latlng.lng]}
      >
        <Popup>
          <p>{ data.info.name }</p>
          <img src='smiley.gif' alt='Smiley face' height='42' width='42' />
        </Popup>
      </Marker>
    )
  }

  render () {
    console.log('haslocation: ', this.state.hasLocation)
    let currentLocation = this.state.hasLocation ? this.createMarker(this.state.currentLocation, 'currentLocation') : null
    return (
      <Map
        style={mapStyles}
        center={this.state.latlng}
        length={4}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        { currentLocation }
        { this.state.data.map((park, i) => {
          return this.createMarker(park, i)
        })}

      </Map>
    )
  }
}

export default ParkMap
