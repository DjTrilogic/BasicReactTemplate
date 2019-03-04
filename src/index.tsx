import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/config/configureStore';
import { StoreContext } from 'redux-react-hook';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { login } from './store/actions/account';
import { Switch, Route } from 'react-router';
import { history } from './store/config/configureStore';
import { ManagerModule } from './modules/manager';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { LoginModule } from './modules/login';

const store = configureStore();

store.dispatch(login({ uid: "abbass" }));

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/manager" component={ManagerModule} />
                    <Route path="/login" component={LoginModule} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    </StoreContext.Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
