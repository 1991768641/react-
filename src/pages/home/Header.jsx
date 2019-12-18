import React, { Component } from 'react'
import {HeaderWrap} from './stylehome.js'
import goloadImg from 'assets/images/go_load_new.png'

export default class header extends Component {
    render() {
        return (
            <HeaderWrap>
                <img src={goloadImg} alt=""/>
            </HeaderWrap>
        )
    }
}
