import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id:1,
        title: 'Fazt Web',
        image: image1
    },
    {
        id:2,
        title: 'Fazt Blog',
        image: image2
    },
    {
        id:3,
        title: 'Fazt App',
        image: image3
    },
]

export default function Cards() {
    return (
        <div className="container d-flex justify-content-center vh-100 align-items-center">
            <div className="row">
                {
                    cards.map(card=>(
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}
