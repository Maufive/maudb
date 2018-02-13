import React, { Component } from 'react';
import axios from 'axios';
import { KEY } from '../helpers';
import Suggestions from './Suggestions';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
    };
  }

  removeEmptyElement() {
    let elements = document.querySelectorAll('.suggestion');
    let empty = [];
    if(elements) {
      elements.forEach(element => {
        if(element.innerText === "") {
          empty.push(element)
        }
      })
    }
    empty.forEach(element => {
      element.classList.add('hide')
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
    this.removeEmptyElement();
  }

  getInfo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`
      )
      .then(({ data }) => {
        this.setState({
          results: data.results
        });
      });
  };

  render() {
    return (
      <form>
        <input
          id="searchbar"
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}
