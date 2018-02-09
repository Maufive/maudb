import React, { Component } from 'react';
import { KEY } from '../helpers';
import MdClose from 'react-icons/lib/md/close';
import MdAddCircle from 'react-icons/lib/md/add-circle';

class DisplayExpandedShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      credits: null
    };
    this.getDetails = this.getDetails.bind(this);
    this.getCredits = this.getCredits.bind(this);
    this.removestate = this.removestate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.getDetails(nextProps.id, nextProps.type);
    this.getCredits(nextProps.id, nextProps.type);
  }

  getDetails(id, type) {
    fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${KEY}&language=en-US`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          show: response
        })
      );
  }

  getCredits(id, type) {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response => response.cast)
      .then(response => response.slice(0, 10))
      .then(response =>
        this.setState({
          credits: response
        })
      );
  }

  removestate() {
    this.setState({
      show: null
    });
  }

  render() {
    if (!this.state.show) {
      return null;
    }
    if (!this.state.credits) {
      return null;
    }

    let overview = this.state.show.overview;
    if (overview.length > 350) {
      overview = overview.substring(0, 350);
      overview = overview + '...';
    }

    return (
      <div id="expanded-item">
        <div id="expanded-item-bg">
          <MdClose onClick={() => this.removestate()} />
          <div id="about-item">
            <h2>{this.state.show.name || this.state.show.title}</h2>
            <p id="overview-paragraph">{overview}</p>
            <p>Seasons: {this.state.show.number_of_seasons}</p>
            <p>Genres: {this.state.show.genres.map(genre => <span className="list-item-spacing">{genre.name},</span>)}</p>
            <p>Cast: </p>
            <ul className="credits-list">
              {this.state.credits.map(person => <li className="list-item-spacing" key={person.name}>{person.name},</li>)}
            </ul>
          </div>
          <div style={{ display: 'flex' }}>
            <p>Trailers</p>
            <p>Similar shows</p>
            <MdAddCircle />
          </div>
        </div>
        <img
          id="expanded-background-image"
          src={`https://image.tmdb.org/t/p/w780${
            this.state.show.backdrop_path
          }`}
          alt="backdrop"
        />
      </div>
    );
  }
}

export default DisplayExpandedShow;
