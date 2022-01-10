const discs = (state = [], action) => {
    switch (action.type) {
        case 'SET_DISCS':
            return action.payload;
        case 'CLEAR_DISCS':
            return [];
        default:
            return state;
    };
};

export default discs