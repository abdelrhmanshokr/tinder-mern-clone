import react, { useState } from 'react';

import classes from './TinderCards.module.css';

function TinderCard(){
    // to store identity of every person in the cards we use useState
    const [ people, setPeople ] = useState([
        {
            name: 'Elon musk',
            // a url for the profile image
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
        }
    ]); 

    return(
        <div className={classes.tinderCard}>
            {
                people.map(person => {
                    <h1>{ person.name }</h1>
                })
            }
        </div>
    );
}

export default TinderCard;