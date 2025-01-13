import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg border border-gray-300">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 break-words overflow-wrap-anywhere">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 break-words">
          {description}
        </p>
        {onClick && (
          <Button
            onClick={onClick}
            label="Click me"
            size='small'
          />
        )}
      </div>
    </div>
  );
};

export default Card;