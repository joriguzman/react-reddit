import React from 'react';

const SubmitTopicForm = ({ newTopic, onSubmit, onTopicInputChange }) => (
    <form onSubmit={onSubmit}>
        <label>
            Topic: <textarea value={newTopic}
                onChange={onTopicInputChange}></textarea>
        </label>
        <input type='submit' value='Submit' />
    </form>
);

export default SubmitTopicForm;