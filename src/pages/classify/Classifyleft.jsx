import React, { Component } from 'react';
import './classifyreset.css';

export default class Classifyleft extends Component {

    componentDidMount(){
        var list =document.querySelectorAll('.classify-left li')[0];
        list.className="liactive"
    }

    handleclick(e){
        var list =document.querySelectorAll('.classify-left li');
        for(var i=0;i<list.length;i++){
            list[i].className="";
        }
        e.target.className="liactive";
        this.props.loadid(e.target.id)
    }

    render() {
        return (
            <div className="classify-left">
                <ul>
                    {
                        this.props.classifylist.map((value)=>{
                            return (
                                <li key={value.id} onClick={this.handleclick.bind(this)} id={value.id}>
                                    {value.name}
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}
