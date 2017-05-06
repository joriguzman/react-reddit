import React from 'react';
import { shallow } from 'enzyme';
import SubmitTopicForm from './SubmitTopicForm';

describe('SubmitTopicForm', () => {
    it('renders correct elements', () => {
        const submitForm = shallow(<SubmitTopicForm />);

        expect(submitForm.find('textarea').length).toBe(1);
        expect(submitForm.find('input').length).toBe(1);
    });

    it('calls handleInputChange when input is changed', () => {
        const handleInputChange = jest.fn();
        const submitForm = shallow(<SubmitTopicForm onInputChange={handleInputChange} />);

        submitForm.find('textarea').simulate('change');

        expect(handleInputChange).toBeCalled();
    });

    // TODO get this to work
    // it('calls handleSubmit when input is changed', () => {
    //     const handleSubmit = jest.fn();
    //     const submitForm = shallow(<SubmitTopicForm onSubmit={handleSubmit} />);

    //     submitForm.find('input').simulate('submit');

    //     expect(handleSubmit).toBeCalled();
    // });
});