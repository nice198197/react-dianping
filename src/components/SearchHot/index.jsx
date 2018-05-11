/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-11 17:52:44
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../../util/localStore'
import { SEARCHHISTORY } from '../../config/localStoreKey'


import './index.less'

let searchHistory = [];
class SearchHot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="search-list-container">
                <ul className="clear-fix">
                    <li>
                        <span onClick={(e)=>{this.clickHandle('烤全羊')}}>烤全羊</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('火锅')}}>火锅</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('星巴克')}}>星巴克</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('蛋糕')}}>蛋糕</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('一只酸奶牛')}}>一只酸奶牛</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('温泉')}}>温泉</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('提拉米苏')}}>提拉米苏</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('德克士')}}>德克士</span>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidMount() {
        // 如果historyLists为空或不存在，表示需要清除记录，则重新开始将searchHistory计数
        let historyLists = localStorage.getItem(SEARCHHISTORY)
        if (historyLists==null) {
            searchHistory = []
        }
    }
    clickHandle(keyword) {
        let historyLists = localStorage.getItem(SEARCHHISTORY)
        searchHistory.push(keyword)
        // 调用父组件方法，跳转到搜索结果页并传递搜索关键字
        this.props.changeFn(keyword)
        // 存入local
        LocalStore.setItem(SEARCHHISTORY,searchHistory) 
    }
}


export default SearchHot