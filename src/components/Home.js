import React, { Component } from 'react';
import { KEY, featuredMovies } from '../helpers';
import Jumbotron from './Jumbotron';
import ListContainer from './ListContainer';
import EditorsCard from './EditorsCard';
const popularShows = `https://api.themoviedb.org/3/tv/popular?api_key=${KEY}&language=en-US&page=1`;
const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: null,
      movies: null,
      people: null
    };
  }

  componentDidMount() {
    fetch(popularShows)
      .then(response => response.json())
      .then(response => response.results)
      .then(response => response.slice(0, 5))
      .then(response =>
        this.setState({
          shows: response
        })
      );
    fetch(popularMovies)
      .then(response => response.json())
      .then(response => response.results)
      .then(response => response.slice(0, 5))
      .then(response =>
        this.setState({
          movies: response
        })
      );
  }

  render() {
    if (!this.state.shows) {
      return <p>loading tv-shows...</p>;
    }
    if (!this.state.movies) {
      return <p>loading movies...</p>;
    }

    return (
      <div>
        <Jumbotron />
        <div id="main" className="container">
          <h2 className="main-heading">Editors picks</h2>
          <div id="editors-container" className="container">
            <EditorsCard pick={featuredMovies[0]} />
            <EditorsCard pick={featuredMovies[1]} />
            <EditorsCard pick={featuredMovies[3]} />
            <EditorsCard pick={featuredMovies[4]} />
            <EditorsCard pick={featuredMovies[2]} />
          </div>
          <ListContainer
            shows={this.state.movies}
            title={'movies'}
            type={'movie'}
            location={this.props.location}
          />
          <ListContainer
            shows={this.state.shows}
            title={'TV-shows'}
            type={'tv'}
            location={this.props.location}
          />
        </div>
      </div>
    );
  }
}

export default Main;
