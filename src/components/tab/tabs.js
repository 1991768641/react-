import React, { useState,useEffect} from 'react';
import {TabWrap} from './styledtab.js';

function Tabs(props){
    let [flag,setflag]=useState();
    
    useEffect(()=>{
        setflag(props.deatailtype);
    },[props.deatailtype]);
    
    return (
        
        <TabWrap>
            {
                flag==='detail'?(
                    <>
                        <div className="content-one">
                            <span className="span-one">
                                商家提醒：
                                <span>此商品由品牌商从
                                    <span className="center">【浙江嘉兴】</span>
                                发货。
                                </span>
                            </span>
                        </div>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                    </>
                ):flag==='param'?(
                    <div className="content-two">
                        <div className="word1">
                            <div className="word-content1">常用快递</div>
                            <div className="word-content2">中通快递</div>
                        </div>
                        <div className="word1">
                            <div className="word-content1">运费</div>
                            <div className="word-content2 content3">全国包邮(偏远地区除外)</div>
                        </div>
                    </div>
                ):flag==='aftersale'?(
                    <>
                    <div className="content-three">
                <div className="word-content-three">
                    <div className="word-title">在卷皮购物有哪些服务保障？</div>
                    <span className="span-box">
                        <p className="word-content">
                            <span className="word-content-span">卷皮为您提供
                                <strong className="word-content-strong">"人工质检""闪电发货""精选品牌商""7天无理由退货""退货返运费</strong>
                                等服务，让您轻松购物有保障。
                            </span>
                        </p>
                    </span>
                </div>
                <div className="word-content-three">
                    <div className="word-title">如何选择商品尺码？</div>
                    <span className="span-box">
                        <p className="word-content">
                            <span className="word-content-span">
                                商品详情页会展示所售商品的尺码表，可能会存在1~2cm的正常误差范围。
                            </span>
                        </p>
                        <p className="word-content">
                            <span className="word-content-span">
                                由于每个人的身材具体尺寸都不一样，为了对您负责我们根据身高体重为您推荐的也不一定准确，建议您可以根据商品详情页面的尺码表测量自身数据后选择更稳妥哦~
                            </span>
                        </p>
                    </span>
                </div>
                <div className="word-content-three">
                    <div className="word-title">可以指定快递吗？</div>
                    <span className="span-box">
                        <p className="word-content">
                            <span className="word-content-span">
                            商品详情页面会显示默认发货快递，商家也会根据您的地址自动匹配当地运营较好的快递公司安排配送，暂
                            <strong className="word-content-strong">不接受指定快递</strong>
                            </span>
                        </p>
                    </span>
                </div>
                <div className="word-content-three">
                    <div className="word-title">下单后什么时候发货？</div>
                    <span className="span-box">
                        <p className="word-content">
                            <span className="word-content-span">
                                卷皮承诺买家付款成功后，商家将在
                                <strong className="word-content-strong">24h</strong>
                                内完成发货(特殊情况除外)
                            </span>
                            <span className="word-content-span">
                            。由于部分快递公司无法实时更新信息，您看到的物流情况可能会有延迟。
                            </span>
                        </p>
                    </span>
                </div>
                <div className="word-content-three">
                    <div className="word-title">购买后不喜欢可以退货么？</div>
                    <span className="span-box">
                        <p className="word-content">
                            <span className="word-content-span">
                            卷皮严格按照消费者保障服务，商品自签收后
                                <strong className="word-content-strong">7天内</strong>
                                ，在不影响二次销售的情况下，卷皮为您提供7天无理由退货服务（特殊商品除外）。
                            </span>
                        </p>
                    </span>
                </div>
                <div className="word-content-three">
                    <div className="word-title">退货后运费谁来承担？</div>
                    <span className="span-box">
                        <p className="word-content">
                            <span className="word-content-span">
                                用户提交售后申请，售后完成后，系统会根据退货责任方与商品单价判断并补贴运费的哦~
                            </span>
                        </p>
                    </span>
                </div>
                <div className="word-content-three">
                    <div className="word-title">价格说明</div>
                    <span className="span-box">
                        <p className="word-content">
                            <span className="word-content-span">
                            1.商品的未划横线价格（显示如65）为卷皮销售价，在没有满减、额外折扣的情况下，该价格是交易成交价，是您最终决定是否购买商品的依据。
                            </span>
                        </p>
                        <p className="word-content">
                            <span className="word-content-span">
                            2.商品的划横线价格为参考价，采集自品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价可能会与您购物时展示的不一致，该价格仅供您参考。
                            </span>
                        </p>
                        <p className="word-content">
                            <span className="word-content-span">
                            3商品的折扣比为卷皮销售价与参考价的对比（该值四舍五入后采小数点后1位，如24.9/65=0.38307=3.8折），该对比值仅供您参考，不作为结算基数。
                            </span>
                        </p>
                        <p className="word-content">
                            <span className="word-content-span">
                            4. 商品促销信息以商品详情页“促销”栏中的信息为准；最终交易成交价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，请购买前先联系客服咨询。
                            </span>
                        </p>
                    </span>
                </div>
            </div>
            </>
                ):(
                    <>
                        <div className="content-one">
                            <span className="span-one">
                                商家提醒：
                                <span>此商品由品牌商从
                                    <span className="center">【浙江嘉兴】</span>
                                发货。
                                </span>
                            </span>
                        </div>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                        <img src="https://goods4.juancdn.com/goods/171207/7/f/5a29485aa9fcf88f69170afc_750x516.jpg" alt=""/>
                    </>
                )
            }  
        </TabWrap>
    )
}

export default Tabs