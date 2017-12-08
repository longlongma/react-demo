import React,{PropTypes} from 'react';
import {Button,Input,Row,Col,Form,notification} from 'antd';

export default class ToDoInput extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    saveNewItem(e){
        e.preventDefault();
        let element = this.refs.newItem;
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
                <Input id="newItem" ref="newItem" type="text" placeholder="吃饭睡觉打豆豆"/>
                <Button type="primary" className="pull-right" onClick={this.saveNewItem}> 提交</Button>
            </div>
        )
    }
}