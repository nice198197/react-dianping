/*
 * @Author: xiongjian 
 * @Date: 2018-05-04 17:16:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-04 17:37:44
 */

import React from 'react'

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    // 输入改变时
    changeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }
    // 回车
    keyUpHandler(e) {
        const value = this.state.value
        if (e.keyCode === 13 && value.trim()) {
            // 提交给父组件并清空数据
            this.props.submitFn(value)
            this.setState({value: ''})
        }
    }
    render() {
        return (
            <div>
               <input 
                    style={{width: '100%', height: '40px', fontSize: '35px'}}
                    value={this.state.value} 
                    onChange={(e) => {this.changeHandler(e)}} 
                    onKeyUp={(e) => {this.keyUpHandler(e)}}
                />
            </div>
        )
    }
}
export default Input;