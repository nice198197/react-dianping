/*
 * @Author: xiongjian 
 * @Date: 2018-05-14 09:37:08 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 12:49:15
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { SEARCHHISTORY } from '../../config/localStoreKey'
import LocalStore from '../../util/localStore'

import './index.less'
 
class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input
                className="search-input" 
                type="text" 
                placeholder="请输入关键字" 
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}
                value={this.state.value}/>
        )
    }
    ChangeHandle(e) {
        // 监控变化
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle(e) {
        // 监控 enter 事件
        if (e.keyCode !== 13) {
            return
        }
        let historyLists = JSON.parse(localStorage.getItem(SEARCHHISTORY))
        if(historyLists==null) {
            historyLists= []
            historyLists.push(e.target.value);
            // 调用父组件（SearchHeader）方法，跳转到搜索结果页并传递搜索关键字
            this.props.enterHandle(e.target.value)
            // 存入local
            LocalStore.setItem(SEARCHHISTORY,historyLists)
        } else {
            // 历史记录不能有重复
            if(historyLists.indexOf(e.target.value)>=0) {
                return
            }
            historyLists.push(e.target.value)
            // 调用父组件（SearchHeader）方法，跳转到搜索结果页并传递搜索关键字
            this.props.enterHandle(e.target.value)
            // 存入local
            LocalStore.setItem(SEARCHHISTORY,historyLists)
        }
    }
}

export default SearchInput