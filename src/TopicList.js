import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem';

const TopicList = ({ topics, handleVote }) => {
    const topicItems = topics.map(topic =>
        <TopicItem key={topic.topicId} topic={topic} handleVote={handleVote} />);

    return (
        <section>
            <h2><i>Topics</i></h2>
            <ul className="topicList">
                {topicItems}
            </ul>
        </section>
    );
}

TopicList.propTypes = {
    topics: PropTypes.array.isRequired,
    handleVote: PropTypes.func
}

export default TopicList;