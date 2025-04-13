"use client";

import React from "react";

type GameCardProps = {
  game: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    genre: string;
    isNew: boolean;
  };
  onAddToCart: (game: any) => void;
};

const GameCard: React.FC<GameCardProps> = ({ game, onAddToCart }) => {
  return (
    <div className="rounded-xl border border-[#8F8F8F] bg-white p-4 flex flex-col items-center gap-3 w-full max-w-xs">
      <div className="relative w-full">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-48 object-cover rounded-tr-2xl rounded-tl-2xl"
        />
        {game.isNew && (
          <span className="absolute top-2 left-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-md">
            New
          </span>
        )}
      </div>

      <div className="w-full">
        <p className="text-xs text-[#737373] uppercase font-medium mb-1">
          {game.genre}
        </p>

        <div className="flex justify-between items-center w-full mb-2">
          <h2 className="text-sm font-semibold text-gray-800 truncate-text">
            {game.name}
          </h2>
          <p className="text-sm font-semibold text-gray-800">${game.price}</p>
        </div>

        <button
          onClick={() => onAddToCart(game)}
          className="w-full text-sm font-medium border border-[#3B3B3B] text-gray-800 rounded-md py-2 hover:bg-gray-100 transition-all uppercase"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default GameCard;
