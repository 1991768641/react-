import styled from 'styled-components'

export const Goodslistwrap=styled.div`
    width:100%;
    .goodlist{
        width: 7.957333333333334rem;
        height:9.8693rem;
        display:inline-block;
        .content{
            height: 100%;
            width: 100%;
            background-color: #fff;
            .img{
                width:100%;
                height:7.9782rem;
                position: relative;
                .main{
                    width:100%;
                    display:block;
                }
                .left{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 1.92rem;
                    height: 1.92rem;
                }
                .right{
                    background-size: cover;
                    position: absolute;
                    bottom: -0.53333rem;
                    right: 0.34133rem;
                    width: 2.13333rem;
                    height: 1.06667rem;
                    border: 1px solid #ebebeb;
                    background-color: #fff;
                }
            }
            .word1{
                padding-left: 0.3413333333333333rem;
                padding-right: 0.3413333333333333rem;
                color: #bbb;
                font-size: 0.4693333333333333rem;
                line-height: 0.9386666666666666rem;
                margin-top: 0.256rem;
                display:flex;
                align-items:center;
                position: relative;
                .reduction{
                    font-size: 0.64rem;
                    color: #ff464e;
                    margin-right: 0.17066666666666666rem;
                }
            }
            .word2{
                position: relative;
                font-size: 0.512rem;
                color: #3b3b3b;
                padding-left: 0.3413333333333333rem;
                padding-right: 2.6453333333333333rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-bottom: 0.512rem;
                .update{
                    margin:0px;
                    color: #bbb;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 0.3413333333333333rem;
                    font-size: 0.4266666666666667rem;
                }
            }
        }
    }

`