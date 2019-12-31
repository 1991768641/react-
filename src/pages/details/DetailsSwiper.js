import React,{useState,useEffect,useCallback  } from 'react';
import { Carousel } from 'antd-mobile';
import { SwiperWarp } from './styledetails';

function filters(arr){
    let list=[];
    let newimg=[];
    for(var i=0;i<arr.length;i++){
        list.push(arr[i].av_origin_zpic)
    }
    for(var i=0;i<list.length;i++){
        if (newimg.indexOf(list[i]) == -1) {
            newimg.push(list[i]);
        }
    }
    return newimg;
}

function Swiper(props) {
    let [imglist,setimg]=useState([]);
    let result={};
    if(props.list.skudata){
        result=props.list.skudata.sku;
        imglist=filters(result);
    }

    return (
        <SwiperWarp>
            {
                 imglist.length>=0?
                 <Carousel
                     autoplay={false}
                     dotActiveStyle={{
                        width:'0.6822rem',
                        background:'#fff',
                        borderRadius:'10px'
                     }}
                     dotStyle={{
                        width:'0.3413rem',
                        borderRadius:'50%',
                        margin:'0 0.128rem',
                        transition:'all 0.5s'
                     }}
                 >
                    {
                        imglist.map((value,index)=>{
                            return (
                                <div className="pic" key={value+index}>
                                    <img src={value} alt=""/>
                                </div>  
                            )
                        })
                    }
                 </Carousel>:null
            }
        </SwiperWarp>
    )
}

export default Swiper
