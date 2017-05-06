import React from 'react';

function getVotes(topic) {
    return topic.votes.reduce((totalVotes, currentVote) =>
        totalVotes += currentVote.up_or_down, 0);
}

const TopicItem = ({ topic, handleVote }) => {
    const topicId = topic.topic_id;
    return (
        <li>
            <span className='upvote' onClick={() => handleVote(topicId, 1)}>Upvote</span>
            <span className='votes'> ({getVotes(topic)}) </span>
            <span className='downvote' onClick={() => handleVote(topicId, -1)}>Downvote</span>
            <div className='topic'>{topic.username}: {topic.topic}</div>
            <div className='creationDate'>{topic.creation_date}</div>
        </li>
    );
};

export default TopicItem;