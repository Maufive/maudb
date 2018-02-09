import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CastList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullCredits: false
    };
    this.showFullCast = this.showFullCast.bind(this);
    this.showLessCast = this.showLessCast.bind(this);
  }
  
  showLessCast() {
    this.setState({
      fullCredits: false
    });
  }

  showFullCast() {
    this.setState({
      fullCredits: true
    });
  }

  render() {
    if (!this.props.credits) {
      return <h2>Loading :P</h2>;
    }
    const { cast } = this.props.credits;
    const newCast = cast.slice(0, 5);
    const column = this.state.fullCredits ? 'column' : '';
    const MoreButton = () => (
      <button className="ShowCast" onClick={this.showFullCast}>
        Show Full Cast
      </button>
    );
    const LessButton = () => (
      <button className="ShowCast" onClick={this.showLessCast}>
        Show Less
      </button>
    );

    return (
      <div>
        <h3>
          Top Billed Cast <span className="gray small">({cast.length})</span>
        </h3>

        <ul className={`inline-list ${column}`}>
          {!this.state.fullCredits
            ? newCast.map(actor => (
                <li key={actor.id} className="credits-card">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w185${
                        actor.profile_path
                      }`}
                      alt="cast profile"
                      className="credit-picture"
                    />
                    <div style={{ padding: '5px' }}>
                      <h3>{actor.name}</h3>
                      <p>{actor.character}</p>
                    </div>
                  </div>
                </li>
              ))
            : cast.map(actor => (
                <li key={actor.id}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w45${
                        actor.profile_path
                      }`}
                      alt="small cast profile"
                    />
                    <h3>
                      <Link to={`/people/${actor.id}`}>{actor.name}</Link>
                    </h3>
                    <p> as {actor.character}</p>
                  </div>
                  <div className="divider" />
                </li>
              ))}
        </ul>
        {!this.state.fullCredits ? <MoreButton /> : <LessButton />}
      </div>
    );
  }
}
