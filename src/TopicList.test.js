import React from 'react';
import { shallow } from 'enzyme';
import TopicList from './TopicList';
import TopicItem from './TopicItem';

describe('TopicList', () => {
    const topics = [{
        topicId: 1,
        username: 'user1',
        topic: "Sample topic1",
        votes: [{
            username: 'user1',
            upOrDown: 1
        }]
    },
    {
        topicId: 2,
        username: 'user2',
        topic: 'Sample topic2',
        votes: [{
            username: 'user2',
            upOrDown: 1
        }]
    }];

    it('renders two TopicItems', () => {
        const topicList = shallow(<TopicList topics={topics} />);

        expect(topicList.find(TopicItem).length).toBe(2);
    });

    it('renders a table of topics', () => {
        const topicList = shallow(<TopicList topics={topics} />);

        expect(topicList.find('table').length).toBe(1);
    });
});