import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

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

function* fetchSelectedCourses() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/selected_courses'
        })
        yield put({ 
            type: 'SET_SELECTED_COURSES',
            payload: response.data
        })
    } catch(err) {
        console.log('Error in selected courses Saga');
        
    }
}

function* addCourse(action) {
    try {
        yield axios.post('/api/courses', action.payload);
        //yield put sage that is calling back selected courses
    } catch(err) {
        console.log('Error in addCourse Saga');
        
    }
}

function* coursesSaga() {
    yield takeEvery('FETCH_COURSES', fetchCourses);
    yield takeEvery('ADD_COURSES', addCourse);
    yield takeEvery('FETCH_SELECTED_COURSES', fetchSelectedCourses);
}

export default coursesSaga;