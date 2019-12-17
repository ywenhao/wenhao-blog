import React from 'react'
import Head from "next/head";
import '../static/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'

const Header = () => {
    const [ navArray , setNavArray ] = React.useState([]);
    //跳转到列表页
    const handleClick = (e)=> {
        if(e.key === '0') {
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }
    }
    React.useEffect(()=>{
        const fetchData = async ()=>{
            const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    },[])

    return (
        <>
            <Head>
                <meta name="description" content="Ywenhao's Blog"/>
                <meta name="keywords" content="ywenhao,Ywenhao,Blog,Ywenhao's Blog,前端,web前端,前端博客"/>
                <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
            </Head>
            <div className="header">
                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                        <Link href="/index">
                            <a>
                                <span className="header-logo">Ywenhao</span>
                            </a>
                        </Link>
                        <span className="header-txt">一个前端Boy</span>
                    </Col>
                    <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
                        <Menu
                            mode="horizontal"
                            onClick={handleClick}
                        >
                            <Menu.Item key="0">
                                <Icon type="home" />
                                博客首页
                            </Menu.Item>
                            {
                                navArray.map( (item) => {
                                    return(
                                        <Menu.Item key={item.id}>
                                            <Icon type={item.icon} />
                                            {item.typeName}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
            </div>
        </>
    )
};

export default Header
