/*
 * @Author: xiongjian 
 * @Date: 2018-05-07 16:45:58 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-11 10:47:21
 */

import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
    return result
}