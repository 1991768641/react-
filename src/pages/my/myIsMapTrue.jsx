import React, { Component } from 'react';
import { Switch } from 'antd-mobile';
import { connect } from 'react-redux';
import {SETSHOW} from '../action-type';

@connect(state=>({
    IsShowMap:state.home.IsShowMap
}),dispatch=>({
    handlechange(checked){
        dispatch({
            type:SETSHOW,
            data:checked
        })
    }
}))
class MyIsMapTure extends Component {
    render() {
        return (
            <>
                是否显示购车
            <Switch
                    checked={this.props.IsShowMap}
                    onChange={checked=>{
                        this.props.handlechange(checked)
                        localStorage.setItem('flag',checked)
                    }}
                />
            </>
        )
    }
}



// function MyIsMapTure(props) {

//     let [flag, setflag] = useState(true);

//     useEffect(() => {

//     })

//     return (
        
//     )
// }

export default MyIsMapTure