import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App3.scss'
class App extends React.Component{
    componentDidMount() {
        // window.onresize = setHtmlFontSize
        // function setHtmlFontSize () {
        //     const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
        //     const htmlDom = document.getElementsByTagName('html')[0]
        //     htmlDom.style.fontSize = htmlWidth / 10 + 'px'
        // }
        // setHtmlFontSize()
    }

    render(){
        return (
            <div className="App">
                <div className='bar1'></div>
                <div className='pie1'></div>
            </div>
        );
    }
}

export default App;
