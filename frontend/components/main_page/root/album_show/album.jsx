import React from 'react';

class Album extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.getAlbum(this.props.albumId);
    }

    render() {
        const { album } = this.props 

        return (
            <section className="album-show-section">
                <div className="main-root-header" >
                    <div className="main-root-arrows" >
                        <i className="fas fa-arrow-circle-left"></i>
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            </section>
        )
    }
}

export default Album