import React,{PropTypes} from 'react';
import {Col,Row,Button,Input,Checkbox}  from 'antd';
export default class ToDoListItem extends React.Component{
    constructor(props){
        super(props);
    }
    toggleComplete(){
        console.log(this);
        console.log(this.props);
        this.props.toggleComplete(this.props.taskId);
    }
    deleteTask(){
        console.log(this);
        console.log(this.props);
        this.props.deleteTask(this.props.taskId);
    }
    render(){
        let itemChecked;
        let task = this.props.task;
        if(this.props.complete==='true'){
            task = <del>{task}</del>;
            itemChecked = true;
        }else{
            itemChecked = false;
        }
        return(
            <div>
                <Row>
                    <Col span={20}>
                        <Checkbox  checked={itemChecked} onChange={this.toggleComplete.bind(this)}/>
                        {task}
                    </Col>
                    <Col span={4}>
                        <Button type="danger" className="pull-right" onClick={this.deleteTask.bind(this)}>删除</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}