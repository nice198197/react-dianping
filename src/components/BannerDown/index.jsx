/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-10 15:10:36
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router';

import './index.less'
class BannerDown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="banner-down">
                <div className="title">吃喝玩乐，找优惠</div>
                <div className="btns">
                    <Link to="" className="btn-openapp">打开大众点评</Link>
                    <Link to="" className="btn-downloadapp">下载App享特价</Link>
                </div>
            </div>
        )
    }
}

export default BannerDown