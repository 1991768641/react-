import styled from 'styled-components';

export const ClassifyHeaderWrap=styled.div`
    background: #fff;
    margin: 0.5rem;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fff;
    padding: .125rem 0;
    position: relative;
    height: 1.3938rem;
    overflow: hidden;
    display:flex;
    align-items:center;
    .box-search{
        width: 98%;
        position: relative;
        margin-left: 0.2667rem;
        height:1.0667rem;
        font-size:0.6667rem;
        background-color: #fff;
        color: #999;
        input{
            margin-left:1.3333rem;
            color: #999;
            font-size: 0.5778rem;
            width: 90%;
            height:100%;
            border:none;
        }
    }
    #search-submit{
        display: block;
        position: absolute;
        border: 0 none;
        background: none;
        cursor: pointer;
        display:flex;
        align-items:center;
        height:1.0667rem;
        img{
            width:1.0667rem;
            height:1.0667rem;
            display:block;
        }
    }
`

export const ClassifyBodyWrap=styled.div`
    width:100%;
    display:flex;

    .classify-left{
        width:25%;
        background: #f9f9f9;

        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            padding-bottom: 2.1778rem;
            text-align: left;
            text-indent: 0.6667rem;
            li{
                height: 2rem;
                line-height:  2rem;
                position: relative;
                border-bottom: 1px solid #ebebeb;
                cursor: pointer;
                border-left: 4px solid #f9f9f9;
                font-size:0.6222rem;
            }
        }
    }
    .classify-right{
        width: 75%;
        font-size: 0.5333rem;
        padding-left: 4%;

        .wraper{
            height: 100%;
            width: 100%;
            text-align: left;
            overflow: hidden;
            padding-bottom: 2.1778rem;
            .third-cate{
                width: 100%;
                display:flex;
                flex-wrap: wrap;
                margin-top: 0.4444rem;
                padding-bottom: 2.1778rem;
                .cate-second{
                    width: 3.6267rem;
                    display: inline-block;
                    text-align: center;
                    height: 4rem;
                    padding: 0 5%;
                    box-sizing: border-box;
                    position: relative;
                    img{
                        width: 100%;
                        border: 0;
                    }
                    span{
                        color: #333;
                        line-height: 0.8889rem;
                    }
                    .icon{
                        position: absolute;
                        width: 1.3333rem;
                        height:  1.3333rem;
                        line-height:  1.3333rem;
                        font-size: 0.4444rem;
                        top: -0.3556rem;
                        text-align: center;
                        border-radius: 50%;
                        right: 0;
                        color: #fff;
                    }
                    .icon-new {
                        background: #5698f3;
                    }
                    .icon-hot{
                        background: #ff464e;
                    }
                    .icon-rec {
                        background: #f5a623;
                    }
                }
            }
        }
    }
`