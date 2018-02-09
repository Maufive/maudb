import React, { Component } from 'react';
import PlayTrailer from './PlayTrailer';

export default class MovieHeader extends Component {
  render() {
    let date = null;

    if (this.props.type === 'tv') {
      date = this.props.movie.first_air_date.substring(0, 4);
    } else {
      date = this.props.movie.release_date.substring(0, 4);
    }
    const { images, movie } = this.props;
    let randomBackdrop =
      images.backdrops[Math.floor(Math.random() * images.backdrops.length)];

    let randomPoster =
      images.posters[Math.floor(Math.random() * images.posters.length)];

    let poster = null;
    let bg = null;
    if (!randomBackdrop) {
      bg = movie.backdrop_path;
    } else {
      bg = randomBackdrop.file_path;
    }
    if (!randomPoster) {
      poster = movie.poster_path;
    } else {
      poster = randomPoster.file_path;
    }

    

    if (!this.props.movie) {
      return <h2>loading</h2>;
    }

    if (!this.props.images) {
      return <h2>loading</h2>;
    }

    return (
      <div
        className="header"
        style={{
          background: `url(https://image.tmdb.org/t/p/w1280/${bg})`
        }}
      >
        <div className="shaded-background">
          <div className="jumbo">
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster}`}
              alt="movie poster"
              className="header-poster"
            />
            <div className="header-details">
              <h2 className="header-title">
                {movie.title || movie.name}{' '}
                <span className="gray">({date})</span>
              </h2>
              <div>
                <h3>Overview</h3>
                <p className="header-overview">{movie.overview}</p>
                <div className="header-show-menu">
                  <p className="rating">Rating: {movie.vote_average}</p>
                  <PlayTrailer trailerId={movie.id} type={this.props.type} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
