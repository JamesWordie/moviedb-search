import React, { useState } from 'react';

// Styles
import { Wrapper, Content } from './Rate.styles';

const Rate = ({ onClick }) => {
  const [value, setValue] = useState(5);

  return (
    <Wrapper>
      <Content>
        <input
          type='range'
          min='1'
          max='10'
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
        />
        <span>{value}</span>
      </Content>
      <p>
        <button onClick={() => onClick(value)}>Rate</button>
      </p>
    </Wrapper>
  );
}

export default Rate;
