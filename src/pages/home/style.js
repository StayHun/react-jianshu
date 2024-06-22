import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 625px;
    }
`

export const HomeRight = styled.div`
    width: 240px;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    display: flex;
    flex-wrap: wrap;
    margin: -5px -8px;
`

export const TopicItem = styled.div`
    display: inline-flex;
    align-items: center;
    margin: 5px 8px;
    padding-right: 10px;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: solid 1px #dcdcdc;
    border-radius: 4px;
    color: #000;
    .svg{
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: solid 1px #dcdcdc;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    .pic{
        width: 148px;
        height: 98px;
        border-radius: 10px;
    }
    .desc{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

export const ListInfo = styled.div`
    width: 477px;
    .title{
        margin: -7px 0 4px;
        // display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #000;
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.a`
    cursor: pointer;
    .recommendPic{
        width: 280px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`

export const WriterList = styled.div`
    // margin: 30px 0;
    width: 280px;
`

export const WriterHead = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    .writer{
        font-size: 14px;
        color: #969696;
    }
    .writerChange{
        font-size: 14px;
        color: #969696;
        cursor: pointer;
    }
`

export const WriterItem = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    display: flex;
    .writerPic{
        width: 46px;
        border-radius: 50%;
    }
    .writerContent{
        width: 100%;
        .writerName{
            width: 100%;
            display: flex;
            margin-top: 5px;
            justify-content: space-between;
            .name{
                margin-right: 60px;
                font-size: 14px;
                margin-left: 10px;
            }
            .action{
                cursor: pointer;
                font-size: 13px;
                color: #42c02e;
            }
        }
        .fans{
            margin-top: 12px;
            margin-left: 10px;
            font-size: 12px;
            color: #969696;
        }
    }
`

export const LoadMore = styled.div`
    margin: 30px 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const BackToTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: solid 1px #ccc;
    font-size: 12px;
`