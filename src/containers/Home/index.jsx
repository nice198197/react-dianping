/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 16:34:59 
 * @Last Modified by:   xiongjian 
 * @Last Modified time: 2018-05-08 16:34:59 
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from '../../containers/Home/subpage/Ad'
import LikeList from '../../containers/Home/subpage/LikeList'

class Home extends React.Component {
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
               <HomeHeader/> 
               <Category/> 
               <Ad/> 
               <LikeList/> 
            </div>
        )
    }
}

export default Home
