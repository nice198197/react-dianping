/*
 * @Author: xiongjian 
 * @Date: 2018-05-04 17:16:00 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-04 17:19:22
 */

import React from 'react'
import ReactDOM from 'react-dom';

import './static/css/common.less';

import Todo from './container/todo/index.jsx';
class App extends React.Component{
    render() {
        return (
            <Todo/>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
