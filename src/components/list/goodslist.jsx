import React, { PureComponent } from 'react';
import { Goodslistwrap } from './goodsliststyled.js';
import { get } from 'utils/http.js';
import BScroll from 'better-scroll';
import { withRouter } from 'react-router-dom';

let flag=true;

@withRouter
class goodslist extends PureComponent {
    
    state = {
        Bscroll: '',
        num1:1,
        num2:1,
        goodslist1: [],
        goodslist2:[],
        newlist1: [],
        newlist2:[]
    }

    UNSAFE_componentWillMount() {
        flag=false
    }
    
    async componentDidMount() {
        let result1=await get({
            url: `/ajax/api/getGoods?page=${this.state.num1}&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc`
        })
        let result2=await get({
            url: `/ajax/api/getGoods?page=${this.state.num2}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp`
        })

        if(result1&&result2){
            flag=true;
        }

        if(flag===true){
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
        }

        // console.log()
        // this.props.history.listen((route)=>{
        //     let newflag=route.pathname==='/special'?'special':'single';
        //     this.setState({
        //         flag:newflag
        //     })
        // })
    }

    componentWillUnmount(){
        this.setState({
            Bscroll: '',
            num1:1,
            num2:1,
            goodslist1: [],
            goodslist2:[],
            newlist1: [],
            newlist2:[]
        })
    }

    scrolltoTop(){
        let topdisplay=document.getElementsByClassName('topdisplay')[0];

        if(this.props.location.pathname==='/index/home/special'||this.props.location.pathname==='/index/home/single'){
            topdisplay.style.display='none';
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
        }else{
            topdisplay.style.display='none';
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
        if (this.props.location.pathname === '/index/home/special') {
            let result = await get({
                url: `/ajax/api/getGoods?page=${num}&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc`
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
                url: `/ajax/api/getGoods?page=${num}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp`
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

    handleclick=(e)=>{
        let id=e.target.title;
        this.props.history.push(`/details/${id}`)
    }

    render() {
        let pathname=this.props.location.pathname;
        return (
            <Goodslistwrap>
                {
                    pathname==='/index/home/special'?
                    this.state.goodslist1.map((value) => {
                        let titles=value.goods_id+'-'+value.shop_id;
                        return (
                            <div className="goodlist" key={value.goods_id+'1'} onClick={this.handleclick} title={titles}>
                                <div className="content" title={titles}>
                                    <div className="img" title={titles}>
                                        <img src={value.pic_url} className="main" alt="" title={titles} />
                                        <img src={value.logo_url} className="right" alt="" title={titles}/>
                                        <img src={value.corner} className="left" alt="" title={titles} />
                                    </div>
                                    <div className="word1" title={titles}>
                                        <span className="reduction" title={titles}>{value.coupon_tips}</span>
                                    </div>
                                    <div className="word2" title={titles}>
                                        {value.title}
                                        <p className="update" title={titles}>{value.time_left}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }):
                    this.state.goodslist2.map((value) => {
                        let titles=value.goods_id+'-'+value.shop_id;
                        return (
                            <div className="goodlist" key={value.goods_id+'2'}  onClick={this.handleclick}  title={titles}>
                                <div className="content"  title={titles}>
                                    <div className="img"  title={titles}>
                                        <img src={value.pic_url} className="main" alt=""  title={titles} />
                                    </div>
                                    <div className="word1"  title={titles}>
                                        <span className="reduction"  title={titles}>{value.coupon_tips}</span>
                                    </div>
                                    <div className="word2"  title={titles}>
                                        {value.title}
                                        <p className="update"  title={titles}>{value.time_left}</p>
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
