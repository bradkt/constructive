import React, { Component } from 'react'
import { Marker, Popup, Tooltip } from 'react-leaflet'
import L, { Icon, Marker as LeafletMarker } from 'leaflet'
import FlagIcon from '../../assets/img/flag.png'
import SVG from 'svg.js'
import * as marker from '../../assets/img/map-marker.svg'

export class CustomMarker extends Component {
  render () {
    let { park, index } = this.props
    return (
      <Marker
        position={[park.geometry.location.lat, park.geometry.location.lng]}
        icon={marker2}
      >
        <Tooltip>{ park.name }</Tooltip>
        <Popup>
          <div className=''>
            <h4>{ park.name }</h4>
            <div className=''>
              <p className='review'>{'Shade: 5'}</p>
              <p className='review'>{'Cleanliness: 4.5'}</p>
            </div>
            <span className='tag'>{'skate boarding'}</span>
            <span className='tag'>{'paved trail'}</span>
          </div>
        </Popup>
      </Marker>
    )
  }
}

export default CustomMarker

// '#FFE4B5'
let createLMarker = (number, color, id, className) => {
  let svgTag = <svg version='1.1' id={id} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
    width='512px' height='512px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xmlSpace='preserve'>
    <g className={className}>
      <path style={{ fill: color }} d='M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375
                      C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96
                      c53,0,96,43,96,96S309,256,256,256z' />
      <text x='50%' y='43%' stroke={color} textAnchor='middle' strokeWidth='2px' dy='0em' fontSize='12em'>{number}</text>
    </g>
  </svg>
  return (
    svgTag
  )
}

// createLMarker(3, '#FFE4B5', 'map', 'green-marker')

const basicMarker = new L.Icon({
  iconUrl: require('../../assets/img/map-marker.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})

export class BasicMarker extends Component {
  render () {
    let { number, color } = this.props
    return (
      <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
        width='512px' height='512px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xmlSpace='preserve'>
        <g>
          <path style={{ fill: '#FFD700' }} d='M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375
                      C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96
                      c53,0,96,43,96,96S309,256,256,256z' />
          <text x='50%' y='43%' stroke={color} textAnchor='middle' strokeWidth='2px' dy='0em' fontSize='12em'>{number}</text>
        </g>
      </svg>
    )
  }
}

const marker1 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})

let marker2 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker2.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker2.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker3 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker3.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker3.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker4 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker4.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker4.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker5 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker5.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker5.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker6 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker6.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker6.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker7 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker7.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker7.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker8 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker8.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker8.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker9 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker9.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker9.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker10 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker10.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker10.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker11 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker11.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker11.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker12 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker12.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker12.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker13 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker13.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker13.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker14 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker14.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker14.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker15 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker15.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker15.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker16 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker16.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker16.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker17 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker17.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker17.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker18 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker18.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker18.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker19 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker19.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker19.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})
let marker20 = new L.Icon({
  iconUrl: require('../../assets/img/map-marker20.svg'),
  iconRetinaUrl: require('../../assets/img/map-marker20.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [35, 55],
})

