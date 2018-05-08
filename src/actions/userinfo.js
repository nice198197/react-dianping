/*
 * @Author: xiongjian 
 * @Date: 2018-05-07 16:45:53 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-08 19:02:20
 */

import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
}