import * as Action from './../actions/Page2'
const initialState = {}

export default function(state = initialState, action) {
    switch (action.type) {
        case Action.FETCH:
            return {
                data: action.data
            }
        default:
            return state
    }
}