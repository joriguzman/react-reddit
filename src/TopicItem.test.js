import React from 'react';
import { shallow } from 'enzyme';
import TopicItem from './TopicItem';

describe('TopicItem', () => {
    const topic = {
        topicId: 1,
        username: 'mrmeeseeks',
        topic: "Sample topic",
        creationDate: '2016-10-25T11:08:25Z',
        votes: [{
            "username": "gskellorne0",
            "upOrDown": 1
        }]
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

    it('calls handleVote when upvote is clicked', () => {
        const handleVote = jest.fn();
        const topicItem = shallow(<TopicItem topic={topic} handleVote={handleVote} />);

        topicItem.find('.upvote').simulate('click');

        expect(handleVote).toBeCalled();
    });

    it('calls handleVote when downvote is clicked', () => {
        const handleVote = jest.fn();
        const topicItem = shallow(<TopicItem topic={topic} handleVote={handleVote} />);

        topicItem.find('.downvote').simulate('click');

        expect(handleVote).toBeCalled();
    });
});