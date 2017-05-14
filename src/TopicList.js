import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem';

const TopicList = ({ topics, handleUpvote, handleDownvote }) => {
    const topicItems = topics.map(topic =>
        <TopicItem key={topic.topicId} topic={topic}
            handleUpvote={handleUpvote} handleDownvote={handleDownvote} />);

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
};

TopicList.propTypes = {
    topics: PropTypes.array.isRequired,
    handleUpvote: PropTypes.func,
    handleDownvote: PropTypes.func
};

export default TopicList;