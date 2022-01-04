import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import bagsSaga from './bags.saga';

function* fetchCourses() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/courses'
        })
        yield put({
            type: 'SET_COURSES',
            payload: response.data
        })
    } catch(err) {
        console.log('Error in courses Saga');
        
    }
};

function* coursesSaga() {
    yield takeEvery('FETCH_COURSES', fetchCourses)
}

export default coursesSaga;