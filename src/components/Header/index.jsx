/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 16:44:57
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './index.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="common-header">
                <span className="back-icon" onClick={(e)=>{this.clickHandle(e)}}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title || ''}</h1>
            </div>
        )
    }
    clickHandle() {
        hashHistory.push('/')
    }
}

export default Header