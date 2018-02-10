import React, { Component } from 'react';
import ReactModal from 'react-modal';
import YouTube from 'react-youtube';
import MdPlayArrow from 'react-icons/lib/md/play-arrow';
import MdClose from 'react-icons/lib/md/close';
import { KEY } from '../helpers';

export default class PlayTrailer extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      videos: null
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getTrailer = this.getTrailer.bind(this);
  }

  componentDidMount() {
    this.getTrailer();
  }

  componentWillgitReceiveProps(nextProps) {
    this.getTrailer(nextProps.id)
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  getTrailer() {
    fetch(
      `https://api.themoviedb.org/3/${this.props.type}/${
        this.props.trailerId
      }/videos?api_key=${KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response => response.results)
      .then(response =>
        this.setState({
          videos: response
        })
      );
  }

  render() {
    const { videos } = this.state;
    let trailer = null;
    const opts = {
      height: '520',
      width: '900',
      playerVars: {
        autoplay: 1
      }
    };

    if(this.state.videos) {
      trailer = videos.find(
        video => video.type === 'Trailer' || 'Opening Credits'
      );
    }

    if(!this.state.videos) { return <h2>loading</h2> }

    return (
      <div>
        <button className="main-btn" onClick={this.handleOpenModal}>
          <MdPlayArrow /> Play trailer
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Trailer"
          className="modal"
          overlayClassName="overlay"
        >
          <button onClick={this.handleCloseModal}>
            <MdClose />
          </button>
          <div>
            <YouTube videoId={trailer.key} opts={opts} />
          </div>
        </ReactModal>
      </div>
    );
  }
}
