import React,{PropTypes} from 'react';
import {Button,Input,Row,Col,Form,notification} from 'antd';

export default class ToDoInput extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    saveNewItem(){
        
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