import { RECEIVE_ARTIST } from "../../actions/artist_actions";

const artistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ARTIST:
    
        default:
            return state;
    }
}