import React, { Component } from 'react';
import Header from './Header.jsx';
import Appbody from './Appbody.jsx';
import ScrolltoTop from './scrolltoTop';
// import BScroll from 'better-scroll';

export default class home extends Component {
   
    render() {
        return (
            <>
                <div id="box">
                    <div className="scrolls" >
                        <Header></Header>
                        <Appbody></Appbody>
                    </div>
                </div>
                <ScrolltoTop></ScrolltoTop>
            </>
        )
    }
}
