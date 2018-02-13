import React, { Component } from 'react';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import TvCard from './TvCard';
import DisplayExpandedShow from './DisplayExpandedShow';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandID: undefined
    };
    this.getIdForExpand = this.getIdForExpand.bind(this);
  }

  getIdForExpand(id) {
    this.setState({ expandID: id });
  }

  render() {
    return (
      <div className="container">
        <h2 className="secondary-heading">
          Popular {this.props.title} right now:
        </h2>
        <ul className="list">
          {this.props.shows.map(show => (
            <TvCard
              key={show.id}
              name={show.name}
              title={show.title}
              id={show.id}
              backdrop={show.backdrop_path}
              rating={show.vote_average}
              getIdForExpand={this.getIdForExpand}
            />
          ))}
        </ul>
        <DisplayExpandedShow id={this.state.expandID} type={this.props.type} />
      </div>
    );
  }
}

export default ListContainer;
