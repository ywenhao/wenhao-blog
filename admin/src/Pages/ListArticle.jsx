import React from 'react'
import Axios from 'axios'
import servicePath from '../config/apiUrl'
import { List, Input } from 'antd';
import { Link } from 'react-router-dom';
const { Search } = Input;

const ListArticle = () => {
    const [articleList, setArticleList] = React.useState([]);
    const onSearch = value => {
        Axios(servicePath.getArticleList, {
            params: {
                keyword: value,
            }
        }).then(res => {
            setArticleList(res.data.list);
        })
    };
    React.useEffect(()=> {
        Axios(servicePath.getArticleList).then(res=> {
            setArticleList(res.data.list);
        })
    }, []);
    return (
        <div>
            <Search placeholder="请输入搜索关键字" onSearch={onSearch} style={{ width: 200 }}/>
           <List
                dataSource={articleList}
                renderItem={item=>(
                    <List.Item
                        key={item.id}
                    >
                        <List.Item.Meta title={<Link to="/artcile/add">{item.title}</Link>} />
                    </List.Item>
                )}
           />
        </div>
    )
};

export default ListArticle;
