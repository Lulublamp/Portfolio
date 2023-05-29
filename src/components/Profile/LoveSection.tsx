import React from 'react';
import LoveCard from './LoveCard';
import './Love.css'
import SkiIcon from '../Icon/SkiIcon';
import ArcheryIcon from '../Icon/ArcheryIcon';
import MathIcon from '../Icon/MathIcon';
import DesignIcon from '../Icon/DesignIcon';
import BookIcon from '../Icon/BookIcon';
import UnityIcon from '../Icon/UnityIcon';
import AiIcon from '../Icon/AiIcon';
import CatIcon from '../Icon/CatIcon';
import ChessIcon from '../Icon/ChessIcon';
import VideoGameIcon from '../Icon/VideoGameIcon';
import HeartIcon from '../Icon/HeartIcon';

const data = [
    { image: SkiIcon, altText: "", name: "Ski" },
    { image: ArcheryIcon, altText: "", name: "Tir à l’arc" },
    { image: MathIcon, altText: "", name: "Mathématique" },
    { image: DesignIcon, altText: "", name: "Design" },
    { image: BookIcon, altText: "", name: "Littérature" },
    { image: UnityIcon, altText: "", name: "Gamedev" },
    { image: AiIcon, altText: "", name: "IA" },
    { image: CatIcon, altText: "", name: "Chats" },
    { image: ChessIcon, altText: "", name: "Échecs" },
    { image: VideoGameIcon, altText: "", name: "Jeux-video" },
];

const LoveSection: React.FC = () => {
    return (
        <div className="love">
            <div>
                <span>What I love</span>
                <HeartIcon />
            </div>
            <div>
                {data.map((item, index) => (
                    <LoveCard key={index} image={item.image} altText={item.altText} name={item.name} />
                ))}
            </div>
        </div>
    );
}

export default LoveSection;
