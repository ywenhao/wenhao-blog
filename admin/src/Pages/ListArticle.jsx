import React from 'react'
import Axios from 'axios'
import servicePath from '../config/apiUrl'
import { List, Input, Button, message, Modal } from 'antd';
import { Link } from 'react-router-dom';
import '../static/css/ListArticle.css';
const { Search } = Input;
const { confirm } = Modal;

const ListArticle = (props) => {
    const [articleList, setArticleList] = React.useState([]);
    const [current, setCurrent] = React.useState(1);
    const editHandler = (id) => {
        props.history.push('/article/edit/' + id);
    };
    const deleteHandler = (id, title) => {
        confirm({
            title: '提示',
            content: '确认删除 "' + title + '" ？',
            cancelText: '取消',
            okText: '确定',
            onOk() {
                Axios.post(servicePath.delArticle, { id }).then(res => {
                    if (res.data.code === 200) {
                        message.success(res.data.data);
                        onSearch()
                    } else {
                        message.error((res.data.data))
                    }
                })
            }
        });
    };
    const onSearch = value => {
        Axios(servicePath.getArticleList, {
            params: {
                keyword: value,
            }
        }).then(res => {
            setCurrent(1);
            setArticleList(res.data.list);
        })
    };
    React.useEffect(() => {
        onSearch();
    }, []);
    return (
        <div>
            <Search placeholder="请输入搜索关键字" onSearch={onSearch} onChange={(e)=>onSearch(e.target.value)} style={{ width: 200 }}/>
           <List
                dataSource={articleList}
                pagination={{position: 'bottom', current, onChange: (e)=> setCurrent(e) }}
                renderItem={item => (
                    <List.Item
                        key={item.id}
                    >
                        <List.Item.Meta title={<Link to={"/article/edit/"+ item.id}>{item.title}<span style={{position:"absolute",left: '20%'}}>{item.updateTime}</span></Link>} />
                        <div className="list-item-btn">
                            <Button icon="edit" type="primary" onClick={() => editHandler(item.id)}/>
                            <Button icon="delete" type="danger" onClick={() => deleteHandler(item.id, item.title)}/>
                        </div>
                    </List.Item>
                )}
           />
        </div>
    )
};

export default ListArticle;
