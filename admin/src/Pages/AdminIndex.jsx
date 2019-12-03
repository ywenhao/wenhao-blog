import React from 'react';
import { Route } from "react-router-dom";
import AddArticle from './AddArticle'
import { Layout, Menu, Breadcrumb, Icon, message, Dropdown, Avatar } from 'antd';
import '../static/css/AdminIndex.css';
import Axios from 'axios';
import  servicePath  from '../config/apiUrl';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
  const [collapsed, setCollapsed] = React.useState(false)
  const [avatarVisible, setAvatarVisible] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  const loginOut = () => {
    Axios(servicePath.checkOut).then(
      res => {
        if (res.data.code === 200) {
          message.success(res.data.data, 2, () => props.history.push('/login'))
        } else {
          message.error(res.data.data)
        }
      }
    )
  }
  const avatarHandler = ({key}) => {
    if (key === 'loginOut') {
      loginOut()
    }
  }
  React.useEffect(() => {
    Axios(servicePath.checkLoginStatus).then(
      res => {
        if(res.data.code === 200) {
          setIsLogin(true);
        } else {
          message.error(res.data.data, 2, () => props.history.push('/login'));
        }
      }
    ).catch(()=>message.error('网络故障'))
  });

  return isLogin && (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="3">添加文章</Menu.Item>
            <Menu.Item key="4">文章列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} >
            <Dropdown
              overlay={(
                <Menu onClick={avatarHandler}>
                  <Menu.Item key="setting">个人设置</Menu.Item>
                  <Menu.Item key="loginOut">退出登录</Menu.Item>
                </Menu>
              )}
              placement="bottomLeft"
              visible={avatarVisible}
              onVisibleChange={(e)=>setAvatarVisible(e)}
              >
              <Avatar icon="user" style={{position: "absolute", right: '40px', top: '40px'}}/>
            </Dropdown>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <div>
            <Route path="/index/" exact  component={ AddArticle } />
          </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ywenhao's Blog</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminIndex;

