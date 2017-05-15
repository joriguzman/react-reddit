import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';
import TopicUtil from './TopicUtil';

const title = 'REACT REDDIT';
const username = 'anonymous';

// Main component of the application
class App extends Component {
    static propTypes = {
        topics: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            username: username,
            displayType: 'Top',
            topics: props.topics,
        };
    }

    // Creates new topic
    handleSubmit = (event, newTopic) => {
        const { topics, username } = this.state;
        const newTopics = TopicUtil.createTopic(topics, newTopic, username);
        this.setState({ topics: newTopics });
        event.preventDefault();
    }

    // Upvotes a topic
    handleUpvote = (topic) => {
        const { topics, username } = this.state;
        const newTopics = TopicUtil.upvoteTopic(topics, topic, username);
        this.setState({ topics: newTopics });
    }

    // Downvotes a topic
    handleDownvote = (topicId) => {
        const { topics, username } = this.state;
        const newTopics = TopicUtil.downvoteTopic(topics, topicId, username);
        this.setState({ topics: newTopics });
    }

    // Changes display
    handleDisplayTypeChange = (event) => {
        this.setState({ displayType: event.target.value });
        event.preventDefault();
    }

    render() {
        const { username, topics, displayType } = this.state;
        const sortedTopics = displayType === 'Top' ?
            TopicUtil.getMostPopularTopics(topics) :
            TopicUtil.getAllTopicsSortedByVotes(topics);

        return (
            <div className='home'>
                <header>
                    <Title text={title} />
                    <UserProfile username={username} />
                </header>
                <main>
                    <SubmitTopicForm handleSubmit={this.handleSubmit} />
                    Display:
                    <select value={displayType} onChange={this.handleDisplayTypeChange}>
                        <option value="All">All</option>
                        <option value="Top">Top</option>
                    </select>
                    <TopicList topics={sortedTopics}
                        handleUpvote={this.handleUpvote}
                        handleDownvote={this.handleDownvote} />
                </main>
            </div>
        );
    }
}

export default App;
