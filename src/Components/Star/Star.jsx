import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className='rating' />
        ) : stars >= number ? (
          <FaStarHalfAlt className='rating' />
        ) : (
          <AiOutlineStar className='rating' />
        )}
      </span>
    );
  });

  return (
    <div className='rating-style'>
      {ratingStar}
      <p className='review'>({reviews}customer reviews)</p>
    </div>
  );
};

export default Star;
