import { TopicWrapper, TopicItem } from '../style';
import svg1 from '../../../statics/svg/svg1.svg';
import { connect } from 'react-redux';

const Topic = (props) => {
    const { list } = props;
    return(
        <TopicWrapper>
            {
                list.map((item) => {
                    return(
                        <TopicItem key={item.get('id')}>
                            <img src={require(`../../../statics/svg/${item.get('svgUrl')}.svg`)} alt="热点" className='svg'/>
                            {item.get('title')}
                        </TopicItem>
                    )
                })
            }
            <TopicItem><img src={require('../../../statics/svg/svg1.svg').default} alt="热点" className='svg'/>社会热点</TopicItem>
            <TopicItem><img src={svg1} alt="热点" className='svg'/>社会热点</TopicItem>
        </TopicWrapper>
    )
}

const mapStateToProps = (storeState) => ({
    list: storeState.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic);