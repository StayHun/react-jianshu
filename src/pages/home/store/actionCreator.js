import axios from "axios";
import {constants} from './index';
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommedList: result.recommedList,
    writerList: result.writerList,
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: "/api/home.json",
        }).then((response) => {
            const result = response.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: "/api/homeList.json",
            params: {
                page: page
            }
        }).then((response) => {
            const result = response.data.data;
            const action = addHomeList(result, page+1);
            dispatch(action);
        })
    }
}

export const toggleTopShow = (status) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    status
})