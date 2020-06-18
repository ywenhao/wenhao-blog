import servicePath from '../config/apiUrl'
import Axios from 'axios'

async function getArticles(keyword) {
  try {
      const { list } = 
        await Axios(servicePath.getArticleList, keyword && { 
          params: {
            keyword,
          }
        }).then(res => res.data)

    return list
  } catch (err) {
    console.log(err)
  }
}

async function getArticle(id) {
  try {
    const article = await Axios(servicePath.getArticleById + id).then(res => res.data.data[0])
    
    return article
  } catch (err) {
    console.log(err)
  }
}

async function getArticleList(id) {
  try {
    const list = await Axios(servicePath.getListById + id).then(res => res.data.data)
    
    return list
  } catch (err) {
    console.log(err)
  }
}

const articleApi = {
  getArticles,
  getArticle,
  getArticleList,
}

export default articleApi
