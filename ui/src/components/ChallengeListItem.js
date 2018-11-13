import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ChallengeListItem = ({ challenge }) => (
  <Col className="challenge-list-item" xs={6} md={4}>
    <Thumbnail>
      <h3>Thumbnail label</h3>
      <p>{challenge.name}</p>
      <p>{challenge.description}</p>
      <p>
        <Link to={`/challenge/${challenge._id}`}><Button bsStyle="primary">Select</Button></Link>
      </p>
    </Thumbnail>
  </Col>
);

ChallengeListItem.propTypes = {
  challenge: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ChallengeListItem;
