import { FETCH_TOKEN_BEGIN, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE } from "./actions";

const initialState = {
    items: [],
    loading: true,
    error: null
};

export const tokenReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TOKEN_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.token
            }
        case FETCH_TOKEN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        default:
            return state;
    }
}