import { connect } from 'react-redux'

import * as Action from './../actions/Page1'
import Page1 from './../components/Page1'

export default connect((state) => {
	return state.Page1
}, (dispatch) => {
	return {
		fetch: (options) => {
			return dispatch(Action.fetch(options))
		}
	}
})(Page1)
