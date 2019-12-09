import React, { useState } from "react";
import marked from 'marked';
import '../static/css/AddArticle.css';
import { Row, Col ,Input, Select ,Button ,DatePicker, message } from 'antd';
import Axios from "axios";
import  servicePath  from '../config/apiUrl'

const { Option } = Select;
const { TextArea } = Input;

function AddArticle() {
    const [articleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle, setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd, setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml, setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate, setShowDate] = useState('')   //发布日期
    // const [updateDate,setUpdateDate] = useState() //修改日志的日期
    const [typeInfo , setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType, setSelectType] = useState(1) //选择的文章类别
    const getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10) month = '0' + month;
        let day = date.getDate();
        if(day < 10) day = '0' + day;
        setShowDate(`${year}-${month}-${day}`);
    }
    React.useEffect(() => {
        getDate();
        Axios(servicePath.getTypeInfo).then(res=>{
            setTypeInfo(res.data.data);
            setSelectType(res.data.data[0].id);
        })
    }, [])
    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });

    const changeContent = (e)=>{
        setArticleContent(e.target.value)
        let html=marked(e.target.value)
        setMarkdownContent(html)
    }

    const changeIntroduce = (e)=>{
        setIntroducemd(e.target.value)
        let html=marked(e.target.value)
        setIntroducehtml(html)
    }

    const submitArticle = () => {
        articleTitle && introducemd && articleContent?
        Axios.post(servicePath.addArticle, {
            articleId,
            articleTitle,
            showDate,
            selectedType,
            introducemd,
            articleContent
        }).then(res=>{
            if(res.data.code === 200) {
                message.success(res.data.data, 2, () => window.location.href = '/article/list')
            } else {
                message.error(res.data.data)
            }
        }):message.error('部分内容未填写')
    }
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10} >
                        <Col span={20}>
                            <Input
                                placeholder="博客标题"
                                size="large"
                                onChange={e=>setArticleTitle(e.target.value)}
                            />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue={selectedType} size="large" onSelect={e=>setSelectType(e)}>
                                {
                                    typeInfo.map(v=>(
                                        <Option value={v.id} key={v.id}>{v.typeName}</Option>
                                    ))
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10} >
                        <Col span={12}>
                            <TextArea
                                value={articleContent}
                                className="markdown-content"
                                rows={35}
                                onChange={changeContent}
                                onPressEnter={changeContent}
                                placeholder="文章内容"
                            />
                        </Col>
                        <Col span={12}>
                            <div
                                className="show-html"
                                dangerouslySetInnerHTML={{__html:markdownContent}}
                            >
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button  size="large">暂存文章</Button>&nbsp;
                            <Button type="primary" size="large" onClick={submitArticle}>发布文章</Button>
                            <br/>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <TextArea
                                rows={4}
                                value={introducemd}
                                onChange={changeIntroduce}
                                onPressEnter={changeIntroduce}
                                placeholder="文章简介"
                                />
                            <br/><br/>
                            <div
                                className="introduce-html"
                                dangerouslySetInnerHTML={{__html: '文章简介：' + introducehtml}}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <div>
                                    发布时间：
                                </div>
                                <DatePicker
                                    format="YYYY-MM-DD"
                                    onChange={(e, v)=>setShowDate(v)}
                                    placeholder={showDate}
                                    size="large"
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle;
