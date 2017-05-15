import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';

const title = 'REACT REDDIT';

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
            <div className='AppContainer'>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <Title text={title} />
                                <UserProfile username={username} />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <SubmitTopicForm handleSubmit={api.addNewTopic} />
                                Display:
                                <select value={displayType} onChange={api.changeDisplay}>
                                    <option value='All'>All</option>
                                    <option value='Top'>Top</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TopicList topics={topics}
                                    handleUpvote={api.upvoteTopic}
                                    handleDownvote={api.downvoteTopic} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
