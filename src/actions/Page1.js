export const FETCH = 'Page1_FETCH'

export function fetch(options) {
    return (dispatch) => {
        const data = [{
            "count": 1
        }, {
            "count": 22
        }, {
            "count": 333
        }, {
            "count": 4444
        }, {
            "count": 55555
        }]
        return dispatch({
            type: FETCH,
            data
        })
    }
}
