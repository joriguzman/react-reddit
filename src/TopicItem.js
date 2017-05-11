import React from 'react';
import PropTypes from 'prop-types';
import { getTotalVotes } from './TopicDataAccess';

const TopicItem = ({ topic, handleVote }) => {
    const topicId = topic.topicId;
    return (
        <tr>
            <td>
                <span className='upvote' onClick={() => handleVote(topicId, 1)}>Upvote</span>
                <span className='votes'> ({getTotalVotes(topic)}) </span>
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