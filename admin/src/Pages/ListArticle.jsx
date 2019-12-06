import React from 'react'
import Axios from 'axios'
import servicePath from '../config/apiUrl'
import { List } from 'antd';

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
                        <List.Item.Meta title={item.title} />
                    </List.Item>
                )}
           ></List>
        </div>
    )
}

export default ListArticle;
