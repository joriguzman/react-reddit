import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Title from './Title';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';

describe('App', () => {
    const topics = [
        {
            topicId: 1,
            username: 'user1',
            topic: 'Sample topic1',
            upvotes: [
                { username: 'user1' }
            ],
            downvotes: []
        },
        {
            topicId: 2,
            username: 'user2',
            topic: 'Sample topic2',
            upvotes: [
                { username: 'user2' }
            ],
            downvotes: []
        }
    ];

    it('renders without exploding', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App topics={topics} />, div);
    });

    it('renders Title component', () => {
        const app = shallow(<App topics={topics} />);

        expect(app.find(Title).length).toBe(1);
    });

    it('renders UserProfile component', () => {
        const app = shallow(<App topics={topics} />);

        expect(app.find(UserProfile).length).toBe(1);
    });

    it('renders SubmitTopicForm component', () => {
        const app = shallow(<App topics={topics} />);

        expect(app.find(SubmitTopicForm).length).toBe(1);
    });

    it('renders TopicList component', () => {
        const app = shallow(<App topics={topics} />);

        expect(app.find(TopicList).length).toBe(1);
    });
});
