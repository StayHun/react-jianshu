import { constants } from './index';
import axios from 'axios';
import { fromJS } from "immutable";

const getArticleData = (data) => {
    return {
        type: constants.DETAIL_ARTICLE,
        data: fromJS(data)
    }
}
export const getArticle = (id) => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: '/api/detail.json?id=' + id
        }).then((res) => {
            // console.log(res);
            dispatch(getArticleData(res.data.data));
        })
    }
}