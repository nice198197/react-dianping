/*
 * @Author: xiongjian 
 * @Date: 2018-05-14 13:22:51 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 14:30:48
 */

import React from 'react';
import ReactLoading from 'react-loading';
import PureRenderMixin from 'react-addons-pure-render-mixin' 

import './index.less'
class Loading extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="loading">
                <ReactLoading type={this.props.type || "spokes"} color="#e9203d" height={100} width={100}/>
            </div>
        )
    }  
}
 
export default Loading