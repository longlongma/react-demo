import React,{PropTypes} from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
export default class ToDoArea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data : [{id:'1',content:'测试'}]
        }
    }
    render() {
        return (
            <div className="todolist-area">
                <ToDoInput addItem = {this.addItem.bind(this)} data = {this.state.data}/>
                <ToDoList data = {this.state.data}/>
            </div>
        )
      }
      addItem(currentItem){
        let item = {
            id: Math.random(),
            content:currentItem
        }
        this.state.data.push(item);
        this.setState({});
      }
}
