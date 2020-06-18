import { fork, all } from 'redux-saga/effects'
import { watchGetClassify } from './classify'
import { watchGetArticle, watchGetArticles, watchGetArticleList } from './article'

export default function* rootSaga () {
  yield all([
    fork(watchGetClassify),
    fork(watchGetArticle),
    fork(watchGetArticles),
    fork(watchGetArticleList),
  ])
}
