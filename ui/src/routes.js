import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Begginer from './pages/Begginer';
import Intermediate from './pages/Intermediate';
import Advanced from './pages/Advanced';
import Challenge from './pages/Challenge';
import ProposalSubmission from './pages/ProposalSubmission';

class Routes extends Component {
  state = {
    challenges: []
  }

  componentDidMount() {
    axios.get('/challenges')
      .then(response => {
        this.setState({ challenges: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/begginer"
          render={props => <Begginer {...props} challenges={this.state.challenges.filter(x => x.c_type === 'begginer')} />}
        />
        <Route
          exact
          path="/intermediate"
          render={props => <Intermediate {...props} challenges={this.state.challenges.filter(x => x.c_type === 'intermediate')} />}
        />
        <Route
          exact
          path="/advanced"
          render={props => <Advanced {...props} challenges={this.state.challenges.filter(x => x.c_type === 'advanced')} />}
        />
        <Route exact path="/challenge/:id" component={Challenge} />
        <Route exact path="/proposal-submission" component={ProposalSubmission} />
      </Switch>
    );
  }
}

export default Routes;
