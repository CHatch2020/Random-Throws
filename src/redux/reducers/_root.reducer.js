import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import bags from './bags.reducer';
import discs from './discs.reducer';
import courses from './courses.reducer';
import selectedCourses from './selectedCourses.reducer';
import holes from './holes.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  bags, // to grab all of the bags they created from db
  discs, // grabs all the discs for specified bag
  courses,
  selectedCourses,
  holes,
});

export default rootReducer;
