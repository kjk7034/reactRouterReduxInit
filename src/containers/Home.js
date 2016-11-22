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
