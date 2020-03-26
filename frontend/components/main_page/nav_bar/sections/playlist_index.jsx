import React from 'react';
import { NavLink } from 'react-router-dom';


class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getPlaylists();
    }

    listItems() {
        let { playlists, ids } = this.props;

        ids.map((id, idx) => {
            return(
                <NavLink to={`/playlists/${id}`}>
                    <li className='list-item'>
                        <p className='list-item-name'>
                            {playlists[id].name}
                        </p>
                    </li>
                </NavLink>
            )
        })
    }

    render() {
        debugger
        return(
            <p>this is where playlist index goes</p>
        )
    }
}

export default PlaylistIndex;