import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './redux/store/config.js'
import App from './components/App.js'
import Home from './containers/Home.js'

const history = syncHistoryWithStore(hashHistory, store)

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route name="home" path="home" component={Home}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
)