import React from 'react';
import TopicItem from './TopicItem';

const TopicList = ({ topics, handleVote }) => {
    const getTopics = topics.map((topic, index) => {

        const topicId = topic.topic_id;
        const getVotes = topic.votes.reduce((totalVotes, currentVote) =>
            totalVotes += currentVote.up_or_down, 0);

        return (
            <li key={index}>
                <span onClick={() => handleVote(topicId, 1)}>Upvote</span>
                <span> ({getVotes}) </span>
                <span onClick={() => handleVote(topicId, -1)}>Downvote</span>
                <div>{topic.username}: {topic.topic}</div>
                <div>{topic.creation_date}</div>
            </li>)
    });

    return (
        <section>
            <h2><i>Topics</i></h2>
            <ul className="topicList">
                {getTopics}
            </ul>
        </section>
    );
}

export default TopicList;