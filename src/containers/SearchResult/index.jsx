/*
 * @Author: xiongjian 
 * @Date: 2018-05-11 10:20:11 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-11 11:11:27
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/SearchList'

class SearchResult extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
}

export default SearchResult