import React,{useState,useEffect,useCallback  } from 'react';
import DetailsTitle from './DetailsTitle.js';
import DetailsSmallBody from './DetailsSmallBody.js';
import _ from 'lodash';

function DetailsBody(props){

    const [detaillist,setdetaillist]=useState([]);
    let flag=false;

    if(props.list.length!=0){
        flag=true;
    }

    useEffect(()=>{
        async function foo(){
            setdetaillist(props)
        }
        foo()
    },[flag])

    // setTimeout(()=>{
    //     // console.log(_.uniqBy(detaillist.list.skudata.sku,'av_zvalue'))
    // },1000)
    

    return (
        <>
            <DetailsTitle
                detaillist={{...detaillist}}
            ></DetailsTitle>
            <DetailsSmallBody

            ></DetailsSmallBody>
        </>
    )
}

export default DetailsBody