import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/route/Root';
import {Router,Route,hashHistory} from 'react-router';
require('./styles/main.scss');


ReactDOM.render(
    <Root/>,
    document.getElementById('content')
);

