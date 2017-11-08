import React,{PropTypes} from 'react';
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
export default class ToDoListArea extends React.Component{
    render(){
        return(
            <div className="todolist-area">
               <ToDoList/>    
               <ToDoInput/> 
            </div>
        )
    }
}