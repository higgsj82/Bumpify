import { connect } from 'react-redux';
import MediaPlayer from './media_player';


const mSTP = state => {
    return {
        currentSong: state.media.currentSong
    }
}

const mDTP = dispatch => {
    
}


export default connect(mSTP)(MediaPlayer);
