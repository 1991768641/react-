import React,{useState,useEffect,useCallback  } from 'react';
import {TitleWrap} from './styledetails';
import collect from 'assets/images/collect.png';


function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return JSON.parse(unescape(str));
}

function DetailsTitle(props){
    
    let [details,setdetail]=useState([]);
    let flag=false;
    let list={};
    let list1={};
    let list2={};

    if(props.detaillist.list!=undefined&&props.detaillist.list.length!==0){
        flag=true;
    }

    useEffect(()=>{
        setdetail(props.detaillist.list);
    },[flag])

    if(details&&details.length!==0){
        list=decodeUnicode(details.buyBtnInfo.zg_json);
        list1=details.skudata.info;
    }


    return (
        <TitleWrap>
            <div className="titlecontent">
                <div className="title">
                    <div className="price">
                        <span className="moreprice">
                            <span className="oldprice">
                                <span className="danwei">¥</span>
                                {list.商品单价}
                            </span>
                            {/* <span className="newprice">¥159</span> */}
                        </span>
                        <span className="baoyou">
                            包邮
                        </span>
                    </div>
                    <span className="buyed">{list1.join_number}</span>
                </div>
                <div className="content">
                    <p className="word">{list.商品名称}</p>
                    <img className="btn" src={collect} alt=""></img>
                </div>
            </div>
        </TitleWrap>
    )

}

export default DetailsTitle