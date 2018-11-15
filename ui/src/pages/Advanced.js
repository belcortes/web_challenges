import React from 'react';
import PropTypes from 'prop-types';

import ChallengeList from '../components/ChallengeList';

const Advanced = ({ challenges }) => (
  <div>
    ADVANCED
    <p>
      Practice coding some simple web pages.
      Skills needed:
    </p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS (some sort of Framework like React, Angular)</li>
      <li>API Calls</li>
    </ul>
    { !challenges
        ? 'loading'
        : <ChallengeList challenges={challenges} />
    }
  </div>
);

Advanced.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Advanced;
