import React from 'react';
import TopicItem from './TopicItem';
import { getMostPopularTopics } from './Topic';

const TopicList = ({ topics, handleVote }) => {
    const get20MostPopularTopics = getMostPopularTopics(20);
    const mostPopularTopics = get20MostPopularTopics(topics);
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