import React from "react";
import MyIsMapTrue from './myIsMapTrue.jsx';
import {MyBodyWrap,Mybodyuseritemcontent,Mybodyuseritemcontent1} from './stylemy';

export default (props)=>{
    return (
        <MyBodyWrap>
            <div className="user-item-horizontal">
                <Mybodyuseritemcontent
                    width="0 0 1px 0"
                    color="#ccc"
                >
                    <span>我的订单</span>
                    <span className="label">全部订单</span>
                </Mybodyuseritemcontent>
            </div>

            <div className="useritem">
                <div className="usercontent">
                    <em className="iconfont icon-calendar"></em>
                    <div>待付款</div>
                </div>
                <div className="usercontent">
                    <em className="iconfont icon-group"></em>
                    <div>待成团</div>
                </div>
                <div className="usercontent">
                    <em className="iconfont icon-deliver"></em>
                    <div>待收货</div>
                </div>
                <div className="usercontent">
                    <em className="iconfont icon-recharge"></em>
                    <div>售后退款</div>
                </div>
            </div>
            
            <div className="useritem1">
                <Mybodyuseritemcontent1
                    width="1px 0 0 0"
                    color="#ccc"
                >   
                    <span>我的优惠券</span>
                </Mybodyuseritemcontent1>
                <Mybodyuseritemcontent1
                    width="1px 0 0 0"
                    color="#ccc"
                >
                    <span>我的收藏</span>
                </Mybodyuseritemcontent1>
                <Mybodyuseritemcontent1
                    width="1px 0 0 0"
                    color="#ccc"
                >
                    <span>我的拼团</span>
                </Mybodyuseritemcontent1>
                <Mybodyuseritemcontent1
                    width="1px 0 0 0"
                    color="#ccc"
                >
                    <span>我的免单券</span>
                    <span className="label">0张</span>
                </Mybodyuseritemcontent1>
                <Mybodyuseritemcontent1
                    width="1px 0 0 0"
                    color="#ccc"
                >
                    <span>借钱</span>
                    <span className="label">新用户免费领1000万元</span>
                </Mybodyuseritemcontent1>
            </div>
            <div className="useritem1">
                <Mybodyuseritemcontent1
                    width="1px 0 0 0"
                    color="#ccc"
                >
                    <span>客服中心</span>
                </Mybodyuseritemcontent1>
                <Mybodyuseritemcontent1
                    width="1px 0 0 0"
                    color="#ccc"
                >
                    <span>关于卷皮</span>
                </Mybodyuseritemcontent1>
            </div>
            <div className="foot">
                <div className="foot-nav">
                    <div className="homepage">返回首页</div>
                    <div className="joa_load_app">客户端</div>
                    <div className="pcJuanpi">电脑版</div>
                </div>
            </div>
            <MyIsMapTrue></MyIsMapTrue>
        </MyBodyWrap>

    )
}