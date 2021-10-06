import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import {layoutReducer} from './layout.reducer';
import { userReducer } from './user.reducer';

const rootReducer = combineReducers({
    layoutModule: layoutReducer,
    userModule: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));