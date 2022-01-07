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
};

function* addBag(action) {
    try {
        yield axios.post('/api/bags', action.payload);
        yield put({ type: 'FETCH_BAGS'});
    } catch(err) {
        console.log('Error in addbags Saga', err);
    }
};

function* bagsSaga() {
    yield takeEvery('FETCH_BAGS', fetchBags);
    yield takeEvery('ADD_BAG', addBag)
};

export default bagsSaga;