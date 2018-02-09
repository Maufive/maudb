import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdOpenInNew from 'react-icons/lib/md/open-in-new';
import format2 from '../helpers';

export class FactBoxTv extends Component {
  render() {
    const { movie } = this.props;
    // Vissa serier har säsong 0 med som såklart inte finns. Här tar jag bort den
    const seasons = movie.seasons.filter(season => season.season_number !== 0);

    return (
      <div className="factbox">
        <div className="factbox-list-container">
          <ul>
            <h3 className="factbox-heading">Created By:</h3>
            {this.props.movie.created_by.map(creator => (
              <li key="creator.id">
                <Link className="primary-link" to={`/people/${creator.id}`}>
                  {creator.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <h3 className="factbox-heading">Status: </h3>
            <li>Ended</li>
          </ul>
        </div>
        <div>
          <h3 className="factbox-heading">Seasons:</h3>
          <ul>
            {seasons.map(season => (
              <li key={season.id}>
                <p>
                  <strong>{season.season_number}</strong>{' '}
                  <span className="gray small">
                    ({season.episode_count} episodes)
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="factbox-list-container">
          <ul>
            <h3 className="factbox-heading">Genres:</h3>
            {movie.genres.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
          {console.log(movie)}
          <ul>
            <h3 className="factbox-heading">Episode Runtime:</h3>
            {movie.episode_run_time.map(episode => <li>{episode} minutes</li>)}
          </ul>
        </div>
        <div>
          <h3 className="factbox-heading">Networks:</h3>
          <ul>
            {movie.networks.map(network => (
              <li key={network.id}>
                <p>{network.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="factbox-heading">Homepage:</h3>
          <a className="primary-link" target="_blank" href={movie.homepage}>
            {movie.name || movie.title} <MdOpenInNew />
          </a>
        </div>
      </div>
    );
  }
}

export class FactBoxMovie extends Component {
  render() {
    const { movie, credits } = this.props;
    const director = credits.crew.filter(credit => credit.job === 'Director');
    const writers = credits.crew.filter(
      credit => credit.department === 'Writing'
    );

    return (
      <div className="factbox">
        <div className="factbox-list-container">
          <ul>
            <h3 className="factbox-heading">Directed By:</h3>
            {director.map(director => (
              <li key={director.id}>
                <Link to={`/people/${director.id}`} className="primary-link">
                  {director.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {console.log(writers)}
            <h3 className="factbox-heading">Written By:</h3>
            {writers.map(writer => (
              <li key={writer.id}>
                <Link className="primary-link" to={`/people/${writer.id}`}>{writer.name}</Link>{' '}
                <span className="gray small">({writer.job})</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <h3 className="factbox-heading">Budget:</h3>
            <li>{format2(movie.budget, '$')}</li>
          </ul>
        </div>
        <div>
          <h3 className="factbox-heading">Genres:</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <h3 className="factbox-heading">Made By:</h3>
            {movie.production_companies.map(company => (
              <li key={company.id}>{company.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="factbox-heading">Homepage:</h3>
          <a className="primary-link" target="_blank" href={movie.homepage}>
            {movie.name || movie.title}
          </a>
        </div>
      </div>
    );
  }
}
