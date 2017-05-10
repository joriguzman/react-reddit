import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title', () => {
    it('renders elements without exploding', () => {
        const title = shallow(<Title text='TITLE' />);

        expect(title.find('h1').length).toBe(1);
    });

    it('sets text property', () => {
        const title = shallow(<Title text='TITLE' />);

        expect(title.text()).toBe('TITLE');
    });
});
