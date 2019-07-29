import React, { Component } from 'react'
import CustomModal from '../Modal'
// import Collapse, { Panel } from 'rc-collapse'
// import 'rc-collapse/assets/index.css'

class ListItem extends Component {
  state = {
    park: {},
  }
  componentDidMount () {
    this.setState({
      park: {...this.props.park},
    })
  }
  render () {
    let park = this.state.park
    let i = this.props.i
    return (
      <div className='list-item' key={park.id}>
        {park.name} <a className='button is-primary is-small' onClick={() => this.props.displayModal(park, i)}>{` ${i} `}</a>
      </div>
    )
  }
}

export class CustomList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false,
      activePark: {},
    }
  }

  createListItems = (park, i) => {
    return (
      <ListItem park={park} i={i} displayModal={(park, i) => this.displayModal(park, i)} />
    )
  }

  displayModal = (park, i) => {
    console.log('displayModal: ', park)
    this.setState({
      isModalOpen: true,
      activePark: { ...park, index: i },
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      activePark: { },
    })
  }

  render () {
    let { parkData, hasParkData } = this.props
    let ListOfParks = parkData.map((park, i) => {
      return this.createListItems(park, i)
    })

    return (
      <React.Fragment>

        <CustomModal isActive={this.state.isModalOpen} park={this.state.activePark} close={this.closeModal} />
        <div className='list is-hoverable'>
          {ListOfParks}
        </div>
      </React.Fragment>
    )
  }
}

export default CustomList
