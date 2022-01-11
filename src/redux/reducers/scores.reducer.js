const scores = (state = [], action) => {
    switch (action.type) {
        case 'SET_SCORES':
            return action.payload;
        default:
            return state;
    }
    
}

export default scores;