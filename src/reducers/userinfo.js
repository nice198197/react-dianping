/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 19:03:50 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 16:09:24
 */

import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        // 存入城市
        case actionTypes.USERINFO_UPDATE:
            return initialState.cityName = action.data
        default:
            return state
    }
}