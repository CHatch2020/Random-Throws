const discToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DISC_TO_EDIT':
            return {
                disc_name: action.payload.disc_name,
            speed: action.payload.speed,
            glide: action.payload.glide,
            turn: action.payload.turn,
            fade: action.payload.fade,
            stability: action.payload.stability
            };
        case 'CHANGE_NAME':
            return {...state, disc_name: action.payload};
        case 'CHANGE_SPEED':
            return {...state, speed: action.payload};
        case 'CHANGE_GLIDE':
            return {...state, glide: action.payload};
        case 'CHANGE_TURN':
            return {...state, turn: action.payload};
        case 'CHANGE_FADE':
            return {...state, fade: action.payload};
        case 'CHANGE_STABILITY':
            return {...state, stability: action.payload};
        default:
            return state;
    }
};

export default discToEdit;