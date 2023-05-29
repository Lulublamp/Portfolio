import React from 'react';
import './ProfileCard.css'

type ProfileCardProps = {
    year: string;
    title: string;
    svgIcon: React.FC;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ year, title, svgIcon : SvgIcon }) => (
    <div className="ProfileCard">
        <div>
            <span>{year}</span>
            <h3>{title}</h3>
        </div>
        <div>
            <SvgIcon />
        </div>
    </div>
);

export default ProfileCard;
