// import React from 'react';
import React,{PropTypes} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
class Component1 extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}
// 导出组件
export default Component1;