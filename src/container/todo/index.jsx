/*
 * @Author: xiongjian 
 * @Date: 2018-05-04 17:15:51 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-04 17:48:59
 */
import React from 'react'
import ReactDOM from 'react-dom';

import List from '../../component/list/index.jsx';
import Input from '../../component/input/index.jsx';

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    inputClick(value) {
        const id = this.state.todos.length;
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })  
        })
    }
    deleteFn(id) {
        let data = this.state.todos;
        this.setState({
            todos: data.filter(item => {
                if (item.id !== id) {
                    return item
                }
            })
        })
    }
    render() {
        return (
            <div>
                <Input submitFn={(e) => this.inputClick(e)}/>
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
            </div> 
        )
    }
}
export default Todo;