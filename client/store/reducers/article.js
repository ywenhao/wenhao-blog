import {
  SET_ARTCILE,
  SET_ARTICLES,
  SET_ARTILE_LIST,
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

    case SET_ARTCILE:
      const { article } = action.payload
      return { ...state, article }

    case SET_ARTILE_LIST:
      const { list } = action.payload
      return { ...state, list }

    default:
      return state
  }
}
