export const FETCH = 'Page2_FETCH'

export function fetch(options) {
    return (dispatch) => {
        const data = [{
            "name": "가"
        }, {
            "name": "나"
        }, {
            "name": "다"
        }, {
            "name": "라"
        }, {
            "name": "마"
        }]
        return dispatch({
            type: FETCH,
            data
        })
    }
}
