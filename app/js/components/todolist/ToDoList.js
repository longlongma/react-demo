import React,{Proptypes} from 'react';
export default class ToDoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.data.map((item,index)=>{
                            return(
                                <li key={item.id} className="list_item">{item.content}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}