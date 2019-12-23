import styled from 'styled-components';
import mybg from 'assets/images/my_bg.png';
import border from 'components/border/border.js';

export const MyHearWrap=styled.div`
    width:100%;
    header{
        height: 6.4rem;
        background-image: url('${mybg}');
        background-position: top;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-bottom: none;
        .userTop{
            position: relative;
            height: 1.9556rem;
            line-height: 1.9556rem;
            display:flex;
            color:#fff;
            span{
                display:flex;
                justify-content:center;
                align-items:center;
            }
            span:nth-child(1){
                width:2.3111rem;
                height:1.9556rem;
            }
            span:nth-child(2){
                flex:1;
                font-size:0.8rem;
            }
            span:nth-child(3){
                width:2.5244rem;
                height:1.9556rem;
                font-size:0.6222rem;
            }
        }
        .user-box-person{
            position: relative;
            color: #fff;
            overflow: hidden;
            width:100%;
            height:4.2667rem;
            display:flex;
            justify-content:center;
            align-items:center;
            .user{
                display: block;
                color: #fff;
                width: 100%;
                overflow: hidden;
                display:flex;
                align-items:center;
                .head_img{
                    width: 2.4818rem;
                    height: 2.4818rem;
                    border-radius: 50%;
                    margin-left: .768rem;
                    border: 2px solid #fff;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .message{
                    width: auto;
                    margin-left: .512rem;
                    p{
                        font-family: PingFangSC-Regular;
                        font-size: .68267rem;
                        color: #fff;
                        height: .93867rem;
                        line-height: .93867rem;
                        margin:0px;
                    }
                    .message_detal{
                        width: 100%;
                        height: .85333rem;
                        margin-top: .46933rem;
                        padding-right: .10667rem;
                        span{
                            position: relative;
                            display: flex;
                            align-items:center;
                            margin: 0;
                            font-size: .46933rem;
                            height: .0.7711rem;
                            line-height: .7711rem;
                            background: #f3414a;
                            border: 1px solid #ff8282;
                            border-radius: 2.13333rem;
                            padding-left: .21333rem;
                            padding-right: .59733rem;
                            margin-right: .21333rem;
                            color: #fff;

                            div{
                                color: #fff;
                            }
                            

                        }
                    }
                }
            }
        }
    }
`

export const Mybodyuseritemcontent=border(
    styled.div`
        width:100%;
        display: flex;
        justify-content:space-between;
        .label{
            color:#999;
            margin-right:0.3556rem;
        }
    `
)

export const MyBodyWrap=styled.div`
    width:100%;
    .user-item-horizontal{
        width:100%;
        position: relative;
        height: 2.1333rem;
        line-height: 2.1333rem;
        padding: 0 .59733rem 0 .768rem;
        font-size: 0.6667rem;
        background-color: #fff;
        color: #333;
        box-sizing: border-box;
        overflow: hidden;
    }
    .useritem{
        padding-top:0.6667rem;
        padding-bottom:0.5333rem;
        font-size: 0;
        background-color: #fff;
        width:100%;
        height:3.5289rem;
        color:#666;
        .usercontent{
            display: inline-block;
            width: 25%;
            height:100%;
            font-size: 0.5333rem;
            color: #666;
            text-align: center;
            vertical-align: top;
            .iconfont{
                font-size:1.2444rem;
            }

            div{
                margin-top:0.2667rem;
            }
        }
    }
    .useritem1{
        margin-top: 0.4444rem;
        width:100%;
        background: #fff;
    }
    .foot{
        margin-top: 10px;
        width: 100%;
        height:1.7409rem;
        .foot-nav{
            padding:0.5333rem 0;
            background: #fff;
            div{
                display:inline-block;
                text-align:center;
                color: #666;
                font-size: 0.4667rem;
                margin: 0 auto;
                width: 31%;
                border-right: 1px solid #ebebeb;
            }
            div:last-child {
                border-right: none;
            }
        }
    }
`

export const Mybodyuseritemcontent1=border(
    styled.div`
        width:100%;
        display: flex;
        justify-content:space-between;
        height:2.1333rem;
        line-height: 2.1333rem;
        padding: 0 .59733rem 0 .768rem;
        font-size:0.6667rem;
        background-color: #fff;
        color: #333;
        box-sizing: border-box;
        overflow: hidden;
        position:static;
        .label{
            color:#999;
            margin-right:0.3556rem;
        }
    `
)