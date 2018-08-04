import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>
        <Menu.Item name='home' icon="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
        name='add listing'
        active={activeItem === 'add listing'}
        onClick={this.handleItemClick}
        icon="plus"
        />
    <Menu.Menu position='right'>
        
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
            icon="power off"
          />
        </Menu.Menu>
      </Menu>
    )
  }
}