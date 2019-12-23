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
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

@connect((state)=>({
  IsShowMap:state.home.IsShowMap
}))
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname:this.props.location.pathname,
      hidden: false,
      fullScreen: true,
    };
  }

  componentDidMount(){
    let {pathname} =this.state;
    if(pathname==='/'){
      this.setState({
        pathname:'/index/special'
      })
    }else if(pathname==='/index/single'){
      this.setState({
        pathname:'/index/special'
      })
    }else if(pathname==='/cart/map'){
      this.setState({
        pathname:'/cart/menu'
      })
    }
    if(this.props.location.pathname==='/'){
      this.props.history.push('/index/special')
    }
  }

  render() {
    let {pathname} =this.state;
    // console.log(this.props.IsShowMap);
    return (
      
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
              this.props.history.push('/index/special')
              this.setState({
                pathname:'/index/special'
              })
            }}
            selected={pathname === '/index/special'}
            data-seed="logId"
          >
            <Home></Home>
            
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
              this.props.history.push('/classify')
              this.setState({
                pathname:'/classify'
              })
            }}
            selected={pathname === '/classify'}
            data-seed="logId1"
          >
            <Classify></Classify>
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
            selected={pathname === '/cart/menu'}
            onPress={() => {
              this.props.history.push('/cart/menu')
              this.setState({
                pathname:'/cart/menu'
              })
            }}
          >
            <Cart></Cart>
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
            selected={pathname === '/my'}
            onPress={() => {
              this.props.history.push('/my')
              this.setState({
                pathname:'/my'
              })
            }}
          >
            <My></My>
          </TabBar.Item>
            ].filter((Item,index)=>{
              return (index===2&&this.props.IsShowMap)||index!==2
            })
          }  
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Layout)
