/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 19:03:56 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-09 16:52:33
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
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
        var _this = this;
        let geolocation = new BMap.Geolocation();    
        let gc = new BMap.Geocoder();     
        geolocation.getCurrentPosition( function(r) {
               //定位结果对象会传递给r变量  
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {  
                let pt = r.point;    
                gc.getLocation(pt, function(rs){    
                    let addComp = rs.addressComponents;    
                    // 获取位置信息
                    let cityName = addComp.district;
                    if (cityName == null) {
                        cityName = '北京'
                    }
                    _this.props.userInfoActions.save({
                        cityName: cityName
                    })
                    // 更改状态
                    _this.setState({
                        initDone: true
                    })  
                });  
            } else {  
                switch( this.getStatus() ) {  
                    case 2:  
                        alert( '位置结果未知 获取位置失败.' );  
                    break;  
                    case 3:  
                        alert( '导航结果未知 获取位置失败..' );  
                    break;  
                    case 4:  
                        alert( '非法密钥 获取位置失败.' );  
                    break;  
                    case 5:  
                        alert( '对不起,非法请求位置  获取位置失败.' );  
                    break;  
                    case 6:  
                        alert( '对不起,当前 没有权限 获取位置失败.' );  
                    break;  
                    case 7:  
                        alert( '对不起,服务不可用 获取位置失败.' );  
                    break;  
                    case 8:  
                        alert( '对不起,请求超时 获取位置失败.' );  
                    break;  
                        
                }  
            }          
        },  
        {
            enableHighAccuracy: true
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
