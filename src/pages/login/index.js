import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreator } from './store';
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const getRegister = (name, password) => {
    axios({
        method: 'POST',
        url: "http://localhost:3004/users",
        data: {
            name,
            password
        }
    }).then((response) => {
        alert('注册成功');
    })
}

const Login = (props) => {
    const { name, password, getName, getPassword, getLogin } = props;
    const navigate = useNavigate();

    return (
        <LoginWrapper>
            <LoginBox>
                <Input placeholder='账号' value={name} onChange={(e) => getName(e.target.value)} />
                <Input placeholder='密码' value={password} onChange={(e) => getPassword(e.target.value)} />
                <Button onClick={() => getLogin(navigate, name, password)}>登录</Button>
                <Button onClick={() => getRegister(name, password)}>注册</Button>
            </LoginBox>
        </LoginWrapper>
    )
}

const mapStateToProps = (storeState) => ({
    name: storeState.getIn(['login', 'name']),
    password: storeState.getIn(['login', 'password']),
    // login: storeState.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => {
    const getName = (value) => {
        const action = actionCreator.getName(value)
        dispatch(action);
    }
    const getPassword = (value) => {
        const action = actionCreator.getPassword(value)
        dispatch(action);
    }
    const getLogin = (navigate, name, password) => {
        axios({
            method: 'GET',
            url: "http://localhost:3004/users",
            params: {
                name,
                password
            }
        }).then((response) => {
            // console.log(response);
            const result = response.data;
            if (result.length > 0) {
                dispatch(actionCreator.getLogin());
                navigate("/");
            } else {
                alert('账号或密码错误');
            }
        })
    }
    return {
        getName,
        getPassword,
        getLogin
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);