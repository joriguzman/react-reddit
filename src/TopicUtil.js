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

            if (numberOfItems === undefined || numberOfItems === null) {
                return sortedTopics;
            } else {
                return sortedTopics.slice(0, numberOfItems);
            }
        };

const compareTopicVotes = (topicA, topicB) =>
    topicB.totalVotes - topicA.totalVotes;

const getTopicsSortedByVotes = getSortedTopics(compareTopicVotes);
const getTop5TopicsSortedByVotes = getTopicsSortedByVotes(5);
const getAllTopicsSortedByVotes = getTopicsSortedByVotes();

const getNewTopicId = (topics) => {
    const maxTopicId = topics.map(topic => topic.topicId)
        .reduce((max, current) => Math.max(max, current));
    const newTopicId = maxTopicId + 1;
    return newTopicId;
};

const TopicUtil = {
    getMostPopularTopics(topics) {
        return getTop5TopicsSortedByVotes(topics);
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
        return topics.find(topic => topic.topicId === topicId);
    }
}

export default TopicUtil;