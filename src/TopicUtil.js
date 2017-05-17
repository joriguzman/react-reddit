/*
 * Utility functions for displaying and manipulating topics.
 */

// Curried function that returns a function to sort topics.
const getSortedTopics = comparison =>
    topics => {
        const sortedTopics = [...topics].sort(comparison);
        return sortedTopics;
    };

// Comparison method that compares two topics based on upvotes and downvotes.
const compareTopicVotes = (topicA, topicB) => {
    return (topicB.upvotes.length - topicB.downvotes.length) -
        (topicA.upvotes.length - topicA.downvotes.length);
};

// Partially apply getSortedTopics to return a function that returns the sorted topics.
const getTopicsSortedByVotes = getSortedTopics(compareTopicVotes);

// Returns max topic ID incremented by 1
const getNewTopicId = (topics) => {
    const maxTopicId = topics.map(topic => topic.topicId)
        .reduce((max, current) => Math.max(max, current));
    const newTopicId = maxTopicId + 1;
    return newTopicId;
};

const getTopicById = (topics, topicId) => {
    return topics.find(currTopic => currTopic.topicId === topicId);
};

// Returns a new topic with added upvote/downvote.
const addVoteToTopic = (topic, username, voteType) => {
    const votes = topic[voteType];
    return { ...topic, [voteType]: votes.concat([{ username }]) };
};

// Replaces the topic in list based on index and returns a new list.
const replaceTopic = (topics, topic) => {
    const topicIndex = topics.findIndex(currTopic => currTopic.topicId === topic.topicId);
    const newTopics = [...topics.slice(0, topicIndex), topic, ...topics.slice(topicIndex + 1)];
    return newTopics;
};

const TopicUtil = {
    getTop20TopicsSortedByVotes(topics) {
        const sortedTopics = getTopicsSortedByVotes(topics);
        return sortedTopics.slice(0, 20);
    },

    getAllTopicsSortedByVotes(topics) {
        return getTopicsSortedByVotes(topics);
    },

    createTopic(topics, topic, username) {
        const newTopic = {
            topicId: getNewTopicId(topics),
            topic,
            username,
            creationDate: new Date().toLocaleString(),
            upvotes: [{ username }],
            downvotes: []
        };
        return newTopic;
    },

    // Adds topic to the list. A new list is returned. Original list is kept intact.
    addTopic(topics, topic) {
        return topics.concat([topic]);
    },

    // Creates new copy of topics with upvote added to topic. It does not mutate existing topics.
    upvoteTopic(topics, topicId, username) {
        const topic = getTopicById(topics, topicId);
        const updatedTopic = addVoteToTopic(topic, username, 'upvotes');
        return replaceTopic(topics, updatedTopic);
    },

    // Creates new copy of topics with downvote added to topic. It does not mutate existing topics.
    downvoteTopic(topics, topicId, username) {
        const topic = getTopicById(topics, topicId);
        const updatedTopic = addVoteToTopic(topic, username, 'downvotes');
        return replaceTopic(topics, updatedTopic);
    }
};

export default TopicUtil;