import React from "react";
import { Grid, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import ChallengeListItem from "./ChallengeListItem";

const ChallengeList = ({ challenges }) => (
  <Grid>
    <Row className="challenge-list-row">
      {challenges.map(challenge => (
        <ChallengeListItem key={challenge._id} challenge={challenge} />
      ))}
    </Row>
  </Grid>
);

ChallengeList.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default ChallengeList;
