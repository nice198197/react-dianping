/*
 * @Author: xiongjian 
 * @Date: 2018-05-07 16:45:53 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 16:16:31
 */

import * as actionTypes from '../constants/userinfo'
/**
 * actionCreator
 * */
export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}