import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Masonry from 'react-masonry-css';
import './Feed.css';
import ImageSki from '../Asset/Img/Ski.png';
import ImageSki2 from '../Asset/Img/Ski2.png';
import ImageSki3 from '../Asset/Img/Ski3.png';
import ImageSki4 from '../Asset/Img/Ski4.png';
import VideoSki from '../Asset/Mp4/ski.mp4';
import Archery from '../Asset/Img/Archey.png';
import Archery2 from '../Asset/Img/Archery2.png';
import GameJam from '../Asset/Img/GamJam_feed.png';

let zIndexCounter = 0;

type MediaType = 'image' | 'video';

type CardProps = {
  id: string,
  mediaSrc: string,
  mediaType: MediaType,
  title: string,
  date: string,
  index: number,
};

function pseudoRandom(seed : number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}


const Card: React.FC<CardProps> = ({ id, mediaSrc, mediaType, title, date, index }) => {
  const [zIndex, setZIndex] = useState(0);
  
  let marginTop;
  switch (index % 3) {
    case 0:
      marginTop = 40 - pseudoRandom(index + 1) * 20;
      console.log(marginTop);
      break;
    case 1:
      marginTop = 60 + pseudoRandom(index) * 20;
      break;
    case 2:
      marginTop = 40 - pseudoRandom(index + 1) * 200;
      break;
    default:
      marginTop = 0;
  }

  let marginLeft;
  const row = Math.floor(index / 3);
  if(row % 2 === 1)
    marginLeft = row * 20 + pseudoRandom(index) * 20; 
  
  const onStart = () => {
    zIndexCounter += 1;
    setZIndex(zIndexCounter);
  };

  const mediaElement = mediaType === 'image' ? (
    <img src={mediaSrc} alt={title} style={{ userSelect: 'none', pointerEvents: 'none' }} />
  ) : (
    <video src={mediaSrc} controls />
  );

  return (
    <Draggable onStart={onStart}>
      <div className="cardsFeed" style={{ zIndex, marginTop: `${marginTop}px`, marginLeft : `${marginLeft}px`}}>
        <div>
          <span>{title}</span>
          <span>{date}</span>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {mediaElement}
      </div>
    </Draggable>
  );
};

type CardData = {
  id: string,
  mediaSrc: string,
  mediaType: MediaType,
  title: string,
  date: string,
};

const initialData: CardData[] = [
  { id: 'card-1', mediaSrc: ImageSki, mediaType: 'image', title: 'Sommet1.png', date: '2023/05/04' },
  { id: 'card-2', mediaSrc: VideoSki, mediaType: 'video', title: `Val-d'Isère.mp4`, date: '2023/05/04' },
  { id: 'card-3', mediaSrc: ImageSki2, mediaType: 'image', title: 'Tignes.png', date: '2023/05/04' },
  { id: 'card-4', mediaSrc: ImageSki3, mediaType: 'image', title: 'Moniteur.png', date: '2023/05/04' },
  { id: 'card-5', mediaSrc: ImageSki4, mediaType: 'image', title: 'Ski_de_Rando.png', date: '2023/05/04' },
  { id: 'card-6', mediaSrc: Archery, mediaType: 'image', title: 'Oliver_Queen.png', date: '2023/05/04' },
  { id: 'card-7', mediaSrc: Archery2, mediaType: 'image', title: 'Train.png', date: '2023/05/04' },
  { id: 'card-8', mediaSrc: GameJam, mediaType: 'image', title: 'GamJam.png', date: '2023/05/04' },
];

const Feed: React.FC = () => {
  const [cards, setCards] = React.useState(initialData);

  const breakpointColumnsObj = {
    default: 3, 
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          mediaSrc={card.mediaSrc}
          mediaType={card.mediaType}
          title={card.title}
          date={card.date}
          index={index}
        />
      ))}
    </Masonry>
  );
};

export default Feed;
