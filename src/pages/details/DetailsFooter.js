import React from 'react';
import {DetailsFooterWrap,PointWrap} from './styledetails.js';
import Home from 'assets/images/home_light.png';
import Cart from 'assets/images/cart_light.png';
import {withRouter,useHistory} from 'react-router-dom';

function DetailsFooter(props){
    const history =useHistory();

    function handleclick(){
        history.push('/index/home/special')
    }

    return (
        <>
        <PointWrap>
            <span className="iconfont icon-more_light"></span>
        </PointWrap>
        <DetailsFooterWrap>
            <div className="Home" onClick={handleclick}>
                <img src={Home} alt=""/>
                <span>首页</span>
            </div>
            <div className="Home">
                <img src={Cart} alt=""/>
                <span>购物车</span>
            </div>
            <div className="right">
                <div className="buy">
                    立即购买
                </div>
                <div className="addcart">
                    加入购物车
                </div>
            </div>
        </DetailsFooterWrap>
        </>
    )
}
export default withRouter(DetailsFooter)
