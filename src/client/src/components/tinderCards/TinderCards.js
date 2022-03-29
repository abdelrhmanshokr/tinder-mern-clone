import react, { useState } from 'react';
import TinderCard from 'react-tinder-card';

import classes from './TinderCards.module.css';

function TinderCards(){
    // to store identity of every person in the cards we use useState
    const [ people, setPeople ] = useState([
        {
            name: 'Elon musk',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
        },
        {
            name: 'jeff bezos',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
        }
    ]); 

    // creating the two function used in tinder card component below
    const swipe = (direction, nameToDelete) => {
        console.log(`Removing: ${nameToDelete}`);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(`${name} left the screen`);
    }

    // the .map function is not working for some reason it needs to be checked again
    // for now let's just work on a static item the first item in the people array
    return(
        <div className={classes.tinderCards}>
            <div className={classes.tinderCard__container}>
                {   
                    <TinderCard
                        className={classes.swipe}
                        key={people[0].name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => {swipe(dir, people[0].name)}}
                        onCardLeftScreen={() => {outOfFrame(people[0].name)}}
                    >
                        <div
                            style={{ backgroundImage: `url(${people[0].imageUrl})` }}
                            className={classes.card}
                        >
                            <h3>{people[0].name}</h3>
                        </div>
                    </TinderCard>

                    // people.map((person) => {
                    //     <h1>{person.name}</h1>
                    // })
                    // console.log(people.length)
                }
            </div>
        </div>
    );
}

export default TinderCards;