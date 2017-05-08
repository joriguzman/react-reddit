import { getMostPopularTopics } from './Topic';

const jsonData = require('./database.json');

describe('Topic', () => {
    it('returns top 20 topics sorted by popularity', () => {
        const get20MostPopularTopics = getMostPopularTopics(20);
        const mostPopularTopics = get20MostPopularTopics(jsonData.topics);

        expect(mostPopularTopics).toHaveLength(20);
        expect(mostPopularTopics[0].topic_id).toBe(3);
        expect(mostPopularTopics[1].topic_id).toBe(2);
    });

    it('adds new topic with one upvote');
    it('adds upvote to topic');
    it('add downvote to topic');
});