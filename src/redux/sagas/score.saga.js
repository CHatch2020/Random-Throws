import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* sendScore(action) {
    try {
        console.log(action);
        
        yield axios({
            method: 'POST',
            url: `/api/score/${action.payload.currentCourse}/${action.payload.currentHole}`,
            data: {score: action.payload.score}
        })
    } catch(err) {
        console.log('Error in sendScore Saga', err);
    }
};

function* fetchScores(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/score/${action.payload}`
        })
        yield put({
            type: 'SET_SCORES',
            payload: response.data
        })
    } catch(err) {
        console.log('Error in fetchScores Saga', err);
        
    }
}

function* scoreSaga() {
    yield takeEvery('SEND_SCORE', sendScore);
    yield takeEvery('FETCH_SCORES', fetchScores);
};

export default scoreSaga;