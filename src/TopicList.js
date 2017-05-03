import React, { Component } from 'react';
import TopicItem from './TopicItem';

const TopicList = ({ topics, votes, handleUpVote, handleDownVote }) => {
    const getTopics = topics.map((topic, index) => {

        const topicId = topic.topic_id;
        const getVotes = votes.filter(vote => vote.topic_id === topicId)
            .reduce((totalVotes, currentVote) => totalVotes += currentVote.up_or_down, 0);

        return (
            <li key={index}>
                <span onClick={() => handleUpVote(topicId)}>Upvote</span>
                <span> ({getVotes}) </span>
                <span onClick={() => handleDownVote(topicId)}>Downvote</span>
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