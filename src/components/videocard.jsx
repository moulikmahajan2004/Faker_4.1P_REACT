import React from 'react';
import './videocard.css';

const video_array = [
  {
    id: 1,
    link: 'https://picsum.photos/id/36/400/400',
    title: 'LEARN ELECTRONICS',
    text: 'WANNA MAKE YOUR HOME DESIGN TO REALITY SUBSCRIBE MY TUTORIAL',
    author: '⭐5 JAMES',
  },
  {
    id: 2,
    link: 'https://picsum.photos/id/49/400/400',
    title: 'LEARN ARCHITECTURE',
    text: 'WANNA MAKE YOUR HOME DESIGN TO REALITY SUBSCRIBE MY TUTORIAL',
    author: '⭐5 JAMES',
  },
  {
    id: 3,
    link: 'https://picsum.photos/id/57/400/400',
    title: 'LEARN PHOTOGRAPHY',
    text: 'WANNA MAKE THE BEST PHOTOGRAPH IN THE WORLD LEARN FROM THE WORLD CLASS PHOTOGRAPHERS',
    author: '⭐5 MARTIN',
  },
];

function Card({ link, title, text, author }) {
  return (
    <div className="column">
      <img className="one" src={link} alt="Video Thumbnail" />
      <h4 className="TEXT1">{title}</h4>
      <p className="desc">{text}</p>
      <p className="desc">{author}</p>
    </div>
  );
}

function videocard() {
  return (
    <>
      <div className="row">
        {video_array.map((video) => (
          <Card
            key={video.id}
            link={video.link}
            title={video.title}
            text={video.text}
            author={video.author}
          />
        ))}
      </div>
      <div className="button-conatiner">
        <button className="articles">See all Tutorials</button>
      </div>
    </>
  );
}

export default videocard;
