import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Movies from './Movies';
import Movie from './Movie';
import Tv from './Tv';
import People from './People';

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
            <Route path="/" exact component={Home} />
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
              path="/people/:id"
              render={({ match, location }) => (
                <People type={people} match={match} location={location} />
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
