import React from 'react'
import Head from "next/head";
import '../static/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'

const Header = (props) => (
    <>
        <Head>
            <meta name="description" content="Ywenhao's Blog"/>
            <meta name="keywords" content="ywenhao,Ywenhao,Blog,Ywenhao's Blog,前端,web前端,前端博客"/>
            <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
        </Head>
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">Ywenhao</span>
                    <span className="header-txt">一个前端Boy</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        {
                            props.type.map(item => (
                                <Menu.Item key={item.id}>
                                    <Icon type={item.icon}/>
                                    {item.typeName}
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
        </>
)

export default Header
