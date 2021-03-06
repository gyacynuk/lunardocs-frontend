import { SET_LOADING } from "../actionTypes";

const initialState = {
    loading: true,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload,
            }
        }
        default:
            return state;
    }
}
