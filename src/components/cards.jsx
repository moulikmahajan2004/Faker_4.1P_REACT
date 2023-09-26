import React from 'react';
import './card.css';


const cardData = [
  {
    id: 1,
    imgUrl: 'https://picsum.photos/id/91/400/400',
    title: 'ART OF PHOTO',
    description: 'Photography is the technique required by every individual to capture the time many layman capture their precious moments',
    rating: '⭐5 ALEX'
  },
  {
    id: 2,
    imgUrl: 'https://picsum.photos/id/99/400/400',
    title: 'OLD ASTHETICS',
    description: 'Today\'s generation is not growing as they are rookie in the real world and does not know about the struggle they need to know how the villagers do hard work',
    rating: '⭐5 ELON MUSK'
  },
  {
    id: 3,
    imgUrl: 'https://picsum.photos/id/88/400/400',
    title: "90's suburb",
    description: 'Urbanization is the need of today\'s generation without this not a single user is able to go through the',
    rating: '⭐5 STEPHEN'
  }
];

function Card({ imgUrl, title, description, rating }) {
  return (
    <div className="column">
      <img className="one" src={imgUrl} alt={title} />
      <h2 className="TEXT">{title}</h2>
      <p className="desc">{description}</p>
      <p className="desc">{rating}</p>
    </div>
  );
}

function Cards() {
  return (
    <>
      <div className="row">
        {cardData.map((card) => (
          <Card
            key={card.id}
            imgUrl={card.imgUrl}
            title={card.title}
            description={card.description}
            rating={card.rating}
          />
        ))}
      </div>
      <div className="button-conatiner">
        <button className="articles">See all Articles</button>
      </div>
      <h1 className="ARTICLES">FEATURED TUTORIALS</h1>
    </>
  );
}

export default Cards;
