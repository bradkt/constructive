import React, { Component } from 'react'
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react'
import request from '../../api'
import CurrentLocation from './currentLocation'
import FlagIcon from '../../assets/img/flag.png'

const mapStyles = {
  width: '95%',
  height: '600px',
  margin: '10px auto',
}

export class ParkMap extends Component {
  state = {
    loading: true,
    error: false,
    showingInfoWindow: false, // Hides or the shows the infoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
    data: [],
  };

  componentDidMount () {
    // get data
    request.getFakeData('fakeurl').then(res => {
      this.setState({ data: res.data })
    })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  };

  createMarkers = (data, i) => {
    return (
      <Marker
        key={i}
        onClick={this.onMarkerClick}
        name={data.info.name}
        title={data.title}
        position={data.position}
        icon={{
          url: data.icon.url,
          anchor: new this.props.google.maps.Point(32, 32),
          scaledSize: new this.props.google.maps.Size(64, 64),
        }}
        tags={data.info.tags}
      />
    )
  }

  render () {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        { this.state.data.map((pg, i) => this.createMarkers(pg, i)) }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >

          <div className=''>
            <h4>{this.state.selectedPlace.name}</h4>
            <div className=''>
              <img className='info-img' src='https://www.fillmurray.com/80/80' />
              <img className='info-img' src='https://www.fillmurray.com/80/80' />
              <img className='info-img' src='https://www.fillmurray.com/80/80' />
            </div>
            <div className=''>
              <p className='review'>{'Shade: 5'}</p>
              <p className='review'>{'Cleanliness: 4.5'}</p>
            </div>
            <span className='tag'>{'skate boarding'}</span>
            <span className='tag'>{'paved trail'}</span>
          </div>

        </InfoWindow>
      </CurrentLocation>
    )
  }

  // render () {
  //   return (
  //     <Map
  //       google={this.props.google}
  //       zoom={9}
  //       style={mapStyles}
  //       initialCenter={{
  //         lat: 39.9859095,
  //         lng: -82.985029,
  //       }}
  //     >
  //       { this.state.data.map((pg, i) => this.createMarkers(pg, i)) }
  //       <InfoWindow
  //         marker={this.state.activeMarker}
  //         visible={this.state.showingInfoWindow}
  //         onClose={this.onClose}
  //       >

  //         <div className=''>
  //           <h4>{this.state.selectedPlace.name}</h4>
  //           <div className=''>
  //             <img className='info-img' src='https://www.fillmurray.com/80/80' />
  //             <img className='info-img' src='https://www.fillmurray.com/80/80' />
  //             <img className='info-img' src='https://www.fillmurray.com/80/80' />
  //           </div>
  //           <div className=''>
  //             <p className='review'>{'Shade: 5'}</p>
  //             <p className='review'>{'Cleanliness: 4.5'}</p>
  //           </div>
  //           <span className='tag'>{'skate boarding'}</span>
  //           <span className='tag'>{'paved trail'}</span>
  //         </div>

  //       </InfoWindow>
  //     </Map>

  //   )
  // }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_MAP_KEY,
})(ParkMap)
