/*
 * @Author: xiongjian 
 * @Date: 2018-05-07 16:46:10 
 * @Last Modified by:   xiongjian 
 * @Last Modified time: 2018-05-07 16:46:10 
 */

import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
    var result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    return result;
}
