import React, { useState } from 'react';

// Styles
import { Wrapper, Content } from './Rate.styles';

// External Package
import StarRatings from 'react-star-ratings';

const Rate = ({ onClick }) => {
  // const [value, setValue] = useState(5);
  const [rating, setRating] = useState(0);

  const handleChange = (newRating, name) => {
    setRating(newRating);
  }

  return (
    <Wrapper>
      <Content>
        {/* <input
          type='range'
          min='1'
          max='10'
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
        />
        <span>{value}</span> */}
        <StarRatings
          rating={rating}
          changeRating={handleChange}
          name='rating'
          numberOfStars={5}
          starRatedColor='rgb(241, 199, 47'
          starEmptyColor='#eee'
          starHoverColor='rgb(241, 199, 47'
          starDimension='30px'
          starSpacing='2px'
        />
      </Content>
      <p>
        <button onClick={() => onClick(rating)}>Rate</button>
      </p>
    </Wrapper>
  );
}

export default Rate;
