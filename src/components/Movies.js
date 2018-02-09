import React, { Component } from 'react';
import MoviesJumbotron from './MoviesJumbotron';
import DisplayMovies from './DisplayMovies';
import { KEY } from '../helpers';

export default class Movies extends Component {
  render() {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`;
    return (
      <div>
        <MoviesJumbotron url={url} title={'Upcoming Movies'} type={'movie'} />
        <DisplayMovies
          typeOf={'movie'}
          title={'Top Rated:'}
        />
      </div>
    );
  }
}
