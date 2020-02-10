import {LOAD_POST} from '../actions/PageActions'

const initialState = {
    data: []
}

export function pageReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOAD_POST:
            return {...state, data: action.payload};
        default:
            return state
    }
}
