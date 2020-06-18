import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../store/actions'
import { Row, Col, List, Input } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Advert from '../components/Advert'
import '../static/style/pages/index.css'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
const { Search } = Input;

const Home = () => {
    const dispatch = useDispatch()
    const myList = useSelector(state => state.article.list)

    React.useEffect(() => {
      dispatch(getArticles())
    }, [])

    const onSearch = e => {
      dispatch(getArticles(e))
    };
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
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={10}>
          <List
            header={
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        最新日志
                    </div>
                    <div>
                        <Search style={{width: 200}} placeholder="搜索文章" onSearch={onSearch} />
                    </div>
                </div>
            }
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
                  <div className="list-context"
                       dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                  />
                <div className="list-more">
                  <Link href={{pathname:'/detailed',query:{id: item.id}}}>
                    <a>阅读全文 &gt;&gt;&gt; </a>
                  </Link>
                </div>
              </List.Item>
            )}
          />
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author/>
        <Advert/>
      </Col>
    </Row>
      <Footer />
  </>
)};

export default Home
