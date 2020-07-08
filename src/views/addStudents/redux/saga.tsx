import { put, call, takeLatest } from 'redux-saga/effects';

import Student from '../../../services/serviceStudent';
import * as add from './actions';
import * as actions from '../../../shared/redux/constants';

function* performFetch(action: any) {
  try {
    yield put(add.starts());
    const response = yield call(Student.add, action.payload);
    yield put(add.success(response.status));
  } catch (error) {
    yield put(
      add.fails({
        error,
      })
    );
  } finally {
    yield put(add.ends());
  }
}

function* performRemove(action: any) {
  try {
    yield put(add.starts());
    const response = yield call(Student.remove, action.payload);
    yield put(add.success(response.status));
  } catch (error) {
    yield put(
      add.fails({
        error,
      })
    );
  } finally {
    yield put(add.ends());
  }
}

export default function* watchFetch() {
  yield takeLatest(actions.REQUEST_STUDENT_FETCH, performFetch);
  yield takeLatest(actions.REQUEST_STUDENT_REMOVE, performRemove);
}
