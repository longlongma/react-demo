import React,{PropTypes} from 'react';
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import 'antd/dist/antd.css'; 
export default class ToDoListArea extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="todolist-area">
               <ToDoList />    
               <ToDoInput/> 
            </div>
        )
    }
}