import React from 'react'
import {hashHistory,  Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

import '../public/bootstrap/css/bootstrap.min.css';
import '../public/bootstrap/js/bootstrap.min.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.menuItems = ['/home', '/zoo']
  }

  handleSelect(selectedKey){
    hashHistory.push(this.menuItems[selectedKey])
  }

  render() {
    return (
        <div>
          <Navbar inverse className="app-navbar" onSelect={this.handleSelect.bind(this)}>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={"/"}>Zoo</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={0}>Home</NavItem>
            </Nav>
            <Nav>
              <NavItem eventKey={1}>Zoo</NavItem>
            </Nav>
          </Navbar>
          <div className="container">
            {this.props.children}
          </div>
        </div>
    )
  }
}