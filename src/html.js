import React, {Component} from 'react'
import favicon from './assets/img/favicon.ico'

export default class HTML extends Component {
  render () {
    return (
      <html lang='en' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' />
          {/* <link rel='stylesheet' href='https://unpkg.com/@kunukn/react-collapse/dist/Collapse.umd.css' /> */}
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
