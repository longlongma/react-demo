import React, { PropTypes } from 'react';
import {Link} from 'react-router';
export default class GlobalPanel extends React.Component {
    componentWillMount(){
        this.state={
            items:[
                {showId:'1000',to:'todolist',title:'待办清单'},
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="header">
                <h3 className="title">react</h3>
                <ul className="header_menu">
                    {
                        this.state.items.map((item,index)=>{
                            return(
                                <Link to={item.to} className="global_menu" key={index} title={item.title}>
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        )
    }
}