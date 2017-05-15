import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem';

// Displays list of topics
const TopicList = ({ topics, handleUpvote, handleDownvote }) => {
    return (
        <table>
            <tbody>
                {topics.map(topic =>
                    <TopicItem key={topic.topicId}
                        topic={topic}
                        handleUpvote={handleUpvote}
                        handleDownvote={handleDownvote} />)}
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