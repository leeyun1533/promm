import React from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase'

export default class HTML extends React.Component {
  render() {
    const firebaseConfig = {
      apiKey: 'AIzaSyC2yDstpNDLZtZhonYOpGNpjdjrlUl5AvM',
      authDomain: 'promm-27855.firebaseapp.com',
      projectId: 'promm-27855',
      storageBucket: 'promm-27855.appspot.com',
      messagingSenderId: '232600417030',
      appId: '1:232600417030:web:1a616ff178d1db6a572487',
      measurementId: 'G-9DT7R7RGEZ',
    }
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
