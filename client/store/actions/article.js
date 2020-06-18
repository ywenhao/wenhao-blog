import {
  GET_ARTICLES,
  GET_ARTCILE,
  GET_ARTILE_LIST,
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
    type: GET_ARTILE_LIST,
    payload: {
      id,
    },
  }
}

export function getArticle(id) {
  return {
    type: GET_ARTCILE,
    payload: {
      id,
    },
  }
}
