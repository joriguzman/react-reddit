import React from 'react';
import { shallow, render } from 'enzyme';
import Title from './Title';

describe('Title', () => {
    it('Should render without thowring an error', () => {
        const title = shallow(<Title text='TITLE' />);

        expect(title.contains(<div><h1>TITLE</h1></div>)).toBe(true);
    });

    it('Should render text property', () => {
        const title = render(<Title text='TITLE' />);

        expect(title.text()).toEqual('TITLE');
    });
});
