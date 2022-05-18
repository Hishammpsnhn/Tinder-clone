import React, { useState } from 'react'
import './TinderCard.css'
import TinderCard from 'react-tinder-card'
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'hisham',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
        },
        {
            name: 'newhisham',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mohammed_Rafi_2016_postcard_of_India_crop-flip.jpg/220px-Mohammed_Rafi_2016_postcard_of_India_crop-flip.jpg'
        }
    ])
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='tindercards'>
            <div className="tindercards__cardContaner">
                {
                    people.map((person) => {
                        return (

                            <TinderCard
                                className='swipe'
                                onSwipe={onSwipe}
                                key={person.name}
                                onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                                preventSwipe={['up', 'down']}>
                                <div
                                    style={{ backgroundImage: `url(${person.url})` }}
                                    className='card' >
                                    <h3>{person.name}</h3>
                                </div>
                            </TinderCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TinderCards