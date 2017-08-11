import { connect } from 'react-redux'

import Home from '../components/Home.js'
import {handleUserTmpChange, setUser} from '../redux/actions/home.js'

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
    setUser: (user) => {
      dispatch(setUser(user))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)