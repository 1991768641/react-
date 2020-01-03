import React,{useState,useEffect  } from 'react';
import {ModalWarp} from './stylemodal';
import Delete from 'assets/images/error.png';
import { Toast } from 'antd-mobile';

function Modaled(props){

    let [num,setnum]=useState(1);

    let handleclick=()=>{
        props.value.setflag(!props.value.flag)
    }

    let addclick=()=>{
        setnum((num)=>(
            num=num+1
        ));
    }
    let minusclick=()=>{
        if(num>=2){
            setnum((num)=>(
                num=num-1
            ));
        }
    }    
    let addcartclick=(e)=>{
        Toast.info('成功加入购物车', 1);
    }

    useEffect(()=>{
        let spanmius=document.getElementsByClassName('minus')[0];
        if(num>=2){
            spanmius.className="minus light";
        }else{
            spanmius.className="minus nolight";
        }
    })

    return (
        <ModalWarp>
            <div className="content">
                <div className="top">
                    <div className="imgs">
                        <img src="https://goods6.juancdn.com/goods/181219/b/8/5c19d5e633b0890c49016204_800x800.jpg?imageMogr2/thumbnail/200x200!/quality/80!/format/jpg" alt=""/>
                    </div>
                    <div className="word">
                        <div className="price">￥59</div>
                        <div className="tips">请选择 颜色 尺码</div>
                    </div>
                    <div className="close">
                        <div>
                            <img src={Delete} alt="关闭" onClick={handleclick}/>
                        </div>
                    </div>
                </div>
                <div className="bodyed">
                    <span className="bodyed-color">颜色</span>
                    <div className="list1">
                        <div className="item1">酒红</div>
                        <div className="item1">酒红</div>
                        <div className="item1">酒红</div>
                    </div>
                    <span className="bodyed-color">尺码</span>
                    <div className="list1">
                        <div className="item1">酒红</div>
                        <div className="item1">酒红</div>
                        <div className="item1">酒红</div>
                    </div>
                    <div className="step">
                        <span>购买数量</span>
                        <div className="caozuo">
                            <span className="minus nolight" onClick={minusclick}>-</span>
                            <span className="value">{num}</span>
                            <span className="add light" onClick={addclick}>+</span>
                        </div>
                    </div>
                </div>
                <div className="bottom" onClick={addcartclick}>确定</div>
            </div>
        </ModalWarp>
    )
}

export default Modaled

// {
//     a,
//     1
// },
// {
//     a,
//     2
// }


// a:{
//     1:{
//         id1
    
//     },
//     2:{
//         id1
    
//     },
    
// },
// b:{
//     1,
//     2,
//     3
// }