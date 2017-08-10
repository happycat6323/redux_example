import { connect } from 'react-redux'

import Home from '../components/Home.js'
import {handleUserTmpChange, createUser} from '../redux/actions/home.js'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.home.user,
    users: state.home.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUserTmpChange: (user) => {
      dispatch(handleUserTmpChange(user))
    },
    createUser: (user) => {
      dispatch(createUser(user))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)