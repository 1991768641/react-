import React, { Component } from 'react';
import Search from './Search';
import Swiper from './Swiper';
import Hot from './Hot';
import {connect} from 'react-redux';
import {GETLIST} from '../action-type.js';
import Banner from './Banner';
import Boutique from './Boutique';
import loadding from 'assets/images/loading.svg';
import '../Layout.css';

const mapState = state =>{
    return {
        list:state.home.list
    }
}

const mapDispatch= dispatch=> ({
    loadData(){
        dispatch({
            type:GETLIST
        })
    }
})

@connect(mapState,mapDispatch)
class Appbody extends Component {
    componentDidMount() {
        this.props.loadData() 
    }

    render() {
        let swiperresult=this.props.list.swpierlist;
        let hotresult=this.props.list.hotlist;
        let bannerresult1=this.props.list.banner1;
        let bannerresult2=this.props.list.banner2;
        let bannerresult3=this.props.list.banner3;
        
        return (
            <div>
                <Search></Search>
                {
                    swiperresult!==undefined?( 
                    <Swiper
                        swiperresult={swiperresult}
                    ></Swiper>):(
                        <div className="imgloadding">
                            <img src={loadding} alt="" className="loadding"/>
                        </div>
                    )
                }
                {
                    hotresult&&(
                        <Hot
                            hotresult={hotresult}
                        ></Hot>
                    )
                }
                {
                    bannerresult1&&bannerresult2&&(
                        <Banner
                            bannerresult1={bannerresult1}
                            bannerresult2={bannerresult2}
                            bannerresult3={bannerresult3}
                        ></Banner>
                    )
                }
                <Boutique></Boutique>
                
            </div>
        )
    }
}

export default  Appbody
