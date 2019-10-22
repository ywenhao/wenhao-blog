import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List , Icon } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Advert from '../components/Advert'
import '../static/style/pages/index.css'
import Axios from 'axios'

const Home = (list) => {
  const [ myList , setMyList ] = React.useState(list.data)

  return (
  <>
    <Head>
        <title>Ywenhao's Blog</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
      <div>    
      <List
        header={<div>最新日志</div>}
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
              <span><Icon type="calendar" /> 2019-06-28</span>
              <span><Icon type="folder" /> 视频教程</span>
              <span><Icon type="fire" /> 5498人</span>
            </div>
            <div className="list-context">{item.context}</div>
            <div className="list-more">
              <Link href={{pathname:'/detailed',query:{id: item.id}}}>
                <a>阅读全文 >>> </a>
              </Link>
            </div>
          </List.Item>
        )}
      />    
    </div>
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author/>
        <Advert/>
      </Col>
    </Row>
      <Footer />
  </>
)}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    Axios('http://127.0.0.1:7001/default/getArticleList').then( res => {
      resolve(res.data)
    })
  })
  return await promise
}

export default Home
