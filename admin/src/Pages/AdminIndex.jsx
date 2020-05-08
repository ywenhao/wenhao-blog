import React from 'react';
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
// import AddArticle from './AddArticle'
import { Layout, Menu, message, Dropdown, Avatar } from 'antd';
import { GetIcons } from '../plugins/get-icons'
import Breadcrumb from '../components/BreadCrumb';
import '../static/css/AdminIndex.css';
import Axios from 'axios';
import  servicePath  from '../config/apiUrl';
import  menus  from '../config/menus';
import  routes  from '../config/routes';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
    const menuSelected = props.history.location.pathname;
    const menuOpened = `/${menuSelected.split('/')[1]}`;
    const [isLogin, setIsLogin] = React.useState(false);
    const [collapsed, setCollapsed] = React.useState(false);
    const [avatarVisible, setAvatarVisible] = React.useState(false);
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
    ).catch(()=>message.error('网络故障'))
    };
    const avatarHandler = ({key}) => {
    if (key === 'loginOut') {
      loginOut()
    }
    };
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
          <div className="logo" >你好，<em>{new Date().getFullYear()}</em></div>
        <Menu theme="dark" defaultSelectedKeys={[menuSelected]} mode="inline" defaultOpenKeys={[menuOpened]}>
            {
                menus.map(value => {
                  const Icon = GetIcons(value.icon)
                    return value.SubMenu?(<SubMenu
                        key={value.path}
                        title={value.title}
                        icon={<Icon />}
                    >
                        {
                            value.children.map(v => (
                                <Menu.Item key={v.path}>
                                    <Link to={v.path} >
                                        {v.title}
                                    </Link>
                                </Menu.Item>
                            ))
                        }
                    </SubMenu>):(
                        <Menu.Item key={value.path}>
                            <Link to={value.path} >{<Icon />}{value.title}</Link>
                        </Menu.Item>
                    );
                })
            }
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
              <Avatar icon={<UserOutlined />} style={{position: "absolute", right: 40, top: 20}}/>
            </Dropdown>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
          {/*  <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>*/}
          {/*  <Breadcrumb.Item>工作台</Breadcrumb.Item>*/}
          {/*</Breadcrumb>*/}
          <Breadcrumb />
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>
              <Switch>
                  {
                      routes.map(value => (
                       <Route path={value.path} key={value.path} component={value.component}/>
                      ))
                  }
                <Redirect from="/" exact to="/index" />
                <Redirect to="/404" />
              </Switch>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ywenhao's Blog</Footer>
      </Layout>
    </Layout>
    );
}

export default withRouter(AdminIndex);

