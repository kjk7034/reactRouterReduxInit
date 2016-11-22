# react 프로젝트 전 react-router-redux 세팅

react-router-redux를 선택한 이유는 [관련 블로그] (http://wagunblog.com/wp/?p=2093)를 참고.

## Installation

```
npm install -g create-react-app
create-react-app reactRouterReduxInit
npm install --save react-redux react-router redux react-router-redux redux-thunk
```

## 폴더 구조

```
src
   - actions
   - components
   - containers
   - reducers
```

기본적으로 폴더 구조는 [redux example] (https://github.com/reactjs/redux/tree/master/examples)을 참고해서 actions, reducers, compnents, containers로 분류했다.

## react-router-redux, react-router 설정 (index.js)

```
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
```

## Redux 사용법

Redux를 사용할 때, action, container, reducer에 대한 이해하기가 어려웠다.
그래서 내가 사용하면서 느낀 부분들을 actions/Home.js, containers/Home.js, reducers.js 를 통해서 간단하게 주석으로 적어봤다.

## 해당 Home 예제

해당 예제는 feed스타일의 컨텐츠. 더보기를 클릭해서 데이터를 더 출력하는 형태로 작업을 했다.
이 과정에서 목록에서 view를 갔다가 이전 버튼 클릭시 현재 값을 유지해야하는 웹의 특성을 맞춰보려고 이런 저런 테스트를 하면서 샘플을 만들어봤다.

현재는 Home에서 Detail 페이지 전환시 scrollTop도 같이 넘겨줘서 작업을 진행했다.
