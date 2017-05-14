import React from 'react';
import { shallow } from 'enzyme';
import TopicItem from './TopicItem';

describe('TopicItem', () => {
    const topic = {
        topicId: 1,
        username: 'mrmeeseeks',
        topic: 'Sample topic',
        creationDate: '2016-10-25T11:08:25Z',
        totalVotes: 1,
        upvotes: [{
            'username': 'gskellorne0',
            'upOrDown': 1
        }],
        downvotes: []
    };

    it('renders elements without exploding', () => {
        const topicItem = shallow(<TopicItem topic={topic} />);

        expect(topicItem.find('.upvote')).toHaveLength(1);
        expect(topicItem.find('.votes')).toHaveLength(1);
        expect(topicItem.find('.downvote')).toHaveLength(1);
        expect(topicItem.find('.topic')).toHaveLength(1);
    });

    it('renders text elements', () => {
        const topicItem = shallow(<TopicItem topic={topic} />);

        expect(topicItem.find('.votes').text()).toContain('(1)');
        expect(topicItem.find('.topic').text()).toContain('Sample topic');
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
});