import React, { Component } from 'react';
import FilmList from '../components/FilmList';

class FilmBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className = "film-box">
            <h1>Film Releases</h1>
            <FilmList/>
        </div>
        )
    }

}

export default FilmBox;