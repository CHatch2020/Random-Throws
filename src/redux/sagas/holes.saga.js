import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchHoles(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/holes/${action.payload}`
        })
        yield put({
            type: 'SET_HOLES',
            payload: response.data
        })
    } catch(err) {
        console.log('Error in holes Saga', err);
        
    }
};

function* holesSaga() {
    yield takeEvery('FETCH_HOLES', fetchHoles);
};

export default holesSaga;