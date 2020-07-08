import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import Student from '../../../services/serviceStudent';
import * as list from './actions';
import * as actions from '../../../shared/redux/constants';

function* performFetch(action: any) {

    try {
        yield put(list.starts());
        const response = yield call(Student.get);
        yield put(list.success(response));
    } catch (error) {
        yield put(list.fails({
            error
        }));
    } finally {
        yield put(list.ends());
    }
}



export default function* watchFetch() {
    yield takeLatest(actions.LIST_STUDENT_FETCH, performFetch);
}