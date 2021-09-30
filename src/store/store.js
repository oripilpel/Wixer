import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import {layoutReducer} from './layout.reducer';
import { hintsReducer } from './hints.reducer';

const rootReducer = combineReducers({
    layoutModule: layoutReducer,
    hintsModule: hintsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));