import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

const Recommend = (props) => {
    const { list } = props;
    return (
        <RecommendWrapper>
            {
                list.map(item => <RecommendItem href="/" key={item.get('id')}><img className='recommendPic' src={item.get('imgUrl')} alt='图片' /></RecommendItem>)
            }
        </RecommendWrapper>
    )
}

const mapStateToProps = (storeState) => ({
    list: storeState.getIn(['home', 'recommedList'])
})

export default connect(mapStateToProps, null)(Recommend);