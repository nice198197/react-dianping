/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 16:35:05 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 14:29:26
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd'
import Loading from '../../../components/Loading'
import { getAdData } from '../../../fetch/home/home'


class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
            {
                this.state.data.length
                ? <HomeAd data={this.state.data}/>
                : <div style={{position:'relative',height:'100px'}}><Loading type="bubbles"/></div>
            }
            </div>
        )
    }
    componentDidMount() {
        // 获取广告数据
        const result = getAdData()
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        })
    }
}

export default Ad