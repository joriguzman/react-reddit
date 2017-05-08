import React from 'react';
import { shallow, mount } from 'enzyme';
import Title from './Title';

describe('Title', () => {
    it('renders correct elements without exploding', () => {
        const title = shallow(<Title text='TITLE' />);

        expect(title.contains(<div><h1>TITLE</h1></div>)).toBe(true);
    });

    it('sets text property', () => {
        const title = mount(<Title text='TITLE' />);

        expect(title.props().text).toBe('TITLE');
    });
});
