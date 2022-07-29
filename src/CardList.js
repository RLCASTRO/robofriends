import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <>
            {

                // this will create an array of objects and store it into a variable
               robots.map((user, i) => {
                    // Here I made it intecactive, so if my robots list goes bigger, will automatically add to the page
                    return ( <Card
                            // Key is a props unique identifier for each cardArray element
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                        );
                })
            }

            {/* First I hard coded the robots */}
            {/* <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
            <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} />
            <Card id={robots[4].id} name={robots[4].name} email={robots[4].email} /> */}
        </>
    );

}

export default CardList;