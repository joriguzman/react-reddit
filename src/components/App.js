import React, { Component } from 'react';
import Title from './Title';
import UserProfile from './UserProfile';
import TopicInput from './TopicInput';
import TopicList from './TopicList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'REACT REDDIT',
            username: 'mrsquanch',
            topics: props.jsonObj.topics,
            votes: props.jsonObj.votes
        }
    }

    handleUpVote = (topicId) => {
        const vote = this.createVote(topicId, 1);
        this.addVoteToVotesCollectionAndState(vote);
    }

    handleDownVote = (topicId) => {
        const vote = this.createVote(topicId, -1);
        this.addVoteToVotesCollectionAndState(vote);
    }

    createVote(topicId, upOrDownVote) {
        const vote = {
            topic_id: topicId,
            username: this.state.username,
            up_or_down: upOrDownVote,
            timestamp: Date.now
        }
        return vote;
    }

    addVoteToVotesCollectionAndState(vote) {
        const votes = this.state.votes;
        votes.push(vote);
        this.setState({votes: votes});
    }

    render() {
        return (
            <div className='home'>
                <header>
                    <Title text={this.state.title} />
                    <UserProfile username={this.state.username} />
                </header>
                <main>
                    <TopicInput />
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
