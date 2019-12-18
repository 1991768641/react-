import React, { useState } from "react";
import {MyHearWrap} from './stylemy.js';
import {Icon} from 'antd-mobile';
import defaultimg from 'assets/images/default.jpg';

export default (props)=>{

    let [count,setcount]=useState(0);

    let handleclick=()=>{
        count++;
        console.log(count)
    }

    return (
        <MyHearWrap>
            <header>
                <div className="userTop">
                    <span>
                        <Icon type="left" size="lg"></Icon>
                    </span>
                    <span>个人中心</span>
                    <span onClick={handleclick}>退出</span>
                </div>
                <div className="user-box-person">
                    <div className="user">
                        <div className="head_img">
                            <img src={defaultimg} alt=""/>
                        </div>
                        <div className="message">
                            <p>123456789</p>
                            <div className="message_detal">
                                <span>
                                    <div>我的账户</div>
                                    <Icon type="right" size="xxs"></Icon>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> 
            </header>
        </MyHearWrap>
    )
}