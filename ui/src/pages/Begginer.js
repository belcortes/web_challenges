import React from 'react';
import PropTypes from 'prop-types';

import ChallengeList from '../components/ChallengeList';

const Begginer = ({ challenges }) => (
  <div>
    <h2 className='page-title'>Begginer level challenges</h2>
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
