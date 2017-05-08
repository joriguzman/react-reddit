import React from 'react';
import { shallow, mount } from 'enzyme';
import TopicList from './TopicList';
import TopicItem from './TopicItem';

describe('TopicItem', () => {
    it('renders elements without exploding');
    it('displays top 20 topics sorted by number of votes');
    it('calls handleVote when a topic\'s upvote is clicked');
    it('calls handleVote when a topic\'s downvote is clicked');
});