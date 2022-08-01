import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <>
            {
                // this will create an array of objects and store it into a variable
                robots.map((user, i) => {
                    // Here I made it intecactive, so if my robots list goes bigger, will automatically add to the page
                    return (<Card
                        // Key is a props unique identifier for each cardArray element
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                    );
                })
            }

        </>
    );

}

export default CardList;