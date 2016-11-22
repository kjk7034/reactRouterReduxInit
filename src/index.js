import React from 'react'
import { render } from 'react-dom'

// Router
import { Router, Route, browserHistory, Redirect } from 'react-router'

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'

// Container
import App from './containers/App';
import Error from './containers/Error';
import Home from './containers/Home';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Detail from './containers/Detail';

// reducers
const reducers = combineReducers({
    Home: require('./reducers/Home').default,
    Page1: require('./reducers/Page1').default,
    Page2: require('./reducers/Page2').default,
    routing: routerReducer
})

// store
const store = createStore(reducers, applyMiddleware(ReduxThunk))

// history
const history = syncHistoryWithStore(browserHistory, store)

render((
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="home" />
            <Route path="/" component={App}>
                <Route path="home" component={Home} />
                <Route path="Page1" component={Page1} />
                <Route path="Page2" component={Page2} />
                <Route path="Detail" component={Detail} />
                <Route path="*" component={Error} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('wrapper'))