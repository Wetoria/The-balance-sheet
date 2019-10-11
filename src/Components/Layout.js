import React, { Component } from 'react';
import {
  Layout,
} from 'antd';

import MainView from '../Views/MainView';

const {
  Sider,
  Header,
  Content,
} = Layout;

class MainLayout extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    this.setState({
      collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Sider
          width="40"
        >
        </Sider>
        <Layout style={{ fontSize: 0 }}>
          <Header style={{ padding: 0 }}></Header>
          <Content>
            <MainView />
          </Content>
        </Layout>
      </Layout>
    );
  };
}

export default MainLayout;
