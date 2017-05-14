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
            <tr>
                <td>
                    <span className='upvote' onClick={this.handleUpvote}>Upvote</span>
                    <span className='votes'> ({sumOfVotes}) </span>
                    <span className='downvote' onClick={this.handleDownvote}>Downvote</span>
                </td>
                <td>
                    <p className='topic'>{topic.topic}</p>
                    <p className='author'>Posted by {topic.username} on {topic.creationDate}</p>
                </td>
            </tr>
        );
    }
}

export default TopicItem;