import React,{useState,useEffect,useCallback  } from 'react';
import {TitleWrap} from './styledetails';
import collect from 'assets/images/collect.png';

function DetailsTitle(){

    return (
        <TitleWrap>
            <div className="titlecontent">
                <div className="title">
                    <div className="price">
                        <span className="moreprice">
                            <span className="oldprice">
                                <span className="danwei">¥</span>
                                52
                            </span>
                            <span className="newprice">¥159</span>
                        </span>
                        <span className="baoyou">
                            包邮
                        </span>
                    </div>
                    <span className="buyed">2403人已购</span>
                </div>
                <div className="content">
                    <p className="word">冬季新款韩版超长款加厚保暖毛衣裙女过膝修身显瘦包臀针织连衣裙</p>
                    <img className="btn" src={collect} alt=""></img>
                </div>
            </div>
        </TitleWrap>
    )

}

export default DetailsTitle