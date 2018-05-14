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

class SearchHistory extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            historyLists: []
        }
    }
    render() {
        return (
            <div>
            {
                this.state.historyLists.length!==0 ?
                <div className="search-history-container">
                    <h4>搜索记录</h4>
                    <ul className="clear-fix">
                    {this.state.historyLists.map((item,index)=>{
                        return <li key={index} onClick={(e)=>this.clickHandle(item)}>{item}</li>
                    })}
                    </ul>
                    <p onClick={this.clearHistory.bind(this)}>清空搜索历史</p>
                </div>:''
            }
           </div>
        )
    }
    componentDidMount() {
        let historyLists = localStorage.getItem(SEARCHHISTORY)
        if (historyLists!=null) {
            this.setState({
                historyLists: JSON.parse(historyLists)
            })
        }
    }
    clickHandle(keyword) {
        // 调用父组件(Search)方法，跳转到搜索结果页并传递搜索关键字
        this.props.changeFn(keyword)
    }
    clearHistory() {
        localStorage.removeItem(SEARCHHISTORY)
        this.setState({
            historyLists: []
        })
    }
}

export default SearchHistory