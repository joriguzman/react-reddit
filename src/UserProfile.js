import React from 'react';
import PropTypes from 'prop-types';

// Displays username
const UserProfile = ({ username }) => (<span className='App__userprofile'>Hi {username}!</span>);

UserProfile.propTypes = {
    username: PropTypes.string.isRequired
};

export default UserProfile;