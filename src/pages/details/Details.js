import React, { Component,useState,useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import {get} from 'utils/http.js';
import DetailsFooter from './DetailsFooter.js';
import DetailsSwiper from './DetailsSwiper.js';
import DetailsBody from './DetailsBody.js';
import {ZongWrap} from './styledetails.js';

function Details(){
    let location = useLocation();
    const [id,setid]= useState({
        goods_id:location.pathname.slice(9).split('-')[0],
        sa_id:location.pathname.slice(9).split('-')[1]
    });
    const [list,setlist] =useState([]);

    useEffect( ()=>{
        async function fetchdata(){
            let result=await get({
                url:`/ajax/api/getMemberAboutInfo?goods_id=${id.goods_id}&sa_id=${id.sa_id}&is_pt_goods=0&req_coupons_id=${id.goods_id}`
            })
            setlist(result);
        }
        fetchdata();
    },[]);

    return (
        <ZongWrap>
            <DetailsSwiper
                list={list}
            ></DetailsSwiper>
            <DetailsBody
                list={list}
            ></DetailsBody>
            <DetailsFooter></DetailsFooter>
        </ZongWrap>
    )
}
export default Details
