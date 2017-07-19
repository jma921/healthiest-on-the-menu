import React from 'react';
import EmptyStar from './EmptyStar';
import FullStar from './FullStar';
import HalfStar from './HalfStar';

const StarRating = ({ stars, fill }) => {
  let halfStars = [];
  let fullStars = [];
  let emptyStars = [];
  for (let i = 0; i < stars - 1; i++) {
    fullStars.push(<FullStar key={i} fill={fill} />);
  }
  for (let i = 0; i < 5 - stars; i++) {
    emptyStars.push(<EmptyStar key={i} fill={fill} />);
  }
  //   for (let i = 0; i < 5 - halfStars.length(); i++) {
  //     emptyStars.push(<HalfStar fill={fill} />);
  //   }
  return (
    <div style={{ display: 'inline-block' }}>
      {fullStars}
      {emptyStars}
    </div>
  );
};

export default StarRating;
