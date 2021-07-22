const SET_LOGGED_IN = "SET_LOGGED_IN";
const SET_LOGGED_OUT = "SET_LOGGED_OUT";

let initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_IN:
            return {
                ...state,
                isAuth: true
            };
        case SET_LOGGED_OUT:
            return {
                ...state,
                isAuth: false
            };
        default:
            return state;
    }
}

export const setLoggedIn = () => ({ type: SET_LOGGED_IN });
export const setLoggedOut = () => ({ type: SET_LOGGED_OUT });

export default authReducer;