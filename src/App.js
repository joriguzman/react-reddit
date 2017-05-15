import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';

const title = 'REACT REDDIT';
const username = 'anonymous';

// Top-level component of the app
class App extends Component {
    static propTypes = {
        topics: PropTypes.array.isRequired,
        api: PropTypes.object.isRequired,
        displayType: PropTypes.string.isRequired
    }

    static defaultProps = {
        displayType: 'Top'
    }

    constructor(props) {
        super(props);
        this.state = {
            username: username
        };
    }

    render() {
        const { username } = this.state;
        const { topics, displayType, api } = this.props;

        return (
            <div className='home'>
                <header>
                    <Title text={title} />
                    <UserProfile username={username} />
                </header>
                <main>
                    <SubmitTopicForm handleSubmit={api.addNewTopic} />
                    Display:
                    <select value={displayType} onChange={api.changeDisplay}>
                        <option value="All">All</option>
                        <option value="Top">Top</option>
                    </select>
                    <TopicList topics={topics}
                        handleUpvote={api.upvoteTopic}
                        handleDownvote={api.downvoteTopic} />
                </main>
            </div>
        );
    }
}

export default App;
