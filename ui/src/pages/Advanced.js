import React from "react";
import PropTypes from "prop-types";

import ChallengeList from "../components/ChallengeList";

const Advanced = ({ challenges }) => (
  <div>
    <h2 className="page-title">Advanced level challenges</h2>
    {!challenges ? "loading" : <ChallengeList challenges={challenges} />}
  </div>
);

Advanced.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Advanced;
