import { connect } from 'react-redux';
import Artist from './artist';
import { getArtist } from '../../../../actions/artist_actions';
// import { getAllAlbums } from '../../../../actions/album_actions';
import { logout } from '../../../../actions/session_actions';
import { updateCurrentSong } from '../../../../actions/media_actions';

const mSTP = (state = {}, ownProps) => {
    const artistId = ownProps.match.params.id;
    const albumIds = ownProps.match.params.album_ids;
    const artist = state.entities.music.artists[artistId];
    const songIds = artist ? artist.song_ids : []

    const popularSongs = songIds.map(id => {
        return state.entities.music.songs[id]
    })
    // const popularSongs = state.entities.artists[artistId].popularSongs;

    return {
        artistId,
        artist: artist,
        albumIds,
        popularSongs
    }
}

const mDTP = dispatch => {
    return {
        getArtist: id => dispatch(getArtist(id)),
        logout: () => dispatch(logout()),
        updateCurrentSong: song => dispatch(updateCurrentSong(song))
        // follow: () => dispatch(follow(artist))
    }
}


export default connect(mSTP, mDTP)(Artist);