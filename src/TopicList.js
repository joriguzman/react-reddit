import React from 'react';
import TopicItem from './TopicItem';
import { getMostPopularTopics } from './TopicDataAccess';

const TopicList = ({ topics, handleVote }) => {
    const mostPopularTopics = getMostPopularTopics(20);
    const renderTopicItems = mostPopularTopics.map(topic =>
        <TopicItem key={topic.topic_id} topic={topic} handleVote={handleVote} />);

    return (
        <section>
            <h2><i>Topics</i></h2>
            <ul className="topicList">
                {renderTopicItems}
            </ul>
        </section>
    );
}

export default TopicList;