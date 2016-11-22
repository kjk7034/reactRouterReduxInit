export const FETCH = 'HOME_FETCH'

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
