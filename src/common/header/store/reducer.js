import {constants} from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS: {
            return state.set('focused', true); // immutable对象的set方法，会结合之前
            // immutable对象的值，返回一个全新的对象
        }
        case constants.SEARCH_BLUR: {
            return state.set('focused', false);
        }
        case constants.SEARCH_ENTER: {
            return state.set('mouseIn', true);
        }
        case constants.SEARCH_LEAVE: {
            return state.set('mouseIn', false);
        }
        case constants.CHANGE_PAGE: {
            let page = state.get('page');
            page = page + 1;
            if(page > state.get('totalPage')){
                page = 1;
            }
            return state.set('page', page);
        }
        case constants.CHANGE_LIST: {
            // return state.set('list', action.data).set('totalPage', action.totalPage);
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        }
        default: return state;
    }
}

export default reducer;