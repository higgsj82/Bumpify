import React from 'react';
import { NavLink } from 'react-router-dom';

const IndexItem = ({ playlist }) => {
    let { id, name } = playlist;

    return (
        <NavLink to={`/playlists/${id}`}>
            <li className='list-item'>
                <p className='list-item-name'>{name}</p>
            </li>
        </NavLink>
    )
}

export default IndexItem;