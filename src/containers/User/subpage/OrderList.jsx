/*
 * @Author: xiongjian 
 * @Date: 2018-05-15 17:28:26 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-15 17:35:41
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData } from '../../../fetch/user/orderlist'
import OrderListComponent from '../../../components/OrderList'
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
            <div className="order-list-container">
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data}/>
                    : <div style={{position:'relative',height:'100px'}}><Loading type="bubbles"/></div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取订单数据
        const username = this.props.username
        if (username) {
            this.loadOrderList(username)
        }
    }
    loadOrderList(username) {
        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            // 获取数据
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
    }
}

export default OrderList