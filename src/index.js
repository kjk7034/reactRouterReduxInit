import React from 'react'
import { render } from 'react-dom'

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Redux
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Container
import { App, Home, Page1, Error } from './containers';

// reducers
const reducer = combineReducers({
    //...reducers,
    routing: routerReducer
})

// store
const store = createStore(
    reducer
)

// history
const history = syncHistoryWithStore(browserHistory, store)

render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="page1" component={Page1}/>
                <Route path="*" component={Error}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('wrapper'))