import React,{PropTypes} from 'react';
export default class ToDoListItem extends React.Component{
    render(){
        return(
            <div>
                    <li>
                       <input type="checkbox" />
                       <span>找工作ceshi</span>
                       <button>删除</button>
                    </li>
            </div>
        )
    }
}