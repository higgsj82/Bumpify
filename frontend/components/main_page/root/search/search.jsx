import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <section className="search-container">
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

export default Search