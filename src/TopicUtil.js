const getSortedTopics = comparison => // TODO Put numberOfItemsLast
    topics => {
        const sortedTopics = [...topics].sort(comparison);
        return sortedTopics;
    };

const compareTopicVotes = (topicA, topicB) => {
    return (topicB.upvotes.length - topicB.downvotes.length) - (topicA.upvotes.length - topicA.downvotes.length);
};

const getTopicsSortedByVotes = getSortedTopics(compareTopicVotes);
const getTop20TopicsSortedByVotes = (topics) => {
    const sortedTopics = getTopicsSortedByVotes(topics);
    return sortedTopics.slice(0, 20);
};

const getNewTopicId = (topics) => {
    const maxTopicId = topics.map(topic => topic.topicId)
        .reduce((max, current) => Math.max(max, current));
    const newTopicId = maxTopicId + 1;
    return newTopicId;
};

const replaceTopic = (topics, newTopic) => {
    const currentTopicIndex = topics.findIndex(currTopic => currTopic.topicId === newTopic.topicId);
    const newTopics = [...topics.slice(0, currentTopicIndex), newTopic, ...topics.slice(currentTopicIndex + 1)];
    return newTopics;
};

const TopicUtil = {
    getTop20TopicsSortedByVotes(topics) {
        return getTop20TopicsSortedByVotes(topics);
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
        const newTopics = topics.concat([newTopic]);
        return newTopics;
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