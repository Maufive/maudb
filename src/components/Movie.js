import React, { Component } from 'react';
import { KEY } from '../helpers';
import MovieHeader from './MovieHeader';
import CastList from './CastList';
import { FactBoxTv, FactBoxMovie } from './FactBox';
import Similar from './Similar';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      movie: null,
      credits: null,
      images: null
    };
    this.getData = this.getData.bind(this);
  }

  getData(type, id) {
    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${KEY}&language=en-US`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          movie: response
        })
      );
      fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${KEY}`)
        .then(response => response.json())
        .then(response =>
          this.setState({
            credits: response
          })
        );
      fetch(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=${KEY}&language=en`)
        .then(response => response.json()
        .then(response => response)
        .then(response =>
          this.setState({
            images: response
          })
        )
    );
  }

  componentDidMount() {
    this.getData(this.props.type, this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    this.getData(this.props.type, nextProps.match.params.id)
  }
//quickfix för att scrolla användaren till toppen för varje update
  componentDidUpdate() {
    window.scrollTo(0,0);
  } 

  render() {
    const { movie, credits, videos, images } = this.state;
    if (!movie) {
      return <h2>Loading Movie</h2>;
    }
    if (!credits) {
      return <h2>Loading Credits</h2>;
    }
    if (!images) {
      return <h2>Loading Images</h2>;
    }

    return (
      <div>
        <MovieHeader
          movie={movie}
          images={images}
          videos={videos}
          type={this.props.type}
        />
        <div className="movie-main">
          {this.props.type === 'tv' ? (
            <FactBoxTv movie={movie} type={this.props.type} />
          ) : (
            <FactBoxMovie
              movie={movie}
              credits={credits}
              type={this.props.type}
            />
          )}
          <div className="divider" />
          <CastList credits={credits} />
          <div className="divider" />
          <Similar
            type={this.props.type}
            id={this.state.id}
            location={this.props.location}
          />
        </div>
      </div>
    );
  }
}
