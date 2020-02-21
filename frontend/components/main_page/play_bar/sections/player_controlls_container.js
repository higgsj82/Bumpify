import { connect } from 'react-redux';
import PlayerControlls from './player_controlls';
import { updateCurrentSong } from '../../../../actions/media_actions';

const mSTP = state => {
    return {
        currentSong: state.song
    }
}

const mDTP = dispatch => {
    return {
        updateCurrentSong: song => dispatch(updateCurrentSong(song))
    }
}


export default connect(mSTP, mDTP)(PlayerControlls);