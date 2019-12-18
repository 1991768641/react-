import React, { Component } from 'react';

import {Switch,Route,Redirect,withRouter } from 'react-router-dom'
import {Boutiquewrap} from './stylehome.js';
import Goodlist1 from 'components/list/goodslist.jsx';
import Goodlist2 from 'components/list/goodslist.jsx';

@withRouter
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

    render() {
        console.log(this.state.classtitle)
        return ( 
            <>
                <Boutiquewrap id="scrollstop">
                <ul>
                    <li onClick={this.handleclick} title="special">
                        {
                            this.state.classtitle==='special'?( <span className="active"  title="special">精品专场</span>):
                            (<span title="special">精品专场</span>)
                        }
                    </li>
                    <li onClick={this.handleclick} title="single">
                        {
                            this.state.classtitle==='single'?( <span className="active"  title="single">精选单品</span>):
                            (<span title="single">精选单品</span>)
                        }
                    </li>
                </ul>
                </Boutiquewrap>

                <Switch>
                    <Route
                        path="/special"
                        render={()=>(
                            <Goodlist1
                                flag="special"
                            ></Goodlist1>
                        )}
                    />

                    <Route
                        path="/single"
                        render={()=>(     
                            <Goodlist2
                                flag="single"
                            ></Goodlist2>
                        )}
                    />
                    <Redirect
                        from="/"
                        to="/special"
                    />
                
                </Switch>
            </>
        )
    }
}

export default Boutique
