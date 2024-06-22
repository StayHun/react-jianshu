import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => {
    return{
        type: constants.CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 4)
    }
}

export const actionSearchFocus = () => {
    return {
        type: constants.SEARCH_FOCUS,
    }
}

export const actionSearchBlur = () => {
    return {
        type: constants.SEARCH_BLUR,
    }
}

export const actionSearchEnter = () => {
    return {
        type: constants.SEARCH_ENTER,
    }
}

export const actionSearchLeave = () => {
    return {
        type: constants.SEARCH_LEAVE,
    }
}

export const actionChangePage = () => {
    return {
        type: constants.CHANGE_PAGE,
    }
}
export const getList = () => {
    const temp = (dispatch) => {
        axios({
            method: 'GET',
            url: "/api/headerList.json",
        }).then((response) => {
            const data = response.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log("error");
        })
    };
    // console.log(temp);
    return temp;
}