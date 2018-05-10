/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 16:34:47 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-10 14:19:40
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router' 

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="home-header clear-fix">
                <div className="home-header-left float-left" onClick={(e)=>this.toCity(e)}>
                    <span>{this.props.cityName}</span>
                </div>
                <div className="home-header-drop float-left">
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
    toCity() {
        hashHistory.push('/city')
    }
}

export default HomeHeader