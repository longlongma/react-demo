import React,{PropTypes} from 'react';
import {Col,Row,Button,Input,Checkbox}  from 'antd';
export default class ToDoListItem extends React.Component{
    constructor(props){
        super(props);
    }
    toggleComplete(){
        this.props.toggleComplete(thi.props.taskId);
    }
    deleteTask(){
        this.props.deleteTask(this.props.taskId);
    }
    render(){
        let itemChecked;
        let task = this.props.task;
        if(this.props.compolete==='true'){
            task = <del>{task}</del>;
            itemChecked = true;
        }else{
            itemChecked = false;
        }
        return(
            <div>
                <Row>
                    <Col span={12}>
                        <Checkbox  checked={itemChecked} onChange={this.toggleComplete}/>
                        {task}
                    </Col>
                    <Col span={12}>
                        <Button type="danger" className="pull-right" onClick={this.deleteTask}>删除</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}