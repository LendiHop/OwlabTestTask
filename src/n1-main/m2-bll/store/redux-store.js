import {combineReducers, createStore} from "redux";
import authReducer from "../reducers/auth-reducer";
import { reducer as formReducer } from "redux-form";
import {loadState, saveState} from "../../../n2-features/common/utils/localstorage/localstorage";

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
});

const store = createStore(reducers, loadState());

store.subscribe(() => {
    saveState({
       auth: store.getState().auth
    });
});

export default store;