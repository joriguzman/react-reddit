import jsonData from './database.json';

const getSortedTopics = comparison =>
    topics =>
        numberOfItems => {
            const sortedTopics = [...topics].sort(comparison);
            const sortedTopTopics = sortedTopics.slice(0, numberOfItems);
            return sortedTopTopics;
        };

const getTotalVotes = topic =>
    topic.votes.reduce((totalVotes, currentVote) => totalVotes += currentVote.upOrDown, 0);

const compareTopicVotes = (topicA, topicB) =>
    getTotalVotes(topicB) - getTotalVotes(topicA);

const getTopicsSortedByVotes = getSortedTopics(compareTopicVotes);
const getMostPopularTopics = getTopicsSortedByVotes(jsonData.topics);

const getNewTopicId = (topics) => {
    const maxTopicId = topics.map(topic => topic.topicId)
        .reduce((max, current) => Math.max(max, current));
    const newTopicId = maxTopicId + 1;
    return newTopicId;
};

const createTopic = (topic, username) => {
    const newTopic = {
        topicId: getNewTopicId(jsonData.topics),
        topic,
        username,
        creation_date: new Date().toLocaleString(),
        votes: [{
            username,
            upOrDown: 1
        }]
    };
    jsonData.topics.push(newTopic);
    return newTopic;
};

const findTopic = (topicId) => {
    return jsonData.topics.find(topic => topic.topicId === topicId);
};

const addVote = (topicId, upOrDown, username) => {
    const vote = {
        username,
        upOrDown
    };
    const topicToVoteOn = findTopic(topicId);
    topicToVoteOn.votes.push(vote);
}

const getAllTopics = () => jsonData.topics;

export { getMostPopularTopics, createTopic, addVote, findTopic, getTotalVotes, getAllTopics };