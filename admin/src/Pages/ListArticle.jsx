import React from 'react'
import Axios from 'axios'
import servicePath from '../config/apiUrl'
import { List } from 'antd';
import { Link } from 'react-router-dom';

const ListArticle = () => {
    const [articleList, setArticleList] = React.useState([]);
    React.useEffect(()=> {
        Axios(servicePath.getArticleList).then(res=> {
           setArticleList(res.data.list)
        })
    }, [])
    return (
        <div>
           <List
                dataSource={articleList}
                renderItem={item=>(
                    <List.Item
                        key={item.id}
                    >
                        <Link to="/artcile/add">
                            <List.Item.Meta title={item.title} />
                        </Link>
                    </List.Item>
                )}
           />
        </div>
    )
}

export default ListArticle;
