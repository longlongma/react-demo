import React,{PropTypes} from 'react';
import {Button,Input,Row,Col,Form,notification} from 'antd';
import ReactDOM from 'react-dom';
export default class ToDoInput extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.saveNewItem = this.saveNewItem.bind(this);
    }
    saveNewItem(e){
        e.preventDefault();
        console.log(this);
        let element = ReactDOM.findDOMNode(this.refs.newItem);
        let task = element.value;
        console.log(task);
        if(!task){
            notification.open({
                description:'输入内容不能为空',
            });
        }else{
            this.props.saveNewItem(task);
            element.value=""
        }
    }
    handleKeyDown(e){
        if(e.keyCode===13){
            this.saveNewItem(e);
        }
    }
    render(){
        return(
            <div className="todolist-inputItem">
                <Form.Item >
                    <Row>
                        <Col span={20}>
                        <Input id="newItem" ref="newItem" type="text" placeholder="吃饭睡觉打豆豆" onKeyDown={this.handleKeyDown.bind(this)}/>
                        </Col>
                        <Col span={4}>
                        <Button type="primary" className="pull-right" onClick={this.saveNewItem}> 提交</Button>
                        </Col>
                    </Row>
                </Form.Item>
                
            </div>
        )
    }
}