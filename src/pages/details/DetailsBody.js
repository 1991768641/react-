import React,{useState,useEffect,useCallback  } from 'react';
import DetailsTitle from './DetailsTitle.js';
import DetailsSmallBody from './DetailsSmallBody.js';

function DetailsBody(props){


    const [detaillist,setdetaillist]=useState([]);

    // if(props.list.length!=0){
    //     // let result=decodeUnicode(props.list.buyBtnInfo.zg_json);
        
    //     setdetaillist(props.list)
    //     // console.log(props)
    // }


    useEffect(()=>{
        async function foo(){
            await setdetaillist(props)
            // if(props.list.length!=0){
                
            //     console.log(0)
               
            // }
        }
        foo()
    },[])

    console.log(detaillist)

    return (
        <>
            <DetailsTitle></DetailsTitle>
            <DetailsSmallBody></DetailsSmallBody>
        </>
    )
}

export default DetailsBody