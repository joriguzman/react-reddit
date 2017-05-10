import { getMostPopularTopics, createTopic, getAllTopics } from './TopicDataAccess';

describe('TopicDataAccess', () => {
    it('returns top 20 topics sorted by popularity', () => {
        const mostPopularTopics = getMostPopularTopics(20);

        expect(mostPopularTopics).toHaveLength(20);
        expect(mostPopularTopics[0].topic_id).toBe(3);
        expect(mostPopularTopics[1].topic_id).toBe(2);
    });

    it('adds new topic', () => {
        const topic = 'New topic';
        const username = 'georgec';

        const newTopic = createTopic(topic, username);

        expect(newTopic.topic).toBe('New topic');
        expect(newTopic.topic_id).toBe(31);
        expect(newTopic.username).toBe('georgec');
        expect(newTopic.votes.length).toBe(1);
        expect(newTopic.votes[0].username).toBe('georgec');
        expect(newTopic.votes[0].up_or_down).toBe(1);
    });

    it('adds upvote to topic', () => {
        
    });
    
    it('add downvote to topic');
});