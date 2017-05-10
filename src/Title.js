import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => (
    <div>
        <h1>{text}</h1>
    </div>
);

Title.propTypes = {
    text: PropTypes.string.isRequired
}

Title.defaultProps = {
    text: 'REACT REDDIT'
}

export default Title;