import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchDiscs(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/bags/${action.payload}`
        })
        yield put({
            type: 'SET_DISCS',
            payload: response.data
        })
    } catch(err) {
        console.log('Error in Discs Saga', err);
    }
};

function* fetchRandomDiscs (action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/bags/${action.payload}`
        })
        const randomDiscs = response.data.sort(() => .5 - Math.random()).slice(0,3);
        yield put({ type: 'SET_RANDOM_DISCS', payload: randomDiscs});
    } catch(err) {
        console.log('Error in fetchRandomDiscs Saga', err);
        
    }
};

function* fetchOneDisc(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url:    `/api/discs/${action.payload}`
        })
        console.log('Fetch a student', response.data);
        yield put({
            type: 'SET_DISC_TO_EDIT',
            payload: response.data
        })
    } catch(err) {
        console.log('Error in fetch One Disc Saga', err);
        
    }
}

function* addDisc(action) {
    try {
        console.log(action);
        yield axios.post(`/api/discs/${action.payload.bagId}`, action.payload);
        yield put({ type: 'FETCH_DISCS', payload: action.payload.bagId });
    } catch(err) {
        console.log('Error in addBags Saga', err);
        
    }
};

function* deleteDisc(action) {
    try {
        yield axios.delete(`/api/discs/${action.payload.discId}`);
        yield put({ type: 'FETCH_DISCS', payload: action.payload.bagId })
    } catch(err) {
        console.log('Error in delete Saga', err);
        
    }
}

function* discSaga() {
    yield takeEvery('FETCH_DISCS', fetchDiscs);
    yield takeEvery('ADD_DISC', addDisc);
    yield takeEvery('FETCH_RANDOM_DISC', fetchRandomDiscs);
    yield takeEvery('DELETE_DISC', deleteDisc);
    yield takeEvery('FETCH_ONE_DISC', fetchOneDisc);
};

export default discSaga;