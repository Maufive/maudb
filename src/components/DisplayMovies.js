import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { KEY } from '../helpers';

export default class DisplayMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRated: null
    };
    this.fetchTopRated = this.fetchTopRated.bind(this);
  }

  componentDidMount() {
    this.fetchTopRated();
  }

  fetchTopRated() {
    fetch(
      `https://api.themoviedb.org/3/${this.props.typeOf}/top_rated?api_key=${KEY}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(response => response.results)
      .then(response =>
        this.setState({
          topRated: response
        })
      );
  }

  render() {
    const { topRated } = this.state;
    if (!topRated) return <h2>loading</h2>;

    return (
      <div className="list-container">
        <h2>{this.props.title}</h2>
        <ul>
          {topRated.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt="poster"
                />
                <div>
                  <span>
                    {movie.title || movie.name}{' '}
                    <span className="rating">{movie.vote_average}</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
