import React from 'react';
import PropTypes from 'prop-types';

const TopicItem = ({ topic, handleVote }) => {
    const topicId = topic.topicId;
    return (
        <tr>
            <td>
                <span className='upvote' onClick={() => handleVote(topicId, 1)}>Upvote</span>
                <span className='votes'> ({topic.totalVotes}) </span>
                <span className='downvote' onClick={() => handleVote(topicId, -1)}>Downvote</span>
            </td>
            <td>
                <p className='topic'>{topic.topic}</p>
                <p className='author'>Posted by {topic.username} on {topic.creationDate}</p>
            </td>
        </tr>
    );
};

TopicItem.propTypes = {
    topic: PropTypes.object.isRequired,
    handleVote: PropTypes.func
}

export default TopicItem;