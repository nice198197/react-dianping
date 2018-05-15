import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Loading from '../../../components/Loading'
import { getInfoData } from '../../../fetch/detail/detai'
import DetailInfo from '../../../components/DetailInfo'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.info
                    ? <DetailInfo data={this.state.info}/>
                    : <div style={{position:'relative',height:'100px'}}><Loading type="bubbles"/></div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取商户信息
        this.getInfo()
    }
    getInfo() {
        const id = this.props.id
        const result = getInfoData(id)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页，获取商户信息出错')
            }
        })
    }
}

export default Info