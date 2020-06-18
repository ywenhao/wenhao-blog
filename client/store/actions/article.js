import {
  GET_ARTICLES,
  GET_ARTICLE,
  GET_ARTICLE_LIST,
} from '../constants'

export function getArticles(keyword) {
  return {
    type: GET_ARTICLES,
    payload: {
      keyword,
    }
  }
}

export function getArticleList(id) {
  return {
    type: GET_ARTICLE_LIST,
    payload: {
      id,
    },
  }
}

export function getArticle(id) {
  return {
    type: GET_ARTICLE,
    payload: {
      id,
    },
  }
}
