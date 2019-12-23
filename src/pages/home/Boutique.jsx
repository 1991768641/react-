import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'
import {Boutiquewrap} from './stylehome.js';
import Goodlist from 'components/list/goodslist.jsx';


class Boutique extends Component {
    state={
        classtitle:this.props.history.location.pathname.substr(1)
    }

    handleclick=(event)=>{
        this.props.history.push('/'+event.target.title)
        this.setState({
            classtitle:this.props.history.location.pathname.substr(1)
        })
    }
    componentDidMount(){
        if(this.state.classtitle.length===0){
            this.setState({
                classtitle:'index/special'
            })
        }
    }

    render() {
        let pathname=this.props.location.pathname;
        return ( 
            <>
                <Boutiquewrap id="scrollstop">
                <ul>
                    <li onClick={this.handleclick} title="index/special">
                        {
                            pathname==='/index/special'?( <span className="active"  title="index/special">精品专场</span>):
                            (<span title="index/special">精品专场</span>)
                        }
                    </li>
                    <li onClick={this.handleclick} title="index/single">
                        {
                            pathname==='/index/single'?( <span className="active"  title="index/single">精选单品</span>):
                            (<span title="index/single">精选单品</span>)
                        }
                    </li>
                </ul>
                </Boutiquewrap>
                <Goodlist></Goodlist>
                {/* <Switch>
                    <Route
                        path="/index/special"
                        render={()=>(
                            <Goodlist1></Goodlist1>
                        )}
                    />

                    <Route
                        path="/index/single"
                        render={()=>(     
                            
                        )}
                    />
                </Switch> */}
            </>
        )
    }
}

export default withRouter(Boutique)
