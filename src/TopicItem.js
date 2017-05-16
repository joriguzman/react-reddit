import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopicItem extends Component {
    static propTypes = {
        topic: PropTypes.object.isRequired,
        handleUpvote: PropTypes.func,
        handleDownvote: PropTypes.func
    }

    handleUpvote = () => {
        this.props.handleUpvote(this.props.topic);
    }

    handleDownvote = () => {
        this.props.handleDownvote(this.props.topic);
    }

    render() {
        const { topic } = this.props;
        const sumOfVotes = topic.upvotes.length - topic.downvotes.length;

        return (
            <li className='ListItem'>
                <div>{topic.topic}</div>
                <div className='Item__meta'>
                    <span className='upvote' onClick={this.handleUpvote}>Upvote</span>{' '}
                    <span className="Item__score">{sumOfVotes}</span>{' '}
                    <span className='downvote' onClick={this.handleDownvote}>Downvote</span>{'| '}
                    <span className="Item__by">By {topic.username} on {topic.creationDate}</span>
                </div>
            </li>
        );
    }
}

export default TopicItem;