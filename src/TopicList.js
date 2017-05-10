import React from 'react';
import TopicItem from './TopicItem';

const TopicList = ({ topics, handleVote }) => {
    const topicItems = topics.map(topic =>
        <TopicItem key={topic.topic_id} topic={topic} handleVote={handleVote} />);

    return (
        <section>
            <h2><i>Topics</i></h2>
            <ul className="topicList">
                {topicItems}
            </ul>
        </section>
    );
}

export default TopicList;