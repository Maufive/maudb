import React, { Component } from 'react';
import PeopleJumbotron from './PeopleJumbotron';
import { KEY } from '../helpers';

export default class Movies extends Component {
  render() {
    const url = `https://api.themoviedb.org/3/person/popular?api_key=${KEY}&language=en-US&page=1
`;
    return (
      <div>
        <PeopleJumbotron url={url} title={'On the carpet'} type={'person'} />
        {/* <DisplayMovies typeOf={'movie'} title={'Top Rated:'} /> */}
      </div>
    );
  }
}
