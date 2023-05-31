import { createStore, combineReducers } from "redux";            //imported createstore to create the Redux store ,combineReducer to combine reducers
import { loanReducer } from "../reducer/loanReducer";
import { CardReducer } from "../reducer/CardReducer";

export const configStore = () => {
    const store = createStore(                                    //created store
        combineReducers({ loanReducer, CardReducer }),           //added reducers in object we can add as many we want it will combine reducers
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}