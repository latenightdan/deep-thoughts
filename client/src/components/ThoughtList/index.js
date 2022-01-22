import React from 'react';
//you use Link because <a href> causes a refresh, which you DON'T WANT
import { Link } from 'react-router-dom';
//imports the thought data that may or may not be getting fetched
const ThoughtList = ({ thoughts, title }) => {
    //checks if it picks up the data
    if (!thoughts.length) {
        return <h3> No Thoughts...YET </h3>
    }
    return (
        <div>

            <h3> {title} </h3>
            {thoughts &&
                thoughts.map(thought => (
                    <div key={thought._id} className="card mb-3">
                        <p className='card-header'>
                            <Link to={`/profile/${thought.username}`}
                                style={{ fontWeight: 700 }}
                                className="text-light" >
                                {thought.username}
                            </Link>


                            thought on {thought.createdAt}
                        </p>
                        <div className="card-body">

                            <Link to = {`/thought/${thought._id}`}>
                            <p>{thought.thoughtText}</p>
                            <p className="mb-0">

                                Reactions: {thought.reactionCount} || click to {' '}
                                {thought.reactionCount ? 'see' : 'start'} the talk
                            </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};
// this is how you conditionally render strings. if there are no reactions you get start the talk
// Reactions: {thought.reactionCount} || click to {' '}
// {thought.reactionCount ? 'see' : 'start'} the talk
export default ThoughtList; 