import React, { useState } from "react";
import marked from 'marked';
import '../static/css/EditArticle.css';
import { Row, Col ,Input, Select ,Button ,DatePicker, message } from 'antd';
import Axios from "axios";
import  servicePath  from '../config/apiUrl'

const { Option } = Select;
const { TextArea } = Input;

function EditArticle(props) {
    if (!props.match.params.id) {
        message.error('文章id为空', 2, () => props.history.push('/article/list'))
    }
    const [articleId] = useState(props.match.params.id);  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    // const [showDate,setShowDate] = useState()   //发布日期
    const [updateDate,setUpdateDate] = useState('') //修改日志的日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType,setSelectType] = useState(1) //选择的文章类别

    React.useEffect(() => {
        const articleData = sessionStorage.getItem('articleData');
        const data = articleData && JSON.parse(articleData);
        if (articleData && data.articleId === articleId) {
            setSelectType(data.selectedType);
            setTypeInfo(data.typeInfo);
            setArticleTitle(data.articleTitle);
            setUpdateDate(data.updateDate);
            setIntroducemd(data.introducemd);
            setIntroducehtml(marked(data.introducemd));
            setArticleContent(data.articleContent);
            setMarkdownContent(marked(data.articleContent));
            message.success('读取缓存成功', 1)
        } else {
            Axios(servicePath.getTypeInfo).then(res=>{
                setTypeInfo(res.data.data);
            });

            Axios(servicePath.getArticleById + articleId).then(res=> {
                const data = res.data.data[0];
                setSelectType(data.typeId);
                setArticleTitle(data.title);
                setIntroducemd(data.introduce);
                setUpdateDate(data.updateTime);
                setIntroducehtml(marked(data.introduce));
                setArticleContent(data.article_content);
                setMarkdownContent(marked(data.article_content));
            })
        }
    }, [articleId]);
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
    const saveData = () => {
        const articleData = {
            articleId,
            typeInfo,
            articleTitle,
            updateDate,
            selectedType,
            introducemd,
            articleContent
        };
        sessionStorage.setItem('articleData', JSON.stringify(articleData));
        message.success('暂存成功');
    };
    const tempSave = () => {
        articleTitle && introducemd && articleContent?
            saveData():
            message.error('部分内容未填写');
    };
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
        Axios.post(servicePath.addArticle, {
            articleId,
            articleTitle,
            updateDate,
            selectedType,
            introducemd,
            articleContent
        }).then(res=>{
            if(res.data.code === 200) {
                message.success(res.data.data, 1, () => window.location.href = '/article/list')
            } else {
                message.error(res.data.data)
            }
        })
    }
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10} >
                        <Col span={20}>
                            <Input
                                value={articleTitle}
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
                            <Button  size="large" onClick={tempSave}>暂存文章</Button>&nbsp;
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
                            <div>文章简介：</div>
                            <div
                                className="introduce-html"
                                dangerouslySetInnerHTML={{__html: introducehtml}}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <div>
                                    修改时间：
                                </div>
                                <DatePicker
                                    format="YYYY-MM-DD"
                                    onChange={(e, v)=>setUpdateDate(v)}
                                    placeholder={updateDate}
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

export default EditArticle;
