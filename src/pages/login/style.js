import styled from "styled-components";

export const LoginWrapper = styled.div`
    position: absolute; // 若无父定位元素，则相对html根元素定位
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background-color: #eee;
    z-index: 0;
`

export const LoginBox = styled.div`
    width: 400px;
    height: 180px;
    margin: 100px auto;
    background-color: #fff;
    padding-top: 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
`

export const Button = styled.button`
    display: block;
    width: 220px;
    height: 30px;
    color: #fff;
    background-color: #3190d4;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
`