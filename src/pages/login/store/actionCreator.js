// import axios from "axios";
import { constants } from './index';
// import { fromJS } from "immutable";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

export const getName = (value) => ({
    type: constants.GET_NAME,
    value
})

export const getPassword = (value) => ({
    type: constants.GET_PASSWORD,
    value
})

export const getLogin = () => ({
    type: constants.LOGIN
})