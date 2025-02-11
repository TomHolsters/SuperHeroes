import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import {heroReducer} from './reducers';

const middleWares = compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(
    heroReducer,
    middleWares
);

export default store;