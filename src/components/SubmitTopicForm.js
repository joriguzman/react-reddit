import React, { Component } from 'react';

const SubmitTopicForm = ({ newTopic, handleSubmit, handleChange }) => (
    <form onSubmit={handleSubmit}>
        <label>
            Topic: <textarea value={newTopic} onChange={handleChange}></textarea>
        </label>
        <input type='submit' value='Submit' />
    </form>
);

export default SubmitTopicForm;