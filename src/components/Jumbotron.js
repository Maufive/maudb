// const key = 'c2339f96c7f80c6046bd878c5f6687ba';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { featuredTvShows, KEY } from '../helpers';
import PlayTrailer from './PlayTrailer';

const randomshow =
  featuredTvShows[Math.floor(Math.random() * featuredTvShows.length)];

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured_id: randomshow.id,
      feature: null,
      type: 'tv' //Orkar inte ändra i featuredTVShows atm. Finns bara tv-serier som är featured atm.
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/tv/${
        this.state.featured_id
      }?api_key=${KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          feature: response
        })
      );
  }


  render() {
    if (!this.state.feature) {
      return <p>loading...</p>;
    }

    const { type } = this.state;

    let overview = this.state.feature.overview;
    if (overview.length > 200) {
      overview = overview.substring(0, 250);
      overview = overview + '...';
    }

    return (
      <div
        className="header"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${
            this.state.feature.backdrop_path
          })`
        }}
      >
        <div className="shaded-background">
          <div className="jumbo">
            <img
              src={`https://image.tmdb.org/t/p/w342${
                this.state.feature.poster_path
              }`}
              alt="Feature poster"
              className="header-poster"
            />
            <div className="header-details">
              <h2 className="header-title">{this.state.feature.name}</h2>
              <p className="header-overview">{overview}</p>
              <div className="header-show-menu">
                <p className="rating">
                  Rating: {this.state.feature.vote_average}
                </p>
                <PlayTrailer trailerId={this.state.feature.id} type={type} />
                <Link
                  className="main-btn"
                  to={`/${type}/${this.state.feature.id}`}
                >
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
