import React from 'react'
import ReactDOM from 'react-dom'
import Rate from 'react-tiny-rate'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './index.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        let star = this.props.star || 0
        if (star > 5) {
            star = star % 5
        }

        return (
            <Rate value={star} theme="red" animate='3' readonly={true}></Rate>
        )
    }
}

export default Star