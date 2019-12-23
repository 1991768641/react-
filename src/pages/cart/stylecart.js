import styled from 'styled-components';
import border from 'components/border/border.js';

export const CartHeaderWrap=border(
    styled.div`
        width:100%;
        height:2rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 1.1111rem;
        background: #fff;
        font-size:0.6667rem;
        .cart{
            font-size:0.8rem;
        }
    `
)

export const CartBodynullWrap=styled.div`
    width:100%;
    height:10.4276rem;
    margin:1.0667rem 0;
    .kong{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        
        img{
            width:6.2222rem;
            height:6.2222rem;
            margin:0 4.8889rem 0.5333rem;
        }
        .word{
            width:100%;
            height:0.96rem;
            text-align:center;
            line-height:0.96rem;
            font-size:0.7111rem;
            margin-bottom:0.6222rem;
        }
        .btn{
            display: inline-block;
            width: 6.1333rem;
            height: 1.7778rem;
            line-height: 1.7778rem;
            font-size: 0.6667rem;
            color: #ff464e;
            border: 1px solid currentColor;
            text-align: center;
        }
    }
`

export const CartBodyWrap=styled.div`

`

export const CartmapWrap=styled.div`
    
`