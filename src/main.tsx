import * as React from 'react';
import { LabFesState } from './store';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route,  } from 'react-router';
import { History } from "history";

interface MainProps {
    store: Store<LabFesState>;
    history: History
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <h1>Khmalech Mohammed</h1>
                <h2>m.khmalech@gmail.com</h2>
            </Router>
        </Provider>
    );
}

export default Main
