import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import appReducers from '../redux/reducers';

const initialState = {};

const middlewares = [thunk];
const store = createStore(
    appReducers,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
