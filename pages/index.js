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
import  servicePath  from '../config/apiUrl'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

const Home = (res) => {
  const [ myList , setMyList ] = React.useState(res.list);
  const [ type , setType ] = React.useState(res.type);
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    return (
  <>
    <Head>
        <title>Ywenhao's Blog</title>
    </Head>
    <Header type={type}/>
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
              <span><Icon type="calendar" />{item.addTime.replace('T',' ').replace('.000Z', '')}</span>
              <span><Icon type="folder" /> {item.typeName}</span>
              <span><Icon type="fire" />{item.view_count}人</span>
            </div>
              <div className="list-context"
                   dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
              />
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
    Axios(servicePath.getArticleList).then( res => {
      resolve(res.data)
    })
  })
  return await promise
}

export default Home
