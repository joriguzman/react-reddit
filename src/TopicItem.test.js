import React from 'react';
import { shallow } from 'enzyme';
import TopicItem from './TopicItem';

const username = 'mrmeeseeks';
const topic = {
    topicId: 1,
    username,
    topic: 'Sample topic',
    upvotes: [{ username }],
    downvotes: []
};

it('renders elements without exploding', () => {
    const topicItem = shallow(<TopicItem topic={topic} />);

    expect(topicItem.find('li')).toHaveLength(1);
});

it('renders text elements', () => {
    const topicItem = shallow(<TopicItem topic={topic} />);

    expect(topicItem.find('.Item__title').text()).toContain('Sample topic');
});

it('calls handleUpvote when upvote is clicked', () => {
    const handleUpvote = jest.fn();
    const topicItem = shallow(<TopicItem topic={topic} handleUpvote={handleUpvote} />);

    topicItem.find('.upvote').simulate('click');

    expect(handleUpvote).toBeCalled();
});

it('calls handleDownvote when downvote is clicked', () => {
    const handleDownvote = jest.fn();
    const topicItem = shallow(<TopicItem topic={topic} handleDownvote={handleDownvote} />);

    topicItem.find('.downvote').simulate('click');

    expect(handleDownvote).toBeCalled();
});
