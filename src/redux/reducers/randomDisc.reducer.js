const randomDisc = (state = [], action) => {
    switch (action.type) {
        case 'SET_RANDOM_DISCS':
            return action.payload;
        default:
            return state;
    }
};

export default randomDisc;