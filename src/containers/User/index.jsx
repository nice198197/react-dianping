/*
 * @Author: xiongjian 
 * @Date: 2018-05-15 15:28:25 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-15 17:35:43
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'
import './index.less'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        return (
            <div>
                <Header title="个人中心"/>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <ul>
                    <li><Link to="/allOrder">全部订单</Link></li>
                    <li><Link to="/toPay">待付款</Link></li>
                    <li><Link to="/canUse">可使用</Link></li>
                    <li><Link to="/refund">退货/售后</Link></li>
                </ul>
                {this.props.children}
                {/* <OrderList username={userinfo.username}/> */}
            </div>
        )
    }
    componentDidMount() {
        // 如果未登录，跳转到登录页面
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)