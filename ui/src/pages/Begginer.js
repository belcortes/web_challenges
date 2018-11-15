import React from 'react';
import PropTypes from 'prop-types';

import ChallengeList from '../components/ChallengeList';

const Begginer = ({ challenges }) => (
  <div>
    <h2>Begginer level challenges</h2>
    <p>
      Practice coding some simple web pages.
      Skills needed:
    </p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
    { !challenges
        ? 'loading'
        : <ChallengeList challenges={challenges} />
    }

  </div>
);

Begginer.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Begginer;
