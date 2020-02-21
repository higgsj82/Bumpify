import React from 'react';
import { Route, Switch, NavLink} from 'react-router-dom';
import ArtistContainer from './artist_show/artist_container';

class MainRoot extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount () {
    //     this.props.getAllAlbums();
    //     this.props.getAllArtists();
    // }

    render() {
        // let albs = albums ? albums : null;
        // let arts = artists ? artists : null;

       return (
            <section className="main-root-section">
                <div className="main-root-header" >
                    <div className="main-root-arrows" >
                       <i className="fas fa-arrow-circle-left"></i>
                       <i className="fas fa-arrow-circle-right"></i>
                    </div>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
                   <h2>Artists</h2>
               <div className="content-container">
                   <div className="tile-container">
                       <img className='tile' src={window.overit} />
                   </div>
                   <div className="tile-container">
                       <img className='tile' src={window.shakira} />
                   </div>
                   <div className="tile-container">
                       <img className='tile' src={window.damn} />
                   </div>
                   <div className="tile-container">
                       <NavLink to="/artist/9">
                       <img className='tile' src={window.homecoming} />
                       </NavLink>
                   </div>
               </div>
                   <h2>Albums</h2>
               <div className="content-container">
                   <div className="tile-container">
                       <img className='tile' src={window.blonde} />
                   </div>
                   <div className="tile-container">
                       <img className='tile' src={window.kendrick} />
                   </div>
                   <div className="tile-container">
                       <img className='tile' src={window.ctrl} />
                   </div>
                   <div className="tile-container">
                       <img className='tile' src={window.currentAlbum} />
                   </div>
               </div>
               <div>
                       <h2>Playlists</h2>
                   <div className="content-container">
                   </div>
               </div>
            </section>
        )
    }
}

export default MainRoot;