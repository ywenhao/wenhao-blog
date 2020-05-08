import React  from 'react';
import { Card, Input, Button, Spin, message } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import axios from 'axios';
import  servicePath  from '../config/apiUrl';
import 'antd/dist/antd.css';
import '../static/css/Login.css';

function Login(props) {
    const [userName , setUserName] = React.useState('')
    const [password , setPassword] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const checkLogin = ()=> {
        setIsLoading(true)

        if(!userName){
            setIsLoading(false)
            message.error('用户名不能为空')
            return false
        }else if(!password){
            setIsLoading(false)
            message.error('密码不能为空')
            return false
        }
        let dataProps = {
            'userName': userName,
            'password': password
        }
        axios({
            method:'POST',
            url: servicePath.checkLogin,
            data: dataProps,
            withCredentials: true,
        }).then(
           res => {
                setIsLoading(false)
                if(res.data.code === 200) {
                    localStorage.setItem('token',res.data.token)
                    props.history.push('/index')
                }else{
                    message.error(res.data.data)
                }
           }
        ).catch(err => {
            setIsLoading(false)
            message.error('网络故障')
        })
    }
    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="Ywenhao's Blog  System" bordered={true} style={{ width: 400 }} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        onPressEnter={checkLogin}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login
