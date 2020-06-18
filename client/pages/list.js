import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import { withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getArticleList } from '../store/actions'
import { Row, Col, List , Breadcrumb } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Advert from '../components/Advert'
import '../static/style/pages/list.css'


const ListPage = ({ myList }) => {
    const dispatch = useDispatch()
    const myList = useSelector(state => state.article.list)

    return (
        <>
            <Head>
                <title>Ywenhao's Blog - List</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={10}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/index">首页</a></Breadcrumb.Item>
                                {/* <Breadcrumb.Item>{myList.length && mylist[0].typeName}</Breadcrumb.Item> */}
                            </Breadcrumb>
                        </div>
                        <List
                            itemLayout="vertical"
                            dataSource={myList}
                            renderItem={item => (
                                <List.Item>
                                    <div className="list-title">
                                        <Link href={{pathname:'/detailed',query:{id: item.id}}}>
                                            <a>{item.title}</a>
                                        </Link>
                                    </div>
                                    <div className="list-icon">
                                        <span className="tips"><CalendarOutlined />{item.addTime}</span>
                                        <span className="tips"><FolderOutlined />{item.typeName}</span>
                                        <span className="tips"><FireOutlined />{item.view_count}人</span>
                                    </div>
                                    <div className="list-context">{item.introduce}</div>
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                </Col>
            </Row>
            <Footer/>
        </>
    )
};

ListPage.getInitialProps = context => {
    const id = context.query.id
    const dispatch = useDispatch()
    dispatch(getArticleList(id))
    const myList = useSelector(state => state.article.list)
    return { myList }
}

export default ListPage
