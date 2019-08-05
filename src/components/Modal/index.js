import React, { Component } from 'react'

export class CustomModal extends Component {
  render () {
    let { isActive, park } = this.props
    return (
      <div className='is-clipped'>
        <div className={isActive ? `modal is-active` : `modal`}>
          <div className='modal-background' />
          <div className='modal-content'>

            <div className='box'>
              <article className='media'>
                <div className='media-left'>
                  <figure className='image is-64x64'>
                    <img src='https://bulma.io/images/placeholders/128x128.png' alt='Image' />
                  </figure>
                </div>
                <div className='media-content'>
                  <div className='content'>
                    <p>
                      <strong>{park.name}</strong>
                      <br />
                      {park.vicinity}
                    </p>
                  </div>
                  <div className='level is-mobile'>
                    <div className='level-left'>
                      <a className='level-item' aria-label='reply'>
                        <span className='icon is-small'>
                          <i className='fas fa-reply' aria-hidden='true' />
                        </span>
                      </a>
                      <a className='level-item' aria-label='like'>
                        <span className='icon is-small'>
                          <i className='fas fa-heart' aria-hidden='true' />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>

          </div>
          <button className='modal-close is-large' aria-label='close' onClick={this.props.close} />
        </div>
      </div>
    )
  }
}

export default CustomModal
