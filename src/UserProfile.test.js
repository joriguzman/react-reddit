import React from 'react';
import { shallow, render } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
    it('Should render without throwing an error', () => {
        const userProfile = shallow(<UserProfile username='morty' />);

        expect(userProfile.contains(<div>Hi morty!</div>)).toBe(true);
    });

    it('Should render username property', () => {
        const userProfile = render(<UserProfile username='morty' />);

        expect(userProfile.text()).toEqual('Hi morty!');
    });
});