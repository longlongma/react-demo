import React,{PropTypes} from 'react';
import GlobalPanel from '../GlobalPanel';
export default class Application extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <GlobalPanel />
                {this.props.children}
            </div>
        )
    }
}