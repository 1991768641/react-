import React, { Component } from 'react';
import fetchjsonp from 'fetch-jsonp';
import ClassifyHeaders from './Classifyheader';
import ClassifyBody from './ClassifyBody';
import './classifyreset.css';

export default class Classify extends Component {

    state={
        classlist:[]
    }

    async componentDidMount(){
        let api="https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=15615615&callback=jsonp1";
        fetchjsonp(api).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({
                classlist:res
            })
        }).catch((err)=>{
            
        });
    }

    render() {    

        return (
            <>
                <ClassifyHeaders></ClassifyHeaders>
                {
                    this.state.classlist.length>0&&
                    <ClassifyBody
                        classlist={this.state.classlist}
                    ></ClassifyBody>
                }
            </>
        )
    }
}



