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

### actions/Home.js
```
export function fetch(options) {
    return (dispatch) => {
        // 데이터를 이곳에서 가져옴.
        /* 예제 (backbone)
            const model = new Backbone.Model({
                ...
            });
            return (dispatch) => {
                return model.fetch(options).then((data) => {
                    return dispatch({
                        type: FETCH,
                        data
                    })
                })
            }
        */
        // 샘플 데이터 생성
        let data = []
        for (let i = options.startNum; i < options.startNum + options.size; i++) {
            const items = {}
            items.name = `${i} - 김준극`
            items.nickname = `Wise`
            items.mail = `wise7034@gmail.com`
            data.push(items)
        }
        return dispatch({
            type: FETCH,
            state: options.state,
            data
        })
    }
}
```

### containers/Home.js
```
import { connect } from 'react-redux'

import * as Action from './../actions/Home'
import Home from './../components/Home'

export default connect((state) => {
	/*
		이곳에서의 state는 index.js에서 정의한 reducers이고, 여기에서 해당 컴포넌트에서 사용한 부분을 connect한다.
	*/
	return state.Home
}, (dispatch) => {
	return {
		fetch: (options) => {
			return dispatch(Action.fetch(options))
		}
	}
})(Home)
```

### reducers/Home.js
```
import * as Action from './../actions/Home'
const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case Action.FETCH:
			/*
				이곳에서 최초 데이터를 전달하기도 하지만, action에 의하여 데이터 갱신을 처리함.
				==> 예를들어 최초 배열을 전달하고 "더보기"클릭시 concat해서도 사용할 수 있다.

				기존 데이터가 제대로 반영이 안되는 것 같다고 느낄 때, 다음과 같이 Object.assign을 이용해서 객체 복사에 대해서 한번 더 생각해보자.
				const data = action.data
                data.content = state.data.content.concat(action.data.content)
				return Object.assign({}, state, {
                    data: data
                })
			*/
            let newData;
            if (action.state === "init") {
                return {
                    data: action.data
                }
            }
            if (state.data && state.data.length > 0) {
                newData = state.data.concat(action.data)
            } else {
                newData = action.data
            }
            return Object.assign({}, state, {
                data: newData
            })
        default:
            return state
    }
}
```

## 해당 Home 예제

해당 예제는 feed스타일의 컨텐츠. 더보기를 클릭해서 데이터를 더 출력하는 형태로 작업을 했다.
이 과정에서 목록에서 view를 갔다가 이전 버튼 클릭시 현재 값을 유지해야하는 웹의 특성을 맞춰보려고 이런 저런 테스트를 하면서 샘플을 만들어봤다.

현재는 Home에서 Detail 페이지 전환시 scrollTop도 같이 넘겨줘서 작업을 진행했다.
