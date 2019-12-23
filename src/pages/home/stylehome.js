import styled from 'styled-components'

export const HeaderWrap=styled.div`
    width:100%;
    height:2.3889rem;
    img{
        width:100%;
    }
`

export const SearchWarp=styled.div`
    width:100%;
    height:1.8773rem;
    padding-left:0.5973rem;
    background: #fff;
    .body-search{
        width:100%;
        height: 1.8329rem;
        display:flex;
        align-items:center;
        .left{
            flex:1;
            height:1.1947rem;
            border-radius:0.4444rem;
            background: #f2f2f2;
            display:flex;
            align-items:center;
            span{
                height:0.6284rem;
                margin: 0 0.21333333333333335rem;
                font-size:0.512rem;
                color:#999;
                svg{
                    height:100%;
                }
                img{
                    height:100%;
                }
            }
            span:nth-child(3){
                margin:0;
            }
        }
        .right{
            width:1.8773rem;
            height:1.8773rem;
            img{
                width:100%;
            }
        }
    }
`

export const SwiperWarp=styled.div`
    display:flex;
    justify-content:center;
    img{
        height:6.1867rem;
    }
`

export const HotWarp=styled.div`
    width:100%;
    height:3.5858rem;
    display:flex;
    div{
        width:4rem;
        height:100%;
        display:inset-block;
        img{
            width:4rem;
        }
    }

`
export const Bannerwrap=styled.div`
    width:100%;
    .banner0{
        width:100%;
        height:4.8889rem;
        img{
            width:100%;
        }
    }

    .bannner1{
        width:100%;
        height:9.7187rem;
        background: #fff;
        margin-top:0px;
        .bannner1-left{
            width:50%;
            height:100%;
            display:inline-block;
            img{
                width:100%;
                height:100%;
            }
        }
        .bannner1-right{
            width:50%;
            height:100%;
            display:inline-block;
            img{
                width:100%;
                height:50%;
            }
        }
    }

    .banner2{
        width:100%;
        height:4.1484rem;
        div{
            width:100%;
            height:100%;
            display:inline-block;
            img{
                width:100%;
            }
        }
    }
    .banner3{
        width:100%;
        height:2.0444rem;
        margin:0px;
        margin-top:0.426667rem;
        div{
            width:100%;
            height:100%;
            img{
                width:100%;
            }
        }
    }
`

export const Boutiquewrap=styled.div`
    width:100%;
    height:1.8773rem;
    background: #fff;
    margin-top: 0.426667rem;
    ul{
        width:100%;
        height:100%;
        padding:0px;
        margin:0px;
        li{
            line-height: 1.8773rem;
            height: 100%;
            display: inline-block;
            font-size: 0.6827rem;
            text-align: center;
            color: #333;
            padding: 0 0.4266rem;
            span{
                height:100%;
                box-sizing: border-box;
                display:inline-block;
                &.active{
                    color:#ff464e;
                    border-bottom: 4px solid #ff464e;
                }
            }

        }
    }
`
export const  ScrollsTop=styled.div`
    width: 1.70667rem;
    height: 1.70667rem;
    border-radius: 50%;
    position: fixed;
    bottom: 2.3466666666666667rem;
    display:none;
    right: 4%;
    img{
        position: absolute;
        display: block;
        width: 100%;
        height: auto;
    }
`