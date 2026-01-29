import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import AppHeader from './components/common/header';
import AppHome from './views/home';
import { Layout } from 'antd';
import AppFooter from './components/common/footer';
const { Header, Content,Footer} = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content> 
      <Footer>
        <AppFooter></AppFooter>
        </Footer>    
    </Layout>
  );
}

export default App;