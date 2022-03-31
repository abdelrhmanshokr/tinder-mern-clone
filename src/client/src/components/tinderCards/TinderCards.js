import react, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

import classes from './TinderCards.module.css';
import axios from '../../axios/axios.js';

function TinderCards(){
    // to store identity of every person in the cards we use useState
    const [people, setPeople] = useState(null);
    
    // using the useEffect and passing an empty array so it runs only when the page is loaded
    // only once 
    useEffect(() => {
        // here we will create an aasync function
        async function fetchData(){
            try{
                const req = await axios.get('/api/cards');
                console.log(req.data);
                // using setPeople which is a state modifier to req.data
                setPeople(req.data);
            }catch(err){
                console.log(err.message);
            }

        }

        fetchData();
    }, []);
    
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
                    !people ? (<h2> loading people </h2>) : (
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
                    )

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