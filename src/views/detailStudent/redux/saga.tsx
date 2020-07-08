import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import Student from '../../../services/serviceStudent';
import * as detail from './actions';
import * as actions from '../../../shared/redux/constants';

function* performFetch(action: any) {

    try {
        yield put(detail.starts());
        const response = yield call(Student.getById, action.payload);
        yield put(detail.success(response));
    } catch (error) {
        yield put(detail.fails({
            error
        }));
    } finally {
        yield put(detail.ends());
    }
}



export default function* watchFetch() {
    yield takeLatest(actions.DETAILS_STUDENT_FETCH, performFetch);
}