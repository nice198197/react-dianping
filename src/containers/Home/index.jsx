/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 16:34:59 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-10 15:04:16
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import BannerDown from '../../components/BannerDown'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import LikeList from './subpage/LikeList'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {   
        return (
            <div className="bg">
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <BannerDown/>
                <Category/>
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                <Ad/>
                <LikeList cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
    componentDidMount() {
        document.title =  `${this.props.userinfo.cityName}美食，${this.props.userinfo.cityName}餐厅餐饮，${this.props.userinfo.cityName}团购，${this.props.userinfo.cityName}...`;
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
)(Home)
