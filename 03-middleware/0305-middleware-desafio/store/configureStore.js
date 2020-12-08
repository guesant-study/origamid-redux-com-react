const { compose, applyMiddleware, combineReducers, createStore } = Redux;
import { localStorage } from "./middlewares/localStorage.js";
import { thunk } from "./middlewares/thunk.js";
import token from "./token.js";
import user from "./user.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({ token, user });
const store = createStore(reducer, enhancer);

export default store;
