import React from "react";
import { Provider } from 'react-redux';

import Counter from '../containers/Counter';
import List from '../containers/List';

import { BrowserRouter as Router, Route } from "react-router-dom";

import store from '../redux/store';

const Main = () => {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Route path="/:init?" component={Counter} />
                </Router>
                {/* <List /> */}
            </Provider>
        </>
    )
}

export default Main;
