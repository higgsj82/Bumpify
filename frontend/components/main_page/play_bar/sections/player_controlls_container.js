import { connect } from 'react-redux';
import PlayerControlls from './player_controlls';
import { updateCurrentSong, playSong, pauseSong } from '../../../../actions/media_actions';

const mSTP = ({ media }) => {
    return {
        playing: media.playing,
        currentSong: media.currentSong
    }
}

const mDTP = dispatch => {
    return {
        updateCurrentSong: song => dispatch(updateCurrentSong(song)),
        playSong: song => dispatch(playSong(song)),
        pauseSong: () => dispatch(pauseSong())
    }
}


export default connect(mSTP, mDTP)(PlayerControlls);