import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdMore from 'react-icons/lib/md/more';

export default class PeopleJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: null
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(response => response.results)
      .then(response =>
        this.setState({
          people: response
        })
      );
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { people } = this.state;
    if (!this.state.people) {
      return <h2>loading</h2>;
    }
    let asdf = people.splice(1, 5);
    return (
      <div>
        <div
          className="main-title"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${
              people[0].known_for[0].backdrop_path
            })`
          }}
        >
          <div className="main-title-container shaded-background">
            <h1>
              <u>{this.props.title}</u>
            </h1>
            <div className="inline">
              <img
                src={`https://image.tmdb.org/t/p/w185${people[0].profile_path}`}
                alt="poster"
              />
              <div className="main-title-info">
                <h2>{people[0].title || people[0].name}</h2>

                <Link to={`/${this.props.type}/${people[0].id}`}>
                  Read more <MdMore />
                </Link>
              </div>
            </div>
            <ul className="backdrop-card-list people">
              {asdf.map(person => (
                <li
                  className="backdrop-card-list"
                  key={person.id}
                  style={{
                    background: `url(https://image.tmdb.org/t/p/w185${
                      person.profile_path
                    })`,
                    backgroundPosition: 'center',
                  }}
                >
                  <div>
                    <Link to={`/${this.props.type}/${person.id}`}>
                      <h3>{person.title || person.name} </h3>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
