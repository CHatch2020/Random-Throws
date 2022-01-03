import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchBags() {
    try {
        console.log('Testing bags Saga');
        
        const response = yield axios({
            method: 'GET',
            url: '/api/bags'
        })
        yield put({
            type: 'SET_BAGS',
            payload: response.data
        })
    } catch(err) {
        console.log('Error in bags Saga', err);
        
    }
}

function* bagsSaga() {
    yield takeEvery('FETCH_BAGS', fetchBags);
}

export default bagsSaga;