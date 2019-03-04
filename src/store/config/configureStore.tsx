import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import accountReducer, { initialState as accountInitialState } from '../reducers/account'
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const initialState = {
    account: accountInitialState,
    router: null as RouterState
}

export type State = typeof initialState;

export default function configureStore() {
    const store = createStore(
        combineReducers({
            account: accountReducer,
            router: connectRouter(history),
        }),

        composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    );
    return store;
}