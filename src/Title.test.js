import React from 'react';
import { shallow, render } from 'enzyme';
import Title from './Title';

describe('Title', () => {
    it('renders correct elements', () => {
        const title = shallow(<Title text='TITLE' />);

        expect(title.contains(<div><h1>TITLE</h1></div>)).toBe(true);
    });

    it('renders text property', () => {
        const title = shallow(<Title text='TITLE' />);

        expect(title.text()).toBe('TITLE');
    });
});
