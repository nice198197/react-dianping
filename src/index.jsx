/*
 * @Author: xiongjian 
 * @Date: 2018-05-04 17:16:00 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-07 16:36:33
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'

// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('app')
)
