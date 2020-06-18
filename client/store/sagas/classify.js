import { take, fork, call, put } from 'redux-saga/effects'
import { classifyApi } from '../../api'
import { GET_CLASSIFY, SET_CLASSIFY } from '../constants'

function* getClassify() {
  try {
    const classify = yield call(classifyApi.getClassify)

    yield put({
      type: SET_CLASSIFY,
      payload: {
        classify,
      }
    })
  } catch (err) {
    console.log(err)
  }
}

function* watchGetClassify() {
  while(true) {
    yield take(GET_CLASSIFY)
    yield fork(getClassify)
  }
}

export {
  watchGetClassify,
}
