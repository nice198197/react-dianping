/*
 * @Author: xiongjian 
 * @Date: 2018-05-15 17:28:19 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-15 17:29:18
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Loading from '../../../components/Loading'

import './index.less'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>待付款</div>
        )
    }

}

export default OrderList