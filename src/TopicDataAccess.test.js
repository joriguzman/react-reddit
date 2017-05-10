import * as Topic from './TopicDataAccess';

describe('TopicDataAccess', () => {
    it('returns top 20 topics sorted by popularity', () => {
        const mostPopularTopics = Topic.getMostPopularTopics(20);

        expect(mostPopularTopics).toHaveLength(20);
        expect(mostPopularTopics[0].topicId).toBe(3);
        expect(mostPopularTopics[1].topicId).toBe(2);
    });

    it('adds new topic', () => {
        const allTopics = Topic.getAllTopics();
        expect(allTopics.length).toBe(30);

        const topic = 'New topic';
        const username = 'georgec';

        const newTopic = Topic.createTopic(topic, username);

        const allTopicsWithNew = Topic.getAllTopics();
        expect(allTopicsWithNew.length).toBe(31);

        expect(newTopic.topic).toBe('New topic');
        expect(newTopic.topicId).toBe(31);
        expect(newTopic.username).toBe('georgec');
        expect(newTopic.votes.length).toBe(1);
        expect(newTopic.votes[0].username).toBe('georgec');
        expect(newTopic.votes[0].upOrDown).toBe(1);
    });

    it('adds upvote to topic', () => {
        const topicId = 1;
        const username = 'manuginobili20';
        const topic = Topic.findTopic(topicId);
        expect(topic.votes.length).toBe(6);

        Topic.addVote(topicId, 1, username);

        const upvotedTopic = Topic.findTopic(topicId);
        expect(upvotedTopic.votes.length).toBe(7);
        expect(upvotedTopic.votes[6].username).toBe('manuginobili20');
        expect(upvotedTopic.votes[6].upOrDown).toBe(1);
    });

    it('add downvote to topic', () => {
        const topicId = 2;
        const username = 'manuginobili20';
        const topic = Topic.findTopic(topicId);
        expect(topic.votes.length).toBe(6);

        Topic.addVote(topicId, -1, username);

        const downVotedTopic = Topic.findTopic(topicId);
        expect(downVotedTopic.votes.length).toBe(7);
        expect(downVotedTopic.votes[6].username).toBe('manuginobili20');
        expect(downVotedTopic.votes[6].upOrDown).toBe(-1);
    });

    it('returns total votes', () => {
        const topicId = 3;
        const topic = Topic.findTopic(topicId);
        const totalVotes = Topic.getTotalVotes(topic);

        expect(totalVotes).toBe(6);
    });
});