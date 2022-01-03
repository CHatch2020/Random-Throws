import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchDiscs() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/discs'
        })
        yield put({
            type: 'SET_DISCS',
            payload: response.data
        })
    } catch(err) {
        console.log('Error in Discs Saga', err);
    }
};

function* discSaga() {
    yield takeEvery('FETCH_DISCS', fetchDiscs);
};

export default discSaga;