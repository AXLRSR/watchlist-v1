import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';
import MovieForm from './MovieForm';

import "./styles.css";

class App extends React.Component {

  state = {
    movies: []
  };

  handleDelete = (id) => {
    const movies = [...this.state.movies];
    const index = movies.findIndex((movie) =>  movie.id === id);

    movies.splice(index, 1);

    this.setState({movies});
  };

  handleAdd = (movie) => {
    const movies = [...this.state.movies];
    movies.push(movie);
    
    this.setState({movies})
  }

  render() {
    return <div className="content">
      <div className="header">
        <h1 className="header__title">WatchList</h1>
        <MovieForm onMovieAdd={this.handleAdd}/>
      </div>

      <ul className="list">
        {this.state.movies.map(movie => (
          <Movie movie={movie} onDelete={this.handleDelete} />
        ))}
      </ul>
    </div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);