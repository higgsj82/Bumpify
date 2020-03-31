import React from 'react';
import PlayBarContainer from './play_bar/play_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainRootContainer from './root/main_root_container';
import { Route, Switch } from 'react-router-dom';
import ArtistContainer from './root/artist_show/artist_container';
import MediaPlayerContainer from './media_player_container';
import PlaylistContainer from './root/playlist_show/playlist_container';
// import AlbumContainer from './root/album/album_container';
// import SearchContainer from './root/search/seach_container';


class MainPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return(
            <div className="main-page-div">
                <NavBarContainer/>
                <MediaPlayerContainer/>
                <div className="root-routes">
                    <Switch>
                        {/* <Route path="/album/:id" component={AlbumContainer} /> */}
                        <Route path="/artist/:id" component={ArtistContainer} />
                        <Route path="/playlists/:id" component={PlaylistContainer} />
                        {/* <Route path="/search" component={SearchContainer} /> */}
                        <Route exact path ="/" component={MainRootContainer} />
                    </Switch>
                </div>
                <div className="main-page-footer">
                    <PlayBarContainer/>
                </div>
            </div>
        )
    }
}

export default MainPage;