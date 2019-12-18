import React, { Component } from 'react';
import {ClassifyBodyWrap} from './styleclassify';
import Classifyleft from './Classifyleft';
import Classifyright from './Classifyright';

export default class ClassifyBody extends Component {

    state={
        ids:'243'
    }

    loadid(id){
        this.setState({
            ids:id
        })
    }

    render() {
        return (
            <ClassifyBodyWrap>
                <Classifyleft
                    classifylist={this.props.classlist}
                    loadid={this.loadid.bind(this)}
                ></Classifyleft>
                {
                    this.state.ids!==''&&
                    <Classifyright
                        classifylist={this.props.classlist}
                        classid={this.state.ids}
                    ></Classifyright>
                }
                
            </ClassifyBodyWrap>
        )
    }
}
