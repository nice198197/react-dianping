/*
 * @Author: xiongjian 
 * @Date: 2018-05-08 16:34:42 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-11 15:58:58
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="list-item clear-fix" onClick={(e)=>{this.handleClick(data.id)}}>
                <div className="item-img-container float-left">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="float-left">{data.title}</h3>
                        <span className="float-right">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">￥{data.price}</span>
                        <span className="mumber float-right">已售{data.mumber}</span>
                    </div>
                </div>
            </div>
        )
    }
    handleClick(id) {
        hashHistory.push('/detail/'+id)
    }
}

export default ListItem