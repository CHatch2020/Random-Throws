const bags = (state = [], action) => {
    switch (action.type) {
        case 'SET_BAGS':
            return action.payload;
        default:
            return state;
    }
    
}

export default bags;