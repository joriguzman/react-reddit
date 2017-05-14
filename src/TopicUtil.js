const getSortedTopics = comparison =>
    numberOfItems =>
        topics => {
            const sortedTopics = [...topics].sort(comparison);

            if (numberOfItems === undefined || numberOfItems === null) {
                return sortedTopics;
            } else {
                return sortedTopics.slice(0, numberOfItems);
            }
        };

const compareTopicVotes = (topicA, topicB) => {
    return (topicB.upvotes.length - topicB.downvotes.length) - (topicA.upvotes.length - topicA.downvotes.length);
};

const getTopicsSortedByVotes = getSortedTopics(compareTopicVotes);
const getTop20TopicsSortedByVotes = getTopicsSortedByVotes(20);
const getAllTopicsSortedByVotes = getTopicsSortedByVotes();

const getNewTopicId = (topics) => {
    const maxTopicId = topics.map(topic => topic.topicId)
        .reduce((max, current) => Math.max(max, current));
    const newTopicId = maxTopicId + 1;
    return newTopicId;
};

const findByTopicId = (topics, topicId) => {
    return topics.find(topic => topic.topicId === topicId);
};

const replaceTopic = (topics, newTopic) => {
    const currentTopicIndex = topics.findIndex(currTopic => currTopic.topicId === newTopic.topicId);
    const newTopics = [...topics.slice(0, currentTopicIndex), newTopic, ...topics.slice(currentTopicIndex + 1)];
    return newTopics;
};

const TopicUtil = {
    getMostPopularTopics(topics) {
        return getTop20TopicsSortedByVotes(topics);
    },

    getAllTopicsSortedByVotes(topics) {
        return getAllTopicsSortedByVotes(topics);
    },

    createTopic(topics, topic, username) {
        const newTopic = {
            topicId: getNewTopicId(topics),
            topic,
            username,
            creationDate: new Date().toLocaleString(),
            votes: [{
                username,
                upOrDown: 1
            }]
        };
        return newTopic;
    },

    createVote(upOrDown, username) {
        return {
            username,
            upOrDown
        };
    },

    findTopic(topics, topicId) {
        return findByTopicId(topics, topicId);
    },

    // Create new copy of topics with vote added to topic. Don't mutate existing topics.
    upvoteTopic(topics, topic, username) {
        const newTopic = { ...topic, upvotes: topic.upvotes.concat([{ username }]) };
        return replaceTopic(topics, newTopic);
    },

    // Create new copy of topics with vote added to topic. Don't mutate existing topics.
    downvoteTopic(topics, topic, username) {
        const newTopic = { ...topic, downvotes: topic.downvotes.concat([{ username }]) };
        return replaceTopic(topics, newTopic);
    }
};

export default TopicUtil;