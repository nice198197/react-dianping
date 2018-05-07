/*
 * @Author: xiongjian 
 * @Date: 2018-05-07 16:45:58 
 * @Last Modified by:   xiongjian 
 * @Last Modified time: 2018-05-07 16:45:58 
 */

import { get } from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}