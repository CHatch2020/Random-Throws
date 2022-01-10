const discToEdit = (state = {}, action) => {
    if (action.type === 'SET_DISC_TO_EDIT') {
        return {
            disc_name: action.payload.disc_name,
            speed: action.payload.speed,
            glide: action.payload.glide,
            turn: action.payload.turn,
            fade: action.payload.fade,
            stability: action.payload.stability
        }
    }
    return state;
};

export default discToEdit;