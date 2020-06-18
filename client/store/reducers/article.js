import {
  SET_ARTICLE,
  SET_ARTICLES,
  SET_ARTICLE_LIST,
} from '../constants'

const INITIAL_STATE = {
  list: [],
  article: {},
}

export default function article(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ARTICLES:
      const { list } = action.payload
      return { ...state, list }

    case SET_ARTICLE:
      const { article } = action.payload
      return { ...state, article }

    case SET_ARTICLE_LIST:
      const { list: articleList } = action.payload
      return { ...state, list: articleList }

    default:
      return state
  }
}
