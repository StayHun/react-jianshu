import { WriterList, WriterHead, WriterItem } from '../style';
import '../../../statics/iconfont/iconfont.css';
import { connect } from 'react-redux';

const Writer = (props) => {
    const { list } = props;
    return (
        <WriterList>
            <WriterHead>
                <span className='writer'>推荐作者</span>
                <div className='writerChange'>
                    <span className="iconfont icon-shuaxin"></span>
                    换一批
                </div>
            </WriterHead>
            {
                list.map((item) => {
                    return (
                        <WriterItem key={item.get('id')}>
                            <img className='writerPic' src={item.get('imgUrl')} alt='图片' />
                            <div className='writerContent'>
                                <div className='writerName'>
                                    <span className='name'>{item.get('writer')}</span><span className='action'>{item.get('status')}</span>
                                </div>
                                <div className='fans'>{item.get('fans')}</div>
                            </div>
                        </WriterItem>
                    )
                })
            }
            <WriterItem>
                <img className='writerPic' src='https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='图片' />
                <div className='writerContent'>
                    <div className='writerName'>
                        <span className='name'>卢璐说</span><span className='action'>关注</span>
                    </div>
                    <div className='fans'>写了2221.7k字 · 34.8k喜欢</div>
                </div>
            </WriterItem>
        </WriterList>
    )
}

const mapStateToProps = (storeState) => ({
    list: storeState.getIn(['home', 'writerList'])
})

export default connect(mapStateToProps, null)(Writer);