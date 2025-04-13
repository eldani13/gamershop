"use client";

import React from "react";

interface GenreSelectorProps {
  selectedGenre: string;
  onGenreChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function GenreSelector({
  selectedGenre,
  onGenreChange,
}: GenreSelectorProps) {
  return (
    <div className="relative h-20 w-full mb-10">
      <div className="absolute top-0 left-0">
        <h2
          className="text-[#3B3B3B]"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "40px",
            letterSpacing: "0.4",
          }}
        >
          Top Sellers
        </h2>
      </div>

      <div className="absolute bottom-0 right-0 flex items-center space-x-2">
        <span
          className="text-[#3B3B3B]"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "0.4",
          }}
        >
          Genre
        </span>
        <div className="border-l h-5 border-gray-300"></div>
        <select
          id="genre"
          value={selectedGenre}
          onChange={onGenreChange}
          className="bg-transparent focus:outline-none text-[#3B3B3B]"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "0.4",
          }}
        >
          <option value="">All</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
          <option value="strategy">Strategy</option>
        </select>
      </div>
    </div>
  );
}
