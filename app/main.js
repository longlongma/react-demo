import React from 'react';
import ReactDOM from 'react-dom';
import ARoot from './router/Route';
import Component1 from './components/Component1.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import routes from './router/routes';
require('./styles/main.scss');

ReactDOM.render(
    // <Component1 />,
    // <ARoot/>,
    ( <Router history={browserHistory} routes = {routes}/>),
    document.getElementById('content')
)