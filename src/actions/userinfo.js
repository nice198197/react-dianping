/*
 * @Author: xiongjian 
 * @Date: 2018-05-07 16:45:53 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-09 10:43:41
 */

import * as actionTypes from '../constants/userinfo'
/**
 * actionCreator
 * */
// 存入城市
export function save(data) {
    return {
        type: actionTypes.SAVE_CITYNAME,
        data
    }
}