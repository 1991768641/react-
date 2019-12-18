import {takeEvery} from 'redux-saga/effects';
import {GETLIST,GETCLASSLIST} from 'pages/action-type.js';
import {sagas as home} from 'pages/index.js';

function* sagas() {
  yield takeEvery(GETLIST, home.action);
  yield takeEvery(GETCLASSLIST,home.classaction);
}

export default sagas;