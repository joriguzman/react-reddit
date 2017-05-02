import React, { Component } from 'react';

const TopicInput = (props) => (
    <fieldset>
        *<label>Text</label>
        <br />
        <textarea maxLength='255' />
        <br />
        <button>SUBMIT</button>
    </fieldset>
);

export default TopicInput;