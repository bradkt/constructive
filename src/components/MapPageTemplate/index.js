import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import ParkMap from '../Map'

const MapPageTemplate = ({
  title,
  heading,
  meta_title,
  meta_description,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='is-primary is-bold is-medium'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
              <h1 className='title'>
                {title}
              </h1>
            </div>
            <p>{heading}</p>
          </div>
        </div>
      </div>
    </section>

    <section className='map-container'>
      <div className='container'>

        <div className=''>
          <div className='columns'>
            <div className='column'>
              <div className='content'>
                <ParkMap />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

MapPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
}

export default MapPageTemplate
