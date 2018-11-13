import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProposalSubmission extends Component {
  state = {
    c_type: ''
  }

  handleInputChange = e => {
    this.setState({ c_type: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/${this.state.c_type}`);
  }

  render() {
    return (
      <div>
        <form action="/challenges" method="POST" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="description" name="description" />
          <select onChange={this.handleInputChange}>
            <option />
            <option value="begginer">Begginer</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

ProposalSubmission.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default ProposalSubmission;
