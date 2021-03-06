import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class ProposalSubmission extends Component {
  state = {
    inputs: {
      name: "",
      description: "",
      c_type: "",
      image_file: ""
    }
  };

  handleInputChange = e => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    this.setState({
      inputs: {
        ...this.state.inputs,
        [e.target.name]: value,
        created_at: Date.now()
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post("/challenges", this.state.inputs)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    this.props.history.push(`/${this.state.inputs.c_type}`);
  };

  render() {
    return (
      <div>
        <h2 className="page-title">Submit a Proposal</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="name"
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="description"
            name="description"
          />
          <input
            onChange={this.handleInputChange}
            type="file"
            name="image_file"
          />
          <select onChange={this.handleInputChange} name="c_type">
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
