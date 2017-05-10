import jsonData from './database.json';

// const jsonData = require('./database.json');

const getSortedTopics = comparison =>
    topics =>
        numberOfItems => {
            const sortedTopics = [...topics].sort(comparison);
            const sortedTopTopics = sortedTopics.slice(0, numberOfItems);
            return sortedTopTopics;
        };

const compareTopicVotes = (topicA, topicB) =>
    getVotes(topicB) - getVotes(topicA);

const getVotes = topic =>
    topic.votes.reduce((totalVotes, currentVote) => totalVotes += currentVote.up_or_down, 0);

const getTopicsSortedByVotes = getSortedTopics(compareTopicVotes);
const getMostPopularTopics = getTopicsSortedByVotes(jsonData.topics);

const getNewTopicId = (topics) => {
    const maxTopicId = topics.map(topic => topic.topic_id)
        .reduce((max, current) => Math.max(max, current));
    const newTopicId = maxTopicId + 1;
    return newTopicId;
};

const createTopic = (topic, username) => {
    const newTopic = {
        topic_id: getNewTopicId(jsonData.topics),
        topic,
        username,
        creation_date: new Date().toLocaleString(),
        votes: [{
            username,
            up_or_down: 1
        }]
    };
    return newTopic;
};

export { getMostPopularTopics, createTopic };