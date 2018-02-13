import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { KEY } from '../helpers';

class EditorsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.pick.id
      }?api_key=${KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          movie: response
        })
      );
  }

  render() {
    if (!this.state.movie) {
      return <p>loading</p>;
    }

    return (
      <Link to={`/movie/${this.props.pick.id}`}>
        <div className="editors-card">
          <img
            className="movie-card"
            src={`https://image.tmdb.org/t/p/w342${
              this.state.movie.poster_path
            }`}
            alt="Featured Person"
          />

          <div className="card-details">
            <h3>{this.state.movie.original_title}</h3>
            <i>- {this.state.movie.tagline}</i>
          </div>
        </div>
      </Link>
    );
  }
}

export default EditorsCard;
