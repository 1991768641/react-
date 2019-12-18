import React, { Component } from 'react';
import { HotWarp } from './stylehome';

class Hot extends Component {
    render() {
        return (
            <HotWarp>
                {
                    this.props.hotresult.map((value) => {
                        return (
                            <div key={value.child[0].bd_id}>
                                <img src={value.child[0].pic} alt="" />
                            </div>
                        )
                    })
                }
            </HotWarp>
        )
    }
}

export default Hot