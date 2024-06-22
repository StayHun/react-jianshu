import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
    title: '',
    imgUrl: '',
    content: ''
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.DETAIL_ARTICLE: {
            return state.merge({
                'title': action.data.get('title'),
                'imgUrl': action.data.get('imgUrl'),
                'content': action.data.get('content')
            })
        }
        default: return state;
    }
}

export default reducer;