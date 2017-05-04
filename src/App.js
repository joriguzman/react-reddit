import React, { Component } from 'react';
import Title from './Title';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';

const title = 'REACT REDDIT';
const username = 'squanch';

function createVote(topicId, upOrDownVote, username) {
    const vote = {
        topic_id: topicId,
        username: username,
        up_or_down: upOrDownVote,
        timestamp: new Date().toLocaleString() // TODO fix this
    }
    return vote;
}

function getNewTopicId(topics) {
    const maxTopicId = topics.map(topic => topic.topic_id)
        .reduce((max, current) => Math.max(max, current));
    const newTopicId = maxTopicId + 1;
    return newTopicId;
}

function findTopic(topics, topicId) {
    return topics.find(topic => topic.topic_id === topicId);
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title,
            username,
            topics: props.jsonObj.topics,
            newTopic: ''
        }
    }

    handleVote = (topicId, upOrDownVote) => {
        const vote = createVote(topicId, upOrDownVote, username);
        const topic = findTopic(this.state.topics, topicId);
        topic.votes = topic.votes.concat([vote]);
        this.setState({ topics: this.state.topics });
    }

    handleTopicInputChange = (event) => {
        this.setState({ newTopic: event.target.value });
    }

    handleSubmit = (event) => {
        const { topics, newTopic } = this.state;
        const topicId = getNewTopicId(topics);
        const votes = [];
        votes.push(createVote(topicId, 1, username));

        const topic = {
            topic_id: topicId,
            username: username,
            topic: newTopic,
            creation_date: new Date().toLocaleString(),
            votes: votes
        };

        this.setState({
            topics: topics.concat([topic]),
            newTopic: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className='home'>
                <header>
                    <Title text={this.state.title} />
                    <UserProfile username={username} />
                </header>
                <main>
                    <SubmitTopicForm newTopic={this.state.newTopic}
                        handleTopicInputChange={this.handleTopicInputChange}
                        handleSubmit={this.handleSubmit} />
                    <TopicList topics={this.state.topics}
                        handleVote={this.handleVote} />
                </main>
            </div>
        );
    }
}

export default App;
