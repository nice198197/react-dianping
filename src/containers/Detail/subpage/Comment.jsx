import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detai'
import Loading from '../../../components/Loading'
import ListComponent from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'

import './index.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}/>
                    : <div style={{position:'relative',height:'100px'}}><Loading type="bubbles"/></div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : <div className="noMore">————没有更多数据————</div>
                }
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstPageData();
    }
    // 获取首页数据
    loadFirstPageData() {
        const id = this.props.id
        const result = getCommentData(0, id)
        this.resultHandle(result)
    }
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(page, id)
        this.resultHandle(result)

        // 增加 page 技术
        this.setState({
            isLoadingMore: false
        })
    }
    // 处理数据
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            // 增加 page 技术
            const page = this.state.page
            this.setState({
                page: page + 1
            })

            const hasMore = json.hasMore
            const data = json.data

            this.setState({
                hasMore: hasMore,
                // 数据拼接
                data: this.state.data.concat(data)
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页获取用户评论数据出错, ', ex.message)
            }
        })
    }
}

export default Comment