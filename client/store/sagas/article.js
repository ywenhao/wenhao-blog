import { take, fork, call, put } from 'redux-saga/effects'
import {
  GET_ARTICLE,
  GET_ARTICLES,
  GET_ARTICLE_LIST,
  SET_ARTICLE,
  SET_ARTICLES,
  SET_ARTICLE_LIST,
} from '../constants'

function* getArticle(id) {
  try {
    const article = yield call(classifyApi.getArticle, id)

    yield put({
      type: SET_ARTICLE,
      payload: {
        article,
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
    const list = yield call(classifyApi.getArticles, keyword)

    yield put({
      type: SET_ARTICLES,
      payload: {
        list,
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
    const list = yield call(classifyApi.getArticle, id)

    yield put({
      type: SET_ARTICLE_LIST,
      payload: {
        list,
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
