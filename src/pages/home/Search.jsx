import React, { Component } from 'react'
import searchImg from 'assets/images/search.png';
import juanpiImg from 'assets/images/juanpilogo.png';
import {SearchWarp} from './stylehome.js';
import { Icon } from 'antd-mobile';

export default class search extends Component {
    render() {
        return (
            <SearchWarp>
                <div className="body-search">
                    <div className="left">
                        <span>
                            <Icon type="search" size="xs" />
                        </span>
                        <span>
                            <img src={juanpiImg} alt="" />
                        </span>
                        <span>搜索</span>
                    </div>
                    <div className="right">
                        <img src={searchImg} alt="" />
                    </div>
                </div>
            </SearchWarp>
        )
    }
}
