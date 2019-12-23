import React, { Component } from 'react';
import { Goodslistwrap } from './goodsliststyled.js';

import { get } from 'utils/http.js';
import BScroll from 'better-scroll';
import { withRouter } from 'react-router-dom'

@withRouter
class goodslist extends Component {
    
    state = {
        Bscroll: '',
        num1:1,
        num2:1,
        goodslist1: [],
        goodslist2:[],
        newlist1: [],
        newlist2:[]
        // flag:this.props.flag
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.flag !== state.flag) {
    //         return {
    //             flag: props.flag
    //         }
    //     }
    //     return null
    // }

    async componentDidMount() {
        let result1=await get({
            url: `https://webservice.juanpi.com/api/getGoods?page=${this.state.num}&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc`
        })
        let result2=await get({
            url: `https://webservice.juanpi.com/api/getGoods?page=${this.state.num}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp`
        })

        this.setState({
            goodslist1: result1.data.goods,
            newlist1: result1.data.goods,
            goodslist2: result2.data.goods,
            newlist2: result2.data.goods
        })

        const scroll = new BScroll(document.querySelector('#box'), {
            pullUpLoad: true,
            probeType: 2,
            click: true
        })
        this.setState({
            Bscroll: scroll,
        })

        this.scrolldata();
        this.scrolltoTop();
        // console.log()
        // this.props.history.listen((route)=>{
        //     let newflag=route.pathname==='/special'?'special':'single';
        //     this.setState({
        //         flag:newflag
        //     })
        // })
    }

    scrolltoTop(){
        // let scrollstop=document.getElementById('scrollstop');
        let topdisplay=document.getElementsByClassName('topdisplay')[0];
        
        if (this.state.Bscroll) {
            const { Bscroll } = this.state;
            Bscroll.on('scroll',function(){
                if(this.y<-400){
                    topdisplay.style.display='block';
                    // scrollstop.style.position='fixed';
                    // scrollstop.style.top='700px';
                    // scrollstop.style.zIndex='999';
                }else{
                    topdisplay.style.display='none';
                }
            })
        }
    }

    scrolldata() {
        if (this.state.Bscroll) {
            const { Bscroll } = this.state;
            Bscroll.on("pullingUp", async () => {
                let { newlist1,newlist2,num1,num2 } = this.state;
                if(this.props.location.pathname==='/index/special'){
                    if (newlist1.length > 0) {
                        num1++;
                        this.setState({
                            num1:num1  
                        })
                        await this.loaddata(num1);
                    }
                    Bscroll.refresh();
                    Bscroll.finishPullUp();
                }else{
                    if(newlist2.length > 0){
                        num2++;
                        this.setState({
                            num2:num2
                        })
                        await this.loaddata(num2);
                    }
                    Bscroll.refresh();
                    Bscroll.finishPullUp();
                }
                Bscroll.refresh();
                Bscroll.finishPullUp();
            })
        }
    }

    async loaddata(num) {
        if (this.props.location.pathname === '/index/special') {
           
            let result = await get({
                url: `https://webservice.juanpi.com/api/getGoods?page=${num}&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc`
            })
            this.setState({
                goodslist1: [
                    ...this.state.goodslist1,
                    ...result.data.goods
                ],
                newlist1: result.data.goods
            })
        } else {
            let result = await get({
                url: `https://webservice.juanpi.com/api/getGoods?page=${num}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp`
            })
            this.setState({
                goodslist2: [
                    ...this.state.goodslist2,
                    ...result.data.goods
                ],
                newlist2: result.data.goods
            })
        }   
    }
    render() {
        let pathname=this.props.location.pathname;
        return (
            <Goodslistwrap>
                {
                    pathname==='/index/special'?
                    this.state.goodslist1.map((value) => {
                        return (
                            <div className="goodlist" key={value.goods_id+'1'}>
                                <div className="content">
                                    <div className="img">
                                        <img src={value.pic_url} className="main" alt="" />
                                        <img src={value.logo_url} className="right" alt="" />
                                        <img src={value.corner} className="left" alt="" />
                                    </div>
                                    <div className="word1">
                                        <span className="reduction">{value.coupon_tips}</span>
                                    </div>
                                    <div className="word2">
                                        {value.title}
                                        <p className="update">{value.time_left}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }):
                    this.state.goodslist2.map((value) => {
                        return (
                            <div className="goodlist" key={value.goods_id+'2'}>
                                <div className="content">
                                    <div className="img">
                                        <img src={value.pic_url} className="main" alt="" />
                                        <img src={value.logo_url} className="right" alt="" />
                                        <img src={value.corner} className="left" alt="" />
                                    </div>
                                    <div className="word1">
                                        <span className="reduction">{value.coupon_tips}</span>
                                    </div>
                                    <div className="word2">
                                        {value.title}
                                        <p className="update">{value.time_left}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Goodslistwrap>
        )
    }
}

export default goodslist
