import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';

// Top-level component of the app
class App extends Component {
    static propTypes = {
        topics: PropTypes.array.isRequired,
        api: PropTypes.object.isRequired,
        displayType: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }

    static defaultProps = {
        displayType: 'Top',
        username: 'guest'
    }

    render() {
        const { topics, displayType, api, username } = this.props;
        return (
            <div className="App__wrap">
                <div className="App__header">
                    <span className="App__homelink">REACT REDDIT</span>
                    <UserProfile username={username} />
                </div>
                <div className="App__content">
                    <SubmitTopicForm handleSubmit={api.addNewTopic} />
                    Display:
                       <select value={displayType} onChange={api.changeDisplay}>
                        <option value='All'>All</option>
                        <option value='Top'>Top</option>
                    </select>
                    <TopicList topics={topics}
                        handleUpvote={api.upvoteTopic}
                        handleDownvote={api.downvoteTopic} />
                </div>
                <div className="App__footer">
                    <a href="https://github.com/joriguzman/react-reddit">react-reddit</a>
                </div>
            </div>
        );
    }
}

export default App;
