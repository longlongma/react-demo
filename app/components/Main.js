// 主体区域
import React,{PropTypes} from 'react';
import ToDoListArea from './reactToDoList/TodoListArea';
export default class Main extends React.Component{
  render(){
    return(
      <div>
        <ToDoListArea/>
      </div>
    )
  }
}