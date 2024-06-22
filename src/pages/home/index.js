import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style';
import picture from '../../statics/pic.jpg';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';

class Home extends PureComponent {
    componentDidMount() {
        const { changeHomeData } = this.props;
        changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
    handleScrollTop = () => {
        window.scrollTo(0, 0)
    }

    bindEvents = () => {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
    render() {

        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={picture} alt='风景' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackToTop onClick={this.handleScrollTop}>回到顶部</BackToTop>: <></>}
            </HomeWrapper>
        )
    }
}


const mapStateToProps = (storeState) => ({
    showScroll: storeState.getIn(['home', 'showScroll'])
})
const mapDispatchToProps = (dispatch) => {
    const changeHomeData = () => {
        const action = actionCreator.getHomeInfo()
        dispatch(action);
    }
    const changeScrollTopShow = () => {
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreator.toggleTopShow(true))
        }else{
            dispatch(actionCreator.toggleTopShow(false))
        }
    }
    return {
        changeHomeData,
        changeScrollTopShow
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);