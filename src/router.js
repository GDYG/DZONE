import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import App from './components/App.js';
import Nevent from './routes/Nevent.js';
const RouterConfig = (({ history }) => (
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/event' component={Nevent}/>
        </Switch>
    </Router>
));

export default RouterConfig;