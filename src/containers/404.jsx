/*
 * @Author: xiongjian 
 * @Date: 2018-05-09 15:42:09 
 * @Last Modified by:   xiongjian 
 * @Last Modified time: 2018-05-09 15:42:09 
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h1>404 not found page</h1>
        )
    }
}
export default NotFound