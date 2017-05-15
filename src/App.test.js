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
        const api = jest.mock(); // TODO fix test warning
        const div = document.createElement('div');
        ReactDOM.render(<App topics={topics} api={api} />, div);
    });

    it('renders Title component', () => {
        const api = jest.mock();
        const app = shallow(<App topics={topics} api={api} />);

        expect(app.find(Title).length).toBe(1);
    });

    it('renders UserProfile component', () => {
        const api = jest.mock();
        const app = shallow(<App topics={topics} api={api} />);

        expect(app.find(UserProfile).length).toBe(1);
    });

    it('renders SubmitTopicForm component', () => {
        const api = jest.mock();
        const app = shallow(<App topics={topics} api={api} />);

        expect(app.find(SubmitTopicForm).length).toBe(1);
    });

    it('renders TopicList component', () => {
        const api = jest.mock();
        const app = shallow(<App topics={topics} api={api} />);

        expect(app.find(TopicList).length).toBe(1);
    });
});
