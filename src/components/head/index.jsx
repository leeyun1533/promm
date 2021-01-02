import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


export function Head({ description, lang, meta, keywords, title }) {
  const firebaseConfig = {
    apiKey: 'AIzaSyC2yDstpNDLZtZhonYOpGNpjdjrlUl5AvM',
    authDomain: 'promm-27855.firebaseapp.com',
    projectId: 'promm-27855',
    storageBucket: 'promm-27855.appspot.com',
    messagingSenderId: '232600417030',
    appId: '1:232600417030:web:1a616ff178d1db6a572487',
    measurementId: 'G-9DT7R7RGEZ',
  }  

    useEffect(() => {
      import('firebase').then(firebase => {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics()
      });
    }, [])

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
