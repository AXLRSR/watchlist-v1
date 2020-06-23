import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

class App extends React.Component {

  state = {
    movies: [
      {id: 1, title: "Avengers"},
      {id: 2, title: "Avengers: Age of Ultron"},
      {id: 3, title: "Avengers: Infinity War"},
      {id: 4, title: "Avengers: Endgame"}
    ],

    newMovie: ""
  };

  handleDelete = (id) => {
    const movies = [...this.state.movies];
    const index = movies.findIndex((movie) =>  movie.id === id);

    movies.splice(index, 1);

    this.setState({movies});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const title = this.state.newMovie;

    const movies = [...this.state.movies];
    movies.push({id, title});
    
    this.setState({movies, newMovie: ""})
  };

  handleChange = (event) => {
    this.setState({newMovie: event.currentTarget.value});
  }

  render() {
    return <div className="content">
      <div className="header">
        <h1 className="header__title">WatchList</h1>

        <form className="search" onSubmit={this.handleSubmit}>
          <input className="search__bar" type="text" placeholder="Your movie" value={this.state.newMovie} onChange={this.handleChange} />
          <input className="search__add" type="submit" value="Add" />
        </form>
      </div>

      <ul className="list">
        {this.state.movies.map(movie => (
          <li className="list__item">
            <input className="list__check" type="checkbox" id={movie.id} />
            <label className="list__label" for={movie.id}>{movie.title}</label>
            <button className="list__delete" onClick={() => this.handleDelete(movie.id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);