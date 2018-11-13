import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';

class Challenge extends Component {
  state = {
    challenge: {}
  }

  componentDidMount() {
    axios.get('/challenge', { params: { id: this.props.match.params.id } })
      .then(response => {
        this.setState({ challenge: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderChallenge = challenge => (
    <div>
      <h2>Challenge here</h2>
      <p>{challenge.name}</p>
      <p>{challenge.c_type}</p>
      <h2>Submit challenge</h2>
    </div>
  )

  render() {
    return (
      <div>
        { _.isEmpty(this.state.challenge)
            ? 'loading'
            : this.renderChallenge(this.state.challenge)
        }
        <form action="/challenge-submission" method="POST">
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="github url" name="github-url" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Challenge.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Challenge;
