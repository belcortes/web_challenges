import React from 'react';
import PropTypes from 'prop-types';

import ChallengeList from '../components/ChallengeList';

const Intermediate = ({ challenges }) => (
  <div>
    INTERMEDIATE STUFF
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
