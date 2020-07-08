import { combineReducers } from 'redux';
import add from '../../views/addStudents/redux/reducer';
import list from '../../views/showStudents/redux/reducer';
import detail from '../../views/detailStudent/redux/reducer';

const reducer = combineReducers({ add, list, detail });

export default reducer;
