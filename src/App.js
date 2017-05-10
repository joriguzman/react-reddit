import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';
import * as Topic from './TopicDataAccess';

const title = 'REACT REDDIT';
const username = 'anonymous';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title,
            username,
            newTopic: '',
            topics: Topic.getMostPopularTopics(20),
        }
    }

    handleTopicInputChange = (event) => {
        this.setState({ newTopic: event.target.value });
    }

    handleSubmit = (event) => {
        Topic.createTopic(this.state.newTopic, username);
        this.setState({
            newTopic: '',
            topics: Topic.getMostPopularTopics(20),
        });
        event.preventDefault();
    }

    handleVote = (topicId, upOrDownVote) => {
        Topic.addVote(topicId, upOrDownVote, username);
        this.setState({ topics: Topic.getMostPopularTopics(20) });
    }

    render() {
        return (
            <div className='home'>
                <header>
                    <Title text={this.state.title} />
                    <UserProfile username={this.state.username} />
                </header>
                <main>
                    <SubmitTopicForm newTopic={this.state.newTopic}
                        onTopicInputChange={this.handleTopicInputChange}
                        onSubmit={this.handleSubmit} />
                    <TopicList topics={this.state.topics}
                        handleVote={this.handleVote} />
                </main>
            </div>
        );
    }
}

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
