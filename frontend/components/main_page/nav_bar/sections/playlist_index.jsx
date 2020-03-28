import React from 'react';
import { NavLink } from 'react-router-dom';


class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getPlaylists();
    }

    listItems(playlists, ids) {
        // let { playlists, ids } = this.props;
        
        ids.map((id, idx) => {
            let playlist = playlists[id];
            if (typeof playlist === 'undefined') return null;
            return(
                <NavLink to={`/playlists/${id}`} key={idx}>
                    <li className='list-item'>
                        <p className='list-item-name'>
                            {playlist.name}
                        </p>
                    </li>
                </NavLink>
            )
        })
    }

    render() {
        // debugger
        let { playlists, ids } = this.props;

        if (typeof ids === 'undefined') return null;

        // ids.map((id, idx) => {
        //     let playlist = playlists[id];
        //     return (
        //         <NavLink to={`/playlists/${id}`} key={idx}>
        //             <li className='list-item'>
        //                 <p className='list-item-name'>
        //                     {playlist.name}
        //                 </p>
        //             </li>
        //         </NavLink>
        //     )
        // })
        return this.listItems(playlists, ids);
        
    }
}

export default PlaylistIndex;