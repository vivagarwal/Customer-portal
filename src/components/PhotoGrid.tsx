import React from 'react';

interface PhotoGridProps {
  photos: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          className="w-24 h-24 object-cover" // Adjusted size
        />
      ))}
    </div>
  );
};

export default React.memo(PhotoGrid);
