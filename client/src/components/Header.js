import React from 'react';
import styled from 'styled-components/macro';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  background: linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9)
  );
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  box-shadow: 0px 1px 5px 0px #777;

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 40px;
    }

    span {
      color: #111;
      margin: 0 1rem;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className='logo'>
        <img
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/nyt-logo.png'
          id='nyt-logo'
        />
        <span>Best Sellers List</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
