import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { KEY } from '../helpers';

export default class KnownForList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  fetchData() {
    if(this.props.type === 'tv') {
    fetch(`https://api.themoviedb.org/3/person/${this.props.id}/${this.props.type}_credits?api_key=${KEY}&language=en-US`)
      .then(res => res.json())
      .then(res => res.cast.sort((a, b) => a.episode_count > b.episode_count ? -1 : 1))
      .then(res => this.setState({
        data: res.splice(0, 5)
      }));
    } else {
      fetch(`https://api.themoviedb.org/3/person/${this.props.id}/${this.props.type}_credits?api_key=${KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => res.cast.sort((a, b) => a.popularity > b.popularity ? -1 : 1))
        .then(res => this.setState({
          data: res.splice(0, 5)
        }));
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;
    if(!data) { return <h2>loading</h2> }
    return (
      <ul className="known-for-list">
        {data.map(data => (
          <li key={data.id}>
          <Link className="secondary-link" to={`/${this.props.type}/${data.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w154${data.poster_path}`}
              alt="poster"
            />
            <h3>{data.name || data.title}</h3>
            <p>Character: {data.character}</p>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}
