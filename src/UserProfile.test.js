import React from 'react';
import { shallow, render } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
    it('renders without throwing an error', () => {
        const userProfile = shallow(<UserProfile username='morty' />);

        expect(userProfile.contains(<div>Hi morty!</div>)).toBe(true);
    });

    it('renders username property', () => {
        const userProfile = shallow(<UserProfile username='morty' />);

        expect(userProfile.text()).toBe('Hi morty!');
    });
});