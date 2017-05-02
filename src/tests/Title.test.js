import React from 'react';
import { shallow } from 'enzyme';
import Title from '../components/Title';

test('Title renders the text property', () => {
    const title = shallow(
        <Title text='FRONT PAGE' />
    );

    expect(title.text()).toEqual('FRONT PAGE');
});