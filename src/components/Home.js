import React, { PropTypes } from 'react'
import {Button, FormGroup, FormControl, Table} from 'react-bootstrap'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  handleUserTmpChange(key, e) {
    let user = this.props.user
    user[key] = e.target.value
    this.props.handleUserTmpChange(user)
  }

  render() {
    let users = this.props.users.map((user,index) =>{
      return(
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.description}</td>
          </tr>
      )
    })

    return (
        <div className="container">
          <h1>hello world!</h1>
          <FormGroup>
            <FormControl type="text"
                         placeholder="輸入名稱"
                         onChange={this.handleUserTmpChange.bind(this, 'name')}
                         value={this.props.user.name}
                />
          </FormGroup>
          <FormGroup>
            <FormControl type="text"
                         placeholder="輸入描述"
                         onChange={this.handleUserTmpChange.bind(this, 'description')}
                         value={this.props.user.description}
                />
          </FormGroup>
          <Button bsStyle="info" onClick={this.props.createUser.bind(this, this.props.user)}>createUser</Button>
          <br/><br/><br/>
          <Table striped bordered>
            <thead>
            <tr>
              <th>名稱</th>
              <th>描述</th>
            </tr>
            </thead>
            <tbody>
            {users}
            </tbody>
          </Table>
        </div>
    )
  }
}