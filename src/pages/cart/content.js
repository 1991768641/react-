import React from 'react';
import Cartbg from 'assets/images/empty-cart.png';
import {CartBodynullWrap} from './stylecart';
import { Route, Switch } from 'react-router-dom';

function Content(props){

    return (
        <Switch>
            <Route
                path="/index/cart/menu"
                render={()=>(
                    <CartBodynullWrap>
                        <div className="kong">
                            <img src={Cartbg} alt=""/>
                            <div className="word">看到喜欢的就带回家吧</div>
                            <div className="btn">今日推荐</div>
                        </div>
                    </CartBodynullWrap>
                )}
            >
            </Route>
            <Route
                path="/index/cart/map"
                render={()=>(
                    <CartBodynullWrap>
                        <iframe 
                            src="/map.html" 
                            frameBorder="0" 
                            title="map"
                            style={{
                                width:'100%',
                                height:'300%'
                            }}
                        >      
                        </iframe>
                    </CartBodynullWrap>
                )}
            >
            </Route>
        </Switch>
        
        

    )
}

export default Content