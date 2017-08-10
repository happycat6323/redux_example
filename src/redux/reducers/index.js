import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {user, users} from './home.js'

export default combineReducers({
  home: combineReducers({
    user,
    users
  }),
  routing: routerReducer
});
