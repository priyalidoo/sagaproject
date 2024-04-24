import { takeEvery } from 'redux-saga/effects';
import { Set_User_Data, USER_LIST } from './constants';


export function* userList() {
    const url = "https://dummyjson.com/users";
    let data = yield fetch(url);
    data = yield data.json();
    yield put({type:Set_User_Data, data})

}
export function* SagaData() {
    yield takeEvery(USER_LIST, userList)
}
