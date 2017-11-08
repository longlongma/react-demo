import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './components/Component1.js';
require('./styles/main.scss');

ReactDOM.render(
    <Component1 />,
    document.getElementById('content')
)