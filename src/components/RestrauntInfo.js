import React from 'react';
import StarRating from './StarRating';
import './RestrauntInfo.css';

const RestrauntInfo = ({ restraunt }) => {
  console.log(restraunt);
  return (
    <div>
      <h2>
        <a className="restraunt-info-link" href={restraunt.website}>
          {restraunt.name}
        </a>
      </h2>
      <p>
        <a className="restraunt-info-link" href={restraunt.url}>
          {restraunt.formatted_address}
        </a>
      </p>
      <p>
        <a
          rel="nofollow"
          className="restraunt-info-link"
          href={`tel:1${restraunt.international_phone_number}`}
        >
          {restraunt.formatted_phone_number}
        </a>
      </p>
      <StarRating stars={restraunt.rating} fill="#2ecc71" />
    </div>
  );
};

export default RestrauntInfo;
