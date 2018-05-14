/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-14 14:57:02
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="notFound">
                <h2>404</h2>
                <p>页面别外星人劫走啦~</p>
            </div>
        )
    }
}
export default NotFound