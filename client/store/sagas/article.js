import { take, fork, call, put } from 'redux-saga/effects'
import { articleApi } from '../../api'
import {
  GET_ARTICLE,
  GET_ARTICLES,
  GET_ARTICLE_LIST,
  SET_ARTICLE,
  SET_ARTICLES,
  SET_ARTICLE_LIST,
  SET_LOADING,
} from '../constants'

function* getArticle(id) {
  try {
    yield put({
      type: SET_LOADING,
      payload: {
        loading: true,
      }
    })

    const article = yield call(articleApi.getArticle, id)

    yield put({
      type: SET_ARTICLE,
      payload: {
        article,
      }
    })

    yield put({
      type: SET_LOADING,
      payload: {
        loading: false,
      }
    })
  } catch (err) {
    console.log(err)
  }
}

function* watchGetArticle() {
  while(true) {
    const { payload } = yield take(GET_ARTICLE)
    yield fork(getArticle, payload.id)
  }
}

function* getArticles(keyword) {
  try {
    yield put({
      type: SET_LOADING,
      payload: {
        loading: true,
      }
    })

    const list = yield call(articleApi.getArticles, keyword)

    yield put({
      type: SET_ARTICLES,
      payload: {
        list,
      }
    })

    yield put({
      type: SET_LOADING,
      payload: {
        loading: false,
      }
    })
  } catch (err) {
    console.log(err)
  }
}

function* watchGetArticles() {
  while(true) {
    const { payload } = yield take(GET_ARTICLES)
    yield fork(getArticles, payload.keyword)
  }
}

function* getArticleList(id) {
  try {
    yield put({
      type: SET_LOADING,
      payload: {
        loading: true,
      }
    })

    const list = yield call(articleApi.getArticleList, id)

    yield put({
      type: SET_ARTICLE_LIST,
      payload: {
        list,
      }
    })

    yield put({
      type: SET_LOADING,
      payload: {
        loading: false,
      }
    })
  } catch (err) {
    console.log(err)
  }
}

function* watchGetArticleList() {
  while(true) {
    const { payload } = yield take(GET_ARTICLE_LIST)
    yield fork(getArticleList, payload.id)
  }
}

export {
  watchGetArticle,
  watchGetArticles,
  watchGetArticleList,
}
