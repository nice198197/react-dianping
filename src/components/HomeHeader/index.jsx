/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 16:34:47 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-08 18:58:29
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="home-header clear-fix">
                <div className="home-header-left float-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入搜索关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader