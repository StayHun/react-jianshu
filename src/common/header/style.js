import styled from "styled-components";
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relation;
    height: 56px;
    border-bottom: solid 1px #f0f0f0;
    z-index: 1;
`

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 100px;
    display: block;
    background-image: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`

// export const Svg = styled.svg`
//     &.icon{
//         width: 1em;
//         height: 1em;
//         vertical-align: -0.15em;
//         fill: currentColor;
//         overflow: hidden;
//     }
// `

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        // background-color: green;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    margin-top: 9px;
    margin-left: 30px;
    padding: 0 20px;
    box-sizing: border-box;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 280px;
    }
    &.slide-enter{
        transition: all .3s ease-out;
    }
    &.slide-enter-active{
        width: 280px;
    }
    &.slide-exit{
        transition: all .3s ease-out;
    }
    &.slide-enter-exit{
        width: 160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 30px;
    top: 56px;
    width: 240px;
    //height: 120px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    .spin{
        display: inline-block;
        font-size: 12px;
        margin-right: 5px;
        transition: all .3s ease-in;
        transform-origin: center;
    }
`

export const SearchInfoItem = styled.a`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    border-radius: 19px;
    padding: 0 20px;
    border: solid 1px #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`