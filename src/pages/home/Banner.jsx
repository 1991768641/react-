import React, { Component } from 'react'
import { Bannerwrap } from './stylehome';

export default class Banner extends Component {
    render() {
        // console.log(this.props.bannerresult1[0])
        return (
           <Bannerwrap>
                <div className="banner0">
                   <img src={this.props.bannerresult0[0].child[0].pic} alt=""/>
                </div>

                <div className="bannner1">
                    <div className="bannner1-left">
                        <img src={this.props.bannerresult1[0].child[0].pic} alt="" />
                    </div>
                    <div className="bannner1-right">
                        <img src={this.props.bannerresult1[1].child[0].pic} alt="" />
                        <img src={this.props.bannerresult1[1].child[1].pic} alt="" />
                    </div>
                </div>

               <div className="banner2">
                    {
                        this.props.bannerresult2.map((value)=>{
                            return (<div key={value.child[0].bd_id}>
                                <img src={value.child[0].pic} alt="" />
                                </div>
                            )
                        })
                    }
               </div>
               <div className="banner3">
                   {
                        this.props.bannerresult3.map((value)=>{
                            return (<div key={value.child[0].bd_id}>
                                <img src={value.child[0].pic} alt="" />
                                </div>
                            )
                        })
                   }
               </div>
              
           </Bannerwrap>
        )
    }
}
