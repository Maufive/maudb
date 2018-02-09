import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { KEY } from '../helpers';

export default class Similar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similar: null
    };
    this.fetchNew = this.fetchNew.bind(this);
  }

  fetchNew(id) {
    fetch(
      `https://api.themoviedb.org/3/${
        this.props.type
      }/${id}/similar?api_key=${KEY}&language=en-US&page=1`
    ).then(response =>
      response
        .json()
        .then(response => response.results)
        .then(response => response.reverse())
        .then(response => response.splice(0, 10))
        .then(response =>
          this.setState({
            similar: response
          })
        )
    );
  }

  componentDidMount() {
    this.fetchNew(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchNew(nextProps.id);
  }

  render() {
    if (!this.state.similar) {
      return <h2>loading</h2>;
    }

    return (
      <div>
        <h3>Similar to this:</h3>
        <ul className="inline-list">
          {this.state.similar.map(item => (
            <li key={item.id}>
              <Link to={`/${this.props.type}/${item.id}`}>
                <img
                  className="similar-thumbnail"
                  src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                  alt="item poster"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// När jag länkar från similar måste jag skicka med nya params för att Movie ska uppdatera
// Movie får aldrig nya params när jag länkar vidare, därför uppdaterar den aldrig trots att URLen visar annorlunda
// därför att movie blir aldrig uppdaterad.
