import React, {Component} from 'react';

class Movie extends Component {
    render() {
        const {movie, onDelete} = this.props;

        return <li className="list__item">
            <input className="list__check" type="checkbox" id={movie.id} />
            <label className="list__label" for={movie.id}>{movie.title}</label>
            <button className="list__delete" onClick={() => onDelete(this.props.movie.id)}>×</button>
        </li>
    }
}

export default Movie;