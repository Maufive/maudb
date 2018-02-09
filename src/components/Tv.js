import React, { Component } from 'react';
import MoviesJumbotron from './MoviesJumbotron';
import DisplayMovies from './DisplayMovies';
import { KEY } from '../helpers';

export default class Tv extends Component {
  render() {
    const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${KEY}&language=en-US&page=1`
    return (
      <div>
        <MoviesJumbotron url={url} title={'TV on the air'} type={'tv'} />
        <DisplayMovies typeOf={'tv'} title={'Top Rated:'} />
      </div>
    );
  }
}
