import React,{PropTypes} from 'react';
export default class ToDoInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:'',
        }
    }
    render(){
        return(
            <div className="todolist-inputItem">
                <input ref="todoInput" onChange={this._onValueChange.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>ADD</button>
            </div>
        )
    }
    _onValueChange(e){
        this.state.item = e.target.value;
        this.setState({});
    }
    addItem(){
        this.props.addItem(this.state.item);
        this.refs.todoInput.value = "";
    }
}