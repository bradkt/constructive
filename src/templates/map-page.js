import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import MapPageTemplate from '../components/MapPageTemplate'
import Layout from '../components/Layout'

const MapPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <MapPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
      />
    </Layout>
  )
}

MapPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MapPage

export const mapPageQuery = graphql`
  query MapPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        }
      }
    }
`
