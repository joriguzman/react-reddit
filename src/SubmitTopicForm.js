import React from 'react';
import PropTypes from 'prop-types';

const SubmitTopicForm = ({ newTopic, onSubmit, onTopicInputChange }) => (
    <form onSubmit={onSubmit}>
        <label>
            Topic: <textarea value={newTopic}
                onChange={onTopicInputChange}></textarea>
        </label>
        <input type='submit' value='Submit' />
    </form>
);

SubmitTopicForm.propTypes = {
    newTopic: PropTypes.string,
    onSubmit: PropTypes.func,
    onTopicInputChange: PropTypes.func
}

export default SubmitTopicForm;