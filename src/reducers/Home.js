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