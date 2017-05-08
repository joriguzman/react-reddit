import React from 'react';
import { shallow, mount } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
    it('renders elements without exploding', () => {
        const userProfile = shallow(<UserProfile username='morty' />);

        expect(userProfile.contains(<div>Hi morty!</div>)).toBe(true);
    });

    it('sets username property', () => {
        const userProfile = mount(<UserProfile username='morty' />);

        expect(userProfile.props().username).toBe('morty');
    });
});