import React from 'react'
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

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%',maxWidth:'540px',left:'50%',transform: 'translate(-50%, 0)', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#333"
          tintColor="#ff464e"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '2.0889rem',
              height: '1.024rem',
              background: `url(${home}) center center /  0.6533rem 0.6533rem no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '2.0889rem',
              height: '1.024rem',
              background: `url(${homeactive}) center center / 0.6533rem 0.6533rem no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <Home></Home>
            
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '2.0889rem',
                height: '1.024rem',
                background: `url(${classfy}) center center /  0.6533rem 0.6533rem no-repeat`}}
              />
            }
            selectedIcon={
              <div style={{
                width: '2.0889rem',
                height: '1.024rem',
                background: `url(${classfyactive}) center center /  0.6533rem 0.6533rem no-repeat`}}
              />
            }
            title="分类"
            key="classify"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Classify></Classify>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '2.0889rem',
                height: '1.024rem',
                background:`url(${cart}) center center /  0.6533rem 0.6533rem no-repeat`}}
              />
            }
            selectedIcon={
              <div style={{
                width: '2.0889rem',
                height: '1.024rem',
                background: `url(${cartactive}) center center /  0.6533rem 0.6533rem no-repeat`}}
              />
            }
            title="购物车"
            key="cart"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <div>123</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '2.0889rem',
                height: '1.024rem',
                background:`url(${my}) center center /  0.6533rem 0.6533rem no-repeat`}}
              />
            }
            selectedIcon={
              <div style={{
                width: '2.0889rem',
                height: '1.024rem',
                background: `url(${myactive}) center center /  0.6533rem 0.6533rem no-repeat`}}
              />
            }
            title="我的卷皮"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <My></My>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Layout
