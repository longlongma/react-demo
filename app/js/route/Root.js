import React,{PropTypes} from 'react';
import {Router,Route,hashHistory,IndexRedirect} from 'react-router';
import Application from '../components/application/Application';
import ToDoArea from '../components/todolist/ToDoArea';
export default class Root extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){

    }
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Application}>
                    <Route path="/todoList" component={ToDoArea}></Route>
                </Route>
            </Router>
        )
    }
}