import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import App from './components/App.js';
import Nevent from './routes/Nevent.js';
import SeeEvent from './routes/SeeEvent.js';
import SelectDateSeeEvent from './routes/SelectDateSeeEvent.js';

const RouterConfig = (({ history }) => (
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/event' component={Nevent}/>
            <Route path='/seeEvent' component={SeeEvent}/>
            <Route path='/selectDateSeeEvent' component={SelectDateSeeEvent}/>
        </Switch>
    </Router>
));

export default RouterConfig;