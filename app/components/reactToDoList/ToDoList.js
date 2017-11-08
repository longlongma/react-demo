import React,{PropTypes} from 'react';
import ToDoListItem from './ToDoListItem';
export default class ToDoList extends React.Component{
    render(){
        return(
            <div>
                <ToDoListItem/>
            </div>
        )
    }
}