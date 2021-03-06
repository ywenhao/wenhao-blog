import React from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { getArticle } from '../store/actions'
import { Row, Col, Affix, Breadcrumb, Spin } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Author from '../components/Author'
import Advert from '../components/Advert'
import '../static/style/pages/detailed.css'
// import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../components/tocify.tsx'

const Detailed = ({ id }) => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.article.loading)
    const article = useSelector(state => state.article.article)
    let articleContent = article.article_content
    
    React.useEffect(() => {    
        dispatch(getArticle(id))
    }, [id])
    const tocify = new Tocify()
    const renderer = new marked.Renderer();
      renderer.heading = function(text, level) {
        const anchor = tocify.add(text, level);
        return `<h${level}><a id="${anchor}" href="#${anchor}" class="anchor-fix">${text}</a></h${level}>`;
        // return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
      };

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    let markdown =  articleContent && marked(articleContent);
    return (
        <>
            <Head>
                <title>Ywenhao's Blog - Detailed</title>
            </Head>
            <Header/>
            <Spin spinning={loading} tip="Loading...">
                <Row className="comm-main" type="flex" justify="center">
                    <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={10}>
                        <div>
                            <div className="bread-div">
                                <Breadcrumb>
                                    <Breadcrumb.Item><a href="/index">??????</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>{article.typeName}</Breadcrumb.Item>
                                    <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <div>
                                <div className="detailed-title">
                                    {article.title}
                                </div>
                                <div className="list-icon center">
                                    <span className="tips"><CalendarOutlined />{article.addTime}</span>
                                    <span className="tips"><FolderOutlined />{article.typeName}</span>
                                    <span className="tips"><FireOutlined />{article.view_count}???</span>
                                </div>
                                <div className="detailed-content">
                                        <ReactMarkdown
                                            source={markdown}
                                            escapeHtml={false}
                                        />
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                        <Author/>
                        <Advert/>
                        <Affix offsetTop={5}>
                            <div className="detailed-nav comm-box">
                                <div className="nav-title">????????????</div>
                                <div className="toc-list">
                                    {tocify && tocify.render()}
                                </div>
                                {/* <MarkNav
                                    className="article-menu"
                                    source={markdown}
                                    ordered={false}
                                /> */}
                            </div>
                        </Affix>
                    </Col>
                </Row>
            </Spin>
            <Footer/>
        </>
    )
}

Detailed.getInitialProps = context => {
    let id = context.query.id
    return { id }
}

export default Detailed
