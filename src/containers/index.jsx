/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 19:03:56 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-11 14:06:34
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import location from '../util/location'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 

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
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>正在加载...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        location().then(cityName=>{
            this.props.userInfoActions.saveCity({
                cityName: cityName
            })
            // 更改状态
            this.setState({
                initDone: true
            })  
        },cityName=>{
            this.props.userInfoActions.saveCity({
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
