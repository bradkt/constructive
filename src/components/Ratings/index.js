import React, { Component } from 'react'
import Rating from 'react-rating'

export class _Rating extends Component {
  render () {
    let { score } = this.props
    return (
      <Rating
        emptySymbol='far fa-heart fa-2x purple'
        fullSymbol='fas fa-heart fa-2x pink'
        initialRating={score}
        readonly
      />
    )
  }
}

export default _Rating
