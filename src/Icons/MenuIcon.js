import React from 'react';

const MenuIcon = ({ handleClick }) => (
  <svg onClick={handleClick} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H22V2H0V0ZM0 9H22V11H0V9ZM0 18H22V20H0V18Z" fill="black" />
  </svg>
);

export default MenuIcon;
