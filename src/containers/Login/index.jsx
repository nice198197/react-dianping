/*
 * @Author: xiongjian 
 * @Date: 2018-05-14 15:13:32 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 17:08:15
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div style={{position:'fixed',left:'0',right:'0',top:'0',bottom:'0',background:'#f1f1f1'}}>
                <Header title="登录"/>
                {
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                    ? <div> 等待中 </div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount() {
        // 判断是否已经登录
        this.doCheck()
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }
    // 处理登录之后的事情
    loginHandle(username) {
        // 绑定后拿到action
        const actions = this.props.userInfoActions
        // 拿到userinfo
        let userinfo = this.props.userinfo
        // 添加字段
        userinfo.username = username
        // 触发action
        actions.update(userinfo)

        // 跳转到指定页面
        const router = this.props.params.router
        if (router) {
            hashHistory.push(router)
        } else {
            this.goUserPage()
        }
    }
    // 跳转到用户页
    goUserPage() {
        hashHistory.push('/User')
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)