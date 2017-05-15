import React from 'react';
import PropTypes from 'prop-types';

// Displays title header
const Title = ({ text }) => (
    <span>
        <h3>{text}</h3>
    </span>
);

Title.propTypes = {
    text: PropTypes.string.isRequired
};

Title.defaultProps = {
    text: 'REACT REDDIT'
};

export default Title;