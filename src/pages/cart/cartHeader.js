import React from "react";
import {CartHeaderWrap} from './stylecart';
import { useHistory,useLocation,withRouter} from 'react-router-dom';

function CartHeader(props){

    const location = useLocation();
    const history =useHistory();

    let handleclick=()=>{
        if(location.pathname==='/index/cart/menu'){
            history.push('/index/cart/map')
        }else{
            history.push('/index/cart/menu')
        }
        
    }

    return (
        <CartHeaderWrap>
            <div className="map" onClick={handleclick}>
                {
                    location.pathname==='/index/cart/menu'?'地图':'返回'
                }
            </div>
            <div className="cart">
                购物车
            </div>
            <div className="compile">
                编辑
            </div>
        </CartHeaderWrap>
    )
}

export default withRouter(CartHeader)