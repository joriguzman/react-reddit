import React from 'react';

const SubmitTopicForm = ({ newTopic, onSubmit, onInputChange }) => (
    <form onSubmit={onSubmit}>
        <label>
            Topic: <textarea value={newTopic}
                onChange={onInputChange}></textarea>
        </label>
        <input type='submit' value='Submit' />
    </form>
);

export default SubmitTopicForm;