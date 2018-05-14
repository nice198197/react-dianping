/*
 * @Author: xiongjian 
 * @Date: 2018-05-11 10:20:11 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 11:03:05
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import SearchList from './subpage/SearchList'
import Header from '../../components/Header'

import './index.less'
class SearchResult extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <Header title='搜索结果'/>
                <div className="searchInput-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <input
                        className="search-input" 
                        type="text" 
                        onFocus={this.focusHandle}
                        readOnly
                        value={params.keyword}/>
                </div>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
    focusHandle() {
        hashHistory.push('/search')
    }
}

export default SearchResult