import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import { Icon, Marker as LeafletMarker } from 'leaflet'
import FlagIcon from '../../assets/img/flag.png'
import request from '../../api'
import CustomMarker from '../Markers'

export class ParkMap extends Component {
  constructor (props) {
    super(props)
    this.mapRef = createRef()
    this.markerRef = createRef()
  }

  state = {
    error: false,
    latlng: {
      lat: 39.9859095,
      lng: -82.985029,
    },
    zoom: 9,
    hasLocation: false,
    markerLocation: {
      lat: 39.9859095,
      lng: -82.985029,
    },
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
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  updatePosition = () => {
    const marker = this.markerRef.current
    if (marker != null) {
      let latlng = marker.leafletElement.getLatLng()
      this.setState({ markerLocation: latlng })
    }
  }

  render () {
    return (
      <Map
        className='park-map'
        center={this.state.latlng}
        length={4}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Marker
          draggable
          onDragend={this.updatePosition}
          position={[this.state.markerLocation.lat, this.state.markerLocation.lng]}
          ref={this.markerRef}>
          <Popup minWidth={90}>
            <a className='button is-primary' onClick={() => this.props.searchLocation(this.state.markerLocation)} >Search Here</a>
          </Popup>
        </Marker>

        { this.props.hasData ? this.props.parkData.map((park, i) => {
          return <CustomMarker key={park.id} park={park} index={i} />
        }) : null }

      </Map>
    )
  }
}

export default ParkMap
