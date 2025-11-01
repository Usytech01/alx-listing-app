import React from "react";

interface CardProps {
  image?: string;
  title: string;
  description?: string;
  price?: string | number;
  location?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  location,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}

        {location && (
          <p className="text-sm text-gray-400 mt-1">
            📍 {location}
          </p>
        )}

        {price && (
          <p className="text-base font-bold text-blue-600 mt-2">
            {typeof price === "number" ? `$${price}` : price}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
