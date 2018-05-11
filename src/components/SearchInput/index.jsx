import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { SEARCHHISTORY } from '../../config/localStoreKey'
import LocalStore from '../../util/localStore'

import './index.less'

let searchHistory = []; 
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
    componentDidMount() {
        // 默认值
        this.setState({
            value: this.props.value || ''
        })
        let historyLists = localStorage.getItem(SEARCHHISTORY)
        if (historyLists==null) {
            searchHistory = []
        }
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
        this.props.enterHandle(e.target.value)
        let historyLists = localStorage.getItem(SEARCHHISTORY)
        if(historyLists) {
            historyLists.concat(historyLists)
        }
        searchHistory.push(e.target.value);
        LocalStore.setItem(SEARCHHISTORY,searchHistory)
        
    }
}

export default SearchInput