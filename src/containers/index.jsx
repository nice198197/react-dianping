/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 19:03:56 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 17:22:14
 */

import React from 'react'
import Loading from '../components/Loading'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import location from '../util/location'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './index.less'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                className="react-container"
                transitionName="opacity"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                    <div key={this.props.location.pathname} className={this.props.location.pathname}>
                    {
                        this.state.initDone
                        ? this.props.children
                        : <Loading/>
                    }
                    </div>
            </ReactCSSTransitionGroup>
        )
    }
    componentDidMount() {
        location().then(cityName=>{
            this.props.userInfoActions.update({
                cityName: cityName
            })
            // 更改状态
            this.setState({
                initDone: true
            })  
        },cityName=>{
            this.props.userInfoActions.update({
                cityName: cityName
            })
            // 更改状态
            this.setState({
                initDone: true
            })  
        })
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
