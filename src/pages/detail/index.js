import { DetailWrapper, Background, Header, Content } from './style';
import { connect } from 'react-redux';
import { Component } from 'react';
import { actionCreator } from './store';
// import { useSearchParams } from 'react-router-dom';

class Detail extends Component {
    componentDidMount(){
        this.props.getDetail(window.location.search.split('=')[1]);
    }
    render() {
        return (
            <Background>
                <DetailWrapper>
                    <Header>{this.props.title}</Header>
                    <Content>
                        <img className='pic' alt="图片" src={this.props.imgUrl} />
                        <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
                    </Content>
                </DetailWrapper>
            </Background>
        )
    }
}

const mapStateToProps = (storeState) => ({
    title: storeState.getIn(['detail', 'title']),
    imgUrl: storeState.getIn(['detail', 'imgUrl']),
    content: storeState.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => {
    const getDetail = (id) => {
        // console.log(id);
        const action = actionCreator.getArticle(id);
        dispatch(action);
    }
    return{
        getDetail
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);