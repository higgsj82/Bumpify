import React from 'react';
import IndexItem from './index_item';


class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getPlaylists();
    }

    render() {
        let { playlists, ids } = this.props;

        if (typeof ids === 'undefined') return null;
        
        let list = ids.map((id, idx ) => {
            return <IndexItem playlist={playlists[id]} key={id*idx} />
        })
        
        return (
            <ul className="playlist-index">
                {list}
            </ul>
        )
    }
}

export default PlaylistIndex;