const getSortedTopics = comparison =>
    numberOfItems =>
        topics => {
            const sortedTopics = [...topics].sort(comparison);
            const sortedTopTopics = sortedTopics.slice(0, numberOfItems);
            return sortedTopTopics;
        };

const compareTopicVotes = (topicA, topicB) =>
    getVotes(topicB) - getVotes(topicA);

export const getVotes = topic => 
    topic.votes.reduce((totalVotes, currentVote) => totalVotes += currentVote.up_or_down, 0);

export const getMostPopularTopics = getSortedTopics(compareTopicVotes);
