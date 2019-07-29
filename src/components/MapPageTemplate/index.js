import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import ParkMap from '../Map'
import request from '../../api'
import CustomList from '../Lists'

export class MapPageTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasParkData: false,
      hasGoogleData: false,
      error: false,
      data: [],
      parkData: [],
    }
  }

  searchLocation = (latlng) => {
    // request.getFakeData('fakeurl').then(res => {
    //   this.setState({ data: res.data, hasParkData: true })
    // })
    request.getFakeGoogleData().then(res => {
      let updatedRes = res.default.results
      this.setState({ parkData: updatedRes, hasParkData: true })
    })
    // Promise.all([]).then()
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>{this.props.meta_title}</title>
          <meta name='description' content={this.props.meta_description} />
        </Helmet>
        <section className='is-primary is-bold is-medium'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {this.props.title}
                  </h1>
                </div>
                <p>{this.props.heading}</p>
              </div>
            </div>
          </div>
        </section>

        <section className='map-container'>
          <div className=''>
            <div className='columns'>
              <div className='column'>
                <div className='content'>
                  <CustomList
                    hasData={this.state.hasParkData}
                    parkData={this.state.parkData}
                  />

                </div>
              </div>
              <div className='column'>
                <div className='content pull-behind'>
                  <ParkMap
                    searchLocation={(latlng) => { this.searchLocation(latlng) }}
                    hasData={this.state.hasParkData}
                    parkData={this.state.parkData}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

MapPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
}

export default MapPageTemplate
