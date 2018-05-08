/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 17:19:20 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-08 17:21:40
 */

export default {
    getItem: function (key) {
        let value
        try {
            value = localStorage.getItem(key)
        } catch (ex) {
            // 开发环境下提示error
            if (__DEV__) {
                console.error('localStorage.getItem报错, ', ex.message)
            }
        } finally {
            return value
        }
    },
    setItem: function (key, value) {
        try {
            let dataType = typeof value;
            // json对象
            if (dataType === 'object') {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
            // 基础类型
            else if (['number','string','boolean'].indexOf(dataType) >= 0) {
                window.localStorage.setItem(key, value);
            }
            // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            // localStorage.setItem(key, value)
        } catch (ex) {
            // 开发环境下提示 error
            if (__DEV__) {
                console.error('localStorage.setItem报错, ', ex.message)
            }
        }
    }
}