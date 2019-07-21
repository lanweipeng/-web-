import { SET_NAME, ADD_AGE } from '../action.js'

function reducer1(state = { name: 'lwp', age: 18 }, action) {
    switch (action.type) {
        case SET_NAME:
            let newState = {
                ...state,
                name: action.name
            }
            return newState;
        case ADD_AGE:
            {
                return {
                    ...state,
                    age: action.n + state.age
                }

            }
        default:
            return state
    }
}
export default reducer1