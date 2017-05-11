import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem';

const TopicList = ({ topics, handleVote }) => {
    const topicItems = topics.map(topic =>
        <TopicItem key={topic.topicId} topic={topic} handleVote={handleVote} />);

    return (
        <table>
            <thead>
                <tr>
                    <th>Topics</th>
                </tr>
            </thead>
            <tbody>
                {topicItems}
            </tbody>
        </table>
    );
}

TopicList.propTypes = {
    topics: PropTypes.array.isRequired,
    handleVote: PropTypes.func
}

export default TopicList;