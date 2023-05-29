import React from 'react';

interface LoveCardProps {
    image: React.FC;
    altText: string;
    name: string;
}

const LoveCard: React.FC<LoveCardProps> = ({ image : Icon, altText, name }) => {
    return (
        <div>
            <Icon />
            <span>{name}</span>
        </div>
    );
}

export default LoveCard;
