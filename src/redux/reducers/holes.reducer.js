const holes = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOLES':
            return action.payload;
        default:
            return state;
    };
};

export default holes;