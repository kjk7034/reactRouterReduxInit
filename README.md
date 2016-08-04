# react 프로젝트 전 react-router-redux 세팅

react-router-redux를 선택한 이유는 [관련 블로그] (http://wagunblog.com/wp/?p=2093)를 참고. 

## Installation

```
npm install -g create-react-app
create-react-app reactRouterReduxInit
npm install --save react-redux react-router redux react-router-redux
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

## 예제 (index.js)

```
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
```

containers에 있는 App으로 한번 감싸고, IndexRoute를 Home으로 설정하고, home, page1, 기타 에러페이지 정도로 샘플을 생각했다.
그리고 page1에서는 두개의 Component를 사용하는 샘플이다.
 
## 결과
```
npm start
```

![/화면(Home)](http://wagunblog.com/wp/wp-content/uploads/2016/08/reactRouterRedux1.png)

![Page1](http://wagunblog.com/wp/wp-content/uploads/2016/08/reactRouterRedux4.png)

![Error](http://wagunblog.com/wp/wp-content/uploads/2016/08/reactRouterRedux3.png)

## 기타

Link의 경우 html에서 사용하고 싶을때는 Link로 스크립트로 사용할 경우 browserHistory.push를 이용한다. 