import styled from 'styled-components';

export const ModalWarp=styled.div`
    width: 100%;
    background: #ffffff;
    .content{
        .top{
            display: flex;
            height: 3.328rem;
            flex-direction: row;
            .imgs{
                position: absolute;
                top: -1.536rem;
                left: 0.5973333333333334rem;
                img{
                    width: 4.266666666666667rem;
                    height: 4.266666666666667rem;
                }
            }
            .word{
                margin-left: 5.376rem;
                flex-grow: 1;
                margin-top: 0.256rem;
                .price{
                    color: #ff464e;
                    font-size: 0.768rem;
                    text-align: left;
                }
                .tips{
                    color: #666;
                    font-size: 0.512rem;
                    text-align: left;
                }
            }
            .close{
                margin-right: 0.4266666666666667rem;
                margin-top: 0.4266666666666667rem;
                img{
                    width: 0.5973333333333334rem;
                    height: 0.5973333333333334rem;
                    vertical-align: top;
                }
            }
        }
        .bodyed{
            max-height: 14.549333333333333rem;
            min-height: 10.112rem;
            overflow: auto;
            padding-left: 0.5973333333333334rem;
            padding-right: 0.5973333333333334rem;
            .bodyed-color{
                width:100%;
                display:block;
                color: #333;
                font-size: 0.6826666666666666rem;
                line-height: 1.0666666666666667rem;
                text-align: left;
            }
            .list1{
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-around;
                .item1{
                    width: 4.48rem;
                    height: 1.3653333333333333rem;
                    font-size: 0.5973333333333334rem;
                    margin-top: 0.256rem;
                    margin-bottom: 0.256rem;
                    font-weight: 300;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    border: 1px solid #333;
                    color: #333;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                }
                .active{
                    background: #ff464e;
                    color: #fff;
                }
            }
            .step{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-top: 1.28rem;
                margin-bottom: 1.28rem;
                .caozuo{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .nolight{
                        width: 1.28rem;
                        height: 1.28rem;
                        line-height: 1.28rem;
                        background: #f7f7f7;
                        font-size: 0.6826666666666666rem;
                        color: #dbdbdb;
                        text-align: center;
                    }
                    .value{
                        font-size: 0.6826666666666666rem;
                        color: #333;
                        padding-left: 0.768rem;
                        padding-right: 0.768rem;
                    }
                    .light{
                        width: 1.28rem;
                        height: 1.28rem;
                        line-height: 1.28rem;
                        background: #f7f7f7;
                        font-size: 0.6826666666666666rem;
                        color: #ff464e;
                        text-align: center;
                    }
                }
            }
        }

        .bottom{
            height: 2.048rem;
            line-height: 2.048rem;
            font-size: 0.768rem;
            color: #fff;
            text-align: center;
            background: #ff464e;
        }
    }
`