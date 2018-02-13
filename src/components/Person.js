import React, { Component } from 'react';
import KnownForList from './KnownForList';
import { KEY } from '../helpers';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      person: null
    };
  }

  componentDidMount() {
    this.fetchPerson();
  }

  fetchPerson() {
    fetch(
      `https://api.themoviedb.org/3/person/${
        this.state.id
      }?api_key=${KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          person: response
        })
      );
  }

  render() {
    const { person } = this.state;
    if (!person) {
      return <h2>loading</h2>;
    }
    return (
      <div id="person-container">
        <div id="person">
          <img
            src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
            alt="profile"
          />
          <div className="person-info">
            <h2>{person.name}</h2>
            <h3>
              <span className="factbox-heading">Born:</span> {person.birthday}
            </h3>
            <h3>
              <span className="factbox-heading">From:</span>{' '}
              {person.place_of_birth}
            </h3>
            <div>
              <h3>
                <span className="factbox-heading">About:</span>{' '}
              </h3>
              <p>{person.biography}</p>
            </div>
          </div>
        </div>
        <div id="known-for-container">
          <h2>Known for: </h2>
          <KnownForList id={person.id} type={'movie'} />
          <KnownForList id={person.id} type={'tv'} />
        </div>
      </div>
    );
  }
}
