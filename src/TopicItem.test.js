import React from 'react';
import { shallow } from 'enzyme';
import TopicItem from './TopicItem';

describe('TopicItem', () => {
    const topic = {
        topic_id: 1,
        username: 'mrmeeseks',
        topic: "Sample topic",
        creation_date: '2016-10-25T11:08:25Z',
        votes: [{
            "username": "gskellorne0",
            "up_or_down": 1
        }]
    };

    it('renders elements without exploding', () => {
        const topicItem = shallow(<TopicItem topic={topic} />);

        expect(topicItem.find('.upvote').length).toBe(1);
        expect(topicItem.find('.votes').length).toBe(1);
        expect(topicItem.find('.downvote').length).toBe(1);
        expect(topicItem.find('.topic').length).toBe(1);
        expect(topicItem.find('.creationDate').length).toBe(1);
    });

    it('renders topic property', () => {
        const topicItem = shallow(<TopicItem topic={topic} />);

        expect(topicItem.find('.votes').text()).toContain('(1)');
        expect(topicItem.find('.topic').text()).toContain('mrmeeseks: Sample topic');
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