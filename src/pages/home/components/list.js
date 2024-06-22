import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreator } from '../store/index';
import { Link } from 'react-router-dom';

const List = (props) => {
    const { list, getMoreLists, page } = props;

    return (
        <div>
            {
                list.map((item, index) => {
                    return (
                        <Link style={{textDecoration: 'none'}} key={index} to={'./detail/?id=' + item.get('id')}>
                            <ListItem>
                                <img className='pic' src={item.get('imgUrl')} alt='图片' />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })
            }
            <LoadMore onClick={() => getMoreLists(page)}>加载更多</LoadMore>
        </div>
    )
}

const mapStateToProps = (storeState) => ({
    list: storeState.getIn(['home', 'articleList']),
    page: storeState.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => {
    const getMoreLists = (page) => {
        dispatch(actionCreator.getMoreList(page));
    }
    return {
        getMoreLists
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);