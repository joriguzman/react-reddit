import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ username }) => (<div>Hi {username}!</div>);

UserProfile.propTypes = {
    username: PropTypes.string.isRequired
};

export default UserProfile;