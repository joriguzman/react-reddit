import React from 'react';

const TopicItem = ({text, votes}) => {
    return (
        <li>
            {text} - {votes}
        </li>
    );
};

export default TopicItem;