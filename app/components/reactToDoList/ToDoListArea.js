import React,{PropTypes} from 'react';
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import 'antd/dist/antd.css'; 
import {Button,Icon,Row,Col} from 'antd';
export default class ToDoListArea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    "id":"1",
                    "task":'做一个todolist',
                    "compolete":"false"
                },{
                    "id":"2",
                    "task":'写政协管理员权限问题',
                    "compolete":"false"
                }
            ],
        }
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleAddToDoItem = this.handleAddToDoItem.bind(this);
    }
    generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8)
          return v.toString(16)
        })
      }
    handleToggleComplete(taskId){
        let data = this.state.data;
        for(let item of data){
            if(item.id===taskId){
                item.complete = item.compolete==="true"?"true":"false";
            }
        }
        this.setState({data});
    }
    handleDeleteTask(taskId){
        let data = this.state.data;
        data = data.filter((task)=>task.id!==taskId);
        this.setState({data});
    }
    handleAddToDoItem(){
        let newItem = {
            id:this.generateGUID(),
            task,
            complete:'false'
        }
        let data = this.state.data;
        data = data.concat([newItem]);
        this.setState({data});
    }
    render(){
        return(
            <div className="todolist-area">
               <ToDoList 
               data={this.state.data} 
               toggleCompolete={this.handleToggleComplete} 
               deleteTask = {this.handleDeleteTask}/>    
               <ToDoInput saveNewItem = {this.handleAddToDoItem}/> 
            </div>
        )
    }
}