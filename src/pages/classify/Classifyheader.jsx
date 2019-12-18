import React, { Component } from 'react';
import {ClassifyHeaderWrap} from './styleclassify.js';
import search from 'assets/images/search1.png';

export default class Header extends Component {
    render() {
        return (
            <ClassifyHeaderWrap>
                <div className="box-search">
                    <input type="search" id="keyword" name="keyword"  placeholder="搜索商品" />
                </div>
                <button id="search-submit" type="submit">
                    <img src={search} alt="" />
                </button>
            </ClassifyHeaderWrap>
        )
    }
}
