import React, { Component, PropTypes } from 'react'

//REDUX
import thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';

import Reducer from 'flux/reducers/reducer'

//DEV TOOLS
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

//Components
import App from './App'

const finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools()
)(createStore);

const store = finalCreateStore(enableBatching(Reducer));

export default class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        )
    }
}
