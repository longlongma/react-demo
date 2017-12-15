import React,{PropTypes} from 'react';
import ToDoListItem from './ToDoListItem';
import Divider from 'antd/lib/divider';
export default class ToDoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var taskList = this.props.data.map(listItem =>
            <ToDoListItem key={listItem.id}
                          taskId={listItem.id}
                          task={listItem.task}
                          complete={listItem.complete}
                          toggleComplete={this.props.toggleComplete}
                          deleteTask={this.props.deleteTask}
                          />  
        )
        let completeTask = this.props.data.filter((item)=>item.complete==="true");

        return(
            <div>
                <ul className="list-group">
                    {taskList}
                </ul>
                <div>
                    <span>总计/已完成：</span>
                    <span>{this.props.data.length}/{completeTask.length}</span>
                </div>
            </div>
            
        )
    }
}