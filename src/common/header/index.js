import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo,
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem
} from "./style";
import { CSSTransition } from "react-transition-group";
import { actionCreator } from './store';
import { connect } from "react-redux";
import { useRef } from "react";
import '../../statics/iconfont/iconfont.css';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { focused, mouseIn, list, page, handleFocus, handleBlur, handleEnter, handleLeave, handleChangePage, login, name } = props;
    const ref = useRef();
    return (
        <HeaderWrapper>
            <Link to="/">
                <Logo />
            </Link>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                {
                    login ? <NavItem className="right">退出</NavItem> : <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                }
                <NavItem className="right">
                    <span className="iconfont icon-Aa"></span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition timeout={300} in={focused} classNames="slide">
                        <NavSearch className={focused ? 'focused' : ''}
                            onFocus={e => handleFocus(e, list)} onBlur={handleBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <span className={focused ? 'iconfont zoom focused icon-fangdajing' : 'iconfont zoom icon-fangdajing'}></span>
                    <SearchInfo style={{ display: (focused || mouseIn) ? 'block' : 'none' }}
                        onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch onClick={e => handleChangePage(e, ref)} style={{ cursor: 'pointer' }}>
                                <span ref={ref} className="iconfont icon-shuaxin spin"></span>
                                换一批
                            </SearchInfoSwitch>
                        </SearchInfoTitle>
                        <div>
                            {
                                list.map((item, index) => {
                                    if (index >= (page - 1) * 4 && index < page * 4) {
                                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                    }
                                    return <span key={item}></span>;
                                })
                            }
                        </div>
                    </SearchInfo>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                    <span className="iconfont icon-line-quillpenyumaobi"></span>&nbsp;
                    写文章
                </Button>
                {
                    login ? <Button className="reg">{name}</Button> : <Button className="reg">注册</Button>
                }
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (storeState) => {
    return {
        focused: storeState.getIn(['header', 'focused']), // 二维数组
        mouseIn: storeState.getIn(['header', 'mouseIn']),
        list: storeState.getIn(['header', 'list']),
        page: storeState.getIn(['header', 'page']),
        login: storeState.getIn(['login', 'login']),
        name: storeState.getIn(['login', 'name'])
    }
}

const mapDispatchToProps = (dispatch) => {
    const handleFocus = (e, list) => {
        if (list.size === 0) {
            dispatch(actionCreator.getList(list));
        }
        dispatch(actionCreator.actionSearchFocus());
    }
    const handleBlur = (e) => {
        const action = actionCreator.actionSearchBlur();
        dispatch(action);
    }
    const handleEnter = (e) => {
        const action = actionCreator.actionSearchEnter();
        dispatch(action);
    }
    const handleLeave = (e) => {
        const action = actionCreator.actionSearchLeave();
        dispatch(action);
    }
    const handleChangePage = (e, ref) => {
        let originAngle = ref.current.style.transform.replace(/[^0-9]/ig, '');
        if (originAngle) {
            originAngle = parseInt(originAngle, 10);
        } else {
            originAngle = 0;
        }
        ref.current.style.transform = `rotate(${originAngle + 360}deg)`;
        const action = actionCreator.actionChangePage();
        dispatch(action);
    }
    return {
        handleFocus,
        handleBlur,
        handleEnter,
        handleLeave,
        handleChangePage
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);