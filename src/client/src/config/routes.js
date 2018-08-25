import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from '../redux/store';
import MainContainer from './MainContainer/MainContainer';
import {Home} from '../pages';

const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <MainContainer>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </MainContainer>
        </BrowserRouter>
    </Provider>
);

export default routes;