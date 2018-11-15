import React from 'react';
import PropTypes from 'prop-types';

import ChallengeList from '../components/ChallengeList';

const Intermediate = ({ challenges }) => (
  <div>
    INTERMEDIATE STUFF
    <p>
      Practice coding some simple web pages.
      Skills needed:
    </p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ul>
    { !challenges
        ? 'loading'
        : <ChallengeList challenges={challenges} />
    }
  </div>
);

Intermediate.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Intermediate;
