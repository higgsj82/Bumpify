import { connect } from 'react-redux';
import PlayerControlls from './player_controlls';

const mSTP = state => {
    return {
        currentSong: state.song
    }
}

// const mDTP = dispatch => {

// }


export default connect(mSTP)(PlayerControlls);