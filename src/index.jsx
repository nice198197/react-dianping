/*
 * @Author: xiongjian 
 * @Date: 2018-05-04 17:16:00 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-09 15:32:44
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'


import './static/css/common.less'
import './static/css/font.css'

const store = configureStore()
import RouteMap from './router/routeMap'

ReactDOM.render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('app')
)
