/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-10 17:51:26
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={(e)=>{this.clickHandle('北京市')}}>北京市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('上海市')}}>上海市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('广州市')}}>广州市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('深圳市')}}>深圳市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('天津市')}}>天津市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('西安市')}}>西安市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('南京市')}}>南京市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('武汉市')}}>武汉市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('重庆市')}}>重庆市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('厦门市')}}>厦门市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('成都市')}}>成都市</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('长沙市')}}>长沙市</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(cityName) {
        const changeFn = this.props.changeFn
        changeFn(cityName)
    }
}

export default CityList