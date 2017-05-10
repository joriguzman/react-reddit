import React from 'react';
import { shallow } from 'enzyme';
import SubmitTopicForm from './SubmitTopicForm';

describe('SubmitTopicForm', () => {
    it('renders elements without exploding', () => {
        const submitForm = shallow(<SubmitTopicForm newTopic='' />);

        expect(submitForm.find('textarea').length).toBe(1);
        expect(submitForm.find('textarea').prop('maxLength')).toBe(255);
        expect(submitForm.find('button').length).toBe(1);
    });

    it('disabled submit button if there is no topic', () => {
        const submitForm = shallow(<SubmitTopicForm newTopic='' />);

        expect(submitForm.find('button').prop('disabled')).toBe(true);
    });

    it('enables submit button if there is a topic', () => {
        const submitForm = shallow(<SubmitTopicForm newTopic='Some topic' />);

        expect(submitForm.find('button').prop('disabled')).toBe(false);
    });

    it('calls handleTopicInputChange when input is changed', () => {
        const handleTopicInputChange = jest.fn();
        const submitForm = shallow(
            <SubmitTopicForm newTopic='' onTopicInputChange={handleTopicInputChange} />);

        submitForm.find('textarea').simulate('change');

        expect(handleTopicInputChange).toBeCalled();
    });

    it('calls handleSubmit when input is changed', () => {
        const handleSubmit = jest.fn();
        const submitForm = shallow(<SubmitTopicForm newTopic='' onSubmit={handleSubmit} />);

        submitForm.find('form').simulate('submit');

        expect(handleSubmit).toBeCalled();
    });
});