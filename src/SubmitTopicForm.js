import React from 'react';

const SubmitTopicForm = ({ newTopic, onSubmit, handleTopicInputChange }) => (
    <form onSubmit={onSubmit}>
        <label>
            Topic: <textarea value={newTopic}
                onChange={handleTopicInputChange}></textarea>
        </label>
        <input type='submit' value='Submit' />
    </form>
);

export default SubmitTopicForm;