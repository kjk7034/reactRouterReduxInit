import { connect } from 'react-redux'

import * as Action from './../actions/Page2'
import Page2 from './../components/Page2'

export default connect((state) => {
	return state.Page2
}, (dispatch) => {
	return {
		fetch: (options) => {
			return dispatch(Action.fetch(options))
		}
	}
})(Page2)
