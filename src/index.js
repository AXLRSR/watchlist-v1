import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

class App extends React.Component {
  render() {
    return <div className="content">
      <div className="header">
        <h1 className="header__title">WatchList</h1>
        
        <form className="search">
          <input className="search__bar" type="text" placeholder="Your movie" />
          <input className="search__add" type="submit" value="Add" />
        </form>
      </div>

      <ul className="list">
        <li className="list__item">
          <input className="list__check" type="checkbox" id="1" />
          <label className="list__label" for="1">Avengers</label>
        </li>
        <li className="list__item">
          <input className="list__check" type="checkbox" id="2" />
          <label className="list__label" for="2">Avengers: Age of Ultron</label>
        </li>
        <li className="list__item">
          <input className="list__check" type="checkbox" id="3" />
          <label className="list__label" for="3">Avengers: Infinity War</label>
        </li>
      </ul>
    </div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);