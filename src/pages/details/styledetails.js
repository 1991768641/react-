import styled from 'styled-components';
// import border from 'components/border/border.js';

export const DetailsFooterWrap=styled.div`
    display: flex;
    height: 2.048rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    .Home{
        width: 3.072rem;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-right:1px solid #ccc;
        background: #fff;
        img{
            width:1.024rem;
            height:1.024rem;
        }   
        span{
            color: #6b6b6b;
            font-size: 0.4266666666666667rem;
        }
    }
    .right{
        flex:1;
        height:100%;
        display:flex;
        font-size:0.5142rem;
        .buy{
            flex: 1 1 4.608rem;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            background: #fff;
        }
        .addcart{
            width: 6.826666666666667rem;
            display:flex;
            height:100%;
            justify-content:center;
            align-items:center;
            background: #ff464e;
            color:#fff;
        }
    }
`

export const SwiperWarp=styled.div`
    width:100%;
    height:16rem;
    .slider,.slider-frame,ul{
        height:100% !important;
        touch-action: none;
    }
    .pic{
        width:100%;
        height:100%;
        img{
            width:100%;
            height:100%;
        }
    }
`

export const PointWrap=styled.div`
    position: fixed;
    right: 0.512rem;
    top: 0;
    z-index: 100;
    span{
        background: #000;
        height: 1.28rem;
        line-height: 1.28rem;
        width: 1.28rem;
        font-size:1.28rem;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        display:block;
        opacity:0.3;
    }
`
export const TitleWrap=styled.div`
    width:100%;
    height:4.8422rem;
    font-size: 0;
    background: #fff;
    .titlecontent{
        height:4.8422rem;
        padding: 0.512rem 0.5973333333333334rem 0.4266666666666667rem;
        .title{
            width:100%;
            height:1.5289rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .price{
                display:flex;
                align-items:center;
                .moreprice{
                    .oldprice{
                        line-height: 1.408rem;
                        color: #ff464e;
                        margin-right: 0.17066666666666666rem;
                        font-size: 1.024rem;
                        .danwei{
                            font-size: 0.682667rem;
                        }
                    }
                    .newprice{
                        font-size: 0.512rem;
                        color: #bbbbbb;
                        margin-right: 0.4266666666666667rem;
                        text-decoration: line-through;
                    }
                }
                .baoyou{
                    background-color: rgb(255, 70, 78);
                    border-color: rgb(255, 70, 78);
                    color: rgb(255, 255, 255);
                    font-size: 0.4266666666666667rem;
                    padding: 0.042666666666666665rem 0.08533333333333333rem;
                    border: 1px solid;
                    margin-right: 0.3413333333333333rem;
                }
            }
            .buyed{
                font-size: 0.512rem;
                color: #999;
            }
        }
        .content{
            margin-bottom: 0.4266666666666667rem;
            margin-top: 0.17066666666666666rem;
            display:flex;
            justify-content: space-between;
            align-items: flex-start;
            .word{
                font-size: 0.6826666666666666rem;
                color: #333333;
                flex-grow:1;
                margin:0;
            }
            .btn{
                width: 1.024rem;
                height: 1.024rem;
                border: none;
            }
        }
    }
`

export const SmallBodyWrap=styled.div`

    .reuse{
        margin-top: 0.4266666666666667rem;
        background: #fff;
        .content{
            height: 2.048rem;
            position: relative;
            padding: 0 0.5973333333333334rem;
            .left{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0.512rem;
                color: #333333;
                line-height: 2.048rem;
                margin:0;
                span:nth-child(1){
                    background-color: #ff464e;
                    font-size: 0.4266666666666667rem;
                    color: #ffffff;
                    line-height: 1;
                    padding: 0.042666666666666665rem 0.08533333333333333rem;
                    margin-right: 0.341333rem;
                }
            }
            #imgs{
                display:block;
                position: absolute;
                right: 0.512rem;
                top: 50%;
                transform: translateY(-50%);
                width: 1.024rem;
                height: 1.024rem;
                font-size:1.024rem;
                color:#ccc;
            }
            .right{
                font-size: 0.512rem;
                color: #666666;
                line-height: 2.048rem;
                border-top:1px solid #ccc;
                margin:0;
                span{
                    margin-right: 0.5973333333333334rem;
                    position: relative;
                    padding-left: 0.3413333333333333rem;
                }
                span:before{
                    content: '';
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                    width: 0.17066666666666666rem;
                    height: 0.17066666666666666rem;
                    background: #ff464e;
                    opacity: 0.5;
                    border-radius: 50%;
                }
            }
            .select{
                font-size: 0.64rem;
                color: #333333;
                line-height: 2.048rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .rightjiantou{
                position: absolute;
                right: 0.256rem;
                top: 50%;
                transform: translateY(-50%);
                width: 1.024rem;
                height: 1.024rem;
            }
        }
        .zongde{
            .monopoly{
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0.5973333333333334rem;
                background-color: #fff;
                margin-bottom: 0.4266666666666667rem;
                .monopoly-left{
                    width: 1.92rem;
                    height: 1.92rem;
                    border: 1px solid #e7e7e7;
                    display: flex;
                    align-items: center;
                    img{
                        width: 1.92rem;
                    }
                }
                .monopoly-center{
                    margin-left: 0.4266666666666667rem;
                    flex-grow: 1;
                    .nvzhuang{
                        color: #333;
                        font-size: 0.6826666666666666rem;
                        text-align: left;
                    }
                    .blyed{
                        color: #999;
                        font-size: 0.512rem;
                        text-align: left;
                    }
                }
                .monopoly-right{
                    div{
                        display: flex;
                        flex-direction:row;
                        align-items: center;
                        border: 1px solid #4a4a4a;
                        height: 1.1946666666666668rem;
                        padding-left: 0.384rem;
                        span{
                            color: #333;
                            font-size: 0.512rem;
                            flex: 1 1 auto;
                            white-space: nowrap;
                        }
                        img{
                            width: 1.024rem;
                            height: 1.024rem;
                            margin-left: auto;
                            flex: 1 1 auto;
                        }
                    }
                }
            }
            .swpier{
                margin-left: 0.5973333333333334rem;
                padding-right: 0.5973333333333334rem;
                padding-bottom: 0.512rem;
                .containter{
                    overflow-x: auto;
                    display: flex;
                    flex-direction: row;
                    .slide{
                        display: inline-block;
                        img{
                            width: 3.584rem;
                            height: 3.584rem;
                            margin-right: 0.3413333333333333rem;
                        }
                    }
                }
            }
            .more{
                display: block;
                height: 2.048rem;
                line-height: 2.048rem;
                text-align: center;
                color: #666;
                font-size: 0.5973333333333334rem;
                border-top: 0.042666666666666665rem solid #ebebeb;
            }
        }
        .word-content{
            margin-bottom: 2.048rem;
            background: rgb(244,244,248);
            .content-titles{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background: #fff;
                padding: 0.4693333333333333rem 0.4266666666666667rem;

                .active{
                    background: #666666 !important;
                    color:#fff !important;
                }
                .compont{
                    flex-grow: 1;
                    height: 1.28rem;
                    text-align: center;
                    border: 1px solid #666;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #fff;
                    color:#666;
                    span{
                        font-size: 0.5973333333333334rem;
                    }
                }
                .title1{
                    border-radius: 0.170667rem 0px 0px 0.170667rem;
                }
                .title3{
                    border-radius: 0px 0.170667rem 0.170667rem 0px;
                }
            }

        }
        
    }
`

export const ZongWrap=styled.div`
    width:100%;
    height:100%;
    margin-bottom:2.0484rem;
`