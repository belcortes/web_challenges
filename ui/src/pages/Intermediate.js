import React from "react";
import PropTypes from "prop-types";

import ChallengeList from "../components/ChallengeList";

const Intermediate = ({ challenges }) => (
  <div>
    <h2 className="page-title">Intermediate level challenges</h2>
    {!challenges ? "loading" : <ChallengeList challenges={challenges} />}
  </div>
);

Intermediate.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Intermediate;
