/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 10:21:45
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

import './index.less'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="search-header clear-fix">
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''} 
                    enterHandle={this.enterHandle.bind(this)}/>
                </div>
                <span className="cancel" onClick={(e)=>this.clickHandle(e)}>取消</span>
            </div>
        )
    }
    clickHandle() {
        window.history.back()
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchHeader