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
        timestamp: Date.now() // TODO fix this
    }
    return vote;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title,
            username,
            topics: props.jsonObj.topics,
            votes: props.jsonObj.votes,
            newTopic: ''
        }
    }

    handleUpVote = (topicId) => {
        const vote = createVote(topicId, 1, username);
        this.setState({ votes: this.state.votes.concat([vote]) });
    }

    handleDownVote = (topicId) => {
        const vote = createVote(topicId, -1, username);
        this.setState({ votes: this.state.votes.concat([vote]) });
    }

    handleChange = (event) => {
        this.setState({ newTopic: event.target.value });
    }

    getNewTopicId = () => {
        const { topics } = this.state;
        const maxTopicId = topics.map(topic => topic.topic_id)
            .reduce((max, current) => Math.max(max, current));
        const newTopicId = maxTopicId + 1;
        return newTopicId;
    }

    handleSubmit = (event) => {
        const { topics, newTopic } = this.state;
        const topic = {
            topic_id: this.getNewTopicId(),
            username,
            topic: newTopic,
            creation_date: Date.now()
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
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} />
                    <TopicList topics={this.state.topics}
                        votes={this.state.votes}
                        handleUpVote={this.handleUpVote}
                        handleDownVote={this.handleDownVote} />
                </main>
            </div>
        );
    }
}

export default App;
