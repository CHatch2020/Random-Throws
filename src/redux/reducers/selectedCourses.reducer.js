const selectedCourses = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_COURSES':
            console.log(action.payload);
            return action.payload
        default:
            return state
    }
};

export default selectedCourses;