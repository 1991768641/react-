import React,{ Component }  from 'react'
import {TabBar} from 'antd-mobile';
import home from 'assets/images/home.png';
import homeactive from 'assets/images/homeactive.png';
import cart from 'assets/images/cart.png';
import cartactive from 'assets/images/cartactive.png';
import classfy from 'assets/images/classfy.png';
import classfyactive from 'assets/images/classfyactive.png';
import my from 'assets/images/my.png';
import myactive from 'assets/images/myactive.png';
import './Layout.css';
import Home from './home/Home.jsx';
import Classify from './classify/Classify.jsx';
import My from './my/my.js';
import Cart from './cart/cart.js';
import Detail from './details/Details.js';
import { withRouter, Route,Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

@connect((state)=>({
  IsShowMap:state.home.IsShowMap
}))
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    let pathname=this.props.location.pathname;
  
    return (
          <Switch>
            <Route path='/details/:id' render={()=>(<Detail></Detail>)}/>
            <Route path='/index' render={()=>(
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%',maxWidth:'540px',left:'50%',transform: 'translate(-50%, 0)', top: 0 } : { height: 400 }}>
            <TabBar
              unselectedTintColor="#333"
              tintColor="#ff464e"
              hidden={this.state.hidden}
            >
              {
                [
                  <TabBar.Item
                title="首页"
                key="home"
                icon={<div style={{
                  width: '1.0667rem',
                  height: '1.0667rem',
                  background: `url(${home}) center center /  1.0667rem 1.0667rem no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                  width: '1.0667rem',
                  height: '1.0667rem',
                  background: `url(${homeactive}) center center / 1.0667rem 1.0667rem no-repeat` }}
                />
                }
                onPress={() => {
                  this.props.history.push('/index/home/special')
                }}
                selected={pathname === '/index/home/special'}
                data-seed="logId"
              >
                <Route path='/index/home' component={Home}/>
              </TabBar.Item>,
              <TabBar.Item
                icon={
                  <div style={{
                    width: '1.0667rem',
                    height: '1.0667rem',
                    background: `url(${classfy}) center center /  1.0667rem 1.0667rem no-repeat`}}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '1.0667rem',
                    height: '1.0667rem',
                    background: `url(${classfyactive}) center center /  1.0667rem 1.0667rem no-repeat`}}
                  />
                }
                title="分类"
                key="classify"
                onPress={() => {
                  // Ae226622
                  this.props.history.push('/index/classify')
                }}
                selected={pathname === '/index/classify'}
                data-seed="logId1"
              >
                <Route path='/index/classify' component={Classify}/>
              </TabBar.Item>,
              <TabBar.Item
                icon={
                  <div style={{
                    width: '1.0667rem',
                    height: '1.0667rem',
                    background:`url(${cart}) center center /  1.0667rem 1.0667rem no-repeat`}}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '1.0667rem',
                    height: '1.0667rem',
                    background: `url(${cartactive}) center center /  1.0667rem 1.0667rem no-repeat`}}
                  />
                }
                title="购物车"
                key="cart"
                selected={pathname === '/index/cart/menu'}
                onPress={() => {
                  this.props.history.push('/index/cart/menu')
                }}
              >
                <Route path='/index/cart' component={Cart}/>
              </TabBar.Item>,
              <TabBar.Item 
                className="myclass"
                icon={
                  <div style={{
                    width: '1.0667rem',
                    height: '1.0667rem',
                    background:`url(${my}) center center /  1.0667rem 1.0667rem no-repeat`}}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '1.0667rem',
                    height: '1.0667rem',
                    background: `url(${myactive}) center center /  1.0667rem 1.0667rem no-repeat`}}
                  />
                }
                title="我的卷皮"
                key="my"
                selected={pathname === '/index/my'}
                onPress={() => {
                  this.props.history.push('/index/my')
                }}
              >
                <Route path='/index/my' component={My}/>
              </TabBar.Item>
                ].filter((Item,index)=>{
                  return (index===2&&this.props.IsShowMap)||index!==2
                })
              }  
            </TabBar>
          </div>  
            )}/>
            <Redirect
              from='/'
              to='/index/home/special'
            >
            </Redirect>
        </Switch>
    )
  }
}

export default withRouter(Layout)
