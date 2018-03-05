import React, { PropTypes } from 'react';
export default class GlobalPanel extends React.Component {
    componentWillMount(){
        this.state={
            items:[
                {showId:'1000',to:'todolist',title:'待办清单'}
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="header">
                <h3 className="title">react练习</h3>
                <ul className="header_menu">
                    {
                        _.map(this.state.items,(item,index)=>{
                            return(
                                <Link to={item.to} key={index} title={item.title}>
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