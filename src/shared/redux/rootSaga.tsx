import { fork, all } from 'redux-saga/effects';
import add from '../../views/addStudents/redux/saga';
import list from '../../views/showStudents/redux/saga';
import detail from '../../views/detailStudent/redux/saga';


export default function* rootSaga() {
    yield all([
        fork(add),
        fork(list),
        fork(detail),
    ]);
}