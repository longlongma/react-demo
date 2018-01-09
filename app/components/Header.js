import React,{PropTypes} from 'react';
export default class Header extends React.Component{
  render(){
    return(
      <div>
        <div className="header">
          <h3 className="title">react练习</h3>
          <ul className="header_menu">
            <li>ToDoList</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
    )
  }
}