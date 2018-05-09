/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 13:56:40 
 * @Last Modified by:   xiongjian 
 * @Last Modified time: 2018-05-09 13:56:40 
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="list-container">
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default List