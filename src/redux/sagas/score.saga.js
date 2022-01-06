import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* sendScore(action) {
    try {
        yield axios({
            method: 'POST',
            url: `/api/score/${action.payload.currentCourse}/${action.payload.currentHole}`,
            payload: action.payload.score
        })
    } catch(err) {
        console.log('Error in sendScore Saga', err);
    }
};

function* scoreSaga() {
    yield takeEvery('SEND_SCORE', sendScore);
};

export default scoreSaga;