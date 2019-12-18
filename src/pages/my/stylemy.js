import styled from 'styled-components';
import mybg from 'assets/images/my_bg.png';

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
                    width: 2.304rem;
                    height: 2.304rem;
                    border-radius: 50%;
                    margin-left: .768rem;
                    border: 2px solid #fff;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: auto;
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

