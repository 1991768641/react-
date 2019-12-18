import React, { Component } from 'react';
import { SwiperWarp } from './stylehome.js';
import { Carousel } from 'antd-mobile';

class Swiper extends Component {

    render() {

        return (
            <SwiperWarp>
                {
                    (<Carousel
                    autoplay={true}
                    autoplayInterval={3000}
                    infinite={true}
                    dotActiveStyle={{
                        width:'0.6822rem',
                        background:'#fff',
                        borderRadius:'10px'
                    }}
                    dotStyle={{
                        width:'0.3413rem',
                        borderRadius:'50%',
                        margin:'0 0.128rem',
                        transition:'all 0.5s'
                    }}
                >
                    {
                        this.props.swiperresult.map((value) => {
                            return (<img src={value.pic} key={value.id} alt="" />)
                        })
                    }
                </Carousel>)
                }

            </SwiperWarp>
        )
    }
}

export default Swiper
