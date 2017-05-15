import React, { Component } from 'react';
import TopicUtil from './TopicUtil';
import loadInitialTopics from './database';

// Higher order component that composes a component and adds data access functions to it.
// This is the API to the data store.
const withDataStore = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            const { addNewTopic, upvoteTopic, downvoteTopic, changeDisplay } = this;
            this.api = { addNewTopic, upvoteTopic, downvoteTopic, changeDisplay };
            this.state = {
                topics: loadInitialTopics(),
                displayType: 'Top'
            };
        }

        // Creates new topic
        addNewTopic = (event, newTopic) => {
            const { topics, username } = this.state;
            const newTopics = TopicUtil.createTopic(topics, newTopic, username);
            this.setState({ topics: newTopics });
            event.preventDefault();
            console.log('called addNewTopic');
        }

        // Upvotes a topic
        upvoteTopic = (topic) => {
            const { topics, username } = this.state;
            const newTopics = TopicUtil.upvoteTopic(topics, topic, username);
            this.setState({ topics: newTopics });
            console.log('called upvoteTopic');
        }

        // Downvotes a topic
        downvoteTopic = (topicId) => {
            const { topics, username } = this.state;
            const newTopics = TopicUtil.downvoteTopic(topics, topicId, username);
            this.setState({ topics: newTopics });
            console.log('called downvoteTopic');
        }

        // Changes display
        changeDisplay = (event) => {
            this.setState({ displayType: event.target.value });
            event.preventDefault();
            console.log('called changeDisplay');
        }

        render() {
            const { topics, displayType } = this.state;
            const sortedTopics = displayType === 'Top' ?
                TopicUtil.getTop20TopicsSortedByVotes(topics) :
                TopicUtil.getAllTopicsSortedByVotes(topics);

            // The wrapped component uses a new prop 'api' to access data store.
            // We only pass through any additional props.
            return <WrappedComponent api={this.api}
                topics={sortedTopics}
                displayType={displayType}
                {...this.props} />;
        }
    };
};

export default withDataStore;