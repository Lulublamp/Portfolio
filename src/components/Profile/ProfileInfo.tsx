import React from 'react';
import './ProfileInfo.css'

interface ProfileProps {
  imageUrl: string;
  altText: string;
  description: string;
}

const ProfileInfo: React.FC<ProfileProps> = ({ imageUrl, altText, description }) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
