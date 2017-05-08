const getSortedTopics = comparison =>
    numberOfItems =>
        topics => {
            const sortedTopics = [...topics].sort(comparison);
            const sortedTopTopics = sortedTopics.slice(0, numberOfItems);
            return sortedTopTopics;
        };

function compareTopicVotes(topicA, topicB) {
    return getVotes(topicB) - getVotes(topicA);
}

function getVotes(topic) {
    return topic.votes.reduce((totalVotes, currentVote) =>
        totalVotes += currentVote.up_or_down, 0);
}

export const getMostPopularTopics = getSortedTopics(compareTopicVotes);
