import React from 'react';

const SubmitTopicForm = ({ newTopic, handleSubmit, handleTopicInputChange }) => (
    <form onSubmit={handleSubmit}>
        <label>
            Topic: <textarea value={newTopic}
                onChange={handleTopicInputChange}></textarea>
        </label>
        <input type='submit' value='Submit' />
    </form>
);

export default SubmitTopicForm;