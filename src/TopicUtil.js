const getTotalVotes = topic =>
    topic.votes.reduce((totalVotes, currentVote) => totalVotes += currentVote.upOrDown, 0);

const getSortedTopics = comparison =>
    numberOfItems =>
        topics => {
            const topicsWithTotalVotes = topics.map(topic => {
                topic.totalVotes = getTotalVotes(topic);
                return topic;
            });
            const sortedTopics = [...topicsWithTotalVotes].sort(comparison);
            const sortedTopTopics = sortedTopics.slice(0, numberOfItems);
            return sortedTopTopics;
        };

const compareTopicVotes = (topicA, topicB) =>
    topicB.totalVotes - topicA.totalVotes;

const getTopicsSortedByVotes = getSortedTopics(compareTopicVotes);
const getTop20TopicsSortedByVotes = getTopicsSortedByVotes(20);

const getNewTopicId = (topics) => {
    const maxTopicId = topics.map(topic => topic.topicId)
        .reduce((max, current) => Math.max(max, current));
    const newTopicId = maxTopicId + 1;
    return newTopicId;
};

const TopicUtil = {
    getMostPopularTopics(topics) {
        return getTop20TopicsSortedByVotes(topics);
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
        return topics.find(topic => topic.topicId === topicId);
    }
}

export default TopicUtil;