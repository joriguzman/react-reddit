import React from 'react';
import { shallow, render } from 'enzyme';
import TopicItem from './TopicItem';

describe('TopicItem', () => {
    it('renders without throwing an error', () => {
        const topic = {
            topic_id: 1,
            username: 'mrmeeseks',
            topic: "Sample topic",
            creation_date: '2016-10-25T11:08:25Z',
            votes: [{
                "username": "gskellorne0",
                "up_or_down": 1,
                "timestamp": "2017-01-21T01:35:27Z"
            }]
        };
        const topicItem = shallow(<TopicItem topic={topic} />);

        expect(topicItem.find('li').length).toBe(1);
        expect(topicItem.find('span').length).toBe(3);
        expect(topicItem.find('div').length).toBe(2);
    });
});