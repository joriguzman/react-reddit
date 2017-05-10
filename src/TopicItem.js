import React from 'react';
import PropTypes from 'prop-types';
import { getTotalVotes } from './TopicDataAccess';

const TopicItem = ({ topic, handleVote }) => {
    const topicId = topic.topicId;
    return (
        <li>
            <span className='upvote' onClick={() => handleVote(topicId, 1)}>Upvote</span>
            <span className='votes'> ({getTotalVotes(topic)}) </span>
            <span className='downvote' onClick={() => handleVote(topicId, -1)}>Downvote</span>
            <div className='topic'>{topic.username}: {topic.topic}</div>
            <div className='creationDate'>{topic.creationDate}</div>
        </li>
    );
};

TopicItem.propTypes = {
    topic: PropTypes.object.isRequired,
    handleVote: PropTypes.func
}

export default TopicItem;