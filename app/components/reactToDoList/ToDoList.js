import React,{PropTypes} from 'react';
import ToDoListItem from './ToDoListItem';
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
        return(
            <ul className="list-group">
                {taskList}
            </ul>
        )
    }
}