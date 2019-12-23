import React from "react";
import {CartHeaderWrap} from './stylecart';
import { useHistory,useLocation,withRouter} from 'react-router-dom';

function CartHeader(props){

    const location = useLocation();
    const history =useHistory();
    // console.log(location.pathname);


    let handleclick=()=>{
        if(location.pathname==='/cart/menu'){
            history.push('/cart/map')
        }else{
            history.push('/cart/menu')
        }
        
    }

    return (
        <CartHeaderWrap>
            <div className="map" onClick={handleclick}>
                {
                    location.pathname==='/cart/menu'?'地图':'返回'
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