"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import "./favoriteButton.css"

export default function FavoriteButton() {

  const [favorite, setFavorite] = useState(false);

  const toggleFovorite = () => {
    setFavorite(!favorite);
  };

  return (
    <FontAwesomeIcon 
      icon={faHeart} 
      className={favorite ? "favorite" : "non-favorite"}
      onClick={toggleFovorite} 
    />
  );
};

