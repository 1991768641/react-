import React,{useState} from 'react';
import { SmallBodyWrap } from './styledetails.js';
import rightjiantou from 'assets/images/right.png';
import Tabs from 'components/tab/tabs.js';

function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return JSON.parse(unescape(str));
}


function DetailsSmallBody(props){

    let [deatailtype,settype]=useState('datail');
    
    let handclick=(e)=>{
        let flagtype=e.target.getAttribute('data-type');
        settype(flagtype);
    }

    return (
        <SmallBodyWrap>
            <div className="reuse">
                <div className="content">
                    <p className="left">
                        <span>任选</span>
                        <span>79元2件任选</span>
                    </p>
                    <span className="iconfont icon-more_light" id="imgs"></span>
                </div>
                <div className="content">
                    <p className="right">
                        <span>24小时发货</span>
                        <span>7天包退</span>
                        <span>售后补贴</span>
                    </p>
                    <span className="iconfont icon-more_light" id="imgs"></span>
                </div>
            </div>
            <div className="reuse">
                <div className="content">
                    <p className="select">请选择：颜色、尺码</p>
                    <img src={rightjiantou} alt="" className="rightjiantou"/>
                </div>
            </div>
            <div className="reuse">
                <div className="zongde">
                    <div className="monopoly">
                        <div className="monopoly-left">
                            <img src="https://goods2.juancdn.com/bao/170822/2/0/599bf623a9fcf83bfc715743_180x90.png?imageMogr2/quality/88!/format/png" alt=""/>
                        </div>
                        <div className="monopoly-center">
                            <div className="nvzhuang">深秋女装女装热卖专场</div>
                            <div className="blyed">24.7万人已购</div>
                        </div>
                        <div className="monopoly-right">
                            <div>
                                <span>进入专场</span>
                                <img src={rightjiantou} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="swpier">
                        <div className="containter">
                            <div className="slide">
                                <img src="https://goods3.juancdn.com/goods/190310/5/5/5c84b59f33b08958996498c4_800x800.jpg?iopcmd=thumbnail&type=11&height=350&width=350" alt=""/>
                            </div>
                            <div className="slide">
                                <img src="https://goods3.juancdn.com/goods/190310/5/5/5c84b59f33b08958996498c4_800x800.jpg?iopcmd=thumbnail&type=11&height=350&width=350" alt=""/>
                            </div>
                            <div className="slide">
                                <img src="https://goods3.juancdn.com/goods/190310/5/5/5c84b59f33b08958996498c4_800x800.jpg?iopcmd=thumbnail&type=11&height=350&width=350" alt=""/>
                            </div>
                            <div className="slide">
                                <img src="https://goods3.juancdn.com/goods/190310/5/5/5c84b59f33b08958996498c4_800x800.jpg?iopcmd=thumbnail&type=11&height=350&width=350" alt=""/>
                            </div>
                            <div className="slide">
                                <img src="https://goods3.juancdn.com/goods/190310/5/5/5c84b59f33b08958996498c4_800x800.jpg?iopcmd=thumbnail&type=11&height=350&width=350" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="more" href="https://m.juanpi.com/store/370187149">查看店铺所有商品</div>
                </div>
            </div>
            <div className="reuse">
                <div className="word-content">
                    <div className="content-titles">
                        {
                            deatailtype==='datail'?(
                            <div className="compont active">
                                <span className="word" >图文详情</span>
                            </div>
                            ):(
                            <div className="compont">
                                <span className="word" data-type="datail" onClick={handclick}>图文详情</span>
                            </div>
                            )
                        }
                        {
                            deatailtype==='param'?(
                                <div className="compont active">
                                    <span className="word" data-type="param" onClick={handclick}>商品参数</span>
                                </div>
                            ):(
                                <div className="compont">
                                    <span className="word" data-type="param" onClick={handclick}>商品参数</span>
                                </div>
                            )
                        }
                        {
                            deatailtype==='aftersale'?(
                                <div className="compont active">
                                    <span className="word" data-type="aftersale" onClick={handclick}>咨询与售后</span>
                                </div>
                            ):(
                                <div className="compont">
                                    <span className="word" data-type="aftersale" onClick={handclick}>咨询与售后</span>
                                </div>
                            )
                        }

                        
                    </div>
                    <Tabs
                        deatailtype={deatailtype}
                    ></Tabs>
                </div>
            </div>

        </SmallBodyWrap>
    )
}

export default DetailsSmallBody;