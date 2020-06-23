import React, {Component} from 'react';

class MovieForm extends Component {
    state = {
        newMovie: ""
    };

    handleChange = (event) => {
        this.setState({newMovie: event.currentTarget.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const title = this.state.newMovie;

        this.props.onMovieAdd({id, title});

        this.setState({newMovie: ""});
    };

    render() {
        return <form className="search" onSubmit={this.handleSubmit}>
            <input className="search__bar" type="text" placeholder="Your movie" value={this.state.newMovie} onChange={this.handleChange} />
            <input className="search__add" type="submit" value="Add" />
        </form>
    }
}

export default MovieForm;