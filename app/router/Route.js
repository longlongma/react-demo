import {Router,Route,hashHistory} from 'react-router';
import Application from '../components/application/Application.js';
import ToDoListArea from '../components/reactToDoList/TodoListArea';
import React from 'react';
// import { render } from 'react-dom';
export default class ARoot extends React.Component {
    
    render() {
        return (
            <Router history = {hashHistory}>
                <Route path="/" component={Application}>
                </Route>
                <Route path="/todolist" component = {ToDoListArea} />
            </Router>
        );
    }
}