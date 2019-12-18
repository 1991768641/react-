import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas.js'

const sagaMiddleware = createSagaMiddleware()
const store=createStore(reducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

export default store