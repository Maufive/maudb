import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdMore from 'react-icons/lib/md/more';
import MdDateRange from 'react-icons/lib/md/date-range';

export default class MoviesJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(response => response.results)
      .then(response =>
        this.setState({
          movies: response
        })
      );
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { movies } = this.state;
    if (!this.state.movies) {
      return <h2>loading</h2>;
    }
    let asdf = movies.splice(1, 3);
    return (
      <div>
        <div
          className="main-title"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${
              movies[0].backdrop_path
            })`
          }}
        >
          <div className="main-title-container shaded-background">
            <h1>
              <u>{this.props.title}</u>
            </h1>
            <div className="inline">
              <img
                src={`https://image.tmdb.org/t/p/w185${movies[0].poster_path}`}
                alt="poster"
              />
              <div className="main-title-info">
                <h2>{movies[0].title || movies[0].name}</h2>

                {this.props.type === 'movie' ? (
                  <h3>Release: {movies[0].release_date}</h3>
                ) : (
                  <h3>
                    Rating:{' '}
                    <span className="rating">{movies[0].vote_average}</span>
                  </h3>
                )}

                <Link to={`/${this.props.type}/${movies[0].id}`}>
                  Read more <MdMore />
                </Link>
              </div>
            </div>
            <ul className="backdrop-card-list">
              {asdf.map(movie => (
                <li
                  key={movie.id}
                  style={{
                    background: `url(https://image.tmdb.org/t/p/w300${
                      movie.backdrop_path
                    })`
                  }}
                >
                  <div>
                    <Link to={`/${this.props.type}/${movie.id}`}>
                      <h3>
                        {movie.title || movie.name}{' '}
                        {this.props.type === 'movie' ? (
                          <div>
                            <MdDateRange />
                            <span className="gray small">
                              {movie.release_date}
                            </span>
                          </div>
                        ) : (
                          <span className="rating">
                            {movies[0].vote_average}
                          </span>
                        )}
                      </h3>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
