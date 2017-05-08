import { getMostPopularTopics } from './Topic';

const jsonData = require('./database.json');

describe('Topic', () => {
    it('returns top 20 topics sorted by popularity', () => {
        const allTopics = jsonData.topics;
        const get20MostPopularTopics = getMostPopularTopics(20);
        const mostPopularTopics = get20MostPopularTopics(allTopics);

        expect(mostPopularTopics).toHaveLength(20);
        expect(mostPopularTopics[0].topic).toBe('Why Netflix Is Winning the Online Piracy Wars');
    });
    
    it('adds new topic with one upvote');
    it('adds upvote to topic');
    it('add downvote to topic');
});