import styled from 'styled-components';

export const TabWrap=styled.div`
    .content-one{
        padding-bottom: 0.384rem;
        padding-top: 0.5973333333333334rem;
        padding-left: 0.5973333333333334rem;
        padding-right: 0.5973333333333334rem;
        margin-bottom: 0.4266666666666667rem;
        background: #fff;
        .span-one{
            color: #f70;
            font-size: 0.5973333333333334rem;
            text-align: left;
            span{
                color: #9b9b9b;
            }
            .center{
                color:#4a4a4a;
            }
        }
    }
    img{
        width: 16rem;
        display: block;
    }
    .content-two{
        padding-top: 0.5973333333333334rem;
        padding-left: 1.024rem;
        padding-right: 1.024rem;
        background: #fff;
        .word1{
            flex-direction: row;
            display: flex;
            padding-bottom: 0.384rem;
            .word-content1{
                color: #bbb;
                font-size: 0.5973333333333334rem;
                width: 2.9013333333333335rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-align: left;
                margin-right: 0.8533333333333334rem;
            }
            .word-content2{
                color: #4a4a4a;
                font-size: 0.5973333333333334rem;
            }
            .content3{
                color:#ff7700;
            }
        }
    }
    .content-three{
        padding: 0.5973333333333334rem 1.024rem;
        .word-content-three{
            .word-title{
                color: #4a4a4a;
                font-size: 0.5973333333333334rem;
                text-align: left;
                margin-bottom: 0.256rem;
            }
            .span-box{
                color: #9b9b9b;
                font-size: 0.5973333333333334rem!important;
                text-align: left;
                margin-bottom: 0.512rem;
                .word-content{
                    margin:0;
                    .word-content-span{
                        font-family: 微软雅黑, 'Microsoft YaHei';
                    }
                }
            }
        }
    }
`