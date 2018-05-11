/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-11 13:48:56
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import SearchHeader from '../../components/SearchHeader'
import SearchHot from '../../components/SearchHot'
import SearchHistory from '../../components/SearchHistory'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="search">
                <SearchHeader/>
                <SearchHot changeFn={(e)=>{this.enterHandle(e)}}/>
                <SearchHistory changeFn={(e)=>{this.enterHandle(e)}}/>
            </div>
        )
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default Search
