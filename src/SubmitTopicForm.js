import React from 'react';
import PropTypes from 'prop-types';

const maxTopicLength = 255;

const SubmitTopicForm = ({ newTopic, onSubmit, onTopicInputChange }) => {
    const isTopicEmpty = newTopic.length <= 0;
    return (
        <form onSubmit={onSubmit}>
            <label>
                Topic: <textarea value={newTopic}
                    onChange={onTopicInputChange}
                    maxLength={maxTopicLength}
                    placeholder='Put something interesting'></textarea>
            </label>
            <button disabled={isTopicEmpty}>Submit!</button>
        </form>
    );
};

SubmitTopicForm.propTypes = {
    newTopic: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    onTopicInputChange: PropTypes.func
};

export default SubmitTopicForm;