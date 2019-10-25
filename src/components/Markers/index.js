import React, { Component } from 'react'
import { Marker, Popup, Tooltip } from 'react-leaflet'
import { Icon, Marker as LeafletMarker, divIcon } from 'leaflet'

export class CustomMarker extends Component {
  icon = divIcon({
    className: `map-marker-svg${this.props.index}`,
    html: `<svg height="30" width="30">
    <circle
      cx="15"
      cy="15"
      r="14"
      stroke="DarkSlateGrey"
      stroke-width="1"
    />
    <text x="${this.props.index > 9 ? 5 : 9}" y="20" font-size="18px" font-weight="bold">
    ${this.props.index}
    </text>
  </svg>`,
  });

  render () {
    let { park, index } = this.props
    return (
      <Marker
        position={[park.geometry.location.lat, park.geometry.location.lng]}
        icon={this.icon}
      >
        <Tooltip>{ park.name }</Tooltip>
        {/* <Popup>
          <div className=''>
            <h4>{ park.name }</h4>
            <div className=''>
              <p className='review'>{'Shade: 5'}</p>
              <p className='review'>{'Cleanliness: 4.5'}</p>
            </div>
            <span className='tag'>{'skate boarding'}</span>
            <span className='tag'>{'paved trail'}</span>
          </div>
        </Popup> */}
      </Marker>
    )
  }
}

export default CustomMarker
