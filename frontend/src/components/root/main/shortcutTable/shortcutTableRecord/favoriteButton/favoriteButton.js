// "use client";
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

// import "./favoriteButton.css"

// export default function FavoriteButton(favoriteVal) {
//   const [favorite, setFavorite] = useState(favoriteVal);

//   const toggleFavorite = () => {
//     setFavorite(!favorite);
//     console.log(!favorite);
//   };

//   return (
//     <FontAwesomeIcon 
//       icon={faHeart} 
//       className={(favorite) ? "favorite" : "non-favorite"}
//       onClick={toggleFavorite} 
//     />
//   );
// };

"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import "./favoriteButton.css"

export default function FavoriteButton({favoriteVal}) {

  const [favorite, setFavorite] = useState(favoriteVal);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    console.log(!favorite);
  };

  return (
    <FontAwesomeIcon 
      icon={faHeart} 
      className={favorite ? "favorite" : "non-favorite"}
      onClick={toggleFavorite} 
    />
  );
}
