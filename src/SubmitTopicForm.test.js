import React from 'react';
import { shallow } from 'enzyme';
import SubmitTopicForm from './SubmitTopicForm';

describe('SubmitTopicForm', () => {
    it('renders elements without exploding', () => {
        const submitForm = shallow(<SubmitTopicForm />);

        expect(submitForm.find('textarea').length).toBe(1);
        expect(submitForm.find('textarea').prop('maxLength')).toBe(255);
        expect(submitForm.find('button').length).toBe(1);
    });

    it('disabled submit button if there is no topic', () => {
        const submitForm = shallow(<SubmitTopicForm />);

        expect(submitForm.find('button').prop('disabled')).toBe(true);
    });

    it('enables submit button if there is a topic', () => {
        // const submitForm = shallow(<SubmitTopicForm />);
        // const input = submitForm.find('textarea');
        // input.simulate('change', { target: { value: 'Changed' } });

        // expect(submitForm.find('button').prop('disabled')).toBe(true);
    });

    it('calls handleTopicInputChange when input is changed', () => {
        // const handleTopicInputChange = jest.fn();
        // const submitForm = shallow(
        //     <SubmitTopicForm onTopicInputChange={handleTopicInputChange} />);

        // submitForm.find('textarea').simulate('change');

        // expect(handleTopicInputChange).toBeCalled();
    });

    it('calls handleSubmit when input is changed', () => {
        // const handleSubmit = jest.fn();
        // const submitForm = shallow(<SubmitTopicForm onSubmit={handleSubmit} />);

        // submitForm.find('form').simulate('submit');

        // expect(handleSubmit).toBeCalled();
    });
});