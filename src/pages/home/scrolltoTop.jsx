import React, { Component } from 'react';
import {ScrollsTop} from './stylehome';

export default class scrolltoTop extends Component {

    handleclick(){
        console.log(789)
    }

    render() {
        return (
            <ScrollsTop className="topdisplay" onClick={this.handleclick}>
                <img src="https://web.juanpi.com/static/media/goTop.ed22d69f.png" alt="backtop"/>
            </ScrollsTop>
        )
    }
}
