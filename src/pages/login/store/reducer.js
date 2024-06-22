import { fromJS } from 'immutable';
import { constants } from './index';
// import { useNavigate } from 'react-router-dom';

const defaultState = fromJS({
    name: '',
    password: '',
    login: false
});

const reducer = (state = defaultState, action) => {
    // const navigate = useNavigate();

    switch (action.type) {
        case constants.GET_NAME: {
            // if(action.value&&state.get('password')){
            //     return state.merge({
            //         login: true,
            //         name: action.value
            //     });
            // }else{
            //     return state.merge({
            //         login: false,
            //         name: action.value
            //     });
            // }
            return state.set('name', action.value);
        }
        case constants.GET_PASSWORD: {
            // if(state.get('name')&&action.value){
            //     return state.merge({
            //         login: true,
            //         password: action.value
            //     });
            // }else{
            //     return state.merge({
            //         login: false,
            //         password: action.value
            //     });
            // }
            return state.set('password', action.value);
        }
        case constants.LOGIN: {
            // navigate("/");
            return state.set('login', true);
        }
        default: return state;
    }
}

export default reducer;