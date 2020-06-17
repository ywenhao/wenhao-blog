import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware, ];

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  sagaMiddleware.run();
  return store;
}
