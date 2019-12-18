import React, { Component } from 'react'

export default class Classifyright extends Component {

    state={
        classrightlist:[],
        classid:this.props.classid
    }

    loaddata(){
        let result=this.props.classifylist;
        for(var i=0;i<result.length;i++){
            if(result[i].id===this.props.classid){
                this.setState({
                    classrightlist:result[i]
                })
            }
        }
    }

    componentDidMount(){
        this.loaddata()
    }
    
    componentDidUpdate(){
        if(this.props.classid!==this.state.classid){
            this.setState({
                classid:this.props.classid
            });
            this.loaddata();
        }
    }

    render() {
        return (
            <>
            {
                this.state.classrightlist!==''&&
                <div className="classify-right">
                    <div className="wraper">
                        <div className="third-cate">
                            {
                                this.state.classrightlist.secondCateList!==undefined &&
                                this.state.classrightlist.secondCateList.map((value)=>{
                                    return (
                                        <div className="cate-second" key={value.id} id={value.id}>
                                            <img src={"https://s2.juancdn.com"+value.icon} alt=""/>
                                            <span>{value.name}</span>
                                            {
                                                value.icon_type==='1'?(<div className="icon-hot icon">HOT</div>):
                                                value.icon_type==='2'?(<div className="icon-new icon">NEW</div>):
                                                value.icon_type==='3'?(<div className="icon-rec icon">推荐</div>):
                                                (<></>)
                                            }
                                            
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            }
        </>
        )
    }
}
