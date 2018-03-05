import React from 'react'
import { Route, IndexRoute } from 'react-router'
import ToDoListArea from '../components/reactToDoList/TodoListArea';
import Application from './application';

module.exports = (
  <Route path="/" component={Application}>
    {/* <IndexRoute component={Home}/> */}
    <Route path="/todolist" component={ToDoListArea}>
    </Route>
    
  </Route>
)