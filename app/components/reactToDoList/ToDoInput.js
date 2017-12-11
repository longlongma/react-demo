import React,{PropTypes} from 'react';
import {Button,Input,Form,Row,Col,Form,notification} from 'antd';
import ReactDOM from 'react-dom';
export default class ToDoInput extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    saveNewItem(e){
        e.preventDefault();
        let element = ReactDOM.findDOMNode(this.refs.newItem);
        let task = element.value;
        if(!task){
            notification.open({
                description:'输入内容不能为空',
            });
        }else{
            this.props.saveNewItem(task);
            element.value=""
        }
    }
    render(){
        return(
            <div>
                <Form.Item>
                    <Input id="newItem" ref="newItem" type="text" placeholder="吃饭睡觉打豆豆"/>
                    <Button type="primary" className="pull-right" onClick={this.saveNewItem}> 提交</Button>
                </Form.Item>
                
            </div>
        )
    }
}