/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 13:12:27
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../../util/localStore'
import { SEARCHHISTORY } from '../../config/localStoreKey'

import './index.less'

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
                        <span onClick={(e)=>{this.clickHandle('乡村基')}}>乡村基</span>
                    </li>
                    <li>
                        <span onClick={(e)=>{this.clickHandle('德克士')}}>德克士</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(keyword) {
        let historyLists = JSON.parse(localStorage.getItem(SEARCHHISTORY))
        // 根据localStorage是否存在SEARCHHISTORY，来判断是之前是否有清空操作
        if (historyLists==null) {
            historyLists = []
            historyLists.push(keyword)
            // 调用父组件方法，跳转到搜索结果页并传递搜索关键字
            this.props.changeFn(keyword)
            // 存入local
            LocalStore.setItem(SEARCHHISTORY,historyLists) 
        } else {
            // 历史记录不能有重复
            if(historyLists.indexOf(keyword)>=0) {
                return
            }
            // searchHistory = searchHistory.concat(historyLists)
            historyLists.push(keyword)
            
            // 调用父组件(Search)方法，跳转到搜索结果页并传递搜索关键字
            this.props.changeFn(keyword)
            // 存入local
            LocalStore.setItem(SEARCHHISTORY,historyLists) 
        }
    }
}

export default SearchHot