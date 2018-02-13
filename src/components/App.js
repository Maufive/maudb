import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Movies from './Movies';
import Movie from './Movie';
import Tv from './Tv';
import People from './People';
import Person from './Person';

class App extends Component {
  render() {
    const movie = 'movie';
    const tv = 'tv';
    const people = 'people';
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route 
              path="/" exact
              render={({ match, location }) => (
                <Home location={location} match={match} />
              )}
            />
            <Route path="/movies" exact component={Movies} />
            <Route
              path="/tv/:id"
              render={({ match, location }) => (
                <Movie type={tv} match={match} location={location} />
              )}
            />
            <Route
              path="/movie/:id"
              render={({ match, location }) => (
                <Movie type={movie} match={match} location={location} />
              )}
            />
            <Route path="/tv" exact component={Tv} />
            <Route
              path="/person/:id"
              render={({ match, location }) => (
                <Person type={people} match={match} location={location} />
              )}
            />
            <Route path="/people" exact component={People} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
