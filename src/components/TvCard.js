import React, { Component } from 'react';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdExpandMore from 'react-icons/lib/md/expand-more';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdStar from 'react-icons/lib/md/star';

class TvCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
  }

  render() {
    const triggerEnter = this.state.hovering ? 'trigger-enter' : '';
    const activeCard = this.state.hovering ? 'card-active' : '';
    const handleMouseEnter = () => this.setState({ hovering: true });
    const handleMouseLeave = () => this.setState({ hovering: false });

    return (
      <li
        className={`tv-card ${activeCard}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${this.props.backdrop}`}
          alt="Background backdrop"
        />
        <div className={`card-overlay ${triggerEnter}`}>
          <div className="card-info">
            <div className="card-description">
              <p>{this.props.name || this.props.title}</p>
              <div
                style={{
                  color: '#ff6347',
                  display: 'flex',
                }}
              >
                <MdStar style={{fontSize:'12px', marginRight: '3px', marginTop: '1px' }} />
                <p>{this.props.rating}</p>
              </div>
            </div>
            <div className="button-menu">
              <MdThumbUp />
              <MdThumbDown />
              <MdAddCircle />
            </div>
          </div>
          <div className="expand">
            <MdExpandMore
              onClick={() => this.props.getIdForExpand(this.props.id)}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default TvCard;
