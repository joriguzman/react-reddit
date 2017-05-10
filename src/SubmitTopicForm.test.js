import React from 'react';
import { shallow } from 'enzyme';
import SubmitTopicForm from './SubmitTopicForm';

describe('SubmitTopicForm', () => {
    it('renders elements without exploding', () => {
        const submitForm = shallow(<SubmitTopicForm />);

        expect(submitForm.find('textarea').length).toBe(1);
        expect(submitForm.find('input').length).toBe(1);
    });

    it('calls handleTopicInputChange when input is changed', () => {
        const handleTopicInputChange = jest.fn();
        const submitForm = shallow(
            <SubmitTopicForm onTopicInputChange={handleTopicInputChange} />);

        submitForm.find('textarea').simulate('change');

        expect(handleTopicInputChange).toBeCalled();
    });

    it('calls handleSubmit when input is changed', () => {
        const handleSubmit = jest.fn();
        const submitForm = shallow(<SubmitTopicForm onSubmit={handleSubmit} />);

        submitForm.find('form').simulate('submit');

        expect(handleSubmit).toBeCalled();
    });
});